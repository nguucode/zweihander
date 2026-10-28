import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./ListContainer.stories---xAtxPj.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h1,{id:`list-container`,children:`List Container`}),`
`,(0,y.jsx)(t.p,{children:`The frame around a list: a line between rows, optionally a panel around
them, a footer and an empty state. It owns the rows' padding and dividers
and nothing inside them. After Tailwind UI Application UI, Lists: List
containers.`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/list-container.json
`})}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`ListContainer`}),` is the `,(0,y.jsx)(t.code,{children:`<ul>`}),` and its frame; `,(0,y.jsx)(t.code,{children:`ListContainerItem`}),` is one
`,(0,y.jsx)(t.code,{children:`<li>`}),`, padded as a Table row. For records (an avatar, a title, a status, a
link or actions), use `,(0,y.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-stacked-list--docs`,children:`Stacked
List`}),`: it renders
through List Container and takes the same `,(0,y.jsx)(t.code,{children:`appearance`}),`, `,(0,y.jsx)(t.code,{children:`footer`}),` and
`,(0,y.jsx)(t.code,{children:`empty`}),`, so there is one way to frame a list, add a footer or say it is
empty.`]}),`
`,(0,y.jsx)(t.h2,{id:`flat`,children:`Flat`}),`
`,(0,y.jsx)(t.p,{children:`Rows divided by a line, no frame. The default: a list in a page section,
or in a panel that already has an edge.`}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`card`,children:`Card`}),`
`,(0,y.jsx)(t.p,{children:`The same rows in a bordered panel, as an outline Card, for a list that
stands on its own on the page.`}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`separate`,children:`Separate`}),`
`,(0,y.jsx)(t.p,{children:`Each row its own panel, a gap instead of lines: rows that read as separate
objects rather than one list.`}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`with-stacked-list`,children:`With Stacked List`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,y.jsxs)(t.p,{children:[`No rows shows `,(0,y.jsx)(t.code,{children:`empty`}),`, "Nothing here yet." by default, in place of the
list, inside the frame. The footer still shows.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsxs)(t.p,{children:[`Every `,(0,y.jsx)(t.code,{children:`<div>`}),` attribute passes through to the root, and every `,(0,y.jsx)(t.code,{children:`<li>`}),`
attribute to `,(0,y.jsx)(t.code,{children:`ListContainerItem`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Rows pad by `,(0,y.jsx)(t.code,{children:`--space-inline`}),` above and below and `,(0,y.jsx)(t.code,{children:`--space-4`}),` at the
sides, and are at least `,(0,y.jsx)(t.code,{children:`--row-height`}),` tall, so a list lines up with a
Table of the same density.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`footer`}),` sits past a divider in `,(0,y.jsx)(t.code,{children:`flat`}),` and `,(0,y.jsx)(t.code,{children:`card`}),`, and after the gap in
`,(0,y.jsx)(t.code,{children:`separate`}),`.`]}),`
`,(0,y.jsx)(t.li,{children:`No breakpoints: the container is as wide as its column. Long words in a
row break anywhere rather than overflow.`}),`
`]}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Full width on mobile`}),` (Tailwind's card and separate variants that
drop their side edges on small screens) is left out: whether a panel
bleeds to the screen edge is the page layout's call, not the list's.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Flat card`}),` (a tinted panel without a border) is the `,(0,y.jsx)(t.code,{children:`card`}),`
appearance: one panel look, the outline Card's.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`The rows are an unordered list, so a screen reader announces how many
there are. Keep `,(0,y.jsx)(t.code,{children:`ListContainerItem`}),` the only child of the container, so
the list has only `,(0,y.jsx)(t.code,{children:`<li>`}),` children.`]}),`
`,(0,y.jsx)(t.li,{children:`The empty state is a paragraph in place of the list, so an empty list
is not announced as a list of zero items.`}),`
`,(0,y.jsxs)(t.li,{children:[`The container has no landmark or heading of its own. Put it under a
heading, or pass `,(0,y.jsx)(t.code,{children:`role="region"`}),` and an `,(0,y.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),s(),d()})))()}b();export{v as default};