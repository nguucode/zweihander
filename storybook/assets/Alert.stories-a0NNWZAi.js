import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{a as c,r as l}from"./story-helpers-EInZsLED.js";import{n as u,t as d}from"./Alert-C-O0NCPv.js";var f=t({Anatomy:()=>N,Appearances:()=>w,CloseLabel:()=>k,Default:()=>S,Dismissible:()=>E,DoSayWhatHappened:()=>P,DontVague:()=>F,Live:()=>D,LiveRoles:()=>O,Variants:()=>C,WithAction:()=>T,WithoutIcon:()=>A,__namedExportsOrder:()=>I,anatomyParts:()=>M,default:()=>v}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{p=n(),o(),i(),u(),l(),m=r(),{expect:h,fn:g,userEvent:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Notifications/Alert`,tags:[`beta`],component:d,args:{title:`Payment method expiring`,children:`The card ending in 4242 expires at the end of this month. Update it to avoid an interruption.`},argTypes:{variant:{description:"Colour by meaning. `danger` and `warning` also decide how `isLive` announces it.",control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`],table:{type:{summary:`'info' | 'success' | 'warning' | 'danger'`},defaultValue:{summary:`'info'`}}},appearance:{description:"Emphasis, the same three as Tag: `subtle` tint, `outlined` border, `solid` fill.",control:`inline-radio`,options:[`subtle`,`outlined`,`solid`],table:{type:{summary:`'subtle' | 'outlined' | 'solid'`},defaultValue:{summary:`'subtle'`}}},title:{description:`Optional, semibold. What happened, in a few words.`,control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The description: what it means and what to do.`,control:`text`,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode | false`},defaultValue:{summary:`the variant's icon`}}},action:{description:`Buttons or links under the description, e.g. "Retry".`,control:!1,table:{type:{summary:`ReactNode`}}},onClose:{description:`Shows a close button that calls this. The alert does not hide itself: remove it when this fires.`,control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}},closeLabel:{description:`The close button's accessible name.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Dismiss'`}}},isLive:{description:'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`). Off for an alert that is on the page from the start.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,m.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},y={display:`grid`,gap:`var(--space-3)`},b=[`info`,`success`,`warning`,`danger`],x=e=>{let t=document.createElement(`span`);t.style.color=`var(--ring)`,e.append(t);let n=getComputedStyle(t).color;return t.remove(),n},S={play:async({canvasElement:e})=>{await h(e.querySelector(`[role]`)).toBeNull()}},C={render:e=>(0,m.jsx)(`div`,{style:y,children:b.map(t=>(0,m.jsx)(d,{...e,variant:t,title:`${t[0].toUpperCase()}${t.slice(1)}`},t))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`svg`));await h(t).toHaveLength(b.length);for(let e of t)await h(e.closest(`[aria-hidden="true"]`)).not.toBeNull()}},w={render:e=>(0,m.jsx)(`div`,{style:y,children:[`subtle`,`outlined`,`solid`].map(t=>b.map(n=>(0,m.jsx)(d,{...e,appearance:t,variant:n,title:`${t} ${n}`,children:void 0},t+n)))})},T={args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,action:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{size:`sm`,variant:`destructive`,children:`Retry`}),(0,m.jsx)(a,{size:`sm`,variant:`accent`,appearance:`ghost`,children:`View details`})]})}},E={args:{onClose:g(),variant:`success`,title:`Profile saved`,children:void 0},render:function(e){let[t,n]=(0,p.useState)(!0);return t?(0,m.jsx)(d,{...e,onClose:t=>{e.onClose?.(t),n(!1)}}):(0,m.jsx)(`p`,{children:`Dismissed.`})},play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`button`,{name:`Dismiss`});await _.tab(),await h(r).toHaveFocus();let{outlineStyle:i,outlineWidth:a,outlineColor:o}=getComputedStyle(r);await h([i,a,o]).toEqual([`solid`,`2px`,x(n)]),await h(c(`pointer: coarse`,r,`::before`).map(e=>[e.style.inlineSize,e.style.blockSize])[0]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`]),await _.keyboard(`{Enter}`),await h(e.onClose).toHaveBeenCalledOnce(),await h(t.getByText(`Dismissed.`)).toBeVisible()}},D={render:function(e){let[t,n]=(0,p.useState)(null);return(0,m.jsxs)(`div`,{style:y,children:[(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,m.jsx)(a,{size:`sm`,appearance:`outlined`,onClick:()=>n(`danger`),children:`Fail`}),(0,m.jsx)(a,{size:`sm`,appearance:`outlined`,onClick:()=>n(`success`),children:`Succeed`})]}),t===`danger`&&(0,m.jsx)(d,{...e,isLive:!0,variant:`danger`,title:`Could not save`,children:`Try again in a minute.`}),t===`success`&&(0,m.jsx)(d,{...e,isLive:!0,variant:`success`,title:`Saved`,children:void 0})]})},play:async({canvas:e})=>{await _.click(e.getByRole(`button`,{name:`Fail`})),await h(e.getByRole(`alert`)).toHaveTextContent(`Could not save`),await _.click(e.getByRole(`button`,{name:`Succeed`})),await h(e.getByRole(`status`)).toHaveTextContent(`Saved`)}},O={render:e=>(0,m.jsx)(`div`,{style:y,children:b.map(t=>(0,m.jsx)(d,{...e,isLive:!0,variant:t,title:t,children:void 0},t))}),play:async({canvas:e})=>{await h(e.getAllByRole(`alert`).map(e=>e.textContent)).toEqual([`warning`,`danger`]),await h(e.getAllByRole(`status`).map(e=>e.textContent)).toEqual([`info`,`success`])}},k={args:{onClose:g(),closeLabel:`Hide this notice`},play:async({canvas:e})=>{await h(e.getByRole(`button`,{name:`Hide this notice`})).toBeVisible(),await h(e.queryByRole(`button`,{name:`Dismiss`})).toBeNull()}},A={args:{icon:!1,title:void 0,children:`Maintenance is scheduled for Sunday, 02:00–03:00 UTC.`},play:async({canvasElement:e})=>{await h(e.querySelector(`svg`)).toBeNull()}},j=`div:has(> button[aria-label="Dismiss"])`,M=[{name:`Container`,selector:j,description:`The box: tint, border or fill, from variant × appearance.`},{name:`Icon`,selector:`${j} > span`,description:`The variant's filled icon, one line tall. Replaceable, or none.`},{name:`Title`,selector:`${j} > div > div:nth-child(1)`,description:`Optional, semibold. What happened.`},{name:`Description`,selector:`${j} > div > div:nth-child(2)`,description:"`children`: what it means and what to do."},{name:`Action`,selector:`${j} > div > div:nth-child(3)`,description:`Optional buttons or links.`},{name:`Close button`,selector:`${j} > button`,description:"Shown when `onClose` is given."}],N={tags:[`!dev`],args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,onClose:g(),action:(0,m.jsx)(a,{size:`sm`,variant:`destructive`,children:`Retry`})},play:async({canvasElement:e})=>{let t=await s(e,M);await h(t[2]).toHaveTextContent(`Upload failed`),await h(t[4]).toHaveTextContent(`Retry`)}},P={args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,action:(0,m.jsx)(a,{size:`sm`,variant:`destructive`,children:`Retry`})}},F={tags:[`!dev`],args:{variant:`danger`,title:`Error`,children:`Something went wrong.`}},I=[`Default`,`Variants`,`Appearances`,`WithAction`,`Dismissible`,`Live`,`LiveRoles`,`CloseLabel`,`WithoutIcon`,`anatomyParts`,`Anatomy`,`DoSayWhatHappened`,`DontVague`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default: no live-region role, so a screen reader does not
    // interrupt the page load to read it.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {variants.map(variant => <Alert key={variant} {...args} variant={variant} title={\`\${variant[0].toUpperCase()}\${variant.slice(1)}\`} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Every variant's icon is decorative: the words carry the meaning.
    const icons = Array.from(canvasElement.querySelectorAll('svg'));
    await expect(icons).toHaveLength(variants.length);
    for (const icon of icons) await expect(icon.closest('[aria-hidden="true"]')).not.toBeNull();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => variants.map(variant => <Alert key={appearance + variant} {...args} appearance={appearance} variant={variant} title={\`\${appearance} \${variant}\`}>
            {undefined}
          </Alert>))}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: <>
        <Button size="sm" variant="destructive">
          Retry
        </Button>
        <Button size="sm" variant="accent" appearance="ghost">
          View details
        </Button>
      </>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: fn(),
    variant: 'success',
    title: 'Profile saved',
    children: undefined
  },
  render: function Render(args) {
    const [open, setOpen] = useState(true);
    return open ? <Alert {...args} onClose={e => {
      args.onClose?.(e);
      setOpen(false);
    }} /> : <p>Dismissed.</p>;
  },
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    const close = canvas.getByRole('button', {
      name: 'Dismiss'
    });
    await userEvent.tab();
    await expect(close).toHaveFocus();
    // Keyboard focus shows the 2px ring in --ring.
    const {
      outlineStyle,
      outlineWidth,
      outlineColor
    } = getComputedStyle(close);
    await expect([outlineStyle, outlineWidth, outlineColor]).toEqual(['solid', '2px', ringColour(canvasElement)]);
    // A 44px touch target on coarse pointers.
    await expect(mediaRules('pointer: coarse', close, '::before').map(r => [r.style.inlineSize, r.style.blockSize])[0]).toEqual(['var(--target-coarse)', 'var(--target-coarse)']);
    await userEvent.keyboard('{Enter}');
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(canvas.getByText('Dismissed.')).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shown, setShown] = useState<'danger' | 'success' | null>(null);
    return <div style={stack}>
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <Button size="sm" appearance="outlined" onClick={() => setShown('danger')}>
            Fail
          </Button>
          <Button size="sm" appearance="outlined" onClick={() => setShown('success')}>
            Succeed
          </Button>
        </div>
        {shown === 'danger' && <Alert {...args} isLive variant="danger" title="Could not save" children="Try again in a minute." />}
        {shown === 'success' && <Alert {...args} isLive variant="success" title="Saved" children={undefined} />}
      </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Fail'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('Could not save');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Succeed'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Saved');
  }
}`,...D.parameters?.docs?.source},description:{story:`Announced when it appears: danger and warning interrupt, info and success wait.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {variants.map(variant => <Alert key={variant} {...args} isLive variant={variant} title={variant}>
          {undefined}
        </Alert>)}
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('alert').map(el => el.textContent)).toEqual(['warning', 'danger']);
    await expect(canvas.getAllByRole('status').map(el => el.textContent)).toEqual(['info', 'success']);
  }
}`,...O.parameters?.docs?.source},description:{story:"Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: fn(),
    closeLabel: 'Hide this notice'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Hide this notice'
    })).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Dismiss'
    })).toBeNull();
  }
}`,...k.parameters?.docs?.source},description:{story:"`closeLabel` renames the close button.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    icon: false,
    title: undefined,
    children: 'Maintenance is scheduled for Sunday, 02:00–03:00 UTC.'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')).toBeNull();
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    onClose: fn(),
    action: <Button size="sm" variant="destructive">
        Retry
      </Button>
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Upload failed');
    await expect(found[4]).toHaveTextContent('Retry');
  }
}`,...N.parameters?.docs?.source},description:{story:`Every part present.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: <Button size="sm" variant="destructive">
        Retry
      </Button>
  }
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Do: the title says what happened, the description what to do next.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    variant: 'danger',
    title: 'Error',
    children: 'Something went wrong.'
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Don't: a vague message leans on the red box, and leaves no way forward.`,...F.parameters?.docs?.description}}}})))()}export{P as a,C as c,M as d,L as f,E as i,T as l,N as n,F as o,w as r,D as s,f as t,A as u};