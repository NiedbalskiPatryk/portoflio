import { Box } from "@mui/material";
import { ShowRoomLayout } from "@/components";
import type { ShowRoomProject } from "@/components/organisms/ShowRoomDrawer";
import { getLocale, getTranslations } from "next-intl/server";
import {
  DashboardCharts,
  DashboardFilters,
  DashboardHero,
  DashboardTable,
  DashboardTheme,
} from "./components";

export default async function DashboardPage() {
  const t = await getTranslations("showRoom");
  const locale = await getLocale();

  const projects: ShowRoomProject[] = [
    {
      id: "landing-page",
      title: t("projects.landingPage.title"),
      description: t("projects.landingPage.description"),
      href: "/showroom/landing-page",
      isReady: true,
    },
    {
      id: "dashboard",
      title: t("projects.dashboard.title"),
      description: t("projects.dashboard.description"),
      href: "/showroom/dashboard",
      isReady: true,
    },
    {
      id: "ecommerce",
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      href: "/showroom/ecommerce",
      isReady: true,
    },
    {
      id: "portfolio",
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      href: "/showroom/portfolio",
      isReady: true,
    },
    {
      id: "admin",
      title: t("projects.admin.title"),
      description: t("projects.admin.description"),
      href: "/showroom/admin",
      isReady: true,
    },
    {
      id: "event",
      title: t("projects.event.title"),
      description: t("projects.event.description"),
      href: "/showroom/event",
      isReady: true,
    },
    {
      id: "calculator",
      title: t("projects.calculator.title"),
      description: t("projects.calculator.description"),
      href: "/showroom/calculator",
      isReady: true,
    },
  ];

  return (
    <DashboardTheme>
      <ShowRoomLayout
        projects={projects}
        currentProjectId="dashboard"
        comingSoonLabel={t("comingSoon")}
        browseProjectsLabel={t("browseProjects")}
        showThemeToggle={false}
        backHref={`/${locale}/showroom`}
        backLabel={t("backToShowroom")}
      >
        <Box sx={{ pt: 0 }}>
          <DashboardHero />
          <DashboardFilters />
          <DashboardCharts />
          <DashboardTable />
        </Box>
      </ShowRoomLayout>
    </DashboardTheme>
  );
}
