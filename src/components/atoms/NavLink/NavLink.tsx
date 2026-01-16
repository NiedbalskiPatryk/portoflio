"use client";

import Link from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  sx?: SxProps<Theme>;
}

export default function NavLink({
  href,
  children,
  active = false,
  sx,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: active ? "text.primary" : "text.secondary",
        fontSize: "0.875rem",
        fontWeight: 500,
        transition: "color 0.2s ease",
        "&:hover": {
          color: "text.primary",
        },
        ...sx,
      }}
    >
      {children}
    </Link>
  );
}
