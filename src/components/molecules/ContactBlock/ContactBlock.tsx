"use client";

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface FooterContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactBlockProps {
  items: FooterContactItem[];
}

const ContactBlock: React.FC<ContactBlockProps> = ({ items }) => {
  return (
    <Stack spacing={2}>
      {items.map((item) => (
        <Box key={item.id}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ display: "block", fontWeight: 600 }}
          >
            {item.label}:
          </Typography>
          {item.href ? (
            <Link
              href={item.href}
              variant="body2"
              color="text.primary"
              sx={{
                display: "block",
                fontSize: { xs: "0.875rem", md: "1rem" },
                overflowWrap: "anywhere",
              }}
            >
              {item.value}
            </Link>
          ) : (
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                overflowWrap: "anywhere",
              }}
            >
              {item.value}
            </Typography>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default ContactBlock;
