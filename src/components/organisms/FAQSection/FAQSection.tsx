"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SectionTab } from "@/components/atoms";
import { useTranslations } from "next-intl";
import FAQList from "@/components/organisms/FAQList";
import type { FAQItemData } from "@/components/organisms/FAQList";

export interface FAQSectionProps {
  heading: string;
  subheading?: string;
  items: FAQItemData[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  heading,
  subheading,
  items,
  allowMultiple = true,
  defaultExpandedIds,
}) => {
  const tTabs = useTranslations("sectionTabs");

  return (
    <Box component="section" id="faqs" aria-labelledby="faq-heading">
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          py: { xs: "3rem", md: "4rem" },
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "minmax(0, 4fr) minmax(0, 8fr)",
          },
          gap: { xs: "1.5rem", md: "3rem" },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            position: { md: "sticky" },
            top: { md: "6rem" },
          }}
        >
          <SectionTab label={tTabs("faq")} sx={{ mb: "0.5rem" }} />
          <Typography
            id="faq-heading"
            variant="h2"
            component="h2"
            sx={{ m: 0, fontSize: { xs: "2.25rem", md: "3rem" } }}
          >
            {heading}
          </Typography>
          {subheading && (
            <Typography sx={{ m: 0, color: "text.secondary", fontSize: "1.1rem" }}>
              {subheading}
            </Typography>
          )}
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <FAQList
            items={items}
            allowMultiple={allowMultiple}
            defaultExpandedIds={defaultExpandedIds}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
