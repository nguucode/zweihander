import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Breadcrumbs.stories-C-Fffne6.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:D}),`
`,(0,F.jsx)(t.h1,{id:`breadcrumbs`,children:`Breadcrumbs`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`The trail from the top of a hierarchy down to the current page, each step a
link back up.`}),(0,F.jsx)(x,{of:D}),(0,F.jsx)(s,{of:S}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsx)(t.p,{children:`Breadcrumbs has one look. What changes is the size, how a long trail
collapses, and what sits between the steps.`}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Form`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`md`})}),(0,F.jsx)(t.td,{children:`Under a page title, at body size. The default.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`sm`})}),(0,F.jsxs)(t.td,{children:[`Dense headers, panels and side sheets, at `,(0,F.jsx)(t.code,{children:`body-sm`}),`.`]})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`maxItems`})}),(0,F.jsx)(t.td,{children:`Deep hierarchies, or a trail in a narrow place: the middle collapses to "…", which expands in place.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`separator`})}),(0,F.jsx)(t.td,{children:`A slash or other glyph, where a chevron would clash with nearby icons.`})]})]})]}),(0,F.jsx)(s,{of:C}),(0,F.jsx)(s,{of:k}),(0,F.jsx)(s,{of:T}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Breadcrumbs } from 'zweihander/breadcrumbs'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/breadcrumbs.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/Breadcrumbs.tsx`,rel:`nofollow`,children:`src/components/navigation/Breadcrumbs.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/breadcrumbs`,rel:`nofollow`,children:`uiguideline.com/components/breadcrumbs`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: a plain `,(0,F.jsx)(t.code,{children:`<nav>`}),` and `,(0,F.jsx)(t.code,{children:`<ol>`}),`, after the `,(0,F.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`,rel:`nofollow`,children:`APG breadcrumb pattern`})]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:M,children:(0,F.jsx)(a,{of:j})}),(0,F.jsx)(t.p,{children:`Each step is a list item: its link (or the ellipsis), then a separator.
The last item has no separator after it.`}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsx)(t.p,{children:`Breadcrumbs is text, not a row of controls: its height is the line height
of its size.`}),(0,F.jsx)(g,{caption:`sm`,rows:[{part:`Text`,property:`Font size`,token:`--text-body-sm`},{part:`Text`,property:`Line height`,token:`--leading-body-sm`}]}),(0,F.jsx)(g,{caption:`md`,rows:[{part:`Text`,property:`Font size`,token:`--text-body`},{part:`Text`,property:`Line height`,token:`--leading-body`}]}),(0,F.jsx)(g,{caption:`Every size`,rows:[{part:`Item`,property:`Gap between items, and around the separator`,token:`--space-stack`},{part:`Ellipsis`,property:`Inline padding`,token:`--space-1`},{part:`Link and ellipsis`,property:`Corner radius`,token:`--radius-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Ellipsis`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,F.jsx)(t.p,{children:`The separator icon is 1em: it follows the text size.`}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(t.p,{children:`One colour set. Switch the theme in the toolbar: the values follow.`}),(0,F.jsx)(g,{caption:`Every size`,rows:[{part:`Link`,property:`Colour`,token:`--muted-foreground`},{part:`Link, hover`,property:`Colour`,token:`--foreground`},{part:`Current page`,property:`Colour`,token:`--foreground`},{part:`Separator`,property:`Colour`,token:`--muted-foreground`},{part:`Ellipsis`,property:`Colour`,token:`--muted-foreground`},{part:`Ellipsis, hover`,property:`Background`,token:`--accent`},{part:`Ellipsis, hover`,property:`Colour`,token:`--accent-foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,F.jsx)(a,{of:E})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hover`}),` turns a link to `,(0,F.jsx)(t.code,{children:`--foreground`}),` and underlines it; on the
ellipsis it fills an `,(0,F.jsx)(t.code,{children:`--accent`}),` chip.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,F.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the link or the
ellipsis.`]}),`
`,(0,F.jsx)(t.li,{children:`There is no disabled state: a level the reader cannot open is left out
of the trail.`}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:D})}),(0,F.jsxs)(t.p,{children:[`Every other `,(0,F.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsx)(t.p,{children:`Use Breadcrumbs on pages three or more levels deep, under the page title,
so a reader can see where they are and jump back up any number of levels.
It is a secondary aid: the main navigation still has to get people
everywhere.`}),(0,F.jsxs)(t.p,{children:[`Keep the trail on one line. When it would wrap, collapse the middle with
`,(0,F.jsx)(t.code,{children:`maxItems`}),`; the first level and the nearest ones stay in view.`]}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:O}),doCaption:`Collapse a long trail with maxItems: one line, and the levels that matter most stay visible.`,dont:(0,F.jsx)(a,{of:A}),dontCaption:`A trail that wraps reads as two rows and pushes the page down.`}),(0,F.jsx)(t.p,{children:`Write each label as the title of the page it opens, short enough to scan.
The last item is the current page, as text: a link to the page you are on
does nothing useful.`}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For history.`}),` Breadcrumbs shows where a page sits, not how the reader
got there. For "go back", use a Back link or
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`On a flat site.`}),` One or two levels need no trail; the main
navigation already says where you are.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For the steps of a task.`}),` Use a Stepper: it shows the steps ahead
too, and which are done.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`As the main navigation.`}),` Use a Nav Sidebar or Tabs.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`A `,(0,F.jsx)(t.code,{children:`<nav>`}),` landmark named "Breadcrumb" (change it with `,(0,F.jsx)(t.code,{children:`aria-label`}),`),
around an ordered list: screen readers announce the number of items and
the position of each.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Each level above the current page is a real `,(0,F.jsx)(t.code,{children:`<a href>`}),`, in the tab
order.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The last item is text with `,(0,F.jsx)(t.code,{children:`aria-current="page"`}),`, not a link.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Separators are `,(0,F.jsx)(t.code,{children:`aria-hidden`}),`, so they are not read between items.`]}),`
`,(0,F.jsx)(t.li,{children:`The ellipsis is a button named "Show 3 more". Enter or Space expands the
trail and moves focus to the first item it revealed, rather than
dropping it on the page.`}),`
`,(0,F.jsxs)(t.li,{children:[`The ellipsis is under 44px; on touch screens (`,(0,F.jsx)(t.code,{children:`pointer: coarse`}),`) its hit
area grows to 44×44px without it growing.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Focus ring: 2px `,(0,F.jsx)(t.code,{children:`--ring`}),`, 2px offset.`]}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),w()})))()}I();export{P as default};