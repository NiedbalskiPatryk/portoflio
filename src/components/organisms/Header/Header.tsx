"use client";

import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import LogoText from "@/components/atoms/LogoText";
import ShowRoomButton from "@/components/atoms/ShowRoomButton";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import MobileDrawer from "@/components/molecules/MobileDrawer";
import NavigationMenu, {
  type NavItem,
} from "@/components/molecules/NavigationMenu";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";

const HEADER_HEIGHT = 72;

export default function Header() {
  const tNav = useTranslations("nav");
  const tAria = useTranslations("aria");
  const tShowRoom = useTranslations("showRoom");
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_ITEMS: NavItem[] = [
    { label: tNav("home"), href: "#home" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    { label: tNav("projects"), href: "#projects" },
    { label: tNav("faq"), href: "#faqs" },
    { label: tNav("contact"), href: "#contact" },
  ];

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        component="header"
        sx={(theme) => ({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "appBar",
          height: HEADER_HEIGHT,
          bgcolor:
            theme.palette.mode === "dark"
              ? "transparent"
              : alpha(theme.palette.background.default, 0.85),
          backgroundImage:
            theme.palette.mode === "dark"
              ? `linear-gradient(120deg, ${theme.palette.surface.gradientStart} 0%, ${theme.palette.surface.gradientMid} 45%, ${theme.palette.surface.gradientEnd} 100%)`
              : "none",
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
          backdropFilter: "blur(16px)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.22)",
        })}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            {/* Logo */}
            <LogoText />

            {/* Desktop Navigation */}
            <NavigationMenu items={NAV_ITEMS} />

            {/* Right side: Language + Theme toggle + ShowRoom + Mobile hamburger */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <LanguageSwitcher />
              <ThemeToggle />
              <ShowRoomButton label={tShowRoom("navButton")} />

              {/* Mobile hamburger */}
              <IconButton
                onClick={handleMobileToggle}
                aria-label={tAria("openMenu")}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "text.primary",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}

export { HEADER_HEIGHT };
