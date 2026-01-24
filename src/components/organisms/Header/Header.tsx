"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoText from "@/components/atoms/LogoText";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ShowRoomButton from "@/components/atoms/ShowRoomButton";
import NavigationMenu, {
  type NavItem,
} from "@/components/molecules/NavigationMenu";
import MobileDrawer from "@/components/molecules/MobileDrawer";
import { useTranslations } from "next-intl";

const HEADER_HEIGHT = 72;

export default function Header() {
  const tNav = useTranslations("nav");
  const tAria = useTranslations("aria");
  const tShowRoom = useTranslations("showRoom");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS: NavItem[] = [
    { label: tNav("home"), href: "#home" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    { label: tNav("projects"), href: "#projects" },
    { label: tNav("faq"), href: "#faqs" },
    { label: tNav("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: "appBar",
          height: HEADER_HEIGHT,
          bgcolor: "background.default",
          borderBottom: 1,
          borderColor: scrolled ? "divider" : "transparent",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.4)"
            : "0 0 0 rgba(0, 0, 0, 0)",
          transition: "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
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
