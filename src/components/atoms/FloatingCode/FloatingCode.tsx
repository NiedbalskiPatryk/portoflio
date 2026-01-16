"use client";

import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface FloatingCodeProps {
  snippet: string;
  position: "left" | "right";
  delay?: number;
  offsetY?: string;
}

export default function FloatingCode({
  snippet,
  position,
  delay = 0,
  offsetY = "20%",
}: FloatingCodeProps) {
  const theme = useTheme();
  const { gradientStart, gradientMid, gradientEnd } = theme.palette.surface;
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (scrollY > threshold) {
        // Scrolled down - hide with delay
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
          timeoutRef.current = null;
        }, delay);
      } else {
        // Scrolled up - show immediately
        setVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, mounted]);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        [position]: { xs: "-20px", md: "10px", lg: "40px" },
        top: offsetY,
        opacity: visible ? 0.4 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        pointerEvents: "none",
        zIndex: 0,
        display: { xs: "none", md: "block" },
      }}
    >
      {/* Gradient circle background */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { md: "180px", lg: "200px" },
          height: { md: "180px", lg: "200px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gradientStart} 0%, ${gradientMid} 30%, ${gradientEnd} 50%, transparent 70%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <Typography
        component="pre"
        sx={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: { md: "0.7rem", lg: "0.75rem" },
          color: "text.primary",
          whiteSpace: "pre",
          lineHeight: 1.6,
          position: "relative",
          zIndex: 1,
        }}
      >
        {snippet}
      </Typography>
    </Box>
  );
}
