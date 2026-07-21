# Portfolio Fix Plan

## Goal

Fix critical bugs (broken scroll, broken fonts), align DESIGN.md with reality, and polish the portfolio based on a senior frontend review. All changes are to `index.html` (single file) and `DESIGN.md`. No new files, no framework migration.

## Requirements

### Functional
- Remove `overflow: hidden` hack; use native browser scroll
- Fix Geist font loading (CDN path is wrong)
- Remove all `data-toast` attributes and toast-related code
- Relabel "Early Experiments" → "Side Projects"
- Simplify badge system to two variants (default + primary)
- Add contact CTA to hero section
- Add favicon
- Move inline styles to CSS classes
- Standardize JS to const/let (no var)
- Update DESIGN.md: strip tech stack mentions, keep design tokens

### Non-functional
- Maintain all existing accessibility (skip link, ARIA, focus rings, reduced motion)
- Keep print styles working
- Mobile responsiveness must improve (not regress)
- No new dependencies — vanilla HTML/CSS/JS only

### Acceptance Criteria
1. Page scrolls natively on desktop and mobile (no `.scrollable` wrapper)
2. Geist font renders (not falling back to system fonts) — verify in DevTools Network tab
3. Zero `data-toast` attributes in the HTML
4. Zero `var` declarations in JavaScript
5. Zero inline `style=` attributes that should be CSS classes
6. "Side Projects" section replaces "Early Experiments"
7. All tech badges use default style; only "Spec-Driven" uses primary (green)
8. Hero section contains a "Get in touch" CTA button
9. Favicon renders in browser tab
10. DESIGN.md contains no mention of Astro, React, Tailwind, or any framework

## Context

### Files to modify
- `index.html` — the entire site (CSS + HTML + JS)
- `DESIGN.md` — design system documentation

### Files to create
- None

### Dependencies
- None (vanilla HTML/CSS/JS, no build step)

### Constraints
- Single-file architecture must be preserved (no splitting into multiple files)
- GitHub Pages deployment — static only

## Out of Scope
- Framework migration (Astro, React, Tailwind) — not this task
- Project screenshots — deferred to a future pass
- Multi-page site — staying single-page
- New sections or content additions
- Newsreader font replacement (keeping as-is per user decision)
- Container stays 1024px → changing to 1200px per user decision

## Design / Architecture

### Scroll Fix
**Current:** `html { overflow: hidden }`, `body { overflow: hidden }`, `#root` flex container, `.scrollable` inner div with `overflow-y: auto`.
**Target:** Remove all overflow hacks. `html` and `body` scroll naturally. `#root` becomes a simple wrapper. `.scrollable` is deleted.

The IntersectionObserver for scroll reveal will observe `.section` elements directly on the page. No root margin tricks needed since native scroll works normally.

### Font Fix
**Current:** `@font-face` loads from `cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-regular.woff2` — path doesn't exist.
**Target:** Use the correct Geist font path. Geist 1.3.0 fonts are at `cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/Geist-Regular.woff2` (capital G). Will verify and fix the casing.

### Badge Simplification
**Current:** Four variants — default, info (blue), success (green), warning (yellow), error (red).
**Target:** Two variants — default (surface-elevated, subtle) and primary (green, for emphasis labels like "Spec-Driven"). Remove `.badge.info`, `.badge.success`, `.badge.warning`, `.badge.error`. All tech badges use default.

### DESIGN.md Cleanup
Remove: "Technical foundation" section, Astro/React/Tailwind references, the route map, directory structure, component hierarchy, data flow diagrams, bundle splitting, rendering strategy. Keep: colors, typography, spacing, components, accessibility, do's/don'ts.

## Implementation Steps

### Step 1: Fix scroll — remove overflow hack
**Files:** `index.html`
**Description:** Remove `overflow: hidden` from `html` and `body`. Remove `#root` flex/overflow rules. Delete `.scrollable` class entirely. Remove `<main class="scrollable">` wrapper (keep `<main>` without the class).

**Verification:** Page scrolls in browser. Scroll-to-anchor works. Mobile momentum scroll works.

---

### Step 2: Fix Geist fonts
**Files:** `index.html`
**Description:** Verify correct CDN path for Geist woff2 files. Fix the `@font-face` src URLs. Test that fonts load (check DevTools Network tab for 200 status, not 404).

**Verification:** DevTools → Network → filter by woff2 → all three Geist files return 200. Computed font-family shows "Geist" not system fallback.

---

### Step 3: Remove toast system
**Files:** `index.html`
**Description:** Remove all `data-toast="..."` attributes from `<a>` elements. Remove the toast container `<div id="toast-container">`. Remove the entire toast JavaScript section (showToast function, click handler, toastContainer variable). Keep the modal code.

**Verification:** Zero `data-toast` in page source. No toast container in DOM. Clicking links navigates normally without toast popups.

---

### Step 4: Simplify badge system
**Files:** `index.html`
**Description:** Remove `.badge.info`, `.badge.success`, `.badge.warning`, `.badge.error` CSS rules. In HTML, remove all `class="badge info"` and `class="badge success"` attributes — badges become just `class="badge"` by default. Keep one `class="badge primary"` for "Spec-Driven" label. Add `.badge.primary` CSS rule (green background like current success).

**Verification:** All tech badges render with subtle surface-elevated background. "Spec-Driven" badge renders green.

---

### Step 5: Relabel "Early Experiments" → "Side Projects"
**Files:** `index.html`
**Description:** Change the heading text from "Early Experiments" to "Side Projects". No other changes needed.

**Verification:** Section heading reads "Side Projects".

---

