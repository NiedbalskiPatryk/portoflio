"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function CalculatorHero() {
  const t = useTranslations("showRoomProjects.calculator.hero");

  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.3em",
              color: "#2563eb",
              fontWeight: 600,
            }}
          >
            {t("eyebrow")}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.2rem", md: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            {t("title")}
          </Typography>
          <Typography variant="body1" sx={{ color: "#4b5563" }}>
            {t("description")}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2563eb",
                px: 3,
                py: 1.2,
                textTransform: "none",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              {t("actions.primary")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#2563eb",
                color: "#2563eb",
                px: 3,
                py: 1.2,
                textTransform: "none",
              }}
            >
              {t("actions.secondary")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
