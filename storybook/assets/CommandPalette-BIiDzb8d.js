import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./CommandPalette.stories-hnAQouCv.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{of:O}),`
`,(0,L.jsx)(t.h1,{id:`command-palette`,children:`Command Palette`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsx)(t.p,{children:`A search box over the page that finds a command or a record by typing and
runs it with Enter, without a mouse. Opened by its trigger or by ⌘K
(Ctrl+K).`}),(0,L.jsx)(x,{of:O}),(0,L.jsx)(s,{of:j}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsx)(t.p,{children:`There is one palette; what changes is what you put in its groups.`}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Content`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Commands`}),(0,L.jsxs)(t.td,{children:[`Actions a power user repeats: New invoice, Export ledger. Give each its `,(0,L.jsx)(t.code,{children:`shortcut`}),` when it has one, so the palette teaches the key.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Records`}),(0,L.jsx)(t.td,{children:`Objects to jump to, grouped by type: Customers, Invoices. Load them from your search as the user types, or pass the few that matter.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Recent`}),(0,L.jsx)(t.td,{children:`What the user opened last, as the first group. The palette does not remember it for you: pass it from your app's history.`})]})]})]}),(0,L.jsxs)(t.p,{children:[`Typing matches the label and `,(0,L.jsx)(t.code,{children:`keywords`}),`, ignoring case and accents, so
"bill" finds New invoice and "hoa binh" finds Hòa Bình Trading.`]}),(0,L.jsx)(s,{of:D}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-js`,children:`import { CommandPalette } from 'zweihander/command-palette'
`})}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/command-palette.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/CommandPalette.tsx`,rel:`nofollow`,children:`src/components/navigation/CommandPalette.tsx`})]}),`
`,(0,L.jsx)(t.li,{children:`Spec: uiguideline.com has no command palette; anatomy from Tailwind UI Command Palettes and shadcn/ui Command`}),`
`,(0,L.jsxs)(t.li,{children:[`Behaviour: `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/autocomplete`,rel:`nofollow`,children:`Base UI Autocomplete`}),` (inline, inside a `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/dialog`,rel:`nofollow`,children:`Dialog`}),`)`]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(a,{of:N})}),(0,L.jsxs)(t.p,{children:[`The open palettes on this tab and the next are pictures: real palettes
rendered in a frame with `,(0,L.jsx)(t.code,{children:`container`}),`, not modal (`,(0,L.jsx)(t.code,{children:`isModal={false}`}),`) and
inert, so they do not lock this page or take its focus.`]}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsx)(g,{caption:`Container`,rows:[{part:`Container`,property:`Corner radius`,token:`--radius-panel`},{part:`Container`,property:`Shadow`,token:`--shadow-xl`},{part:`Container`,property:`Margin to the screen edge`,token:`--space-group`},{part:`Search row`,property:`Height`,token:`--box-xl`},{part:`Search row`,property:`Gap, icon to input`,token:`--control-md-gap`},{part:`Search icon`,property:`Size`,token:`--icon-md`},{part:`Search input`,property:`Font size`,token:`--text-body-lg`},{part:`List`,property:`Inset from the container`,token:`--space-stack`},{part:`Empty text`,property:`Block padding`,token:`--space-6`},{part:`Key hints`,property:`Gap between hints`,token:`--space-group`},{part:`Key hints`,property:`Font size`,token:`--text-body-xs`}]}),(0,L.jsx)(g,{caption:`Item and group label`,rows:[{part:`Item`,property:`Height`,token:`--control-md`},{part:`Item`,property:`Inline padding`,token:`--control-md-pad`},{part:`Item`,property:`Gap`,token:`--control-md-gap`},{part:`Icon`,property:`Size`,token:`--icon-md`},{part:`Group label`,property:`Font size`,token:`--text-body-sm`},{part:`Group label`,property:`Padding above`,token:`--control-xs-pad`},{part:`Item`,property:`Minimum height on touch screens`,token:`--target-coarse`}]}),(0,L.jsxs)(t.p,{children:[`The container is at most 40rem wide and never wider than the screen. It
sits near the top, at 12% of the screen height, not centred: the list
grows and shrinks as you type, and the input stays where the eye is. The
list shows about ten rows (24rem) and then scrolls; the search row and the
key hints stay. The search icon lines up with the item icons. Items are
the `,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),`'s rows; shortcuts
are `,(0,L.jsx)(t.a,{href:`?path=/docs/components-atomic-elements-kbd--docs`,children:`Kbd`}),` `,(0,L.jsx)(t.code,{children:`sm`}),`.`]}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(g,{caption:`Every palette`,rows:[{part:`Backdrop`,property:`Background`,token:`--scrim`},{part:`Container`,property:`Background`,token:`--popover`},{part:`Container, rules`,property:`Border`,token:`--border`},{part:`Input, items`,property:`Colour`,token:`--popover-foreground`},{part:`Placeholder, icons, group labels, hints`,property:`Colour`,token:`--muted-foreground`},{part:`Highlighted item`,property:`Background`,token:`--accent`},{part:`Highlighted item`,property:`Colour`,token:`--accent-foreground`}]}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(v,{states:[{label:`Results`,content:(0,L.jsx)(a,{of:w})},{label:`No results`,content:(0,L.jsx)(a,{of:P})}]}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Highlighted`}),` is where the arrow keys or the pointer are: an `,(0,L.jsx)(t.code,{children:`--accent`}),`
fill, the icon taking the text colour. The first match is always
highlighted, so Enter always does something. Focus stays in the input;
the highlight is the list's `,(0,L.jsx)(t.code,{children:`aria-activedescendant`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Disabled`}),` items are muted at 60% opacity. The arrow keys still reach
them, so a screen reader hears that they exist, but Enter and a click do
nothing.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`No results`}),` shows `,(0,L.jsx)(t.code,{children:`emptyText`}),` and no group labels.`]}),`
`,(0,L.jsx)(t.li,{children:`The input has no focus ring of its own: it is the palette's only field,
and the caret shows where typing goes.`}),`
`]}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:O})}),(0,L.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,L.jsxs)(t.p,{children:[`The queue's anatomy lists the open shortcut, an empty state and recent
results as parts. Here the shortcut is behaviour (`,(0,L.jsx)(t.code,{children:`hotkey`}),`, and a Kbd on the
trigger), the empty state is a state (under States), and Recent is a group
you pass: the palette does not store history.`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsxs)(t.p,{children:[`In an app with many pages and actions, as a fast way around for people who
use it every day: jump to a record, run a command, without going through
the navigation. Open it from a search button in the sidebar
(`,(0,L.jsx)(t.code,{children:`NavSidebarButton appearance="field"`}),`) and from ⌘K.`]}),(0,L.jsx)(l,{do:(0,L.jsx)(a,{of:E}),doCaption:`Group the results, start each command with a verb, and put records under their type. Recent first.`,dont:(0,L.jsx)(a,{of:S}),dontCaption:`One list of bare nouns: Invoice could mean open one, create one or list them all.`}),(0,L.jsx)(t.p,{children:`Keep the palette a shortcut, not the only way: everything in it must also
be reachable from the navigation or a button on the page.`}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`To search inside one list or table.`}),` Use a search field above it,
which filters what is on the page.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`To pick a value in a form.`}),` Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-inputs-combobox--docs`,children:`Combobox`}),`: it fills a
field, the palette runs something.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For a handful of actions on one object.`}),` Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` on that object.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`The container is a `,(0,L.jsx)(t.code,{children:`role="dialog"`}),` named "Command palette" (`,(0,L.jsx)(t.code,{children:`label`}),`).
Opening moves focus to the search input and traps it inside; closing
returns focus to the trigger.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`The input is a `,(0,L.jsx)(t.code,{children:`role="combobox"`}),` named "Search commands" (`,(0,L.jsx)(t.code,{children:`inputLabel`}),`), its
description the key hints: "Arrow keys to move, Enter to choose, Escape to
close". The drawn hints are hidden, so they are read once.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`Each group is a `,(0,L.jsx)(t.code,{children:`role="group"`}),` named by its label; each item is a
`,(0,L.jsx)(t.code,{children:`role="option"`}),`. A shortcut is drawn, not read: the item's name is its
label.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsx)(t.p,{children:`Up and Down move the highlight and the first match is highlighted; Enter
chooses it, as does a click. A disabled item is reachable but Enter does
nothing on it. The choice runs once the palette has closed and focus is
back on the trigger.`}),`
`,(0,L.jsx)(s,{of:C}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsx)(t.p,{children:`Escape closes it, as does a press outside.`}),`
`,(0,L.jsx)(s,{of:k}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`⌘K or Ctrl+K toggles it from anywhere on the page; one palette per page
should own that key, and the others set `,(0,L.jsx)(t.code,{children:`hotkey={false}`}),`.`]}),`
`,(0,L.jsx)(s,{of:M}),`
`]}),`
`]}),(0,L.jsxs)(t.p,{children:[`Give the trigger `,(0,L.jsx)(t.code,{children:`aria-keyshortcuts="Meta+K Control+K"`}),` when the palette
owns the key, as the trigger in these examples does.`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),c(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};