"use client";

import { SectionTab } from "@/components/atoms";
import { ServiceCard } from "@/components/molecules";
import { HEADER_HEIGHT } from "@/components/organisms/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import React from "react";

export interface ServicesSectionProps {
  heading?: string;
}

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES = [
  {
    key: "frontend",
    icon: (
      <svg {...strokeProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </svg>
    ),
  },
  {
    key: "backend",
    icon: (
      <svg {...strokeProps}>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
  },
  {
    key: "automation",
    icon: (
      <svg {...strokeProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
      </svg>
    ),
  },
  {
    key: "performance",
    icon: (
      <svg {...strokeProps}>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
] as const;

const ServicesSection: React.FC<ServicesSectionProps> = ({ heading }) => {
  const t = useTranslations("services");
  const tTabs = useTranslations("sectionTabs");

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
        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <SectionTab label={tTabs("services")} />
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontSize: { xs: "2.25rem", sm: "2.6rem", md: "3rem" } }}
          >
            {heading ?? t("heading")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: 2,
          }}
        >
          {SERVICES.map(({ key, icon }) => (
            <ServiceCard
              key={key}
              icon={icon}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
