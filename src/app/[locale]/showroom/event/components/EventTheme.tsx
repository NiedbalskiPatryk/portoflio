"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { createAppTheme } from "@/theme";

const darkTheme = createAppTheme("dark");

export default function EventTheme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: "#0b0b0b",
          color: "#f7f7f2",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
