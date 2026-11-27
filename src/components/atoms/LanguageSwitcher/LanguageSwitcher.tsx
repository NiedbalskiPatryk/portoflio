"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";

const LOCALES = ["en", "pl"] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const tAria = useTranslations("aria");

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Box
      role="group"
      aria-label={tAria("language")}
      sx={{ display: "flex", alignItems: "center", gap: "0.15rem" }}
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <Box
            key={code}
            component="button"
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => handleLocaleChange(code)}
            sx={{
              minWidth: "2.25rem",
              minHeight: "2rem",
              px: "0.5rem",
              border: 0,
              borderRadius: "999px",
              font: "inherit",
              fontSize: "0.8rem",
              fontWeight: active ? 700 : 500,
              letterSpacing: "0.04em",
              color: active ? "text.primary" : "text.secondary",
              bgcolor: active ? "action.selected" : "transparent",
              cursor: active ? "default" : "pointer",
              transition: "background-color 0.2s ease, color 0.2s ease",
              "&:hover": {
                color: "text.primary",
                bgcolor: active ? "action.selected" : "action.hover",
              },
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "text.primary",
                outlineOffset: "2px",
              },
            }}
          >
            {code.toUpperCase()}
          </Box>
        );
      })}
    </Box>
  );
}
