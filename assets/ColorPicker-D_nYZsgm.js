import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./ColorPicker.stories-o9F0dFDp.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`color-picker`,children:`Color Picker`}),`
`,(0,g.jsxs)(t.p,{children:[`Choose a colour: type its hex, pick from a set of swatches, or find it on
a saturation/brightness area and a hue strip. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/color-picker`,rel:`nofollow`,children:`uiguideline.com/components/color-picker`}),`.
Two exports: `,(0,g.jsx)(t.code,{children:`ColorPicker`}),`, a text field with a swatch button that opens
the picker in a Base UI Popover, and `,(0,g.jsx)(t.code,{children:`ColorPanel`}),`, the picker on its own.`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Field`})}),(0,g.jsx)(t.td,{children:`A text field holding the hex, with the label, helper and validation of every Zweihänder field.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Swatch button`})}),(0,g.jsx)(t.td,{children:`At the start of the field, filled with the current colour. Opens the panel.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Area`})}),(0,g.jsx)(t.td,{children:`Saturation left to right, brightness bottom to top, in the current hue.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Hue strip`})}),(0,g.jsx)(t.td,{children:`A slider round the colour wheel, 0 to 359 degrees.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Swatches`})}),(0,g.jsx)(t.td,{children:`Optional presets. The chosen one has a ring.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`ColorPicker`}),`:`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`value`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`#rrggbb`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Controlled.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`defaultValue`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`#rrggbb`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`#3b82f6`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onValueChange`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(hex) => void`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`On every change: typing (once committed), dragging, keys, swatches.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`swatches`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(string | { value, label })[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`A plain string is named by its hex; give brand colours a `,(0,g.jsx)(t.code,{children:`label`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`label`}),`, `,(0,g.jsx)(t.code,{children:`helperText`}),`, `,(0,g.jsx)(t.code,{children:`validationState`}),`, `,(0,g.jsx)(t.code,{children:`size`}),`, `,(0,g.jsx)(t.code,{children:`appearance`}),`, `,(0,g.jsx)(t.code,{children:`isFullWidth`}),`, `,(0,g.jsx)(t.code,{children:`required`}),`, `,(0,g.jsx)(t.code,{children:`disabled`})]}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{}),(0,g.jsxs)(t.td,{children:[`As Text Input. `,(0,g.jsx)(t.code,{children:`required`}),` is set on the hex input.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`name`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Submits the hex.`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`ColorPanel`}),` takes `,(0,g.jsx)(t.code,{children:`value`}),`, `,(0,g.jsx)(t.code,{children:`defaultValue`}),`, `,(0,g.jsx)(t.code,{children:`onValueChange`}),`, `,(0,g.jsx)(t.code,{children:`swatches`}),`,
`,(0,g.jsx)(t.code,{children:`disabled`}),` and `,(0,g.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`normalizeHex(text)`}),` is exported too: it turns `,(0,g.jsx)(t.code,{children:`#abc`}),`, `,(0,g.jsx)(t.code,{children:`ABC`}),` or `,(0,g.jsx)(t.code,{children:`#AABBCC`}),`
into `,(0,g.jsx)(t.code,{children:`#aabbcc`}),`, and anything else into `,(0,g.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Hex in, hex out.`}),` The value is always lowercase `,(0,g.jsx)(t.code,{children:`#rrggbb`}),`. Typed
text is read on Enter or blur and accepts three or six digits, with or
without `,(0,g.jsx)(t.code,{children:`#`}),`; anything else shows "Enter a colour as #rrggbb" and keeps
the last good value.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`The hue is remembered.`}),` Internally the picker keeps hue, saturation
and brightness. Drag to black and back and the hue strip stays where it
was, instead of jumping to red as a hex round trip would.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`No alpha, no other formats.`}),` Opacity and RGB/HSL input are not in
this version.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Thumbs read on any colour.`}),` A white ring with a dark edge: one of
the two is at least 3:1 against whatever is under it.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`The field is a text input named by its label; the swatch button is
named "Choose colour, #3b82f6 selected", and the popup is a dialog
named "Choose colour" that returns focus to the button on Escape.`}),`
`,(0,g.jsx)(t.li,{children:`The area is one tab stop: a slider named "Saturation" whose value text
reads both numbers ("Saturation 76%, brightness 96%"). Left and right
change saturation, up and down brightness, Shift moves 10%, Page Up/Down
change brightness by 10%, Home and End set saturation to 0 or 100%.
A second "Brightness" slider is there for a screen reader's browse mode.`}),`
`,(0,g.jsx)(t.li,{children:`The hue strip is a Base UI slider named "Hue", read as "217 degrees".`}),`
`,(0,g.jsx)(t.li,{children:`Swatches are native radios in a radio group named "Swatches": one tab
stop, arrows move and choose, and the chosen one is checked. None is
checked while the colour is not one of them. They are 24px with 8px
between them, which meets WCAG 2.5.8 without an invisible larger
target.`}),`
`,(0,g.jsx)(t.li,{children:`A colour is never the only way to know the value: the hex is always in
the field.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};