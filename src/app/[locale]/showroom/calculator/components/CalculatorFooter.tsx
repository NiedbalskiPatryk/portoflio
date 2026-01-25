"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function CalculatorFooter() {
  const t = useTranslations("showRoomProjects.calculator.footer");
  const links = t.raw("links") as string[];
  const badges = t.raw("badges") as string[];

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
        background:
          "linear-gradient(135deg, rgba(37, 99, 235, 0.04), rgba(14, 165, 233, 0.04))",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr 1fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {t("brand")}
            </Typography>
            <Typography variant="body2" sx={{ color: "#475569", maxWidth: 320 }}>
              {t("tagline")}
            </Typography>
          </Stack>

          <Stack spacing={1.5}>
            {links.map((item) => (
              <Typography key={item} variant="body2" sx={{ color: "#1f2937" }}>
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1} alignItems={{ xs: "flex-start", md: "flex-end" }}>
            {badges.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 999,
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  color: "#1d4ed8",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item}
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "rgba(15, 23, 42, 0.08)" }} />

        <Typography variant="caption" sx={{ color: "#64748b" }}>
          {t("legal")}
        </Typography>
      </Container>
    </Box>
  );
}
