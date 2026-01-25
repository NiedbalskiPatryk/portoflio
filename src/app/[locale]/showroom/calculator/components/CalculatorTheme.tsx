"use client";

import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { createAppTheme } from "@/theme";

const lightTheme = createAppTheme("light");

export default function CalculatorTheme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          bgcolor: "#f6f8fb",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 45%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 40%)",
          color: "#0b0b0b",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
