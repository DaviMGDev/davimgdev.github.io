# Tasks

## Implementation

- [x] **Step 1: Fix scroll — remove overflow hack**
  - [x] Remove `overflow: hidden` from `html` in CSS
  - [x] Remove `overflow: hidden` from `body` in CSS
  - [x] Remove `#root` flex/overflow rules
  - [x] Remove `.scrollable` class from CSS
  - [x] Remove `class="scrollable"` from `<main>` tag
  - [x] Update print styles (removed `.scrollable` reference)

- [x] **Step 2: Fix Geist fonts**
  - [x] Verified correct CDN path: `geist-sans/Geist-Regular.woff2` (capital G, subdirectory)
  - [x] Fixed all three `@font-face` src URLs

- [x] **Step 3: Remove toast system**
  - [x] Removed all `data-toast="..."` attributes (6 locations)
  - [x] Removed `<div id="toast-container">` from HTML
  - [x] Removed toast JS code (showToast, click handler, toastContainer)
  - [x] Removed toast CSS (toast-container, toast, toast-in/out animations)

- [x] **Step 4: Simplify badge system**
  - [x] Removed `.badge.info`, `.badge.success`, `.badge.warning`, `.badge.error` CSS
  - [x] Added `.badge.primary` CSS rule (green background)
  - [x] Removed `info`/`success` classes from all badge `<span>` elements
  - [x] Added `primary` class to "Spec-Driven" and "Responsive" badges

- [x] **Step 5: Relabel "Early Experiments" → "Side Projects"**
  - [x] Changed heading text

- [x] **Step 6: Add contact CTA to hero**
  - [x] Added "Get in touch →" button in hero section
  - [x] Wired click to modal open function
  - [x] Styled as `.btn.btn-primary`

- [x] **Step 7: Add favicon**
  - [x] Created inline SVG favicon (triangle/play icon in primary green)
  - [x] Added `<link rel="icon">` to `<head>`

- [x] **Step 8: Move inline styles to CSS classes**
  - [x] `style="max-width: 680px;"` → `.about-text` class
  - [x] `style="margin-bottom: var(--space-md);"` on badge rows → `.badge-row` class
  - [x] `style="margin-bottom: 0;"` → `.card-text-last` class
  - [x] `style="color: var(--color-text-secondary);"` → `.text-secondary` class
  - [x] `style="width: 100%;"` → `.btn-full` class
  - [x] `style="height: var(--space-2xl);"` → `.spacer-bottom` class
  - [x] Combined style attrs on Side Projects heading → existing classes

- [x] **Step 9: Standardize JS to const/let**
  - [x] Replaced all `var` declarations with `const` or `let`

- [x] **Step 10: Reduce section padding**
  - [x] Changed `--space-section: 128px` to `--space-section: 80px`

- [x] **Step 11: Update container max-width**
  - [x] Changed `--container-max: 1024px` to `--container-max: 1200px`

- [x] **Step 12: Update DESIGN.md**
  - [x] Removed "Technical foundation" Astro/React/Tailwind paragraph
  - [x] Removed "Framework & Rendering Strategy" section
  - [x] Removed "Route Map" table
  - [x] Removed "Directory Structure" tree
  - [x] Removed "Component Hierarchy" section
  - [x] Removed "Data Flow" section
  - [x] Removed "Content Collection Schema"
  - [x] Simplified "State Management" (removed React references)
  - [x] Removed "Bundle Splitting" section
  - [x] Simplified "Performance" and "Font Loading" sections
  - [x] Updated spacing token to 80px
  - [x] Updated Typography implementation note

- [x] **Step 13: Final inline styles cleanup**
  - [x] Replaced remaining `style="color: var(--color-text-secondary);"` on `.code-md` spans
  - [x] Replaced `style="width: 100%;"` on modal close button
  - [x] Verified zero `style=` attributes remain

## Verification

- [x] **Zero `var` in JS** — `grep -n 'var ' index.html` (excluding `var(--`) returns nothing
- [x] **Zero `data-toast`** — `grep -c 'data-toast' index.html` returns 0
- [x] **Zero `overflow: hidden`** — `grep -c 'overflow: hidden' index.html` returns 0
- [x] **Zero `.scrollable` class** — Only comments remain, no CSS or HTML usage
- [x] **Zero framework mentions in DESIGN.md** — `grep -ci 'astro\|react\|tailwind' DESIGN.md` returns 0
- [x] **Zero inline styles** — `grep -c 'style=' index.html` returns 0

## Cleanup

- [ ] Delete `plan-portfolio-fix.md` after completion
- [ ] Delete `tasks.md` after completion
- [ ] Confirm completion with the user
