# Implementation Plan — Portfolio Fixes (13 Issues)

## Execution Order & Rationale

Phases are ordered by dependency. Within each phase, fixes are independent and can be done in any order.

---

### Phase 1 — Removal (no dependencies)

Quick cuts. Nothing else depends on these sections surviving.

#### 1. Fix 7 — Remove "Side Projects" subsection

- **Approach:** Delete the `<section aria-label="Early Experiments">` block entirely (the `<h3>` + `<ul class="compact-list">` inside `#projects`).
- **Files:** `index.html` only — remove lines from the "Early Experiments" heading through the closing `</section>` of that subsection.

#### 2. Fix 8 — Remove "Experience" section

- **Approach:** Delete the entire `#experience` `<section>` and its preceding `<hr class="divider">`.
- **Files:** `index.html` only.

#### 3. Fix 9 — Remove "Beyond Code" section

- **Approach:** Delete the entire `#beyond-code` `<section>` and its preceding `<hr class="divider">`.
- **Files:** `index.html` only.

---

### Phase 2 — Navbar (foundational)

Everything else (theme toggle, smooth scroll, nav links) depends on the navbar existing.

#### 4. Fix 1 — Add sticky navbar

- **Approach:** Add a `<nav>` element at the top of `<body>` (before `#root`), sticky-positioned. Contents: site name/logo on the left, nav links (Home, About, Projects, Tech Stack, Contact) on the right. Smooth-scroll via anchor `href="#id"`. On narrow viewports, collapse to a hamburger or keep as horizontal scroll — decision needed, but a simple row with `flex-wrap` works as MVP.
- **Files:**
  - `index.html` — new `<nav>` markup after `<body>` opening, before skip link
  - `index.html` — new `<style>` block for navbar CSS (~30 lines)

**Design constraints from DESIGN.md:**
- `font-family: var(--font-headline)` (Press Start 2P, 16px) for nav labels
- `color: var(--color-primary)`, background matches body
- 2px bottom border or underline for active/hover
- Snaps to 4px grid (`--grid-unit`)

---

### Phase 3 — Hero Overhaul

Fix 3 and 4 are tightly coupled (illustration lives inside hero). Fix 2 (avatar relocation) is independent but logically grouped here since it reshuffles adjacent sections.

#### 5. Fix 3 — Full-viewport hero section

- **Approach:** Change `#identity` to `min-height: 100dvh`, center content vertically with `display: flex; flex-direction: column; justify-content: center`. Remove or reduce `padding-block` so the viewport is fully occupied by the hero alone. Keep the blink cursor and name.
- **Files:** `index.html` — replace `#identity` CSS block, adjust identity padding.

#### 6. Fix 4 — Hero illustration

- **Approach:** Add a CSS-only pixel art illustration inside `#identity` — placed above or beside the name. Simplest option: a small pixel-art character/icon drawn with `box-shadow` (single `<div>` technique). Alternative: an inline SVG with `shape-rendering: crispEdges`. Keep it small (~64×64 to 128×128 CSS pixels), centered, monochromatic. This is decorative; no new dependencies.
- **Files:** `index.html` — one new `<div>` inside `#identity`, CSS in `<style>` (~20 lines using `box-shadow` pixel grid).

#### 7. Fix 2 — Move avatar into "About Me"

- **Approach:** The standalone `#portfolio` section currently only contains the avatar. Move the avatar-frame + caption into the `#about` section, floating left (or top on mobile) next to the bio paragraph. Delete the now-empty `#portfolio` section and its divider.
- **Files:** `index.html` — cut avatar block from `#portfolio` and paste into `#about`; remove empty `#portfolio` section. Adjust `.about-text` CSS so the paragraph wraps beside the avatar on wider screens (e.g., `float: left` or side-by-side flex).

---

### Phase 4 — Content Enhancements

These are independent of each other but depend on Phases 1–3 (sections exist, navbar has correct anchors).

#### 8. Fix 5 — Tech stack carousel (replace table)

- **Approach:** Replace the `<table>` inside `#tech-stack` with a horizontally scrolling carousel. Each carousel item = `[icon] Category: Technologies`. Implement as a CSS `@keyframes` infinite scroll or JS-driven auto-scroll. Each "chip" is a card-like element (category + tech list). No external library. Keep it keyboard-accessible (pause on focus/hover). On mobile, stack vertically or use touch scroll.
- **Files:** `index.html` — replace `<table>` markup with carousel markup. Add ~30 lines of CSS for carousel animation. Optionally add ~10 lines of JS for pause-on-hover and manual scroll.

