"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <Box
    component="article"
    sx={{
      bgcolor: "background.paper",
      borderRadius: "1.5rem",
      p: { xs: 3, md: 4 },
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    <Box
      aria-hidden="true"
      sx={{
        color: "text.primary",
        display: "flex",
        "& > svg": { width: 32, height: 32 },
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h3"
      component="h3"
      sx={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: 0 }}
    >
      {title}
    </Typography>
    <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
      {description}
    </Typography>
  </Box>
);

export default ServiceCard;
