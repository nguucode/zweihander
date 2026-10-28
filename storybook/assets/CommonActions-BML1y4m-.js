import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./CommonActions.stories-AfdYyygo.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(t.h1,{id:`common-actions`,children:`Common Actions`}),`
`,(0,b.jsx)(t.p,{children:`The actions every record and form shares (Create, Edit, Save, Cancel,
Delete and the rest), each with one label, one place, one button style,
one level of confirmation and, where the platform already has one, one
shortcut. After Carbon's Common actions pattern, cut to what an enterprise
app repeats on every object.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/common-actions.json
`})}),`
`,(0,b.jsxs)(t.p,{children:[`It installs `,(0,b.jsx)(t.code,{children:`commonActions`}),`, the table below as data, and
`,(0,b.jsx)(t.code,{children:`CommonActionsTable`}),`, which renders it. Place a button by reading its row:`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { commonActions } from './CommonActions'

<Button type="submit" {...commonActions.save.button}>{commonActions.save.label}</Button>
`})}),`
`,(0,b.jsxs)(t.p,{children:[`There is no `,(0,b.jsx)(t.code,{children:`<SaveButton>`}),`: the buttons stay Button, Menu entries and
Confirm Dialogs, and the catalogue only decides which. Rename a label or
change a level in your copy, and the table follows. A pattern usually owns
no data; this one is conventions, not records, so it ships them as data
the table and your code can both read.`]}),`
`,(0,b.jsx)(t.h2,{id:`reference`,children:`Reference`}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(t.h2,{id:`placement`,children:`Placement`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Form footer.`}),` Cancel, then Save, at the end. Save is the submit button
and the only primary one in the form. `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-form-layouts--docs`,children:`Form
Layouts`}),`'
`,(0,b.jsx)(t.code,{children:`FormActions`}),` lays them out.`]}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`List header.`}),` Import and Export, then Create as the page's one primary
button, at the end of the `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-card-heading--docs`,children:`Card
Heading`}),` or page
header.`]}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Record header.`}),` Edit next to the title; everything else in the overflow
menu, Delete last after a separator so it is never the item under the
pointer when the menu opens. A list row puts the same entries in its ⋯
menu (`,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-stacked-list--docs`,children:`Stacked List`}),`,
`,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-grid-list--docs`,children:`Grid List`}),`).`]}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`confirmation`,children:`Confirmation`}),`
`,(0,b.jsx)(t.p,{children:`Ask in proportion to what is lost. Each step up costs every user a click
on every use, so the level follows how hard the action is to reverse, not
how serious it sounds.`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Level`}),(0,b.jsx)(t.th,{children:`When`}),(0,b.jsx)(t.th,{children:`Built with`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`None`}),(0,b.jsx)(t.td,{children:`Easy to reverse, or nothing is lost: Edit, Duplicate, Export`}),(0,b.jsx)(t.td,{children:`The button`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Undo toast`}),(0,b.jsx)(t.td,{children:`Reversible, but the result leaves the screen: Archive, Remove`}),(0,b.jsxs)(t.td,{children:[(0,b.jsx)(t.a,{href:`?path=/docs/components-notifications-toast--docs`,children:`Toast`}),` with an Undo action`]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Confirm Dialog`}),(0,b.jsx)(t.td,{children:`Cannot be undone: Delete`}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.a,{href:`?path=/docs/components-overlays-confirm-dialog--docs`,children:`Confirm Dialog`})})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:`Type to confirm`}),(0,b.jsx)(t.td,{children:`Cannot be undone and takes other records with it: a workspace, a ledger`}),(0,b.jsxs)(t.td,{children:[`Confirm Dialog with `,(0,b.jsx)(t.code,{children:`confirmText`}),`, from a danger `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-action-panel--docs`,children:`Action Panel`})]})]})]})]}),`
`,(0,b.jsx)(t.p,{children:`Delete is a Confirm Dialog by default and goes up to type to confirm when
it cascades, so no row of the table names that level. An Undo toast times
out: keep the action reachable elsewhere too (an Archived filter, the
record's menu) for anyone who misses it. The dialog's own Cancel is
outlined, beside its contained destructive button; that is Confirm
Dialog's, not a second Cancel style.`}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`labels`,children:`Labels`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`One verb, sentence case.`}),` Add the object only when the page has more
than one kind: "Create invoice" in a header, "Delete" in an invoice's own
menu.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The pairs are not synonyms.`}),` Create makes a record, Add puts one into
a set; Delete destroys it, Remove takes it out of the set; Cancel throws
input away, Close has none to throw.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The confirm button repeats the action`}),` ("Delete invoice"), never
"OK" or "Yes".`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`shortcuts`,children:`Shortcuts`}),`
`,(0,b.jsxs)(t.p,{children:[`Only shortcuts the platform already teaches: ⌘S, Esc, ⌘Z. Shown as
`,(0,b.jsx)(t.a,{href:`?path=/docs/components-atomic-elements-kbd--docs`,children:`Kbd`}),` in Mac glyphs; show Ctrl for
⌘ on other systems. The app binds them; the catalogue only names them. A
shortcut for anything else belongs in the `,(0,b.jsx)(t.a,{href:`?path=/docs/components-navigation-command-palette--docs`,children:`Command
Palette`}),`, where it can be
found.`]}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`commonActions`}),` is keyed by id (`,(0,b.jsx)(t.code,{children:`save`}),`, `,(0,b.jsx)(t.code,{children:`delete`}),`, …); each entry has
`,(0,b.jsx)(t.code,{children:`label`}),`, `,(0,b.jsx)(t.code,{children:`purpose`}),`, `,(0,b.jsx)(t.code,{children:`placement`}),`, `,(0,b.jsx)(t.code,{children:`confirm`}),` (`,(0,b.jsx)(t.code,{children:`none`}),`, `,(0,b.jsx)(t.code,{children:`undo`}),`, `,(0,b.jsx)(t.code,{children:`dialog`}),` or
`,(0,b.jsx)(t.code,{children:`typed`}),`), and optionally `,(0,b.jsx)(t.code,{children:`button`}),` (`,(0,b.jsx)(t.code,{children:`variant`}),` and `,(0,b.jsx)(t.code,{children:`appearance`}),`; left out
for an action that only lives in a menu) and `,(0,b.jsx)(t.code,{children:`shortcut`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`No breakpoint of its own.`}),` The form footer and the headers wrap their
buttons when the row runs out of room; Save stays last.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The reference table`}),` scrolls sideways in a narrow container, as any
`,(0,b.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`.`]}),`
`]}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,b.jsx)(t.p,{children:`Carbon's Common actions, and where this departs from them:`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Fewer actions.`}),` Clear, Reset, Copy, Refresh, Search and a wizard's
Back and Next are left out: they belong to Filter Bar, Search, Steps
and their own components, which already place them.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Archive and Undo are added`}),`, because an ERP keeps records with
transactions and reverses rather than asks.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The trigger for Delete is outlined`}),`, as on Action Panel; only the
dialog's confirm button is filled.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsx)(t.li,{children:`Cancel comes before Save in the DOM as on screen, so Tab reaches the
safe choice first and Save is the submit button that Enter in a field
presses.`}),`
`,(0,b.jsx)(t.li,{children:`The icon-only ⋯ button is named "More actions".`}),`
`,(0,b.jsx)(t.li,{children:`A Confirm Dialog focuses Cancel when it opens, so Enter cannot delete;
with type to confirm, it focuses the field.`}),`
`,(0,b.jsx)(t.li,{children:`The reference table names each row by its action (a row header), so a
screen reader announces "Save" with each cell.`}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),s(),_()})))()}x();export{y as default};