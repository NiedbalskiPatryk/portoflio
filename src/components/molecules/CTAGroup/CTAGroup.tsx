"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

interface CTAButton {
  label: string;
  onClick?: () => void;
  variant?: "outlined" | "contained";
  color?: "default" | "light";
  href?: string;
}

interface CTAGroupProps {
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
}

export default function CTAGroup({ primaryCTA, secondaryCTA }: CTAGroupProps) {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  const getLightButtonSx = () => ({
    backgroundColor: isLightMode ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
    color: isLightMode ? "#0a0a0a" : "#ffffff",
    border: "1px solid",
    borderColor: isLightMode ? "#e0e0e0" : "rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: isLightMode ? "#f5f5f5" : "rgba(255, 255, 255, 0.15)",
      borderColor: isLightMode ? "#d0d0d0" : "rgba(255, 255, 255, 0.3)",
    },
  });

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
          ...(primaryCTA.color === "light" && getLightButtonSx()),
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
          ...(secondaryCTA.color === "light" && getLightButtonSx()),
        }}
      >
        {secondaryCTA.label}
      </Button>
    </Stack>
  );
}
