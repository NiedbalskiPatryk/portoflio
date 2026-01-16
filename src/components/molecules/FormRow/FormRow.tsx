"use client";

import React from "react";
import TextField from "@mui/material/TextField";

export interface FormRowProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: string;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}

const FormRow: React.FC<FormRowProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  type = "text",
  multiline = false,
  rows,
  disabled = false,
  error = false,
  helperText,
}) => {
  return (
    <TextField
      id={id}
      name={id}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onBlur}
      type={type}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth
    />
  );
};

export default FormRow;
