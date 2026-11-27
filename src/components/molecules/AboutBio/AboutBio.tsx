"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface AboutBioProps {
  paragraphs: string[];
}

const AboutBio: React.FC<AboutBioProps> = ({ paragraphs }) => {
  return (
    <Stack spacing={2}>
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={`about-paragraph-${index}`}
          variant="body1"
          color="text.secondary"
          sx={{ m: 0, lineHeight: 1.7 }}
        >
          {paragraph}
        </Typography>
      ))}
    </Stack>
  );
};

export default AboutBio;
