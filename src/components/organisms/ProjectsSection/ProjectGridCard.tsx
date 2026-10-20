"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import type { ProjectItem, ProjectLink } from "./types";

interface ProjectGridCardProps {
  project: ProjectItem;
  visitSiteLabel?: string;
}

const ProjectGridCard: React.FC<ProjectGridCardProps> = ({
  project,
  visitSiteLabel = "Visit site",
}) => {
  const [activeMediaIdx, setActiveMediaIdx] = React.useState(0);

  const media = project.media;
  const hasMultipleMedia = Boolean(media && media.length > 1);
  const activeMedia = media && media.length > 0 ? media[activeMediaIdx] : null;

  const displaySrc = activeMedia?.src ?? project.previewImage;
  const displayType = activeMedia?.type ?? (displaySrc ? "image" : null);
  const hasContent = Boolean(displaySrc);

  const linkItems: ProjectLink[] =
    project.links && project.links.length > 0
      ? project.links
      : project.url
        ? [{ href: project.url, label: visitSiteLabel }]
        : [];

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main media */}
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#f5f5f5" : "#1B1B1B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasContent ? (
          displayType === "video" ? (
            <Box
              key={`${project.id}-${activeMediaIdx}-video`}
              component="video"
              src={displaySrc}
              poster={activeMedia?.poster}
              controls
              playsInline
              preload="metadata"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                backgroundColor: "#000",
              }}
            />
          ) : (
            <Box
              key={`${project.id}-${activeMediaIdx}-img`}
              component="img"
              src={displaySrc}
              alt={project.name}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                animation: "previewFade 500ms ease-out",
                "@keyframes previewFade": {
                  "0%": { opacity: 0, transform: "scale(1.02)" },
                  "100%": { opacity: 1, transform: "scale(1)" },
                },
              }}
            />
          )
        ) : (
          <Typography variant="body2" color="text.secondary">
            Preview unavailable
          </Typography>
        )}
      </Box>

      {/* Thumbnail strip */}
      {hasMultipleMedia && (
        <Box
          sx={{
            display: "flex",
            gap: 0.75,
            px: 1.5,
            py: 1,
            borderTop: "1px solid",
            borderColor: "divider",
            overflowX: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#fafafa" : "#141414",
            "&::-webkit-scrollbar": { height: 3 },
            "&::-webkit-scrollbar-thumb": { backgroundColor: "divider" },
          }}
        >
          {media!.map((item, idx) => {
            const thumbSrc =
              item.thumbnail ??
              (item.type === "image" ? item.src : undefined);
            const isActive = idx === activeMediaIdx;
            return (
              <Box
                key={idx}
                onClick={() => setActiveMediaIdx(idx)}
                sx={{
                  flexShrink: 0,
                  width: 56,
                  height: 32,
                  border: "1.5px solid",
                  borderColor: isActive ? "primary.main" : "divider",
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: isActive ? 1 : 0.5,
                  transition: "opacity 0.2s ease, border-color 0.2s ease",
                  "&:hover": { opacity: 1 },
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "#f0f0f0" : "#1B1B1B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {thumbSrc ? (
                  <Box
                    component="img"
                    src={thumbSrc}
                    alt={`Preview ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <PlayCircleOutlineIcon
                    sx={{ color: "text.secondary", fontSize: 16 }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Info */}
      <Box
        sx={{
          p: { xs: 2, md: 2.5 },
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            gap: 1,
            flexWrap: { md: "wrap" },
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 700, flex: { md: 1 }, minWidth: 0 }}
          >
            {project.name}
          </Typography>

          {linkItems.length > 0 && (
            <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap" }}>
              {linkItems.map((link) => (
                <Button
                  key={link.href}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={
                    <OpenInNewIcon sx={{ fontSize: "0.85rem !important" }} />
                  }
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    flexShrink: 0,
                    textTransform: "none",
                    fontSize: "0.75rem",
                    px: 1.25,
                    py: 0.4,
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>

        {project.summary && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {project.summary}
          </Typography>
        )}

        {project.tags && project.tags.length > 0 && (
          <>
            <Divider sx={{ borderColor: "divider" }} />
            <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1.25,
                    py: 0.4,
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

export default ProjectGridCard;
