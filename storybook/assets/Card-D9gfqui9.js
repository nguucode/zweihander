import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./Card.stories-DhCMToWn.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{of:j}),`
`,(0,L.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsx)(t.p,{children:`A surface that groups related content: a summary, a person, a setting.`}),(0,L.jsx)(x,{of:j}),(0,L.jsx)(s,{of:k}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`appearance`}),` is how the surface stands off the page. Every appearance
takes every size and orientation.`]}),(0,L.jsx)(s,{of:O}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Appearance`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`elevated`})}),(0,L.jsxs)(t.td,{children:[`The default panel: a white `,(0,L.jsx)(t.code,{children:`--card`}),` on the off-white page, with an edge and a faint shadow.`]})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`outline`})}),(0,L.jsx)(t.td,{children:`Cards in a dense grid or inside another panel, where a shadow per card is too much.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:(0,L.jsx)(t.code,{children:`unstyled`})}),(0,L.jsx)(t.td,{children:`The card's padding and layout with nothing visible, e.g. inside a surface that already has its own.`})]})]})]}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`size`}),` sets the padding and the gap between children, from 12px (`,(0,L.jsx)(t.code,{children:`xs`}),`) to
32px (`,(0,L.jsx)(t.code,{children:`lg`}),`).`]}),(0,L.jsx)(s,{of:w}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`orientation="horizontal"`}),` sets the children side by side: media, text and
an action.`]}),(0,L.jsx)(s,{of:C}),(0,L.jsxs)(t.p,{children:[`With `,(0,L.jsx)(t.code,{children:`onClick`}),` the whole card is one button; with `,(0,L.jsx)(t.code,{children:`render={<a href />}`}),` it
is a link.`]}),(0,L.jsx)(s,{of:E}),(0,L.jsx)(s,{of:P}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-js`,children:`import { Card } from 'zweihander/card'
`})}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/card.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Card.tsx`,rel:`nofollow`,children:`src/components/data-display/Card.tsx`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Spec: `,(0,L.jsx)(t.a,{href:`https://www.uiguideline.com/components/card`,rel:`nofollow`,children:`uiguideline.com/components/card`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Composition: `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/utils/use-render`,rel:`nofollow`,children:`Base UI useRender`})]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(a,{of:N})}),(0,L.jsx)(t.p,{children:`The card is only the container. Title and body are your own elements, at
the heading level the page needs.`}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsx)(t.p,{children:`Each size is a step of the spacing scale, padding on every side and the
gap between children.`}),(0,L.jsx)(g,{caption:`xs`,rows:[{part:`Container`,property:`Padding`,token:`--space-3`},{part:`Container`,property:`Gap`,token:`--space-2`}]}),(0,L.jsx)(g,{caption:`sm`,rows:[{part:`Container`,property:`Padding`,token:`--space-4`},{part:`Container`,property:`Gap`,token:`--space-3`}]}),(0,L.jsx)(g,{caption:`md`,rows:[{part:`Container`,property:`Padding`,token:`--space-6`},{part:`Container`,property:`Gap`,token:`--space-4`}]}),(0,L.jsx)(g,{caption:`lg`,rows:[{part:`Container`,property:`Padding`,token:`--space-8`},{part:`Container`,property:`Gap`,token:`--space-6`}]}),(0,L.jsx)(g,{caption:`Every size`,rows:[{part:`Container`,property:`Corner radius`,token:`--radius-panel`},{part:`Content`,property:`Font size`,token:`--text-body`},{part:`Content`,property:`Line height`,token:`--leading-body`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,L.jsxs)(t.p,{children:[`The border is 1px, transparent when `,(0,L.jsx)(t.code,{children:`hasBorder`}),` is off, so turning it on
or off never moves the content. `,(0,L.jsx)(t.code,{children:`isRounded={false}`}),` gives square corners.`]}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(t.p,{children:`Switch the theme in the toolbar: the values follow.`}),(0,L.jsx)(g,{caption:`elevated`,rows:[{part:`Container`,property:`Background`,token:`--card`},{part:`Container`,property:`Border`,token:`--border`},{part:`Container`,property:`Shadow`,token:`--shadow-sm`},{part:`Container, hover`,property:`Shadow`,token:`--shadow-md`},{part:`Content`,property:`Colour`,token:`--card-foreground`}]}),(0,L.jsx)(g,{caption:`outline`,rows:[{part:`Container`,property:`Background`,token:`--card`},{part:`Container`,property:`Border`,token:`--border`},{part:`Container, hover`,property:`Border`,token:`--control-border`},{part:`Content`,property:`Colour`,token:`--card-foreground`}]}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`unstyled`}),` has no background, border or shadow, and its content takes the
colour of what it sits on.`]}),(0,L.jsx)(g,{caption:`Every appearance`,rows:[{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(t.p,{children:`A plain card is a container and has no states. A clickable or link card
has these:`}),(0,L.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Hover, outline`,pseudo:`hover`,content:(0,L.jsx)(a,{of:S})}],children:(0,L.jsx)(a,{of:E})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Hover`}),` never touches the surface: muted text sits on `,(0,L.jsx)(t.code,{children:`--card`}),` at
4.5:1 with no margin to spare, and darkening it 6% took muted text to
3.9:1. An `,(0,L.jsx)(t.code,{children:`elevated`}),` card lifts to `,(0,L.jsx)(t.code,{children:`--shadow-md`}),`; an `,(0,L.jsx)(t.code,{children:`outline`}),` card's
edge strengthens to `,(0,L.jsx)(t.code,{children:`--control-border`}),`, the 3:1 control border. An
`,(0,L.jsx)(t.code,{children:`unstyled`}),` card has no hover look.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,L.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the card.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Pressed and disabled`}),` have no look of their own. A card has no
`,(0,L.jsx)(t.code,{children:`disabled`}),` prop: a card that cannot act is a plain card.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:j})}),(0,L.jsxs)(t.p,{children:[`Every other `,(0,L.jsx)(t.code,{children:`<div>`}),` attribute passes through, including `,(0,L.jsx)(t.code,{children:`ref`}),`.`]}),(0,L.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsxs)(t.strong,{children:[(0,L.jsx)(t.code,{children:`children`}),`, not `,(0,L.jsx)(t.code,{children:`content`}),`.`]}),` Arbitrary content is what React children
are for.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsxs)(t.strong,{children:[(0,L.jsx)(t.code,{children:`orientation`}),` defaults to `,(0,L.jsx)(t.code,{children:`vertical`}),`.`]}),` The spec says `,(0,L.jsx)(t.code,{children:`horizontal`}),`,
which would lay a title and its description side by side.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsxs)(t.strong,{children:[(0,L.jsx)(t.code,{children:`render`}),` is added`]}),` so a card can be a link, alongside `,(0,L.jsx)(t.code,{children:`onClick`}),` for
a card that acts.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsxs)(t.strong,{children:[`No `,(0,L.jsx)(t.code,{children:`filled`}),` appearance.`]}),` The spec's tinted card was dropped to match
the Claude apps, where a panel is a white `,(0,L.jsx)(t.code,{children:`--card`}),` on the off-white
page, with an edge or a faint shadow.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:(0,L.jsx)(t.code,{children:`unstyled`})}),` keeps the padding and layout and drops every visual.`]}),`
`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsx)(t.p,{children:`Use a Card to group content about one thing, so it reads as a unit: a
person, a plan, a setting. Put headings inside at the level the page
needs; the card has none of its own.`}),(0,L.jsx)(t.p,{children:`A clickable card is one button, and a button may only hold phrasing
content: use spans for its title and text, not headings or paragraphs,
and put no links or buttons inside it. If a card needs its own actions,
leave it plain and put a button in it.`}),(0,L.jsx)(l,{do:(0,L.jsx)(a,{of:C}),doCaption:`A plain card with its own Follow button: each control is reachable on its own.`,dont:(0,L.jsx)(a,{of:M}),dontCaption:`A button inside a clickable card is invalid HTML, and neither control can be reached reliably.`}),(0,L.jsxs)(t.p,{children:[`A card that navigates should be a link (`,(0,L.jsx)(t.code,{children:`render={<a href />}`}),`), not a
button with a click handler: a link opens in a new tab and shows its
address.`]}),(0,L.jsx)(s,{of:D}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For rows of data to compare.`}),` Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`: columns line
values up, cards do not.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`To show and hide content.`}),` Use an
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-data-display-accordion--docs`,children:`Accordion`}),` or a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-data-display-collapse--docs`,children:`Collapse`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Just to add space or a background.`}),` A plain `,(0,L.jsx)(t.code,{children:`<div>`}),` with padding
does that without suggesting a unit.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`A plain card is a `,(0,L.jsx)(t.code,{children:`<div>`}),`: no role, no tab stop, nothing added to the
accessibility tree.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsxs)(t.strong,{children:[`A clickable card is one `,(0,L.jsx)(t.code,{children:`<button type="button">`}),`, so everything inside
becomes its label.`]}),` Click, Enter and Space all call `,(0,L.jsx)(t.code,{children:`onClick`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[`A link card is a real `,(0,L.jsx)(t.code,{children:`<a href>`}),`, in the tab order, with no `,(0,L.jsx)(t.code,{children:`type`}),`.`]}),`
`,(0,L.jsx)(t.li,{children:`The card has no heading of its own.`}),`
`,(0,L.jsxs)(t.li,{children:[`Muted text clears 4.5:1 on every appearance, in both modes, at rest and
on hover: hover changes the shadow or the edge, never the surface under
the text. The `,(0,L.jsx)(t.code,{children:`Contrast`}),` story measures it.`]}),`
`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),c(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};