import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Radius.stories-C_IbhA2L.js";function p(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`radius`,children:`Radius`}),`
`,(0,h.jsxs)(t.p,{children:[`Rounding is a `,(0,h.jsx)(t.strong,{children:`single setting`}),`, not a value picked per component. A
`,(0,h.jsx)(t.code,{children:`radius`}),` preset on `,(0,h.jsx)(t.code,{children:`Theme`}),` rescales everything inside it at once, and
components follow because they reference an `,(0,h.jsx)(t.em,{children:`intent`}),` — control, field,
panel — rather than a fixed number.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="full-rounded">
  <Button>Pill</Button>
</Theme>
`})}),`
`,(0,h.jsx)(t.h2,{id:`presets`,children:`Presets`}),`
`,(0,h.jsxs)(t.p,{children:[`Three: `,(0,h.jsx)(t.code,{children:`sharp`}),`, `,(0,h.jsxs)(t.strong,{children:[(0,h.jsx)(t.code,{children:`rounded`}),` (the default)`]}),`, `,(0,h.jsx)(t.code,{children:`full-rounded`}),`. The
default is set by `,(0,h.jsx)(t.code,{children:`--radius-factor: 1`}),` and `,(0,h.jsx)(t.code,{children:`--radius-full: 0px`}),` on
`,(0,h.jsx)(t.code,{children:`:root`}),`, which is exactly what the `,(0,h.jsx)(t.code,{children:`rounded`}),` preset writes — so a scope
with no `,(0,h.jsx)(t.code,{children:`radius`}),` prop and a scope with `,(0,h.jsx)(t.code,{children:`radius="rounded"`}),` are identical.`]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsxs)(t.p,{children:[`Look at the `,(0,h.jsx)(t.code,{children:`full-rounded`}),` row. `,(0,h.jsx)(t.strong,{children:`The button becomes a pill; the input and the
panel get rounder but stop short of one.`}),` That is the whole reason this
is a system rather than a number: a fully rounded text field reads as a
search pill in a form that isn't one, and a fully rounded card stops
looking like a container. Only controls opt all the way in.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`sharp`}),` flattens every corner in the scope to `,(0,h.jsx)(t.code,{children:`0`}),`, including panels.`]}),`
`,(0,h.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,h.jsxs)(t.p,{children:[`Two variables do the work, both on `,(0,h.jsx)(t.code,{children:`:root`}),`:`]}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Variable`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{children:`Set by`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0.625rem`})}),(0,h.jsx)(t.td,{children:`you, for the base step`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-factor`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`1`})}),(0,h.jsxs)(t.td,{children:[`the `,(0,h.jsx)(t.code,{children:`radius`}),` preset`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-full`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0px`})}),(0,h.jsxs)(t.td,{children:[`the `,(0,h.jsx)(t.code,{children:`radius`}),` preset, only at `,(0,h.jsx)(t.code,{children:`full-rounded`})]})]})]})]}),`
`,(0,h.jsx)(t.p,{children:`Every step is the base multiplied by the factor, so the preset scales the
whole scale rather than replacing it:`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Preset`}),(0,h.jsx)(t.th,{children:`Factor`}),(0,h.jsx)(t.th,{children:(0,h.jsx)(t.code,{children:`--radius-full`})})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sharp`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0px`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`rounded`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`1`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0px`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`full-rounded`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`1.5`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`9999px`})})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`The pill is a `,(0,h.jsx)(t.code,{children:`max()`}),`. `,(0,h.jsx)(t.code,{children:`--radius-control`}),` resolves to
`,(0,h.jsx)(t.code,{children:`max(step, var(--radius-full))`}),` — normally the step wins because
`,(0,h.jsx)(t.code,{children:`--radius-full`}),` is `,(0,h.jsx)(t.code,{children:`0px`}),`, and at the `,(0,h.jsx)(t.code,{children:`full-rounded`}),` preset the `,(0,h.jsx)(t.code,{children:`9999px`}),` wins
instead.`]}),`
`,(0,h.jsx)(t.p,{children:`Fields and panels use the same shape with a ceiling wrapped around it:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`max(step, min(cap, var(--radius-full)))
`})}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`min(cap, --radius-full)`}),` is `,(0,h.jsx)(t.code,{children:`0px`}),` normally and the cap at `,(0,h.jsx)(t.code,{children:`full-rounded`}),`, so they
step up with the preset and stop there. Concretely, at the default base:`]}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Preset`}),(0,h.jsx)(t.th,{children:(0,h.jsx)(t.code,{children:`control`})}),(0,h.jsx)(t.th,{children:(0,h.jsx)(t.code,{children:`field`})}),(0,h.jsx)(t.th,{children:(0,h.jsx)(t.code,{children:`panel`})})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sharp`})}),(0,h.jsx)(t.td,{children:`0`}),(0,h.jsx)(t.td,{children:`0`}),(0,h.jsx)(t.td,{children:`0`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`rounded`})}),(0,h.jsx)(t.td,{children:`8px`}),(0,h.jsx)(t.td,{children:`8px`}),(0,h.jsx)(t.td,{children:`14px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`full-rounded`})}),(0,h.jsx)(t.td,{children:`pill`}),(0,h.jsx)(t.td,{children:`15px`}),(0,h.jsx)(t.td,{children:`27px`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`The default input is 32px tall, so a pill would be 16px. `,(0,h.jsx)(t.code,{children:`field`}),` at
`,(0,h.jsx)(t.code,{children:`full-rounded`}),` lands under that on purpose, and a test asserts it.`]}),`
`,(0,h.jsx)(t.h2,{id:`three-rules`,children:`Three rules`}),`
`,(0,h.jsx)(t.h3,{id:`1-radius-is-tier--intent`,children:`1. Radius is tier × intent`}),`
`,(0,h.jsxs)(t.p,{children:[`A control's corner is not picked per component. Its `,(0,h.jsx)(t.strong,{children:`size tier`}),` picks
the step, and its `,(0,h.jsx)(t.strong,{children:`intent`}),` picks what happens at `,(0,h.jsx)(t.code,{children:`full-rounded`}),`:`]}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Tier`}),(0,h.jsx)(t.th,{children:`Step`}),(0,h.jsxs)(t.th,{children:[`Control (pill at `,(0,h.jsx)(t.code,{children:`full-rounded`}),`)`]}),(0,h.jsx)(t.th,{children:`Field (stops one step up)`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`xs`}),` (20px)`]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-sm`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--control-xs-radius`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--control-xs-radius-field`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`sm`}),` (24px)`]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-sm`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--control-sm-radius`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--control-sm-radius-field`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`md`}),` (32px)`]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-md`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`--control-md-radius`}),` = `,(0,h.jsx)(t.code,{children:`--radius-control`})]}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`--control-md-radius-field`}),` = `,(0,h.jsx)(t.code,{children:`--radius-field`})]})]})]})]}),`
`,`
`,(0,h.jsxs)(t.p,{children:[`The small tiers take the smaller step because the same corner on a box
two thirds the height reads as a pill. There is no `,(0,h.jsx)(t.code,{children:`--radius-xs`}),`: `,(0,h.jsx)(t.code,{children:`xs`}),`
parts are small enough that `,(0,h.jsx)(t.code,{children:`--radius-sm`}),` already reads as soft. See
`,(0,h.jsx)(t.a,{href:`?path=/docs/foundations-sizing--docs`,children:`Sizing`}),` for which component reads
which tier.`]}),`
`,(0,h.jsx)(t.h3,{id:`2-nested-corners-are-the-outer-corner-minus-the-inset`,children:`2. Nested corners are the outer corner minus the inset`}),`
`,(0,h.jsx)(t.p,{children:`When a rounded thing sits inside another, with an even inset, its corner
is the container's minus that inset, never its own token:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.menu {
  --menu-inset: var(--space-1);
  padding: var(--menu-inset);
  border-radius: var(--radius-field);
}
.menu-item {
  border-radius: calc(var(--radius-field) - var(--menu-inset));
}
`})}),`
`,(0,h.jsx)(t.p,{children:`At the default that is 8 − 4 = 4px for a menu item, and the pills Tabs
chips are their track's corner minus the 2px track inset. A negative
result clamps to 0, so a square container gets square children. Both
corners then stay concentric at every preset; two independent tokens only
line up at one.`}),`
`,(0,h.jsx)(t.p,{children:`The rule is for concentric shapes. A close button 12px inside a popover's
corner is a free-standing control, not a nested shape, and keeps its own
step.`}),`
`,(0,h.jsxs)(t.h3,{id:`3-radius-scales-with---scaling`,children:[`3. Radius scales with `,(0,h.jsx)(t.code,{children:`--scaling`})]}),`
`,(0,h.jsxs)(t.p,{children:[`Every step is multiplied by `,(0,h.jsx)(t.code,{children:`--scaling`}),`, as padding is. At 110% a 32px
button is 35.2px tall with 13.2px padding, and its 8px corner becomes
8.8px. Without this, the nesting rule above would hold at 100% only:
padding would shrink at 90% while the corners stayed put.`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsxs)(t.h2,{id:`always-round---radius-pill`,children:[`Always round: `,(0,h.jsx)(t.code,{children:`--radius-pill`})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`--radius-pill`}),` is `,(0,h.jsx)(t.code,{children:`9999px`}),` at every preset. It is for things that are
round by nature, not by preset: a badge count, an avatar, a switch track,
a slider thumb, a spinner. `,(0,h.jsx)(t.code,{children:`--radius-full`}),` is the preset's pill switch:
read directly it is `,(0,h.jsx)(t.code,{children:`0`}),` everywhere except `,(0,h.jsx)(t.code,{children:`radius="full-rounded"`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`intent-tokens`,children:`Intent tokens`}),`
`,(0,h.jsx)(t.p,{children:`What components actually use.`}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Token`}),(0,h.jsx)(t.th,{children:`Used by`}),(0,h.jsxs)(t.th,{children:[`Pills at `,(0,h.jsx)(t.code,{children:`full-rounded`})]})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-control`})}),(0,h.jsx)(t.td,{children:`the md tier of Button, ToggleButton, Tabs, Pagination`}),(0,h.jsx)(t.td,{children:`yes`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-field`})}),(0,h.jsx)(t.td,{children:`the md tier of every field, Select and Combobox lists, menus`}),(0,h.jsx)(t.td,{children:`no`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--radius-panel`})}),(0,h.jsx)(t.td,{children:`Card, Modal, Popover, the date picker`}),(0,h.jsx)(t.td,{children:`no`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`A new component should pick the intent that matches its shape, not a step.
Getting this wrong is invisible at the default preset and only shows up
when someone sets `,(0,h.jsx)(t.code,{children:`radius="full-rounded"`}),` — which is exactly the kind of bug a
token system exists to prevent.`]}),`
`,(0,h.jsx)(t.h2,{id:`steps`,children:`Steps`}),`
`,(0,h.jsxs)(t.p,{children:[`The raw scale — `,(0,h.jsx)(t.code,{children:`--radius-sm`}),` through `,(0,h.jsx)(t.code,{children:`--radius-xl`}),` — for anything that is
genuinely decorative rather than a control, field or panel.`]}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(t.p,{children:`These follow the preset like everything else, so a decorative corner in
application code stays in step with the controls beside it.`}),`
`,(0,h.jsxs)(t.p,{children:[`A genuinely circular element uses `,(0,h.jsx)(t.code,{children:`--radius-pill`}),` (see above), not
`,(0,h.jsx)(t.code,{children:`--radius-full`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`scoping-and-overriding`,children:`Scoping and overriding`}),`
`,(0,h.jsxs)(t.p,{children:[`Presets nest, and `,(0,h.jsx)(t.code,{children:`Theme`}),` takes a `,(0,h.jsx)(t.code,{children:`render`}),` prop, so a single component can
opt out without a wrapper element:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="full-rounded" render={<Button />}>
  Just this one is a pill
</Theme>
`})}),`
`,(0,h.jsxs)(t.p,{children:[`For a value the presets don't cover, set the variables directly — `,(0,h.jsx)(t.code,{children:`tokens`}),`
is applied after the preset, so it wins:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="rounded" tokens={{ 'radius-factor': '2.4' }}>
`})}),`
`,(0,h.jsx)(t.p,{children:`Globally, change the base in CSS and leave the factor to the presets:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`:root {
  --radius: 1rem;
}
`})}),`
`,(0,h.jsx)(t.h2,{id:`one-caveat-about-the-base`,children:`One caveat about the base`}),`
`,(0,h.jsxs)(t.p,{children:[`The steps are offsets from the base — `,(0,h.jsx)(t.code,{children:`sm`}),` is `,(0,h.jsx)(t.code,{children:`base − 4px`}),`, not
`,(0,h.jsx)(t.code,{children:`base × 0.6`}),` — so a base far below the default degenerates. At
`,(0,h.jsx)(t.code,{children:`--radius: 0.25rem`}),` (4px) the steps are `,(0,h.jsx)(t.code,{children:`0 / 2 / 4 / 8px`}),` and `,(0,h.jsx)(t.code,{children:`sm`}),`
collapses to a square corner.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The factor does not have this problem, because it multiplies the finished
step. Prefer moving the preset over moving the base, and if the base does
need to change substantially, switch the four `,(0,h.jsx)(t.code,{children:`calc()`}),`s in `,(0,h.jsx)(t.code,{children:`tokens.css`}),`
from offsets to ratios.`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),o(),u()})))()}g();export{m as default};