"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";
import type { ContactInfoItemProps } from "@/components/molecules/ContactInfoItem";
import { useTranslations } from "next-intl";

export interface ContactInfoProps {
  heading?: string;
  description?: string;
  items: ContactInfoItemProps[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ heading, description, items }) => {
  const t = useTranslations("contact.info");
  const resolvedHeading = heading ?? t("heading");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: { xs: 3, sm: 4 },
        borderRadius: 0,
        border: "1px solid",
        borderColor: "divider",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? `linear-gradient(120deg, ${theme.palette.surface.gradientStart} 0%, ${theme.palette.surface.gradientMid} 45%, ${theme.palette.surface.gradientEnd} 100%)`
            : theme.palette.background.paper,
        boxShadow:
          "0 16px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h4" color="text.primary">
          {resolvedHeading}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      <Stack spacing={2.5}>
        {items.map((item) => (
          <ContactInfoItem
            key={`${item.label}-${item.value}`}
            label={item.label}
            value={item.value}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ContactInfo;
