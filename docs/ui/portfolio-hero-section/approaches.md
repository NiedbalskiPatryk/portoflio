# Portfolio Hero Section - Architecture Approaches

## Reference Design Analysis

Based on [public/1.webp](public/1.webp), the Hero section contains:

| Element | Reference Implementation |
|---------|-------------------------|
| Location | Pin icon + "Dhaka, Bangladesh" text |
| Name | "I'm Rakesh Karmaker" (h1) |
| Role | "Web Developer" (h2, secondary color) |
| Description | 2-line paragraph about specialization |
| Primary CTA | "Get yours now" (outlined button) |
| Secondary CTA | "See my works" (outlined button) |
| Tech Label | "Technologies I use" (caption) |
| Tech Stack | 12+ chips in horizontal scrollable row |

## Current State

A basic inline implementation exists in [src/app/page.tsx:28-98](src/app/page.tsx#L28-L98) but lacks:
- Proper Atomic Design structure
- Responsive typography
- Location icon
- Componentization for reusability

---

## Approach 1: Minimal Molecules (Recommended)

### Overview
Extract only essential molecules while keeping the organism simple. Focus on reusability of CTAGroup and TechStackRow which can be used elsewhere.

### Component Breakdown

```
src/components/
├── atoms/
│   └── (use existing MUI: Typography, Button, Chip, Icon)
├── molecules/
│   ├── LocationBadge/
│   │   └── LocationBadge.tsx  (Icon + Typography)
│   ├── CTAGroup/
│   │   └── CTAGroup.tsx       (Button pair with responsive stacking)
│   └── TechStackRow/
│       └── TechStackRow.tsx   (Chip list with wrap/scroll)
└── organisms/
    └── HeroSection/
        └── HeroSection.tsx    (Assembles all with layout)
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs (0-599) | Single column, stacked CTAs, wrapped chips (2 rows max) |
| sm (600-899) | Single column, inline CTAs, wrapped chips |
| md+ (900+) | Centered column, inline CTAs, single-row chips |

### CTA Behavior on Mobile
- xs: Full-width stacked buttons (column direction)
- sm+: Inline with gap

### Text Overflow Handling
- Name: Allow natural wrap, no truncation
- Description: Line clamp at 3 lines on mobile via `-webkit-line-clamp`
- Tech chips: Wrap to max 2 rows, overflow hidden

### Pros
- Minimal new components (3 molecules, 1 organism)
- CTAGroup and TechStackRow reusable in other sections
- Clear separation of concerns
- Easy to understand and maintain

### Cons
- Headline (Name + Role) not extracted as molecule
- Less granular than pure Atomic Design

### Edge Cases
| Case | Solution |
|------|----------|
| Long name | word-break: break-word, responsive font size |
| 15+ tech chips | max 2 rows on mobile, scroll on touch |
| No CTA onClick | Buttons disabled or scroll to section |

---

## Approach 2: Full Atomic Decomposition

### Overview
Maximum decomposition following strict Atomic Design. Every logical group becomes a molecule.

### Component Breakdown

```
src/components/
├── atoms/
│   ├── LocationIcon/
│   │   └── LocationIcon.tsx   (Wrapper for MUI Place icon)
│   └── TechChip/
│       └── TechChip.tsx       (Styled Chip variant)
├── molecules/
│   ├── LocationBadge/
│   │   └── LocationBadge.tsx
│   ├── HeroHeadline/
│   │   └── HeroHeadline.tsx   (Name + Role typography)
│   ├── HeroDescription/
│   │   └── HeroDescription.tsx (Paragraph with constraints)
│   ├── CTAGroup/
│   │   └── CTAGroup.tsx
│   ├── TechStackLabel/
│   │   └── TechStackLabel.tsx (Section heading)
│   └── TechStackRow/
│       └── TechStackRow.tsx
└── organisms/
    └── HeroSection/
        └── HeroSection.tsx
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs | Stacked, padding: 4, smaller headings (h3/h4) |
| sm | Stacked, padding: 6, medium headings (h2/h3) |
| md+ | Centered, padding: 12, full headings (h1/h2) |

### CTA Behavior on Mobile
- Uses MUI Stack with `direction={{ xs: 'column', sm: 'row' }}`
- Full width buttons on xs only

### Text Overflow Handling
- HeroHeadline molecule handles responsive typography internally
- HeroDescription molecule handles line clamping

### Pros
- Pure Atomic Design compliance
- Maximum reusability
- Each molecule testable in isolation
- Clear props contracts per component

### Cons
- More files to maintain (7 molecules, 2 atoms, 1 organism)
- Potentially over-engineered for single-use components
- More cognitive overhead

### Edge Cases
| Case | Solution |
|------|----------|
| Long name | HeroHeadline responsive font sizing |
| Long role | Secondary text wraps naturally |
| Many chips | TechStackRow handles overflow |

---

## Approach 3: Organism-First with Subcomponents

### Overview
Create HeroSection as single organism with internal subcomponents. Keep molecules internal to reduce component tree complexity.

### Component Breakdown

```
src/components/
├── molecules/
│   ├── CTAGroup/
│   │   └── CTAGroup.tsx       (Reusable, extracted)
│   └── TechStackRow/
│       └── TechStackRow.tsx   (Reusable, extracted)
└── organisms/
    └── HeroSection/
        ├── HeroSection.tsx        (Main export)
        ├── HeroSection.types.ts   (TypeScript interfaces)
        ├── components/
        │   ├── LocationBadge.tsx  (Internal, not exported)
        │   └── HeroHeadline.tsx   (Internal, not exported)
        └── index.ts
```

### Layout Behavior

| Breakpoint | Layout |
|------------|--------|
| xs | Centered stack, reduced spacing (3-4) |
| sm | Centered stack, medium spacing (4-6) |
| md+ | Centered stack, full spacing (6-8) |

### CTA Behavior on Mobile
- Handled via sx prop with responsive object
- `flexDirection: { xs: 'column', sm: 'row' }`

### Text Overflow Handling
- All handled within HeroSection using sx props
- No separate components for text constraints

### Pros
- Fewer global components
- Self-contained organism
- Only truly reusable molecules exported
- Easier file navigation

### Cons
- Subcomponents not reusable outside Hero
- Slightly less "pure" Atomic Design
- Internal components may grow complex

### Edge Cases
| Case | Solution |
|------|----------|
| Long name | Inline responsive typography |
| Many techs | TechStackRow molecule handles |
| Future design changes | May require more refactoring |

---

## Comparison Matrix

| Criteria | Approach 1 | Approach 2 | Approach 3 |
|----------|------------|------------|------------|
| Component Count | 4 new | 10 new | 4 new |
| Reusability | Medium | High | Low-Medium |
| Maintainability | High | Medium | High |
| Atomic Purity | Medium | High | Low |
| File Complexity | Low | High | Medium |
| Testing Surface | Medium | High | Low |
| Time to Implement | Low | High | Low |

---

## Recommendation

**Approach 1: Minimal Molecules** is recommended because:

1. Balances Atomic Design principles with pragmatism
2. Creates reusable molecules (CTAGroup, TechStackRow) that will be needed in other sections
3. Keeps complexity manageable
4. Current inline implementation in page.tsx can be refactored incrementally
5. Aligns with existing codebase patterns (e.g., LogoText atom simplicity)

---

## Next Steps (After Approval)

1. Create LocationBadge molecule
2. Create CTAGroup molecule
3. Create TechStackRow molecule
4. Create HeroSection organism
5. Refactor page.tsx to use HeroSection
6. Test all breakpoints
