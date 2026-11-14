import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./Menu.stories-B2tVO7ig.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(c,{of:D}),`
`,(0,L.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsxs)(t.p,{children:[`A list of actions that opens from a button: the "…" on a row, an
"Actions" dropdown, a "View" menu of toggles. It acts or toggles; to pick a
value for a form, use a `,(0,L.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),`.`]}),(0,L.jsx)(x,{of:D}),(0,L.jsx)(s,{of:O}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsxs)(t.p,{children:[`Menu has one look. What changes is the kind of entry in `,(0,L.jsx)(t.code,{children:`items`}),`, and a
menu can mix them:`]}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Entry`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Action (the default)`}),(0,L.jsxs)(t.td,{children:[`Something to do now: Edit, Duplicate, Delete. Closes the menu. `,(0,L.jsx)(t.code,{children:`isDestructive`}),` draws it in the danger colour.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Link (`,(0,L.jsx)(t.code,{children:`href`}),`)`]}),(0,L.jsxs)(t.td,{children:[`Going somewhere: Documentation, Settings. A real `,(0,L.jsx)(t.code,{children:`<a>`}),`.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Submenu (`,(0,L.jsx)(t.code,{children:`items`}),`)`]}),(0,L.jsx)(t.td,{children:`A set of choices that belongs under one item: Move to, Share with.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Checkbox (`,(0,L.jsx)(t.code,{children:`type: 'checkbox'`}),`)`]}),(0,L.jsx)(t.td,{children:`Settings that are on or off, several at a time: Show hidden files. Keeps the menu open.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Radio (`,(0,L.jsx)(t.code,{children:`type: 'radio'`}),`)`]}),(0,L.jsx)(t.td,{children:`One of a few settings: Sort by name, date or size. Keeps the menu open.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Group (`,(0,L.jsx)(t.code,{children:`type: 'group'`}),`) and separator`]}),(0,L.jsx)(t.td,{children:`Structure for a longer menu: a label over related items, a rule between sets.`})]})]})]}),(0,L.jsx)(s,{of:M}),(0,L.jsx)(s,{of:w}),(0,L.jsx)(s,{of:C}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-js`,children:`import { Menu } from 'zweihander/menu'
`})}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/menu.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/navigation/Menu.tsx`,rel:`nofollow`,children:`src/components/navigation/Menu.tsx`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Spec: `,(0,L.jsx)(t.a,{href:`https://www.uiguideline.com/components/menu`,rel:`nofollow`,children:`uiguideline.com/components/menu`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Behaviour: `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/menu`,rel:`nofollow`,children:`Base UI Menu`})]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(i,{of:N})}),(0,L.jsx)(t.p,{children:`A link item has the same parts as an action. Checkbox and radio items show
a check where an action shows its icon, so their labels line up.`}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsx)(t.p,{children:`The item follows Atlassian Design's dropdown item: 8px block and 12px
inline padding around a 20px line, so a one-line item is 36px tall. The
box ramp has no 36px step, so the md control tier (32px) is the floor and
the padding makes the rest. Items sit 4px inside the
popup's border and 2px apart, with a 6px corner and 12px between icon and
label; a shortcut or a chevron sits 24px after the label; a separator is
as wide as the items, with 4px above and below; a group label has 8px
block padding, 12px before and 24px after.`}),(0,L.jsx)(g,{caption:`Popup`,rows:[{part:`Popup`,property:`Padding, inside the border`,token:`--space-1`},{part:`Popup`,property:`Corner radius`,token:`--radius-lg`},{part:`Popup`,property:`Shadow`,token:`--shadow-overlay`},{part:`Popup`,property:`Layer`,token:`--layer-overlay`},{part:`Separator`,property:`Space above and below`,token:`--space-1`}]}),(0,L.jsx)(g,{caption:`Item`,rows:[{part:`Item`,property:`Minimum height`,token:`--control-md`},{part:`Item`,property:`Inline padding`,token:`--space-3`},{part:`Item`,property:`Block padding`,token:`--space-2`},{part:`Item`,property:`Gap`,token:`--space-3`},{part:`Item`,property:`Corner radius`,token:`--radius-md`},{part:`Item`,property:`Space between items`,token:`--space-0-5`},{part:`Icon, check, chevron`,property:`Size`,token:`--icon-md`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Shortcut, group label`,property:`Font size`,token:`--text-body-sm`},{part:`Label`,property:`Space after`,token:`--space-3`},{part:`Group label`,property:`Block padding`,token:`--space-2`},{part:`Group label`,property:`Inline end padding`,token:`--space-6`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,L.jsx)(t.p,{children:`The popup is at least 12rem wide, or the trigger's width if that is wider,
and no taller than the space on screen: past that it scrolls. It opens
4px from the trigger.`}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(g,{caption:`Popup`,rows:[{part:`Popup`,property:`Background`,token:`--color-surface-overlay`},{part:`Popup`,property:`Text`,token:`--color-text`},{part:`Popup`,property:`Border`,token:`--color-border`},{part:`Separator`,property:`Colour`,token:`--color-border`},{part:`Group label, shortcut, chevron`,property:`Colour`,token:`--color-text-subtlest`}]}),(0,L.jsx)(g,{caption:`Item`,rows:[{part:`Icon`,property:`Colour`,token:`--color-text-subtlest`},{part:`Item, highlighted`,property:`Background`,token:`--color-background-neutral`},{part:`Item, highlighted`,property:`Text`,token:`--color-text`},{part:`Item, disabled`,property:`Text`,token:`--color-text-subtlest`}]}),(0,L.jsx)(g,{caption:`Destructive item`,rows:[{part:`Item`,property:`Text and icon`,token:`--color-text-danger`},{part:`Item, highlighted`,property:`Background`,token:`--color-background-danger`}]}),(0,L.jsx)(t.p,{children:`The destructive item uses the danger text colour, not the solid: it reads
at 4.5:1 on the popup and on its highlight.`}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(v,{states:[{label:`Closed`,content:(0,L.jsx)(i,{of:O})},{label:`Open`,content:(0,L.jsx)(i,{of:P})}]}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Highlighted`}),` is where the arrow keys or the pointer are: a `,(0,L.jsx)(t.code,{children:`--color-background-neutral`}),`
fill; the icon keeps `,(0,L.jsx)(t.code,{children:`--color-text-subtlest`}),`. A submenu's item stays highlighted
while its submenu is open. Focus moves with the highlight, so there is no
separate focus ring inside the popup.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Disabled`}),` items are muted at 60% opacity and skipped by the arrow
keys (Archive, above).`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Checked`}),` checkbox and radio items show the check; unchecked ones keep
the empty column.`]}),`
`,(0,L.jsxs)(t.li,{children:[`The trigger's own hover, focus and pressed states are the
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`'s.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:D})}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`items`}),` is data, like Select's `,(0,L.jsx)(t.code,{children:`options`}),`, not child components.
`,(0,L.jsx)(t.code,{children:`shortcut`}),` is display only: binding the key is left to the page, which
knows what else is bound.`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsx)(t.p,{children:`Use a Menu for actions that belong to one thing but would crowd the
screen as buttons: the actions on a table row, a card's overflow, a
toolbar's "More". Keep it short, put the most used item first, and give
destructive actions the last place, after a separator.`}),(0,L.jsx)(l,{do:(0,L.jsx)(i,{of:E}),doCaption:`Delete last, after a separator, in the danger colour.`,dont:(0,L.jsx)(i,{of:S}),dontCaption:`Delete between two everyday actions: one arrow key too far and it is chosen.`}),(0,L.jsx)(l,{do:(0,L.jsx)(i,{of:j}),doCaption:`A menu of actions. Each item does something now.`,dont:(0,L.jsx)(i,{of:k}),dontCaption:`A menu standing in for a form field. Use a Select: it has a label, a value and a form name.`}),(0,L.jsxs)(t.p,{children:[`The popup opens below the trigger, lined up with its start edge; `,(0,L.jsx)(t.code,{children:`side`}),`
and `,(0,L.jsx)(t.code,{children:`align`}),` place it elsewhere.`]}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`To pick a value for a form.`}),` Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),`, or a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-inputs-combobox--docs`,children:`Combobox`}),` when the list
is long enough to search.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For one or two actions.`}),` Show them as
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Buttons`}),`: a hidden action
is one fewer person finds.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For the app's main navigation.`}),` Use a side navigation of
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-link--docs`,children:`Links`}),` or
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-navigation-tabs--docs`,children:`Tabs`}),`, which show where
the reader is.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For content: a form, a preview.`}),` Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`. A menu holds
only menu items.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`The trigger has `,(0,L.jsx)(t.code,{children:`aria-haspopup="menu"`}),` and `,(0,L.jsx)(t.code,{children:`aria-expanded`}),`; the popup
is a `,(0,L.jsx)(t.code,{children:`role="menu"`}),` of `,(0,L.jsx)(t.code,{children:`menuitem`}),`, `,(0,L.jsx)(t.code,{children:`menuitemcheckbox`}),` and
`,(0,L.jsx)(t.code,{children:`menuitemradio`}),`, with `,(0,L.jsx)(t.code,{children:`aria-checked`}),` on the toggles and
`,(0,L.jsx)(t.code,{children:`aria-disabled`}),` on disabled items.`]}),`
`,(0,L.jsx)(t.li,{children:`Keyboard: Enter, Space or Arrow Down on the trigger opens it; arrows
move (disabled items are skipped), typing a few letters jumps to the
matching item, Enter selects, Arrow Right opens a submenu and Arrow
Left closes it, Escape closes and returns focus to the trigger.`}),`
`,(0,L.jsx)(t.li,{children:`Toggles keep the menu open, so several can be changed in one go;
actions close it and focus returns to the trigger.`}),`
`,(0,L.jsxs)(t.li,{children:[`The icon and shortcut are hidden from assistive tech; the label names
the item. Give `,(0,L.jsx)(t.code,{children:`textValue`}),` when a label is not plain text, or typeahead
cannot find it.`]}),`
`,(0,L.jsxs)(t.li,{children:[`A disabled link has no `,(0,L.jsx)(t.code,{children:`href`}),`, so it cannot be followed.`]}),`
`,(0,L.jsxs)(t.li,{children:[`Items are 36px tall, 44px on touch screens (`,(0,L.jsx)(t.code,{children:`pointer: coarse`}),`).`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.code,{children:`isModal`}),` (the default) makes the rest of the page inert while the menu
is open, so a screen reader stays in the menu.`]}),`
`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),a(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};