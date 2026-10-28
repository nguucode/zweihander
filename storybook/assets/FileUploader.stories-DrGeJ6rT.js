import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./FileUploader-D7a28Akg.js";var u=t({Anatomy:()=>z,Controlled:()=>F,Default:()=>O,Disabled:()=>I,DoStateTheRules:()=>B,DontHideTheRules:()=>V,Drop:()=>A,FileTypes:()=>N,InForm:()=>L,Rejected:()=>k,Required:()=>P,Single:()=>j,WithStatus:()=>M,__namedExportsOrder:()=>H,anatomyParts:()=>R,default:()=>w});function d(e){let[t,n]=(0,f.useState)([]);return(0,p.jsxs)(`form`,{"aria-label":`Upload`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,p.jsx)(l,{label:`Attachments`,name:`attachments`,multiple:!0,files:t,onFilesChange:t=>{n(t),e.onFilesChange(t)}}),(0,p.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n([]),children:`Clear after upload`})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{f=n(),o(),i(),c(),p=r(),{expect:m,fireEvent:h,fn:g,userEvent:_,waitFor:v}=__STORYBOOK_MODULE_TEST__,y=(e,t,n)=>new File([new Uint8Array(t)],e,{type:n,lastModified:179e10}),b=y(`Q3 report.pdf`,24e4,`application/pdf`),x=y(`team-photo.jpg`,18e5,`image/jpeg`),S=y(`raw-scan.png`,12e6,`image/png`),C=y(`party.gif`,9e4,`image/gif`),w={title:`Components/Inputs/File Uploader`,tags:[`beta`],component:l,argTypes:{files:{description:"Controlled list. Pair with `onFilesChange`.",control:!1},defaultFiles:{description:`Starting list when uncontrolled.`,control:!1},onFilesChange:{description:`The list after an add or a remove. Rejected files are never in it. Start uploads here.`,control:!1},onReject:{description:"Files that did not pass `accept`, `maxSize` or `maxFiles`: `{ file, reason, message }[]`, `reason` being `type`, `size` or `count`.",control:!1},accept:{description:"As the native attribute: extensions and MIME types, e.g. `.pdf,image/*`. Checked on drop too.",control:`text`},multiple:{description:`Many files, appended. Without it, a new file replaces the chosen one.`,control:`boolean`},maxSize:{description:`Largest file, in bytes.`,control:`number`},maxFiles:{description:"Most files in the list, with `multiple`.",control:`number`},label:{description:`Names the whole uploader, a group.`,control:`text`},helperText:{description:`Inside the drop zone, under the button: what is allowed, e.g. "PNG or JPG, up to 5 MB."`,control:`text`},getFileStatus:{description:`Upload progress (0–100) or a short error per file. The uploader does not upload: your code does, and reports here.`,control:!1},name:{description:`Submitted with the form, as a native file input carrying the whole list.`,control:`text`},disabled:{description:`Fades the icon and buttons; nothing can be added or removed.`,control:`boolean`},required:{description:`An empty submit shows "Choose at least one file." and focuses the Choose button.`,control:`boolean`},isFullWidth:{description:`Fills the width of its container instead of 24rem.`,control:`boolean`},className:{description:`On the outer group.`,control:!1}},args:{label:`Attachments`,helperText:`PDF, PNG or JPG, up to 5 MB each.`,accept:`.pdf,image/png,image/jpeg`,maxSize:5e6,multiple:!0,onFilesChange:g(),onReject:g()},excludeStories:[`anatomyParts`]},T=e=>{let t=new DataTransfer;return e.forEach(e=>t.items.add(e)),t},E=(e,t,n)=>e.dispatchEvent(new DragEvent(t,{bubbles:!0,cancelable:!0,dataTransfer:T(n)})),D=(e,t)=>{let n=e.querySelector(`input[type=file]`);n.files=T(t).files,h.change(n)},O={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`group`,{name:`Attachments`}),i=t.getByRole(`button`,{name:`Choose files`});await m(i).toHaveAccessibleDescription(`PDF, PNG or JPG, up to 5 MB each.`),D(n,[b,x]),await m(e.onFilesChange).toHaveBeenLastCalledWith([b,x]),await m(t.getByRole(`status`)).toHaveTextContent(`2 files added.`);let a=t.getByRole(`list`,{name:`Chosen files`});await m(a.querySelectorAll(`li`)).toHaveLength(2),await m(r).toHaveTextContent(`240 kB`),await _.click(t.getByRole(`button`,{name:`Remove Q3 report.pdf`})),await m(t.getByRole(`status`)).toHaveTextContent(`Q3 report.pdf removed.`),await v(()=>m(t.getByRole(`button`,{name:`Remove team-photo.jpg`})).toHaveFocus()),await _.click(t.getByRole(`button`,{name:`Remove team-photo.jpg`})),await v(()=>m(i).toHaveFocus()),await m(e.onFilesChange).toHaveBeenLastCalledWith([])}},k={args:{maxFiles:2},play:async({args:e,canvas:t,canvasElement:n})=>{D(n,[b,S,C,x,y(`notes.pdf`,10,`application/pdf`)]),await m(e.onFilesChange).toHaveBeenLastCalledWith([b,x]),await m(e.onReject).toHaveBeenCalledWith([m.objectContaining({reason:`size`,file:S}),m.objectContaining({reason:`type`,file:C}),m.objectContaining({reason:`count`})]),await m(t.getByText(`raw-scan.png is larger than 5 MB.`)).toBeVisible(),await m(t.getByText(`party.gif is not an accepted type.`)).toBeVisible(),await m(t.getByText(`notes.pdf was not added: the limit is 2 files.`)).toBeVisible(),await m(t.getByRole(`status`)).toHaveTextContent(`2 files added. 3 not added.`),await m(t.getByRole(`button`,{name:`Choose files`})).toHaveAccessibleDescription(/party\.gif is not an accepted type/)}},A={play:async({args:e,canvas:t})=>{let n=t.getByText(/Drag files here/).parentElement;E(n,`dragenter`,[]),await v(()=>m(n.className).toMatch(/dragging/)),E(n,`drop`,[b]),await v(()=>m(n.className).not.toMatch(/dragging/)),await m(e.onFilesChange).toHaveBeenLastCalledWith([b]),E(n,`drop`,[b]),await m(e.onFilesChange).toHaveBeenCalledTimes(1)}},j={args:{multiple:!1,label:`Avatar`,accept:`image/*`,helperText:`A square image works best.`},play:async({args:e,canvas:t,canvasElement:n})=>{await m(t.getByText(`Drag a file here or`)).toBeVisible(),D(n,[x]),await m(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`team-photo.jpg`),D(n,[y(`me.png`,3e4,`image/png`)]),await m(e.onFilesChange).toHaveBeenLastCalledWith([m.objectContaining({name:`me.png`})]),e.onFilesChange.mockClear(),D(n,[b]),await m(t.getByText(`Q3 report.pdf is not an accepted type.`)).toBeVisible(),await m(e.onFilesChange).not.toHaveBeenCalled(),await m(t.getByRole(`list`,{name:`Chosen file`})).toHaveTextContent(`me.png`)}},M={args:{defaultFiles:[b,x,y(`contract.pdf`,12e5,`application/pdf`)],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:e.name===`contract.pdf`?{error:`Upload failed`}:void 0},play:async({canvas:e})=>{await m(e.getByRole(`progressbar`,{name:`Uploading team-photo.jpg`})).toHaveAttribute(`aria-valuenow`,`45`),await m(e.getByText(`Upload failed`)).toBeVisible()}},N={args:{accept:void 0,helperText:void 0,defaultFiles:[y(`Proposal.docx`,84e3,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`),y(`Budget.xlsx`,52e3,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`),y(`Kick-off.pptx`,34e5,`application/vnd.openxmlformats-officedocument.presentationml.presentation`),b,x,y(`Interview.mp3`,41e5,`audio/mpeg`),y(`notes.txt`,900,`text/plain`),y(`Minutes of the quarterly steering committee meeting, final version.docx`,128e3,`application/msword`)]}},P={args:{required:!0},render:e=>(0,p.jsx)(`form`,{"aria-label":`Expense claim`,onSubmit:e=>e.preventDefault(),children:(0,p.jsx)(l,{...e})}),play:async({canvas:e,canvasElement:t})=>{await m(e.getByRole(`group`,{name:`Attachments (required)`})).toBeVisible(),e.getByRole(`form`).requestSubmit();let n=e.getByRole(`button`,{name:`Choose files`});await v(()=>m(n).toHaveFocus()),await m(n).toHaveAccessibleDescription(/Choose at least one file\./),D(t,[b]),await m(e.queryByText(`Choose at least one file.`)).toBeNull()}},F={render:e=>(0,p.jsx)(d,{onFilesChange:e.onFilesChange}),play:async({canvas:e,canvasElement:t})=>{D(t,[b,x]);let n=e.getByRole(`form`);await m(new FormData(n).getAll(`attachments`)).toHaveLength(2),await _.click(e.getByRole(`button`,{name:`Clear after upload`})),await m(e.queryByRole(`list`)).toBeNull(),await v(()=>m(new FormData(n).getAll(`attachments`).filter(e=>e.size>0)).toHaveLength(0))}},I={args:{disabled:!0,defaultFiles:[b]},play:async({canvas:e})=>{await m(e.getByRole(`button`,{name:`Choose files`})).toBeDisabled(),await m(e.getByRole(`button`,{name:`Remove Q3 report.pdf`})).toBeDisabled()}},L={args:{name:`attachments`},render:e=>(0,p.jsx)(`form`,{"aria-label":`Expense claim`,children:(0,p.jsx)(l,{...e})}),play:async({canvas:e,canvasElement:t})=>{D(t,[b]),D(t,[x]);let n=new FormData(e.getByRole(`form`)).getAll(`attachments`);await m(n.map(e=>e.name)).toEqual([`Q3 report.pdf`,`team-photo.jpg`])}},R=[{name:`Label`,selector:`[id$="-label"]`,description:`Names the whole uploader, a group.`},{name:`Drop zone`,selector:`div:has(> input[type="file"])`,description:`Dashed edge; solid while a file is dragged over it.`},{name:`Choose button`,selector:`div:has(> input[type="file"]) > button`,description:`An accent contained Button. Opens the system picker: the way in for keyboard, screen reader and touch.`},{name:`Helper text`,selector:`[id$="-helper"]`,description:`What is allowed. Describes the Choose button.`},{name:`File row`,selector:`li`,description:`Type icon, name and size on one line. The name truncates, the size never does.`},{name:`Type icon`,selector:`li > svg`,description:`A page with a coloured badge for Word, Excel, PowerPoint, PDF, image and audio.`},{name:`Progress ring`,selector:`[role="progressbar"]`,description:`While getFileStatus reports progress under 100. An error takes its place.`},{name:`Remove button`,selector:`[data-remove]`,description:`A ghost icon Button named "Remove <file name>".`}],z={tags:[`!dev`],args:{defaultFiles:[x,b],getFileStatus:e=>e.name===`team-photo.jpg`?{progress:45}:void 0},play:async({canvasElement:e})=>{let t=await s(e,R);await m(t[2]).toHaveAccessibleName(`Choose files`),await m(t[4]).toContainElement(t[6])}},B={},V={tags:[`!dev`],args:{helperText:void 0}},H=[`Default`,`Rejected`,`Drop`,`Single`,`WithStatus`,`FileTypes`,`Required`,`Controlled`,`Disabled`,`InForm`,`anatomyParts`,`Anatomy`,`DoStateTheRules`,`DontHideTheRules`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Uploading is yours; `getFileStatus` shows how it is going.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    accept: undefined,
    helperText: undefined,
    defaultFiles: [file('Proposal.docx', 84_000, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), file('Budget.xlsx', 52_000, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'), file('Kick-off.pptx', 3_400_000, 'application/vnd.openxmlformats-officedocument.presentationml.presentation'), report, photo, file('Interview.mp3', 4_100_000, 'audio/mpeg'), file('notes.txt', 900, 'text/plain'), file('Minutes of the quarterly steering committee meeting, final version.docx', 128_000, 'application/msword')]
  }
}`,...N.parameters?.docs?.source},description:{story:`Word, Excel, PowerPoint, PDF, image and audio get a coloured badge; anything else the bare page.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A controlled list cleared from outside clears what the form sends, too.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Every part present: helper text, one file uploading and one done.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Do: the rules up front, so nobody learns them from a rejection.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: undefined
  }
}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Don't: no rules shown, so people learn them from a rejection.`,...V.parameters?.docs?.description}}}})))()}export{N as a,j as c,U as d,V as i,M as l,I as n,u as o,B as r,k as s,z as t,R as u};