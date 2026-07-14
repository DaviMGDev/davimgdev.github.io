---
version: "1.0"
name: "Cordel Design System"
description: "A design system inspired by Brazilian Literatura de Cordel — the folk poetry tradition of the Northeast with its iconic xilogravura (woodcut) illustrations."

colors:
  # Primary Palette - Derived from woodcut printing
  primary: "#1A1A1A"
  primary-hover: "#2D2D2D"
  secondary: "#8B4513"
  tertiary: "#C41E3A"
  
  # Paper & Background Tones
  surface: "#F5E6D3"
  surface-warm: "#EDD9BC"
  surface-aged: "#E8D4B8"
  surface-dark: "#2C1810"
  
  # Ink & Contrast
  ink-black: "#0D0D0D"
  ink-dark: "#1A1A1A"
  ink-medium: "#4A4A4A"
  ink-light: "#6B6B6B"
  
  # Accent Colors - From colored paper covers
  accent-yellow: "#D4A843"
  accent-red: "#C41E3A"
  accent-green: "#2E5A3D"
  accent-blue: "#1E3A5F"
  accent-pink: "#D4A0A0"
  
  # Functional
  on-primary: "#FFFFFF"
  on-surface: "#1A1A1A"
  error: "#8B0000"
  success: "#2E5A3D"
  warning: "#D4A843"

typography:
  # Display - Inspired by hand-carved woodcut lettering
  display-xl:
    fontFamily: "Eldes Cordel, 'Playfair Display', Georgia"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  
  display-lg:
    fontFamily: "Eldes Cordel, 'Playfair Display', Georgia"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  
  display-md:
    fontFamily: "Eldes Cordel, 'Playfair Display', Georgia"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
  
  # Headlines - Bold, rustic character
  headline-lg:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
  
  headline-md:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
  
  headline-sm:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
  
  # Body - Readable, warm character
  body-lg:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  
  body-md:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  
  body-sm:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  
  # Labels - Functional, utilitarian
  label-lg:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  
  label-md:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  
  label-sm:
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
  
  # Poetry - Special for cordel verses
  poetry:
    fontFamily: "'Crimson Text', 'EB Garamond', Georgia"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.01em"

rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "12px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"

components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-lg}"
    padding: "12px 24px"
  
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-lg}"
    padding: "12px 24px"
    borderWidth: "2px"
    borderColor: "{colors.ink-black}"
    borderStyle: "solid"
  
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-lg}"
    padding: "12px 24px"
  
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    borderWidth: "1px"
    borderColor: "{colors.ink-light}"
    borderStyle: "solid"
  
  card-aged:
    backgroundColor: "{colors.surface-aged}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    borderWidth: "2px"
    borderColor: "{colors.ink-dark}"
    borderStyle: "solid"
    boxShadow: "4px 4px 0px {colors.ink-black}"
  
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    typography: "{typography.body-md}"
    padding: "12px 16px"
    borderWidth: "2px"
    borderColor: "{colors.ink-medium}"
    borderStyle: "solid"
  
  input-focus:
    borderColor: "{colors.ink-black}"
    outline: "none"
  
  badge:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    typography: "{typography.label-sm}"
    padding: "4px 8px"
  
  badge-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
  
  divider:
    backgroundColor: "{colors.ink-dark}"
    height: "2px"
    borderWidth: "0"
  
  divider-ornamental:
    height: "4px"
    borderWidth: "0"
    backgroundImage: "repeating-linear-gradient(90deg, {colors.ink-black} 0px, {colors.ink-black} 8px, transparent 8px, transparent 16px)"
  
  verse-block:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.lg}"
    borderWidth: "2px"
    borderColor: "{colors.ink-dark}"
    borderStyle: "solid"
    typography: "{typography.poetry}"
  
  header-banner:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.2xl} {spacing.xl}"
    borderWidth: "0"
    borderBottom: "4px solid {colors.tertiary}"
  
  nav-item:
    textColor: "{colors.surface}"
    hoverColor: "{colors.tertiary}"
    typography: "{typography.label-lg}"
    padding: "{spacing.sm} {spacing.md}"
  
  quote-block:
    backgroundColor: "{colors.surface-aged}"
    textColor: "{colors.on-surface}"
    padding: "{spacing.lg}"
    borderLeft: "4px solid {colors.tertiary}"
    typography: "{typography.body-lg}"
    fontStyle: "italic"
  
  footer:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.surface}"
    padding: "{spacing.2xl} {spacing.xl}"
    typography: "{typography.body-sm}"
