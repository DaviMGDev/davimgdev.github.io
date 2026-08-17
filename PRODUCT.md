# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, served with equal priority (confirmed):

- **Recruiters and hiring managers** evaluating Davi for freelance contracts, internships, and full-time roles — remote or hybrid. Situation: they arrive from a resume, link, or application, spend minutes judging credibility, skills, and fit, and act by reaching out or moving on.
- **Freelance clients** deciding whether Davi can deliver a web or AI/automation project. Situation: they arrive curious, scan for proof of capability and current relevance, and act by contacting.

Secondary audience: peers and curious developers who land on the page from GitHub or social links.

## Product Purpose

A single-page portfolio that establishes Davi Macêdo Gomes as a credible full-stack developer + AI engineer, presents real projects and experience as evidence, and converts a visit into contact (email, GitHub, LinkedIn). Success means a qualified visitor decides to reach out — and every claim on the page survives their scrutiny.

## Positioning

The portfolio is a first-person artifact, not a template: real projects with real repositories, a real Linux/agent-tooling background, and a hand-made pixel portrait that no competitor can truthfully copy. Its meaningfully different mechanism: **the page itself is proof** — built as vanilla HTML/CSS/JS with a bespoke design system, it demonstrates the frontend craft the site lists, while the projects demonstrate the backend and AI depth. It does not compete with agency sites; it competes with the reader's doubt.

## Operating Context

- Freelance developer (< 1 year experience), pursuing B.Sc. Computer Engineering at UEFS (Feira de Santana, Bahia, Brasil), working remote/hybrid.
- The site is maintained by Davi alone via git, deployed to GitHub Pages (`davimgdev.github.io`), and is a link he sends in applications and outreach.
- Content canon lives in `PORTFOLIO.md`; the page (index.html) is generated/kept in sync from that truth.
- Portuguese is the default language with an EN/PT toggle (confirmed in git history); theme has three modes — dark default, light, and auto (follows system).
- Visitors arrive on desktop and mobile; the layout must hold up on both.

## Capabilities and Constraints

- **Stack as built:** static single-page site, zero frameworks, zero build steps — one `index.html` (vanilla HTML/CSS/JS with inline styles and scripts). Hosted on GitHub Pages; no CI build pipeline.
- **Content:** Identity header, About, Tech Stack (carousel), Projects (cards with one featured), Education, Languages & Strengths, Say Hi / contact, and a closing quote — plus a contact modal. Mobile navigation is a hamburger + fullscreen menu.
- **i18n:** full EN/PT copy switch, Portuguese default.
- **Theming:** dark-first, with explicit light and auto (system-following) modes.
- **Accessibility implemented:** skip-to-content link, aria-labels on icon-only controls, keyboard focus outline, `prefers-color-scheme` support, `color-scheme` meta.
- **Assets on hand:** `davi_pixel_avatar.png` (8-bit portrait), four project screenshots (`assets/*.webp`), inline SVG favicon, Google Fonts (Press Start 2P, VT323, Silkscreen).
- **Explicitly undecided:** whether the pixel-art identity is a binding personal brand. User: "not sure yet" — future redesign/rebrand work must check this before treating the pixel system as either sacred or disposable.
- **Documentation:** `DESIGN.md` records the incumbent visual system ("Davi Pixel Avatar Design System"); `LAYOUT.txt` describes the current page structure; `index.is` is an earlier layout spec, not the shipped source.

## Brand Commitments

- **Name:** Davi Macêdo Gomes (monogram "DMG" used as identity mark).
- **Titles:** "Full-Stack Developer + AI Engineer"; location "Remote / Feira de Santana, BA, Brasil".
- **Real identity:** the 8-bit pixel portrait (`davi_pixel_avatar.png`) is a genuine, distinctive asset; its role as a binding brand is **undecided** (see Capabilities and Constraints).
- **Real contact channels:** email `dev.davi.macedo.gomes@gmail.com`, GitHub `DaviMGDev`, LinkedIn `in/dav1-maced0-g0mes-dev`.
- Voice is factual and slightly playful (Linux enthusiast, "The best way to predict the future is to build it."). Content language: Brazilian Portuguese native; English conversational — site copy exists in both.

## Evidence on Hand

- `PORTFOLIO.md` — canonical, current content (about, stack table, projects, experience, education, strengths).
- Four real, linkable projects: RouteHub (bus transportation platform), my-agent (Go LLM agent framework), unipm (universal package manager), denteclean (dental clinic landing page) — each with screenshots in `assets/` and live GitHub links.
- Real education and activity facts: B.Sc. Computer Engineering at UEFS 2023–2029, IoT Certificate, Programming Marathon participant.
- **Absences (must not fabricate):** no testimonials, no press mentions, no client logos, no case-study metrics, no pricing, no employment history beyond what PORTFOLIO.md states.

## Product Principles

1. **Proof over claims** — every assertion traces to real evidence: a repository, a screenshot, a credential, or a documented project.
2. **One page, two decisions** — recruiters and clients must both reach "this person is credible → contact" without either audience's needs diluting the other.
3. **Maintainable by one person, forever** — no build steps, no fragile dependencies; new projects should ship by editing content, not architecture.
4. **The medium is evidence** — because vanilla frontend is a listed skill, the page itself must stay current, fast, accessible, and well-crafted as living proof.
5. **Honest scope** — the site reflects real work and experiments as they exist; nothing invented, nothing oversold.

## Accessibility & Inclusion

No product-specific accessibility standard was established beyond what is implemented (skip link, aria-labels, keyboard focus, system-theme support). The audience is the general public including hiring managers and clients; keep WCAG-minded contrast and keyboard operability as the baseline.