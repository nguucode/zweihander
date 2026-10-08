import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./AppShell.stories-DF34vCLX.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`app-shell`,children:`App Shell`}),`
`,(0,h.jsxs)(t.p,{children:[`The frame of an application: navigation, a header, and the page. The
navigation stays put while the page scrolls, and on a phone it moves into
a drawer that the header's menu button opens. Four pieces: `,(0,h.jsx)(t.code,{children:`AppShell`}),`,
`,(0,h.jsx)(t.code,{children:`AppHeader`}),`, `,(0,h.jsx)(t.code,{children:`AppNav`}),` for top navigation, and the kit's
`,(0,h.jsx)(t.a,{href:`?path=/docs/components-navigation-sidebar--docs`,children:`Sidebar`}),`.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/app-shell.json
`})}),`
`,(0,h.jsx)(t.h2,{id:`with-sidebar`,children:`With sidebar`}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(t.h2,{id:`collapsed-rail`,children:`Collapsed rail`}),`
`,(0,h.jsxs)(t.p,{children:[`Sidebar's `,(0,h.jsx)(t.code,{children:`isCollapsible`}),` turns it into an icon rail that the reader can
expand. The links keep their names, and show them as tooltips.`]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`top-navigation`,children:`Top navigation`}),`
`,(0,h.jsxs)(t.p,{children:[`No sidebar: a logo and `,(0,h.jsx)(t.code,{children:`AppNav`}),` links in the header. `,(0,h.jsx)(t.code,{children:`mobileNavigation`}),`
says what the drawer holds on a phone, where the links move.`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`on-a-phone`,children:`On a phone`}),`
`,(0,h.jsx)(t.p,{children:`Under 64rem of shell width (48rem for top navigation) the navigation is a
drawer. The header gets a menu button that opens it; choosing a link or
pressing Escape closes it, and focus returns to the button.`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`AppShell`})}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sidebar`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`A Sidebar. Beside the content from 64rem, in the drawer below.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`header`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`An AppHeader.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`mobileNavigation`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`sidebar`})}),(0,h.jsx)(t.td,{children:`What the drawer holds.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`navigationLabel`})}),(0,h.jsx)(t.td,{children:`string`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`Navigation`})}),(0,h.jsx)(t.td,{children:`Names the drawer and its buttons.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`mainId`})}),(0,h.jsx)(t.td,{children:`string`}),(0,h.jsx)(t.td,{children:`generated`}),(0,h.jsxs)(t.td,{children:[`The `,(0,h.jsx)(t.code,{children:`id`}),` of the `,(0,h.jsx)(t.code,{children:`main`}),` element, the skip link's target.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsxs)(t.td,{children:[`The page, inside `,(0,h.jsx)(t.code,{children:`<main>`}),`.`]})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`sidebar={isAdmin && <Sidebar … />}`}),` works: `,(0,h.jsx)(t.code,{children:`false`}),` and `,(0,h.jsx)(t.code,{children:`null`}),` count as
no sidebar, so there is no empty column, no drawer and no menu button.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`AppHeader`}),` takes `,(0,h.jsx)(t.code,{children:`start`}),` (breadcrumbs, or a logo and AppNav), `,(0,h.jsx)(t.code,{children:`end`}),`
(search, notifications, the account menu) and `,(0,h.jsx)(t.code,{children:`children`}),` for the middle.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`AppNav`}),` takes `,(0,h.jsx)(t.code,{children:`items`}),` (`,(0,h.jsx)(t.code,{children:`{ label, href }[]`}),`) and `,(0,h.jsx)(t.code,{children:`currentHref`}),`.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The shell fills the viewport`}),` (`,(0,h.jsx)(t.code,{children:`block-size: 100dvh`}),`) and its content
column scrolls, so the sidebar and the sticky header stay in place. Set
`,(0,h.jsx)(t.code,{children:`block-size`}),` on it to put it in a smaller box.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Breakpoints are the shell's own width`}),`, which in an app is the
viewport's. That is also what lets the stories show the phone layout in
a 390px box.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The shell is a size container`}),` (`,(0,h.jsx)(t.code,{children:`container-type: inline-size`}),`), so
it takes its width from where it sits, never from its content. In a
block it fills the line as usual; as a flex or grid item that would
otherwise shrink to fit, give it a width (`,(0,h.jsx)(t.code,{children:`inline-size: 100%`}),` or
`,(0,h.jsx)(t.code,{children:`flex: 1`}),`), or it collapses.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The drawer holds the same Sidebar.`}),` A collapsible one opens there
as the icon rail if it is collapsed, so for a collapsed rail pass a
plain Sidebar as `,(0,h.jsx)(t.code,{children:`mobileNavigation`}),`.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`A "Skip to content" link is the first thing in the shell, visible when
focused. It moves focus past the navigation to the `,(0,h.jsx)(t.code,{children:`main`}),` element. Give
`,(0,h.jsx)(t.code,{children:`mainId`}),` when something else should link there too; otherwise the id is
generated, so two shells in one page (as in these docs) never share it.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The page is the `,(0,h.jsx)(t.code,{children:`main`}),` landmark; the sidebar and AppNav are `,(0,h.jsx)(t.code,{children:`nav`}),`
landmarks named "Main". Only one is in the page at a time: the hidden
one is `,(0,h.jsx)(t.code,{children:`display: none`}),`, so it is out of the accessibility tree too.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The drawer is a modal dialog named "Navigation": focus moves into it,
the page behind is inert, and Escape closes it. The menu button says
so with `,(0,h.jsx)(t.code,{children:`aria-haspopup="dialog"`}),` and `,(0,h.jsx)(t.code,{children:`aria-expanded`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The drawer slides in from the start edge, from the right in a
right-to-left page. It is portalled to the body, so it reads the page's
direction: set `,(0,h.jsx)(t.code,{children:`dir="rtl"`}),` on `,(0,h.jsx)(t.code,{children:`<html>`}),`, not only on the shell.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The current page is marked `,(0,h.jsx)(t.code,{children:`aria-current="page"`}),` in both kinds of
navigation, and shown by more than colour.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),u()})))()}g();export{m as default};