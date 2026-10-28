import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./SavedViews.stories-26BhNSkp.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(t.h1,{id:`saved-views`,children:`Saved Views`}),`
`,(0,v.jsx)(t.p,{children:`The views of a list or table, the ones that ship with the product and the
ones people save, with a mark when the view in force has changed, Save,
Save as new view and Manage views. After SAP Fiori variant management
(List Report, Worklist) and Polaris Index filters.`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/saved-views.json
`})}),`
`,(0,v.jsxs)(t.p,{children:[`The pattern owns no views: it renders the `,(0,v.jsx)(t.code,{children:`views`}),` you keep and calls you
back. What a view holds (filters, sort, columns) is yours to store; compare
it with what is on screen and pass `,(0,v.jsx)(t.code,{children:`isModified`}),`. Picking another view puts
that view's saved state in force and drops unsaved changes, as in Fiori:
Modified, beside the views, is the warning.`]}),`
`,(0,v.jsx)(t.h2,{id:`tabs`,children:`Tabs`}),`
`,(0,v.jsxs)(t.p,{children:[`For a handful of views. Each tab can carry a count. Put it above a
`,(0,v.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-filter-bar--docs`,children:`Filter Bar`}),`: picking
a view puts its filters in force there.`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`modified`,children:`Modified`}),`
`,(0,v.jsx)(t.p,{children:`Change a filter and the view says Modified, with Discard and Save. Save
writes the change into the view in force.`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`save-as-new-view`,children:`Save as new view`}),`
`,(0,v.jsxs)(t.p,{children:[`A predefined view cannot be saved over, so a change offers Save as new view
in place of Save; it is also always in View actions. The dialog asks for a
name, refuses an empty or taken one, and with `,(0,v.jsx)(t.code,{children:`isShareable`}),` offers to share
the view.`]}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`manage-views`,children:`Manage views`}),`
`,(0,v.jsxs)(t.p,{children:[`In View actions when you pass `,(0,v.jsx)(t.code,{children:`onDelete`}),`. It lists every view, marks the
predefined and shared ones, and deletes saved ones at once: pair it with an
Undo toast if a view is costly to rebuild. Deleting the view in force is
yours to handle: put another view in force, usually the first. There is no
rename or unshare yet: save a copy under the new name, then delete the old
one.`]}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`menu`,children:`Menu`}),`
`,(0,v.jsx)(t.p,{children:`For more views than fit on one line: a button names the view in force and
opens the views as a menu.`}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(a,{of:m}),`
`,(0,v.jsxs)(t.p,{children:[`Every other `,(0,v.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,v.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`One row`}),` while there is room: the views take the free space, the
actions sit at the end.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`The actions drop under the views`}),` when the row is too narrow, rather
than squeeze the tabs.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`More tabs than fit scroll sideways`}),` inside the bar; nothing widens the
page. Past five or six views, use `,(0,v.jsx)(t.code,{children:`display="menu"`}),`.`]}),`
`,(0,v.jsx)(t.li,{children:`In menu display a long view name truncates with an ellipsis.`}),`
`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`In tabs display the views are a tab list named "Views" (Manage views'
list takes the same name); pass
`,(0,v.jsx)(t.code,{children:`aria-label`}),` to say what they list, e.g. "Invoice views". Each tab's name
includes its count.`]}),`
`,(0,v.jsx)(t.li,{children:`In menu display the button's name says the list and the view in force,
e.g. "Invoice views: All"; the views are radio items in the menu.`}),`
`,(0,v.jsxs)(t.li,{children:[`Modified sits in a `,(0,v.jsx)(t.code,{children:`status`}),` region, so a screen reader announces it when
a change makes the view differ from what is saved.`]}),`
`,(0,v.jsx)(t.li,{children:`Save as new view moves focus to the name field. A missing or taken name
marks the field invalid and names the problem in its description.`}),`
`,(0,v.jsx)(t.li,{children:`Manage views: each delete button is named after its view, e.g. "Delete
To chase". Deleting one moves focus to the next delete button, or the one
before, or to Done when none is left.`}),`
`,(0,v.jsx)(t.li,{children:`Save, Discard and Save as new view take away the button that was
pressed; focus moves to the view in force.`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),s(),l()})))()}y();export{_ as default};