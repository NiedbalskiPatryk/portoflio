"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";
import type { ContactInfoItemProps } from "@/components/molecules/ContactInfoItem";
import { useTranslations } from "next-intl";

export interface ContactInfoProps {
  heading?: string;
  description?: string;
  items: ContactInfoItemProps[];
}

// Compact direct-contact block shown under the form.
const ContactInfo: React.FC<ContactInfoProps> = ({ heading, description, items }) => {
  const t = useTranslations("contact.info");
  const resolvedHeading = heading ?? t("heading");

  return (
    <Box
      component="section"
      aria-label={resolvedHeading}
      sx={{ display: "flex", flexDirection: "column", gap: "1rem", px: { xs: 0, sm: "0.5rem" } }}
    >
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1.25rem 1.5rem",
        }}
      >
        {items.map((item) => (
          <Box component="li" key={`${item.label}-${item.value}`} sx={{ minWidth: 0 }}>
            <ContactInfoItem label={item.label} value={item.value} href={item.href} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContactInfo;
