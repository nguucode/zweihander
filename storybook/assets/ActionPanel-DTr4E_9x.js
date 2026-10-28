import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./ActionPanel.stories-C-L7yU4Z.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`action-panel`,children:`Action Panel`}),`
`,(0,y.jsxs)(t.p,{children:[`A `,(0,y.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Card`}),` that offers one action:
a title saying what it does, a description of what happens when you take
it, and the control that does it. For actions that stand on their own on a
settings or detail page, such as exporting data, renewing a plan or
deleting a workspace. After Tailwind UI Application UI, Forms: Action
panels.`]}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/action-panel.json
`})}),`
`,(0,y.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,y.jsx)(t.p,{children:`A button under the description. The default, and the right one when the
description runs to two lines or more.`}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`button-at-the-end`,children:`Button at the end`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`actionPlacement="end"`}),` puts the action beside the text, for a short
description. It drops under the text when the card gets narrow.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`with-a-switch`,children:`With a switch`}),`
`,(0,y.jsxs)(t.p,{children:[`A setting that takes effect the moment it changes, so there is no Save
button. Give the Switch an `,(0,y.jsx)(t.code,{children:`aria-label`}),` that matches the title: the
panel's title is not its label.`]}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`with-an-input`,children:`With an input`}),`
`,(0,y.jsx)(t.p,{children:`A small form, one field and its button, for an action that needs one
value. The form is yours: the panel lays out what you pass.`}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h2,{id:`danger`,children:`Danger`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`variant="danger"`}),` edges the panel in the destructive colour, in every
appearance, flat surface included. Use it only for what cannot be undone,
with a destructive Button, and confirm in a
`,(0,y.jsx)(t.a,{href:`?path=/docs/components-overlays-confirm-dialog--docs`,children:`Confirm Dialog`}),` before acting. Put it
last on the page.`]}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`without-a-description`,children:`Without a description`}),`
`,(0,y.jsx)(t.p,{children:`The description is optional; several actions wrap onto more rows rather
than overflow.`}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(a,{of:g}),`
`,(0,y.jsxs)(t.p,{children:[`Every other Card prop and `,(0,y.jsx)(t.code,{children:`<div>`}),` attribute passes through, except
`,(0,y.jsx)(t.code,{children:`onClick`}),`, `,(0,y.jsx)(t.code,{children:`render`}),` and `,(0,y.jsx)(t.code,{children:`orientation`}),`: the panel is not itself a control,
and its placement prop sets the direction.`]}),`
`,(0,y.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Below`}),` stacks the text and the action, in the Card's gap.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`End`}),` keeps the text at least 16rem wide, then wraps the action under
it, keeping its order.`]}),`
`,(0,y.jsx)(t.li,{children:`The description stops at 65 characters a line; long titles and words
break anywhere rather than overflow.`}),`
`]}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`With link`}),`: no slot of its own. Pass a `,(0,y.jsx)(t.a,{href:`?path=/docs/components-navigation-link--docs`,children:`Link`}),`
as the `,(0,y.jsx)(t.code,{children:`action`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Simple well, with well`}),`: not a variant. The tinted inset is the
Card's look; pick it with `,(0,y.jsx)(t.code,{children:`appearance`}),` so the panel matches the other
blocks on the page.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Danger`}),` is added: Tailwind leaves a danger zone to a red button.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`The panel is a `,(0,y.jsx)(t.code,{children:`group`}),` named by its title, so a screen reader names
it when focus enters the control. The description is linked with
`,(0,y.jsx)(t.code,{children:`aria-describedby`}),`; screen readers differ on reading a group's
description, so the control's own name must make sense alone. The title
is heard twice in reading order, as the heading and the group's name.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The title is an `,(0,y.jsx)(t.code,{children:`h2`}),` by default. Use `,(0,y.jsx)(t.code,{children:`headingLevel={3}`}),` or `,(0,y.jsx)(t.code,{children:`4`}),` under a
section heading, so the outline has no gaps.`]}),`
`,(0,y.jsx)(t.li,{children:`The danger edge is not the only warning: the title and the destructive
button say it too, so it does not rest on colour.`}),`
`,(0,y.jsxs)(t.li,{children:[`The control keeps its own name: a Switch needs an `,(0,y.jsx)(t.code,{children:`aria-label`}),`, a
button names its action ("Delete workspace", not "Delete"), a field
has its label.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),s(),d()})))()}b();export{v as default};