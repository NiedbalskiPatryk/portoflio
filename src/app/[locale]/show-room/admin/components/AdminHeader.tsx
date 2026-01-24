"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function AdminHeader() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 7, md: 9 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ letterSpacing: "0.3em", color: "text.secondary" }}
            >
              Admin panel
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, mt: 1, letterSpacing: "-0.02em" }}
            >
              Minimal ops overview
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Users, activity, and risk signals in one clean workspace.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                minHeight: 40,
                height: 40,
                borderColor: "rgba(255,255,255,0.2)",
                color: "text.primary",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.4)",
                  bgcolor: "rgba(255,255,255,0.04)",
                },
              }}
            >
              Export
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                minHeight: 40,
                height: 40,
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #5558e3 0%, #7c4fe8 100%)",
                },
              }}
            >
              Add user
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
