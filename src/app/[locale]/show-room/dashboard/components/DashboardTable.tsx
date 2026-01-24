"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { tableRows } from "../data";

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid: { bg: "rgba(34, 197, 94, 0.12)", text: "#22c55e" },
  Pending: { bg: "rgba(245, 158, 11, 0.12)", text: "#f59e0b" },
  Failed: { bg: "rgba(239, 68, 68, 0.12)", text: "#ef4444" },
};

export default function DashboardTable() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 }, pb: 10 }}>
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(12, 12, 18, 0.9)",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Recent invoices
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Latest subscription charges with status and plan details.
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {["Invoice", "Customer", "Plan", "Amount", "Status", "Date"].map(
                  (header) => (
                    <TableCell key={header} sx={{ color: "text.secondary" }}>
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => {
                const status = statusColors[row.status];
                return (
                  <TableRow key={row.id} hover>
                    <TableCell sx={{ color: "text.primary" }}>{row.id}</TableCell>
                    <TableCell sx={{ color: "text.primary" }}>{row.customer}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.plan}</TableCell>
                    <TableCell sx={{ color: "text.primary" }}>{row.amount}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.4,
                          borderRadius: 10,
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          bgcolor: status?.bg ?? "rgba(148, 163, 184, 0.12)",
                          color: status?.text ?? "#94a3b8",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.date}</TableCell>
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
