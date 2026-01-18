"use client";

import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { ProjectItem } from "./types";

export interface ProjectPreviewProps {
  project?: ProjectItem;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const hasImage = Boolean(project?.previewImage);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 3,
          overflow: "hidden",
          border: "2px solid",
          borderColor: (theme) =>
            theme.palette.mode === "light" ? "#e0e0e0" : "#2B2B2B",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#f5f5f5" : "#1B1B1B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasImage ? (
          <Box
            key={project?.id ?? "empty"}
            component="img"
            src={project?.previewImage}
            alt={project?.name ?? "Project preview"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              animation: "previewFade 1000ms ease-out",
              "@keyframes previewFade": {
                "0%": { opacity: 0, transform: "scale(1.02)" },
                "100%": { opacity: 1, transform: "scale(1)" },
              },
            }}
          />
        ) : (
          <Typography variant="body2" color="text.secondary">
            Preview unavailable
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" color="text.primary" sx={{ mb: 1 }}>
          {project?.name ?? "Select a project"}
        </Typography>

        {project?.summary && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.summary}
          </Typography>
        )}

        {project?.tags && project.tags.length > 0 && (
          <>
            <Divider sx={{ borderColor: "divider", mb: 2 }} />
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProjectPreview;
