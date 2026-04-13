"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 2.5, md: 3 },
        p: { xs: 3, md: 3.5 },
        border: "1px solid",
        borderColor: "divider",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
        "&:hover": {
          borderColor: "text.secondary",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.02)"
              : "rgba(0,0,0,0.01)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          flexShrink: 0,
          color: "text.primary",
          mt: 0.25,
          "& > svg": { width: 28, height: 28 },
        }}
      >
        {icon}
      </Box>

      {/* Text */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            mb: 1,
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            color="text.primary"
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              color: "text.disabled",
              flexShrink: 0,
            }}
          >
            {num}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.75, fontSize: "0.82rem" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceCard;
