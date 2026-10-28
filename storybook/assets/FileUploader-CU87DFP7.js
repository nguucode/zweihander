import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./FileUploader.stories-DrGeJ6rT.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[`
`,`
`,(0,F.jsx)(i,{of:O}),`
`,(0,F.jsx)(t.h1,{id:`file-uploader`,children:`File Uploader`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`Choose files to send: drag them onto the drop zone or pick them with the
button. It checks type, size and count, lists what was chosen, and shows
progress or an error per file. It does not upload: your code does, and
tells it how that is going.`}),(0,F.jsx)(x,{of:O}),(0,F.jsx)(s,{of:E}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Mode`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`multiple`})}),(0,F.jsxs)(t.td,{children:[`Attachments, a batch of photos: files are appended, up to `,(0,F.jsx)(t.code,{children:`maxFiles`}),`.`]})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:`Single`}),(0,F.jsx)(t.td,{children:`One document: an invoice, a CV. A new file replaces the chosen one, if it passes the checks.`})]})]})]}),(0,F.jsx)(s,{of:C}),(0,F.jsx)(t.p,{children:`Each file gets a type icon: a page with a coloured badge for Word, Excel,
PowerPoint, PDF, image and audio, after Microsoft 365, from the extension
or MIME type. Anything else is the bare page.`}),(0,F.jsx)(s,{of:S}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { FileUploader } from 'zweihander/file-uploader'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/file-uploader.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/FileUploader.tsx`,rel:`nofollow`,children:`src/components/inputs/FileUploader.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/file-uploader`,rel:`nofollow`,children:`uiguideline.com/components/file-uploader`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: a native `,(0,F.jsx)(t.code,{children:`<input type="file">`}),` behind a kit `,(0,F.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`})]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:M,children:(0,F.jsx)(a,{of:j})}),(0,F.jsx)(t.p,{children:`Two more parts show only when needed:`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Errors`}),`: one line per file that was not added, under the drop zone,
e.g. "raw-scan.png is larger than 5 MB."`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`File error`}),`: in place of the progress ring, a short message from
`,(0,F.jsx)(t.code,{children:`getFileStatus`}),`, e.g. "Upload failed". A long one truncates.`]}),`
`]}),(0,F.jsx)(s,{of:A}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsxs)(t.p,{children:[`One size. The buttons inside are `,(0,F.jsx)(t.code,{children:`sm`}),` Buttons, 24px tall.`]}),(0,F.jsx)(g,{caption:`Drop zone`,rows:[{part:`Drop zone`,property:`Block padding`,token:`--space-container`},{part:`Drop zone`,property:`Inline padding`,token:`--space-group`},{part:`Drop zone`,property:`Gap`,token:`--space-inline`},{part:`Drop zone`,property:`Corner radius`,token:`--radius-panel`},{part:`Icon`,property:`Size`,token:`--space-6`},{part:`Icon`,property:`Padding`,token:`--space-inline`},{part:`Choose button`,property:`Height`,token:`--control-sm`},{part:`Prompt`,property:`Font size`,token:`--text-body`},{part:`Helper text`,property:`Font size`,token:`--text-body-sm`}]}),(0,F.jsx)(g,{caption:`File list`,rows:[{part:`Label, drop zone, errors, list`,property:`Gap`,token:`--control-sm-gap`},{part:`File row`,property:`Padding`,token:`--space-stack`},{part:`File row`,property:`Gap`,token:`--space-inline`},{part:`File row`,property:`Corner radius`,token:`--radius-field`},{part:`Name`,property:`Font size`,token:`--text-body`},{part:`Size, file error`,property:`Font size`,token:`--text-body-sm`},{part:`Remove button`,property:`Size`,token:`--control-sm`},{part:`Remove button`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,F.jsxs)(t.p,{children:[`The uploader is 24rem wide unless `,(0,F.jsx)(t.code,{children:`isFullWidth`}),`. The type icon is 20px.`]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(g,{caption:`Drop zone`,rows:[{part:`Drop zone`,property:`Background`,token:`--surface-filled`},{part:`Drop zone`,property:`Border, dashed`,token:`--field-border`},{part:`Drop zone, dragging`,property:`Border, solid`,token:`--ring`},{part:`Drop zone, dragging`,property:`Background`,token:`--accent`},{part:`Drop zone, errors`,property:`Border`,token:`--danger-text`},{part:`Icon`,property:`Background`,token:`--background`},{part:`Icon, prompt, helper`,property:`Colour`,token:`--muted-foreground`},{part:`Choose button`,property:`Background`,token:`--foreground`},{part:`Choose button`,property:`Label`,token:`--background`},{part:`Label`,property:`Colour`,token:`--foreground`},{part:`Required asterisk, errors`,property:`Colour`,token:`--danger-text`}]}),(0,F.jsx)(g,{caption:`File list`,rows:[{part:`File row, hover`,property:`Background`,token:`--hover-overlay`},{part:`Name`,property:`Colour`,token:`--foreground`},{part:`Size`,property:`Colour`,token:`--muted-foreground`},{part:`Progress ring`,property:`Colour`,token:`--primary-text`},{part:`File error`,property:`Colour`,token:`--danger-text`}]}),(0,F.jsxs)(t.p,{children:[`The type badges keep fixed colours in both modes: they are each file
type's identity, not the theme's, and white on each is above 4.5:1. The
Choose button is an `,(0,F.jsx)(t.code,{children:`accent contained`}),` Button and the remove buttons
`,(0,F.jsx)(t.code,{children:`secondary ghost`}),`; their states are Button's.`]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus-visible`},{label:`Uploading`,content:(0,F.jsx)(I,{children:(0,F.jsx)(a,{of:j})})},{label:`Disabled`,content:(0,F.jsx)(I,{children:(0,F.jsx)(a,{of:D})})}],children:(0,F.jsx)(I,{children:(0,F.jsx)(a,{of:k})})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Dragging`}),`: while a file is over the drop zone its edge turns solid
`,(0,F.jsx)(t.code,{children:`--ring`}),` and it fills with `,(0,F.jsx)(t.code,{children:`--accent`}),`, so the change is not colour
alone.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Rejected or required and empty`}),`: the drop zone's edge turns
`,(0,F.jsx)(t.code,{children:`--danger-text`}),` and the errors list why, one line per file.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` is the Choose button's and the remove buttons' own ring.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Uploading`}),`: a progress ring beside the remove button while
`,(0,F.jsx)(t.code,{children:`progress`}),` is under 100; it goes at 100. An `,(0,F.jsx)(t.code,{children:`error`}),` takes its place.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Disabled`}),` fades the icon and the buttons, not the text: none of it
is a native label, so faded text would fail contrast rather than be
exempt.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:O})}),(0,F.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Checks on every path in.`}),` The system picker filters by `,(0,F.jsx)(t.code,{children:`accept`}),`, but
a drop, or "All files" in the picker, does not. The uploader checks the
type, size and count of everything and says why a file was left out.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`A rejected file never replaces a good one.`}),` In single-file mode a
new file replaces the chosen one only if it passes the checks.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`The same file twice is one file.`}),` Name, size and modified time
match, so it is skipped rather than listed again.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Uploading is yours.`}),` Start it in `,(0,F.jsx)(t.code,{children:`onFilesChange`}),` and report through
`,(0,F.jsx)(t.code,{children:`getFileStatus`}),`.`]}),`
`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsxs)(t.p,{children:[`Use a File Uploader to attach files to a form: receipts to a claim,
documents to an application. Say what is allowed in `,(0,F.jsx)(t.code,{children:`helperText`}),`, and set
`,(0,F.jsx)(t.code,{children:`accept`}),`, `,(0,F.jsx)(t.code,{children:`maxSize`}),` and `,(0,F.jsx)(t.code,{children:`maxFiles`}),` to match, so the rules are read before
a file is turned away.`]}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:k}),doCaption:`The rules up front: types and size in the helper text, checked by accept and maxSize.`,dont:(0,F.jsx)(a,{of:T}),dontCaption:`No rules shown: people learn them one rejection at a time.`}),(0,F.jsxs)(t.p,{children:[`Report upload progress per file with `,(0,F.jsx)(t.code,{children:`getFileStatus`}),`, and keep errors
short ("Upload failed"): the row has room for a few words.`]}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For text people could paste.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-textarea--docs`,children:`Textarea`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a link to a file.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` with
`,(0,F.jsx)(t.code,{children:`type="url"`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsx)(t.li,{children:`Dragging is a shortcut, never the only way: the Choose button is a
real button, reached by Tab, and opens the system picker. The file
input itself is hidden from assistive tech so there is one control, not
two.`}),`
`,(0,F.jsxs)(t.li,{children:[`The uploader is a `,(0,F.jsx)(t.code,{children:`group`}),` named by its label; `,(0,F.jsx)(t.code,{children:`required`}),` adds
"(required)" to that name, since a group cannot be `,(0,F.jsx)(t.code,{children:`aria-required`}),`.
Submitting it empty shows "Choose at least one file." (or "Choose a
file.") in the errors and moves focus to the Choose button, instead of
the browser's bubble on the hidden input.`]}),`
`,(0,F.jsx)(t.li,{children:`The helper text and any errors describe the Choose button, so they
are read when focus lands on it.`}),`
`,(0,F.jsx)(t.li,{children:`A polite status line announces "2 files added. 1 not added." and
"report.pdf removed."`}),`
`,(0,F.jsx)(t.li,{children:`Remove buttons are named "Remove report.pdf". After a remove, focus
moves to the next file's button, or back to Choose when the list is
empty, so it is never lost.`}),`
`,(0,F.jsxs)(t.li,{children:[`The progress ring is a `,(0,F.jsx)(t.code,{children:`progressbar`}),` named "Uploading report.pdf",
with its value.`]}),`
`,(0,F.jsx)(t.li,{children:`While dragging, the drop zone's edge turns solid as well as changing
colour.`}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F,I;function L(){return(L=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),w(),I=({children:e})=>(0,F.jsxs)(`div`,{className:`zw-fit`,style:{inlineSize:`100%`,minInlineSize:0},children:[(0,F.jsx)(`style`,{children:`.zw-fit input { inline-size: 0 }`}),e]})})))()}L();export{I as Fit,P as default};