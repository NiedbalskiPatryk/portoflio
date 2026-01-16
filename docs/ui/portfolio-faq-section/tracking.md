# Portfolio FAQ Section - Tracking

## Status: IN PROGRESS

**Current Phase:** Integration & Testing
**Last Updated:** 2026-01-15
**Blocked:** No
**Selected Approach:** Approach 2 (Multi-open, Content-first)

---

## Checklist

### Phase 1: Documentation & Design
- [x] Create docs/ui/portfolio-faq-section/ folder
- [x] Create contract.md
- [x] Create tracking.md
- [x] Analyze requirements (title, FAQ items, accordion behavior, accessibility)
- [x] Propose 3 UI/architecture approaches
- [x] User selects approach (Approach 2)
- [x] Finalize specification
- [x] Define component file structure

### Phase 2: Atoms Validation
- [x] Confirm MUI Accordion behavior and props
- [x] Confirm Typography variants for question/answer
- [x] Confirm toggle icon approach (SvgIcon or Typography)

### Phase 3: Molecules Implementation
- [x] Build FAQItem molecule
- [x] Build QuestionRow molecule (text + icon)

### Phase 4: Organism Implementation
- [x] Build FAQList organism
- [x] Build FAQSection organism
- [x] Implement responsive layout rules
- [x] Handle edge cases (long text, empty list)

### Phase 5: Integration & Testing
- [x] Wire FAQSection into page layout
- [ ] Test xs breakpoint
- [ ] Test sm breakpoint
- [ ] Test md+ breakpoint
- [ ] Verify keyboard interactions

---

## Phased Implementation Plan

1. Documentation and approach selection
2. Atoms validation (Accordion, Typography, icon)
3. Molecules assembly (FAQItem, QuestionRow)
4. Organism layout (FAQList, FAQSection)
5. Page integration and responsive QA

---

## Final Specification (Approach 2)

- Accordion behavior: multiple items can be open at once; allow all collapsed
- State model: uncontrolled by default, optional `defaultExpandedIds` for initial open items
- Content: single-column list with heading + optional subheading
- Layout: constrained width on md+ via container max-width; full width on xs/sm
- Edge cases: long text wraps; empty list shows short placeholder
- Accessibility: summary uses button semantics with `aria-expanded`, `aria-controls`; details use `role="region"` and `aria-labelledby`; keyboard Enter/Space toggles

---

## Planned Component Structure

```
src/components/
├── molecules/
│   ├── FAQItem/
│   │   ├── FAQItem.tsx
│   │   └── index.ts
│   └── QuestionRow/
│       ├── QuestionRow.tsx
│       └── index.ts
└── organisms/
    ├── FAQList/
    │   ├── FAQList.tsx
    │   └── index.ts
    └── FAQSection/
        ├── FAQSection.tsx
        └── index.ts
```

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-01-15 | Started FAQ section design | Required portfolio section |
| 2026-01-15 | Selected Approach 2 | Multi-open accordions prioritize content scanning |
