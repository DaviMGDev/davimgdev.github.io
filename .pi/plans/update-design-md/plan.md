# update-design-md

## Context

DESIGN.md (Jul 21) predates index.html (Aug 3). Audit already done: dark is now the default (:root #E0E0E0 primary, #1A1A1A bg); new tokens --color-border (#888888 dark / #404040 light), --color-border-light (#555555 dark / #999999 light), --font-code (VT323), spacing 2xl 48px / 3xl 64px / section 80px, container 1200px / 24px padding; typography adds code-pixel + uppercase transforms on display/headline/label; new components: navbar, skip link, mobile menu overlay, hero with terminal icon + blinking cursor, badge, link, btn/btn-primary/btn-ghost/btn-full (active color inversion), card variants (featured with ★ FEATURED ribbon, thumbnails 150px, 2-line text clamp), carousel (45s infinite marquee), projects grid (2-col), compact list (▸), quote, modal (6px offset shadow, rgba(13,13,13,0.88) overlay), divider (2px), pixelated scrollbar, checkerboard + scanline background texture; elevation = 2px borders + hard offset shadows (no blur); breakpoints 768px/480px (display 32→20→16px); focus-visible 2px rings, reduced-motion, print styles. Theme cycle light→dark→auto (JS-confirmed), persisted in localStorage 'theme', auto listens to prefers-color-scheme changes. Fonts: Press Start 2P, VT323, Silkscreen.

## Goal

Update DESIGN.md so it accurately reflects the design system currently implemented in index.html (tokens, theming, components, typography, layout, elevation, shapes), validated with the design.md CLI.

## Non-goal

No changes to index.html, its CSS, or index.is. No new features. No design changes — documentation must mirror the implementation, not redesign it.

## Rules

- YAML frontmatter tokens are normative: every value must come from the CSS custom properties in index.html (dark palette as the canonical :root values; light theme overrides documented in prose).
- Keep canonical section order (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts); Theming may follow Colors.
- Run `design.md lint` after edits; fix until clean.
- Report drift with `design.md diff` old vs new at the end.

## Stages

[x] Audit & Diff
[x] Rewrite DESIGN.md
[x] Validate & Deliver
