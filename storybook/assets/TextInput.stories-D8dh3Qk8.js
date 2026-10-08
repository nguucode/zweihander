import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./icon-Dc4hTclj.js";import{n as o,t as s}from"./TextInput-ceLmDhn8.js";var c=t({Controlled:()=>T,Default:()=>h,Disabled:()=>S,FullWidth:()=>w,LabelAssociation:()=>g,PrefixSuffix:()=>v,ReadOnly:()=>C,Required:()=>x,Sizes:()=>_,Validation:()=>b,WithHelperText:()=>y,__namedExportsOrder:()=>E,default:()=>p}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{l=r(),i(),o(),u=n(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Inputs/TextInput`,component:s,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]},prefix:{control:!1},suffix:{control:!1}},args:{label:`Email`,placeholder:`you@example.com`,onChange:f()}},m={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},h={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Email`);await t.type(r,`user@zweihander.dev`),await d(r).toHaveValue(`user@zweihander.dev`),await d(n.onChange).toHaveBeenCalled(),await d(n.onChange.mock.calls[0][0]).toHaveProperty(`target`)}},g={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`Email`)),await d(e.getByLabelText(`Email`)).toHaveFocus()}},_={render:e=>(0,u.jsx)(`div`,{style:m,children:[`sm`,`md`].map(t=>(0,u.jsx)(s,{...e,size:t,label:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`].map(t=>e.getByLabelText(t).parentElement.getBoundingClientRect().height);await d(t).toEqual([24,32])}},v={render:e=>(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,label:`Email`,prefix:(0,u.jsx)(a,{name:`user`})}),(0,u.jsx)(s,{...e,label:`Website`,placeholder:`example.com`,prefix:`https://`}),(0,u.jsx)(s,{...e,label:`Weight`,placeholder:`0`,suffix:`kg`})]}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`https://`)),await d(e.getByLabelText(`Website`)).toHaveFocus()}},y={args:{helperText:`We only use this for account recovery.`},play:async({canvas:e})=>{await d(e.getByLabelText(`Email`)).toHaveAccessibleDescription(`We only use this for account recovery.`)}},b={render:e=>(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,label:`Email`,defaultValue:`not-an-email`,validationState:`error`,helperText:`Enter a valid email address.`}),(0,u.jsx)(s,{...e,label:`Username`,defaultValue:`okami`,validationState:`success`,helperText:`That name is free.`})]}),play:async({canvas:e})=>{let t=e.getByLabelText(`Email`);await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Enter a valid email address.`)}},x={args:{required:!0},play:async({canvas:e})=>{await d(e.getByLabelText(/Email/)).toBeRequired()}},S={args:{disabled:!0,defaultValue:`locked@zweihander.dev`},play:async({canvas:e})=>{await d(e.getByLabelText(`Email`)).toBeDisabled()}},C={args:{readOnly:!0,defaultValue:`fixed@zweihander.dev`},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Email`);await t.type(n,`x`),await d(n).toHaveValue(`fixed@zweihander.dev`)}},w={args:{isFullWidth:!0},render:e=>(0,u.jsx)(`div`,{style:{inlineSize:`30rem`},children:(0,u.jsx)(s,{...e})}),play:async({canvas:e})=>{await d(e.getByLabelText(`Email`).parentElement.getBoundingClientRect().width).toBe(480)}},T={render:function(e){let[t,n]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,value:t,onChange:e=>n(e.target.value.toUpperCase())}),(0,u.jsxs)(`span`,{children:[`Value: `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Email`),`abc`),await d(e.getByText(`Value: ABC`)).toBeVisible()}},E=[`Default`,`LabelAssociation`,`Sizes`,`PrefixSuffix`,`WithHelperText`,`Validation`,`Required`,`Disabled`,`ReadOnly`,`FullWidth`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Email'));
    await expect(canvas.getByLabelText('Email')).toHaveFocus();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <TextInput key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md'].map(n => canvas.getByLabelText(n).parentElement!.getBoundingClientRect().height);
    await expect(heights).toEqual([24, 32]);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'We only use this for account recovery.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toHaveAccessibleDescription('We only use this for account recovery.');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText(/Email/)).toBeRequired();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked@zweihander.dev'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toBeDisabled();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}})))()}export{b as a,c as i,v as n,D as o,_ as r,h as t};