import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./TableChartSwitch.stories-D8ABpfjt.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`table-chart-switch`,children:`Table Chart Switch`}),`
`,(0,_.jsx)(t.p,{children:`One set of records, two ways to look at it: a table of the rows and a chart
of their totals, under the same filters. After the table/chart toggle of
SAP Fiori's List Report.`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/table-chart.json
`})}),`
`,(0,_.jsxs)(t.p,{children:[`The pattern owns no data and draws neither view: it lays out the filters,
the summary and the switch, and shows the view in force. Filter once and
hand the same result to both `,(0,_.jsx)(t.code,{children:`table`}),` and `,(0,_.jsx)(t.code,{children:`chart`}),`, so the two never disagree.`]}),`
`,(0,_.jsx)(t.h2,{id:`table-and-chart`,children:`Table and chart`}),`
`,(0,_.jsx)(t.p,{children:`The table comes first. Switch to the chart and the filters stay where they
are, with their state; a change shows in whichever view is in force. The
view not in force is hidden, not removed, so the table keeps its sort,
selection and scroll while the viewer looks at the chart.`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.p,{children:`The chart keeps its own View as table. That table lists what the chart
plots (a total per month), not the records, so the two do not overlap.`}),`
`,(0,_.jsx)(t.h2,{id:`controlled`,children:`Controlled`}),`
`,(0,_.jsxs)(t.p,{children:[`Pass `,(0,_.jsx)(t.code,{children:`view`}),` and `,(0,_.jsx)(t.code,{children:`onViewChange`}),` to bring a viewer back to the view they left,
or to keep it in a `,(0,_.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-saved-views--docs`,children:`Saved View`}),`.`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,_.jsxs)(t.p,{children:[`Nothing matches: each view shows its own empty state, the Table's
`,(0,_.jsx)(t.code,{children:`emptyState`}),` and the chart's No data.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Fiori's toggle is a pair of icon buttons in the table toolbar; here it is
a pair of text tabs, since the views are panels of one region and a word
says more than a glyph.`}),`
`,(0,_.jsxs)(t.li,{children:[`A `,(0,_.jsx)(t.code,{children:`summary`}),` slot, Fiori's "Invoices (128)" beside the toggle, gives the
row a start and the count a voice.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsxs)(t.p,{children:[`Every other `,(0,_.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Filters on top`}),`, full width.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`The summary and the switch share a row`}),` below them: the summary at the
start, the switch at the end, where Fiori puts it in the table's toolbar.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`The view takes the full width`}),` under that row. A wide table scrolls
inside its own box.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`When the row is too narrow`}),` the summary wraps and the switch drops
under it; nothing widens the page.`]}),`
`]}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The switch is a tab list named "View"; pass `,(0,_.jsx)(t.code,{children:`aria-label`}),` to say what it
shows, e.g. "Invoice view". The view in force is its tab panel, named
after its tab.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The summary is a `,(0,_.jsx)(t.code,{children:`status`}),`: when a filter changes the count, a screen
reader announces it.`]}),`
`,(0,_.jsx)(t.li,{children:`Arrow keys move between Table and Chart, Enter or Space switches, and
focus stays on the tab.`}),`
`,(0,_.jsx)(t.li,{children:`The filters stay in the page when the view changes, so focus in them is
never lost.`}),`
`]}),`
`,(0,_.jsx)(o,{of:l})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};