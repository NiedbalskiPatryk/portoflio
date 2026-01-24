"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { heroData } from "../data";

export default function LandingHero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 0 },
      }}
    >
      {/* Mesh gradient background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 40%),
            radial-gradient(at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 45%),
            radial-gradient(at 90% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          {/* Left side - Content */}
          <Stack spacing={4} sx={{ maxWidth: { lg: 560 } }}>
            {/* Badge */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  px: 2,
                  py: 0.75,
                  borderRadius: 10,
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid",
                  borderColor: "rgba(99, 102, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#22c55e",
                    boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                  }}
                >
                  Version 2.0 is here
                </Typography>
              </Box>
            </Box>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "text.primary",
              }}
            >
              {heroData.title}
              <Box
                component="span"
                sx={{
                  display: "block",
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heroData.subtitle}
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.7,
                maxWidth: 480,
              }}
            >
              {heroData.description}
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  color: "#fff",
                  px: 3.5,
                  py: 1.5,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5558e3 0%, #7c4fe8 100%)",
                    boxShadow: "0 6px 20px rgba(99, 102, 241, 0.5)",
                  },
                }}
              >
                {heroData.cta.primary}
              </Button>
              <Button
                variant="text"
                size="large"
                startIcon={
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayArrowRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                }
                sx={{
                  color: "text.primary",
                  px: 2,
                  py: 1.5,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                Watch demo
              </Button>
            </Stack>

            {/* Social proof */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              sx={{ pt: 2 }}
            >
              <Stack direction="row" spacing={-1}>
                {[1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: `hsl(${i * 60 + 200}, 70%, 30%)`,
                      border: "2px solid",
                      borderColor: "background.default",
                    }}
                  />
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary">
                <Box
                  component="span"
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  2,000+
                </Box>{" "}
                happy users
              </Typography>
            </Stack>
          </Stack>

          {/* Right side - UI Mockup */}
          <Box
            sx={{
              position: "relative",
              display: { xs: "none", lg: "block" },
            }}
          >
            {/* Main glass card */}
            <Box
              sx={{
                position: "relative",
                p: 3,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid",
                borderColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Window controls */}
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "#ef4444",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "#eab308",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "#22c55e",
                  }}
                />
              </Stack>

              {/* Header */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 3 }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <CloudQueueIcon sx={{ color: "#6366f1", fontSize: 28 }} />
                  <Typography variant="h6" fontWeight={600}>
                    CloudSync
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    bgcolor: "rgba(34, 197, 94, 0.1)",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#22c55e", fontWeight: 600 }}
                  >
                    Synced
                  </Typography>
                </Box>
              </Stack>

              {/* Files list */}
              <Stack spacing={1.5}>
                {[
                  {
                    name: "Projects",
                    icon: FolderIcon,
                    color: "#6366f1",
                    size: "12 files",
                  },
                  {
                    name: "Documents",
                    icon: FolderIcon,
                    color: "#f59e0b",
                    size: "8 files",
                  },
                  {
                    name: "design-system.fig",
                    icon: InsertDriveFileIcon,
                    color: "#ec4899",
                    size: "2.4 MB",
                  },
                  {
                    name: "presentation.pdf",
                    icon: InsertDriveFileIcon,
                    color: "#ef4444",
                    size: "5.1 MB",
                  },
                ].map((item, index) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.02)",
                      border: "1px solid",
                      borderColor: "rgba(255,255,255,0.05)",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.05)",
                        borderColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          bgcolor: `${item.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <item.icon sx={{ color: item.color, fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" fontWeight={500}>
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.size}
                        </Typography>
                      </Box>
                    </Stack>
                    <CheckCircleIcon sx={{ color: "#22c55e", fontSize: 20 }} />
                  </Box>
                ))}
              </Stack>

              {/* Storage bar */}
              <Box
                sx={{
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Storage used
                  </Typography>
                  <Typography variant="caption" fontWeight={600}>
                    24.5 GB / 100 GB
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.05)",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "24.5%",
                      borderRadius: 3,
                      background:
                        "linear-gradient(90deg, #6366f1 0%, #a855f7 100%)",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Floating notification card */}
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                left: -40,
                p: 2,
                borderRadius: 3,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid",
                borderColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                animation: "float 4s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "rgba(34, 197, 94, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#22c55e" }} />
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={600}>
                    Sync complete
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    All files are up to date
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Stats card */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: -30,
                p: 2,
                borderRadius: 3,
                background: "rgba(99, 102, 241, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid",
                borderColor: "rgba(99, 102, 241, 0.2)",
                boxShadow: "none",
                animation: "float 5s ease-in-out infinite",
                animationDelay: "-2s",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Upload speed
              </Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: "#6366f1" }}
              >
                125 MB/s
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
