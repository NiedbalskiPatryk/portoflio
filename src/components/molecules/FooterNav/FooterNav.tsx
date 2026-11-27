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
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "minmax(0, 1fr)",
          },
          gap: "0.6rem",
        }}
      >
        {items.map((item) => (
          <Box component="li" key={item.id}>
            <Link
              href={item.href}
              color="text.primary"
              underline="hover"
              sx={{
                fontWeight: 500,
                width: "fit-content",
                "&:focus-visible": {
                  outline: "2px solid #111111",
                  outlineOffset: "2px",
                  borderRadius: "4px",
                },
              }}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FooterNav;
