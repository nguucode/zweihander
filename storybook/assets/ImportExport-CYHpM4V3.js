import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ImportExport.stories-CMDBWlPT.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`import-export`,children:`Import Export`}),`
`,(0,_.jsxs)(t.p,{children:[`Getting rows into a list from a file, and out of it into one: the
spreadsheet round trip every ERP and back-office list needs. No outside
block covers it (Catalyst Blocks has none); the anatomy is the
Application UI catalogue's own. Two dialogs,
`,(0,_.jsx)(t.code,{children:`ImportDialog`}),` and `,(0,_.jsx)(t.code,{children:`ExportDialog`}),`, built from the `,(0,_.jsx)(t.a,{href:`?path=/docs/components-inputs-file-uploader--docs`,children:`File
Uploader`}),`,
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-navigation-stepper--docs`,children:`Stepper`}),`,
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),` and `,(0,_.jsx)(t.a,{href:`?path=/docs/components-data-display-column-chooser--docs`,children:`Column
Chooser`}),` in a
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),`. The
`,(0,_.jsx)(t.a,{href:`?path=/docs/templates-object-management-projects--docs`,children:`Projects`}),` index
page uses both.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/import-export.json
`})}),`
`,(0,_.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(t.p,{children:`Three steps, then the result.`}),`
`,(0,_.jsxs)(t.ol,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Upload`}),`: one file, CSV by default. `,(0,_.jsx)(t.code,{children:`templateHref`}),` links a blank
file with the right headings.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Map columns`}),`: each column of the file goes into one of your
`,(0,_.jsx)(t.code,{children:`fields`}),`, or is not imported. A heading that matches a field's key,
label or one of its `,(0,_.jsx)(t.code,{children:`aliases`}),` is mapped already, so a file made from
the template needs no work here. A field takes one column; Next waits
until every required field has one.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Review`}),`: every row with its problems beside it, from `,(0,_.jsx)(t.code,{children:`validate`}),`
and from required fields left empty. A row with a problem is skipped,
not fixed here: the file is the place to fix it. The button says how
many rows it imports.`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:`The result says how many were imported and how many skipped, and offers
the skipped rows as a CSV, with their problems in a last column, to fix
and upload again.`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`mapping`,children:`Mapping`}),`
`,(0,_.jsx)(t.p,{children:`No heading matches a required field: the step names it and Next waits.
Choosing a field already taken moves it to this column.`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`errors`,children:`Errors`}),`
`,(0,_.jsxs)(t.p,{children:[`A file that cannot be read, or has no rows, says so on the upload step.
An `,(0,_.jsx)(t.code,{children:`onImport`}),` that throws keeps you on the review step with its message:
nothing is lost, and Import can be tried again.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`export`,children:`Export`}),`
`,(0,_.jsxs)(t.p,{children:[`Which rows (`,(0,_.jsx)(t.code,{children:`scopes`}),`: all, the current view, the selection, each with its
count), which format when there is more than one, and which columns,
ticked from the ones on screen. Each opening starts from those defaults,
since the view or the selection may have changed. Export calls
`,(0,_.jsx)(t.code,{children:`onExport`}),` and closes. A long export returns at once and says when the
file is ready with a `,(0,_.jsx)(t.a,{href:`?path=/docs/components-notifications-toast--docs`,children:`Toast`}),`
and a Download action, as the story does.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ExportDialog`}),` takes `,(0,_.jsx)(t.code,{children:`scopes`}),` (radio options), `,(0,_.jsx)(t.code,{children:`defaultScope`}),`, `,(0,_.jsx)(t.code,{children:`formats`}),`
(radio options; one format hides the choice, CSV by default), `,(0,_.jsx)(t.code,{children:`columns`}),`
and `,(0,_.jsx)(t.code,{children:`defaultColumnKeys`}),` (as the Column Chooser's), `,(0,_.jsx)(t.code,{children:`onExport`}),`, which gets
`,(0,_.jsx)(t.code,{children:`{ format, scope, columns }`}),` and may return a promise, and the same
`,(0,_.jsx)(t.code,{children:`trigger`}),`, `,(0,_.jsx)(t.code,{children:`title`}),`, `,(0,_.jsx)(t.code,{children:`open`}),`, `,(0,_.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,_.jsx)(t.code,{children:`onOpenChange`}),` and `,(0,_.jsx)(t.code,{children:`container`}),`.`]}),`
`,(0,_.jsxs)(t.p,{children:[`The pattern owns no data. Reading the file is `,(0,_.jsx)(t.code,{children:`readFile`}),` (CSV text by
default; for Excel, read it with your spreadsheet library into `,(0,_.jsx)(t.code,{children:`{ columns, rows }`}),` and widen `,(0,_.jsx)(t.code,{children:`accept`}),`), checking a row is `,(0,_.jsx)(t.code,{children:`validate`}),`, saving is
`,(0,_.jsx)(t.code,{children:`onImport`}),`, and writing the export is `,(0,_.jsx)(t.code,{children:`onExport`}),`. Three helpers come
with it: `,(0,_.jsx)(t.code,{children:`parseCsv`}),`, `,(0,_.jsx)(t.code,{children:`toCsv`}),` and `,(0,_.jsx)(t.code,{children:`downloadCsv`}),`. `,(0,_.jsx)(t.code,{children:`toCsv`}),` puts a `,(0,_.jsx)(t.code,{children:`'`}),` before
a cell that starts with `,(0,_.jsx)(t.code,{children:`=`}),`, `,(0,_.jsx)(t.code,{children:`+`}),`, `,(0,_.jsx)(t.code,{children:`-`}),` or `,(0,_.jsx)(t.code,{children:`@`}),` and is not a number, so a
spreadsheet shows it instead of running it as a formula.`]}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`The import is a large Modal (48rem), never wider than the window; the
export a medium one.`}),`
`,(0,_.jsx)(t.li,{children:`The review scrolls inside the dialog under its sticky heading row,
so the summary above it and the buttons under it stay in view. It
lists the first 100 rows and says how many more there are; the import
still takes them all.`}),`
`,(0,_.jsx)(t.li,{children:`Long values with no spaces break rather than widen the table.`}),`
`]}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,_.jsx)(t.p,{children:`The catalogue lists Confirm as a step of its own. Here the review is the
confirmation: its button says how many rows it imports and the summary
above it how many it skips, so a fourth step would only repeat them.
Formats beyond CSV, and reading Excel, are the app's: the pattern adds no
spreadsheet library. The notice when an export is done is the app's
too, a Toast, since only the app knows when its file is ready. Both
dialogs are Modals rather than Drawers: each is a task that blocks the
list until it is done, not a side panel to keep open beside it.`}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Each dialog is named by its title. The import closes on Escape or its
close button, not on a click outside, so a stray click does not throw
away a mapped file.`}),`
`,(0,_.jsx)(t.li,{children:`The steps are a navigation landmark, "Import steps", with the current
step marked and each step's state said.`}),`
`,(0,_.jsx)(t.li,{children:`Rows are numbered as a spreadsheet numbers them, the heading row
being 1, so a problem can be found in the file. Blank rows keep their
number and are not imported.`}),`
`,(0,_.jsx)(t.li,{children:`Each mapping Select is named after its column: "Field for Budget".`}),`
`,(0,_.jsx)(t.li,{children:`The review is a scrollable region the keyboard can reach and scroll.
Each row's problems are text in its row, under a Problems heading, not
colour alone.`}),`
`,(0,_.jsx)(t.li,{children:`A failed read or import is announced as an alert; the result is
announced as a status.`}),`
`,(0,_.jsx)(t.li,{children:`The skipped rows and the template are real downloads, a button and a
link.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};