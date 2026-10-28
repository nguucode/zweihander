import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./GridList.stories-C5Go3au4.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(t.h1,{id:`grid-list`,children:`Grid List`}),`
`,(0,b.jsx)(t.p,{children:`Records as cards in a grid: people on a team, projects, files and photos.
Each card names the record, says a little about it, and either opens it
or offers its actions. After Tailwind UI Application UI, Lists: Grid
Lists.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/grid-list.json
`})}),`
`,(0,b.jsxs)(t.p,{children:[`A card takes the same item as a `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-stacked-list--docs`,children:`Stacked
List`}),` row, plus an
optional `,(0,b.jsx)(t.code,{children:`cover`}),`, so a list can switch between rows and cards without
reshaping its data. Use cards when the picture or the record's identity
matters more than comparing facts down a column; use Stacked List when
people scan and compare.`]}),`
`,(0,b.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,b.jsxs)(t.p,{children:[`An Avatar or an Icon, the `,(0,b.jsx)(t.code,{children:`title`}),` with a `,(0,b.jsx)(t.code,{children:`description`}),` under it, and
`,(0,b.jsx)(t.code,{children:`meta`}),` under that: an email, an owner, a date.`]}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`linked`,children:`Linked`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`href`}),` makes the title a link whose target is the whole card. `,(0,b.jsx)(t.code,{children:`status`}),`
takes a Tag (or a Badge) and puts it after the title.`]}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`with-actions`,children:`With actions`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`actions`}),` takes `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),`
entries, as in Stacked List and Table's `,(0,b.jsx)(t.code,{children:`rowActions`}),`: a ⋯ button in the
card's corner, named "Actions for" the title, and a `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-context-menu--docs`,children:`Context
Menu`}),` on the card
with the same entries. A card with `,(0,b.jsx)(t.code,{children:`href`}),` keeps the browser's own link
menu instead, so there the ⋯ button is the only way in.`]}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsxs)(t.p,{children:[`A card can link and have actions: the menu sits above the card's link, so
a click on it opens the menu, not the record. Keep `,(0,b.jsx)(t.code,{children:`status`}),`,
`,(0,b.jsx)(t.code,{children:`description`}),` and `,(0,b.jsx)(t.code,{children:`meta`}),` free of controls on a linked card: the link
covers them.`]}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`with-a-cover`,children:`With a cover`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`cover`}),` puts a picture across the top of the card, edge to edge, at
16:9: a file preview, a photo, a logo. It is decorative, so give the
`,(0,b.jsx)(t.code,{children:`<img>`}),` `,(0,b.jsx)(t.code,{children:`alt=""`}),`; the title names the card.`]}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(t.h2,{id:`footer-and-empty`,children:`Footer and empty`}),`
`,(0,b.jsxs)(t.p,{children:[`The card panels, the footer and the empty state come from `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-list-container--docs`,children:`List
Container`}),`,
always in its `,(0,b.jsx)(t.code,{children:`separate`}),` appearance: a card is its own panel, so there is
no `,(0,b.jsx)(t.code,{children:`flat`}),` or `,(0,b.jsx)(t.code,{children:`card`}),` grid. `,(0,b.jsx)(t.code,{children:`footer`}),` goes after the grid; `,(0,b.jsx)(t.code,{children:`empty`}),` shows in
place of it, "Nothing here yet." by default.`]}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsxs)(t.p,{children:[`Every `,(0,b.jsx)(t.code,{children:`<div>`}),` attribute passes through to the root, so a page names the
grid with `,(0,b.jsx)(t.code,{children:`role="region"`}),` and `,(0,b.jsx)(t.code,{children:`aria-label`}),` when it has no heading of its
own.`]}),`
`,(0,b.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`As many columns at least 16rem wide as the container fits, measured
on the container rather than the viewport: three in 840px, one in a
narrow aside or on a phone. There is no breakpoint of its own.`}),`
`,(0,b.jsx)(t.li,{children:`A lone card stays one column wide instead of stretching across the
row.`}),`
`,(0,b.jsx)(t.li,{children:`Cards in a row are as tall as the tallest; text starts at the top.`}),`
`,(0,b.jsx)(t.li,{children:`Long titles, emails and paths break anywhere rather than overflow.`}),`
`]}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Column count`}),` follows the container, not fixed counts per viewport
breakpoint as in Tailwind, so the grid works in a side panel too.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Actions`}),` are a ⋯ Menu, not a row of buttons along the bottom of the
card (Tailwind's contact cards with Email and Call): two or more
actions fit one menu at every width, and the card stays one shape.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Centred contact cards`}),` (avatar above the name) are left out: one
layout, media beside the title, reads the same as a Stacked List row.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`The cards are an unordered list, so a screen reader announces how many
there are. Reading and tab order go left to right, then down.`}),`
`,(0,b.jsx)(t.li,{children:`The media and the cover are hidden from assistive tech: the title
names the record.`}),`
`,(0,b.jsxs)(t.li,{children:[`A card with `,(0,b.jsx)(t.code,{children:`href`}),` is one link, named by its title; the status,
description and meta sit outside it.`]}),`
`,(0,b.jsx)(t.li,{children:`Each card is one tab stop, two with actions: the link, then the ⋯
button.`}),`
`,(0,b.jsxs)(t.li,{children:[`The ⋯ button is named "Actions for" the title; keep `,(0,b.jsx)(t.code,{children:`title`}),` a string
when there are actions. The context menu is a shortcut to the same
entries, never the only way to reach one.`]}),`
`,(0,b.jsxs)(t.li,{children:[`The grid has no landmark or heading of its own. Put it under a
heading, or pass `,(0,b.jsx)(t.code,{children:`role="region"`}),` and an `,(0,b.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),s(),_()})))()}x();export{y as default};