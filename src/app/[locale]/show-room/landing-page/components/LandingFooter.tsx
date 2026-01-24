"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { heroData } from "../data";

const footerGroups = [
  {
    title: "Product",
    links: ["Overview", "Sync", "Security", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Status", "Guides", "Templates"],
  },
  {
    title: "Community",
    links: ["Figma Community", "Design Kit", "Forum", "Wall of Love"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Legal", "Contact"],
  },
];

export default function LandingFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        mt: { xs: 8, md: 12 },
        borderTop: "1px solid",
        borderColor: "rgba(255,255,255,0.08)",
        bgcolor: "rgba(8, 8, 12, 0.9)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr repeat(4, 1fr)" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "text.primary",
              }}
            >
              {heroData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
              A Figma-style product footer with sharp typography, clean columns,
              and a soft grid glow.
            </Typography>
            <Box
              sx={{
                mt: 1,
                px: 2,
                py: 0.75,
                borderRadius: 2,
                border: "1px solid rgba(99, 102, 241, 0.3)",
                background: "rgba(99, 102, 241, 0.08)",
                width: "fit-content",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#c4b5fd", fontWeight: 600, letterSpacing: 0.5 }}
              >
                Designed for Figma workflows
              </Typography>
            </Box>
          </Stack>

          {footerGroups.map((group) => (
            <Stack key={group.title} spacing={1.5}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {group.title}
              </Typography>
              {group.links.map((item) => (
                <Typography
                  key={item}
                  component={Link}
                  href="#"
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 3, md: 4 },
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            2024 {heroData.title}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            {["Twitter", "GitHub", "Dribbble", "Behance"].map((item) => (
              <Typography
                key={item}
                component={Link}
                href="#"
                variant="caption"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "text.primary" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
