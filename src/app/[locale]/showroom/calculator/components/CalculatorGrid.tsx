"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function CalculatorGrid() {
  const t = useTranslations("showRoomProjects.calculator.grid");
  const assumptions = t.raw("assumptions") as Array<{ label: string; value: string }>;
  const savings = t.raw("savings") as Array<{ label: string; value: string }>;
  const inputFields = t.raw("inputs") as Array<{ label: string; value: string }>;

  return (
    <Container maxWidth="lg" sx={{ pb: 10 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
          gap: 3,
        }}
      >
        <Card
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(15, 23, 42, 0.08)",
            boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
            backgroundColor: "#ffffff",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {t("inputsTitle")}
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280", mb: 3 }}>
              {t("inputsDescription")}
            </Typography>
            <Stack spacing={2.5}>
              {inputFields.map((field) => (
                <TextField key={field.label} label={field.label} defaultValue={field.value} />
              ))}
            </Stack>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#2563eb",
                textTransform: "none",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              {t("updateResults")}
            </Button>
          </CardContent>
        </Card>

        <Stack spacing={3}>
          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {t("results.title")}
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="caption" sx={{ color: "#6b7280" }}>
                    {t("results.roiLabel")}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: "#2563eb" }}>
                    {t("results.roiValue")}
                  </Typography>
                </Box>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    {t("results.paybackLabel")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {t("results.paybackValue")}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    {t("results.impactLabel")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {t("results.impactValue")}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card
            sx={{
              borderRadius: 3,
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
              backgroundColor: "#ffffff",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                {t("assumptionsTitle")}
              </Typography>
              <Stack spacing={2}>
                {assumptions.map((item) => (
                  <Stack key={item.label} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </Stack>
                ))}
                <Divider />
                {savings.map((item) => (
                  <Stack key={item.label} direction="row" justifyContent="space-between">
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
