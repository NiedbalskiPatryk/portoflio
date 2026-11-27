import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import React from "react";

export interface SectionTabProps {
  /** Visible label, e.g. "02 · realizacje". */
  label: string;
  /** "dark" is for the inverse (#111) band. */
  tone?: "light" | "dark";
  sx?: SxProps<Theme>;
}

const TONES = {
  light: {
    bg: "#ffffff",
    border: "#e6e6e1",
    text: "text.primary",
    dot: "#d6d6d0",
  },
  dark: {
    bg: "#1c1c1b",
    border: "#2c2c2a",
    text: "#b5b5b0",
    dot: "#3a3a38",
  },
} as const;

// Atom: small browser-tab chip used as an eyebrow above section headings.
const SectionTab: React.FC<SectionTabProps> = ({ label, tone = "light", sx }) => {
  const c = TONES[tone];

  return (
    <Box
      component="span"
      sx={[
        {
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          py: "0.35rem",
          pl: "0.55rem",
          pr: "0.8rem",
          bgcolor: c.bg,
          border: "1px solid",
          borderColor: c.border,
          borderRadius: "0.6rem",
          color: c.text,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "0.8rem",
          lineHeight: 1.4,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        component="span"
        aria-hidden="true"
        sx={{ display: "inline-flex", gap: "3px", flexShrink: 0 }}
      >
        <Box component="span" sx={{ width: 6, height: 6, borderRadius: "999px", bgcolor: c.dot }} />
        <Box component="span" sx={{ width: 6, height: 6, borderRadius: "999px", bgcolor: c.dot }} />
        <Box component="span" sx={{ width: 6, height: 6, borderRadius: "999px", bgcolor: "secondary.main" }} />
      </Box>
      {label}
    </Box>
  );
};

export default SectionTab;
