import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as l,t as u}from"./Pictured-DOIgaTd2.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./Tooltip-C5EQMDXx.js";import{r as _,t as v}from"./Avatar-Br9NGvV-.js";import{r as y,t as b}from"./TextInput-vfco79YG.js";import{n as x,t as S}from"./Link-Bhk0TW_i.js";var C=t({Anatomy:()=>B,Blur:()=>P,Closed:()=>V,Default:()=>j,Disabled:()=>I,DoShortLabel:()=>U,DontEssentialInfo:()=>W,Group:()=>F,Hover:()=>N,HoverCardAnatomy:()=>X,HoverCardFocus:()=>q,HoverCardPerson:()=>K,HoverCardPicture:()=>Z,LongContent:()=>M,OpenPicture:()=>H,__namedExportsOrder:()=>Q,anatomyParts:()=>z,default:()=>k,hoverCardParts:()=>Y}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{s(),l(),a(),_(),r(),x(),y(),f(),m(),w=n(),{expect:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Overlays/Tooltip`,tags:[`beta`],component:p,args:{content:`Copy link`,children:(0,w.jsx)(i,{isIconOnly:!0,"aria-label":`Copy link`,appearance:`ghost`,variant:`accent`,children:(0,w.jsx)(o,{name:`external`})})},argTypes:{content:{description:`What the tooltip says. Short: a label or a hint, never the only way to learn something essential.`,control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The trigger: one focusable element, such as a Button. Tooltip merges its props onto it rather than wrapping it.`,control:!1,table:{type:{summary:`ReactElement`}}},side:{description:`Which side of the trigger it opens on. Flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'top'`}}},align:{description:`How it lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'center'`}}},delay:{description:`Milliseconds of hover before it opens. Focus opens it at once.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`300`}}},closeDelay:{description:`Milliseconds before it closes once the pointer leaves.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},disabled:{description:`Never open, e.g. while the trigger's label is already visible.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},container:{description:"Where the tooltip renders instead of `<body>`, e.g. an element in fullscreen, where a tooltip in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`,`hoverCardParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,w.jsx)(`div`,{style:{padding:`var(--space-12)`,display:`flex`,justifyContent:`center`},children:e()})]},A=()=>O(document.body),j={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await E.tab(),await T(t).toHaveFocus();let n=await A().findByRole(`tooltip`,{},{timeout:300});await T(n).toHaveTextContent(`Copy link`),await T(t).toHaveAttribute(`aria-describedby`,n.id),await T(t).toHaveAccessibleDescription(`Copy link`),await E.keyboard(`{Escape}`),await D(()=>T(A().queryByRole(`tooltip`)).toBeNull()),await T(t).not.toHaveAttribute(`aria-describedby`)}},M={args:{content:`Anyone with the link can view this file. Change it under Share → General access.`,defaultOpen:!0,children:(0,w.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Link sharing on`});await T(t).toHaveAccessibleDescription(`Anyone with the link can view this file. Change it under Share → General access.`)}},N={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await E.hover(t),await new Promise(e=>setTimeout(e,100)),await T(A().queryByRole(`tooltip`)).toBeNull(),await T(await A().findByRole(`tooltip`)).toHaveTextContent(`Copy link`),await E.unhover(t),await D(()=>T(A().queryByRole(`tooltip`)).toBeNull())}},P={render:e=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,w.jsx)(p,{...e}),(0,w.jsx)(i,{appearance:`outlined`,children:`Next`})]}),play:async({canvas:e})=>{await E.tab(),await A().findByRole(`tooltip`,{},{timeout:300}),await E.tab(),await T(e.getByRole(`button`,{name:`Next`})).toHaveFocus(),await D(()=>T(A().queryByRole(`tooltip`)).toBeNull())}},F={render:()=>(0,w.jsx)(h,{children:(0,w.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-1)`},children:[`plus`,`minus`,`search`,`more`].map(e=>(0,w.jsx)(p,{content:e[0].toUpperCase()+e.slice(1),children:(0,w.jsx)(i,{isIconOnly:!0,"aria-label":e,appearance:`ghost`,variant:`accent`,children:(0,w.jsx)(o,{name:e})})},e))})})},I={args:{disabled:!0},play:async({canvas:e})=>{await E.tab(),await T(e.getByRole(`button`)).toHaveFocus(),await new Promise(e=>setTimeout(e,100)),await T(A().queryByRole(`tooltip`)).toBeNull()}},L=e=>(0,w.jsx)(u,{positioner:d.positioner,style:{display:`flex`,flexDirection:`column-reverse`,alignItems:`center`,gap:6},children:t=>(0,w.jsx)(p,{...e,open:!0,container:t})}),R={content:`Anyone with the link can view this file. Change it under Share → General access.`,children:(0,w.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},z=[{name:`Container`,selector:`[role="tooltip"]`,description:`Inverted surface with the text, 6px from the trigger. At most 20rem wide.`},{name:`Trigger`,selector:`button[aria-describedby]`,description:`One focusable element. While the tooltip is open, its aria-describedby points at it.`}],B={tags:[`!dev`],parameters:{picture:!0},args:R,render:L,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`tooltip`,{hidden:!0}),r=await c(t,z);await T(r[0]).toBe(n),await T(r[1]).toHaveAttribute(`aria-describedby`,n.id)}},V={tags:[`!dev`],parameters:{picture:!0},args:R},H={tags:[`!dev`],parameters:{picture:!0},args:R,render:L},U={tags:[`!dev`],parameters:{picture:!0},render:L},W={tags:[`!dev`],parameters:{picture:!0},args:{content:`At least 12 characters, with a number and a symbol.`,children:(0,w.jsx)(i,{isIconOnly:!0,"aria-label":`Password rules`,appearance:`ghost`,variant:`accent`,children:(0,w.jsx)(o,{name:`info`})})},render:e=>(0,w.jsxs)(`div`,{style:{display:`flex`,alignItems:`end`,gap:`var(--space-1)`},children:[(0,w.jsx)(b,{label:`Password`,type:`password`}),L(e)]})},G={trigger:(0,w.jsx)(S,{href:`#mary`,children:`Mary Thompson`}),avatar:(0,w.jsx)(v,{size:`lg`,initials:`MT`,color:`teal`}),title:`Mary Thompson`,description:`Finance lead, Accounts Payable · Active 5m ago`,action:(0,w.jsx)(i,{size:`sm`,appearance:`outlined`,children:`Message`})},K={render:()=>(0,w.jsxs)(`p`,{style:{margin:0},children:[`Approved by `,(0,w.jsx)(g,{...G,delay:300}),` on 12 March.`]}),play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Mary Thompson`});await E.hover(t);let n=await D(()=>{let e=document.querySelector(`.${d.card}`);return T(e).not.toBeNull(),e});await D(()=>T(O(n).getByText(`Finance lead, Accounts Payable · Active 5m ago`)).toBeVisible()),await E.hover(n),await T(O(n).getByRole(`button`,{name:`Message`})).toBeVisible(),await E.unhover(n),await D(()=>T(document.querySelector(`.${d.card}`)).toBeNull())}},q={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,w.jsx)(g,{...G,delay:0}),(0,w.jsx)(i,{appearance:`outlined`,children:`Next`})]}),play:async({canvas:e})=>{await E.tab(),await T(e.getByRole(`link`,{name:`Mary Thompson`})).toHaveFocus(),await D(()=>T(document.querySelector(`.${d.card}`)).not.toBeNull()),await E.keyboard(`{Escape}`),await D(()=>T(document.querySelector(`.${d.card}`)).toBeNull()),await E.keyboard(`{Shift>}{Tab}{/Shift}`),await E.tab(),await D(()=>T(document.querySelector(`.${d.card}`)).not.toBeNull()),await E.tab(),await T(e.getByRole(`button`,{name:`Next`})).toHaveFocus()}},J=e=>(0,w.jsx)(u,{positioner:d.cardPositioner,style:{display:`flex`,flexDirection:`column`,alignItems:`start`,gap:6},children:t=>(0,w.jsx)(g,{...e,open:!0,container:t})}),Y=[{name:`Container`,selector:`.${d.card}`,description:"A raised `--popover` surface, 6px from the link, at most 20rem wide."},{name:`Avatar`,selector:`.${d.cardAvatar}`,description:`Optional. At the start, beside the name and the meta.`},{name:`Name`,selector:`.${d.cardTitle}`,description:`What is previewed: a person, a record, a document.`},{name:`Meta`,selector:`.${d.cardDescription}`,description:`Optional. One or two muted lines: role, team, last active.`},{name:`Action`,selector:`.${d.cardAction}`,description:`Optional. A shortcut that the linked page offers too.`},{name:`Trigger`,selector:`a`,description:`A link to what the card previews. Hover or focus opens the card.`}],X={tags:[`!dev`],parameters:{picture:!0},render:()=>J(G),play:async({canvasElement:e})=>{await c(e,Y)}},Z={tags:[`!dev`],parameters:{picture:!0},render:()=>J({...G,action:void 0})},Q=[`Default`,`LongContent`,`Hover`,`Blur`,`Group`,`Disabled`,`anatomyParts`,`Anatomy`,`Closed`,`OpenPicture`,`DoShortLabel`,`DontEssentialInfo`,`HoverCardPerson`,`HoverCardFocus`,`hoverCardParts`,`HoverCardAnatomy`,`HoverCardPicture`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Open from the start. Only one tooltip is open at a time, so this is the one on the docs page.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"Hover opens it after `delay`; pointer leave closes it.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Moving focus away closes it.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Once one tooltip in a group is open, the next opens without the delay.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Every part present, the tooltip open in place.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing
}`,...V.parameters?.docs?.source},description:{story:`Specs, States: closed, the trigger alone.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing,
  render: picture
}`,...H.parameters?.docs?.source},description:{story:`Specs, States: open.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...U.parameters?.docs?.source},description:{story:`Guidelines, Do: a short label for an icon-only button.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Guidelines, Don't: something the reader needs, hidden in a tooltip.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    margin: 0
  }}>
      Approved by <HoverCard {...mary} delay={300} /> on 12 March.
    </p>,
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'Mary Thompson'
    });
    await userEvent.hover(link);
    const card = await waitFor(() => {
      const el = document.querySelector(\`.\${styles.card}\`);
      expect(el).not.toBeNull();
      return el as HTMLElement;
    });
    // Visible once it has faded in.
    await waitFor(() => expect(within(card).getByText('Finance lead, Accounts Payable · Active 5m ago')).toBeVisible());
    // The pointer can cross to the card: closeDelay keeps it open on the way.
    await userEvent.hover(card);
    await expect(within(card).getByRole('button', {
      name: 'Message'
    })).toBeVisible();
    await userEvent.unhover(card);
    await waitFor(() => expect(document.querySelector(\`.\${styles.card}\`)).toBeNull());
  }
}`,...K.parameters?.docs?.source},description:{story:`Hover card: a preview of a person on hover or focus of a link to them.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    alignItems: 'center'
  }}>
      <HoverCard {...mary} delay={0} />
      <Button appearance="outlined">Next</Button>
    </div>,
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Mary Thompson'
    })).toHaveFocus();
    await waitFor(() => expect(document.querySelector(\`.\${styles.card}\`)).not.toBeNull());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(document.querySelector(\`.\${styles.card}\`)).toBeNull());
    // Not a dialog: focus stays on the link, and Tab moves past the card, its action included.
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await userEvent.tab();
    await waitFor(() => expect(document.querySelector(\`.\${styles.card}\`)).not.toBeNull());
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Next'
    })).toHaveFocus();
  }
}`,...q.parameters?.docs?.source},description:{story:`Keyboard focus on the link opens it too, after the same delay.`,...q.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: () => cardPicture(mary),
  play: async ({
    canvasElement
  }) => {
    await expectAnatomy(canvasElement, hoverCardParts);
  }
}`,...X.parameters?.docs?.source},description:{story:`Every part of the hover card present, open in place.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: () => cardPicture({
    ...mary,
    action: undefined
  })
}`,...Z.parameters?.docs?.source},description:{story:`Overview and Specs: the hover card open, without an action.`,...Z.parameters?.docs?.description}}}})))()}export{W as a,q as c,M as d,H as f,$ as g,Y as h,U as i,K as l,z as m,V as n,F as o,C as p,j as r,X as s,B as t,Z as u};