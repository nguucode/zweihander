import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Home.stories-C5waY6tO.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`home`,children:`Home`}),`
`,(0,g.jsxs)(t.p,{children:[`The page an app opens on: a greeting and the period to look at, a setup
guide while the workspace is new, the key figures, a chart and the user's
tasks in a grid of cards, and recent activity in the aside. After Tailwind
UI's home screens, shadcn's dashboard-01, Polaris' homepage and Fiori's
overview page. Built from
`,(0,g.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),`,
`,(0,g.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-stats--docs`,children:`Stats`}),`,
`,(0,g.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-card-heading--docs`,children:`Card Heading`}),`,
`,(0,g.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-action-panel--docs`,children:`Action Panel`}),`,
the charts and the kit's Select, Checkbox, Progress Bar and Card. The data
is made up.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/home-template.json
`})}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Period`}),`: Last 7, 30 or 90 days. It changes the figures that add up
over time (hours logged, invoiced: each against the period before) and
the chart. Active projects is a count as it stands now, so the period
does not touch it; it links to the list instead.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Setup guide`}),`: an Action Panel with the steps, how many are done and
one button, for the next step. It shows until every step is done, then
goes, and focus moves to the page's heading. It sits first, above the
figures: while a workspace is new, setting it up is the job, and the
figures are mostly empty anyway.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Your tasks`}),`: what is assigned to you, soonest first, each with its
project and when it is due; overdue says so in words as well as red.
Ticking one keeps it in the list, struck through, so a slip can be undone.
No tasks shows "Nothing due".`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Recent activity`}),`: the newest events across every project, each
naming its project, in the aside: it is context, not the job, so it
takes the side column on a desktop and goes under the page on a phone.`]}),`
`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`Home`}),` reads the samples in `,(0,g.jsx)(t.code,{children:`home-data.ts`}),` and the Projects template's
`,(0,g.jsx)(t.code,{children:`projects-data.ts`}),`. Load your figures, tasks and setup steps in their
place, and pass `,(0,g.jsx)(t.code,{children:`today={new Date()}`}),`: the sample pins today so the page
and its tests hold still. `,(0,g.jsx)(t.code,{children:`onTaskChange(id, isDone)`}),` and
`,(0,g.jsx)(t.code,{children:`onSetupStep(id)`}),` are where your API calls go.`]}),`
`,(0,g.jsx)(t.p,{children:`Keep the figures few, three or four, and only ones the reader acts on.
A card per figure the business tracks turns home into a report nobody
reads; put those in a report page and link to it. A card on home answers
"what needs me today?" or "is anything off?".`}),`
`,(0,g.jsxs)(t.p,{children:[`The recent activity list is the `,(0,g.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-feed--docs`,children:`Feed`}),` pattern, fed the same events
as the Project Detail template's.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsxs)(t.p,{children:[`Any other prop goes to the App Shell's root, e.g. `,(0,g.jsx)(t.code,{children:`style`}),` to set its
`,(0,g.jsx)(t.code,{children:`block-size`}),` when the page is not the whole viewport.`]}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`The greeting and the period share a row while there is room; the period
drops under the greeting when there is not.`}),`
`,(0,g.jsx)(t.li,{children:`The figures take as many columns as fit, one on a phone.`}),`
`,(0,g.jsx)(t.li,{children:`From 40rem of page width the chart and the tasks sit side by side, the
chart the wider; below, the tasks go under the chart. 40rem is less than
a desktop page keeps with the sidebar and the aside both open.`}),`
`,(0,g.jsx)(t.li,{children:`The aside is beside the page from 80rem of the shell's width, under it
below that.`}),`
`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`One `,(0,g.jsx)(t.code,{children:`h1`}),`, the greeting; the cards' and the aside's titles are `,(0,g.jsx)(t.code,{children:`h2`}),`.`]}),`
`,(0,g.jsx)(t.li,{children:`The figures are a region named after the period ("Key figures, last
30 days"), so the name changes with it.`}),`
`,(0,g.jsx)(t.li,{children:`Each task is a checkbox named by its title and described by its project
and when it is due ("Overdue", "Due today"), so the colour is never the
only cue.`}),`
`,(0,g.jsxs)(t.li,{children:[`The setup guide is a group named "Finish setting up"; its progress bar
says how many steps are done, and a done step reads "(done)". When the
last step is done the guide goes and focus moves to the `,(0,g.jsx)(t.code,{children:`h1`}),`, not to the
page's body.`]}),`
`,(0,g.jsx)(t.li,{children:`The aside is a complementary landmark named "Recent activity".`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),s(),d()})))()}_();export{h as default};