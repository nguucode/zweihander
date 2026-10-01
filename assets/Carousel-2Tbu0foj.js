import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Carousel.stories-CfFTi36z.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`carousel`,children:`Carousel`}),`
`,(0,g.jsxs)(t.p,{children:[`A row of slides seen one (or a few) at a time: featured items, a gallery,
onboarding cards. Everything in it is hidden until the reader goes
looking, so use it for content that is fine to miss; a list or a grid
shows more at once. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/carousel`,rel:`nofollow`,children:`uiguideline.com/components/carousel`}),`.
A native scrolling track with snap points, following the
`,(0,g.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/carousel/`,rel:`nofollow`,children:`WAI-ARIA carousel pattern`}),`.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Controls`})}),(0,g.jsx)(t.td,{children:`Previous and next, plus stop/start when it rotates. Above the track, at its end, so they never cover a slide.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Track`})}),(0,g.jsx)(t.td,{children:`A horizontal scroller with snap points. Swipe, trackpad and arrow keys scroll it natively.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Slide`})}),(0,g.jsx)(t.td,{children:`One child. Labelled "2 of 5".`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Dots`})}),(0,g.jsx)(t.td,{children:`One per stop. The current one is a wider bar.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:`nodes`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`One per slide.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`label`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required. Names the carousel.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`slidesPerView`})}),(0,g.jsx)(t.td,{children:`number`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`1`})}),(0,g.jsx)(t.td,{children:`Slides in view at once.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`showDots`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`loop`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{children:`Previous and next wrap at the ends.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`autoPlay`})}),(0,g.jsx)(t.td,{children:`number (ms)`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Advance on a timer. See Accessibility.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`index`})}),(0,g.jsx)(t.td,{children:`number`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Controlled: the first slide in view.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`defaultIndex`})}),(0,g.jsx)(t.td,{children:`number`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`0`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onIndexChange`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(index) => void`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Called for buttons, dots, swipes and the timer.`})]})]})]}),`
`,(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Native scrolling.`}),` No transform maths and no gesture library: the
track is `,(0,g.jsx)(t.code,{children:`overflow-x: auto`}),` with `,(0,g.jsx)(t.code,{children:`scroll-snap-type`}),`, so touch, trackpad
and momentum behave as the platform does. The index is read back once
the track comes to rest.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Stops, not slides.`}),` With three in view, five slides have three stops
(1-3, 2-4, 3-5), and the dots count stops.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Right to left works.`}),` Offsets are measured from the first slide, so
the negative `,(0,g.jsx)(t.code,{children:`scrollLeft`}),` of an RTL track reads correctly, and the
previous/next chevrons are mirrored.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`defaultIndex`}),` starts there.`]}),` The track jumps to it on mount, without
a scroll animation.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`A `,(0,g.jsx)(t.code,{children:`<section>`}),` with `,(0,g.jsx)(t.code,{children:`aria-roledescription="carousel"`}),` and your `,(0,g.jsx)(t.code,{children:`label`}),`;
each slide is a group with `,(0,g.jsx)(t.code,{children:`aria-roledescription="slide"`}),` and a name
like "2 of 5".`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Autoplay`}),` (WCAG 2.2.2) pauses while the pointer is over the carousel
or focus is inside it, has a stop/start button as its first control, and
never runs under `,(0,g.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`A visually hidden line says where you are ("Slide 3 of 5", or "Slides
2 to 4 of 5"). It is `,(0,g.jsx)(t.code,{children:`aria-live="polite"`}),` when the reader moves the
carousel, so a screen reader hears the change, and `,(0,g.jsx)(t.code,{children:`off`}),` while it
rotates on its own. The slides themselves never change in the DOM, so a
live region round them would stay silent.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Previous and next are disabled at the ends unless `,(0,g.jsx)(t.code,{children:`loop`}),`. Dots are
buttons named "Slide 3" with `,(0,g.jsx)(t.code,{children:`aria-current`}),` on the current stop.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The track is focusable (`,(0,g.jsx)(t.code,{children:`tabindex="0"`}),`) so a keyboard can scroll it,
and shows the 2px `,(0,g.jsx)(t.code,{children:`--ring`}),`. Buttons and dots have 44px touch targets on
coarse pointers.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};