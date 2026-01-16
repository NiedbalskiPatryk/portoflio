"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface CTAButton {
  label: string;
  onClick?: () => void;
  variant?: "outlined" | "contained";
  href?: string;
}

interface CTAGroupProps {
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
}

export default function CTAGroup({ primaryCTA, secondaryCTA }: CTAGroupProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <Button
        variant={primaryCTA.variant || "outlined"}
        onClick={primaryCTA.onClick}
        href={primaryCTA.href}
        sx={{
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {primaryCTA.label}
      </Button>
      <Button
        variant={secondaryCTA.variant || "outlined"}
        onClick={secondaryCTA.onClick}
        href={secondaryCTA.href}
        sx={{
          width: { xs: "100%", sm: "auto" },
        }}
      >
        {secondaryCTA.label}
      </Button>
    </Stack>
  );
}
