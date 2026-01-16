"use client";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/theme";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton
      onClick={toggleTheme}
      size="small"
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      sx={{
        color: "text.primary",
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </IconButton>
  );
}
