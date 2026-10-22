import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C8IlC69p.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./TextInput-BLOoJTSm.js";var u=t({Anatomy:()=>A,Controlled:()=>O,Default:()=>_,Disabled:()=>w,DoSayWhatToFix:()=>N,DoVisibleLabel:()=>j,DontColourOnly:()=>P,DontPlaceholderAsLabel:()=>M,FullWidth:()=>E,LabelAssociation:()=>v,NarrowContainer:()=>D,PrefixSuffix:()=>b,ReadOnly:()=>T,Required:()=>C,Sizes:()=>y,Validation:()=>S,WithHelperText:()=>x,__namedExportsOrder:()=>F,anatomyParts:()=>k,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{d=n(),o(),i(),c(),f=r(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Inputs/TextInput`,tags:[`beta`],component:l,argTypes:{label:{description:"The visible name, above the field. A real `<label>`: clicking it focuses the input.",control:`text`,table:{type:{summary:`ReactNode`}}},placeholder:{description:"A hint of the expected format, gone as soon as anyone types. Never a replacement for `label`.",control:`text`,table:{type:{summary:`string`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. `sm` takes a 12px value.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},prefix:{description:'Text or an icon before the value, in the muted colour: `<Icon name="user" />`, "https://".',control:!1,table:{type:{summary:`ReactNode`}}},suffix:{description:`Text or an icon after the value, e.g. a unit: "kg".`,control:!1,table:{type:{summary:`ReactNode`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, not submitted.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: focusable and submitted, but not editable. Filled grey.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:'Native `required`. Adds an asterisk to the label, hidden from screen readers, which hear "required" from the input.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:"The text, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting text, uncontrolled.`,control:!1,table:{type:{summary:`string`}}},onChange:{description:"The native change event, as on `<input>`: read `event.target.value`.",control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLInputElement>) => void`}}}},args:{label:`Email`,placeholder:`you@example.com`,onChange:m()},excludeStories:[`anatomyParts`]},g={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},_={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Email`);await t.type(r,`user@zweihander.dev`),await p(r).toHaveValue(`user@zweihander.dev`),await p(n.onChange).toHaveBeenCalled(),await p(n.onChange.mock.calls[0][0]).toHaveProperty(`target`)}},v={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`Email`)),await p(e.getByLabelText(`Email`)).toHaveFocus()}},y={render:e=>(0,f.jsx)(`div`,{style:g,children:[`sm`,`md`].map(t=>(0,f.jsx)(l,{...e,size:t,label:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`].map(t=>e.getByLabelText(t).parentElement.getBoundingClientRect().height);await p(t).toEqual([24,32])}},b={render:e=>(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,label:`Email`,prefix:(0,f.jsx)(a,{name:`user`})}),(0,f.jsx)(l,{...e,label:`Website`,placeholder:`example.com`,prefix:`https://`}),(0,f.jsx)(l,{...e,label:`Weight`,placeholder:`0`,suffix:`kg`})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`https://`)),await p(e.getByLabelText(`Website`)).toHaveFocus()}},x={args:{helperText:`We only use this for account recovery.`},play:async({canvas:e})=>{await p(e.getByLabelText(`Email`)).toHaveAccessibleDescription(`We only use this for account recovery.`)}},S={render:e=>(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,label:`Email`,defaultValue:`not-an-email`,validationState:`error`,helperText:`Enter a valid email address.`}),(0,f.jsx)(l,{...e,label:`Username`,defaultValue:`okami`,validationState:`success`,helperText:`That name is free.`})]}),play:async({canvas:e})=>{let t=e.getByLabelText(`Email`);await p(t).toHaveAttribute(`aria-invalid`,`true`),await p(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},C={args:{required:!0},play:async({canvas:e})=>{await p(e.getByLabelText(/Email/)).toBeRequired(),await p(e.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`),await p(e.getByRole(`textbox`,{name:`Email`})).toBeVisible()}},w={args:{disabled:!0,defaultValue:`locked@zweihander.dev`},play:async({canvas:e})=>{await p(e.getByLabelText(`Email`)).toBeDisabled()}},T={args:{readOnly:!0,defaultValue:`fixed@zweihander.dev`},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Email`);await t.type(n,`x`),await p(n).toHaveValue(`fixed@zweihander.dev`)}},E={args:{isFullWidth:!0},render:e=>(0,f.jsx)(`div`,{style:{inlineSize:`30rem`},children:(0,f.jsx)(l,{...e})}),play:async({canvas:e})=>{await p(e.getByLabelText(`Email`).parentElement.getBoundingClientRect().width).toBe(480)}},D={render:e=>(0,f.jsx)(`div`,{style:{inlineSize:`8rem`},children:(0,f.jsx)(l,{...e})}),play:async({canvas:e})=>{await p(e.getByLabelText(`Email`).parentElement.getBoundingClientRect().width).toBe(128)}},O={render:function(e){let[t,n]=(0,d.useState)(``);return(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,value:t,onChange:e=>n(e.target.value.toUpperCase())}),(0,f.jsxs)(`span`,{children:[`Value: `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Email`),`abc`),await p(e.getByText(`Value: ABC`)).toBeVisible()}},k=[{name:`Label`,selector:`label`,description:`Names the field. Clicking it focuses the input.`},{name:`Container`,selector:`label + span`,description:`The box: edge, fill and focus ring. Pressing its padding focuses the input.`},{name:`Prefix`,selector:`label + span > span:first-child`,description:`Optional text or icon before the value, in the muted colour.`},{name:`Input`,selector:`input`,description:`The value, or the placeholder while empty.`},{name:`Suffix`,selector:`label + span > span:last-child`,description:`Optional text or icon after the value, e.g. a unit.`},{name:`Helper text`,selector:`label + span + p`,description:`The input's description. The error message when invalid.`}],A={tags:[`!dev`],args:{label:`Website`,placeholder:`example`,prefix:`https://`,suffix:`.com`,helperText:`Where people can find you.`},play:async({canvasElement:e})=>{let t=await s(e,k);await p(t[2]).toHaveTextContent(`https://`),await p(t[4]).toHaveTextContent(`.com`)}},j={args:{label:`Email`,placeholder:`you@example.com`}},M={tags:[`!dev`],args:{label:void 0,placeholder:`Email`,"aria-label":`Email`}},N={args:{defaultValue:`okami@`,validationState:`error`,helperText:`Add the domain after @, e.g. okami@example.com.`}},P={tags:[`!dev`],args:{defaultValue:`okami@`,validationState:`error`,helperText:`Invalid.`}},F=[`Default`,`LabelAssociation`,`Sizes`,`PrefixSuffix`,`WithHelperText`,`Validation`,`Required`,`Disabled`,`ReadOnly`,`FullWidth`,`NarrowContainer`,`Controlled`,`anatomyParts`,`Anatomy`,`DoVisibleLabel`,`DontPlaceholderAsLabel`,`DoSayWhatToFix`,`DontColourOnly`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByLabelText('Email');
    await userEvent.type(input, 'user@zweihander.dev');
    await expect(input).toHaveValue('user@zweihander.dev');
    // onChange is the native event, as on a plain <input>.
    await expect(args.onChange).toHaveBeenCalled();
    await expect((args.onChange as ReturnType<typeof fn>).mock.calls[0][0]).toHaveProperty('target');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Email'));
    await expect(canvas.getByLabelText('Email')).toHaveFocus();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <TextInput key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md'].map(n => canvas.getByLabelText(n).parentElement!.getBoundingClientRect().height);
    await expect(heights).toEqual([24, 32]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <TextInput {...args} label="Email" prefix={<Icon name="user" />} />
      <TextInput {...args} label="Website" placeholder="example.com" prefix="https://" />
      <TextInput {...args} label="Weight" placeholder="0" suffix="kg" />
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    // Pressing the prefix focuses the input, as the rest of the field does.
    await userEvent.click(canvas.getByText('https://'));
    await expect(canvas.getByLabelText('Website')).toHaveFocus();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'We only use this for account recovery.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toHaveAccessibleDescription('We only use this for account recovery.');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <TextInput {...args} label="Email" defaultValue="not-an-email" validationState="error" helperText="Enter a valid email address." />
      <TextInput {...args} label="Username" defaultValue="okami" validationState="success" helperText="That name is free." />
    </div>,
  play: async ({
    canvas
  }) => {
    const email = canvas.getByLabelText('Email');
    await expect(email).toHaveAttribute('aria-invalid', 'true');
    await expect(email).toHaveAccessibleDescription('Enter a valid email address.');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText(/Email/)).toBeRequired();
    // The asterisk is decoration: the name stays "Email", not "Email *".
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.getByRole('textbox', {
      name: 'Email'
    })).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked@zweihander.dev'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toBeDisabled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'fixed@zweihander.dev'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Email');
    await userEvent.type(input, 'x');
    await expect(input).toHaveValue('fixed@zweihander.dev');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  },
  render: args => <div style={{
    inlineSize: '30rem'
  }}>
      <TextInput {...args} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email').parentElement!.getBoundingClientRect().width).toBe(480);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    inlineSize: '8rem'
  }}>
      <TextInput {...args} />
    </div>,
  play: async ({
    canvas
  }) => {
    // The box stays inside the field, however narrow, rather than spilling out.
    await expect(canvas.getByLabelText('Email').parentElement!.getBoundingClientRect().width).toBe(128);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <div style={stack}>
        <TextInput {...args} value={value} onChange={e => setValue(e.target.value.toUpperCase())} />
        <span>Value: {value}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByLabelText('Email'), 'abc');
    await expect(canvas.getByText('Value: ABC')).toBeVisible();
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Website',
    placeholder: 'example',
    prefix: 'https://',
    suffix: '.com',
    helperText: 'Where people can find you.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('https://');
    await expect(found[4]).toHaveTextContent('.com');
  }
}`,...A.parameters?.docs?.source},description:{story:`Every part present.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com'
  }
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Do: a visible label, the format as a hint.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: undefined,
    placeholder: 'Email',
    'aria-label': 'Email'
  }
}`,...M.parameters?.docs?.source},description:{story:`Guidelines, Don't: the placeholder as the only label disappears on the first keystroke.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'okami@',
    validationState: 'error',
    helperText: 'Add the domain after @, e.g. okami@example.com.'
  }
}`,...N.parameters?.docs?.source},description:{story:`Guidelines, Do: the error says what to fix.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: 'okami@',
    validationState: 'error',
    helperText: 'Invalid.'
  }
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Don't: colour alone, with nothing to act on.`,...P.parameters?.docs?.description}}}})))()}export{P as a,y as c,k as d,I as f,j as i,u as l,_ as n,M as o,N as r,b as s,A as t,S as u};