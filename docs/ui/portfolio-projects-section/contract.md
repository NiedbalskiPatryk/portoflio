# Portfolio Projects Section - Frontend Contract

## Overview

The Projects section highlights selected client projects with a selectable list and a visual preview panel. The list drives the active project state, and the preview updates to show the selected project's details and imagery.

## Section Purpose

- Showcase featured client work in a focused, scannable layout
- Provide quick switching between projects without leaving the page
- Maintain a strong visual hierarchy with a preview panel
- Support responsive behavior from mobile to desktop
- Handle empty or missing preview data gracefully

## Visual Reference

Inspired by the reference design (public/2.webp):
- Dark theme background (#0a0a0a or similar)
- Section heading: "Projects" or "Selected Projects"
- Short description text below the heading
- Left column: vertical list of project names (selectable)
- Right column: large preview panel (image + metadata)
- Active item visually highlighted

## Component Hierarchy (Atomic Design)

```
ProjectsSection (Organism)
├── SectionHeader (Molecule)
│   ├── Typography - Heading (Atom)
│   └── Typography - Description (Atom)
├── ProjectsLayout (Template)
│   ├── ProjectsList (Organism)
│   │   └── ProjectListItem[] (Molecule)
│   │       └── Typography - Project Title (Atom)
│   └── ProjectPreview (Organism)
│       ├── Box - Preview Frame (Atom)
│       ├── Typography - Project Name (Atom)
│       ├── Typography - Project Summary (Atom)
│       └── Divider (Atom)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|-------------|------------|----------|
| Section Heading | String | 30 chars | Yes |
| Section Description | String | 160 chars | No |
| Project Name | String | 60 chars | Yes |
| Project Summary | String | 220 chars | No |
| Project Tags | String[] | 3-6 tags | No |
| Preview Image | String (path) | N/A | No |
| Projects Array | ProjectItem[] | 3-8 items | Yes |

## Props Interface

```typescript
interface ProjectItem {
  id: string;
  name: string;
  summary?: string;
  tags?: string[];
  previewImage?: string;
}

interface ProjectsSectionProps {
  heading: string;
  description?: string;
  projects: ProjectItem[];
  defaultActiveId?: string;
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Stacked layout: list above preview, full width |
| sm | 600-899px | Stacked layout, tighter gaps |
| md | 900-1199px | Two columns: list 35%, preview 65% |
| lg | 1200px+ | Two columns: list 30%, preview 70% |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Section Heading | h3 | h2 | h2 |
| Section Description | body2 | body1 | body1 |
| Project List Item | body1 | body1 | h6 |
| Preview Title | h5 | h4 | h4 |
| Preview Summary | body2 | body1 | body1 |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Header to content gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| List item spacing | theme.spacing(2) |
| List to preview gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| Preview padding | theme.spacing(3) mobile, theme.spacing(4) desktop |

## States

- Default: First project selected if available
- Active: Selected list item highlighted
- Hover: List item hover highlight (optional)
- Empty: Show placeholder if projects array is empty
- Missing preview image: Use neutral placeholder box or gradient

## Accessibility Requirements

- Section uses semantic `<section>` with proper heading level
- List items are buttons or list elements with role="button"
- Active item indicated by color and `aria-selected="true"`
- Keyboard navigation supported (Tab and Enter/Space)
- Text contrast >= 4.5:1
- Preview image has descriptive alt text (project name)

## Edge Cases

| Case | Handling |
|------|----------|
| No project selected | Auto-select first item if available |
| Very long project title | Allow wrap to 2 lines with ellipsis clamp |
| Missing preview image | Show placeholder frame with label |
| Small screen | Stack list above preview with full width |
| No summary | Hide summary block and reduce spacing |
| Empty project list | Show empty state message |

## Mock Content (Default Data)

### Project Atlas
- **Name:** Project Atlas
- **Summary:** Multi-tenant analytics dashboard for enterprise clients.
- **Tags:** ["React", "TypeScript", "Data Viz"]
- **Preview Image:** /images/projects/atlas.webp

### Aurora Commerce
- **Name:** Aurora Commerce
- **Summary:** Headless commerce storefront with fast, accessible UX.
- **Tags:** ["Next.js", "MUI", "Stripe"]
- **Preview Image:** /images/projects/aurora.webp

### Signal Studio
- **Name:** Signal Studio
- **Summary:** Brand and portfolio platform with editorial layouts.
- **Tags:** ["Design", "CMS", "SEO"]
- **Preview Image:** /images/projects/signal.webp

## Dependencies

- @mui/material: Box, Container, Typography, Divider, List, ListItemButton
- @mui/system: useTheme, useMediaQuery (optional)
- No new dependencies

## Out of Scope

- Navigation to project detail pages
- Animations or transitions
- Data fetching or API integration
- Filters or search
- Carousel or slideshow behavior
