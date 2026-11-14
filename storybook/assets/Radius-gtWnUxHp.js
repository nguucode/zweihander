import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,r as a,s as o}from"./blocks-DsER1A51.js";import{a as s,i as c,n as l,r as u,t as d}from"./Radius.stories-C8oqWUq6.js";function f(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`radius`,children:`Radius`}),`
`,(0,m.jsxs)(t.p,{children:[`Rounding is a `,(0,m.jsx)(t.strong,{children:`single setting`}),`, not a value picked per component. A
`,(0,m.jsx)(t.code,{children:`radius`}),` preset on `,(0,m.jsx)(t.code,{children:`Theme`}),` rescales everything inside it at once, and
components follow because they reference an `,(0,m.jsx)(t.em,{children:`intent`}),` — control, field,
panel — rather than a fixed number.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="full-rounded">
  <Button>Pill</Button>
</Theme>
`})}),`
`,(0,m.jsx)(t.h2,{id:`presets`,children:`Presets`}),`
`,(0,m.jsxs)(t.p,{children:[`Three: `,(0,m.jsx)(t.code,{children:`sharp`}),`, `,(0,m.jsxs)(t.strong,{children:[(0,m.jsx)(t.code,{children:`rounded`}),` (the default)`]}),`, `,(0,m.jsx)(t.code,{children:`full-rounded`}),`. The
default is set by `,(0,m.jsx)(t.code,{children:`--radius-factor: 1`}),` and `,(0,m.jsx)(t.code,{children:`--radius-full: 0px`}),` on
`,(0,m.jsx)(t.code,{children:`:root`}),`, which is exactly what the `,(0,m.jsx)(t.code,{children:`rounded`}),` preset writes — so a scope
with no `,(0,m.jsx)(t.code,{children:`radius`}),` prop and a scope with `,(0,m.jsx)(t.code,{children:`radius="rounded"`}),` are identical.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`Look at the `,(0,m.jsx)(t.code,{children:`full-rounded`}),` row. `,(0,m.jsx)(t.strong,{children:`The button becomes a pill; the input and the
panel get rounder but stop short of one.`}),` That is the whole reason this
is a system rather than a number: a fully rounded text field reads as a
search pill in a form that isn't one, and a fully rounded card stops
looking like a container. Only controls opt all the way in.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`sharp`}),` flattens every corner in the scope to `,(0,m.jsx)(t.code,{children:`0`}),`, including panels.`]}),`
`,(0,m.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,m.jsxs)(t.p,{children:[`Three variables do the work, all on `,(0,m.jsx)(t.code,{children:`:root`}),`:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Variable`}),(0,m.jsx)(t.th,{children:`Default`}),(0,m.jsx)(t.th,{children:`Set by`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0.375rem`})}),(0,m.jsxs)(t.td,{children:[`you, for the `,(0,m.jsx)(t.code,{children:`md`}),` step`]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-factor`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1`})}),(0,m.jsxs)(t.td,{children:[`the `,(0,m.jsx)(t.code,{children:`radius`}),` preset`]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-full`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})}),(0,m.jsxs)(t.td,{children:[`the `,(0,m.jsx)(t.code,{children:`radius`}),` preset, only at `,(0,m.jsx)(t.code,{children:`full-rounded`})]})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`Six steps are cut from the base, after Atlassian's shape scale: `,(0,m.jsx)(t.code,{children:`xs`}),` a
third (2px), `,(0,m.jsx)(t.code,{children:`sm`}),` two thirds (4px), `,(0,m.jsx)(t.code,{children:`md`}),` the base (6px), `,(0,m.jsx)(t.code,{children:`lg`}),` four thirds
(8px), `,(0,m.jsx)(t.code,{children:`xl`}),` twice (12px) and `,(0,m.jsx)(t.code,{children:`2xl`}),` eight thirds (16px). Every step is
multiplied by the factor, so the preset scales the whole scale rather
than replacing it:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Preset`}),(0,m.jsx)(t.th,{children:`Factor`}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`--radius-full`})})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sharp`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`rounded`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`full-rounded`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1.5`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`9999px`})})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`The pill is a `,(0,m.jsx)(t.code,{children:`max()`}),`. `,(0,m.jsx)(t.code,{children:`--radius-control`}),` resolves to
`,(0,m.jsx)(t.code,{children:`max(step, var(--radius-full))`}),` — normally the step wins because
`,(0,m.jsx)(t.code,{children:`--radius-full`}),` is `,(0,m.jsx)(t.code,{children:`0px`}),`, and at the `,(0,m.jsx)(t.code,{children:`full-rounded`}),` preset the `,(0,m.jsx)(t.code,{children:`9999px`}),` wins
instead.`]}),`
`,(0,m.jsx)(t.p,{children:`Fields and panels use the same shape with a ceiling wrapped around it:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`max(step, min(cap, var(--radius-full)))
`})}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`min(cap, --radius-full)`}),` is `,(0,m.jsx)(t.code,{children:`0px`}),` normally and the cap at `,(0,m.jsx)(t.code,{children:`full-rounded`}),`, so they
step up with the preset and stop there. Concretely, at the default base:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Preset`}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`control`})}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`field`})}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`panel`})})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sharp`})}),(0,m.jsx)(t.td,{children:`0`}),(0,m.jsx)(t.td,{children:`0`}),(0,m.jsx)(t.td,{children:`0`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`rounded`})}),(0,m.jsx)(t.td,{children:`6px`}),(0,m.jsx)(t.td,{children:`6px`}),(0,m.jsx)(t.td,{children:`12px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`full-rounded`})}),(0,m.jsx)(t.td,{children:`pill`}),(0,m.jsx)(t.td,{children:`12px`}),(0,m.jsx)(t.td,{children:`24px`})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`The default input is 40px tall, so a pill would be 20px. `,(0,m.jsx)(t.code,{children:`field`}),` at
`,(0,m.jsx)(t.code,{children:`full-rounded`}),` lands under that on purpose, and a test asserts it.`]}),`
`,(0,m.jsx)(t.h2,{id:`two-rules`,children:`Two rules`}),`
`,(0,m.jsx)(t.h3,{id:`1-radius-is-tier--intent`,children:`1. Radius is tier × intent`}),`
`,(0,m.jsxs)(t.p,{children:[`A control's corner is not picked per component. Its `,(0,m.jsx)(t.strong,{children:`size tier`}),` picks
the step, and its `,(0,m.jsx)(t.strong,{children:`intent`}),` picks what happens at `,(0,m.jsx)(t.code,{children:`full-rounded`}),`:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Tier`}),(0,m.jsx)(t.th,{children:`Step`}),(0,m.jsxs)(t.th,{children:[`Control (pill at `,(0,m.jsx)(t.code,{children:`full-rounded`}),`)`]}),(0,m.jsx)(t.th,{children:`Field (stops one step up)`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`xs`}),` (20px)`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-sm`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--control-xs-radius`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--control-xs-radius-field`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`sm`}),` (24px)`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-sm`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--control-sm-radius`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--control-sm-radius-field`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`md`}),` (32px)`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-md`})}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`--control-md-radius`}),` = `,(0,m.jsx)(t.code,{children:`--radius-control`})]}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`--control-md-radius-field`}),` = `,(0,m.jsx)(t.code,{children:`--radius-field`})]})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`The small tiers take the smaller step because the same corner on a box
two thirds the height reads as a pill. `,(0,m.jsx)(t.code,{children:`--radius-xs`}),` (2px) is for marks
smaller than a control: a checkbox box, a badge, a key cap. See
`,(0,m.jsx)(t.a,{href:`?path=/docs/foundations-sizing--docs`,children:`Sizing`}),` for which component reads
which tier.`]}),`
`,(0,m.jsx)(t.h3,{id:`2-nested-corners-are-the-outer-corner-minus-the-inset`,children:`2. Nested corners are the outer corner minus the inset`}),`
`,(0,m.jsx)(t.p,{children:`When a rounded thing sits inside another, with an even inset, its corner
is the container's minus that inset, never its own token:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`.menu {
  --menu-inset: var(--space-1);
  padding: var(--menu-inset);
  border-radius: var(--radius-field);
}
.menu-item {
  border-radius: calc(var(--radius-field) - var(--menu-inset));
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`The pills Tabs chips work this way: their corner is the track's minus the
2px track inset. Menu no longer does: its popup is inset 12px, further than
its 8px corner, so an item is a free-standing shape with the control
radius, and the `,(0,m.jsx)(t.code,{children:`.menu`}),` above is an illustration only. A negative
result clamps to 0, so a square container gets square children. Both
corners then stay concentric at every preset; two independent tokens only
line up at one.`]}),`
`,(0,m.jsx)(t.p,{children:`The rule is for concentric shapes. A close button 12px inside a popover's
corner is a free-standing control, not a nested shape, and keeps its own
step.`}),`
`,(0,m.jsxs)(t.h2,{id:`always-round---radius-pill`,children:[`Always round: `,(0,m.jsx)(t.code,{children:`--radius-pill`})]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`--radius-pill`}),` is `,(0,m.jsx)(t.code,{children:`9999px`}),` at every preset. It is for things that are
round by nature, not by preset: a badge count, an avatar, a switch track,
a slider thumb, a spinner. `,(0,m.jsx)(t.code,{children:`--radius-full`}),` is the preset's pill switch:
read directly it is `,(0,m.jsx)(t.code,{children:`0`}),` everywhere except `,(0,m.jsx)(t.code,{children:`radius="full-rounded"`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`intent-tokens`,children:`Intent tokens`}),`
`,(0,m.jsx)(t.p,{children:`What components actually use.`}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Token`}),(0,m.jsx)(t.th,{children:`Used by`}),(0,m.jsxs)(t.th,{children:[`Pills at `,(0,m.jsx)(t.code,{children:`full-rounded`})]})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-control`})}),(0,m.jsx)(t.td,{children:`the md tier of Button, ToggleButton, Tabs, Pagination`}),(0,m.jsx)(t.td,{children:`yes`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-field`})}),(0,m.jsx)(t.td,{children:`every field`}),(0,m.jsx)(t.td,{children:`no`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-panel`})}),(0,m.jsx)(t.td,{children:`Modal`}),(0,m.jsx)(t.td,{children:`no`})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`Surfaces that float or frame content without being a dialog read a step,
`,(0,m.jsx)(t.code,{children:`--radius-lg`}),` (8px): Card, Popover, Menu, the Select and Combobox lists,
the date picker, Toast and Alert. They follow the preset's factor and never
become a pill.`]}),`
`,(0,m.jsxs)(t.p,{children:[`A new control or field should pick the intent that matches its shape, not
a step.
Getting this wrong is invisible at the default preset and only shows up
when someone sets `,(0,m.jsx)(t.code,{children:`radius="full-rounded"`}),` — which is exactly the kind of bug a
token system exists to prevent.`]}),`
`,(0,m.jsx)(t.h2,{id:`steps`,children:`Steps`}),`
`,(0,m.jsxs)(t.p,{children:[`The raw scale — `,(0,m.jsx)(t.code,{children:`--radius-xs`}),` through `,(0,m.jsx)(t.code,{children:`--radius-2xl`}),` — for anything that is
genuinely decorative rather than a control, field or panel.`]}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.p,{children:`These follow the preset like everything else, so a decorative corner in
application code stays in step with the controls beside it.`}),`
`,(0,m.jsxs)(t.p,{children:[`A genuinely circular element uses `,(0,m.jsx)(t.code,{children:`--radius-pill`}),` (see above), not
`,(0,m.jsx)(t.code,{children:`--radius-full`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`scoping-and-overriding`,children:`Scoping and overriding`}),`
`,(0,m.jsxs)(t.p,{children:[`Presets nest, and `,(0,m.jsx)(t.code,{children:`Theme`}),` takes a `,(0,m.jsx)(t.code,{children:`render`}),` prop, so a single component can
opt out without a wrapper element:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="full-rounded" render={<Button />}>
  Just this one is a pill
</Theme>
`})}),`
`,(0,m.jsxs)(t.p,{children:[`For a value the presets don't cover, set the variables directly — `,(0,m.jsx)(t.code,{children:`tokens`}),`
is applied after the preset, so it wins:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="rounded" tokens={{ 'radius-factor': '2.4' }}>
`})}),`
`,(0,m.jsx)(t.p,{children:`Globally, change the base in CSS and leave the factor to the presets:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`:root {
  --radius: 1rem;
}
`})}),`
`,(0,m.jsx)(t.h2,{id:`one-caveat-about-the-base`,children:`One caveat about the base`}),`
`,(0,m.jsxs)(t.p,{children:[`The steps are ratios of the base, so they keep their proportions when the
base moves, but small bases round down: at `,(0,m.jsx)(t.code,{children:`--radius: 0.1875rem`}),` (3px)
`,(0,m.jsx)(t.code,{children:`xs`}),` is 1px and `,(0,m.jsx)(t.code,{children:`sm`}),` 2px. Prefer moving the preset over moving the base.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),r(),i(),s()})))()}h();export{p as default};