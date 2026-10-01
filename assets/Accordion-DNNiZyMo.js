import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,r as d,t as f}from"./Accordion.stories-CYnlxI0K.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,h.jsxs)(t.p,{children:[`A stack of headings that each show or hide a section of content: FAQs,
settings groups, long forms split into parts. uiguideline has no spec for
it yet, so the kit writes its own (below). Behaviour from Base UI's
`,(0,h.jsx)(t.a,{href:`https://base-ui.com/react/components/accordion`,rel:`nofollow`,children:`Accordion`}),`.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Part`}),(0,h.jsx)(t.th,{children:`What it is`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Container`})}),(0,h.jsxs)(t.td,{children:[`Frames the items (`,(0,h.jsx)(t.code,{children:`outlined`}),`) or leaves them edge to edge (`,(0,h.jsx)(t.code,{children:`flush`}),`).`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Item`})}),(0,h.jsxs)(t.td,{children:[`One heading and its panel, separated from the next by a `,(0,h.jsx)(t.code,{children:`--border`}),` line.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Header`})}),(0,h.jsxs)(t.td,{children:[`A real heading element, `,(0,h.jsx)(t.code,{children:`h3`}),` by default (`,(0,h.jsx)(t.code,{children:`headingLevel`}),`).`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Trigger`})}),(0,h.jsxs)(t.td,{children:[`A button filling the header: `,(0,h.jsx)(t.strong,{children:`title`}),` and a `,(0,h.jsx)(t.strong,{children:`chevron`}),` that turns when open.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Panel`})}),(0,h.jsx)(t.td,{children:`The content. Collapsed panels stay in the DOM for find-in-page.`})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`items`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`{ value, title, content, disabled? }[]`})}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`Required.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`value`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string[]`})}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`Controlled: the open items.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`defaultValue`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string[]`})}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onValueChange`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(value) => void`})}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`multiple`})}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`Allow several open at once.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`appearance`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`outlined`}),`, `,(0,h.jsx)(t.code,{children:`flush`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`outlined`})}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`size`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`sm`}),`, `,(0,h.jsx)(t.code,{children:`md`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`md`})}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`headingLevel`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`2`}),`–`,(0,h.jsx)(t.code,{children:`6`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`3`})}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`disabled`})}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{})]})]})]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`why-these-props`,children:`Why these props`}),`
`,(0,h.jsxs)(t.p,{children:[`The spec is the kit's own, recorded with uiguideline's other specs:
`,(0,h.jsx)(t.code,{children:`items`}),` is flat, per the kit's "flat props" convention; `,(0,h.jsx)(t.code,{children:`value`}),` is an
array in single mode too, because that is Base UI's model and it keeps
the type the same when `,(0,h.jsx)(t.code,{children:`multiple`}),` is switched on; `,(0,h.jsx)(t.code,{children:`headingLevel`}),` exists
because a heading level must follow the page's outline, which the
component cannot know.`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.p,{children:`Do not hide content that most readers need; an accordion trades a
shorter page for an extra click on everything inside it.`}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Each trigger is a `,(0,h.jsx)(t.code,{children:`<button>`}),` inside a real heading, with
`,(0,h.jsx)(t.code,{children:`aria-expanded`}),` and `,(0,h.jsx)(t.code,{children:`aria-controls`}),`; each panel is a region labelled by
its trigger.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Every trigger is a tab stop.`}),` Enter and Space toggle. There is no
arrow-key movement between triggers, following the current APG
guidance (Base UI dropped it too).`]}),`
`,(0,h.jsxs)(t.li,{children:[`Collapsed panels are `,(0,h.jsx)(t.code,{children:`hidden="until-found"`}),`: the browser's find-in-page
reaches their text and opens the item.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`md`}),` triggers are 44px tall. On touch, `,(0,h.jsx)(t.code,{children:`sm`}),` triggers grow to 44px
rather than overlapping each other with invisible hit areas.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The open/close animation stops under `,(0,h.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};