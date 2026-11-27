"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import QuestionRow from "../QuestionRow";

export interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onToggle?: (id: string, expanded: boolean) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  id,
  question,
  answer,
  defaultExpanded = false,
  expanded,
  onToggle,
}) => {
  const isControlled = typeof expanded === "boolean";

  return (
    <Accordion
      disableGutters
      defaultExpanded={!isControlled ? defaultExpanded : undefined}
      expanded={isControlled ? expanded : undefined}
      onChange={
        isControlled
          ? (_, nextExpanded) => {
              onToggle?.(id, nextExpanded);
            }
          : undefined
      }
      sx={{
        transition: "box-shadow 0.25s ease",
        "&.Mui-expanded": {
          margin: 0,
          boxShadow: "0 1rem 2rem rgba(17, 17, 17, 0.06)",
        },
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
      }}
    >
      <QuestionRow id={id} question={question} />
      <AccordionDetails
        id={`faq-${id}-content`}
        role="region"
        aria-labelledby={`faq-${id}-header`}
        sx={{
          px: { xs: "1.25rem", sm: "1.75rem" },
          pb: "1.5rem",
          pt: 0,
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            m: 0,
            lineHeight: 1.7,
            whiteSpace: "pre-line",
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;
