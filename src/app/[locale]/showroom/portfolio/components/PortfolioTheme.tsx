"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { createAppTheme } from "@/theme";

const lightTheme = createAppTheme("light");

export default function PortfolioTheme({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById("space-grotesk-font")) {
      return;
    }
    const link = document.createElement("link");
    link.id = "space-grotesk-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          bgcolor: "#f5f2ea",
          color: "#0b0b0b",
          minHeight: "100vh",
          fontFamily: "\"Space Grotesk\", sans-serif",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
