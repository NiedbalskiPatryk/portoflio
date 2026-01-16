"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
}

const Footer: React.FC<FooterProps> = ({
  name,
  description,
  socialLinks,
  navHeading = "Menu",
  contactHeading = "Contact me",
  navItems,
  contactItems,
  copyright,
}) => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 8 },
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 6 },
          }}
        >
          <Box sx={{ pr: { md: 4 } }}>
            <FooterIdentity
              name={name}
              description={description}
              socialLinks={socialLinks}
            />
          </Box>

          <Box
            sx={{
              pl: { md: 4 },
              borderLeft: { md: "1px solid" },
              borderColor: { md: "divider" },
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              {contactHeading}
            </Typography>
            <ContactBlock items={contactItems} />
          </Box>

          <Box
            sx={{
              pl: { md: 4 },
              borderLeft: { md: "1px solid" },
              borderColor: { md: "divider" },
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              {navHeading}
            </Typography>
            <FooterNav items={navItems} />
          </Box>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mt: { xs: 3, md: 4 },
            pt: { xs: 3, md: 4 },
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          {copyright}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
