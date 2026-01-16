"use client";

import Stack from "@mui/material/Stack";
import NavLink from "@/components/atoms/NavLink";

export interface NavItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavItem[];
  activeHref?: string;
}

export default function NavigationMenu({
  items,
  activeHref,
}: NavigationMenuProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={4}
      sx={{
        display: { xs: "none", md: "flex" },
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