### Step 6: Add contact CTA to hero
**Files:** `index.html`
**Description:** Add a "Get in touch →" button next to the identity links in the hero section. Wire it to the same modal open function. Style as `.btn.btn-primary`.

**Verification:** Hero section shows a green "Get in touch" button. Clicking it opens the contact modal.

---

### Step 7: Add favicon
**Files:** `index.html`
**Description:** Add an inline SVG favicon in `<head>` using `<link rel="icon" href="data:image/svg+xml,...">`. Use a simple terminal/cursor icon in the primary green color to match the brand.

**Verification:** Browser tab shows the favicon. No 404 on favicon.ico in Network tab.

---

### Step 8: Move inline styles to CSS classes
**Files:** `index.html`
**Description:** Replace these inline styles with CSS classes:
- `style="max-width: 680px;"` on About Me → `.about-text { max-width: 680px; }`
- `style="margin-bottom: var(--space-md);"` on badge rows → `.badge-row { margin-bottom: var(--space-md); }`
- `style="margin-bottom: 0;"` on Experience text → `.card-text:last-child { margin-bottom: 0; }` (already exists in card component)
- `style="color: var(--color-text-secondary);"` on subtitles → use existing `.text-secondary` class
- `style="width: 100%;"` on modal close button → `.modal-close { width: 100%; }` (contextual)
- `style="height: var(--space-2xl);"` on bottom spacer → `.spacer-bottom { height: var(--space-2xl); }`
- `style="color: var(--color-text-secondary); margin-bottom: var(--space-md);"` on Side Projects heading → combine existing classes

**Verification:** `grep -c 'style=' index.html` returns 0 (or near 0 for cases that are truly dynamic).

---

### Step 9: Standardize JS to const/let
**Files:** `index.html`
**Description:** Replace all `var` declarations with `const` or `let` as appropriate. The toast-related `var` declarations will already be gone from Step 3. Check remaining `var` usage in modal and scroll observer code.

**Verification:** `grep -n 'var ' index.html` returns zero results in the `<script>` block.

---

### Step 10: Reduce section padding
**Files:** `index.html`
**Description:** Change `--space-section: 128px` to `--space-section: 80px` in `:root`. Mobile values (80px at 768px, 64px at 480px) are already appropriate.

**Verification:** Section spacing visually tighter on desktop. No overlap or cramping.

---

### Step 11: Update container max-width
**Files:** `index.html`
**Description:** Change `--container-max: 1024px` to `--container-max: 1200px` in `:root`.

**Verification:** Content column is wider on large screens. Text lines don't become uncomfortably long (check ~80 chars per line at 1200px).

---

### Step 12: Update DESIGN.md
**Files:** `DESIGN.md`
**Description:** Remove or rewrite these sections:
- "Technical foundation" paragraph (mentions Astro 5, React 19, Tailwind v4) → replace with "Vanilla HTML/CSS/JS with design tokens"
- "Framework & Rendering Strategy" section → remove entirely
- "Route Map" table → remove
- "Directory Structure" tree → remove
- "Component Hierarchy" section → remove
- "Data Flow" section → remove
- "Content Collection Schema" → remove
- "State Management" section → simplify to "No global state"
- "Bundle Splitting" section → remove
- "Performance > Rendering Strategy" → simplify
- "Font Loading Strategy" code block → simplify
- "CSS Strategy" paragraph → simplify

Keep: Overview, Colors, Typography, Layout, Elevation, Shapes, Components, Accessibility, Do's and Don'ts.

**Verification:** `grep -i 'astro\|react\|tailwind\|next\.js' DESIGN.md` returns zero results.

---

### Step 13: Clean up remaining inline styles
**Files:** `index.html`
**Description:** Final pass — any remaining `style=` attributes that are truly dynamic (e.g., JS-driven) are fine. Static ones must be in CSS.

**Verification:** Full page renders correctly. No layout shifts.

## Edge Cases & Risks

1. **Scroll reveal breaks after removing overflow hack** — The IntersectionObserver uses `rootMargin: '0px 0px -40px 0px'` which should still work with native scroll. Verify sections still animate in.

2. **Geist font CDN path may still be wrong** — The exact path structure of `geist@1.3.0` on jsDelivr needs verification. Fallback: self-host the woff2 files in `public/fonts/` if CDN path is unreliable.

3. **Mobile layout regresses** — Removing overflow hidden may expose mobile layout issues (e.g., body height calculation). Test on actual mobile viewport.

4. **Print styles break** — Print CSS currently overrides `overflow: hidden`. After removing it, print styles may need adjustment.

5. **1200px container + 80px section padding** — Content might feel too wide with shorter sections. Visual QA needed.

6. **Favicon data URI too long** — Keep the SVG simple (under 1KB) to avoid HTML bloat.

## Verification

- **Desktop scroll:** Page scrolls smoothly. Scroll-to-section via anchor links works.
- **Mobile scroll:** Momentum scroll on iOS/Android works. No rubber-banding issues.
- **Fonts:** DevTools → Elements → computed font-family shows "Geist". Network tab shows 200 for all woff2 files.
- **Badges:** All tech badges are subtle (surface-elevated). "Spec-Driven" is green.
- **Hero CTA:** "Get in touch" button visible in hero. Opens modal on click.
- **Favicon:** Visible in browser tab.
- **No toast:** Clicking email/GitHub/LinkedIn links navigates directly.
- **No var:** Script contains only const/let.
- **No inline styles:** Only dynamic styles remain inline.
- **DESIGN.md:** No framework mentions.
- **Accessibility:** Tab through all interactive elements. Focus rings visible. Skip link works.
- **Reduced motion:** Enable in OS settings. No animations play.
- **Print:** Ctrl+P → clean output, no modal/toast artifacts.
