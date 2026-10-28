import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M,u as N}from"./ColorPicker.stories-CFYYVsjU.js";function P(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{of:O}),`
`,(0,I.jsx)(t.h1,{id:`color-picker`,children:`Color Picker`}),`
`,(0,I.jsxs)(u,{children:[(0,I.jsxs)(_,{value:`overview`,children:[(0,I.jsx)(t.p,{children:`Chooses a colour: type it in any CSS format, pick a swatch, find it on a
saturation and brightness area and a hue strip, or type its channels in
Hex, RGB, HSL or HSB. The panel is laid out like Figma's colour picker.`}),(0,I.jsx)(x,{of:O}),(0,I.jsx)(s,{of:A}),(0,I.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,I.jsx)(t.p,{children:`Two exports.`}),(0,I.jsxs)(t.table,{children:[(0,I.jsx)(t.thead,{children:(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.th,{children:`Export`}),(0,I.jsx)(t.th,{children:`Use for`})]})}),(0,I.jsxs)(t.tbody,{children:[(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`ColorPicker`})}),(0,I.jsx)(t.td,{children:`A form field: the hex in a text field, with a swatch button that opens the panel in a popover.`})]}),(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`ColorPanel`})}),(0,I.jsx)(t.td,{children:`The panel on its own, always open: a sidebar, an inspector, a settings page about colour.`})]})]})]}),(0,I.jsx)(s,{of:j}),(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`alpha`}),` adds opacity; `,(0,I.jsx)(t.code,{children:`defaultFormat`}),` picks which channels the fields show
first.`]}),(0,I.jsx)(s,{of:k}),(0,I.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,I.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-js`,children:`import { ColorPicker, ColorPanel } from 'zweihander/color-picker'
`})}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/color-picker.json
`})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[`Source: `,(0,I.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/controls/ColorPicker.tsx`,rel:`nofollow`,children:`src/components/controls/ColorPicker.tsx`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Spec: `,(0,I.jsx)(t.a,{href:`https://www.uiguideline.com/components/color-picker`,rel:`nofollow`,children:`uiguideline.com/components/color-picker`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Behaviour: `,(0,I.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),` and `,(0,I.jsx)(t.a,{href:`https://base-ui.com/react/components/slider`,rel:`nofollow`,children:`Slider`})]}),`
`,(0,I.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,I.jsxs)(_,{value:`specs`,children:[(0,I.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,I.jsx)(y,{parts:D,children:(0,I.jsx)(a,{of:M})}),(0,I.jsxs)(t.p,{children:[`The panel here is shown open under its field; in a `,(0,I.jsx)(t.code,{children:`ColorPicker`}),` it opens
in a popover from the swatch button.`]}),(0,I.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,I.jsx)(t.p,{children:`The field is a Text Input: the same tiers, padding and label. The panel is
the same at both field sizes.`}),(0,I.jsx)(g,{caption:`Field, sm`,rows:[{part:`Field`,property:`Height`,token:`--control-sm`},{part:`Field`,property:`Corner radius`,token:`--control-sm-radius-field`}]}),(0,I.jsx)(g,{caption:`Field, md`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`}]}),(0,I.jsx)(g,{caption:`Panel`,rows:[{part:`Swatch button`,property:`Size`,token:`--control-xs`},{part:`Swatch button and swatches`,property:`Corner radius`,token:`--radius-sm`},{part:`Popover`,property:`Padding`,token:`--space-3`},{part:`Popover`,property:`Corner radius`,token:`--radius-panel`},{part:`Panel`,property:`Gap between sections`,token:`--space-cluster`},{part:`Area`,property:`Corner radius`,token:`--radius-md`},{part:`Hue and opacity strips`,property:`Thickness`,token:`--space-3`},{part:`Hue and opacity strips`,property:`Gap between them`,token:`--space-stack`},{part:`Thumbs`,property:`Size`,token:`--space-4`},{part:`Format menu and channel fields`,property:`Gap`,token:`--space-inline`},{part:`Swatches`,property:`Minimum size`,token:`--space-6`},{part:`Swatches`,property:`Gap`,token:`--space-inline`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Hit area, strip thumbs`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,I.jsx)(t.p,{children:`The panel is 16rem wide, so eight swatches fit in a row, and the area is
10rem tall. The format menu and the channels are the kit's md (32px)
Select and field box.`}),(0,I.jsx)(t.h2,{id:`color`,children:`Color`}),(0,I.jsx)(t.p,{children:`The area, the hue strip and the checkerboard are the colour model itself,
so they are fixed colours, not theme tokens. The thumbs are white rings
with a dark edge: one of the two is at least 3:1 against whatever colour
is under them.`}),(0,I.jsx)(g,{rows:[{part:`Popover`,property:`Background`,token:`--popover`},{part:`Popover`,property:`Text`,token:`--popover-foreground`},{part:`Popover and swatch divider`,property:`Border`,token:`--border`},{part:`Popover`,property:`Shadow`,token:`--shadow-md`},{part:`Swatch button`,property:`Inner edge`,token:`--control-border`},{part:`Chosen swatch`,property:`Ring`,token:`--primary`},{part:`Channel fields`,property:`Divider`,token:`--border`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,I.jsx)(t.p,{children:`Swatches have a faint inner edge, black 10% in light mode and white 10%
in dark, as in Figma. That is below the 3:1 of WCAG 1.4.11 round a white
swatch on white, accepted because the hex in the field, not the edge,
tells the colour.`}),(0,I.jsx)(t.h2,{id:`states`,children:`States`}),(0,I.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,I.jsx)(w,{label:`Brand colour`,disabled:!0})},{label:`Error`,content:(0,I.jsx)(w,{label:`Brand colour`,validationState:`error`,helperText:`Pick a darker colour.`})}],children:(0,I.jsx)(w,{label:`Brand colour`})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Focus`}),` follows Text Input on the field. In the panel every thumb,
swatch and field draws a 2px `,(0,I.jsx)(t.code,{children:`--ring`}),` outline, 2px outside.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Disabled`}),` dims the field and disables the swatch button.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Error`}),` is Text Input's. Typed text that is not a colour turns the
field to error on its own, with a hint, and keeps the last good value.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Chosen swatch`}),` has a 2px `,(0,I.jsx)(t.code,{children:`--primary`}),` ring; focused as well, the ring
turns `,(0,I.jsx)(t.code,{children:`--ring`}),` and moves 1px further out.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`api`,children:`API`}),(0,I.jsx)(`div`,{style:{overflowX:`auto`},children:(0,I.jsx)(o,{of:O})}),(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`ColorPanel`}),` takes `,(0,I.jsx)(t.code,{children:`value`}),`, `,(0,I.jsx)(t.code,{children:`defaultValue`}),`, `,(0,I.jsx)(t.code,{children:`onValueChange`}),`, `,(0,I.jsx)(t.code,{children:`alpha`}),`,
`,(0,I.jsx)(t.code,{children:`defaultFormat`}),`, `,(0,I.jsx)(t.code,{children:`swatches`}),`, `,(0,I.jsx)(t.code,{children:`disabled`}),` and `,(0,I.jsx)(t.code,{children:`className`}),`.`]}),(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`parseColor(text)`}),` reads any CSS colour (`,(0,I.jsx)(t.code,{children:`rgb(59 130 246)`}),`,
`,(0,I.jsx)(t.code,{children:`hsl(217 91% 60% / 50%)`}),`, `,(0,I.jsx)(t.code,{children:`oklch(...)`}),`, `,(0,I.jsx)(t.code,{children:`rebeccapurple`}),`) to the same hex,
or `,(0,I.jsx)(t.code,{children:`null`}),`; the browser parses it, so outside one only hex is read.
`,(0,I.jsx)(t.code,{children:`normalizeHex(text)`}),` turns `,(0,I.jsx)(t.code,{children:`#abc`}),`, `,(0,I.jsx)(t.code,{children:`ABC`}),` or `,(0,I.jsx)(t.code,{children:`#AABBCC`}),` into `,(0,I.jsx)(t.code,{children:`#aabbcc`}),`,
keeps an alpha byte (`,(0,I.jsx)(t.code,{children:`#3b82f680`}),`, or `,(0,I.jsx)(t.code,{children:`#abc8`}),` as `,(0,I.jsx)(t.code,{children:`#aabbcc88`}),`) unless it is
`,(0,I.jsx)(t.code,{children:`ff`}),`, and turns anything else into `,(0,I.jsx)(t.code,{children:`null`}),`.`]}),(0,I.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Hex in, hex out.`}),` The value is lowercase `,(0,I.jsx)(t.code,{children:`#rrggbb`}),`, with an alpha
byte only while opacity is under 100%. Typed text is read on Enter or
blur: hex of 3, 4, 6 or 8 digits with or without `,(0,I.jsx)(t.code,{children:`#`}),`, or any CSS colour.
It is shown back as hex.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Formats are a view, not a value.`}),` RGB, HSL and HSB only change the
fields; the value stays hex. Channel fields commit on Enter or blur, and
up and down step by 1 (Shift by 10), as in a design tool.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`The hue is remembered.`}),` The picker keeps hue, saturation and
brightness, so dragging to black and back leaves the hue strip where it
was instead of jumping to red.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Not in this version:`}),` Figma's library picker ("On this page"),
gradients and an eyedropper.`]}),`
`]})]}),(0,I.jsxs)(_,{value:`guidelines`,children:[(0,I.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,I.jsx)(t.p,{children:`Use a colour picker when any colour is a valid answer: a brand colour, a
chart series, a label someone defines. When there is a palette to follow,
offer it as named swatches.`}),(0,I.jsx)(l,{do:(0,I.jsx)(a,{of:E}),doCaption:`The colours people should use, as named swatches: one click, and a screen reader says “Blue”, not a hex.`,dont:(0,I.jsx)(a,{of:S}),dontCaption:`A palette to follow but no swatches: people match it by eye and land a few steps off.`}),(0,I.jsx)(s,{of:C}),(0,I.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For a few fixed colours.`}),` When only a set of colours is allowed (tag
colours, a theme accent), use a
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group of swatches or
a Select: the picker lets anyone type any colour.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`To show a colour.`}),` Use a swatch and its hex as text.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsx)(t.li,{children:`The field is a text input named by its label. The swatch button is
named "Choose colour, #3b82f6 selected", and the popover is a dialog
named "Choose colour" that returns focus to the button on Escape.`}),`
`,(0,I.jsx)(t.li,{children:`The area is one tab stop: a slider named "Saturation" whose value text
reads both numbers ("Saturation 76%, brightness 96%"). Left and right
change saturation, up and down brightness, Shift moves 10%, Page Up and
Page Down change brightness by 10%, Home and End set saturation to 0 or
100%. A second "Brightness" slider is there for a screen reader's
browse mode.`}),`
`,(0,I.jsx)(t.li,{children:`The hue strip is a slider named "Hue", read as "217 degrees"; the
opacity strip, "Opacity", read as "50%".`}),`
`,(0,I.jsx)(t.li,{children:`The format menu is the kit's Select, named "Colour format". Channel
fields are text inputs named for what they hold ("Red", "Hue degrees",
"Lightness percent", "Opacity percent", "Hex"), so they do not share a
name with the sliders.`}),`
`,(0,I.jsx)(t.li,{children:`Swatches are native radios in a radio group named "Swatches": one tab
stop, arrows move and choose, and the chosen one is checked. None is
checked while the colour is not one of them. They are 24px with 8px
between them, which meets WCAG 2.5.8 without a larger invisible target.`}),`
`,(0,I.jsx)(t.li,{children:`A colour is never the only way to know the value: the hex is always in
the field.`}),`
`]})]})]})]})}function F(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),r(),c(),d(),p(),h(),f(),m(),b(),T(),N()})))()}L();export{F as default};