"use client";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ShowRoomButtonProps {
  label: string;
}

export default function ShowRoomButton({ label }: ShowRoomButtonProps) {
  const theme = useTheme();
  const locale = useLocale();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Button
      component={Link}
      href={`/${locale}/showroom`}
      variant="contained"
      sx={{
        backgroundColor: isDarkMode ? "#ffffff" : "#0a0a0a",
        color: isDarkMode ? "#0a0a0a" : "#ffffff",
        fontWeight: 600,
        px: 2.5,
        py: 1,
        fontSize: "0.8rem",
        borderRadius: 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
        "&:hover": {
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(10, 10, 10, 0.85)",
        },
        display: { xs: "none", md: "inline-flex" },
      }}
    >
      {label}
    </Button>
  );
}
