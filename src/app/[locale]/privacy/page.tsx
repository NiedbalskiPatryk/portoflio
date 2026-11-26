import { Footer, Header } from "@/components";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

const SECTION_KEYS = [
  "controller",
  "data",
  "legalBasis",
  "recipients",
  "transfers",
  "retention",
  "rights",
  "voluntary",
  "automated",
  "cookies",
] as const;

const LINKEDIN_URL = "https://www.linkedin.com/in/patryk-niedbalski/";
const EMAIL = "patrykitpapi@gmail.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: { index: true },
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { pl: "/pl/privacy", en: "/en/privacy" },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });

  const footerData = {
    name: "Patryk Niedbalski",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/NiedbalskiPatryk",
      },
      { id: "linkedin", label: "LinkedIn", href: LINKEDIN_URL },
    ],
    contactHeading: t("footer.contactHeading"),
    navHeading: t("footer.navHeading"),
    navItems: [
      { id: "home", label: t("nav.home"), href: `/${locale}#home` },
      { id: "services", label: t("nav.services"), href: `/${locale}#services` },
      { id: "projects", label: t("nav.projects"), href: `/${locale}#projects` },
      { id: "about", label: t("nav.about"), href: `/${locale}#about` },
      { id: "faqs", label: t("nav.faq"), href: `/${locale}#faqs` },
    ],
    contactItems: [
      {
        id: "email",
        label: t("contact.info.email"),
        value: EMAIL,
        href: `mailto:${EMAIL}`,
      },
      {
        id: "address",
        label: t("contact.info.address"),
        value: t("contact.info.addressValue"),
      },
    ],
    copyright: `© 2026 Patryk Niedbalski. ${t("footer.copyright")}`,
  };

  return (
    <>
      <Header />
      <Box component="main" sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 6, md: 10 }, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Link href={`/${locale}`} variant="body2" color="text.secondary">
            {t("privacy.backToHome")}
          </Link>

          <Box sx={{ mt: 3, mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h1"
              component="h1"
              color="text.primary"
              sx={{
                fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 1,
                "&::before": {
                  content: '"> "',
                  color: "text.secondary",
                  marginRight: 1,
                },
              }}
            >
              {t("privacy.heading")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t("privacy.intro")}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1 }}
            >
              {t("privacy.lastUpdated")}
            </Typography>
          </Box>

          {SECTION_KEYS.map((key) => (
            <Box component="section" key={key} sx={{ mb: { xs: 4, md: 5 } }}>
              <Typography
                variant="h2"
                component="h2"
                color="text.primary"
                sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, fontWeight: 700, mb: 1.5 }}
              >
                {t(`privacy.sections.${key}.heading`)}
              </Typography>
              {t(`privacy.sections.${key}.body`)
                .split("\n\n")
                .map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1.5, lineHeight: 1.7 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
            </Box>
          ))}
        </Container>
      </Box>
      <Footer {...footerData} />
    </>
  );
}
