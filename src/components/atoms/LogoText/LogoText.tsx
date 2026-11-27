"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { useLocale } from "next-intl";
import BrandMark from "@/components/atoms/BrandMark";

export default function LogoText() {
  const theme = useTheme();
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}#home`}
      underline="none"
      aria-label="ITPapi"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        borderRadius: "0.5rem",
        "&:focus-visible": {
          outline: "2px solid",
          outlineColor: "text.primary",
          outlineOffset: "4px",
        },
      }}
    >
      <BrandMark
        size={34}
        tile={theme.palette.text.primary}
        ink={theme.palette.primary.contrastText}
      />
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "1.2rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "text.primary",
        }}
      >
        <Box component="span" sx={{ color: "#6b6b6b" }}>
          IT
        </Box>
        Papi
      </Box>
    </Link>
  );
}
