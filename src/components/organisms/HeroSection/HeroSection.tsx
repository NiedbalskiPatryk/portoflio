"use client";

import FloatingCode from "@/components/atoms/FloatingCode";
import {
  CTAGroup,
  LocationBadge,
  TechStackMarquee,
} from "@/components/molecules";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface HeroSectionProps {
  location: string;
  name: string;
  role: string;
  description: string;
  techLabel: string;
  primaryCTA: {
    label: string;
    onClick?: () => void;
    href?: string;
    color?: "default" | "light";
  };
  secondaryCTA: {
    label: string;
    onClick?: () => void;
    href?: string;
    color?: "default" | "light";
  };
  technologies: string[];
  snippets: {
    leftTop: string;
    leftMid: string;
    rightTop: string;
    rightMid: string;
  };
}

export default function HeroSection({
  location,
  name,
  role,
  description,
  techLabel,
  primaryCTA,
  secondaryCTA,
  technologies,
  snippets,
}: HeroSectionProps) {
  const theme = useTheme();
  const { gradientStart, gradientMid, gradientEnd } = theme.palette.surface;

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating code snippets */}
      <FloatingCode
        snippet={snippets.leftTop}
        position="left"
        offsetY="15%"
        delay={0}
      />
      <FloatingCode
        snippet={snippets.leftMid}
        position="left"
        offsetY="60%"
        delay={200}
      />
      <FloatingCode
        snippet={snippets.rightTop}
        position="right"
        offsetY="20%"
        delay={100}
      />
      <FloatingCode
        snippet={snippets.rightMid}
        position="right"
        offsetY="65%"
        delay={300}
      />

      {/* Gradient circle background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "350px", sm: "500px", md: "700px" },
          height: { xs: "350px", sm: "500px", md: "700px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gradientStart} 0%, ${gradientMid} 30%, ${gradientEnd} 50%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={{ xs: 3, sm: 4 }}
          alignItems="center"
          textAlign="center"
        >
          {/* Location badge */}
          <LocationBadge location={location} />

          {/* Heading */}
          <Box>
            <Typography
              variant="h1"
              component="h1"
              color="text.primary"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                mb: 1,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.5rem" },
              }}
            >
              {role}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              fontSize: { xs: "0.875rem", md: "1rem" },
              display: "-webkit-box",
              WebkitLineClamp: { xs: 3, sm: 4 },
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>

          {/* CTA Buttons */}
          <CTAGroup
            primaryCTA={{
              ...primaryCTA,
              variant: "outlined",
              color: primaryCTA.color,
            }}
            secondaryCTA={{
              ...secondaryCTA,
              variant: "outlined",
              color: secondaryCTA.color,
            }}
          />

          {/* Technologies */}
          <Box sx={{ pt: { xs: 2, md: 4 }, width: "100%" }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mb: 2,
                display: "block",
                fontSize: { xs: "0.7rem", md: "0.75rem" },
              }}
            >
              {techLabel}
            </Typography>
            <TechStackMarquee technologies={technologies} speed={35} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
