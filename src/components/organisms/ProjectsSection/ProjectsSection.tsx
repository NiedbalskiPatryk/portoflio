"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectPreview from "./ProjectPreview";
import ProjectsList from "./ProjectsList";
import type { ProjectItem } from "./types";

export interface ProjectsSectionProps {
  heading: string;
  description?: string;
  projects: ProjectItem[];
  defaultActiveId?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  heading,
  description,
  projects,
  defaultActiveId,
}) => {
  const initialActiveId = defaultActiveId ?? projects[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState(initialActiveId);

  React.useEffect(() => {
    if (projects.length === 0) {
      if (activeId !== "") {
        setActiveId("");
      }
      return;
    }

    const hasActive = projects.some((project) => project.id === activeId);
    if (!hasActive) {
      setActiveId(defaultActiveId ?? projects[0].id);
    }
  }, [projects, defaultActiveId, activeId]);

  const activeProject = projects.find((project) => project.id === activeId);

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            color="text.primary"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 1,
              "&::before": {
                content: '"> "',
                color: "text.secondary",
                marginRight: 1,
              },
            }}
          >
            {heading}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.35fr 0.65fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <ProjectsList
            projects={projects}
            activeId={activeId}
            onSelect={setActiveId}
          />

          <ProjectPreview project={activeProject} />
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
