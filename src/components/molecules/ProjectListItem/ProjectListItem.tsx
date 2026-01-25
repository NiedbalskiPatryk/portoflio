"use client";

import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

export interface ProjectListItemProps {
  id: string;
  name: string;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  id,
  name,
  selected = false,
  onSelect,
}) => {
  return (
    <ListItemButton
      selected={selected}
      onClick={() => onSelect?.(id)}
      aria-selected={selected}
      sx={(theme) => ({
        alignItems: "flex-start",
        justifyContent: "flex-start",
        px: { xs: 2, sm: 2.5 },
        py: 2,
        borderRadius: 0,
        border: "1px solid",
        borderColor: "divider",
        background: selected
          ? `linear-gradient(120deg, ${theme.palette.surface.gradientStart} 0%, ${theme.palette.surface.gradientMid} 45%, ${theme.palette.surface.gradientEnd} 100%)`
          : theme.palette.mode === "dark"
            ? "rgba(18, 18, 18, 0.6)"
            : theme.palette.background.paper,
        boxShadow: selected
          ? "0 10px 22px rgba(0, 0, 0, 0.25)"
          : "none",
        "&:hover": {
          background:
            theme.palette.mode === "dark"
              ? `linear-gradient(120deg, ${theme.palette.surface.gradientMid} 0%, ${theme.palette.surface.gradientStart} 45%, ${theme.palette.surface.gradientEnd} 100%)`
              : "rgba(255, 255, 255, 0.95)",
        },
        "&.Mui-selected:hover": {
          background: `linear-gradient(120deg, ${theme.palette.surface.gradientMid} 0%, ${theme.palette.surface.gradientStart} 45%, ${theme.palette.surface.gradientEnd} 100%)`,
        },
      })}
    >
      <Typography
        variant="h6"
        color={selected ? "text.primary" : "text.secondary"}
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: selected ? 600 : 500,
          lineHeight: 1.4,
          pl: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {name}
      </Typography>
    </ListItemButton>
  );
};

export default ProjectListItem;
