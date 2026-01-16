"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface SectionHeaderProps {
  heading: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  align?: "left" | "center" | "right";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  description,
  ctaLabel,
  ctaHref,
  onCtaClick,
  align = "left",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="text.primary"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
          fontWeight: 700,
          mb: 2,
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
          variant="body1"
          color="text.secondary"
          sx={{
            mb: ctaLabel ? 4 : 0,
            maxWidth: align === "center" ? 600 : "100%",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      )}

      {ctaLabel && (
        <Button
          variant="outlined"
          href={ctaHref}
          onClick={onCtaClick}
          sx={{
            mt: ctaLabel && !description ? 4 : 0,
          }}
        >
          {ctaLabel}
        </Button>
      )}
    </Box>
  );
};

export default SectionHeader;
