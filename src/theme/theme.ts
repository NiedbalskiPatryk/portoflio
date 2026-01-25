"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

// Extend MUI theme with custom properties
declare module "@mui/material/styles" {
  interface Palette {
    surface: {
      overlay: string;
      border: string;
      gradientStart: string;
      gradientMid: string;
      gradientEnd: string;
    };
  }
  interface PaletteOptions {
    surface?: {
      overlay: string;
      border: string;
      gradientStart: string;
      gradientMid: string;
      gradientEnd: string;
    };
  }
}

// Design tokens extracted from reference
const tokens = {
  dark: {
    background: {
      default: "#0a0a0a",
      paper: "#121212",
    },
    text: {
      primary: "#f7f7f7",
      secondary: "#d2d2d2",
    },
    divider: "#2a2a2a",
    primary: {
      main: "#ffffff",
      contrastText: "#0a0a0a",
    },
    surface: {
      overlay: "rgba(255, 255, 255, 0.05)",
      border: "rgba(255, 255, 255, 0.1)",
      gradientStart: "rgba(80, 80, 80, 0.4)",
      gradientMid: "rgba(60, 60, 60, 0.2)",
      gradientEnd: "rgba(40, 40, 40, 0.1)",
    },
  },
  light: {
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#0b0b0b",
      secondary: "#2a2a2a",
    },
    divider: "#e0e0e0",
    primary: {
      main: "#0a0a0a",
      contrastText: "#ffffff",
    },
    surface: {
      overlay: "rgba(0, 0, 0, 0.04)",
      border: "rgba(0, 0, 0, 0.1)",
      gradientStart: "rgba(0, 0, 0, 0.2)",
      gradientMid: "rgba(0, 0, 0, 0.1)",
      gradientEnd: "rgba(0, 0, 0, 0.05)",
    },
  },
};

// Shared typography configuration
const typography: ThemeOptions["typography"] = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  h1: {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
  },
  button: {
    textTransform: "none",
    fontWeight: 500,
  },
};

// Shared shape configuration
const shape = {
  borderRadius: 8,
};

// Shared spacing (default is 8px)
const spacing = 8;

// Component overrides factory
const getComponents = (mode: "dark" | "light"): ThemeOptions["components"] => {
  const palette = tokens[mode];

  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${palette.divider} ${palette.background.default}`,
          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: palette.divider,
            borderRadius: 4,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          fontSize: "0.875rem",
        },
        outlined: {
          borderColor: palette.text.primary,
          color: palette.text.primary,
          "&:hover": {
            borderColor: palette.text.primary,
            backgroundColor:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.04)",
          },
        },
        contained: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          "&:hover": {
            backgroundColor:
              mode === "dark"
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(0, 0, 0, 0.85)",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor:
            mode === "dark"
              ? "rgba(255, 255, 255, 0.08)"
              : "rgba(0, 0, 0, 0.08)",
          color: palette.text.secondary,
          fontSize: "0.75rem",
          height: 28,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          borderRadius: 12,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.default,
          borderBottom: `1px solid ${palette.divider}`,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.divider,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "& fieldset": {
              borderColor: palette.divider,
            },
            "&:hover fieldset": {
              borderColor: palette.text.secondary,
            },
            "&.Mui-focused fieldset": {
              borderColor: palette.text.primary,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderBottom: `1px solid ${palette.divider}`,
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
      defaultProps: {
        elevation: 0,
        disableGutters: true,
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "16px 0",
          minHeight: "auto",
          "&.Mui-expanded": {
            minHeight: "auto",
          },
        },
        content: {
          margin: 0,
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 0 16px 0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  };
};

// Create theme factory
export const createAppTheme = (mode: "dark" | "light" = "dark") => {
  const palette = tokens[mode];

  return createTheme({
    palette: {
      mode,
      background: palette.background,
      text: palette.text,
      primary: palette.primary,
      divider: palette.divider,
      surface: palette.surface,
    },
    typography,
    shape,
    spacing,
    components: getComponents(mode),
  });
};

// Default dark theme (forced)
export const darkTheme = createAppTheme("dark");
export const lightTheme = createAppTheme("light");

// Export default theme
export default darkTheme;
