# Portfolio About Section - Frontend Contract

## Overview

The About section introduces the developer with a profile image, name and role, multi-paragraph bio, and clear calls-to-action. It supports the dark-themed portfolio aesthetic while providing personal context and credibility.

## Section Purpose

- Establish personal identity and specialization
- Provide deeper narrative beyond the hero section
- Offer quick actions (resume and contact)
- Reinforce trust with a clear profile visual

## Visual Reference

Based on the provided reference design:
- Dark background, high-contrast typography
- Prominent profile image
- Strong name/role hierarchy
- Two primary CTAs with distinct emphasis

## Component Hierarchy (Atomic Design)

```
AboutSection (Organism)
├── ProfileMedia (Molecule)
│   └── Avatar/Image (Atom)
├── AboutHeader (Molecule)
│   ├── Typography - Name (Atom)
│   └── Typography - Role (Atom)
├── AboutBio (Molecule)
│   └── Typography[] - Paragraphs (Atom)
└── CTAGroup (Molecule)
    ├── Button - Primary (Atom)
    └── Button - Secondary (Atom)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|--------------|------------|----------|
| Profile Image | Image URL | N/A | Yes |
| Image Alt | String | 80 chars | Yes |
| Name | String | 40 chars | Yes |
| Role | String | 40 chars | Yes |
| Bio Paragraphs | String[] | 3 paragraphs | Yes |
| Primary CTA | String | 20 chars | Yes |
| Secondary CTA | String | 20 chars | Yes |

## Props Interface

```typescript
interface AboutSectionProps {
  profileImage: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  bio: string[];
  primaryCTA: {
    label: string;
    onClick: () => void;
  };
  secondaryCTA: {
    label: string;
    onClick: () => void;
  };
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column, image above text, stacked CTAs |
| sm | 600-899px | Single column, image left-aligned, inline CTAs |
| md | 900-1199px | Two columns: image left, text right |
| lg | 1200px+ | Two columns with increased spacing |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Name | h4 | h3 | h2 |
| Role | h6 | h5 | h4 |
| Bio | body2 | body1 | body1 |
| CTA Labels | button | button | button |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Image to text gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| Paragraph spacing | theme.spacing(2) |
| CTA group gap | theme.spacing(2) |

## States

- Default: All content visible
- Loading: N/A (static content)
- Error: N/A (no data fetching)
- Empty: N/A (required content)

## Accessibility Requirements

- Use a section landmark with an h2 heading
- Provide descriptive alt text for the profile image
- Ensure buttons have clear, unique labels
- Maintain contrast ratio >= 4.5:1 for text
- Preserve focus indicators for CTAs

## Edge Cases

| Case | Handling |
|------|----------|
| Missing image | Fallback to initials in Avatar |
| Long name or role | Allow wrapping, keep hierarchy |
| More than 3 paragraphs | Clamp to 3 on mobile, show all on desktop |
| Very small screens (<320px) | Stack CTAs and reduce spacing |

## Dependencies

- @mui/material: Box, Typography, Button, Stack, Avatar, Container
- @mui/system: useTheme, useMediaQuery
- No external dependencies

## Out of Scope

- Animations/transitions
- Backend data loading
- File upload or image editing
- Routing or form submission logic
