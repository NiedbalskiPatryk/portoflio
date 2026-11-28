"use client";

import { AboutBio, AboutHeader } from "@/components/molecules";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTranslations } from "next-intl";
import React from "react";

interface AboutSectionCTA {
  label: string;
  href: string;
}

export interface AboutSectionProps {
  heading: string;
  name: string;
  role: string;
  /** Bio paragraphs (without the availability note). */
  bio: string[];
  /** B2B / full-time availability note, shown in the dark card. */
  availability: string;
  /** Job titles, e.g. "Tech Lead". */
  roles: string[];
  technologies: string[];
  primaryCTA: AboutSectionCTA;
  /** External link (LinkedIn). */
  secondaryCTA?: AboutSectionCTA;
}

const cardSx = {
  borderRadius: "1.5rem",
  p: { xs: "1.5rem", md: "2.25rem" },
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  minWidth: 0,
} as const;

const labelSx = {
  fontSize: "0.82rem",
  fontWeight: 600,
  lineHeight: 1.4,
  color: "text.secondary",
} as const;

const listSx = {
  listStyle: "none",
  m: 0,
  p: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
} as const;

const AboutSection: React.FC<AboutSectionProps> = ({
  heading,
  name,
  role,
  bio,
  availability,
  roles,
  technologies,
  primaryCTA,
  secondaryCTA,
}) => {
  const t = useTranslations("about");
  const darkFocus = { outline: "2px solid #f3f3f1", outlineOffset: "2px" };

  return (
    <Box component="section" id="about" aria-labelledby="about-heading">
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          py: { xs: "3rem", md: "4rem" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1.5rem", md: "2rem" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Typography
            id="about-heading"
            variant="h2"
            component="h2"
            sx={{ m: 0, fontSize: { xs: "2.25rem", md: "3rem" } }}
          >
            {heading}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 7fr) minmax(0, 5fr)",
            },
            gap: "1rem",
            alignItems: "stretch",
          }}
        >
          <Box sx={{ ...cardSx, bgcolor: "background.paper" }}>
            <AboutHeader name={name} role={role} />
            <AboutBio paragraphs={bio} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
            <Box
              sx={{
                ...cardSx,
                gap: "1.1rem",
                bgcolor: "inverse.background",
                color: "inverse.text",
              }}
            >
              <Box
                sx={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  px: "0.85rem",
                  py: "0.4rem",
                  borderRadius: "999px",
                  bgcolor: "inverse.paper",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "999px",
                    bgcolor: "secondary.main",
                  }}
                />
                {t("openBadge")}
              </Box>
              <Typography sx={{ m: 0, lineHeight: 1.7, color: "#d6d6d2" }}>
                {availability}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                <Button
                  component="a"
                  href={primaryCTA.href}
                  variant="contained"
                  color="secondary"
                  sx={{ "&:focus-visible": darkFocus }}
                >
                  {primaryCTA.label}
                </Button>
                {secondaryCTA && (
                  <Button
                    component="a"
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    endIcon={<OpenInNewIcon sx={{ fontSize: "1rem !important" }} />}
                    sx={{ "&:focus-visible": darkFocus }}
                  >
                    {secondaryCTA.label}
                  </Button>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                ...cardSx,
                gap: "1.25rem",
                bgcolor: "background.paper",
                flex: 1,
              }}
            >
              {roles.length > 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <Typography component="span" sx={labelSx}>
                    {t("rolesLabel")}
                  </Typography>
                  <Box component="ul" sx={listSx}>
                    {roles.map((item) => (
                      <Box
                        component="li"
                        key={item}
                        sx={{
                          px: "0.9rem",
                          py: "0.4rem",
                          borderRadius: "999px",
                          bgcolor: "background.default",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
              {technologies.length > 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <Typography component="span" sx={labelSx}>
                    {t("stackLabel")}
                  </Typography>
                  <Box component="ul" sx={listSx}>
                    {technologies.map((item) => (
                      <Box
                        component="li"
                        key={item}
                        sx={{
                          px: "0.7rem",
                          py: "0.25rem",
                          borderRadius: "999px",
                          border: "1px solid",
                          borderColor: "divider",
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
