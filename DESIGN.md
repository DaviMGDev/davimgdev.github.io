---
version: alpha
name: Davi Pixel Avatar Design System
description: Monochromatic pixel art design system inspired by retro 8-bit avatar portraits
colors:
  primary: "#0D0D0D"
  primary-hover: "#1A1A1A"
  secondary: "#404040"
  text-muted: "#555555"
  tertiary: "#808080"
  neutral: "#DCDCDC"
  surface: "#E8E8E8"
  on-primary: "#FFFFFF"
  on-surface: "#0D0D0D"
  highlight: "#C0C0C0"
  midtone: "#999999"
  shadow: "#262626"
  background: "#D4D4D4"
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
rounded:
  none: 0px
  pixel: 0px
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  grid-unit: 4px
components:
  avatar-frame:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pixel}"
    padding: "{spacing.lg}"
  pixel-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pixel}"
    padding: "{spacing.md}"
  pixel-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pixel}"
    padding: 8px 16px
  pixel-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.pixel}"
    padding: 8px 12px
---

# Davi Pixel Avatar Design System

## Overview

A retro-inspired, monochromatic pixel art design system capturing the aesthetic of 8-bit avatar portraits. The visual language is defined by strict pixel-grid alignment, a limited grayscale palette, and dithering techniques that create depth and texture without anti-aliasing. The overall tone is nostalgic yet sophisticated — technical precision meets artistic expression.

## Colors

A strictly monochromatic palette built from 5 core grayscale values, achieving visual depth through pattern and dithering rather than color variety.

- **Primary (#0D0D0D):** Near-black used for hair, beard, glasses frames, and strong outlines. The anchor of the composition.
- **Secondary (#404040):** Dark gray for secondary shading and structural elements.
- **Text Muted (#555555):** Accessible gray for secondary text, labels, and captions on light backgrounds. Passes WCAG AA (≥4.5:1) against both surface and background.
- **Tertiary (#808080):** True midtone gray for subtle transitions and depth cues. Not intended for text — use text-muted instead.
- **Neutral (#DCDCDC):** Light gray background providing contrast without harshness.
- **Surface (#E8E8E8):** Off-white for skin highlights and light areas.
- **On-Primary (#FFFFFF):** Pure white for text and details on dark backgrounds.
- **On-Surface (#0D0D0D):** Near-black for text on light backgrounds.
- **Highlight (#C0C0C0):** Light gray for dithered highlights and sparkle accents.
- **Midtone (#999999):** Transitional gray for smooth dithering patterns.
- **Shadow (#262626):** Deep gray for subtle depth and recessed areas.
- **Background (#D4D4D4):** The overall canvas color — a neutral, cool gray.

## Typography

Pixel-perfect typography using bitmap-style fonts that maintain the retro aesthetic. All type is monospaced and rendered at pixel boundaries.

- **Display Pixel:** Press Start 2P at 32px for major headlines and titles. Maximum visual impact.
- **Headline Pixel:** Press Start 2P at 16px for section headers and navigation labels.
- **Body Pixel:** VT323 at 18px for readable paragraph text with a classic terminal feel.
- **Label Pixel:** VT323 at 14px for UI labels, form fields, and metadata.
- **Caption Pixel:** Silkscreen at 12px for fine print, timestamps, and secondary information.

## Layout

A strict pixel-grid alignment system where every element snaps to a 4px base unit. The layout emphasizes centered compositions with strong silhouettes and clear figure-ground separation.

- **Grid Unit:** 4px — all dimensions, spacing, and positions snap to this base.
- **Composition:** Centered head-and-shoulders portrait framing, square or near-square aspect ratios.
- **Alignment:** Hard pixel edges with no sub-pixel rendering. Elements align to integer coordinates.
- **Symmetry:** Strong bilateral symmetry in portrait layouts, creating a bold, iconic presence.
- **Whitespace:** Generous neutral padding around subjects, using the background gray as breathing room.

## Elevation & Depth

Depth is achieved entirely through dithering patterns and tonal layering — no shadows, no gradients, no blur. The pixel art vocabulary creates dimension through pattern density.

- **Dithering:** Checkerboard and stipple patterns that blend foreground and background colors to simulate midtones.
- **Outline:** 1-2px dark outlines define edges and separate elements from the background.
- **Layering:** Tonal stacking from darkest (hair/beard) to lightest (skin/background) creates visual hierarchy.
- **Sparkle Accents:** Small 4-pointed star shapes (#C0C0C0) add subtle highlights and visual interest.

## Shapes

A strictly geometric, pixel-perfect shape language. All curves are approximated through pixel stepping — no anti-aliasing, no smooth bezier paths.

- **Pixel Corners:** All radii are 0px. Rounded shapes use stair-step pixel patterns.
- **Circles:** Rendered as pixel approximations with visible stepping on diagonals.
- **Outlines:** 1-2px solid strokes in near-black, creating bold definition.
- **Silhouettes:** Strong, recognizable shapes defined by high-contrast edges against the neutral background.
- **Facial Features:** Glasses, eyes, and beard rendered as distinct pixel regions with clear boundaries.

## Components

- **Avatar Frame:** Centered portrait within a neutral background, 24px padding, no border radius. The primary use case.
- **Pixel Card:** Surface-colored container with pixel-aligned edges, 16px internal padding.
- **Pixel Button:** Primary-filled, sharp corners, 8px/16px padding. No hover gradients — state changes through color inversion.
- **Pixel Input:** Surface background with primary outline, 8px/12px padding. Monospace pixel font.
- **Dithered Regions:** Any area using checkerboard patterns to create visual texture or transitional tones.

## Do's and Don'ts

- Do snap all elements to the 4px grid — partial pixels break the aesthetic
- Do use dithering patterns to create gradients and depth instead of smooth transitions
- Do maintain strong figure-ground contrast with near-black outlines against neutral backgrounds
- Don't use anti-aliasing, blur effects, or smooth gradients anywhere
- Don't introduce color — the power is in the monochromatic palette
- Don't use fonts outside the pixel/bitmap family — modern sans-serif breaks the retro feel
- Do add sparkle accents sparingly for visual interest and personality
- Do keep compositions centered and symmetrical for maximum impact
