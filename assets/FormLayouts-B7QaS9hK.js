import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./FormLayouts.stories-CLsNamzs.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`form-layouts`,children:`Form Layouts`}),`
`,(0,g.jsxs)(t.p,{children:[`How the kit's fields are arranged into a form: sections with a heading
and a line of context, fields one or two to a row, and a row of actions
at the end. Three pieces: `,(0,g.jsx)(t.code,{children:`FormSection`}),`, `,(0,g.jsx)(t.code,{children:`FormFullWidth`}),` and
`,(0,g.jsx)(t.code,{children:`FormActions`}),`. The `,(0,g.jsx)(t.code,{children:`<form>`}),` element is yours.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/form-layouts.json
`})}),`
`,(0,g.jsx)(t.h2,{id:`settings-sections`,children:`Settings sections`}),`
`,(0,g.jsx)(t.p,{children:`A settings page. Each section's title and description sit in a column
beside its fields, sections are separated by a line, and one row of
actions saves the lot.`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`stacked-in-a-card`,children:`Stacked in a card`}),`
`,(0,g.jsx)(t.p,{children:`One section on a card: the title above, fields two to a row, and the
actions in the card's bottom band.`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`in-a-modal`,children:`In a modal`}),`
`,(0,g.jsxs)(t.p,{children:[`A short form in a `,(0,g.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),`.
The submit button sits in the modal's footer, outside the `,(0,g.jsx)(t.code,{children:`<form>`}),`, and
points at it with the `,(0,g.jsx)(t.code,{children:`form`}),` attribute, so Enter in a field and a click on
the button both submit.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`formsection-props`,children:`FormSection props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`Required. An `,(0,g.jsx)(t.code,{children:`h2`}),` by default.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`The fields. Give each input `,(0,g.jsx)(t.code,{children:`isFullWidth`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`layout`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`split`}),`, `,(0,g.jsx)(t.code,{children:`stacked`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`split`})}),(0,g.jsx)(t.td,{children:`Split puts the intro in a column beside the fields.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`columns`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`1`}),`, `,(0,g.jsx)(t.code,{children:`2`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`1`})}),(0,g.jsxs)(t.td,{children:[`Two fields to a row. Wrap one in `,(0,g.jsx)(t.code,{children:`FormFullWidth`}),` to span the row.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isCard`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footer`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`Usually `,(0,g.jsx)(t.code,{children:`FormActions`}),`; the card's bottom band when `,(0,g.jsx)(t.code,{children:`isCard`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headingLevel`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`2`}),`, `,(0,g.jsx)(t.code,{children:`3`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`2`})}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`FormActions`}),` is a row of buttons aligned to the end: secondary actions
first, the primary one last.`]}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Sections respond to their own width.`}),` Split turns into stacked under
48rem of section width, and two columns into one when the fields' side
of the section (its whole width once stacked) is under 32rem. A form in
a sidebar or a phone needs no extra props.`]}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Sections are size containers`}),`, so they take their width from where
they sit. As a flex or grid item that would shrink to fit, give the
section a width (`,(0,g.jsx)(t.code,{children:`inline-size: 100%`}),`), or it collapses.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(t.p,{children:`Actions end-aligned, primary last: the same place in every form, where
the eye and the Tab key end up.`}),`
`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Each section is a `,(0,g.jsx)(t.code,{children:`<section>`}),` with a heading, so the form's parts are in
the page outline and a screen reader can jump between them.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Group related checkboxes in a `,(0,g.jsx)(t.code,{children:`<fieldset>`}),` with a `,(0,g.jsx)(t.code,{children:`<legend>`}),`, as the
Notifications section does; RadioGroup does this for you.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Mark required fields with `,(0,g.jsx)(t.code,{children:`required`}),`. The field shows the asterisk and
the browser enforces it; say in the description if most fields are
optional instead.`]}),`
`,(0,g.jsx)(t.li,{children:`Never disable the submit button to show that a form is incomplete. Let
it submit, and show what is missing next to each field.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};