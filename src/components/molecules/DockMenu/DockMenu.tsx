"use client";

import { useState, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useLocale } from "next-intl";

export interface DockMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  isReady?: boolean;
}

interface DockMenuProps {
  items: DockMenuItem[];
  currentId?: string;
  comingSoonLabel?: string;
}

export default function DockMenu({
  items,
  currentId,
  comingSoonLabel = "Coming soon",
}: DockMenuProps) {
  const theme = useTheme();
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getScale = useCallback((index: number, hoverIdx: number | null) => {
    if (hoverIdx === null) return 1;
    const distance = Math.abs(index - hoverIdx);
    if (distance === 0) return 1.4;
    if (distance === 1) return 1.2;
    if (distance === 2) return 1.1;
    return 1;
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number, isReady: boolean) => {
    if (!isReady) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1300,
        maxWidth: "95vw",
      }}
    >
      {/* Expanded tooltip */}
      {expandedIndex !== null && (
        <Paper
          elevation={8}
          sx={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            mb: 2,
            p: 2,
            minWidth: 250,
            maxWidth: 320,
            bgcolor: "background.paper",
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {items[expandedIndex].title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            {items[expandedIndex].description}
          </Typography>
          {items[expandedIndex].isReady ? (
            <Typography
              component={Link}
              href={`/${locale}${items[expandedIndex].href}`}
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Open project →
            </Typography>
          ) : (
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              {comingSoonLabel}
            </Typography>
          )}
        </Paper>
      )}

      {/* Dock container */}
      <Box
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: 0.5,
          px: 2,
          py: 1.5,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(20, 20, 20, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderRadius: 4,
          border: 1,
          borderColor: "divider",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.5)"
              : "0 8px 32px rgba(0, 0, 0, 0.15)",
          overflowX: "auto",
          maxWidth: "90vw",
          "&::-webkit-scrollbar": {
            height: 4,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "divider",
            borderRadius: 2,
          },
        }}
      >
        {items.map((item, index) => {
          const scale = getScale(index, hoveredIndex);
          const isActive = item.id === currentId;
          const isReady = item.isReady ?? false;

          return (
            <Box
              key={item.id}
              component={isReady ? Link : "button"}
              href={isReady ? `/${locale}${item.href}` : undefined}
              onClick={() => handleClick(index, isReady)}
              onMouseEnter={() => handleMouseEnter(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: isActive
                  ? "primary.main"
                  : theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.08)",
                color: isActive
                  ? "primary.contrastText"
                  : isReady
                    ? "text.primary"
                    : "text.secondary",
                fontSize: "0.75rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.15s ease-out, background-color 0.2s",
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
                opacity: isReady ? 1 : 0.5,
                flexShrink: 0,
                "&:hover": {
                  bgcolor: isActive
                    ? "primary.main"
                    : theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {item.title.substring(0, 2).toUpperCase()}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
