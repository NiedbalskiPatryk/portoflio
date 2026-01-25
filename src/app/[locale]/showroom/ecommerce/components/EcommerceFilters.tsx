"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslations } from "next-intl";

export default function EcommerceFilters() {
  const t = useTranslations("showRoomProjects.ecommerce.filters");
  const categories = t.raw("categories") as string[];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          pb: 2,
          borderBottom: "1px solid",
          borderColor: "rgba(20,20,20,0.15)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ md: "center" }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            {categories.map((label, index) => (
              <Button
                key={label}
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 0,
                  borderColor: index === 0 ? "#141414" : "rgba(20,20,20,0.2)",
                  color: index === 0 ? "#141414" : "#6b6b6b",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.7rem",
                  px: 2,
                  py: 0.6,
                  "&:hover": {
                    borderColor: "#141414",
                    color: "#141414",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
