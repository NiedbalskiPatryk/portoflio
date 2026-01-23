"use client";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/theme";
import { useTranslations } from "next-intl";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const t = useTranslations("aria");

  return (
    <IconButton
      onClick={toggleTheme}
      size="small"
      aria-label={mode === "dark" ? t("switchToLightMode") : t("switchToDarkMode")}
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
