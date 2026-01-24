"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { projects } from "../data";

export default function PortfolioHero() {
  const [lead, secondary, tertiary] = projects;

  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
              gap: 3,
            }}
          >
            <Box
              sx={{
                border: "3px solid #0b0b0b",
                p: { xs: 3, md: 4 },
                background: "#fffef8",
                boxShadow: "10px 10px 0 #0b0b0b",
                alignSelf: "center",
              }}
            >
              <Typography
                variant="overline"
                sx={{ letterSpacing: "0.4em", fontWeight: 600 }}
              >
                Portfolio
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mt: 1,
                  fontSize: { xs: "2.4rem", md: "3.6rem" },
                  lineHeight: 0.95,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                Architecture
                <br />
                in brutal frames.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  maxWidth: 520,
                  fontSize: "1rem",
                  color: "#1f1f1f",
                }}
              >
                Photo-led selection of raw structures, concrete grids, and bold
                geometry.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", letterSpacing: "0.3em" }}
                >
                  08 photo series
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", letterSpacing: "0.3em" }}
                >
                  Architecture only
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                minHeight: 320,
                border: "3px solid #0b0b0b",
                backgroundImage: `url(${lead?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "10px 10px 0 #0b0b0b",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            {[secondary, tertiary].map((item) => (
              <Box
                key={item?.id}
                sx={{
                  border: "2px solid #0b0b0b",
                  minHeight: 180,
                  backgroundImage: `url(${item?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "6px 6px 0 #0b0b0b",
                }}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
