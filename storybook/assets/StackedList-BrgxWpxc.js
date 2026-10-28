import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./StackedList.stories-BPK3Ddog.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(t.h1,{id:`stacked-list`,children:`Stacked List`}),`
`,(0,b.jsx)(t.p,{children:`Records as rows, one under the other: people on a team, projects, files,
invoices. Each row names the record, says a little about it, and either
opens it or offers its actions. After Tailwind UI Application UI, Lists:
Stacked Lists; Polaris Resource list; Salesforce Item.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/stacked-list.json
`})}),`
`,(0,b.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,b.jsxs)(t.p,{children:[`An Avatar or an Icon, the `,(0,b.jsx)(t.code,{children:`title`}),` with a `,(0,b.jsx)(t.code,{children:`description`}),` under it, and
`,(0,b.jsx)(t.code,{children:`meta`}),` at the end: facts that help pick the row out, such as a role, an
owner or a date. A line divides the rows.`]}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsx)(t.h2,{id:`linked`,children:`Linked`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`href`}),` makes the title a link whose target is the whole row, with a
chevron at the end to say it opens. `,(0,b.jsx)(t.code,{children:`status`}),` takes a Tag (or a Badge)
and puts it after the title.`]}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(t.h2,{id:`with-actions`,children:`With actions`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`actions`}),` takes `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),`
entries, the same as Table's `,(0,b.jsx)(t.code,{children:`rowActions`}),`: a ⋯ button at the end of the
row, named "Actions for" the title, and a `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-context-menu--docs`,children:`Context
Menu`}),` on the row
with the same entries, for right click or long press. A row with `,(0,b.jsx)(t.code,{children:`href`}),`
keeps the browser's own link menu instead (open in a new tab, copy the
link), so there the ⋯ button is the only way in.`]}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsxs)(t.p,{children:[`A row can link and have actions: the menu takes the chevron's place and
sits above the row's link, so a click on it opens the menu, not the
record. Keep `,(0,b.jsx)(t.code,{children:`status`}),`, `,(0,b.jsx)(t.code,{children:`description`}),` and `,(0,b.jsx)(t.code,{children:`meta`}),` free of controls on a
linked row: the row's link covers them.`]}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`frame-footer-and-empty`,children:`Frame, footer and empty`}),`
`,(0,b.jsxs)(t.p,{children:[`The frame, the lines between rows, the footer and the empty state come
from `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-list-container--docs`,children:`List Container`}),`:
`,(0,b.jsx)(t.code,{children:`appearance`}),` puts the list in a card (`,(0,b.jsx)(t.code,{children:`card`}),`) or makes each row its own
panel (`,(0,b.jsx)(t.code,{children:`separate`}),`).`]}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`footer`}),` goes after the last row, past a divider. A list on its own page
takes a `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-pagination--docs`,children:`Pagination`}),`;
a short list in a card or on a dashboard takes a "View all" link.`]}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(t.h3,{id:`empty`,children:`Empty`}),`
`,(0,b.jsxs)(t.p,{children:[`No items shows `,(0,b.jsx)(t.code,{children:`empty`}),`, "Nothing here yet." by default, in place of the
list. The footer still shows.`]}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsxs)(t.p,{children:[`Every `,(0,b.jsx)(t.code,{children:`<div>`}),` attribute passes through to the root, so a page names the
list with `,(0,b.jsx)(t.code,{children:`role="region"`}),` and `,(0,b.jsx)(t.code,{children:`aria-label`}),` when it has no heading of its
own.`]}),`
`,(0,b.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`The media column is as wide as a medium Avatar; an Icon sits in a
filled circle of that size, and an Avatar covers it.`}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`meta`}),` sits at the end of the row while the title fits beside it, and
wraps under the text when it does not. The list has no breakpoint of
its own, so it works in a narrow aside as on a full page.`]}),`
`,(0,b.jsx)(t.li,{children:`Long titles, emails and paths break anywhere rather than overflow.`}),`
`,(0,b.jsxs)(t.li,{children:[`Rows pad by `,(0,b.jsx)(t.code,{children:`--space-inline`}),` above and below, as Table rows do, and
are at least `,(0,b.jsx)(t.code,{children:`--row-height`}),` tall: a one-line row without media lines up
with a Table row of the same density.`]}),`
`]}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Selection and bulk actions`}),` (Polaris) are left out: a list you
select from and act on in bulk is a
`,(0,b.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Actions`}),` are a ⋯ Menu, not buttons written out in the row:
Tailwind's "View" button is the row link, and two or more actions fit
one menu at every width.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Meta`}),` wraps under the text instead of hiding on small screens, so
nothing is lost on a phone.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`The rows are an unordered list, so a screen reader announces how many
there are.`}),`
`,(0,b.jsx)(t.li,{children:`The media is hidden from assistive tech: the title names the record.`}),`
`,(0,b.jsxs)(t.li,{children:[`A row with `,(0,b.jsx)(t.code,{children:`href`}),` is one link, named by its title; the status,
description and meta sit outside it. The chevron is decorative.`]}),`
`,(0,b.jsx)(t.li,{children:`Each row is one tab stop, two with actions: the link, then the ⋯
button.`}),`
`,(0,b.jsxs)(t.li,{children:[`The ⋯ button is named "Actions for" the title; keep `,(0,b.jsx)(t.code,{children:`title`}),` a string
when there are actions, or it falls back to "Actions for item 2". The
context menu is a shortcut to the same entries, never the only way to
reach one.`]}),`
`,(0,b.jsxs)(t.li,{children:[`The list has no landmark or heading of its own. Put it under a
heading, or pass `,(0,b.jsx)(t.code,{children:`role="region"`}),` and an `,(0,b.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),s(),_()})))()}x();export{y as default};