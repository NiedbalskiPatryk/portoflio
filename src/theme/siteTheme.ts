"use client";

import { createTheme } from "@mui/material/styles";

// Light "B+" theme for the main site. The showroom keeps using createAppTheme().
declare module "@mui/material/styles" {
  interface Palette {
    inverse: {
      background: string;
      paper: string;
      text: string;
      textSecondary: string;
    };
  }
  interface PaletteOptions {
    inverse?: {
      background: string;
      paper: string;
      text: string;
      textSecondary: string;
    };
  }
}

const ink = "#111111";
const muted = "#4a4a4a";
const accent = "#ff5a1f";
const ground = "#f6f6f4";
const fieldBorder = "#dcdcd8";
const displayFont = "var(--font-bricolage), system-ui, sans-serif";

export const siteTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: ground, paper: "#ffffff" },
    text: { primary: ink, secondary: muted, disabled: "#8a8a8a" },
    divider: "#e2e2de",
    primary: { main: ink, contrastText: "#ffffff" },
    secondary: { main: accent, contrastText: ink },
    // Kept for components still reading palette.surface.
    surface: {
      overlay: "rgba(17, 17, 17, 0.04)",
      border: "rgba(17, 17, 17, 0.1)",
      gradientStart: "#ffffff",
      gradientMid: "#ffffff",
      gradientEnd: "#ffffff",
    },
    inverse: {
      background: ink,
      paper: "#1c1c1b",
      text: "#f3f3f1",
      textSecondary: "#b5b5b0",
    },
  },
  shape: { borderRadius: 24 },
  typography: {
    fontFamily: "var(--font-instrument-sans), system-ui, sans-serif",
    h1: { fontFamily: displayFont, fontSize: "4.5rem", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.05em" },
    h2: { fontFamily: displayFont, fontSize: "3rem", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.05em" },
    h3: { fontFamily: displayFont, fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em" },
    h4: { fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.3 },
    h5: { fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.35 },
    h6: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: "1.05rem", lineHeight: 1.65 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    caption: { fontSize: "0.8rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Dotted grid on the light ground; sections with their own background cover it.
        body: {
          backgroundColor: ground,
          backgroundImage: "radial-gradient(#d6d6d0 1.1px, transparent 1.1px)",
          backgroundSize: "22px 22px",
        },
        // Avoid a single word stranded on the last line of a paragraph.
        p: { textWrap: "pretty" },
        "@media (prefers-reduced-motion: reduce)": {
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
            scrollBehavior: "auto !important",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, padding: "0.9rem 1.5rem", fontSize: "1rem" },
        sizeSmall: { padding: "0.55rem 1rem", fontSize: "0.9rem" },
        // White pill: secondary action on the light ground.
        outlined: {
          backgroundColor: "#ffffff",
          borderColor: "#ffffff",
          color: ink,
          "&:hover": { backgroundColor: "#ffffff", borderColor: fieldBorder },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 14,
            backgroundColor: ground,
            "& fieldset": { borderColor: fieldBorder },
            "&:hover fieldset": { borderColor: "#bdbdb8" },
            "&.Mui-focused fieldset": { borderColor: ink },
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: ink, textUnderlineOffset: "0.2em" },
      },
    },
    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true },
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 20,
          "&:before": { display: "none" },
          "&.Mui-expanded": { margin: 0 },
        },
      },
    },
  },
});
