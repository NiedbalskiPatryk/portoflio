import { Box } from "@mui/material";
import { ShowRoomLayout } from "@/components";
import type { ShowRoomProject } from "@/components/organisms/ShowRoomDrawer";
import { getTranslations } from "next-intl/server";
import {
  EventHero,
  EventLineup,
  EventSchedule,
  EventTheme,
  EventTickets,
} from "./components";

export default async function EventPage() {
  const t = await getTranslations("showRoom");

  const projects: ShowRoomProject[] = [
    {
      id: "landing-page",
      title: t("projects.landingPage.title"),
      description: t("projects.landingPage.description"),
      href: "/show-room/landing-page",
      isReady: true,
    },
    {
      id: "dashboard",
      title: t("projects.dashboard.title"),
      description: t("projects.dashboard.description"),
      href: "/show-room/dashboard",
      isReady: true,
    },
    {
      id: "ecommerce",
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      href: "/show-room/ecommerce",
      isReady: true,
    },
    {
      id: "portfolio",
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      href: "/show-room/portfolio",
      isReady: true,
    },
    {
      id: "admin",
      title: t("projects.admin.title"),
      description: t("projects.admin.description"),
      href: "/show-room/admin",
      isReady: true,
    },
    {
      id: "event",
      title: t("projects.event.title"),
      description: t("projects.event.description"),
      href: "/show-room/event",
      isReady: true,
    },
    {
      id: "calculator",
      title: t("projects.calculator.title"),
      description: t("projects.calculator.description"),
      href: "/show-room/calculator",
      isReady: true,
    },
  ];

  return (
    <EventTheme>
      <ShowRoomLayout
        projects={projects}
        currentProjectId="event"
        comingSoonLabel={t("comingSoon")}
        browseProjectsLabel={t("browseProjects")}
        showThemeToggle={false}
      >
        <Box sx={{ pt: 0 }}>
          <EventHero />
          <EventLineup />
          <EventSchedule />
          <EventTickets />
        </Box>
      </ShowRoomLayout>
    </EventTheme>
  );
}
