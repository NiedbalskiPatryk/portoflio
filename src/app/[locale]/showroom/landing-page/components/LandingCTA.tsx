"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTranslations } from "next-intl";

export const LandingCTA = () => {
  const t = useTranslations("showRoomProjects.landingPage.cta");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const logos = t.raw("logos") as string[];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient mesh */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(at 50% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Main CTA card */}
        <Box
          sx={{
            position: "relative",
            p: "3px",
            borderRadius: 6,
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
            boxShadow: "0 25px 60px rgba(99, 102, 241, 0.2)",
          }}
        >
          <Box
            sx={{
              p: { xs: 4, md: 8 },
              borderRadius: 5.5,
              background: "rgba(10, 10, 20, 0.97)",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative elements */}
            <Box
              sx={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -80,
                left: -80,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1fr auto" },
                gap: { xs: 4, lg: 8 },
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Content */}
              <Box>
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
                  {t("eyebrow")}
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "3rem" },
                    mb: 2,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "text.primary",
                  }}
                >
                  {t("title")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 500,
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  {t("subtitle")}
                </Typography>

                {/* Email input mock */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ maxWidth: 500 }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2.5,
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <EmailOutlinedIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary">
                      {t("emailPlaceholder")}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #5558e3 0%, #7c4fe8 100%)",
                        boxShadow: "0 6px 20px rgba(99, 102, 241, 0.5)",
                      },
                    }}
                  >
                    {t("button")}
                  </Button>
                </Stack>

                {/* Trust text */}
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    mt: 2,
                    display: "block",
                  }}
                >
                  {t("footnote")}
                </Typography>
              </Box>

              {/* Stats card (desktop only) */}
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,0.06)",
                  minWidth: 280,
                }}
              >
                <Stack spacing={3}>
                  {stats.map((stat, index) => (
                    <Box key={stat.label}>
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        sx={{
                          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                      {index < 2 && (
                          <Box
                          sx={{
                            mt: 3,
                            height: 1,
                            bgcolor: "rgba(255,255,255,0.05)",
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Logos section */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            {t("trustedBy")}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 4, md: 8 }}
            flexWrap="wrap"
            sx={{ opacity: 0.5 }}
          >
            {logos.map((company) => (
              <Typography
                key={company}
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "text.secondary",
                }}
              >
                {company}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
