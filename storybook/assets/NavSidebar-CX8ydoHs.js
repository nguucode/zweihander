import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./NavSidebar.stories-DFkqY8Pf.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{of:D}),`
`,(0,L.jsx)(t.h1,{id:`nav-sidebar`,children:`Nav Sidebar`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsxs)(t.p,{children:[`The app's main navigation, down the side of the screen, laid out as in the
Claude apps: the logo and the collapse button on top, a header for the
tenant switcher and search, links in categories, and a footer for the
account, notifications and help. It can collapse to an icon rail. A pattern,
one of the three pieces the `,(0,L.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),`
template places (with the Top Bar and App Content); it was the
Navigation/Sidebar component.`]}),(0,L.jsx)(x,{of:D}),(0,L.jsx)(s,{of:S}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Variant`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Expanded`}),(0,L.jsx)(t.td,{children:`The default: icon, label and badge on every row.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Collapsible (`,(0,L.jsx)(t.code,{children:`isCollapsible`}),`)`]}),(0,L.jsx)(t.td,{children:`Apps where the content needs the width at times: a button in the top row folds the sidebar to the rail.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Rail (`,(0,L.jsx)(t.code,{children:`isCollapsed`}),` or `,(0,L.jsx)(t.code,{children:`defaultCollapsed`}),`)`]}),(0,L.jsx)(t.td,{children:`Icons only, labels in tooltips. For tools the reader knows well. The header and footer stay, as icons; items without an icon are left out.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Plain`}),(0,L.jsx)(t.td,{children:`No logo, header or footer: a section's own navigation inside a larger layout.`})]})]})]}),(0,L.jsx)(s,{of:j}),(0,L.jsx)(t.h3,{id:`rail-preview`,children:`Rail preview`}),(0,L.jsx)(t.p,{children:`Collapsed, resting the mouse on the rail for a moment floats the full
sidebar over the page, as in the Claude apps; the rail keeps its place in
the layout, so the page does not move. The preview's top button, "Keep
sidebar open", docks it. It stays while a menu opened from it is open.
Touch and keyboard do not open it: keyboard focus reaches the same links in
the rail, and the expand button docks the sidebar.`}),(0,L.jsx)(s,{of:w}),(0,L.jsx)(t.h3,{id:`categories`,children:`Categories`}),(0,L.jsxs)(t.p,{children:[`A group is a category. `,(0,L.jsx)(t.code,{children:`isCollapsible`}),` makes its label a button that opens
and closes it; `,(0,L.jsx)(t.code,{children:`limit`}),` shows its first items with a small "Show more" for
the rest, and the current page is never hidden behind the limit. `,(0,L.jsx)(t.code,{children:`action`}),`
is opt-in: a button at the end of the label row (an icon Button that adds an
item, say), shown on hover and focus. Leave it off where nothing is added
from the sidebar.`]}),(0,L.jsx)(s,{of:O}),(0,L.jsx)(t.h3,{id:`header-and-footer-rows`,children:`Header and footer rows`}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`NavSidebarButton`}),` is a row that looks like an item: an icon, a label, an
optional `,(0,L.jsx)(t.code,{children:`badge`}),`, `,(0,L.jsx)(t.code,{children:`description`}),` line and `,(0,L.jsx)(t.code,{children:`end`}),` (a chevron, a shortcut). It
is a button, so it can be a Menu's or Popover's trigger. Its appearances:`]}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Appearance`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ghost`})}),(0,L.jsxs)(t.td,{children:[`A row like an item: notifications (with its count as `,(0,L.jsx)(t.code,{children:`badge`}),`), help, the account.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`switcher`})}),(0,L.jsx)(t.td,{children:`A tenant or workspace switcher: the name in medium weight, its chevron right after it, the avatar a rounded square.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`field`})}),(0,L.jsx)(t.td,{children:`A search button drawn as an input, its shortcut hint at the far end, that opens a command palette.`})]})]})]}),(0,L.jsx)(t.p,{children:`An Avatar in the leading slot is 20px in every density, and every leading
visual (logo mark, avatar, icon) is centred on the nav icons' line. In the
rail a row shows its icon only and takes its label (and badge) as its name
and tooltip.`}),(0,L.jsx)(t.h3,{id:`backgrounds`,children:`Backgrounds`}),(0,L.jsxs)(t.p,{children:[`Gray is the sidebar's own `,(0,L.jsx)(t.code,{children:`--surface-filled`}),`, and what a transparent
sidebar shows on the neutral canvas. In an App Shell it can also be white
(`,(0,L.jsx)(t.code,{children:`sidebarSurface="solid"`}),`, the current item in the brand tint) or
transparent on a deep canvas of your own; see Sidebar surfaces on the
`,(0,L.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` page.`]}),(0,L.jsx)(s,{of:P}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`Copied into your project through the registry, like every pattern (not in
the npm package):`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/nav-sidebar.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/patterns/application-ui/NavSidebar.tsx`,rel:`nofollow`,children:`src/components/patterns/application-ui/NavSidebar.tsx`})]}),`
`,(0,L.jsx)(t.li,{children:`Spec: our own; uiguideline.com has no page for it`}),`
`,(0,L.jsxs)(t.li,{children:[`Behaviour: a plain `,(0,L.jsx)(t.code,{children:`<nav>`}),`; the rail's labels use `,(0,L.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`})]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(a,{of:N})}),(0,L.jsx)(t.p,{children:`In the rail the logo keeps its place, cut to the rail's width, and the
expand button shows over it on hover or focus. The header and footer stay
as icons; labels, badges, category heads and "Show more" are hidden, and
each category starts with a rule instead of its label.`}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsx)(t.p,{children:`Items are rows of the md control tier, 2px apart in every density, so
hover and current fills never touch.`}),(0,L.jsx)(g,{caption:`Sidebar`,rows:[{part:`NavSidebar`,property:`Padding`,token:`--space-inline`},{part:`NavSidebar`,property:`Gap between groups`,token:`--space-group`},{part:`Brand row`,property:`Height from the top edge: --control-md plus twice`,token:`--space-cluster`},{part:`Header`,property:`Gap between rows`,token:`--space-inline`},{part:`Header`,property:`Space below`,token:`--space-inline`},{part:`Collapse button`,property:`Size`,token:`--control-md`},{part:`Category label row`,property:`Height`,token:`--box-sm`},{part:`Items, footer rows`,property:`Gap`,token:`--space-0-5`},{part:`Footer`,property:`Space above`,token:`--space-inline`}]}),(0,L.jsx)(g,{caption:`Item`,rows:[{part:`Item`,property:`Height`,token:`--control-md`},{part:`Item`,property:`Inline padding`,token:`--space-inline`},{part:`Item`,property:`Gap`,token:`--space-inline`},{part:`Item`,property:`Corner radius`,token:`--radius-control`},{part:`Icon`,property:`Size, and the width of every leading slot`,token:`--icon-md`},{part:`Avatar in a row`,property:`Size`,token:`--box-xs`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Category label, badge, Show more`,property:`Font size`,token:`--text-body-sm`},{part:`Badge`,property:`Inline padding`,token:`--control-xs-pad`},{part:`Badge`,property:`Corner radius`,token:`--radius-pill`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,L.jsx)(g,{caption:`Focus ring`,rows:[{part:`Item, collapse button`,property:`Width`,token:`--focus-width`},{part:`Item, collapse button`,property:`Offset (inside)`,token:`--focus-offset-inset`}]}),(0,L.jsxs)(t.p,{children:[`Expanded, the sidebar is 16rem wide. The rail is one square row plus the
padding either side: `,(0,L.jsx)(t.code,{children:`--control-md`}),` plus twice `,(0,L.jsx)(t.code,{children:`--space-2`}),`. A long label is
cut with an ellipsis. Give the sidebar the height to fill; its body
scrolls when the items do not fit.`]}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(g,{caption:`Sidebar`,rows:[{part:`NavSidebar`,property:`Background`,token:`--surface-filled`},{part:`NavSidebar`,property:`Edge`,token:`--border`},{part:`Category label`,property:`Colour`,token:`--muted-foreground`},{part:`Search field`,property:`Background`,token:`--card`},{part:`Search field`,property:`Edge`,token:`--input`}]}),(0,L.jsx)(g,{caption:`Item`,rows:[{part:`Label`,property:`Colour`,token:`--subtle-foreground`},{part:`Icon`,property:`Colour`,token:`--muted-foreground`},{part:`Item, hover`,property:`Background`,token:`--hover-overlay`},{part:`Item, hover`,property:`Label and icon`,token:`--accent-foreground`},{part:`Item, current`,property:`Background`,token:`--selected`},{part:`Item, current`,property:`Label and icon`,token:`--foreground`},{part:`Badge`,property:`Background`,token:`--destructive`},{part:`Badge`,property:`Colour`,token:`--destructive-foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,L.jsxs)(t.p,{children:[`Hover is an overlay, not a solid: in dark mode the sidebar's own surface
is the same grey as `,(0,L.jsx)(t.code,{children:`--accent`}),`, so an opaque hover fill would vanish. A
badge is a count that needs attention, so it is red and sits right after
its label. An App Shell overrides the current fill, the hover, the search
field and the badge for its white and transparent surfaces.`]}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Current`,content:(0,L.jsx)(a,{of:E})}],children:(0,L.jsx)(a,{of:C})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Current`}),` is a `,(0,L.jsx)(t.code,{children:`--selected`}),` fill, a step past the hover fill so the
two never read alike, plus medium weight for anyone who cannot tell the
fills apart. It stays off the accent: where you are is not a call to
action.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,L.jsx)(t.code,{children:`--ring`}),` outline drawn inside the row, so rows that
sit flush do not cover each other's ring.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Collapsed`}),` is the rail; see Variants.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:D})}),(0,L.jsxs)(t.p,{children:[`Every other `,(0,L.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsx)(t.p,{children:`Use a NavSidebar for an app's main navigation when it has more than five or
so destinations, or will grow: the list runs down and does not wrap. Name
groups by what is in them, keep labels to a word or two, and give every
item an icon if the sidebar can collapse.`}),(0,L.jsx)(l,{do:(0,L.jsx)(a,{of:k}),doCaption:`Short labels, an icon on each, grouped under a few names.`,dont:(0,L.jsx)(a,{of:M}),dontCaption:`Long labels get cut, and with no icons there is nothing to show in the rail.`}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For three to five sections of one page or object.`}),` Use
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-tabs--docs`,children:`Tabs`}),` across the top.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For actions.`}),` A sidebar goes places. Put actions in
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Buttons`}),` or a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`On a phone, as is.`}),` 16rem is most of a phone's width. In an
`,(0,L.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` under
64rem it is always the icon rail, with no collapse button; elsewhere,
pass `,(0,L.jsx)(t.code,{children:`isCollapsed`}),`.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`A `,(0,L.jsx)(t.code,{children:`<nav>`}),` landmark named "Main"; rename it with `,(0,L.jsx)(t.code,{children:`aria-label`}),` when the
page has another navigation. The current item has
`,(0,L.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[`Each group's label names its list through `,(0,L.jsx)(t.code,{children:`aria-labelledby`}),` ("Projects,
list, 3 items"), and keeps doing so in the rail, where it is only
visually hidden. Labels are not headings, so they do not compete with
the page's outline.`]}),`
`,(0,L.jsxs)(t.li,{children:[`In the rail each link keeps its name through `,(0,L.jsx)(t.code,{children:`aria-label`}),`, badge
included ("Inbox, 12"), and a tooltip shows the same text on hover and
on keyboard focus.`]}),`
`,(0,L.jsxs)(t.li,{children:[`The collapse button is named "Collapse sidebar" / "Expand sidebar" and
carries `,(0,L.jsx)(t.code,{children:`aria-expanded`}),`; in the rail preview it is "Keep sidebar open".`]}),`
`,(0,L.jsx)(t.li,{children:`A badge joins its row's name after a comma ("Inbox, 12",
"Notifications, 3"), expanded and in the rail alike.`}),`
`,(0,L.jsx)(t.li,{children:`The rail preview opens on mouse hover only. Keyboard focus never covers
the rail with it: the rail's links are reachable as they are, and the
expand button docks the sidebar.`}),`
`,(0,L.jsxs)(t.li,{children:[`A collapsible category's label is a button with `,(0,L.jsx)(t.code,{children:`aria-expanded`}),` and
`,(0,L.jsx)(t.code,{children:`aria-controls`}),` pointing at its list; Enter and Space open and close it.
A category's `,(0,L.jsx)(t.code,{children:`action`}),` needs its own name ("Add to Pinned").`]}),`
`,(0,L.jsxs)(t.li,{children:[`A `,(0,L.jsx)(t.code,{children:`NavSidebarButton`}),` is named by its text; in the rail, by its `,(0,L.jsx)(t.code,{children:`label`}),`
through `,(0,L.jsx)(t.code,{children:`aria-label`}),`, with the same text as a tooltip.`]}),`
`,(0,L.jsxs)(t.li,{children:[`Rows are 32px tall, 44px on touch screens (`,(0,L.jsx)(t.code,{children:`pointer: coarse`}),`).`]}),`
`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),c(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};