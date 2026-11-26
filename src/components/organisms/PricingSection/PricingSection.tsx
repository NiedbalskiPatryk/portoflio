"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
}

export interface PricingSectionProps {
  heading: string;
  description?: string;
  plans: PricingPlan[];
  ctaLabel: string;
  ctaHref: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  heading,
  description,
  plans,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <Box
      component="section"
      id="pricing"
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
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {plans.map((plan, index) => (
            <Box
              key={`plan-${index}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                p: { xs: 3, md: 3.5 },
                border: "1px solid",
                borderColor: "divider",
                transition: "border-color 0.2s ease",
                "&:hover": { borderColor: "text.secondary" },
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                color="text.primary"
                sx={{ fontSize: { xs: "0.95rem", md: "1rem" }, fontWeight: 600 }}
              >
                {plan.title}
              </Typography>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {plan.price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                {plan.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <Button variant="outlined" href={ctaHref} sx={{ borderRadius: 0 }}>
            {ctaLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingSection;
