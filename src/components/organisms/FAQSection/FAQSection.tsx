"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
  return (
    <Box
      component="section"
      id="faqs"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
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
            {heading}
          </Typography>
          {subheading && (
            <Typography variant="body2" color="text.secondary">
              {subheading}
            </Typography>
          )}
        </Box>

        <Box sx={{ width: "100%" }}>
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
