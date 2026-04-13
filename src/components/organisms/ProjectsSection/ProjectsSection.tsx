"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectGridCard from "./ProjectGridCard";
import type { ProjectItem } from "./types";

export interface ProjectsSectionProps {
  heading: string;
  description?: string;
  projects: ProjectItem[];
  visitSiteLabel?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  heading,
  description,
  projects,
  visitSiteLabel,
}) => {
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
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 3 },
            alignItems: "start",
          }}
        >
          {projects.map((project) => (
            <ProjectGridCard
              key={project.id}
              project={project}
              visitSiteLabel={visitSiteLabel}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
