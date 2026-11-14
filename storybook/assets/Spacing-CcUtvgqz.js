import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,r as a,s as o}from"./blocks-DsER1A51.js";import{n as s,r as c,t as l}from"./Spacing.stories-CKoQssjQ.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,f.jsxs)(t.p,{children:[`Pick a spacing token by `,(0,f.jsx)(t.strong,{children:`what the gap does`}),`, not by its size. Six roles
cover every gap and pad in the kit, and each role has one value. A
designer never chooses between 12 and 16 pixels: they choose
`,(0,f.jsx)(t.code,{children:`--space-cluster`}),` or `,(0,f.jsx)(t.code,{children:`--space-group`}),`.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`the-six-roles`,children:`The six roles`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Token`}),(0,f.jsx)(t.th,{children:`Use for`}),(0,f.jsx)(t.th,{children:`Value`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-stack`})}),(0,f.jsx)(t.td,{children:`Lines of text under each other: title to description, label to value`}),(0,f.jsx)(t.td,{children:`4`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-inline`})}),(0,f.jsx)(t.td,{children:`Small things side by side: icon to text, label to value on one line, breadcrumb items`}),(0,f.jsx)(t.td,{children:`8`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-cluster`})}),(0,f.jsx)(t.td,{children:`Controls or parts that sit together: filters in a toolbar, an avatar to its content, the parts of a page heading, inside a small card`}),(0,f.jsx)(t.td,{children:`12`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-group`})}),(0,f.jsx)(t.td,{children:`Items and blocks that belong together: cards in a row, toolbar to table, table cell sides`}),(0,f.jsx)(t.td,{children:`16`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-container`})}),(0,f.jsx)(t.td,{children:`Inside the edge of a card, panel or page heading`}),(0,f.jsx)(t.td,{children:`24`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-section`})}),(0,f.jsx)(t.td,{children:`Page edge and between page sections`}),(0,f.jsx)(t.td,{children:`24`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`The scale is short on purpose: 4, 8, 12, 16, 24. Section and container
share 24px, so separate sections with a card edge or a rule, not with
extra white space. Apply `,(0,f.jsx)(t.code,{children:`--space-section`}),` to the page edge from 64rem
up; below that, keep the edge at its narrow value.`]}),`
`,(0,f.jsxs)(t.p,{children:[`The numeric steps (`,(0,f.jsx)(t.code,{children:`--space-0-5`}),` to `,(0,f.jsx)(t.code,{children:`--space-20`}),`) still exist for the few
places no role fits, such as the size of an icon disc.`]}),`
`,(0,f.jsx)(t.h2,{id:`controls`,children:`Controls`}),`
`,(0,f.jsx)(t.p,{children:`The control tier binds a control's height, padding and icon gap, so a
control never reads a spacing role for its own box.`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Control token`}),(0,f.jsx)(t.th,{children:`lg`}),(0,f.jsx)(t.th,{children:`md`}),(0,f.jsx)(t.th,{children:`sm`}),(0,f.jsx)(t.th,{children:`xs`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}`}),` height`]}),(0,f.jsx)(t.td,{children:`40`}),(0,f.jsx)(t.td,{children:`32`}),(0,f.jsx)(t.td,{children:`24`}),(0,f.jsx)(t.td,{children:`20`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-pad`}),` (rows, menu items)`]}),(0,f.jsx)(t.td,{children:`–`}),(0,f.jsx)(t.td,{children:`10`}),(0,f.jsx)(t.td,{children:`8`}),(0,f.jsx)(t.td,{children:`6`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-pad-spacious`}),` (buttons, from the outer edge to the label)`]}),(0,f.jsx)(t.td,{children:`–`}),(0,f.jsx)(t.td,{children:`12`}),(0,f.jsx)(t.td,{children:`12`}),(0,f.jsx)(t.td,{children:`6`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-gap`}),` (icon to label)`]}),(0,f.jsx)(t.td,{children:`–`}),(0,f.jsx)(t.td,{children:`6`}),(0,f.jsx)(t.td,{children:`6`}),(0,f.jsx)(t.td,{children:`4`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`A field is `,(0,f.jsx)(t.code,{children:`lg`}),` tall by default and `,(0,f.jsx)(t.code,{children:`md`}),` at `,(0,f.jsx)(t.code,{children:`size="sm"`}),`, one step above a
button. It takes the numeric step `,(0,f.jsx)(t.code,{children:`--space-1-5`}),` (6px) inside its edge at
both sizes, and `,(0,f.jsx)(t.code,{children:`--space-stack`}),` between its label, box and helper text.`]}),`
`,(0,f.jsx)(t.p,{children:`A small control inside a component (a table's sort button, a modal's
close button, a badge, the number input's steppers) reads the control tier
of its own size, like any other control, not a spacing role.`}),`
`,(0,f.jsx)(t.h2,{id:`one-scale`,children:`One scale`}),`
`,(0,f.jsxs)(t.p,{children:[`The kit has one set of numbers: there is no density mode and no scaling
factor. Where a screen needs a tighter control, such as a button in a
table row or a filter in a toolbar, use that component's `,(0,f.jsx)(t.code,{children:`size="sm"`}),`.`]}),`
`,(0,f.jsx)(t.h2,{id:`touch-and-rem`,children:`Touch and rem`}),`
`,(0,f.jsxs)(t.p,{children:[`Controls are below the 44px touch minimum on purpose: on coarse pointers
every control widens its hit area to 44px without growing the box. Every
value is in `,(0,f.jsx)(t.code,{children:`rem`}),`, so it follows the user's root font size; "32px" is 32px
at the default 16px root.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};