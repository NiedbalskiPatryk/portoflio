# Portfolio Services Section - Frontend Contract

## Overview

The Services section presents the developer's core competencies and service offerings in a clean, card-based layout. Each service card includes an icon, title, and description to communicate expertise areas to potential clients or employers.

## Section Purpose

- Showcase offered services and technical competencies
- Establish professional expertise areas
- Provide clear value propositions for each service
- Create visual hierarchy through consistent card design
- Support responsive grid layouts across all devices

## Visual Reference

Based on reference design (public/2.webp):
- Dark theme background (#0a0a0a or similar)
- Section heading: "My Services"
- Section description text
- "Learn More" CTA button (optional)
- 4 service cards in 2x2 grid (desktop)
- Each card contains:
  - Icon (unique per service)
  - Service title
  - Service description (2-3 lines)
- Consistent spacing and alignment

## Component Hierarchy (Atomic Design)

```
ServicesSection (Organism)
├── SectionHeader (Molecule)
│   ├── Typography - Heading (Atom)
│   ├── Typography - Description (Atom)
│   └── Button - CTA (Atom, optional)
├── ServicesGrid (Molecule)
│   └── ServiceCard[] (Molecules)
│       ├── Icon (Atom)
│       ├── Typography - Title (Atom)
│       └── Typography - Description (Atom)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|-------------|------------|----------|
| Section Heading | String | 30 chars | Yes |
| Section Description | String | 150 chars | No |
| CTA Button Label | String | 20 chars | No |
| Service Title | String | 40 chars | Yes |
| Service Description | String | 200 chars | Yes |
| Service Icon | String/Component | N/A | Yes |
| Services Array | ServiceItem[] | 3-8 items | Yes |

## Props Interface

```typescript
interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  heading: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  services: ServiceItem[];
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column, stacked cards, full width |
| sm | 600-899px | 2 columns, reduced gap |
| md | 900-1199px | 2 columns, standard gap |
| lg | 1200px+ | 2 columns (or 4 if design permits), full spacing |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Section Heading | h3 | h2 | h2 |
| Section Description | body2 | body1 | body1 |
| Service Title | h5 | h5 | h4 |
| Service Description | body2 | body2 | body1 |
| CTA Button | button | button | button |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Header to grid gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| Grid gap | theme.spacing(3) mobile, theme.spacing(4) desktop |
| Card padding | theme.spacing(4) mobile, theme.spacing(5) desktop |
| Icon to title | theme.spacing(2) |
| Title to description | theme.spacing(1.5) |

## States

- Default: All cards visible
- Hover: Card subtle elevation or border highlight (optional)
- Loading: N/A (static content)
- Error: N/A (no data fetching)
- Empty: Show message if services array is empty

## Accessibility Requirements

- Semantic HTML structure (section, heading hierarchy)
- Proper heading levels (h2 for section, h4/h5 for cards)
- Icons should be decorative (aria-hidden="true")
- Descriptive text for all content
- Color contrast ratio >= 4.5:1 for text
- Focus indicators if cards are interactive
- CTA button must have accessible name if provided

## Edge Cases

| Case | Handling |
|------|----------|
| Long service title (>30 chars) | Allow text wrap, max 2 lines |
| Long description (>150 chars) | Clamp to 3 lines with ellipsis |
| Uneven card heights | Use CSS Grid auto-rows or equal height flex |
| Odd number of services | Last card spans remaining space or centers |
| No description provided | Hide description element |
| No CTA button | Hide CTA element from header |
| Single service | Display as single centered card |

## Service Content (Default Data)

### Front-End Development
- **Title:** Front-End Development
- **Description:** I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.
- **Icon:** Monitor/Code icon

### Back-End Development
- **Title:** Back-End Development
- **Description:** I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run smoothly and efficiently.
- **Icon:** Database/Server icon

### UI / UX Design
- **Title:** UI / UX Design
- **Description:** I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user behavior, accessibility, and aesthetics to deliver a polished digital experience.
- **Icon:** Pen/Design icon

### Performance Optimization
- **Title:** Performance Optimization
- **Description:** Slow websites lose visitors! I enhance website performance with code optimization, caching strategies, and SEO improvements, ensuring fast load time and a smooth user experience.
- **Icon:** Lightning/Speed icon

## Dependencies

- @mui/material: Box, Container, Typography, Button, Card, CardContent, Grid
- @mui/icons-material: (for service icons)
- @mui/system: useTheme, useMediaQuery
- No external dependencies

## Out of Scope

- Animations/transitions (may add later)
- Card interactions beyond hover
- Filtering or sorting services
- Backend integration
- Dynamic loading of services
- Individual service detail pages
- Modal or drawer expansions
