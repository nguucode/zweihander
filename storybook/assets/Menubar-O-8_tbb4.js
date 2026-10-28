import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A}from"./Menubar.stories-DJ9HpXK2.js";function j(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{of:D}),`
`,(0,N.jsx)(t.h1,{id:`menubar`,children:`Menubar`}),`
`,(0,N.jsxs)(u,{children:[(0,N.jsxs)(_,{value:`overview`,children:[(0,N.jsx)(t.p,{children:`A row of menus across the top of a tool, as in a desktop app: File, Edit,
View, each opening a flyout of commands. Use it in an editor-like screen
with more commands than a toolbar can show.`}),(0,N.jsx)(x,{of:D}),(0,N.jsx)(s,{of:E}),(0,N.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,N.jsxs)(t.p,{children:[`Menubar has one look. Each flyout is a
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` popup and takes the
same entries: actions with shortcuts, links, submenus, checkbox and radio
items, groups and separators.`]}),(0,N.jsxs)(t.table,{children:[(0,N.jsx)(t.thead,{children:(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.th,{children:`Menu`}),(0,N.jsx)(t.th,{children:`Use for`})]})}),(0,N.jsxs)(t.tbody,{children:[(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:`Enabled (the default)`}),(0,N.jsx)(t.td,{children:`Commands that apply now.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsxs)(t.td,{children:[`Disabled (`,(0,N.jsx)(t.code,{children:`disabled`}),`)`]}),(0,N.jsx)(t.td,{children:`A menu that does not apply in the current state. It stays in place, muted, so the bar does not shift.`})]})]})]}),(0,N.jsx)(s,{of:O}),(0,N.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,N.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-js`,children:`import { Menubar } from 'zweihander/menubar'
`})}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/menubar.json
`})}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Source: `,(0,N.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/Menubar.tsx`,rel:`nofollow`,children:`src/components/navigation/Menubar.tsx`})]}),`
`,(0,N.jsxs)(t.li,{children:[`Spec: `,(0,N.jsx)(t.a,{href:`https://www.uiguideline.com/components/menu`,rel:`nofollow`,children:`uiguideline.com/components/menu`})]}),`
`,(0,N.jsxs)(t.li,{children:[`Behaviour: `,(0,N.jsx)(t.a,{href:`https://base-ui.com/react/components/menubar`,rel:`nofollow`,children:`Base UI Menubar`})]}),`
`,(0,N.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,N.jsxs)(_,{value:`specs`,children:[(0,N.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,N.jsx)(y,{parts:C,children:(0,N.jsx)(a,{of:A})}),(0,N.jsxs)(t.p,{children:[`The flyout on this tab is a picture: it is drawn open in place, not
positioned over the page. Its parts are Menu's; see
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` for the item's own
anatomy.`]}),(0,N.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,N.jsx)(t.p,{children:`The bar is a strip: its triggers are rows of the sm control tier, one step
shorter than the md items in the flyout. Triggers sit inset from the bar
edge by the same amount as items inside a Menu popup, and their corner
nests inside the bar's the same way.`}),(0,N.jsx)(g,{caption:`Bar`,rows:[{part:`Bar`,property:`Padding`,token:`--space-stack`},{part:`Bar`,property:`Gap between triggers`,token:`--space-0-5`},{part:`Bar`,property:`Corner radius`,token:`--radius-field`},{part:`Trigger`,property:`Height`,token:`--control-sm`},{part:`Trigger`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Trigger`,property:`Font size`,token:`--text-body`},{part:`Trigger`,property:`Line height`,token:`--leading-body`},{part:`Trigger`,property:`Focus ring width`,token:`--focus-width`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,N.jsx)(t.p,{children:`A flyout opens 4px below its trigger, lined up with the trigger's start
edge. When the bar is wider than its container, it scrolls sideways.`}),(0,N.jsx)(t.h2,{id:`color`,children:`Color`}),(0,N.jsx)(g,{caption:`Bar`,rows:[{part:`Bar`,property:`Background`,token:`--background`},{part:`Bar`,property:`Text`,token:`--foreground`},{part:`Bar`,property:`Border`,token:`--border`},{part:`Trigger, hover, highlighted or open`,property:`Background`,token:`--accent`},{part:`Trigger, hover, highlighted or open`,property:`Text`,token:`--accent-foreground`},{part:`Trigger, disabled`,property:`Text`,token:`--muted-foreground`},{part:`Trigger, focus`,property:`Ring`,token:`--ring`}]}),(0,N.jsx)(t.p,{children:`The flyout's colours are Menu's.`}),(0,N.jsx)(t.h2,{id:`states`,children:`States`}),(0,N.jsx)(v,{states:[{label:`Closed`,content:(0,N.jsx)(a,{of:E})},{label:`Open`,content:(0,N.jsx)(a,{of:k})},{label:`Disabled menu`,content:(0,N.jsx)(a,{of:O})}]}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Hover and highlighted`}),`: the trigger takes the same `,(0,N.jsx)(t.code,{children:`--accent`}),` fill as
a highlighted item in the flyout.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Open`}),`: the trigger keeps that fill while its flyout is open, so the
reader sees which menu they are in.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Focus`}),`: a keyboard focus ring inside the trigger, so it does not
collide with its neighbours.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Disabled`}),`: muted at 60% opacity, no fill on hover, skipped by the
arrow keys.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`api`,children:`API`}),(0,N.jsx)(`div`,{style:{overflowX:`auto`},children:(0,N.jsx)(o,{of:D})}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`menus`}),` is data, and each menu's `,(0,N.jsx)(t.code,{children:`items`}),` is Menu's `,(0,N.jsx)(t.code,{children:`items`}),`. Shortcuts are
plain trailing text, as in Menu: display only, binding the key is left to
the page.`]}),(0,N.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`No navigation menu.`}),` The source pairs a menubar with a navigation
menu: links in flyouts, each with a description. Zweihänder leaves that
out: app navigation is the Nav Sidebar and the Top Bar's links, which
show the current page; a flyout of described links is a marketing-site
pattern.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`No item description.`}),` Flyout items are Menu's entries, one line
each. A second line of text is what a navigation menu needs, and it is
not built.`]}),`
`]})]}),(0,N.jsxs)(_,{value:`guidelines`,children:[(0,N.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,N.jsx)(t.p,{children:`Use a Menubar in a screen that works like a desktop tool, an invoice or
report editor, a spreadsheet, where people look for commands by category
and learn their shortcuts. Name each menu for what it holds and keep the
order people know from desktop apps: File, Edit, View, then your own,
then Help.`}),(0,N.jsx)(l,{do:(0,N.jsx)(a,{of:w}),doCaption:`Commands, grouped by the familiar File, Edit, View, with their shortcuts.`,dont:(0,N.jsx)(a,{of:S}),dontCaption:`Pages behind flyouts. Navigation belongs in the Nav Sidebar or the Top Bar, where the current page shows.`}),(0,N.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For the app's navigation.`}),` Use a
`,(0,N.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-nav-sidebar--docs`,children:`Nav Sidebar`}),` or
the `,(0,N.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-top-bar--docs`,children:`Top Bar`}),`'s
links: they show where the reader is, a menubar does not.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For a few actions on one thing.`}),` Use a
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` from a button, or
Buttons.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`To find any command by name.`}),` Add a
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-navigation-command-palette--docs`,children:`Command Palette`}),`;
it can sit alongside the menubar.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`The bar is a `,(0,N.jsx)(t.code,{children:`role="menubar"`}),`, named by `,(0,N.jsx)(t.code,{children:`aria-label`}),`. Each trigger is a
`,(0,N.jsx)(t.code,{children:`menuitem`}),` with `,(0,N.jsx)(t.code,{children:`aria-haspopup="menu"`}),` and `,(0,N.jsx)(t.code,{children:`aria-expanded`}),`; a disabled
menu's trigger has `,(0,N.jsx)(t.code,{children:`aria-disabled`}),`.`]}),`
`,(0,N.jsx)(t.li,{children:`The bar is one tab stop. Arrow Left and Right move along the triggers,
skipping disabled menus.`}),`
`,(0,N.jsx)(t.li,{children:`Arrow Down, Enter or Space on a trigger opens its flyout on the first
item. Inside a flyout the keys are Menu's.`}),`
`,(0,N.jsx)(t.li,{children:`With a flyout open, Arrow Right and Left move to the next and previous
menu and open it, and moving the pointer onto another trigger opens that
menu instead.`}),`
`,(0,N.jsx)(t.li,{children:`Escape closes the flyout and returns focus to its trigger; choosing an
action closes it too.`}),`
`,(0,N.jsx)(t.li,{children:`Shortcuts and icons are hidden from assistive tech; the label names the
item.`}),`
`,(0,N.jsxs)(t.li,{children:[`Triggers are 24px tall; on touch screens (`,(0,N.jsx)(t.code,{children:`pointer: coarse`}),`) their hit
area grows to 44px.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`isModal`}),` (the default) makes the rest of the page inert while a flyout
is open, so a screen reader stays in the menu.`]}),`
`]})]})]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),r(),c(),d(),p(),h(),f(),m(),b(),T()})))()}P();export{M as default};