import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,r as a,s as o}from"./blocks-DsER1A51.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Overview.stories-BgNdNsbr.js";function h(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`foundations`,children:`Foundations`}),`
`,(0,_.jsxs)(t.p,{children:[`Foundations are the decisions every component inherits: color, type,
spacing, radius, elevation, cursors, and the breakpoints layouts respond
to. They live in `,(0,_.jsx)(t.strong,{children:`one file`}),` — `,(0,_.jsx)(t.code,{children:`src/tokens.css`}),` — as CSS custom
properties.`]}),`
`,(0,_.jsxs)(t.p,{children:[`There is no JavaScript theme object and no `,(0,_.jsx)(t.code,{children:`ThemeProvider`}),` that owns
values. A token is a CSS variable, which means the platform already knows
how to scope it, cascade it, inherit it and override it. Everything on
this page follows from that.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`tokens.css`}),` is itself generated — see `,(0,_.jsx)(t.a,{href:`#where-the-values-come-from`,children:`Where the values come
from`}),` — but nothing downstream of it is.
`,(0,_.jsx)(t.strong,{children:`You`}),` consume a plain stylesheet with no build step of your own.`]}),`
`,(0,_.jsx)(t.h2,{id:`the-three-layers`,children:`The three layers`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Layer`}),(0,_.jsx)(t.th,{children:`Where`}),(0,_.jsx)(t.th,{children:`Example`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Raw value`}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`:root`}),` / `,(0,_.jsx)(t.code,{children:`.dark`}),` in `,(0,_.jsx)(t.code,{children:`tokens.css`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--color-background-brand-bold: oklch(51.1% 0.262 276.966)`})})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Derived value`}),(0,_.jsxs)(t.td,{children:[`the `,(0,_.jsx)(t.code,{children:`*`}),` block in `,(0,_.jsx)(t.code,{children:`tokens.css`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`--radius-control: max(…)`})})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Usage`}),(0,_.jsxs)(t.td,{children:[`a component's `,(0,_.jsx)(t.code,{children:`.module.css`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`background: var(--color-background-brand-bold)`})})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Components only ever read the variable. That is what makes a rebrand a
change to one file, and what keeps theme conditionals out of component CSS
entirely — the value behind `,(0,_.jsx)(t.code,{children:`var(--color-background-brand-bold)`}),` changes, the rule does not.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The derived layer is on `,(0,_.jsx)(t.code,{children:`*`}),` rather than `,(0,_.jsx)(t.code,{children:`:root`}),` on purpose: a custom
property that reads another one resolves where it is `,(0,_.jsx)(t.em,{children:`declared`}),`, so
putting these at the root would freeze them there and a `,(0,_.jsx)(t.code,{children:`Theme`}),` further
down the tree could not move them.`]}),`
`,(0,_.jsx)(t.h2,{id:`where-the-values-come-from`,children:`Where the values come from`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`tokens.css`}),` is not written by hand. The source is a set of JSON files in
the `,(0,_.jsx)(t.a,{href:`https://tr.designtokens.org/format/`,rel:`nofollow`,children:`W3C design-token format`}),`, and a
generator turns them into the stylesheet, the `,(0,_.jsx)(t.code,{children:`Theme`}),` component's list of
palettes, the swatches on the `,(0,_.jsx)(t.strong,{children:`Color`}),` page, and an export for design
tools — four artefacts that used to be four chances to disagree with each
other.`]}),`
`,(0,_.jsx)(t.p,{children:`Two things follow from that, and both are visible on other pages here.`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Nothing semantic holds a literal.`}),` In the source,
`,(0,_.jsx)(t.code,{children:`color-background-brand-bold`}),` is `,(0,_.jsx)(t.code,{children:`{accent.solid}`}),` and `,(0,_.jsx)(t.code,{children:`color-text`}),` is
`,(0,_.jsx)(t.code,{children:`{gray.950}`}),` — references, not colours. Swapping a ramp moves everything downstream of it in one edit,
which is what makes the 17 accents and 9 grays on this page a
three-line change rather than a rewrite.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`The contrast numbers are measured, not claimed.`}),` For each of the 17
accents the generator converts the ramp through OKLCH → sRGB → relative
luminance, computes the contrast of each candidate step against a white
and a black label, and takes the first that clears 4.5:1. The focus ring
is a separate measurement against the page at 3:1. The lowest passing
accent in the current set sits at `,(0,_.jsx)(t.strong,{children:`4.56:1`}),` — close enough to the floor
that guessing would have missed it.`]}),`
`,(0,_.jsxs)(t.p,{children:[`Edit a ramp so that no step can carry a readable label and the build
stops with the hue named. The accessibility claims on the
`,(0,_.jsx)(t.a,{href:`?path=/docs/foundations-colors--docs`,children:`Color`}),` page are therefore checks,
not documentation.`]}),`
`,(0,_.jsx)(t.h2,{id:`the-pages`,children:`The pages`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-colors--docs`,children:`Color`})}),` — semantic tokens, the
contrast measurements, and where every value comes from.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-dark-mode--docs`,children:`Dark mode`})}),` — how the two
modes are declared and switched.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-typography--docs`,children:`Typography`})}),` — the
role-based type scale, and the system font stack behind it.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-spacing--docs`,children:`Spacing`})}),` — six roles,
one value each.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-breakpoints--docs`,children:`Breakpoints`})}),` — the
responsive range, and the kit's lack of opinion about it.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-radius--docs`,children:`Radius`})}),` — four steps off one
base, and what happens at the extremes.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-shadows--docs`,children:`Shadows`})}),` — elevation, and why
dark mode needs its own alphas.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-focus--docs`,children:`Focus`})}),` — one ring, two
offsets, and when to draw it inside.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-motion--docs`,children:`Motion`})}),` — three transition
durations, one spinner speed, and reduced motion in one place.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-layering--docs`,children:`Layering`})}),` — four layers,
and why every overlay shares one.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-cursors--docs`,children:`Cursors`})}),` — two tokens and one
contested convention.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`theming`,children:`Theming`}),`
`,(0,_.jsx)(t.p,{children:`Overriding tokens globally is just CSS — redeclare them after Zweihänder's
stylesheet loads:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-css`,children:`:root {
  --radius: 1rem;
  --color-background-brand-bold: oklch(0.55 0.2 264);
}
`})}),`
`,(0,_.jsxs)(t.p,{children:[`For anything narrower than the whole document, use `,(0,_.jsx)(t.code,{children:`Theme`}),`. It is a thin
wrapper that applies an appearance class and writes token overrides as
inline custom properties on one element, so everything inside it resolves
against those values.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { Theme } from 'zweihander/theme'

