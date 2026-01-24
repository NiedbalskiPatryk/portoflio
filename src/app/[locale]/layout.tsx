import { routing } from "@/i18n/routing";
import { ThemeRegistry } from "@/theme";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://itpapi.pl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(BASE_URL),
    authors: [{ name: "Patryk Niedbalski" }],
    creator: "Patryk Niedbalski",
    publisher: "Patryk Niedbalski",
    keywords: [
      "Software Engineer",
      "Full-stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Web Development",
      "Warsaw",
      "Poland",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      url: BASE_URL,
      siteName: "Patryk Niedbalski",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Patryk Niedbalski - Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        pl: `${BASE_URL}/pl`,
      },
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

// Inline script to prevent flash of wrong theme
const themeScript = `
(function() {
  try {
    var mode = localStorage.getItem('theme-mode');
    var isDark = mode !== 'light';
    var bg = isDark ? '#0a0a0a' : '#ffffff';
    var d = document.documentElement;
    d.style.setProperty('--initial-bg', bg);
    d.style.backgroundColor = bg;
    d.classList.add(isDark ? 'dark' : 'light');
  } catch (e) {}
})();
`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pl")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
