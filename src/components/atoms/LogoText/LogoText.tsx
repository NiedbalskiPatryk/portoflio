"use client";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface LogoTextProps {
  text?: string;
}

export default function LogoText({ text = "Patryk" }: LogoTextProps) {
  return (
    <Link href="#" underline="none">
      <Typography
        variant="h6"
        component="span"
        sx={{
          fontWeight: 700,
          color: "text.primary",
          letterSpacing: "-0.02em",
        }}
      >
        {text}
      </Typography>
    </Link>
  );
}
