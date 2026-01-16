"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ServiceCard } from "@/components/molecules";
import type { ServiceCardProps } from "@/components/molecules";

export interface ServicesSectionProps {
  heading: string;
  description?: string;
  services: ServiceCardProps[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  heading,
  description,
  services,
}) => {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header - Centered */}
        <Box
          sx={{
            textAlign: "left",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            color="text.primary"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
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
          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "0.875rem",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {/* Service Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={`service-${index}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
