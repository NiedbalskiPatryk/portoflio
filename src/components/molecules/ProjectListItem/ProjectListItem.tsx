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
      sx={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        px: 0,
        py: 2,
        borderLeft: "2px solid",
        borderLeftColor: selected ? "primary.main" : "transparent",
        backgroundColor: (theme) =>
          selected ? theme.palette.action.selected : "transparent",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
        "&.Mui-selected:hover": {
          backgroundColor: (theme) => theme.palette.action.selected,
        },
      }}
    >
      <Typography
        variant="h6"
        color={selected ? "text.primary" : "text.secondary"}
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: selected ? 600 : 500,
          lineHeight: 1.4,
          pl: 2,
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
