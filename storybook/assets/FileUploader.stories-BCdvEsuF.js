import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-CAzJH1mZ.js";import{n as c,t as ee}from"./icon-Cjfg2BMt.js";import{n as te,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,t as ne}from"./Spinner-BMBE6go-.js";var re,ie,d,f,ae,oe,p,m,h,g,_,se,v,y,ce,le,b,ue,x,S,C,w,T,E,de,D;function fe(){return(fe=e((()=>{re=`_uploader_ye8qn_1`,ie=`_fullWidth_ye8qn_12`,d=`_label_ye8qn_18`,f=`_required_ye8qn_24`,ae=`_dropzone_ye8qn_32`,oe=`_dragging_ye8qn_49`,p=`_invalid_ye8qn_55`,m=`_icon_ye8qn_59`,h=`_prompt_ye8qn_68`,g=`_disabled_ye8qn_76`,_=`_helper_ye8qn_86`,se=`_errors_ye8qn_93`,v=`_list_ye8qn_102`,y=`_item_ye8qn_110`,ce=`_fileIcon_ye8qn_127`,le=`_page_ye8qn_142`,b=`_fold_ye8qn_143`,ue=`_badge_ye8qn_164`,x=`_badgeText_ye8qn_168`,S=`_nameRow_ye8qn_179`,C=`_name_ye8qn_179`,w=`_size_ye8qn_194`,T=`_remove_ye8qn_205`,E=`_fileError_ye8qn_209`,de=`_srOnly_ye8qn_219`,D={uploader:re,fullWidth:ie,label:d,required:f,dropzone:ae,dragging:oe,invalid:p,icon:m,prompt:h,disabled:g,helper:_,errors:se,list:v,item:y,fileIcon:ce,page:le,fold:b,badge:ue,badgeText:x,nameRow:S,name:C,size:w,remove:T,fileError:E,srOnly:de}})))()}function pe(e,t){if(!t)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).some(e=>e.startsWith(`.`)?n.endsWith(e):e.endsWith(`/*`)?r.startsWith(e.slice(0,-1)):r===e)}function me(e,t){if(!e||typeof DataTransfer>`u`)return;let n=new DataTransfer;t.forEach(e=>n.items.add(e)),e.files=n.files}function he(e){let t=e.name.split(`.`).pop()?.toLowerCase()??``,n=e.type.toLowerCase();if(t===`pdf`||n===`application/pdf`)return`pdf`;if([`doc`,`docx`,`odt`,`rtf`].includes(t))return`word`;if([`xls`,`xlsx`,`csv`,`ods`].includes(t))return`excel`;if([`ppt`,`pptx`,`odp`].includes(t))return`powerpoint`;if(n.startsWith(`image/`))return`image`;if(n.startsWith(`audio/`)||[`mp3`,`wav`,`m4a`,`ogg`,`flac`].includes(t))return`audio`}function ge({file:e}){let t=he(e),n=t===`word`||t===`audio`?16:14;return(0,A.jsxs)(`svg`,{className:D.fileIcon,"data-kind":t,viewBox:`0 0 20 20`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{className:D.page,d:`M4 1h8l5 5v13H4Z`}),(0,A.jsx)(`path`,{className:D.fold,d:`M12 1l5 5h-5Z`}),t&&(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`rect`,{className:D.badge,x:`1`,y:`10`,width:n,height:`8`,rx:`1.5`}),(0,A.jsx)(`text`,{className:D.badgeText,x:1+n/2,y:`14`,textAnchor:`middle`,dominantBaseline:`central`,children:ve[t]})]})]})}function O({files:e,defaultFiles:t=[],onFilesChange:n,onReject:r,accept:a,multiple:o=!1,maxSize:c,maxFiles:te,label:l,helperText:u,getFileStatus:re,name:ie,disabled:d=!1,required:f,isFullWidth:ae,className:oe}){let p=(0,k.useId)(),m=(0,k.useRef)(null),h=(0,k.useRef)(null),g=(0,k.useRef)(null),[_,se]=(0,k.useState)(t),v=e??_,[y,ce]=(0,k.useState)([]),[le,b]=(0,k.useState)(!1),[ue,x]=(0,k.useState)(``),S=o?te??1/0:1,[C,w]=(0,k.useState)(!1);(0,k.useEffect)(()=>me(m.current,v),[v]);let T=e=>{se(e),me(m.current,e),n?.(e)},E=e=>{let t=[],n=[];for(let r of e)pe(r,a)?c!==void 0&&r.size>c?t.push({file:r,reason:`size`,message:`${r.name} is larger than ${_e(c)}.`}):n.push(r):t.push({file:r,reason:`type`,message:`${r.name} is not an accepted type.`});let i=o?[...v]:[];for(let e of n)i.some(t=>ye(t,e))||(i.length>=S?t.push({file:e,reason:`count`,message:o?`${e.name} was not added: the limit is ${S} files.`:`${e.name} was not added: only one file can be added.`}):i.push(e));!o&&i.length===0&&(i=v);let s=i.filter(e=>!v.some(t=>ye(e,t))).length;ce(t),t.length&&r?.(t),i.length&&w(!1),s||i.length!==v.length?T(i):me(m.current,v),x([s?`${s} ${s===1?`file`:`files`} added.`:``,t.length?`${t.length} not added.`:``].filter(Boolean).join(` `))},de=e=>{let t=v[e],n=v.filter((t,n)=>n!==e);T(n),x(`${t.name} removed.`),requestAnimationFrame(()=>{let t=g.current?.querySelectorAll(`button[data-remove]`);(t?.[Math.min(e,t.length-1)]??h.current)?.focus()})},fe=e=>{e.preventDefault(),b(!1),d||E([...e.dataTransfer.files])},he=`${p}-helper`,O=`${p}-errors`;return(0,A.jsxs)(`div`,{role:`group`,"aria-labelledby":l?`${p}-label`:void 0,className:i(D.uploader,ae&&D.fullWidth,d&&D.disabled,oe),children:[l&&(0,A.jsxs)(`div`,{id:`${p}-label`,className:D.label,children:[l,f&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:D.required,"aria-hidden":`true`,children:`*`}),(0,A.jsx)(`span`,{className:D.srOnly,children:` (required)`})]})]}),(0,A.jsxs)(`div`,{className:i(D.dropzone,le&&D.dragging,(y.length>0||C)&&D.invalid),"data-disabled":d||void 0,onDragEnter:e=>{e.preventDefault(),d||b(!0)},onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect=d?`none`:`copy`},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||b(!1)},onDrop:fe,children:[(0,A.jsx)(`span`,{className:D.icon,"aria-hidden":`true`,children:(0,A.jsx)(ee,{name:`upload`})}),(0,A.jsxs)(`p`,{className:D.prompt,children:[`Drag `,o?`files`:`a file`,` here or`]}),(0,A.jsx)(s,{ref:h,variant:`accent`,size:`sm`,disabled:d,"aria-describedby":[u?he:``,y.length||C?O:``].filter(Boolean).join(` `)||void 0,onClick:()=>m.current?.click(),children:o?`Choose files`:`Choose a file`}),u&&(0,A.jsx)(`p`,{id:he,className:D.helper,children:u}),(0,A.jsx)(`input`,{ref:m,type:`file`,className:D.srOnly,tabIndex:-1,name:ie,accept:a,multiple:o,disabled:d,required:f&&v.length===0,"aria-hidden":`true`,onChange:e=>E([...e.target.files??[]]),onInvalid:e=>{e.preventDefault(),w(!0),h.current?.focus()}})]}),(y.length>0||C)&&(0,A.jsxs)(`ul`,{id:O,className:D.errors,children:[C&&(0,A.jsx)(`li`,{children:o?`Choose at least one file.`:`Choose a file.`}),y.map((e,t)=>(0,A.jsx)(`li`,{children:e.message},t))]}),v.length>0&&(0,A.jsx)(`ul`,{ref:g,className:D.list,"aria-label":o?`Chosen files`:`Chosen file`,children:v.map((e,t)=>{let n=re?.(e),r=n?.progress!==void 0&&n.progress<100&&!n.error;return(0,A.jsxs)(`li`,{className:D.item,children:[(0,A.jsx)(ge,{file:e}),(0,A.jsxs)(`span`,{className:D.nameRow,children:[(0,A.jsx)(`span`,{className:D.name,children:e.name}),(0,A.jsx)(`span`,{className:D.size,children:_e(e.size)})]}),r&&(0,A.jsx)(ne,{value:n?.progress,variant:`primary`,size:`sm`,"aria-label":`Uploading ${e.name}`}),n?.error&&(0,A.jsx)(`span`,{className:D.fileError,title:n.error,children:n.error}),(0,A.jsx)(s,{isIconOnly:!0,"data-remove":``,className:D.remove,"aria-label":`Remove ${e.name}`,variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:d,onClick:()=>de(t),children:(0,A.jsx)(ee,{name:`close`})})]},`${e.name}-${e.size}-${e.lastModified}`)})}),(0,A.jsx)(`p`,{role:`status`,className:D.srOnly,children:ue})]})}var k,A,_e,ve,ye;function be(){return(be=e((()=>{k=n(),c(),r(),o(),u(),fe(),A=a(),_e=e=>{let[t,n]=e>=1e6?[e/1e6,`megabyte`]:e>=1e3?[e/1e3,`kilobyte`]:[e,`byte`];return new Intl.NumberFormat(void 0,{style:`unit`,unit:n,unitDisplay:`short`,maximumFractionDigits:1}).format(t)},ve={word:`DOC`,excel:`XLS`,powerpoint:`PPT`,pdf:`PDF`,image:`IMG`,audio:`MP3`},ye=(e,t)=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified,O.__docgenInfo={description:``,methods:[],displayName:`FileUploader`,props:{files:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``},defaultFiles:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilesChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`The list after an add or a remove. Rejected files are never in it.`},onReject:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rejections: FileRejection[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`FileRejection`}],raw:`FileRejection[]`},name:`rejections`}],return:{name:`void`}}},description:"Files that were dropped or chosen but did not pass `accept`, `maxSize` or `maxFiles`."},accept:{required:!1,tsType:{name:`string`},description:'As the native attribute: extensions and MIME types, e.g. `".pdf,image/*"`. Also checked on drop.'},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`In bytes.`},maxFiles:{required:!1,tsType:{name:`number`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Inside the drop zone, under the button, e.g. "PNG or JPG, up to 5 MB."`},getFileStatus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File) => FileStatus | undefined`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`union`,raw:`FileStatus | undefined`,elements:[{name:`FileStatus`},{name:`undefined`}]}}},description:`Upload progress or a server error per file. The uploader does not upload: you do.`},name:{required:!1,tsType:{name:`string`},description:`Submitted with the form, as a native file input.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var xe=t({Anatomy:()=>Z,Controlled:()=>q,Default:()=>B,Disabled:()=>J,DoStateTheRules:()=>Q,DontHideTheRules:()=>$,Drop:()=>H,FileTypes:()=>G,InForm:()=>Y,Rejected:()=>V,Required:()=>K,Single:()=>U,WithStatus:()=>W,__namedExportsOrder:()=>Ae,anatomyParts:()=>X,default:()=>Oe});function Se(e){let[t,n]=(0,Ce.useState)([]);return(0,j.jsxs)(`form`,{"aria-label":`Upload`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,j.jsx)(O,{label:`Attachments`,name:`attachments`,multiple:!0,files:t,onFilesChange:t=>{n(t),e.onFilesChange(t)}}),(0,j.jsx)(s,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n([]),children:`Clear after upload`})]})}var Ce,j,M,we,Te,N,P,F,I,L,Ee,De,Oe,ke,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ae;function je(){return(je=e((()=>{Ce=n(),te(),o(),be(),j=a(),{expect:M,fireEvent:we,fn:Te,userEvent:N,waitFor:P}=__STORYBOOK_MODULE_TEST__,F=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n,lastModified:179e10}),I=F(`Q3 report.pdf`,24e4,`application/pdf`),L=F(`team-photo.jpg`,18e5,`image/jpeg`),Ee=F(`raw-scan.png`,12e6,`image/png`),De=F(`party.gif`,9e4,`image/gif`),Oe={title:`Components/Inputs/File Uploader`,tags:[`beta`],component:O,argTypes:{files:{description:"Controlled list. Pair with `onFilesChange`.",control:!1},defaultFiles:{description:`Starting list when uncontrolled.`,control:!1},onFilesChange:{description:`The list after an add or a remove. Rejected files are never in it. Start uploads here.`,control:!1},onReject:{description:"Files that did not pass `accept`, `maxSize` or `maxFiles`: `{ file, reason, message }[]`, `reason` being `type`, `size` or `count`.",control:!1},accept:{description:"As the native attribute: extensions and MIME types, e.g. `.pdf,image/*`. Checked on drop too.",control:`text`},multiple:{description:`Many files, appended. Without it, a new file replaces the chosen one.`,control:`boolean`},maxSize:{description:`Largest file, in bytes.`,control:`number`},maxFiles:{description:"Most files in the list, with `multiple`.",control:`number`},label:{description:`Names the whole uploader, a group.`,control:`text`},helperText:{description:`Inside the drop zone, under the button: what is allowed, e.g. "PNG or JPG, up to 5 MB."`,control:`text`},getFileStatus:{description:`Upload progress (0–100) or a short error per file. The uploader does not upload: your code does, and reports here.`,control:!1},name:{description:`Submitted with the form, as a native file input carrying the whole list.`,control:`text`},disabled:{description:`Fades the icon and buttons; nothing can be added or removed.`,control:`boolean`},required:{description:`An empty submit shows "Choose at least one file." and focuses the Choose button.`,control:`boolean`},isFullWidth:{description:`Fills the width of its container instead of 24rem.`,control:`boolean`},className:{description:`On the outer group.`,control:!1}},args:{label:`Attachments`,helperText:`PDF, PNG or JPG, up to 5 MB each.`,accept:`.pdf,image/png,image/jpeg`,maxSize:5e6,multiple:!0,onFilesChange:Te(),onReject:Te()},excludeStories:[`anatomyParts`]},ke=e=>{let t=new DataTransfer;return e.forEach(e=>t.items.add(e)),t},R=(e,t,n)=>e.dispatchEvent(new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:ke(n)})),z=(e,t)=>{let n=e.querySelector(`input[type=file]`);n.files=ke(t).files,we.change(n)},B={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`group`,{name:`Attachments`}),i=t.getByRole(`button`,{name:`Choose files`});await M(i).toHaveAccessibleDescription(`PDF, PNG or JPG, up to 5 MB each.`),await M(getComputedStyle(t.getByText(`Attachments`)).fontWeight).toBe(`653`),z(n,[I,L]),await M(e.onFilesChange).toHaveBeenLastCalledWith([I,L]),await M(t.getByRole(`status`)).toHaveTextContent(`2 files added.`);let a=t.getByRole(`list`,{name:`Chosen files`});await M(a.querySelectorAll(`li`)).toHaveLength(2),await M(r).toHaveTextContent(`240 kB`),await N.click(t.getByRole(`button`,{name:`Remove Q3 report.pdf`})),await M(t.getByRole(`status`)).toHaveTextContent(`Q3 report.pdf removed.`),await P(()=>M(t.getByRole(`button`,{name:`Remove team-photo.jpg`})).toHaveFocus()),await N.click(t.getByRole(`button`,{name:`Remove team-photo.jpg`})),await P(()=>M(i).toHaveFocus()),await M(e.onFilesChange).toHaveBeenLastCalledWith([])}},V={args:{maxFiles:2},play:async({args:e,canvas:t,canvasElement:n})=>{z(n,[I,Ee,De,L,F(`notes.pdf`,10,`application/pdf`)]),await M(e.onFilesChange).toHaveBeenLastCalledWith([I,L]),await M(e.onReject).toHaveBeenCalledWith([M.objectContaining({reason:`size`,file:Ee}),M.objectContaining({reason:`type`,file:De}),M.objectContaining({reason:`count`})]),await M(t.getByText(`raw-scan.png is larger than 5 MB.`)).toBeVisible(),await M(t.getByText(`party.gif is not an accepted type.`)).toBeVisible(),await M(t.getByText(`notes.pdf was not added: the limit is 2 files.`)).toBeVisible(),await M(t.getByRole(`status`)).toHaveTextContent(`2 files added. 3 not added.`),await M(t.getByRole(`button`,{name:`Choose files`})).toHaveAccessibleDescription(/party\.gif is not an accepted type/)}},H={play:async({args:e,canvas:t})=>{let n=t.getByText(/Drag files here/).parentElement;R(n,`dragenter`,[]),await P(()=>M(n.className).toMatch(/dragging/)),R(n,`drop`,[I]),await P(()=>M(n.className).not.toMatch(/dragging/)),await M(e.onFilesChange).toHaveBeenLastCalledWith([I]),R(n,`drop`,[I]),await M(e.onFilesChange).toHaveBeenCalledTimes(1)}},U={args:{multiple:!1,label:`Avatar`,accept:`image/*`,helperText:`A square image works best.`},play:async({args:e,canvas:t,canvasElement:n})=>{await M(t.getByText(`Drag a file here or`)).toBeVisible(),z(n,[L]),await M(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`team-photo.jpg`),z(n,[F(`me.png`,3e4,`image/png`)]),await M(e.onFilesChange).toHaveBeenLastCalledWith([M.objectContaining({name:`me.png`})]),e.onFilesChange.mockClear(),z(n,[I]),await M(t.getByText(`Q3 report.pdf is not an accepted type.`)).toBeVisible(),await M(e.onFilesChange).not.toHaveBeenCalled(),await M(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`me.png`)}},W={args:{defaultFiles:[I,L,F(`contract.pdf`,12e5,`application/pdf`)],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:e.name===`contract.pdf`?{error:`Upload failed`}:void 0},play:async({canvas:e})=>{await M(e.getByRole(`progressbar`,{name:`Uploading team-photo.jpg`})).toHaveAttribute(`aria-valuenow`,`45`),await M(e.getByText(`Upload failed`)).toBeVisible()}},G={args:{accept:void 0,helperText:void 0,defaultFiles:[F(`Proposal.docx`,84e3,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`),F(`Budget.xlsx`,52e3,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`),F(`Kick-off.pptx`,34e5,`application/vnd.openxmlformats-officedocument.presentationml.presentation`),I,L,F(`Interview.mp3`,41e5,`audio/mpeg`),F(`notes.txt`,900,`text/plain`),F(`Minutes of the quarterly steering committee meeting, final version.docx`,128e3,`application/msword`)]},play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`li`)],n=t.map(e=>e.querySelector(`:scope > svg text`)?.textContent??null);await M(n).toEqual([`DOC`,`XLS`,`PPT`,`PDF`,`IMG`,`MP3`,null,`DOC`]);let[r]=t;await M(r.querySelector(`:scope > svg`).getBoundingClientRect().left).toBe(r.getBoundingClientRect().left)}},K={args:{required:!0},render:e=>(0,j.jsx)(`form`,{"aria-label":`Expense claim`,onSubmit:e=>e.preventDefault(),children:(0,j.jsx)(O,{...e})}),play:async({canvas:e,canvasElement:t})=>{await M(e.getByRole(`group`,{name:`Attachments (required)`})).toBeVisible(),e.getByRole(`form`).requestSubmit();let n=e.getByRole(`button`,{name:`Choose files`});await P(()=>M(n).toHaveFocus()),await M(n).toHaveAccessibleDescription(/Choose at least one file\./),z(t,[I]),await M(e.queryByText(`Choose at least one file.`)).toBeNull()}},q={render:e=>(0,j.jsx)(Se,{onFilesChange:e.onFilesChange}),play:async({canvas:e,canvasElement:t})=>{z(t,[I,L]);let n=e.getByRole(`form`);await M(new FormData(n).getAll(`attachments`)).toHaveLength(2),await N.click(e.getByRole(`button`,{name:`Clear after upload`})),await M(e.queryByRole(`list`)).toBeNull(),await P(()=>M(new FormData(n).getAll(`attachments`).filter(e=>e.size>0)).toHaveLength(0))}},J={args:{disabled:!0,defaultFiles:[I]},play:async({canvas:e})=>{await M(e.getByRole(`button`,{name:`Choose files`})).toBeDisabled(),await M(e.getByRole(`button`,{name:`Remove Q3 report.pdf`})).toBeDisabled()}},Y={args:{name:`attachments`},render:e=>(0,j.jsx)(`form`,{"aria-label":`Expense claim`,children:(0,j.jsx)(O,{...e})}),play:async({canvas:e,canvasElement:t})=>{z(t,[I]),z(t,[L]);let n=new FormData(e.getByRole(`form`)).getAll(`attachments`);await M(n.map(e=>e.name)).toEqual([`Q3 report.pdf`,`team-photo.jpg`])}},X=[{name:`Label`,selector:`[id$="-label"]`,description:`Names the whole uploader, a group.`},{name:`Drop zone`,selector:`div:has(> input[type="file"])`,description:`Dashed edge; solid while a file is dragged over it.`},{name:`Choose button`,selector:`div:has(> input[type="file"]) > button`,description:`An accent contained Button. Opens the system picker: the way in for keyboard, screen reader and touch.`},{name:`Helper text`,selector:`[id$="-helper"]`,description:`What is allowed. Describes the Choose button.`},{name:`File row`,selector:`li`,description:`Type icon, name and size on one line. The name truncates, the size never does.`},{name:`Type icon`,selector:`li > svg`,description:`A page with a coloured badge naming the type: DOC, XLS, PPT, PDF, IMG or MP3. A plain gray page for any other type.`},{name:`Progress ring`,selector:`[role="progressbar"]`,description:`While getFileStatus reports progress under 100. An error takes its place.`},{name:`Remove button`,selector:`[data-remove]`,description:`A ghost icon Button named "Remove <file name>".`}],Z={tags:[`!dev`],args:{defaultFiles:[L,I],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:void 0},play:async({canvasElement:e})=>{let t=await l(e,X);await M(t[2]).toHaveAccessibleName(`Choose files`),await M(t[4]).toContainElement(t[6])}},Q={},$={tags:[`!dev`],args:{helperText:void 0}},Ae=[`Default`,`Rejected`,`Drop`,`Single`,`WithStatus`,`FileTypes`,`Required`,`Controlled`,`Disabled`,`InForm`,`anatomyParts`,`Anatomy`,`DoStateTheRules`,`DontHideTheRules`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    // The label is bold as every field's: 653, Atlassian's form Label.
    await expect(getComputedStyle(canvas.getByText('Attachments')).fontWeight).toBe('653');
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
  },
  play: async ({
    canvasElement
  }) => {
    const rows = [...canvasElement.querySelectorAll('li')];
    const labels = rows.map(row => row.querySelector(':scope > svg text')?.textContent ?? null);
    await expect(labels).toEqual(['DOC', 'XLS', 'PPT', 'PDF', 'IMG', 'MP3', null, 'DOC']);
    // No inline padding: the icon starts at the row's edge.
    const [row] = rows;
    await expect(row.querySelector(':scope > svg')!.getBoundingClientRect().left).toBe(row.getBoundingClientRect().left);
  }
}`,...G.parameters?.docs?.source},description:{story:`Word, Excel, PowerPoint, PDF, image and audio get a coloured badge naming the type; anything else a plain gray page.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: no rules shown, so people learn them from a rejection.`,...$.parameters?.docs?.description}}}})))()}export{G as a,U as c,je as d,$ as i,W as l,J as n,xe as o,Q as r,V as s,Z as t,X as u};