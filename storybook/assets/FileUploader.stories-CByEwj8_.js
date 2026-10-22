import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as ee}from"./icon-C8IlC69p.js";import{n as te,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,t as ne}from"./Spinner-x3z_vCDn.js";var re,ie,d,f,ae,oe,p,m,h,g,se,ce,_,v,le,ue,y,de,b,x,S,C,w,T,fe,pe,E;function D(){return(D=e((()=>{re=`_uploader_1v7oj_1`,ie=`_fullWidth_1v7oj_12`,d=`_label_1v7oj_17`,f=`_required_1v7oj_21`,ae=`_dropzone_1v7oj_30`,oe=`_dragging_1v7oj_47`,p=`_invalid_1v7oj_53`,m=`_icon_1v7oj_57`,h=`_prompt_1v7oj_66`,g=`_disabled_1v7oj_74`,se=`_helper_1v7oj_84`,ce=`_errors_1v7oj_91`,_=`_list_1v7oj_100`,v=`_item_1v7oj_108`,le=`_fileIcon_1v7oj_123`,ue=`_page_1v7oj_138`,y=`_fold_1v7oj_141`,de=`_badge_1v7oj_145`,b=`_badgeText_1v7oj_149`,x=`_glyph_1v7oj_160`,S=`_nameRow_1v7oj_167`,C=`_name_1v7oj_167`,w=`_size_1v7oj_182`,T=`_remove_1v7oj_193`,fe=`_fileError_1v7oj_197`,pe=`_srOnly_1v7oj_207`,E={uploader:re,fullWidth:ie,label:d,required:f,dropzone:ae,dragging:oe,invalid:p,icon:m,prompt:h,disabled:g,helper:se,errors:ce,list:_,item:v,fileIcon:le,page:ue,fold:y,badge:de,badgeText:b,glyph:x,nameRow:S,name:C,size:w,remove:T,fileError:fe,srOnly:pe}})))()}function me(e,t){if(!t)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).some(e=>e.startsWith(`.`)?n.endsWith(e):e.endsWith(`/*`)?r.startsWith(e.slice(0,-1)):r===e)}function he(e,t){if(!e||typeof DataTransfer>`u`)return;let n=new DataTransfer;t.forEach(e=>n.items.add(e)),e.files=n.files}function ge(e){let t=e.name.split(`.`).pop()?.toLowerCase()??``,n=e.type.toLowerCase();if(t===`pdf`||n===`application/pdf`)return`pdf`;if([`doc`,`docx`,`odt`,`rtf`].includes(t))return`word`;if([`xls`,`xlsx`,`csv`,`ods`].includes(t))return`excel`;if([`ppt`,`pptx`,`odp`].includes(t))return`powerpoint`;if(n.startsWith(`image/`))return`image`;if(n.startsWith(`audio/`)||[`mp3`,`wav`,`m4a`,`ogg`,`flac`].includes(t))return`audio`}function _e({file:e}){let t=ge(e);return(0,A.jsxs)(`svg`,{className:E.fileIcon,"data-kind":t,viewBox:`0 0 32 32`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{className:E.page,d:`M9.5 2.5h11l7 7v18a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-23a2 2 0 0 1 2-2Z`}),(0,A.jsx)(`path`,{className:E.fold,d:`M20.5 2.5v5a2 2 0 0 0 2 2h5Z`}),t&&(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`rect`,{className:E.badge,x:`2`,y:`13`,width:t===`pdf`?20:15,height:`14`,rx:`2`}),ye[t]?(0,A.jsx)(`text`,{className:E.badgeText,x:t===`pdf`?12:9.5,y:`23.5`,textAnchor:`middle`,children:ye[t]}):t===`image`?(0,A.jsxs)(`g`,{className:E.glyph,children:[(0,A.jsx)(`circle`,{cx:`12.5`,cy:`17.5`,r:`1.25`}),(0,A.jsx)(`path`,{d:`M5 24.5l3.5-4.5 2.5 3 1.5-1.5 2.5 3Z`})]}):(0,A.jsxs)(`g`,{className:E.glyph,children:[(0,A.jsx)(`circle`,{cx:`7.5`,cy:`23`,r:`1.75`}),(0,A.jsx)(`path`,{d:`M9.25 23v-6.5l4 1.25v2`,fill:`none`,strokeWidth:`1.5`,strokeLinejoin:`round`})]})]})]})}function O({files:e,defaultFiles:t=[],onFilesChange:n,onReject:r,accept:a,multiple:o=!1,maxSize:c,maxFiles:te,label:l,helperText:u,getFileStatus:re,name:ie,disabled:d=!1,required:f,isFullWidth:ae,className:oe}){let p=(0,k.useId)(),m=(0,k.useRef)(null),h=(0,k.useRef)(null),g=(0,k.useRef)(null),[se,ce]=(0,k.useState)(t),_=e??se,[v,le]=(0,k.useState)([]),[ue,y]=(0,k.useState)(!1),[de,b]=(0,k.useState)(``),x=o?te??1/0:1,[S,C]=(0,k.useState)(!1);(0,k.useEffect)(()=>he(m.current,_),[_]);let w=e=>{ce(e),he(m.current,e),n?.(e)},T=e=>{let t=[],n=[];for(let r of e)me(r,a)?c!==void 0&&r.size>c?t.push({file:r,reason:`size`,message:`${r.name} is larger than ${ve(c)}.`}):n.push(r):t.push({file:r,reason:`type`,message:`${r.name} is not an accepted type.`});let i=o?[..._]:[];for(let e of n)i.some(t=>be(t,e))||(i.length>=x?t.push({file:e,reason:`count`,message:o?`${e.name} was not added: the limit is ${x} files.`:`${e.name} was not added: only one file can be added.`}):i.push(e));!o&&i.length===0&&(i=_);let s=i.filter(e=>!_.some(t=>be(e,t))).length;le(t),t.length&&r?.(t),i.length&&C(!1),s||i.length!==_.length?w(i):he(m.current,_),b([s?`${s} ${s===1?`file`:`files`} added.`:``,t.length?`${t.length} not added.`:``].filter(Boolean).join(` `))},fe=e=>{let t=_[e],n=_.filter((t,n)=>n!==e);w(n),b(`${t.name} removed.`),requestAnimationFrame(()=>{let t=g.current?.querySelectorAll(`button[data-remove]`);(t?.[Math.min(e,t.length-1)]??h.current)?.focus()})},pe=e=>{e.preventDefault(),y(!1),d||T([...e.dataTransfer.files])},D=`${p}-helper`,ge=`${p}-errors`;return(0,A.jsxs)(`div`,{role:`group`,"aria-labelledby":l?`${p}-label`:void 0,className:i(E.uploader,ae&&E.fullWidth,d&&E.disabled,oe),children:[l&&(0,A.jsxs)(`div`,{id:`${p}-label`,className:E.label,children:[l,f&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:E.required,"aria-hidden":`true`,children:`*`}),(0,A.jsx)(`span`,{className:E.srOnly,children:` (required)`})]})]}),(0,A.jsxs)(`div`,{className:i(E.dropzone,ue&&E.dragging,(v.length>0||S)&&E.invalid),"data-disabled":d||void 0,onDragEnter:e=>{e.preventDefault(),d||y(!0)},onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect=d?`none`:`copy`},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||y(!1)},onDrop:pe,children:[(0,A.jsx)(`span`,{className:E.icon,"aria-hidden":`true`,children:(0,A.jsx)(ee,{name:`upload`})}),(0,A.jsxs)(`p`,{className:E.prompt,children:[`Drag `,o?`files`:`a file`,` here or`]}),(0,A.jsx)(s,{ref:h,variant:`accent`,size:`sm`,disabled:d,"aria-describedby":[u?D:``,v.length||S?ge:``].filter(Boolean).join(` `)||void 0,onClick:()=>m.current?.click(),children:o?`Choose files`:`Choose a file`}),u&&(0,A.jsx)(`p`,{id:D,className:E.helper,children:u}),(0,A.jsx)(`input`,{ref:m,type:`file`,className:E.srOnly,tabIndex:-1,name:ie,accept:a,multiple:o,disabled:d,required:f&&_.length===0,"aria-hidden":`true`,onChange:e=>T([...e.target.files??[]]),onInvalid:e=>{e.preventDefault(),C(!0),h.current?.focus()}})]}),(v.length>0||S)&&(0,A.jsxs)(`ul`,{id:ge,className:E.errors,children:[S&&(0,A.jsx)(`li`,{children:o?`Choose at least one file.`:`Choose a file.`}),v.map((e,t)=>(0,A.jsx)(`li`,{children:e.message},t))]}),_.length>0&&(0,A.jsx)(`ul`,{ref:g,className:E.list,"aria-label":o?`Chosen files`:`Chosen file`,children:_.map((e,t)=>{let n=re?.(e),r=n?.progress!==void 0&&n.progress<100&&!n.error;return(0,A.jsxs)(`li`,{className:E.item,children:[(0,A.jsx)(_e,{file:e}),(0,A.jsxs)(`span`,{className:E.nameRow,children:[(0,A.jsx)(`span`,{className:E.name,children:e.name}),(0,A.jsx)(`span`,{className:E.size,children:ve(e.size)})]}),r&&(0,A.jsx)(ne,{value:n?.progress,variant:`primary`,size:`sm`,"aria-label":`Uploading ${e.name}`}),n?.error&&(0,A.jsx)(`span`,{className:E.fileError,title:n.error,children:n.error}),(0,A.jsx)(s,{isIconOnly:!0,"data-remove":``,className:E.remove,"aria-label":`Remove ${e.name}`,variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:d,onClick:()=>fe(t),children:(0,A.jsx)(ee,{name:`close`})})]},`${e.name}-${e.size}-${e.lastModified}`)})}),(0,A.jsx)(`p`,{role:`status`,className:E.srOnly,children:de})]})}var k,A,ve,ye,be;function xe(){return(xe=e((()=>{k=n(),c(),r(),o(),u(),D(),A=a(),ve=e=>{let[t,n]=e>=1e6?[e/1e6,`megabyte`]:e>=1e3?[e/1e3,`kilobyte`]:[e,`byte`];return new Intl.NumberFormat(void 0,{style:`unit`,unit:n,unitDisplay:`short`,maximumFractionDigits:1}).format(t)},ye={word:`W`,excel:`X`,powerpoint:`P`,pdf:`PDF`},be=(e,t)=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified,O.__docgenInfo={description:``,methods:[],displayName:`FileUploader`,props:{files:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``},defaultFiles:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilesChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`The list after an add or a remove. Rejected files are never in it.`},onReject:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rejections: FileRejection[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`FileRejection`}],raw:`FileRejection[]`},name:`rejections`}],return:{name:`void`}}},description:"Files that were dropped or chosen but did not pass `accept`, `maxSize` or `maxFiles`."},accept:{required:!1,tsType:{name:`string`},description:'As the native attribute: extensions and MIME types, e.g. `".pdf,image/*"`. Also checked on drop.'},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`In bytes.`},maxFiles:{required:!1,tsType:{name:`number`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Inside the drop zone, under the button, e.g. "PNG or JPG, up to 5 MB."`},getFileStatus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File) => FileStatus | undefined`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`union`,raw:`FileStatus | undefined`,elements:[{name:`FileStatus`},{name:`undefined`}]}}},description:`Upload progress or a server error per file. The uploader does not upload: you do.`},name:{required:!1,tsType:{name:`string`},description:`Submitted with the form, as a native file input.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Se=t({Anatomy:()=>Z,Controlled:()=>q,Default:()=>B,Disabled:()=>J,DoStateTheRules:()=>Q,DontHideTheRules:()=>$,Drop:()=>H,FileTypes:()=>G,InForm:()=>Y,Rejected:()=>V,Required:()=>K,Single:()=>U,WithStatus:()=>W,__namedExportsOrder:()=>je,anatomyParts:()=>X,default:()=>ke});function Ce(e){let[t,n]=(0,we.useState)([]);return(0,j.jsxs)(`form`,{"aria-label":`Upload`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,j.jsx)(O,{label:`Attachments`,name:`attachments`,multiple:!0,files:t,onFilesChange:t=>{n(t),e.onFilesChange(t)}}),(0,j.jsx)(s,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n([]),children:`Clear after upload`})]})}var we,j,M,Te,Ee,N,P,F,I,L,De,Oe,ke,Ae,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,je;function Me(){return(Me=e((()=>{we=n(),te(),o(),xe(),j=a(),{expect:M,fireEvent:Te,fn:Ee,userEvent:N,waitFor:P}=__STORYBOOK_MODULE_TEST__,F=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n,lastModified:179e10}),I=F(`Q3 report.pdf`,24e4,`application/pdf`),L=F(`team-photo.jpg`,18e5,`image/jpeg`),De=F(`raw-scan.png`,12e6,`image/png`),Oe=F(`party.gif`,9e4,`image/gif`),ke={title:`Components/Inputs/File Uploader`,tags:[`beta`],component:O,argTypes:{files:{description:"Controlled list. Pair with `onFilesChange`.",control:!1},defaultFiles:{description:`Starting list when uncontrolled.`,control:!1},onFilesChange:{description:`The list after an add or a remove. Rejected files are never in it. Start uploads here.`,control:!1},onReject:{description:"Files that did not pass `accept`, `maxSize` or `maxFiles`: `{ file, reason, message }[]`, `reason` being `type`, `size` or `count`.",control:!1},accept:{description:"As the native attribute: extensions and MIME types, e.g. `.pdf,image/*`. Checked on drop too.",control:`text`},multiple:{description:`Many files, appended. Without it, a new file replaces the chosen one.`,control:`boolean`},maxSize:{description:`Largest file, in bytes.`,control:`number`},maxFiles:{description:"Most files in the list, with `multiple`.",control:`number`},label:{description:`Names the whole uploader, a group.`,control:`text`},helperText:{description:`Inside the drop zone, under the button: what is allowed, e.g. "PNG or JPG, up to 5 MB."`,control:`text`},getFileStatus:{description:`Upload progress (0–100) or a short error per file. The uploader does not upload: your code does, and reports here.`,control:!1},name:{description:`Submitted with the form, as a native file input carrying the whole list.`,control:`text`},disabled:{description:`Fades the icon and buttons; nothing can be added or removed.`,control:`boolean`},required:{description:`An empty submit shows "Choose at least one file." and focuses the Choose button.`,control:`boolean`},isFullWidth:{description:`Fills the width of its container instead of 24rem.`,control:`boolean`},className:{description:`On the outer group.`,control:!1}},args:{label:`Attachments`,helperText:`PDF, PNG or JPG, up to 5 MB each.`,accept:`.pdf,image/png,image/jpeg`,maxSize:5e6,multiple:!0,onFilesChange:Ee(),onReject:Ee()},excludeStories:[`anatomyParts`]},Ae=e=>{let t=new DataTransfer;return e.forEach(e=>t.items.add(e)),t},R=(e,t,n)=>e.dispatchEvent(new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:Ae(n)})),z=(e,t)=>{let n=e.querySelector(`input[type=file]`);n.files=Ae(t).files,Te.change(n)},B={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`group`,{name:`Attachments`}),i=t.getByRole(`button`,{name:`Choose files`});await M(i).toHaveAccessibleDescription(`PDF, PNG or JPG, up to 5 MB each.`),z(n,[I,L]),await M(e.onFilesChange).toHaveBeenLastCalledWith([I,L]),await M(t.getByRole(`status`)).toHaveTextContent(`2 files added.`);let a=t.getByRole(`list`,{name:`Chosen files`});await M(a.querySelectorAll(`li`)).toHaveLength(2),await M(r).toHaveTextContent(`240 kB`),await N.click(t.getByRole(`button`,{name:`Remove Q3 report.pdf`})),await M(t.getByRole(`status`)).toHaveTextContent(`Q3 report.pdf removed.`),await P(()=>M(t.getByRole(`button`,{name:`Remove team-photo.jpg`})).toHaveFocus()),await N.click(t.getByRole(`button`,{name:`Remove team-photo.jpg`})),await P(()=>M(i).toHaveFocus()),await M(e.onFilesChange).toHaveBeenLastCalledWith([])}},V={args:{maxFiles:2},play:async({args:e,canvas:t,canvasElement:n})=>{z(n,[I,De,Oe,L,F(`notes.pdf`,10,`application/pdf`)]),await M(e.onFilesChange).toHaveBeenLastCalledWith([I,L]),await M(e.onReject).toHaveBeenCalledWith([M.objectContaining({reason:`size`,file:De}),M.objectContaining({reason:`type`,file:Oe}),M.objectContaining({reason:`count`})]),await M(t.getByText(`raw-scan.png is larger than 5 MB.`)).toBeVisible(),await M(t.getByText(`party.gif is not an accepted type.`)).toBeVisible(),await M(t.getByText(`notes.pdf was not added: the limit is 2 files.`)).toBeVisible(),await M(t.getByRole(`status`)).toHaveTextContent(`2 files added. 3 not added.`),await M(t.getByRole(`button`,{name:`Choose files`})).toHaveAccessibleDescription(/party\.gif is not an accepted type/)}},H={play:async({args:e,canvas:t})=>{let n=t.getByText(/Drag files here/).parentElement;R(n,`dragenter`,[]),await P(()=>M(n.className).toMatch(/dragging/)),R(n,`drop`,[I]),await P(()=>M(n.className).not.toMatch(/dragging/)),await M(e.onFilesChange).toHaveBeenLastCalledWith([I]),R(n,`drop`,[I]),await M(e.onFilesChange).toHaveBeenCalledTimes(1)}},U={args:{multiple:!1,label:`Avatar`,accept:`image/*`,helperText:`A square image works best.`},play:async({args:e,canvas:t,canvasElement:n})=>{await M(t.getByText(`Drag a file here or`)).toBeVisible(),z(n,[L]),await M(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`team-photo.jpg`),z(n,[F(`me.png`,3e4,`image/png`)]),await M(e.onFilesChange).toHaveBeenLastCalledWith([M.objectContaining({name:`me.png`})]),e.onFilesChange.mockClear(),z(n,[I]),await M(t.getByText(`Q3 report.pdf is not an accepted type.`)).toBeVisible(),await M(e.onFilesChange).not.toHaveBeenCalled(),await M(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`me.png`)}},W={args:{defaultFiles:[I,L,F(`contract.pdf`,12e5,`application/pdf`)],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:e.name===`contract.pdf`?{error:`Upload failed`}:void 0},play:async({canvas:e})=>{await M(e.getByRole(`progressbar`,{name:`Uploading team-photo.jpg`})).toHaveAttribute(`aria-valuenow`,`45`),await M(e.getByText(`Upload failed`)).toBeVisible()}},G={args:{accept:void 0,helperText:void 0,defaultFiles:[F(`Proposal.docx`,84e3,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`),F(`Budget.xlsx`,52e3,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`),F(`Kick-off.pptx`,34e5,`application/vnd.openxmlformats-officedocument.presentationml.presentation`),I,L,F(`Interview.mp3`,41e5,`audio/mpeg`),F(`notes.txt`,900,`text/plain`),F(`Minutes of the quarterly steering committee meeting, final version.docx`,128e3,`application/msword`)]}},K={args:{required:!0},render:e=>(0,j.jsx)(`form`,{"aria-label":`Expense claim`,onSubmit:e=>e.preventDefault(),children:(0,j.jsx)(O,{...e})}),play:async({canvas:e,canvasElement:t})=>{await M(e.getByRole(`group`,{name:`Attachments (required)`})).toBeVisible(),e.getByRole(`form`).requestSubmit();let n=e.getByRole(`button`,{name:`Choose files`});await P(()=>M(n).toHaveFocus()),await M(n).toHaveAccessibleDescription(/Choose at least one file\./),z(t,[I]),await M(e.queryByText(`Choose at least one file.`)).toBeNull()}},q={render:e=>(0,j.jsx)(Ce,{onFilesChange:e.onFilesChange}),play:async({canvas:e,canvasElement:t})=>{z(t,[I,L]);let n=e.getByRole(`form`);await M(new FormData(n).getAll(`attachments`)).toHaveLength(2),await N.click(e.getByRole(`button`,{name:`Clear after upload`})),await M(e.queryByRole(`list`)).toBeNull(),await P(()=>M(new FormData(n).getAll(`attachments`).filter(e=>e.size>0)).toHaveLength(0))}},J={args:{disabled:!0,defaultFiles:[I]},play:async({canvas:e})=>{await M(e.getByRole(`button`,{name:`Choose files`})).toBeDisabled(),await M(e.getByRole(`button`,{name:`Remove Q3 report.pdf`})).toBeDisabled()}},Y={args:{name:`attachments`},render:e=>(0,j.jsx)(`form`,{"aria-label":`Expense claim`,children:(0,j.jsx)(O,{...e})}),play:async({canvas:e,canvasElement:t})=>{z(t,[I]),z(t,[L]);let n=new FormData(e.getByRole(`form`)).getAll(`attachments`);await M(n.map(e=>e.name)).toEqual([`Q3 report.pdf`,`team-photo.jpg`])}},X=[{name:`Label`,selector:`[id$="-label"]`,description:`Names the whole uploader, a group.`},{name:`Drop zone`,selector:`div:has(> input[type="file"])`,description:`Dashed edge; solid while a file is dragged over it.`},{name:`Choose button`,selector:`div:has(> input[type="file"]) > button`,description:`An accent contained Button. Opens the system picker: the way in for keyboard, screen reader and touch.`},{name:`Helper text`,selector:`[id$="-helper"]`,description:`What is allowed. Describes the Choose button.`},{name:`File row`,selector:`li`,description:`Type icon, name and size on one line. The name truncates, the size never does.`},{name:`Type icon`,selector:`li > svg`,description:`A page with a coloured badge for Word, Excel, PowerPoint, PDF, image and audio.`},{name:`Progress ring`,selector:`[role="progressbar"]`,description:`While getFileStatus reports progress under 100. An error takes its place.`},{name:`Remove button`,selector:`[data-remove]`,description:`A ghost icon Button named "Remove <file name>".`}],Z={tags:[`!dev`],args:{defaultFiles:[L,I],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:void 0},play:async({canvasElement:e})=>{let t=await l(e,X);await M(t[2]).toHaveAccessibleName(`Choose files`),await M(t[4]).toContainElement(t[6])}},Q={},$={tags:[`!dev`],args:{helperText:void 0}},je=[`Default`,`Rejected`,`Drop`,`Single`,`WithStatus`,`FileTypes`,`Required`,`Controlled`,`Disabled`,`InForm`,`anatomyParts`,`Anatomy`,`DoStateTheRules`,`DontHideTheRules`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    const group = canvas.getByRole('group', {
      name: 'Attachments'
    });
    const choose = canvas.getByRole('button', {
      name: 'Choose files'
    });
    await expect(choose).toHaveAccessibleDescription('PDF, PNG or JPG, up to 5 MB each.');
    pick(canvasElement, [report, photo]);
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report, photo]);
    await expect(canvas.getByRole('status')).toHaveTextContent('2 files added.');
    const list = canvas.getByRole('list', {
      name: 'Chosen files'
    });
    await expect(list.querySelectorAll('li')).toHaveLength(2);
    await expect(group).toHaveTextContent('240 kB');
    // Removing moves focus to the next file's button, then back to Choose.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Q3 report.pdf'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Q3 report.pdf removed.');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Remove team-photo.jpg'
    })).toHaveFocus());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove team-photo.jpg'
    }));
    await waitFor(() => expect(choose).toHaveFocus());
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([]);
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    maxFiles: 2
  },
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    // The native picker filters by accept, but a drop or "All files" does not, so the uploader checks too.
    pick(canvasElement, [report, huge, gif, photo, file('notes.pdf', 10, 'application/pdf')]);
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report, photo]);
    await expect(args.onReject).toHaveBeenCalledWith([expect.objectContaining({
      reason: 'size',
      file: huge
    }), expect.objectContaining({
      reason: 'type',
      file: gif
    }), expect.objectContaining({
      reason: 'count'
    })]);
    await expect(canvas.getByText('raw-scan.png is larger than 5 MB.')).toBeVisible();
    await expect(canvas.getByText('party.gif is not an accepted type.')).toBeVisible();
    await expect(canvas.getByText('notes.pdf was not added: the limit is 2 files.')).toBeVisible();
    await expect(canvas.getByRole('status')).toHaveTextContent('2 files added. 3 not added.');
    // The errors are part of the button's description, for whoever lands on it next.
    await expect(canvas.getByRole('button', {
      name: 'Choose files'
    })).toHaveAccessibleDescription(/party\\.gif is not an accepted type/);
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const zone = canvas.getByText(/Drag files here/).parentElement!;
    drag(zone, 'dragenter', []);
    await waitFor(() => expect(zone.className).toMatch(/dragging/));
    drag(zone, 'drop', [report]);
    await waitFor(() => expect(zone.className).not.toMatch(/dragging/));
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([report]);
    // The same file again is not added twice.
    drag(zone, 'drop', [report]);
    await expect(args.onFilesChange).toHaveBeenCalledTimes(1);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false,
    label: 'Avatar',
    accept: 'image/*',
    helperText: 'A square image works best.'
  },
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText('Drag a file here or')).toBeVisible();
    pick(canvasElement, [photo]);
    await expect(canvas.getByRole('list', {
      name: 'Chosen file'
    })).toHaveTextContent('team-photo.jpg');
    // Choosing again replaces it.
    pick(canvasElement, [file('me.png', 30_000, 'image/png')]);
    await expect(args.onFilesChange).toHaveBeenLastCalledWith([expect.objectContaining({
      name: 'me.png'
    })])
    // A rejected file does not replace the chosen one.
;
    (args.onFilesChange as ReturnType<typeof fn>).mockClear();
    pick(canvasElement, [report]);
    await expect(canvas.getByText('Q3 report.pdf is not an accepted type.')).toBeVisible();
    await expect(args.onFilesChange).not.toHaveBeenCalled();
    await expect(canvas.getByRole('list', {
      name: 'Chosen file'
    })).toHaveTextContent('me.png');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFiles: [report, photo, file('contract.pdf', 1_200_000, 'application/pdf')],
    getFileStatus: f => f.name === 'team-photo.jpg' ? {
      progress: 45
    } : f.name === 'contract.pdf' ? {
      error: 'Upload failed'
    } : undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Uploading team-photo.jpg'
    })).toHaveAttribute('aria-valuenow', '45');
    await expect(canvas.getByText('Upload failed')).toBeVisible();
  }
}`,...W.parameters?.docs?.source},description:{story:"Uploading is yours; `getFileStatus` shows how it is going.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    accept: undefined,
    helperText: undefined,
    defaultFiles: [file('Proposal.docx', 84_000, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), file('Budget.xlsx', 52_000, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'), file('Kick-off.pptx', 3_400_000, 'application/vnd.openxmlformats-officedocument.presentationml.presentation'), report, photo, file('Interview.mp3', 4_100_000, 'audio/mpeg'), file('notes.txt', 900, 'text/plain'), file('Minutes of the quarterly steering committee meeting, final version.docx', 128_000, 'application/msword')]
  }
}`,...G.parameters?.docs?.source},description:{story:`Word, Excel, PowerPoint, PDF, image and audio get a coloured badge; anything else the bare page.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => <form aria-label="Expense claim" onSubmit={e => e.preventDefault()}>
      <FileUploader {...args} />
    </form>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('group', {
      name: 'Attachments (required)'
    })).toBeVisible()
    // Submitting empty: our message, and focus on Choose, not on the hidden input.
;
    (canvas.getByRole('form') as HTMLFormElement).requestSubmit();
    const choose = canvas.getByRole('button', {
      name: 'Choose files'
    });
    await waitFor(() => expect(choose).toHaveFocus());
    await expect(choose).toHaveAccessibleDescription(/Choose at least one file\\./);
    pick(canvasElement, [report]);
    await expect(canvas.queryByText('Choose at least one file.')).toBeNull();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledUploader onFilesChange={args.onFilesChange!} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    pick(canvasElement, [report, photo]);
    const form = canvas.getByRole('form') as HTMLFormElement;
    await expect(new FormData(form).getAll('attachments')).toHaveLength(2);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear after upload'
    }));
    await expect(canvas.queryByRole('list')).toBeNull();
    await waitFor(() => expect((new FormData(form).getAll('attachments') as File[]).filter(f => f.size > 0)).toHaveLength(0));
  }
}`,...q.parameters?.docs?.source},description:{story:`A controlled list cleared from outside clears what the form sends, too.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultFiles: [report]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Choose files'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Remove Q3 report.pdf'
    })).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'attachments'
  },
  render: args => <form aria-label="Expense claim">
      <FileUploader {...args} />
    </form>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    pick(canvasElement, [report]);
    pick(canvasElement, [photo]);
    // The native input holds the whole list, not just the last pick.
    const sent = new FormData(canvas.getByRole('form') as HTMLFormElement).getAll('attachments') as File[];
    await expect(sent.map(f => f.name)).toEqual(['Q3 report.pdf', 'team-photo.jpg']);
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultFiles: [photo, report],
    getFileStatus: f => f.name === 'team-photo.jpg' ? {
      progress: 45
    } : undefined
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveAccessibleName('Choose files');
    await expect(found[4]).toContainElement(found[6] as HTMLElement);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present: helper text, one file uploading and one done.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: the rules up front, so nobody learns them from a rejection.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: undefined
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: no rules shown, so people learn them from a rejection.`,...$.parameters?.docs?.description}}}})))()}export{G as a,U as c,Me as d,$ as i,W as l,J as n,Se as o,Q as r,V as s,Z as t,X as u};