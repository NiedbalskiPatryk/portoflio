"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";
import ProjectCard from "@/components/atoms/ProjectCard";

export interface ShowRoomProject {
  id: string;
  title: string;
  description: string;
  href: string;
  isReady?: boolean;
}

interface ShowRoomDrawerProps {
  projects: ShowRoomProject[];
  currentProjectId?: string;
  comingSoonLabel?: string;
  triggerLabel?: string;
}

export default function ShowRoomDrawer({
  projects,
  currentProjectId,
  comingSoonLabel = "Coming soon",
  triggerLabel = "Browse projects",
}: ShowRoomDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const projectCount = projects.length;
  const readyCount = projects.filter((p) => p.isReady).length;

  return (
    <>
      {/* Floating trigger button */}
      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1200,
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 3,
          py: 1.5,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(20, 20, 20, 0.95)"
              : "rgba(250, 250, 250, 0.98)",
          backdropFilter: "blur(20px)",
          borderRadius: 0,
          border: 1,
          borderColor:
            theme.palette.mode === "dark" ? "divider" : "rgba(0, 0, 0, 0.18)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 8px 32px rgba(0, 0, 0, 0.5)"
              : "0 8px 32px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          color: "text.primary",
          "&:hover": {
            transform: "translateX(-50%) translateY(-2px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 12px 40px rgba(0, 0, 0, 0.6)"
                : "0 12px 40px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2" fontWeight={500}>
          {triggerLabel}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ ml: 0.5 }}
        >
          ({readyCount}/{projectCount})
        </Typography>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            maxHeight: { xs: "85vh", sm: "75vh" },
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            bgcolor: "background.default",
          },
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            pb: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {triggerLabel}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {readyCount} ready / {projectCount} total
            </Typography>
          </Box>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ color: "text.primary" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer content - Project grid */}
        <Box
          sx={{
            p: 3,
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {projects.map((project) => (
              <Grid
                key={project.id}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  isReady={project.isReady}
                  comingSoonLabel={comingSoonLabel}
                  onNavigate={() => setOpen(false)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Swipe indicator */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 4,
            borderRadius: 0,
            bgcolor: "divider",
          }}
        />
      </Drawer>
    </>
  );
}
