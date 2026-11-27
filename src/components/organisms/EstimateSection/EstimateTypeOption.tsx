"use client";

import React from "react";
import Box from "@mui/material/Box";

interface EstimateTypeOptionProps {
  label: string;
  price: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

// Molecule: one project-type choice (real button, aria-pressed).
const EstimateTypeOption: React.FC<EstimateTypeOptionProps> = ({
  label,
  price,
  description,
  selected,
  onSelect,
}) => (
  <Box
    component="button"
    type="button"
    aria-pressed={selected}
    onClick={onSelect}
    sx={{
      font: "inherit",
      textAlign: "left",
      cursor: "pointer",
      m: 0,
      p: { xs: "1.15rem", sm: "1.4rem" },
      minWidth: 0,
      borderRadius: "1.25rem",
      border: "2px solid",
      borderColor: selected ? "primary.main" : "background.paper",
      bgcolor: selected ? "primary.main" : "background.paper",
      color: selected ? "primary.contrastText" : "text.primary",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      transition:
        "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
      "&:hover": { borderColor: selected ? "primary.main" : "#bdbdb8" },
      "&:focus-visible": { outline: "2px solid #111111", outlineOffset: "2px" },
      "@media (prefers-reduced-motion: reduce)": { transition: "none" },
    }}
  >
    <Box component="span" sx={{ fontWeight: 600 }}>
      {label}
    </Box>
    <Box
      component="span"
      sx={{
        fontSize: "1.6rem",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.2,
      }}
    >
      {price}
    </Box>
    <Box
      component="span"
      sx={{ fontSize: "0.88rem", lineHeight: 1.5, opacity: 0.85 }}
    >
      {description}
    </Box>
  </Box>
);

export default EstimateTypeOption;
