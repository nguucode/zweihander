import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./Colors.stories-DiYLdAvV.js";function m(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`colors`,children:`Colors`}),`
`,(0,g.jsxs)(t.p,{children:[`Every color in the system is a CSS custom property declared in
`,(0,g.jsx)(t.code,{children:`src/tokens.css`}),`, with a counterpart under the `,(0,g.jsx)(t.code,{children:`.dark`}),` class. There is no
separate dark palette file and no JS theme object — one stylesheet holds
both modes.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[`Read them with `,(0,g.jsx)(t.code,{children:`var()`})]}),` — `,(0,g.jsx)(t.code,{children:`background: var(--card)`}),`,
`,(0,g.jsx)(t.code,{children:`color: var(--muted-foreground)`}),`, `,(0,g.jsx)(t.code,{children:`border-color: var(--border)`}),`. Because
the variable changes rather than the rule, a component written this way
switches theme without a single conditional: there is no light branch and
no dark branch anywhere in the kit's CSS.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`The swatches below read their values out of the live document`}),`, so a
color shown here is the value the components actually get. The token
`,(0,g.jsx)(t.em,{children:`names`}),` are still listed by hand in `,(0,g.jsx)(t.code,{children:`Colors.stories.tsx`}),`, though — add a
token to `,(0,g.jsx)(t.code,{children:`tokens.css`}),` and it will not appear here until it is added there
too.`]}),`
`,(0,g.jsx)(t.h2,{id:`surfaces`,children:`Surfaces`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--background`}),` is the page. `,(0,g.jsx)(t.code,{children:`--card`}),` and `,(0,g.jsx)(t.code,{children:`--popover`}),` are surfaces that sit
a level above it — a card inset in the page, a menu floating over it. In
light mode the page is gray-50, a cool off-white, and card/popover are
white: a panel separates from the page by being lighter, so it needs a
border at most, not a shadow. In dark mode `,(0,g.jsx)(t.code,{children:`--background`}),` sits at the
darkest step and card/popover are lifted one step toward the viewer.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Each surface has a `,(0,g.jsx)(t.code,{children:`-foreground`}),` partner, and the pair is the contract:
put `,(0,g.jsx)(t.code,{children:`--card-foreground`}),` on `,(0,g.jsx)(t.code,{children:`--card`}),`, never `,(0,g.jsx)(t.code,{children:`--foreground`}),`, even where the
two happen to be equal today.`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`subtle-surfaces`,children:`Subtle surfaces`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--muted`}),` and `,(0,g.jsx)(t.code,{children:`--accent`}),` are the same value in both modes and differ only
in intent. `,(0,g.jsx)(t.code,{children:`--muted`}),` is for surfaces that recede — a disabled field's
fill, a table's zebra stripe — and is the only one of the two with a
foreground meant for `,(0,g.jsx)(t.em,{children:`long-form`}),` secondary text. `,(0,g.jsx)(t.code,{children:`--accent`}),` is for
surfaces that are reacting to the user: hover on a menu item, the
selected row in a list.`]}),`
`,(0,g.jsx)(t.p,{children:`They are interchangeable in appearance, so nothing breaks visually if you
swap them, and nothing tells you that you did. The distinction is the
whole point: when a brand color eventually replaces one of them, only the
intent that should change will change.`}),`
`,(0,g.jsx)(a,{of:s}),`
`,(0,g.jsx)(t.h2,{id:`solid-actions`,children:`Solid actions`}),`
`,(0,g.jsxs)(t.p,{children:[`Filled controls. `,(0,g.jsx)(t.code,{children:`--primary`}),` is the default button and `,(0,g.jsx)(t.strong,{children:`the brand hue`}),` —
blue out of the box, and the one token the
`,(0,g.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:(0,g.jsx)(t.code,{children:`accentColor`})}),` setting moves. It
lightens in dark mode rather than darkening, so `,(0,g.jsx)(t.code,{children:`--primary-foreground`}),`
inverts with it.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--destructive`}),` is a hue too, but a fixed one: it stays red whatever the
accent is. A status colour that follows the brand stops being a status —
if the accent is already red, distinguish destructive actions by wording
and placement, not by colour alone.`]}),`
`,(0,g.jsxs)(t.p,{children:[`A note on names: the token called `,(0,g.jsx)(t.code,{children:`--accent`}),` is `,(0,g.jsx)(t.strong,{children:`not`}),` the brand hue. It
is a subtle surface (hover, selected row). The brand hue is `,(0,g.jsx)(t.code,{children:`--primary`}),`.
The collision is unfortunate and predates this kit — the names come from
the token contract the registry is compatible with.`]}),`
`,(0,g.jsx)(a,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`lines-and-focus`,children:`Lines and focus`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--border`}),` is a divider or a container edge, `,(0,g.jsx)(t.code,{children:`--input`}),` is a form control's
edge, `,(0,g.jsx)(t.code,{children:`--ring`}),` is the focus indicator. None of them take a foreground —
they are only ever an outline color, never a fill behind text.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--border`}),` and `,(0,g.jsx)(t.code,{children:`--input`}),` are the same value in both modes and, like
muted/accent, are separated by intent rather than appearance. In dark mode
they stop being opaque neutrals and become white at 10% and 15% alpha
respectively, so an edge reads consistently whether it sits on
`,(0,g.jsx)(t.code,{children:`--background`}),` or on a lifted `,(0,g.jsx)(t.code,{children:`--card`}),`. That is the one place the palette
uses transparency.`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`dark-mode`,children:`Dark mode`}),`
`,(0,g.jsxs)(t.p,{children:[`Every token on this page has a counterpart under `,(0,g.jsx)(t.code,{children:`.dark`}),`, switched by a
class rather than a media query, and dark is not a mechanical inversion of
light — surfaces go `,(0,g.jsx)(t.em,{children:`up`}),` rather than down, and strong fills get lighter so
their foregrounds flip to dark text. The Light/Dark columns in the
contrast table below cover both.`]}),`
`,(0,g.jsxs)(t.p,{children:[`The mechanism, the three places an inversion would have gone wrong, and
how to follow the OS setting are on their own page:
`,(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.a,{href:`?path=/docs/foundations-dark-mode--docs`,children:`Dark mode`})}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`contrast`,children:`Contrast`}),`
`,(0,g.jsxs)(t.p,{children:[`Measured, not assumed — every pair below is computed from the OKLCH
values in `,(0,g.jsx)(t.code,{children:`tokens.css`}),`. WCAG AA wants 4.5:1 for body text and 3:1 for UI
component boundaries such as a focus ring.`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Pair`}),(0,g.jsx)(t.th,{children:`Light`}),(0,g.jsx)(t.th,{children:`Dark`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`background`}),` / `,(0,g.jsx)(t.code,{children:`foreground`})]}),(0,g.jsx)(t.td,{children:`19.28:1`}),(0,g.jsx)(t.td,{children:`19.28:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`card`}),` / `,(0,g.jsx)(t.code,{children:`card-foreground`})]}),(0,g.jsx)(t.td,{children:`20.13:1`}),(0,g.jsx)(t.td,{children:`17.00:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`popover`}),` / `,(0,g.jsx)(t.code,{children:`popover-foreground`})]}),(0,g.jsx)(t.td,{children:`20.13:1`}),(0,g.jsx)(t.td,{children:`17.00:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`primary`}),` / `,(0,g.jsx)(t.code,{children:`primary-foreground`})]}),(0,g.jsx)(t.td,{children:`5.03:1`}),(0,g.jsx)(t.td,{children:`6.79:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`secondary`}),` / `,(0,g.jsx)(t.code,{children:`secondary-foreground`})]}),(0,g.jsx)(t.td,{children:`16.13:1`}),(0,g.jsx)(t.td,{children:`14.07:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`accent`}),` / `,(0,g.jsx)(t.code,{children:`accent-foreground`})]}),(0,g.jsx)(t.td,{children:`16.13:1`}),(0,g.jsx)(t.td,{children:`14.07:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`destructive`}),` / `,(0,g.jsx)(t.code,{children:`destructive-foreground`})]}),(0,g.jsx)(t.td,{children:`4.56:1`}),(0,g.jsx)(t.td,{children:`6.19:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`muted`}),` / `,(0,g.jsx)(t.code,{children:`muted-foreground`})]}),(0,g.jsx)(t.td,{children:`4.60:1`}),(0,g.jsx)(t.td,{children:`5.64:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`background`}),` / `,(0,g.jsx)(t.code,{children:`muted-foreground`})]}),(0,g.jsx)(t.td,{children:`4.85:1`}),(0,g.jsx)(t.td,{children:`7.73:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`background`}),` / `,(0,g.jsx)(t.code,{children:`ring`})]}),(0,g.jsx)(t.td,{children:`6.54:1`}),(0,g.jsx)(t.td,{children:`7.63:1`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Measured on the defaults: blue accent, gray gray. The `,(0,g.jsx)(t.code,{children:`primary`}),` row is the default blue accent. Every one of the seventeen
accents is measured the same way and clears 4.5:1 for its own label — see
`,(0,g.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:`Overview → Accent color`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--muted-foreground`}),` on `,(0,g.jsx)(t.code,{children:`--muted`}),` is 4.60:1 in light mode`]}),`, the
tightest pair it forms. It used to be 4.34:1, under AA: gray-500 on every
ramp has since been darkened to the lightest value that clears 4.6:1 on
its own gray-100, so muted text can now sit on a muted fill. On the page background, where secondary
text usually lives, the same token is 4.85:1.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--subtle-foreground`}),` is a step between body text and muted text`]}),`
(gray-600 light, gray-300 dark): navigation labels that should recede
until hovered or current, as in the Claude apps' sidebar. It reads about
7.5:1 on the light page, so it is body-safe; use `,(0,g.jsx)(t.code,{children:`--muted-foreground`}),` for
genuinely secondary text.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--surface-subtle`}),` is a filled panel that muted text can sit on.`]}),`
Muted text reads 4.85:1 on it (gray-50) and 5.64:1 on gray-800 in dark — a step off `,(0,g.jsx)(t.code,{children:`--card`}),` so a filled panel still reads as filled. The build
measures `,(0,g.jsx)(t.code,{children:`--muted-foreground`}),` on `,(0,g.jsx)(t.code,{children:`--background`}),`, `,(0,g.jsx)(t.code,{children:`--card`}),`,
`,(0,g.jsx)(t.code,{children:`--surface-subtle`}),` and `,(0,g.jsx)(t.code,{children:`--muted`}),` in both modes on all nine gray ramps, and
stops if any pair drops under 4.5:1. The tightest is neutral on `,(0,g.jsx)(t.code,{children:`--muted`}),`,
at 4.60:1.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--control-border`}),` outlines a checkbox, radio or switch track.`]}),` Those
controls have nothing else that shows they are there, so WCAG 1.4.11 wants
3:1 against the page — and `,(0,g.jsx)(t.code,{children:`--input`}),` (gray-200) is about 1.3:1. The build
measures it on all nine gray ramps.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--field-border`}),` is the text-field edge`]}),` (gray-300 light, white 18%
dark), about 1.5:1: the light hairline of the Claude apps, and a
deliberate exception to 3:1 for fields only. Fields lean on a white
`,(0,g.jsx)(t.code,{children:`--card`}),` fill, a faint drop, the label and the focus ring instead. A
product that needs 3:1 sets `,(0,g.jsx)(t.code,{children:`--field-border: var(--control-border)`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`--primary-text`}),` is the brand hue as text`]}),` — an outlined or ghost
primary button. The solid is picked for its label, not for being read on
the page, and amber-500 on white is barely 2:1, so the build measures a
third step per accent that clears 4.5:1 against the page.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Two values are deliberately off the beaten path.`}),` `,(0,g.jsx)(t.code,{children:`--ring`}),` follows the
accent at its `,(0,g.jsx)(t.code,{children:`-700`}),` step rather than being a neutral, because a focus
indicator has to clear 3:1 against the page under WCAG 1.4.11 and the
lighter solids miss it — yellow-600 measures 2.93:1, so the ring uses a
step darker than the fill for every accent.
And dark `,(0,g.jsx)(t.code,{children:`--destructive-foreground`}),` is neutral-900 rather than near-white:
dark mode inverts the destructive fill to red-400, and near-white on
red-400 is 2.77:1, which makes the label of a destructive button in dark
mode fail AA outright.`]}),`
`,(0,g.jsx)(t.h2,{id:`status`,children:`Status`}),`
`,(0,g.jsxs)(t.p,{children:[`Four fixed hues for messages about state: `,(0,g.jsx)(t.code,{children:`info`}),` (blue), `,(0,g.jsx)(t.code,{children:`success`}),`
(green), `,(0,g.jsx)(t.code,{children:`warning`}),` (amber), `,(0,g.jsx)(t.code,{children:`danger`}),` (red). Like `,(0,g.jsx)(t.code,{children:`--destructive`}),`, they do
not follow the accent. Each comes as four tokens:`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Token`}),(0,g.jsx)(t.th,{children:`Use`}),(0,g.jsx)(t.th,{children:`Light`}),(0,g.jsx)(t.th,{children:`Dark`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--{status}`})}),(0,g.jsx)(t.td,{children:`Solid fill`}),(0,g.jsx)(t.td,{children:`600 (green 700, amber 500)`}),(0,g.jsx)(t.td,{children:`400`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--{status}-foreground`})}),(0,g.jsx)(t.td,{children:`Label on the solid`}),(0,g.jsx)(t.td,{children:`neutral-50 (amber: neutral-900)`}),(0,g.jsx)(t.td,{children:`neutral-900`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--{status}-subtle`})}),(0,g.jsx)(t.td,{children:`Tinted fill`}),(0,g.jsx)(t.td,{children:`100`}),(0,g.jsx)(t.td,{children:`950`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`--{status}-text`})}),(0,g.jsx)(t.td,{children:`Text, icon and border on the tint or the page`}),(0,g.jsx)(t.td,{children:`800`}),(0,g.jsx)(t.td,{children:`300`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`The steps are pinned by hand, so `,(0,g.jsx)(t.code,{children:`npm run tokens`}),` measures them and fails
the build if any pair drops under 4.5:1:`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Pair`}),(0,g.jsx)(t.th,{children:`info`}),(0,g.jsx)(t.th,{children:`success`}),(0,g.jsx)(t.th,{children:`warning`}),(0,g.jsx)(t.th,{children:`danger`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`label on solid, light`}),(0,g.jsx)(t.td,{children:`5.03:1`}),(0,g.jsx)(t.td,{children:`4.73:1`}),(0,g.jsx)(t.td,{children:`8.35:1`}),(0,g.jsx)(t.td,{children:`4.56:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`text on subtle, light`}),(0,g.jsx)(t.td,{children:`7.25:1`}),(0,g.jsx)(t.td,{children:`6.45:1`}),(0,g.jsx)(t.td,{children:`6.41:1`}),(0,g.jsx)(t.td,{children:`6.86:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`text on page, light`}),(0,g.jsx)(t.td,{children:`8.84:1`}),(0,g.jsx)(t.td,{children:`7.09:1`}),(0,g.jsx)(t.td,{children:`7.13:1`}),(0,g.jsx)(t.td,{children:`8.37:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`label on solid, dark`}),(0,g.jsx)(t.td,{children:`6.79:1`}),(0,g.jsx)(t.td,{children:`10.09:1`}),(0,g.jsx)(t.td,{children:`10.43:1`}),(0,g.jsx)(t.td,{children:`6.19:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`text on subtle, dark`}),(0,g.jsx)(t.td,{children:`8.13:1`}),(0,g.jsx)(t.td,{children:`10.67:1`}),(0,g.jsx)(t.td,{children:`10.37:1`}),(0,g.jsx)(t.td,{children:`8.40:1`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`text on page, dark`}),(0,g.jsx)(t.td,{children:`10.93:1`}),(0,g.jsx)(t.td,{children:`14.16:1`}),(0,g.jsx)(t.td,{children:`13.69:1`}),(0,g.jsx)(t.td,{children:`10.30:1`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`danger`}),` and `,(0,g.jsx)(t.code,{children:`destructive`}),` share red-600 but mean different things:
`,(0,g.jsx)(t.code,{children:`destructive`}),` is an action that destroys, `,(0,g.jsx)(t.code,{children:`danger`}),` is a state that is
wrong. Keep them apart so either can move without the other.`]}),`
`,(0,g.jsx)(t.h2,{id:`color-is-never-the-only-signal`,children:`Color is never the only signal`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--destructive`}),` on a button does not say what will be destroyed, and a red
badge means nothing to a reader who cannot distinguish it from a neutral
one. Pair color with words, an icon, or a shape every time it carries
meaning. The contrast numbers above are a floor, not a design review.`]}),`
`,(0,g.jsx)(t.h2,{id:`where-the-values-come-from`,children:`Where the values come from`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Every value is a step off a published ramp, digit for digit.`}),` Nothing
here was hand-picked or eyeballed. Two ramps feed the palette and each is
swappable on its own: an `,(0,g.jsx)(t.strong,{children:`accent`}),` (blue by default) for `,(0,g.jsx)(t.code,{children:`--primary`}),` and
`,(0,g.jsx)(t.code,{children:`--ring`}),`, and a `,(0,g.jsx)(t.strong,{children:`gray`}),` (the `,(0,g.jsx)(t.code,{children:`gray`}),` ramp by default) for everything structural.`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Token`}),(0,g.jsx)(t.th,{children:`Light`}),(0,g.jsx)(t.th,{children:`Dark`}),(0,g.jsx)(t.th,{children:`Driven by`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`background`})}),(0,g.jsx)(t.td,{children:`gray-50`}),(0,g.jsx)(t.td,{children:`gray-950`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`foreground`})}),(0,g.jsx)(t.td,{children:`gray-950`}),(0,g.jsx)(t.td,{children:`gray-50`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`card`}),`, `,(0,g.jsx)(t.code,{children:`popover`})]}),(0,g.jsx)(t.td,{children:`white`}),(0,g.jsx)(t.td,{children:`gray-900`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`card-foreground`}),`, `,(0,g.jsx)(t.code,{children:`popover-foreground`})]}),(0,g.jsx)(t.td,{children:`gray-950`}),(0,g.jsx)(t.td,{children:`gray-50`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`primary`})}),(0,g.jsx)(t.td,{children:`accent-600`}),(0,g.jsx)(t.td,{children:`accent-400`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`accent`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`primary-foreground`})}),(0,g.jsx)(t.td,{children:`white or near-black`}),(0,g.jsx)(t.td,{children:`near-black`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`accent`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`secondary`}),`, `,(0,g.jsx)(t.code,{children:`muted`}),`, `,(0,g.jsx)(t.code,{children:`accent`})]}),(0,g.jsx)(t.td,{children:`gray-100`}),(0,g.jsx)(t.td,{children:`gray-800`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`secondary-foreground`}),`, `,(0,g.jsx)(t.code,{children:`accent-foreground`})]}),(0,g.jsx)(t.td,{children:`gray-900`}),(0,g.jsx)(t.td,{children:`gray-50`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`selected`})}),(0,g.jsx)(t.td,{children:`gray-200`}),(0,g.jsx)(t.td,{children:`white 10%`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`hover-overlay`})}),(0,g.jsx)(t.td,{children:`black 5%`}),(0,g.jsx)(t.td,{children:`white 6%`}),(0,g.jsx)(t.td,{children:`fixed`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`muted-foreground`})}),(0,g.jsx)(t.td,{children:`gray-500`}),(0,g.jsx)(t.td,{children:`gray-400`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`subtle-foreground`})}),(0,g.jsx)(t.td,{children:`gray-600`}),(0,g.jsx)(t.td,{children:`gray-300`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`surface-subtle`})}),(0,g.jsx)(t.td,{children:`gray-50`}),(0,g.jsx)(t.td,{children:`gray-800`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`destructive`})}),(0,g.jsx)(t.td,{children:`red-600`}),(0,g.jsx)(t.td,{children:`red-400`}),(0,g.jsx)(t.td,{children:`fixed`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`destructive-foreground`})}),(0,g.jsx)(t.td,{children:`neutral-50`}),(0,g.jsx)(t.td,{children:`neutral-900`}),(0,g.jsx)(t.td,{children:`fixed`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`border`}),`, `,(0,g.jsx)(t.code,{children:`input`})]}),(0,g.jsx)(t.td,{children:`gray-200`}),(0,g.jsx)(t.td,{children:`white 10% / 15%`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`field-border`})}),(0,g.jsx)(t.td,{children:`gray-300`}),(0,g.jsx)(t.td,{children:`white 18%`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`control-border`})}),(0,g.jsx)(t.td,{children:`gray-500`}),(0,g.jsx)(t.td,{children:`gray-400`}),(0,g.jsx)(t.td,{children:`gray`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ring`})}),(0,g.jsx)(t.td,{children:`accent-700`}),(0,g.jsx)(t.td,{children:`accent-400`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`accent`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`primary-text`})}),(0,g.jsx)(t.td,{children:`first of accent-600…900 at 4.5:1 on the light page`}),(0,g.jsx)(t.td,{children:`first of accent-400…200 at 4.5:1 on the dark page`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`accent`})})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`The light accent step is `,(0,g.jsx)(t.code,{children:`-600`}),` for most hues but `,(0,g.jsx)(t.code,{children:`-700`}),` for sky, fuchsia,
pink and rose, and the label is white or near-black depending on which one
clears 4.5:1 on that fill — the warm hues take dark labels. Exceptions to
the ramp rule: light `,(0,g.jsx)(t.code,{children:`--card`}),`/`,(0,g.jsx)(t.code,{children:`--popover`}),` (pure white, so a panel reads
lighter than the gray-50 page) and dark `,(0,g.jsx)(t.code,{children:`--border`}),`/`,(0,g.jsx)(t.code,{children:`--input`}),`/`,(0,g.jsx)(t.code,{children:`--selected`}),`, and `,(0,g.jsx)(t.code,{children:`--hover-overlay`}),` in both
(alpha, so they work over any surface — the sidebar's hover sits on
`,(0,g.jsx)(t.code,{children:`--surface-subtle`}),`, which in dark equals the opaque `,(0,g.jsx)(t.code,{children:`--accent`}),` fill).`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`--destructive`}),` deliberately does `,(0,g.jsx)(t.strong,{children:`not`}),` follow the accent. A status
colour that changes with the brand stops being a status.`]}),`
`,(0,g.jsx)(t.h2,{id:`naming`,children:`Naming`}),`
`,(0,g.jsxs)(t.p,{children:[`Token names describe a `,(0,g.jsx)(t.strong,{children:`role`}),`, not a property or a color. `,(0,g.jsx)(t.code,{children:`--primary`}),` is
not "the brand color" and `,(0,g.jsx)(t.code,{children:`--destructive`}),` is not "red"; they are the
default action and the dangerous one. The names are also the common
contract most token-based kits share, which is what lets a component
copied out of Zweihänder resolve against tokens a target project already
has instead of arriving with its own private palette.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Figma, by contrast, conventionally names tokens by property —
`,(0,g.jsx)(t.code,{children:`bg/primary`}),`, `,(0,g.jsx)(t.code,{children:`text/primary`}),`, `,(0,g.jsx)(t.code,{children:`border/default`}),`. Those do not map one to
one: Figma's `,(0,g.jsx)(t.code,{children:`text/primary`}),` is this system's `,(0,g.jsx)(t.code,{children:`--foreground`}),`, and its
`,(0,g.jsx)(t.code,{children:`bg/primary`}),` is `,(0,g.jsx)(t.code,{children:`--background`}),`. Neither is `,(0,g.jsx)(t.code,{children:`--primary`}),`. Worth pinning down
before any Figma sync, since the collision is silent.`]}),`
`,(0,g.jsx)(t.h2,{id:`primitives`,children:`Primitives`}),`
`,(0,g.jsxs)(t.p,{children:[`The full underlying palette — 22 hues × 11 shades. None of these
classes are referenced anywhere in the kit, so they are force-generated by
an `,(0,g.jsx)(t.code,{children:`@source inline(...)`}),` directive in `,(0,g.jsx)(t.code,{children:`src/index.css`}),` purely so this page
can render them.`]}),`
`,(0,g.jsxs)(t.p,{children:[`This is raw material, not a palette to build UI from. Reach for a
primitive when you are defining the `,(0,g.jsx)(t.em,{children:`next`}),` semantic token; if a primitive
shows up in a component, a token is missing.`]}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,g.jsxs)(t.p,{children:[`Swap the raw values in `,(0,g.jsx)(t.code,{children:`:root`}),` and `,(0,g.jsx)(t.code,{children:`.dark`}),` in `,(0,g.jsx)(t.code,{children:`src/tokens.css`}),`. Nothing
that reads `,(0,g.jsx)(t.code,{children:`var(--primary)`}),` or `,(0,g.jsx)(t.code,{children:`var(--muted-foreground)`}),` changes, because
every rule points at the variable rather than the value.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Two things to carry through a rebrand: re-measure the pairs in the
contrast table — a brand hue at the same `,(0,g.jsx)(t.em,{children:`lightness`}),` as neutral-900 will
not necessarily hit the same ratios — and keep light and dark as separate
decisions. Lifting a brand color for dark mode by reusing the light value
is what produces the 2.77:1 failure documented above.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Projects that install through the registry get these values merged into
their own stylesheet; projects on the npm package import
`,(0,g.jsx)(t.code,{children:`zweihander/tokens.css`}),` and override afterwards.`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),f()})))()}_();export{h as default};