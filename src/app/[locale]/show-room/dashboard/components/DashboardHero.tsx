"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function DashboardHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(at 15% 20%, rgba(99, 102, 241, 0.18) 0%, transparent 55%),
            radial-gradient(at 85% 10%, rgba(34, 197, 94, 0.12) 0%, transparent 45%),
            radial-gradient(at 70% 80%, rgba(236, 72, 153, 0.12) 0%, transparent 55%)
          `,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#a5b4fc",
                letterSpacing: 2,
                fontWeight: 600,
              }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: 1,
                fontWeight: 700,
                fontSize: { xs: "2.2rem", md: "3rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Control room for product growth
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, maxWidth: 520 }}
            >
              Track revenue, activation, and retention in one place. Visual
              analytics, realtime filters, and a clean dark interface.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 2.25,
                py: 1,
                fontSize: "0.85rem",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.25) 100%)",
                border: "1px solid rgba(168, 85, 247, 0.6)",
                color: "#eef2ff",
                boxShadow:
                  "0 0 24px rgba(99, 102, 241, 0.35), 0 0 60px rgba(168, 85, 247, 0.25)",
                backdropFilter: "blur(12px)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(168, 85, 247, 0.35) 100%)",
                  boxShadow:
                    "0 0 28px rgba(99, 102, 241, 0.5), 0 0 70px rgba(168, 85, 247, 0.35)",
                },
              }}
            >
              Export report
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 2.25,
                py: 1,
                fontSize: "0.85rem",
                borderRadius: "14px 4px 14px 4px",
                borderColor: "rgba(129, 140, 248, 0.5)",
                color: "#e2e8f0",
                background: "rgba(15, 23, 42, 0.35)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 18px rgba(99, 102, 241, 0.25)",
                "&:hover": {
                  borderColor: "rgba(168, 85, 247, 0.6)",
                  bgcolor: "rgba(99, 102, 241, 0.12)",
                  boxShadow: "0 0 24px rgba(168, 85, 247, 0.3)",
                },
              }}
            >
              Schedule sync
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
