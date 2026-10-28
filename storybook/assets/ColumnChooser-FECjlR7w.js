import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./ColumnChooser.stories-CMKJoQwz.js";function M(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{of:E}),`
`,(0,P.jsx)(t.h1,{id:`column-chooser`,children:`Column Chooser`}),`
`,(0,P.jsxs)(u,{children:[(0,P.jsxs)(_,{value:`overview`,children:[(0,P.jsx)(t.p,{children:`A button above a table that opens a list of its columns, each with a
checkbox to show or hide it, and a Reset that brings back the default set.`}),(0,P.jsx)(x,{of:E}),(0,P.jsx)(s,{of:D}),(0,P.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Variant`}),(0,P.jsx)(t.th,{children:`Use for`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`Every column shown (default)`}),(0,P.jsx)(t.td,{children:`Tables whose columns all matter at first, where people hide what they do not need.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`defaultVisibleKeys`})}),(0,P.jsx)(t.td,{children:`Tables with more columns than fit: show the essentials, let people add the rest. Reset goes back to this set.`})]})]})]}),(0,P.jsxs)(t.p,{children:[`The chooser does not touch the table: it reports the shown keys and you
filter the Table's `,(0,P.jsx)(t.code,{children:`columns`}),` with them. That keeps the choice yours to
store, per user or per view. With a resizable Table, pass `,(0,P.jsx)(t.code,{children:`onReset`}),` to put
the widths back too:`]}),(0,P.jsx)(s,{of:O}),(0,P.jsx)(s,{of:k}),(0,P.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,P.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-js`,children:`import { ColumnChooser } from 'zweihander/column-chooser'
`})}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/column-chooser.json
`})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`Source: `,(0,P.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/ColumnChooser.tsx`,rel:`nofollow`,children:`src/components/data-display/ColumnChooser.tsx`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; built from the Application UI catalogue, whose source for widths is shadcn's Resizable. Widths are Table's `,(0,P.jsx)(t.code,{children:`isResizable`}),` instead, a handle in each header rather than resizable panels`]}),`
`,(0,P.jsxs)(t.li,{children:[`Behaviour: the kit's `,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`, `,(0,P.jsx)(t.a,{href:`?path=/docs/components-controls-checkbox--docs`,children:`Checkbox`}),` and `,(0,P.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`})]}),`
`,(0,P.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,P.jsxs)(_,{value:`specs`,children:[(0,P.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,P.jsx)(y,{parts:T,children:(0,P.jsx)(a,{of:A})}),(0,P.jsxs)(t.p,{children:[`The open popovers on this tab and the next are pictures: real choosers
rendered in place with `,(0,P.jsx)(t.code,{children:`container`}),` and inert, the popup laid out under the
button where it opens.`]}),(0,P.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,P.jsx)(g,{caption:`Every chooser`,rows:[{part:`Checkbox list`,property:`Gap`,token:`--space-2`},{part:`Reset`,property:`Gap above`,token:`--space-3`}]}),(0,P.jsx)(t.p,{children:`The button is a medium Button and Reset a small one; the popover, its
padding and title are Popover's. Checkboxes keep their own sizes.`}),(0,P.jsx)(t.h2,{id:`color`,children:`Color`}),(0,P.jsxs)(t.p,{children:[`The chooser adds no colour of its own: the button is an outlined secondary
Button, Reset a ghost secondary Button, and the surface is Popover's
`,(0,P.jsx)(t.code,{children:`--popover`}),`. See those pages for their tokens.`]}),(0,P.jsx)(t.h2,{id:`states`,children:`States`}),(0,P.jsx)(t.p,{children:`The chooser is open or closed. The button keeps Button's states; each box
keeps Checkbox's, and a locked column shows Checkbox's disabled look:`}),(0,P.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,P.jsx)(a,{of:C})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Locked`}),`: the row header column, and the last column left, are ticked
and disabled: a table needs a name per row and at least one column.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`api`,children:`API`}),(0,P.jsx)(`div`,{style:{overflowX:`auto`},children:(0,P.jsx)(o,{of:E})}),(0,P.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,P.jsx)(t.p,{children:`There is no uiguideline spec. The catalogue's anatomy lists drag to
reorder as optional; it is left out until a table needs it, because it
needs a keyboard way to move as well.`})]}),(0,P.jsxs)(_,{value:`guidelines`,children:[(0,P.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,P.jsx)(t.p,{children:`Use a Column Chooser on a table with more columns than most people need at
once, typically six or more, where different people read different ones.`}),(0,P.jsx)(l,{do:(0,P.jsx)(a,{of:w}),doCaption:`A few optional columns beside a locked name column.`,dont:(0,P.jsx)(a,{of:S}),dontCaption:`A chooser for two columns: one is locked, so there is nothing to choose.`}),(0,P.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`To switch between whole layouts`}),` (a summary and a detailed set): use
saved views, so one choice changes several columns at once.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`To filter rows.`}),` Hiding a column does not hide rows; use filters in
the table's toolbar.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a table that fits.`}),` If every column fits on the screens it is
used on, leave them all shown.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`The button reports `,(0,P.jsx)(t.code,{children:`aria-haspopup="dialog"`}),` and `,(0,P.jsx)(t.code,{children:`aria-expanded`}),`. The
popup is a `,(0,P.jsx)(t.code,{children:`role="dialog"`}),` named by the label, "Columns".`]}),`
`,(0,P.jsx)(t.li,{children:`Opening moves focus into the dialog; Escape closes it and returns focus
to the button.`}),`
`,(0,P.jsx)(t.li,{children:`Each column is a checkbox named by its header, in table order; Space
toggles it, and the shown keys are reported in column order, the row
header always among them.`}),`
`,(0,P.jsxs)(t.li,{children:[`The row header column's checkbox, and the last checked one, are
`,(0,P.jsx)(t.code,{children:`aria-disabled`}),`: ticked and unchangeable.`]}),`
`,(0,P.jsx)(t.li,{children:`Reset is a button named "Reset" that brings back the default columns.`}),`
`]})]})]})]})}function N(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),r(),c(),d(),p(),h(),f(),m(),b(),j()})))()}F();export{N as default};