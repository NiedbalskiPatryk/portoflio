"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function EcommerceHeader() {
  return (
    <Box
      component="header"
      sx={{
        borderBottom: "1px solid",
        borderColor: "rgba(20,20,20,0.12)",
        py: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "\"Playfair Display\", serif",
            letterSpacing: "-0.02em",
          }}
        >
          Atelier Shop
        </Typography>
        <IconButton
          aria-label="Cart"
          sx={{
            color: "#141414",
            borderRadius: 0,
            border: "1px solid rgba(20,20,20,0.2)",
          }}
        >
          <ShoppingBagOutlinedIcon fontSize="small" />
        </IconButton>
      </Container>
    </Box>
  );
}
