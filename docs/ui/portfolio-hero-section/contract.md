# Portfolio Hero Section - Frontend Contract

## Overview

The Hero section is the above-the-fold area of the developer portfolio homepage. It serves as the primary introduction, communicating the developer's identity, location, role, value proposition, and technical expertise.

## Section Purpose

- Immediately communicate who the developer is
- Establish geographic context (location)
- Convey professional role and specialization
- Provide clear calls-to-action for engagement
- Display technical stack at a glance

## Visual Reference

Based on reference design (public/1.webp):
- Dark theme background (#0a0a0a or similar)
- Centered content layout
- Clean typography hierarchy
- Horizontal technology stack display

## Component Hierarchy (Atomic Design)

```
HeroSection (Organism)
├── LocationLabel (Molecule)
│   ├── Icon (Atom)
│   └── Typography (Atom)
├── HeroHeadline (Molecule)
│   ├── Typography - Name (Atom)
│   └── Typography - Role (Atom)
├── HeroDescription (Atom - Typography)
├── CTAGroup (Molecule)
│   ├── Button - Primary (Atom)
│   └── Button - Secondary (Atom)
├── TechStackLabel (Atom - Typography)
└── TechStackRow (Molecule)
    └── Chip[] (Atoms)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|-------------|------------|----------|
| Location | String | 50 chars | Yes |
| Name | String | 40 chars | Yes |
| Role | String | 30 chars | Yes |
| Description | String | 200 chars | Yes |
| Primary CTA | String | 20 chars | Yes |
| Secondary CTA | String | 20 chars | Yes |
| Tech Stack | String[] | 15 items | Yes |

## Props Interface

```typescript
interface HeroSectionProps {
  location: string;
  name: string;
  role: string;
  description: string;
  primaryCTA: {
    label: string;
    onClick: () => void;
  };
  secondaryCTA: {
    label: string;
    onClick: () => void;
  };
  technologies: string[];
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column, stacked CTAs, wrapped tech chips |
| sm | 600-899px | Single column, inline CTAs, wrapped tech chips |
| md | 900-1199px | Centered, inline CTAs, single-row tech chips |
| lg | 1200px+ | Centered, inline CTAs, single-row tech chips |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Location | body2 | body2 | body1 |
| Name | h3 | h2 | h1 |
| Role | h4 | h3 | h2 |
| Description | body2 | body1 | body1 |
| Tech Label | caption | body2 | body2 |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Between headline groups | theme.spacing(2) |
| Between description and CTAs | theme.spacing(4) |
| Between CTAs and tech section | theme.spacing(6) |
| Tech chip gap | theme.spacing(1) |

## States

- Default: All content visible
- Loading: N/A (static content)
- Error: N/A (no data fetching)
- Empty: N/A (required content)

## Accessibility Requirements

- Semantic HTML structure (section, h1, p)
- Proper heading hierarchy (h1 for name, h2 for role)
- Buttons must have accessible names
- Color contrast ratio >= 4.5:1 for text
- Focus indicators on interactive elements
- Tech chips should be non-interactive (display only)

## Edge Cases

| Case | Handling |
|------|----------|
| Long name (>25 chars) | Allow text wrap, maintain hierarchy |
| Long role (>20 chars) | Allow text wrap |
| Long description | Clamp to 3 lines on mobile |
| Many tech items (>10) | Wrap to multiple rows |
| Small viewport (<320px) | Stack all elements, reduce font sizes |

## Dependencies

- @mui/material: Box, Typography, Button, Chip, Stack, Container
- @mui/system: useTheme, useMediaQuery
- No external dependencies

## Out of Scope

- Animations/transitions
- Background images/patterns
- Navigation component
- Theme configuration
- Form logic
- API integration
