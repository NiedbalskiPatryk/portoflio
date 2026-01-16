# Portfolio Contact Section - Tracking

## Status: IN PROGRESS

**Current Phase:** Documentation & Design
**Last Updated:** 2026-01-15
**Blocked:** No
**Selected Approach:** Approach 1 (Split Column, Stacked Rows)

---

## Checklist

### Phase 1: Documentation & Design
- [x] Create docs/ui/portfolio-contact-section/ folder
- [x] Create contract.md
- [x] Create tracking.md
- [x] Analyze requirements (heading, form fields, contact info, states)
- [x] Propose 3 UI/architecture approaches
- [x] User selects approach (Approach 1)
- [x] Finalize specification
- [x] Define component file structure

### Phase 2: Atoms Validation
- [ ] Confirm MUI TextField variants and helper text usage
- [ ] Confirm Button loading/disabled visuals
- [ ] Confirm Typography variants for heading and labels

### Phase 3: Molecules Implementation
- [ ] Build FormRow molecule
- [ ] Build ContactInfoItem molecule

### Phase 4: Organism Implementation
- [ ] Build ContactForm organism
- [ ] Build ContactInfo organism
- [ ] Build ContactSection organism
- [ ] Implement responsive layout rules
- [ ] Handle edge cases (long text, disabled state)

### Phase 5: Integration & Testing
- [ ] Wire ContactSection into page layout
- [ ] Test xs breakpoint
- [ ] Test sm breakpoint
- [ ] Test md+ breakpoint
- [ ] Verify keyboard navigation

---

## Phased Implementation Plan

1. Documentation and approach selection
2. Atoms validation (TextField, Button, Typography)
3. Molecules assembly (FormRow, ContactInfoItem)
4. Organism layout (ContactForm, ContactInfo, ContactSection)
5. Page integration and responsive QA

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-15 | Started Contact section design | Required portfolio section |
| 2026-01-15 | Selected Approach 1 | Clear two-column hierarchy with simple stacked fields |

---

## Final Specification (Approach 1)

- Layout: md+ two-column section with left info block and right form; xs/sm stacks header -> form -> info
- Form: single-column stacked inputs; message is multiline with internal scroll for long text
- Validation UI: error state + helper text for invalid email/required fields; visual only
- States: submit supports disabled + loading visuals, inputs disabled when `isDisabled` true
- Contact info: static list of email + phone; labels use overline style, values use body/h6 on md+
- Accessibility: labeled inputs, `aria-invalid` on errors, `aria-busy` on submit during loading

---

## Planned Component Structure

```
src/components/
├── molecules/
│   ├── ContactInfoItem/
│   │   ├── ContactInfoItem.tsx
│   │   └── index.ts
│   └── FormRow/
│       ├── FormRow.tsx
│       └── index.ts
└── organisms/
    ├── ContactForm/
    │   ├── ContactForm.tsx
    │   └── index.ts
    ├── ContactInfo/
    │   ├── ContactInfo.tsx
    │   └── index.ts
    └── ContactSection/
        ├── ContactSection.tsx
        └── index.ts
```
