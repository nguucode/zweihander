import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Button-BdtJKtga.js";import{n as c,t as ee}from"./icon-Dc4hTclj.js";import{n as te,t as ne}from"./Spinner-D41K1m_3.js";var l,u,re,ie,d,f,ae,oe,p,m,h,g,se,ce,_,v,le,y,b,ue,x,S,C,w,T,E,D;function O(){return(O=e((()=>{l=`_uploader_1byoy_1`,u=`_fullWidth_1byoy_12`,re=`_label_1byoy_17`,ie=`_required_1byoy_21`,d=`_dropzone_1byoy_29`,f=`_dragging_1byoy_46`,ae=`_invalid_1byoy_52`,oe=`_icon_1byoy_56`,p=`_prompt_1byoy_65`,m=`_disabled_1byoy_73`,h=`_helper_1byoy_83`,g=`_errors_1byoy_90`,se=`_list_1byoy_99`,ce=`_item_1byoy_107`,_=`_fileIcon_1byoy_122`,v=`_page_1byoy_137`,le=`_fold_1byoy_140`,y=`_badge_1byoy_144`,b=`_badgeText_1byoy_148`,ue=`_glyph_1byoy_155`,x=`_nameRow_1byoy_160`,S=`_name_1byoy_160`,C=`_size_1byoy_175`,w=`_remove_1byoy_186`,T=`_fileError_1byoy_190`,E=`_srOnly_1byoy_200`,D={uploader:l,fullWidth:u,label:re,required:ie,dropzone:d,dragging:f,invalid:ae,icon:oe,prompt:p,disabled:m,helper:h,errors:g,list:se,item:ce,fileIcon:_,page:v,fold:le,badge:y,badgeText:b,glyph:ue,nameRow:x,name:S,size:C,remove:w,fileError:T,srOnly:E}})))()}function de(e,t){if(!t)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).some(e=>e.startsWith(`.`)?n.endsWith(e):e.endsWith(`/*`)?r.startsWith(e.slice(0,-1)):r===e)}function k(e,t){if(!e||typeof DataTransfer>`u`)return;let n=new DataTransfer;t.forEach(e=>n.items.add(e)),e.files=n.files}function fe(e){let t=e.name.split(`.`).pop()?.toLowerCase()??``,n=e.type.toLowerCase();if(t===`pdf`||n===`application/pdf`)return`pdf`;if([`doc`,`docx`,`odt`,`rtf`].includes(t))return`word`;if([`xls`,`xlsx`,`csv`,`ods`].includes(t))return`excel`;if([`ppt`,`pptx`,`odp`].includes(t))return`powerpoint`;if(n.startsWith(`image/`))return`image`;if(n.startsWith(`audio/`)||[`mp3`,`wav`,`m4a`,`ogg`,`flac`].includes(t))return`audio`}function pe({file:e}){let t=fe(e);return(0,M.jsxs)(`svg`,{className:D.fileIcon,"data-kind":t,viewBox:`0 0 32 32`,"aria-hidden":`true`,children:[(0,M.jsx)(`path`,{className:D.page,d:`M9.5 2.5h11l7 7v18a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-23a2 2 0 0 1 2-2Z`}),(0,M.jsx)(`path`,{className:D.fold,d:`M20.5 2.5v5a2 2 0 0 0 2 2h5Z`}),t&&(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`rect`,{className:D.badge,x:`2`,y:`13`,width:t===`pdf`?20:15,height:`14`,rx:`2`}),N[t]?(0,M.jsx)(`text`,{className:D.badgeText,x:t===`pdf`?12:9.5,y:`23.5`,textAnchor:`middle`,children:N[t]}):t===`image`?(0,M.jsxs)(`g`,{className:D.glyph,children:[(0,M.jsx)(`circle`,{cx:`12.5`,cy:`17.5`,r:`1.25`}),(0,M.jsx)(`path`,{d:`M5 24.5l3.5-4.5 2.5 3 1.5-1.5 2.5 3Z`})]}):(0,M.jsxs)(`g`,{className:D.glyph,children:[(0,M.jsx)(`circle`,{cx:`7.5`,cy:`23`,r:`1.75`}),(0,M.jsx)(`path`,{d:`M9.25 23v-6.5l4 1.25v2`,fill:`none`,strokeWidth:`1.5`,strokeLinejoin:`round`})]})]})]})}function A({files:e,defaultFiles:t=[],onFilesChange:n,onReject:r,accept:i,multiple:o=!1,maxSize:c,maxFiles:te,label:l,helperText:u,getFileStatus:re,name:ie,disabled:d=!1,required:f,isFullWidth:ae,className:oe}){let p=(0,j.useId)(),m=(0,j.useRef)(null),h=(0,j.useRef)(null),g=(0,j.useRef)(null),[se,ce]=(0,j.useState)(t),_=e??se,[v,le]=(0,j.useState)([]),[y,b]=(0,j.useState)(!1),[ue,x]=(0,j.useState)(``),S=o?te??1/0:1,[C,w]=(0,j.useState)(!1);(0,j.useEffect)(()=>k(m.current,_),[_]);let T=e=>{ce(e),k(m.current,e),n?.(e)},E=e=>{let t=[],n=[];for(let r of e)de(r,i)?c!==void 0&&r.size>c?t.push({file:r,reason:`size`,message:`${r.name} is larger than ${me(c)}.`}):n.push(r):t.push({file:r,reason:`type`,message:`${r.name} is not an accepted type.`});let a=o?[..._]:[];for(let e of n)a.some(t=>he(t,e))||(a.length>=S?t.push({file:e,reason:`count`,message:o?`${e.name} was not added: the limit is ${S} files.`:`${e.name} was not added: only one file can be added.`}):a.push(e));!o&&a.length===0&&(a=_);let s=a.filter(e=>!_.some(t=>he(e,t))).length;le(t),t.length&&r?.(t),a.length&&w(!1),s||a.length!==_.length?T(a):k(m.current,_),x([s?`${s} ${s===1?`file`:`files`} added.`:``,t.length?`${t.length} not added.`:``].filter(Boolean).join(` `))},O=e=>{let t=_[e],n=_.filter((t,n)=>n!==e);T(n),x(`${t.name} removed.`),requestAnimationFrame(()=>{let t=g.current?.querySelectorAll(`button[data-remove]`);(t?.[Math.min(e,t.length-1)]??h.current)?.focus()})},fe=e=>{e.preventDefault(),b(!1),d||E([...e.dataTransfer.files])},A=`${p}-helper`,N=`${p}-errors`;return(0,M.jsxs)(`div`,{role:`group`,"aria-labelledby":l?`${p}-label`:void 0,className:a(D.uploader,ae&&D.fullWidth,d&&D.disabled,oe),children:[l&&(0,M.jsxs)(`div`,{id:`${p}-label`,className:D.label,children:[l,f&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{className:D.required,"aria-hidden":`true`,children:`*`}),(0,M.jsx)(`span`,{className:D.srOnly,children:` (required)`})]})]}),(0,M.jsxs)(`div`,{className:a(D.dropzone,y&&D.dragging,(v.length>0||C)&&D.invalid),"data-disabled":d||void 0,onDragEnter:e=>{e.preventDefault(),d||b(!0)},onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect=d?`none`:`copy`},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||b(!1)},onDrop:fe,children:[(0,M.jsx)(`span`,{className:D.icon,"aria-hidden":`true`,children:(0,M.jsx)(ee,{name:`upload`})}),(0,M.jsxs)(`p`,{className:D.prompt,children:[`Drag `,o?`files`:`a file`,` here or`]}),(0,M.jsx)(s,{ref:h,variant:`accent`,size:`sm`,disabled:d,"aria-describedby":[u?A:``,v.length||C?N:``].filter(Boolean).join(` `)||void 0,onClick:()=>m.current?.click(),children:o?`Choose files`:`Choose a file`}),u&&(0,M.jsx)(`p`,{id:A,className:D.helper,children:u}),(0,M.jsx)(`input`,{ref:m,type:`file`,className:D.srOnly,tabIndex:-1,name:ie,accept:i,multiple:o,disabled:d,required:f&&_.length===0,"aria-hidden":`true`,onChange:e=>E([...e.target.files??[]]),onInvalid:e=>{e.preventDefault(),w(!0),h.current?.focus()}})]}),(v.length>0||C)&&(0,M.jsxs)(`ul`,{id:N,className:D.errors,children:[C&&(0,M.jsx)(`li`,{children:o?`Choose at least one file.`:`Choose a file.`}),v.map((e,t)=>(0,M.jsx)(`li`,{children:e.message},t))]}),_.length>0&&(0,M.jsx)(`ul`,{ref:g,className:D.list,"aria-label":o?`Chosen files`:`Chosen file`,children:_.map((e,t)=>{let n=re?.(e),r=n?.progress!==void 0&&n.progress<100&&!n.error;return(0,M.jsxs)(`li`,{className:D.item,children:[(0,M.jsx)(pe,{file:e}),(0,M.jsxs)(`span`,{className:D.nameRow,children:[(0,M.jsx)(`span`,{className:D.name,children:e.name}),(0,M.jsx)(`span`,{className:D.size,children:me(e.size)})]}),r&&(0,M.jsx)(ne,{value:n?.progress,variant:`primary`,size:`sm`,"aria-label":`Uploading ${e.name}`}),n?.error&&(0,M.jsx)(`span`,{className:D.fileError,title:n.error,children:n.error}),(0,M.jsx)(s,{isIconOnly:!0,"data-remove":``,className:D.remove,"aria-label":`Remove ${e.name}`,variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:d,onClick:()=>O(t),children:(0,M.jsx)(ee,{name:`close`})})]},`${e.name}-${e.size}-${e.lastModified}`)})}),(0,M.jsx)(`p`,{role:`status`,className:D.srOnly,children:ue})]})}var j,M,me,N,he;function ge(){return(ge=e((()=>{j=r(),c(),i(),o(),te(),O(),M=n(),me=e=>{let[t,n]=e>=1e6?[e/1e6,`megabyte`]:e>=1e3?[e/1e3,`kilobyte`]:[e,`byte`];return new Intl.NumberFormat(void 0,{style:`unit`,unit:n,unitDisplay:`short`,maximumFractionDigits:1}).format(t)},N={word:`W`,excel:`X`,powerpoint:`P`,pdf:`PDF`},he=(e,t)=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified,A.__docgenInfo={description:``,methods:[],displayName:`FileUploader`,props:{files:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``},defaultFiles:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilesChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`The list after an add or a remove. Rejected files are never in it.`},onReject:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rejections: FileRejection[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`FileRejection`}],raw:`FileRejection[]`},name:`rejections`}],return:{name:`void`}}},description:"Files that were dropped or chosen but did not pass `accept`, `maxSize` or `maxFiles`."},accept:{required:!1,tsType:{name:`string`},description:'As the native attribute: extensions and MIME types, e.g. `".pdf,image/*"`. Also checked on drop.'},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`In bytes.`},maxFiles:{required:!1,tsType:{name:`number`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Inside the drop zone, under the button, e.g. "PNG or JPG, up to 5 MB."`},getFileStatus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File) => FileStatus | undefined`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`union`,raw:`FileStatus | undefined`,elements:[{name:`FileStatus`},{name:`undefined`}]}}},description:`Upload progress or a server error per file. The uploader does not upload: you do.`},name:{required:!1,tsType:{name:`string`},description:`Submitted with the form, as a native file input.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _e=t({Controlled:()=>Z,Default:()=>W,Disabled:()=>Q,Drop:()=>K,FileTypes:()=>Y,InForm:()=>$,Rejected:()=>G,Required:()=>X,Single:()=>q,WithStatus:()=>J,__namedExportsOrder:()=>Te,default:()=>Ce});function ve(e){let[t,n]=(0,ye.useState)([]);return(0,P.jsxs)(`form`,{"aria-label":`Upload`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,P.jsx)(A,{label:`Attachments`,name:`attachments`,multiple:!0,files:t,onFilesChange:t=>{n(t),e.onFilesChange(t)}}),(0,P.jsx)(s,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n([]),children:`Clear after upload`})]})}var ye,P,F,be,I,L,R,z,B,V,xe,Se,Ce,we,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{ye=r(),o(),ge(),P=n(),{expect:F,fireEvent:be,fn:I,userEvent:L,waitFor:R}=__STORYBOOK_MODULE_TEST__,z=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n,lastModified:179e10}),B=z(`Q3 report.pdf`,24e4,`application/pdf`),V=z(`team-photo.jpg`,18e5,`image/jpeg`),xe=z(`raw-scan.png`,12e6,`image/png`),Se=z(`party.gif`,9e4,`image/gif`),Ce={title:`Components/Inputs/File Uploader`,component:A,parameters:{a11y:{test:`error`}},args:{label:`Attachments`,helperText:`PDF, PNG or JPG, up to 5 MB each.`,accept:`.pdf,image/png,image/jpeg`,maxSize:5e6,multiple:!0,onFilesChange:I(),onReject:I()}},we=e=>{let t=new DataTransfer;return e.forEach(e=>t.items.add(e)),t},H=(e,t,n)=>e.dispatchEvent(new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:we(n)})),U=(e,t)=>{let n=e.querySelector(`input[type=file]`);n.files=we(t).files,be.change(n)},W={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`group`,{name:`Attachments`}),i=t.getByRole(`button`,{name:`Choose files`});await F(i).toHaveAccessibleDescription(`PDF, PNG or JPG, up to 5 MB each.`),U(n,[B,V]),await F(e.onFilesChange).toHaveBeenLastCalledWith([B,V]),await F(t.getByRole(`status`)).toHaveTextContent(`2 files added.`);let a=t.getByRole(`list`,{name:`Chosen files`});await F(a.querySelectorAll(`li`)).toHaveLength(2),await F(r).toHaveTextContent(`240 kB`),await L.click(t.getByRole(`button`,{name:`Remove Q3 report.pdf`})),await F(t.getByRole(`status`)).toHaveTextContent(`Q3 report.pdf removed.`),await R(()=>F(t.getByRole(`button`,{name:`Remove team-photo.jpg`})).toHaveFocus()),await L.click(t.getByRole(`button`,{name:`Remove team-photo.jpg`})),await R(()=>F(i).toHaveFocus()),await F(e.onFilesChange).toHaveBeenLastCalledWith([])}},G={args:{maxFiles:2},play:async({args:e,canvas:t,canvasElement:n})=>{U(n,[B,xe,Se,V,z(`notes.pdf`,10,`application/pdf`)]),await F(e.onFilesChange).toHaveBeenLastCalledWith([B,V]),await F(e.onReject).toHaveBeenCalledWith([F.objectContaining({reason:`size`,file:xe}),F.objectContaining({reason:`type`,file:Se}),F.objectContaining({reason:`count`})]),await F(t.getByText(`raw-scan.png is larger than 5 MB.`)).toBeVisible(),await F(t.getByText(`party.gif is not an accepted type.`)).toBeVisible(),await F(t.getByText(`notes.pdf was not added: the limit is 2 files.`)).toBeVisible(),await F(t.getByRole(`status`)).toHaveTextContent(`2 files added. 3 not added.`),await F(t.getByRole(`button`,{name:`Choose files`})).toHaveAccessibleDescription(/party\.gif is not an accepted type/)}},K={play:async({args:e,canvas:t})=>{let n=t.getByText(/Drag files here/).parentElement;H(n,`dragenter`,[]),await R(()=>F(n.className).toMatch(/dragging/)),H(n,`drop`,[B]),await R(()=>F(n.className).not.toMatch(/dragging/)),await F(e.onFilesChange).toHaveBeenLastCalledWith([B]),H(n,`drop`,[B]),await F(e.onFilesChange).toHaveBeenCalledTimes(1)}},q={args:{multiple:!1,label:`Avatar`,accept:`image/*`,helperText:`A square image works best.`},play:async({args:e,canvas:t,canvasElement:n})=>{await F(t.getByText(`Drag a file here or`)).toBeVisible(),U(n,[V]),await F(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`team-photo.jpg`),U(n,[z(`me.png`,3e4,`image/png`)]),await F(e.onFilesChange).toHaveBeenLastCalledWith([F.objectContaining({name:`me.png`})]),e.onFilesChange.mockClear(),U(n,[B]),await F(t.getByText(`Q3 report.pdf is not an accepted type.`)).toBeVisible(),await F(e.onFilesChange).not.toHaveBeenCalled(),await F(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`me.png`)}},J={args:{defaultFiles:[B,V,z(`contract.pdf`,12e5,`application/pdf`)],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:e.name===`contract.pdf`?{error:`Upload failed`}:void 0},play:async({canvas:e})=>{await F(e.getByRole(`progressbar`,{name:`Uploading team-photo.jpg`})).toHaveAttribute(`aria-valuenow`,`45`),await F(e.getByText(`Upload failed`)).toBeVisible()}},Y={args:{accept:void 0,helperText:void 0,defaultFiles:[z(`Proposal.docx`,84e3,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`),z(`Budget.xlsx`,52e3,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`),z(`Kick-off.pptx`,34e5,`application/vnd.openxmlformats-officedocument.presentationml.presentation`),B,V,z(`Interview.mp3`,41e5,`audio/mpeg`),z(`notes.txt`,900,`text/plain`),z(`Minutes of the quarterly steering committee meeting, final version.docx`,128e3,`application/msword`)]}},X={args:{required:!0},render:e=>(0,P.jsx)(`form`,{"aria-label":`Expense claim`,onSubmit:e=>e.preventDefault(),children:(0,P.jsx)(A,{...e})}),play:async({canvas:e,canvasElement:t})=>{await F(e.getByRole(`group`,{name:`Attachments (required)`})).toBeVisible(),e.getByRole(`form`).requestSubmit();let n=e.getByRole(`button`,{name:`Choose files`});await R(()=>F(n).toHaveFocus()),await F(n).toHaveAccessibleDescription(/Choose at least one file\./),U(t,[B]),await F(e.queryByText(`Choose at least one file.`)).toBeNull()}},Z={render:e=>(0,P.jsx)(ve,{onFilesChange:e.onFilesChange}),play:async({canvas:e,canvasElement:t})=>{U(t,[B,V]);let n=e.getByRole(`form`);await F(new FormData(n).getAll(`attachments`)).toHaveLength(2),await L.click(e.getByRole(`button`,{name:`Clear after upload`})),await F(e.queryByRole(`list`)).toBeNull(),await R(()=>F(new FormData(n).getAll(`attachments`).filter(e=>e.size>0)).toHaveLength(0))}},Q={args:{disabled:!0,defaultFiles:[B]},play:async({canvas:e})=>{await F(e.getByRole(`button`,{name:`Choose files`})).toBeDisabled(),await F(e.getByRole(`button`,{name:`Remove Q3 report.pdf`})).toBeDisabled()}},$={args:{name:`attachments`},render:e=>(0,P.jsx)(`form`,{"aria-label":`Expense claim`,children:(0,P.jsx)(A,{...e})}),play:async({canvas:e,canvasElement:t})=>{U(t,[B]),U(t,[V]);let n=new FormData(e.getByRole(`form`)).getAll(`attachments`);await F(n.map(e=>e.name)).toEqual([`Q3 report.pdf`,`team-photo.jpg`])}},Te=[`Default`,`Rejected`,`Drop`,`Single`,`WithStatus`,`FileTypes`,`Required`,`Controlled`,`Disabled`,`InForm`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"Uploading is yours; `getFileStatus` shows how it is going.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    accept: undefined,
    helperText: undefined,
    defaultFiles: [file('Proposal.docx', 84_000, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), file('Budget.xlsx', 52_000, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'), file('Kick-off.pptx', 3_400_000, 'application/vnd.openxmlformats-officedocument.presentationml.presentation'), report, photo, file('Interview.mp3', 4_100_000, 'audio/mpeg'), file('notes.txt', 900, 'text/plain'), file('Minutes of the quarterly steering committee meeting, final version.docx', 128_000, 'application/msword')]
  }
}`,...Y.parameters?.docs?.source},description:{story:`Word, Excel, PowerPoint, PDF, image and audio get a coloured badge; anything else the bare page.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`A controlled list cleared from outside clears what the form sends, too.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{G as a,Ee as c,_e as i,Q as n,q as o,Y as r,J as s,W as t};