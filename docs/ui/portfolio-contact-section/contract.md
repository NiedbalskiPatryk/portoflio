# Portfolio Contact Section - Frontend Contract

## Overview

The Contact section presents a short invitation, a message form, and static contact details in a cohesive layout that matches the dark portfolio theme. The form is UI-only with client-side state for visual validation and loading states.

## Section Purpose

- Provide a clear path to send a message
- Surface basic contact details (email, phone)
- Maintain a clean, trustworthy UI with clear field labels
- Adapt gracefully across mobile, tablet, and desktop

## Visual Reference

Inspired by the reference design:
- Dark theme background with clear section separation
- Left side text and contact details; right side form (desktop)
- Strong section heading with concise supporting copy
- Large message field and prominent submit button

## Component Hierarchy (Atomic Design)

```
SectionWrapper (Template)
└── ContactSection (Organism)
    ├── SectionHeader (Molecule)
    │   ├── Typography - Heading (Atom)
    │   └── Typography - Subheading (Atom)
    ├── ContactInfo (Organism)
    │   └── ContactInfoItem[] (Molecule)
    │       ├── Typography - Label (Atom)
    │       └── Typography - Value (Atom)
    └── ContactForm (Organism)
        ├── FormRow[] (Molecule)
        │   └── TextField (Atom)
        └── SubmitButton (Atom - Button)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|--------------|------------|----------|
| Section Heading | String | 40 chars | Yes |
| Section Subheading | String | 160 chars | No |
| Email Label | String | 24 chars | Yes |
| Email Value | String | 64 chars | Yes |
| Phone Label | String | 24 chars | Yes |
| Phone Value | String | 32 chars | Yes |
| Field Labels | String | 24 chars | Yes |
| Field Placeholders | String | 48 chars | No |
| Submit Label | String | 24 chars | Yes |

## Props Interface

```typescript
interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
}

interface ContactFormField {
  id: "fullName" | "email" | "phone" | "subject" | "message";
  label: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}

interface ContactSectionProps {
  heading: string;
  subheading?: string;
  infoItems: ContactInfoItem[];
  fields: ContactFormField[];
  submitLabel: string;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  formAction?: string;
  formMethod?: "POST" | "GET";
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column; header, form, then contact info; full-width fields |
| sm | 600-899px | Single column with increased spacing; form fields stacked |
| md | 900-1199px | Two-column layout: info on left, form on right |
| lg | 1200px+ | Two-column layout; wider form column and larger header typography |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Section Heading | h3 | h2 | h2 |
| Section Subheading | body2 | body1 | body1 |
| Field Labels | body2 | body2 | body1 |
| Contact Info Label | overline | overline | overline |
| Contact Info Value | body1 | body1 | h6 |
| Submit Button | button | button | button |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Header to content gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| Column gap (md+) | theme.spacing(6) |
| Form row gap | theme.spacing(2) |
| Submit button top margin | theme.spacing(3) |

## States

- Default: all fields enabled, submit button enabled
- Focus: clear focus ring on inputs and button
- Disabled: inputs and button disabled when `isDisabled` true
- Loading: submit button shows loading state when `isSubmitting` true
- Validation (visual only): input error styling for invalid email/required fields

## Accessibility Requirements

- Section uses `<section>` with a heading element for the title
- Inputs have visible labels; `aria-invalid` for error state
- Submit button uses `aria-busy` when loading
- Tab order follows DOM; no keyboard traps
- Text contrast >= 4.5:1

## Edge Cases

| Case | Handling |
|------|----------|
| Invalid email format | Show error state and helper text (visual only) |
| Very long message | Multiline field grows with scrolling inside input |
| Small screen keyboard overlap | Keep submit button visible below inputs with spacing |
| Disabled submit state | Button and inputs dim, no interaction |

## Mock Content (Default Data)

- Heading: "Get in Touch"
- Subheading: "Have a project in mind or just want to say hello? Send a message and I will get back to you."
- Contact info:
  - "Email" -> "hello@portfolio.dev"
  - "Phone" -> "+1 (555) 123-4567"
- Submit label: "Send Message"

## Dependencies

- @mui/material: Box, Container, Typography, TextField, Button, Stack
- No new dependencies

## Out of Scope

- Form submission
- Backend or API integration
- CAPTCHA or spam protection
