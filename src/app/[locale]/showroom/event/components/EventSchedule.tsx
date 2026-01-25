"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EventSchedule() {
  const t = useTranslations("showRoomProjects.event.schedule");
  const schedule = t.raw("items") as Array<{ time: string; title: string; detail: string }>;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          border: "2px solid #f7f7f2",
          background: "#0f0f0f",
          p: { xs: 2.5, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.08em",
            mb: 3,
          }}
        >
          {t("title")}
        </Typography>
        <Stack spacing={2.5}>
          {schedule.map((item) => (
            <Stack
              key={item.time}
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              alignItems={{ md: "center" }}
              sx={{
                borderBottom: "1px solid rgba(247,247,242,0.2)",
                pb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  minWidth: 120,
                  color: "#f7ff00",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                {item.time}
              </Typography>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(247,247,242,0.7)" }}>
                  {item.detail}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
