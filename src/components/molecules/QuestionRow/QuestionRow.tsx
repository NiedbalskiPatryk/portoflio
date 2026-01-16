"use client";

import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface QuestionRowProps {
  id: string;
  question: string;
}

const QuestionRow: React.FC<QuestionRowProps> = ({ id, question }) => {
  return (
    <AccordionSummary
      id={`faq-${id}-header`}
      aria-controls={`faq-${id}-content`}
      expandIcon={<ExpandMoreIcon />}
      sx={{
        px: { xs: 2, sm: 3 },
        py: 1.5,
        "& .MuiAccordionSummary-content": {
          margin: 0,
        },
      }}
    >
      <Typography
        variant="h6"
        color="text.primary"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: 600,
          lineHeight: 1.4,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {question}
      </Typography>
    </AccordionSummary>
  );
};

export default QuestionRow;