#### 9. Fix 6 — Project placeholder images

- **Approach:** Add a `<div class="card-thumb">` inside each project `<article class="card">`, placed before the title. The placeholder is a CSS-drawn rectangle with a dashed border, a centered SVG camera/photo icon, and a subtle "screenshot coming soon" label. Image-rendering: pixelated. When real screenshots arrive, swap the `<div>` for an `<img>`.
- **Files:** `index.html` — add thumb div to each project card. CSS — ~20 lines for `.card-thumb`.

#### 10. Fix 10 — Add contact section

- **Approach:** Add a new `#contact` section at the bottom (before the "Currently" section, or replace "Currently" with it). Contents: heading ("Say Hi"), short text, email link, and a row of icon links (GitHub, LinkedIn). The existing "Get in touch" modal still exists — this is an inline alternative. Alternatively, merge the modal contact links directly into this section and remove the modal entirely (simpler). Decision: keep the modal for "Get in touch" CTAs elsewhere, but the contact section is always visible inline.
- **Files:** `index.html` — new `<section id="contact">` markup before `#currently`.

---

### Phase 5 — Theme, Icons & Polish

These touch every section but are mechanically independent of each other (though the theme toggle _button_ lives in the navbar).

#### 11. Fix 11 — Dark/Light dual theme

- **Approach:** In CSS, define a `[data-theme="dark"]` block (or `:root.dark`) overriding all color custom properties with a dark palette. Derive the dark palette from DESIGN.md’s existing tokens — invert the light/dark relationship (background becomes dark, text becomes light, surface darkens, etc.). In JS, detect `prefers-color-scheme` on load, persist choice in `localStorage`, and add a toggle button in the navbar. The toggle is a simple sun/moon icon swap. No CSS transition on color change (pixel-perfect, instant). Keep `<meta name="color-scheme">` updated dynamically.
- **Files:**
  - `index.html` — add `[data-theme="dark"]` CSS block (~40 lines remapping tokens), add toggle button markup in navbar.
  - `index.html` — JS block for theme init + toggle (~30 lines).

#### 12. Fix 12 — Replace emojis with icons

- **Approach:** Every emoji (📧 🐙 🔗 ★ ✦) becomes an inline SVG or Unicode symbol. Options:
  - Inline SVGs (best for pixel alignment, no external deps)
  - Unicode dingbats: ✉ for email, ⬡ or ◆ for GitHub, ⛓ for LinkedIn, ✦ for sparkle (already using ✦), ★ already OK.
  - For the GitHub octocat, a tiny pixel-art SVG or just use the word "GitHub" with a simple monogram.
  - For the "FEATURED" star in `.card.featured::before`, replace ★ with a simple `◆` or keep as-is since ★ is not an emoji.
- **Files:** `index.html` — replace emoji characters throughout markup and CSS pseudo-elements.

#### 13. Fix 13 — Background texture enhancement

- **Approach:** The site already has a checkerboard dithering overlay (`body::before` with `repeating-conic-gradient` at 4px, 8% opacity). The user wants more texture. Options:
  - Increase opacity slightly (0.08 → 0.12)
  - Add a second layer: subtle horizontal scanlines (`repeating-linear-gradient`) at 2px interval
  - Add a CSS `filter: noise` via SVG `<feTurbulence>` for grain (more complex but authentic retro feel)
  - Keep it pixel-aligned: a 2×2 or 4×4 repeating dot/grid pattern tile.
  - **Recommendation:** Layer two patterns — keep the checkerboard and add subtle scanlines. Both use CSS `background-image` with `repeating-linear-gradient`, no external assets.
- **Files:** `index.html` — modify `body::before` CSS and optionally add `body::after` for a second texture layer.

---

## Dependency Graph

```
Phase 1 (Fixes 7, 8, 9)     ← no dependencies
        ↓
Phase 2 (Fix 1 — Navbar)    ← depends on nothing (but Phase 1 done = cleaner)
        ↓
Phase 3 (Fixes 2, 3, 4)    ← Fix 3,4 independent; Fix 2 after section cleanup
        ↓
Phase 4 (Fixes 5, 6, 10)   ← independent of each other
        ↓
Phase 5 (Fixes 11, 12, 13) ← Fix 11 navbar button depends on Phase 2
```

## Files Summary

| File | Action |
|------|--------|
| `index.html` | **Modify** — all 13 fixes happen in this single-file site. Everything lives in `<style>` and `<script>` blocks inline. |

No new files. No npm packages. No build tooling changes.
