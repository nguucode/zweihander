import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./ButtonGroup.stories-CGt4Tts0.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{of:j}),`
`,(0,L.jsx)(t.h1,{id:`button-group`,children:`Button Group`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsxs)(t.p,{children:[`Buttons joined into one bar. `,(0,L.jsx)(t.code,{children:`ToggleGroup`}),` joins
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-buttons-togglebutton--docs`,children:`Toggle Buttons`}),` that
share one selection; `,(0,L.jsx)(t.code,{children:`ButtonGroup`}),` joins plain
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Buttons`}),` that act.`]}),(0,L.jsx)(x,{of:j}),(0,L.jsx)(t.p,{children:`Button Group is outside the 1.0 component list, so it starts as experimental.`}),(0,L.jsx)(s,{of:S}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Form`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.code,{children:`ToggleGroup`}),`, single`]}),(0,L.jsx)(t.td,{children:`A segmented control: one view, one mode, one period at a time.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ToggleGroup multiple`})}),(0,L.jsx)(t.td,{children:`Settings that combine: status filters, Bold and Italic.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`ButtonGroup`})}),(0,L.jsx)(t.td,{children:`Related actions that read as a set: previous and next, zoom in and out.`})]})]})]}),(0,L.jsx)(s,{of:P}),(0,L.jsx)(s,{of:N}),(0,L.jsx)(s,{of:D}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-js`,children:`import { ButtonGroup, ToggleGroup } from 'zweihander/button-group'
`})}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/button-group.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/buttons/ButtonGroup.tsx`,rel:`nofollow`,children:`src/components/buttons/ButtonGroup.tsx`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; after `,(0,L.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/button-group`,rel:`nofollow`,children:`shadcn/ui Button Group`}),` and `,(0,L.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/toggle-group`,rel:`nofollow`,children:`Toggle Group`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Behaviour: `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/toggle-group`,rel:`nofollow`,children:`Base UI Toggle Group`})]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(a,{of:O})}),(0,L.jsx)(t.p,{children:`The buttons keep their own anatomy; the container only joins them.`}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsxs)(t.p,{children:[`The group adds no size of its own. Each button keeps its tier, so a group
of `,(0,L.jsx)(t.code,{children:`sm`}),` buttons is `,(0,L.jsx)(t.code,{children:`--control-sm`}),` tall. Inner corners are square and each
button after the first overlaps the one before by its 1px border, so two
outlined buttons share one line. The outer corners keep the buttons'
radius.`]}),(0,L.jsx)(g,{caption:`sm`,rows:[{part:`Button`,property:`Height`,token:`--control-sm`},{part:`Container`,property:`Outer corner radius`,token:`--control-sm-radius`}]}),(0,L.jsx)(g,{caption:`md`,rows:[{part:`Button`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Outer corner radius`,token:`--control-md-radius`}]}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(t.p,{children:`The group paints nothing: unpressed and pressed colours are the Toggle
Button's, and a ButtonGroup's are each Button's. The pressed toggle is
raised over its neighbours so its own border wins where they overlap.`}),(0,L.jsx)(g,{caption:`Default toggles`,rows:[{part:`Button, unpressed`,property:`Border`,token:`--input`},{part:`Selected`,property:`Background`,token:`--primary`},{part:`Selected`,property:`Label`,token:`--primary-foreground`}]}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,L.jsx)(a,{of:k})}],children:(0,L.jsx)(a,{of:S})}),(0,L.jsx)(t.p,{children:`Hover, focus and pressed are each button's own. The focused button is
raised over its neighbours so the ring is never cut.`}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:j})}),(0,L.jsxs)(t.p,{children:[`The table is `,(0,L.jsx)(t.code,{children:`ToggleGroup`}),`'s. `,(0,L.jsx)(t.code,{children:`ButtonGroup`}),` takes only `,(0,L.jsx)(t.code,{children:`<div>`}),` attributes:
`,(0,L.jsx)(t.code,{children:`aria-label`}),` names it. Both pass every other `,(0,L.jsx)(t.code,{children:`<div>`}),` attribute through.`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsxs)(t.p,{children:[`Use `,(0,L.jsx)(t.code,{children:`ToggleGroup`}),` when the toggles answer one question (which view, which
filters) and `,(0,L.jsx)(t.code,{children:`ButtonGroup`}),` when a few actions belong together. Give every
button in a group the same variant and appearance, so the pressed one is
the only one that stands out.`]}),(0,L.jsx)(l,{do:(0,L.jsx)(a,{of:M}),doCaption:`One look across the group: only the pressed segment stands out.`,dont:(0,L.jsx)(a,{of:C}),dontCaption:`A different variant per button reads as several states at once.`}),(0,L.jsx)(s,{of:E}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`To switch between panels of content.`}),` Use Tabs: they own the panel
and its `,(0,L.jsx)(t.code,{children:`tabpanel`}),` role.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For a choice submitted with a form.`}),` Use a Radio group or Checkboxes:
a toggle applies at once, a form field waits for Submit.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For unrelated actions.`}),` Lay out separate Buttons with a gap; joining
them says they belong together.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For more than a handful of options.`}),` Use a Select.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`Both containers have `,(0,L.jsx)(t.code,{children:`role="group"`}),`; name them with `,(0,L.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`Each toggle is a native `,(0,L.jsx)(t.code,{children:`<button>`}),` with `,(0,L.jsx)(t.code,{children:`aria-pressed`}),`, so a screen reader
announces "Board, toggle button, pressed".`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`A `,(0,L.jsx)(t.code,{children:`ToggleGroup`}),` is one tab stop. Arrow keys move between its toggles
and wrap, Home and End jump to the first and last; Space or Enter
presses.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsx)(t.p,{children:`Single choice keeps one pressed: pressing the pressed toggle again does
not release it.`}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`A `,(0,L.jsx)(t.code,{children:`ButtonGroup`}),`'s buttons are each a tab stop, with no `,(0,L.jsx)(t.code,{children:`aria-pressed`}),`.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`A disabled `,(0,L.jsx)(t.code,{children:`ToggleGroup`}),` disables every toggle in it.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`An icon-only button needs its own `,(0,L.jsx)(t.code,{children:`aria-label`}),`, as on Button. A
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`}),` can show that
label to sighted users: it merges onto the button instead of wrapping
it, so the buttons still join.`]}),`
`,(0,L.jsx)(s,{of:w}),`
`]}),`
`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),c(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};