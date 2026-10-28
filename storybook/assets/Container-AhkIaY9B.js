import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Container.stories-DD8r_7AC.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`container`,children:`Container`}),`
`,(0,g.jsx)(t.p,{children:`Caps a page's content at a maximum width and centres it in the space it
is given. After Tailwind UI Application UI, Layout: Containers.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/container.json
`})}),`
`,(0,g.jsxs)(t.p,{children:[`Container only sets a width. Inside an `,(0,g.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App
Shell`}),`, `,(0,g.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-app-content--docs`,children:`App
Content`}),` owns the
page: its padding, its scroll and the aside column. Put a Container inside
it when a page should not stretch across a wide screen, a settings page or
a form; leave it out for a table that uses every column.`]}),`
`,(0,g.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`size`}),` is the widest the content gets: `,(0,g.jsx)(t.code,{children:`sm`}),` 48rem for a form or a settings
page, `,(0,g.jsx)(t.code,{children:`md`}),` (the default) 64rem for most pages, `,(0,g.jsx)(t.code,{children:`lg`}),` 80rem for a wide table
or a dashboard.`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`padded`,children:`Padded`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`padded`}),` adds side padding by breakpoint, for a page outside the App
Shell, such as a sign-in page or a public page: `,(0,g.jsx)(t.code,{children:`--space-container`}),`, and
`,(0,g.jsx)(t.code,{children:`--space-section`}),` from a 64rem viewport: App Content's tokens and step,
measured against the viewport instead of the shell, on the sides only.
The cap measures the content, so a padded and an unpadded Container of one
size give the same line length.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`in-an-app-shell`,children:`In an App Shell`}),`
`,(0,g.jsxs)(t.p,{children:[`No `,(0,g.jsx)(t.code,{children:`padded`}),`: App Content already pads the page, and the Container centres
the content in it. With an aside, it centres in the page column.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsxs)(t.p,{children:[`Every other `,(0,g.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Full width up to the cap.`}),` It fills its parent, block, grid or flex,
until it reaches its size, then centres with equal space on each side.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Narrower than its size,`}),` it takes the width it is given and never
overflows.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Padding follows the viewport,`}),` not a container query: outside the
App Shell no ancestor is a size container to query.`]}),`
`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,g.jsx)(t.p,{children:`Tailwind UI's Containers, and where this departs from them:`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[`Three steps, not every `,(0,g.jsx)(t.code,{children:`max-w-*`}),`.`]}),` `,(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`}),` and `,(0,g.jsx)(t.code,{children:`lg`}),` follow
Tailwind's `,(0,g.jsx)(t.code,{children:`max-w-3xl`}),`, `,(0,g.jsx)(t.code,{children:`5xl`}),` and `,(0,g.jsx)(t.code,{children:`7xl`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Padding is opt-in and uses the kit's spacing tokens.`}),` Tailwind pads
every container (`,(0,g.jsx)(t.code,{children:`px-4 sm:px-6 lg:px-8`}),`); here App Content pads the page
in the shell, so padding twice would be wrong. One step at 64rem, as in
App Content, instead of Tailwind's two.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`No "full width on mobile" variant.`}),` Under its size a Container is
already full width; a flush, unpadded page on a phone is App Content's
job.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`A plain `,(0,g.jsx)(t.code,{children:`div`}),`: no landmark, no role and no focus. The landmark is the
`,(0,g.jsx)(t.code,{children:`main`}),` around it (App Content's, or your own outside the shell).`]}),`
`,(0,g.jsx)(t.li,{children:`It changes no order; content reads and tabs in DOM order.`}),`
`,(0,g.jsx)(t.li,{children:`At 320px it takes the full width and its content reflows; it adds no
horizontal scroll.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),s(),d()})))()}_();export{h as default};