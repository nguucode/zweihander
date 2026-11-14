import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-CAzJH1mZ.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./Pictured-DOIgaTd2.js";import{n as l,t as u}from"./Select-K7Tvpi3R.js";import{r as d,t as f}from"./TextInput-BeBTUF8_.js";import{a as p,i as m,n as h,r as g,t as _}from"./Modal-Doq9jB4-.js";var v=t({Alert:()=>k,Anatomy:()=>I,CloseButton:()=>L,Default:()=>D,Dismissing:()=>O,DoNameTheActions:()=>z,DontOkCancel:()=>B,Long:()=>j,ScreenGutter:()=>M,WithSelect:()=>A,__namedExportsOrder:()=>V,anatomyParts:()=>F,default:()=>T}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{a(),s(),r(),l(),d(),g(),p(),y=n(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Overlays/Modal`,tags:[`beta`],component:_,args:{trigger:(0,y.jsx)(i,{children:`Edit profile`}),title:`Edit profile`,description:`Changes show on your public page straight away.`,children:(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,y.jsx)(f,{label:`Name`,defaultValue:`Sam Rivera`,isFullWidth:!0}),(0,y.jsx)(f,{label:`Title`,defaultValue:`Product designer`,isFullWidth:!0})]}),footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{render:(0,y.jsx)(i,{variant:`secondary`}),children:`Cancel`}),(0,y.jsx)(i,{children:`Save`})]}),onOpenChange:x()},argTypes:{title:{description:`Required: it names the dialog. Say what the modal is for: "Edit profile", "Delete “Atlas”?".`,control:`text`,table:{type:{summary:`ReactNode`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1,table:{type:{summary:`ReactElement`}}},description:{description:"Optional, under the title in `--color-text-subtlest`. Read as the dialog's description.",control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The body. Scrolls when the modal is taller than the screen; title and footer stay in view.`,control:!1,table:{type:{summary:`ReactNode`}}},footer:{description:"Actions, right-aligned, the main one last. Close it from a button with `<ModalClose render={<Button />}>`.",control:!1,table:{type:{summary:`ReactNode`}}},size:{description:"Max width: 400px (`sm`), 600px (`md`) or 800px (`lg`). Never wider than the screen less a 60px gutter either side; under 480px the modal is the whole screen.",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},hasCloseButton:{description:`The close button in the corner.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`!isAlert`}}},closeLabel:{description:`Accessible name of the close button.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Close'`}}},isAlert:{description:'A decision that must be made: `role="alertdialog"`, no close button by default, and a press on the backdrop does not close it.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},closeOnBackdropClick:{description:"Close on a press on the backdrop. Ignored when `isAlert`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},initialFocus:{description:`Where focus goes on open. By default, the first focusable element.`,control:!1,table:{type:{summary:`RefObject<HTMLElement | null>`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, on close, on Escape and on a press outside.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, traps focus, locks page scroll and makes the rest of the page inert. `false` drops those three, for pictures of a modal; the backdrop still covers the page. Ignored when `isAlert`: an alert is always modal.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the modal renders instead of `<body>`, e.g. an element in fullscreen, where a modal in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},E=()=>w(document.body),D={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Edit profile`});await S.click(n);let r=await E().findByRole(`dialog`,{name:`Edit profile`});await b(r).toHaveAccessibleDescription(`Changes show on your public page straight away.`),await b(n.closest(`[aria-hidden="true"]`)).not.toBeNull(),await b(getComputedStyle(document.body).overflow).toBe(`hidden`),await C(()=>b(r.contains(document.activeElement)).toBe(!0)),await b(e.onOpenChange).toHaveBeenLastCalledWith(!0);let i=r.querySelector(`.${m.footer}`);await b(parseFloat(getComputedStyle(r).paddingTop)+parseFloat(getComputedStyle(r).borderTopWidth)).toBe(24),await b(getComputedStyle(i).marginTop).toBe(`16px`),await b(getComputedStyle(i).columnGap).toBe(`8px`),await S.click(w(r).getByRole(`button`,{name:`Cancel`})),await C(()=>b(E().queryByRole(`dialog`)).toBeNull()),await b(n).toHaveFocus()}},O={play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Edit profile`}));let t=await E().findByRole(`dialog`);await S.keyboard(`{Escape}`),await C(()=>b(E().queryByRole(`dialog`)).toBeNull()),await S.click(e.getByRole(`button`,{name:`Edit profile`})),t=await E().findByRole(`dialog`),await S.click(t.parentElement,{clientX:2,clientY:2}),await C(()=>b(E().queryByRole(`dialog`)).toBeNull())}},k={args:{isAlert:!0,trigger:(0,y.jsx)(i,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. This cannot be undone.`,children:void 0,size:`sm`,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{render:(0,y.jsx)(i,{variant:`secondary`}),children:`Keep project`}),(0,y.jsx)(i,{variant:`destructive`,children:`Delete`})]})},play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Delete project`}));let t=await E().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await b(w(t).queryByRole(`button`,{name:`Close`})).toBeNull(),await S.click(t.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await C(()=>b(E().getByRole(`alertdialog`)).toBeVisible()),await S.click(w(t).getByRole(`button`,{name:`Keep project`})),await C(()=>b(E().queryByRole(`alertdialog`)).toBeNull()),await S.click(e.getByRole(`button`,{name:`Delete project`})),await E().findByRole(`alertdialog`),await S.keyboard(`{Escape}`),await C(()=>b(E().queryByRole(`alertdialog`)).toBeNull())}},A={args:{title:`Invite people`,description:void 0,trigger:(0,y.jsx)(i,{children:`Invite`}),children:(0,y.jsx)(u,{label:`Role`,options:[`Viewer`,`Commenter`,`Editor`],defaultValue:`Viewer`,isFullWidth:!0}),footer:(0,y.jsx)(i,{children:`Send invites`})},play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Invite`}));let t=await E().findByRole(`dialog`);await S.click(w(t).getByRole(`combobox`,{name:`Role`}));let n=await E().findByRole(`option`,{name:`Editor`});await C(()=>{let e=n.getBoundingClientRect(),t=document.elementFromPoint(e.x+e.width/2,e.y+e.height/2);return b(n.contains(t)).toBe(!0)})}},j={args:{title:`Terms of service`,description:void 0,size:`lg`,trigger:(0,y.jsx)(i,{appearance:`outlined`,children:`Read the terms`}),children:(0,y.jsx)(`div`,{children:Array.from({length:12},(e,t)=>(0,y.jsxs)(`p`,{style:{margin:`0 0 var(--space-3)`},children:[t+1,`. These terms govern your use of the service. By creating an account you agree to them, and to the privacy notice that explains what we collect and why.`]},t))}),footer:(0,y.jsx)(h,{render:(0,y.jsx)(i,{}),children:`Accept`})},play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Read the terms`}));let t=await E().findByRole(`dialog`),n=w(t).getByRole(`button`,{name:`Accept`});await C(()=>b(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight))}},M={tags:[`!dev`],args:{size:`lg`,children:(0,y.jsx)(`div`,{children:Array.from({length:30},(e,t)=>(0,y.jsxs)(`p`,{children:[`Line `,t+1]},t))})},render:e=>(0,y.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[360,480,768,1280].map(t=>(0,y.jsx)(c,{"data-screen":t,style:{position:`relative`,contain:`layout paint`,inlineSize:t,blockSize:600},children:t=>(0,y.jsx)(_,{...e,trigger:void 0,open:!0,isModal:!1,container:t})},t))}),play:async({canvasElement:e})=>{let t=t=>{let n=e.querySelector(`[data-screen="${t}"]`),r=n.querySelector(`[role="dialog"]`),[i,a]=[n.getBoundingClientRect(),r.getBoundingClientRect()];return{dialog:r,rect:[a.left-i.left,a.top-i.top,a.width,a.height].map(Math.round)}};await C(()=>b(e.querySelectorAll(`[role="dialog"]`)).toHaveLength(4)),await C(()=>b(t(360).rect).toEqual([0,0,360,600]));let n=t(360).dialog;await b(getComputedStyle(n).borderTopLeftRadius).toBe(`0px`),await b(getComputedStyle(n).boxShadow).toBe(`none`);let r=n.querySelector(`.${m.footer}`);await b(Math.round(n.getBoundingClientRect().bottom-r.getBoundingClientRect().bottom)).toBe(24);let i=n.querySelector(`.${m.body}`);await b(i.scrollHeight).toBeGreaterThan(i.clientHeight),await C(()=>b(t(480).rect).toEqual([60,60,360,480])),await b(getComputedStyle(t(480).dialog).borderTopLeftRadius).not.toBe(`0px`),await b(getComputedStyle(t(480).dialog).boxShadow).not.toBe(`none`),await C(()=>b(t(768).rect).toEqual([60,60,648,480])),await C(()=>b(t(1280).rect).toEqual([240,60,800,480]))}},N=({width:e,height:t=`28.5rem`,...n})=>(0,y.jsx)(c,{"data-modal-picture":e?void 0:``,style:{position:`relative`,contain:`layout paint`,inlineSize:e??`min(45rem, 100vw - 10rem)`,blockSize:t,borderRadius:`var(--radius-panel)`},children:t=>(0,y.jsxs)(y.Fragment,{children:[!e&&(0,y.jsx)(`style`,{children:`@media (max-width: 30rem) { [data-modal-picture] { zoom: 0.75; inline-size: calc((100vw - 10rem) / 0.75) !important; } }`}),(0,y.jsx)(_,{...n,trigger:void 0,open:!0,isModal:!1,container:t})]})}),P=(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{variant:`secondary`,children:`Cancel`}),(0,y.jsx)(i,{children:`Save`})]}),F=[{name:`Backdrop`,selector:`.${m.backdrop}`,description:`A scrim over the whole page. It blocks the page until the modal closes.`},{name:`Container`,selector:`[role="dialog"]`,description:`The surface, 60px from the top and sides of the screen. Under 480px it is the whole screen.`},{name:`Title`,selector:`[role="dialog"] h2`,description:`Required: it names the dialog.`},{name:`Close button`,selector:`button[aria-label="Close"]`,description:`On by default, off for an alert.`},{name:`Description`,selector:`.${m.description}`,description:`Optional. What the modal is for, or what will happen.`},{name:`Body`,selector:`.${m.body}`,description:`children. Scrolls when the modal is taller than the screen.`},{name:`Footer`,selector:`.${m.footer}`,description:`Actions, right-aligned, the main one last.`}],I={tags:[`!dev`],args:{footer:P},render:N,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`dialog`,{hidden:!0}),r=await o(t,F);await b(r[1]).toBe(n),await b(r[2]).toHaveTextContent(`Edit profile`),await b(getComputedStyle(document.body).overflow).not.toBe(`hidden`)}},L={tags:[`!dev`],args:{size:`sm`,description:void 0,children:void 0,footer:void 0},render:e=>N({...e,width:`15rem`,height:`5rem`})},R={title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. This cannot be undone.`,children:void 0,size:`sm`,hasCloseButton:!1},z={tags:[`!dev`],args:{...R,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{variant:`secondary`,children:`Keep project`}),(0,y.jsx)(i,{variant:`destructive`,children:`Delete`})]})},render:e=>N({...e,width:`min(22rem, 100vw - 10rem)`,height:`14rem`})},B={tags:[`!dev`],args:{...R,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{variant:`secondary`,children:`Cancel`}),(0,y.jsx)(i,{children:`OK`})]})},render:e=>N({...e,width:`min(22rem, 100vw - 10rem)`,height:`14rem`})},V=[`Default`,`Dismissing`,`Alert`,`WithSelect`,`Long`,`ScreenGutter`,`anatomyParts`,`Anatomy`,`CloseButton`,`DoNameTheActions`,`DontOkCancel`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Edit profile'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Edit profile'
    });
    await expect(dialog).toHaveAccessibleDescription('Changes show on your public page straight away.');
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull();
    await expect(getComputedStyle(document.body).overflow).toBe('hidden');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Atlassian's modal: 24px around, 16px above the body and above the footer, 8px between the buttons.
    const footer = dialog.querySelector(\`.\${styles.footer}\`)!;
    await expect(parseFloat(getComputedStyle(dialog).paddingTop) + parseFloat(getComputedStyle(dialog).borderTopWidth)).toBe(24);
    await expect(getComputedStyle(footer).marginTop).toBe('16px');
    await expect(getComputedStyle(footer).columnGap).toBe('8px');
    // Cancel is a ModalClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    let dialog = await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // A press outside the popup closes it too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    dialog = await body().findByRole('dialog');
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isAlert: true,
    trigger: <Button variant="destructive">Delete project</Button>,
    title: 'Delete “Atlas”?',
    description: 'Its 214 files and every comment on them are deleted for everyone. This cannot be undone.',
    children: undefined,
    size: 'sm',
    footer: <>
        <ModalClose render={<Button variant="secondary" />}>Keep project</ModalClose>
        <Button variant="destructive">Delete</Button>
      </>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete “Atlas”?'
    });
    await expect(within(dialog).queryByRole('button', {
      name: 'Close'
    })).toBeNull();
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await waitFor(() => expect(body().getByRole('alertdialog')).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Keep project'
    }));
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    // Escape still closes it.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    await body().findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...k.parameters?.docs?.source},description:{story:`A decision that must be made: role="alertdialog", no close button, and a press outside does nothing.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invite people',
    description: undefined,
    trigger: <Button>Invite</Button>,
    children: <Select label="Role" options={['Viewer', 'Commenter', 'Editor']} defaultValue="Viewer" isFullWidth />,
    footer: <Button>Send invites</Button>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Invite'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('combobox', {
      name: 'Role'
    }));
    const option = await body().findByRole('option', {
      name: 'Editor'
    });
    await waitFor(() => {
      const r = option.getBoundingClientRect();
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return expect(option.contains(hit)).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`A Select opened inside a modal lists its options above it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms of service',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">Read the terms</Button>,
    children: <div>
        {Array.from({
        length: 12
      }, (_, i) => <p key={i} style={{
        margin: '0 0 var(--space-3)'
      }}>
            {i + 1}. These terms govern your use of the service. By creating an account you agree to them, and to the
            privacy notice that explains what we collect and why.
          </p>)}
      </div>,
    footer: <ModalClose render={<Button />}>Accept</ModalClose>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Read the terms'
    }));
    const dialog = await body().findByRole('dialog');
    // The body scrolls; the footer stays on screen.
    const accept = within(dialog).getByRole('button', {
      name: 'Accept'
    });
    await waitFor(() => expect(accept.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight));
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'lg',
    children: <div>
        {Array.from({
        length: 30
      }, (_, i) => <p key={i}>Line {i + 1}</p>)}
      </div>
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {[360, 480, 768, 1280].map(width => <Pictured key={width} data-screen={width} style={{
      position: 'relative',
      contain: 'layout paint',
      inlineSize: width,
      blockSize: 600
    }}>
          {container => <Modal {...args} trigger={undefined} open isModal={false} container={container} />}
        </Pictured>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    // [left, top, width, height] of the modal inside its screen, and of its footer's bottom edge.
    const box = (width: number) => {
      const frame = canvasElement.querySelector(\`[data-screen="\${width}"]\`)!;
      const dialog = frame.querySelector('[role="dialog"]')!;
      const [f, d] = [frame.getBoundingClientRect(), dialog.getBoundingClientRect()];
      return {
        dialog,
        rect: [d.left - f.left, d.top - f.top, d.width, d.height].map(Math.round)
      };
    };
    await waitFor(() => expect(canvasElement.querySelectorAll('[role="dialog"]')).toHaveLength(4));
    // Under 480px: the whole screen, with no corner and no shadow, and the footer at the bottom.
    await waitFor(() => expect(box(360).rect).toEqual([0, 0, 360, 600]));
    const phone = box(360).dialog;
    await expect(getComputedStyle(phone).borderTopLeftRadius).toBe('0px');
    await expect(getComputedStyle(phone).boxShadow).toBe('none');
    const footer = phone.querySelector(\`.\${styles.footer}\`)!;
    await expect(Math.round(phone.getBoundingClientRect().bottom - footer.getBoundingClientRect().bottom)).toBe(24);
    // The body still scrolls there.
    const scroller = phone.querySelector(\`.\${styles.body}\`)!;
    await expect(scroller.scrollHeight).toBeGreaterThan(scroller.clientHeight);
    // From 480px: 60px from the top and from each side, and never taller than the screen less 60px above and below.
    await waitFor(() => expect(box(480).rect).toEqual([60, 60, 360, 480]));
    await expect(getComputedStyle(box(480).dialog).borderTopLeftRadius).not.toBe('0px');
    await expect(getComputedStyle(box(480).dialog).boxShadow).not.toBe('none');
    await waitFor(() => expect(box(768).rect).toEqual([60, 60, 648, 480]));
    // Wide enough for the size: 800px (lg), centred, still 60px from the top.
    await waitFor(() => expect(box(1280).rect).toEqual([240, 60, 800, 480]));
  }
}`,...M.parameters?.docs?.source},description:{story:`How the modal sits on a screen 360, 480, 768 and 1280px wide. Each frame
stands in for the screen: it contains layout, so the modal's fixed
viewport, the size container its rules ask, is the frame.`,...M.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    footer: editFooter
  },
  render: picture,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Rendered inside the story, not <body>.
    const dialog = await canvas.findByRole('dialog', {
      hidden: true
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toBe(dialog);
    await expect(found[2]).toHaveTextContent('Edit profile');
    // Not modal: the page around the picture keeps its scroll (Default
    // shows a modal locks it on <body>).
    await expect(getComputedStyle(document.body).overflow).not.toBe('hidden');
  }
}`,...I.parameters?.docs?.source},description:{story:`Every part present, the modal open in place.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    description: undefined,
    children: undefined,
    footer: undefined
  },
  render: args => picture({
    ...args,
    width: '15rem',
    height: '5rem'
  })
}`,...L.parameters?.docs?.source},description:{story:`Specs, States: the close button, in a modal with only a title.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...alert,
    footer: <>
        <Button variant="secondary">Keep project</Button>
        <Button variant="destructive">Delete</Button>
      </>
  },
  render: args => picture({
    ...args,
    width: 'min(22rem, 100vw - 10rem)',
    height: '14rem'
  })
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Do: the buttons say what they do.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...alert,
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button>OK</Button>
      </>
  },
  render: args => picture({
    ...args,
    width: 'min(22rem, 100vw - 10rem)',
    height: '14rem'
  })
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Don't: OK and Cancel make the reader go back to the question.`,...B.parameters?.docs?.description}}}})))()}export{O as a,j as c,A as d,F as f,D as i,v as l,I as n,z as o,H as p,L as r,B as s,k as t,M as u};