"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface AboutHeaderProps {
  name: string;
  role: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ name, role }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
      <Typography
        variant="h3"
        component="h3"
        color="text.primary"
        sx={{ m: 0, fontSize: { xs: "1.6rem", md: "2rem" } }}
      >
        {name}
      </Typography>
      <Typography
        component="p"
        color="text.secondary"
        sx={{
          m: 0,
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};

export default AboutHeader;
