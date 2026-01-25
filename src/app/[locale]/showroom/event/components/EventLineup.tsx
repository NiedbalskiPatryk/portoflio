"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EventLineup() {
  const t = useTranslations("showRoomProjects.event.lineup");
  const lineup = t.raw("items") as Array<{ name: string; time: string; stage: string }>;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          {t("title")}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {lineup.map((item, index) => (
            <Box
              key={`${item.name}-${index}`}
              sx={{
                border: "2px solid #f7f7f2",
                p: 2.5,
                background: index % 2 === 0 ? "#151515" : "#0b0b0b",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: "#f7ff00",
                }}
              >
                {item.time}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(247,247,242,0.7)" }}>
                {item.stage}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
