import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,n as a,s as o}from"./blocks-DfpLWjEg.js";import{i as s,n as c,r as l,t as u}from"./Shadows.stories-DMapRPnA.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:l}),`
`,(0,p.jsx)(t.h1,{id:`shadows`,children:`Shadows`}),`
`,(0,p.jsxs)(t.p,{children:[`Seven elevation steps and an off switch. They read as `,(0,p.jsx)(t.code,{children:`var(--shadow-2xs)`}),`
through `,(0,p.jsx)(t.code,{children:`var(--shadow-2xl)`}),`, and each resolves per appearance rather than
being a fixed value.`]}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`the-scale-is-one-shape-at-seven-heights`,children:`The scale is one shape at seven heights`}),`
`,(0,p.jsxs)(t.p,{children:[`A step is not a blur radius someone liked. Each one is a `,(0,p.jsxs)(t.strong,{children:[`height `,(0,p.jsx)(t.code,{children:`h`})]}),`,
and both of its layers fall out of that number:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{children:`ambient  0  h     2h    -h/2     the spread of light around a raised object
contact  0  h/2   h     -h/2     the tighter dark where it meets the surface
`})}),`
`,(0,p.jsx)(t.p,{children:`Two layers because one cannot do both jobs. A single soft shadow floats
without touching down; a single tight one reads as a border. The negative
spread pulls both layers in as they rise, which is what keeps a tall step
from bleeding sideways into whatever sits next to it.`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Token`}),(0,p.jsx)(t.th,{children:`h`}),(0,p.jsx)(t.th,{children:`Light`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-none`})}),(0,p.jsx)(t.td,{children:`—`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0 0 #0000`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-2xs`})}),(0,p.jsx)(t.td,{children:`1`}),(0,p.jsx)(t.td,{children:`1px drop, 5%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-xs`})}),(0,p.jsx)(t.td,{children:`2`}),(0,p.jsx)(t.td,{children:`2px + 1px, 6% / 4%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-sm`})}),(0,p.jsx)(t.td,{children:`4`}),(0,p.jsx)(t.td,{children:`4px + 2px, 8% / 5%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-md`})}),(0,p.jsx)(t.td,{children:`8`}),(0,p.jsx)(t.td,{children:`8px + 4px, 9% / 6%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-lg`})}),(0,p.jsx)(t.td,{children:`12`}),(0,p.jsx)(t.td,{children:`12px + 6px, 10% / 7%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-xl`})}),(0,p.jsx)(t.td,{children:`20`}),(0,p.jsx)(t.td,{children:`20px + 10px, 12% / 8%`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-2xl`})}),(0,p.jsx)(t.td,{children:`32`}),(0,p.jsx)(t.td,{children:`32px + 16px, 16% / 10%`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`h`}),` doubles through the lower steps and eases off at the top, because the
difference between 1px and 2px of lift is legible and the difference
between 40px and 48px is not.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`--shadow-none`}),` exists so that turning elevation off is a token rather
than a literal. `,(0,p.jsx)(t.code,{children:`box-shadow: none`}),` also works, but it cannot be swapped by
a `,(0,p.jsx)(t.code,{children:`Theme`}),` and it breaks a transition between two shadow states — `,(0,p.jsx)(t.code,{children:`0 0 #0000`}),` interpolates, `,(0,p.jsx)(t.code,{children:`none`}),` does not.`]}),`
`,(0,p.jsx)(t.h2,{id:`dark-mode-is-derived-not-retyped`,children:`Dark mode is derived, not retyped`}),`
`,(0,p.jsxs)(t.p,{children:[`Only the light values are written down. The dark ones are `,(0,p.jsx)(t.strong,{children:`computed from
them`}),`: every alpha is multiplied by 4 and clamped at 0.6.`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.p,{children:`Look at the dark half. The shadows are nearly invisible, and multiplying
the alpha by four is not what fixes it — nothing fixes it. Here is the
measurement, sampling the darkest pixel each shadow can produce:`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{}),(0,p.jsx)(t.th,{children:`Page`}),(0,p.jsx)(t.th,{children:`Darkest shadow pixel`}),(0,p.jsx)(t.th,{children:`Range`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[`Light, `,(0,p.jsx)(t.code,{children:`--shadow-md`})]}),(0,p.jsx)(t.td,{children:`255`}),(0,p.jsx)(t.td,{children:`232`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`23 levels`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[`Light, `,(0,p.jsx)(t.code,{children:`--shadow-2xl`})]}),(0,p.jsx)(t.td,{children:`255`}),(0,p.jsx)(t.td,{children:`214`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`41 levels`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[`Dark, `,(0,p.jsx)(t.code,{children:`--shadow-md`})]}),(0,p.jsx)(t.td,{children:`10`}),(0,p.jsx)(t.td,{children:`6`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`4 levels`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[`Dark, `,(0,p.jsx)(t.code,{children:`--shadow-2xl`})]}),(0,p.jsx)(t.td,{children:`10`}),(0,p.jsx)(t.td,{children:`4`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.strong,{children:`6 levels`})})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`A drop shadow works by darkening what is under it. The dark page is
already at 10 of 255, so `,(0,p.jsx)(t.strong,{children:`the entire budget is 10 levels`}),` — even a
pure-black shadow at full opacity could not do better. Light mode has 255
to spend. That is a 25× difference in available range, and no choice of
alpha closes it.`]}),`
`,(0,p.jsxs)(t.p,{children:[`So the multiplier is not rescuing dark mode; it is spending a small budget
well rather than leaving it unspent. What actually carries elevation in
dark mode is the surface: `,(0,p.jsx)(t.code,{children:`--card`}),` sits at `,(0,p.jsx)(t.strong,{children:`23`}),` against a background of
`,(0,p.jsx)(t.strong,{children:`10`}),`, a 13-level lift — two to three times stronger than any shadow on
this page.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`In dark mode, surface lightness is the primary elevation signal and the
shadow is a secondary cue.`}),` In light mode it is the other way around. If
you are building a floating surface and it does not read as raised in dark
mode, reach for a lighter surface token, not a heavier shadow.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.strong,{children:`clamp`}),` at 0.6 is therefore housekeeping rather than tuning — it
stops a large light alpha from generating a nonsensical dark one, and
between `,(0,p.jsx)(t.code,{children:`--shadow-2xl`}),` uncapped and capped there is about one level in it.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Deriving rather than retyping closes a different gap. When both modes were
written by hand there were fourteen numbers and nothing checking that they
told the same story; editing a step meant remembering to edit its twin.
Now editing a step edits both, and the `,(0,p.jsx)(t.code,{children:`Modes`}),` story asserts the two did
not collapse into the same value — set the multiplier to 1 and that test
fails.`]}),`
`,(0,p.jsx)(t.h2,{id:`who-uses-them`,children:`Who uses them`}),`
`,(0,p.jsxs)(t.p,{children:[`Controls are flat: Button, Text Input and the rest carry borders, not
shadows. `,(0,p.jsx)(t.strong,{children:`Card`}),` is the first surface on the scale — `,(0,p.jsx)(t.code,{children:`elevated`}),` rests on
`,(0,p.jsx)(t.code,{children:`--shadow-sm`}),` and lifts to `,(0,p.jsx)(t.code,{children:`--shadow-md`}),` on hover when clickable. The
remaining steps are for the surfaces still to come (popover, dropdown,
modal, toast), documented now so they adopt a shared scale instead of each
inventing a `,(0,p.jsx)(t.code,{children:`box-shadow`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[`That also means the steps are `,(0,p.jsx)(t.strong,{children:`untested against real components.`}),` The
geometry is consistent, but consistent is not the same as tuned. Treat
them as a starting point to adjust when the first floating surface lands.`]}),`
`,(0,p.jsx)(t.h2,{id:`a-note-on-rings-and-shadows`,children:`A note on rings and shadows`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`box-shadow`}),` is a single property, so a shadow and a focus ring drawn the
same way would overwrite each other — which is why systems that draw rings
with `,(0,p.jsx)(t.code,{children:`box-shadow`}),` need machinery to compose the two.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The kit sidesteps it: focus is drawn with `,(0,p.jsx)(t.code,{children:`outline`}),`, which has its own
property and its own `,(0,p.jsx)(t.code,{children:`outline-offset`}),`, and current browsers follow
`,(0,p.jsx)(t.code,{children:`border-radius`}),` with it. An elevated surface can carry a shadow and a
focus ring at once, and neither needs to know about the other.`]}),`
`,(0,p.jsx)(t.h2,{id:`what-is-not-here`,children:`What is not here`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Inset shadows.`}),` For recessed wells and pressed states. They are a real
gap, but the kit has no recessed surface and no pressed treatment yet, so
they would be a step nothing reads — and this page already carries seven
of those. Add them as `,(0,p.jsx)(t.code,{children:`elevation-inset-*`}),` in `,(0,p.jsx)(t.code,{children:`tokens/semantic.json`}),` when
the first one lands; the alpha derivation applies unchanged.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Coloured shadows.`}),` A shadow tinted toward the accent instead of black.
Worth having, but it needs a real decision about which token it reads and
how it behaves in dark mode, not a mechanical port.`]}),`
`,(0,p.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,p.jsxs)(t.p,{children:[`The raw values are `,(0,p.jsx)(t.code,{children:`--elevation-none`}),` through `,(0,p.jsx)(t.code,{children:`--elevation-2xl`}),` in `,(0,p.jsx)(t.code,{children:`:root`}),`
and `,(0,p.jsx)(t.code,{children:`.dark`}),`; the `,(0,p.jsx)(t.code,{children:`*`}),` block maps them onto `,(0,p.jsx)(t.code,{children:`--shadow-*`}),` and does not need to
change.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Change a step by editing `,(0,p.jsx)(t.code,{children:`tokens/semantic.json`}),` and running `,(0,p.jsx)(t.code,{children:`npm run tokens`}),` — light and dark regenerate together. Overriding `,(0,p.jsx)(t.code,{children:`--shadow-md`}),`
directly on a `,(0,p.jsx)(t.code,{children:`Theme`}),` scope also works and skips the derivation, which is
the right tool for a one-off surface and the wrong one for changing the
scale.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),i(),s()})))()}m();export{f as default};