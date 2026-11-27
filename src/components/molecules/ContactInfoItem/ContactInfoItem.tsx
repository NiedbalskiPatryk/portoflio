"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface ContactInfoItemProps {
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ label, value, href }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <Typography
        component="span"
        color="text.secondary"
        sx={{
          fontSize: "0.78rem",
          lineHeight: 1.4,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </Typography>
      <Typography
        component="span"
        color="text.primary"
        sx={{ fontWeight: 600, overflowWrap: "anywhere" }}
      >
        {href ? (
          <Link
            href={href}
            color="inherit"
            underline="hover"
            sx={{
              "&:focus-visible": {
                outline: "2px solid #111111",
                outlineOffset: "2px",
                borderRadius: "4px",
              },
            }}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {value}
          </Link>
        ) : (
          value
        )}
      </Typography>
    </Box>
  );
};

export default ContactInfoItem;
