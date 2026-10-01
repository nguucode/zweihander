import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Tabs.stories-DLrCJRGP.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:c}),`
`,(0,v.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,v.jsxs)(t.p,{children:[`Switches between views of the same thing without leaving the page:
Overview, Activity, Settings of one project. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/tabs`,rel:`nofollow`,children:`uiguideline.com/components/tabs`}),`.
Behaviour from Base UI's `,(0,v.jsx)(t.a,{href:`https://base-ui.com/react/components/tabs`,rel:`nofollow`,children:`Tabs`}),`.`]}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Tab list`})}),(0,v.jsx)(t.td,{children:`The row (or column) of tabs.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Tab`})}),(0,v.jsxs)(t.td,{children:[`Optional icon and a label, medium weight. `,(0,v.jsx)(t.code,{children:`--muted-foreground`}),` until selected (`,(0,v.jsx)(t.code,{children:`--foreground`}),` on pills).`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Indicator`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`underline`}),`: a 2px `,(0,v.jsx)(t.code,{children:`--foreground`}),` bar that slides to the selected tab. `,(0,v.jsx)(t.code,{children:`pills`}),`: a `,(0,v.jsx)(t.code,{children:`--background`}),` segment with a `,(0,v.jsx)(t.code,{children:`--control-border`}),` edge.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Panel`})}),(0,v.jsxs)(t.td,{children:[`The selected tab's `,(0,v.jsx)(t.code,{children:`content`}),`.`]})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`items`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`{ value, label, content?, icon?, disabled? }[]`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Required.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`value`}),`, `,(0,v.jsx)(t.code,{children:`defaultValue`}),`, `,(0,v.jsx)(t.code,{children:`onValueChange`})]}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:`first enabled`}),(0,v.jsx)(t.td,{children:`Controlled or uncontrolled.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`appearance`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`underline`}),`, `,(0,v.jsx)(t.code,{children:`pills`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`underline`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`size`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sm`}),`, `,(0,v.jsx)(t.code,{children:`md`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`md`})}),(0,v.jsx)(t.td,{children:`32 or 40px tabs.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`orientation`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`horizontal`}),`, `,(0,v.jsx)(t.code,{children:`vertical`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`horizontal`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`isFullWidth`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Tabs share the width equally.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`activateOnFocus`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Select as focus moves.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`keepMounted`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Keep hidden panels in the DOM.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`aria-label`})}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Names the tab list.`})]})]})]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Underline for sections, pills for view switches.`}),` Underline tabs
sit on a 1px rule and read as the sections of a page; pills sit in a
`,(0,v.jsx)(t.code,{children:`--muted`}),` track and suit a compact "List / Board" switch in a toolbar.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Pills keep full-strength labels.`}),` `,(0,v.jsx)(t.code,{children:`--muted-foreground`}),` is 4.3:1 on
the `,(0,v.jsx)(t.code,{children:`--muted`}),` track, under the 4.5:1 floor, so every pill label is
`,(0,v.jsx)(t.code,{children:`--foreground`}),` and the selected one is marked by its lifted,
outlined segment rather than by colour.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Selection is manual by default.`}),` Arrow keys move focus; Enter or
Space selects. That keeps a slow panel from loading on every keypress;
`,(0,v.jsx)(t.code,{children:`activateOnFocus`}),` switches to selecting as you go, for light panels.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`role="tablist"`}),` of `,(0,v.jsx)(t.code,{children:`role="tab"`}),` buttons with `,(0,v.jsx)(t.code,{children:`aria-selected`}),` and
`,(0,v.jsx)(t.code,{children:`aria-controls`}),`; each panel is a `,(0,v.jsx)(t.code,{children:`role="tabpanel"`}),` labelled by its tab.
Name the list with `,(0,v.jsx)(t.code,{children:`aria-label`}),` when no heading does.`]}),`
`,(0,v.jsx)(t.li,{children:`One tab stop: Tab moves into the list and out to the panel; arrows
move between tabs (Up and Down when vertical), Home and End jump to
the ends.`}),`
`,(0,v.jsxs)(t.li,{children:[`A disabled tab still takes focus, marked `,(0,v.jsx)(t.code,{children:`aria-disabled`}),`, so it is
found and announced, but it cannot be selected.`]}),`
`,(0,v.jsx)(t.li,{children:`Tabs are 32 or 40px tall and grow to 44px on coarse pointers.`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};