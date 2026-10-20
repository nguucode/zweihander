# Reference: pattern

Use for `src/components/patterns/**`. A pattern is a section composed of several components (the "organisms" tier), for example PageHeading, AppShell, FormLayouts. The cycle is the same as for a component, differing only in the points below.

## How it differs from a component

| | Component | Pattern |
|---|---|---|
| Behaviour | From Base UI, per APG | No behaviour of its own. Every interaction comes from the components inside |
| MDX | Three tabs Overview / Specs / Guidelines ([components.md](../components.md), section 1) | Single page, no tabs: one section per variant with a `<Canvas>`, then Props / Layout / Accessibility. Add the `npx shadcn add` line at the top |
| A11y | Keyboard, role, state | Landmarks (`header`, `nav`, `main`), heading order, focus order when the layout changes, reflow at 320px |
| API | Flat props | Mostly slots taking nodes: `actions`, `meta`, `tabs`, `breadcrumbs`. A pattern owns no data |
| Test | One interactive `play` per Accessibility sentence | Structure (role, landmark, heading level), layout at breakpoints, and hard content: empty, very long, error |
| Release | npm `exports` and registry | Registry only. Do not add to `package.json#exports` |
| Status | `experimental` → `beta` → `stable` | `experimental` → `stable` |

## Spec

If the pattern is inspired by a source (Tailwind UI Application UI, uiguideline…), name the source at the top of the MDX. The `## Differences from the spec` section is only needed when there is a specific spec source.

`## Layout` states the breakpoints, what stacks, what hides, and why. This is the part most likely to drift between code and docs.

## Code

- Compose only existing Zweihänder components. If a piece of UI is missing, build the component first, through the component cycle, then use it in the pattern.
- Slots take `ReactNode` and render it as is. Do not wrap or reorder what the user passes in.
- `registryDependencies` declares every component inside. `registry:check` catches it if one is missing.

## Test

- Check structure by role: `getByRole('heading', { level: 1 })`, `getByRole('navigation', { name: 'Breadcrumb' })`.
- Check layout with real sizes (`getBoundingClientRect`) or computed style, not class names.
- Each pattern has at least one story with harsh content: a very long string with no spaces, an empty list, more actions than fit.

## Breaking

Renaming or removing a slot, changing a default landmark or heading level, changing DOM structure that copy-source users may have edited. Because patterns ship as copy-source, the changeset must state exactly which code users need to copy again.
