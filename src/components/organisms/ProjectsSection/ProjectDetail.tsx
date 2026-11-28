"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useTranslations } from "next-intl";
import type { ProjectItem, ProjectLink } from "./types";

interface ProjectDetailProps {
  project: ProjectItem;
  panelId: string;
  visitSiteLabel?: string;
}

const focusRing = {
  outline: "2px solid #f3f3f1",
  outlineOffset: "2px",
};

const metaLabelSx = {
  fontSize: "0.82rem",
  fontWeight: 600,
  lineHeight: 1.4,
  color: "inverse.textSecondary",
} as const;

// Organism part: shows the selected project with a browsable media gallery.
const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  panelId,
  visitSiteLabel = "Visit site",
}) => {
  const t = useTranslations("projects");
  const [mediaIdx, setMediaIdx] = React.useState(0);

  const media = project.media ?? [];
  const activeMedia = media[mediaIdx];
  const displaySrc =
    activeMedia?.src ??
    project.previewImage;
  const displayType = activeMedia?.type ?? "image";

  const linkItems: ProjectLink[] =
    project.links && project.links.length > 0
      ? project.links
      : project.url
        ? [{ href: project.url, label: visitSiteLabel }]
        : [];

  return (
    <Box
      id={panelId}
      role="region"
      aria-label={project.name}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          md: "minmax(0, 1.05fr) minmax(0, 1fr)",
        },
        gap: { xs: "1.5rem", md: "2.5rem" },
        p: { xs: "1.25rem", sm: "2rem" },
        borderRadius: "1.5rem",
        bgcolor: "inverse.paper",
        scrollMarginTop: "6rem",
        animation: "projectPop 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "@keyframes projectPop": {
          from: { opacity: 0, transform: "translateY(8px) scale(0.98)" },
          to: { opacity: 1, transform: "none" },
        },
        "@media (prefers-reduced-motion: reduce)": { animation: "none" },
      }}
    >
      {/* Media */}
      <Box sx={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Box
          sx={{
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: "1rem",
            overflow: "hidden",
            bgcolor: "#0d0d0d",
          }}
        >
          {displaySrc &&
            (displayType === "video" ? (
              <Box
                key={`${project.id}-${mediaIdx}-video`}
                component="video"
                src={displaySrc}
                poster={activeMedia?.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={project.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  bgcolor: "#000",
                }}
              />
            ) : (
              <Box
                key={`${project.id}-${mediaIdx}-img`}
                component="img"
                src={displaySrc}
                alt={`${project.name} (${mediaIdx + 1}/${Math.max(media.length, 1)})`}
                decoding="async"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
            ))}
        </Box>

        {media.length > 1 && (
          <Box
            role="group"
            aria-label={t("galleryLabel", { name: project.name })}
            sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
          >
            {media.map((item, idx) => {
              const thumbSrc =
                item.thumbnail ??
                (item.type === "image" ? item.src : item.poster);
              const isActive = idx === mediaIdx;
              return (
                <Box
                  key={`${item.src}-${idx}`}
                  component="button"
                  type="button"
                  aria-pressed={isActive}
                  aria-label={t("mediaItemLabel", {
                    type: item.type === "video" ? t("mediaVideo") : t("mediaImage"),
                    index: idx + 1,
                    total: media.length,
                  })}
                  onClick={() => setMediaIdx(idx)}
                  sx={{
                    position: "relative",
                    p: 0,
                    m: 0,
                    cursor: "pointer",
                    width: { xs: "3.5rem", sm: "4.5rem" },
                    aspectRatio: "4 / 3",
                    borderRadius: "0.6rem",
                    overflow: "hidden",
                    bgcolor: "#0d0d0d",
                    border: "2px solid",
                    borderColor: isActive ? "secondary.main" : "transparent",
                    opacity: isActive ? 1 : 0.65,
                    transition: "opacity 0.2s ease, border-color 0.2s ease",
                    "&:hover": { opacity: 1 },
                    "&:focus-visible": { opacity: 1, ...focusRing },
                    "@media (prefers-reduced-motion: reduce)": { transition: "none" },
                  }}
                >
                  {thumbSrc && (
                    <Box
                      component="img"
                      src={thumbSrc}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                    />
                  )}
                  {item.type === "video" && (
                    <Box
                      component="span"
                      aria-hidden="true"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(17, 17, 17, 0.45)",
                        color: "#ffffff",
                      }}
                    >
                      <PlayArrowRoundedIcon sx={{ fontSize: "1.5rem" }} />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>

      {/* Copy */}
      <Box sx={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            m: 0,
            fontSize: { xs: "1.6rem", sm: "2rem" },
            color: "inverse.text",
            overflowWrap: "anywhere",
          }}
        >
          {project.name}
        </Typography>

        {project.summary && (
          <Typography
            sx={{
              m: 0,
              color: "#d6d6d2",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", sm: "1.05rem" },
            }}
          >
            {project.summary}
          </Typography>
        )}

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.25rem 2rem" }}>
          {project.role && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.3rem", minWidth: 0 }}>
              <Typography component="span" sx={metaLabelSx}>
                {t("roleLabel")}
              </Typography>
              <Typography component="span" sx={{ fontWeight: 600, color: "inverse.text" }}>
                {project.role}
              </Typography>
            </Box>
          )}
          {project.tags && project.tags.length > 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0 }}>
              <Typography component="span" sx={metaLabelSx}>
                {t("stackLabel")}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {project.tags.map((tag) => (
                  <Box
                    component="li"
                    key={tag}
                    sx={{
                      px: "0.7rem",
                      py: "0.25rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(243, 243, 241, 0.28)",
                      color: "inverse.text",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {linkItems.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {linkItems.map((link) => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                endIcon={<OpenInNewIcon sx={{ fontSize: "0.9rem !important" }} />}
                sx={{ "&:focus-visible": focusRing }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetail;
