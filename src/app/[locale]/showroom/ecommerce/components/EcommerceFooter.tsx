"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function EcommerceFooter() {
  const t = useTranslations("showRoomProjects.ecommerce.footer");
  const links = t.raw("links") as string[];

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
            {t("brand")}
          </Typography>
          <Typography variant="body2" sx={{ color: "#6b6b6b" }}>
            {t("description")}
          </Typography>
          <Stack direction="row" spacing={3} justifyContent={{ md: "flex-end" }}>
            {links.map((item) => (
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