---

# Cordel Design System

## Overview

This design system draws its soul from **Literatura de Cordel** — Brazil's beloved folk poetry tradition born in the arid sertão of the Northeast. Named for the strings (cordel) from which pamphlets hang in open-air markets, cordel represents the people's voice: raw, honest, and unapologetically handmade.

The aesthetic honors the **xilogravura** (woodcut) tradition — bold black-and-white illustrations carved into wood blocks, pressed onto paper to tell stories of love, faith, social struggle, and the daily life of the sertanejo. This is design with calluses on its hands, ink under its nails, and poetry on its lips.

### Core Principles

1. **Handmade Authenticity** — Every element should feel crafted, not manufactured. Embrace imperfection as a mark of human touch.

2. **High Contrast Drama** — Like woodcut prints, favor bold contrasts. The interplay of deep ink and warm paper creates visual tension that commands attention.

3. **Narrative Flow** — Content should tell a story. Layouts guide the eye like a cordelista guides listeners through verses.

4. **Cultural Rootedness** — Reference the sertão landscape, its people, and their traditions. This is not abstraction — it is the living memory of a people.

5. **Democratic Accessibility** — Cordel was literature for the people. Design should be clear, readable, and welcoming to all.

6. **Temporal Warmth** — Materials should feel aged, lived-in, and timeless. Avoid cold, sterile aesthetics.

## Colors

The palette emerges from the woodcut printing process: deep ink blacks, warm paper tones, and the vibrant accent colors of the colored paper covers (papel de cordel).

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1A1A1A` | Main text, headlines, ink |
| `secondary` | `#8B4513` | Earth tones, leather, wood |
| `tertiary` | `#C41E3A` | CTAs, emphasis, passion |

### Surface Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `surface` | `#F5E6D3` | Main background (fresh paper) |
| `surface-warm` | `#EDD9BC` | Cards, elevated surfaces |
| `surface-aged` | `#E8D4B8` | Aged paper, quotes |
| `surface-dark` | `#2C1810` | Headers, dark backgrounds |

### Accent Colors (Folheto Paper Colors)

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-yellow` | `#D4A843` | Highlights, gold accents |
| `accent-red` | `#C41E3A` | Danger, passion, Brazil |
| `accent-green` | `#2E5A3D` | Nature, hope, sertão |
| `accent-blue` | `#1E3A5F` | Night sky, rivers |
| `accent-pink` | `#D4A0A0` | Romance, tenderness |

### Ink Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ink-black` | `#0D0D0D` | Deepest black, xilogravura ink |
| `ink-dark` | `#1A1A1A` | Primary text |
| `ink-medium` | `#4A4A4A` | Secondary text |
| `ink-light` | `#6B6B6B` | Captions, metadata |

## Typography

Cordel typography speaks with two voices: the bold, carved authority of woodcut lettering, and the warm readability of traditional print.

### Font Recommendations

**Display & Headlines:**
- **Eldes Cordel** (custom) — Directly inspired by woodcut lettering, captures the authentic cordel aesthetic
- **Playfair Display** — Bold serif with high contrast, echoes carved letterforms
- **Freight Display** — Rich, textured character suitable for editorial

**Body Text:**
- **Crimson Text** — Warm, readable serif with calligraphic roots
- **EB Garamond** — Classic elegance with humanist warmth
- **Libre Baskerville** — Refined readability

**Labels & UI:**
- **Source Sans Pro** — Clean, utilitarian sans-serif
- **Inter** — Modern readability for interface elements

### Typography Scale

