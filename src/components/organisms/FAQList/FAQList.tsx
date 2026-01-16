"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FAQItem from "@/components/molecules/FAQItem";

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FAQListProps {
  items: FAQItemData[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
  emptyMessage?: string;
}

const FAQList: React.FC<FAQListProps> = ({
  items,
  allowMultiple = true,
  defaultExpandedIds = [],
  emptyMessage = "No FAQs available right now.",
}) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(() => {
    if (allowMultiple) {
      return null;
    }
    return defaultExpandedIds[0] ?? null;
  });

  React.useEffect(() => {
    if (allowMultiple) {
      return;
    }

    const hasExpanded = items.some((item) => item.id === expandedId);
    if (!hasExpanded) {
      setExpandedId(null);
    }
  }, [allowMultiple, items, expandedId]);

  if (items.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        {emptyMessage}
      </Typography>
    );
  }

  return (
    <Stack spacing={{ xs: 2, md: 2.5 }}>
      {items.map((item) => {
        const isExpanded = expandedId === item.id;
        const defaultExpanded = defaultExpandedIds.includes(item.id);

        return (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            defaultExpanded={allowMultiple ? defaultExpanded : undefined}
            expanded={allowMultiple ? undefined : isExpanded}
            onToggle={
              allowMultiple
                ? undefined
                : (id, nextExpanded) => {
                    setExpandedId(nextExpanded ? id : null);
                  }
            }
          />
        );
      })}
    </Stack>
  );
};

export default FAQList;
