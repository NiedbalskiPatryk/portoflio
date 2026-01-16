"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoText from "@/components/atoms/LogoText";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavigationMenu, {
  type NavItem,
} from "@/components/molecules/NavigationMenu";
import MobileDrawer from "@/components/molecules/MobileDrawer";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
];

const HEADER_HEIGHT = 72;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

            {/* Right side: Theme toggle + Contact button + Mobile hamburger */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThemeToggle />

              <Button
                variant="outlined"
                href="#contact"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                Contact
              </Button>

              {/* Mobile hamburger */}
              <IconButton
                onClick={handleMobileToggle}
                aria-label="Open menu"
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
        items={[...NAV_ITEMS, { label: "Contact", href: "#contact" }]}
      />
    </>
  );
}

export { HEADER_HEIGHT };
