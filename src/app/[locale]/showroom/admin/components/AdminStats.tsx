"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function AdminStats() {
  const t = useTranslations("showRoomProjects.admin.stats");
  const stats = t.raw("items") as Array<{ label: string; value: string; change: string }>;

  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {stats.map((item) => (
          <Box
            key={item.label}
            sx={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              p: 2.5,
              background: "rgba(12, 12, 18, 0.85)",
            }}
          >
            <Stack spacing={1}>
              <Typography variant="caption" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {item.value}
              </Typography>
              <Typography variant="caption" sx={{ color: "#22c55e" }}>
                {item.change}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
