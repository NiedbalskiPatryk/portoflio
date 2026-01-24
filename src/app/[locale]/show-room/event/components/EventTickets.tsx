"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { tickets } from "../data";

export default function EventTickets() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, pb: 10 }}>
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          Tickets
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {tickets.map((ticket, index) => (
            <Box
              key={ticket.name}
              sx={{
                border: index === 1 ? "2px solid #f7ff00" : "2px solid #f7f7f2",
                p: 3,
                background: index === 1 ? "#151515" : "#0b0b0b",
              }}
            >
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase", letterSpacing: "0.3em" }}
              >
                {ticket.name}
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1, fontWeight: 700, color: "#f7ff00" }}
              >
                {ticket.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(247,247,242,0.7)" }}>
                {ticket.detail}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: 0,
                  backgroundColor: "#f7ff00",
                  color: "#0b0b0b",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.75rem",
                  "&:hover": { backgroundColor: "#e8ef00" },
                }}
              >
                Reserve
              </Button>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
