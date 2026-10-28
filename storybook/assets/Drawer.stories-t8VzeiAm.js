import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./Pictured-DOIgaTd2.js";import{n as u,t as d}from"./Select-BsYPTVUS.js";import{r as f,t as p}from"./TextInput-vfco79YG.js";import{a as m,i as h,n as g,r as _,t as v}from"./Drawer-DTbJ5PGE.js";var y=t({Anatomy:()=>B,Bottom:()=>F,CloseButton:()=>H,Default:()=>k,Dismissing:()=>A,DoQuickView:()=>W,DontConfirm:()=>G,InitialFocus:()=>N,KeepInput:()=>j,Left:()=>M,Long:()=>I,RightToLeft:()=>P,Sides:()=>V,__namedExportsOrder:()=>K,anatomyParts:()=>z,default:()=>D}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{b=n(),o(),c(),i(),u(),f(),_(),m(),x=r(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Overlays/Drawer`,tags:[`beta`],component:v,args:{trigger:(0,x.jsx)(a,{children:`Edit customer`}),title:`Edit customer`,description:`Changes apply to every open invoice for this customer.`,children:(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,x.jsx)(p,{label:`Company`,defaultValue:`Northwind Traders`,isFullWidth:!0}),(0,x.jsx)(p,{label:`Contact`,defaultValue:`Sam Rivera`,isFullWidth:!0}),(0,x.jsx)(p,{label:`Email`,defaultValue:`sam@northwind.example`,isFullWidth:!0})]}),footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{render:(0,x.jsx)(a,{variant:`secondary`}),children:`Cancel`}),(0,x.jsx)(a,{children:`Save`})]}),onOpenChange:C()},argTypes:{title:{description:`Required: it names the dialog. Say what the drawer holds: "Filters", "Invoice INV-0042".`,control:`text`,table:{type:{summary:`ReactNode`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere, e.g. a table row.",control:!1,table:{type:{summary:`ReactElement`}}},description:{description:"Optional, under the title in `--muted-foreground`. Read as the dialog's description.",control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The body. Scrolls between the header and the footer, which stay in view.`,control:!1,table:{type:{summary:`ReactNode`}}},footer:{description:"Actions, pinned to the bottom, right-aligned, the main one last. Close it from a button with `<DrawerClose render={<Button />}>`.",control:!1,table:{type:{summary:`ReactNode`}}},side:{description:"The edge it slides in from, and the way a swipe dismisses it. `bottom` is a sheet as tall as its content.",control:`inline-radio`,options:[`right`,`left`,`bottom`],table:{type:{summary:`'right' | 'left' | 'bottom'`},defaultValue:{summary:`'right'`}}},size:{description:"Width of a side drawer: 20rem (`sm`), 28rem (`md`) or 40rem (`lg`), always leaving a touch target of backdrop. Ignored at the bottom.",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},hasCloseButton:{description:`The close button in the corner.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},closeLabel:{description:`Accessible name of the close button.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Close'`}}},closeOnBackdropClick:{description:`Close on a press on the backdrop. Turn it off for a form that would lose its input.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},initialFocus:{description:`Where focus goes on open. By default, the drawer itself, so its title is read first.`,control:!1,table:{type:{summary:`RefObject<HTMLElement | null>`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, on close, on Escape, on a press outside and on a swipe.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, traps focus, locks page scroll and makes the rest of the page inert. `false` drops those three, for pictures of a drawer; the backdrop still covers the page.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the drawer renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},O=()=>E(document.body),k={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Edit customer`});await w.click(n);let r=await O().findByRole(`dialog`,{name:`Edit customer`});await S(r).toHaveAccessibleDescription(`Changes apply to every open invoice for this customer.`),await S(n.closest(`[aria-hidden="true"]`)).not.toBeNull(),await T(()=>S(getComputedStyle(document.documentElement).overflow+getComputedStyle(document.body).overflow).toContain(`hidden`)),await T(()=>S(r).toHaveFocus()),await S(e.onOpenChange).toHaveBeenLastCalledWith(!0),await T(()=>{let e=r.getBoundingClientRect();S(Math.round(e.right)).toBe(window.innerWidth),S(Math.round(e.height)).toBe(window.innerHeight)}),await w.click(E(r).getByRole(`button`,{name:`Cancel`})),await T(()=>S(O().queryByRole(`dialog`)).toBeNull()),await S(n).toHaveFocus(),await w.keyboard(`{Enter}`);let i=await O().findByRole(`dialog`);await T(()=>S(i).toHaveFocus()),await w.tab(),await S(E(i).getByRole(`button`,{name:`Close`})).toHaveFocus(),await w.keyboard(`{Escape}`),await T(()=>S(O().queryByRole(`dialog`)).toBeNull()),await S(n).toHaveFocus()}},A={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Edit customer`});await w.click(t);let n=await O().findByRole(`dialog`);await w.keyboard(`{Escape}`),await T(()=>S(O().queryByRole(`dialog`)).toBeNull()),await w.click(t),n=await O().findByRole(`dialog`),await w.click(n.parentElement,{clientX:2,clientY:2}),await T(()=>S(O().queryByRole(`dialog`)).toBeNull()),await w.click(t),n=await O().findByRole(`dialog`),await w.click(E(n).getByRole(`button`,{name:`Close`})),await T(()=>S(O().queryByRole(`dialog`)).toBeNull())}},j={args:{closeOnBackdropClick:!1},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Edit customer`}));let t=await O().findByRole(`dialog`);await w.click(t.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await S(O().getByRole(`dialog`)).toBeVisible(),await w.keyboard(`{Escape}`),await T(()=>S(O().queryByRole(`dialog`)).toBeNull())}},M={args:{side:`left`,size:`sm`,trigger:(0,x.jsx)(a,{appearance:`outlined`,children:`Filters`}),title:`Filters`,description:void 0,children:(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,x.jsx)(d,{label:`Status`,options:[`Any`,`Draft`,`Sent`,`Paid`,`Overdue`],defaultValue:`Any`,isFullWidth:!0}),(0,x.jsx)(d,{label:`Owner`,options:[`Anyone`,`Me`,`My team`],defaultValue:`Anyone`,isFullWidth:!0})]}),footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{render:(0,x.jsx)(a,{variant:`secondary`}),children:`Clear`}),(0,x.jsx)(g,{render:(0,x.jsx)(a,{}),children:`Apply`})]})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Filters`}));let t=await O().findByRole(`dialog`,{name:`Filters`});await T(()=>S(Math.round(t.getBoundingClientRect().left)).toBe(0)),await w.click(E(t).getByRole(`combobox`,{name:`Status`}));let n=await O().findByRole(`option`,{name:`Paid`});await T(()=>{let e=n.getBoundingClientRect(),t=document.elementFromPoint(e.x+e.width/2,e.y+e.height/2);return S(n.contains(t)).toBe(!0)})}},N={render:function(e){let t=(0,b.useRef)(null);return(0,x.jsx)(v,{...e,initialFocus:t,children:(0,x.jsx)(p,{ref:t,label:`Note`,isFullWidth:!0}),title:`Add a note`,description:void 0,trigger:(0,x.jsx)(a,{children:`Add note`})})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Add note`}));let t=await O().findByRole(`dialog`,{name:`Add a note`});await T(()=>S(E(t).getByRole(`textbox`,{name:`Note`})).toHaveFocus())}},P={play:async({canvas:e})=>{document.documentElement.dir=`rtl`;try{await w.click(e.getByRole(`button`,{name:`Edit customer`}));let t=await O().findByRole(`dialog`);await T(()=>S(Math.round(t.getBoundingClientRect().right)).toBe(window.innerWidth)),await w.keyboard(`{Escape}`),await T(()=>S(O().queryByRole(`dialog`)).toBeNull())}finally{document.documentElement.dir=``}}},F={args:{side:`bottom`,trigger:(0,x.jsx)(a,{appearance:`outlined`,children:`Share`}),title:`Share invoice INV-0042`,description:void 0,children:(0,x.jsx)(p,{label:`Link`,defaultValue:`https://pay.example/inv-0042`,readOnly:!0,isFullWidth:!0}),footer:(0,x.jsx)(g,{render:(0,x.jsx)(a,{}),children:`Done`})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Share`}));let t=await O().findByRole(`dialog`,{name:`Share invoice INV-0042`});await T(()=>{let e=t.getBoundingClientRect();S(Math.round(e.bottom)).toBe(window.innerHeight),S(Math.round(e.width)).toBe(window.innerWidth),S(e.height).toBeLessThan(window.innerHeight/2)})}},I={args:{title:`Invoice INV-0042`,description:void 0,size:`lg`,trigger:(0,x.jsx)(a,{appearance:`outlined`,children:`View invoice`}),children:(0,x.jsx)(`div`,{children:Array.from({length:20},(e,t)=>(0,x.jsxs)(`p`,{style:{margin:`0 0 var(--space-3)`},children:[`Line `,t+1,`. Consulting, 8 hours at the agreed day rate, billed to the Northwind Traders account.`]},t))}),footer:(0,x.jsx)(g,{render:(0,x.jsx)(a,{}),children:`Close invoice`})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`View invoice`}));let t=await O().findByRole(`dialog`),n=E(t).getByRole(`button`,{name:`Close invoice`});await T(()=>S(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight)),await T(()=>S(t).toHaveFocus()),await w.tab(),await w.tab(),await S(document.activeElement).toHaveTextContent(`Line 1.`)}},L=({width:e=`min(40rem, 100vw - 10rem)`,height:t=`24rem`,...n})=>(0,x.jsx)(l,{style:{position:`relative`,contain:`layout paint`,inlineSize:e,blockSize:t,borderRadius:`var(--radius-panel)`},children:e=>(0,x.jsx)(v,{...n,trigger:void 0,open:!0,isModal:!1,container:e})}),R=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{variant:`secondary`,children:`Cancel`}),(0,x.jsx)(a,{children:`Save`})]}),z=[{name:`Backdrop`,selector:`.${h.backdrop}`,description:`A scrim over the page. It blocks the page until the drawer closes.`},{name:`Container`,selector:`[role="dialog"]`,description:`The panel, against one edge, full height (or full width at the bottom).`},{name:`Header`,selector:`.${h.header}`,description:`Title, close button and description. Stays in view.`},{name:`Title`,selector:`[role="dialog"] h2`,description:`Required: it names the dialog.`},{name:`Close button`,selector:`button[aria-label="Close"]`,description:`On by default.`},{name:`Description`,selector:`.${h.description}`,description:`Optional. What the drawer is for.`},{name:`Body`,selector:`.${h.body}`,description:`children. Scrolls between header and footer.`},{name:`Footer`,selector:`.${h.footer}`,description:`Actions, pinned to the bottom, right-aligned, the main one last.`}],B={tags:[`!dev`],args:{size:`sm`,footer:R},render:L,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`dialog`,{hidden:!0}),r=await s(t,z);await S(r[1]).toBe(n),await S(r[3]).toHaveTextContent(`Edit customer`),await S(getComputedStyle(document.body).overflow).not.toBe(`hidden`)}},V={tags:[`!dev`],render:e=>(0,x.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-4)`},children:[`right`,`left`,`bottom`].map(t=>(0,x.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:L({...e,side:t,size:`sm`,title:t===`bottom`?`Bottom`:t===`left`?`Left`:`Right`,description:void 0,children:void 0,footer:(0,x.jsx)(a,{children:`Done`}),width:`15rem`,height:`14rem`})},t))})},H={tags:[`!dev`],args:{size:`sm`,description:void 0,children:void 0,footer:void 0},render:e=>L({...e,width:`17rem`,height:`6rem`})},U=(0,x.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`,gap:`var(--space-2) var(--space-4)`,margin:0},children:[(0,x.jsx)(`dt`,{children:`Customer`}),(0,x.jsx)(`dd`,{style:{margin:0},children:`Northwind Traders`}),(0,x.jsx)(`dt`,{children:`Amount`}),(0,x.jsx)(`dd`,{style:{margin:0},children:`$4,200.00`}),(0,x.jsx)(`dt`,{children:`Due`}),(0,x.jsx)(`dd`,{style:{margin:0},children:`12 Nov 2026`})]}),W={tags:[`!dev`],args:{size:`sm`,title:`Invoice INV-0042`,description:void 0,children:U,footer:(0,x.jsx)(a,{appearance:`outlined`,children:`Open invoice`})},render:e=>L({...e,width:`min(26rem, 100vw - 10rem)`,height:`16rem`})},G={tags:[`!dev`],args:{size:`sm`,title:`Delete invoice?`,description:`INV-0042 is deleted for everyone.`,children:void 0,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{variant:`secondary`,children:`Keep`}),(0,x.jsx)(a,{variant:`destructive`,children:`Delete`})]})},render:e=>L({...e,width:`min(26rem, 100vw - 10rem)`,height:`16rem`})},K=[`Default`,`Dismissing`,`KeepInput`,`Left`,`InitialFocus`,`RightToLeft`,`Bottom`,`Long`,`anatomyParts`,`Anatomy`,`Sides`,`CloseButton`,`DoQuickView`,`DontConfirm`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Edit customer'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Edit customer'
    });
    await expect(dialog).toHaveAccessibleDescription('Changes apply to every open invoice for this customer.');
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull();
    await waitFor(() => expect(getComputedStyle(document.documentElement).overflow + getComputedStyle(document.body).overflow).toContain('hidden'));
    // Focus goes to the panel itself, so its title is read first.
    await waitFor(() => expect(dialog).toHaveFocus());
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Against the right edge, full height.
    await waitFor(() => {
      const r = dialog.getBoundingClientRect();
      expect(Math.round(r.right)).toBe(window.innerWidth);
      expect(Math.round(r.height)).toBe(window.innerHeight);
    });
    // Cancel is a DrawerClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
    // From the keyboard too: the panel first, then Tab reaches the close button.
    await userEvent.keyboard('{Enter}');
    const again = await body().findByRole('dialog');
    await waitFor(() => expect(again).toHaveFocus());
    await userEvent.tab();
    await expect(within(again).getByRole('button', {
      name: 'Close'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Edit customer'
    });
    await userEvent.click(trigger);
    let dialog = await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // A press outside, left of the drawer, closes it too.
    await userEvent.click(trigger);
    dialog = await body().findByRole('dialog');
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // So does the close button.
    await userEvent.click(trigger);
    dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnBackdropClick: false
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit customer'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await expect(body().getByRole('dialog')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...j.parameters?.docs?.source},description:{story:`A form that would lose its input: a press outside does nothing; Escape and the buttons still close it.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left',
    size: 'sm',
    trigger: <Button appearance="outlined">Filters</Button>,
    title: 'Filters',
    description: undefined,
    children: <div style={{
      display: 'grid',
      gap: 'var(--space-4)'
    }}>
        <Select label="Status" options={['Any', 'Draft', 'Sent', 'Paid', 'Overdue']} defaultValue="Any" isFullWidth />
        <Select label="Owner" options={['Anyone', 'Me', 'My team']} defaultValue="Anyone" isFullWidth />
      </div>,
    footer: <>
        <DrawerClose render={<Button variant="secondary" />}>Clear</DrawerClose>
        <DrawerClose render={<Button />}>Apply</DrawerClose>
      </>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Filters'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Filters'
    });
    await waitFor(() => expect(Math.round(dialog.getBoundingClientRect().left)).toBe(0));
    // A Select opened inside a drawer lists its options above it.
    await userEvent.click(within(dialog).getByRole('combobox', {
      name: 'Status'
    }));
    const option = await body().findByRole('option', {
      name: 'Paid'
    });
    await waitFor(() => {
      const r = option.getBoundingClientRect();
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return expect(option.contains(hit)).toBe(true);
    });
  }
}`,...M.parameters?.docs?.source},description:{story:`From the left edge.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const ref = useRef<HTMLInputElement>(null);
    return <Drawer {...args} initialFocus={ref} children={<TextInput ref={ref} label="Note" isFullWidth />} title="Add a note" description={undefined} trigger={<Button>Add note</Button>} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add note'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Add a note'
    });
    await waitFor(() => expect(within(dialog).getByRole('textbox', {
      name: 'Note'
    })).toHaveFocus());
  }
}`,...N.parameters?.docs?.source},description:{story:"`initialFocus` sends focus to a field instead of the close button.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    document.documentElement.dir = 'rtl';
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Edit customer'
      }));
      const dialog = await body().findByRole('dialog');
      await waitFor(() => expect(Math.round(dialog.getBoundingClientRect().right)).toBe(window.innerWidth));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    } finally {
      document.documentElement.dir = '';
    }
  }
}`,...P.parameters?.docs?.source},description:{story:"`side` is physical: a right drawer stays on the right of a right-to-left page.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    trigger: <Button appearance="outlined">Share</Button>,
    title: 'Share invoice INV-0042',
    description: undefined,
    children: <TextInput label="Link" defaultValue="https://pay.example/inv-0042" readOnly isFullWidth />,
    footer: <DrawerClose render={<Button />}>Done</DrawerClose>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Share invoice INV-0042'
    });
    await waitFor(() => {
      const r = dialog.getBoundingClientRect();
      expect(Math.round(r.bottom)).toBe(window.innerHeight);
      expect(Math.round(r.width)).toBe(window.innerWidth);
      expect(r.height).toBeLessThan(window.innerHeight / 2);
    });
  }
}`,...F.parameters?.docs?.source},description:{story:`A bottom sheet: full width, as tall as its content.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invoice INV-0042',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">View invoice</Button>,
    children: <div>
        {Array.from({
        length: 20
      }, (_, i) => <p key={i} style={{
        margin: '0 0 var(--space-3)'
      }}>
            Line {i + 1}. Consulting, 8 hours at the agreed day rate, billed to the Northwind Traders account.
          </p>)}
      </div>,
    footer: <DrawerClose render={<Button />}>Close invoice</DrawerClose>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'View invoice'
    }));
    const dialog = await body().findByRole('dialog');
    // The body scrolls; the footer stays on screen.
    const done = within(dialog).getByRole('button', {
      name: 'Close invoice'
    });
    await waitFor(() => expect(done.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight));
    // A body of text is a tab stop, so the keyboard can scroll it. Wait for
    // the panel to take focus first: until it does, focus is still on the
    // trigger and Tab lands on Base UI's focus guard instead.
    await waitFor(() => expect(dialog).toHaveFocus());
    await userEvent.tab();
    await userEvent.tab();
    await expect(document.activeElement).toHaveTextContent('Line 1.');
  }
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    footer: editFooter
  },
  render: picture,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const dialog = await canvas.findByRole('dialog', {
      hidden: true
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toBe(dialog);
    await expect(found[3]).toHaveTextContent('Edit customer');
    await expect(getComputedStyle(document.body).overflow).not.toBe('hidden');
  }
}`,...B.parameters?.docs?.source},description:{story:`Every part present, the drawer open in place.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-4)'
  }}>
      {(['right', 'left', 'bottom'] as const).map(side => <div key={side} style={{
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
          {picture({
        ...args,
        side,
        size: 'sm',
        title: side === 'bottom' ? 'Bottom' : side === 'left' ? 'Left' : 'Right',
        description: undefined,
        children: undefined,
        footer: <Button>Done</Button>,
        width: '15rem',
        height: '14rem'
      })}
        </div>)}
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Overview, Variants: the three sides as pictures.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    description: undefined,
    children: undefined,
    footer: undefined
  },
  render: args => picture({
    ...args,
    width: '17rem',
    height: '6rem'
  })
}`,...H.parameters?.docs?.source},description:{story:`Specs, States: the close button, in a drawer with only a title.`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    title: 'Invoice INV-0042',
    description: undefined,
    children: record,
    footer: <Button appearance="outlined">Open invoice</Button>
  },
  render: args => picture({
    ...args,
    width: 'min(26rem, 100vw - 10rem)',
    height: '16rem'
  })
}`,...W.parameters?.docs?.source},description:{story:`Guidelines, Do: a record looked at from its list, which stays in place behind it.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    title: 'Delete invoice?',
    description: 'INV-0042 is deleted for everyone.',
    children: undefined,
    footer: <>
        <Button variant="secondary">Keep</Button>
        <Button variant="destructive">Delete</Button>
      </>
  },
  render: args => picture({
    ...args,
    width: 'min(26rem, 100vw - 10rem)',
    height: '16rem'
  })
}`,...G.parameters?.docs?.source},description:{story:`Guidelines, Don't: a yes-or-no decision pushed to the edge of the screen.`,...G.parameters?.docs?.description}}}})))()}export{W as a,N as c,I as d,P as f,q as h,A as i,j as l,z as m,H as n,G as o,V as p,k as r,y as s,B as t,M as u};