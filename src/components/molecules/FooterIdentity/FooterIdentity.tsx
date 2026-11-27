"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface FooterIdentityProps {
  name: string;
  description?: string;
  socialLinks?: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

const FooterIdentity: React.FC<FooterIdentityProps> = ({
  name,
  description,
  socialLinks = [],
}) => {
  return (
    <Box>
      <Typography
        component="p"
        sx={{
          m: 0,
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "text.primary",
        }}
      >
        {name}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, maxWidth: "32ch" }}
        >
          {description}
        </Typography>
      )}
      {socialLinks.length > 0 && (
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            mt: 2,
            p: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {socialLinks.map((link) => (
            <Box component="li" key={link.id}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  display: "inline-block",
                  px: "1rem",
                  py: "0.45rem",
                  borderRadius: "999px",
                  bgcolor: "background.paper",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "box-shadow 0.2s ease",
                  "&:hover": { boxShadow: "0 0 0 2px #dcdcd8" },
                  "&:focus-visible": {
                    outline: "2px solid #111111",
                    outlineOffset: "2px",
                  },
                  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
                }}
              >
                {link.label}
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FooterIdentity;
