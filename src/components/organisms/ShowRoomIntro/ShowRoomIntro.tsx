"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

interface ShowRoomIntroProps {
  heading: string;
  description: string;
  cta: string;
}

export default function ShowRoomIntro({
  heading,
  description,
  cta,
}: ShowRoomIntroProps) {
  const theme = useTheme();
  const { gradientStart, gradientMid, gradientEnd } = theme.palette.surface;

  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Gradient background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "300px", sm: "450px", md: "600px" },
          height: { xs: "300px", sm: "450px", md: "600px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gradientStart} 0%, ${gradientMid} 30%, ${gradientEnd} 50%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            {heading}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 650,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: "text.primary",
              mt: 2,
            }}
          >
            {cta}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: 4,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-block",
                animation: "bounce 1.5s ease-in-out infinite",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(6px)" },
                },
              }}
            >
              ↓
            </Box>
            Scroll or use the dock below
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
