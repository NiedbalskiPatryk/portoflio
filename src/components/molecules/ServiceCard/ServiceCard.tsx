"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? `linear-gradient(120deg, ${theme.palette.surface.gradientStart} 0%, ${theme.palette.surface.gradientMid} 45%, ${theme.palette.surface.gradientEnd} 100%)`
            : theme.palette.background.paper,
        border: "1px solid",
        borderColor: "divider",
        boxShadow:
          "0 12px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        transition: "all 0.2s ease-in-out",
        height: "100%",
        "&:hover": {
          borderColor: "text.secondary",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? `linear-gradient(120deg, ${theme.palette.surface.gradientMid} 0%, ${theme.palette.surface.gradientStart} 45%, ${theme.palette.surface.gradientEnd} 100%)`
              : "rgba(255, 255, 255, 0.95)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: { xs: 3, md: 4 },
          height: "100%",
          "&:last-child": {
            pb: { xs: 3, md: 4 },
          },
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              mb: 3,
              mr: 2,
              color: "text.primary",
              "& > svg": {
                width: 56,
                height: 56,
              },
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="h3"
              color="text.primary"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                fontWeight: 500,
                mb: 1.5,
                lineHeight: 1.4,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
