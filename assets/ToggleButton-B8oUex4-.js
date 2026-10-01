import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./ToggleButton.stories-B2zIiNRR.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`toggle-button`,children:`Toggle Button`}),`
`,(0,g.jsxs)(t.p,{children:[`A button that stays pressed: bold on or off, following or not, a filter
applied or not. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/toggle-button`,rel:`nofollow`,children:`uiguideline.com/components/toggle-button`}),`.
Behaviour from Base UI's `,(0,g.jsx)(t.a,{href:`https://base-ui.com/react/components/toggle`,rel:`nofollow`,children:`Toggle`}),`;
the look is `,(0,g.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`'s.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.p,{children:[`The same parts as Button — `,(0,g.jsx)(t.strong,{children:`container`}),`, `,(0,g.jsx)(t.strong,{children:`start icon`}),`, `,(0,g.jsx)(t.strong,{children:`label`}),`, `,(0,g.jsx)(t.strong,{children:`end
icon`}),`, `,(0,g.jsx)(t.strong,{children:`spinner`}),` — plus one state: `,(0,g.jsx)(t.strong,{children:`pressed`}),`.`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`State`}),(0,g.jsx)(t.th,{children:`Looks like`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`Unpressed`}),(0,g.jsxs)(t.td,{children:[`Always neutral: `,(0,g.jsx)(t.code,{children:`secondary outlined`}),` (or `,(0,g.jsx)(t.code,{children:`ghost`}),` when the appearance is ghost).`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[`Pressed, `,(0,g.jsx)(t.code,{children:`contained`})]}),(0,g.jsx)(t.td,{children:`The variant's solid fill.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[`Pressed, `,(0,g.jsx)(t.code,{children:`outlined`})]}),(0,g.jsx)(t.td,{children:`The variant's border on the neutral secondary fill.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[`Pressed, `,(0,g.jsx)(t.code,{children:`ghost`})]}),(0,g.jsx)(t.td,{children:`The neutral secondary fill.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`pressed`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`Controlled. The spec's `,(0,g.jsx)(t.code,{children:`isSelected`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`defaultPressed`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{children:`Uncontrolled starting state.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onPressedChange`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(pressed) => void`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`variant`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`primary`}),`, `,(0,g.jsx)(t.code,{children:`accent`}),`, `,(0,g.jsx)(t.code,{children:`secondary`}),`, `,(0,g.jsx)(t.code,{children:`destructive`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`primary`})}),(0,g.jsx)(t.td,{children:`Colour of the pressed state.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`appearance`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`contained`}),`, `,(0,g.jsx)(t.code,{children:`outlined`}),`, `,(0,g.jsx)(t.code,{children:`ghost`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`contained`})}),(0,g.jsx)(t.td,{children:`Style of the pressed state.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`}),`, `,(0,g.jsx)(t.code,{children:`lg`}),`, `,(0,g.jsx)(t.code,{children:`xl`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`md`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`startIcon`}),`, `,(0,g.jsx)(t.code,{children:`endIcon`})]}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isIconOnly`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsxs)(t.td,{children:[`Requires `,(0,g.jsx)(t.code,{children:`aria-label`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isLoading`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isFullWidth`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`disabled`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onClick`})}),(0,g.jsx)(t.td,{children:`function`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`pressed`}),`, `,(0,g.jsx)(t.code,{children:`defaultPressed`}),`, `,(0,g.jsx)(t.code,{children:`onPressedChange`})]}),` instead of
`,(0,g.jsx)(t.code,{children:`isSelected`}),`: Base UI's names, per the kit's convention for components
built on it. "Pressed" is also the ARIA word (`,(0,g.jsx)(t.code,{children:`aria-pressed`}),`).`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`disabled`})}),`, not `,(0,g.jsx)(t.code,{children:`isDisabled`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`variant`}),` and `,(0,g.jsx)(t.code,{children:`appearance`}),` describe the pressed state.`]}),` The spec
applies them to the button without saying what changes when it is
selected. If unpressed also took them, a contained toggle would look
pressed whether it was or not.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`A pressed outlined or ghost toggle is filled neutral, not tinted with
its variant.`}),` It stays in that state indefinitely, so its label has to
pass 4.5:1 on the fill — and red text on a red tint measures 3.7:1.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:(0,g.jsx)(t.code,{children:`isIconOnly`})}),`, as on Button.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.p,{children:`Use a toggle for a setting that is on or off and applies immediately.
If the choice is submitted with a form, use a Checkbox or Switch instead.
For one-of-many, use a group of radios or tabs.`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`A native `,(0,g.jsx)(t.code,{children:`<button>`}),` with `,(0,g.jsx)(t.code,{children:`aria-pressed`}),`, so a screen reader announces
"Subscribe, toggle button, pressed".`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Keep the label the same in both states.`}),` `,(0,g.jsx)(t.code,{children:`aria-pressed`}),` carries the
state; a label that switches from "Follow" to "Unfollow" as well reads
as "Unfollow, pressed", which contradicts itself.`]}),`
`,(0,g.jsx)(t.li,{children:`Enter and Space both toggle it.`}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`isLoading`}),` keeps it focusable but inert, as on Button.`]}),`
`,(0,g.jsxs)(t.li,{children:[`44×44px touch target at `,(0,g.jsx)(t.code,{children:`sm`}),` and `,(0,g.jsx)(t.code,{children:`md`}),`, from Button.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};