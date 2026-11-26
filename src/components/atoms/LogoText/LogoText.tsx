"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BrandMark from "@/components/atoms/BrandMark";

export default function LogoText() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Link
      href="#"
      underline="none"
      aria-label="ITPapi"
      sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}
    >
      <BrandMark
        size={34}
        tile={theme.palette.text.primary}
        ink={theme.palette.background.default}
      />
      <Typography
        variant="h6"
        component="span"
        aria-hidden="true"
        sx={{
          fontSize: "1.3rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "text.primary",
        }}
      >
        <Box component="span" sx={{ color: isDark ? "#8a8a8a" : "#6b6b6b" }}>
          IT
        </Box>
        Papi
      </Typography>
    </Link>
  );
}
