# Component conventions

Conventions for every change under `src/components/**` (component or pattern, new or enhanced). This is not a separate process: the only process is project-flow ([SKILL.md](SKILL.md)). This file says what the flow's steps must achieve when they touch a component. It used to be the `zw-build` skill.

Each section below hooks into a flow step and ends with a **gate**. The build step counts as done only when gates 0 to 3 are green; gates 4 and 5 are checked at ship.

| Section | Hooks into flow step |
|---|---|
| 0. Classify, 1. Spec | `flow idea`: grill and spec. `flow fix`, `flow change`, ticket thread: start of the build step, before editing code |
| 2. Code, 3. Test | Build step (`implement`, `tdd`, `diagnosing-bugs`) |
| 4. Release | Ship (changeset) |
| 5. Status, Wrap-up | Ship and after merge |

A breaking change found midway sends you back to section 1 (fix `argTypes` and the MDX first), then the code.

Before starting, read the reference file for the right kind:

- Component (`src/components/<category>/`): [components/component.md](components/component.md)
- Pattern (`src/components/patterns/`): [components/pattern.md](components/pattern.md)
- Example walking every section with Button: [components/example-button.md](components/example-button.md)

The source decisions live in the vault (Definition of done, API conventions, Figma's role): `/Volumes/KAFKA/Vault/10-projects/zweihander/v1-plan/issues/04-definition-of-done.md`, `05-api-conventions.md`, `09-figma-role.md`. This file is how those decisions are carried out. If this file and the vault disagree, the vault is right: tell the user and fix this file.

## 0. Classify

Answer three questions before opening the editor:

1. **Component or pattern?** A pattern is a section composed of several components, with no behaviour of its own.
2. **New or enhance?**
   - *New:* is there a source spec on uiguideline.com? Is it in the 1.0 scope (`zweihander-component-list.md`)? Out of scope can still be built, but it enters with status `experimental`.
   - *Enhance:* is the change breaking? Check the breaking table in the reference file. Breaking starts at section 1. Only a token, color or spacing change goes straight to section 2.
3. **Does it need Figma first?** A visual change (new component, new variant, changed anatomy) goes Figma → user approves → code. Tokens always go from code to Figma, never the other way.

**Gate:** you can write one sentence of the form "<Name> — <new|enhance> — <breaking|non-breaking> — <target status>".

## 1. Spec

The spec is the `<Name>.mdx` file next to the component. Do not write the spec anywhere else. Model pages: `src/components/buttons/Button.mdx` and `ToggleButton.mdx`; when in doubt, copy their structure.

A component page has three tabs, after Material 3, built with the docs blocks in `.storybook/blocks/` (demo: Storybook *Internal / Docs blocks*):

```mdx
import { Meta, Canvas, Story, ArgTypes } from '@storybook/addon-docs/blocks'
import { Anatomy, DocTab, DocTabs, DoDont, SpecTable, States, Status } from '../../../.storybook/blocks'
import * as NameStories from './Name.stories'

<Meta of={NameStories} />

# Name

<DocTabs>
<DocTab value="overview">…</DocTab>
<DocTab value="specs">…</DocTab>
<DocTab value="guidelines">…</DocTab>
</DocTabs>
```

| Tab | Required sections, in order |
|---|---|
| **Overview**: what the component is | A one-sentence description. `<Status of={NameStories} />` (reads the status tag in `meta.tags`). `<Canvas>` of the main story. `## Variants`: one "when to use" line per variant or appearance, with a canvas. `## Resources`: import, registry command, GitHub source, uiguideline spec, Base UI if any, Figma ("Not in the library yet" when there is none) |
| **Specs**: how the component is built | `## Anatomy` + `<Anatomy>`. `## Measurements`: one `<SpecTable>` per size. `## Color`: one `<SpecTable>` per variant. `## States` + `<States>` (enabled, hover, focus, pressed, disabled, plus loading/invalid/selected if any). `## API` + `<ArgTypes of={NameStories} />`. `### Differences from the spec` at the end, **only when it deviates** from uiguideline |
| **Guidelines**: how to use it right | `## When to use`, at least one `<DoDont>`. `## When not to use`: which component to use instead. `## Accessibility`: keyboard, role and state per APG |

Rules for each block:

- **Props live in `argTypes`.** Every public prop has a `description` in the story file's `meta.argTypes`. `<ArgTypes>` renders the API table from it, and the Playground props panel reads the same source via `npm run playground:manifest`. Do not hand-write a prop table in the MDX. Type and default are usually inferred by react-docgen; when it cannot read them, see [Hard cases](#hard-cases). Changed a story? Run `npm run playground:manifest` and commit `src/playground/manifest.json`.
- **Anatomy** renders the real component, not an image. The part list (`name`, `selector`, `description`) is exported from the story file as `anatomyParts` (added to `excludeStories`), with an `Anatomy` story tagged `!dev` whose `play` checks each selector matches exactly one distinct element. A part with no element of its own (a label that is a text node) gets wrapped in a `<span>` by the story.
- **SpecTable** names tokens only; values are read live from CSS. Use only semantic tokens or tier tokens (`--control-md`), never the component's internal variables (`--button-bg`): they do not resolve outside the component. When hover and pressed mix colors with `color-mix`, explain it in text under `<States>`.
- **DoDont** takes both sides from real stories. A "Don't" story is tagged `!dev` to hide it from the sidebar and the Playground; its tests still run.
- `npm run docs:check` goes red when a component page (`src/components/<category>/<Name>.mdx`, except patterns, templates and the Overview pages) has no `<DocTabs>`, is missing a tab or a section from the table above, mentions a token that does not exist, points to a story the stories file does not export (`<Canvas of={XStories.Gone} />`), or has a SpecTable row naming a token that the component's CSS (the `.module.css` file followed from the import in `<Name>.tsx`) does not read with `var()`.

Every component page uses the three tabs; the old long-page format is gone.

### Hard cases

Docs tickets have already worked their way around these; follow this instead of thinking it through again.

- **States of a static component** (Badge, Divider, Avatar, EmptyState: no hover, focus or pressed). `docs:check` still requires `## States`. Open with a sentence "X is not interactive: no hover, focus or pressed. Its states are …", then `<States>` shows the different display forms (Badge: count, over `maxCount`, zero, dot) or the states of an inner control if there is one (EmptyState's action button). Models: `Badge.mdx`, `Divider.mdx`, `EmptyState.mdx` (the action's states via `pseudo`). A component too wide for one `<States>` cell (Tabs, Pagination) gets a small story tagged `!dev` of its own for that cell, for example `Tabs.stories.tsx` `StatesUnderline`.
- **Anatomy of an overlay** (Menu, Modal, Popover, Tooltip, Toast: the popup renders through a portal into `<body>`). The `Anatomy` story cannot see the popup in `canvasElement`, and on the docs page the popup would cover the content. Render it "as a picture" with `Pictured` from `.storybook/blocks`: open already, `container` is an `inert` frame in the story so it does not trap focus; pass the component's `positioner` class so the popup sits in flow instead of positioned, and put the other props on the frame.

  ```tsx
  <Pictured positioner={styles.positioner}>
    {(container) => <Menu {...args} open isModal={false} container={container} />}
  </Pictured>
  ```

  The `Anatomy` story's `play` calls `const found = await expectAnatomy(canvasElement, anatomyParts)`: it waits for the selectors, goes red naming any selector that matches nothing, checks each part is a distinct element, then returns `Element[]` in `anatomyParts` order for further checks (for example `found[1]` is `role="dialog"`). Backticks in a part's `description` render as `<code>`. Write one sentence under `<Anatomy>` saying the popup on the tab is a picture, as `Popover.mdx` does. These two helpers reach main via #109; if #109 has not merged, merge main in after it merges.
- **A value with no token yet** (Divider at 1/2/4px thick: there is no border-width scale yet). `<SpecTable>` takes tokens only, so put a plain markdown table under `## Measurements`, with one sentence on why it is not a token. Model: `Divider.mdx`. Do not pair it with a near-enough token (`--space-1` for a hard-coded 4px): the table goes wrong when `--scaling` changes.
- **Props docgen cannot read.** react-docgen misses type and default for union-typed props (`isIconOnly` requires `aria-label`) and for props inherited from a wrapped component (ErrorState and SuccessState wrap EmptyState). Then declare **every** prop in `meta.argTypes`: `description`, `control`, `table.type.summary`, `table.defaultValue.summary`. Models: `Button.stories.tsx`, `ErrorState.stories.tsx`. Check the `<ArgTypes>` table and the Playground props panel by eye after `npm run playground:manifest`.
- **Do not put state in a URL param Storybook reads**: `path`, `id`, `viewMode`, `args`, `globals`, `full`, `panel`, `nav`, `shortcuts`, `addonPanel`, `tabs`, `tab`. `?tab=specs` makes Storybook hide the canvas and the page goes blank (#98). A docs block that needs state in the URL uses its own name, like `DocTabs.tsx`'s `?docTab=` (`npm run docs:check` goes red if DocTabs' `PARAM` clashes with a param Storybook reads; check a new block yourself), and verify with a full Storybook URL and a reload, because story tests do not run the URL code.

Breaking change: fix `argTypes` (and `### Differences from the spec` if any) **first**, then the code.

**Gate:** `npm run docs:check` is green; if it deviates from the spec there is a `### Differences from the spec`. Every sentence in `## Accessibility` is specific enough to write a `play` that checks it.

## 2. Code

- Follow the API conventions in the reference file: prop names, `variant`/`appearance`, `render` instead of `asChild`, no `forwardRef`.
- Tokens only (`var(--…)`), no hard-coded values for color, spacing, radius or font.
- A file with a hook or state: the first line is `'use client'`.
- Comments explain *why*, they do not restate the code.
- Update `registry.json`. The description **does not state counts** (do not write "four sizes"), because counts drift when the code changes.
- Component (not pattern): export in `package.json#exports`, entries in `vite.lib.config.ts` and `tsconfig.build.json`.
- Minimum hit area 44×44 under `pointer: coarse`, by extending the hit area, not enlarging the visible part.

**Gate:** these commands are all green.

```bash
npx tsc -b && npm run lint && npm run tokens:check && npm run registry:check
```

## 3. Test

Tests live in `<Name>.stories.tsx` and run through addon-vitest. Test behaviour, do not snapshot the DOM.

- A story for every variant, size and state: default, hover, active, focus-visible, disabled, loading/invalid if any, in both light and dark.
- **Every sentence in `## Accessibility` has at least one `play` checking it**, using `userEvent` for the keyboard.
- a11y runs in `error` mode. A story that must turn it off (for example a hand-written contrast story) sets `a11y: { test: 'off' }` with a comment giving the reason.
- Visual regression: each component has one representative story in `src/visual.test.tsx` (the story with the most variants and states), captured light and dark on Chromium and compared with the baseline in `src/__screenshots__/`. A new component adds a line to the `STORIES` table; the test `every component has a visual story` goes red if it is missing. When an image changes on purpose, add the `update screenshots` label to the PR: the Visual baselines workflow recaptures on CI Linux and commits. Do not update baselines on a Mac. When CI reports a diff, the actual and diff images are in the run's `visual-diffs` artifact.

**Gate:**

```bash
npx vitest --project storybook run
npx vitest --project visual run
```

The first command is green on all three browsers. The second only means something on CI, because the baselines are generated on Linux: on a Mac it reports a diff on every image. On a PR it is the required check `check`. A new machine needs `npx playwright install chromium firefox webkit` once; for a quick single-engine run add `--browser=chromium`.

## 4. Release

- Every PR that changes `src/` needs a changeset: `npx changeset`. A PR that only touches docs, tests or tooling uses `npx changeset --empty`.
- Bump level: before 1.0, breaking → `minor`, everything else → `patch`. After 1.0, follow SemVer. The table of what counts as breaking is in the reference file.
- Changeset text is written for library users: what changed, and how they must change their code. Write it in English, because it goes into the public `CHANGELOG.md`.
- Deprecate in two steps. First release: keep the old API, `console.warn` only when `import.meta.env.DEV`, noted in the changeset. Next release: remove it. No codemod until there are outside users.

**Gate:** `npx changeset status --since=origin/main` passes.

## 5. Status

Each story file carries exactly one status tag in `meta.tags`, next to `'autodocs'` if present. Filter by status with the tag filter in the sidebar.

| Status | Component | Pattern |
|---|---|---|
| `experimental` | Has a working story. API changes freely | Same as component |
| `beta` | Meets sections 1–4: all three MDX tabs, tests green, a11y `error` | Not used |
| `stable` | Beta, plus: green on Chromium/Firefox/WebKit, has a visual regression baseline, tried with VoiceOver + Safari (noted in the build log), one month without a breaking change | Meets sections 1–4, green on three browsers, has a visual regression baseline |
| `deprecated` | Has a replacement, noted in the MDX. Removed in the next release | Same as component |

Do not raise a status before the conditions are met. Do not write "tested with a screen reader" until it was actually done.

**Gate:** the tag matches the conditions above.

## Wrap-up

1. Add one line to `zweihander-build-log.md` in the vault: decisions, spec deviations, items waiting on the user's approval.
2. Update the card in `zweihander-kanban.md`.
3. If a token or a prop that exists in Figma changed: note the Figma sync in the project's `_context.md`.
4. Add one line to `/Volumes/KAFKA/Vault/_system/agent-log.md`, written after the last commit (the same line [SKILL.md](SKILL.md#vault) asks for, not written twice).

Checklist to paste into the PR description:

```
- [ ] Classify: <Name> — <new|enhance> — <breaking|non-breaking> — <status>
- [ ] MDX: component 3 tabs Overview / Specs / Guidelines, `docs:check` green, props in `argTypes`; pattern: variants / Props / Layout / Accessibility
- [ ] Code: tokens only, 'use client', registry (no counts), exports
- [ ] Story + play for each Accessibility sentence; a11y error
- [ ] tsc, lint, tokens:check, registry:check, vitest storybook (3 browsers), vitest visual (CI)
- [ ] Changeset (or --empty)
- [ ] Status tag
- [ ] Figma sync (if a token/prop changed)
- [ ] Vault: build-log, kanban, agent-log
```
