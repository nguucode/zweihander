import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./AppShell.stories-Vz4JrhX1.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:h}),`
`,(0,y.jsx)(t.h1,{id:`app-shell`,children:`App Shell`}),`
`,(0,y.jsxs)(t.p,{children:[`A template: the frame of an application. It only places three patterns,
the `,(0,y.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-top-bar--docs`,children:`Top Bar`}),` (`,(0,y.jsx)(t.code,{children:`TopBar`}),`,
with `,(0,y.jsx)(t.code,{children:`TopBarNav`}),` for links across it), the
`,(0,y.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-nav-sidebar--docs`,children:`Nav Sidebar`}),`
(`,(0,y.jsx)(t.code,{children:`NavSidebar`}),`) and the
`,(0,y.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-app-content--docs`,children:`App Content`}),`
(`,(0,y.jsx)(t.code,{children:`AppContent`}),`, which the shell puts around its children), on the Theme's
canvas, with no padding or gap of its own. The navigation stays put while
the page scrolls, and on a phone it moves into a drawer that the top bar's
menu button opens.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/app-shell.json
`})}),`
`,(0,y.jsx)(t.h2,{id:`sidebar-layout`,children:`Sidebar layout`}),`
`,(0,y.jsxs)(t.p,{children:[`The default, `,(0,y.jsx)(t.code,{children:`layout="sidebar"`}),`: the sidebar runs the full height and
there is `,(0,y.jsx)(t.strong,{children:`no top bar`}),` on wide screens. What a top bar would hold goes in
the NavSidebar: search in its `,(0,y.jsx)(t.code,{children:`header`}),`, the account and notifications in its
`,(0,y.jsx)(t.code,{children:`footer`}),`. The header only appears while the sidebar is in the drawer, to
hold the menu button and the logo.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`top-bar-layout`,children:`Top bar layout`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`layout="top-bar"`}),`: the header runs the full width above the sidebar and
the page.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`the-logo`,children:`The logo`}),`
`,(0,y.jsxs)(t.p,{children:[`Pass the logo as `,(0,y.jsx)(t.code,{children:`brand`}),`, not inside the NavSidebar or the TopBar. The
shell places it in the same spot in both layouts: its left edge on the
sidebar icons' left edge, centred in a row as tall as the top bar. It does
not move when the sidebar collapses, and it follows density. In the
sidebar layout a collapsed rail cuts the logo to the rail's width, so lead
the logo with its mark. It is rendered once, wherever it shows.`]}),`
`,(0,y.jsx)(t.h2,{id:`canvas-and-content-style`,children:`Canvas and content style`}),`
`,(0,y.jsxs)(t.p,{children:[`Two settings on the `,(0,y.jsx)(t.code,{children:`Theme`}),`, so a
whole app takes them at once:`]}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`canvas`})}),`: what the shell sits on. `,(0,y.jsx)(t.code,{children:`plain`}),` (the card colour),
`,(0,y.jsx)(t.code,{children:`neutral`}),` (the page gray, the default) or `,(0,y.jsx)(t.code,{children:`tinted`}),` (the accent's subtle
step). For any other colour or a gradient, pass
`,(0,y.jsx)(t.code,{children:`tokens={{ canvas, 'canvas-solid', 'canvas-foreground', 'canvas-muted-foreground' }}`}),`,
where `,(0,y.jsx)(t.code,{children:`canvas-solid`}),` is one colour standing for the canvas (for a
gradient, a colour from its middle): components on the canvas use it as
the surface under them, for a Badge's ring or a Checkbox's fill.
The kit checks contrast for its own three canvases only; a custom canvas,
in light and in dark (use `,(0,y.jsx)(t.code,{children:`var(--use-light, …) var(--use-dark, …)`}),`), is
yours to check.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:(0,y.jsx)(t.code,{children:`contentStyle`})}),`: how the page meets the canvas. `,(0,y.jsx)(t.code,{children:`flat`}),` (the default)
puts it on one card surface, inset 8px from the edges at every density
and flush below 48rem. `,(0,y.jsx)(t.code,{children:`card`}),` leaves it on the canvas, and each block is
a `,(0,y.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Card`}),` with
`,(0,y.jsx)(t.code,{children:`appearance="surface"`}),`, which is raised under `,(0,y.jsx)(t.code,{children:`card`}),` and a ruled-off
section under `,(0,y.jsx)(t.code,{children:`flat`}),`.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsxs)(t.p,{children:[`Each piece of the shell is `,(0,y.jsx)(t.code,{children:`solid`}),` (the card colour, with an edge where it
meets the page) or `,(0,y.jsx)(t.code,{children:`transparent`}),` (the canvas, its text in the canvas
colours): `,(0,y.jsx)(t.code,{children:`topBarSurface`}),` (default `,(0,y.jsx)(t.code,{children:`solid`}),`) and `,(0,y.jsx)(t.code,{children:`sidebarSurface`}),` (default
`,(0,y.jsx)(t.code,{children:`transparent`}),`). On a `,(0,y.jsx)(t.code,{children:`plain`}),` canvas a transparent piece keeps its edge,
since nothing else marks it. That edge keys off `,(0,y.jsx)(t.code,{children:`canvas="plain"`}),`: with a
custom canvas from `,(0,y.jsx)(t.code,{children:`tokens`}),`, set `,(0,y.jsx)(t.code,{children:`canvas`}),` to the preset closest to it
(`,(0,y.jsx)(t.code,{children:`plain`}),` for a white one) so the edges follow.`]}),`
`,(0,y.jsx)(a,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`combinations`,children:`Combinations`}),`
`,(0,y.jsx)(t.p,{children:`Of the 36 combinations of layout, the two surfaces, canvas and content
style, 24 occur in real products. The other 12 render but should not be
used:`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`no `,(0,y.jsx)(t.code,{children:`plain`}),` canvas with `,(0,y.jsx)(t.code,{children:`flat`}),` content;`]}),`
`,(0,y.jsxs)(t.li,{children:[`no `,(0,y.jsx)(t.code,{children:`transparent`}),` top bar over a `,(0,y.jsx)(t.code,{children:`solid`}),` sidebar (on a `,(0,y.jsx)(t.code,{children:`plain`}),` canvas it
looks the same as a solid one, so that case is fine);`]}),`
`,(0,y.jsxs)(t.li,{children:[`no `,(0,y.jsx)(t.code,{children:`solid`}),` full-height sidebar (`,(0,y.jsx)(t.code,{children:`layout="sidebar"`}),`) with `,(0,y.jsx)(t.code,{children:`flat`}),` content.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`collapsed-rail`,children:`Collapsed rail`}),`
`,(0,y.jsxs)(t.p,{children:[`NavSidebar's `,(0,y.jsx)(t.code,{children:`isCollapsible`}),` turns it into an icon rail that the reader can
expand. The links keep their names, and show them as tooltips.`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`top-navigation`,children:`Top navigation`}),`
`,(0,y.jsxs)(t.p,{children:[`No sidebar: a logo and `,(0,y.jsx)(t.code,{children:`TopBarNav`}),` links in the header. `,(0,y.jsx)(t.code,{children:`mobileNavigation`}),`
says what the drawer holds on a phone, where the links move.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`on-a-phone`,children:`On a phone`}),`
`,(0,y.jsx)(t.p,{children:`Under 64rem of shell width (48rem for top navigation) the navigation is a
drawer. The header gets a menu button that opens it; choosing a link or
pressing Escape closes it, and focus returns to the button.`}),`
`,(0,y.jsx)(a,{of:s}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(t.p,{children:(0,y.jsx)(t.strong,{children:`AppShell`})}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Prop`}),(0,y.jsx)(t.th,{children:`Values`}),(0,y.jsx)(t.th,{children:`Default`}),(0,y.jsx)(t.th,{})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`layout`})}),(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`sidebar`}),`, `,(0,y.jsx)(t.code,{children:`top-bar`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`sidebar`})}),(0,y.jsx)(t.td,{children:`Full-height sidebar with no top bar, or a full-width top bar.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`topBarSurface`})}),(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`solid`}),`, `,(0,y.jsx)(t.code,{children:`transparent`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`solid`})}),(0,y.jsx)(t.td,{children:`The header on the card colour or on the canvas.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`sidebarSurface`})}),(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`solid`}),`, `,(0,y.jsx)(t.code,{children:`transparent`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`transparent`})}),(0,y.jsx)(t.td,{children:`The sidebar on the card colour or on the canvas.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`brand`})}),(0,y.jsx)(t.td,{children:`node`}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsx)(t.td,{children:`The logo, placed by the shell.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`sidebar`})}),(0,y.jsx)(t.td,{children:`node`}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsx)(t.td,{children:`A NavSidebar. Beside the content from 64rem, in the drawer below.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`header`})}),(0,y.jsx)(t.td,{children:`node`}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsxs)(t.td,{children:[`An TopBar. In `,(0,y.jsx)(t.code,{children:`sidebar`}),` it shows only while the sidebar is in the drawer; without one the shell adds a plain TopBar there.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`mobileNavigation`})}),(0,y.jsx)(t.td,{children:`node`}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`sidebar`})}),(0,y.jsx)(t.td,{children:`What the drawer holds.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`navigationLabel`})}),(0,y.jsx)(t.td,{children:`string`}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`Navigation`})}),(0,y.jsx)(t.td,{children:`Names the drawer and its buttons.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`mainId`})}),(0,y.jsx)(t.td,{children:`string`}),(0,y.jsx)(t.td,{children:`generated`}),(0,y.jsxs)(t.td,{children:[`The `,(0,y.jsx)(t.code,{children:`id`}),` of the `,(0,y.jsx)(t.code,{children:`main`}),` element, the skip link's target.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`children`})}),(0,y.jsx)(t.td,{children:`node`}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsxs)(t.td,{children:[`The page, inside `,(0,y.jsx)(t.code,{children:`<main>`}),`.`]})]})]})]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`sidebar={isAdmin && <NavSidebar … />}`}),` works: `,(0,y.jsx)(t.code,{children:`false`}),` and `,(0,y.jsx)(t.code,{children:`null`}),` count as
no sidebar, so there is no empty column, no drawer and no menu button.`]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`TopBar`}),` takes `,(0,y.jsx)(t.code,{children:`start`}),` (breadcrumbs, or a logo and TopBarNav), `,(0,y.jsx)(t.code,{children:`end`}),`
(search, notifications, the account menu) and `,(0,y.jsx)(t.code,{children:`children`}),` for the middle.`]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`TopBarNav`}),` takes `,(0,y.jsx)(t.code,{children:`items`}),` (`,(0,y.jsx)(t.code,{children:`{ label, href }[]`}),`) and `,(0,y.jsx)(t.code,{children:`currentHref`}),`.`]}),`
`,(0,y.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`The shell fills the viewport`}),` (`,(0,y.jsx)(t.code,{children:`block-size: 100dvh`}),`) and only the
page scrolls, so the sidebar and the header stay in place. Set
`,(0,y.jsx)(t.code,{children:`block-size`}),` on it to put it in a smaller box.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`From 64rem`}),` the sidebar sits beside the page; in `,(0,y.jsx)(t.code,{children:`layout="sidebar"`}),`
it runs the full height and the top bar is hidden, because the sidebar
holds what the bar would. Below 64rem the sidebar moves into the drawer
and the top bar comes back in both layouts, for the menu button and the
logo.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Below 48rem`}),` a flat page drops its 8px inset, edge and rounding and
goes flush, since a frame around it only costs width on a phone.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Everything follows density`}),`: the top bar is `,(0,y.jsx)(t.code,{children:`--control-md`}),` plus two
`,(0,y.jsx)(t.code,{children:`--space-cluster`}),` tall, the sidebar is `,(0,y.jsx)(t.code,{children:`--sidebar-width`}),` wide, the page
padding is `,(0,y.jsx)(t.code,{children:`--space-section`}),`. The 8px inset of a flat page does not
change.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Breakpoints are the shell's own width`}),`, which in an app is the
viewport's. That is also what lets the stories show the phone layout in
a 390px box.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`The shell is a size container`}),` (`,(0,y.jsx)(t.code,{children:`container-type: inline-size`}),`), so
it takes its width from where it sits, never from its content. In a
block it fills the line as usual; as a flex or grid item that would
otherwise shrink to fit, give it a width (`,(0,y.jsx)(t.code,{children:`inline-size: 100%`}),` or
`,(0,y.jsx)(t.code,{children:`flex: 1`}),`), or it collapses.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`The drawer holds the same NavSidebar.`}),` A collapsible one opens there
as the icon rail if it is collapsed, so for a collapsed rail pass a
plain NavSidebar as `,(0,y.jsx)(t.code,{children:`mobileNavigation`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`A "Skip to content" link is the first thing in the shell, visible when
focused. It moves focus past the navigation to the `,(0,y.jsx)(t.code,{children:`main`}),` element. Give
`,(0,y.jsx)(t.code,{children:`mainId`}),` when something else should link there too; otherwise the id is
generated, so two shells in one page (as in these docs) never share it.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The page is the `,(0,y.jsx)(t.code,{children:`main`}),` landmark; the sidebar and TopBarNav are `,(0,y.jsx)(t.code,{children:`nav`}),`
landmarks named "Main". Only one is in the page at a time: the hidden
one is `,(0,y.jsx)(t.code,{children:`display: none`}),`, so it is out of the accessibility tree too.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The drawer is a modal dialog named "Navigation": focus moves into it,
the page behind is inert, and Escape closes it. The menu button says
so with `,(0,y.jsx)(t.code,{children:`aria-haspopup="dialog"`}),` and `,(0,y.jsx)(t.code,{children:`aria-expanded`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The drawer slides in from the start edge, from the right in a
right-to-left page. It is portalled to the body, so it reads the page's
direction: set `,(0,y.jsx)(t.code,{children:`dir="rtl"`}),` on `,(0,y.jsx)(t.code,{children:`<html>`}),`, not only on the shell.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The current page is marked `,(0,y.jsx)(t.code,{children:`aria-current="page"`}),` in both kinds of
navigation, and shown by more than colour.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),o(),g()})))()}b();export{v as default};