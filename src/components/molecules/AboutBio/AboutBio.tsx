"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface AboutBioProps {
  paragraphs: string[];
  maxMobileParagraphs?: number;
}

const AboutBio: React.FC<AboutBioProps> = ({
  paragraphs,
  maxMobileParagraphs = 3,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleParagraphs = isMobile
    ? paragraphs.slice(0, maxMobileParagraphs)
    : paragraphs;

  return (
    <Stack spacing={2}>
      {visibleParagraphs.map((paragraph, index) => (
        <Typography
          key={`about-paragraph-${index}`}
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" },
            lineHeight: 1.7,
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </Stack>
  );
};

export default AboutBio;
