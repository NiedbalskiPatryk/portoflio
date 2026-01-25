"use client";

import Box from "@mui/material/Box";
import ColorWash from "@/components/atoms/ColorWash";
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
  useColorWash?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function ShowRoomLayout({
  children,
  projects,
  currentProjectId,
  comingSoonLabel,
  browseProjectsLabel,
  showThemeToggle = true,
  useColorWash = false,
  backHref,
  backLabel,
}: ShowRoomLayoutProps) {
  const header = (
    <ShowRoomHeader
      showThemeToggle={showThemeToggle}
      backHref={backHref}
      backLabel={backLabel}
    />
  );

  const content = (
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
  );

  const layoutContent = (
    <>
      {header}
      {content}
    </>
  );

  return (
    <>
      {useColorWash ? (
        <ColorWash>{layoutContent}</ColorWash>
      ) : (
        layoutContent
      )}
      <ShowRoomDrawer
        projects={projects}
        currentProjectId={currentProjectId}
        comingSoonLabel={comingSoonLabel}
        triggerLabel={browseProjectsLabel}
      />
    </>
  );
}