```
Display XL:  56px / 1.1  / Bold
Display LG:  44px / 1.15 / Bold
Display MD:  36px / 1.2  / Bold
Headline LG: 32px / 1.25 / Bold
Headline MD: 24px / 1.3  / SemiBold
Headline SM: 20px / 1.35 / SemiBold
Body LG:     18px / 1.7  / Regular
Body MD:     16px / 1.6  / Regular
Body SM:     14px / 1.5  / Regular
Label LG:    14px / 1.3  / SemiBold + Uppercase
Label MD:    12px / 1.3  / SemiBold + Uppercase
Label SM:    11px / 1.2  / Medium
```

### Poetry Typography

Cordel verses follow a special rhythm — typically sextilhas (six-line stanzas) with ABCBDB rhyme scheme. Use dedicated poetry styling:

```css
.poetry {
  font-family: 'Crimson Text', Georgia, serif;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.01em;
  text-align: center;
}

.poetry .stanza {
  margin-bottom: 1.5em;
}

.poetry .verse {
  display: block;
}
```

## Visual Elements & Motifs

### Xilogravura Illustration Style

The heart of cordel's visual identity. Key characteristics:

**Line Quality:**
- Bold, confident lines with visible hand tremor
- Cross-hatching for shading and texture
- Varying line weights create depth
- High contrast — minimal mid-tones

**Composition:**
- Figures often face forward or in profile
- Flat perspective with layered elements
- Decorative borders frame scenes
- Symmetrical arrangements for iconic subjects

**Common Motifs:**
- **Cacti (Mandacaru)** — Symbol of the sertão, resilience
- **Sun/Moon** — Cosmic duality, time's passage
- **Rooster (Galo)** — Virility, dawn, fighting spirit
- **Sertanejo figures** — Vaqueiros, cangaceiros, everyday people
- **Animals** — Donkeys, horses, snakes, jaguars
- **Religious imagery** — Saints, divine intervention
- **Musical instruments** — Viola caipira, accordion, drum
- **Heart shapes** — Love, devotion, suffering
- **Stars and celestial bodies** — Navigation, destiny
- **Thorns and barbed wire** — Hardship, boundaries

### Texture & Surface

**Paper Textures:**
- Aged, yellowed paper with visible fiber
- Slight foxing and water stains
- Creased and folded edges
- Coffee or tea staining

**Ink Effects:**
- Uneven ink coverage (brayer marks)
- Wood grain texture in solid areas
- Slight bleeding at edges
- Print registration variations

### Borders & Ornamentation

Cordel covers feature distinctive decorative borders:

```css
/* Geometric zigzag border */
.border-zigzag {
  border-image: repeating-linear-gradient(
    90deg,
    #0D0D0D 0px,
    #0D0D0D 8px,
    transparent 8px,
    transparent 16px
  ) 4;
}

/* Ornamental frame */
.border-ornamental {
  border: 3px solid #0D0D0D;
  outline: 1px solid #0D0D0D;
  outline-offset: 4px;
}

/* Dotted folk border */
.border-folk {
  border: 2px dashed #0D0D0D;
}
```

### Iconography

Icons should be hand-drawn or woodcut-style:

- **Line weight:** 2-3px minimum
- **Style:** Slightly irregular, organic curves
- **Detail level:** Medium — recognizable but not photorealistic
- **Fill:** Prefer outline over solid fill
- **Color:** Monochrome (ink-black) or two-tone

## Layout & Composition

### Grid System

Cordel layouts embrace both order and organic flow:

**Traditional Folheto Layout:**
```
┌─────────────────────────┐
│      HEADER BANNER      │
│   (Title & Author)      │
├─────────────────────────┤
│                         │
│   ILLUSTRATION ZONE     │
│   (Xilogravura art)     │
│                         │
├─────────────────────────┤
│                         │
│   VERSE BLOCK           │
│   (Poetry stanzas)      │
│                         │
│                         │
├─────────────────────────┤
│      FOOTER             │
│   (Credits, price)      │
└─────────────────────────┘
```

**Modern Adaptation:**
- Single column for narrative content (800px max-width)
- Asymmetric layouts for editorial drama
- Generous whitespace — let content breathe
- Full-width imagery with text overlays

### Spacing Scale

Based on the 8px grid, reflecting cordel's handmade proportions:

