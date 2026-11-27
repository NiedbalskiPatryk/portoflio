"use client";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavLink from "@/components/atoms/NavLink";
import type { NavItem } from "@/components/molecules/NavigationMenu";
import { useTranslations } from "next-intl";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeHref?: string;
  cta?: NavItem;
}

export default function MobileDrawer({
  open,
  onClose,
  items,
  activeHref,
  cta,
}: MobileDrawerProps) {
  const t = useTranslations("aria");

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "min(20rem, 88vw)",
            bgcolor: "background.default",
            backgroundImage: "none",
            borderRadius: "1.5rem 0 0 1.5rem",
            p: 2,
          },
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <IconButton
          onClick={onClose}
          aria-label={t("closeMenu")}
          sx={{
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
          <CloseIcon />
        </IconButton>
      </Box>
      <Stack
        component="nav"
        aria-label={t("mainNavigation")}
        spacing={0.5}
        sx={{ alignItems: "stretch" }}
      >
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            active={activeHref === item.href}
            onClick={onClose}
            sx={{
              fontSize: "1.15rem",
              px: "1.1rem",
              py: "0.85rem",
              borderRadius: "1rem",
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </Stack>
      {cta && (
        <Box sx={{ mt: "auto", pt: 3 }}>
          <Button
            href={cta.href}
            onClick={onClose}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "text.primary",
                outlineOffset: "2px",
              },
            }}
          >
            {cta.label} <span aria-hidden="true">&nbsp;→</span>
          </Button>
        </Box>
      )}
    </Drawer>
  );
}
