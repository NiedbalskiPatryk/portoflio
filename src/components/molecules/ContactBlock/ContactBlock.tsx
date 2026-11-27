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
    <Stack component="ul" spacing={1.75} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item) => (
        <Box component="li" key={item.id} sx={{ minWidth: 0 }}>
          <Typography
            component="span"
            color="text.secondary"
            sx={{ display: "block", fontSize: "0.85rem", lineHeight: 1.4 }}
          >
            {item.label}
          </Typography>
          {item.href ? (
            <Link
              href={item.href}
              color="text.primary"
              underline="hover"
              sx={{
                display: "block",
                fontWeight: 600,
                overflowWrap: "anywhere",
                "&:focus-visible": {
                  outline: "2px solid #111111",
                  outlineOffset: "2px",
                  borderRadius: "4px",
                },
              }}
            >
              {item.value}
            </Link>
          ) : (
            <Typography
              component="span"
              color="text.primary"
              sx={{ display: "block", fontWeight: 600, overflowWrap: "anywhere" }}
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
