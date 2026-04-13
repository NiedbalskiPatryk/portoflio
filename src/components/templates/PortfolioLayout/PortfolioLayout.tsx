"use client";

import Box from "@mui/material/Box";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Box component="main">{children}</Box>
    </Box>
  );
}
