"use client";

import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import LogoText from "@/components/atoms/LogoText";
import MobileDrawer from "@/components/molecules/MobileDrawer";
import NavigationMenu, {
  type NavItem,
} from "@/components/molecules/NavigationMenu";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const HEADER_HEIGHT = 72;

export default function Header() {
  const tNav = useTranslations("nav");
  const tAria = useTranslations("aria");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: tNav("services"), href: `/${locale}#services` },
    { label: tNav("projects"), href: `/${locale}#projects` },
    { label: tNav("process"), href: `/${locale}#process` },
    { label: tNav("pricing"), href: `/${locale}#pricing` },
    { label: tNav("about"), href: `/${locale}#about` },
  ];

  const cta: NavItem = {
    label: tNav("cta"),
    href: `/${locale}#contact`,
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
          bgcolor: alpha(theme.palette.background.default, 0.85),
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        })}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            sx={{ height: "100%" }}
          >
            <LogoText />

            <NavigationMenu items={navItems} />

            <Stack direction="row" alignItems="center" gap={{ xs: 0.5, md: 1.5 }}>
              <LanguageSwitcher />

              <Button
                href={cta.href}
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  py: "0.8rem",
                  px: "1.3rem",
                  fontSize: "0.92rem",
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "text.primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                {cta.label}
              </Button>

              <IconButton
                onClick={() => setMobileOpen(true)}
                aria-label={tAria("openMenu")}
                aria-expanded={mobileOpen}
                aria-haspopup="dialog"
                sx={{
                  display: { xs: "flex", lg: "none" },
                  width: 44,
                  height: 44,
                  color: "text.primary",
                  bgcolor: "background.paper",
                  "&:hover": { bgcolor: "background.paper" },
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "text.primary",
                    outlineOffset: "2px",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
        cta={cta}
      />
    </>
  );
}

export { HEADER_HEIGHT };
