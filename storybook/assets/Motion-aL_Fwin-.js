import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-C4DQin6J.js";import{n as s,r as c,t as l}from"./Motion.stories-CM87i_Ly.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`motion`,children:`Motion`}),`
`,(0,f.jsxs)(t.p,{children:[`Three transition durations and one spinner speed. Every `,(0,f.jsx)(t.code,{children:`transition`}),` in the
kit reads one of them; nothing types a number of milliseconds.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`choosing-a-step`,children:`Choosing a step`}),`
`,(0,f.jsxs)(t.p,{children:[`The step follows what moves, not how important it is. A popup appearing
is `,(0,f.jsx)(t.code,{children:`fast`}),`: it answers a click, and anything slower reads as lag. A colour
or state change is `,(0,f.jsx)(t.code,{children:`base`}),`. Something that travels across the screen (the
tab indicator, a toast, a drawer) is `,(0,f.jsx)(t.code,{children:`slow`}),`, because the eye has to follow
it. If a new transition does not fit one of the three, that is a reason to
question the transition before adding a fourth step.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Easing is the browser default (`,(0,f.jsx)(t.code,{children:`ease`}),`) except where something grows or
shrinks: Accordion and Collapse open with `,(0,f.jsx)(t.code,{children:`ease-out`}),`, so the panel arrives
fast and settles. There is no easing token: two curves, each with an
obvious owner, do not need a name yet.`]}),`
`,(0,f.jsx)(t.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,f.jsxs)(t.p,{children:[`Under `,(0,f.jsx)(t.code,{children:`prefers-reduced-motion: reduce`}),` the three transition steps resolve to
`,(0,f.jsx)(t.code,{children:`0ms`}),` in `,(0,f.jsx)(t.code,{children:`tokens.css`}),`, so every transition in the kit stops in one place
without each component repeating a media query.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Two things are exempt. Toast swaps its slide for a 200ms fade, written as
a number on purpose, since the tokens would turn the fade into a jump.
And spinners: a stopped spinner says nothing is happening, so instead of
stopping they slow from `,(0,f.jsx)(t.code,{children:`--duration-spin`}),` to `,(0,f.jsx)(t.code,{children:`--duration-spin-reduced`}),`.
Each spinner opts into that itself.`]}),`
`,(0,f.jsx)(t.p,{children:`Loop animations with their own rhythm (the skeleton pulse, the
indeterminate progress bar) keep their own timing: they are a single
animation each, not a step anyone else should reuse.`})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),o(),c()})))()}p();export{d as default};