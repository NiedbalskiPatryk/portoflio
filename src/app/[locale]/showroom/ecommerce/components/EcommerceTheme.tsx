"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { createAppTheme } from "@/theme";

const lightTheme = createAppTheme("light");

export default function EcommerceTheme({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (document.getElementById("playfair-display-font")) {
      return;
    }
    const link = document.createElement("link");
    link.id = "playfair-display-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          bgcolor: "#f7f3ee",
          color: "#141414",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
