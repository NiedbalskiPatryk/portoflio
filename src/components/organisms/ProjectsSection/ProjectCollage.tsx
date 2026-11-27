"use client";

import React from "react";
import Box from "@mui/material/Box";
import { HandNote } from "@/components/atoms";
import type { ProjectItem } from "./types";

interface ProjectCollageProps {
  projects: ProjectItem[];
  selectedId?: string;
  onPick: (id: string) => void;
  /** Accent note next to the Parkiza frame. */
  parkizaNote: string;
}

// Desktop placement of each frame inside the collage (project id -> slot).
interface Slot {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  width: string;
  rotate: number;
  mobileRotate: number;
}

const SLOTS: Record<string, Slot> = {
  signalos: { left: 0, top: "2rem", width: "58%", rotate: -4, mobileRotate: -2 },
  skinscartel: { right: 0, top: 0, width: "56%", rotate: 3, mobileRotate: 2 },
  parkiza: { left: "22%", bottom: 0, width: "56%", rotate: -1, mobileRotate: 0 },
};

const FRAME_ORDER = ["signalos", "skinscartel", "parkiza"];

// Molecule: decorative collage of tilted browser frames. The rows in the list are the
// accessible controls; frames only mirror the selection (and are clickable for mouse users).
const ProjectCollage: React.FC<ProjectCollageProps> = ({
  projects,
  selectedId,
  onPick,
  parkizaNote,
}) => {
  const frames = FRAME_ORDER.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is ProjectItem => Boolean(p?.previewImage),
  );

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "relative",
        minWidth: 0,
        display: { xs: "grid", md: "block" },
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        alignItems: "center",
        gap: "0.5rem",
        height: { md: "30rem", lg: "34rem" },
        mb: { md: "1.5rem" },
        px: { xs: "0.25rem", md: 0 },
        py: { xs: "0.5rem", md: 0 },
      }}
    >
      {frames.map((project) => {
        const slot = SLOTS[project.id];
        const selected = project.id === selectedId;
        return (
          <Box
            key={project.id}
            onClick={() => onPick(project.id)}
            sx={{
              position: { xs: "relative", md: "absolute" },
              width: { xs: "auto", md: slot.width },
              left: { xs: "auto", md: slot.left ?? "auto" },
              right: { xs: "auto", md: slot.right ?? "auto" },
              top: { xs: "auto", md: slot.top ?? "auto" },
              bottom: { xs: "auto", md: slot.bottom ?? "auto" },
              transform: {
                xs: `rotate(${slot.mobileRotate}deg)`,
                md: `rotate(${slot.rotate}deg)`,
              },
              zIndex: selected ? 3 : 1,
              cursor: "pointer",
              bgcolor: "#ffffff",
              borderRadius: { xs: "0.5rem", md: "1rem" },
              overflow: "hidden",
              boxShadow: selected
                ? "0 0 0 3px #ff5a1f, 0 2.5rem 3.5rem rgba(0, 0, 0, 0.5)"
                : "0 2rem 3rem rgba(0, 0, 0, 0.45)",
              transition: "box-shadow 0.25s ease, filter 0.25s ease",
              filter: selected ? "none" : "brightness(0.85)",
              "@media (prefers-reduced-motion: reduce)": { transition: "none" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "0.35rem",
                p: { xs: "0.3rem 0.4rem", md: "0.6rem 0.8rem" },
                bgcolor: "background.default",
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    width: { xs: "0.3rem", md: "0.55rem" },
                    height: { xs: "0.3rem", md: "0.55rem" },
                    borderRadius: "999px",
                    bgcolor: "#d9d9d6",
                  }}
                />
              ))}
            </Box>
            <Box
              component="img"
              src={project.previewImage}
              alt=""
              loading="lazy"
              decoding="async"
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 10",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </Box>
        );
      })}

      <HandNote
        text={parkizaNote}
        tone="onDark"
        arrow="up-left"
        rotate={-3}
        sx={{
          position: "absolute",
          right: "3%",
          bottom: "-2.75rem",
          zIndex: 4,
          alignItems: "flex-start",
          "& > span": { mt: "1rem" },
        }}
      />
    </Box>
  );
};

export default ProjectCollage;
