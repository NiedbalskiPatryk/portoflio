"use client";

import React from "react";
import Box from "@mui/material/Box";
import type { ProjectItem } from "./types";

interface ProjectPickRowProps {
  project: ProjectItem;
  selected: boolean;
  controlsId: string;
  onPick: (id: string) => void;
}

// Molecule: one row of the project list. A real button that selects the project
// (aria-pressed), name on the left, role on the right.
const ProjectPickRow: React.FC<ProjectPickRowProps> = ({
  project,
  selected,
  controlsId,
  onPick,
}) => (
  <Box component="li" sx={{ borderBottom: "1px solid #2c2c2a" }}>
    <Box
      component="button"
      type="button"
      aria-pressed={selected}
      aria-controls={controlsId}
      onClick={() => onPick(project.id)}
      sx={{
        font: "inherit",
        color: "inherit",
        textAlign: "left",
        cursor: "pointer",
        width: "100%",
        m: 0,
        py: "1rem",
        pr: 0,
        pl: selected ? "0.85rem" : 0,
        bgcolor: "transparent",
        border: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "1rem",
        position: "relative",
        transition: "padding-left 0.2s ease, background-color 0.2s ease",
        "&:hover": { bgcolor: "rgba(243, 243, 241, 0.05)", pl: "0.85rem" },
        "&:focus-visible": {
          outline: "2px solid #f3f3f1",
          outlineOffset: "-2px",
          pl: "0.85rem",
        },
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
      }}
    >
      {selected && (
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            width: "0.5rem",
            height: "0.5rem",
            borderRadius: "999px",
            bgcolor: "secondary.main",
            transform: "translateY(-50%)",
          }}
        />
      )}
      <Box
        component="span"
        sx={{
          fontWeight: 600,
          fontSize: "1.1rem",
          color: selected ? "secondary.main" : "inverse.text",
          overflowWrap: "anywhere",
        }}
      >
        {project.name}
      </Box>
      {project.role && (
        <Box
          component="span"
          sx={{
            minWidth: 0,
            textAlign: "right",
            fontSize: "0.95rem",
            lineHeight: 1.4,
            color: "inverse.textSecondary",
          }}
        >
          {project.role}
        </Box>
      )}
    </Box>
  </Box>
);

export default ProjectPickRow;
