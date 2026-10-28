import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as ee}from"./Checkbox-5Fepdwz1.js";import{n as s,t as te}from"./Spinner-x3z_vCDn.js";import{r as c,t as ne}from"./TextInput-vfco79YG.js";import{r as l,t as re}from"./PasswordInput-CBpNGzdF.js";import{n as u,t as d}from"./Link-Bhk0TW_i.js";import{n as f,t as p}from"./Alert-C-O0NCPv.js";import{a as m,i as ie,n as ae,r as h,t as g}from"./AuthLayout-DKCgRmPV.js";var _,v,y,b,x,S,C;function w(){return(w=e((()=>{_=`_form_tffx7_1`,v=`_sso_tffx7_2`,y=`_text_tffx7_7`,b=`_email_tffx7_11`,x=`_identity_tffx7_18`,S=`_forgot_tffx7_31`,C={form:_,sso:v,text:y,email:b,identity:x,forgot:S}})))()}function T({title:e=`Sign in to your account`,providers:t=[],onProviderSelect:n,defaultEmail:r=``,hasRememberEmail:i=!0,onContinue:o,onSignIn:s,forgotPasswordHref:c=`#forgot-password`,signUpHref:l,footer:u,...f}){let[m,_]=(0,E.useState)({name:`email`}),[v,y]=(0,E.useState)({email:r,rememberEmail:!!r}),[b,x]=(0,E.useState)({}),[S,w]=(0,E.useState)(),[T,O]=(0,E.useState)(!1),k=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useRef)(!1);(0,E.useEffect)(()=>{M.current&&(M.current=!1,m.name===`email`?A.current?.focus():m.name===`password`?j.current?.focus():ie(k.current))},[m]);function N(e){w(void 0),x({}),M.current=!0,_(e)}async function P(e){if(e.preventDefault(),T)return;let t=new FormData(e.currentTarget),n={email:String(t.get(`email`)).trim(),rememberEmail:t.get(`rememberEmail`)!=null},r=n.email?A.current?.validity.typeMismatch?`Enter an email address like name@company.com.`:void 0:`Enter your email address.`;if(x({email:r}),w(void 0),r)return A.current?.focus();O(!0);try{let e=await h(()=>o?.(n));if(typeof e==`string`&&e)return w(e),A.current?.focus();y(n),N(e&&typeof e==`object`?{name:`sso`,provider:e.sso}:{name:`password`})}finally{O(!1)}}async function F(e){if(e.preventDefault(),T)return;let t=String(new FormData(e.currentTarget).get(`password`));if(x({password:t?void 0:`Enter your password.`}),w(void 0),!t)return j.current?.focus();O(!0);try{let e=await h(()=>s?.({...v,password:t}));e&&(w(e),j.current&&(j.current.value=``),j.current?.focus())}finally{O(!1)}}let I=(0,D.jsx)(`strong`,{className:C.email,children:v.email});return(0,D.jsxs)(g,{ref:k,title:m.name===`sso`?`Continuing to ${m.provider}`:e,footer:(l||u)&&(0,D.jsxs)(D.Fragment,{children:[l&&(0,D.jsxs)(`p`,{className:C.text,children:[`No account? `,(0,D.jsx)(d,{href:l,children:`Sign up`})]}),u]}),...f,children:[m.name===`email`&&(0,D.jsx)(ae,{providers:t,onSelect:n,disabled:T}),S&&(0,D.jsx)(p,{variant:`danger`,isLive:!0,children:S}),m.name===`email`&&(0,D.jsxs)(`form`,{className:C.form,noValidate:!0,onSubmit:P,children:[(0,D.jsx)(ne,{ref:A,label:`Email`,name:`email`,type:`email`,autoComplete:`username`,defaultValue:v.email,isFullWidth:!0,validationState:b.email?`error`:void 0,helperText:b.email,onChange:()=>b.email&&x({})}),i&&(0,D.jsx)(ee,{name:`rememberEmail`,label:`Remember my email`,defaultChecked:v.rememberEmail}),(0,D.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:T,children:`Continue`})]}),m.name===`password`&&(0,D.jsxs)(`form`,{className:C.form,noValidate:!0,onSubmit:F,children:[(0,D.jsxs)(`div`,{className:C.identity,children:[(0,D.jsxs)(`p`,{className:C.text,children:[`Signing in as `,I]}),(0,D.jsx)(a,{variant:`secondary`,appearance:`ghost`,size:`sm`,"aria-label":`Change email`,disabled:T,onClick:()=>N({name:`email`}),children:`Change`})]}),(0,D.jsx)(`input`,{type:`email`,name:`username`,autoComplete:`username`,value:v.email,readOnly:!0,hidden:!0}),(0,D.jsx)(re,{ref:j,name:`password`,isFullWidth:!0,validationState:b.password?`error`:void 0,helperText:b.password,onChange:()=>b.password&&x({})}),(0,D.jsx)(d,{href:c,className:C.forgot,children:`Forgot password?`}),(0,D.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:T,children:`Sign in`})]}),m.name===`sso`&&(0,D.jsxs)(`div`,{className:C.form,children:[(0,D.jsxs)(`div`,{className:C.sso,children:[(0,D.jsx)(te,{size:`sm`,label:`Taking you to ${m.provider}…`}),(0,D.jsxs)(`p`,{className:C.text,children:[`Your organization signs in with `,m.provider,`. Signing in as `,I,`.`]})]}),(0,D.jsx)(a,{variant:`secondary`,appearance:`outlined`,isFullWidth:!0,onClick:()=>N({name:`email`}),children:`Use a different email`})]})]})}var E,D;function O(){return(O=e((()=>{E=n(),i(),o(),c(),s(),u(),f(),m(),l(),w(),D=r(),T.__docgenInfo={description:`A sign-in page that asks for the email first, a template: Continue hands
it to \`onContinue\`, which says how that account signs in. Single sign-on
accounts go to their identity provider; the rest see the email, with
Change, then the password. In the Auth Layout, after Carbon's login. It
checks the fields are filled and the email looks like one.`,methods:[],displayName:`ProgressiveSignIn`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Sign in to your account'`,computed:!1}},providers:{required:!1,tsType:{name:`Array`,elements:[{name:`AuthProvider`}],raw:`AuthProvider[]`},description:`Social buttons above the email, with an "or" line. None by default.`,defaultValue:{value:`[]`,computed:!1}},onProviderSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},defaultEmail:{required:!1,tsType:{name:`string`},description:`The email to start with: one the reader asked to remember. Ticks "Remember my email".`,defaultValue:{value:`''`,computed:!1}},hasRememberEmail:{required:!1,tsType:{name:`boolean`},description:`Shows "Remember my email" in step 1.`,defaultValue:{value:`true`,computed:!1}},onContinue:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: ProgressiveSignInIdentity) => ProgressiveSignInRoute | Promise<ProgressiveSignInRoute>`,signature:{arguments:[{type:{name:`ProgressiveSignInIdentity`},name:`values`}],return:{name:`union`,raw:`ProgressiveSignInRoute | Promise<ProgressiveSignInRoute>`,elements:[{name:`union`,raw:`string | void | { sso: string }`,elements:[{name:`string`},{name:`void`},{name:`signature`,type:`object`,raw:`{ sso: string }`,signature:{properties:[{key:`sso`,value:{name:`string`,required:!0}}]}}]},{name:`Promise`,elements:[{name:`union`,raw:`string | void | { sso: string }`,elements:[{name:`string`},{name:`void`},{name:`signature`,type:`object`,raw:`{ sso: string }`,signature:{properties:[{key:`sso`,value:{name:`string`,required:!0}}]}}]}],raw:`Promise<ProgressiveSignInRoute>`}]}}},description:`Called with the email once it looks like one. Look up how the account
signs in (by its domain, say) and return the route; start the redirect
yourself for \`{ sso }\`. The button shows it is busy while a promise is
pending; a thrown error or a rejected promise shows a generic message.`},onSignIn:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: ProgressiveSignInValues) => string | void | Promise<string | void>`,signature:{arguments:[{type:{name:`ProgressiveSignInValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with the email and the password. Return (or resolve to) a
message to show it above the form, e.g. wrong credentials; a thrown
error or a rejected promise shows a generic message.`},forgotPasswordHref:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#forgot-password'`,computed:!1}},signUpHref:{required:!1,tsType:{name:`string`},description:`Shows "No account? Sign up" under the form. Leave it out where accounts are by invitation.`}},composes:[`Omit`]}})))()}var k=t({Change:()=>U,ContinueFails:()=>J,Default:()=>V,Password:()=>H,Phone:()=>Z,Remembered:()=>G,SignInFails:()=>Y,SingleSignOn:()=>W,Unavailable:()=>X,Validation:()=>q,WithProviders:()=>K,__namedExportsOrder:()=>Q,default:()=>z}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{O(),A=r(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I=(e,t=720)=>[n=>(0,A.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],L=(0,A.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),R=({email:e})=>e.endsWith(`@acme.com`)?{sso:`Okta`}:void 0,z={title:`Templates/Auth/Progressive Sign In`,tags:[`experimental`],component:T,parameters:{layout:`fullscreen`},decorators:I(1200),args:{brand:L,signUpHref:`#sign-up`,onContinue:M(R),onSignIn:M(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},providers:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},B=async(e,t)=>{await N.type(e.getByLabelText(`Email`),`${t}{Enter}`)},V={play:async({canvas:e})=>{let t=e.getByRole(`main`);await j(F(t).getByRole(`heading`,{level:1,name:`Sign in to your account`})).toBeVisible();let n=e.getByLabelText(`Email`);await j(n).toHaveAttribute(`type`,`email`),await j(n).toHaveAttribute(`autocomplete`,`username`),await j(e.getByRole(`checkbox`,{name:`Remember my email`})).not.toBeChecked(),await j(e.getByRole(`button`,{name:`Continue`})).toBeVisible(),await j(e.queryByLabelText(`Password`)).toBeNull(),await j(e.getByRole(`link`,{name:`Sign up`})).toHaveAttribute(`href`,`#sign-up`)}},H={play:async({canvas:e,canvasElement:t,args:n})=>{await N.click(e.getByRole(`checkbox`,{name:`Remember my email`})),await B(e,` ana@example.com `),await j(n.onContinue).toHaveBeenCalledWith({email:`ana@example.com`,rememberEmail:!0});let r=await e.findByLabelText(`Password`);await j(r).toHaveFocus(),await j(e.getByText(/Signing in as/)).toHaveTextContent(`Signing in as ana@example.com`),await j(e.getByRole(`button`,{name:`Change email`})).toBeVisible(),await j(e.getByRole(`link`,{name:`Forgot password?`})).toHaveAttribute(`href`,`#forgot-password`),await j(t.querySelector(`input[autocomplete="username"]`)).toHaveValue(`ana@example.com`),await N.type(r,`correct horse{Enter}`),await j(n.onSignIn).toHaveBeenCalledWith({email:`ana@example.com`,rememberEmail:!0,password:`correct horse`})}},U={play:async({canvas:e})=>{await B(e,`ana@example.com`),await N.click(await e.findByRole(`button`,{name:`Change email`}));let t=e.getByLabelText(`Email`);await j(t).toHaveValue(`ana@example.com`),await j(t).toHaveFocus()}},W={play:async({canvas:e})=>{await B(e,`ana@acme.com`);let t=await e.findByRole(`heading`,{level:1,name:`Continuing to Okta`});await j(t).toHaveFocus(),await j(e.getByText(/Your organization signs in with/)).toHaveTextContent(`Your organization signs in with Okta. Signing in as ana@acme.com.`),await j(e.queryByLabelText(`Password`)).toBeNull(),await P(()=>j(e.getByRole(`status`)).toHaveTextContent(`Taking you to Okta…`)),await N.click(e.getByRole(`button`,{name:`Use a different email`})),await j(e.getByLabelText(`Email`)).toHaveFocus(),await j(e.getByRole(`heading`,{level:1,name:`Sign in to your account`})).toBeVisible()}},G={args:{defaultEmail:`ana@example.com`},play:async({canvas:e})=>{await j(e.getByLabelText(`Email`)).toHaveValue(`ana@example.com`),await j(e.getByRole(`checkbox`,{name:`Remember my email`})).toBeChecked()}},K={args:{providers:[{id:`google`,label:`Continue with Google`},{id:`microsoft`,label:`Continue with Microsoft`}],onProviderSelect:M()},play:async({canvas:e,args:t})=>{await N.click(e.getByRole(`button`,{name:`Continue with Google`})),await j(t.onProviderSelect).toHaveBeenCalledWith(`google`),await B(e,`ana@example.com`),await e.findByLabelText(`Password`),await j(e.queryByRole(`button`,{name:`Continue with Google`})).toBeNull()}},q={play:async({canvas:e,args:t})=>{let n=e.getByLabelText(`Email`);await N.click(e.getByRole(`button`,{name:`Continue`})),await j(n).toHaveAttribute(`aria-invalid`,`true`),await j(n).toHaveAccessibleDescription(`Enter your email address.`),await j(n).toHaveFocus(),await N.type(n,`ana{Enter}`),await j(n).toHaveAccessibleDescription(`Enter an email address like name@company.com.`),await j(t.onContinue).not.toHaveBeenCalled(),await N.type(n,`@example.com{Enter}`),await N.click(await e.findByRole(`button`,{name:`Sign in`}));let r=e.getByLabelText(`Password`);await j(r).toHaveAccessibleDescription(`Enter your password.`),await j(r).toHaveFocus(),await j(t.onSignIn).not.toHaveBeenCalled()}},J={args:{onContinue:M(()=>`This account is locked. Ask your administrator.`)},play:async({canvas:e})=>{await B(e,`ana@example.com`),await j(await e.findByRole(`alert`)).toHaveTextContent(`This account is locked.`),await j(e.getByLabelText(`Email`)).toHaveFocus()}},Y={args:{onSignIn:M(()=>new Promise(e=>setTimeout(()=>e(`Wrong email or password.`),200)))},play:async({canvas:e})=>{await B(e,`ana@example.com`),await N.type(await e.findByLabelText(`Password`),`wrong{Enter}`),await j(e.getByRole(`button`,{name:`Sign in`})).toHaveAttribute(`aria-busy`,`true`),await j(e.getByRole(`button`,{name:`Change email`})).toBeDisabled(),await j(await e.findByRole(`alert`)).toHaveTextContent(`Wrong email or password.`);let t=e.getByLabelText(`Password`);await j(t).toHaveValue(``),await j(t).toHaveFocus()}},X={args:{onContinue:M(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{await B(e,`ana@example.com`),await j(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`)}},Z={decorators:I(320,640),play:async({canvasElement:e,canvas:t})=>{await B(t,`ana.silva.from.the.finance.department@acmecorporationholdings.example`),await t.findByLabelText(`Password`);let n=e.firstElementChild;await P(()=>j(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth))}},Q=[`Default`,`Password`,`Change`,`SingleSignOn`,`Remembered`,`WithProviders`,`Validation`,`ContinueFails`,`SignInFails`,`Unavailable`,`Phone`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Sign in to your account'
    })).toBeVisible();
    const email = canvas.getByLabelText('Email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'username');
    await expect(canvas.getByRole('checkbox', {
      name: 'Remember my email'
    })).not.toBeChecked();
    await expect(canvas.getByRole('button', {
      name: 'Continue'
    })).toBeVisible();
    await expect(canvas.queryByLabelText('Password')).toBeNull();
    await expect(canvas.getByRole('link', {
      name: 'Sign up'
    })).toHaveAttribute('href', '#sign-up');
  }
}`,...V.parameters?.docs?.source},description:{story:`Step 1: the email alone, Remember my email and Continue, in a card.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    args
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Remember my email'
    }));
    await next(canvas, ' ana@example.com ');
    await expect(args.onContinue).toHaveBeenCalledWith({
      email: 'ana@example.com',
      rememberEmail: true
    });
    const password = await canvas.findByLabelText('Password');
    await expect(password).toHaveFocus();
    await expect(canvas.getByText(/Signing in as/)).toHaveTextContent('Signing in as ana@example.com');
    await expect(canvas.getByRole('button', {
      name: 'Change email'
    })).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Forgot password?'
    })).toHaveAttribute('href', '#forgot-password');
    await expect(canvasElement.querySelector('input[autocomplete="username"]')).toHaveValue('ana@example.com');
    await userEvent.type(password, 'correct horse{Enter}');
    await expect(args.onSignIn).toHaveBeenCalledWith({
      email: 'ana@example.com',
      rememberEmail: true,
      password: 'correct horse'
    });
  }
}`,...H.parameters?.docs?.source},description:{story:`Step 2, a password account: the email, trimmed, goes to \`onContinue\`; the
page shows it with Change and moves focus to the password. Sign in sends
both, with the email in a hidden field for password managers.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await next(canvas, 'ana@example.com');
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Change email'
    }));
    const email = canvas.getByLabelText('Email');
    await expect(email).toHaveValue('ana@example.com');
    await expect(email).toHaveFocus();
  }
}`,...U.parameters?.docs?.source},description:{story:`Change goes back to step 1 with the email filled in and focused.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await next(canvas, 'ana@acme.com');
    const title = await canvas.findByRole('heading', {
      level: 1,
      name: 'Continuing to Okta'
    });
    await expect(title).toHaveFocus();
    await expect(canvas.getByText(/Your organization signs in with/)).toHaveTextContent('Your organization signs in with Okta. Signing in as ana@acme.com.');
    await expect(canvas.queryByLabelText('Password')).toBeNull();
    await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('Taking you to Okta…'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Use a different email'
    }));
    await expect(canvas.getByLabelText('Email')).toHaveFocus();
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Sign in to your account'
    })).toBeVisible();
  }
}`,...W.parameters?.docs?.source},description:{story:"Step 2, a single sign-on account: `onContinue` returns `{ sso }` and\nstarts the redirect; the page says where the reader is going, with focus\non the new title, and asks for no password.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultEmail: 'ana@example.com'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Email')).toHaveValue('ana@example.com');
    await expect(canvas.getByRole('checkbox', {
      name: 'Remember my email'
    })).toBeChecked();
  }
}`,...G.parameters?.docs?.source},description:{story:`A remembered email starts filled in, with Remember my email ticked.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    providers: [{
      id: 'google',
      label: 'Continue with Google'
    }, {
      id: 'microsoft',
      label: 'Continue with Microsoft'
    }],
    onProviderSelect: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Continue with Google'
    }));
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google');
    await next(canvas, 'ana@example.com');
    await canvas.findByLabelText('Password');
    await expect(canvas.queryByRole('button', {
      name: 'Continue with Google'
    })).toBeNull();
  }
}`,...K.parameters?.docs?.source},description:{story:`Social buttons sit above the email, with the "or" line, on step 1 only.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const email = canvas.getByLabelText('Email');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Continue'
    }));
    await expect(email).toHaveAttribute('aria-invalid', 'true');
    await expect(email).toHaveAccessibleDescription('Enter your email address.');
    await expect(email).toHaveFocus();
    await userEvent.type(email, 'ana{Enter}');
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.');
    await expect(args.onContinue).not.toHaveBeenCalled();
    await userEvent.type(email, '@example.com{Enter}');
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Sign in'
    }));
    const password = canvas.getByLabelText('Password');
    await expect(password).toHaveAccessibleDescription('Enter your password.');
    await expect(password).toHaveFocus();
    await expect(args.onSignIn).not.toHaveBeenCalled();
  }
}`,...q.parameters?.docs?.source},description:{story:`Empty or malformed fields are marked, say how to fix them and keep focus; nothing is sent.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    onContinue: fn<typeof route>(() => 'This account is locked. Ask your administrator.')
  },
  play: async ({
    canvas
  }) => {
    await next(canvas, 'ana@example.com');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('This account is locked.');
    await expect(canvas.getByLabelText('Email')).toHaveFocus();
  }
}`,...J.parameters?.docs?.source},description:{story:"`onContinue` returns a message: it is announced and the reader stays on step 1.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    onSignIn: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('Wrong email or password.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    await next(canvas, 'ana@example.com');
    await userEvent.type(await canvas.findByLabelText('Password'), 'wrong{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Sign in'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Change email'
    })).toBeDisabled();
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Wrong email or password.');
    const password = canvas.getByLabelText('Password');
    await expect(password).toHaveValue('');
    await expect(password).toHaveFocus();
  }
}`,...Y.parameters?.docs?.source},description:{story:"`onSignIn` returns a message, busy while it waits: the password is cleared and focused.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    onContinue: fn<typeof route>(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    await next(canvas, 'ana@example.com');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
  }
}`,...X.parameters?.docs?.source},description:{story:"`onContinue` throws or rejects: a generic message.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(320, 640),
  play: async ({
    canvasElement,
    canvas
  }) => {
    await next(canvas, 'ana.silva.from.the.finance.department@acmecorporationholdings.example');
    await canvas.findByLabelText('Password');
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
  }
}`,...Z.parameters?.docs?.source},description:{story:`A phone with a long unbroken email: Change drops under it, nothing scrolls sideways.`,...Z.parameters?.docs?.description}}}})))()}export{W as a,k as i,H as n,K as o,Z as r,$ as s,V as t};