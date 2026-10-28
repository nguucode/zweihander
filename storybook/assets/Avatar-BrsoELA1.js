import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{n as S,r as C,t as w}from"./Avatar-Br9NGvV-.js";import{a as T,c as E,d as D,f as O,i as k,l as A,m as j,n as M,o as N,p as P,r as F,s as I,t as L,u as R}from"./Avatar.stories-C1x4L2wL.js";function z(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(i,{of:M}),`
`,(0,V.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,V.jsxs)(u,{children:[(0,V.jsxs)(_,{value:`overview`,children:[(0,V.jsx)(t.p,{children:`A picture of a person or account, with initials or a silhouette when there
is no picture, an optional presence dot, and a group that overlaps several.`}),(0,V.jsx)(x,{of:M}),(0,V.jsx)(s,{of:I}),(0,V.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,V.jsxs)(t.p,{children:[`Neutral by default. `,(0,V.jsx)(t.code,{children:`color`}),` picks any accent hue, and `,(0,V.jsx)(t.code,{children:`variant`}),` how strong
it is. Behind a photo the colour only shows while it loads or where the
image is transparent.`]}),(0,V.jsx)(s,{of:k}),(0,V.jsxs)(t.table,{children:[(0,V.jsx)(t.thead,{children:(0,V.jsxs)(t.tr,{children:[(0,V.jsx)(t.th,{children:`Variant`}),(0,V.jsx)(t.th,{children:`Use for`})]})}),(0,V.jsxs)(t.tbody,{children:[(0,V.jsxs)(t.tr,{children:[(0,V.jsxs)(t.td,{children:[(0,V.jsx)(w,{initials:`SR`}),` `,(0,V.jsx)(t.code,{children:`subtle`})]}),(0,V.jsx)(t.td,{children:`Most places: lists, comments, a byline. A tint that sits quietly next to text.`})]}),(0,V.jsxs)(t.tr,{children:[(0,V.jsxs)(t.td,{children:[(0,V.jsx)(w,{initials:`SR`,variant:`solid`}),` `,(0,V.jsx)(t.code,{children:`solid`})]}),(0,V.jsx)(t.td,{children:`Where the avatar has to stand out on its own: a header, an account menu trigger.`})]})]})]}),(0,V.jsx)(t.p,{children:`Colour tells people apart in a list; it carries no meaning. Pick it from the
person (a hash of their id), never from a status.`}),(0,V.jsx)(s,{of:R}),(0,V.jsx)(t.h3,{id:`status`,children:`Status`}),(0,V.jsxs)(t.p,{children:[(0,V.jsx)(t.code,{children:`status`}),` puts a presence dot on the bottom-end corner, in Badge's presence
colours: online, away, busy, offline.`]}),(0,V.jsx)(s,{of:D}),(0,V.jsx)(t.h3,{id:`group`,children:`Group`}),(0,V.jsxs)(t.p,{children:[(0,V.jsx)(t.code,{children:`AvatarGroup`}),` overlaps a row of avatars, for the people on a record or a
thread. `,(0,V.jsx)(t.code,{children:`max`}),` is the most circles in the row, the "+n" included.`]}),(0,V.jsx)(s,{of:E}),(0,V.jsxs)(t.p,{children:[`With `,(0,V.jsx)(t.code,{children:`hasTooltips`}),`, each named avatar shows its name on hover, and the
"+n" lists the people it stands for, on hover or keyboard focus:`]}),(0,V.jsx)(s,{of:A}),(0,V.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,V.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,V.jsx)(t.pre,{children:(0,V.jsx)(t.code,{className:`language-js`,children:`import { Avatar, AvatarGroup } from 'zweihander/avatar'
`})}),(0,V.jsx)(t.pre,{children:(0,V.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/avatar.json
`})}),(0,V.jsxs)(t.ul,{children:[`
`,(0,V.jsxs)(t.li,{children:[`Source: `,(0,V.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/atomic-elements/Avatar.tsx`,rel:`nofollow`,children:`src/components/atomic-elements/Avatar.tsx`})]}),`
`,(0,V.jsxs)(t.li,{children:[`Spec: `,(0,V.jsx)(t.a,{href:`https://www.uiguideline.com/components/avatar`,rel:`nofollow`,children:`uiguideline.com/components/avatar`})]}),`
`,(0,V.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,V.jsxs)(_,{value:`specs`,children:[(0,V.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,V.jsx)(y,{parts:O,children:(0,V.jsx)(a,{of:L})}),(0,V.jsx)(t.p,{children:`One avatar shows one of image, initials or silhouette, in that order of
preference. A broken image falls back to the next. The status dot and the
group are optional.`}),(0,V.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,V.jsx)(t.p,{children:`The circle ignores the Theme's radius preset: a circle is the shape, not a
corner setting.`}),(0,V.jsx)(g,{caption:`xs`,rows:[{part:`Container`,property:`Size`,token:`--avatar-xs`},{part:`Initials`,property:`Font size`,token:`--text-body-sm`}]}),(0,V.jsx)(g,{caption:`sm`,rows:[{part:`Container`,property:`Size`,token:`--avatar-sm`},{part:`Initials`,property:`Font size`,token:`--text-body-sm`}]}),(0,V.jsx)(g,{caption:`md`,rows:[{part:`Container`,property:`Size`,token:`--avatar-md`},{part:`Initials`,property:`Font size`,token:`--text-body`}]}),(0,V.jsx)(g,{caption:`lg`,rows:[{part:`Container`,property:`Size`,token:`--avatar-lg`},{part:`Initials`,property:`Font size`,token:`--text-body-lg`}]}),(0,V.jsx)(g,{caption:`Every size`,rows:[{part:`Container`,property:`Corner radius`,token:`--radius-pill`}]}),(0,V.jsx)(t.p,{children:`The image and the silhouette fill the circle edge to edge.`}),(0,V.jsxs)(t.p,{children:[`The status dot is a Badge dot: `,(0,V.jsx)(t.code,{children:`sm`}),` on the xs and sm avatars, `,(0,V.jsx)(t.code,{children:`md`}),` on md and
lg. It sits on the corner of the avatar's box, outside the curve.`]}),(0,V.jsx)(g,{caption:`Status dot and group`,rows:[{part:`Status dot`,property:`Ring`,token:`--background`},{part:`Group`,property:`Ring around each avatar`,token:`--background`},{part:`Group`,property:`Overlap: a quarter of the size, md shown`,token:`--avatar-md`}]}),(0,V.jsx)(t.p,{children:`The ring is 2px, as on a floating Badge.`}),(0,V.jsx)(t.h2,{id:`color`,children:`Color`}),(0,V.jsxs)(t.p,{children:[(0,V.jsx)(t.code,{children:`color`}),` sets the Theme's own `,(0,V.jsx)(t.code,{children:`data-accent`}),` on the avatar, so a hue avatar
reads the accent tokens of that hue: switch the accent in the toolbar to see
the values for another one.`]}),(0,V.jsx)(g,{caption:`subtle, neutral`,rows:[{part:`Container`,property:`Background`,token:`--secondary`},{part:`Initials`,property:`Colour`,token:`--secondary-foreground`},{part:`Silhouette`,property:`Colour`,token:`--muted-foreground`}]}),(0,V.jsx)(g,{caption:`subtle, with a hue`,rows:[{part:`Container`,property:`Background`,token:`--primary-subtle`},{part:`Initials and silhouette`,property:`Colour`,token:`--primary-subtle-text`}]}),(0,V.jsx)(g,{caption:`solid, neutral`,rows:[{part:`Container`,property:`Background`,token:`--neutral-solid`},{part:`Initials and silhouette`,property:`Colour`,token:`--neutral-solid-foreground`}]}),(0,V.jsx)(g,{caption:`solid, with a hue`,rows:[{part:`Container`,property:`Background`,token:`--primary`},{part:`Initials`,property:`Colour`,token:`--primary-foreground`},{part:`Silhouette`,property:`Colour`,token:`--neutral-solid-foreground`}]}),(0,V.jsxs)(t.p,{children:[`On `,(0,V.jsx)(t.code,{children:`solid`}),` the silhouette is always white, one look across hues; see
Accessibility for what that costs.`]}),(0,V.jsxs)(t.p,{children:[`The status dot takes Badge's presence colours: online `,(0,V.jsx)(t.code,{children:`success`}),`, away
`,(0,V.jsx)(t.code,{children:`warning`}),`, busy `,(0,V.jsx)(t.code,{children:`destructive`}),`, offline `,(0,V.jsx)(t.code,{children:`secondary`}),`. The "+n" in a group is a
neutral subtle avatar.`]}),(0,V.jsx)(t.h2,{id:`states`,children:`States`}),(0,V.jsx)(t.p,{children:`An avatar is not interactive: no hover, focus or pressed. Its states are
which part it can show.`}),(0,V.jsx)(v,{states:[{label:`Image`,content:(0,V.jsx)(w,{size:`lg`,imageSrc:j.args.imageSrc,imageAlt:`Mary Thompson`})},{label:`Initials`,content:(0,V.jsx)(w,{size:`lg`,initials:`SR`,imageAlt:`Sam Rivera`})},{label:`Silhouette`,content:(0,V.jsx)(w,{size:`lg`,imageAlt:`Unknown user`})},{label:`Broken image`,content:(0,V.jsx)(a,{of:F})},{label:`Online`,content:(0,V.jsx)(w,{size:`lg`,initials:`SR`,imageAlt:`Sam Rivera`,status:`online`})},{label:`Offline`,content:(0,V.jsx)(w,{size:`lg`,initials:`SR`,imageAlt:`Sam Rivera`,status:`offline`})}]}),(0,V.jsxs)(t.ul,{children:[`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`Image`}),` shows while `,(0,V.jsx)(t.code,{children:`imageSrc`}),` loads and after.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`Broken image`}),` drops the `,(0,V.jsx)(t.code,{children:`<img>`}),` and shows the initials, or the
silhouette when there are none, instead of the browser's broken-image
icon. A new `,(0,V.jsx)(t.code,{children:`imageSrc`}),` is tried again. An empty `,(0,V.jsx)(t.code,{children:`imageSrc`}),` is no image.`]}),`
`]}),(0,V.jsx)(t.h2,{id:`api`,children:`API`}),(0,V.jsx)(`div`,{style:{overflowX:`auto`},children:(0,V.jsx)(o,{of:M})}),(0,V.jsxs)(t.p,{children:[`Every other `,(0,V.jsx)(t.code,{children:`<span>`}),` attribute passes through to the container, including
`,(0,V.jsx)(t.code,{children:`ref`}),`.`]}),(0,V.jsx)(t.h3,{id:`avatargroup`,children:`AvatarGroup`}),(0,V.jsx)(`div`,{style:{overflowX:`auto`},children:(0,V.jsx)(o,{of:S})}),(0,V.jsxs)(t.p,{children:[`Every other `,(0,V.jsx)(t.code,{children:`<span>`}),` attribute passes through to the row.`]}),(0,V.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,V.jsxs)(t.ul,{children:[`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsxs)(t.strong,{children:[(0,V.jsx)(t.code,{children:`initials`}),` is added.`]}),` The spec's Anatomy has an Initials part but
its prop list has no way to set them. Pass the letters, not a name:
how to abbreviate a name depends on the language, and the kit should
not guess.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`A broken image falls back`}),` to initials or the silhouette instead
of showing the browser's broken-image icon.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsxs)(t.strong,{children:[`No square, no `,(0,V.jsx)(t.code,{children:`appearance`}),`.`]}),` Always a circle, so a person never
reads as a product or workspace logo.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`The placeholder is a silhouette`}),`, not the outline `,(0,V.jsx)(t.code,{children:`user`}),` icon: it
fills the circle edge to edge and takes `,(0,V.jsx)(t.code,{children:`color`}),` and `,(0,V.jsx)(t.code,{children:`variant`}),` like
initials do.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsxs)(t.strong,{children:[(0,V.jsx)(t.code,{children:`color`}),` and `,(0,V.jsx)(t.code,{children:`variant`}),` are added`]}),`, to tell people apart in a list.`]}),`
`,(0,V.jsx)(t.li,{children:(0,V.jsx)(t.strong,{children:`The circle ignores the radius preset.`})}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsxs)(t.strong,{children:[(0,V.jsx)(t.code,{children:`status`}),` and `,(0,V.jsx)(t.code,{children:`AvatarGroup`}),` are added.`]}),` The status words and the
"+n" name are English by default; `,(0,V.jsx)(t.code,{children:`statusLabel`}),` and `,(0,V.jsx)(t.code,{children:`moreLabel`}),` translate
them.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsxs)(t.strong,{children:[(0,V.jsx)(t.code,{children:`max`}),` counts the "+n".`]}),` The row never grows past `,(0,V.jsx)(t.code,{children:`max`}),` circles, and
the "+n" always stands for two or more: never "+1" where the person
would have fitted.`]}),`
`]})]}),(0,V.jsxs)(_,{value:`guidelines`,children:[(0,V.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,V.jsxs)(t.p,{children:[`Use an Avatar to show who: the author of a comment, the people on a
project, the account that is signed in. Give it `,(0,V.jsx)(t.code,{children:`imageAlt`}),` when the avatar
is the only thing that says who it is. When the name is printed next to
it, leave `,(0,V.jsx)(t.code,{children:`imageAlt`}),` out: the avatar is decorative, and the name is read
once.`]}),(0,V.jsx)(l,{do:(0,V.jsx)(a,{of:T}),doCaption:`The name is printed, so the avatar has no imageAlt. A screen reader hears “Mary Thompson” once.`,dont:(0,V.jsx)(a,{of:N}),dontCaption:`imageAlt repeats the printed name: “Mary Thompson, image, Mary Thompson”.`}),(0,V.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,V.jsxs)(t.ul,{children:[`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`For a product, team or workspace logo.`}),` An Avatar is always round, so
it reads as a person. Use an image with its own shape.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`For status through colour.`}),` The avatar's `,(0,V.jsx)(t.code,{children:`color`}),` means nothing. Use
`,(0,V.jsx)(t.code,{children:`status`}),` for presence, and print the status where people act on it (an
assignee picker): a dot is a glance, not the only cue.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`For a long list of people.`}),` A group shows who at a glance; past a
handful, show the count or a list of names instead.`]}),`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.strong,{children:`For an icon in a circle.`}),` Use the icon itself, or an icon-only
`,(0,V.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),` when it acts.`]}),`
`]}),(0,V.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,V.jsxs)(t.ul,{children:[`
`,(0,V.jsxs)(t.li,{children:[(0,V.jsx)(t.code,{children:`imageAlt`}),` names the `,(0,V.jsx)(t.strong,{children:`whole avatar`}),` (`,(0,V.jsx)(t.code,{children:`role="img"`}),`), not just the
image, so the image, the initials and the silhouette all announce the
same person. The inner `,(0,V.jsx)(t.code,{children:`<img>`}),` has `,(0,V.jsx)(t.code,{children:`alt=""`}),`.`]}),`
`,(0,V.jsxs)(t.li,{children:[`Without `,(0,V.jsx)(t.code,{children:`imageAlt`}),` the avatar is `,(0,V.jsx)(t.strong,{children:`decorative`}),` and hidden
(`,(0,V.jsx)(t.code,{children:`aria-hidden`}),`), its status dot with it.`]}),`
`,(0,V.jsxs)(t.li,{children:[`With `,(0,V.jsx)(t.code,{children:`status`}),`, the status `,(0,V.jsx)(t.strong,{children:`joins the name`}),`: "Mary Thompson, Online".
The dot itself is not read.`]}),`
`,(0,V.jsx)(t.li,{children:`In a group, the "+n" is named "3 more" when the avatars are named, and
decorative when they are not.`}),`
`,(0,V.jsxs)(t.li,{children:[`With `,(0,V.jsx)(t.code,{children:`hasTooltips`}),`, the "+n" is the one avatar that takes focus, with
the focus ring, and its tooltip of hidden names is its description. The
other avatars' tooltips open on hover only: their names are already
their accessible names.`]}),`
`,(0,V.jsxs)(t.li,{children:[`Initials are never read out: with `,(0,V.jsx)(t.code,{children:`imageAlt`}),` the avatar's name replaces
them, without it the avatar is hidden. They are uppercased with CSS, so
the text keeps the letters as passed.`]}),`
`,(0,V.jsxs)(t.li,{children:[`Initials meet 4.5:1 in every colour and variant, on every gray ramp in
both modes, measured by the `,(0,V.jsx)(t.code,{children:`Contrast`}),` story. Neutral solid is gray 600
under gray 50, 6.5:1 or more.`]}),`
`,(0,V.jsxs)(t.li,{children:[`On `,(0,V.jsx)(t.code,{children:`subtle`}),` the silhouette uses the initials colour (neutral uses
`,(0,V.jsx)(t.code,{children:`--muted-foreground`}),`), past the 3:1 a graphic needs.`]}),`
`,(0,V.jsxs)(t.li,{children:[`On `,(0,V.jsx)(t.code,{children:`solid`}),` the silhouette is `,(0,V.jsx)(t.strong,{children:`always white`}),`, by choice. In light mode
that is under 3:1 on the warm hues (orange to lime); in dark mode, where
the fill is the lighter 400 step, on most hues. It is accepted because
the silhouette carries no information: the name is in `,(0,V.jsx)(t.code,{children:`imageAlt`}),` or
printed beside the avatar.`]}),`
`]})]})]})]})}function B(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,V.jsx)(t,{...e,children:(0,V.jsx)(z,{...e})}):z(e)}var V;function H(){return(H=e((()=>{V=t(),r(),c(),d(),p(),h(),f(),m(),b(),C(),P()})))()}H();export{B as default};