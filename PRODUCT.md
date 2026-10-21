# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Enterprise product teams in SaaS, ERP, CRM, fintech and accounting: product designers and front-end developers who install the kit (npm package or the copy-source registry at `/r/`) to build dense application UI. They work in Figma and React side by side, and they need the two to agree.

## Product Purpose

Zweihänder is a React UI kit documented in Storybook. It gives product teams components, patterns and templates for application UI that they can re-theme to their own product without forking. Success is a team shipping a data-heavy app screen from kit pieces, themed to their brand, with no accessibility errors and a Figma file that matches the code.

Current state: early stage (0.x), not production-ready, palettes are placeholders. 1.0 requires every component to meet the definition of done (including a Figma component set), a semver 1.x commitment, the two latest Chrome/Edge/Firefox/Safari (incl. iOS), and full keyboard use.

## Positioning

Four things together, none of which a neighbour (shadcn, Radix Themes, Carbon) offers in this combination:

- **Customization is the point.** One `<Theme>` scopes accent (17 hues), gray (9 ramps), radius preset, scaling, density and canvas to any subtree.
- **Measured tokens.** The token generator computes OKLCH → sRGB → WCAG contrast, picks readable steps itself, and fails the build rather than ship an unreadable one. Code is the token source; Figma variables are synced from it.
- **Enterprise density.** Default and Compact density across every component, an app shell (Top bar, Nav sidebar, App content), tables and Application UI rather than marketing blocks.
- **Cuts complexity.** Plain elements styled with CSS Modules, no CSS framework, flat props, Base UI only where focus/ARIA behaviour is hard.

## Operating Context

- Storybook is the reference (https://zweihander.ontheshore.biz/storybook/); every topic has a hand-written MDX page (Overview, Specs, Guidelines tabs).
- The Playground (`/playground/`) previews components, patterns and templates in device frames with a theme panel and copy-code.
- Figma file Zweihander-v0.7.0 mirrors the code: variables, text and effect styles, one page per component, patterns and templates.
- Component spec source is uiguideline.com Anatomy and Prop list; deviations are written down in the MDX.
- Atomic tiers: Foundations → Components → Patterns → Templates.

## Capabilities and Constraints

- About 45 components plus patterns (Top bar, Nav sidebar, App content) and templates (App shell, Projects); charts (Bar, Line, Pie, Sparkline) are experimental.
- Tokens live in `tokens/*.json` (W3C DTCG); never hand-edit generated files. Components read semantic tokens only, never primitives.
- Icons: Google Material Symbols Rounded, weight 600, through one internal module named by purpose; temporary until moonveilicons has artwork.
- API conventions: native HTML attribute names where they exist, uiguideline names otherwise; `variant` = meaning, `appearance` = style; `render` instead of `asChild`; flat props; components with an `md` size default to `md`.
- Undecided: brand and real palette (out of scope for 1.0); Code Connect (needs a higher Figma plan).

## Brand Commitments

- Name: Zweihänder (with the umlaut).
- Logo: 16×16 pixel sword mark (brand kit v0.3), blue body, white blade; `public/logo.svg`, `public/favicon.svg`.
- Docs and public copy are English. Voice cuts complexity: plain, technical, no hype.

## Evidence on Hand

- Live docs site and Storybook, the registry, the npm package `zweihander`.
- Research notes in `docs/research/` and the vault (spacing, box sizing, app shell surfaces, chart library, Application UI catalogue).
- No customers, testimonials, adoption numbers or benchmarks exist. Do not invent them.

## Product Principles

1. Code is the source of truth; Figma follows and must match.
2. Every value is a token, and every colour pairing is measured, not eyeballed.
3. Theming changes the whole kit from one place; a consumer should never need to override component CSS.
4. Density and data first: application screens are the main job, marketing surfaces are secondary.
5. Fewer moving parts beat more options; add a prop only when a real screen needs it.

## Accessibility & Inclusion

WCAG 2.2 AA. Storybook addon-a11y runs at `error` level; every component is fully keyboard usable; hit areas are at least 24px, 44×44 under `pointer: coarse`; dark mode and `prefers-reduced-motion` are supported. Accepted, documented exceptions: white labels on solid warm hues (Tag, Avatar) fall below 4.5:1 by the owner's decision.
