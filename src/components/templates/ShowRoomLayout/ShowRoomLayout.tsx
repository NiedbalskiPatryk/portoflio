"use client";

import Box from "@mui/material/Box";
import ShowRoomHeader from "@/components/organisms/ShowRoomHeader";
import ShowRoomDrawer, {
  type ShowRoomProject,
} from "@/components/organisms/ShowRoomDrawer";

interface ShowRoomLayoutProps {
  children: React.ReactNode;
  projects: ShowRoomProject[];
  currentProjectId?: string;
  comingSoonLabel?: string;
  browseProjectsLabel?: string;
  showThemeToggle?: boolean;
}

export default function ShowRoomLayout({
  children,
  projects,
  currentProjectId,
  comingSoonLabel,
  browseProjectsLabel,
  showThemeToggle = true,
}: ShowRoomLayoutProps) {
  return (
    <>
      <ShowRoomHeader showThemeToggle={showThemeToggle} />
      <Box
        component="main"
        sx={{
          pt: "72px", // Header height
          pb: "100px", // Space for drawer trigger
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
      <ShowRoomDrawer
        projects={projects}
        currentProjectId={currentProjectId}
        comingSoonLabel={comingSoonLabel}
        triggerLabel={browseProjectsLabel}
      />
    </>
  );
}
