"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EcommerceProductGrid() {
  const t = useTranslations("showRoomProjects.ecommerce.productGrid");
  const products = t.raw("products") as Array<{
    id: string;
    title: string;
    category: string;
    price: string;
    image: string;
  }>;

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
          gap: 3,
        }}
      >
        {products.map((product, index) => (
          <Box
            key={product.id}
            sx={{
              gridColumn: { xs: "span 1", md: index % 5 === 0 ? "span 7" : "span 5" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                aspectRatio: index % 5 === 0 ? "16/9" : "3/4",
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 0,
              }}
            />
            <Stack spacing={1.5} sx={{ mt: 1.75 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "\"Playfair Display\", serif", fontSize: "1.1rem" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#6b6b6b",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {product.category}
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    fontSize: "1rem",
                  }}
                >
                  {product.price}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 0,
                    borderColor: "#141414",
                    color: "#141414",
                    px: 2.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                  }}
                >
                  {t("addToCart")}
                </Button>
                <Typography
                  variant="caption"
                  sx={{ color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}
                >
                  {t("stock")}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
