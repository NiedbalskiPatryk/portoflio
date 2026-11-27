import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import React from "react";

export type HandNoteTone = "ink" | "onLight" | "onDark";
export type HandNoteArrow = "none" | "up-left" | "up-right" | "left";

export interface HandNoteProps {
  text: string;
  /**
   * ink: black. onLight: AA-safe orange for light grounds (#c93d0b).
   * onDark: bright accent (#ff5a1f), only for the #111 band.
   */
  tone?: HandNoteTone;
  /**
   * Where the arrow tip points. "up-left" and "left" draw the arrow before the
   * text, "up-right" draws it after the text.
   */
  arrow?: HandNoteArrow;
  /** Tilt of the whole note in degrees. */
  rotate?: number;
  /** Notes clutter phones; they only render from `md` up unless this is set. */
  showOnMobile?: boolean;
  sx?: SxProps<Theme>;
}

const COLORS: Record<HandNoteTone, string> = {
  ink: "#111111",
  onLight: "#c93d0b",
  onDark: "#ff5a1f",
};

const ARROWS = {
  "up-left": {
    width: 56,
    height: 42,
    viewBox: "0 0 64 48",
    paths: ["M58 40 C 40 42, 18 32, 12 8", "M5 15 L12 7 L19 14"],
    // Nudge the arrow so its tail sits next to the text baseline.
    alignSelf: "flex-start",
  },
  "up-right": {
    width: 50,
    height: 40,
    viewBox: "0 0 56 44",
    paths: ["M4 38 C 24 36, 42 26, 46 6", "M39 11 L46 4 L51 12"],
    alignSelf: "flex-end",
  },
  left: {
    width: 52,
    height: 30,
    viewBox: "0 0 52 30",
    paths: ["M50 18 C 34 26, 16 22, 6 10", "M4 18 L5 8 L14 9"],
    alignSelf: "center",
  },
} as const;

// Atom: decorative handwritten note (Caveat) with an optional hand-drawn arrow.
const HandNote: React.FC<HandNoteProps> = ({
  text,
  tone = "ink",
  arrow = "none",
  rotate = 0,
  showOnMobile = false,
  sx,
}) => {
  const color = COLORS[tone];
  const shape = arrow === "none" ? null : ARROWS[arrow];

  const svg = shape && (
    <Box
      component="svg"
      width={shape.width}
      height={shape.height}
      viewBox={shape.viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      sx={{ flexShrink: 0, alignSelf: shape.alignSelf }}
    >
      {shape.paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </Box>
  );

  return (
    <Box
      aria-hidden="true"
      sx={[
        {
          display: { xs: showOnMobile ? "inline-flex" : "none", md: "inline-flex" },
          alignItems: "center",
          gap: "0.25rem",
          color,
          fontFamily: "var(--font-caveat), cursive",
          fontWeight: 700,
          fontSize: "1.6rem",
          lineHeight: 1.1,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
          pointerEvents: "none",
          userSelect: "none",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {arrow !== "up-right" && svg}
      <Box component="span">{text}</Box>
      {arrow === "up-right" && svg}
    </Box>
  );
};

export default HandNote;
