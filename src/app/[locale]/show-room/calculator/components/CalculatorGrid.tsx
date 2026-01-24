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
import { assumptions, savings } from "../data";

export default function CalculatorGrid() {
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
              Inputs
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280", mb: 3 }}>
              Adjust your volume and pricing assumptions.
            </Typography>
            <Stack spacing={2.5}>
              <TextField label="Monthly leads" defaultValue="2400" />
              <TextField label="Conversion rate" defaultValue="3.2%" />
              <TextField label="Average contract value" defaultValue="$4,500" />
              <TextField label="Sales cycle (days)" defaultValue="32" />
              <TextField label="Ops cost / month" defaultValue="$18,000" />
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
              Update results
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
                Results
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="caption" sx={{ color: "#6b7280" }}>
                    Estimated annual ROI
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: "#2563eb" }}>
                    4.2x
                  </Typography>
                </Box>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Payback period
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    5.6 months
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Net revenue impact
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    $150,400 / year
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
                Assumptions & savings
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
