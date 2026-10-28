import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,c,d as l,f as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./AppShell.stories-NSd9pdM5.js";function x(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{of:y}),`
`,(0,C.jsx)(t.h1,{id:`app-shell`,children:`App Shell`}),`
`,(0,C.jsxs)(t.p,{children:[`A template: the frame of an application. It only places three patterns,
the `,(0,C.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-top-bar--docs`,children:`Top Bar`}),` (`,(0,C.jsx)(t.code,{children:`TopBar`}),`,
with `,(0,C.jsx)(t.code,{children:`TopBarNav`}),` for links across it), the
`,(0,C.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-nav-sidebar--docs`,children:`Nav Sidebar`}),`
(`,(0,C.jsx)(t.code,{children:`NavSidebar`}),`) and the
`,(0,C.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-app-content--docs`,children:`App Content`}),`
(`,(0,C.jsx)(t.code,{children:`AppContent`}),`, which the shell puts around its children), on the Theme's
canvas, with no padding or gap of its own. The navigation stays put while
the page scrolls, and on a phone the sidebar narrows to its icon rail.`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/app-shell.json
`})}),`
`,(0,C.jsx)(t.h2,{id:`sidebar-layout`,children:`Sidebar layout`}),`
`,(0,C.jsxs)(t.p,{children:[`The default, `,(0,C.jsx)(t.code,{children:`layout="sidebar"`}),`: the sidebar runs the full height and
there is `,(0,C.jsx)(t.strong,{children:`no top bar`}),` on wide screens. What a top bar would hold goes in
the NavSidebar, laid out as in the Claude apps: the logo and the collapse
button in its top row, the tenant switcher and search in its `,(0,C.jsx)(t.code,{children:`header`}),`,
notifications, help and the account in its `,(0,C.jsx)(t.code,{children:`footer`}),`. Below 64rem the
sidebar is the rail: its header and footer rows stay, as icons, and the
header comes back above the page with the logo.`]}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(t.h2,{id:`top-bar-layout`,children:`Top bar layout`}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`layout="top-bar"`}),`: the header runs the full width above the sidebar and
the page.`]}),`
`,(0,C.jsx)(a,{of:v}),`
`,(0,C.jsx)(t.h2,{id:`the-logo`,children:`The logo`}),`
`,(0,C.jsxs)(t.p,{children:[`Pass the logo as `,(0,C.jsx)(t.code,{children:`brand`}),`, not inside the NavSidebar or the TopBar. The
shell places it in the same spot in both layouts: its left edge on the
sidebar icons' left edge, centred in a row as tall as the top bar. It does
not move when the sidebar collapses, and it follows density. In the
sidebar layout the shell hands it to the NavSidebar's top row, next to the
collapse button; a collapsed rail cuts the logo to the rail's width, so lead
the logo with its mark. It is rendered once, wherever it shows. A sidebar
that is not a NavSidebar gets no logo in the sidebar layout.`]}),`
`,(0,C.jsx)(t.h2,{id:`canvas-and-content-style`,children:`Canvas and content style`}),`
`,(0,C.jsxs)(t.p,{children:[`Two settings on the `,(0,C.jsx)(t.code,{children:`Theme`}),`, so a
whole app takes them at once:`]}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`canvas`})}),`: what the shell sits on. `,(0,C.jsx)(t.code,{children:`plain`}),` (the card colour),
`,(0,C.jsx)(t.code,{children:`neutral`}),` (the page gray, the default) or `,(0,C.jsx)(t.code,{children:`tinted`}),` (the accent's subtle
step). For any other colour or a gradient, pass
`,(0,C.jsx)(t.code,{children:`tokens={{ canvas, 'canvas-solid', 'canvas-foreground', 'canvas-muted-foreground' }}`}),`,
where `,(0,C.jsx)(t.code,{children:`canvas-solid`}),` is one colour standing for the canvas (for a
gradient, a colour from its middle): components on the canvas use it as
the surface under them, for a Badge's ring or a Checkbox's fill.
The kit checks contrast for its own three canvases only; a custom canvas,
in light and in dark (use `,(0,C.jsx)(t.code,{children:`var(--use-light, …) var(--use-dark, …)`}),`), is
yours to check.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:(0,C.jsx)(t.code,{children:`contentStyle`})}),`: how the page meets the canvas. `,(0,C.jsx)(t.code,{children:`flat`}),` (the default)
puts it on one card surface, inset 8px from the edges at every density
and flush below 48rem. `,(0,C.jsx)(t.code,{children:`card`}),` leaves it on the canvas, and each block is
a `,(0,C.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Card`}),` with
`,(0,C.jsx)(t.code,{children:`appearance="surface"`}),`, which is raised under `,(0,C.jsx)(t.code,{children:`card`}),` and a ruled-off
section under `,(0,C.jsx)(t.code,{children:`flat`}),`.`]}),`
`]}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsxs)(t.p,{children:[`Each piece of the shell is `,(0,C.jsx)(t.code,{children:`solid`}),` (the card colour, with an edge where it
meets the page) or `,(0,C.jsx)(t.code,{children:`transparent`}),` (the canvas, its text in the canvas
colours): `,(0,C.jsx)(t.code,{children:`topBarSurface`}),` (default `,(0,C.jsx)(t.code,{children:`solid`}),`) and `,(0,C.jsx)(t.code,{children:`sidebarSurface`}),` (default
`,(0,C.jsx)(t.code,{children:`transparent`}),`). On a `,(0,C.jsx)(t.code,{children:`plain`}),` canvas a transparent piece keeps its edge,
since nothing else marks it. That edge keys off `,(0,C.jsx)(t.code,{children:`canvas="plain"`}),`: with a
custom canvas from `,(0,C.jsx)(t.code,{children:`tokens`}),`, set `,(0,C.jsx)(t.code,{children:`canvas`}),` to the preset closest to it
(`,(0,C.jsx)(t.code,{children:`plain`}),` for a white one) so the edges follow.`]}),`
`,(0,C.jsx)(a,{of:b}),`
`,(0,C.jsx)(t.h3,{id:`sidebar-surfaces`,children:`Sidebar surfaces`}),`
`,(0,C.jsx)(t.p,{children:`The NavSidebar takes each surface's colours from the shell:`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Gray`}),`: `,(0,C.jsx)(t.code,{children:`transparent`}),` on the `,(0,C.jsx)(t.code,{children:`neutral`}),` canvas, the sidebar's own look.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`White`}),`: `,(0,C.jsx)(t.code,{children:`solid`}),`. The current item takes the brand's light tint
(`,(0,C.jsx)(t.code,{children:`--primary-subtle`}),`), since a gray fill on white reads as hover.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Transparent on a deep canvas of your own`}),`: a colour or gradient dark
enough for white text. Beside `,(0,C.jsx)(t.code,{children:`canvas`}),`, `,(0,C.jsx)(t.code,{children:`canvas-solid`}),`, `,(0,C.jsx)(t.code,{children:`canvas-foreground`}),`
and `,(0,C.jsx)(t.code,{children:`canvas-muted-foreground`}),`, the Theme tokens `,(0,C.jsx)(t.code,{children:`canvas-hover`}),`,
`,(0,C.jsx)(t.code,{children:`canvas-selected`}),`, `,(0,C.jsx)(t.code,{children:`canvas-field`}),`, `,(0,C.jsx)(t.code,{children:`canvas-field-border`}),`, `,(0,C.jsx)(t.code,{children:`canvas-badge`}),`
and `,(0,C.jsx)(t.code,{children:`canvas-badge-foreground`}),` set the sidebar's fills on it. Dark veils
(black at 12–24%) for hover, the current item and the search field deepen
the canvas under white text; a white badge with red text stands out on
any hue, a red canvas included. On a canvas of the brand's own hue, give
a brand avatar the `,(0,C.jsx)(t.code,{children:`subtle`}),` variant, or it vanishes.`]}),`
`]}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(t.h2,{id:`combinations`,children:`Combinations`}),`
`,(0,C.jsx)(t.p,{children:`Of the 36 combinations of layout, the two surfaces, canvas and content
style, 24 occur in real products. The other 12 render but should not be
used:`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`no `,(0,C.jsx)(t.code,{children:`plain`}),` canvas with `,(0,C.jsx)(t.code,{children:`flat`}),` content;`]}),`
`,(0,C.jsxs)(t.li,{children:[`no `,(0,C.jsx)(t.code,{children:`transparent`}),` top bar over a `,(0,C.jsx)(t.code,{children:`solid`}),` sidebar (on a `,(0,C.jsx)(t.code,{children:`plain`}),` canvas it
looks the same as a solid one, so that case is fine);`]}),`
`,(0,C.jsxs)(t.li,{children:[`no `,(0,C.jsx)(t.code,{children:`solid`}),` full-height sidebar (`,(0,C.jsx)(t.code,{children:`layout="sidebar"`}),`) with `,(0,C.jsx)(t.code,{children:`flat`}),` content.`]}),`
`]}),`
`,(0,C.jsx)(a,{of:d}),`
`,(0,C.jsx)(t.h2,{id:`collapsed-rail`,children:`Collapsed rail`}),`
`,(0,C.jsxs)(t.p,{children:[`NavSidebar's `,(0,C.jsx)(t.code,{children:`isCollapsible`}),` turns it into an icon rail that the reader can
expand. The links keep their names, and show them as tooltips; the header
and footer stay, as icons.`]}),`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(t.h2,{id:`top-navigation`,children:`Top navigation`}),`
`,(0,C.jsxs)(t.p,{children:[`No sidebar: a logo and `,(0,C.jsx)(t.code,{children:`TopBarNav`}),` links in the header. On a phone the
links stay in the bar and scroll sideways when they do not fit.`]}),`
`,(0,C.jsx)(a,{of:f}),`
`,(0,C.jsx)(a,{of:c}),`
`,(0,C.jsx)(t.h2,{id:`with-an-aside`,children:`With an aside`}),`
`,(0,C.jsxs)(t.p,{children:[`Three columns, after Tailwind UI's multi-column layouts: the sidebar, the
page and an `,(0,C.jsx)(t.code,{children:`aside`}),` on the right for what supports the page, such as a
summary, a status or recent activity. Pass it as `,(0,C.jsx)(t.code,{children:`aside`}),`, and name it with
`,(0,C.jsx)(t.code,{children:`asideLabel`}),`. From 80rem of shell width it sits beside the page, as wide as
the expanded sidebar (`,(0,C.jsx)(t.code,{children:`--sidebar-width`}),`), and each column scrolls on its
own, so the summary stays in view while the page scrolls. It takes the
page's surface: a second card under `,(0,C.jsx)(t.code,{children:`flat`}),`, the canvas under `,(0,C.jsx)(t.code,{children:`card`}),`.`]}),`
`,(0,C.jsx)(a,{of:l}),`
`,(0,C.jsx)(t.p,{children:`Under 80rem there is no room for a third column next to a usable page, so
the aside follows the page and the two scroll as one. Nothing is hidden,
but the aside now comes after the whole page, so keep what the reader
needs first in the page itself.`}),`
`,(0,C.jsx)(a,{of:u}),`
`,(0,C.jsx)(t.h2,{id:`on-a-phone`,children:`On a phone`}),`
`,(0,C.jsx)(t.p,{children:`Under 64rem of shell width the sidebar stays beside the page as the icon
rail, and cannot expand: 16rem would cover most of a phone. The links keep
their names, as tooltips. There is no menu button and no drawer.`}),`
`,(0,C.jsx)(a,{of:s}),`
`,(0,C.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,C.jsx)(t.p,{children:(0,C.jsx)(t.strong,{children:`AppShell`})}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{children:`Prop`}),(0,C.jsx)(t.th,{children:`Values`}),(0,C.jsx)(t.th,{children:`Default`}),(0,C.jsx)(t.th,{})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`layout`})}),(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`sidebar`}),`, `,(0,C.jsx)(t.code,{children:`top-bar`})]}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`sidebar`})}),(0,C.jsx)(t.td,{children:`Full-height sidebar with no top bar, or a full-width top bar.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`topBarSurface`})}),(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`solid`}),`, `,(0,C.jsx)(t.code,{children:`transparent`})]}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`solid`})}),(0,C.jsx)(t.td,{children:`The header on the card colour or on the canvas.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`sidebarSurface`})}),(0,C.jsxs)(t.td,{children:[(0,C.jsx)(t.code,{children:`solid`}),`, `,(0,C.jsx)(t.code,{children:`transparent`})]}),(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`transparent`})}),(0,C.jsx)(t.td,{children:`The sidebar on the card colour or on the canvas.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`brand`})}),(0,C.jsx)(t.td,{children:`node`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsx)(t.td,{children:`The logo, placed by the shell.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`sidebar`})}),(0,C.jsx)(t.td,{children:`node`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsx)(t.td,{children:`A NavSidebar. Beside the content at every width; the icon rail below 64rem.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`header`})}),(0,C.jsx)(t.td,{children:`node`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsxs)(t.td,{children:[`A TopBar. In `,(0,C.jsx)(t.code,{children:`sidebar`}),` it shows only below 64rem; without one the shell adds a plain TopBar there for the logo.`]})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`aside`})}),(0,C.jsx)(t.td,{children:`node`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsxs)(t.td,{children:[`A column beside the page, in an `,(0,C.jsx)(t.code,{children:`aside`}),` landmark. Right of the page from 80rem, below it under 80rem.`]})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`asideLabel`})}),(0,C.jsx)(t.td,{children:`string`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsx)(t.td,{children:`The aside's accessible name.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`mainId`})}),(0,C.jsx)(t.td,{children:`string`}),(0,C.jsx)(t.td,{children:`generated`}),(0,C.jsxs)(t.td,{children:[`The `,(0,C.jsx)(t.code,{children:`id`}),` of the `,(0,C.jsx)(t.code,{children:`main`}),` element, the skip link's target.`]})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{children:(0,C.jsx)(t.code,{children:`children`})}),(0,C.jsx)(t.td,{children:`node`}),(0,C.jsx)(t.td,{children:`–`}),(0,C.jsxs)(t.td,{children:[`The page, inside `,(0,C.jsx)(t.code,{children:`<main>`}),`.`]})]})]})]}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.code,{children:`sidebar={isAdmin && <NavSidebar … />}`}),` works: `,(0,C.jsx)(t.code,{children:`false`}),` and `,(0,C.jsx)(t.code,{children:`null`}),` count as
no sidebar, so there is no empty column.`]}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`TopBar`}),` takes `,(0,C.jsx)(t.code,{children:`start`}),` (breadcrumbs, or a logo and TopBarNav), `,(0,C.jsx)(t.code,{children:`end`}),`
(search, notifications, the account menu) and `,(0,C.jsx)(t.code,{children:`children`}),` for the middle.`]}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`TopBarNav`}),` takes `,(0,C.jsx)(t.code,{children:`items`}),` (`,(0,C.jsx)(t.code,{children:`{ label, href }[]`}),`) and `,(0,C.jsx)(t.code,{children:`currentHref`}),`.`]}),`
`,(0,C.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`The shell fills the viewport`}),` (`,(0,C.jsx)(t.code,{children:`block-size: 100dvh`}),`) and only the
page scrolls, so the sidebar and the header stay in place. Set
`,(0,C.jsx)(t.code,{children:`block-size`}),` on it to put it in a smaller box.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`The sidebar sits beside the page at every width.`}),` From 64rem, in
`,(0,C.jsx)(t.code,{children:`layout="sidebar"`}),`, it runs the full height and the top bar is hidden,
because the sidebar holds what the bar would. Below 64rem it is the icon
rail and the top bar comes back in both layouts, for the logo, search and
the account.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`An aside`}),` sits right of the page from 80rem, `,(0,C.jsx)(t.code,{children:`--sidebar-width`}),` wide,
and the page and the aside each scroll on their own. Under 80rem it goes
below the page and the two scroll together; below 48rem it is flush too,
ruled off from a flat page at the top.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Below 48rem`}),` a flat page drops its 8px inset, edge and rounding and
goes flush, since a frame around it only costs width on a phone.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Everything follows density`}),`: the top bar is `,(0,C.jsx)(t.code,{children:`--control-md`}),` plus two
`,(0,C.jsx)(t.code,{children:`--space-cluster`}),` tall, the sidebar is `,(0,C.jsx)(t.code,{children:`--sidebar-width`}),` wide, the page
padding is `,(0,C.jsx)(t.code,{children:`--space-section`}),`. The 8px inset of a flat page does not
change.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`Breakpoints are the shell's own width`}),`, which in an app is the
viewport's. That is also what lets the stories show the phone layout in
a 390px box.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.strong,{children:`The shell is a size container`}),` (`,(0,C.jsx)(t.code,{children:`container-type: inline-size`}),`), so
it takes its width from where it sits, never from its content. In a
block it fills the line as usual; as a flex or grid item that would
otherwise shrink to fit, give it a width (`,(0,C.jsx)(t.code,{children:`inline-size: 100%`}),` or
`,(0,C.jsx)(t.code,{children:`flex: 1`}),`), or it collapses.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`A "Skip to content" link is the first thing in the shell, visible when
focused. It moves focus past the navigation to the `,(0,C.jsx)(t.code,{children:`main`}),` element. Give
`,(0,C.jsx)(t.code,{children:`mainId`}),` when something else should link there too; otherwise the id is
generated, so two shells in one page (as in these docs) never share it.`]}),`
`,(0,C.jsxs)(t.li,{children:[`The page is the `,(0,C.jsx)(t.code,{children:`main`}),` landmark; the sidebar and TopBarNav are `,(0,C.jsx)(t.code,{children:`nav`}),`
landmarks named "Main".`]}),`
`,(0,C.jsxs)(t.li,{children:[`The aside is a `,(0,C.jsx)(t.code,{children:`complementary`}),` landmark, after the page in reading and
focus order. Name it with `,(0,C.jsx)(t.code,{children:`asideLabel`}),`. It takes focus (`,(0,C.jsx)(t.code,{children:`tabIndex={0}`}),`)
with a visible ring, so a keyboard can scroll it when it scrolls on its
own and holds nothing focusable.`]}),`
`,(0,C.jsx)(t.li,{children:`In the rail each link keeps its name, so the navigation reads the same
on a phone.`}),`
`,(0,C.jsxs)(t.li,{children:[`The current page is marked `,(0,C.jsx)(t.code,{children:`aria-current="page"`}),` in both kinds of
navigation, and shown by more than colour.`]}),`
`]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=t(),r(),o(),p()})))()}w();export{S as default};