<Theme accentColor="violet" grayColor="slate" appearance="dark" radius="full-rounded">
  <Button>Inside a violet, slate, dark, rounder scope</Button>
</Theme>
`})}),`
`,(0,_.jsx)(t.p,{children:`Four settings, each independent:`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`accentColor`})}),(0,_.jsxs)(t.td,{children:[`17 hues — drives the brand tokens (`,(0,_.jsx)(t.code,{children:`--color-background-brand-bold`}),`, `,(0,_.jsx)(t.code,{children:`--color-text-brand`}),`, `,(0,_.jsx)(t.code,{children:`--color-icon-brand`}),`) and `,(0,_.jsx)(t.code,{children:`--color-border-focused`})]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`grayColor`})}),(0,_.jsx)(t.td,{children:`9 neutral ramps — drives backgrounds, text, borders`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`appearance`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`light`}),`, `,(0,_.jsx)(t.code,{children:`dark`}),`, `,(0,_.jsx)(t.code,{children:`inherit`})]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`radius`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`sharp`}),`, `,(0,_.jsx)(t.code,{children:`rounded`}),`, `,(0,_.jsx)(t.code,{children:`full-rounded`})]})]})]})]}),`
`,(0,_.jsx)(t.h3,{id:`accent-color`,children:`Accent color`}),`
`,(0,_.jsx)(t.p,{children:`The brand hue. Seventeen, all of them measured: the solid step and the
label colour are chosen per hue so every accent clears 4.5:1 for its own
label, which is why the warm hues below carry dark labels and the cool
ones carry white. The focus ring uses a step darker than the fill, because
the lighter solids miss the 3:1 a focus indicator needs.`}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`gray-color`,children:`Gray color`}),`
`,(0,_.jsx)(t.p,{children:`The neutral ramp behind surfaces, text, borders and neutral fills. The
differences are subtle and cumulative; they read most clearly in dark
mode, which is how they are shown here.`}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h3,{id:`radius`,children:`Radius`}),`
`,(0,_.jsxs)(t.p,{children:[`Covered on its own page, including why `,(0,_.jsx)(t.code,{children:`full`}),` pills a button but not a
text field: `,(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.a,{href:`?path=/docs/foundations-radius--docs`,children:`Radius`})}),`.`]}),`
`,(0,_.jsx)(t.h3,{id:`appearance`,children:`Appearance`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`appearance`}),` takes `,(0,_.jsx)(t.code,{children:`light`}),`, `,(0,_.jsx)(t.code,{children:`dark`}),`, or `,(0,_.jsx)(t.code,{children:`inherit`}),` (the default, which
leaves the surrounding mode alone).`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`token-overrides`,children:`Token overrides`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`tokens`}),` takes any custom property, with or without the `,(0,_.jsx)(t.code,{children:`--`}),` prefix. It is
not limited to tokens Zweihänder defines — the component writes whatever
you pass onto the element, so a token your own components read works the
same way.`]}),`
`,(0,_.jsx)(a,{of:p}),`
`,(0,_.jsxs)(t.p,{children:[`Overrides cascade, so a nested `,(0,_.jsx)(t.code,{children:`Theme`}),` inherits what it does not restate.
Because they are inline styles they also beat any stylesheet rule, which
is what makes a scoped override reliable — and what makes `,(0,_.jsx)(t.code,{children:`Theme`}),` the
wrong tool for setting global defaults. Use CSS for those.`]}),`
`,(0,_.jsx)(t.h3,{id:`nesting`,children:`Nesting`}),`
`,(0,_.jsx)(t.p,{children:`Scopes nest in either direction: a dark panel on a light page, or a light
island inside a dark one.`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsxs)(t.p,{children:[`The light island works because `,(0,_.jsx)(t.code,{children:`tokens.css`}),` declares the light values on
`,(0,_.jsx)(t.code,{children:`:root, .light`}),`, not on `,(0,_.jsx)(t.code,{children:`:root`}),` alone. `,(0,_.jsx)(t.code,{children:`.dark`}),` is declared afterwards at
equal specificity, so the nearer scope's class is what an element inside
it resolves against.`]}),`
`,(0,_.jsxs)(t.p,{children:[`An `,(0,_.jsx)(t.code,{children:`accentColor`}),` or `,(0,_.jsx)(t.code,{children:`grayColor`}),` inside a nested scope follows the same
rule. Each appearance sets two switches, `,(0,_.jsx)(t.code,{children:`--use-light`}),` and `,(0,_.jsx)(t.code,{children:`--use-dark`}),`,
and the palette scopes pick their light or dark values through them, so
the nearest appearance wins at any depth, on the same element too.`]}),`
`,(0,_.jsx)(a,{of:s}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`One caveat.`}),` If your own CSS branches on theme with a descendant
selector (`,(0,_.jsx)(t.code,{children:`.dark .thing { … }`}),`), that selector still matches inside a
light island nested in a dark ancestor, and will style it as dark.
Zweihänder's own CSS never branches on theme, so it is unaffected. Read
the tokens instead of matching on `,(0,_.jsx)(t.code,{children:`.dark`}),` and the problem does not arise.`]}),`
`,(0,_.jsx)(t.h2,{id:`installing`,children:`Installing`}),`
`,(0,_.jsxs)(t.p,{children:[`Both distribution paths carry the same tokens. Copy-source drops the
component's own source into your repo and merges these values into your
stylesheet; the npm package ships them as `,(0,_.jsx)(t.code,{children:`zweihander/tokens.css`}),`, which
you import after your base stylesheet.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The exact commands for either are in the
`,(0,_.jsx)(t.a,{href:`https://github.com/nguucode/zweihander`,rel:`nofollow`,children:`repo README`}),`.`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),c()})))()}v();export{g as default};