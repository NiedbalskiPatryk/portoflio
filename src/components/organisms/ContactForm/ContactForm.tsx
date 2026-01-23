"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormRow from "@/components/molecules/FormRow";
import { useTranslations } from "next-intl";

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

const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  submitLabel,
  isSubmitting = false,
  isDisabled = false,
  formAction,
  formMethod = "POST",
}) => {
  const t = useTranslations("contact.form");
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
        p: { xs: 3, sm: 4 },
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(10, 10, 10, 0.55)"
            : theme.palette.background.default,
        "& .MuiOutlinedInput-root": {
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "transparent"
              : theme.palette.background.default,
        },
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
                {renderField(fieldMap.phone)}
              </Box>
              {renderField(fieldMap.email)}
              {renderField(fieldMap.subject)}
              {renderField(fieldMap.message)}
            </>
          );
        })()}
      </Stack>

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
          mt: 1,
          alignSelf: { xs: "stretch", sm: "flex-start" },
        }}
      >
        {submitLabel}
      </Button>
      <Collapse in={submitState === "success"} timeout={300} unmountOnExit>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {t("status.success")}
        </Typography>
      </Collapse>
      <Collapse in={submitState === "error"} timeout={300} unmountOnExit>
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {t("status.error")}
        </Typography>
      </Collapse>
    </Box>
  );
};

export default ContactForm;
