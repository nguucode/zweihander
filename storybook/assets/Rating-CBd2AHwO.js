import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{a as S,c as C,d as w,f as T,i as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F}from"./Rating.stories-DzY8yDoT.js";function I(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(i,{of:N}),`
`,(0,R.jsx)(t.h1,{id:`rating`,children:`Rating`}),`
`,(0,R.jsxs)(u,{children:[(0,R.jsxs)(_,{value:`overview`,children:[(0,R.jsx)(t.p,{children:`Asks for, or shows, a score out of a few stars: a review, a template's
rating, a difficulty.`}),(0,R.jsx)(x,{of:N}),(0,R.jsx)(s,{of:M}),(0,R.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,R.jsx)(t.p,{children:`A rating either asks for a score or shows one.`}),(0,R.jsxs)(t.table,{children:[(0,R.jsx)(t.thead,{children:(0,R.jsxs)(t.tr,{children:[(0,R.jsx)(t.th,{children:`Mode`}),(0,R.jsx)(t.th,{children:`Use for`})]})}),(0,R.jsxs)(t.tbody,{children:[(0,R.jsxs)(t.tr,{children:[(0,R.jsx)(t.td,{children:(0,R.jsx)(j,{label:`Interactive`,defaultValue:3})}),(0,R.jsx)(t.td,{children:`Asking: a review form, rating a template. Whole stars only.`})]}),(0,R.jsxs)(t.tr,{children:[(0,R.jsx)(t.td,{children:(0,R.jsx)(j,{readOnly:!0,value:4.5,"aria-label":`Read-only`})}),(0,R.jsx)(t.td,{children:`Showing: an average beside a product. Fractions draw as a star filled part-way.`})]})]})]}),(0,R.jsx)(s,{of:C}),(0,R.jsx)(s,{of:D}),(0,R.jsxs)(t.p,{children:[(0,R.jsx)(t.code,{children:`getValueText`}),` changes what each score is called, for a scale that is not
stars:`]}),(0,R.jsx)(s,{of:k}),(0,R.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,R.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-js`,children:`import { Rating } from 'zweihander/rating'
`})}),(0,R.jsx)(t.pre,{children:(0,R.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/rating.json
`})}),(0,R.jsxs)(t.ul,{children:[`
`,(0,R.jsxs)(t.li,{children:[`Source: `,(0,R.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/controls/Rating.tsx`,rel:`nofollow`,children:`src/components/controls/Rating.tsx`})]}),`
`,(0,R.jsxs)(t.li,{children:[`Spec: `,(0,R.jsx)(t.a,{href:`https://www.uiguideline.com/components/rating`,rel:`nofollow`,children:`uiguideline.com/components/rating`})]}),`
`,(0,R.jsx)(t.li,{children:`Behaviour: native radio buttons; no Base UI part covers it`}),`
`,(0,R.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,R.jsxs)(_,{value:`specs`,children:[(0,R.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,R.jsx)(y,{parts:w,children:(0,R.jsx)(a,{of:P})}),(0,R.jsx)(t.p,{children:`Each star is a label over an invisible native radio, so arrows, Tab and
form submission are the browser's own. Read-only drops the radios: the
stars are one image.`}),(0,R.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,R.jsx)(g,{caption:`sm`,rows:[{part:`Star`,property:`Size`,token:`--space-4`}]}),(0,R.jsx)(g,{caption:`md`,rows:[{part:`Star`,property:`Size`,token:`--space-6`}]}),(0,R.jsx)(g,{caption:`lg`,rows:[{part:`Star`,property:`Size`,token:`--space-8`}]}),(0,R.jsx)(g,{caption:`Every size`,rows:[{part:`Label`,property:`Gap above the stars`,token:`--space-1-5`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Focus ring`,property:`Corner radius`,token:`--radius-sm`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,R.jsx)(t.p,{children:`Stars sit 2px apart, below the spacing scale on purpose, as on Tag. The
label is medium weight.`}),(0,R.jsx)(t.h2,{id:`color`,children:`Color`}),(0,R.jsx)(g,{rows:[{part:`Filled star`,property:`Colour`,token:`--warning`},{part:`Empty star`,property:`Colour`,token:`--control-border`},{part:`Label`,property:`Colour`,token:`--foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,R.jsxs)(t.p,{children:[`The fill is the bright `,(0,R.jsx)(t.code,{children:`--warning`}),` amber, not the darker warning text
colour: a rating reads as a rating when it looks like one. It is 2.1:1 on
white, below the 3:1 a meaningful graphic needs, so colour is not what
carries the score. A filled star differs from the outlined empty one by
shape, and the group or image is named "3 out of 5 stars".`]}),(0,R.jsx)(t.h2,{id:`states`,children:`States`}),(0,R.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,R.jsx)(a,{of:E})},{label:`Unrated`,content:(0,R.jsx)(a,{of:F})},{label:`Read-only`,content:(0,R.jsx)(j,{readOnly:!0,value:3.5,"aria-label":`Rating`})}],children:(0,R.jsx)(j,{"aria-label":`Rating`,defaultValue:3})}),(0,R.jsxs)(t.ul,{children:[`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`Hover`}),` previews the score up to the star under the pointer, and only
while the rating can be changed.`]}),`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,R.jsx)(t.code,{children:`--ring`}),` outline round the focused star.`]}),`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`Disabled`}),` dims the stars to 50%.`]}),`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`Read-only`}),` is one image; fractions fill a star part-way, cut rather
than shrunk.`]}),`
`]}),(0,R.jsx)(t.h2,{id:`api`,children:`API`}),(0,R.jsx)(`div`,{style:{overflowX:`auto`},children:(0,R.jsx)(o,{of:N})}),(0,R.jsxs)(t.p,{children:[(0,R.jsx)(t.code,{children:`className`}),` passes through to the group.`]})]}),(0,R.jsxs)(_,{value:`guidelines`,children:[(0,R.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,R.jsx)(t.p,{children:`Use a rating to ask for, or show, a quick score on a short scale: a
review, a difficulty, how useful something was. Keep the scale short:
five stars is the convention readers already know.`}),(0,R.jsx)(l,{do:(0,R.jsx)(a,{of:S}),doCaption:`Five stars: few enough to hit and to tell apart at a glance.`,dont:(0,R.jsx)(a,{of:A}),dontCaption:`Ten stars are small targets, and 7 looks much like 8. Use a Slider or a Number Input for a fine scale.`}),(0,R.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,R.jsxs)(t.ul,{children:[`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`For a precise number.`}),` Use a
`,(0,R.jsx)(t.a,{href:`?path=/docs/components-controls-slider--docs`,children:`Slider`}),` or a Number Input.`]}),`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`For a choice between named options.`}),` Use a
`,(0,R.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group, so the
options say what they mean.`]}),`
`,(0,R.jsxs)(t.li,{children:[(0,R.jsx)(t.strong,{children:`To show progress.`}),` Use a Progress Bar.`]}),`
`]}),(0,R.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,R.jsxs)(t.ul,{children:[`
`,(0,R.jsxs)(t.li,{children:[`Interactive: a `,(0,R.jsx)(t.code,{children:`<fieldset>`}),` named by its legend (or `,(0,R.jsx)(t.code,{children:`aria-label`}),`), with
one radio per star named "1 out of 5 stars" and so on (change the words
with `,(0,R.jsx)(t.code,{children:`getValueText`}),`). Arrows move the choice; Tab moves into and out of
the group.`]}),`
`,(0,R.jsxs)(t.li,{children:[`Read-only: `,(0,R.jsx)(t.code,{children:`role="img"`}),` named with the value, "4.5 out of 5 stars".`]}),`
`,(0,R.jsx)(t.li,{children:`Hover previews the score; focus shows the 2px ring round the star.`}),`
`,(0,R.jsx)(t.li,{children:`A filled star differs from an empty one by shape as well as colour.`}),`
`,(0,R.jsx)(t.li,{children:`Stars grow a 44px target on coarse pointers.`}),`
`]})]})]})]})}function L(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,R.jsx)(t,{...e,children:(0,R.jsx)(I,{...e})}):I(e)}var R;function z(){return(z=e((()=>{R=t(),r(),c(),d(),p(),h(),f(),m(),b(),O(),T()})))()}z();export{L as default};