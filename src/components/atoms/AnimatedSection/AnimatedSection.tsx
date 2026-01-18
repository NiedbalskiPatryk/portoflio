"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import Box from "@mui/material/Box";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const getInitialTransform = (direction: AnimationDirection): string => {
  switch (direction) {
    case "up":
      return "translateY(60px)";
    case "down":
      return "translateY(-60px)";
    case "left":
      return "translateX(60px)";
    case "right":
      return "translateX(-60px)";
    case "fade":
    default:
      return "translateY(0)";
  }
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(direction),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
}
