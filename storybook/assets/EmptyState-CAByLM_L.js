import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./EmptyState.stories-0ewBUmPg.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`empty-state`,children:`Empty State`}),`
`,(0,g.jsxs)(t.p,{children:[`What a list, a table or a page shows when there is nothing in it yet:
why it is empty, and what to do about it. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/empty-state`,rel:`nofollow`,children:`uiguideline.com/components/empty-state`}),`.
A plain element.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Icon`})}),(0,g.jsxs)(t.td,{children:[`Optional. An icon on a `,(0,g.jsx)(t.code,{children:`--muted`}),` disc, or a small illustration. Decorative.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Title`})}),(0,g.jsxs)(t.td,{children:[`A real heading, level set by `,(0,g.jsx)(t.code,{children:`headingLevel`}),`. Says what is empty.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Description`})}),(0,g.jsxs)(t.td,{children:[`Optional, `,(0,g.jsx)(t.code,{children:`--muted-foreground`}),`, at most 40 characters wide. Says why, or what will appear here.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Action`})}),(0,g.jsx)(t.td,{children:`Optional. The way forward: usually one Button, at most two.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`icon`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`action`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`md`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),` for a panel or a table body.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headingLevel`})}),(0,g.jsx)(t.td,{children:`2–6`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`2`})}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Every other `,(0,g.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Three kinds of empty, three kinds of copy.`}),` First use ("No projects
yet", with a way to create one), no results ("No projects match", with
a way to clear the filter) and cleared out ("All caught up", often
with no action at all). The component is the same; the words are not.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`The icon sits on a disc`}),` rather than floating alone, so an empty
area gets a centre of gravity without needing an illustration.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The title is a heading, so a screen reader user jumping by headings
finds out the area is empty. Set `,(0,g.jsx)(t.code,{children:`headingLevel`}),` to fit the outline:
`,(0,g.jsx)(t.code,{children:`3`}),` inside a section headed by an `,(0,g.jsx)(t.code,{children:`h2`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The icon is `,(0,g.jsx)(t.code,{children:`aria-hidden`}),`; the title has to say it all.`]}),`
`,(0,g.jsxs)(t.li,{children:[`An empty state that replaces results after a search is not announced by
itself. If the search updates as you type, announce the count
elsewhere (a `,(0,g.jsx)(t.code,{children:`role="status"`}),` line such as "0 results").`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};