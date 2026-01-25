"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EventFooter() {
  const t = useTranslations("showRoomProjects.event.footer");
  const links = t.raw("links") as string[];
  const socials = t.raw("socials") as string[];
  const details = t.raw("details") as Array<{ label: string; value: string }>;

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        borderTop: "1px solid rgba(255,255,255,0.12)",
        bgcolor: "#0f0f0f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 15% 20%, rgba(244, 114, 182, 0.12), transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr 1fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5" sx={{ letterSpacing: "0.08em" }}>
              {t("brand")}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(247,247,242,0.7)" }}>
              {t("tagline")}
            </Typography>
            <Stack direction="row" spacing={2}>
              {socials.map((item) => (
                <Typography
                  key={item}
                  variant="caption"
                  sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2}>
            {details.map((item) => (
              <Box key={item.label}>
                <Typography variant="overline" sx={{ letterSpacing: "0.2em" }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            {links.map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "rgba(255,255,255,0.12)" }} />

        <Typography variant="caption" sx={{ color: "rgba(247,247,242,0.6)" }}>
          {t("legal")}
        </Typography>
      </Container>
    </Box>
  );
}
