import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./FileUploader.stories-CvLdDMdP.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:u}),`
`,(0,v.jsx)(t.h1,{id:`file-uploader`,children:`File Uploader`}),`
`,(0,v.jsxs)(t.p,{children:[`Choose files to send: drag them onto the drop zone or pick them with the
button. It checks type, size and count, lists what was chosen, and shows
progress or an error per file. It does not upload: your code does, and
tells it how that is going. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/file-uploader`,rel:`nofollow`,children:`uiguideline.com/components/file-uploader`}),`.
A native `,(0,v.jsx)(t.code,{children:`<input type="file">`}),` behind a kit Button.`]}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Label`})}),(0,v.jsx)(t.td,{children:`Names the whole uploader (a group).`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Drop zone`})}),(0,v.jsx)(t.td,{children:`A dashed area with an icon, "Drag files here or", the Choose button and the helper text. Solid-edged while a file is over it.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Choose button`})}),(0,v.jsxs)(t.td,{children:[`An `,(0,v.jsx)(t.code,{children:`accent contained`}),` button. Opens the system picker. The way in for keyboard, screen reader and touch.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Helper text`})}),(0,v.jsx)(t.td,{children:`Inside the drop zone, under the button: what is allowed, e.g. "PDF, PNG or JPG, up to 5 MB each."`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Errors`})}),(0,v.jsxs)(t.td,{children:[`One line per file that was not added, in `,(0,v.jsx)(t.code,{children:`--danger-text`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`File list`})}),(0,v.jsx)(t.td,{children:`Compact rows, no card per file: type icon, name and size on one line, and the remove button; beside it, a progress ring while uploading or a short error.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Type icon`})}),(0,v.jsx)(t.td,{children:`A page with a coloured badge, after Microsoft 365: Word, Excel, PowerPoint, PDF, image, audio, from the extension or MIME type. Anything else is the bare page.`})]})]})]}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`files`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`File[]`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Controlled.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`defaultFiles`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`File[]`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`[]`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onFilesChange`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(files) => void`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`After an add or a remove.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onReject`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(rejections) => void`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`{ file, reason: 'type' | 'size' | 'count', message }[]`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`accept`})}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[`As the native attribute: `,(0,v.jsx)(t.code,{children:`.pdf,image/*`}),`. Checked on drop too.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`multiple`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`One file is replaced by the next; many are appended.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`maxSize`})}),(0,v.jsx)(t.td,{children:`bytes`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`maxFiles`})}),(0,v.jsx)(t.td,{children:`number`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[`With `,(0,v.jsx)(t.code,{children:`multiple`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`getFileStatus`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(file) => { progress?, error? }`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Progress 0–100, or a short error, e.g. "Upload failed".`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`label`}),`, `,(0,v.jsx)(t.code,{children:`helperText`}),`, `,(0,v.jsx)(t.code,{children:`required`}),`, `,(0,v.jsx)(t.code,{children:`disabled`}),`, `,(0,v.jsx)(t.code,{children:`isFullWidth`})]}),(0,v.jsx)(t.td,{}),(0,v.jsx)(t.td,{}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`name`})}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[`The native input carries the whole list, so a plain form post sends it. It follows a controlled `,(0,v.jsx)(t.code,{children:`files`}),` too.`]})]})]})]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Checks on every path in.`}),` The system picker filters by `,(0,v.jsx)(t.code,{children:`accept`}),`, but
a drop, or "All files" in the picker, does not. The uploader checks the
type, size and count of everything and says why a file was left out.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`A rejected file never replaces a good one.`}),` In single-file mode a
new file replaces the chosen one only if it passes the checks.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`The same file twice is one file.`}),` Name, size and modified time
match, so it is skipped rather than listed again.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Uploading is yours.`}),` Start it in `,(0,v.jsx)(t.code,{children:`onFilesChange`}),` and report through
`,(0,v.jsx)(t.code,{children:`getFileStatus`}),`. A ring beside the remove button shows while `,(0,v.jsx)(t.code,{children:`progress`}),`
is under 100 and goes at 100. An `,(0,v.jsx)(t.code,{children:`error`}),` takes its place, so keep it short ("Upload failed"); a long one truncates.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Dragging is a shortcut, never the only way: the Choose button is a
real button, reached by Tab, and opens the system picker. The file
input itself is hidden from assistive tech so there is one control, not
two.`}),`
`,(0,v.jsxs)(t.li,{children:[`The uploader is a `,(0,v.jsx)(t.code,{children:`group`}),` named by its label; `,(0,v.jsx)(t.code,{children:`required`}),` adds
"(required)" to that name, since a group cannot be `,(0,v.jsx)(t.code,{children:`aria-required`}),`.
Submitting it empty shows "Choose at least one file." (or "Choose a
file.") in the errors and moves focus to the Choose button, instead of
the browser's bubble on the hidden input.`]}),`
`,(0,v.jsx)(t.li,{children:`The helper text and any errors describe the Choose button, so they
are read when focus lands on it.`}),`
`,(0,v.jsx)(t.li,{children:`A polite status line announces "2 files added. 1 not added." and
"report.pdf removed."`}),`
`,(0,v.jsx)(t.li,{children:`Remove buttons are named "Remove report.pdf". After a remove, focus
moves to the next file's button, or back to Choose when the list is
empty, so it is never lost.`}),`
`,(0,v.jsxs)(t.li,{children:[`The drop zone's edge is `,(0,v.jsx)(t.code,{children:`--field-border`}),`, as a text field's. The Choose
button inside is an `,(0,v.jsx)(t.code,{children:`accent contained`}),` button. While dragging the
edge turns solid as well as changing colour. Disabled fades the icon and the
buttons, not the text.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};