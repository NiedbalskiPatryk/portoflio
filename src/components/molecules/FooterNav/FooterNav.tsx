"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}

export interface FooterNavProps {
  items: FooterNavItem[];
}

const FooterNav: React.FC<FooterNavProps> = ({ items }) => {
  return (
    <Box component="nav" aria-label="Footer navigation">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "1fr",
          },
          gap: 1,
        }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            variant="body2"
            color="text.primary"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              width: "fit-content",
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default FooterNav;
