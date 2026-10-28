import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./InlineEdit.stories-DsOS1CpF.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h1,{id:`inline-edit`,children:`Inline Edit`}),`
`,(0,y.jsx)(t.p,{children:`A value that edits where it stands, in a table cell or a description list
row, so changing one field does not take a trip to a form. After the inline
edit of enterprise SaaS and ERP tools (Salesforce, Airtable, SAP Fiori's
editable tables).`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/inline-edit.json
`})}),`
`,(0,y.jsxs)(t.p,{children:[`The pattern owns no data. It shows `,(0,y.jsx)(t.code,{children:`value`}),`, calls `,(0,y.jsx)(t.code,{children:`onSave`}),` with the new
one, and shows the message you return when the save fails.`]}),`
`,(0,y.jsx)(t.h2,{id:`description-list`,children:`Description list`}),`
`,(0,y.jsx)(t.p,{children:`Each detail of a record edits in its row. Hover or focus a value and a
pencil shows that it can change; click it, or press Enter on it, and it
becomes a text input with the whole value selected. Enter or Save keeps the
change, Escape or Cancel drops it.`}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`table-cell`,children:`Table cell`}),`
`,(0,y.jsxs)(t.p,{children:[`Put it in a column's `,(0,y.jsx)(t.code,{children:`cell`}),`. Use `,(0,y.jsx)(t.code,{children:`size="sm"`}),` in a table row, and name each
one by its row in `,(0,y.jsx)(t.code,{children:`label`}),` ("PO reference for INV-1041"), since every cell in
the column says the same thing otherwise.`]}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`error`,children:`Error`}),`
`,(0,y.jsxs)(t.p,{children:[`Return a message from `,(0,y.jsx)(t.code,{children:`onSave`}),` (or throw one) and it shows under the field,
which stays open with what was typed. Typing again clears it. Check the
format here: the input is always `,(0,y.jsx)(t.code,{children:`type="text"`}),`, so `,(0,y.jsx)(t.code,{children:`inputMode`}),` only picks
the on-screen keyboard.`]}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`saving`,children:`Saving`}),`
`,(0,y.jsx)(t.p,{children:`Return a promise and the field is saving until it settles: the input is
read-only, Save spins, and Cancel and Escape wait. A rejection shows its
message as an error.`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`leaving-the-field`,children:`Leaving the field`}),`
`,(0,y.jsxs)(t.p,{children:[`Tab or click away and the change is saved, not lost. Focus goes where the
viewer sent it, and a slow save does not pull it back. A save that fails
leaves the field open with its error. An unchanged value closes without calling `,(0,y.jsx)(t.code,{children:`onSave`}),`.`]}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h2,{id:`empty-and-long-values`,children:`Empty and long values`}),`
`,(0,y.jsxs)(t.p,{children:[`An empty value shows `,(0,y.jsx)(t.code,{children:`placeholder`}),`, muted, so there is still something to
click. A long value wraps, even with no spaces, instead of widening the
cell.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsxs)(t.p,{children:[`Every other `,(0,y.jsx)(t.code,{children:`<div>`}),` attribute passes through to the root.`]}),`
`,(0,y.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`The value lines up with the text around it.`}),` The root pulls back by
the field's inline padding, so the value's text starts where a plain
cell's text does, and the input's text starts in the same place: entering
edit mode does not shift it. It pulls back by the extra height too, so the
value sits on the same line as the term or the cells beside it.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Save and Cancel sit at the end of the input`}),`, aligned to its box; an
error goes under the box and pushes the row taller, not the buttons down.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`The pencil does not take space away from the value`}),` on hover: it has
its place from the start, hidden until hover or focus. On a touch screen,
where nothing hovers, it always shows.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`On a touch screen`}),` the value's hit area grows to 44px without the value
growing.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`The value is a button named "Edit `,label,`: `,value,`", so a screen reader
says what it edits and what it holds. Enter or Space on it opens the
input, focused, with the value selected.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The input is named by `,(0,y.jsx)(t.code,{children:`label`}),`. Enter saves; Escape cancels and does not
close a Drawer or Modal around it.`]}),`
`,(0,y.jsx)(t.li,{children:`After Enter, Save, Escape or Cancel, focus returns to the value.`}),`
`,(0,y.jsx)(t.li,{children:`An error marks the input invalid and becomes its description, so it is
read with the field; a status announces it too, since after a blur save
focus has already left.`}),`
`,(0,y.jsx)(t.li,{children:`While saving, a status says "Saving" and Save is busy. Escape waits,
and still does not reach the overlay.`}),`
`]}),`
`,(0,y.jsx)(o,{of:p})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),s(),d()})))()}b();export{v as default};