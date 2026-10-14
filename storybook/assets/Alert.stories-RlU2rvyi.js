import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as l}from"./icon-C8IlC69p.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";import{a as ee,r as te}from"./story-helpers-EInZsLED.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{f=`_alert_fejdz_1`,p=`_info_fejdz_17`,m=`_success_fejdz_23`,h=`_warning_fejdz_29`,g=`_danger_fejdz_35`,_=`_subtle_fejdz_45`,v=`_outlined_fejdz_49`,y=`_icon_fejdz_54`,b=`_title_fejdz_55`,x=`_solid_fejdz_60`,S=`_body_fejdz_73`,C=`_action_fejdz_84`,w=`_close_fejdz_91`,T={alert:f,info:p,success:m,warning:h,danger:g,subtle:_,outlined:v,icon:y,title:b,solid:x,body:S,action:C,close:w}})))()}function D({variant:e=`info`,appearance:t=`subtle`,title:n,icon:r,action:a,onClose:o,closeLabel:s=`Dismiss`,isLive:c=!1,className:u,children:d,...ee}){return(0,O.jsxs)(`div`,{role:c?e===`danger`||e===`warning`?`alert`:`status`:void 0,className:i(T.alert,T[e],T[t],u),...ee,children:[r!==!1&&(0,O.jsx)(`span`,{className:T.icon,"aria-hidden":`true`,children:r??(0,O.jsx)(l,{name:k[e]})}),(0,O.jsxs)(`div`,{className:T.body,children:[n&&(0,O.jsx)(`div`,{className:T.title,children:n}),d&&(0,O.jsx)(`div`,{className:T.description,children:d}),a&&(0,O.jsx)(`div`,{className:T.action,children:a})]}),o&&(0,O.jsx)(`button`,{type:`button`,"aria-label":s,className:T.close,onClick:o,children:(0,O.jsx)(l,{name:`close`})})]})}var O,k;function A(){return(A=e((()=>{c(),r(),E(),O=a(),k={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`},D.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'subtle' | 'outlined' | 'solid'`,elements:[{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'solid'`}]},description:``,defaultValue:{value:`'subtle'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`union`,raw:`ReactNode | false`,elements:[{name:`ReactNode`},{name:`literal`,value:`false`}]},description:"Replaces the variant's icon; `false` shows none."},action:{required:!1,tsType:{name:`ReactNode`},description:`Buttons or links under the message, e.g. "Retry".`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`event`}],return:{name:`void`}}},description:`Shows a close button that calls this. The alert does not hide itself: remove it when this fires.`},closeLabel:{required:!1,tsType:{name:`string`},description:`Accessible name of the close button.`,defaultValue:{value:`'Dismiss'`,computed:!1}},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce the alert when it appears. `danger` and `warning` interrupt\n(`role="alert"`), the others wait their turn (`role="status"`). Leave it\noff for an alert that is on the page from the start.',defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var ne=t({Anatomy:()=>Z,Appearances:()=>H,CloseLabel:()=>q,Default:()=>B,Dismissible:()=>W,DoSayWhatHappened:()=>Q,DontVague:()=>$,Live:()=>G,LiveRoles:()=>K,Variants:()=>V,WithAction:()=>U,WithoutIcon:()=>J,__namedExportsOrder:()=>re,anatomyParts:()=>X,default:()=>I}),j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,re;function ie(){return(ie=e((()=>{j=n(),u(),o(),A(),te(),M=a(),{expect:N,fn:P,userEvent:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/Notifications/Alert`,tags:[`beta`],component:D,args:{title:`Payment method expiring`,children:`The card ending in 4242 expires at the end of this month. Update it to avoid an interruption.`},argTypes:{variant:{description:"Colour by meaning. `danger` and `warning` also decide how `isLive` announces it.",control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`],table:{type:{summary:`'info' | 'success' | 'warning' | 'danger'`},defaultValue:{summary:`'info'`}}},appearance:{description:"Emphasis, the same three as Tag: `subtle` tint, `outlined` border, `solid` fill.",control:`inline-radio`,options:[`subtle`,`outlined`,`solid`],table:{type:{summary:`'subtle' | 'outlined' | 'solid'`},defaultValue:{summary:`'subtle'`}}},title:{description:`Optional, semibold. What happened, in a few words.`,control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The description: what it means and what to do.`,control:`text`,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode | false`},defaultValue:{summary:`the variant's icon`}}},action:{description:`Buttons or links under the description, e.g. "Retry".`,control:!1,table:{type:{summary:`ReactNode`}}},onClose:{description:`Shows a close button that calls this. The alert does not hide itself: remove it when this fires.`,control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}},closeLabel:{description:`The close button's accessible name.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Dismiss'`}}},isLive:{description:'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`). Off for an alert that is on the page from the start.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,M.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},L={display:`grid`,gap:`var(--space-3)`},R=[`info`,`success`,`warning`,`danger`],z=e=>{let t=document.createElement(`span`);t.style.color=`var(--ring)`,e.append(t);let n=getComputedStyle(t).color;return t.remove(),n},B={play:async({canvasElement:e})=>{await N(e.querySelector(`[role]`)).toBeNull()}},V={render:e=>(0,M.jsx)(`div`,{style:L,children:R.map(t=>(0,M.jsx)(D,{...e,variant:t,title:`${t[0].toUpperCase()}${t.slice(1)}`},t))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`svg`));await N(t).toHaveLength(R.length);for(let e of t)await N(e.closest(`[aria-hidden="true"]`)).not.toBeNull()}},H={render:e=>(0,M.jsx)(`div`,{style:L,children:[`subtle`,`outlined`,`solid`].map(t=>R.map(n=>(0,M.jsx)(D,{...e,appearance:t,variant:n,title:`${t} ${n}`,children:void 0},t+n)))})},U={args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,action:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{size:`sm`,variant:`destructive`,children:`Retry`}),(0,M.jsx)(s,{size:`sm`,variant:`accent`,appearance:`ghost`,children:`View details`})]})}},W={args:{onClose:P(),variant:`success`,title:`Profile saved`,children:void 0},render:function(e){let[t,n]=(0,j.useState)(!0);return t?(0,M.jsx)(D,{...e,onClose:t=>{e.onClose?.(t),n(!1)}}):(0,M.jsx)(`p`,{children:`Dismissed.`})},play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`button`,{name:`Dismiss`});await F.tab(),await N(r).toHaveFocus();let{outlineStyle:i,outlineWidth:a,outlineColor:o}=getComputedStyle(r);await N([i,a,o]).toEqual([`solid`,`2px`,z(n)]),await N(ee(`pointer: coarse`,r,`::before`).map(e=>[e.style.inlineSize,e.style.blockSize])[0]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`]),await F.keyboard(`{Enter}`),await N(e.onClose).toHaveBeenCalledOnce(),await N(t.getByText(`Dismissed.`)).toBeVisible()}},G={render:function(e){let[t,n]=(0,j.useState)(null);return(0,M.jsxs)(`div`,{style:L,children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,M.jsx)(s,{size:`sm`,appearance:`outlined`,onClick:()=>n(`danger`),children:`Fail`}),(0,M.jsx)(s,{size:`sm`,appearance:`outlined`,onClick:()=>n(`success`),children:`Succeed`})]}),t===`danger`&&(0,M.jsx)(D,{...e,isLive:!0,variant:`danger`,title:`Could not save`,children:`Try again in a minute.`}),t===`success`&&(0,M.jsx)(D,{...e,isLive:!0,variant:`success`,title:`Saved`,children:void 0})]})},play:async({canvas:e})=>{await F.click(e.getByRole(`button`,{name:`Fail`})),await N(e.getByRole(`alert`)).toHaveTextContent(`Could not save`),await F.click(e.getByRole(`button`,{name:`Succeed`})),await N(e.getByRole(`status`)).toHaveTextContent(`Saved`)}},K={render:e=>(0,M.jsx)(`div`,{style:L,children:R.map(t=>(0,M.jsx)(D,{...e,isLive:!0,variant:t,title:t,children:void 0},t))}),play:async({canvas:e})=>{await N(e.getAllByRole(`alert`).map(e=>e.textContent)).toEqual([`warning`,`danger`]),await N(e.getAllByRole(`status`).map(e=>e.textContent)).toEqual([`info`,`success`])}},q={args:{onClose:P(),closeLabel:`Hide this notice`},play:async({canvas:e})=>{await N(e.getByRole(`button`,{name:`Hide this notice`})).toBeVisible(),await N(e.queryByRole(`button`,{name:`Dismiss`})).toBeNull()}},J={args:{icon:!1,title:void 0,children:`Maintenance is scheduled for Sunday, 02:00–03:00 UTC.`},play:async({canvasElement:e})=>{await N(e.querySelector(`svg`)).toBeNull()}},Y=`div:has(> button[aria-label="Dismiss"])`,X=[{name:`Container`,selector:Y,description:`The box: tint, border or fill, from variant × appearance.`},{name:`Icon`,selector:`${Y} > span`,description:`The variant's filled icon, one line tall. Replaceable, or none.`},{name:`Title`,selector:`${Y} > div > div:nth-child(1)`,description:`Optional, semibold. What happened.`},{name:`Description`,selector:`${Y} > div > div:nth-child(2)`,description:"`children`: what it means and what to do."},{name:`Action`,selector:`${Y} > div > div:nth-child(3)`,description:`Optional buttons or links.`},{name:`Close button`,selector:`${Y} > button`,description:"Shown when `onClose` is given."}],Z={tags:[`!dev`],args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,onClose:P(),action:(0,M.jsx)(s,{size:`sm`,variant:`destructive`,children:`Retry`})},play:async({canvasElement:e})=>{let t=await d(e,X);await N(t[2]).toHaveTextContent(`Upload failed`),await N(t[4]).toHaveTextContent(`Retry`)}},Q={args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,action:(0,M.jsx)(s,{size:`sm`,variant:`destructive`,children:`Retry`})}},$={tags:[`!dev`],args:{variant:`danger`,title:`Error`,children:`Something went wrong.`}},re=[`Default`,`Variants`,`Appearances`,`WithAction`,`Dismissible`,`Live`,`LiveRoles`,`CloseLabel`,`WithoutIcon`,`anatomyParts`,`Anatomy`,`DoSayWhatHappened`,`DontVague`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default: no live-region role, so a screen reader does not
    // interrupt the page load to read it.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => variants.map(variant => <Alert key={appearance + variant} {...args} appearance={appearance} variant={variant} title={\`\${appearance} \${variant}\`}>
            {undefined}
          </Alert>))}
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Announced when it appears: danger and warning interrupt, info and success wait.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:"`closeLabel` renames the close button.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Every part present.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: <Button size="sm" variant="destructive">
        Retry
      </Button>
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: the title says what happened, the description what to do next.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    variant: 'danger',
    title: 'Error',
    children: 'Something went wrong.'
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a vague message leans on the red box, and leaves no way forward.`,...$.parameters?.docs?.description}}}})))()}export{Q as a,V as c,X as d,ie as f,W as i,U as l,Z as n,$ as o,H as r,G as s,ne as t,J as u};