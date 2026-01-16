"use client";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavLink from "@/components/atoms/NavLink";
import type { NavItem } from "@/components/molecules/NavigationMenu";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeHref?: string;
}

export default function MobileDrawer({
  open,
  onClose,
  items,
  activeHref,
}: MobileDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          bgcolor: "background.default",
          p: 2,
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <IconButton
          onClick={onClose}
          aria-label="Close menu"
          sx={{ color: "text.primary" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Stack component="nav" spacing={3} sx={{ px: 2 }}>
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            active={activeHref === item.href}
            sx={{ fontSize: "1.125rem" }}
          >
            {item.label}
          </NavLink>
        ))}
      </Stack>
    </Drawer>
  );
}
