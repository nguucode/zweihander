# Example: Button through the cycle

Button (`src/components/buttons/`) is the model component. Below is each section applied to Button, pointing at the real files that meet the gate. When working on another component, compare against this file to see what "enough" looks like.

## 0. Classify

> Button — new (batch 0) — non-breaking — target `stable`

Source spec: [uiguideline.com/components/button](https://www.uiguideline.com/components/button). In the 1.0 scope (`zweihander-component-list.md`, Buttons section).

Example of a breaking enhance: `render` replacing `asChild`. The API conventions changed first (vault `05-api-conventions.md`), the MDX §Differences says "It replaced `asChild` in 0.8", and only then the code changed.

## 1. Spec: `Button.mdx`

Model page for the three-tab format (the component-docs pilot ticket).

- **Overview**: a one-sentence description, `<Status>`, the `Default` canvas, `## Variants` (the `Matrix` canvas plus a variant and appearance table, each row a real Button and "when to use"), the `Sizes`, `WithIcons`, `IconOnly` canvases, `## Resources`.
- **Specs**: `<Anatomy>` numbering Container, Start icon, Label, End icon (`anatomyParts` and the `Anatomy` story in `Button.stories.tsx`). `## Measurements`: `<SpecTable>` for `sm`, `md` and a shared table (focus ring, hit area). `## Color`: one table per variant, plus the focus ring. `## States`: enabled, hover, focus, pressed, disabled, loading; hover/pressed color mixing explained in text. `## API`: `<ArgTypes>`. `### Differences from the spec`: two sizes rather than four, `disabled` rather than `isDisabled`, adds `isIconOnly`, adds `render`, `accent` is inverted neutral, outlined/ghost primary use `--primary-text`.
- **Guidelines**: two `<DoDont>` pairs (one primary per view; loading instead of disabled while saving), `## When not to use` (navigation uses `href`, an on/off state uses Toggle Button), `## Accessibility`: every sentence is checkable, see the table in section 3.
- Props: every prop declared in `meta.argTypes` with `description`, type and default, because `ButtonProps` is a union so react-docgen cannot read it.

## 2. Code: `Button.tsx`, `Button.module.css`

- The `ButtonProps` type is a union. `isIconOnly: true` requires `aria-label`, so the a11y rule lives in the type itself.
- Behaviour comes from `@base-ui/react/button`. Only the `href`/`render` branch is split out to `useRender`, because Base UI would put `role="button"` on an `<a>`. A comment in the code explains why.
- CSS: each variant sets four variables (`--button-solid`, `--button-on-solid`, `--button-tone`, `--button-border`); the appearance decides which variable paints which part. The border always exists, only transparent when not needed, so switching appearance does not make the layout jump.
- Not met yet: missing `'use client'`. The registry description still says "four sizes".

## 3. Test: `Button.stories.tsx`

Every sentence in §Accessibility has a story that checks it:

| Sentence in §Accessibility | Story |
|---|---|
| Native button, `type="button"`, Enter and Space activate | `Default` |
| Icon `aria-hidden`, the name is the label only | `WithIcons` |
| Icon-only is square, has a name | `IconOnly` |
| Loading: `aria-busy`, still focusable, does not run the action | `Loading` |
| Disabled leaves the tab order | `Disabled` |
| Disabled or loading link: drops `href`, adds `aria-disabled` | `DisabledHref`, `DisabledRender` |
| `render` keeps the element's semantics | `Render` |
| Label 4.5:1 at rest, hover and active, 17 accents × 2 modes | `StateContrast` |

`StateContrast` is the model for a component with many color combinations. It reads the colors the browser has resolved and computes contrast in the test, so it checks the real CSS that ships. This story sets `a11y: { test: 'off' }` with a comment, because it does the contrast check itself.

Visual regression uses the `Matrix` story (light and dark, in `src/visual.test.tsx`). Not met yet: VoiceOver not tried.

## 4. Release

No changeset yet, because the repo has not installed Changesets. Once it has, the `render` change above would be written like this:

```md
---
'zweihander': minor
---

Button: `render` replaces `asChild`. Pass the element itself: `<Button render={<Link to="/settings" />}>`.
```

## 5. Status

Button currently meets `beta`: sections 1–4 as far as the repo allows. To reach `stable` it still needs one VoiceOver + Safari run, and one month without a breaking change.

```ts
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['beta'],
  // ...
} satisfies Meta<typeof Button>
```
