import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Projects.stories-86LisSkz.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(t.h1,{id:`projects`,children:`Projects`}),`
`,(0,h.jsxs)(t.p,{children:[`An index page, or list report: every project in saved views, narrowed by
search and filters, as a table with pages or as a chart. The table sorts,
hides columns, selects rows for a bulk archive and expands to each
project's activity. Built from
`,(0,h.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),`,
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-saved-views--docs`,children:`Saved Views`}),`,
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-filter-bar--docs`,children:`Filter Bar`}),`,
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-table-chart-switch--docs`,children:`Table Chart Switch`}),`,
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-data-table-page--docs`,children:`Data Table Page`}),`'s
toolbar and footer, and the kit's Table, Column Chooser, Pagination,
BarChart, Search, Menu, Tag, Badge, Avatar and Button. The data is made up.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/projects-template.json
`})}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,h.jsx)(t.p,{children:`From the top: the heading (title, the open count, Import, Export and the
primary action, Add project), the views, the toolbar (search, the Status and Health
filters with their chips, compact rows and Columns), the summary with the
Table / Chart switch, the table, and the footer with the pages.`}),`
`,(0,h.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Views`}),` are predefined (All, Risk, On hold, Potential risk, On track,
Archived) or saved. A view holds the filters, the columns and the sort;
the search is not part of it. Each count is the rows the view shows
with the current search; the view in force counts its unsaved changes
too, so its count always matches the table.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Modified`}),`: a filter, a column or a sort that differs from the view
marks it modified. Discard puts it back; Save writes it into a saved
view; on a predefined view, Save as new view keeps it under a new name.
Manage views deletes saved views.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Search`}),` matches the project name and the PM.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Filters`}),` are checkbox menus, Status and Health; each choice shows as
a chip that removes on its own, and Clear all removes them all.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Sort`}),` by name, PM, last update, resources, timeline or estimation.
The sort covers every page, not only the one shown.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Pages`}),` of 10, 25 or 50. Any change to what is listed goes back to
the first page.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Chart`}),` shows the estimation of the same projects by status, under
the same view, search and filters.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Selection`}),` turns the toolbar into an Archive action; archived
projects move to the Archived view. Changing the page, the view, the
search or a filter clears it, so you never act on rows you cannot see.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Clear filters`}),`, in the empty state, clears the search and puts the
view's own filters back; it does not leave the view.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Expand`}),` a row to see its activity: status changes with their note,
estimation changes, and when it was created.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Import`}),` reads a CSV of projects through the `,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-import-export--docs`,children:`Import
Export`}),` dialog:
the headings map to Project name, PM, Status and Estimation, an unknown
status or an estimation that is not a number skips its row, and the
rest join the list on track and unscheduled.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Export`}),` downloads a CSV of the current view, the selected projects
or all of them, with the columns on screen ticked; dates are ISO and
money a bare number, for a spreadsheet to read.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Compact rows`}),` switches the table to its small density, and
`,(0,h.jsx)(t.strong,{children:`Columns`}),` hides the ones you do not need.`]}),`
`]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`Projects`}),` takes `,(0,h.jsx)(t.code,{children:`projects`}),` (an array of `,(0,h.jsx)(t.code,{children:`Project`}),`, see
`,(0,h.jsx)(t.code,{children:`projects-data.ts`}),`) and keeps a copy in state. Replace `,(0,h.jsx)(t.code,{children:`sampleProjects`}),`
with your data, the `,(0,h.jsx)(t.code,{children:`setProjects`}),` calls (Archive) with calls to your API,
and the `,(0,h.jsx)(t.code,{children:`views`}),` state with the views you store per user. With many rows,
filter, sort and page on the server: the page slices locally only because
the sample is small. The activity list is the
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-feed--docs`,children:`Feed`}),` pattern; `,(0,h.jsx)(t.code,{children:`ProjectActivity.tsx`}),` turns a project's events into its
sentences, and
`,(0,h.jsx)(t.a,{href:`?path=/docs/templates-object-management-project-detail--docs`,children:`Project Detail`}),`
shares it.`]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsx)(t.tbody,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`projects`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`Project[]`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sampleProjects`})}),(0,h.jsx)(t.td,{children:`The rows. Read once; later changes are local.`})]})})]}),`
`,(0,h.jsxs)(t.p,{children:[`Any other prop goes to the App Shell's root, e.g. `,(0,h.jsx)(t.code,{children:`style`}),` to set its
`,(0,h.jsx)(t.code,{children:`block-size`}),` when the page is not the whole viewport.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`The sidebar sits beside the page; below 64rem it is the icon rail, and
the header comes back with the account (App Shell).`}),`
`,(0,h.jsx)(t.li,{children:`The heading wraps: Add project drops under the title when there is no
room beside it.`}),`
`,(0,h.jsx)(t.li,{children:`The toolbar wraps: on a phone the search takes its own line, and the
filters and the table settings flow under it.`}),`
`,(0,h.jsx)(t.li,{children:`The views scroll sideways when they do not fit, instead of wrapping
onto a second line.`}),`
`,(0,h.jsx)(t.li,{children:`The table keeps its columns and scrolls inside its own frame; the page
never scrolls sideways.`}),`
`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`One `,(0,h.jsx)(t.code,{children:`h1`}),` ("Projects" and the count), a `,(0,h.jsx)(t.code,{children:`main`}),` landmark with a skip link,
and the sidebar as the "Main" navigation (App Shell).`]}),`
`,(0,h.jsx)(t.li,{children:`The views are a tab list named "Project views"; each tab's name
includes its count ("Risk 3"). "Modified" is a status, announced when
it appears (Saved Views).`}),`
`,(0,h.jsx)(t.li,{children:`The filters are a search landmark, "Project filters"; the chips are a
list, "Applied filters", and removing one moves focus to the next
(Filter Bar).`}),`
`,(0,h.jsx)(t.li,{children:`The Table / Chart switch is a second tab list, "Show projects as"; the
count beside it ("16 projects") is a status, announced as it changes
(Table Chart Switch).`}),`
`,(0,h.jsx)(t.li,{children:`The table's caption names the current view ("Risk projects"); the
project name is each row's header, so the checkbox and the expand button
are named after it ("Select Harbor Lights", "Expand Harbor Lights").`}),`
`,(0,h.jsx)(t.li,{children:`The pages are a navigation, "Project pages".`}),`
`,(0,h.jsx)(t.li,{children:`An expanded row's activity is a region named after the project
("Harbor Lights activity"), holding an ordered list, newest first. The
arrow between a timeline's dates is hidden and read as "to".`}),`
`,(0,h.jsx)(t.li,{children:`A PM without a name says "Unassigned", and a project without dates says
"Not scheduled", instead of an empty cell.`}),`
`,(0,h.jsx)(t.li,{children:`The selection count is announced as it changes (Data Table Page).`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),o(),u()})))()}g();export{m as default};