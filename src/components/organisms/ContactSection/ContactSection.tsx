"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
  photoSrc?: string;
  photoAlt?: string;
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
  photoSrc = "/foto.jpeg",
  photoAlt,
}) => {
  const t = useTranslations("contact");
  const tAbout = useTranslations("about");

  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "75rem",
          px: "1.5rem",
          pt: "1rem",
          pb: { xs: "4rem", md: "5rem" },
          display: "grid",
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            md: "minmax(0, 22fr) minmax(0, 30fr)",
          },
          gap: { xs: "2rem", md: "2.5rem" },
          alignItems: "stretch",
        }}
      >
        <Box
          component="figure"
          sx={{
            m: 0,
            position: "relative",
            minHeight: { xs: "22rem", md: "36rem" },
            borderRadius: "2rem",
            overflow: "hidden",
            bgcolor: "#e7e7e3",
          }}
        >
          <Image
            src={photoSrc}
            alt={photoAlt ?? tAbout("profileImageAlt")}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
          />
          <Box
            component="figcaption"
            sx={{
              position: "absolute",
              left: "1.25rem",
              bottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              bgcolor: "background.paper",
              px: "1rem",
              py: "0.6rem",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            <Box
              component="span"
              aria-hidden="true"
              sx={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "999px",
                bgcolor: "secondary.main",
              }}
            />
            {t("badge")}
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          <Typography
            id="contact-heading"
            variant="h2"
            component="h2"
            sx={{ m: 0, fontSize: { xs: "2.25rem", md: "3rem" }, lineHeight: 1.05 }}
          >
            {heading}
          </Typography>
          {subheading && (
            <Typography
              sx={{ m: 0, fontSize: "1.1rem", lineHeight: 1.7, color: "text.secondary" }}
            >
              {subheading}
            </Typography>
          )}
          <ContactForm
            fields={fields}
            submitLabel={submitLabel}
            isSubmitting={isSubmitting}
            isDisabled={isDisabled}
            formAction={formAction}
            formMethod={formMethod}
          />
          <ContactInfo items={infoItems} />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
