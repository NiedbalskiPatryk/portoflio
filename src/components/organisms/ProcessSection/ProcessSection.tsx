"use client";

import { HandNote } from "@/components/atoms";
import { HEADER_HEIGHT } from "@/components/organisms/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const STEPS = ["talk", "quote", "build", "launch"] as const;

// Soft orange band tokens (#c93d0b is AA-safe on both the band and the light ground).
const BAND_BG = "#ffeee5";
const EMBER = "#c93d0b";
const RULE = "#111111";

export default function ProcessSection() {
  const t = useTranslations("process");
  const tNotes = useTranslations("notes");

  return (
    <Box
      component="section"
      id="process"
      aria-labelledby="process-heading"
      sx={{
        scrollMarginTop: `${HEADER_HEIGHT}px`,
        bgcolor: BAND_BG,
        color: "text.primary",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          py: { xs: "4rem", md: "6rem" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: "2.5rem", md: "3rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "0.5rem 2rem",
            }}
          >
            <Typography
              id="process-heading"
              variant="h2"
              component="h2"
              sx={{
                m: 0,
                maxWidth: "40rem",
                fontSize: { xs: "2.3rem", sm: "3rem", md: "3.75rem" },
                lineHeight: 1,
              }}
            >
              {t("heading")}
            </Typography>
            <HandNote
              text={tNotes("processJargon")}
              tone="onLight"
              arrow="left"
              rotate={-3}
              sx={{ fontSize: "1.7rem", mb: "0.25rem" }}
            />
          </Box>
          <Typography
            sx={{
              m: 0,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "34rem",
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        <Box
          component="ol"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            columnGap: "1.5rem",
            rowGap: { xs: "2rem", lg: 0 },
            borderTop: `2px solid ${RULE}`,
          }}
        >
          {STEPS.map((key, index) => (
            <Box
              component="li"
              key={key}
              sx={{
                pt: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                minWidth: 0,
              }}
            >
              <Box
                component="span"
                aria-hidden="true"
                sx={{
                  fontFamily: "var(--font-bricolage), system-ui, sans-serif",
                  fontSize: { xs: "4.25rem", md: "5.5rem" },
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.06em",
                  color: EMBER,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Box>
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontFamily: "inherit", fontSize: "1.3rem", fontWeight: 600, letterSpacing: 0 }}
              >
                {t(`steps.${key}.title`)}
              </Typography>
              <Typography sx={{ m: 0, lineHeight: 1.6 }}>
                {t(`steps.${key}.text`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
