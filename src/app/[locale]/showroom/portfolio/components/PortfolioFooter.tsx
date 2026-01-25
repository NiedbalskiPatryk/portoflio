"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function PortfolioFooter() {
  const t = useTranslations("showRoomProjects.portfolio.footer");
  const links = t.raw("links") as string[];
  const details = t.raw("details") as Array<{ label: string; value: string }>;

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        borderTop: "3px solid #0b0b0b",
        bgcolor: "#fffef8",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="h5"
              sx={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              {t("brand")}
            </Typography>
            <Typography variant="body2" sx={{ color: "#1f1f1f", maxWidth: 300 }}>
              {t("tagline")}
            </Typography>
            <Box
              sx={{
                px: 2,
                py: 0.75,
                border: "2px solid #0b0b0b",
                backgroundColor: "#f5f2ea",
                boxShadow: "4px 4px 0 #0b0b0b",
                width: "fit-content",
              }}
            >
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
              >
                {t("badge")}
              </Typography>
            </Box>
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

        <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "#0b0b0b" }} />

        <Typography variant="caption" sx={{ color: "#1f1f1f" }}>
          {t("legal")}
        </Typography>
      </Container>
    </Box>
  );
}
