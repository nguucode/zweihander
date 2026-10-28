import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{r as c,t as l}from"./TextInput-vfco79YG.js";import{n as u,t as d}from"./Link-Bhk0TW_i.js";import{n as f,t as p}from"./InlineAlert-R77xqBxb.js";var m=t({Anatomy:()=>A,Default:()=>x,DoFieldError:()=>M,DontForOneField:()=>j,InAForm:()=>D,LiveRoles:()=>C,LongMessage:()=>E,Small:()=>w,Variants:()=>S,WithAction:()=>T,__namedExportsOrder:()=>N,anatomyParts:()=>k,default:()=>y}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{h=n(),o(),i(),u(),c(),f(),g=r(),{expect:_,userEvent:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Notifications/InlineAlert`,tags:[`beta`],component:p,args:{children:`Changes are saved automatically.`},argTypes:{variant:{description:"Colour by meaning: the whole line takes it. `danger` and `warning` also decide how `isLive` announces it.",control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`],table:{type:{summary:`'info' | 'success' | 'warning' | 'danger'`},defaultValue:{summary:`'info'`}}},size:{description:"Body text (`md`) or small body text (`sm`), with the icon to match.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},children:{description:`The message.`,control:`text`,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the variant's icon; `false` shows none. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode | false`},defaultValue:{summary:`the variant's icon`}}},action:{description:`A short link or button after the message, e.g. "Retry".`,control:!1,table:{type:{summary:`ReactNode`}}},isLive:{description:'Announce it when it appears: `danger` and `warning` interrupt (`role="alert"`), the others wait (`role="status"`).',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,g.jsx)(`div`,{style:{maxInlineSize:`28rem`},children:e()})]},b={display:`grid`,gap:`var(--space-3)`},x={play:async({canvasElement:e})=>{await _(e.querySelector(`[role]`)).toBeNull()}},S={render:e=>(0,g.jsxs)(`div`,{style:b,children:[(0,g.jsx)(p,{...e,variant:`info`,children:`Your trial ends in 5 days.`}),(0,g.jsx)(p,{...e,variant:`success`,children:`Domain verified.`}),(0,g.jsx)(p,{...e,variant:`warning`,children:`This link expires in 24 hours.`}),(0,g.jsx)(p,{...e,variant:`danger`,children:`Couldn’t reach the server.`})]}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`svg`));await _(t).toHaveLength(4);for(let e of t)await _(e.closest(`[aria-hidden="true"]`)).not.toBeNull()}},C={render:e=>(0,g.jsx)(`div`,{style:b,children:[`info`,`success`,`warning`,`danger`].map(t=>(0,g.jsx)(p,{...e,isLive:!0,variant:t,children:t},t))}),play:async({canvas:e})=>{await _(e.getAllByRole(`alert`).map(e=>e.textContent)).toEqual([`warning`,`danger`]),await _(e.getAllByRole(`status`).map(e=>e.textContent)).toEqual([`info`,`success`])}},w={args:{size:`sm`,variant:`warning`,children:`Only the owner can change billing.`}},T={args:{variant:`danger`,children:`Couldn’t load comments.`,action:(0,g.jsx)(d,{href:`#retry`,variant:`accent`,children:`Retry`})}},E={args:{variant:`warning`,children:`Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.`}},D={render:function(){let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(`form`,{style:b,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,g.jsx)(l,{label:`Workspace URL`,defaultValue:`atlas`,isFullWidth:!0}),(0,g.jsx)(`div`,{children:(0,g.jsx)(a,{type:`submit`,children:`Save`})}),e&&(0,g.jsx)(p,{variant:`danger`,isLive:!0,children:`That URL is taken. Try another.`})]})},play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Save`})),await _(await e.findByRole(`alert`)).toHaveTextContent(`That URL is taken`)}},O=`div:has(> span[aria-hidden="true"])`,k=[{name:`Icon`,selector:`${O} > span:nth-child(1)`,description:`The variant's filled icon, one line tall. Replaceable, or none.`},{name:`Message`,selector:`${O} > span:nth-child(2)`,description:"`children`, in the variant's text colour."},{name:`Action`,selector:`${O} > span:nth-child(3)`,description:`Optional short link or button.`}],A={tags:[`!dev`],args:{variant:`danger`,children:`Couldn’t load comments.`,action:(0,g.jsx)(d,{href:`#retry`,variant:`accent`,children:`Retry`})},play:async({canvasElement:e})=>{let t=await s(e,k);await _(t[1]).toHaveTextContent(`Couldn’t load comments.`),await _(t[2]).toHaveTextContent(`Retry`)}},j={tags:[`!dev`],render:()=>(0,g.jsxs)(`div`,{style:b,children:[(0,g.jsx)(l,{label:`Workspace URL`,defaultValue:`atlas`,isFullWidth:!0}),(0,g.jsx)(p,{variant:`danger`,children:`That URL is taken.`})]})},M={tags:[`!dev`],render:()=>(0,g.jsx)(l,{label:`Workspace URL`,defaultValue:`atlas`,validationState:`error`,helperText:`That URL is taken.`,isFullWidth:!0}),play:async({canvas:e})=>{await _(e.getByRole(`textbox`)).toHaveAccessibleDescription(`That URL is taken.`)}},N=[`Default`,`Variants`,`LiveRoles`,`Small`,`WithAction`,`LongMessage`,`InAForm`,`anatomyParts`,`Anatomy`,`DontForOneField`,`DoFieldError`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default, like Alert: no live-region role.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Which role each variant gets with `isLive`: danger and warning interrupt, info and success wait.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'warning',
    children: 'Only the owner can change billing.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Couldn’t load comments.',
    action: <Link href="#retry" variant="accent">Retry</Link>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Under a form, announced when a submit fails.`,...D.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Every part present.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div style={stack}>
      <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
      <InlineAlert variant="danger">That URL is taken.</InlineAlert>
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Don't: an error about one field belongs to the field, tied to it.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput label="Workspace URL" defaultValue="atlas" validationState="error" helperText="That URL is taken." isFullWidth />,
  play: async ({
    canvas
  }) => {
    // The message is the field's description: read when the field is focused.
    await expect(canvas.getByRole('textbox')).toHaveAccessibleDescription('That URL is taken.');
  }
}`,...M.parameters?.docs?.source},description:{story:`Guidelines, Do: the field's own error, announced with it.`,...M.parameters?.docs?.description}}}})))()}export{m as a,S as c,P as d,D as i,T as l,M as n,E as o,j as r,w as s,A as t,k as u};