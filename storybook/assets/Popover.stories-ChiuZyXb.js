import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./Pictured-DOIgaTd2.js";import{i as l,n as u,r as d,t as f}from"./Popover-Db3qGhTm.js";import{r as p,t as m}from"./TextInput-vfco79YG.js";var h=t({Anatomy:()=>R,ClickOutside:()=>O,CloseButton:()=>z,ContentOnly:()=>N,Default:()=>D,DoShortTask:()=>B,DontLongForm:()=>V,Modal:()=>P,ModalBlocksPage:()=>A,ModalTitleOnly:()=>F,NonModal:()=>k,Open:()=>M,OpenOnHover:()=>j,__namedExportsOrder:()=>H,anatomyParts:()=>L,default:()=>S}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{a(),s(),r(),p(),u(),l(),g=n(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Overlays/Popover`,tags:[`beta`],component:f,args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`Share`}),title:`Share this file`,description:`Anyone you invite can view and comment.`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`end`},children:[(0,g.jsx)(m,{label:`Email`,placeholder:`name@company.com`}),(0,g.jsx)(i,{children:`Invite`})]}),onOpenChange:v()},argTypes:{trigger:{description:`The element that opens it: one button. Popover merges its props onto it rather than wrapping it.`,control:!1,table:{type:{summary:`ReactElement`}}},title:{description:"Names the popover, which is a dialog. Without one, pass `aria-label`.",control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:"Optional, under the title in `--muted-foreground`. Read as the dialog's description.",control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The content: a short form, a filter, a list of options.`,control:!1,table:{type:{summary:`ReactNode`}}},side:{description:`Which side of the trigger it opens on. Flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'bottom'`}}},align:{description:`How it lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'center'`}}},hasCloseButton:{description:`A close button in the corner. Escape and a press outside close it either way.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},closeLabel:{description:`Accessible name of the close button.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Close'`}}},openOnHover:{description:`Open on hover as well as on click, for previews. Click, keyboard and touch still open it.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isModal:{description:`Trap focus inside while open, lock page scroll and block presses outside (Base UI's modal mode).`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen, where a popup in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},"aria-label":{description:"Names the popover when it has no `title`.",control:`text`,table:{type:{summary:`string`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,g.jsx)(`div`,{style:{minBlockSize:`16rem`,display:`flex`,justifyContent:`center`,alignItems:`start`,paddingBlock:`var(--space-6)`},children:e()})]},C=()=>x(document.body),w=e=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,g.jsx)(f,{...e}),(0,g.jsx)(i,{appearance:`outlined`,children:`Next`})]}),T=e=>{let t=e.getBoundingClientRect();return e.contains(document.elementFromPoint(t.left+t.width/2,t.top+t.height/2))},E=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),D={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Share`});await y.click(n);let r=await C().findByRole(`dialog`,{name:`Share this file`});await _(r).toHaveAccessibleDescription(`Anyone you invite can view and comment.`),await _(n).toHaveAttribute(`aria-expanded`,`true`),await _(n).toHaveAttribute(`aria-haspopup`,`dialog`),await _(e.onOpenChange).toHaveBeenLastCalledWith(!0),await b(()=>_(r.contains(document.activeElement)).toBe(!0)),await y.keyboard(`{Escape}`),await b(()=>_(C().queryByRole(`dialog`)).toBeNull()),await _(n).toHaveFocus()}},O={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Share`});await y.click(t);let n=await C().findByRole(`dialog`);await b(()=>_(n.contains(document.activeElement)).toBe(!0)),await y.click(document.body),await b(()=>_(C().queryByRole(`dialog`)).toBeNull()),await b(()=>_(t).toHaveFocus())}},k={render:w,play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Next`});await y.click(e.getByRole(`button`,{name:`Share`}));let n=await C().findByRole(`dialog`);await b(()=>_(n.contains(document.activeElement)).toBe(!0)),await _(T(t)).toBe(!0),await _(E()).toBe(!1);for(let e=0;e<5&&n.contains(document.activeElement);e++)await y.tab();await _(n.contains(document.activeElement)).toBe(!1)}},A={args:{isModal:!0},render:w,play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Next`});await y.click(e.getByRole(`button`,{name:`Share`})),await C().findByRole(`dialog`),await b(()=>_(E()).toBe(!0)),await _(T(t)).toBe(!1),await y.keyboard(`{Escape}`),await b(()=>_(C().queryByRole(`dialog`)).toBeNull()),await b(()=>_(E()).toBe(!1)),await _(T(t)).toBe(!0)}},j={args:{openOnHover:!0},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Share`});await y.tab(),await _(t).toHaveFocus(),await y.keyboard(`{Enter}`),await C().findByRole(`dialog`),await y.keyboard(`{Escape}`),await b(()=>_(C().queryByRole(`dialog`)).toBeNull()),await y.pointer({keys:`[TouchA]`,target:t}),await C().findByRole(`dialog`),await y.keyboard(`{Escape}`),await b(()=>_(C().queryByRole(`dialog`)).toBeNull()),await y.hover(t),await C().findByRole(`dialog`)}},M={args:{defaultOpen:!0,hasCloseButton:!0},play:async()=>{let e=await C().findByRole(`dialog`);await y.click(x(e).getByRole(`button`,{name:`Close`})),await b(()=>_(C().queryByRole(`dialog`)).toBeNull())}},N={args:{title:void 0,description:void 0,"aria-label":`Keyboard shortcuts`,trigger:(0,g.jsx)(i,{appearance:`ghost`,variant:`accent`,children:`Shortcuts`}),children:(0,g.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto auto`,gap:`var(--space-1) var(--space-4)`,margin:0},children:[(0,g.jsx)(`dt`,{children:`Search`}),(0,g.jsx)(`dd`,{style:{margin:0},children:`⌘ K`}),(0,g.jsx)(`dt`,{children:`New file`}),(0,g.jsx)(`dd`,{style:{margin:0},children:`⌘ N`})]})},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Shortcuts`}));let t=await C().findByRole(`dialog`,{name:`Keyboard shortcuts`});await b(()=>_(t).toBeVisible()),await _(t).toHaveTextContent(`⌘ K`)}},P={args:{isModal:!0},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Share`}));let t=await C().findByRole(`dialog`);await b(()=>_(t.contains(document.activeElement)).toBe(!0));let n=x(t).getByRole(`button`,{name:`Close`});await _(n).toHaveFocus(),await _(n.getBoundingClientRect().width).toBeGreaterThan(1),await y.tab(),await _(n).not.toHaveFocus(),await _(n.getBoundingClientRect().width).toBeLessThanOrEqual(1),await y.tab({shift:!0}),await _(n).toHaveFocus(),await _(n.getBoundingClientRect().width).toBeGreaterThan(1)}},F={args:{isModal:!0,description:void 0},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Share`}));let t=await C().findByRole(`dialog`),n=x(t).getByRole(`heading`,{name:`Share this file`}),r=x(t).getByRole(`textbox`,{name:`Email`}).closest(`div`).parentElement;await _(r.getBoundingClientRect().top-n.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(11)}},I=e=>(0,g.jsx)(c,{positioner:d.positioner,style:{display:`grid`,justifyItems:`center`,gap:6},children:t=>(0,g.jsx)(f,{...e,open:!0,container:t})}),L=[{name:`Trigger`,selector:`button[aria-haspopup="dialog"]`,description:`One button. Popover adds aria-expanded and aria-haspopup to it.`},{name:`Container`,selector:`[role="dialog"]`,description:`The surface, 6px from the trigger. At most 22rem wide.`},{name:`Title`,selector:`[role="dialog"] h2`,description:`Optional: names the popover. Without one, pass aria-label.`},{name:`Close button`,selector:`button[aria-label="Close"]`,description:`Optional, in the corner.`},{name:`Description`,selector:`.${d.description}`,description:`Optional. What the popover is for.`},{name:`Body`,selector:`.${d.body}`,description:`children: the content.`}],R={tags:[`!dev`],parameters:{picture:!0},args:{hasCloseButton:!0},render:I,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`dialog`,{hidden:!0}),r=await o(t,L);await _(r[1]).toBe(n),await _(r[2]).toHaveTextContent(`Share this file`)}},z={tags:[`!dev`],parameters:{picture:!0},args:{description:void 0,children:void 0,hasCloseButton:!0},render:I},B={tags:[`!dev`],parameters:{picture:!0},render:I},V={tags:[`!dev`],parameters:{picture:!0},args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`New project`}),title:`New project`,description:void 0,children:(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,g.jsx)(m,{label:`Name`,isFullWidth:!0}),(0,g.jsx)(m,{label:`Client`,isFullWidth:!0}),(0,g.jsx)(m,{label:`Budget`,isFullWidth:!0}),(0,g.jsx)(m,{label:`Start date`,isFullWidth:!0}),(0,g.jsx)(i,{children:`Create project`})]})},render:I},H=[`Default`,`ClickOutside`,`NonModal`,`ModalBlocksPage`,`OpenOnHover`,`Open`,`ContentOnly`,`Modal`,`ModalTitleOnly`,`anatomyParts`,`Anatomy`,`CloseButton`,`DoShortTask`,`DontLongForm`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Share'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Share this file'
    });
    await expect(dialog).toHaveAccessibleDescription('Anyone you invite can view and comment.');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Opening moves focus into the popup.
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    // Escape closes it and puts focus back on the trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Share'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await userEvent.click(document.body);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...O.parameters?.docs?.source},description:{story:`A click outside closes it and puts focus back on the trigger.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: withNeighbour,
  play: async ({
    canvas
  }) => {
    const next = canvas.getByRole('button', {
      name: 'Next'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    const dialog = await body().findByRole('dialog');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await expect(takesClicks(next)).toBe(true);
    await expect(isScrollLocked()).toBe(false);
    // Tab past the last control and focus is out of the popup.
    for (let i = 0; i < 5 && dialog.contains(document.activeElement); i++) await userEvent.tab();
    await expect(dialog.contains(document.activeElement)).toBe(false);
  }
}`,...k.parameters?.docs?.source},description:{story:`Non-modal: Tab can leave the popup, and the page around it still takes clicks and scrolls.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: true
  },
  render: withNeighbour,
  play: async ({
    canvas
  }) => {
    const next = canvas.getByRole('button', {
      name: 'Next'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    await body().findByRole('dialog');
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    await expect(takesClicks(next)).toBe(false);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(isScrollLocked()).toBe(false));
    await expect(takesClicks(next)).toBe(true);
  }
}`,...A.parameters?.docs?.source},description:{story:`Modal: page scroll is locked and clicks outside are blocked while it is open.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    openOnHover: true
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Share'
    });
    // Keyboard.
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // Touch: a tap.
    await userEvent.pointer({
      keys: '[TouchA]',
      target: trigger
    });
    await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // Hover.
    await userEvent.hover(trigger);
    await body().findByRole('dialog');
  }
}`,...j.parameters?.docs?.source},description:{story:"`openOnHover` adds hover to click: keyboard and touch still open it.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    hasCloseButton: true
  },
  play: async () => {
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...M.parameters?.docs?.source},description:{story:`Open from the start, with the close button.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    'aria-label': 'Keyboard shortcuts',
    trigger: <Button appearance="ghost" variant="accent">Shortcuts</Button>,
    children: <dl style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gap: 'var(--space-1) var(--space-4)',
      margin: 0
    }}>
        <dt>Search</dt>
        <dd style={{
        margin: 0
      }}>⌘ K</dd>
        <dt>New file</dt>
        <dd style={{
        margin: 0
      }}>⌘ N</dd>
      </dl>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Shortcuts'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Keyboard shortcuts'
    });
    // It fades in from opacity 0.
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(dialog).toHaveTextContent('⌘ K');
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    const dialog = await body().findByRole('dialog');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    // Focus moves in, to the first control. Base UI's modal mode then keeps
    // it there; a synthetic Tab cannot exercise that trap, so it is not asserted.
    // With no visible close button, a hidden one is rendered: Base UI only
    // traps focus when there is one, and it takes focus first.
    const close = within(dialog).getByRole('button', {
      name: 'Close'
    });
    await expect(close).toHaveFocus();
    // Shown while it has keyboard focus, so focus is never invisible...
    await expect(close.getBoundingClientRect().width).toBeGreaterThan(1);
    // ...and out of sight once focus moves on.
    await userEvent.tab();
    await expect(close).not.toHaveFocus();
    await expect(close.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    await userEvent.tab({
      shift: true
    });
    await expect(close).toHaveFocus();
    await expect(close.getBoundingClientRect().width).toBeGreaterThan(1);
  }
}`,...P.parameters?.docs?.source},description:{story:`Modal: focus moves inside and is kept there until it closes.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: true,
    description: undefined
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    const dialog = await body().findByRole('dialog');
    const title = within(dialog).getByRole('heading', {
      name: 'Share this file'
    });
    const field = within(dialog).getByRole('textbox', {
      name: 'Email'
    });
    const label = field.closest('div')!.parentElement!;
    // --space-3 (12px) from the title to the content, as without isModal.
    await expect(label.getBoundingClientRect().top - title.getBoundingClientRect().bottom).toBeGreaterThanOrEqual(11);
  }
}`,...F.parameters?.docs?.source},description:{story:`Modal with a title and no description: the hidden Close between them keeps the body's gap.`,...F.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    hasCloseButton: true
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
    await expect(found[2]).toHaveTextContent('Share this file');
  }
}`,...R.parameters?.docs?.source},description:{story:`Every part present, the popover open in place.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    description: undefined,
    children: undefined,
    hasCloseButton: true
  },
  render: picture
}`,...z.parameters?.docs?.source},description:{story:`Specs, States: the close button.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Do: a short task tied to the button that opens it.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    trigger: <Button appearance="outlined" variant="accent">New project</Button>,
    title: 'New project',
    description: undefined,
    children: <div style={{
      display: 'grid',
      gap: 'var(--space-3)'
    }}>
        <TextInput label="Name" isFullWidth />
        <TextInput label="Client" isFullWidth />
        <TextInput label="Budget" isFullWidth />
        <TextInput label="Start date" isFullWidth />
        <Button>Create project</Button>
      </div>
  },
  render: picture
}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Don't: a long form crammed into a popover.`,...V.parameters?.docs?.description}}}})))()}export{V as a,h as c,B as i,L as l,z as n,P as o,N as r,M as s,R as t,U as u};