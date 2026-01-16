# Portfolio Services Section - Architecture Approaches

## Reference Design Analysis

Based on [public/2.webp](public/2.webp), the Services section contains:

| Element | Reference Implementation |
|---------|-------------------------|
| Layout | Split layout: left panel (header) + right panel (cards) |
| Section Heading | "My Services" (large, white) |
| Section Description | 2-line paragraph about service range |
| CTA Button | "Learn More" (outlined, left side) |
| Service Cards | 4 cards stacked vertically on right |
| Card Layout | Horizontal: Icon (left) + Title/Description (right) |
| Icons | Monitor, Database/Layers, Pen, Lightning |
| Card Style | Dark background, subtle border, consistent spacing |

## Current State

A placeholder exists in [src/app/page.tsx:42-48](src/app/page.tsx#L42-L48) as a simple section with just a heading. This needs to be replaced with a fully functional Services section following Atomic Design.

---

## Approach 1: Split Panel Layout (Matches Reference) ⭐

### Overview
Recreate the reference design with a split layout: left panel for section header/CTA, right panel for service cards. Desktop uses 2-column grid, mobile stacks everything vertically.

### Component Breakdown

```
src/components/
├── atoms/
│   └── (use existing MUI: Typography, Button, Card, Icon)
├── molecules/
│   ├── SectionHeader/
│   │   └── SectionHeader.tsx  (Heading + Description + CTA)
│   └── ServiceCard/
│       └── ServiceCard.tsx    (Icon + Title + Description, horizontal)
└── organisms/
    └── ServicesSection/
        └── ServicesSection.tsx (Grid with header panel + cards panel)
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs (0-599px) | Single column: header stacked above 4 cards |
| sm (600-899px) | Single column: header above, cards in 2 columns |
| md+ (900px+) | Split: header panel (left, 40%) + cards panel (right, 60%) |

### Grid Specification
- **Desktop (md+):** 2 columns (5fr for header panel, 7fr for cards area)
- **Cards area:** 4 cards stacked vertically with gap
- **Mobile:** All elements stack vertically

### ServiceCard Layout
- **Structure:** Horizontal (icon left, content right)
- **Icon:** 40px, positioned top-left
- **Content:** Title (h5) + Description (body2)
- **Spacing:** theme.spacing(3) padding, 2 spacing between icon and text

### Icon Strategy
- Use MUI icons from @mui/icons-material
- Icons: ComputerOutlined, StorageOutlined, BrushOutlined, FlashOnOutlined
- Size: 40px
- Color: text.secondary or primary

### Content Scalability
- Cards use CSS Grid with consistent heights
- Long titles wrap to 2 lines max
- Descriptions clamp to 3 lines with ellipsis
- Header panel height adapts to content

### Pros
- Matches reference design exactly
- Unique split-panel layout creates visual interest
- Clear separation between intro and services
- CTA prominent on left side

### Cons
- More complex responsive behavior
- May feel unbalanced on tablet sizes
- Header panel may have empty space if content is short

### Edge Cases
| Case | Solution |
|------|----------|
| Short header content | Add min-height to header panel |
| 5+ services | Scroll cards area or wrap to 2 columns |
| Long service title | Clamp to 2 lines, ellipsis |
| Very small screens (<360px) | Stack all with reduced spacing |

---

## Approach 2: Traditional Centered Grid

### Overview
Standard section layout with centered header at top and service cards in a responsive grid below. Simple, predictable, and highly maintainable.

### Component Breakdown

```
src/components/
├── atoms/
│   └── (use existing MUI: Typography, Button, Card, Icon)
├── molecules/
│   ├── SectionHeader/
│   │   └── SectionHeader.tsx  (Heading + Description, centered)
│   └── ServiceCard/
│       └── ServiceCard.tsx    (Vertical: Icon top, Title, Description)
└── organisms/
    └── ServicesSection/
        └── ServicesSection.tsx (Container > Header + Grid of cards)
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs (0-599px) | Single column: header + 1 card per row |
| sm (600-899px) | Header + 2 cards per row |
| md+ (900px+) | Header + 2 cards per row (or 4 if space permits) |

### Grid Specification
- **Desktop:** 2 columns with equal width (or 4 columns for compact cards)
- **Gap:** theme.spacing(4) desktop, spacing(3) mobile
- **Cards:** Equal height using CSS Grid auto-rows: 1fr

### ServiceCard Layout
- **Structure:** Vertical (icon top, title, description stacked)
- **Icon:** 48px, centered or left-aligned
- **Content:** Title (h5) + Description (body2)
- **Padding:** theme.spacing(4) all sides
- **Background:** theme.palette.background.paper or surface.overlay

### Icon Strategy
- MUI icons: ComputerOutlined, StorageOutlined, BrushOutlined, FlashOnOutlined
- Size: 48px (larger for vertical cards)
- Positioned at top of card
- Consistent spacing (theme.spacing(2) below icon)

### Content Scalability
- Cards have min-height for consistency
- Grid ensures equal heights automatically
- Descriptions clamp to 4 lines
- CTA button below description (optional, per card)

### Pros
- Simple, familiar layout pattern
- Easy responsive behavior
- Equal card heights naturally
- Highly reusable SectionHeader molecule
- Works well with any number of services

### Cons
- Less unique than split-panel layout
- No dedicated CTA in header (can add to each card)
- May look generic

### Edge Cases
| Case | Solution |
|------|----------|
| Odd number of services | Last card spans full width or centers |
| Long descriptions | Line clamp at 4 lines |
| Many services (6+) | Paginate or show "Load more" |
| No CTA needed | Hide CTA elements entirely |

---

## Approach 3: Compact Horizontal Cards

### Overview
Minimize header, maximize card density. Cards are horizontal (icon + text side-by-side) in a single column or tight 2-column grid. Focus on content over decoration.

### Component Breakdown

```
src/components/
├── atoms/
│   └── (use existing MUI: Typography, Button, Card, Icon)
├── molecules/
│   └── ServiceCard/
│       └── ServiceCard.tsx    (Horizontal compact: Icon + Title + Desc)
└── organisms/
    └── ServicesSection/
        ├── ServicesSection.tsx
        └── components/
            └── MinimalHeader.tsx (Inline heading + CTA, internal only)
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs (0-599px) | Minimal header + 1 card per row (stacked) |
| sm (600-899px) | Header + 1 card per row (wider) |
| md+ (900px+) | Header inline with CTA + 2 columns of horizontal cards |

### Grid Specification
- **Desktop:** 2 columns, cards are wide and horizontal
- **Gap:** theme.spacing(2) for compact feel
- **Cards:** Auto height, no equal height constraint

### ServiceCard Layout
- **Structure:** Horizontal (icon 32px left, title/desc right, tight spacing)
- **Icon:** 32px (smaller, decorative)
- **Content:** Title (h6, inline) + Description (body2, below)
- **Padding:** theme.spacing(2, 3) for compact feel
- **Border:** Subtle border, no background fill

### Icon Strategy
- MUI icons, size 32px
- Positioned far-left with small margin-right
- More decorative, less prominent
- Color: text.secondary

### Content Scalability
- Cards expand based on content height
- No line clamping (trust content to be concise)
- Title and description in tight vertical stack
- Scales to 6+ services easily

### Pros
- Space-efficient, fits more services
- Fast to scan (horizontal cards)
- Minimal visual weight
- Great for long service lists
- Easy to add/remove services

### Cons
- Less visually impressive
- Icons are decorative, not focal
- Horizontal cards may feel cramped on mobile
- No strong CTA placement

### Edge Cases
| Case | Solution |
|------|----------|
| Very long description | Allow natural expansion (no clamp) |
| Many services (8+) | Works well, scales naturally |
| No icons | Cards still work with just text |
| Single service | Center card or make full-width |

---

## Comparison Matrix

| Criteria | Approach 1 (Split) | Approach 2 (Grid) | Approach 3 (Compact) |
|----------|-------------------|-------------------|----------------------|
| Component Count | 3 new | 3 new | 2 new |
| Visual Interest | High | Medium | Low |
| Matches Reference | Exact | Partial | No |
| Responsive Complexity | High | Low | Medium |
| Content Density | Medium | Low | High |
| Reusability | Medium | High | Low |
| Card Style | Horizontal | Vertical | Horizontal |
| Icon Prominence | Medium | High | Low |
| CTA Placement | Dedicated panel | Optional per card | Inline header |
| Scales to 6+ Services | Needs scroll/grid | Needs pagination | Excellent |

---

## Atomic Design Breakdown (All Approaches)

### Atoms
- **Typography** (MUI) - Headings, body text
- **Button** (MUI) - CTA buttons
- **Card** (MUI) - Card containers
- **Icons** (MUI) - Service icons

### Molecules
- **SectionHeader** - Heading + Description + optional CTA (Approaches 1 & 2)
- **ServiceCard** - Icon + Title + Description (all approaches, different layouts)

### Organisms
- **ServicesSection** - Assembles SectionHeader + ServiceCard grid

### Templates
- **PortfolioLayout** (already exists) - Page-level wrapper

---

## Recommendation

**Approach 1: Split Panel Layout** is recommended because:

1. **Matches reference design** - Recreates the exact visual style from public/2.webp
2. **Unique visual hierarchy** - Split layout is distinctive and engaging
3. **Clear CTA placement** - Dedicated panel for "Learn More" button
4. **Balanced composition** - Left panel balances right panel visually
5. **Professional appearance** - Matches modern portfolio trends

**Alternative:** If simplicity is preferred, choose Approach 2 for easier maintenance.

---

## Next Steps (After Approval)

1. Create SectionHeader molecule (Heading + Description + CTA)
2. Create ServiceCard molecule (horizontal layout with icon)
3. Create ServicesSection organism (split panel grid)
4. Add service data to page.tsx
5. Test all breakpoints (xs, sm, md, lg)
6. Verify card height consistency
