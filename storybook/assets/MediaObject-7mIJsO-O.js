import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./MediaObject.stories-DhMtw-rU.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(t.h1,{id:`media-object`,children:`Media Object`}),`
`,(0,b.jsx)(t.p,{children:`Media beside a block of text: an avatar by a comment, an icon by a
setting, a thumbnail by a product. After Tailwind UI Application UI,
Layout: Media Objects.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/media-object.json
`})}),`
`,(0,b.jsxs)(t.p,{children:[`Use it for one thing on its own. A list of records is a `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-stacked-list--docs`,children:`Stacked
List`}),` or a `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-grid-list--docs`,children:`Grid
List`}),`; a history of
events is a `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-feed--docs`,children:`Feed`}),`; the top
row of a card is a `,(0,b.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-card-heading--docs`,children:`Card
Heading`}),`. Those
lay out their own media because each treats it differently (a filled
circle, a timeline, a heading-sized row). A framed block with a picture on
the side is a `,(0,b.jsx)(t.a,{href:`?path=/docs/data-display-card--docs`,children:`Card`}),` with
`,(0,b.jsx)(t.code,{children:`orientation="horizontal"`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`basic`,children:`Basic`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`media`}),`, then `,(0,b.jsx)(t.code,{children:`title`}),` and `,(0,b.jsx)(t.code,{children:`description`}),`. The title is bold text, so a
column of comments does not fill the page outline with headings.`]}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`as-a-heading`,children:`As a heading`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`headingLevel`}),` makes the title a heading, for a media object that starts a
section.`]}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`alignment`,children:`Alignment`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`align`}),` places the media at the top (the default), the middle or the
bottom of the text, or stretches it to the text's height.`]}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`media-at-the-end`,children:`Media at the end`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`mediaPosition="end"`}),` draws the media after the text. The DOM order does
not change.`]}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsx)(t.h2,{id:`nested`,children:`Nested`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`children`}),` comes after the description: actions, or a reply as another
Media Object, which lines up with the parent's text.`]}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsxs)(t.p,{children:[`Every other `,(0,b.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,b.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`No breakpoint.`}),` Media and text share a row while the text keeps
12rem; in a narrower container the text wraps under the media. It
follows the container, so it works in an aside as on a full page.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Long words break anywhere`}),` rather than overflow.`]}),`
`]}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,b.jsx)(t.p,{children:`Tailwind UI's Media Objects, and where this departs from them:`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Responsive stacking follows the container, not the viewport.`}),` The
text wraps under the media only when it would get less than 12rem, so
an avatar stays beside its text on a phone. Tailwind's "basic
responsive" and "wide responsive" stack below the `,(0,b.jsx)(t.code,{children:`sm`}),` breakpoint, and
the wide one swaps a large image's size; neither is a separate variant
here.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Stretch suits a thumbnail or a placeholder`}),` with no fixed height. An
Avatar or an `,(0,b.jsx)(t.code,{children:`<img>`}),` with a height keeps it.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The media is always decorative`}),`, and `,(0,b.jsx)(t.code,{children:`headingLevel`}),` is opt-in;
Tailwind uses an `,(0,b.jsx)(t.code,{children:`h4`}),` every time.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`The media is decorative and hidden from assistive tech: the title says
who or what it is. Do not put a link or a button in `,(0,b.jsx)(t.code,{children:`media`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[`The title is a paragraph unless `,(0,b.jsx)(t.code,{children:`headingLevel`}),` is set. Set it only when
the object starts a section, and pick the level that follows the
heading above, so the outline has no gaps.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.code,{children:`mediaPosition="end"`}),` moves the media visually only (CSS `,(0,b.jsx)(t.code,{children:`order`}),`); reading and focus
order stay media, title, description, then `,(0,b.jsx)(t.code,{children:`children`}),`.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),s(),_()})))()}x();export{y as default};