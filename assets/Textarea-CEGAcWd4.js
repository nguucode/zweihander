import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,r as d,t as f}from"./Textarea.stories-BUUFbiat.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,h.jsxs)(t.p,{children:[`Several lines of text: a message, a description, a note. Spec:
`,(0,h.jsx)(t.a,{href:`https://www.uiguideline.com/components/textarea`,rel:`nofollow`,children:`uiguideline.com/components/textarea`}),`.
The same field as `,(0,h.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`:
label, helper, validation, sizes and appearances are shared.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Part`}),(0,h.jsx)(t.th,{children:`What it is`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Label`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`label`}),`, above the field.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Field`})}),(0,h.jsx)(t.td,{children:`The box: edge, fill and focus ring, padded top and bottom so it grows with the text.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Placeholder`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`placeholder`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Resize handle`})}),(0,h.jsxs)(t.td,{children:[`The browser's own, on the axes `,(0,h.jsx)(t.code,{children:`resize`}),` allows. Hidden with `,(0,h.jsx)(t.code,{children:`hasAutoSize`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Helper text`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`helperText`}),`; the error message when `,(0,h.jsx)(t.code,{children:`validationState`}),` is error.`]})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.p,{children:[`Everything Text Input takes except `,(0,h.jsx)(t.code,{children:`prefix`}),` and `,(0,h.jsx)(t.code,{children:`suffix`}),`, plus:`]}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`resize`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`none`}),`, `,(0,h.jsx)(t.code,{children:`both`}),`, `,(0,h.jsx)(t.code,{children:`vertical`}),`, `,(0,h.jsx)(t.code,{children:`horizontal`})]}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`vertical`})}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`hasAutoSize`})}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`Grows and shrinks with the text.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`minRows`})}),(0,h.jsx)(t.td,{children:`number`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`3`})}),(0,h.jsxs)(t.td,{children:[`Starting height (the `,(0,h.jsx)(t.code,{children:`rows`}),` attribute).`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`maxRows`})}),(0,h.jsx)(t.td,{children:`number`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`Where auto-size stops and scrolling starts.`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`onChange`}),` is the native event; every other `,(0,h.jsx)(t.code,{children:`<textarea>`}),` attribute passes
through, including `,(0,h.jsx)(t.code,{children:`ref`}),`.`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Native `,(0,h.jsx)(t.code,{children:`disabled`}),`, `,(0,h.jsx)(t.code,{children:`required`}),`, `,(0,h.jsx)(t.code,{children:`readOnly`}),` names, and native `,(0,h.jsx)(t.code,{children:`onChange`}),`,
as on Text Input.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsxs)(t.strong,{children:[(0,h.jsx)(t.code,{children:`minRows`}),` defaults to 3.`]}),` The spec gives none; the browser's own
default of 2 is too short to read as a multi-line field.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsxs)(t.p,{children:[`Use auto-size for text whose length varies a lot, with a `,(0,h.jsx)(t.code,{children:`maxRows`}),` so the
page does not grow without limit. Keep the manual handle (`,(0,h.jsx)(t.code,{children:`vertical`}),`) when
people may want to see more at once.`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`A real `,(0,h.jsx)(t.code,{children:`<textarea>`}),` with its `,(0,h.jsx)(t.code,{children:`<label>`}),`, the helper as its description,
and `,(0,h.jsx)(t.code,{children:`aria-invalid`}),` in the error state.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Edge at 3:1 on the page (`,(0,h.jsx)(t.code,{children:`--control-border`}),`); focus ring around the
whole field.`]}),`
`,(0,h.jsx)(t.li,{children:`Enter inserts a line break; it does not submit the form.`}),`
`,(0,h.jsxs)(t.li,{children:[`Auto-size caps at `,(0,h.jsx)(t.code,{children:`maxRows`}),` and scrolls beyond it, so a long entry never
pushes the rest of the form off screen.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};