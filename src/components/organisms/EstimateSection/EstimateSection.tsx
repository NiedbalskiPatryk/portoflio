"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocale, useTranslations } from "next-intl";
import { HandNote } from "@/components/atoms";
import { dispatchContactPrefill } from "@/components/organisms/ContactForm/prefill";
import EstimateExtraChip from "./EstimateExtraChip";
import EstimateTypeOption from "./EstimateTypeOption";

const TYPE_IDS = ["landing", "panel", "custom"] as const;
const EXTRA_IDS = ["form", "cms", "pay", "en", "auto"] as const;

type TypeId = (typeof TYPE_IDS)[number];
type ExtraId = (typeof EXTRA_IDS)[number];

// Copy comes from the `estimate` message namespace; no props needed.
export type EstimateSectionProps = Record<string, never>;

const EstimateSection: React.FC<EstimateSectionProps> = () => {
  const t = useTranslations("estimate");
  const tNotes = useTranslations("notes");
  const locale = useLocale();

  const [type, setType] = React.useState<TypeId>("panel");
  const [extras, setExtras] = React.useState<Record<ExtraId, boolean>>({
    form: true,
    cms: false,
    pay: false,
    en: false,
    auto: false,
  });
  const [sent, setSent] = React.useState(false);

  const typeLabel = t(`types.${type}.label`);
  const chosenExtras = EXTRA_IDS.filter((id) => extras[id]).map((id) =>
    t(`extras.${id}`).toLocaleLowerCase(locale)
  );

  const message = [
    t("message.greeting"),
    t("message.interest", { type: typeLabel.toLocaleLowerCase(locale) }),
    chosenExtras.length > 0
      ? t("message.extras", { extras: chosenExtras.join(", ") })
      : null,
    t("message.closing"),
  ]
    .filter(Boolean)
    .join("\n");

  const handleSelectType = (id: TypeId) => {
    setType(id);
    setSent(false);
  };

  const handleToggleExtra = (id: ExtraId) => {
    setExtras((prev) => ({ ...prev, [id]: !prev[id] }));
    setSent(false);
  };

  // The anchor href keeps native navigation to #contact (smooth scroll + header offset).
  const handleSend = () => {
    dispatchContactPrefill({ subject: t("subject", { type: typeLabel }), message });
    setSent(true);
  };

  return (
    <Box
      component="section"
      id="pricing"
      aria-labelledby="estimate-heading"
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          pt: { xs: "3rem", md: "3rem" },
          pb: { xs: "4rem", md: "5.5rem" },
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Typography
            id="estimate-heading"
            variant="h2"
            component="h2"
            sx={{ m: 0, fontSize: { xs: "2.25rem", md: "3rem" } }}
          >
            {t("heading")}
          </Typography>
          <Typography sx={{ m: 0, color: "text.secondary", fontSize: "1.1rem" }}>
            {t("description")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 1fr) 22rem",
            },
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <Box
              role="group"
              aria-label={t("typeLegend")}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "minmax(0, 1fr)",
                  sm: "repeat(auto-fit, minmax(13rem, 1fr))",
                },
                gap: "0.75rem",
              }}
            >
              {TYPE_IDS.map((id) => (
                <EstimateTypeOption
                  key={id}
                  label={t(`types.${id}.label`)}
                  price={t(`types.${id}.price`)}
                  description={t(`types.${id}.description`)}
                  selected={type === id}
                  onSelect={() => handleSelectType(id)}
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Typography id="estimate-extras-label" sx={{ fontWeight: 600 }}>
                {t("extrasLegend")}
              </Typography>
              <Box
                role="group"
                aria-labelledby="estimate-extras-label"
                sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                {EXTRA_IDS.map((id) => (
                  <EstimateExtraChip
                    key={id}
                    label={t(`extras.${id}`)}
                    selected={extras[id]}
                    onToggle={() => handleToggleExtra(id)}
                  />
                ))}
              </Box>
            </Box>

            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {t("note")}
            </Typography>
          </Box>

          <Box
            component="aside"
            aria-label={t("summary.eyebrow")}
            sx={{
              minWidth: 0,
              bgcolor: "inverse.background",
              color: "#ffffff",
              borderRadius: "1.5rem",
              p: { xs: "1.5rem", sm: "2rem" },
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "inverse.textSecondary",
              }}
            >
              {t("summary.eyebrow")}
            </Typography>
            <Box
              aria-live="polite"
              sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
            >
              <Typography component="span" sx={{ fontSize: "1.35rem", fontWeight: 600 }}>
                {typeLabel}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.25rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  color: "secondary.main",
                }}
              >
                {t(`types.${type}.summaryPrice`)}
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "inverse.paper",
                borderRadius: "1rem",
                p: "1rem 1.1rem",
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "#e2e2de",
                whiteSpace: "pre-line",
                overflowWrap: "anywhere",
              }}
            >
              {message}
            </Box>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              color="secondary"
              onClick={handleSend}
              sx={{
                alignSelf: "flex-start",
                "&:focus-visible": { outline: "2px solid #f3f3f1", outlineOffset: "2px" },
              }}
            >
              {t("summary.cta")}
            </Button>
            <HandNote
              text={tNotes("estimateClick")}
              tone="onDark"
              arrow="up-left"
              rotate={-3}
              sx={{
                ml: "1.5rem",
                mt: "-0.75rem",
                alignItems: "flex-start",
                fontSize: "1.5rem",
                "& > span": { mt: "0.9rem" },
              }}
            />
            <Typography
              role="status"
              sx={{ m: 0, fontSize: "0.85rem", color: "inverse.textSecondary", minHeight: "1.4em" }}
            >
              {sent ? t("summary.prefilled") : ""}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EstimateSection;
