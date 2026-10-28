import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{r as a,t as o}from"./TextInput-vfco79YG.js";import{n as s,r as c,t as l}from"./PasswordInput-CBpNGzdF.js";var u=t({Anatomy:()=>C,Default:()=>g,Disabled:()=>x,DoWithRules:()=>w,DontPlainText:()=>T,InAForm:()=>v,Sizes:()=>y,Validation:()=>b,WithRules:()=>_,__namedExportsOrder:()=>E,anatomyParts:()=>S,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),c(),a(),d=n(),{expect:f,fn:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Inputs/PasswordInput`,tags:[`experimental`],component:l,argTypes:{label:{description:`The visible name. A text label also names the Show / Hide button: "Show new password".`,control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`'Password'`}}},autoComplete:{description:"`current-password` to sign in, `new-password` where a password is chosen, so password managers fill or suggest the right one.",control:`inline-radio`,options:[`current-password`,`new-password`],table:{type:{summary:`string`},defaultValue:{summary:`'current-password'`}}},rules:{description:"What a new password needs, listed under the field and ticked off as the reader types. Checking them before sending is the form's job. `defaultPasswordRules` is one rule: at least 12 characters.",control:!1,table:{type:{summary:`PasswordRule[]`}}},helperText:{description:"Under the field, before the rules. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the field's edge and the helper text; `error` sets `aria-invalid`. A met rule stays green.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:`The field's height, from the control tiers.`,control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isFullWidth:{description:`Fills its container instead of the field's default width.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dimmed and out of the tab order, the Show button too.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onChange:{description:`Called on every keystroke, as on any input.`,control:!1,table:{type:{summary:`ChangeEventHandler<HTMLInputElement>`}}}},args:{onChange:p()},excludeStories:[`anatomyParts`]},g={play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Password`);await f(n).toHaveAttribute(`type`,`password`),await f(n).toHaveAttribute(`autocomplete`,`current-password`);let r=e.getByRole(`button`,{name:`Show password`});await t.type(n,`hunter2`),await t.click(r),await f(n).toHaveAttribute(`type`,`text`),await f(r).toHaveAccessibleName(`Hide password`),await f(r).toHaveTextContent(`Hide`),await f(n).toHaveValue(`hunter2`),await t.click(r),await f(n).toHaveAttribute(`type`,`password`)}},_={args:{label:`New password`,autoComplete:`new-password`,rules:[...s,{label:`A number`,test:e=>/\d/.test(e)}]},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`New password`);await f(e.getByRole(`button`,{name:`Show new password`})).toBeVisible(),await f(n).toHaveAccessibleDescription(`At least 12 characters (not met) A number (not met)`),await t.type(n,`horse1`),await f(n).toHaveAccessibleDescription(`At least 12 characters (not met) A number (met)`),await t.type(n,` battery staple`),await f(n).toHaveAccessibleDescription(`At least 12 characters (met) A number (met)`)}},v={args:{label:`New password`,autoComplete:`new-password`,rules:s},render:e=>(0,d.jsx)(`form`,{"aria-label":`Change password`,onSubmit:e=>e.preventDefault(),children:(0,d.jsx)(l,{...e,name:`password`})}),play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`New password`);await t.type(n,`correct horse battery`),await t.click(e.getByRole(`button`,{name:`Show new password`})),await f(n).toHaveAttribute(`type`,`text`),await t.type(n,`{Enter}`),await f(n).toHaveAttribute(`type`,`password`),await f(n).toHaveAccessibleDescription(`At least 12 characters (met)`),n.form.reset(),await m(()=>f(n).toHaveAccessibleDescription(`At least 12 characters (not met)`))}},y={args:{rules:s,defaultValue:`short`},render:e=>(0,d.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,d.jsx)(l,{...e,size:t,label:`Password ${t}`},t))})},b={args:{validationState:`error`,helperText:`That password is wrong.`,defaultValue:`hunter2`},play:async({canvas:e})=>{let t=e.getByLabelText(`Password`);await f(t).toHaveAttribute(`aria-invalid`,`true`),await f(t).toHaveAccessibleDescription(`That password is wrong.`)}},x={args:{disabled:!0,defaultValue:`hunter2`},play:async({canvas:e})=>{await f(e.getByLabelText(`Password`)).toBeDisabled(),await f(e.getByRole(`button`,{name:`Show password`})).toBeDisabled()}},S=[{name:`Label`,selector:`label`,description:`Names the field and, from a text label, the Show / Hide button.`},{name:`Field`,selector:`input`,description:`Dots while hidden, the text while shown.`},{name:`Show / Hide button`,selector:`button`,description:`An end add-on. Says what it does next.`},{name:`Rule`,selector:`[data-met]`,description:`One thing the password needs, ticked once met. Optional.`}],C={tags:[`!dev`],args:{label:`New password`,autoComplete:`new-password`,rules:s,defaultValue:`correct horse battery`},play:async({canvasElement:e})=>{let t=await i(e,S);await f(t[2]).toHaveAccessibleName(`Show new password`)}},w={args:{label:`New password`,autoComplete:`new-password`,rules:s}},T={tags:[`!dev`],render:()=>(0,d.jsx)(o,{label:`New password`,defaultValue:`hunter2`})},E=[`Default`,`WithRules`,`InAForm`,`Sizes`,`Validation`,`Disabled`,`anatomyParts`,`Anatomy`,`DoWithRules`,`DontPlainText`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Password');
    await expect(input).toHaveAttribute('type', 'password');
    await expect(input).toHaveAttribute('autocomplete', 'current-password');
    const toggle = canvas.getByRole('button', {
      name: 'Show password'
    });
    await userEvent.type(input, 'hunter2');
    // The button says what it does next; its text is the visible part of its name.
    await userEvent.click(toggle);
    await expect(input).toHaveAttribute('type', 'text');
    await expect(toggle).toHaveAccessibleName('Hide password');
    await expect(toggle).toHaveTextContent('Hide');
    await expect(input).toHaveValue('hunter2');
    await userEvent.click(toggle);
    await expect(input).toHaveAttribute('type', 'password');
  }
}`,...g.parameters?.docs?.source},description:{story:`Signing in: the password typed as dots, with a button to show it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: [...defaultPasswordRules, {
      label: 'A number',
      test: password => /\\d/.test(password)
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('New password');
    await expect(canvas.getByRole('button', {
      name: 'Show new password'
    })).toBeVisible();
    await expect(input).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)');
    await userEvent.type(input, 'horse1');
    await expect(input).toHaveAccessibleDescription('At least 12 characters (not met) A number (met)');
    await userEvent.type(input, ' battery staple');
    await expect(input).toHaveAccessibleDescription('At least 12 characters (met) A number (met)');
  }
}`,..._.parameters?.docs?.source},description:{story:`Choosing a password: the rules sit under the field and tick off as the reader types.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: defaultPasswordRules
  },
  render: args => <form aria-label="Change password" onSubmit={e => e.preventDefault()}>
      <PasswordInput {...args} name="password" />
    </form>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('New password') as HTMLInputElement;
    await userEvent.type(input, 'correct horse battery');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show new password'
    }));
    await expect(input).toHaveAttribute('type', 'text');
    await userEvent.type(input, '{Enter}');
    await expect(input).toHaveAttribute('type', 'password');
    await expect(input).toHaveAccessibleDescription('At least 12 characters (met)');
    input.form!.reset();
    await waitFor(() => expect(input).toHaveAccessibleDescription('At least 12 characters (not met)'));
  }
}`,...v.parameters?.docs?.source},description:{story:`The value is hidden again when its form is sent, and the rules follow a reset.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rules: defaultPasswordRules,
    defaultValue: 'short'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <PasswordInput key={size} {...args} size={size} label={\`Password \${size}\`} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'That password is wrong.',
    defaultValue: 'hunter2'
  },
  play: async ({
    canvas
  }) => {
    const input = canvas.getByLabelText('Password');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('That password is wrong.');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'hunter2'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Password')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Show password'
    })).toBeDisabled();
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: defaultPasswordRules,
    defaultValue: 'correct horse battery'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveAccessibleName('Show new password');
  }
}`,...C.parameters?.docs?.source},description:{story:`Every part present.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: defaultPasswordRules
  }
}`,...w.parameters?.docs?.source},description:{story:`Guidelines, Do: a new password with its rule and a Show button.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput label="New password" defaultValue="hunter2" />
}`,...T.parameters?.docs?.source},description:{story:`Guidelines, Don't: a password in a plain Text Input, shown to anyone nearby and with no way to check it.`,...T.parameters?.docs?.description}}}})))()}export{u as a,S as c,T as i,D as l,g as n,y as o,w as r,_ as s,C as t};