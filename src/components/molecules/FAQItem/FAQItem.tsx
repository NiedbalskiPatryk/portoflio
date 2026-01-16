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
      square
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
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(10, 10, 10, 0.55)"
            : theme.palette.background.paper,
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
        },
      }}
    >
      <QuestionRow id={id} question={question} />
      <AccordionDetails
        id={`faq-${id}-content`}
        role="region"
        aria-labelledby={`faq-${id}-header`}
        sx={{
          px: { xs: 2, sm: 3 },
          pb: 2.5,
          pt: 0,
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
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
