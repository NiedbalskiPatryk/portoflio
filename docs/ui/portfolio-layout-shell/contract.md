# Task Contract: Portfolio Layout Shell

- **Title:** Portfolio Layout Shell (Header, Navigation, Page Container)
- **Date:** 2026-01-15
- **Author:** Claude
- **Reference:** portfolio-v1 (reference images)
- **Location:** `docs/ui/portfolio-layout-shell`

---

## Context and Goal

### UI / UX Goal

Create the global layout shell for the portfolio website including:

- Fixed/sticky header with logo and navigation
- Responsive navigation (desktop links, mobile hamburger)
- Page container with max-width constraint
- Consistent vertical section spacing
- Scroll-based anchor navigation

### Reference Analysis

From the reference design:

| Element         | Description                                      |
| --------------- | ------------------------------------------------ |
| Logo            | "Rakesh" text on left side                       |
| Nav Links       | Home, Services, Projects, About, FAQs (centered) |
| CTA Button      | "Contact" outlined button on right               |
| Header Style    | Dark background, fixed position                  |
| Container Width | ~1200px max-width, centered                      |

### Scope

- Top navigation / header organism
- Logo text atom
- Navigation links molecule
- Mobile menu (hamburger + drawer)
- Page max-width container template
- Vertical section spacing system

### Out of Scope

- Hero content
- Section UI components
- Animations/transitions
- Theme definition (already done)
- Footer

---

## Atomic Design Structure

```
atoms/
  LogoText/
  NavLink/
  IconButton/ (hamburger)

molecules/
  NavigationMenu/
  MobileDrawer/

organisms/
  Header/

templates/
  PortfolioLayout/
  SectionWrapper/
```

---

## Design Proposals

### Approach A: MUI AppBar + Drawer (Standard)

**Description:**
Use MUI's built-in AppBar component for the header and Drawer for mobile navigation. Standard MUI patterns throughout.

**Component Structure:**

```
PortfolioLayout (template)
  Header (organism)
    AppBar
      Toolbar
        LogoText (atom)
        NavigationMenu (molecule) - desktop
        IconButton (atom) - mobile hamburger
    MobileDrawer (molecule)
  Container (MUI)
    {children}
```

**Layout Strategy:**

- `AppBar` with `position="fixed"`
- `Toolbar` with flex layout
- `Container maxWidth="lg"` for content
- `Drawer` with `anchor="right"` for mobile

**Pros:**

- Uses native MUI components
- Built-in accessibility (ARIA, keyboard nav)
- Familiar pattern for MUI developers
- Responsive breakpoints handled by MUI

**Cons:**

- AppBar has default styles that need overriding
- Drawer animation may feel heavy
- Less control over exact positioning

**UI/UX Edge Cases:**

- Mobile: Hamburger icon visibility, drawer overlay
- Scroll: Header shadow on scroll
- Long nav: Text overflow on small tablets
- Active link: Visual indicator for current section

---

### Approach B: Custom Box-based Header (Flexible)

**Description:**
Build header using MUI Box/Stack components without AppBar. Full control over layout and styling.

**Component Structure:**

```
PortfolioLayout (template)
  Header (organism)
    Box (position: fixed)
      Container
        Stack (direction: row)
          LogoText (atom)
          NavigationMenu (molecule) - desktop
          ContactButton (atom)
          IconButton (atom) - mobile
    MobileDrawer (molecule)
  Box (main content)
    {children}
```

**Layout Strategy:**

- Custom `Box` with `position: fixed`, `top: 0`
- `Stack` for horizontal alignment
- `useMediaQuery` for responsive breakpoints
- Manual padding-top on main content

**Pros:**

- Complete styling control
- No AppBar default styles to override
- Lighter component tree
- Easier to match exact reference design

**Cons:**

- Must handle accessibility manually
- More custom CSS needed
- No built-in elevation/shadow behavior

**UI/UX Edge Cases:**

- Mobile: Need manual breakpoint handling
- Scroll: Must implement scroll detection for shadow
- Focus management: Manual implementation
- Content offset: Must account for fixed header height

---

### Approach C: CSS Grid Layout (Modern)

**Description:**
Use CSS Grid for the overall page layout with a fixed header area. More semantic structure.

**Component Structure:**

```
PortfolioLayout (template)
  Box (display: grid)
    Header (organism) - grid-area: header
      LogoText (atom)
      NavigationMenu (molecule)
      ContactButton (atom)
    Box (main) - grid-area: content
      {children}
    MobileDrawer (molecule) - portal
```

**Layout Strategy:**

```css
grid-template-areas:
  "header"
  "content";
grid-template-rows: auto 1fr;
```

- Header in grid row with `position: sticky`
- Content area scrolls independently
- Mobile drawer as portal overlay

**Pros:**

- Clean semantic structure
- Sticky header without padding workaround
- Modern CSS approach
- Good for future layout changes

**Cons:**

- Less common pattern with MUI
- Sticky vs fixed behavior differences
- Grid complexity for simple layout
- May conflict with section scroll behavior

**UI/UX Edge Cases:**

- Mobile: Grid areas need adjustment
- Scroll: Sticky behavior differs from fixed
- Anchors: Scroll-margin needed for sticky header
- Performance: Grid recalculation on resize

---

## Recommendation

**Approach B (Custom Box-based Header)** is recommended because:

1. Reference design requires precise positioning that AppBar defaults may conflict with
2. Dark minimal aesthetic needs clean component tree
3. Full control over responsive behavior
4. Easier to integrate with existing theme tokens
5. Can add scroll behavior incrementally

---

## Agreed Specification

- **Chosen Approach:** B (Custom Box-based Header)
- **Scroll Shadow:** Yes, show shadow on scroll
- **Mobile Breakpoint:** md (900px)
- **Contact Button:** Keep in header
- **Atomic Components:**
  - atoms/LogoText
  - atoms/NavLink
  - molecules/NavigationMenu
  - molecules/MobileDrawer
  - organisms/Header
  - templates/PortfolioLayout

---

## Checklist

- [x] Approach approved (B)
- [x] Atoms created (LogoText, NavLink)
- [x] NavigationMenu molecule created
- [x] MobileDrawer molecule created
- [x] Header organism created
- [x] PortfolioLayout template created
- [x] Responsive behavior verified (build passes)
- [x] Anchor navigation working

---

## Questions for Approval

1. Which approach do you prefer? (A, B, or C - I recommend B)
2. Should the header have a shadow/border on scroll?
3. Mobile breakpoint preference? (default: `md` = 900px)
4. Contact button in header or just nav links?
