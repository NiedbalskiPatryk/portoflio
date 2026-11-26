"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Script from "next/script";
import Link from "@mui/material/Link";
import { useLocale, useTranslations } from "next-intl";

const STORAGE_KEY = "cookie-consent";
const GA_ID = "G-8Z9E33KK05";

type Choice = "accepted" | "rejected" | null;

// True once GA was loaded in this page session (stays true after the choice is reopened).
let gaLoaded = false;

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function deleteGaCookies() {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");
  const parentDomain = parts.length > 2 ? parts.slice(-2).join(".") : hostname;
  const domains = [hostname, `.${hostname}`, `.${parentDomain}`];
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) return;
    // No domain attribute removes host-only cookies; the rest cover domain cookies.
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    });
  });
}

export function openCookieSettings() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  listeners.forEach((cb) => cb());
}

function getSnapshot(): Choice {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    return null;
  }
}

// Server / hydration snapshot: undefined means "not mounted yet", render nothing.
function getServerSnapshot(): Choice | undefined {
  return undefined;
}

export default function CookieConsent() {
  const t = useTranslations("consent");
  const locale = useLocale();
  const choice = useSyncExternalStore<Choice | undefined>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const save = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    if (value === "rejected" && gaLoaded) {
      // gtag is already running in this page; clear its cookies and reload so it stops.
      deleteGaCookies();
      window.location.reload();
      return;
    }
    listeners.forEach((cb) => cb());
  };

  useEffect(() => {
    if (choice === "accepted") gaLoaded = true;
  }, [choice]);

  if (choice === undefined) return null;

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {choice === null && (
        <Box
          role="dialog"
          aria-live="polite"
          aria-label={t("text")}
          sx={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            zIndex: (theme) => theme.zIndex.snackbar,
            maxWidth: 480,
            p: 2,
            borderRadius: 0,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            color: "text.primary",
            boxShadow: 6,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Typography variant="body2">
            {t("text")}{" "}
            <Link href={`/${locale}/privacy`} color="inherit" underline="always">
              {t("privacyLink")}
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => save("accepted")}
              sx={{ borderRadius: 0 }}
            >
              {t("accept")}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => save("rejected")}
              sx={{ borderRadius: 0 }}
            >
              {t("reject")}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
