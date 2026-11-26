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
        gap: 0.5,
      }}
    >
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ letterSpacing: "0.08em" }}
      >
        {label}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ wordBreak: "break-word" }}
      >
        {href ? (
          <Link
            href={href}
            color="inherit"
            underline="hover"
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
