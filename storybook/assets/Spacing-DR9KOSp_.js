import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{n as s,r as c,t as l}from"./Spacing.stories-CJOTNstx.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,f.jsxs)(t.p,{children:[`Pick a spacing token by `,(0,f.jsx)(t.strong,{children:`what the gap does`}),`, not by its size. Six roles
cover every gap and pad in the kit; a `,(0,f.jsx)(t.strong,{children:`density`}),`, Default or Compact,
decides the number behind each one. A designer never chooses between 12
and 16 pixels: they choose `,(0,f.jsx)(t.code,{children:`--space-cluster`}),` or `,(0,f.jsx)(t.code,{children:`--space-group`}),`, and the
product's density does the rest.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`the-six-roles`,children:`The six roles`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Token`}),(0,f.jsx)(t.th,{children:`Use for`}),(0,f.jsx)(t.th,{children:`Default`}),(0,f.jsx)(t.th,{children:`Compact`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-stack`})}),(0,f.jsx)(t.td,{children:`Lines of text under each other: title to description, label to value`}),(0,f.jsx)(t.td,{children:`4`}),(0,f.jsx)(t.td,{children:`2`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-inline`})}),(0,f.jsx)(t.td,{children:`Small things side by side: icon to text, label to value on one line, sidebar items`}),(0,f.jsx)(t.td,{children:`8`}),(0,f.jsx)(t.td,{children:`4`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-cluster`})}),(0,f.jsx)(t.td,{children:`Controls or parts that sit together: filters in a toolbar, an avatar to its content, the parts of a page heading, inside a small card`}),(0,f.jsx)(t.td,{children:`12`}),(0,f.jsx)(t.td,{children:`8`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-group`})}),(0,f.jsx)(t.td,{children:`Items and blocks that belong together: cards in a row, toolbar to table, table cell sides`}),(0,f.jsx)(t.td,{children:`16`}),(0,f.jsx)(t.td,{children:`12`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-container`})}),(0,f.jsx)(t.td,{children:`Inside the edge of a card, panel or page heading`}),(0,f.jsx)(t.td,{children:`24`}),(0,f.jsx)(t.td,{children:`16`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--space-section`})}),(0,f.jsx)(t.td,{children:`Page edge and between page sections`}),(0,f.jsx)(t.td,{children:`24`}),(0,f.jsx)(t.td,{children:`20`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`The scale is short on purpose: 2, 4, 8, 12, 16, 20, 24. In Compact each
role takes the Default value of the role below it; only section steps
24 to 20. Section and container share 24px in Default, so separate
sections with a card edge or a rule, not with extra white space. AppShell
applies `,(0,f.jsx)(t.code,{children:`--space-section`}),` to the page edge from 64rem up; below that the
edge stays at its narrow value.`]}),`
`,(0,f.jsxs)(t.p,{children:[`The numeric steps (`,(0,f.jsx)(t.code,{children:`--space-1`}),` to `,(0,f.jsx)(t.code,{children:`--space-12`}),`) still exist for the few
places no role fits, such as the size of an icon disc. They do not follow
density.`]}),`
`,(0,f.jsx)(t.h2,{id:`density`,children:`Density`}),`
`,(0,f.jsx)(t.p,{children:`Density changes four things together, and keeps every size:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`The six roles`}),`, as in the table above.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`The control tier.`}),` Every tier exists in both densities. Compact
gives each tier the padding and gap of the tier below it; md drops from
32 to 28px, sm from 24 to 22px, xs stays at 20px (the floor of its text).`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Type.`}),` Body text is 14px in Default and 13px in Compact. Text of 12px
and below never shrinks; 13 to 16px drops 1px; headings from 20px up
drop one step. Compact body leading is 13/18, off the 4px grid on
purpose. See `,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-typography--docs`,children:`Typography`}),`.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Component sizes`}),`: the checkbox and radio box (`,(0,f.jsx)(t.code,{children:`--choice-box`}),`, 20 to
16), the radio dot, the three switch tracks, the progress bar heights,
avatars xs to lg (`,(0,f.jsx)(t.code,{children:`--avatar-md`}),`, 40 to 32), badge heights and dots, and
table rows (`,(0,f.jsx)(t.code,{children:`--row-height`}),`, 48 to 36). In Compact each size takes the
size below it; the smallest switch, avatar and badge step down further
so sizes stay apart.`]}),`
`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Control token`}),(0,f.jsx)(t.th,{children:`md (D / C)`}),(0,f.jsx)(t.th,{children:`sm (D / C)`}),(0,f.jsx)(t.th,{children:`xs (D / C)`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}`}),` height`]}),(0,f.jsx)(t.td,{children:`32 / 28`}),(0,f.jsx)(t.td,{children:`24 / 22`}),(0,f.jsx)(t.td,{children:`20 / 20`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-pad`}),` (fields, rows)`]}),(0,f.jsx)(t.td,{children:`10 / 8`}),(0,f.jsx)(t.td,{children:`8 / 6`}),(0,f.jsx)(t.td,{children:`6 / 4`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-pad-spacious`}),` (buttons)`]}),(0,f.jsx)(t.td,{children:`12 / 8`}),(0,f.jsx)(t.td,{children:`8 / 6`}),(0,f.jsx)(t.td,{children:`6 / 4`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`--control-{tier}-gap`}),` (icon to label)`]}),(0,f.jsx)(t.td,{children:`8 / 6`}),(0,f.jsx)(t.td,{children:`6 / 4`}),(0,f.jsx)(t.td,{children:`4 / 2`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`A small control inside a component (a table's sort button, a modal's
close button, a badge, the number input's steppers) reads the control tier
of its own size, like any other control, not a spacing role.`}),`
`,(0,f.jsx)(t.h2,{id:`setting-it`,children:`Setting it`}),`
`,(0,f.jsxs)(t.p,{children:[`Density is set like appearance: on the root of the app, through `,(0,f.jsx)(t.code,{children:`Theme`}),`.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<Theme density="compact">
  <App />
</Theme>
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Theme`}),` writes `,(0,f.jsx)(t.code,{children:`data-density`}),` on its element, and every token picks its
number from the nearest one. A nested `,(0,f.jsx)(t.code,{children:`Theme density="default"`}),` inside a
compact app gets Default back. Popups portal to `,(0,f.jsx)(t.code,{children:`<body>`}),`, so set density
at the root; for a compact panel inside a default page, pass the panel
element as `,(0,f.jsx)(t.code,{children:`container`}),` to Popover, Menu, Tooltip, Modal, Select, Combobox
and DatePicker so their popups render inside it.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Density and `,(0,f.jsx)(t.code,{children:`scaling`}),` are independent. Scaling multiplies every size by
one factor (12px becomes 11.2px at 93%); density picks each number,
keeps whole pixels and holds the 12px floor. Both can be set at once.`]}),`
`,(0,f.jsxs)(t.p,{children:[`In Storybook, the `,(0,f.jsx)(t.strong,{children:`Density`}),` toolbar switches every story between the two.`]}),`
`,(0,f.jsx)(t.h2,{id:`touch-and-rem`,children:`Touch and rem`}),`
`,(0,f.jsxs)(t.p,{children:[`Controls are below the 44px touch minimum in both densities on purpose:
on coarse pointers every control widens its hit area to 44px without
growing the box, so Compact does not cost touch users. Every value is in
`,(0,f.jsx)(t.code,{children:`rem`}),`, so it follows the user's root font size; "32px" is 32px at the
default 16px root.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),o(),c()})))()}p();export{d as default};