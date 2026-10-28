import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./ProjectDetail.stories-B7V8WbPM.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`project-detail`,children:`Project Detail`}),`
`,(0,h.jsxs)(t.p,{children:[`An object page: one project, with a breadcrumb back to the list, a header
with its name, status, key facts and actions, tabs for its sections, and
an aside with its summary and activity. After Tailwind UI's detail
screens, Polaris' details page and Fiori's object page. Built from
`,(0,h.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` (its
`,(0,h.jsx)(t.code,{children:`aside`}),` column), `,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-description-list--docs`,children:`Description List`}),`
and the kit's Breadcrumbs, Tabs, Table, Menu, Drawer, Tag and Button. It
is the record behind a row of `,(0,h.jsx)(t.a,{href:`?path=/docs/templates-object-management-projects--docs`,children:`Projects`}),`.
The data is made up.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/project-detail-template.json
`})}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Breadcrumb`}),`: Projects, then this project as the current page.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Header`}),`: the name as the `,(0,h.jsx)(t.code,{children:`h1`}),`, the status tag beside it, and the key
facts under it: PM, timeline, and the team's head count. Edit and a "More actions" menu
(Archive or Restore) sit at its end.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Tabs`}),`: Overview (PM, timeline, estimation) and Team (who works on it, in
a table).`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Aside`}),`: the summary (status, health, last update) and
the activity, newest first, on the `,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-feed--docs`,children:`Feed`}),` pattern: the same list a
Projects row expands to.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Edit`}),` opens a Drawer with the name, status and estimation. Save
updates the page, and a status or estimation change joins the top of
the activity. Cancel, Escape or the close button drops the edit; a
press on the backdrop does nothing, so a stray click loses nothing. An
empty name is refused.`]}),`
`]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`ProjectDetail`}),` takes `,(0,h.jsx)(t.code,{children:`project`}),` (a `,(0,h.jsx)(t.code,{children:`Project`}),`, see `,(0,h.jsx)(t.code,{children:`projects-data.ts`}),`) and
`,(0,h.jsx)(t.code,{children:`team`}),` (`,(0,h.jsx)(t.code,{children:`TeamMember[]`}),`), and keeps the project in state. Replace the
samples with your data, and the `,(0,h.jsx)(t.code,{children:`setProject`}),` calls (Save, Archive) with
calls to your API. Add a tab per section of your record; a long record that reads top
to bottom can drop the tabs and stack its sections instead.`]}),`
`,(0,h.jsx)(t.p,{children:`There is no save bar: the page is for reading, and editing happens in the
drawer, which owns its Save and Cancel. A record edited in place, field
by field, is the job of inline edit, not this page.`}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`project`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`Project`})}),(0,h.jsx)(t.td,{children:`the first sample project`}),(0,h.jsx)(t.td,{children:`The record. Read once; later changes are local.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`team`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`TeamMember[]`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sampleTeam`})}),(0,h.jsx)(t.td,{children:`The Team tab's rows. Empty shows an empty state.`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Any other prop goes to the App Shell's root, e.g. `,(0,h.jsx)(t.code,{children:`style`}),` to set its
`,(0,h.jsx)(t.code,{children:`block-size`}),` when the page is not the whole viewport.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`From 80rem of shell width the aside sits right of the page and each
scrolls on its own, so the summary stays in view; under 80rem it
follows the page and the two scroll as one (App Shell). Keep what the
reader needs first in the page, not the aside.`}),`
`]}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`The header's actions share the name's row while there is room and drop
under it when there is not. The status tag wraps under a long name, and
the key facts wrap one by one.`}),`
`,(0,h.jsx)(t.li,{children:`A long name with no spaces wraps, in the header and the breadcrumb;
the page never scrolls sideways. The Team table scrolls inside its own
frame.`}),`
`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`One `,(0,h.jsx)(t.code,{children:`h1`}),`, the project's name; the Details, Summary and Activity
headings are `,(0,h.jsx)(t.code,{children:`h2`}),`. The breadcrumb is the "Breadcrumb" navigation, its
last item the current page (`,(0,h.jsx)(t.code,{children:`aria-current="page"`}),`).`]}),`
`,(0,h.jsx)(t.li,{children:`The key facts are a list named "Key facts"; a missing PM reads
"Unassigned" and missing dates "Not scheduled", not an empty slot.`}),`
`,(0,h.jsxs)(t.li,{children:[`The aside is a `,(0,h.jsx)(t.code,{children:`complementary`}),` landmark named "Project summary", after
the page in reading and focus order. The activity is a region named
after the project ("Harbor Lights activity").`]}),`
`,(0,h.jsx)(t.li,{children:`The tab list is named "Project sections"; the Team table's caption is
"Team", and each member's name is the row header.`}),`
`,(0,h.jsx)(t.li,{children:`The icon-only menu button is named "More actions". The edit drawer is
a dialog named "Edit project"; on close, focus returns to Edit. An
empty name marks the field invalid with the message "Enter a name."`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),o(),u()})))()}g();export{m as default};