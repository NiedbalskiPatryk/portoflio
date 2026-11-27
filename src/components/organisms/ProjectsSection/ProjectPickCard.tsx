"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ProjectItem } from "./types";

interface ProjectPickCardProps {
  project: ProjectItem;
  selected: boolean;
  controlsId: string;
  onPick: (id: string) => void;
}

const firstImage = (project: ProjectItem) =>
  project.previewImage ??
  project.media?.find((item) => item.type === "image")?.src;

// Molecule: a real button that selects a project and reflects it with aria-pressed.
const ProjectPickCard: React.FC<ProjectPickCardProps> = ({
  project,
  selected,
  controlsId,
  onPick,
}) => {
  const image = firstImage(project);

  return (
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
        p: 0,
        m: 0,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        borderRadius: "1.25rem",
        overflow: "hidden",
        bgcolor: "inverse.paper",
        border: "2px solid",
        borderColor: selected ? "secondary.main" : "inverse.paper",
        opacity: selected ? 1 : 0.78,
        transition:
          "transform 0.25s ease, opacity 0.25s ease, border-color 0.25s ease",
        "&:hover": { transform: "translateY(-4px)", opacity: 1 },
        "&:focus-visible": {
          opacity: 1,
          outline: "2px solid #f3f3f1",
          outlineOffset: "2px",
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": { transform: "none" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          bgcolor: "#0d0d0d",
          flexShrink: 0,
        }}
      >
        {image && (
          <Box
            component="img"
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        )}
      </Box>
      <Box
        component="span"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          p: { xs: "0.75rem 0.9rem 0.9rem", sm: "1rem 1.2rem 1.2rem" },
        }}
      >
        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              color: "inverse.text",
              overflowWrap: "anywhere",
            }}
          >
            {project.name}
          </Typography>
          {selected && (
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "999px",
                bgcolor: "secondary.main",
                flexShrink: 0,
              }}
            />
          )}
        </Box>
        {project.kind && (
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.85rem" },
              lineHeight: 1.4,
              color: "inverse.textSecondary",
            }}
          >
            {project.kind}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProjectPickCard;
