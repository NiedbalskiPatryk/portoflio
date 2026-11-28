"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormRow from "@/components/molecules/FormRow";
import { useLocale, useTranslations } from "next-intl";
import { CONTACT_PREFILL_EVENT, type ContactPrefillDetail } from "./prefill";

export type ContactFieldId =
  | "fullName"
  | "email"
  | "phone"
  | "subject"
  | "message";

export interface ContactFormField {
  id: ContactFieldId;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
}

export interface ContactFormProps {
  fields: ContactFormField[];
  submitLabel: string;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  formAction?: string;
  formMethod?: "POST" | "GET";
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WindowWithGtag = Window & { gtag?: (...args: unknown[]) => void };

const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  submitLabel,
  isSubmitting = false,
  isDisabled = false,
  formAction,
  formMethod = "POST",
}) => {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const mountedAtRef = React.useRef(0);

  React.useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);
  const initialValues = React.useMemo(() => {
    return fields.reduce<Record<ContactFieldId, string>>(
      (acc, field) => {
        acc[field.id] = "";
        return acc;
      },
      {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }
    );
  }, [fields]);

  const [values, setValues] = React.useState(initialValues);
  const [touched, setTouched] = React.useState<Record<ContactFieldId, boolean>>({
    fullName: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });
  const [submitState, setSubmitState] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // Optional prefill from EstimateSection; the form works the same without it.
  React.useEffect(() => {
    const handlePrefill = (event: Event) => {
      const detail = (event as CustomEvent<ContactPrefillDetail>).detail;
      if (!detail) return;
      setValues((prev) => ({
        ...prev,
        subject:
          typeof detail.subject === "string"
            ? detail.subject.slice(0, 150)
            : prev.subject,
        message:
          typeof detail.message === "string"
            ? detail.message.slice(0, 5000)
            : prev.message,
      }));
      setSubmitState((prev) => (prev === "submitting" ? prev : "idle"));
    };
    window.addEventListener(CONTACT_PREFILL_EVENT, handlePrefill);
    return () => window.removeEventListener(CONTACT_PREFILL_EVENT, handlePrefill);
  }, []);

  const handleChange = (id: ContactFieldId, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (id: ContactFieldId) => {
    setTouched((prev) => ({ ...prev, [id]: true }));
  };

  const isEmailInvalid =
    touched.email && values.email.length > 0 && !emailPattern.test(values.email);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!formAction) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    if (isEmailInvalid) {
      setTouched((prev) => ({ ...prev, email: true }));
      return;
    }

    try {
      setSubmitState("submitting");
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("elapsedMs", String(Date.now() - mountedAtRef.current));
      formData.append("locale", locale);

      const response = await fetch(formAction, {
        method: formMethod,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitState("success");
      (window as WindowWithGtag).gtag?.("event", "generate_lead");
      setValues(initialValues);
      setTouched({
        fullName: false,
        email: false,
        phone: false,
        subject: false,
        message: false,
      });
    } catch (error) {
      setSubmitState("error");
    }
  };

  const isSubmittingInternal = submitState === "submitting";
  const isSubmittingActive = isSubmitting || isSubmittingInternal;
  const isFormDisabled = isDisabled || isSubmittingActive;

  return (
    <Box
      component="form"
      action={formAction}
      method={formAction ? formMethod : undefined}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: { xs: "1.25rem", sm: "1.75rem" },
        borderRadius: "1.5rem",
        bgcolor: "background.paper",
      }}
    >
      <Stack spacing={2}>
        {(() => {
          const fieldMap = fields.reduce<Record<ContactFieldId, ContactFormField>>(
            (acc, field) => {
              acc[field.id] = field;
              return acc;
            },
            {
              fullName: {
                id: "fullName",
                label: t("name"),
              },
              email: {
                id: "email",
                label: t("email"),
              },
              phone: {
                id: "phone",
                label: t("phone"),
              },
              subject: {
                id: "subject",
                label: t("subject"),
              },
              message: {
                id: "message",
                label: t("message"),
                multiline: true,
              },
            }
          );

          const renderField = (field: ContactFormField) => {
            const isEmailField = field.id === "email";
            const error = isEmailField ? isEmailInvalid : false;
            const helperText =
              isEmailField && error ? t("validation.email") : undefined;

            return (
              <FormRow
                key={field.id}
                id={field.id}
                label={field.label}
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={(value) => handleChange(field.id, value)}
                onBlur={() => handleBlur(field.id)}
                type={field.id === "email" ? "email" : "text"}
                multiline={field.multiline}
                rows={field.rows}
                required={field.required}
                disabled={isFormDisabled}
                error={error}
                helperText={helperText}
              />
            );
          };

          return (
            <>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 2,
                }}
              >
                {renderField(fieldMap.fullName)}
                {renderField(fieldMap.email)}
                {renderField(fieldMap.phone)}
                {renderField(fieldMap.subject)}
              </Box>
              {renderField(fieldMap.message)}
            </>
          );
        })()}
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mt: 0.5,
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ flex: "1 1 14rem", minWidth: 0 }}
        >
          {t.rich("privacyNotice", {
            link: (chunks) => (
              <Link
                href={`/${locale}/privacy`}
                color="inherit"
                underline="always"
                sx={{
                  textDecoration: "underline",
                  "&:focus-visible": {
                    outline: "2px solid #111111",
                    outlineOffset: "2px",
                  },
                }}
              >
                {chunks}
              </Link>
            ),
          })}
        </Typography>
        <Button
          type="submit"
          variant="contained"
          disabled={isFormDisabled}
          aria-busy={isSubmittingActive || undefined}
          startIcon={
            isSubmittingActive ? (
              <CircularProgress size={18} color="inherit" />
            ) : null
          }
          sx={{
            width: { xs: "100%", sm: "auto" },
            "&:focus-visible": {
              outline: "2px solid #111111",
              outlineOffset: "2px",
            },
          }}
        >
          {submitLabel}
        </Button>
      </Box>
      <Box role="status" aria-live="polite">
        <Collapse in={submitState === "success"} timeout={300} unmountOnExit>
          <Typography
            variant="body1"
            color="success.main"
            sx={{ mt: 2, fontWeight: 600 }}
          >
            {t("status.success")}
          </Typography>
        </Collapse>
        <Collapse in={submitState === "error"} timeout={300} unmountOnExit>
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {t("status.error")}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
};

export default ContactForm;
