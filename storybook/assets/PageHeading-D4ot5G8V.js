import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./PageHeading.stories-BDNONIsl.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`page-heading`,children:`Page Heading`}),`
`,(0,g.jsx)(t.p,{children:`The top of a page: where it is, what it is, and what you can do with it.
Breadcrumbs, title, a line of description, a few facts, the page's
actions, and optionally tabs for sections of the same page.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/page-heading.json
`})}),`
`,(0,g.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,g.jsx)(t.p,{children:`Title, description and the page's main actions. Keep it to one primary
action; everything else is secondary.`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`with-breadcrumbs-and-meta`,children:`With breadcrumbs and meta`}),`
`,(0,g.jsx)(t.p,{children:`A record's page. Breadcrumbs say where it sits; meta holds short facts,
each optionally led by an icon or a Tag for a status. Rarely used actions
go in a Menu behind "More actions" so the row stays short.`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`with-tabs`,children:`With tabs`}),`
`,(0,g.jsx)(t.p,{children:`Sections of the same page as Tabs under the heading. The tab list's line
replaces the heading's own bottom border.`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Muted, capped at 65 characters a line.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`breadcrumbs`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`BreadcrumbItem[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Rendered small, above the title.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`meta`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`A list of short facts.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`actions`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Buttons, a Menu.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`tabs`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`A `,(0,g.jsx)(t.code,{children:`Tabs`}),` element.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headingLevel`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`1`}),`, `,(0,g.jsx)(t.code,{children:`2`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`1`})}),(0,g.jsx)(t.td,{children:`2 when the heading sits inside a larger page.`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Every other `,(0,g.jsx)(t.code,{children:`<header>`}),` attribute passes through.`]}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Actions wrap, the title does not squeeze.`}),` The title takes the row
down to 20rem, then the actions drop underneath it, keeping their order.
On a phone that means title first, then buttons.`]}),`
`,(0,g.jsx)(o,{of:p}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Long titles break anywhere`}),` rather than overflow, so a record named
with one long word still fits.`]}),`
`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The title is the page's `,(0,g.jsx)(t.code,{children:`h1`}),` by default. A page has one; pass
`,(0,g.jsx)(t.code,{children:`headingLevel={2}`}),` if the heading sits under another.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Breadcrumbs are a `,(0,g.jsx)(t.code,{children:`nav`}),` named "Breadcrumb", with the current page
marked `,(0,g.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,g.jsx)(t.li,{children:`Meta is a list, so a screen reader announces how many facts there are.
Icons in it are decorative; say the fact in words ("12 applicants").`}),`
`,(0,g.jsxs)(t.li,{children:[`An icon-only action needs an `,(0,g.jsx)(t.code,{children:`aria-label`}),`, as on any Button.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};