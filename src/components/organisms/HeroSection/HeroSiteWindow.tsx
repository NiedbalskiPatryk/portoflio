"use client";

import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState, useSyncExternalStore } from "react";

const STAGE_COUNT = 7;
const STAGE_DONE = 4;
const STEP_INTERVAL_MS = 1300;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const pop = keyframes`
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;
const popAnimation = `${pop} 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both`;

const SKELETON = "#ececea";
const SKELETON_SOFT = "#f1f1ee";
const DOT = "#e0e0dc";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerReducedMotion = () => false;

const STEP_KEYS = ["skeleton", "content", "design", "online"] as const;

export default function HeroSiteWindow() {
  const t = useTranslations("hero");
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const [cycleStage, setCycleStage] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(
      () => setCycleStage((s) => (s + 1) % STAGE_COUNT),
      STEP_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reducedMotion]);

  // Reduced motion: no cycling, always show the finished "Online" state.
  const stage = reducedMotion ? STAGE_DONE : cycleStage;
  const showTitle = stage >= 1;
  const showImage = stage >= 2;
  const showButton = stage >= 3;
  const done = stage >= STAGE_DONE;
  const stepIndex = stage >= 4 ? 3 : stage >= 2 ? 2 : stage >= 1 ? 1 : 0;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        role="img"
        aria-label={t("window.ariaLabel")}
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          borderRadius: "1.25rem",
          boxShadow: "0 2rem 4rem rgba(17, 17, 17, 0.12)",
          overflow: "hidden",
        }}
      >
        <Box aria-hidden="true">
          {/* Browser chrome */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              px: 2,
              py: "0.8rem",
              borderBottom: "1px solid #ececea",
            }}
          >
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                component="span"
                sx={{
                  width: "0.65rem",
                  height: "0.65rem",
                  borderRadius: "999px",
                  bgcolor: DOT,
                }}
              />
            ))}
            <Box
              component="span"
              sx={{
                ml: "0.75rem",
                flex: 1,
                minWidth: 0,
                px: "0.75rem",
                py: "0.3rem",
                bgcolor: "background.default",
                borderRadius: "999px",
                fontSize: "0.75rem",
                color: "#6b6b6b",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t("window.url")}
            </Box>
          </Box>

          {/* Page content */}
          <Box
            sx={{
              p: { xs: 2.5, sm: 3 },
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
              minHeight: { xs: "19rem", sm: "21rem" },
            }}
          >
            {/* Site header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: "5rem",
                  height: "0.8rem",
                  borderRadius: "999px",
                  bgcolor: "text.primary",
                }}
              />
              <Box sx={{ display: "flex", gap: 1 }}>
                {[0, 1, 2].map((i) => (
                  <Box
                    key={i}
                    component="span"
                    sx={{
                      width: "2.5rem",
                      height: "0.5rem",
                      borderRadius: "999px",
                      bgcolor: DOT,
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Hero of the fake site */}
            <Box sx={{ display: "flex", gap: "1.25rem", alignItems: "stretch" }}>
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                {showTitle ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      animation: popAnimation,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: { xs: "1.3rem", sm: "1.6rem" },
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      {t("window.titleLine1")}
                      <br />
                      {t("window.titleLine2")}
                    </Box>
                    <Box
                      component="span"
                      sx={{ fontSize: "0.85rem", color: "text.secondary" }}
                    >
                      {t("window.menu")}
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box component="span" sx={{ width: "90%", height: "1.1rem", borderRadius: "0.4rem", bgcolor: SKELETON }} />
                    <Box component="span" sx={{ width: "70%", height: "1.1rem", borderRadius: "0.4rem", bgcolor: SKELETON }} />
                    <Box component="span" sx={{ width: "55%", height: "0.6rem", borderRadius: "0.4rem", bgcolor: SKELETON_SOFT }} />
                  </Box>
                )}

                {showButton ? (
                  <Box
                    component="span"
                    sx={{
                      alignSelf: "flex-start",
                      px: 2,
                      py: "0.6rem",
                      borderRadius: "999px",
                      bgcolor: "secondary.main",
                      color: "secondary.contrastText",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      animation: popAnimation,
                    }}
                  >
                    {t("window.button")}
                  </Box>
                ) : (
                  <Box
                    component="span"
                    sx={{ width: "6rem", height: "2.1rem", borderRadius: "999px", bgcolor: SKELETON }}
                  />
                )}
              </Box>

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  minHeight: "11rem",
                  borderRadius: "0.9rem",
                  overflow: "hidden",
                  position: "relative",
                  bgcolor: SKELETON,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: showImage ? 1 : 0,
                    transform: showImage ? "none" : "translateY(8px) scale(0.98)",
                    transition:
                      "opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                >
                  <Image
                    src="/parkiza.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 200px, (min-width: 600px) 30vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Feature cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "0.6rem",
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    height: "3.25rem",
                    borderRadius: "0.7rem",
                    bgcolor: showButton ? "#f1eee6" : SKELETON_SOFT,
                    transition: "background-color 0.4s ease",
                  }}
                />
              ))}
            </Box>
          </Box>

          {done && (
            <Box
              component="span"
              sx={{
                position: "absolute",
                top: "3.4rem",
                right: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                px: "0.75rem",
                py: "0.4rem",
                borderRadius: "999px",
                bgcolor: "text.primary",
                color: "primary.contrastText",
                fontSize: "0.78rem",
                fontWeight: 600,
                animation: popAnimation,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              {t("window.online")}
            </Box>
          )}
        </Box>
      </Box>

      {/* Step bar (decorative, mirrors the animation) */}
      <Box aria-hidden="true" sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {STEP_KEYS.map((key, i) => {
          const reached = i <= stepIndex;
          return (
            <Box
              key={key}
              component="span"
              sx={{
                flex: "1 1 5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: reached ? "text.primary" : "#757575",
                transition: "color 0.3s ease",
              }}
            >
              <Box
                component="span"
                sx={{
                  height: "0.25rem",
                  borderRadius: "999px",
                  bgcolor: reached ? "text.primary" : "#dcdcd8",
                  transition: "background-color 0.3s ease",
                }}
              />
              {t(`steps.${key}`)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
