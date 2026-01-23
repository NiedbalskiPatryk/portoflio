"use client";

import {
  AboutBio,
  AboutHeader,
  CTAGroup,
  ProfileMedia,
} from "@/components/molecules";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

interface AboutSectionCTA {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface AboutSectionProps {
  heading: string;
  profileImage: {
    src?: string;
    alt: string;
  };
  name: string;
  role: string;
  bio: string[];
  primaryCTA: AboutSectionCTA;
  secondaryCTA: AboutSectionCTA;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  heading,
  profileImage,
  name,
  role,
  bio,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            color="text.primary"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 1,
              "&::before": {
                content: '"> "',
                color: "text.secondary",
                marginRight: 1,
              },
            }}
          >
            {heading}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 6fr) minmax(0, 4fr)",
            },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, md: 4 },
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(10, 10, 10, 0.55)"
                  : theme.palette.background.paper,
              backdropFilter: "blur(10px)",
            }}
          >
            <AboutHeader name={name} role={role} />
            <AboutBio paragraphs={bio} />
            <CTAGroup
              primaryCTA={{
                label: primaryCTA.label,
                onClick: primaryCTA.onClick,
                href: primaryCTA.href,
                variant: "contained",
              }}
              secondaryCTA={{
                label: secondaryCTA.label,
                onClick: secondaryCTA.onClick,
                href: secondaryCTA.href,
                variant: "outlined",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProfileMedia
              src={profileImage.src}
              alt={profileImage.alt}
              fallbackText={name}
              width={300}
              height={360}
              variant="rounded"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
