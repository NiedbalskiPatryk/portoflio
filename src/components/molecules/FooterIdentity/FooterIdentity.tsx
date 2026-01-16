"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
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
        variant="h6"
        color="text.primary"
        sx={{
          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
          fontWeight: 600,
        }}
      >
        {name}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            maxWidth: { xs: "100%", md: "32ch" },
          }}
        >
          {description}
        </Typography>
      )}
      {socialLinks.length > 0 && (
        <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: "wrap" }}>
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              variant="body2"
              color="text.primary"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default FooterIdentity;
