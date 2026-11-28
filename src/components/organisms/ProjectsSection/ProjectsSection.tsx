"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import ProjectCollage from "./ProjectCollage";
import ProjectDetail from "./ProjectDetail";
import ProjectPickRow from "./ProjectPickRow";
import type { ProjectItem } from "./types";

export interface ProjectsSectionProps {
  heading: string;
  /** Rendered after `heading` in the accent colour. */
  headingAccent?: string;
  description?: string;
  projects: ProjectItem[];
  visitSiteLabel?: string;
}

// Dark "Realizacje" band: project list + tilted frame collage + detail panel.
const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  heading,
  headingAccent,
  description,
  projects,
  visitSiteLabel,
}) => {
  const t = useTranslations("projects");
  const tNotes = useTranslations("notes");
  const [selectedId, setSelectedId] = React.useState(projects[0]?.id ?? "");
  const panelRef = React.useRef<HTMLDivElement>(null);
  const headingId = "projects-heading";
  const panelId = "projects-detail";

  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  const handlePick = (id: string) => {
    setSelectedId(id);
    // On narrow screens the panel sits below the list; bring it into view.
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
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 5fr) minmax(0, 7fr)",
            },
            gridTemplateAreas: {
              xs: '"head" "collage" "list"',
              md: '"head collage" "list collage"',
            },
            gridTemplateRows: { md: "auto 1fr" },
            columnGap: { md: "3rem", lg: "4rem" },
            rowGap: { xs: "1.75rem", md: "1.75rem" },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              gridArea: "head",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              minWidth: 0,
            }}
          >
            <Typography
              id={headingId}
              variant="h2"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: "2.6rem", md: "3.25rem", lg: "3.75rem" },
                lineHeight: 1,
                color: "inverse.text",
              }}
            >
              {heading}
              {headingAccent && (
                <>
                  {" "}
                  {headingAccent}
                </>
              )}
            </Typography>
            {description && (
              <Typography sx={{ m: 0, color: "inverse.textSecondary", maxWidth: "26rem" }}>
                {description}
              </Typography>
            )}
          </Box>

          <Box
            component="ul"
            sx={{
              gridArea: "list",
              listStyle: "none",
              m: 0,
              p: 0,
              minWidth: 0,
              width: "100%",
              borderTop: "1px solid #2c2c2a",
            }}
          >
            {projects.map((project) => (
              <ProjectPickRow
                key={project.id}
                project={project}
                selected={project.id === selected?.id}
                controlsId={panelId}
                onPick={handlePick}
              />
            ))}
          </Box>

          <Box sx={{ gridArea: "collage", minWidth: 0, alignSelf: "center" }}>
            <ProjectCollage
              projects={projects}
              selectedId={selected?.id}
              onPick={handlePick}
              parkizaNote={tNotes("projectsLed")}
            />
          </Box>
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
