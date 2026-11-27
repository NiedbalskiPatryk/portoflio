"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";
import { openCookieSettings } from "@/components/organisms/CookieConsent/CookieConsent";
import ContactBlock, {
  type FooterContactItem,
} from "@/components/molecules/ContactBlock";
import FooterIdentity from "@/components/molecules/FooterIdentity";
import FooterNav, {
  type FooterNavItem,
} from "@/components/molecules/FooterNav";

export interface FooterProps {
  name: string;
  description?: string;
  socialLinks?: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  navHeading?: string;
  contactHeading?: string;
  navItems: FooterNavItem[];
  contactItems: FooterContactItem[];
  copyright: string;
  /** Tax ID (NIP) shown next to the copyright line. */
  taxId?: string;
}

const linkFocus = {
  "&:focus-visible": {
    outline: "2px solid #111111",
    outlineOffset: "2px",
    borderRadius: "4px",
  },
};

const Footer: React.FC<FooterProps> = ({
  name,
  description,
  socialLinks,
  navHeading = "Menu",
  contactHeading = "Contact me",
  navItems,
  contactItems,
  copyright,
  taxId,
}) => {
  const t = useTranslations("footer");
  const locale = useLocale();

  const headingSx = {
    fontSize: "0.78rem",
    lineHeight: 1.4,
    color: "text.secondary",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    mb: 2,
  } as const;

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          mx: "auto",
          px: "1.5rem",
          py: { xs: "3rem", md: "4rem" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)",
            },
            gap: { xs: "2rem", md: "3rem" },
          }}
        >
          <FooterIdentity
            name={name}
            description={description}
            socialLinks={socialLinks}
          />

          <Box>
            <Typography component="h2" sx={headingSx}>
              {contactHeading}
            </Typography>
            <ContactBlock items={contactItems} />
          </Box>

          <Box>
            <Typography component="h2" sx={headingSx}>
              {navHeading}
            </Typography>
            <FooterNav items={navItems} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem 1.5rem",
            mt: { xs: "2.5rem", md: "3rem" },
            pt: "1.5rem",
            borderTop: "1px solid",
            borderColor: "divider",
            fontSize: "0.85rem",
            color: "text.secondary",
          }}
        >
          <Typography variant="caption" color="text.secondary" component="p" sx={{ m: 0 }}>
            {copyright}
            {taxId ? ` · ${t("taxId", { value: taxId })}` : ""}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.25rem" }}>
            <Link
              href={`/${locale}/privacy`}
              variant="caption"
              color="text.secondary"
              sx={linkFocus}
            >
              {t("privacyLink")}
            </Link>
            <Link
              component="button"
              type="button"
              variant="caption"
              color="text.secondary"
              onClick={openCookieSettings}
              sx={linkFocus}
            >
              {t("cookieSettings")}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
