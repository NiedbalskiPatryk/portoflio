"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  isReady?: boolean;
  comingSoonLabel?: string;
  onNavigate?: () => void;
}

export default function ProjectCard({
  title,
  description,
  href,
  isReady = false,
  comingSoonLabel = "Coming soon",
  onNavigate,
}: ProjectCardProps) {
  const theme = useTheme();
  const locale = useLocale();

  const handleClick = () => {
    if (isReady && onNavigate) {
      onNavigate();
    }
  };

  const cardContent = (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 2,
        bgcolor:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.03)",
        border: 1,
        borderColor: "divider",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease",
        cursor: isReady ? "pointer" : "default",
        opacity: isReady ? 1 : 0.6,
        "&:hover": isReady
          ? {
              transform: "translateY(-2px)",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 8px 24px rgba(0, 0, 0, 0.4)"
                  : "0 8px 24px rgba(0, 0, 0, 0.1)",
              borderColor: "primary.main",
            }
          : {},
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            fontSize: "0.95rem",
          }}
        >
          {title}
        </Typography>
        {!isReady && (
          <Chip
            label={comingSoonLabel}
            size="small"
            sx={{
              fontSize: "0.65rem",
              height: 20,
              ml: 1,
              flexShrink: 0,
            }}
          />
        )}
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: "0.8rem",
          lineHeight: 1.5,
        }}
      >
        {description}
      </Typography>
    </Box>
  );

  if (isReady) {
    return (
      <Link
        href={`/${locale}${href}`}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={onNavigate}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
