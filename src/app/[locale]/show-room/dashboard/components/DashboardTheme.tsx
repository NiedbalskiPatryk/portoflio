"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { createAppTheme } from "@/theme";

const darkTheme = createAppTheme("dark");

export default function DashboardTheme({ children }: { children: ReactNode }) {
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
