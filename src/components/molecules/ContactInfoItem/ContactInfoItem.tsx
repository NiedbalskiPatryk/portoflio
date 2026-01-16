"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface ContactInfoItemProps {
  label: string;
  value: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ label, value }) => {
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
        {value}
      </Typography>
    </Box>
  );
};

export default ContactInfoItem;
