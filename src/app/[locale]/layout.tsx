import { routing } from "@/i18n/routing";
import { CookieConsent } from "@/components/organisms";
import { ThemeRegistry } from "@/theme";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import {
  Bricolage_Grotesque,
  Caveat,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Display face for h1-h3 (B++ signature).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: ["600", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Handwriting for the decorative HandNote atom.
const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const BASE_URL = "https://www.itpapi.pl";

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
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        pl: `${BASE_URL}/pl`,
      },
    },
  };
}

const BASE_URL_CLIENT = "https://www.itpapi.pl";

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
      </head>
      <body
        className={`${instrumentSans.variable} ${jetbrainsMono.variable} ${bricolage.variable} ${caveat.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            {children}
            <CookieConsent />
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
