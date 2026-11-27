"use client";

import React from "react";
import Box from "@mui/material/Box";

interface EstimateExtraChipProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

// Atom: toggle pill. The +/check mark keeps state readable without colour.
const EstimateExtraChip: React.FC<EstimateExtraChipProps> = ({
  label,
  selected,
  onToggle,
}) => (
  <Box
    component="button"
    type="button"
    aria-pressed={selected}
    onClick={onToggle}
    sx={{
      font: "inherit",
      fontWeight: 500,
      cursor: "pointer",
      m: 0,
      px: "1.1rem",
      py: "0.7rem",
      borderRadius: "999px",
      border: "2px solid",
      borderColor: selected ? "secondary.main" : "#dcdcd8",
      bgcolor: selected ? "secondary.main" : "background.paper",
      color: "text.primary",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      textAlign: "left",
      transition:
        "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
      "&:hover": { borderColor: selected ? "secondary.main" : "#8a8a8a" },
      "&:focus-visible": { outline: "2px solid #111111", outlineOffset: "2px" },
      "@media (prefers-reduced-motion: reduce)": { transition: "none" },
    }}
  >
    <Box component="span" aria-hidden="true" sx={{ fontWeight: 700, width: "1ch" }}>
      {selected ? "✓" : "+"}
    </Box>
    {label}
  </Box>
);

export default EstimateExtraChip;
