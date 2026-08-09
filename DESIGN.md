---
version: alpha
name: Davi Pixel Avatar Design System
description: A page-agnostic, monochromatic pixel art design system — dark-first, 4px pixel grid, hard offset shadows, no blur. Applies to any web project, page, or framework.
colors:
  primary: "#E0E0E0"
  primary-hover: "#C0C0C0"
  secondary: "#888888"
  text-muted: "#999999"
  tertiary: "#707070"
  neutral: "#3A3A3A"
  surface: "#2A2A2A"
  on-primary: "#1A1A1A"
  on-surface: "#DCDCDC"
  highlight: "#505050"
  midtone: "#606060"
  shadow: "#0A0A0A"
  background: "#1A1A1A"
  border: "#888888"
  border-light: "#555555"
typography:
  display-pixel:
    fontFamily: "Press Start 2P, monospace"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0em
  headline-pixel:
    fontFamily: "Press Start 2P, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
  body-pixel:
    fontFamily: "VT323, monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
  label-pixel:
    fontFamily: "VT323, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
  caption-pixel:
    fontFamily: "Silkscreen, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
  code-pixel:
    fontFamily: "VT323, monospace"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  pixel: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  grid-unit: 4px
components:
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pixel}"
    padding: "{spacing.md}"
  card-featured:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pixel}"
    padding: "{spacing.md}"
  card-subtitle:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-pixel}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pixel}"
    padding: 8px 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.pixel}"
    padding: 8px 16px
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pixel}"
    padding: 2px 8px
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body-pixel}"
  quote:
    textColor: "{colors.primary}"
    typography: "{typography.headline-pixel}"
---

# Davi Pixel Avatar Design System

## Overview

A retro-inspired, monochromatic pixel art design system. The visual language is defined by a strict 4px pixel grid, a limited grayscale palette, and **dark-first** presentation — near-black canvas with light gray text as the authored default, light theme as an explicit override. Depth comes from 2px borders, hard offset shadows, dithering patterns, and checkerboard/scanline textures; nothing is blurred, anti-aliased, or smoothed. The tone is nostalgic yet technical: a CRT terminal meets an 8-bit avatar portrait.

This file describes the system's **essence**, not any particular page. It applies to a plain HTML document, a React app, a dashboard, a CLI tool's web UI — anything. The content decides its own structure; the system only provides the visual grammar.

## Colors

A strictly monochromatic palette built from 15 grayscale values. The token values below are the canonical **dark theme**. Every color has a light-theme override (see Theming).

