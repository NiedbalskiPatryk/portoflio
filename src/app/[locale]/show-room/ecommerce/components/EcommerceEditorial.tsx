"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { collections, editorialLooks } from "../data";

export default function EcommerceEditorial() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          gap: 3,
        }}
      >
        <Box sx={{ gridColumn: { xs: "span 1", md: "span 5" } }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.2em",
              color: "#6b6b6b",
            }}
          >
            Editorial notes
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: 2,
              fontFamily: "\"Playfair Display\", serif",
              fontSize: { xs: "2.1rem", md: "2.8rem" },
              lineHeight: 1,
            }}
          >
            The silhouette is
            <br />
            the statement.
          </Typography>
          <Stack spacing={2} sx={{ mt: 3 }}>
            {collections.map((item) => (
              <Box key={item.title} sx={{ borderBottom: "1px solid #d8d2c9", pb: 2 }}>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            gridColumn: { xs: "span 1", md: "span 7" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {editorialLooks.map((item) => (
            <Box key={item.id}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "3/4",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 0,
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ mt: 1.5, textTransform: "uppercase", letterSpacing: "0.2em" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
                {item.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
