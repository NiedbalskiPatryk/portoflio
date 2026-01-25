"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SectionHeader from "@/components/molecules/SectionHeader";
import ContactForm from "@/components/organisms/ContactForm";
import ContactInfo from "@/components/organisms/ContactInfo";
import type {
  ContactFormField,
} from "@/components/organisms/ContactForm";
import type { ContactInfoItemProps } from "@/components/molecules/ContactInfoItem";

export interface ContactSectionProps {
  heading: string;
  subheading?: string;
  infoItems: ContactInfoItemProps[];
  fields: ContactFormField[];
  submitLabel: string;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  formAction?: string;
  formMethod?: "POST" | "GET";
}

const ContactSection: React.FC<ContactSectionProps> = ({
  heading,
  subheading,
  infoItems,
  fields,
  submitLabel,
  isSubmitting,
  isDisabled,
  formAction,
  formMethod,
}) => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <SectionHeader heading={heading} description={subheading} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 1 38%" },
              order: { xs: 2, md: 1 },
              minWidth: 0,
            }}
          >
            <ContactInfo items={infoItems} />
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "1 1 0" },
              order: { xs: 1, md: 2 },
              minWidth: 0,
            }}
          >
          <ContactForm
            fields={fields}
            submitLabel={submitLabel}
            isSubmitting={isSubmitting}
            isDisabled={isDisabled}
            formAction={formAction}
            formMethod={formMethod}
          />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
