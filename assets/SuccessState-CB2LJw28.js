import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,r as d,t as f}from"./SuccessState.stories-CcAjoTCA.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`success-state`,children:`Success State`}),`
`,(0,h.jsxs)(t.p,{children:[`What a flow shows when it has finished: the invites are sent, the import
is done, the inbox is empty. It confirms what happened and offers the
next step. Our own spec: uiguideline.com has no page for it. Built on
`,(0,h.jsx)(t.a,{href:`?path=/docs/components-states-emptystate--docs`,children:`Empty State`}),`, in the
success tone.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,h.jsxs)(t.p,{children:[`Empty State's parts, with the icon disc in `,(0,h.jsx)(t.code,{children:`--success-subtle`}),` behind the
`,(0,h.jsx)(t.code,{children:`success`}),` icon in `,(0,h.jsx)(t.code,{children:`--success-text`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.p,{children:[`Every Empty State prop (`,(0,h.jsx)(t.code,{children:`icon`}),`, `,(0,h.jsx)(t.code,{children:`title`}),`, `,(0,h.jsx)(t.code,{children:`description`}),`, `,(0,h.jsx)(t.code,{children:`action`}),`,
`,(0,h.jsx)(t.code,{children:`size`}),`, `,(0,h.jsx)(t.code,{children:`headingLevel`}),`), and:`]}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsx)(t.tbody,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`isLive`})}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`role="status"`}),`.`]})]})})]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`A success state ends a flow; a Toast confirms an action.`}),` Use this
when the screen the reader was on is finished (a sent form, a completed
import) and needs replacing. For a quick "Saved" that leaves the screen
as it was, use a Toast.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Lead with the next step.`}),` The action is where the reader goes now.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:`The title is a heading, as on Empty State.`}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`isLive`}),` makes it a `,(0,h.jsx)(t.code,{children:`role="status"`}),`, read politely when it replaces a
form or a progress view.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};