"use client";

import Stack from "@mui/material/Stack";
import NavLink from "@/components/atoms/NavLink";
import { useTranslations } from "next-intl";

export interface NavItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavItem[];
  activeHref?: string;
}

// Desktop nav: white pill containing pill links (visible from lg up).
export default function NavigationMenu({
  items,
  activeHref,
}: NavigationMenuProps) {
  const tAria = useTranslations("aria");

  return (
    <Stack
      component="nav"
      aria-label={tAria("mainNavigation")}
      direction="row"
      sx={{
        display: { xs: "none", lg: "flex" },
        gap: "0.25rem",
        p: "0.3rem",
        bgcolor: "background.paper",
        borderRadius: "999px",
      }}
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={activeHref === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </Stack>
  );
}
