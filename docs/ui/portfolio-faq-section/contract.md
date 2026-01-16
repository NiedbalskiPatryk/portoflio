# Portfolio FAQ Section - Frontend Contract

## Overview

The FAQ section presents common questions and answers in a clean, accordion-based layout. It supports accessible expand/collapse behavior, readable typography, and a consistent dark theme that matches the portfolio.

## Section Purpose

- Answer common questions quickly without leaving the page
- Keep content scannable with collapsible panels
- Maintain accessibility and keyboard support
- Adapt smoothly across mobile, tablet, and desktop

## Visual Reference

Inspired by the reference design:
- Dark theme background (#0a0a0a or similar)
- Section heading with short supporting copy
- Single-column accordion list with subtle dividers
- Clear expand/collapse affordance

## Component Hierarchy (Atomic Design)

```
SectionWrapper (Template)
└── FAQSection (Organism)
    ├── SectionHeader (Molecule)
    │   ├── Typography - Heading (Atom)
    │   └── Typography - Subheading (Atom)
    └── FAQList (Organism)
        └── FAQItem[] (Molecule)
            ├── QuestionRow (Molecule)
            │   ├── Typography - Question (Atom)
            │   └── Icon - Toggle (Atom)
            └── AnswerBlock (Atom - Typography)
```

## Content Structure

| Element | Content Type | Max Length | Required |
|---------|-------------|------------|----------|
| Section Heading | String | 40 chars | Yes |
| Section Subheading | String | 160 chars | No |
| Question | String | 140 chars | Yes |
| Answer | String | 500 chars | Yes |
| FAQ Items | FAQItem[] | 4-8 items | Yes |

## Props Interface

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  subheading?: string;
  items: FAQItem[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
}
```

## Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| xs | 0-599px | Single column, full-width accordion, tight spacing |
| sm | 600-899px | Single column, comfortable spacing |
| md | 900-1199px | Single column, max width ~720px centered |
| lg | 1200px+ | Single column, max width ~800px centered |

## Typography Scale

| Element | Mobile (xs) | Tablet (sm) | Desktop (md+) |
|---------|-------------|-------------|---------------|
| Section Heading | h3 | h2 | h2 |
| Section Subheading | body2 | body1 | body1 |
| Question | body1 | body1 | h6 |
| Answer | body2 | body1 | body1 |

## Spacing

| Element | Spacing Token |
|---------|---------------|
| Section padding | theme.spacing(8, 2) mobile, theme.spacing(12, 4) desktop |
| Header to list gap | theme.spacing(4) mobile, theme.spacing(6) desktop |
| Item spacing | theme.spacing(2) between accordions |
| Question to answer gap | theme.spacing(2) |

## States

- Default: All items collapsed
- Expanded: One or multiple items open based on `allowMultiple`
- Focus: Visible focus ring on the question row
- Empty: Show placeholder text if items array is empty

## Accessibility Requirements

- Section uses `<section>` with a heading element for the title
- Accordion summary is a button with `aria-expanded`, `aria-controls`, and unique `id`
- Answer region uses `role="region"` and `aria-labelledby`
- Keyboard support: Tab to focus, Enter/Space to toggle
- Focus order follows DOM order; no keyboard traps
- Text contrast >= 4.5:1

## Edge Cases

| Case | Handling |
|------|----------|
| Very long questions | Allow wrap to 2-3 lines, avoid overflow |
| Very long answers | Allow multi-paragraph text, preserve spacing |
| All items collapsed | Maintain stable layout without empty gaps |
| Multiple items expanded (mobile) | Content stacks with scroll, no overlap |
| Empty items array | Show a short empty-state message |

## Mock Content (Default Data)

1. **What services do you specialize in?**
   - I focus on frontend engineering, design systems, and performance optimization for modern web apps.
2. **Do you work with startups or only established teams?**
   - Both. I adapt to early-stage needs and also scale design systems for larger orgs.
3. **What is your typical project timeline?**
   - Most engagements run 4-12 weeks depending on scope and feedback cycles.
4. **Can you collaborate with in-house designers or developers?**
   - Yes, I slot into existing teams and workflows, using shared tools and standards.
5. **How do we get started?**
   - Share a brief, timeline, and goals. I will respond with next steps and availability.

## Dependencies

- @mui/material: Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Stack, SvgIcon
- No new dependencies

## Out of Scope

- Search or filtering
- Animations or transitions
- Backend integration or form handling
