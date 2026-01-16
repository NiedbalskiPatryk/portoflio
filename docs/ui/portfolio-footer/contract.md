# Portfolio Footer Section - Frontend Contract

## Overview

The Footer section closes the portfolio page with a compact identity block, contact details, and anchor navigation. It follows the dark theme and emphasizes clear hierarchy and legibility across viewports.

## Section Purpose

- Reinforce developer identity and short description
- Provide static contact details for quick reference
- Offer anchor navigation to main sections
- Display legal ownership notice

## Visual Reference

Inspired by the reference design:
- Dark footer panel with clear separation from main content
- Multi-column layout on desktop with compact stacking on mobile
- Bold name and subtle description to anchor identity
- Clear nav links and contact items with consistent spacing

## Component Hierarchy (Atomic Design)

```
PageFooter (Template)
└── Footer (Organism)
    ├── FooterIdentity (Molecule)
    │   ├── Typography - Name (Atom)
    │   └── Typography - Description (Atom)
    ├── FooterNav (Molecule)
    │   └── Link[] (Atom)
    ├── ContactBlock (Molecule)
    │   ├── Typography - Label (Atom)
    │   └── Link / Typography - Value (Atom)
    └── Typography - Copyright (Atom)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|--------------|------------|----------|
| Developer Name | String | 40 chars | Yes |
| Short Description | String | 120 chars | No |
| Nav Item Label | String | 24 chars | Yes |
| Nav Item Anchor | String | 64 chars | Yes |
| Contact Label | String | 24 chars | Yes |
| Contact Value | String | 80 chars | Yes |
| Copyright Text | String | 80 chars | Yes |

## Props Interface

```typescript
interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}

interface FooterContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

interface FooterProps {
  name: string;
  description?: string;
  socialLinks?: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  navHeading?: string;
  contactHeading?: string;
  navItems: FooterNavItem[];
  contactItems: FooterContactItem[];
  copyright: string;
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column; identity, nav, contact, copyright |
| sm | 600-899px | Single column with increased spacing; nav as two-column wrap |
| md | 900-1199px | Three columns: identity, nav, contact; copyright row below |
| lg | 1200px+ | Three columns with wider gaps; larger name typography |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Developer Name | h6 | h5 | h5 |
| Description | body2 | body2 | body1 |
| Section Labels | overline | overline | overline |
| Nav Links | body2 | body2 | body1 |
| Contact Values | body2 | body2 | body1 |
| Copyright | caption | caption | body2 |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Footer padding | theme.spacing(6, 2) mobile, theme.spacing(10, 4) desktop |
| Column gap (md+) | theme.spacing(6) |
| Section stack gap | theme.spacing(3) |
| Link list gap | theme.spacing(1) |
| Copyright top margin | theme.spacing(4) |

## States

- Default: all links visible and enabled
- Hover: link underline or color shift per theme
- Focus: visible focus ring on links

## Accessibility Requirements

- Footer uses `<footer>` landmark
- Links are keyboard navigable with clear focus states
- Text contrast >= 4.5:1 for body text
- Section labels use semantic typography hierarchy

## Edge Cases

| Case | Handling |
|------|----------|
| Long email address | Allow wrapping; keep label on its own line |
| Narrow screens | Stack content with generous spacing |
| Large font sizes | Avoid fixed heights; allow columns to expand |

## Mock Content (Default Data)

- Name: "Jordan Lee"
- Description: "Frontend developer crafting clean interfaces and fast, accessible experiences."
- Social links: "GitHub", "LinkedIn"
- Contact heading: "Contact me"
- Nav heading: "Menu"
- Nav items: "Home", "Services", "Projects", "About", "FAQ", "Contact"
- Contact items:
  - "Email" -> "hello@portfolio.dev"
  - "Phone" -> "+1 (555) 123-4567"
  - "Address" -> "San Francisco, CA"
- Copyright: "© 2026 Jordan Lee. All rights reserved."

## Dependencies

- @mui/material: Box, Container, Typography, Link, Stack
- No new dependencies

## Out of Scope

- Dynamic year logic
- External links or integrations
- Animation or motion effects
