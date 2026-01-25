"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "@/theme";
import type { ReactNode } from "react";

const darkTheme = createAppTheme("dark");

export default function LandingPageTheme({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
