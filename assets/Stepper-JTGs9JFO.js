import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Stepper.stories-RhEh-vpY.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`stepper`,children:`Stepper`}),`
`,(0,_.jsxs)(t.p,{children:[`Shows where the reader is in a flow of a few ordered steps: sign-up,
checkout, a setup wizard. Spec:
`,(0,_.jsx)(t.a,{href:`https://www.uiguideline.com/components/stepper`,rel:`nofollow`,children:`uiguideline.com/components/stepper`}),`.
A plain element.`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Marker`})}),(0,_.jsxs)(t.td,{children:[`A 32px disc (24px at `,(0,_.jsx)(t.code,{children:`sm`}),`): a check when complete, the number when current (primary ring) or upcoming (grey ring), a warning icon on error.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Label`})}),(0,_.jsx)(t.td,{children:`Medium weight; muted for upcoming steps, danger for an error.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Description`})}),(0,_.jsx)(t.td,{children:`Optional, small, muted.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Connector`})}),(0,_.jsxs)(t.td,{children:[`The line to the next step: primary once the step is complete, `,(0,_.jsx)(t.code,{children:`--border`}),` ahead.`]})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`steps`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`{ label, description?, status? }[]`})}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Required.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`current`})}),(0,_.jsx)(t.td,{children:`number (0-based)`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Required. Earlier steps are complete.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`orientation`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`horizontal`}),`, `,(0,_.jsx)(t.code,{children:`vertical`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`horizontal`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`size`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`sm`}),`, `,(0,_.jsx)(t.code,{children:`md`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`md`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onStepClick`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(index) => void`})}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Makes finished and current steps buttons.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`aria-label`})}),(0,_.jsx)(t.td,{children:`string`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`Progress`})}),(0,_.jsx)(t.td,{children:`The landmark's name.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`A step's `,(0,_.jsx)(t.code,{children:`status`}),` (`,(0,_.jsx)(t.code,{children:`complete`}),`, `,(0,_.jsx)(t.code,{children:`current`}),`, `,(0,_.jsx)(t.code,{children:`upcoming`}),`, `,(0,_.jsx)(t.code,{children:`error`}),`) overrides
the one worked out from `,(0,_.jsx)(t.code,{children:`current`}),`. Every other `,(0,_.jsx)(t.code,{children:`<nav>`}),` attribute passes
through.`]}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Horizontal puts the text under the marker`}),`, so the connectors run
marker to marker and every step gets the same width whatever the
length of its label. Use vertical when the steps have long
descriptions, or in a narrow sidebar.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Only finished steps can be revisited.`}),` With `,(0,_.jsx)(t.code,{children:`onStepClick`}),`, complete
and current steps become buttons; upcoming ones stay text, because a
flow that can be skipped ahead is a set of Tabs.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Complete is filled, current is ringed.`}),` Both use the primary
colour; the fill says "done", the ring says "you are here".`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`A `,(0,_.jsx)(t.code,{children:`<nav>`}),` landmark named "Progress" around an ordered list: screen
readers announce the number of steps and the position of each.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The current step has `,(0,_.jsx)(t.code,{children:`aria-current="step"`}),`.`]}),`
`,(0,_.jsx)(t.li,{children:`The marker is decorative, so each label carries its status in
visually hidden text: "Account, completed", "Invite, not started",
"Workspace, has an error".`}),`
`,(0,_.jsxs)(t.li,{children:[`With `,(0,_.jsx)(t.code,{children:`onStepClick`}),`, the clickable steps are real buttons with the
focus ring, and grow to 44px on coarse pointers.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};