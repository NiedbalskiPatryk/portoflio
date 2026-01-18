"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Typography
        component="button"
        variant="caption"
        onClick={() => handleLocaleChange("en")}
        sx={{
          fontWeight: locale === "en" ? 600 : 400,
          color: locale === "en" ? "text.primary" : "text.secondary",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        EN
      </Typography>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        /
      </Typography>
      <Typography
        component="button"
        variant="caption"
        onClick={() => handleLocaleChange("pl")}
        sx={{
          fontWeight: locale === "pl" ? 600 : 400,
          color: locale === "pl" ? "text.primary" : "text.secondary",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        PL
      </Typography>
    </Box>
  );
}
