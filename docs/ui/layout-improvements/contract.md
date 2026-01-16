# Frontend Contract: Layout Improvements (Footer + FAQ Spacing)

## Objective
Improve two layout aspects:
1. Make the footer stretch to full width of the viewport
2. Fix FAQ section spacing to prevent visual overlap when expanding multiple questions

## User Stories

### 1. Full-Width Footer
**As a user**, I want the footer to extend edge-to-edge of the viewport, so it feels like a distinct bottom section with proper visual weight.

**Acceptance Criteria:**
- Footer background extends to viewport edges (left and right)
- Footer content remains centered with max-width constraint
- Padding and spacing remain consistent
- Header remains constrained (no change to current layout)
- Mobile, tablet, and desktop viewports all look correct

### 2. FAQ Spacing
**As a user**, I want proper visual separation between FAQ items when they expand, so adjacent expanded items don't visually collide.

**Acceptance Criteria:**
- Expanded FAQ items maintain visible spacing from adjacent items
- Spacing is consistent and intentional (not accidental)
- Multiple expanded items can coexist without looking cramped
- Works on all responsive breakpoints
- Applies to both expanded and collapsed states for visual consistency

## Technical Requirements

### Current Structure Analysis
```
Footer (current):
├── Box (footer) with px padding
│   └── Container maxWidth="lg"
│       └── Content Grid

FAQList (current):
├── Stack spacing={2}
│   └── FAQItem x N
│       └── Accordion (disableGutters)
```

### Constraints
- No new dependencies allowed
- MUI components only
- Follow Atomic Design (no breaking changes)
- All changes must be CSS/layout (not structural component changes)

## Design System Considerations

### Typography
- No changes to typography

### Spacing Scale
- Current: xs=4, md=6 (FAQList)
- Current: xs=2, md=4 (Footer px)
- MUI spacing unit = 8px

### Colors/Theming
- Footer background: uses `background.paper`
- No theme changes needed

## Component Map Affected
```
molecules/FAQItem/FAQItem.tsx
├── Uses: Accordion, AccordionDetails, QuestionRow
├── Current sx styles on Accordion
└── Potential margin adjustments

organisms/FAQList/FAQList.tsx
├── Uses: Stack spacing={2}
├── Renders multiple FAQItems
└── Potential spacing={} increase

organisms/Footer/Footer.tsx
├── Uses: Box, Container, Typography components
├── Current px padding
└── Restructuring needed

templates/PortfolioLayout/PortfolioLayout.tsx
├── Wraps entire page
├── May need max-width adjustments
└── Current: max-width: 1440px on inner wrapper
```

## Success Metrics
- [ ] Footer extends full viewport width on all breakpoints
- [ ] FAQ items have minimum 12px visual gap when expanded
- [ ] No layout shift on expand/collapse
- [ ] No horizontal scrollbar appears
- [ ] Visual consistency maintained across themes

## Out of Scope
- Animation timing changes
- FAQ accordion behavior changes (expand/collapse logic)
- Header layout changes
- Restructuring component hierarchy
- Changes to existing data structures
