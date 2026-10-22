import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{a as s,i as c,n as l,r as u,t as d}from"./Projects.stories-Bn1AhqNi.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`projects`,children:`Projects`}),`
`,(0,m.jsxs)(t.p,{children:[`An object-management page: every project in a table, sliced by tabs with
counts, narrowed by search and a status filter, sortable, selectable for
a bulk archive, and expandable to each project's activity. Built from
`,(0,m.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),`,
`,(0,m.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-page-heading--docs`,children:`Page Heading`}),`,
`,(0,m.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-data-table-page--docs`,children:`Data Table Page`}),`'s
toolbar and the kit's Table, Tabs, Search, Menu, Tag, Badge, Avatar and
Button. The data is made up.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/projects-template.json
`})}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Tabs`}),` are saved filters: All, Risk, On hold, Potential risk, On
track, Archived. Each count is the number of rows its tab shows, so the
counts follow the search and the status filter.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Search`}),` matches the project name and the PM.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Status filter`}),` is a radio Menu; its trigger shows the current choice.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Sort`}),` by name, PM, last update, resources, timeline or estimation.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Selection`}),` turns the toolbar into an Archive action; archived
projects move to the Archived tab. Changing tab clears the selection,
so you never act on rows you cannot see.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Expand`}),` a row to see its activity: status changes with their note,
estimation changes, and when it was created.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Compact rows`}),` (the toggle at the start of the toolbar) switches the
table to its small density.`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`Projects`}),` takes `,(0,m.jsx)(t.code,{children:`projects`}),` (an array of `,(0,m.jsx)(t.code,{children:`Project`}),`, see
`,(0,m.jsx)(t.code,{children:`projects-data.ts`}),`) and keeps a copy in state. Replace `,(0,m.jsx)(t.code,{children:`sampleProjects`}),`
with your data, and the `,(0,m.jsx)(t.code,{children:`setProjects`}),` calls (Archive) with calls to your
API. The activity list is local to the file on purpose: it becomes a
`,(0,m.jsx)(t.code,{children:`Timeline`}),` component once a second screen needs one.`]}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Prop`}),(0,m.jsx)(t.th,{children:`Values`}),(0,m.jsx)(t.th,{children:`Default`}),(0,m.jsx)(t.th,{})]})}),(0,m.jsx)(t.tbody,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`projects`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`Project[]`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sampleProjects`})}),(0,m.jsx)(t.td,{children:`The rows. Read once; later changes are local.`})]})})]}),`
`,(0,m.jsxs)(t.p,{children:[`Any other prop goes to the App Shell's root, e.g. `,(0,m.jsx)(t.code,{children:`style`}),` to set its
`,(0,m.jsx)(t.code,{children:`block-size`}),` when the page is not the whole viewport.`]}),`
`,(0,m.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`From 64rem the sidebar sits beside the page; below that it moves into
a drawer behind the header's menu button (App Shell).`}),`
`,(0,m.jsx)(t.li,{children:`The toolbar wraps: on a phone the search takes its own line, and the
status filter and "Add project" flow under it.`}),`
`,(0,m.jsx)(t.li,{children:`The tab list scrolls sideways when the six tabs do not fit, instead of
wrapping onto a second line.`}),`
`,(0,m.jsx)(t.li,{children:`The table keeps its columns and scrolls inside its own frame; the page
never scrolls sideways.`}),`
`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`One `,(0,m.jsx)(t.code,{children:`h1`}),` ("Projects" and the count), a `,(0,m.jsx)(t.code,{children:`main`}),` landmark with a skip link,
and the sidebar as the "Main" navigation (App Shell).`]}),`
`,(0,m.jsx)(t.li,{children:`The tab list is named "Project views"; each tab's name includes its
count ("Risk 3"), and the table is in the selected tab's panel.`}),`
`,(0,m.jsx)(t.li,{children:`The table's caption names the current view ("Risk projects"); the
project name is each row's header, so the checkbox and the expand button
are named after it ("Select Harbor Lights", "Expand Harbor Lights").`}),`
`,(0,m.jsx)(t.li,{children:`An expanded row's activity is a region named after the project
("Harbor Lights activity"),
holding an ordered list, newest first. The arrow between a timeline's
dates is hidden and read as "to".`}),`
`,(0,m.jsx)(t.li,{children:`A PM without a name says "Unassigned", and a project without dates says
"Not scheduled", instead of an empty cell.`}),`
`,(0,m.jsx)(t.li,{children:`The selection count is announced as it changes (Data Table Page).`}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),r(),o(),s()})))()}h();export{p as default};