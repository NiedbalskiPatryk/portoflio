"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export interface ProfileMediaProps {
  src?: string;
  alt: string;
  fallbackText?: string;
  size?: number;
  width?: number;
  height?: number;
  variant?: "circular" | "rounded" | "square";
}

function getInitials(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const parts = trimmed.split(/\s+/);
  const first = parts[0]?.[0] || "";
  const second = parts[1]?.[0] || "";
  return `${first}${second}`.toUpperCase();
}

const ProfileMedia: React.FC<ProfileMediaProps> = ({
  src,
  alt,
  fallbackText,
  size = 240,
  width,
  height,
  variant = "rounded",
}) => {
  const initials = getInitials(fallbackText || alt);
  const mediaWidth = width ?? size;
  const mediaHeight = height ?? size;
  const xsWidth = Math.min(mediaWidth, 220);
  const xsHeight = Math.min(mediaHeight, 260);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: { xs: xsWidth, md: mediaWidth },
        height: { xs: xsHeight, md: mediaHeight },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: { xs: -12, md: -18 },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          background:
            "linear-gradient(135deg, rgba(255, 209, 102, 0.08), rgba(116, 214, 215, 0.08))",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.35)",
          zIndex: 0,
        },
      }}
    >
      <Avatar
        src={src}
        alt={alt}
        variant={variant}
        sx={{
          position: "relative",
          width: { xs: xsWidth, md: mediaWidth },
          height: { xs: xsHeight, md: mediaHeight },
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 600,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          boxShadow:
            "0 0 0 6px rgba(255, 255, 255, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.2)",
          zIndex: 1,
        }}
      >
        {initials}
      </Avatar>
    </Box>
  );
};

export default ProfileMedia;
