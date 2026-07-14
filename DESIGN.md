---
version: alpha
name: Davi Macêdo Gomes — Developer Portfolio
description: >
  Design system for a personal developer portfolio website. Dark-mode-first,
  terminal-inspired aesthetic with a refined editorial typographic voice. Built
  on Astro 5 SSG with React 19 islands and Tailwind CSS v4.
colors:
  base: "#09090B"
  surface: "#131316"
  surface-elevated: "#1D1D21"
  primary: "#00DCA5"
  primary-hover: "#00FFBF"
  secondary: "#7C8EE4"
  accent: "#FF6B6B"
  text-primary: "#EDEDF0"
  text-secondary: "#A1A1AA"
  text-tertiary: "#71717A"
  border: "#27272A"
  success: "#22C55E"
  warning: "#F59E0B"
  error: "#EF4444"
  info: "#3B82F6"
  on-primary: "#09090B"

typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-md:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 450
    lineHeight: 1.6

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  "2xl": 48px
  "3xl": 64px
  "4xl": 96px
  section: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.label-md}"
    padding: "10px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-elevated}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  card-interactive:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  card-interactive-hover:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.body-md}"
    padding: "12px 16px"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
  badge:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: "4px 12px"
  badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-sm}"
    padding: "4px 12px"
  alert-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  alert-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  alert-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  alert-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md}"
  divider:
    backgroundColor: "{colors.border}"
  caption:
    textColor: "{colors.text-tertiary}"
    typography: "{typography.label-sm}"
  accent-dot:
    backgroundColor: "{colors.accent}"
  page:
    backgroundColor: "{colors.base}"
---

# Davi Macêdo Gomes — Developer Portfolio

## Overview

A personal developer portfolio for Davi Macêdo Gomes — full-stack developer,
AI engineer, CLI tool builder, and Linux enthusiast. The site showcases
projects, technical skills, professional experience, and contact channels.

**Brand personality:** Precise, technical, warm. The aesthetic draws from
developer infrastructure — terminal emulators, code editors, CLI tools —
but refined into a professional portfolio rather than a gimmick. Dark mode is
the default and only mode (no light theme toggle — the dark environment is
the brand), reflecting a developer who lives in the terminal.

**Target audience:** Fellow developers, open-source collaborators, freelance
clients, and potential employers in AI/automation and backend infrastructure.

**Technical foundation:** Astro 5 for static site generation, React 19 for
interactive islands, TypeScript throughout, Tailwind CSS v4 for utility-first
styling. Content is authored in Markdown and validated through Astro Content
Collections. The entire site builds to static HTML/CSS/JS for deployment to
GitHub Pages with zero server-side runtime.

## Architecture

### Framework & Rendering Strategy

**Astro 5 (SSG)** generates pure static HTML at build time. No client-side
JavaScript is shipped for content pages. React 19 components hydrate only
where interactivity is required — mobile navigation drawer, contact form,
and project filters — as isolated "islands". This is the `client:load` and
`client:visible` hydration strategy.

**Why Astro over pure React/Next.js:**

- Zero JavaScript baseline for content pages
- Content Collections provide type-safe Markdown authoring with Zod schema
  validation at build time
- Built-in image optimization (`astro:assets`) for project screenshots
- Built on Vite (familiar from RouteHub) — shared tooling and config
- Native Markdown/MDX support with frontmatter parsing
- Trivial GitHub Pages deployment (static `dist/` output)

### Route Map

| Route        | Page      | Source                           |
| ------------ | --------- | -------------------------------- |
| `/`          | Home      | `src/pages/index.astro`          |
| `/projects/` | Projects  | `src/pages/projects/index.astro` |
| `/about/`    | About     | `src/pages/about.astro`          |
| `/contact/`  | Contact   | `src/pages/contact.astro`        |
| `/404`       | Not Found | `src/pages/404.astro`            |

