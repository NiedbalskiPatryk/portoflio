"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PortfolioContact() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, pb: 10 }}>
      <Box
        sx={{
          border: "3px solid #0b0b0b",
          background: "#0b0b0b",
          color: "#f5f2ea",
          p: { xs: 3, md: 4 },
          boxShadow: "10px 10px 0 #ff5f1f",
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Start a project
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 520 }}>
            Looking for a loud visual system? Let's build the next bold release.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 0,
                backgroundColor: "#f5f2ea",
                color: "#0b0b0b",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                px: 3,
                "&:hover": { backgroundColor: "#ffffff" },
              }}
            >
              Book a call
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderColor: "#f5f2ea",
                color: "#f5f2ea",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.7rem",
                px: 3,
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
