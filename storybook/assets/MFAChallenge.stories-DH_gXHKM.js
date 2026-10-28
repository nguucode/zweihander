import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as ee}from"./Checkbox-5Fepdwz1.js";import{n as s,t as te}from"./OTPInput-CGzMRN34.js";import{r as c,t as ne}from"./TextInput-vfco79YG.js";import{n as l,t as re}from"./Link-Bhk0TW_i.js";import{n as u,t as d}from"./Alert-C-O0NCPv.js";import{a as f,i as p,r as m,t as ie}from"./AuthLayout-DKCgRmPV.js";var h,g,_,v,y;function b(){return(b=e((()=>{h=`_form_vcqrw_1`,g=`_text_vcqrw_6`,_=`_destination_vcqrw_10`,v=`_others_vcqrw_17`,y={form:h,text:g,destination:_,others:v}})))()}function x({methods:e,codeLength:t=6,onVerify:n,onResend:r,onMethodSelect:i,resendCooldown:o=30,hasRememberDevice:s=!0,rememberDeviceDays:c=30,hasBackupCode:l=!0,signInHref:u=`#sign-in`,footer:f,...h}){let[g,_]=(0,S.useState)(`code`),[v,b]=(0,S.useState)(e[0]?.id),x=e.find(e=>e.id===v)??e[0],[T,E]=(0,S.useState)(``),D=(0,S.useRef)(``),[O,k]=(0,S.useState)(!1),[A,j]=(0,S.useState)(),[M,N]=(0,S.useState)(),[P,F]=(0,S.useState)(),[I,L]=(0,S.useState)(),R=(0,S.useRef)(null),z=(0,S.useRef)(null),B=(0,S.useRef)(null),V=(0,S.useRef)(!1),H=(0,S.useRef)(0);(0,S.useEffect)(()=>{V.current&&(V.current=!1,g===`code`?z.current?.focus():g===`backup`?B.current?.focus():p(R.current))},[g,v]);let U=(0,S.useRef)(null);(0,S.useEffect)(()=>{!I&&U.current&&(U.current.focus(),U.current=null)},[I]);function W(e){D.current=e,E(e),j(void 0)}function G(e){N(void 0),F(void 0),j(void 0),W(``),H.current++,V.current=!0,_(e)}async function K(e,t){L(`verify`);try{let r=await m(()=>n?.(e));if(!r)return;N(r),e.method===`backup`?t&&(t.value=``):W(``),U.current=t}finally{L(void 0)}}async function q(e){if(e.preventDefault(),I)return;let n=D.current,r=n.length<t?`Enter the ${t}-digit code.`:void 0;if(j(r),N(void 0),F(void 0),r){z.current?.focus();return}await K({method:x.id,code:n,rememberDevice:O},z.current)}async function J(e){if(e.preventDefault(),I)return;let t=String(new FormData(e.currentTarget).get(`backupCode`)).trim();if(j(t?void 0:`Enter a backup code.`),N(void 0),!t){B.current?.focus();return}await K({method:`backup`,code:t,rememberDevice:O},B.current)}async function Y(){if(x.kind===`app`)return;N(void 0),F(void 0);let e=H.current,t=await m(()=>r?.(x.id));if(e===H.current){if(t)throw N(t),Error(t);F(`We sent a new code to ${x.destination}.`)}}async function X(e){if(!I){N(void 0),L(e.id);try{let t=await m(()=>i?.(e.id));if(t){N(t);return}b(e.id),G(`code`)}finally{L(void 0)}}}let Z=I===`verify`,Q=s&&(0,C.jsx)(ee,{name:`rememberDevice`,label:`Remember this device for ${c} days`,checked:O,onCheckedChange:k}),$={code:{title:`Two-step verification`,description:x.kind===`app`?`Enter the ${t}-digit code from your authenticator app.`:(0,C.jsxs)(C.Fragment,{children:[`We sent a `,t,`-digit code to `,(0,C.jsx)(`strong`,{className:y.destination,children:x.destination}),`.`]})},methods:{title:`Choose another way to verify`,description:`Pick where to get your code.`},backup:{title:`Enter a backup code`,description:`One of the codes you saved when you set up two-step verification. Each one works once.`}};return(0,C.jsxs)(ie,{ref:R,title:$[g].title,description:$[g].description,footer:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{className:y.text,children:(0,C.jsx)(re,{href:u,children:`Back to sign in`})}),f]}),...h,children:[M&&(0,C.jsx)(d,{variant:`danger`,isLive:!0,children:M}),P&&(0,C.jsx)(d,{variant:`success`,isLive:!0,children:P}),g===`code`&&(0,C.jsxs)(`form`,{className:y.form,noValidate:!0,onSubmit:q,children:[(0,C.jsx)(te,{ref:z,label:`Verification code`,length:t,value:T,onValueChange:W,autoSubmit:!0,readOnly:Z,validationState:A?`error`:void 0,helperText:A,resendCooldown:o,onResend:x.kind===`app`?void 0:Y},x.id),Q,(0,C.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:Z,children:`Verify`}),(e.length>1||l)&&(0,C.jsxs)(`div`,{className:y.others,children:[e.length>1&&(0,C.jsx)(a,{variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:Z,onClick:()=>G(`methods`),children:`Try another way`}),l&&(0,C.jsx)(a,{variant:`secondary`,appearance:`ghost`,size:`sm`,disabled:Z,onClick:()=>G(`backup`),children:`Use a backup code`})]})]}),g===`methods`&&(0,C.jsxs)(`div`,{className:y.form,children:[e.filter(e=>e.id!==x.id).map(e=>(0,C.jsx)(a,{variant:`secondary`,appearance:`outlined`,isFullWidth:!0,disabled:I!==void 0&&I!==e.id,isLoading:I===e.id,onClick:()=>X(e),children:w(e)},e.id)),(0,C.jsx)(a,{variant:`secondary`,appearance:`ghost`,disabled:I!==void 0,onClick:()=>G(`code`),children:`Back`})]}),g===`backup`&&(0,C.jsxs)(`form`,{className:y.form,noValidate:!0,onSubmit:J,children:[(0,C.jsx)(ne,{ref:B,label:`Backup code`,name:`backupCode`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:!1,isFullWidth:!0,validationState:A?`error`:void 0,helperText:A,onChange:()=>A&&j(void 0)}),Q,(0,C.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:Z,children:`Verify`}),(0,C.jsx)(a,{variant:`secondary`,appearance:`outlined`,isFullWidth:!0,disabled:Z,onClick:()=>G(`code`),children:`Use a verification code instead`})]})]})}var S,C,w;function T(){return(T=e((()=>{S=n(),i(),o(),s(),c(),l(),u(),f(),b(),C=r(),w=e=>e.kind===`app`?`Authenticator app`:`${e.kind===`sms`?`Text message`:`Email`} to ${e.destination}`,x.__docgenInfo={description:`The second step of signing in, a template, in the Auth Layout: the
reader enters the code from their authenticator app, or the one sent to
their phone or email. Try another way lists the account's methods, and a
backup code is a way in when none is at hand. Checking a code is for
\`onVerify\`.`,methods:[],displayName:`MFAChallenge`,props:{methods:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`| { id: string; kind: 'app' }
| {
    id: string
    kind: 'sms' | 'email'
    /** Where the code goes, masked: "•••• 4821", "a•••@example.com". */
    destination: string
  }`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; kind: 'app' }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`literal`,value:`'app'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{
  id: string
  kind: 'sms' | 'email'
  /** Where the code goes, masked: "•••• 4821", "a•••@example.com". */
  destination: string
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'sms' | 'email'`,elements:[{name:`literal`,value:`'sms'`},{name:`literal`,value:`'email'`}],required:!0}},{key:`destination`,value:{name:`string`,required:!0},description:`Where the code goes, masked: "•••• 4821", "a•••@example.com".`}]}}]}],raw:`MFAMethod[]`},description:`The account's second factors, the one to start with first. At least one.`},codeLength:{required:!1,tsType:{name:`number`},description:`Digits in a code from a method.`,defaultValue:{value:`6`,computed:!1}},onVerify:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: MFAChallengeValues) => Result`,signature:{arguments:[{type:{name:`MFAChallengeValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with the code once it is typed in full or pasted (the form sends
itself), or with a backup code. Return (or resolve to) a message to
show it above the form, e.g. a wrong code; a thrown error or a
rejected promise shows a generic message.`},onResend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(method: string) => Result`,signature:{arguments:[{type:{name:`string`},name:`method`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:"Sends a new code for an `sms` or `email` method, from Resend code. A returned message shows above the form."},onMethodSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(method: string) => Result`,signature:{arguments:[{type:{name:`string`},name:`method`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:"Called when the reader picks a method under Try another way: send its\ncode for `sms` and `email`. A returned message keeps the reader on the\nlist."},resendCooldown:{required:!1,tsType:{name:`number`},description:`Seconds before Resend code is allowed, from when the code was sent and after each resend.`,defaultValue:{value:`30`,computed:!1}},hasRememberDevice:{required:!1,tsType:{name:`boolean`},description:`Shows "Remember this device for N days".`,defaultValue:{value:`true`,computed:!1}},rememberDeviceDays:{required:!1,tsType:{name:`number`},description:`The N in "Remember this device for N days": how long your server trusts the device.`,defaultValue:{value:`30`,computed:!1}},hasBackupCode:{required:!1,tsType:{name:`boolean`},description:`Shows Use a backup code.`,defaultValue:{value:`true`,computed:!1}},signInHref:{required:!1,tsType:{name:`string`},description:`Where "Back to sign in" goes.`,defaultValue:{value:`'#sign-in'`,computed:!1}}},composes:[`Omit`]}})))()}var E=t({BackupCode:()=>q,Default:()=>B,MethodFails:()=>K,OnlyOneWay:()=>J,Phone:()=>X,TextMessage:()=>W,TryAnotherWay:()=>G,Unavailable:()=>Y,Validation:()=>U,Verify:()=>V,WrongCode:()=>H,__namedExportsOrder:()=>Z,default:()=>L}),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{T(),D=r(),{expect:O,fn:k,userEvent:A,waitFor:j,within:M}=__STORYBOOK_MODULE_TEST__,N=(e,t=760)=>[n=>(0,D.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],P=(0,D.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),F={id:`app`,kind:`app`},I={id:`sms`,kind:`sms`,destination:`•••• 4821`},L={title:`Templates/Auth/MFA Challenge`,tags:[`experimental`],component:x,parameters:{layout:`fullscreen`},decorators:N(1200),args:{brand:P,methods:[F,I,{id:`email`,kind:`email`,destination:`a•••@example.com`}],onVerify:k(),onResend:k(),onMethodSelect:k(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},methods:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},R=e=>e.getByRole(`textbox`,{name:`Verification code`}),z=async(e,t)=>{await A.click(R(e)),await A.keyboard(t)},B={play:async({canvas:e})=>{let t=e.getByRole(`main`);await O(M(t).getByRole(`heading`,{level:1,name:`Two-step verification`})).toBeVisible(),await O(e.getByText(`Enter the 6-digit code from your authenticator app.`)).toBeVisible(),await O(R(e)).toHaveAttribute(`autocomplete`,`one-time-code`),await O(e.getByRole(`checkbox`,{name:`Remember this device for 30 days`})).not.toBeChecked(),await O(e.getByRole(`button`,{name:`Verify`})).toBeVisible(),await O(e.getByRole(`button`,{name:`Try another way`})).toBeVisible(),await O(e.getByRole(`button`,{name:`Use a backup code`})).toBeVisible(),await O(e.queryByRole(`button`,{name:/Resend code/})).toBeNull(),await O(e.getByRole(`link`,{name:`Back to sign in`})).toHaveAttribute(`href`,`#sign-in`)}},V={play:async({canvas:e,args:t})=>{await A.click(e.getByRole(`checkbox`,{name:`Remember this device for 30 days`})),await z(e,`123456`),await j(()=>O(t.onVerify).toHaveBeenCalledWith({method:`app`,code:`123456`,rememberDevice:!0}))}},H={args:{onVerify:k(()=>new Promise(e=>setTimeout(()=>e(`That code is not right.`),200)))},play:async({canvas:e})=>{await z(e,`000000`),await O(e.getByRole(`button`,{name:`Verify`})).toHaveAttribute(`aria-busy`,`true`),await O(await e.findByRole(`alert`)).toHaveTextContent(`That code is not right.`);let t=R(e);await j(()=>O(t).toHaveFocus()),await O(t).toHaveValue(``)}},U={play:async({canvas:e,args:t})=>{await A.click(e.getByRole(`button`,{name:`Verify`}));let n=R(e);await O(n).toHaveAttribute(`aria-invalid`,`true`),await O(e.getByRole(`group`,{name:`Verification code`})).toHaveAccessibleDescription(`Enter the 6-digit code.`),await O(n).toHaveFocus(),await O(t.onVerify).not.toHaveBeenCalled(),await A.keyboard(`1`),await O(n).not.toHaveAttribute(`aria-invalid`)}},W={args:{methods:[I,F],resendCooldown:1},play:async({canvas:e,args:t})=>{await O(e.getByText(/We sent a 6-digit code to/)).toHaveTextContent(`We sent a 6-digit code to •••• 4821.`);let n=e.getByRole(`button`,{name:/Resend code/});await O(n).toHaveTextContent(`Resend code (0:01)`),await j(()=>O(n).toHaveTextContent(/^Resend code$/),{timeout:3e3}),await A.click(n),await O(t.onResend).toHaveBeenCalledWith(`sms`),await O(await e.findByRole(`status`)).toHaveTextContent(`We sent a new code to •••• 4821.`)}},G={play:async({canvas:e,args:t})=>{await A.click(e.getByRole(`button`,{name:`Try another way`})),await O(e.getByRole(`heading`,{level:1,name:`Choose another way to verify`})).toHaveFocus(),await O(e.queryByRole(`button`,{name:`Authenticator app`})).toBeNull(),await O(e.getByRole(`button`,{name:`Email to a•••@example.com`})).toBeVisible(),await A.click(e.getByRole(`button`,{name:`Back`})),await j(()=>O(R(e)).toHaveFocus()),await O(t.onMethodSelect).not.toHaveBeenCalled(),await A.click(e.getByRole(`button`,{name:`Try another way`})),await A.click(e.getByRole(`button`,{name:`Text message to •••• 4821`})),await O(t.onMethodSelect).toHaveBeenCalledWith(`sms`),await j(()=>O(R(e)).toHaveFocus()),await O(e.getByText(/We sent a 6-digit code to/)).toHaveTextContent(`•••• 4821`)}},K={args:{onMethodSelect:k(()=>`Too many codes sent. Try again in an hour.`)},play:async({canvas:e})=>{await A.click(e.getByRole(`button`,{name:`Try another way`})),await A.click(e.getByRole(`button`,{name:`Text message to •••• 4821`})),await O(await e.findByRole(`alert`)).toHaveTextContent(`Too many codes sent.`),await O(e.getByRole(`heading`,{level:1,name:`Choose another way to verify`})).toBeVisible()}},q={play:async({canvas:e,args:t})=>{await A.click(e.getByRole(`button`,{name:`Use a backup code`})),await O(e.getByRole(`heading`,{level:1,name:`Enter a backup code`})).toBeVisible();let n=e.getByLabelText(`Backup code`);await O(n).toHaveFocus(),await A.click(e.getByRole(`button`,{name:`Verify`})),await O(n).toHaveAccessibleDescription(`Enter a backup code.`),await O(n).toHaveFocus(),await A.type(n,` ab12-cd34 {Enter}`),await O(t.onVerify).toHaveBeenCalledWith({method:`backup`,code:`ab12-cd34`,rememberDevice:!1}),await A.click(e.getByRole(`button`,{name:`Use a verification code instead`})),await O(R(e)).toHaveFocus()}},J={args:{methods:[F],hasBackupCode:!1,hasRememberDevice:!1},play:async({canvas:e})=>{await O(e.queryByRole(`button`,{name:`Try another way`})).toBeNull(),await O(e.queryByRole(`button`,{name:`Use a backup code`})).toBeNull(),await O(e.queryByRole(`checkbox`)).toBeNull()}},Y={args:{onVerify:k(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{await z(e,`123456`),await O(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`)}},X={decorators:N(320,680),args:{methods:[{id:`email`,kind:`email`,destination:`a•••••••••••••••••••@acmecorporationholdings.example`},F]},play:async({canvasElement:e})=>{let t=e.firstElementChild;await j(()=>O(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth))}},Z=[`Default`,`Verify`,`WrongCode`,`Validation`,`TextMessage`,`TryAnotherWay`,`MethodFails`,`BackupCode`,`OnlyOneWay`,`Unavailable`,`Phone`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Two-step verification'
    })).toBeVisible();
    await expect(canvas.getByText('Enter the 6-digit code from your authenticator app.')).toBeVisible();
    await expect(codeField(canvas)).toHaveAttribute('autocomplete', 'one-time-code');
    await expect(canvas.getByRole('checkbox', {
      name: 'Remember this device for 30 days'
    })).not.toBeChecked();
    await expect(canvas.getByRole('button', {
      name: 'Verify'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Try another way'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Use a backup code'
    })).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: /Resend code/
    })).toBeNull();
    await expect(canvas.getByRole('link', {
      name: 'Back to sign in'
    })).toHaveAttribute('href', '#sign-in');
  }
}`,...B.parameters?.docs?.source},description:{story:`An authenticator app: the code cells, Remember this device, Verify and the other ways in. Nothing to resend.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Remember this device for 30 days'
    }));
    await enter(canvas, '123456');
    await waitFor(() => expect(args.onVerify).toHaveBeenCalledWith({
      method: 'app',
      code: '123456',
      rememberDevice: true
    }));
  }
}`,...V.parameters?.docs?.source},description:{story:"The sixth digit sends the code, with the method and Remember this device, to `onVerify`.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    onVerify: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('That code is not right.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    await enter(canvas, '000000');
    await expect(canvas.getByRole('button', {
      name: 'Verify'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('That code is not right.');
    const first = codeField(canvas);
    await waitFor(() => expect(first).toHaveFocus());
    await expect(first).toHaveValue('');
  }
}`,...H.parameters?.docs?.source},description:{story:"`onVerify` returns a message, busy while it waits: it is announced, the code is cleared and the first cell focused.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify'
    }));
    const first = codeField(canvas);
    await expect(first).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('group', {
      name: 'Verification code'
    })).toHaveAccessibleDescription('Enter the 6-digit code.');
    await expect(first).toHaveFocus();
    await expect(args.onVerify).not.toHaveBeenCalled();
    await userEvent.keyboard('1');
    await expect(first).not.toHaveAttribute('aria-invalid');
  }
}`,...U.parameters?.docs?.source},description:{story:`Verify with cells left empty: the field is marked, says what is missing and keeps focus; nothing is sent.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [sms, app],
    resendCooldown: 1
  },
  play: async ({
    canvas,
    args
  }) => {
    await expect(canvas.getByText(/We sent a 6-digit code to/)).toHaveTextContent('We sent a 6-digit code to •••• 4821.');
    const resend = canvas.getByRole('button', {
      name: /Resend code/
    });
    await expect(resend).toHaveTextContent('Resend code (0:01)');
    await waitFor(() => expect(resend).toHaveTextContent(/^Resend code$/), {
      timeout: 3000
    });
    await userEvent.click(resend);
    await expect(args.onResend).toHaveBeenCalledWith('sms');
    await expect(await canvas.findByRole('status')).toHaveTextContent('We sent a new code to •••• 4821.');
  }
}`,...W.parameters?.docs?.source},description:{story:"A code sent by text message: the page names where it went, and Resend\ncode counts down, then sends again through `onResend` and says so.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Try another way'
    }));
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Choose another way to verify'
    })).toHaveFocus();
    await expect(canvas.queryByRole('button', {
      name: 'Authenticator app'
    })).toBeNull();
    await expect(canvas.getByRole('button', {
      name: 'Email to a•••@example.com'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await waitFor(() => expect(codeField(canvas)).toHaveFocus());
    await expect(args.onMethodSelect).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Try another way'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Text message to •••• 4821'
    }));
    await expect(args.onMethodSelect).toHaveBeenCalledWith('sms');
    await waitFor(() => expect(codeField(canvas)).toHaveFocus());
    await expect(canvas.getByText(/We sent a 6-digit code to/)).toHaveTextContent('•••• 4821');
  }
}`,...G.parameters?.docs?.source},description:{story:`Try another way lists the methods, with focus on the new title; picking
one calls \`onMethodSelect\` (to send its code) and brings its code step,
focused on the first cell.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    onMethodSelect: fn(() => 'Too many codes sent. Try again in an hour.')
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Try another way'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Text message to •••• 4821'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many codes sent.');
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Choose another way to verify'
    })).toBeVisible();
  }
}`,...K.parameters?.docs?.source},description:{story:"`onMethodSelect` returns a message: the reader stays on the list.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Use a backup code'
    }));
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Enter a backup code'
    })).toBeVisible();
    const field = canvas.getByLabelText('Backup code');
    await expect(field).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify'
    }));
    await expect(field).toHaveAccessibleDescription('Enter a backup code.');
    await expect(field).toHaveFocus();
    await userEvent.type(field, ' ab12-cd34 {Enter}');
    await expect(args.onVerify).toHaveBeenCalledWith({
      method: 'backup',
      code: 'ab12-cd34',
      rememberDevice: false
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Use a verification code instead'
    }));
    await expect(codeField(canvas)).toHaveFocus();
  }
}`,...q.parameters?.docs?.source},description:{story:"A backup code: a plain text field, checked for being filled, sent as\nmethod `'backup'`. Use a verification code instead goes back.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [app],
    hasBackupCode: false,
    hasRememberDevice: false
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button', {
      name: 'Try another way'
    })).toBeNull();
    await expect(canvas.queryByRole('button', {
      name: 'Use a backup code'
    })).toBeNull();
    await expect(canvas.queryByRole('checkbox')).toBeNull();
  }
}`,...J.parameters?.docs?.source},description:{story:`One method and no backup codes: no other ways in to offer.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    onVerify: fn(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    await enter(canvas, '123456');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
  }
}`,...Y.parameters?.docs?.source},description:{story:"`onVerify` throws or rejects: a generic message.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: box(320, 680),
  args: {
    methods: [{
      id: 'email',
      kind: 'email',
      destination: 'a•••••••••••••••••••@acmecorporationholdings.example'
    }, app]
  },
  play: async ({
    canvasElement
  }) => {
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
  }
}`,...X.parameters?.docs?.source},description:{story:`A phone with a long email: the six cells and the two links fit, nothing scrolls sideways.`,...X.parameters?.docs?.description}}}})))()}export{X as a,Q as c,J as i,B as n,W as o,E as r,G as s,q as t};