All routes are file-based (Astro's default). The `/projects/` page uses
Astro's `getStaticPaths()` to generate one page from the content collection;
individual project pages are not generated unless a project detail route is
added later.

### Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── BaseLayout.astro        # <html>, <head>, global shell
│   │   ├── Header.astro            # Fixed nav bar + mobile drawer
│   │   ├── Footer.astro            # Social links, copyright
│   │   └── MobileNav.tsx           # Mobile drawer (React island)
│   ├── ui/
│   │   ├── Button.astro            # Polymorphic button/link
│   │   ├── Badge.astro             # Tag/chip pill
│   │   ├── Card.astro              # Generic surface card
│   │   ├── Container.astro         # Max-width wrapper
│   │   ├── Section.astro           # Page section (heading + content)
│   │   └── Divider.astro           # Thematic <hr>
│   ├── home/
│   │   ├── HeroSection.astro       # Name, role, tagline, CTAs
│   │   ├── TechStackGrid.astro     # Technology categories grid
│   │   ├── FeaturedProjects.astro  # 2–3 featured project cards
│   │   └── StrengthsGrid.astro     # Key strengths as cards
│   ├── projects/
│   │   ├── ProjectCard.astro       # Single project summary card
│   │   ├── ProjectGrid.astro       # Responsive card grid
│   │   └── ProjectFilter.tsx       # Tag-based filter (React island)
│   ├── about/
│   │   ├── AboutHero.astro         # Photo + introductory paragraph
│   │   ├── Timeline.astro          # Experience + education timeline
│   │   └── BeyondCode.astro        # Personal interests grid
│   └── contact/
│       ├── ContactForm.tsx          # Form with validation (React island)
│       └── SocialLinks.astro       # Platform link cards
├── content/
│   ├── projects/
│   │   ├── routehub.md
│   │   ├── my-agent.md
│   │   ├── unipm.md
│   │   ├── denteclean.md
│   │   └── experiments.md
│   └── config.ts                   # Site metadata, social links, nav items
├── layouts/
│   └── BaseLayout.astro            # Re-export for Astro conventions
├── pages/
│   ├── index.astro
│   ├── projects/
│   │   └── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── 404.astro
├── styles/
│   └── global.css                  # Tailwind directives, CSS custom props
├── types/
│   └── index.ts                    # Shared TypeScript interfaces
└── consts.ts                       # Inline constants (breakpoints, etc.)
```

## Component Hierarchy

### Layout Shell

```
BaseLayout.astro
├── Header.astro
│   ├── Navigation links (home, projects, about, contact)
│   └── MobileNav.tsx (client:visible)
├── <slot /> ← page content
└── Footer.astro
    └── SocialLinks.astro
```

### Home Page (`/`)

```
HeroSection.astro
  ├── Button.astro ×2 (View Projects, Get in Touch)
TechStackGrid.astro
  └── Badge.astro ×N (technology tags, grouped by category)
FeaturedProjects.astro
  └── ProjectCard.astro ×3
StrengthsGrid.astro
  └── Card.astro ×4 (icon + heading + description)
```

### Projects Page (`/projects/`)

```
Container.astro
├── Section.astro (heading + description)
├── ProjectFilter.tsx (client:visible)
│   └── Badge.astro ×N (filter tags)
└── ProjectGrid.astro
    └── ProjectCard.astro ×N
```

### About Page (`/about/`)

```
Container.astro
├── AboutHero.astro
├── Section.astro → Timeline.astro (Experience)
├── Section.astro → Timeline.astro (Education)
├── Section.astro → StrengthsGrid.astro (Strengths)
├── Section.astro → BeyondCode.astro (Interests)
└── Section.astro → SocialLinks.astro (Connect)
```

### Contact Page (`/contact/`)

```
Container.astro
├── Section.astro (heading + intro)
├── ContactForm.tsx (client:load)
└── SocialLinks.astro
```

### Component Prop Contracts

Every reusable component exposes a typed interface. Below are the prop
signatures for key components. Astro components use `Astro.props` with
TypeScript generics; React islands use standard `interface Props`.

#### `BaseLayout.astro`

```ts
interface Props {
  title: string; // <title> tag value
  description: string; // <meta name="description">
  ogImage?: string; // Open Graph image URL
}
```

#### `Button.astro`

```ts
interface Props {
  variant: "primary" | "ghost"; // visual style
  size?: "md" | "lg"; // defaults to "md"
  href?: string; // renders <a> if set, <button> otherwise
  external?: boolean; // adds rel="noopener" and target="_blank"
  type?: "button" | "submit"; // only when href is undefined
}
```

#### `Badge.astro`

```ts
interface Props {
  text: string;
  variant?: "default" | "primary"; // defaults to "default"
  size?: "sm" | "md"; // defaults to "sm"
}
```

#### `Card.astro`

```ts
interface Props {
  href?: string; // makes card a clickable link
  interactive?: boolean; // adds hover styles
  class?: string; // additional Tailwind classes
}
```

#### `Section.astro`

```ts
interface Props {
  title?: string; // section heading
  subtitle?: string; // supporting description
  id?: string; // anchor target for skip navigation
}
```

#### `Container.astro`

```ts
interface Props {
  size?: "md" | "lg"; // max-width: 768px or 1024px
  class?: string;
}
```

#### `ProjectCard.astro`

```ts
interface Props {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string; // path to screenshot
  featured?: boolean;
}
```

#### `ProjectFilter.tsx`

```ts
interface Props {
  tags: string[]; // all available filter tags
  activeTag: string | null; // currently selected tag
  onFilterChange: (tag: string | null) => void;
}
```

#### `ContactForm.tsx`

```ts
// No external props — self-contained form with internal state.
// Uses Web3Forms or Formspree for serverless submission.
```

#### `Timeline.astro`

```ts
interface Props {
  items: Array<{
    title: string;
    subtitle: string;
    period: string;
    description?: string;
    tags?: string[];
  }>;
}
```

#### `SocialLinks.astro`

```ts
interface Props {
  variant?: "inline" | "card"; // defaults to "inline"
  class?: string;
}
```

## Data Flow

### Content Sources

All content is **static at build time**. There is no external API, database,
or CMS. Content flows through three channels:

| Source                      | Format                      | Purpose                                                       |
| --------------------------- | --------------------------- | ------------------------------------------------------------- |
| `src/content/projects/*.md` | Markdown + YAML frontmatter | Project entries                                               |
| `src/content/config.ts`     | TypeScript object           | Site metadata, nav items, social links, tech stack categories |
| `public/images/*`           | PNG/WebP                    | Project screenshots, avatar                                   |

### Data Journey (Build Time)

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. AUTHOR                                                       │
│    Markdown files (projects/*.md)                               │
│    TypeScript config (config.ts)                                │
│    Static assets (images/)                                      │
└──────────────────────┬──────────────────────────────────────────┘
                       │ astro build
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ 2. CONTENT COLLECTION                                           │
│    Zod schema validates frontmatter                             │
│    getCollection("projects") → typed Project[] array            │
│    config.ts exports → imported at build time                   │
└──────────────────────┬──────────────────────────────────────────┘
                       │ import / getCollection()
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ 3. ASTRO PAGES                                                  │
│    *.astro files query collections in frontmatter               │
│    Pass typed data as props to components                       │
│    React islands receive data via props at render time          │
└──────────────────────┬──────────────────────────────────────────┘
                       │ SSG render
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│ 4. STATIC OUTPUT (dist/)                                        │
│    Pure HTML + CSS + minimal JS (only React islands)            │
│    Optimized images via <Image /> component                     │
│    No runtime data fetching                                     │
└─────────────────────────────────────────────────────────────────┘
```

### Content Collection Schema

```ts
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    order: z.number().default(999),
  }),
});

export const collections = { projects };
```

### State Management

No global state store. Each React island manages its own local state:

- **ProjectFilter.tsx** — `useState<string | null>` for active filter tag
- **ContactForm.tsx** — `useState` for form fields, submission status, and
  validation errors
- **MobileNav.tsx** — `useState<boolean>` for open/close state

The site is dark-only. A single `<meta name="color-scheme" content="dark">`
in `<head>` tells the browser to render native controls (scrollbars, form
inputs) in their dark variant. No theme toggle, no `localStorage`, no FOUC
risk.

### Static Config

```ts
// src/content/config.ts (site metadata section)
export const SITE = {
  name: "Davi Macêdo Gomes",
  title: "Full-Stack Developer + AI Engineer",
  url: "https://davimgdev.github.io",
  email: "dev.davi.macedo.gomes@gmail.com",
  github: "https://github.com/DaviMGDev",
  linkedin: "https://linkedin.com/in/dav1-maced0-g0mes-dev",
} as const;
```

## Colors

The palette is rooted in dark, low-luminance backgrounds with a single vivid
accent — terminal mint green — used sparingly for emphasis. The color system
has no light variant; the dark environment is the brand.

### Background Hierarchy

Three tiers of elevation, each darker-to-lighter moving "up" from the page:

- **Base (`#09090B`):** Page background. Near-black zinc with a faint warm
  undertone. Used for the `<body>` and outermost layout.
- **Surface (`#131316`):** Card and container backgrounds. One step above base.
- **Surface Elevated (`#1D1D21`):** Hover states, active cards, elevated
  overlays. Two steps above base.

### Accent Colors

- **Primary (`#00DCA5`):** Terminal mint green. Used for primary buttons, links,
  active navigation indicators, and emphasis. Contrasts sharply against dark
  backgrounds. Hover state brightens to `#00FFBF`.
- **Secondary (`#7C8EE4`):** Periwinkle blue. Used for secondary accents,
  decorative elements, and subtle highlights where green would be too aggressive.
- **Accent (`#FF6B6B`):** Coral red. Reserved for critical highlights only —
  error states, important call-to-actions, and maximum emphasis elements.

### Text Scale

Three tiers by prominence:

- **Primary (`#EDEDF0`):** Body text, headings, primary content. Near-white
  with high contrast (≈19:1 on base).
- **Secondary (`#A1A1AA`):** Supporting text, descriptions, metadata. Passes
  WCAG AA (≈5.7:1 on base) for 14px+ text.
- **Tertiary (`#71717A`):** Captions, timestamps, decorative labels. Acceptable
  for non-essential text at 14px+.

### Semantic Colors

- **Success (`#22C55E`):** Green for confirmation messages, success states.
- **Warning (`#F59E0B`):** Amber for cautionary states.
- **Error (`#EF4444`):** Red for validation errors and destructive actions.
- **Info (`#3B82F6`):** Blue for informational states.

## Typography

### Typeface Strategy

Three typefaces serve three distinct roles:

| Role                                                        | Typeface           | Classification       | Character                                                    |
| ----------------------------------------------------------- | ------------------ | -------------------- | ------------------------------------------------------------ |
| **Display** (headlines, hero text)                          | **Newsreader**     | Editorial serif      | Refined, literary, distinctive. Signals thoughtfulness.      |
| **Body** (paragraphs, UI text, labels)                      | **Geist**          | Geometric sans-serif | Clean, modern, highly legible. Optimized for screen reading. |
| **Code** (tech tags, inline code, terminal-styled elements) | **JetBrains Mono** | Monospace            | Developer-native. Ligatures enabled for stylistic polish.    |

**Why a serif for headlines on a developer portfolio?** Most dev portfolios
use the same sans-serif family for everything. Newsreader creates immediate
visual differentiation while the editorial quality signals depth and
substance — a developer who reads and writes, not just compiles.

### Type Scale Usage

| Token         | Size       | Weight                                  | Usage |
| ------------- | ---------- | --------------------------------------- | ----- |
| `display-lg`  | 56px / 650 | Hero headline (name)                    |
| `display-md`  | 40px / 650 | Page titles                             |
| `headline-lg` | 32px / 600 | Section headings                        |
| `headline-md` | 24px / 600 | Card titles, subsection headers         |
| `headline-sm` | 20px / 600 | Small section labels                    |
| `body-lg`     | 18px / 400 | Lead paragraphs, hero subtitles         |
| `body-md`     | 16px / 400 | Body text, descriptions                 |
| `body-sm`     | 14px / 400 | Secondary descriptions, metadata        |
| `label-md`    | 13px / 500 | Buttons, navigation, form labels        |
| `label-sm`    | 11px / 500 | Badges, chips, timestamps               |
| `code-md`     | 14px / 450 | Tech tags, inline code, terminal blocks |

**Implementation in Tailwind:** Each token maps to a Tailwind utility class
via `@theme` in Tailwind v4 or `theme.extend.fontSize` in Tailwind v3. The
`fontFamily` tokens map to `fontFamily` in the theme config.

## Layout

### Grid System

A single-column layout with a centered content column. No sidebar, no
multi-column page structure. Content flows vertically with generous breathing
room between sections.

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER (fixed)                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   Container (max-width: 1024px)          │   │
│  │                                                          │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │                  Section                         │   │   │
│  │  │  padding-block: 128px (section token)            │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                                                          │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │                  Section                         │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                        FOOTER                                   │
└─────────────────────────────────────────────────────────────────┘
```

- **Container:** Centers content, applies `max-width: 1024px` and horizontal
  padding of `24px` (shrinks to `16px` on mobile).
- **Section:** Each logical section gets `padding-block: 128px` (`{spacing.section}`).
  Adjacent sections of the same type (e.g., project cards in a grid) use a
  tighter rhythm of `48px` (`{spacing.2xl}`).

### Spacing Scale

An 8px base grid with a 4px half-step for micro-adjustments:

| Token     | Value | Usage                                   |
| --------- | ----- | --------------------------------------- |
| `xs`      | 4px   | Icon-to-text gaps, tight inline spacing |
| `sm`      | 8px   | Element gaps within a component         |
| `md`      | 16px  | Card padding, list gaps                 |
| `lg`      | 24px  | Section content padding                 |
| `xl`      | 32px  | Large component gaps                    |
| `2xl`     | 48px  | Between component groups                |
| `3xl`     | 64px  | Hero-to-content transition              |
| `4xl`     | 96px  | Major layout divisions (rare)           |
| `section` | 128px | Vertical section separation             |

### Breakpoints

| Token | Width  | Target                                   |
| ----- | ------ | ---------------------------------------- |
| `sm`  | 640px  | Large phones in landscape                |
| `md`  | 768px  | Tablets                                  |
| `lg`  | 1024px | Small laptops, tablets in landscape      |
| `xl`  | 1280px | Desktops                                 |
| `2xl` | 1536px | Large desktops (container does not grow) |

The container caps at `1024px`. Wider viewports add more negative space
rather than stretching content. This keeps line lengths readable and the
layout focused.

## Elevation & Depth

Depth is conveyed through **tonal layering** — lighter surfaces on a darker
base — rather than heavy box shadows. This produces a flat, editor-like
aesthetic that feels native to dark-themed developer environments.

- **Base → Surface:** A subtle `4px` luminance jump. Cards feel slightly
  raised without cast shadows.
- **Surface → Surface Elevated:** Another `4px` lift. Used for hover states,
  giving immediate interactive feedback without animation delay.
- **Borders:** `1px solid {colors.border}` defines edges where tonal
  differences alone are insufficient (e.g., card boundaries against the page
  background).
- **No drop shadows.** The aesthetic is flat and precise. Depth is about
  material hierarchy, not skeuomorphic lighting.

## Shapes

A **soft-rectangular** shape language: most interactive elements use an 8px
corner radius (`{rounded.md}`). Cards and larger surfaces use 12px
(`{rounded.lg}`). Badges and chips use full pill rounding (`{rounded.full}`).

- **Interactive elements** (buttons, inputs, clickable cards): 8px radius.
- **Large surfaces** (cards, sections): 12px radius.
- **Pills** (badges, tags, chips): fully rounded.
- **Code blocks, terminal elements:** 4px radius (`{rounded.sm}`) — slightly
  sharper to suggest technical precision.
- **Zero-radius elements:** None. Every visible container has at least 4px
  rounding. Straight 90° corners are used only for full-bleed layout edges.

## Components

Component styling guidance. All components use the design tokens defined in
the YAML frontmatter.

### Buttons

Two variants:

- **Primary (`button-primary`):** Solid `{colors.primary}` background with
  `{colors.on-primary}` (near-black) text. Used for the single most important
  action per view. Hover brightens to `{colors.primary-hover}`.
- **Ghost (`button-ghost`):** Transparent background with
  `{colors.text-primary}` text. Used for secondary actions and navigation.
  Hover shows `{colors.surface-elevated}` background.

Both variants use `{typography.label-md}` (13px, 500 weight, 0.04em
letter-spacing) and `{rounded.md}` (8px). Padding is `10px 24px`. Focus
states use `focus-visible:ring-2 focus-visible:ring-[#00DCA5]
focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]`.

### Cards

Cards use `{colors.surface}` background with `{rounded.lg}`. Interactive
cards (those with `href` or `onClick`) gain `{colors.surface-elevated}` on
hover. Cards are bordered with `1px solid {colors.border}` to maintain
definition against the page background.

### Badges

Two variants: **default** (`{colors.surface-elevated}` background,
`{colors.text-secondary}` text) and **primary** (`{colors.primary}`
background, `{colors.on-primary}` text). Both are fully rounded pills with
`{typography.label-sm}` and `4px 12px` padding.

### Inputs

Form inputs use `{colors.surface}` background, `{colors.text-primary}` text,
and `{rounded.md}`. A `1px solid {colors.border}` outline defines the
boundary. On focus, the border color transitions to `{colors.primary}`. On
error, the border color changes to `{colors.error}` (`input-error` component
token set). Placeholder text uses `{colors.text-tertiary}`. Every input has a
visible `<label>` above it using `{typography.label-sm}`.

### Alerts

Three alert variants for feedback messages:

- **Error (`alert-error`):** `{colors.error}` background with
  `{colors.on-primary}` (near-black) text. Rounded at `{rounded.md}`.
- **Success (`alert-success`):** `{colors.success}` background with
  `{colors.on-primary}` text.
- **Warning (`alert-warning`):** `{colors.warning}` background with
  `{colors.on-primary}` text.
- **Info (`alert-info`):** `{colors.info}` background with
  `{colors.on-primary}` text.

All alerts use `{typography.body-sm}` and `{spacing.md}` padding. They appear
inline below the relevant form field or as a page-level banner. Each alert
has `role="alert"` for screen reader announcement.

### Captions & Dividers

- **Caption (`caption`):** Small secondary text using
  `{colors.text-tertiary}` and `{typography.label-sm}`. Used for timestamps,
  photo credits, and helper text.
- **Divider (`divider`):** Horizontal rule rendered with
  `{colors.border}` as its background. Provides visual separation between
  content sections.
- **Accent Dot (`accent-dot`):** A small decorative circle using
  `{colors.accent}`. Used as a section marker or list bullet for emphasis.

### Section

Each `<Section>` component renders an optional heading (using
`{typography.headline-lg}`) and optional subtitle (using
`{typography.body-lg}` in `{colors.text-secondary}`) above a content slot.
Sections apply `padding-block: {spacing.section}`.

### Focus Ring

All interactive elements share a single focus indicator:
`2px solid {colors.primary}` ring with a `2px` offset in `{colors.base}`.
Never use `outline: none` without this replacement.

## Accessibility

### Semantic HTML Targets

- **Landmarks:** `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` used
  throughout. One `<main>` per page.
- **Headings:** Hierarchical `<h1>` through `<h3>`. Each page has exactly one
  `<h1>`. Section headings use `<h2>`; card titles use `<h3>`.
- **Skip link:** A visually hidden "Skip to main content" link as the first
  focusable element on every page.
- **Navigation:** `<nav>` with `aria-label="Main navigation"` wrapping an
  unordered list of `<a>` elements.
- **Images:** All `<img>` elements have meaningful `alt` text. Project
  screenshots describe the content; decorative elements use `alt=""`.
- **Forms:** Every input has an associated `<label>` with `htmlFor`. The
  contact form wraps inputs in `<fieldset>` with `<legend>` for grouping.
  Errors use `aria-describedby` linking the error message to the input.

### Keyboard Navigation

- All interactive elements are focusable via `<button>`, `<a>`, or `tabindex`
  where necessary (never use `tabindex > 0`).
- Focus order follows visual order.
- The mobile navigation drawer traps focus when open and closes on `Escape`.
- Project filter buttons are keyboard-navigable with `Enter`/`Space` to
  toggle.

### Color Contrast Ratios

| Pairing                           | Ratio  | WCAG Level       | Status |
| --------------------------------- | ------ | ---------------- | ------ |
| `{text-primary}` on `{base}`      | ≈19:1  | AAA              | Pass   |
| `{text-primary}` on `{surface}`   | ≈17:1  | AAA              | Pass   |
| `{text-secondary}` on `{base}`    | ≈5.7:1 | AA (normal text) | Pass   |
| `{text-secondary}` on `{surface}` | ≈5.3:1 | AA (normal text) | Pass   |
| `{on-primary}` on `{primary}`     | ≈5.8:1 | AA (normal text) | Pass   |
| `{on-primary}` on `{error}`       | ≈5.3:1 | AA (normal text) | Pass   |
| `{on-primary}` on `{success}`     | ≈5.1:1 | AA (normal text) | Pass   |
| `{on-primary}` on `{warning}`     | ≈6.4:1 | AA (normal text) | Pass   |
| `{on-primary}` on `{info}`        | ≈5.8:1 | AA (normal text) | Pass   |

All text/background pairings meet WCAG AA at minimum. Primary text pairings
meet AAA. The `{text-tertiary}` token is used only for non-essential
decorative text and does not need to meet AA.

### Reduced Motion

All animations and transitions are wrapped in `@media (prefers-reduced-motion:
no-preference)`. When reduced motion is preferred, elements appear instantly
with no transition. The `prefers-reduced-motion` media query is checked in
CSS; no JavaScript is required for this behavior.

### Screen Reader Support

- Dynamic content changes (form submission status, filter results count) use
  `aria-live="polite"`.
- Icon-only links (GitHub, LinkedIn) use `aria-label` describing the
  destination.
- Project cards that are entirely clickable use a single `<a>` wrapping the
  card rather than multiple nested links.

## Performance

### Rendering Strategy

**Static Site Generation (SSG)** via Astro. Every page is pre-rendered to
HTML at build time. No server-side rendering, no client-side routing, no
hydration waterfall for content. React islands hydrate independently and only
when the component enters the viewport (`client:visible`) or on page load
when interactivity is critical (`client:load` for the contact form).

### JavaScript Budget

| Component           | Hydration        | Estimated JS |
| ------------------- | ---------------- | ------------ |
| `MobileNav.tsx`     | `client:visible` | <2 KB        |
| `ProjectFilter.tsx` | `client:visible` | <3 KB        |
| `ContactForm.tsx`   | `client:load`    | <5 KB        |

**Total JS budget: <10 KB** (uncompressed). Most pages ship 0 KB of
JavaScript (no islands present). The projects page ships ~3 KB (filter
island). The contact page ships ~5 KB (form island).

### Image Handling

- **Astro `<Image />` component:** All images pass through `astro:assets` for
  automatic optimization — format conversion (WebP), resizing, and
  compression.
- **Responsive images:** `<Image />` generates `srcset` with `1x`/`2x`
  variants and explicit `width`/`height` to prevent Cumulative Layout Shift.
- **Lazy loading:** Below-fold images use `loading="lazy"`. Above-fold hero
  images use `fetchpriority="high"`.
- **Placeholders:** Project card images use a CSS background color matching
  `{colors.surface-elevated}` while loading to prevent layout jumping.
- **No external images.** All assets are committed to the repository. No
  third-party image CDN dependencies.

### Bundle Splitting

Astro automatically code-splits by page. Additionally:

- React and ReactDOM are loaded once per page that uses islands (shared
  chunk).
- `ContactForm.tsx` is a separate chunk loaded only on `/contact/`.
- `ProjectFilter.tsx` is a separate chunk loaded only on `/projects/`.
- Font files (Newsreader, Geist, JetBrains Mono) are self-hosted as `woff2`
  with `font-display: swap` and `preload` for critical weights (400, 600,
  650).

### Font Loading Strategy

```html
<link
  rel="preload"
  href="/fonts/geist-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

Critical fonts (Geist Regular 400, Geist Semibold 600, Newsreader 650) are
preloaded. All fonts use `font-display: swap` to render text immediately with
a fallback while the custom font loads.

### CSS Strategy

Tailwind CSS v4 with its JIT compiler. Only used utility classes are included
in the final bundle. Estimated CSS size: <15 KB (gzipped). No CSS-in-JS
runtime. Global styles are minimal — reset, font-face declarations, custom
properties, and Tailwind directives.

## Do's and Don'ts

- **Do** use `{colors.primary}` for the single most important action per
  screen. Don't dilute it by applying it to secondary elements.
- **Do** maintain the 8px spacing grid. Don't use arbitrary pixel values
  outside the spacing scale without documenting the exception.
- **Do** write project descriptions in active voice with specific technical
  detail. Don't use vague filler like "various technologies."
- **Do** preload critical fonts. Don't rely on Google Fonts CDN — self-host
  all font files.
- **Do** keep the dark-only theme. Don't add a light mode toggle — the
  consistent dark environment is the brand identity.
- **Do** use the editorial serif (Newsreader) only for major headlines (h1,
  h2). Don't use it for body text, labels, or UI chrome.
- **Do** write semantic HTML (`<nav>`, `<main>`, `<section>`) before adding
  ARIA attributes. Don't use `<div>` for landmarks.
- **Do** provide visible focus rings on every interactive element. Don't
  disable outlines without a replacement.
- **Do** serve images in WebP format with AVIF fallback. Don't serve
  uncompressed PNGs for photographs.
- **Don't** add animations that run on a timer (infinite spinners, auto-play
  carousels). All motion must be interaction-triggered.
- **Don't** use `transition: all`. Animate specific properties (`opacity`,
  `transform`, `background-color`) for GPU-composited performance.
- **Don't** use `user-scalable=no` or `maximum-scale=1` in the viewport meta
  tag. Pinch-to-zoom must always work.
- **Don't** render empty UI states. Every component that accepts data must
  handle `null`, empty arrays, and zero-length strings gracefully.
