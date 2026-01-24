"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { tableRows } from "../data";

const statusStyles: Record<string, { bg: string; color: string }> = {
  Active: { bg: "rgba(34, 197, 94, 0.12)", color: "#22c55e" },
  Paused: { bg: "rgba(245, 158, 11, 0.12)", color: "#f59e0b" },
  Review: { bg: "rgba(99, 102, 241, 0.12)", color: "#6366f1" },
};

const CONTROL_HEIGHT = 40;

export default function AdminTable() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 5 }, pb: 10 }}>
      <Box
        sx={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
          p: { xs: 2, md: 3 },
          background: "rgba(12, 12, 18, 0.9)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Users
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage access, status, and plans.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <TextField
              size="small"
              placeholder="Search users"
              sx={{
                minWidth: 200,
                "& .MuiInputBase-root": { height: CONTROL_HEIGHT },
              }}
            />
            <TextField
              select
              size="small"
              defaultValue="All plans"
              sx={{ "& .MuiInputBase-root": { height: CONTROL_HEIGHT } }}
            >
              {["All plans", "Starter", "Pro", "Business", "Enterprise"].map(
                (plan) => (
                  <MenuItem key={plan} value={plan}>
                    {plan}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField
              select
              size="small"
              defaultValue="Status"
              sx={{ "& .MuiInputBase-root": { height: CONTROL_HEIGHT } }}
            >
              {["Status", "Active", "Paused", "Review"].map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="outlined"
              size="small"
              sx={{ minHeight: CONTROL_HEIGHT, height: CONTROL_HEIGHT }}
            >
              Reset
            </Button>
          </Stack>
        </Stack>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {["User", "Plan", "Status", "Last seen", "Action"].map(
                  (label) => (
                    <TableCell key={label} sx={{ color: "text.secondary" }}>
                      {label}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => {
                const style = statusStyles[row.status] ?? {
                  bg: "rgba(148, 163, 184, 0.15)",
                  color: "#94a3b8",
                };
                return (
                  <TableRow key={row.id} hover>
                    <TableCell sx={{ color: "text.primary" }}>
                      <Stack spacing={0.4}>
                        <Typography variant="body2">{row.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {row.id}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>
                      {row.plan}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.35,
                          borderRadius: 10,
                          bgcolor: style.bg,
                          color: style.color,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          display: "inline-flex",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>
                      {row.lastSeen}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          color: "text.secondary",
                          minHeight: 32,
                          height: 32,
                          px: 1.5,
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
