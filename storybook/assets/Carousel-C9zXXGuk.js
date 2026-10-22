import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-5QHvYkjw.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-DOZWi2yR.js";import{n as b,t as x}from"./Status-CsQCr1NL.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Carousel.stories-Dr78GDBb.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:T}),`
`,(0,F.jsx)(t.h1,{id:`carousel`,children:`Carousel`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`A row of slides seen one (or a few) at a time: featured items, a gallery,
onboarding cards.`}),(0,F.jsx)(x,{of:T}),(0,F.jsx)(s,{of:S}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsxs)(t.p,{children:[`The carousel has no `,(0,F.jsx)(t.code,{children:`variant`}),` prop. These are its configurations:`]}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Configuration`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:`One in view (default)`}),(0,F.jsx)(t.td,{children:`Large slides that each need the full width: a feature, a photo.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`slidesPerView={3}`})}),(0,F.jsx)(t.td,{children:`Smaller items browsed in a row: templates, products.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`loop`})}),(0,F.jsx)(t.td,{children:`A short set with no natural first or last, where next from the end should wrap.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`autoPlay`})}),(0,F.jsx)(t.td,{children:`Rarely. A showcase where motion is the point; it adds a stop/start button.`})]})]})]}),(0,F.jsx)(s,{of:E}),(0,F.jsx)(t.p,{children:`With three in view, five slides have three stops (1-3, 2-4, 3-5), and the
dots count stops, not slides.`}),(0,F.jsx)(s,{of:A}),(0,F.jsx)(s,{of:k}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Carousel } from 'zweihander/carousel'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/carousel.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Carousel.tsx`,rel:`nofollow`,children:`src/components/data-display/Carousel.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/carousel`,rel:`nofollow`,children:`uiguideline.com/components/carousel`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: `,(0,F.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/carousel/`,rel:`nofollow`,children:`WAI-ARIA carousel pattern`})]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:M,children:(0,F.jsx)(a,{of:j})}),(0,F.jsx)(t.p,{children:`The controls sit above the track, at its end, so they never cover a slide.
A visually hidden line after the track says where the reader is (see
Accessibility).`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Native scrolling.`}),` No transform maths and no gesture library: the
track is `,(0,F.jsx)(t.code,{children:`overflow-x: auto`}),` with `,(0,F.jsx)(t.code,{children:`scroll-snap-type`}),`, so touch, trackpad
and momentum behave as the platform does. The index is read back once
the track comes to rest.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Right to left works.`}),` Offsets are measured from the first slide, so
the negative `,(0,F.jsx)(t.code,{children:`scrollLeft`}),` of a right-to-left track reads correctly, and
the previous and next chevrons are mirrored.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsxs)(t.strong,{children:[(0,F.jsx)(t.code,{children:`defaultIndex`}),` starts there.`]}),` The track jumps to it on mount, without
a scroll animation.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsxs)(t.p,{children:[`There is one size. Slide width follows from the carousel's width,
`,(0,F.jsx)(t.code,{children:`slidesPerView`}),` and the gap between slides.`]}),(0,F.jsx)(g,{caption:`Every carousel`,rows:[{part:`Carousel`,property:`Gap between controls, track and dots`,token:`--space-cluster`},{part:`Track`,property:`Gap between slides`,token:`--space-group`},{part:`Controls`,property:`Gap`,token:`--space-stack`},{part:`Button`,property:`Width and height`,token:`--space-8`},{part:`Button`,property:`Corner radius`,token:`--radius-pill`},{part:`Button`,property:`Icon size`,token:`--icon-md`},{part:`Dots`,property:`Gap`,token:`--space-inline`},{part:`Current dot`,property:`Width`,token:`--space-6`},{part:`Dot`,property:`Hit area`,token:`--space-6`},{part:`Button and dot`,property:`Hit area on touch screens`,token:`--target-coarse`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,F.jsxs)(t.p,{children:[`A dot is 6px round (1.5 × `,(0,F.jsx)(t.code,{children:`--space-1`}),`); the current one stretches to a
24px pill. Buttons have a 1px border.`]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(t.p,{children:`The carousel has no variants: one table. Slides bring their own colours.`}),(0,F.jsx)(g,{caption:`Every carousel`,rows:[{part:`Button`,property:`Background`,token:`--background`},{part:`Button`,property:`Icon colour`,token:`--foreground`},{part:`Button`,property:`Border`,token:`--control-border`},{part:`Button, hover`,property:`Background`,token:`--accent`},{part:`Button, hover`,property:`Icon colour`,token:`--accent-foreground`},{part:`Dot`,property:`Background`,token:`--border`},{part:`Current dot`,property:`Background`,token:`--foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled, first stop`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Current slide 3`,content:(0,F.jsx)(a,{of:C})},{label:`Last stop`,content:(0,F.jsx)(a,{of:D})}],children:(0,F.jsx)(a,{of:S})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hover`}),` fills an enabled button with `,(0,F.jsx)(t.code,{children:`--accent`}),` and its icon with
`,(0,F.jsx)(t.code,{children:`--accent-foreground`}),`. Dots have no hover look.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,F.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the track, a button or a
dot.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Pressed`}),` has no look of its own.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Disabled`}),`: previous at the first stop and next at the last, unless
`,(0,F.jsx)(t.code,{children:`loop`}),`. A disabled button is the enabled look at 50% opacity, with the
disabled cursor and no hover.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Current slide`}),`: the current stop's dot is the longer `,(0,F.jsx)(t.code,{children:`--foreground`}),`
pill.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:T})})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsxs)(t.p,{children:[`Everything in a carousel past the first slide is hidden until the reader
goes looking. Use one for content that is fine to miss: featured items,
examples, a gallery. Give it a `,(0,F.jsx)(t.code,{children:`label`}),` that names what is in it.`]}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:S}),doCaption:`Featured templates: browsing is optional, and missing one costs nothing.`,dont:(0,F.jsx)(a,{of:O}),dontCaption:`Account notices the reader must act on, four of them hidden in slides most readers never reach.`}),(0,F.jsxs)(t.p,{children:[`Prefer no `,(0,F.jsx)(t.code,{children:`autoPlay`}),`. Motion pulls the eye away from the rest of the page,
and a slide can move on before it has been read.`]}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For content everyone must see.`}),` Show it at once: a list, or
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Cards`}),` in a grid, show
more and hide nothing.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For items to compare.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`: side by side
beats one at a time.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For steps in a flow.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-navigation-stepper--docs`,children:`Stepper`}),`: it shows how
many steps there are and where you are.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.p,{children:[`Follows the `,(0,F.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/carousel/`,rel:`nofollow`,children:`WAI-ARIA carousel pattern`}),`.`]}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`A `,(0,F.jsx)(t.code,{children:`<section>`}),` with `,(0,F.jsx)(t.code,{children:`aria-roledescription="carousel"`}),` and your `,(0,F.jsx)(t.code,{children:`label`}),`;
each slide is a group with `,(0,F.jsx)(t.code,{children:`aria-roledescription="slide"`}),` and a name
like "2 of 5".`]}),`
`,(0,F.jsx)(t.li,{children:`Previous, next, stop/start and the dots are native buttons: Tab reaches
them, Enter and Space press them.`}),`
`,(0,F.jsxs)(t.li,{children:[`Previous and next are disabled at the ends unless `,(0,F.jsx)(t.code,{children:`loop`}),`. Dots are
buttons named "Slide 3", with `,(0,F.jsx)(t.code,{children:`aria-current`}),` on the current stop.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Autoplay`}),` (WCAG 2.2.2) pauses while the pointer is over the carousel
or focus is inside it, has a stop/start button as its first control, and
never runs under `,(0,F.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[`A visually hidden line says where you are ("Slide 3 of 5", or "Slides
3 to 5 of 5"). It is `,(0,F.jsx)(t.code,{children:`aria-live="polite"`}),` when the reader moves the
carousel, so a screen reader hears the change, and `,(0,F.jsx)(t.code,{children:`off`}),` while it
rotates on its own. Every slide is in the DOM from the start, so a live
region round the track would stay silent.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The track is in the tab order (`,(0,F.jsx)(t.code,{children:`tabindex="0"`}),`), like any scrolling
region.`]}),`
`,(0,F.jsx)(t.li,{children:`In right to left, the previous and next chevrons are mirrored.`}),`
`,(0,F.jsx)(t.li,{children:`Buttons and dots have 44px touch targets on coarse pointers.`}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),w()})))()}I();export{P as default};