"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useTranslations } from "next-intl";

export const LandingPricing = () => {
  const t = useTranslations("showRoomProjects.landingPage.pricing");
  const pricingPlans = t.raw("plans") as Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
  }>;
  const trustBadges = t.raw("trustBadges") as string[];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.05) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
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
              color: "text.primary",
            }}
          >
            {t("title")}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: { xs: "inline", md: "block" },
                ml: { xs: 1, md: 0 },
              }}
            >
              {t("titleAccent")}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 500,
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        {/* Pricing cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Box
              key={plan.id}
              sx={{
                position: "relative",
                p: plan.highlighted ? "3px" : 0,
                borderRadius: 5,
                background: plan.highlighted
                  ? "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)"
                  : "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: plan.highlighted
                    ? "0 25px 50px rgba(99, 102, 241, 0.3)"
                    : "0 20px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: plan.highlighted ? 4.5 : 4,
                  background: plan.highlighted
                    ? "rgba(15, 15, 25, 0.97)"
                    : "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: plan.highlighted ? "none" : "1px solid",
                  borderColor: "rgba(255, 255, 255, 0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      bgcolor: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                      width: "fit-content",
                      mb: 2,
                    }}
                  >
                    <StarRoundedIcon sx={{ fontSize: 14, color: "#6366f1" }} />
                    <Typography
                      variant="caption"
                      sx={{ color: "#6366f1", fontWeight: 600, fontSize: "0.7rem" }}
                    >
                      {t("popularLabel")}
                    </Typography>
                  </Box>
                )}

                {/* Plan name */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  {plan.description}
                </Typography>

                {/* Price */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      background: plan.highlighted
                        ? "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
                        : "none",
                      WebkitBackgroundClip: plan.highlighted ? "text" : "unset",
                      WebkitTextFillColor: plan.highlighted ? "transparent" : "unset",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ color: "text.secondary", ml: 0.5, fontSize: "0.95rem" }}
                  >
                    {plan.period}
                  </Typography>
                </Box>

                {/* Features */}
                <Stack spacing={2} sx={{ mb: 4, flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: plan.highlighted
                            ? "rgba(99, 102, 241, 0.1)"
                            : "rgba(34, 197, 94, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <CheckRoundedIcon
                          sx={{
                            fontSize: 14,
                            color: plan.highlighted ? "#6366f1" : "#22c55e",
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? "contained" : "outlined"}
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    ...(plan.highlighted
                      ? {
                          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                          boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #5558e3 0%, #7c4fe8 100%)",
                            boxShadow: "0 6px 20px rgba(99, 102, 241, 0.5)",
                          },
                        }
                      : {
                          borderColor: "rgba(255, 255, 255, 0.15)",
                          color: "text.primary",
                          "&:hover": {
                            borderColor: "#6366f1",
                            bgcolor: "rgba(99, 102, 241, 0.1)",
                          },
                        }),
                  }}
                >
                  {plan.cta}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Trust badges */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{
            mt: 8,
            pt: 6,
            borderTop: "1px solid",
            borderColor: "rgba(255,255,255,0.05)",
          }}
          flexWrap="wrap"
        >
          {trustBadges.map((item) => (
            <Stack key={item} direction="row" alignItems="center" spacing={1}>
              <CheckRoundedIcon sx={{ fontSize: 16, color: "#22c55e" }} />
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
