"use client";

import Link from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

// Pill-shaped nav link: lives inside the white nav pill in the header and in the drawer.
export default function NavLink({
  href,
  children,
  active = false,
  onClick,
  sx,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      underline="none"
      aria-current={active ? "location" : undefined}
      sx={[
        {
          display: "inline-flex",
          alignItems: "center",
          px: "1rem",
          py: "0.55rem",
          borderRadius: "999px",
          color: active ? "primary.contrastText" : "text.primary",
          bgcolor: active ? "text.primary" : "transparent",
          fontSize: "0.92rem",
          fontWeight: 500,
          lineHeight: 1.4,
          whiteSpace: "nowrap",
          transition: "background-color 0.2s ease, color 0.2s ease",
          "&:hover": {
            bgcolor: active ? "text.primary" : "rgba(17, 17, 17, 0.06)",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "text.primary",
            outlineOffset: "2px",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Link>
  );
}
