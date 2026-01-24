"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { highlights, projects } from "../data";

export default function PortfolioManifesto() {
  const gallery = projects.slice(-2);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          border: "3px solid #0b0b0b",
          background: "#fffef8",
          p: { xs: 3, md: 4 },
          boxShadow: "10px 10px 0 #0b0b0b",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              Manifesto
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Brutalism keeps the interface honest. Blocks, grids, and loud
              typography so the work speaks without decoration.
            </Typography>
          </Box>
          <Stack spacing={2} sx={{ flex: 1 }}>
            {highlights.map((item) => (
              <Box
                key={item}
                sx={{
                  border: "2px solid #0b0b0b",
                  p: 2,
                  background: "#f7d7ff",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  letterSpacing: "0.18em",
                }}
              >
                {item}
              </Box>
            ))}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
                pt: 2,
              }}
            >
              {gallery.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    border: "2px solid #0b0b0b",
                    minHeight: 140,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "6px 6px 0 #0b0b0b",
                  }}
                />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
