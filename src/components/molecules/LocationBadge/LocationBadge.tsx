"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";

interface LocationBadgeProps {
  location: string;
}

export default function LocationBadge({ location }: LocationBadgeProps) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        px: 2,
        py: 0.75,
        borderRadius: "100px",
        bgcolor: "surface.overlay",
        border: 1,
        borderColor: "surface.border",
      }}
    >
      <PlaceIcon
        sx={{
          fontSize: "0.875rem",
          color: "text.secondary",
        }}
      />
      <Typography
        variant="body2"
        color="text.secondary"
        component="span"
        sx={{ fontSize: "0.8rem" }}
      >
        {location}
      </Typography>
    </Box>
  );
}
