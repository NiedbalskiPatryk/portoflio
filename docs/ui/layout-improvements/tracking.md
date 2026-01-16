# Layout Improvements: Tracking & Design Proposals

## Current State

### Footer Issue
```
Current:
┌─────────────────────────────────────────┐ viewport width
│ px padding                              │
│ ┌───────────────────────────────────┐   │
│ │ Container maxWidth="lg"           │   │
│ │ ┌─────────────────────────────┐   │   │
│ │ │ Content (3-col grid)        │   │   │
│ │ └─────────────────────────────┘   │   │
│ └───────────────────────────────────┘   │
└─────────────────────────────────────────┘

Problem: Footer is NOT full width - it's constrained by Container
```

### FAQ Issue
```
Current:
┌─────────────────────────────────┐
│ FAQItem 1 (collapsed)           │ spacing={2} = 16px gap
├─────────────────────────────────┤
│ FAQItem 2 (expanded)            │
│                                 │
│ [expanded content here]         │
│                                 │
├─────────────────────────────────┤ ← gap here might feel tight
│ FAQItem 3 (expanded)            │
│                                 │
│ [expanded content here]         │
└─────────────────────────────────┘

Problem: When multiple items expand, the 16px gap feels compressed
```

---

## APPROACH 1: Wrapper Restructure (Footer) + Stack Spacing Increase (FAQ)

### Footer Implementation
**Concept:** Move width constraint to content wrapper, not the footer itself.

```tsx
// Footer.tsx structure change
<Box component="footer" sx={{ mt, borderTop, bgcolor }}>
  {/* Full viewport width, no Container max-width limit */}
  <Box sx={{
    maxWidth: "lg",
    mx: "auto",
    px: { xs: 2, md: 4 },
    py: { xs: 6, md: 10 }
  }}>
    {/* 3-col grid content */}
  </Box>
</Box>
```

**Pros:**
- Clean separation of concerns (width constraint vs spacing)
- Reusable pattern for other full-width sections
- No Container dependency
- Easy to understand structure

**Cons:**
- Requires changing Box hierarchy
- Need to move Typography (copyright) inside the inner wrapper

### FAQ Implementation
**Concept:** Increase Stack spacing from `spacing={2}` to `spacing={3}` or `spacing={4}`

```tsx
// FAQList.tsx
<Stack spacing={3}> {/* was spacing={2}, now 24px instead of 16px */}
  {items.map(/* ... */)}
</Stack>
```

**Pros:**
- One-line change
- Consistent with MUI spacing scale
- Works across all breakpoints

**Cons:**
- Might add too much whitespace on mobile
- Less flexible than per-breakpoint spacing

---

## APPROACH 2: Full Restructure with Padding Box (Footer) + Responsive FAQ Spacing

### Footer Implementation
**Concept:** Use padding on outer Box to create "full-width" effect while keeping children constrained.

```tsx
<Box component="footer" sx={{
  mt: { xs: 6, md: 8 },
  borderTop: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
  // No Container inside - use Box with maxWidth
  px: 0, // Remove padding, let it stretch full width
  py: { xs: 6, md: 10 },
}}>
  <Box sx={{
    maxWidth: { xs: "100%", md: "1440px" }, // explicit max-width
    mx: "auto",
    px: { xs: 2, md: 4 }, // padding for content
  }}>
    {/* 3-col grid */}
  </Box>
</Box>
```

**Pros:**
- Explicit max-width declaration (transparent intent)
- Better for large screens (explicit 1440px reference)
- Footer background always full viewport width
- Clear two-layer structure

**Cons:**
- Requires changing to absolute max-width instead of MUI's "lg"
- More nesting
- Harder to adjust theme-wide max-widths later

### FAQ Implementation
**Concept:** Use responsive spacing object with smaller gaps on mobile

```tsx
// FAQList.tsx
<Stack spacing={{ xs: 2.5, md: 3 }}>
  {items.map(/* ... */)}
</Stack>
```

**Pros:**
- Responsive and intentional
- Preserves mobile compactness
- Larger spacing on desktop where there's more room

**Cons:**
- Slightly more complex spacing definition

---

## APPROACH 3: Minimal CSS Override (Footer) + FAQItem Margin Approach (FAQ)

### Footer Implementation
**Concept:** Override Container's max-width using sx prop instead of restructuring.

```tsx
<Box component="footer" sx={{
  mt: { xs: 6, md: 8 },
  borderTop: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
  py: { xs: 6, md: 10 },
  px: { xs: 2, md: 4 },

  // Override Container max-width to stretch footer
  "& .MuiContainer-root": {
    maxWidth: "100% !important",
  }
}}>
  <Container maxWidth="lg">
    {/* Existing structure unchanged */}
  </Container>
</Box>
```

**Pros:**
- Minimal structural changes
- Keeps existing Container component
- Non-breaking change to component structure
- Quick to implement

**Cons:**
- Uses `!important` (not ideal)
- Relies on MUI class selectors
- Less semantic than restructuring
- Footer background still won't extend full width (only content)

### FAQ Implementation
**Concept:** Add direct margin to FAQItem component instead of relying on Stack spacing

```tsx
// FAQItem.tsx
<Accordion
  sx={{
    // ... existing styles
    mb: { xs: 1.5, md: 2 }, // Add bottom margin to each item
  }}
>
  {/* ... */}
</Accordion>
```

**Pros:**
- Self-contained (spacing logic in FAQItem)
- Works regardless of parent Stack spacing
- Easier to adjust individual item spacing if needed

**Cons:**
- Duplicates spacing concern (Stack + item both spacing)
- Less flexible if spacing needs to change globally
- Could add extra gap at the end of the list

---

## Recommendation Matrix

| Aspect | Approach 1 | Approach 2 | Approach 3 |
|--------|-----------|-----------|-----------|
| Clarity | ⭐⭐⭐ Excellent | ⭐⭐ Good | ⭐ Confusing |
| Maintainability | ⭐⭐⭐ Easy | ⭐⭐ Medium | ⭐ Hard |
| Breaking Changes | ⭐⭐ Minor | ⭐⭐⭐ None | ⭐⭐⭐ None |
| Semantic HTML | ⭐⭐⭐ Best | ⭐⭐⭐ Best | ⭐ Worst |
| Implementation Time | ⭐⭐ Medium | ⭐⭐ Medium | ⭐⭐⭐ Fast |

---

## Checklist

- [x] User confirms preferred approach
  - Footer: **Approach 1** (Wrapper Restructure)
  - FAQ: **Approach 2** (Responsive Spacing)
- [x] Footer restructuring implemented (if chosen)
  - Changed: `<Container maxWidth="lg">` → `<Box sx={{ maxWidth: "lg", mx: "auto" }}>`
  - Removed: `Container` import
  - Result: Footer background now extends full viewport width
- [x] FAQ spacing adjusted (if chosen)
  - Changed: `spacing={2}` → `spacing={{ xs: 2.5, md: 3 }}`
  - Mobile: 20px gap (was 16px)
  - Desktop: 24px gap (was 16px)
- [x] Visual testing on mobile (375px)
- [x] Visual testing on tablet (768px)
- [x] Visual testing on desktop (1440px)
- [x] No horizontal scrollbar appears
- [x] Theme switching (light/dark) works correctly
- [x] No console errors
- [x] Build completed successfully (no TS errors)
- [ ] Commit changes with explanation

---

## Notes
- Footer extends to edges = `background-color` should reach viewport edges
- FAQ spacing = visual gap between .MuiAccordion-root elements
- All changes are CSS/sx props only - no HTML structure changes (unless Approach 1)
