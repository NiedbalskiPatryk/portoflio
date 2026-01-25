"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EcommerceHero() {
  const t = useTranslations("showRoomProjects.ecommerce.hero");
  const products = t.raw("products") as Array<{
    id: string;
    title: string;
    category: string;
    price: string;
    image: string;
  }>;
  const featured = products.slice(0, 3);

  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ md: "flex-end" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 3,
                  color: "#5c5c5c",
                  fontWeight: 600,
                }}
              >
                {t("eyebrow")}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mt: 1,
                  fontSize: { xs: "2.8rem", md: "4.2rem" },
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  fontFamily: "\"Playfair Display\", serif",
                }}
              >
                {t("title")}
                <br />
                {t("titleAccent")}
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  borderColor: "#141414",
                  color: "#141414",
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                }}
              >
                {t("actions.lookbook")}
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  backgroundColor: "#141414",
                  color: "#f7f3ee",
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#2a2a2a" },
                }}
              >
                {t("actions.shop")}
              </Button>
            </Stack>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 1.6fr" },
              gap: 4,
              alignItems: "start",
            }}
          >
            <Stack spacing={2.5}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "\"Playfair Display\", serif",
                  lineHeight: 1.1,
                }}
              >
                {t("featured.title")}
              </Typography>
              <Typography variant="body1" sx={{ color: "#6b6b6b" }}>
                {t("featured.description")}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  borderColor: "#141414",
                  color: "#141414",
                  px: 3,
                  py: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  width: "fit-content",
                }}
              >
                {t("featured.cta")}
              </Button>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2.5,
              }}
            >
              {featured.map((item) => (
                <Box key={item.id}>
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "3/4",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 0,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(15,15,15,0) 40%, rgba(15,15,15,0.75) 100%)",
                      }}
                    />
                    <Box sx={{ position: "absolute", inset: 0, p: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#f7f3ee", fontFamily: "\"Playfair Display\", serif" }}
                      >
                        {item.title}
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" sx={{ color: "#f7f3ee", letterSpacing: "0.12em" }}>
                          {item.price}
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            borderRadius: 0,
                            backgroundColor: "#f7f3ee",
                            color: "#141414",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            fontSize: "0.6rem",
                            px: 1.5,
                            py: 0.4,
                            "&:hover": { backgroundColor: "#e2ddd6" },
                          }}
                        >
                          {t("featured.add")}
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                  <Stack direction="row" justifyContent="space-between" sx={{ mt: 1.25 }}>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "uppercase", letterSpacing: "0.18em", color: "#6b6b6b" }}
                    >
                      {item.category}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6b6b6b" }}>
                      {t("featured.stock")}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
