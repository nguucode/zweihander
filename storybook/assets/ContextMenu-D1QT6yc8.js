import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./ContextMenu.stories-CO2DQlxa.js";function M(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{of:E}),`
`,(0,P.jsx)(t.h1,{id:`context-menu`,children:`Context Menu`}),`
`,(0,P.jsxs)(u,{children:[(0,P.jsxs)(_,{value:`overview`,children:[(0,P.jsx)(t.p,{children:`A menu that opens at the pointer when someone right-clicks, or long-presses
on touch, an area: a table row, a card, an object on a canvas. Its items
are an action menu's, so it is a faster way to the same actions.`}),(0,P.jsx)(x,{of:E}),(0,P.jsx)(s,{of:O}),(0,P.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,P.jsxs)(t.p,{children:[`Context Menu has one look: the popup is a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` popup and takes the
same entries: actions with icons and shortcuts, links, submenus, checkbox
and radio items, groups and separators.`]}),(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Area`}),(0,P.jsx)(t.th,{children:`Use for`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`Enabled (the default)`}),(0,P.jsx)(t.td,{children:`An area with actions on it. Right click and long press open the menu.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[`Disabled (`,(0,P.jsx)(t.code,{children:`disabled`}),`)`]}),(0,P.jsx)(t.td,{children:`An area with nothing to act on right now. The browser's own menu shows instead.`})]})]})]}),(0,P.jsx)(t.p,{children:`On a list or table, give each row its own Context Menu, with the same items
as the row's visible "more" button:`}),(0,P.jsx)(s,{of:k}),(0,P.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,P.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-js`,children:`import { ContextMenu } from 'zweihander/context-menu'
`})}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/context-menu.json
`})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`Source: `,(0,P.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/ContextMenu.tsx`,rel:`nofollow`,children:`src/components/navigation/ContextMenu.tsx`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Spec: `,(0,P.jsx)(t.a,{href:`https://www.uiguideline.com/components/menu`,rel:`nofollow`,children:`uiguideline.com/components/menu`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Behaviour: `,(0,P.jsx)(t.a,{href:`https://base-ui.com/react/components/context-menu`,rel:`nofollow`,children:`Base UI Context Menu`})]}),`
`,(0,P.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,P.jsxs)(_,{value:`specs`,children:[(0,P.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,P.jsx)(y,{parts:T,children:(0,P.jsx)(a,{of:A})}),(0,P.jsxs)(t.p,{children:[`The popup on this tab is a picture: it is drawn open below its area, not at
a pointer, and does not lock the page. Its parts are Menu's; see
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` for the item's own
anatomy.`]}),(0,P.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,P.jsx)(t.p,{children:`The popup is Menu's, with the same items of the md control tier. It opens
with its top-left corner on the pointer, as the operating system's menus
do. Near the bottom of the window it flips above the pointer; near the
right edge it slides left to stay on screen. On
touch it opens at the finger after a 500ms press.`}),(0,P.jsx)(g,{caption:`Popup`,rows:[{part:`Popup`,property:`Padding`,token:`--space-stack`},{part:`Popup`,property:`Corner radius`,token:`--radius-field`},{part:`Popup`,property:`Shadow`,token:`--shadow-md`},{part:`Popup`,property:`Layer`,token:`--layer-overlay`},{part:`Item`,property:`Height`,token:`--control-md`},{part:`Item`,property:`Inline padding`,token:`--control-md-pad`},{part:`Area, open`,property:`Outline width`,token:`--focus-width`}]}),(0,P.jsx)(t.h2,{id:`color`,children:`Color`}),(0,P.jsx)(g,{caption:`Area and popup`,rows:[{part:`Area, open`,property:`Outline`,token:`--primary`},{part:`Popup`,property:`Background`,token:`--popover`},{part:`Popup`,property:`Text`,token:`--popover-foreground`},{part:`Item, highlighted`,property:`Background`,token:`--accent`},{part:`Destructive item`,property:`Text and icon`,token:`--danger-text`}]}),(0,P.jsx)(t.p,{children:`The area keeps its own colours. While its menu is open it gets a primary
outline inside its edge, so the reader sees which row or object the menu
acts on. The rest of the popup's colours are Menu's.`}),(0,P.jsx)(t.h2,{id:`states`,children:`States`}),(0,P.jsx)(v,{states:[{label:`Closed`,content:(0,P.jsx)(a,{of:O})},{label:`Open`,content:(0,P.jsx)(a,{of:C})},{label:`Disabled`,content:(0,P.jsx)(a,{of:w})}]}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Closed`}),`: the area looks like itself; nothing hints at the menu, which
is why its items must be reachable another way.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Open`}),`: the area is outlined in `,(0,P.jsx)(t.code,{children:`--primary`}),`; items highlight as in Menu.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Disabled`}),`: a right click shows the browser's menu.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`api`,children:`API`}),(0,P.jsx)(`div`,{style:{overflowX:`auto`},children:(0,P.jsx)(o,{of:E})}),(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`items`}),` is Menu's `,(0,P.jsx)(t.code,{children:`items`}),`. `,(0,P.jsx)(t.code,{children:`children`}),` is one element: the area itself, its
props and the open marker merged onto it, so a `,(0,P.jsx)(t.code,{children:`<tr>`}),` stays a row of the
table.`]}),(0,P.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`No placement props.`}),` Menu's `,(0,P.jsx)(t.code,{children:`side`}),` and `,(0,P.jsx)(t.code,{children:`align`}),` are left out: a context
menu opens at the pointer, and flips on its own near the window edge.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Always modal.`}),` There is no `,(0,P.jsx)(t.code,{children:`isModal`}),`: Base UI makes a context menu
modal, as the operating system's menus are, so page scroll is locked
until it closes.`]}),`
`]})]}),(0,P.jsxs)(_,{value:`guidelines`,children:[(0,P.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,P.jsx)(t.p,{children:`Use a Context Menu where people act on many things in place, rows of a
table, files, cards on a board, objects on a canvas, and expect the right
click they know from desktop apps. Put the same actions behind a visible
control too, a row's "more" button or a toolbar: the right click is a
shortcut, not the way in.`}),(0,P.jsx)(l,{do:(0,P.jsx)(a,{of:S}),doCaption:`The right click repeats the row's visible actions menu.`,dont:(0,P.jsx)(a,{of:D}),dontCaption:`Actions only a right click reaches. Nothing on screen says they exist, and keyboard and touch users may never find them.`}),(0,P.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For the only way to an action.`}),` Use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` from a visible
button, or Buttons; add a Context Menu with the same items on top.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`On text people read or copy.`}),` A right click there should keep the
browser's menu: copy, look up, translate.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a tool's commands by category.`}),` Use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-navigation-menubar--docs`,children:`Menubar`}),`.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsx)(t.li,{children:`A right click on the area opens the menu at the pointer and outlines the
area while it is open.`}),`
`,(0,P.jsxs)(t.li,{children:[`The popup is Menu's: `,(0,P.jsx)(t.code,{children:`role="menu"`}),` with `,(0,P.jsx)(t.code,{children:`menuitem`}),` entries, and the keys
inside are Menu's: the arrows move, Enter runs the action and closes.`]}),`
`,(0,P.jsxs)(t.li,{children:[`Shift+F10 or the Menu key open it from the keyboard: the browser fires
`,(0,P.jsx)(t.code,{children:`contextmenu`}),` on the focused element, so the area, or a control in it,
must take focus.`]}),`
`,(0,P.jsx)(t.li,{children:`Escape closes it and returns focus to where it was.`}),`
`,(0,P.jsx)(t.li,{children:`Nothing announces that a context menu exists, so each of its items must
also sit behind a visible control, such as the row's "more" button,
named after the row.`}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`disabled`}),` leaves the browser's own menu in place.`]}),`
`,(0,P.jsx)(t.li,{children:`It is modal: page scroll is locked while it is open, so the menu is the
only thing to interact with.`}),`
`]})]})]})]})}function N(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),r(),c(),d(),p(),h(),f(),m(),b(),j()})))()}F();export{N as default};