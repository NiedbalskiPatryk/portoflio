"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";

const BAR_SPACE = "5.5rem";

// Fixed bottom pill, mobile only (below md). Render once at the end of the page:
// the in-flow spacer keeps the footer from being hidden behind the bar.
export default function MobileContactBar() {
  const t = useTranslations("mobileCta");

  return (
    <>
      <Box
        aria-hidden="true"
        sx={{ display: { xs: "block", md: "none" }, height: BAR_SPACE }}
      />
      <Box
        component="aside"
        aria-label={t("label")}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          left: "0.75rem",
          right: "0.75rem",
          bottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
          // Above the header/content, below drawers, dialogs and the cookie banner (snackbar).
          zIndex: (theme) => theme.zIndex.speedDial,
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          bgcolor: "inverse.background",
          color: "#ffffff",
          borderRadius: "999px",
          py: "0.5rem",
          pr: "0.5rem",
          pl: "1.25rem",
          boxShadow: "0 0.75rem 2rem rgba(17, 17, 17, 0.25)",
        }}
      >
        <Box component="span" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
          {t("text")}
        </Box>
        <Button
          href="#contact"
          variant="contained"
          color="secondary"
          sx={{
            py: "0.8rem",
            px: "1.2rem",
            "&:focus-visible": {
              outline: "2px solid #ffffff",
              outlineOffset: "2px",
            },
          }}
        >
          {t("button")}
        </Button>
      </Box>
    </>
  );
}
