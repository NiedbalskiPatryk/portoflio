"use client";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface ColorWashProps {
  children: React.ReactNode;
}

export default function ColorWash({ children }: ColorWashProps) {
  const theme = useTheme();
  const background =
    theme.palette.mode === "light"
      ? "radial-gradient(circle at 15% 10%, rgba(0, 140, 255, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(255, 140, 0, 0.12) 0%, transparent 40%), radial-gradient(circle at 70% 85%, rgba(0, 180, 120, 0.08) 0%, transparent 45%)"
      : "radial-gradient(circle at 15% 10%, rgba(0, 170, 255, 0.16) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(255, 170, 0, 0.12) 0%, transparent 40%), radial-gradient(circle at 70% 85%, rgba(0, 220, 160, 0.1) 0%, transparent 45%)";

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
