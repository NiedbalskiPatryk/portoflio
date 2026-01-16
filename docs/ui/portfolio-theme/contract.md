# Task Contract: Portfolio Theme and Design Tokens

- **Title:** Portfolio Theme and Design Tokens
- **Date:** 2026-01-15
- **Author:** Claude
- **Reference:** portfolio-v1 (reference images)
- **Location:** `docs/ui/portfolio-theme`

---

## Context and Goal

### UI / UX Goal

Establish a consistent dark-theme design system matching the reference portfolio design. The reference shows:

- Deep black/dark gray background (`#0a0a0a` - `#121212`)
- High contrast white text for headings
- Muted gray for secondary text
- Minimal accent colors (primarily white borders)
- Clean typography with clear hierarchy
- Pill/chip-style technology badges

### Scope

- MUI ThemeProvider configuration
- Color palette (dark background, contrast text, borders)
- Typography scale (headings, body, captions)
- Spacing tokens (consistent rhythm)
- Shape tokens (border radius for buttons, chips, cards)
- Component defaults (Button, Chip, Card variants)

### Out of Scope

- Any page or section UI components
- Animations and transitions
- Responsive breakpoint logic
- Actual content/copy

---

## BLOCKER: MUI Not Installed

**Current package.json does not include MUI dependencies.**

Required packages to install before proceeding:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

**Action Required:** Please confirm if I should include MUI installation as part of this task or if you will install it separately.

---

## Reference Design Analysis

### Colors Extracted from Reference

| Token              | Value     | Usage                          |
| ------------------ | --------- | ------------------------------ |
| background.default | `#0a0a0a` | Page background                |
| background.paper   | `#121212` | Card/section backgrounds       |
| text.primary       | `#ffffff` | Headings, primary text         |
| text.secondary     | `#a0a0a0` | Subtitles, descriptions        |
| divider            | `#2a2a2a` | Borders, separators            |
| primary.main       | `#ffffff` | CTA buttons, emphasis          |
| primary.contrastText | `#0a0a0a` | Text on filled buttons       |

### Typography Observed

- **Hero Heading:** ~48-64px, bold, white
- **Section Heading:** ~32-40px, bold, white
- **Body:** ~16px, regular, gray
- **Caption/Chips:** ~12-14px, medium, gray

---

## Design Proposals

### Approach A: Single Dark Theme Only

**Description:**
Create a single, hardcoded dark theme with no light mode support. Theme tokens are optimized exclusively for the dark aesthetic shown in reference.

**Implementation:**

```typescript
// src/theme/theme.ts
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0a0a0a", paper: "#121212" },
    text: { primary: "#ffffff", secondary: "#a0a0a0" },
    primary: { main: "#ffffff" },
  },
});
```

**Pros:**

- Simplest implementation
- Minimal code footprint
- Exact match to reference design
- No runtime mode switching overhead

**Cons:**

- No future light mode support
- Harder to add theme variants later
- Less flexible for accessibility preferences

**UI/UX Edge Cases:**

- Users with light mode system preference see dark theme anyway
- High contrast mode not supported

---

### Approach B: Dark Theme + Light Theme Infrastructure

**Description:**
Create a theme configuration that defaults to dark mode but includes infrastructure for future light theme support via CSS variables or theme context.

**Implementation:**

```typescript
// src/theme/theme.ts
const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: { default: "#0a0a0a", paper: "#121212" },
          text: { primary: "#ffffff", secondary: "#a0a0a0" },
        }
      : {
          background: { default: "#ffffff", paper: "#f5f5f5" },
          text: { primary: "#0a0a0a", secondary: "#666666" },
        }),
  },
});
```

**Pros:**

- Future-proof for light mode
- Clean separation of color tokens
- Supports system preference detection
- Better accessibility options

**Cons:**

- More initial code
- Light theme values need design (not provided)
- Adds complexity for current scope

**UI/UX Edge Cases:**

- Light theme appearance unspecified (risk of poor design)
- Theme switching logic needed in future

---

### Approach C: Component-Level Theme Tokens

**Description:**
In addition to global palette, define specific component overrides in the theme for consistent Button, Chip, Card styling without per-component sx props.

**Implementation:**

```typescript
const theme = createTheme({
  palette: {
    /* dark colors */
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none" },
        outlined: { borderColor: "#ffffff", color: "#ffffff" },
        contained: { backgroundColor: "#ffffff", color: "#0a0a0a" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 16, backgroundColor: "#1a1a1a" },
      },
    },
  },
});
```

**Pros:**

- Centralized styling decisions
- Components match reference out-of-box
- Reduces repetitive sx props
- Easier to maintain consistency

**Cons:**

- More upfront configuration
- Harder to override on case-by-case basis
- Tighter coupling to specific designs

**UI/UX Edge Cases:**

- Overriding defaults requires understanding theme structure
- Some components may need variants for different contexts

---

## Recommendation

**Approach C (Component-Level Theme Tokens)** is recommended because:

1. The reference design has clear, consistent component styling
2. Centralized overrides reduce duplication across sections
3. Dark-only focus matches current requirements
4. Can be extended for light mode later if needed

---

## Agreed Specification

- **Atomic Design Level:** Atoms only (theme tokens)
- **Chosen Approach:** C (Component-Level Theme Tokens) + Dark/Light themes
- **Font:** JetBrains Mono (via next/font/google)
- **Default Mode:** Dark (forced, no system preference detection)
- **Styling Rules:**
  - No hardcoded colors in components
  - Use MUI palette + typography tokens
  - All spacing via theme.spacing()
  - Both dark and light themes defined for future flexibility

---

## Checklist

- [x] MUI installation approved/completed
- [x] Theme proposal approved (Approach C + Dark/Light)
- [x] Palette defined and implemented
- [x] Typography defined and implemented (JetBrains Mono)
- [x] Component overrides defined
- [x] Theme wired into app layout
- [x] Global CSS reset adjusted

---

## Questions for Approval

1. Should I proceed with MUI installation?
2. Which approach do you prefer? (A, B, or C - I recommend C)
3. Any specific fonts to use instead of system defaults?
4. Should the theme support prefers-color-scheme detection?
