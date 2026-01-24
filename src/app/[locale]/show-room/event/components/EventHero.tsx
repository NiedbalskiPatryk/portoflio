"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { stats } from "../data";

export default function EventHero() {
  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            border: "2px solid #f7ff00",
            background: "linear-gradient(120deg, #0b0b0b 0%, #151515 100%)",
            overflow: "hidden",
            p: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 15% 20%, rgba(255, 59, 59, 0.45) 0%, transparent 45%), radial-gradient(circle at 75% 25%, rgba(247, 255, 0, 0.25) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
          <Stack spacing={4} sx={{ position: "relative" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ md: "flex-end" }}
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: "0.5em",
                    color: "#f7ff00",
                    fontWeight: 700,
                  }}
                >
                  ⚡ most chosen
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    mt: 1,
                    fontSize: { xs: "2.8rem", md: "4.8rem" },
                    lineHeight: 0.9,
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Velocity
                  <br />
                  Live 2024
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, maxWidth: 520, color: "rgba(247,247,242,0.8)" }}
                >
                  High-impact event for concerts, festivals, and tech conferences.
                  Two nights. Three stages. Zero quiet moments.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 0,
                    backgroundColor: "#f7ff00",
                    color: "#0b0b0b",
                    px: 3,
                    py: 1.3,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    fontSize: "0.75rem",
                    "&:hover": { backgroundColor: "#e8ef00" },
                  }}
                >
                  Get tickets
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    borderColor: "#f7f7f2",
                    color: "#f7f7f2",
                    px: 3,
                    py: 1.3,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    fontSize: "0.75rem",
                    "&:hover": { borderColor: "#f7ff00", color: "#f7ff00" },
                  }}
                >
                  Watch trailer
                </Button>
              </Stack>
            </Stack>

            <Box
              sx={{
                border: "2px solid #f7f7f2",
                minHeight: { xs: 240, md: 360 },
                display: "grid",
                placeItems: "center",
                position: "relative",
                background:
                  "linear-gradient(140deg, rgba(255,59,59,0.6) 0%, rgba(11,11,11,0.9) 60%)",
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "2px solid #f7ff00",
                  display: "grid",
                  placeItems: "center",
                  color: "#f7ff00",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  background: "rgba(11,11,11,0.6)",
                }}
              >
                ▶
              </Box>
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#f7f7f2",
                }}
              >
                Hero video
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 2,
              }}
            >
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    border: "2px solid #f7f7f2",
                    p: 2,
                    background: "rgba(11,11,11,0.6)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ letterSpacing: "0.3em", textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mt: 1, color: "#f7ff00" }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
