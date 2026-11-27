"use client";

import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
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
      expandIcon={
        <Box
          component="span"
          sx={{
            width: "2rem",
            height: "2rem",
            borderRadius: "999px",
            bgcolor: "background.default",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ExpandMoreIcon fontSize="small" />
        </Box>
      }
      sx={{
        px: { xs: "1.25rem", sm: "1.75rem" },
        py: "0.9rem",
        gap: "1rem",
        borderRadius: "inherit",
        "& .MuiAccordionSummary-content": {
          margin: 0,
        },
        "&.Mui-focusVisible": {
          backgroundColor: "transparent",
          outline: "2px solid #111111",
          outlineOffset: "-2px",
        },
      }}
    >
      <Typography
        variant="h6"
        component="span"
        color="text.primary"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        {question}
      </Typography>
    </AccordionSummary>
  );
};

export default QuestionRow;
