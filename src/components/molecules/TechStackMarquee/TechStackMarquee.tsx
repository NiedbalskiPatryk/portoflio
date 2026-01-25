"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { keyframes } from "@mui/system";

interface TechStackMarqueeProps {
  technologies: string[];
  speed?: number;
}

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export default function TechStackMarquee({
  technologies,
  speed = 30,
}: TechStackMarqueeProps) {
  // Duplicate the array to create seamless loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          width: "max-content",
          animation: `${marquee} ${speed}s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <Chip
            key={`${tech}-${index}`}
            label={tech}
            size="small"
            sx={{
              flexShrink: 0,
              color: "text.primary",
              fontWeight: 500,
              borderRadius: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
