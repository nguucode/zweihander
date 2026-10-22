import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-B7N9C5Fg.js";import{n as a,t as o}from"./icon-C8IlC69p.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as l,t as u}from"./Pictured-DOIgaTd2.js";import{a as d,i as f,n as p,r as m,t as h}from"./Tooltip-DmnB_X9q.js";import{n as g,t as _}from"./TextInput-BLOoJTSm.js";var v=t({Anatomy:()=>F,Blur:()=>k,Closed:()=>I,Default:()=>E,Disabled:()=>j,DoShortLabel:()=>R,DontEssentialInfo:()=>z,Group:()=>A,Hover:()=>O,LongContent:()=>D,OpenPicture:()=>L,__namedExportsOrder:()=>B,anatomyParts:()=>P,default:()=>w}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{s(),l(),a(),r(),g(),m(),d(),y=n(),{expect:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Overlays/Tooltip`,tags:[`beta`],component:h,args:{content:`Copy link`,children:(0,y.jsx)(i,{isIconOnly:!0,"aria-label":`Copy link`,appearance:`ghost`,variant:`accent`,children:(0,y.jsx)(o,{name:`external`})})},argTypes:{content:{description:`What the tooltip says. Short: a label or a hint, never the only way to learn something essential.`,control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The trigger: one focusable element, such as a Button. Tooltip merges its props onto it rather than wrapping it.`,control:!1,table:{type:{summary:`ReactElement`}}},side:{description:`Which side of the trigger it opens on. Flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'top'`}}},align:{description:`How it lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'center'`}}},delay:{description:`Milliseconds of hover before it opens. Focus opens it at once.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`300`}}},closeDelay:{description:`Milliseconds before it closes once the pointer leaves.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},disabled:{description:`Never open, e.g. while the trigger's label is already visible.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},container:{description:"Where the tooltip renders instead of `<body>`, e.g. an element in fullscreen, where a tooltip in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,y.jsx)(`div`,{style:{padding:`var(--space-12)`,display:`flex`,justifyContent:`center`},children:e()})]},T=()=>C(document.body),E={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await x.tab(),await b(t).toHaveFocus();let n=await T().findByRole(`tooltip`,{},{timeout:300});await b(n).toHaveTextContent(`Copy link`),await b(t).toHaveAttribute(`aria-describedby`,n.id),await b(t).toHaveAccessibleDescription(`Copy link`),await x.keyboard(`{Escape}`),await S(()=>b(T().queryByRole(`tooltip`)).toBeNull()),await b(t).not.toHaveAttribute(`aria-describedby`)}},D={args:{content:`Anyone with the link can view this file. Change it under Share → General access.`,defaultOpen:!0,children:(0,y.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Link sharing on`});await b(t).toHaveAccessibleDescription(`Anyone with the link can view this file. Change it under Share → General access.`)}},O={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await x.hover(t),await new Promise(e=>setTimeout(e,100)),await b(T().queryByRole(`tooltip`)).toBeNull(),await b(await T().findByRole(`tooltip`)).toHaveTextContent(`Copy link`),await x.unhover(t),await S(()=>b(T().queryByRole(`tooltip`)).toBeNull())}},k={render:e=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,y.jsx)(h,{...e}),(0,y.jsx)(i,{appearance:`outlined`,children:`Next`})]}),play:async({canvas:e})=>{await x.tab(),await T().findByRole(`tooltip`,{},{timeout:300}),await x.tab(),await b(e.getByRole(`button`,{name:`Next`})).toHaveFocus(),await S(()=>b(T().queryByRole(`tooltip`)).toBeNull())}},A={render:()=>(0,y.jsx)(p,{children:(0,y.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-1)`},children:[`plus`,`minus`,`search`,`more`].map(e=>(0,y.jsx)(h,{content:e[0].toUpperCase()+e.slice(1),children:(0,y.jsx)(i,{isIconOnly:!0,"aria-label":e,appearance:`ghost`,variant:`accent`,children:(0,y.jsx)(o,{name:e})})},e))})})},j={args:{disabled:!0},play:async({canvas:e})=>{await x.tab(),await b(e.getByRole(`button`)).toHaveFocus(),await new Promise(e=>setTimeout(e,100)),await b(T().queryByRole(`tooltip`)).toBeNull()}},M=e=>(0,y.jsx)(u,{positioner:f.positioner,style:{display:`flex`,flexDirection:`column-reverse`,alignItems:`center`,gap:6},children:t=>(0,y.jsx)(h,{...e,open:!0,container:t})}),N={content:`Anyone with the link can view this file. Change it under Share → General access.`,children:(0,y.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},P=[{name:`Container`,selector:`[role="tooltip"]`,description:`Inverted surface with the text, 6px from the trigger. At most 20rem wide.`},{name:`Trigger`,selector:`button[aria-describedby]`,description:`One focusable element. While the tooltip is open, its aria-describedby points at it.`}],F={tags:[`!dev`],parameters:{picture:!0},args:N,render:M,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`tooltip`,{hidden:!0}),r=await c(t,P);await b(r[0]).toBe(n),await b(r[1]).toHaveAttribute(`aria-describedby`,n.id)}},I={tags:[`!dev`],parameters:{picture:!0},args:N},L={tags:[`!dev`],parameters:{picture:!0},args:N,render:M},R={tags:[`!dev`],parameters:{picture:!0},render:M},z={tags:[`!dev`],parameters:{picture:!0},args:{content:`At least 12 characters, with a number and a symbol.`,children:(0,y.jsx)(i,{isIconOnly:!0,"aria-label":`Password rules`,appearance:`ghost`,variant:`accent`,children:(0,y.jsx)(o,{name:`info`})})},render:e=>(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`end`,gap:`var(--space-1)`},children:[(0,y.jsx)(_,{label:`Password`,type:`password`}),M(e)]})},B=[`Default`,`LongContent`,`Hover`,`Blur`,`Group`,`Disabled`,`anatomyParts`,`Anatomy`,`Closed`,`OpenPicture`,`DoShortLabel`,`DontEssentialInfo`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    // Focus opens it at once, without the 300ms hover delay.
    const tip = await body().findByRole('tooltip', {}, {
      timeout: 300
    });
    await expect(tip).toHaveTextContent('Copy link');
    // Read as the trigger's description while it is open, not as its name.
    await expect(trigger).toHaveAttribute('aria-describedby', tip.id);
    await expect(trigger).toHaveAccessibleDescription('Copy link');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
    await expect(trigger).not.toHaveAttribute('aria-describedby');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anyone with the link can view this file. Change it under Share → General access.',
    defaultOpen: true,
    children: <Button appearance="outlined">Link sharing on</Button>
  },
  play: async ({
    canvas
  }) => {
    // The tooltip describes the trigger; it does not rename it.
    const trigger = canvas.getByRole('button', {
      name: 'Link sharing on'
    });
    await expect(trigger).toHaveAccessibleDescription('Anyone with the link can view this file. Change it under Share → General access.');
  }
}`,...D.parameters?.docs?.source},description:{story:`Open from the start. Only one tooltip is open at a time, so this is the one on the docs page.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.hover(trigger);
    // Not yet: the 300ms delay is still running.
    await new Promise(r => setTimeout(r, 100));
    await expect(body().queryByRole('tooltip')).toBeNull();
    await expect(await body().findByRole('tooltip')).toHaveTextContent('Copy link');
    await userEvent.unhover(trigger);
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
  }
}`,...O.parameters?.docs?.source},description:{story:"Hover opens it after `delay`; pointer leave closes it.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-2)'
  }}>
      <Tooltip {...args} />
      <Button appearance="outlined">Next</Button>
    </div>,
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await body().findByRole('tooltip', {}, {
      timeout: 300
    });
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Next'
    })).toHaveFocus();
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
  }
}`,...k.parameters?.docs?.source},description:{story:`Moving focus away closes it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipGroup>
      <div style={{
      display: 'flex',
      gap: 'var(--space-1)'
    }}>
        {(['plus', 'minus', 'search', 'more'] as const).map(name => <Tooltip key={name} content={name[0].toUpperCase() + name.slice(1)}>
            <Button isIconOnly aria-label={name} appearance="ghost" variant="accent">
              <Icon name={name} />
            </Button>
          </Tooltip>)}
      </div>
    </TooltipGroup>
}`,...A.parameters?.docs?.source},description:{story:`Once one tooltip in a group is open, the next opens without the delay.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button')).toHaveFocus();
    await new Promise(r => setTimeout(r, 100));
    await expect(body().queryByRole('tooltip')).toBeNull();
  }
}`,...j.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing,
  render: picture,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Rendered inside the story, not <body>.
    const tip = await canvas.findByRole('tooltip', {
      hidden: true
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toBe(tip);
    await expect(found[1]).toHaveAttribute('aria-describedby', tip.id);
  }
}`,...F.parameters?.docs?.source},description:{story:`Every part present, the tooltip open in place.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing
}`,...I.parameters?.docs?.source},description:{story:`Specs, States: closed, the trigger alone.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing,
  render: picture
}`,...L.parameters?.docs?.source},description:{story:`Specs, States: open.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Do: a short label for an icon-only button.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    content: 'At least 12 characters, with a number and a symbol.',
    children: <Button isIconOnly aria-label="Password rules" appearance="ghost" variant="accent">
        <Icon name="info" />
      </Button>
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'end',
    gap: 'var(--space-1)'
  }}>
      <TextInput label="Password" type="password" />
      {picture(args)}
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Don't: something the reader needs, hidden in a tooltip.`,...z.parameters?.docs?.description}}}})))()}export{z as a,L as c,V as d,R as i,v as l,I as n,A as o,E as r,D as s,F as t,P as u};