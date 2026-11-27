"use client";

import { HEADER_HEIGHT } from "@/components/organisms/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const STEPS = ["talk", "quote", "build", "launch"] as const;

export default function ProcessSection() {
  const t = useTranslations("process");

  return (
    <Box
      component="section"
      id="process"
      sx={{
        scrollMarginTop: `${HEADER_HEIGHT}px`,
        pt: { xs: "4rem", md: "5.5rem" },
        pb: { xs: 2, md: 4 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
          >
            {t("heading")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
              maxWidth: "38rem",
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        <Box
          component="ol"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: 2,
          }}
        >
          {STEPS.map((key, index) => {
            const inverted = index === STEPS.length - 1;
            const accent = index === 0 || inverted;
            return (
              <Box
                component="li"
                key={key}
                sx={{
                  bgcolor: inverted ? "inverse.background" : "background.paper",
                  color: inverted ? "#ffffff" : "text.primary",
                  borderRadius: "1.5rem",
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 1rem 2rem rgba(17, 17, 17, 0.08)",
                  },
                }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "999px",
                    bgcolor: accent ? "secondary.main" : "text.primary",
                    color: accent ? "secondary.contrastText" : "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontSize: "1.2rem", fontWeight: 600, letterSpacing: 0 }}
                >
                  {t(`steps.${key}.title`)}
                </Typography>
                <Typography
                  sx={{
                    color: inverted ? "#cfcfcf" : "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {t(`steps.${key}.text`)}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
