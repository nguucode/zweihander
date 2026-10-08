import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ColorPicker.stories-B4meoAIK.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`color-picker`,children:`Color Picker`}),`
`,(0,_.jsxs)(t.p,{children:[`Choose a colour: type it in any CSS format, pick from a set of swatches, find it on
a saturation/brightness area and hue strip, or type its channels in Hex, RGB, HSL or HSB. The panel is laid out like
Figma's colour picker. Spec:
`,(0,_.jsx)(t.a,{href:`https://www.uiguideline.com/components/color-picker`,rel:`nofollow`,children:`uiguideline.com/components/color-picker`}),`.
Two exports: `,(0,_.jsx)(t.code,{children:`ColorPicker`}),`, a text field with a swatch button that opens
the picker in a Base UI Popover, and `,(0,_.jsx)(t.code,{children:`ColorPanel`}),`, the picker on its own.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Field`})}),(0,_.jsx)(t.td,{children:`A text field holding the hex, with the label, helper and validation of every Zweihänder field. Reads any CSS colour.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Swatch button`})}),(0,_.jsx)(t.td,{children:`At the start of the field, filled with the current colour. Opens the panel.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Area`})}),(0,_.jsx)(t.td,{children:`Saturation left to right, brightness bottom to top, in the current hue.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Hue strip`})}),(0,_.jsx)(t.td,{children:`A slider round the colour wheel, 0 to 359 degrees.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Opacity strip`})}),(0,_.jsxs)(t.td,{children:[`0 to 100%, over a checkerboard. Hidden with `,(0,_.jsx)(t.code,{children:`alpha={false}`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Format menu`})}),(0,_.jsx)(t.td,{children:`The kit's Select (md, 32px): Hex, RGB, HSL or HSB, which channel fields follow it.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Channel fields`})}),(0,_.jsx)(t.td,{children:`One kit field box (md, 32px): the hex, or three numbers, then opacity in %.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Swatches`})}),(0,_.jsxs)(t.td,{children:[`Optional presets under a divider, with a black 10% inner edge (white 10% in dark). The chosen one has a ring in the brand colour (`,(0,_.jsx)(t.code,{children:`--primary`}),`).`]})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ColorPicker`}),`:`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`value`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`#rrggbb`}),` | `,(0,_.jsx)(t.code,{children:`#rrggbbaa`})]}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Controlled.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`defaultValue`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`#rrggbb`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`#3b82f6`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onValueChange`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(hex) => void`})}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`On every change: typing (once committed), dragging, keys, swatches.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`alpha`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`true`})}),(0,_.jsxs)(t.td,{children:[`Show opacity. Off, any alpha in the value is dropped and the value is always `,(0,_.jsx)(t.code,{children:`#rrggbb`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`defaultFormat`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`'hex' | 'rgb' | 'hsl' | 'hsb'`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`'hex'`})}),(0,_.jsx)(t.td,{children:`The channel fields' format on first open.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`swatches`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(string | { value, label })[]`})}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`A plain string is named by its hex; give brand colours a `,(0,_.jsx)(t.code,{children:`label`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`label`}),`, `,(0,_.jsx)(t.code,{children:`helperText`}),`, `,(0,_.jsx)(t.code,{children:`validationState`}),`, `,(0,_.jsx)(t.code,{children:`size`}),`, `,(0,_.jsx)(t.code,{children:`isFullWidth`}),`, `,(0,_.jsx)(t.code,{children:`required`}),`, `,(0,_.jsx)(t.code,{children:`disabled`})]}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{}),(0,_.jsxs)(t.td,{children:[`As Text Input. `,(0,_.jsx)(t.code,{children:`required`}),` is set on the hex input.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`name`})}),(0,_.jsx)(t.td,{children:`string`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Submits the hex.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ColorPanel`}),` takes `,(0,_.jsx)(t.code,{children:`value`}),`, `,(0,_.jsx)(t.code,{children:`defaultValue`}),`, `,(0,_.jsx)(t.code,{children:`onValueChange`}),`, `,(0,_.jsx)(t.code,{children:`alpha`}),`,
`,(0,_.jsx)(t.code,{children:`defaultFormat`}),`, `,(0,_.jsx)(t.code,{children:`swatches`}),`, `,(0,_.jsx)(t.code,{children:`disabled`}),` and `,(0,_.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`parseColor(text)`}),` reads any CSS colour (`,(0,_.jsx)(t.code,{children:`rgb(59 130 246)`}),`, `,(0,_.jsx)(t.code,{children:`hsl(217 91% 60% / 50%)`}),`,
`,(0,_.jsx)(t.code,{children:`oklch(...)`}),`, `,(0,_.jsx)(t.code,{children:`rebeccapurple`}),`) to the same hex, or `,(0,_.jsx)(t.code,{children:`null`}),`; the browser
parses it, so outside one only hex is read. `,(0,_.jsx)(t.code,{children:`normalizeHex(text)`}),` is exported too: it turns `,(0,_.jsx)(t.code,{children:`#abc`}),`, `,(0,_.jsx)(t.code,{children:`ABC`}),` or `,(0,_.jsx)(t.code,{children:`#AABBCC`}),`
into `,(0,_.jsx)(t.code,{children:`#aabbcc`}),`, keeps an alpha byte (`,(0,_.jsx)(t.code,{children:`#3b82f680`}),`, or `,(0,_.jsx)(t.code,{children:`#abc8`}),` as
`,(0,_.jsx)(t.code,{children:`#aabbcc88`}),`) unless it is `,(0,_.jsx)(t.code,{children:`ff`}),`, and turns anything else into `,(0,_.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Hex in, hex out.`}),` The value is lowercase `,(0,_.jsx)(t.code,{children:`#rrggbb`}),`, with an alpha
byte (`,(0,_.jsx)(t.code,{children:`#rrggbbaa`}),`) only while opacity is under 100%, so opaque colours
read as before. Typed text is read on Enter or blur: hex of 3, 4, 6 or 8
digits with or without `,(0,_.jsx)(t.code,{children:`#`}),`, or any CSS colour, `,(0,_.jsx)(t.code,{children:`rgb()`}),`, `,(0,_.jsx)(t.code,{children:`hsl()`}),`,
`,(0,_.jsx)(t.code,{children:`oklch()`}),` or a name. It is shown back as hex. Anything else shows a
hint and keeps the last good value. The Hex channel in the panel reads
the same.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Formats are a view, not a value.`}),` RGB, HSL and HSB only change the
fields; the value stays hex. Channel fields commit on Enter or blur, and
up/down step by 1 (Shift by 10), as in a design tool.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`The hue is remembered.`}),` Internally the picker keeps hue, saturation
and brightness. Drag to black and back and the hue strip stays where it
was, instead of jumping to red as a hex round trip would.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Swatch edges are faint by choice.`}),` Black 10%, as Figma: below the
3:1 of WCAG 1.4.11 round a white swatch on white, accepted because the
hex in the field, not the edge, tells the colour.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Not in this version:`}),` Figma's library picker ("On this page"),
gradients and an eyedropper.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Thumbs read on any colour.`}),` A white ring with a dark edge: one of
the two is at least 3:1 against whatever is under it.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`The field is a text input named by its label; the swatch button is
named "Choose colour, #3b82f6 selected", and the popup is a dialog
named "Choose colour" that returns focus to the button on Escape.`}),`
`,(0,_.jsx)(t.li,{children:`The area is one tab stop: a slider named "Saturation" whose value text
reads both numbers ("Saturation 76%, brightness 96%"). Left and right
change saturation, up and down brightness, Shift moves 10%, Page Up/Down
change brightness by 10%, Home and End set saturation to 0 or 100%.
A second "Brightness" slider is there for a screen reader's browse mode.`}),`
`,(0,_.jsx)(t.li,{children:`The hue strip is a Base UI slider named "Hue", read as "217 degrees";
the opacity strip, "Opacity", read as "50%".`}),`
`,(0,_.jsx)(t.li,{children:`The format menu is the kit's Select, named "Colour format". Channel
fields are text inputs named for what they hold ("Red", "Hue degrees",
"Lightness percent", "Opacity percent", "Hex"), so they do not share a
name with the sliders.`}),`
`,(0,_.jsx)(t.li,{children:`Swatches are native radios in a radio group named "Swatches": one tab
stop, arrows move and choose, and the chosen one is checked. None is
checked while the colour is not one of them. They are 24px with 8px
between them, which meets WCAG 2.5.8 without an invisible larger
target.`}),`
`,(0,_.jsx)(t.li,{children:`A colour is never the only way to know the value: the hex is always in
the field.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};