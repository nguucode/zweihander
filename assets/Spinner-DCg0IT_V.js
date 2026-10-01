import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Spinner.stories-DRIsA_jD.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:c}),`
`,(0,v.jsx)(t.h1,{id:`spinner`,children:`Spinner`}),`
`,(0,v.jsxs)(t.p,{children:[`Says that something is loading when there is no telling how long it will
take, or, given a value, how far along it is. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/spinner`,rel:`nofollow`,children:`uiguideline.com/components/spinner`}),`.
A plain element: there is no behaviour here worth Base UI.`]}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Track`})}),(0,v.jsxs)(t.td,{children:[`The full circle, `,(0,v.jsx)(t.code,{children:`--border`}),`. Frames the motion; decoration.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Indicator`})}),(0,v.jsxs)(t.td,{children:[`The arc: a quarter turn spinning, or the value as a share of the ring. Coloured by `,(0,v.jsx)(t.code,{children:`variant`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Label`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`label`}),`, under the indicator. Also the accessible name.`]})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`size`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sm`}),`, `,(0,v.jsx)(t.code,{children:`md`}),`, `,(0,v.jsx)(t.code,{children:`lg`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`md`})}),(0,v.jsx)(t.td,{children:`16, 24, 32px.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`variant`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`primary`}),`, `,(0,v.jsx)(t.code,{children:`accent`}),`, `,(0,v.jsx)(t.code,{children:`secondary`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`accent`})}),(0,v.jsxs)(t.td,{children:[`Colour of the indicator. `,(0,v.jsx)(t.code,{children:`accent`}),` is the foreground, as on Button.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`label`})}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[`Visible text and accessible name; `,(0,v.jsx)(t.code,{children:`"Loading"`}),` when omitted or empty.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`delay`})}),(0,v.jsx)(t.td,{children:`number (ms)`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`0`})}),(0,v.jsx)(t.td,{children:`Renders nothing until it has passed.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`value`})}),(0,v.jsx)(t.td,{children:`0–100`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Turns it into a progress ring. Clamped.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`isIndeterminate`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsxs)(t.td,{children:[`Spin even when `,(0,v.jsx)(t.code,{children:`value`}),` is given.`]})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Any other prop goes to the outer `,(0,v.jsx)(t.code,{children:`<span>`}),`.`]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsxs)(t.strong,{children:[(0,v.jsx)(t.code,{children:`accent`}),` is the default variant`]}),`, in `,(0,v.jsx)(t.code,{children:`--foreground`}),`: a spinner is
most often a quiet placeholder inside content that has its own colour.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`value`})}),`: A load that can report progress should, and a
ring reads better than a bar in a small space such as a button or a
thumbnail.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:(0,v.jsx)(t.code,{children:`delay`})}),`: Most loads finish in under half a second; a
spinner that appears and vanishes in 200ms is a flash, not information.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsxs)(t.p,{children:[`Give a load you expect to be fast a `,(0,v.jsx)(t.code,{children:`delay`}),` of 300–500ms. The spinner
only appears if the wait turns out to be long enough to notice.`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsxs)(t.p,{children:[`For a load of a page region whose shape you know, a
`,(0,v.jsx)(t.a,{href:`?path=/docs/components-loaders-skeleton--docs`,children:`Skeleton`}),` says more. For
a long task with a known size, use a
`,(0,v.jsx)(t.a,{href:`?path=/docs/components-loaders-progressbar--docs`,children:`Progress Bar`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsxs)(t.strong,{children:[`Spinning, it is `,(0,v.jsx)(t.code,{children:`role="status"`})]}),`, a polite live region, named by
`,(0,v.jsx)(t.code,{children:`label`}),` or "Loading". The region renders empty and its text (the
label, or a visually hidden "Loading") is inserted just after, or once
`,(0,v.jsx)(t.code,{children:`delay`}),` has passed: screen readers announce text added to a live region
that is already in the page, not a region that mounts full.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsxs)(t.strong,{children:[`With a value, it is `,(0,v.jsx)(t.code,{children:`role="progressbar"`})]}),` with `,(0,v.jsx)(t.code,{children:`aria-valuenow`}),`,
`,(0,v.jsx)(t.code,{children:`aria-valuemin="0"`}),` and `,(0,v.jsx)(t.code,{children:`aria-valuemax="100"`}),`.`]}),`
`,(0,v.jsx)(t.li,{children:`The SVG is hidden.`}),`
`,(0,v.jsxs)(t.li,{children:[`The indicator clears 3:1 on the page in every variant: `,(0,v.jsx)(t.code,{children:`--primary-text`}),`
(measured at 4.5:1 per accent), `,(0,v.jsx)(t.code,{children:`--muted-foreground`}),`, `,(0,v.jsx)(t.code,{children:`--foreground`}),`.
The track is decoration and may be faint.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The progress ring's transition stops under `,(0,v.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Under `,(0,v.jsx)(t.code,{children:`prefers-reduced-motion`}),` it slows to one turn in 2.5s rather than
stopping: a frozen arc reads as "stuck".`]}),`
`,(0,v.jsxs)(t.li,{children:[`Put `,(0,v.jsx)(t.code,{children:`aria-busy="true"`}),` on the region that is loading, and remove the
spinner when the load ends, so the change is announced.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};