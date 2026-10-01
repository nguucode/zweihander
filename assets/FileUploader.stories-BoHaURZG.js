import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as ee}from"./Button-BLXGvKSL.js";import{n as te,t as ne}from"./ProgressBar-BxRb7uA5.js";var l,u,re,d,f,p,m,h,g,_,v,y,ie,ae,b,x,S,C,w,oe,T,E,D;function O(){return(O=e((()=>{l=`_uploader_1jpiq_1`,u=`_fullWidth_1jpiq_12`,re=`_label_1jpiq_17`,d=`_required_1jpiq_21`,f=`_dropzone_1jpiq_28`,p=`_dragging_1jpiq_45`,m=`_invalid_1jpiq_51`,h=`_icon_1jpiq_55`,g=`_prompt_1jpiq_64`,_=`_disabled_1jpiq_72`,v=`_helper_1jpiq_82`,y=`_errors_1jpiq_87`,ie=`_list_1jpiq_95`,ae=`_item_1jpiq_104`,b=`_itemError_1jpiq_115`,x=`_fileIcon_1jpiq_119`,S=`_meta_1jpiq_125`,C=`_name_1jpiq_131`,w=`_size_1jpiq_138`,oe=`_progress_1jpiq_144`,T=`_fileError_1jpiq_148`,E=`_srOnly_1jpiq_154`,D={uploader:l,fullWidth:u,label:re,required:d,dropzone:f,dragging:p,invalid:m,icon:h,prompt:g,disabled:_,helper:v,errors:y,list:ie,item:ae,itemError:b,fileIcon:x,meta:S,name:C,size:w,progress:oe,fileError:T,srOnly:E}})))()}function se(e,t){if(!t)return!0;let n=e.name.toLowerCase(),r=e.type.toLowerCase();return t.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).some(e=>e.startsWith(`.`)?n.endsWith(e):e.endsWith(`/*`)?r.startsWith(e.slice(0,-1)):r===e)}function k(e,t){if(!e||typeof DataTransfer>`u`)return;let n=new DataTransfer;t.forEach(e=>n.items.add(e)),e.files=n.files}function A({files:e,defaultFiles:t=[],onFilesChange:n,onReject:r,accept:i,multiple:o=!1,maxSize:c,maxFiles:te,label:l,helperText:u,getFileStatus:re,name:d,disabled:f=!1,required:p,isFullWidth:m,className:h}){let g=(0,j.useId)(),_=(0,j.useRef)(null),v=(0,j.useRef)(null),y=(0,j.useRef)(null),[ie,ae]=(0,j.useState)(t),b=e??ie,[x,S]=(0,j.useState)([]),[C,w]=(0,j.useState)(!1),[oe,T]=(0,j.useState)(``),E=o?te??1/0:1,[O,A]=(0,j.useState)(!1);(0,j.useEffect)(()=>k(_.current,b),[b]);let N=e=>{ae(e),k(_.current,e),n?.(e)},ue=e=>{let t=[],n=[];for(let r of e)se(r,i)?c!==void 0&&r.size>c?t.push({file:r,reason:`size`,message:`${r.name} is larger than ${ce(c)}.`}):n.push(r):t.push({file:r,reason:`type`,message:`${r.name} is not an accepted type.`});let a=o?[...b]:[];for(let e of n)a.some(t=>le(t,e))||(a.length>=E?t.push({file:e,reason:`count`,message:o?`${e.name} was not added: the limit is ${E} files.`:`${e.name} was not added: only one file can be added.`}):a.push(e));!o&&a.length===0&&(a=b);let s=a.filter(e=>!b.some(t=>le(e,t))).length;S(t),t.length&&r?.(t),a.length&&A(!1),s||a.length!==b.length?N(a):k(_.current,b),T([s?`${s} ${s===1?`file`:`files`} added.`:``,t.length?`${t.length} not added.`:``].filter(Boolean).join(` `))},de=e=>{let t=b[e],n=b.filter((t,n)=>n!==e);N(n),T(`${t.name} removed.`),requestAnimationFrame(()=>{let t=y.current?.querySelectorAll(`button[data-remove]`);(t?.[Math.min(e,t.length-1)]??v.current)?.focus()})},fe=e=>{e.preventDefault(),w(!1),f||ue([...e.dataTransfer.files])},P=`${g}-helper`,F=`${g}-errors`;return(0,M.jsxs)(`div`,{role:`group`,"aria-labelledby":l?`${g}-label`:void 0,className:s(D.uploader,m&&D.fullWidth,f&&D.disabled,h),children:[l&&(0,M.jsxs)(`div`,{id:`${g}-label`,className:D.label,children:[l,p&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`span`,{className:D.required,"aria-hidden":`true`,children:`*`}),(0,M.jsx)(`span`,{className:D.srOnly,children:` (required)`})]})]}),(0,M.jsxs)(`div`,{className:s(D.dropzone,C&&D.dragging,(x.length>0||O)&&D.invalid),"data-disabled":f||void 0,onDragEnter:e=>{e.preventDefault(),f||w(!0)},onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect=f?`none`:`copy`},onDragLeave:e=>{e.currentTarget.contains(e.relatedTarget)||w(!1)},onDrop:fe,children:[(0,M.jsx)(`span`,{className:D.icon,"aria-hidden":`true`,children:(0,M.jsx)(a,{name:`upload`})}),(0,M.jsxs)(`p`,{className:D.prompt,children:[`Drag `,o?`files`:`a file`,` here or`]}),(0,M.jsx)(ee,{ref:v,variant:`secondary`,appearance:`outlined`,size:`sm`,disabled:f,"aria-describedby":[u?P:``,x.length||O?F:``].filter(Boolean).join(` `)||void 0,onClick:()=>_.current?.click(),children:o?`Choose files`:`Choose a file`}),(0,M.jsx)(`input`,{ref:_,type:`file`,className:D.srOnly,tabIndex:-1,name:d,accept:i,multiple:o,disabled:f,required:p&&b.length===0,"aria-hidden":`true`,onChange:e=>ue([...e.target.files??[]]),onInvalid:e=>{e.preventDefault(),A(!0),v.current?.focus()}})]}),u&&(0,M.jsx)(`p`,{id:P,className:D.helper,children:u}),(x.length>0||O)&&(0,M.jsxs)(`ul`,{id:F,className:D.errors,children:[O&&(0,M.jsx)(`li`,{children:o?`Choose at least one file.`:`Choose a file.`}),x.map((e,t)=>(0,M.jsx)(`li`,{children:e.message},t))]}),b.length>0&&(0,M.jsx)(`ul`,{ref:y,className:D.list,"aria-label":o?`Chosen files`:`Chosen file`,children:b.map((e,t)=>{let n=re?.(e);return(0,M.jsxs)(`li`,{className:s(D.item,n?.error&&D.itemError),children:[(0,M.jsx)(`span`,{className:D.fileIcon,"aria-hidden":`true`,children:(0,M.jsx)(a,{name:`file`})}),(0,M.jsxs)(`span`,{className:D.meta,children:[(0,M.jsx)(`span`,{className:D.name,children:e.name}),(0,M.jsx)(`span`,{className:D.size,children:ce(e.size)}),n?.progress!==void 0&&n.progress<100&&!n.error&&(0,M.jsx)(ne,{value:n.progress,size:`sm`,"aria-label":`Uploading ${e.name}`,className:D.progress}),n?.error&&(0,M.jsx)(`span`,{className:D.fileError,children:n.error})]}),(0,M.jsx)(ee,{isIconOnly:!0,"data-remove":``,"aria-label":`Remove ${e.name}`,variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:f,onClick:()=>de(t),children:(0,M.jsx)(a,{name:`close`})})]},`${e.name}-${e.size}-${e.lastModified}`)})}),(0,M.jsx)(`p`,{role:`status`,className:D.srOnly,children:oe})]})}var j,M,ce,le;function N(){return(N=e((()=>{j=r(),i(),o(),c(),te(),O(),M=n(),ce=e=>{let[t,n]=e>=1e6?[e/1e6,`megabyte`]:e>=1e3?[e/1e3,`kilobyte`]:[e,`byte`];return new Intl.NumberFormat(void 0,{style:`unit`,unit:n,unitDisplay:`short`,maximumFractionDigits:1}).format(t)},le=(e,t)=>e.name===t.name&&e.size===t.size&&e.lastModified===t.lastModified,A.__docgenInfo={description:``,methods:[],displayName:`FileUploader`,props:{files:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``},defaultFiles:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilesChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`The list after an add or a remove. Rejected files are never in it.`},onReject:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rejections: FileRejection[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`FileRejection`}],raw:`FileRejection[]`},name:`rejections`}],return:{name:`void`}}},description:"Files that were dropped or chosen but did not pass `accept`, `maxSize` or `maxFiles`."},accept:{required:!1,tsType:{name:`string`},description:'As the native attribute: extensions and MIME types, e.g. `".pdf,image/*"`. Also checked on drop.'},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`In bytes.`},maxFiles:{required:!1,tsType:{name:`number`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Under the drop zone, e.g. "PNG or JPG, up to 5 MB."`},getFileStatus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File) => FileStatus | undefined`,signature:{arguments:[{type:{name:`File`},name:`file`}],return:{name:`union`,raw:`FileStatus | undefined`,elements:[{name:`FileStatus`},{name:`undefined`}]}}},description:`Upload progress or a server error per file. The uploader does not upload: you do.`},name:{required:!1,tsType:{name:`string`},description:`Submitted with the form, as a native file input.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ue=t({Controlled:()=>Z,Default:()=>G,Disabled:()=>Q,Drop:()=>q,InForm:()=>$,Rejected:()=>K,Required:()=>X,Single:()=>J,WithStatus:()=>Y,__namedExportsOrder:()=>_e,default:()=>he});function de(e){let[t,n]=(0,fe.useState)([]);return(0,P.jsxs)(`form`,{"aria-label":`Upload`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,P.jsx)(A,{label:`Attachments`,name:`attachments`,multiple:!0,files:t,onFilesChange:t=>{n(t),e.onFilesChange(t)}}),(0,P.jsx)(ee,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n([]),children:`Clear after upload`})]})}var fe,P,F,pe,I,L,R,z,B,V,H,me,he,ge,U,W,G,K,q,J,Y,X,Z,Q,$,_e;function ve(){return(ve=e((()=>{fe=r(),c(),N(),P=n(),{expect:F,fireEvent:pe,fn:I,userEvent:L,waitFor:R}=__STORYBOOK_MODULE_TEST__,z=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n,lastModified:179e10}),B=z(`Q3 report.pdf`,24e4,`application/pdf`),V=z(`team-photo.jpg`,18e5,`image/jpeg`),H=z(`raw-scan.png`,12e6,`image/png`),me=z(`party.gif`,9e4,`image/gif`),he={title:`Components/Inputs/File Uploader`,component:A,parameters:{a11y:{test:`error`}},args:{label:`Attachments`,helperText:`PDF, PNG or JPG, up to 5 MB each.`,accept:`.pdf,image/png,image/jpeg`,maxSize:5e6,multiple:!0,onFilesChange:I(),onReject:I()}},ge=e=>{let t=new DataTransfer;return e.forEach(e=>t.items.add(e)),t},U=(e,t,n)=>e.dispatchEvent(new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:ge(n)})),W=(e,t)=>{let n=e.querySelector(`input[type=file]`);n.files=ge(t).files,pe.change(n)},G={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`group`,{name:`Attachments`}),i=t.getByRole(`button`,{name:`Choose files`});await F(i).toHaveAccessibleDescription(`PDF, PNG or JPG, up to 5 MB each.`),W(n,[B,V]),await F(e.onFilesChange).toHaveBeenLastCalledWith([B,V]),await F(t.getByRole(`status`)).toHaveTextContent(`2 files added.`);let a=t.getByRole(`list`,{name:`Chosen files`});await F(a.querySelectorAll(`li`)).toHaveLength(2),await F(r).toHaveTextContent(`240 kB`),await L.click(t.getByRole(`button`,{name:`Remove Q3 report.pdf`})),await F(t.getByRole(`status`)).toHaveTextContent(`Q3 report.pdf removed.`),await R(()=>F(t.getByRole(`button`,{name:`Remove team-photo.jpg`})).toHaveFocus()),await L.click(t.getByRole(`button`,{name:`Remove team-photo.jpg`})),await R(()=>F(i).toHaveFocus()),await F(e.onFilesChange).toHaveBeenLastCalledWith([])}},K={args:{maxFiles:2},play:async({args:e,canvas:t,canvasElement:n})=>{W(n,[B,H,me,V,z(`notes.pdf`,10,`application/pdf`)]),await F(e.onFilesChange).toHaveBeenLastCalledWith([B,V]),await F(e.onReject).toHaveBeenCalledWith([F.objectContaining({reason:`size`,file:H}),F.objectContaining({reason:`type`,file:me}),F.objectContaining({reason:`count`})]),await F(t.getByText(`raw-scan.png is larger than 5 MB.`)).toBeVisible(),await F(t.getByText(`party.gif is not an accepted type.`)).toBeVisible(),await F(t.getByText(`notes.pdf was not added: the limit is 2 files.`)).toBeVisible(),await F(t.getByRole(`status`)).toHaveTextContent(`2 files added. 3 not added.`),await F(t.getByRole(`button`,{name:`Choose files`})).toHaveAccessibleDescription(/party\.gif is not an accepted type/)}},q={play:async({args:e,canvas:t})=>{let n=t.getByText(/Drag files here/).parentElement;U(n,`dragenter`,[]),await R(()=>F(n.className).toMatch(/dragging/)),U(n,`drop`,[B]),await R(()=>F(n.className).not.toMatch(/dragging/)),await F(e.onFilesChange).toHaveBeenLastCalledWith([B]),U(n,`drop`,[B]),await F(e.onFilesChange).toHaveBeenCalledTimes(1)}},J={args:{multiple:!1,label:`Avatar`,accept:`image/*`,helperText:`A square image works best.`},play:async({args:e,canvas:t,canvasElement:n})=>{await F(t.getByText(`Drag a file here or`)).toBeVisible(),W(n,[V]),await F(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`team-photo.jpg`),W(n,[z(`me.png`,3e4,`image/png`)]),await F(e.onFilesChange).toHaveBeenLastCalledWith([F.objectContaining({name:`me.png`})]),e.onFilesChange.mockClear(),W(n,[B]),await F(t.getByText(`Q3 report.pdf is not an accepted type.`)).toBeVisible(),await F(e.onFilesChange).not.toHaveBeenCalled(),await F(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`me.png`)}},Y={args:{defaultFiles:[B,V,z(`contract.pdf`,12e5,`application/pdf`)],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:e.name===`contract.pdf`?{error:`Upload failed. Try again.`}:void 0},play:async({canvas:e})=>{await F(e.getByRole(`progressbar`,{name:`Uploading team-photo.jpg`})).toHaveAttribute(`aria-valuenow`,`45`),await F(e.getByText(`Upload failed. Try again.`)).toBeVisible()}},X={args:{required:!0},render:e=>(0,P.jsx)(`form`,{"aria-label":`Expense claim`,onSubmit:e=>e.preventDefault(),children:(0,P.jsx)(A,{...e})}),play:async({canvas:e,canvasElement:t})=>{await F(e.getByRole(`group`,{name:`Attachments (required)`})).toBeVisible(),e.getByRole(`form`).requestSubmit();let n=e.getByRole(`button`,{name:`Choose files`});await R(()=>F(n).toHaveFocus()),await F(n).toHaveAccessibleDescription(/Choose at least one file\./),W(t,[B]),await F(e.queryByText(`Choose at least one file.`)).toBeNull()}},Z={render:e=>(0,P.jsx)(de,{onFilesChange:e.onFilesChange}),play:async({canvas:e,canvasElement:t})=>{W(t,[B,V]);let n=e.getByRole(`form`);await F(new FormData(n).getAll(`attachments`)).toHaveLength(2),await L.click(e.getByRole(`button`,{name:`Clear after upload`})),await F(e.queryByRole(`list`)).toBeNull(),await R(()=>F(new FormData(n).getAll(`attachments`).filter(e=>e.size>0)).toHaveLength(0))}},Q={args:{disabled:!0,defaultFiles:[B]},play:async({canvas:e})=>{await F(e.getByRole(`button`,{name:`Choose files`})).toBeDisabled(),await F(e.getByRole(`button`,{name:`Remove Q3 report.pdf`})).toBeDisabled()}},$={args:{name:`attachments`},render:e=>(0,P.jsx)(`form`,{"aria-label":`Expense claim`,children:(0,P.jsx)(A,{...e})}),play:async({canvas:e,canvasElement:t})=>{W(t,[B]),W(t,[V]);let n=new FormData(e.getByRole(`form`)).getAll(`attachments`);await F(n.map(e=>e.name)).toEqual([`Q3 report.pdf`,`team-photo.jpg`])}},_e=[`Default`,`Rejected`,`Drop`,`Single`,`WithStatus`,`Required`,`Controlled`,`Disabled`,`InForm`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFiles: [report, photo, file('contract.pdf', 1_200_000, 'application/pdf')],
    getFileStatus: f => f.name === 'team-photo.jpg' ? {
      progress: 45
    } : f.name === 'contract.pdf' ? {
      error: 'Upload failed. Try again.'
    } : undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Uploading team-photo.jpg'
    })).toHaveAttribute('aria-valuenow', '45');
    await expect(canvas.getByText('Upload failed. Try again.')).toBeVisible();
  }
}`,...Y.parameters?.docs?.source},description:{story:"Uploading is yours; `getFileStatus` shows how it is going.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{J as a,K as i,Q as n,Y as o,ue as r,ve as s,G as t};