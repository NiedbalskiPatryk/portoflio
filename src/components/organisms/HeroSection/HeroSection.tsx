"use client";

import { HEADER_HEIGHT } from "@/components/organisms/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import HeroSiteWindow from "./HeroSiteWindow";

const focusRing = {
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "text.primary",
    outlineOffset: "2px",
  },
};

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <Box
      id="home"
      component="section"
      sx={{
        scrollMarginTop: `${HEADER_HEIGHT}px`,
        pt: {
          xs: `calc(${HEADER_HEIGHT}px + 1.5rem)`,
          md: `calc(${HEADER_HEIGHT}px + 3rem)`,
        },
        pb: { xs: "4rem", md: "6rem" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        <Box
          sx={{
            flex: "999 1 32rem",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1.4rem", md: "1.75rem" },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              alignSelf: "flex-start",
              px: "0.85rem",
              py: "0.4rem",
              bgcolor: "background.paper",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: 500,
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
            {t("badge")}
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "2.6rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.5rem",
              },
              overflowWrap: "break-word",
            }}
          >
            {t("title")}
            <Box component="span" sx={{ color: "secondary.main" }}>
              .
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.65,
              color: "text.secondary",
              maxWidth: "34rem",
            }}
          >
            {t("description")}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button
              href="#pricing"
              variant="contained"
              color="primary"
              sx={{
                py: "1rem",
                px: "1.6rem",
                "& .cta-arrow": { transition: "transform 0.2s ease" },
                "&:hover .cta-arrow": { transform: "translateX(4px)" },
                ...focusRing,
              }}
            >
              {t("primaryCTA")}
              <Box
                component="span"
                className="cta-arrow"
                aria-hidden="true"
                sx={{ display: "inline-block", ml: "0.5rem" }}
              >
                →
              </Box>
            </Button>
            <Button
              href="#projects"
              variant="outlined"
              sx={{ py: "1rem", px: "1.6rem", ...focusRing }}
            >
              {t("secondaryCTA")}
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 26rem", minWidth: 0 }}>
          <HeroSiteWindow />
        </Box>
      </Container>
    </Box>
  );
}
