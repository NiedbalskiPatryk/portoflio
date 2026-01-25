"use client";

import { CTAGroup, ProfileMedia, TechStackMarquee } from "@/components/molecules";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface HeroSectionProps {
  location: string;
  name: string;
  role: string;
  description: string;
  profileImage: {
    src?: string;
    alt: string;
  };
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
  profileImage,
  techLabel,
  primaryCTA,
  secondaryCTA,
  technologies,
  snippets,
}: HeroSectionProps) {
  const theme = useTheme();
  const { gradientStart, gradientMid, gradientEnd, border, overlay } =
    theme.palette.surface;
  const isLight = theme.palette.mode === "light";
  const frameBorder = isLight
    ? alpha(theme.palette.text.primary, 0.18)
    : border;

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "72vh", sm: "85vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 16 },
        pb: {
          xs: 6,
          md: 10,
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            position: "relative",
            border: "1px solid transparent",
            background: isLight
              ? theme.palette.background.paper
              : `linear-gradient(120deg, ${gradientStart} 0%, ${gradientMid} 45%, ${gradientEnd} 100%)`,
            boxShadow: isLight
              ? `0 30px 80px rgba(0, 0, 0, 0.08), inset 0 0 0 1px ${frameBorder}`
              : `inset 0 0 0 1px ${frameBorder}`,
            overflow: "hidden",
            p: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: isLight
                ? `radial-gradient(circle at 12% 18%, ${alpha(
                    theme.palette.text.primary,
                    0.06,
                  )} 0%, transparent 45%), radial-gradient(circle at 85% 30%, ${alpha(
                    theme.palette.text.primary,
                    0.04,
                  )} 0%, transparent 40%)`
                : `radial-gradient(circle at 12% 18%, ${overlay} 0%, transparent 45%), radial-gradient(circle at 85% 30%, ${gradientMid} 0%, transparent 40%)`,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, 7fr) minmax(0, 5fr)",
              },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              position: "relative",
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              <Stack
                spacing={{ xs: 3, md: 4 }}
                alignItems={{ xs: "flex-start", md: "flex-start" }}
                textAlign="left"
              >
                {/* Location badge */}
                {/* <LocationBadge location={location} /> */}

                {/* Heading */}
                <Box>
                  <Typography
                    variant="h1"
                    component="h1"
                    color="text.primary"
                    sx={{
                      fontSize: { xs: "2rem", sm: "2.6rem", md: "3.6rem" },
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
                      fontSize: { xs: "1.2rem", sm: "1.7rem", md: "2.4rem" },
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
                    maxWidth: 560,
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
              </Stack>

              {/* Technologies */}
              <Box
                sx={{
                  pt: { xs: 2, md: 3 },
                  borderTop: `1px solid ${border}`,
                }}
              >
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

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ProfileMedia
                src={profileImage.src}
                alt={profileImage.alt}
                fallbackText={name}
                width={320}
                height={400}
                variant="square"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
