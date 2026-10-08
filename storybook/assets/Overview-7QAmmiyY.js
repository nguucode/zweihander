import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,s as a}from"./blocks-BCmbfwq7.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Components/Overview`}),`
`,(0,c.jsx)(t.h1,{id:`components`,children:`Components`}),`
`,(0,c.jsxs)(t.p,{children:[`Single, reusable UI components (atomic design's "molecules"). Reference list: `,(0,c.jsx)(t.a,{href:`https://www.uiguideline.com/components`,rel:`nofollow`,children:`uiguideline.com/components`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each component lives in `,(0,c.jsx)(t.code,{children:`src/components/<category>/`}),`, with its story set to
`,(0,c.jsx)(t.code,{children:`Components/<Category>/<Component>`}),`. Categories below — add a component to the
one it fits, or propose a new category if none fit.`]}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Category`}),(0,c.jsx)(t.th,{children:`Components`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Atomic Elements`})}),(0,c.jsx)(t.td,{children:`Divider ✅, Badge ✅, Avatar ✅, Tag ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Buttons`})}),(0,c.jsx)(t.td,{children:`Button ✅, Toggle Button ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Controls`})}),(0,c.jsx)(t.td,{children:`Color Picker ✅, Rating ✅, Slider ✅, Switch ✅, Checkbox ✅, Radio ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Data Display`})}),(0,c.jsx)(t.td,{children:`Calendar ✅, Table ✅, Accordion ✅, Carousel ✅, Card ✅, Collapse ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Inputs`})}),(0,c.jsx)(t.td,{children:`Search ✅, Number Input ✅, Text Input ✅, Textarea ✅, File Uploader ✅, Date Picker ✅, Select ✅, Combobox ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Loaders`})}),(0,c.jsx)(t.td,{children:`Spinner ✅, Progress Bar ✅, Skeleton ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Navigation`})}),(0,c.jsx)(t.td,{children:`Breadcrumbs ✅, Pagination ✅, Link ✅, Tabs ✅, Stepper ✅, Menu ✅, Sidebar ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Notifications`})}),(0,c.jsx)(t.td,{children:`Alert ✅, Toast ✅, Inline Alert ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`Overlays`})}),(0,c.jsx)(t.td,{children:`Modal ✅, Tooltip ✅, Popover ✅`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.strong,{children:`States`})}),(0,c.jsx)(t.td,{children:`Empty State ✅, Error State ✅, Success State ✅`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Unchecked = not built yet.`}),`
`,(0,c.jsx)(t.h2,{id:`behaviour-comes-from-base-ui`,children:`Behaviour comes from Base UI`}),`
`,(0,c.jsxs)(t.p,{children:[`Components are styled with CSS Modules over the token layer; their
`,(0,c.jsx)(t.em,{children:`behaviour`}),` — focus, keyboard, ARIA — comes from
`,(0,c.jsx)(t.a,{href:`https://base-ui.com`,rel:`nofollow`,children:`Base UI`}),` (`,(0,c.jsx)(t.code,{children:`@base-ui/react`}),`) wherever it is more than
trivial. Button uses its `,(0,c.jsx)(t.code,{children:`Button`}),` for the focusable-while-loading state;
Toggle Button, the form controls, the overlays, Select, Combobox, Tabs and
Menu are built on its parts.`]}),`
`,(0,c.jsx)(t.p,{children:`The reason is the same one that kept this kit from hand-rolling them: a
Modal needs a focus trap, scroll locking, an inert background and correct
restore-focus; Select and Combobox need typeahead, virtual focus and a
listbox ARIA contract; Menu and Tabs need roving tabindex. Those are not
lines of code, they are years of accumulated edge cases in screen readers
and browsers. Base UI is unstyled, so it carries none of that into the
look — the tokens still decide everything you can see.`}),`
`,(0,c.jsx)(t.p,{children:`Two conventions follow from it:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`render`}),` instead of `,(0,c.jsx)(t.code,{children:`asChild`}),`.`]}),` Any component that renders an element
you might want to replace takes a `,(0,c.jsx)(t.code,{children:`render`}),` prop — an element or a
function — the same as Base UI's own parts and shadcn's.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Base UI's change handlers.`}),` Components built on it expose its names:
`,(0,c.jsx)(t.code,{children:`onPressedChange`}),`, `,(0,c.jsx)(t.code,{children:`onCheckedChange`}),`, `,(0,c.jsx)(t.code,{children:`onValueChange`}),`, `,(0,c.jsx)(t.code,{children:`onOpenChange`}),`.
Components that wrap a real `,(0,c.jsx)(t.code,{children:`<input>`}),` (Text Input, Textarea, Search)
keep the native `,(0,c.jsx)(t.code,{children:`onChange(event)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Components with no behaviour worth the name — Divider, Badge, Avatar,
Tag — are plain elements and do not import it.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};