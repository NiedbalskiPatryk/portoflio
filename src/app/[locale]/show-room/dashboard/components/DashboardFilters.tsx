"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const timeRanges = ["Last 7 days", "Last 30 days", "Quarter", "Year"];
const regions = ["Global", "EMEA", "Americas", "APAC"];

export default function DashboardFilters() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 2,
          p: { xs: 2.5, md: 3 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(16, 16, 22, 0.7)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              select
              size="small"
              label="Time range"
              defaultValue={timeRanges[1]}
              sx={{ minWidth: 160 }}
            >
              {timeRanges.map((range) => (
                <MenuItem key={range} value={range}>
                  {range}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              size="small"
              label="Region"
              defaultValue={regions[0]}
              sx={{ minWidth: 140 }}
            >
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              label="Search"
              placeholder="Search clients or invoices"
              sx={{ minWidth: { xs: "100%", sm: 220 } }}
            />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="caption" color="text.secondary">
              Segments
            </Typography>
            {["SaaS", "Enterprise", "SMB"].map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
            <Button
              variant="text"
              size="small"
              sx={{ color: "text.secondary" }}
            >
              Clear
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
