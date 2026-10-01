import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,n as a,s as o}from"./blocks-DfpLWjEg.js";import{n as s,r as c,t as l}from"./Icon.stories-D4q69GvD.js";function u(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`icons`,children:`Icons`}),`
`,(0,f.jsxs)(t.p,{children:[`One module, `,(0,f.jsx)(t.code,{children:`src/lib/icon.tsx`}),`, and one component: `,(0,f.jsx)(t.code,{children:`<Icon name="close" />`}),`.
Every component in the kit imports its icons from here and nowhere else.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h2,{id:`why-names-say-what-an-icon-is-for`,children:`Why names say what an icon is for`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`close`}),`, `,(0,f.jsx)(t.code,{children:`danger`}),`, `,(0,f.jsx)(t.code,{children:`success`}),` — not `,(0,f.jsx)(t.code,{children:`x`}),`, `,(0,f.jsx)(t.code,{children:`alert-circle`}),`, `,(0,f.jsx)(t.code,{children:`check-circle`}),`.
The set is temporary: it is Boxicons free for now, and will be replaced by
the kit's own set. Named by purpose, that swap is an edit to this one file.
Named by shape, it would be a search through every component for which
shape meant what. Navigation shapes (`,(0,f.jsx)(t.code,{children:`chevron-down`}),`, `,(0,f.jsx)(t.code,{children:`search`}),`, `,(0,f.jsx)(t.code,{children:`plus`}),`)
keep their plain names because the shape `,(0,f.jsx)(t.em,{children:`is`}),` the purpose.`]}),`
`,(0,f.jsx)(t.h2,{id:`sizing-and-colour`,children:`Sizing and colour`}),`
`,(0,f.jsxs)(t.p,{children:[`The icon is a `,(0,f.jsx)(t.code,{children:`1em`}),` square filled with `,(0,f.jsx)(t.code,{children:`currentColor`}),`, so it takes both
from the text around it. Set `,(0,f.jsx)(t.code,{children:`font-size`}),` on a wrapper, or on the icon
itself, to size it; never pass a colour.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<span style={{ fontSize: 20 }}><Icon name="warning" /></span>
`})}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`Without `,(0,f.jsx)(t.code,{children:`label`}),` an icon is decorative: `,(0,f.jsx)(t.code,{children:`aria-hidden`}),`, and not focusable
in old Edge. This is almost always right, because the icon sits next to
words that already say the same thing.`]}),`
`,(0,f.jsxs)(t.li,{children:[`With `,(0,f.jsx)(t.code,{children:`label`}),` it is exposed as an image with that name. Use it only when
the icon stands alone and carries meaning, e.g. a status with no text.`]}),`
`,(0,f.jsxs)(t.li,{children:[`An icon-only `,(0,f.jsx)(t.em,{children:`button`}),` is named on the button (`,(0,f.jsx)(t.code,{children:`aria-label`}),`), not on
the icon.`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`source-and-licence`,children:`Source and licence`}),`
`,(0,f.jsxs)(t.p,{children:[`Path data is copied from Boxicons free (`,(0,f.jsx)(t.code,{children:`@boxicons/core`}),` 1.0.6, basic and
filled sets), MIT. The licence text is in the file header, so it travels
with the file when the registry copies it into another project. There is
no npm dependency on Boxicons.`]}),`
`,(0,f.jsxs)(t.p,{children:[`To add an icon: copy its `,(0,f.jsx)(t.code,{children:`d`}),` attribute(s) into the `,(0,f.jsx)(t.code,{children:`paths`}),` map under a
purpose name, and add the name to the catalog story.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};