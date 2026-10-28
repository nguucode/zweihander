import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C9aTyDDd.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,r as l,t as u}from"./TextInput-vfco79YG.js";var d=t({Addons:()=>S,Anatomy:()=>N,Controlled:()=>j,Default:()=>v,Disabled:()=>D,DoSayWhatToFix:()=>I,DoVisibleLabel:()=>P,DontColourOnly:()=>L,DontPlaceholderAsLabel:()=>F,FullWidth:()=>k,LabelAssociation:()=>y,NarrowContainer:()=>A,PrefixSuffix:()=>x,ReadOnly:()=>O,Required:()=>E,Sizes:()=>b,Validation:()=>T,WithButton:()=>C,WithHelperText:()=>w,__namedExportsOrder:()=>R,anatomyParts:()=>M,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{f=n(),o(),i(),l(),p=r(),{expect:m,fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Inputs/TextInput`,tags:[`beta`],component:u,argTypes:{label:{description:"The visible name, above the field. A real `<label>`: clicking it focuses the input.",control:`text`,table:{type:{summary:`ReactNode`}}},placeholder:{description:"A hint of the expected format, gone as soon as anyone types. Never a replacement for `label`.",control:`text`,table:{type:{summary:`string`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. `sm` takes a 12px value.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},prefix:{description:'Text or an icon before the value, in the muted colour: `<Icon name="user" />`, "https://".',control:!1,table:{type:{summary:`ReactNode`}}},suffix:{description:`Text or an icon after the value, e.g. a unit: "kg".`,control:!1,table:{type:{summary:`ReactNode`}}},startAddon:{description:'A filled segment joined to the start of the box, for a fixed part of the value: "https://", a currency code. Or a `TextInputButton`, which fills it.',control:!1,table:{type:{summary:`ReactNode`}}},endAddon:{description:'A filled segment joined to the end of the box: a fixed ending (".com") or an attached `TextInputButton` ("Apply").',control:!1,table:{type:{summary:`ReactNode`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, not submitted.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: focusable and submitted, but not editable. Filled grey.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:'Native `required`. Adds an asterisk to the label, hidden from screen readers, which hear "required" from the input.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:"The text, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting text, uncontrolled.`,control:!1,table:{type:{summary:`string`}}},onChange:{description:"The native change event, as on `<input>`: read `event.target.value`.",control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLInputElement>) => void`}}}},args:{label:`Email`,placeholder:`you@example.com`,onChange:h()},excludeStories:[`anatomyParts`]},_={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},v={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Email`);await t.type(r,`user@zweihander.dev`),await m(r).toHaveValue(`user@zweihander.dev`),await m(n.onChange).toHaveBeenCalled(),await m(n.onChange.mock.calls[0][0]).toHaveProperty(`target`)}},y={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`Email`)),await m(e.getByLabelText(`Email`)).toHaveFocus()}},b={render:e=>(0,p.jsx)(`div`,{style:_,children:[`sm`,`md`].map(t=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,size:t,label:t}),(0,p.jsx)(u,{...e,size:t,label:`${t} with add-ons`,placeholder:`example`,startAddon:`https://`,suffix:(0,p.jsx)(c,{"aria-label":`Open link`,children:(0,p.jsx)(a,{name:`external`})}),endAddon:(0,p.jsx)(c,{children:`Check`})})]},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`sm with add-ons`,`md with add-ons`].map(t=>e.getByLabelText(t).parentElement.getBoundingClientRect().height);await m(t).toEqual([24,32,24,32])}},x={render:e=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,label:`Email`,prefix:(0,p.jsx)(a,{name:`user`})}),(0,p.jsx)(u,{...e,label:`Website`,placeholder:`example.com`,prefix:`https://`}),(0,p.jsx)(u,{...e,label:`Weight`,placeholder:`0`,suffix:`kg`})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`https://`)),await m(e.getByLabelText(`Website`)).toHaveFocus()}},S={render:e=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,label:`Website`,placeholder:`example`,startAddon:`https://`,endAddon:`.com`}),(0,p.jsx)(u,{...e,label:`Price`,placeholder:`0.00`,inputMode:`decimal`,startAddon:`USD`}),(0,p.jsx)(u,{...e,label:`Promo code`,placeholder:`SPRING`,endAddon:(0,p.jsx)(c,{children:`Apply`})})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`https://`)),await m(e.getByLabelText(`Website`)).toHaveFocus(),await t.click(e.getByLabelText(`Promo code`)),await t.tab(),await m(e.getByRole(`button`,{name:`Apply`})).toHaveFocus()}},C={args:{label:`Website`,defaultValue:`zweihander.dev`},render:function(e){let[t,n]=(0,f.useState)(0);return(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,suffix:(0,p.jsx)(c,{"aria-label":`Open link`,onClick:()=>n(e=>e+1),children:(0,p.jsx)(a,{name:`external`})})}),(0,p.jsx)(u,{...e,label:`Website, read-only`,readOnly:!0,suffix:(0,p.jsx)(c,{"aria-label":`Open read-only link`,children:(0,p.jsx)(a,{name:`external`})})}),(0,p.jsx)(u,{...e,label:`Website, disabled`,disabled:!0,suffix:(0,p.jsx)(c,{"aria-label":`Open disabled link`,children:(0,p.jsx)(a,{name:`external`})}),endAddon:(0,p.jsx)(c,{children:`Check`})}),(0,p.jsxs)(`span`,{children:[`Opened: `,t]})]})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Open link`});await t.click(n),await m(e.getByText(`Opened: 1`)).toBeVisible(),await m(e.getByLabelText(`Website`)).not.toHaveFocus(),await t.click(e.getByLabelText(`Website`)),await t.tab(),await m(n).toHaveFocus(),await t.keyboard(`{Enter}`),await m(e.getByText(`Opened: 2`)).toBeVisible(),await t.keyboard(` `),await m(e.getByText(`Opened: 3`)).toBeVisible(),await m(e.getByRole(`button`,{name:`Open read-only link`})).toBeEnabled(),await m(e.getByRole(`button`,{name:`Open disabled link`})).toBeDisabled(),await m(e.getByRole(`button`,{name:`Check`})).toBeDisabled()}},w={args:{helperText:`We only use this for account recovery.`},play:async({canvas:e})=>{await m(e.getByLabelText(`Email`)).toHaveAccessibleDescription(`We only use this for account recovery.`)}},T={render:e=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,label:`Email`,defaultValue:`not-an-email`,validationState:`error`,helperText:`Enter a valid email address.`}),(0,p.jsx)(u,{...e,label:`Username`,defaultValue:`okami`,validationState:`success`,helperText:`That name is free.`})]}),play:async({canvas:e})=>{let t=e.getByLabelText(`Email`);await m(t).toHaveAttribute(`aria-invalid`,`true`),await m(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},E={args:{required:!0},play:async({canvas:e})=>{await m(e.getByLabelText(/Email/)).toBeRequired(),await m(e.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`),await m(e.getByRole(`textbox`,{name:`Email`})).toBeVisible()}},D={args:{disabled:!0,defaultValue:`locked@zweihander.dev`},play:async({canvas:e})=>{await m(e.getByLabelText(`Email`)).toBeDisabled()}},O={args:{readOnly:!0,defaultValue:`fixed@zweihander.dev`},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Email`);await t.type(n,`x`),await m(n).toHaveValue(`fixed@zweihander.dev`)}},k={args:{isFullWidth:!0},render:e=>(0,p.jsx)(`div`,{style:{inlineSize:`30rem`},children:(0,p.jsx)(u,{...e})}),play:async({canvas:e})=>{await m(e.getByLabelText(`Email`).parentElement.getBoundingClientRect().width).toBe(480)}},A={render:e=>(0,p.jsx)(`div`,{style:{inlineSize:`8rem`},children:(0,p.jsx)(u,{...e})}),play:async({canvas:e})=>{await m(e.getByLabelText(`Email`).parentElement.getBoundingClientRect().width).toBe(128)}},j={render:function(e){let[t,n]=(0,f.useState)(``);return(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(u,{...e,value:t,onChange:e=>n(e.target.value.toUpperCase())}),(0,p.jsxs)(`span`,{children:[`Value: `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Email`),`abc`),await m(e.getByText(`Value: ABC`)).toBeVisible()}},M=[{name:`Label`,selector:`label`,description:`Names the field. Clicking it focuses the input.`},{name:`Container`,selector:`label + span`,description:`The box: edge, fill and focus ring. Pressing its padding focuses the input.`},{name:`Start add-on`,selector:`label + span > span:nth-child(1)`,description:`Optional filled segment at the start, for a fixed part of the value.`},{name:`Prefix`,selector:`label + span > span:nth-child(2)`,description:`Optional text or icon before the value, in the muted colour.`},{name:`Input`,selector:`input`,description:`The value, or the placeholder while empty.`},{name:`Suffix`,selector:`label + span > span:nth-child(4)`,description:`Optional text, icon or icon button after the value, e.g. a unit.`},{name:`End add-on`,selector:`label + span > span:nth-child(5)`,description:`Optional filled segment at the end: a fixed ending, or an attached button.`},{name:`Helper text`,selector:`label + span + p`,description:`The input's description. The error message when invalid.`}],N={tags:[`!dev`],args:{label:`Website`,placeholder:`example`,startAddon:`https://`,prefix:(0,p.jsx)(a,{name:`user`}),suffix:(0,p.jsx)(c,{"aria-label":`Open link`,children:(0,p.jsx)(a,{name:`external`})}),endAddon:`.com`,helperText:`Where people can find you.`},play:async({canvasElement:e})=>{let t=await s(e,M);await m(t[2]).toHaveTextContent(`https://`),await m(t[5]).toContainElement(e.querySelector(`button`)),await m(t[6]).toHaveTextContent(`.com`)}},P={args:{label:`Email`,placeholder:`you@example.com`}},F={tags:[`!dev`],args:{label:void 0,placeholder:`Email`,"aria-label":`Email`}},I={args:{defaultValue:`okami@`,validationState:`error`,helperText:`Add the domain after @, e.g. okami@example.com.`}},L={tags:[`!dev`],args:{defaultValue:`okami@`,validationState:`error`,helperText:`Invalid.`}},R=[`Default`,`LabelAssociation`,`Sizes`,`PrefixSuffix`,`Addons`,`WithButton`,`WithHelperText`,`Validation`,`Required`,`Disabled`,`ReadOnly`,`FullWidth`,`NarrowContainer`,`Controlled`,`anatomyParts`,`Anatomy`,`DoVisibleLabel`,`DontPlaceholderAsLabel`,`DoSayWhatToFix`,`DontColourOnly`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Email'));
    await expect(canvas.getByLabelText('Email')).toHaveFocus();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <div key={size} style={stack}>
          <TextInput {...args} size={size} label={size} />
          <TextInput {...args} size={size} label={\`\${size} with add-ons\`} placeholder="example" startAddon="https://" suffix={<TextInputButton aria-label="Open link">
                <Icon name="external" />
              </TextInputButton>} endAddon={<TextInputButton>Check</TextInputButton>} />
        </div>)}
    </div>,
  play: async ({
    canvas
  }) => {
    // Add-ons and buttons run the box's height; they never make it taller.
    const heights = ['sm', 'md', 'sm with add-ons', 'md with add-ons'].map(n => canvas.getByLabelText(n).parentElement!.getBoundingClientRect().height);
    await expect(heights).toEqual([24, 32, 24, 32]);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <TextInput {...args} label="Website" placeholder="example" startAddon="https://" endAddon=".com" />
      <TextInput {...args} label="Price" placeholder="0.00" inputMode="decimal" startAddon="USD" />
      <TextInput {...args} label="Promo code" placeholder="SPRING" endAddon={<TextInputButton>Apply</TextInputButton>} />
    </div>,
  play: async ({
    canvas,
    userEvent
  }) => {
    // Pressing a text add-on focuses the input, as the label does.
    await userEvent.click(canvas.getByText('https://'));
    await expect(canvas.getByLabelText('Website')).toHaveFocus();
    // An attached button is the next stop after the input.
    await userEvent.click(canvas.getByLabelText('Promo code'));
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Apply'
    })).toHaveFocus();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Website',
    defaultValue: 'zweihander.dev'
  },
  render: function Render(args) {
    const [opened, setOpened] = useState(0);
    return <div style={stack}>
        <TextInput {...args} suffix={<TextInputButton aria-label="Open link" onClick={() => setOpened(n => n + 1)}>
              <Icon name="external" />
            </TextInputButton>} />
        <TextInput {...args} label="Website, read-only" readOnly suffix={<TextInputButton aria-label="Open read-only link">
              <Icon name="external" />
            </TextInputButton>} />
        <TextInput {...args} label="Website, disabled" disabled suffix={<TextInputButton aria-label="Open disabled link">
              <Icon name="external" />
            </TextInputButton>} endAddon={<TextInputButton>Check</TextInputButton>} />
        <span>Opened: {opened}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Open link'
    });
    await userEvent.click(button);
    await expect(canvas.getByText('Opened: 1')).toBeVisible();
    // Pressing the button does not focus the input under it.
    await expect(canvas.getByLabelText('Website')).not.toHaveFocus();
    // Keyboard: input, then its button.
    await userEvent.click(canvas.getByLabelText('Website'));
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByText('Opened: 2')).toBeVisible();
    await userEvent.keyboard(' ');
    await expect(canvas.getByText('Opened: 3')).toBeVisible();
    // A read-only field keeps its button; a disabled field disables its buttons.
    await expect(canvas.getByRole('button', {
      name: 'Open read-only link'
    })).toBeEnabled();
    await expect(canvas.getByRole('button', {
      name: 'Open disabled link'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Check'
    })).toBeDisabled();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'We only use this for account recovery.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toHaveAccessibleDescription('We only use this for account recovery.');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked@zweihander.dev'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toBeDisabled();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Website',
    placeholder: 'example',
    startAddon: 'https://',
    prefix: <Icon name="user" />,
    suffix: <TextInputButton aria-label="Open link">
        <Icon name="external" />
      </TextInputButton>,
    endAddon: '.com',
    helperText: 'Where people can find you.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('https://');
    await expect(found[5]).toContainElement(canvasElement.querySelector('button'));
    await expect(found[6]).toHaveTextContent('.com');
  }
}`,...N.parameters?.docs?.source},description:{story:`Every part present.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com'
  }
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Do: a visible label, the format as a hint.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: undefined,
    placeholder: 'Email',
    'aria-label': 'Email'
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Don't: the placeholder as the only label disappears on the first keystroke.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'okami@',
    validationState: 'error',
    helperText: 'Add the domain after @, e.g. okami@example.com.'
  }
}`,...I.parameters?.docs?.source},description:{story:`Guidelines, Do: the error says what to fix.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: 'okami@',
    validationState: 'error',
    helperText: 'Invalid.'
  }
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Don't: colour alone, with nothing to act on.`,...L.parameters?.docs?.description}}}})))()}export{P as a,x as c,T as d,C as f,I as i,b as l,z as m,N as n,L as o,M as p,v as r,F as s,S as t,d as u};