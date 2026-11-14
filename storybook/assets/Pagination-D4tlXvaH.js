import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Pagination.stories-BPPi6VxW.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c,{of:A}),`
`,(0,F.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`Moves through a long list one page at a time: previous, next, and the page
numbers around the current one. Under a table it can also say which rows
are shown ("21–40 of 340") and let the reader pick how many rows a page
holds.`}),(0,F.jsx)(x,{of:A}),(0,F.jsx)(s,{of:O}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsx)(t.p,{children:`Pagination has one look and one size. What changes is how many numbers
show, whether the pages are buttons or links, and the two optional ends.`}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Form`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`getHref`})}),(0,F.jsx)(t.td,{children:`Pages with their own URL: each page is a link that can be opened in a new tab and shared.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:`Buttons`}),(0,F.jsx)(t.td,{children:`Pages that only exist in this view's state, such as a filtered list in a dialog. The default.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`totalItems`})}),(0,F.jsx)(t.td,{children:`A table footer, where the reader needs to know how many rows there are: adds the summary at the start.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`pageSizeOptions`})}),(0,F.jsx)(t.td,{children:`Long tables where readers scan in bulk: adds a "Rows per page" select at the end.`})]})]})]}),(0,F.jsx)(s,{of:E}),(0,F.jsx)(s,{of:T}),(0,F.jsx)(s,{of:S}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Pagination } from 'zweihander/pagination'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/pagination.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/Pagination.tsx`,rel:`nofollow`,children:`src/components/navigation/Pagination.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/pagination`,rel:`nofollow`,children:`uiguideline.com/components/pagination`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: a plain `,(0,F.jsx)(t.code,{children:`<nav>`}),` around a list of buttons or links`]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:M,children:(0,F.jsx)(i,{of:j})}),(0,F.jsx)(t.p,{children:`The first and last page always show, the current page keeps a sibling
each side, and "…" appears only where it hides two or more pages. A single
hidden page is shown instead, since "…" would take the same room. So the
number of controls stays the same as you move through the middle, and
Next does not jump.`}),(0,F.jsxs)(t.p,{children:[`The summary and the select only appear when `,(0,F.jsx)(t.code,{children:`totalItems`}),` and
`,(0,F.jsx)(t.code,{children:`pageSizeOptions`}),` are passed. The summary sits at the start and pushes the
pages and the select to the end; on a narrow screen the row wraps.`]}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsxs)(t.p,{children:[`One size, Atlassian Design's: the `,(0,F.jsx)(t.code,{children:`md`}),` control tier (Foundations /
Sizing), 32px. A control is square at its minimum; the inline padding only
shows on a page number of three digits or more. Previous and next have no
padding, so they stay square. The controls sit 4px apart, and the
ellipsis has 8px either side.`]}),(0,F.jsx)(g,{caption:`Every pagination`,rows:[{part:`Control`,property:`Height and minimum width`,token:`--control-md`},{part:`Control`,property:`Inline padding`,token:`--control-md-pad`},{part:`Control`,property:`Corner radius`,token:`--control-md-radius`},{part:`Previous, Next`,property:`Icon size`,token:`--icon-md`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Summary, List, Rows per page`,property:`Gap between them`,token:`--space-inline`},{part:`Control`,property:`Gap between controls`,token:`--space-1`},{part:`Ellipsis`,property:`Inline padding`,token:`--space-2`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Control`,property:`Height and minimum width on touch screens`,token:`--target-coarse`}]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(t.p,{children:`One colour set: the current page is the only fill. Switch the theme and
the accent in the toolbar: the values follow.`}),(0,F.jsx)(g,{caption:`Every pagination`,rows:[{part:`Page, Previous, Next`,property:`Colour`,token:`--color-text`},{part:`Page, Previous, Next, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Page, Previous, Next, hover`,property:`Colour`,token:`--color-text`},{part:`Current page`,property:`Background`,token:`--color-background-brand-bold`},{part:`Current page`,property:`Colour`,token:`--color-text-brand-inverse`},{part:`Ellipsis, Summary, Rows per page label`,property:`Colour`,token:`--color-text-subtlest`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,F.jsx)(t.p,{children:`At rest a control has no fill.`}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,F.jsx)(i,{of:C})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Selected`}),`: the current page is filled with `,(0,F.jsx)(t.code,{children:`--color-background-brand-bold`}),`, medium
weight. It does not change on hover, and pressing it does nothing.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hover`}),` fills a page, Previous or Next with an `,(0,F.jsx)(t.code,{children:`--color-background-neutral`}),` chip.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,F.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the control.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Disabled`}),`: Previous on the first page (above) and Next on the last, at 50%
opacity. As buttons they are `,(0,F.jsx)(t.code,{children:`disabled`}),`; as links they lose their
`,(0,F.jsx)(t.code,{children:`href`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:A})}),(0,F.jsxs)(t.p,{children:[`The rows-per-page select is a `,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),`
at `,(0,F.jsx)(t.code,{children:`size="sm"`}),`, 32px: level with the page controls. Changing it moves to the page that holds the first row
shown before, so the reader does not lose their place; it calls
`,(0,F.jsx)(t.code,{children:`onPageSizeChange`}),`, then `,(0,F.jsx)(t.code,{children:`onPageChange`}),` if the page moved.`]}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`size`}),` is deprecated. Pagination has one size, as Atlassian's does:
`,(0,F.jsx)(t.code,{children:`size="sm"`}),` renders the same 32px controls as `,(0,F.jsx)(t.code,{children:`md`}),`. It is still accepted
for one release; drop it. The kit's rule for a deprecated prop: it warns
in the development console, once, when it is passed a value that is not
its documented default (or when a renamed prop is used under its old
name). So `,(0,F.jsx)(t.code,{children:`size="sm"`}),` warns, and `,(0,F.jsx)(t.code,{children:`size="md"`}),`, the default, is silent.`]}),(0,F.jsxs)(t.p,{children:[`Every other `,(0,F.jsx)(t.code,{children:`<nav>`}),` attribute passes through. `,(0,F.jsx)(t.code,{children:`paginationItems(page, total, siblings, boundary)`}),` is exported too, for building your own.`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsx)(t.p,{children:`Use Pagination under a long list or table when the reader needs to know
where they are in it and jump to a page: search results, an audit log, an
order history. Put it below the content it pages, and keep the list's
position stable as pages change.`}),(0,F.jsxs)(t.p,{children:[`Leave `,(0,F.jsx)(t.code,{children:`siblingCount`}),` and `,(0,F.jsx)(t.code,{children:`boundaryCount`}),` at 1. The control stays short and
keeps the same width as the reader moves, so Next stays under the pointer.`]}),(0,F.jsx)(l,{do:(0,F.jsx)(i,{of:D}),doCaption:`The default range: first, last, and the current page with a neighbour each side, on one line.`,dont:(0,F.jsx)(i,{of:k}),dontCaption:`Every page number at once wraps over several lines and buries the current page.`}),(0,F.jsxs)(t.p,{children:[`Under a table, pass `,(0,F.jsx)(t.code,{children:`totalItems`}),` so the reader knows how much there is.
Offer `,(0,F.jsx)(t.code,{children:`pageSizeOptions`}),` only when readers really scan in bulk; three or
four choices (10, 20, 50, 100) are enough.`]}),(0,F.jsxs)(t.p,{children:[`When the pages have URLs, pass `,(0,F.jsx)(t.code,{children:`getHref`}),`, so a page can be opened in a new
tab, bookmarked and shared.`]}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a feed read top to bottom.`}),` Load more as the reader scrolls, or
with a "Load more" `,(0,F.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`:
page numbers mean nothing in a stream.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a few items.`}),` If everything fits on one page, show it all.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For the steps of a task.`}),` Use a Stepper.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For switching between views of one thing.`}),` Use Tabs.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`A `,(0,F.jsx)(t.code,{children:`<nav>`}),` landmark named "Pagination", around a list.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Each page control is named "Page 3"; the current one has
`,(0,F.jsx)(t.code,{children:`aria-current="page"`}),`. Previous and next are named "Previous page" and
"Next page".`]}),`
`,(0,F.jsxs)(t.li,{children:[`At either end, Previous or Next is disabled. As links they lose their
`,(0,F.jsx)(t.code,{children:`href`}),` (the only thing that stops an `,(0,F.jsx)(t.code,{children:`<a>`}),` navigating) and keep
`,(0,F.jsx)(t.code,{children:`role="link"`}),` with `,(0,F.jsx)(t.code,{children:`aria-disabled`}),`, so they are still announced as a
disabled link.`]}),`
`,(0,F.jsxs)(t.li,{children:[`With `,(0,F.jsx)(t.code,{children:`getHref`}),`, each control is a real `,(0,F.jsx)(t.code,{children:`<a href>`}),`; without it, a native
`,(0,F.jsx)(t.code,{children:`<button>`}),`. Both are in the tab order and activate with Enter (buttons
with Space too).`]}),`
`,(0,F.jsxs)(t.li,{children:[`The summary has `,(0,F.jsx)(t.code,{children:`role="status"`}),`, a polite live region, so "21–40 of 340"
is read out after a page or size change.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The rows-per-page select is a combobox named "Rows per page"; its
visible label is `,(0,F.jsx)(t.code,{children:`aria-hidden`}),` so the name is not read twice.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The ellipsis is `,(0,F.jsx)(t.code,{children:`aria-hidden`}),`: the page names already say which numbers
are there.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Controls are 32px and grow to 44px on touch screens (`,(0,F.jsx)(t.code,{children:`pointer: coarse`}),`).`]}),`
`,(0,F.jsxs)(t.li,{children:[`Focus ring: 2px `,(0,F.jsx)(t.code,{children:`--color-border-focused`}),`, 2px offset.`]}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),a(),d(),p(),h(),f(),m(),b(),w()})))()}I();export{P as default};