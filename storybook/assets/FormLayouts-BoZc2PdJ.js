import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{a as i,c as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./FormLayouts.stories-DyPONyDq.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h1,{id:`form-layouts`,children:`Form Layouts`}),`
`,(0,_.jsxs)(t.p,{children:[`How the kit's fields are arranged into a form: sections with a heading
and a line of context, fields one or two to a row, and a row of actions
at the end. Four pieces: `,(0,_.jsx)(t.code,{children:`FormSection`}),`, `,(0,_.jsx)(t.code,{children:`FormFieldGroup`}),`,
`,(0,_.jsx)(t.code,{children:`FormFullWidth`}),` and `,(0,_.jsx)(t.code,{children:`FormActions`}),`. The `,(0,_.jsx)(t.code,{children:`<form>`}),` element is yours.
After Tailwind UI's Form Layouts.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/form-layouts.json
`})}),`
`,(0,_.jsx)(t.h2,{id:`settings-sections`,children:`Settings sections`}),`
`,(0,_.jsx)(t.p,{children:`A settings page. Each section's title and description sit in a column
beside its fields, sections are separated by a line, and one row of
actions saves the lot.`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`stacked-in-a-card`,children:`Stacked in a card`}),`
`,(0,_.jsx)(t.p,{children:`One section on a card: the title above, fields two to a row, and the
actions in the card's bottom band.`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`field-groups`,children:`Field groups`}),`
`,(0,_.jsxs)(t.p,{children:[`Related fields inside one section, under a legend: an address, a set of
checkboxes. `,(0,_.jsx)(t.code,{children:`FormFieldGroup`}),` is a `,(0,_.jsx)(t.code,{children:`<fieldset>`}),`: it takes the section's
whole row, lays out its own columns, and `,(0,_.jsx)(t.code,{children:`disabled`}),` turns off every field
in it, Checkbox, Switch and Radio included (they are left out of the
submitted data, as the browser does for any disabled field). Slider and
File Uploader do not read the group: give them `,(0,_.jsx)(t.code,{children:`disabled`}),` too. Disable a
group while it does not apply, with the reason on screen, as the "Ship to
the billing address" checkbox does here; see
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-inputs-field--docs`,children:`Field › Disabled`}),` for when to
disable, hide or make read-only.`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`in-a-modal`,children:`In a modal`}),`
`,(0,_.jsxs)(t.p,{children:[`A short form in a `,(0,_.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),`.
The submit button sits in the modal's footer, outside the `,(0,_.jsx)(t.code,{children:`<form>`}),`, and
points at it with the `,(0,_.jsx)(t.code,{children:`form`}),` attribute, so Enter in a field and a click on
the button both submit.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`formsection-props`,children:`FormSection props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`title`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`Required. An `,(0,_.jsx)(t.code,{children:`h2`}),` by default.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`description`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`children`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`The fields. Give each input `,(0,_.jsx)(t.code,{children:`isFullWidth`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`layout`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`split`}),`, `,(0,_.jsx)(t.code,{children:`stacked`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`split`})}),(0,_.jsx)(t.td,{children:`Split puts the intro in a column beside the fields.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`columns`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`1`}),`, `,(0,_.jsx)(t.code,{children:`2`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`1`})}),(0,_.jsxs)(t.td,{children:[`Two fields to a row. Wrap one in `,(0,_.jsx)(t.code,{children:`FormFullWidth`}),` to span the row.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isCard`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`footer`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`Usually `,(0,_.jsx)(t.code,{children:`FormActions`}),`; the card's bottom band when `,(0,_.jsx)(t.code,{children:`isCard`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`headingLevel`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`2`}),`, `,(0,_.jsx)(t.code,{children:`3`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`2`})}),(0,_.jsx)(t.td,{})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`FormFieldGroup`}),` takes `,(0,_.jsx)(t.code,{children:`legend`}),` (required), `,(0,_.jsx)(t.code,{children:`description`}),`, `,(0,_.jsx)(t.code,{children:`columns`}),`
(`,(0,_.jsx)(t.code,{children:`1`}),`, `,(0,_.jsx)(t.code,{children:`2`}),`) and everything a `,(0,_.jsx)(t.code,{children:`<fieldset>`}),` takes, `,(0,_.jsx)(t.code,{children:`disabled`}),` among them.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`FormActions`}),` is a row of buttons aligned to the end: secondary actions
first, the primary one last.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Sections respond to their own width.`}),` Split turns into stacked under
48rem of section width, and two columns into one when the fields' side
of the section (its whole width once stacked) is under 32rem. A form in
a sidebar or a phone needs no extra props.`]}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Sections are size containers`}),`, so they take their width from where
they sit. As a flex or grid item that would shrink to fit, give the
section a width (`,(0,_.jsx)(t.code,{children:`inline-size: 100%`}),`), or it collapses.`]}),`
`,(0,_.jsx)(o,{of:l}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`A field group takes a whole row`}),` of a two-column section, and its
own `,(0,_.jsx)(t.code,{children:`columns`}),` follow the same 32rem rule.`]}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsx)(t.p,{children:`Labels sit above their fields, never beside them: the label width does
not depend on the longest translation, and a form reflows to a phone
with no change.`}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsx)(t.p,{children:`Actions end-aligned, primary last: the same place in every form, where
the eye and the Tab key end up.`}),`
`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Each section is a `,(0,_.jsx)(t.code,{children:`<section>`}),` with a heading, so the form's parts are in
the page outline and a screen reader can jump between them.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Group related fields in a `,(0,_.jsx)(t.code,{children:`FormFieldGroup`}),`, as the Notifications and
Billing sections do: a `,(0,_.jsx)(t.code,{children:`group`}),` named by its legend and described by its
description, so a screen reader announces both on entering it.
RadioGroup is a group of its own; do not wrap it.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Mark required fields with `,(0,_.jsx)(t.code,{children:`required`}),`. The field shows the asterisk and
the browser enforces it; say in the description if most fields are
optional instead.`]}),`
`,(0,_.jsx)(t.li,{children:`Never disable the submit button to show that a form is incomplete. Let
it submit, and show what is missing next to each field.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};