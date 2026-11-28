"use client";

import { HEADER_HEIGHT } from "@/components/organisms/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

export interface ServicesSectionProps {
  heading?: string;
}

const SERVICE_KEYS = ["frontend", "backend", "automation", "performance"] as const;

// Services as a typographic list (title | description rows), not a card grid.
const ServicesSection: React.FC<ServicesSectionProps> = ({ heading }) => {
  const t = useTranslations("services");

  return (
    <Box
      component="section"
      id="services"
      sx={{
        scrollMarginTop: `${HEADER_HEIGHT}px`,
        pt: { xs: 2, md: 4 },
        pb: { xs: "4rem", md: "5rem" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 5 } }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontSize: { xs: "2.25rem", sm: "2.6rem", md: "3rem" } }}
          >
            {heading ?? t("heading")}
          </Typography>
          <Typography sx={{ color: "text.secondary", maxWidth: "36rem" }}>
            {t("description")}
          </Typography>
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          {SERVICE_KEYS.map((key) => (
            <Box
              component="li"
              key={key}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 5fr) minmax(0, 7fr)" },
                alignItems: "baseline",
                gap: { xs: "0.5rem", md: "2rem" },
                py: { xs: "1.5rem", md: "2rem" },
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontSize: { xs: "1.5rem", md: "1.9rem" } }}
              >
                {t(`items.${key}.title`)}
              </Typography>
              <Typography sx={{ color: "text.secondary", maxWidth: "34rem" }}>
                {t(`items.${key}.description`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
