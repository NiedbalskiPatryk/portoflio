"use client";

import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 6,
        zIndex: 9999,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(0, 0, 0, 0.15)"
            : "rgba(255, 255, 255, 0.15)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: `${scrollProgress}%`,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(255, 255, 255, 0.9)",
          transition: "width 0.1s ease-out",
        }}
      />
    </Box>
  );
}
