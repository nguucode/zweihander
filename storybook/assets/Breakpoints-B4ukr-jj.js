import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{i as s,n as c,r as l,t as u}from"./Breakpoints.stories-CGFvhBi3.js";function d(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,p.jsxs)(t.p,{children:[`Five breakpoints, inherited from the underlying CSS framework without
modification. Zweihänder declares no `,(0,p.jsx)(t.code,{children:`--breakpoint-*`}),` of its own.`]}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prefix`}),(0,p.jsx)(t.th,{children:`Min width`}),(0,p.jsx)(t.th,{children:`At a 16px root`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.em,{children:`(none)`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0`})}),(0,p.jsx)(t.td,{children:`0px`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`sm:`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`40rem`})}),(0,p.jsx)(t.td,{children:`640px`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`md:`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`48rem`})}),(0,p.jsx)(t.td,{children:`768px`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`lg:`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`64rem`})}),(0,p.jsx)(t.td,{children:`1024px`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`xl:`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`80rem`})}),(0,p.jsx)(t.td,{children:`1280px`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`2xl:`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`96rem`})}),(0,p.jsx)(t.td,{children:`1536px`})]})]})]}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(t.p,{children:`The box below reports the breakpoint currently in effect. Resize the
preview — or use Storybook's viewport toolbar — and it changes.`}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`they-are-min-width-and-that-has-a-direction`,children:`They are min-width, and that has a direction`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`md:flex`}),` means "flex at 768px `,(0,p.jsx)(t.strong,{children:`and above`}),`". There is no maximum, so
rules outside a media query are the small-screen case and every
`,(0,p.jsx)(t.code,{children:`@media (width >= …)`}),` is an override for larger screens. Write the phone
layout first and widen it; writing the desktop layout first means every
breakpoint has to undo something.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The other direction is expressible — `,(0,p.jsx)(t.code,{children:`@media (width < 48rem)`}),` caps a rule
below a breakpoint — but mixing both in one component is where responsive
CSS usually becomes unreadable. Pick min-width and stay there.`]}),`
`,(0,p.jsx)(t.h2,{id:`breakpoints-are-in-rem`,children:`Breakpoints are in rem`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`40rem`}),`, not `,(0,p.jsx)(t.code,{children:`640px`}),`. A reader who raises their browser's default font
size gets the layout to break earlier, because the layout responds to how
large the text actually is rather than to the device. That is the correct
behaviour and it is worth not overriding: a `,(0,p.jsx)(t.code,{children:`px`}),` breakpoint holds a
multi-column layout together long after its text has stopped fitting.`]}),`
`,(0,p.jsx)(t.p,{children:`The px column above is only true at the default 16px root.`}),`
`,(0,p.jsx)(t.h2,{id:`the-kit-has-no-opinion-yet`,children:`The kit has no opinion yet`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`No component here uses a breakpoint.`}),` Controls such as Button and Text
Input are inline-sized — they fill whatever their container gives them and have no
layout of their own to rearrange. The stories on this page are the only
responsive code in the repo.`]}),`
`,(0,p.jsxs)(t.p,{children:[`That is expected at this stage: breakpoints are a `,(0,p.jsx)(t.strong,{children:`layout`}),` concern, and
layout is the `,(0,p.jsx)(t.a,{href:`?path=/docs/patterns-overview--docs`,children:`Patterns`}),` tier, which
is empty. Marketing sections, dashboards and checkout flows are where
these will actually get used, and where the kit will need an opinion about
which of the five are load-bearing. Most design systems end up leaning on
two or three.`]}),`
`,(0,p.jsx)(t.h2,{id:`container-queries-are-usually-the-better-tool`,children:`Container queries are usually the better tool`}),`
`,(0,p.jsxs)(t.p,{children:[`A breakpoint asks how wide the `,(0,p.jsx)(t.em,{children:`viewport`}),` is. A component almost always
wants to know how wide `,(0,p.jsx)(t.strong,{children:`its own container`}),` is — the same card is narrow
in a sidebar and wide in a main column at one identical viewport width.`]}),`
`,(0,p.jsx)(t.p,{children:`Container queries are in every current browser, and they are plain CSS:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`.card {
  container-type: inline-size;
}

.cardBody {
  display: flex;
  flex-direction: column;
}

@container (width >= 28rem) {
  .cardBody {
    flex-direction: row;
  }
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[`When a component is built here that needs to reflow, it should reach for
`,(0,p.jsx)(t.code,{children:`@container`}),` first and a viewport breakpoint only when the thing being
arranged really is the page.`]}),`
`,(0,p.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,p.jsxs)(t.p,{children:[`Breakpoints are theme keys like any other, redefined in the `,(0,p.jsx)(t.code,{children:`@theme`}),`
block:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`@theme {
  --breakpoint-sm: 30rem;
  --breakpoint-3xl: 120rem;
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Two cautions. These generate utility `,(0,p.jsx)(t.em,{children:`variants`}),`, so they cannot be
overridden per-scope by `,(0,p.jsx)(t.code,{children:`Theme`}),` the way a color can — a variant is
compiled into a media query at build time, and there is no runtime
variable to swap. And removing a default breakpoint removes its prefix
entirely, so any existing `,(0,p.jsx)(t.code,{children:`lg:`}),` becomes a silent no-op rather than an
error.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),i(),s()})))()}m();export{f as default};