- **Primary (#E0E0E0):** Light gray for text, headings, outlines, and interactive accents on dark surfaces. The anchor of the dark theme.
- **Primary Hover (#C0C0C0):** Slightly dimmer gray for hover states of filled controls.
- **Secondary (#888888):** Mid gray for borders and secondary structural lines.
- **Text Muted (#999999):** Accessible gray for secondary text, labels, captions, and card subtitles. Passes WCAG AA (≥4.5:1) against both surface and background in both themes.
- **Tertiary (#707070):** Darker mid gray for low-emphasis text on dark backgrounds.
- **Neutral (#3A3A3A):** Mid-tone gray carried from the avatar palette; used within pixel artwork itself (dithered shading regions).
- **Surface (#2A2A2A):** Elevated surfaces — cards, panels, controls — one step lighter than the canvas.
- **On-Primary (#1A1A1A):** Near-black text/icons on primary-colored fills.
- **On-Surface (#DCDCDC):** Primary text color on surface/background.
- **Highlight (#505050):** Focus rings, accent sparkles, and the checkerboard texture color.
- **Midtone (#606060):** The "under-shadow" side of hard offset shadows.
- **Shadow (#0A0A0A):** Deepest gray, carried from the avatar palette for recessed areas of artwork.
- **Background (#1A1A1A):** The page canvas — near-black that blends with dark browser chrome.
- **Border (#888888):** Dividers and the default border tone.
- **Border Light (#555555):** Reserved lighter border tone for subtle structural lines on dark surfaces.

**Light variant:** primary `#0D0D0D`, primary-hover `#1A1A1A`, secondary `#404040`, text-muted `#555555`, tertiary `#808080`, neutral `#DCDCDC`, surface `#E8E8E8`, on-primary `#FFFFFF`, on-surface `#0D0D0D`, highlight `#C0C0C0`, midtone `#999999`, shadow `#262626`, background `#FCFCFC`, border `#404040`, border-light `#999999`. The light palette is the exact inverse of the dark one: text colors become dark ink, surfaces become warm off-whites.

## Theming

Dark is the **authored default** — the dark palette holds even before any script or theme code runs. Three modes are supported:

- **Dark (default):** The canonical palette.
- **Light (explicit):** Every token overridden by the light variant, regardless of system preference.
- **Auto:** Follows the operating system's `prefers-color-scheme`; falls back to dark when no preference exists.

The system only defines the palettes and the precedence — dark unless overridden. Wire the modes through whatever mechanism the host project uses (a `data-theme` attribute, a class, CSS variables, a framework theme provider). Textures tied to the theme (e.g. scanlines) should flip subtly per scheme.

## Typography

Pixel-perfect typography using bitmap-style fonts (Press Start 2P, VT323, Silkscreen). All type is monospaced and rendered at pixel boundaries, with font smoothing disabled and `image-rendering` kept crisp. Display, headline, and label levels render **uppercase**.

- **Display Pixel:** Press Start 2P at 32px for names and big statements — maximum retro impact. Scale down on small screens (~20px compact, ~16px tiny).
- **Headline Pixel:** Press Start 2P at 16px for section titles, card titles, and emphasis lines.
- **Body Pixel:** VT323 at 18px for paragraphs, card text, list items, and links.
- **Label Pixel:** VT323 at 14px for badges, buttons, and UI labels.
- **Caption Pixel:** Silkscreen at 12px for navigation links, ribbons, and fine print.
- **Code Pixel:** VT323 at 18px for technical metadata (tags, timestamps, subtitles).

## Layout

A strict pixel-grid alignment system: every element snaps to the 4px base unit (`grid-unit`). Beyond that, layout is guidance, not prescription — pages decide their own structure within this grammar:

- **Containment:** Fluid, centered containers that cap out around 1200px with 24px gutters (16px on small screens).
- **Rhythm:** Vertical spacing in multiples of the 4px unit; major sections separated by 48–80px blocks.
- **Rows:** Related items spaced 16px apart, collapsing to stacked columns on narrow screens.
- **Full-bleed:** Elements like dividers and textures may run edge-to-edge past the container — the canvas edge is fair game.
- **Breakpoints:** One layout breakpoint around 768px (stacking, compact type) and one around 480px (tight rhythm) covers most cases; adapt to content.

## Elevation & Depth

Depth is conveyed through **hard edges only** — 2px solid borders, hard offset shadows with zero blur, and tonal layering. No shadows with blur radius, no gradients, no filters.

- **Borders:** 2px solid strokes define containment; interactive elements shift their border to `primary` on hover.
- **Hard offset shadows:** Lift an element with a solid copy of its shape offset 4–6px in `primary`, plus a darker copy (`midtone`) offset the opposite way.
- **Texture:** A checkerboard (4px cells in `highlight`, ~12% opacity) and 4px scanlines over the canvas give the CRT effect; keep it subtle.
- **Dithering:** Checkerboard and stipple patterns blend foreground and background tones into midtones inside pixel artwork.
- **Focus:** 2px `highlight` outline with 2px offset signals keyboard focus — the only "glow" in the system.

## Shapes

A strictly geometric, pixel-perfect shape language. All corners are 0px; curves are approximated through pixel stepping. `image-rendering: pixelated` keeps everything chunky.

- **Pixel corners:** Every radius is 0px — buttons, cards, and badges are hard rectangles.
- **Pixel art:** Icons and artwork are drawn from grid-aligned blocks; diagonals step visibly in pixels.
- **Borders:** 2px solid strokes create bold definition on any surface.
- **Sparkle accent:** A 4-pointed star (✶) in `highlight` with a 4-direction 1px outline, available as a decorative corner motif.

## Components

Atomic style guidance — compose these freely into whatever pages you build.

**Button**

- Label type (14px, uppercase), 8px/16px padding, 2px `primary` border, 0px radius. Fill and text **invert on `:active`** (a pixel-snap press, no animation). Variants:
  - **Primary:** `primary` fill / `on-primary` text; hover swaps fill and border to `primary-hover`.
  - **Ghost:** Transparent fill / `primary` text; hover inverts to solid `primary` fill.
  - **Full:** `width: 100%` modifier for footers and full-width actions.
- Focus shows a 2px `highlight` outline.

**Badge**

- Label type (14px, uppercase), `primary` fill with `on-primary` text, 2px `primary` border, 2px/8px padding, no radius. No hover state — badges are static tags.

**Link**

- Body type (18px) in `primary`, no underline; a transparent 2px bottom border fills `primary` on hover (`highlight` for external links). 2px `primary` outline on focus. Links may carry 16px stroke icons in `currentColor`.

**Card**

- Surface fill, 2px `secondary` border (→ `primary` on hover), 16px padding, 0px radius. Structure: headline-type title, body-type subtitle in `text-muted` (set in code type), body-type description clamped to 2 lines, optional badge row, and an actions row.
- **Featured variant:** Keeps a `primary` border at rest and carries a "★ FEATURED"-style ribbon (caption type, `primary` fill) at the top-right corner — for any content that deserves emphasis.

**Quote**

- Headline type (16px, uppercase) in `primary` with a 4px `primary` left border and 24px left padding.

**List & text**

- **Compact list:** Body-type items with a `▸` marker in `primary`; item text shifts to `primary` on hover.
- **Text block/item:** Body type, max-width ~700px for comfortable line lengths; items shift to `primary` on hover.

## Do's and Don'ts

- Do snap all elements to the 4px grid — partial pixels break the aesthetic
- Do use 2px solid borders and hard offset shadows (zero blur) for depth — never box-shadow blur, gradients, or filters
- Do default to the dark palette and treat light as an explicit override
- Do use dithering and checkerboard patterns instead of smooth transitions; keep page texture subtle (~12% opacity)
- Do render display, headline, and label type uppercase
- Do keep figure-ground contrast with 2px `primary`/`secondary` borders against `background`/`surface`
- Do use the `highlight` 2px outline for keyboard focus
- Don't use anti-aliasing, blur, or smooth gradients anywhere — keep `image-rendering: pixelated` on artwork
- Don't introduce color — the power is in the monochromatic palette
- Don't use fonts outside the pixel/bitmap family (Press Start 2P, VT323, Silkscreen) — modern sans-serif breaks the retro feel
- Don't animate with easing or smooth transitions — presses are instant inversions, marquees are linear, blinks are step-end
- Don't use rounded corners — every radius stays 0px
