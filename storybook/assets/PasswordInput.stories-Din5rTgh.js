import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-Cjfg2BMt.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{a as c,n as l}from"./InputField-DjjlzSzi.js";import{n as u,r as d,t as f}from"./TextInput-BeBTUF8_.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{p=`_message_1t2nj_2`,m=`_rule_1t2nj_3`,h=`_mark_1t2nj_17`,g=`_hidden_1t2nj_24`,_=`_toggle_1t2nj_38`,v={message:p,rule:m,mark:h,hidden:g,toggle:_}})))()}function b({label:e=`Password`,autoComplete:t=`current-password`,rules:n,helperText:r,onChange:i,ref:o,...s}){let[c,d]=(0,x.useState)(!1),[p,m]=(0,x.useState)(String(s.defaultValue??``)),h=(0,x.useRef)(null),g=(0,x.useCallback)(e=>{h.current=e,l(o,e)},[o]),_=typeof e==`string`?e.toLowerCase():`password`;(0,x.useEffect)(()=>{let e=h.current,t=e?.form;if(!e||!t)return;let n=()=>d(!1),r=()=>setTimeout(()=>m(e.value));return t.addEventListener(`submit`,n),t.addEventListener(`reset`,r),()=>{t.removeEventListener(`submit`,n),t.removeEventListener(`reset`,r)}},[]);let y=s.value==null?p:String(s.value);return(0,S.jsx)(f,{...s,ref:g,label:e,autoComplete:t,type:c?`text`:`password`,onChange:e=>{m(e.target.value),i?.(e)},helperText:n?.length?(0,S.jsxs)(S.Fragment,{children:[r&&(0,S.jsx)(`span`,{className:v.message,children:r}),n.map((e,t)=>{let n=e.test(y);return(0,S.jsxs)(`span`,{className:v.rule,"data-met":n||void 0,children:[(0,S.jsx)(a,{name:n?`check`:`minus`,className:v.mark}),e.label,(0,S.jsx)(`span`,{className:v.hidden,children:n?` (met)`:` (not met)`})]},t)})]}):r,suffix:(0,S.jsx)(u,{"aria-label":`${c?`Hide`:`Show`} ${_}`,className:v.toggle,onClick:()=>d(e=>!e),children:c?`Hide`:`Show`})})}var x,S,C;function w(){return(w=e((()=>{x=n(),i(),c(),d(),y(),S=r(),C=[{label:`At least 12 characters`,test:e=>e.length>=12}],b.__docgenInfo={description:`A password field with a Show / Hide button, for every auth screen. The
button's name says what it does next and to which field ("Show password",
"Show confirm password", from a text \`label\`), and its text is the
visible part of that name. The value is hidden again when the form
is sent, so the browser never keeps it as plain text in its form history.
Where a password is being chosen, \`rules\` lists what it needs.`,methods:[],displayName:`PasswordInput`,props:{rules:{required:!1,tsType:{name:`Array`,elements:[{name:`PasswordRule`}],raw:`PasswordRule[]`},description:`What a new password needs, listed under the field and ticked off as the
reader types. Checking them before sending is the form's job.`},label:{defaultValue:{value:`'Password'`,computed:!1},required:!1},autoComplete:{defaultValue:{value:`'current-password'`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var T=t({Anatomy:()=>R,Default:()=>j,Disabled:()=>I,DoWithRules:()=>z,DontPlainText:()=>B,InAForm:()=>N,Sizes:()=>P,Validation:()=>F,WithRules:()=>M,__namedExportsOrder:()=>V,anatomyParts:()=>L,default:()=>A}),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{o(),w(),d(),E=r(),{expect:D,fn:O,waitFor:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Inputs/PasswordInput`,tags:[`beta`],component:b,argTypes:{label:{description:`The visible name. A text label also names the Show / Hide button: "Show new password".`,control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`'Password'`}}},autoComplete:{description:"`current-password` to sign in, `new-password` where a password is chosen, so password managers fill or suggest the right one.",control:`inline-radio`,options:[`current-password`,`new-password`],table:{type:{summary:`string`},defaultValue:{summary:`'current-password'`}}},rules:{description:"What a new password needs, listed under the field and ticked off as the reader types. Checking them before sending is the form's job. `defaultPasswordRules` is one rule: at least 12 characters.",control:!1,table:{type:{summary:`PasswordRule[]`}}},helperText:{description:"Under the field, before the rules. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the field's edge and the helper text; `error` sets `aria-invalid`. A met rule stays green.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"The field's height: 32px (`sm`) or 40px (`md`), as on Text Input.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isFullWidth:{description:`Fills its container instead of the field's default width.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dimmed and out of the tab order, the Show button too.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onChange:{description:`Called on every keystroke, as on any input.`,control:!1,table:{type:{summary:`ChangeEventHandler<HTMLInputElement>`}}}},args:{onChange:O()},excludeStories:[`anatomyParts`]},j={play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Password`);await D(n).toHaveAttribute(`type`,`password`),await D(n).toHaveAttribute(`autocomplete`,`current-password`);let r=e.getByRole(`button`,{name:`Show password`}),i=n.parentElement.getBoundingClientRect(),a=r.getBoundingClientRect();await D(getComputedStyle(r).backgroundColor).toBe(`rgba(0, 0, 0, 0)`),await D(a.height).toBe(i.height-2),await D(i.right-a.right).toBe(5),await t.type(n,`hunter2`),await t.click(r),await D(n).toHaveAttribute(`type`,`text`),await D(r).toHaveAccessibleName(`Hide password`),await D(r).toHaveTextContent(`Hide`),await D(n).toHaveValue(`hunter2`),await t.click(r),await D(n).toHaveAttribute(`type`,`password`)}},M={args:{label:`New password`,autoComplete:`new-password`,rules:[...C,{label:`A number`,test:e=>/\d/.test(e)}]},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`New password`);await D(e.getByRole(`button`,{name:`Show new password`})).toBeVisible(),await D(n).toHaveAccessibleDescription(`At least 12 characters (not met) A number (not met)`),await t.type(n,`horse1`),await D(n).toHaveAccessibleDescription(`At least 12 characters (not met) A number (met)`),await t.type(n,` battery staple`),await D(n).toHaveAccessibleDescription(`At least 12 characters (met) A number (met)`)}},N={args:{label:`New password`,autoComplete:`new-password`,rules:C},render:e=>(0,E.jsx)(`form`,{"aria-label":`Change password`,onSubmit:e=>e.preventDefault(),children:(0,E.jsx)(b,{...e,name:`password`})}),play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`New password`);await t.type(n,`correct horse battery`),await t.click(e.getByRole(`button`,{name:`Show new password`})),await D(n).toHaveAttribute(`type`,`text`),await t.type(n,`{Enter}`),await D(n).toHaveAttribute(`type`,`password`),await D(n).toHaveAccessibleDescription(`At least 12 characters (met)`),n.form.reset(),await k(()=>D(n).toHaveAccessibleDescription(`At least 12 characters (not met)`))}},P={args:{rules:C,defaultValue:`short`},render:e=>(0,E.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,E.jsx)(b,{...e,size:t,label:`Password ${t}`},t))})},F={args:{validationState:`error`,helperText:`That password is wrong.`,defaultValue:`hunter2`},play:async({canvas:e})=>{let t=e.getByLabelText(`Password`);await D(t).toHaveAttribute(`aria-invalid`,`true`),await D(t).toHaveAccessibleDescription(`That password is wrong.`)}},I={args:{disabled:!0,defaultValue:`hunter2`},play:async({canvas:e})=>{await D(e.getByLabelText(`Password`)).toBeDisabled(),await D(e.getByRole(`button`,{name:`Show password`})).toBeDisabled()}},L=[{name:`Label`,selector:`label`,description:`Names the field and, from a text label, the Show / Hide button.`},{name:`Field`,selector:`input`,description:`Dots while hidden, the text while shown.`},{name:`Show / Hide button`,selector:`button`,description:`A plain word at the end of the box, no fill or divider. Says what it does next.`},{name:`Rule`,selector:`[data-met]`,description:`One thing the password needs, ticked once met. Optional.`}],R={tags:[`!dev`],args:{label:`New password`,autoComplete:`new-password`,rules:C,defaultValue:`correct horse battery`},play:async({canvasElement:e})=>{let t=await s(e,L);await D(t[2]).toHaveAccessibleName(`Show new password`)}},z={args:{label:`New password`,autoComplete:`new-password`,rules:C}},B={tags:[`!dev`],render:()=>(0,E.jsx)(f,{label:`New password`,defaultValue:`hunter2`})},V=[`Default`,`WithRules`,`InAForm`,`Sizes`,`Validation`,`Disabled`,`anatomyParts`,`Anatomy`,`DoWithRules`,`DontPlainText`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    // A plain word inside the box: no fill, the box's full height inside its
    // 1px edge, and 4px from the end.
    const box = input.parentElement!.getBoundingClientRect();
    const button = toggle.getBoundingClientRect();
    await expect(getComputedStyle(toggle).backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(button.height).toBe(box.height - 2);
    await expect(box.right - button.right).toBe(5);
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
}`,...j.parameters?.docs?.source},description:{story:`Signing in: the password typed as dots, with a button to show it.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Choosing a password: the rules sit under the field and tick off as the reader types.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`The value is hidden again when its form is sent, and the rules follow a reset.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Every part present.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New password',
    autoComplete: 'new-password',
    rules: defaultPasswordRules
  }
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Do: a new password with its rule and a Show button.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput label="New password" defaultValue="hunter2" />
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Don't: a password in a plain Text Input, shown to anyone nearby and with no way to check it.`,...B.parameters?.docs?.description}}}})))()}export{T as a,L as c,C as d,w as f,B as i,H as l,j as n,P as o,z as r,M as s,R as t,b as u};