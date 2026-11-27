"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import ProjectDetail from "./ProjectDetail";
import ProjectPickCard from "./ProjectPickCard";
import type { ProjectItem } from "./types";

export interface ProjectsSectionProps {
  heading: string;
  /** Rendered after `heading` in the accent colour. */
  headingAccent?: string;
  description?: string;
  projects: ProjectItem[];
  visitSiteLabel?: string;
}

// Dark "Realizacje" band: clickable project cards + detail panel.
const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  heading,
  headingAccent,
  description,
  projects,
  visitSiteLabel,
}) => {
  const t = useTranslations("projects");
  const [selectedId, setSelectedId] = React.useState(projects[0]?.id ?? "");
  const panelRef = React.useRef<HTMLDivElement>(null);
  const headingId = "projects-heading";
  const panelId = "projects-detail";

  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  const handlePick = (id: string) => {
    setSelectedId(id);
    // On narrow screens the panel sits below the grid; bring it into view.
    const panel = panelRef.current;
    if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.65) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <Box
      component="section"
      id="projects"
      aria-labelledby={headingId}
      sx={{ bgcolor: "inverse.background", color: "inverse.text" }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          py: { xs: "4rem", md: "5.5rem" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "2rem", md: "2.5rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <Typography
            id={headingId}
            variant="h2"
            component="h2"
            sx={{ m: 0, fontSize: { xs: "2.25rem", md: "3rem" }, color: "inverse.text" }}
          >
            {heading}
            {headingAccent && (
              <>
                {" "}
                <Box component="span" sx={{ color: "secondary.main" }}>
                  {headingAccent}
                </Box>
              </>
            )}
          </Typography>
          {description && (
            <Typography sx={{ m: 0, color: "inverse.textSecondary", maxWidth: "24rem" }}>
              {description}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(auto-fit, minmax(14rem, 1fr))",
            },
            gap: { xs: "0.75rem", sm: "1rem" },
          }}
        >
          {projects.map((project) => (
            <ProjectPickCard
              key={project.id}
              project={project}
              selected={project.id === selected?.id}
              controlsId={panelId}
              onPick={handlePick}
            />
          ))}
        </Box>

        {selected && (
          <Box ref={panelRef} sx={{ scrollMarginTop: "6rem" }}>
            <Box
              component="p"
              role="status"
              sx={{
                position: "absolute",
                width: 1,
                height: 1,
                m: "-1px",
                p: 0,
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            >
              {t("selected", { name: selected.name })}
            </Box>
            <ProjectDetail
              key={selected.id}
              project={selected}
              panelId={panelId}
              visitSiteLabel={visitSiteLabel}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsSection;
