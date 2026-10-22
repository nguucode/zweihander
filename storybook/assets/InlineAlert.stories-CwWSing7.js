import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as l}from"./icon-C8IlC69p.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";import{n as f,t as p}from"./TextInput-BLOoJTSm.js";import{n as m,t as h}from"./Link-DrP5iWr9.js";var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g=`_inlineAlert_8imuz_1`,_=`_sm_8imuz_13`,v=`_info_8imuz_19`,y=`_success_8imuz_22`,b=`_warning_8imuz_25`,x=`_danger_8imuz_28`,S=`_icon_8imuz_34`,C=`_message_8imuz_46`,w=`_action_8imuz_50`,T={inlineAlert:g,sm:_,info:v,success:y,warning:b,danger:x,icon:S,message:C,action:w}})))()}function D({variant:e=`info`,size:t=`md`,icon:n,action:r,isLive:a=!1,className:o,children:s,...c}){return(0,O.jsxs)(`div`,{role:a?e===`danger`||e===`warning`?`alert`:`status`:void 0,className:i(T.inlineAlert,T[e],T[t],o),...c,children:[n!==!1&&(0,O.jsx)(`span`,{className:T.icon,"aria-hidden":`true`,children:n??(0,O.jsx)(l,{name:k[e]})}),(0,O.jsx)(`span`,{className:T.message,children:s}),r&&(0,O.jsx)(`span`,{className:T.action,children:r})]})}var O,k;function A(){return(A=e((()=>{c(),r(),E(),O=a(),k={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`},D.__docgenInfo={description:`A one-line message in the flow of a form or a section: no box, no title,
no close button. For a message about a whole page or region, use Alert.`,methods:[],displayName:`InlineAlert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`ReactNode | false`,elements:[{name:`ReactNode`},{name:`literal`,value:`false`}]},description:"Replaces the variant's icon; `false` shows none."},action:{required:!1,tsType:{name:`ReactNode`},description:`A short link or button after the message, e.g. "Retry".`},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce it when it appears: `danger` and `warning` interrupt\n(`role="alert"`), the others wait (`role="status"`).',defaultValue:{value:`false`,computed:!1}}},composes:[`ComponentProps`]}})))()}var j=t({Anatomy:()=>q,Default:()=>R,DoFieldError:()=>Y,DontForOneField:()=>J,InAForm:()=>W,LiveRoles:()=>B,LongMessage:()=>U,Small:()=>V,Variants:()=>z,WithAction:()=>H,__namedExportsOrder:()=>X,anatomyParts:()=>K,default:()=>I}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{M=n(),u(),o(),m(),f(),A(),N=a(),{expect:P,userEvent:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/Notifications/InlineAlert`,tags:[`beta`],component:D,args:{children:`Changes are saved automatically.`},argTypes:{variant:{description:"Colour by meaning: the whole line takes it. `danger` and `warning` also decide how `isLive` announces it.",control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`],table:{type:{summary:`'info' | 'success' | 'warning' | 'danger'`},defaultValue:{summary:`'info'`}}},size:{description:"Body text (`md`) or small body text (`sm`), with the icon to match.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},children:{description:`The message.`,control:`text`,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode | false`},defaultValue:{summary:`the variant's icon`}}},action:{description:`A short link or button after the message, e.g. "Retry".`,control:!1,table:{type:{summary:`ReactNode`}}},isLive:{description:'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`).',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,N.jsx)(`div`,{style:{maxInlineSize:`28rem`},children:e()})]},L={display:`grid`,gap:`var(--space-3)`},R={play:async({canvasElement:e})=>{await P(e.querySelector(`[role]`)).toBeNull()}},z={render:e=>(0,N.jsxs)(`div`,{style:L,children:[(0,N.jsx)(D,{...e,variant:`info`,children:`Your trial ends in 5 days.`}),(0,N.jsx)(D,{...e,variant:`success`,children:`Domain verified.`}),(0,N.jsx)(D,{...e,variant:`warning`,children:`This link expires in 24 hours.`}),(0,N.jsx)(D,{...e,variant:`danger`,children:`Couldn’t reach the server.`})]}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`svg`));await P(t).toHaveLength(4);for(let e of t)await P(e.closest(`[aria-hidden="true"]`)).not.toBeNull()}},B={render:e=>(0,N.jsx)(`div`,{style:L,children:[`info`,`success`,`warning`,`danger`].map(t=>(0,N.jsx)(D,{...e,isLive:!0,variant:t,children:t},t))}),play:async({canvas:e})=>{await P(e.getAllByRole(`alert`).map(e=>e.textContent)).toEqual([`warning`,`danger`]),await P(e.getAllByRole(`status`).map(e=>e.textContent)).toEqual([`info`,`success`])}},V={args:{size:`sm`,variant:`warning`,children:`Only the owner can change billing.`}},H={args:{variant:`danger`,children:`Couldn’t load comments.`,action:(0,N.jsx)(h,{href:`#retry`,variant:`accent`,children:`Retry`})}},U={args:{variant:`warning`,children:`Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.`}},W={render:function(){let[e,t]=(0,M.useState)(!1);return(0,N.jsxs)(`form`,{style:L,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,N.jsx)(p,{label:`Workspace URL`,defaultValue:`atlas`,isFullWidth:!0}),(0,N.jsx)(`div`,{children:(0,N.jsx)(s,{type:`submit`,children:`Save`})}),e&&(0,N.jsx)(D,{variant:`danger`,isLive:!0,children:`That URL is taken. Try another.`})]})},play:async({canvas:e})=>{await F.click(e.getByRole(`button`,{name:`Save`})),await P(await e.findByRole(`alert`)).toHaveTextContent(`That URL is taken`)}},G=`div:has(> span[aria-hidden="true"])`,K=[{name:`Icon`,selector:`${G} > span:nth-child(1)`,description:`The variant's filled icon, one line tall. Replaceable, or none.`},{name:`Message`,selector:`${G} > span:nth-child(2)`,description:"`children`, in the variant's text colour."},{name:`Action`,selector:`${G} > span:nth-child(3)`,description:`Optional short link or button.`}],q={tags:[`!dev`],args:{variant:`danger`,children:`Couldn’t load comments.`,action:(0,N.jsx)(h,{href:`#retry`,variant:`accent`,children:`Retry`})},play:async({canvasElement:e})=>{let t=await d(e,K);await P(t[1]).toHaveTextContent(`Couldn’t load comments.`),await P(t[2]).toHaveTextContent(`Retry`)}},J={tags:[`!dev`],render:()=>(0,N.jsxs)(`div`,{style:L,children:[(0,N.jsx)(p,{label:`Workspace URL`,defaultValue:`atlas`,isFullWidth:!0}),(0,N.jsx)(D,{variant:`danger`,children:`That URL is taken.`})]})},Y={tags:[`!dev`],render:()=>(0,N.jsx)(p,{label:`Workspace URL`,defaultValue:`atlas`,validationState:`error`,helperText:`That URL is taken.`,isFullWidth:!0}),play:async({canvas:e})=>{await P(e.getByRole(`textbox`)).toHaveAccessibleDescription(`That URL is taken.`)}},X=[`Default`,`Variants`,`LiveRoles`,`Small`,`WithAction`,`LongMessage`,`InAForm`,`anatomyParts`,`Anatomy`,`DontForOneField`,`DoFieldError`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default, like Alert: no live-region role.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <InlineAlert {...args} variant="info">Your trial ends in 5 days.</InlineAlert>
      <InlineAlert {...args} variant="success">Domain verified.</InlineAlert>
      <InlineAlert {...args} variant="warning">This link expires in 24 hours.</InlineAlert>
      <InlineAlert {...args} variant="danger">Couldn’t reach the server.</InlineAlert>
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Every icon is decorative: the words carry the meaning.
    const icons = Array.from(canvasElement.querySelectorAll('svg'));
    await expect(icons).toHaveLength(4);
    for (const icon of icons) await expect(icon.closest('[aria-hidden="true"]')).not.toBeNull();
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['info', 'success', 'warning', 'danger'] as const).map(variant => <InlineAlert key={variant} {...args} isLive variant={variant}>
          {variant}
        </InlineAlert>)}
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('alert').map(el => el.textContent)).toEqual(['warning', 'danger']);
    await expect(canvas.getAllByRole('status').map(el => el.textContent)).toEqual(['info', 'success']);
  }
}`,...B.parameters?.docs?.source},description:{story:"Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'warning',
    children: 'Only the owner can change billing.'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Couldn’t load comments.',
    action: <Link href="#retry" variant="accent">Retry</Link>
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [error, setError] = useState(false);
    return <form style={stack} onSubmit={e => {
      e.preventDefault();
      setError(true);
    }}>
        <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
        <div>
          <Button type="submit">Save</Button>
        </div>
        {error && <InlineAlert variant="danger" isLive>
            That URL is taken. Try another.
          </InlineAlert>}
      </form>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('That URL is taken');
  }
}`,...W.parameters?.docs?.source},description:{story:`Under a form, announced when a submit fails.`,...W.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    variant: 'danger',
    children: 'Couldn’t load comments.',
    action: <Link href="#retry" variant="accent">Retry</Link>
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Couldn’t load comments.');
    await expect(found[2]).toHaveTextContent('Retry');
  }
}`,...q.parameters?.docs?.source},description:{story:`Every part present.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div style={stack}>
      <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
      <InlineAlert variant="danger">That URL is taken.</InlineAlert>
    </div>
}`,...J.parameters?.docs?.source},description:{story:`Guidelines, Don't: an error about one field belongs to the field, tied to it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput label="Workspace URL" defaultValue="atlas" validationState="error" helperText="That URL is taken." isFullWidth />,
  play: async ({
    canvas
  }) => {
    // The message is the field's description: read when the field is focused.
    await expect(canvas.getByRole('textbox')).toHaveAccessibleDescription('That URL is taken.');
  }
}`,...Y.parameters?.docs?.source},description:{story:`Guidelines, Do: the field's own error, announced with it.`,...Y.parameters?.docs?.description}}}})))()}export{j as a,z as c,Z as d,W as i,H as l,Y as n,U as o,J as r,V as s,q as t,K as u};