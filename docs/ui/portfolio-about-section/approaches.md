# Portfolio About Section - UI/Layout Approaches

## Requirements Analysis

- **Profile image:** Prominent visual anchor, with graceful fallback if missing
- **Name and role:** Strong typographic hierarchy, readable at all breakpoints
- **Multi-paragraph description:** Supports 2-3 short paragraphs with clear spacing
- **CTA buttons:** Two actions (e.g., Resume and Hire Me) with distinct emphasis

---

## Approach 1: Split Two-Column (Reference-Like) ⭐

### Overview
Two-column layout on desktop with the profile image on the left and text content on the right. Mobile stacks image above content. This closely matches common portfolio references and keeps the visual focus on the developer.

### Image Handling Strategy
- Use MUI `Avatar` or `Box` with `img` for a large circular portrait
- Fixed max size (e.g., 240-280px) with responsive scaling
- Fallback to initials if the image is missing

### Text Layout
- Name and role stacked at the top of the right column
- Bio paragraphs in a vertical stack with clear spacing
- Left-aligned text for readability

### CTA Placement
- Two buttons below the bio
- Primary filled button (Resume) and secondary outlined (Hire Me)
- Inline on tablet/desktop, stacked on mobile

### Responsiveness
- **xs/sm:** Single column, centered image, left-aligned text block
- **md+:** Two columns with a 5/7 or 4/8 grid split

### Pros
- Matches reference layout expectations
- Clear hierarchy and easy scanning
- Works well with multi-paragraph text

### Cons
- Less distinctive than more asymmetric layouts

---

## Approach 2: Centered Card Stack (Portrait-First)

### Overview
A centered, card-like layout with the image at the top, name and role centered, then bio text and CTAs below. Emphasizes personality and feels like a profile card.

### Image Handling Strategy
- Square portrait inside a rounded container or soft frame
- Slight border or glow to lift the image from the dark background
- Optional grayscale filter to match theme

### Text Layout
- Centered name and role
- Bio paragraphs centered with narrower max width
- More compact vertical rhythm

### CTA Placement
- Buttons stacked vertically under the bio
- Equal widths for symmetry

### Responsiveness
- **xs/sm:** Single column, everything centered
- **md+:** Still single column with wider max width

### Pros
- Strong profile focus and symmetry
- Simple layout, easy to implement

### Cons
- Centered paragraphs can reduce readability for long text
- Less dynamic on large screens

---

## Approach 3: Asymmetric Media Panel (Editorial)

### Overview
Create an editorial-style layout with a tall media panel for the image on one side and a multi-block text layout on the other. Adds visual tension and feels more bespoke.

### Image Handling Strategy
- Rectangular portrait inside a framed `Box` with subtle border
- Slight offset or negative margin to break the grid
- Fixed aspect ratio for consistency

### Text Layout
- Name and role in a compact header block
- Bio paragraphs grouped into two clusters with divider spacing
- Optional small label (e.g., "About") above the header

### CTA Placement
- CTAs anchored at the bottom of the text column
- Primary button first, secondary as text button or outlined

### Responsiveness
- **xs:** Stacked with image on top
- **sm:** Stacked with image and text aligned to the left
- **md+:** Asymmetric two-column with a wider media column

### Pros
- Distinctive, modern presentation
- Strong visual interest on desktop

### Cons
- More complex spacing and alignment rules
- Needs careful tuning for small screens

---

## Recommendation

**Approach 1: Split Two-Column** is recommended for clarity, readability, and alignment with the reference design. It also scales best for multi-paragraph content.
