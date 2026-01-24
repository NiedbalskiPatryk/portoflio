"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SyncIcon from "@mui/icons-material/Sync";
import LockIcon from "@mui/icons-material/Lock";
import DevicesIcon from "@mui/icons-material/Devices";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

export default function LandingFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimated(true), 100);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  const cardStyle = (delay: number) => ({
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(10px)",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.06)",
    boxShadow: "none",
    height: "100%",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: isAnimated ? 1 : 0,
    transform: isAnimated ? "translateY(0)" : "translateY(30px)",
    transitionDelay: `${delay}ms`,
    "&:hover": {
      borderColor: "rgba(99, 102, 241, 0.3)",
      background: "rgba(99, 102, 241, 0.05)",
      transform: "translateY(-8px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    },
  });

  const iconBoxStyle = (color: string) => ({
    width: 48,
    height: 48,
    borderRadius: 3,
    background: `${color}15`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 2.5,
  });

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Section header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: 600 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#6366f1",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: "block",
              fontSize: "0.75rem",
            }}
          >
            Features
          </Typography>
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "text.primary",
            }}
          >
            Everything you need to
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "block",
              }}
            >
              stay in sync
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Powerful features designed to keep your files safe, accessible, and
            synchronized across all your devices.
          </Typography>
        </Box>

        {/* Bento Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gridTemplateRows: { md: "auto auto" },
            gap: 2.5,
          }}
        >
          {/* Large card - Real-time Sync */}
          <Box
            sx={{
              ...cardStyle(0),
              gridColumn: { md: "span 2" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { sm: "center" },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Box sx={iconBoxStyle("#6366f1")}>
                <SyncIcon sx={{ color: "#6366f1", fontSize: 24 }} />
              </Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Real-time Sync
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Changes sync instantly across all your devices. No delays, no
                conflicts, no hassle. Just seamless synchronization that works.
              </Typography>
            </Box>
            {/* Mini visualization */}
            <Box
              sx={{
                width: { xs: "100%", sm: 200 },
                height: 120,
                borderRadius: 3,
                bgcolor: "rgba(99, 102, 241, 0.1)",
                border: "1px solid",
                borderColor: "rgba(99, 102, 241, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                {[1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                      animation: `pulse ${1 + i * 0.3}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                      "@keyframes pulse": {
                        "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
                        "50%": { transform: "scale(1.1)", opacity: 1 },
                      },
                    }}
                  />
                ))}
              </Stack>
              <CloudDoneIcon
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  color: "#22c55e",
                  fontSize: 20,
                }}
              />
            </Box>
          </Box>

          {/* Tall card - Security */}
          <Box
            sx={{
              ...cardStyle(100),
              gridRow: { md: "span 2" },
            }}
          >
            <Box sx={iconBoxStyle("#22c55e")}>
              <LockIcon sx={{ color: "#22c55e", fontSize: 24 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              End-to-End Encryption
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
              Your files are encrypted before they leave your device. Only you have the keys.
            </Typography>
            {/* Security visual */}
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "rgba(34, 197, 94, 0.05)",
                border: "1px solid",
                borderColor: "rgba(34, 197, 94, 0.15)",
              }}
            >
              <Stack spacing={2}>
                {["AES-256", "Zero-knowledge", "2FA Support"].map((item, i) => (
                  <Stack key={item} direction="row" alignItems="center" spacing={1.5}>
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        bgcolor: "rgba(34, 197, 94, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#22c55e",
                        }}
                      />
                    </Box>
                    <Typography variant="body2" fontWeight={500}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Regular card - Cross-Platform */}
          <Box sx={cardStyle(200)}>
            <Box sx={iconBoxStyle("#f59e0b")}>
              <DevicesIcon sx={{ color: "#f59e0b", fontSize: 24 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Cross-Platform
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Works seamlessly on Windows, Mac, Linux, iOS, and Android. Your
              files follow you everywhere.
            </Typography>
          </Box>

          {/* Regular card - Collaboration */}
          <Box sx={cardStyle(300)}>
            <Box sx={iconBoxStyle("#ec4899")}>
              <GroupIcon sx={{ color: "#ec4899", fontSize: 24 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Team Collaboration
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Share folders, set permissions, and work together in real-time
              with your entire team.
            </Typography>
          </Box>
        </Box>

        {/* Stats row */}
        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "150+", label: "Countries" },
            { value: "<50ms", label: "Latency" },
            { value: "2M+", label: "Files synced daily" },
          ].map((stat, index) => (
            <Box
              key={stat.label}
              sx={{
                py: 3,
                px: 2,
                textAlign: "center",
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.02)",
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.05)",
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease",
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
