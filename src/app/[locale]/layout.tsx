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
import { cookies } from "next/headers";
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

  const keywordsEn = [
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Web Development",
    "Freelance Developer",
    "Warsaw",
    "Poland",
    "Web App Development",
    "Frontend Developer",
    "Backend Developer",
  ];

  const keywordsPl = [
    "Programista",
    "Programista Full-Stack",
    "Programista React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tworzenie stron internetowych",
    "Tworzenie aplikacji webowych",
    "Freelancer IT",
    "Warszawa",
    "Polska",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Warszawa",
  ];

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(BASE_URL),
    authors: [{ name: "Patryk Niedbalski" }],
    creator: "Patryk Niedbalski",
    publisher: "Patryk Niedbalski",
    keywords: locale === "pl" ? keywordsPl : keywordsEn,
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

const BASE_URL_CLIENT = "https://itpapi.pl";

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Patryk Niedbalski",
  url: BASE_URL_CLIENT,
  jobTitle: "Full-Stack Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warsaw",
    addressCountry: "PL",
  },
  sameAs: [
    "https://github.com/NiedbalskiPatryk",
    "https://www.linkedin.com/in/patryk-niedbalski/",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "SEO",
    "Web Performance",
  ],
  offers: {
    "@type": "Offer",
    description: "Freelance and contract web development services",
    areaServed: "Worldwide",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL_CLIENT,
  name: "Patryk Niedbalski — Full-Stack Developer",
  author: {
    "@type": "Person",
    name: "Patryk Niedbalski",
  },
};

// Inline script to prevent flash of wrong theme
const themeScript = `
(function() {
  try {
    var cookieMatch = document.cookie.match(/(?:^|; )theme-mode=([^;]+)/);
    var cookieMode = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
    var storedMode = localStorage.getItem('theme-mode');
    var mode = cookieMode || storedMode;
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
  const themeCookie = (await cookies()).get("theme-mode")?.value;
  const initialMode = themeCookie === "light" ? "light" : "dark";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Structured data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        {/* Structured data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8Z9E33KK05" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8Z9E33KK05');` }} />
      </head>
      <body className={jetbrainsMono.variable}>

        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry initialMode={initialMode}>{children}</ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
