import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export const runtime = "nodejs";

const RESEND_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 3000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const MAX_LENGTH = {
  fullName: 100,
  email: 254,
  phone: 40,
  subject: 150,
  message: 5000,
} as const;

type Field = keyof typeof MAX_LENGTH;
const REQUIRED_FIELDS: Field[] = ["fullName", "email", "message"];

// Best-effort, per-instance rate limit (serverless instances do not share memory).
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function sendEmail(
  apiKey: string,
  payload: Record<string, unknown>
): Promise<string | undefined> {
  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Resend ${response.status}: ${await response.text()}`);
  }

  const data = (await response.json().catch(() => ({}))) as { id?: string };
  return data.id;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const read = (key: string): string => {
    const value = form.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  // Bot checks: pretend success so bots get no signal.
  const elapsedMs = Number(read("elapsedMs"));
  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_TIME_MS) {
    console.info(`[contact] Dropped as bot: filled too fast (elapsedMs=${read("elapsedMs")})`);
    return Response.json({ ok: true });
  }

  const values = {
    fullName: read("fullName"),
    email: read("email"),
    phone: read("phone"),
    subject: read("subject"),
    message: read("message"),
  };

  const invalidFields = (Object.keys(MAX_LENGTH) as Field[]).filter(
    (field) =>
      values[field].length > MAX_LENGTH[field] ||
      (REQUIRED_FIELDS.includes(field) && values[field] === "")
  );
  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    invalidFields.push("email");
  }
  if (invalidFields.length > 0) {
    return Response.json(
      { error: "validation", fields: [...new Set(invalidFields)] },
      { status: 400 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const requestedLocale = read("locale");
  const locale = routing.locales.includes(requestedLocale as "en" | "pl")
    ? requestedLocale
    : routing.defaultLocale;

  const name = singleLine(values.fullName);
  const subjectLine = singleLine(values.subject) || "Nowe zapytanie";

  const ownerText = [
    `Imię: ${values.fullName}`,
    `E-mail: ${values.email}`,
    `Telefon: ${values.phone || "-"}`,
    `Temat: ${values.subject || "-"}`,
    `Język strony: ${locale}`,
    "",
    values.message,
  ].join("\n");

  const ownerHtml = `
    <p><strong>Imię:</strong> ${escapeHtml(values.fullName)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(values.email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(values.phone || "-")}</p>
    <p><strong>Temat:</strong> ${escapeHtml(values.subject || "-")}</p>
    <p><strong>Język strony:</strong> ${escapeHtml(locale)}</p>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(values.message)}</p>
  `;

  try {
    const ownerEmailId = await sendEmail(apiKey, {
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject: `[itpapi] ${subjectLine} - ${name}`.slice(0, 200),
      text: ownerText,
      html: ownerHtml,
    });
    console.info(`[contact] Owner notification sent (resend id: ${ownerEmailId})`);
  } catch (error) {
    console.error("[contact] Owner notification failed", error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  // Auto-reply contains ONLY fixed text - never user input - so the endpoint
  // cannot be abused to send arbitrary content to third-party addresses.
  try {
    const t = await getTranslations({ locale, namespace: "contactEmail.autoReply" });
    const autoReplyId = await sendEmail(apiKey, {
      from: fromEmail,
      to: [values.email],
      reply_to: toEmail,
      subject: t("subject"),
      text: [t("greeting"), "", t("body"), "", t("signature")].join("\n"),
    });
    console.info(`[contact] Auto-reply sent (resend id: ${autoReplyId})`);
  } catch (error) {
    console.error("[contact] Auto-reply failed", error);
  }

  return Response.json({ ok: true });
}
