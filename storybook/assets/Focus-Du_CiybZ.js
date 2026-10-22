import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{n as s,r as c,t as l}from"./Focus.stories-BmAY9RVw.js";function u(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`focus`,children:`Focus`}),`
`,(0,f.jsxs)(t.p,{children:[`One ring for the whole kit: `,(0,f.jsx)(t.code,{children:`outline: var(--focus-width) solid var(--ring)`}),`,
shown on `,(0,f.jsx)(t.code,{children:`:focus-visible`}),` only. Its colour is `,(0,f.jsx)(t.code,{children:`--ring`}),`, measured at 3:1
against the page (see `,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-colors--docs`,children:`Colors`}),`).`]}),`
`,(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`outside-or-inside`,children:`Outside or inside`}),`
`,(0,f.jsx)(t.p,{children:`There are two offsets and the choice is mechanical.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:(0,f.jsx)(t.code,{children:`--focus-offset`})}),` draws the ring outside the element. It is the default
for anything that stands on its own: buttons, fields, links, checkboxes.`]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:(0,f.jsx)(t.code,{children:`--focus-offset-inset`})}),` draws it inside. Use it when the element sits
flush against the edge of a container that clips its overflow, or when an
outside ring would run into a neighbour: tabs, table rows and sortable
headers, accordion triggers, the close button in a modal, popover, alert
or toast, the remove button in a tag, the steppers in a number input.`]}),`
`,(0,f.jsxs)(t.p,{children:[`A third value is a smell. The one exception is a selected colour swatch,
which already carries a selection ring at `,(0,f.jsx)(t.code,{children:`--focus-offset`}),`, so its focus
ring sits one pixel further out to stay visible.`]}),`
`,(0,f.jsx)(t.h2,{id:`why-the-ring-is-not-scaled`,children:`Why the ring is not scaled`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`--focus-width`}),` and both offsets are plain pixels, not multiplied by
`,(0,f.jsx)(t.code,{children:`--scaling`}),`. A ring is a stroke: at 90% scaling it should not thin to
1.8px, and WCAG 2.4.13 measures it in CSS pixels.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),o(),c()})))()}p();export{d as default};