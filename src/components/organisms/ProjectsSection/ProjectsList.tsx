"use client";

import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ProjectListItem } from "@/components/molecules";
import type { ProjectItem } from "./types";

export interface ProjectsListProps {
  projects: ProjectItem[];
  activeId?: string;
  onSelect: (id: string) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  activeId,
  onSelect,
}) => {
  if (projects.length === 0) {
    return (
      <Box sx={{ py: 2 }}>
        <Typography variant="body2" color="text.secondary">
          No projects available.
        </Typography>
      </Box>
    );
  }

  return (
    <List disablePadding sx={{ width: "100%" }}>
      {projects.map((project, index) => {
        const isSelected = project.id === activeId;
        return (
          <React.Fragment key={project.id}>
            <ListItem disablePadding>
              <ProjectListItem
                id={project.id}
                name={project.name}
                selected={isSelected}
                onSelect={onSelect}
              />
            </ListItem>
            {index < projects.length - 1 && (
              <Divider sx={{ borderColor: "divider" }} />
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default ProjectsList;
