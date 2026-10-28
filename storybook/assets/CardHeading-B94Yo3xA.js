import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./CardHeading.stories-oSpcbpBK.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`card-heading`,children:`Card Heading`}),`
`,(0,_.jsxs)(t.p,{children:[`The top row of a card: what the card is, a line of context, and what you
can do with it. Put it first inside a `,(0,_.jsx)(t.a,{href:`?path=/docs/data-display-card--docs`,children:`Card`}),`;
the card's padding and gap space it from the content. After Tailwind UI
Application UI, Headings: Card headings.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/card-heading.json
`})}),`
`,(0,_.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,_.jsx)(t.p,{children:`A title and, optionally, one line of description.`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`with-action`,children:`With action`}),`
`,(0,_.jsx)(t.p,{children:`The card's main action at the end of the title row. One primary button at
most; a card is part of a page that has its own primary action.`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`with-avatar-and-menu`,children:`With avatar and menu`}),`
`,(0,_.jsx)(t.p,{children:`Who or what the card is about, as an Avatar or an Icon before the title.
Rarely used actions go in a Menu behind "More actions" so the row stays
short.`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`with-a-rule`,children:`With a rule`}),`
`,(0,_.jsxs)(t.p,{children:[`The heading draws no line of its own. When the content needs setting off,
put a `,(0,_.jsx)(t.a,{href:`?path=/docs/atomic-elements-divider--docs`,children:`Divider`}),` after the heading,
inside the card.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsxs)(t.p,{children:[`Every other `,(0,_.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Actions wrap, the title does not squeeze.`}),` The title and description
keep the row down to 16rem, then the actions drop underneath them,
keeping their order.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Long titles break anywhere`}),` rather than overflow.`]}),`
`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The title is an `,(0,_.jsx)(t.code,{children:`h2`}),` by default: a card on a page sits under the
page's `,(0,_.jsx)(t.code,{children:`h1`}),`. Use `,(0,_.jsx)(t.code,{children:`headingLevel={3}`}),` or `,(0,_.jsx)(t.code,{children:`4`}),` when the card sits under a
section heading, so the outline has no gaps.`]}),`
`,(0,_.jsx)(t.li,{children:`The media is decorative and hidden from assistive tech: the title
already says who or what the card is about.`}),`
`,(0,_.jsxs)(t.li,{children:[`An icon-only action needs an `,(0,_.jsx)(t.code,{children:`aria-label`}),`, as on any Button. When a card
repeats on a page, make action names unique, e.g. "Edit Chelsea Hagon".`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};