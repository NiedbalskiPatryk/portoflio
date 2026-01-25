"use client";

import Box from "@mui/material/Box";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* <Header /> */}
        <Box
          component="main"
          sx={{
            // pt: `${HEADER_HEIGHT}px`,
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
