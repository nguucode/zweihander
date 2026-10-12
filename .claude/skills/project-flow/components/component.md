# Reference: component

Use for everything in `src/components/<category>/`, except `patterns/`.

## API conventions

Source: vault `v1-plan/issues/05-api-conventions.md` (decided by the user 2026-09-25). Summary:

- **Prop names.** HTML attributes keep their HTML names: `disabled`, `required`, `readOnly`, `name`, `type`… The rest follow uiguideline: `variant`, `appearance`, `size`, `startIcon`, `endIcon`, `isLoading`, `isFullWidth`, `validationState`, `helperText`, `label`. Booleans not in HTML use an `is`/`has` prefix.
- **`variant`** is color by meaning: primary, accent, secondary, destructive; the notification group uses info, success, warning, danger. **`appearance`** is style: contained, outlined, ghost; inputs use outlined, filled, underlined, unstyled.
- **Composition** uses the `render` prop, not `asChild`/`Slot`. No `forwardRef`, because React 19 takes `ref` as a prop.
- **Controlled.** A component wrapping a real input uses `value`/`defaultValue`/`onChange(event)`. A component built on Base UI uses Base UI's names: `onValueChange`, `onCheckedChange`, `onOpenChange`.
- **Structure.** Flat props (`options`, `items`), no compound components before 1.0.
- **Input errors.** `validationState` (default, success, error) plus `helperText`. On error there is `aria-invalid`.
- **Put a11y rules in the type** where possible. Example: `isIconOnly: true` requires `aria-label`, written as a union type (see `Button.tsx`).

## Behaviour

Behaviour comes from Base UI (`@base-ui/react/*`). Zweihänder adds the styling layer and decides the API. Do not rewrite focus management, roving tabindex or popover handling that Base UI already has. When Base UI gets the semantics wrong for your case (for example putting `role="button"` on an `<a>`), split the branch and comment the reason right there.

The `## Accessibility` section in the MDX comes from the matching [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) pattern: which key does what, which role and state, where focus goes. Write it as checkable sentences, one `play` per sentence.

## What counts as breaking

| Change | Breaking? | Bump before 1.0 |
|---|---|---|
| Remove or rename a prop; remove a value from a union (`variant`, `size`…) | Yes | minor |
| Change a prop's default value | Yes | minor |
| Change the rendered element or role (button ↔ a, add or remove a wrapper users may have styled) | Yes | minor |
| Rename a public class or CSS custom property (`--button-*`) | Yes | minor |
| A prop goes from optional to required | Yes | minor |
| Add an optional prop; add a new value to a union | No | patch |
| Change color, spacing or radius through tokens, API unchanged | No, but check visual regression | patch |
| Fix an a11y bug that changes keyboard behaviour | State it clearly in the changeset; treat as breaking if users may rely on the old behaviour | patch or minor |

After 1.0: breaking → major, additions → minor, fixes → patch.

## Status

Components use all four statuses: `experimental`, `beta`, `stable`, `deprecated`. The conditions for each level are in [COMPONENTS.md](../COMPONENTS.md), section 5.
