"use client";

import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const HEADER_HEIGHT = 72;

interface ShowRoomHeaderProps {
  showThemeToggle?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function ShowRoomHeader({
  showThemeToggle = true,
  backHref,
  backLabel,
}: ShowRoomHeaderProps) {
  const locale = useLocale();
  const t = useTranslations("showRoom");
  const resolvedBackHref = backHref ?? `/${locale}/showroom`;
  const resolvedBackLabel = backLabel ?? t("backToMain");

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "appBar",
        height: HEADER_HEIGHT,
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "transparent"
            : alpha(theme.palette.background.default, 0.85),
        backgroundImage: (theme) =>
          theme.palette.mode === "dark"
            ? `linear-gradient(120deg, ${theme.palette.surface.gradientStart} 0%, ${theme.palette.surface.gradientMid} 45%, ${theme.palette.surface.gradientEnd} 100%)`
            : "none",
        borderBottom: "1px solid",
        borderColor: (theme) => theme.palette.divider,
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.22)",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          {/* Back button + Title */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              component={Link}
              href={resolvedBackHref}
              aria-label={resolvedBackLabel}
              sx={{
                color: "text.primary",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
                color: "text.primary",
              }}
            >
              {t("heading")}
            </Typography>
          </Stack>

          {/* Right side: Language + Theme toggle */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguageSwitcher />
            {showThemeToggle && <ThemeToggle />}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export { HEADER_HEIGHT as SHOWROOM_HEADER_HEIGHT };
