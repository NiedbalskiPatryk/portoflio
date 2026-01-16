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
    <Box>
      <Typography
        variant="h2"
        component="h2"
        color="text.primary"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          fontWeight: 700,
          mb: 1,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        color="text.secondary"
        sx={{
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          fontWeight: 500,
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};

export default AboutHeader;
