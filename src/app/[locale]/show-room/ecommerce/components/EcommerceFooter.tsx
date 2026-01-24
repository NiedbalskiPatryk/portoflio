"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function EcommerceFooter() {
  return (
    <Box component="footer" sx={{ mt: { xs: 6, md: 10 }, pb: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "#d8d2c9",
            pt: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "\"Playfair Display\", serif" }}
          >
            Atelier Studio
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
            Editorial retail concept. All visuals are mockups for showroom use.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent={{ md: "flex-end" }}>
            {["Terms", "Privacy", "Contact"].map((item) => (
              <Typography
                key={item}
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#6b6b6b",
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
