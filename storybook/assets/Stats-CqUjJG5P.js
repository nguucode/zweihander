import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Stats.stories-BSxLUkQw.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(t.h1,{id:`stats`,children:`Stats`}),`
`,(0,g.jsx)(t.p,{children:`Key figures in a row of cards: what is measured, the figure, and
optionally how it moved since the last period, an icon, and a link to
the details. The top of a dashboard or a report.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/stats.json
`})}),`
`,(0,g.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`with-trend`,children:`With trend`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`previous`}),` gives the figure to compare against; `,(0,g.jsx)(t.code,{children:`change`}),` says by how
much and which way. The colour follows whether the change is good news,
not its direction: pass `,(0,g.jsx)(t.code,{children:`isPositive: true`}),` for figures where down is
good, like churn or response time.`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`with-icon-and-link`,children:`With icon and link`}),`
`,(0,g.jsx)(t.p,{children:`An icon on a rounded square of the primary colour, and a link at the foot of each
card to where the figure comes from.`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`stats`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Stat[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required. See below.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`A heading above the cards.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headingLevel`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`2`}),`, `,(0,g.jsx)(t.code,{children:`3`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`2`})}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Each `,(0,g.jsx)(t.code,{children:`Stat`}),` has `,(0,g.jsx)(t.code,{children:`label`}),`, `,(0,g.jsx)(t.code,{children:`value`}),`, and optionally `,(0,g.jsx)(t.code,{children:`previous`}),`, `,(0,g.jsx)(t.code,{children:`change`}),`
(`,(0,g.jsx)(t.code,{children:`{ value, direction: 'up' \\| 'down', isPositive? }`}),`), `,(0,g.jsx)(t.code,{children:`icon`}),`, `,(0,g.jsx)(t.code,{children:`href`}),` and
`,(0,g.jsx)(t.code,{children:`linkLabel`}),` (default "View all").`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(t.p,{children:`As many 14rem columns as fit: three or four on a desktop, one on a
phone. Cards in a row share a height.`}),`
`,(0,g.jsx)(o,{of:p}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(t.p,{children:`Figures use tabular numbers, so a row of values lines up digit by digit
and does not jitter when it updates.`}),`
`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`A definition list: each figure is the definition of its label, so a
screen reader reads "Total subscribers, 71,897".`}),`
`,(0,g.jsxs)(t.li,{children:[`The change is read as words ("Increased by 12%"), not only shown as an
arrow and a colour. The colours are `,(0,g.jsx)(t.code,{children:`--success-text`}),` and `,(0,g.jsx)(t.code,{children:`--danger-text`}),`
on their subtle surfaces, 4.5:1 in both appearances.`]}),`
`,(0,g.jsx)(t.li,{children:`Each "View all" link carries its figure's label for screen readers
("View all Avg. open rate"), so a list of links is not three identical
entries.`}),`
`,(0,g.jsx)(t.li,{children:`The icon is decorative.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};