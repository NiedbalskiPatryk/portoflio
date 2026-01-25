"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const chartCardStyle = {
  p: { xs: 2.5, md: 3 },
  borderRadius: 3,
  border: "1px solid",
  borderColor: "rgba(255,255,255,0.08)",
  background: "rgba(12, 12, 18, 0.8)",
  backdropFilter: "blur(12px)",
};

function LineChart() {
  const t = useTranslations("showRoomProjects.dashboard.charts");
  const lineSeries = t.raw("lineSeries") as number[];
  const width = 320;
  const height = 120;
  const padding = 12;
  const max = Math.max(...lineSeries);
  const min = Math.min(...lineSeries);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (lineSeries.length - 1);

  const points = lineSeries
    .map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `${points} ${width - padding},${height - padding} ${padding},${height - padding}`;

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
        {t("revenueTrend")}
      </Typography>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <svg width="100%" height="140" viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.35)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#lineFill)"
            stroke="none"
            points={areaPoints}
          />
          <polyline
            fill="none"
            stroke="#6366f1"
            strokeWidth="2.5"
            points={points}
          />
        </svg>
      </Box>
    </Box>
  );
}

function BarChart() {
  const t = useTranslations("showRoomProjects.dashboard.charts");
  const barSeries = t.raw("barSeries") as { label: string; value: number }[];
  const maxValue = Math.max(...barSeries.map((item) => item.value));
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
        {t("weeklyActivity")}
      </Typography>
      <Stack direction="row" spacing={1.5} alignItems="flex-end" sx={{ height: 140 }}>
        {barSeries.map((item) => (
          <Box key={item.label} sx={{ textAlign: "center", flex: 1 }}>
            <Box
              sx={{
                height: `${(item.value / maxValue) * 100}%`,
                minHeight: 18,
                borderRadius: 2,
                background:
                  "linear-gradient(180deg, rgba(99, 102, 241, 0.9) 0%, rgba(99, 102, 241, 0.4) 100%)",
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

function DonutChart() {
  const t = useTranslations("showRoomProjects.dashboard.charts");
  const donutSeries = t.raw("donutSeries") as {
    label: string;
    value: number;
    color: string;
  }[];
  const total = donutSeries.reduce((sum, item) => sum + item.value, 0);
  const gradient = donutSeries
    .map((item, index) => {
      const start = donutSeries
        .slice(0, index)
        .reduce((sum, current) => sum + current.value, 0);
      const end = start + item.value;
      const startPercent = (start / total) * 100;
      const endPercent = (end / total) * 100;
      return `${item.color} ${startPercent}% ${endPercent}%`;
    })
    .join(", ");

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
        {t("spendDistribution")}
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: `conic-gradient(${gradient})`,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 18,
              borderRadius: "50%",
              background: "rgba(10, 10, 14, 0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
            },
          }}
        />
        <Stack spacing={1}>
          {donutSeries.map((item) => (
            <Stack key={item.label} direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: item.color,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {item.label} {item.value}%
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default function DashboardCharts() {
  const t = useTranslations("showRoomProjects.dashboard.charts");
  const kpis = t.raw("kpis") as { label: string; value: string; change: string }[];

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {kpis.map((kpi) => (
          <Box
            key={kpi.label}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: "1px solid",
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(12, 12, 18, 0.8)",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              {kpi.label}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
              {kpi.value}
            </Typography>
            <Typography variant="caption" sx={{ color: "#22c55e" }}>
              {kpi.change}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr" },
          gap: 2,
        }}
      >
        <Box sx={chartCardStyle}>
          <LineChart />
        </Box>
        <Box sx={chartCardStyle}>
          <BarChart />
        </Box>
        <Box sx={chartCardStyle}>
          <DonutChart />
        </Box>
      </Box>
    </Container>
  );
}