```
4px   - micro (tight spacing)
8px   - xs (inline elements)
16px  - sm (compact sections)
24px  - md (standard padding)
32px  - lg (section gaps)
48px  - xl (major sections)
64px  - 2xl (page margins)
96px  - 3xl (hero spacing)
```

### Composition Principles

1. **Center-weighted** — Traditional cordel places focus dead center
2. **Symmetrical balance** — Mirrors the formal quality of woodcut frames
3. **Layered depth** — Stack elements like printed layers
4. **Edge tension** — Content pushes to borders, creating energy

## Elevation & Depth

Cordel uses flat printing, so depth comes from **contrast and layering**, not shadows:

### Depth Layers

| Layer | Style |
|-------|-------|
| Background | `surface` (#F5E6D3) |
| Content surface | `surface-warm` (#EDD9BC) with 2px ink border |
| Elevated element | Offset by 4px with solid shadow |
| Pinned element | Offset by 8px, stronger border |

### Shadow Style

Instead of soft shadows, use **hard offset shadows** mimicking print registration:

```css
.shadow-cordel-sm {
  box-shadow: 2px 2px 0px #0D0D0D;
}

.shadow-cordel-md {
  box-shadow: 4px 4px 0px #0D0D0D;
}

.shadow-cordel-lg {
  box-shadow: 6px 6px 0px #0D0D0D;
}

.shadow-cordel-hover {
  box-shadow: 2px 2px 0px #C41E3A;
}
```

## Shapes

### Corner Radius

Cordel embraces **sharp angles** — the aesthetic of carved wood and cut paper:

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Primary shape — cards, buttons, images |
| `sm` | 2px | Subtle softening for inputs |
| `md` | 4px | Rare use — specific components only |

### Shape Language

- **Rectangles** dominate — folheto format, portrait orientation
- **Angular cuts** — diagonals suggest knife/carving marks
- **Heart shapes** — romantic motifs, decorative elements
- **Organic curves** — reserved for illustrative elements only

## Component Examples

### Button

```
┌─────────────────────────┐
│     FAÇA PARTE          │
└─────────────────────────┘

Style: Ink-black fill, white text, 2px border
Typography: Label LG, uppercase
Hover: Red fill (#C41E3A)
```

### Card (Folheto Style)

```
╔═══════════════════════════╗
║                           ║
║    ┌─────────────────┐    ║
║    │                 │    ║
║    │  [ILLUSTRATION] │    ║
║    │                 │    ║
║    └─────────────────┘    ║
║                           ║
║    TÍTULO DO CORDEL       ║
║    ─────────────────      ║
║    Nome do Cordelista     ║
║                           ║
╚═══════════════════════════╝

Style: Aged paper background, 2px solid border
       Hard offset shadow (4px)
Typography: Display MD for title, Body SM for author
```

### Navigation

```
┌─────────────────────────────────────────┐
│  ☰  CORDEL DESIGN SYSTEM               │
│                                          │
│  INÍCIO  │  HISTÓRIA  │  GALERIA  │  MAIS │
└─────────────────────────────────────────┘

Style: Dark surface background, white text
Active: Red underline (#C41E3A)
Typography: Label LG, uppercase
```

### Verse Block (Poetry)

```
┌─────────────────────────────────────────┐
│                                          │
│         Inicialmente peço               │
│       Dos Céus auxílios divinos,        │
│      A inspiração mais fértil,          │
│        Os versos mais genuínos          │
│     Para compor um poema                │
│      Da Vida de Afonso Arinos.          │
│                                          │
└─────────────────────────────────────────┘

Style: Warm background, centered text, 2px border
Typography: Poetry (18px, 1.8 line-height)
```

### Quote Block

```
║  "A literatura de cordel é uma das    ║
║   principais manifestações artísticas  ║
║   brasileiras..."                      ║
║                                        ║
║                    — IPHAN, 2018       ║

Style: Left border 4px red, aged background
Typography: Body LG, italic
```

### Header Banner

```
╔═══════════════════════════════════════╗
║                                       ║
║      LITERATURA DE CORDEL             ║
║      ─────────────────────            ║
║      Do Sertão à Sala de Aula         ║
║                                       ║
╚═══════════════════════════════════════╝

Style: Dark surface, white text, bottom red accent
Typography: Display LG for title, Body MD for subtitle
```

### Badge/Tag

```
┌──────────────┐
│  NORDESTE    │
└──────────────┘

Style: Ink-black fill, white text
Typography: Label SM, uppercase
Variants: accent-red, accent-green, accent-yellow
```

### Input Field

```
┌─────────────────────────────────────┐
│  Busque no cordel...                │
└─────────────────────────────────────┘

Style: Aged paper background, 2px ink border
Focus: Black border, no outline
Typography: Body MD
```

## Do's and Don'ts

### Do ✓

- **Use high contrast** — Black on cream/white for readability
- **Embrace asymmetry** — Let layouts feel hand-placed
- **Add texture** — Paper grain, ink variation, subtle noise
- **Tell stories** — Every element should have narrative purpose
- **Use traditional motifs** — Cacti, roosters, hearts, stars
- **Maintain warmth** — Avoid cold blues and sterile whites
- **Celebrate imperfection** — Slightly rough edges feel authentic
- **Number your stanzas** — Tradition matters

### Don't ✗

- **Don't over-polish** — Sterile perfection kills the cordel spirit
- **Don't use gradients** — Keep it flat, like print
- **Don't add drop shadows** — Use hard offset shadows instead
- **Don't use rounded corners liberally** — Sharp edges define the aesthetic
- **Don't use cold color palettes** — Stay warm, stay sertão
- **Don't forget the poetry** — Text is as important as imagery
- **Don't use decorative fonts excessively** — Reserve for headlines
- **Don't ignore accessibility** — High contrast aids readability

## Cultural Context

### Historical Roots

- **Origins:** Portugal (papel volante), arrived Brazil 18th century
- **Golden Age:** 1920s-1960s, peak of cordel production
- **Decline:** 1960s-70s (radio, TV competition)
- **Revival:** 1970s-present (cultural recognition, academic study)
- **Heritage Status:** Recognized as Brazilian Cultural Heritage (IPHAN, 2018)

### Key Figures

- **Leandro Gomes de Barros** (1865-1918) — "Prince of Cordel"
- **José Francisco Borges (J. Borges)** (1935-2024) — Master woodcut artist
- **Gilvan Samico** (1928-2013) — Refined woodcut aesthetic
- **Patativa do Assaré** (1909-2002) — Voice of the people
- **Ariano Suassuna** (1927-2014) — Movimento Armorial founder

### Thematic Elements

Cordel stories typically explore:
- **Love and romance** — Often tragic or impossible
- **Religious devotion** — Saints, miracles, divine justice
- **Social commentary** — Poverty, inequality, politics
- **Historical events** — Wars, rebellions, famous figures
- **Supernatural tales** — Ghosts, demons, enchanted beings
- **Daily life** — Work, family, community
- **Animals and nature** — Sertão wildlife and landscapes

## References

### Source Material

This design system was researched using:
- Wikimedia Commons: Cordel literature in Brazil collection
- Getty Research Institute: Brazilian cordel literature collection (2000+ pamphlets)
- Library of Congress: Brazil Cordel Literature Web Archive
- Thomas Fisher Rare Book Library: Collection of literatura de cordel
- Flickr: Gabinete de Curiosidades xilogravura album
- Internet Archive: Literatura de Cordel digitized materials
- Mariposa Arts: J. Borges woodcut collection

### Recommended Fonts

- **Eldes Cordel** — https://www.eldes.com/en/fonts/eldes-cordel
- **Playfair Display** — https://fonts.google.com/specimen/Playfair+Display
- **Crimson Text** — https://fonts.google.com/specimen/Crimson+Text
- **Source Sans Pro** — https://fonts.google.com/specimen/Source+Sans+Pro

### Further Reading

- Slater, Candace. *Stories on a String: The Brazilian Literatura de Cordel*
- Enciclopédia Nordeste: Xilogravura de Cordel
- IPHAN: Literatura de Cordel — Patrimônio Cultural Imaterial
- Academia Brasileira de Literatura de Cordel (ABLC)

---

*"A madeira pode ser gasta, mas a memória do traço permanece eterna no papel."*
*"Wood may wear away, but the memory of the stroke remains eternal on paper."*
