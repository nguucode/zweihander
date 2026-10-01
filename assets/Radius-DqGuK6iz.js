import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,n as a,s as o}from"./blocks-DfpLWjEg.js";import{a as s,i as c,n as l,r as u,t as d}from"./Radius.stories-D7TLEi82.js";function f(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`radius`,children:`Radius`}),`
`,(0,m.jsxs)(t.p,{children:[`Rounding is a `,(0,m.jsx)(t.strong,{children:`single setting`}),`, not a value picked per component. A
`,(0,m.jsx)(t.code,{children:`radius`}),` preset on `,(0,m.jsx)(t.code,{children:`Theme`}),` rescales everything inside it at once, and
components follow because they reference an `,(0,m.jsx)(t.em,{children:`intent`}),` — control, field,
panel — rather than a fixed number.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="large">
  <Button>Rounder</Button>
</Theme>
`})}),`
`,(0,m.jsx)(t.h2,{id:`presets`,children:`Presets`}),`
`,(0,m.jsxs)(t.p,{children:[`Five: `,(0,m.jsx)(t.code,{children:`none`}),`, `,(0,m.jsx)(t.code,{children:`small`}),`, `,(0,m.jsxs)(t.strong,{children:[(0,m.jsx)(t.code,{children:`medium`}),` (the default)`]}),`, `,(0,m.jsx)(t.code,{children:`large`}),`, `,(0,m.jsx)(t.code,{children:`full`}),`. The
default is set by `,(0,m.jsx)(t.code,{children:`--radius-factor: 1`}),` and `,(0,m.jsx)(t.code,{children:`--radius-full: 0px`}),` on
`,(0,m.jsx)(t.code,{children:`:root`}),`, which is exactly what the `,(0,m.jsx)(t.code,{children:`medium`}),` preset writes — so a scope
with no `,(0,m.jsx)(t.code,{children:`radius`}),` prop and a scope with `,(0,m.jsx)(t.code,{children:`radius="medium"`}),` are identical.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`Look at the `,(0,m.jsx)(t.code,{children:`full`}),` row. `,(0,m.jsx)(t.strong,{children:`The button becomes a pill; the input and the
panel get rounder but stop short of one.`}),` That is the whole reason this
is a system rather than a number: a fully rounded text field reads as a
search pill in a form that isn't one, and a fully rounded card stops
looking like a container. Only controls opt all the way in.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`none`}),` flattens every corner in the scope to `,(0,m.jsx)(t.code,{children:`0`}),`, including panels.`]}),`
`,(0,m.jsx)(t.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,m.jsxs)(t.p,{children:[`Two variables do the work, both on `,(0,m.jsx)(t.code,{children:`:root`}),`:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Variable`}),(0,m.jsx)(t.th,{children:`Default`}),(0,m.jsx)(t.th,{children:`Set by`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0.625rem`})}),(0,m.jsx)(t.td,{children:`you, for the base step`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-factor`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1`})}),(0,m.jsxs)(t.td,{children:[`the `,(0,m.jsx)(t.code,{children:`radius`}),` preset`]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-full`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})}),(0,m.jsxs)(t.td,{children:[`the `,(0,m.jsx)(t.code,{children:`radius`}),` preset, only at `,(0,m.jsx)(t.code,{children:`full`})]})]})]})]}),`
`,(0,m.jsx)(t.p,{children:`Every step is the base multiplied by the factor, so the preset scales the
whole scale rather than replacing it:`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Preset`}),(0,m.jsx)(t.th,{children:`Factor`}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`--radius-full`})})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`none`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`small`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0.5`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`medium`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`large`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1.5`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0px`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`full`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`1.5`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`9999px`})})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`The pill is a `,(0,m.jsx)(t.code,{children:`max()`}),`. `,(0,m.jsx)(t.code,{children:`--radius-control`}),` resolves to
`,(0,m.jsx)(t.code,{children:`max(step, var(--radius-full))`}),` — normally the step wins because
`,(0,m.jsx)(t.code,{children:`--radius-full`}),` is `,(0,m.jsx)(t.code,{children:`0px`}),`, and at the `,(0,m.jsx)(t.code,{children:`full`}),` preset the `,(0,m.jsx)(t.code,{children:`9999px`}),` wins
instead.`]}),`
`,(0,m.jsx)(t.p,{children:`Fields and panels use the same shape with a ceiling wrapped around it:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`max(step, min(cap, var(--radius-full)))
`})}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`min(cap, --radius-full)`}),` is `,(0,m.jsx)(t.code,{children:`0px`}),` normally and the cap at `,(0,m.jsx)(t.code,{children:`full`}),`, so they
step up with the preset and stop there. Concretely, at the default base:`]}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Preset`}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`control`})}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`field`})}),(0,m.jsx)(t.th,{children:(0,m.jsx)(t.code,{children:`panel`})})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`none`})}),(0,m.jsx)(t.td,{children:`0`}),(0,m.jsx)(t.td,{children:`0`}),(0,m.jsx)(t.td,{children:`0`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`small`})}),(0,m.jsx)(t.td,{children:`4px`}),(0,m.jsx)(t.td,{children:`4px`}),(0,m.jsx)(t.td,{children:`5px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`medium`})}),(0,m.jsx)(t.td,{children:`8px`}),(0,m.jsx)(t.td,{children:`8px`}),(0,m.jsx)(t.td,{children:`10px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`large`})}),(0,m.jsx)(t.td,{children:`12px`}),(0,m.jsx)(t.td,{children:`12px`}),(0,m.jsx)(t.td,{children:`15px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`full`})}),(0,m.jsx)(t.td,{children:`pill`}),(0,m.jsx)(t.td,{children:`15px`}),(0,m.jsx)(t.td,{children:`21px`})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`The input is 40px tall, so a pill would be 20px — `,(0,m.jsx)(t.code,{children:`field`}),` at `,(0,m.jsx)(t.code,{children:`full`}),` lands
under that on purpose, and a test asserts it.`]}),`
`,(0,m.jsx)(t.h2,{id:`intent-tokens`,children:`Intent tokens`}),`
`,(0,m.jsx)(t.p,{children:`What components actually use.`}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Token`}),(0,m.jsx)(t.th,{children:`Used by`}),(0,m.jsxs)(t.th,{children:[`Pills at `,(0,m.jsx)(t.code,{children:`full`})]})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-control`})}),(0,m.jsx)(t.td,{children:`Button, and future badges/chips`}),(0,m.jsx)(t.td,{children:`yes`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-field`})}),(0,m.jsx)(t.td,{children:`TextInput, and future textareas/selects`}),(0,m.jsx)(t.td,{children:`no`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--radius-panel`})}),(0,m.jsx)(t.td,{children:`future cards, dialogs, popovers`}),(0,m.jsx)(t.td,{children:`no`})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`A new component should pick the intent that matches its shape, not a step.
Getting this wrong is invisible at the default preset and only shows up
when someone sets `,(0,m.jsx)(t.code,{children:`radius="full"`}),` — which is exactly the kind of bug a
token system exists to prevent.`]}),`
`,(0,m.jsx)(t.h2,{id:`steps`,children:`Steps`}),`
`,(0,m.jsxs)(t.p,{children:[`The raw scale — `,(0,m.jsx)(t.code,{children:`--radius-sm`}),` through `,(0,m.jsx)(t.code,{children:`--radius-xl`}),` — for anything that is
genuinely decorative rather than a control, field or panel.`]}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.p,{children:`These follow the preset like everything else, so a decorative corner in
application code stays in step with the controls beside it.`}),`
`,(0,m.jsxs)(t.p,{children:[`A genuinely circular element — an avatar, a status dot — should use
`,(0,m.jsx)(t.code,{children:`border-radius: 50%`}),` rather than a token. `,(0,m.jsx)(t.code,{children:`--radius-full`}),` is the pill
switch, not a "make this round" value: read directly it is `,(0,m.jsx)(t.code,{children:`0`}),` at every
preset except `,(0,m.jsx)(t.code,{children:`full`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`scoping-and-overriding`,children:`Scoping and overriding`}),`
`,(0,m.jsxs)(t.p,{children:[`Presets nest, and `,(0,m.jsx)(t.code,{children:`Theme`}),` takes a `,(0,m.jsx)(t.code,{children:`render`}),` prop, so a single component can
opt out without a wrapper element:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="full" render={<Button />}>
  Just this one is a pill
</Theme>
`})}),`
`,(0,m.jsxs)(t.p,{children:[`For a value the presets don't cover, set the variables directly — `,(0,m.jsx)(t.code,{children:`tokens`}),`
is applied after the preset, so it wins:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Theme radius="large" tokens={{ 'radius-factor': '2.4' }}>
`})}),`
`,(0,m.jsx)(t.p,{children:`Globally, change the base in CSS and leave the factor to the presets:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`:root {
  --radius: 1rem;
}
`})}),`
`,(0,m.jsx)(t.h2,{id:`one-caveat-about-the-base`,children:`One caveat about the base`}),`
`,(0,m.jsxs)(t.p,{children:[`The steps are offsets from the base — `,(0,m.jsx)(t.code,{children:`sm`}),` is `,(0,m.jsx)(t.code,{children:`base − 4px`}),`, not
`,(0,m.jsx)(t.code,{children:`base × 0.6`}),` — so a base far below the default degenerates. At
`,(0,m.jsx)(t.code,{children:`--radius: 0.25rem`}),` (4px) the steps are `,(0,m.jsx)(t.code,{children:`0 / 2 / 4 / 8px`}),` and `,(0,m.jsx)(t.code,{children:`sm`}),`
collapses to a square corner.`]}),`
`,(0,m.jsxs)(t.p,{children:[`The factor does not have this problem, because it multiplies the finished
step. Prefer moving the preset over moving the base, and if the base does
need to change substantially, switch the four `,(0,m.jsx)(t.code,{children:`calc()`}),`s in `,(0,m.jsx)(t.code,{children:`tokens.css`}),`
from offsets to ratios.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),r(),i(),s()})))()}h();export{p as default};