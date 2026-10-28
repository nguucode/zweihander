import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./ResendButton-DsqpGPmp.js";import{r as c,t as l}from"./TextInput-vfco79YG.js";import{n as u,t as d}from"./Link-Bhk0TW_i.js";import{n as f,t as p}from"./Alert-C-O0NCPv.js";import{a as m,i as h,r as g,t as _}from"./AuthLayout-DKCgRmPV.js";import{n as v,t as y}from"./PasswordReset.module-IzLgxtax.js";function b({onRequest:e,resendCooldown:t=30,signInHref:n=`#sign-in`,footer:r,...i}){let[o,c]=(0,x.useState)(``),[u,f]=(0,x.useState)(!1),[m,v]=(0,x.useState)(),[b,C]=(0,x.useState)(),[w,T]=(0,x.useState)(),[E,D]=(0,x.useState)(!1),O=(0,x.useRef)(null),k=(0,x.useRef)(null),A=(0,x.useRef)(!1),j=(0,x.useRef)(0);(0,x.useEffect)(()=>{A.current&&(A.current=!1,u?h(O.current):k.current?.focus())},[u]);async function M(t){if(t.preventDefault(),E)return;let n=String(new FormData(t.currentTarget).get(`email`)).trim(),r=n?k.current?.validity.typeMismatch?`Enter an email address like name@company.com.`:void 0:`Enter your email address.`;if(v(r),C(void 0),r)return k.current?.focus();D(!0);try{let t=await g(()=>e?.({email:n}));if(t)return C(t);c(n),A.current=!0,f(!0)}finally{D(!1)}}async function N(){C(void 0),T(void 0);let t=j.current,n=await g(()=>e?.({email:o}));if(t===j.current){if(n)throw C(n),Error(n);T(`We sent another link to ${o}.`),h(O.current)}}function P(){C(void 0),T(void 0),j.current++,A.current=!0,f(!1)}return(0,S.jsxs)(_,{ref:O,title:u?`Check your email`:`Reset your password`,description:u?(0,S.jsxs)(S.Fragment,{children:[`If an account exists for `,(0,S.jsx)(`strong`,{className:y.email,children:o}),`, we sent it a link to choose a new password.`]}):`Enter the email you sign in with, and we will send you a link to choose a new password.`,footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`p`,{className:y.back,children:(0,S.jsx)(d,{href:n,children:`Back to sign in`})}),r]}),...i,children:[b&&(0,S.jsx)(p,{variant:`danger`,isLive:!0,children:b}),w&&(0,S.jsx)(p,{variant:`success`,isLive:!0,children:w}),u?(0,S.jsxs)(`div`,{className:y.sent,children:[(0,S.jsxs)(`div`,{className:y.again,children:[(0,S.jsx)(`p`,{className:y.hint,children:`Not there? Check your spam folder, or send it again.`}),(0,S.jsx)(s,{className:y.resend,label:`Resend link`,cooldown:t,onResend:N})]}),(0,S.jsx)(a,{variant:`secondary`,appearance:`outlined`,isFullWidth:!0,onClick:P,children:`Use a different email`})]}):(0,S.jsxs)(`form`,{className:y.form,noValidate:!0,onSubmit:M,children:[(0,S.jsx)(l,{ref:k,label:`Email`,name:`email`,type:`email`,autoComplete:`username`,defaultValue:o,isFullWidth:!0,validationState:m?`error`:void 0,helperText:m,onChange:()=>m&&v(void 0)}),(0,S.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:E,children:`Send reset link`})]})]})}var x,S;function C(){return(C=e((()=>{x=n(),i(),o(),c(),u(),f(),m(),v(),S=r(),b.__docgenInfo={description:`A forgot-password page, a template, in two steps in the Auth Layout: the
reader enters their email, then is told to check it, with Resend link and
Use a different email. It checks the email looks like one; sending the
link is for \`onRequest\`. The link leads to Reset Password.`,methods:[],displayName:`ForgotPassword`,props:{onRequest:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: ForgotPasswordValues) => string | void | Promise<string | void>`,signature:{arguments:[{type:{name:`ForgotPasswordValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with the email, from the form and from Resend link. Return (or
resolve to) a message to show it instead of moving on, e.g. too many
requests; the button shows it is busy while a promise is pending. A
thrown error or a rejected promise shows a generic message. Never
return "no account with this email": the next screen does not say
whether one exists.`},resendCooldown:{required:!1,tsType:{name:`number`},description:`Seconds before Resend link is allowed, from when the link was sent and after each resend.`,defaultValue:{value:`30`,computed:!1}},signInHref:{required:!1,tsType:{name:`string`},description:`Where "Back to sign in" goes.`,defaultValue:{value:`'#sign-in'`,computed:!1}}},composes:[`Omit`]}})))()}var w=t({Default:()=>F,DifferentEmail:()=>z,Phone:()=>U,RequestFails:()=>V,Resend:()=>L,ResendFails:()=>R,Sent:()=>I,Unavailable:()=>H,Validation:()=>B,__namedExportsOrder:()=>W,default:()=>N}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{C(),T=r(),{expect:E,fn:D,userEvent:O,waitFor:k,within:A}=__STORYBOOK_MODULE_TEST__,j=(e,t=720)=>[n=>(0,T.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],M=(0,T.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),N={title:`Templates/Auth/Forgot Password`,tags:[`experimental`],component:b,parameters:{layout:`fullscreen`},decorators:j(1200),args:{brand:M,signInHref:`#sign-in`,onRequest:D(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},P=async(e,t=`ana@acme.com`)=>{await O.type(e.getByLabelText(`Email`),`${t}{Enter}`)},F={play:async({canvas:e})=>{let t=e.getByRole(`main`);await E(A(t).getByRole(`heading`,{level:1,name:`Reset your password`})).toBeVisible(),await E(e.getAllByRole(`heading`)).toHaveLength(1);let n=e.getByLabelText(`Email`);await E(n).toHaveAttribute(`type`,`email`),await E(n).toHaveAttribute(`autocomplete`,`username`),await E(e.getByRole(`button`,{name:`Send reset link`})).toBeVisible(),await E(e.getByRole(`link`,{name:`Back to sign in`})).toHaveAttribute(`href`,`#sign-in`)}},I={args:{resendCooldown:0},play:async({canvas:e,args:t})=>{await P(e,` ana@acme.com `),await E(t.onRequest).toHaveBeenCalledWith({email:`ana@acme.com`});let n=await e.findByRole(`heading`,{level:1,name:`Check your email`});await E(n).toHaveFocus(),await E(e.getByText(/If an account exists for/)).toHaveTextContent(`If an account exists for ana@acme.com, we sent it a link to choose a new password.`),await E(e.queryByLabelText(`Email`)).toBeNull(),await E(e.getByRole(`link`,{name:`Back to sign in`})).toBeVisible()}},L={args:{resendCooldown:1},play:async({canvas:e,args:t})=>{await P(e);let n=await e.findByRole(`button`,{name:/resend link/i});await E(n).toBeDisabled(),await E(n).toHaveTextContent(`Resend link (0:01)`),await k(()=>E(n).toBeEnabled(),{timeout:2e3}),await O.click(n),await E(t.onRequest).toHaveBeenCalledTimes(2),await E(t.onRequest).toHaveBeenLastCalledWith({email:`ana@acme.com`}),await E(await e.findByRole(`status`)).toHaveTextContent(`We sent another link to ana@acme.com.`),await E(n).toBeDisabled(),await E(e.getByRole(`heading`,{level:1})).toHaveFocus()}},R={args:{resendCooldown:0},play:async({canvas:e,args:t})=>{await P(e),t.onRequest.mockReturnValue(`Too many requests. Try again in a few minutes.`);let n=await e.findByRole(`button`,{name:`Resend link`});await O.click(n),await E(await e.findByRole(`alert`)).toHaveTextContent(`Too many requests.`),await E(n).toBeEnabled()}},z={args:{resendCooldown:0},play:async({canvas:e})=>{await P(e),await O.click(await e.findByRole(`button`,{name:`Use a different email`}));let t=e.getByLabelText(`Email`);await E(t).toHaveValue(`ana@acme.com`),await E(t).toHaveFocus(),await E(e.getByRole(`heading`,{level:1,name:`Reset your password`})).toBeVisible()}},B={play:async({canvas:e,args:t})=>{let n=e.getByLabelText(`Email`);await O.click(e.getByRole(`button`,{name:`Send reset link`})),await E(n).toHaveAttribute(`aria-invalid`,`true`),await E(n).toHaveAccessibleDescription(`Enter your email address.`),await E(n).toHaveFocus(),await O.type(n,`ana{Enter}`),await E(n).toHaveAccessibleDescription(`Enter an email address like name@company.com.`),await E(t.onRequest).not.toHaveBeenCalled()}},V={args:{onRequest:D(()=>new Promise(e=>setTimeout(()=>e(`Too many requests. Try again later.`),200)))},play:async({canvas:e})=>{await P(e),await E(e.getByRole(`button`,{name:`Send reset link`})).toHaveAttribute(`aria-busy`,`true`),await E(await e.findByRole(`alert`)).toHaveTextContent(`Too many requests. Try again later.`),await E(e.getByLabelText(`Email`)).toHaveValue(`ana@acme.com`)}},H={args:{onRequest:D(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{await P(e),await E(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`)}},U={decorators:j(320,640),args:{resendCooldown:0},play:async({canvasElement:e,canvas:t})=>{await P(t,`ana.silva.from.the.finance.department@acmecorporationholdings.com`),await t.findByRole(`heading`,{name:`Check your email`});let n=e.firstElementChild;await k(()=>E(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth))}},W=[`Default`,`Sent`,`Resend`,`ResendFails`,`DifferentEmail`,`Validation`,`RequestFails`,`Unavailable`,`Phone`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Reset your password'
    })).toBeVisible();
    await expect(canvas.getAllByRole('heading')).toHaveLength(1);
    const email = canvas.getByLabelText('Email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'username');
    await expect(canvas.getByRole('button', {
      name: 'Send reset link'
    })).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Back to sign in'
    })).toHaveAttribute('href', '#sign-in');
  }
}`,...F.parameters?.docs?.source},description:{story:`Step 1: the email and Send reset link, in a card, with a way back to sign in.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    resendCooldown: 0
  },
  play: async ({
    canvas,
    args
  }) => {
    await send(canvas, ' ana@acme.com ');
    await expect(args.onRequest).toHaveBeenCalledWith({
      email: 'ana@acme.com'
    });
    const title = await canvas.findByRole('heading', {
      level: 1,
      name: 'Check your email'
    });
    await expect(title).toHaveFocus();
    await expect(canvas.getByText(/If an account exists for/)).toHaveTextContent('If an account exists for ana@acme.com, we sent it a link to choose a new password.');
    await expect(canvas.queryByLabelText('Email')).toBeNull();
    await expect(canvas.getByRole('link', {
      name: 'Back to sign in'
    })).toBeVisible();
  }
}`,...I.parameters?.docs?.source},description:{story:"Step 2: the email goes to `onRequest`, trimmed, and the page says to check\nit without saying whether an account exists. Focus moves to the new title.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    resendCooldown: 1
  },
  play: async ({
    canvas,
    args
  }) => {
    await send(canvas);
    const resend = await canvas.findByRole('button', {
      name: /resend link/i
    });
    await expect(resend).toBeDisabled();
    await expect(resend).toHaveTextContent('Resend link (0:01)');
    await waitFor(() => expect(resend).toBeEnabled(), {
      timeout: 2000
    });
    await userEvent.click(resend);
    await expect(args.onRequest).toHaveBeenCalledTimes(2);
    await expect(args.onRequest).toHaveBeenLastCalledWith({
      email: 'ana@acme.com'
    });
    await expect(await canvas.findByRole('status')).toHaveTextContent('We sent another link to ana@acme.com.');
    // The button cools down again; focus is not dropped with it.
    await expect(resend).toBeDisabled();
    await expect(canvas.getByRole('heading', {
      level: 1
    })).toHaveFocus();
  }
}`,...L.parameters?.docs?.source},description:{story:`Resend link waits out a cooldown, sends to the same email, and says it did.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    resendCooldown: 0
  },
  play: async ({
    canvas,
    args
  }) => {
    await send(canvas)
    // The first send went; the next is refused.
;
    (args.onRequest as Mock).mockReturnValue('Too many requests. Try again in a few minutes.');
    const resend = await canvas.findByRole('button', {
      name: 'Resend link'
    });
    await userEvent.click(resend);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many requests.');
    await expect(resend).toBeEnabled();
  }
}`,...R.parameters?.docs?.source},description:{story:`A resend that fails shows why, starts no cooldown, and can be tried again.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    resendCooldown: 0
  },
  play: async ({
    canvas
  }) => {
    await send(canvas);
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Use a different email'
    }));
    const email = canvas.getByLabelText('Email');
    await expect(email).toHaveValue('ana@acme.com');
    await expect(email).toHaveFocus();
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Reset your password'
    })).toBeVisible();
  }
}`,...z.parameters?.docs?.source},description:{story:`Use a different email goes back to step 1 with the email filled in and focused.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const email = canvas.getByLabelText('Email');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send reset link'
    }));
    await expect(email).toHaveAttribute('aria-invalid', 'true');
    await expect(email).toHaveAccessibleDescription('Enter your email address.');
    await expect(email).toHaveFocus();
    await userEvent.type(email, 'ana{Enter}');
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.');
    await expect(args.onRequest).not.toHaveBeenCalled();
  }
}`,...B.parameters?.docs?.source},description:{story:`An empty or malformed email is marked, says how to fix it, and keeps focus; nothing is sent.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    onRequest: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('Too many requests. Try again later.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    await send(canvas);
    await expect(canvas.getByRole('button', {
      name: 'Send reset link'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Too many requests. Try again later.');
    await expect(canvas.getByLabelText('Email')).toHaveValue('ana@acme.com');
  }
}`,...V.parameters?.docs?.source},description:{story:"`onRequest` returns a message: it is announced above the form, which stays, busy while it waits.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    onRequest: fn(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    await send(canvas);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
  }
}`,...H.parameters?.docs?.source},description:{story:"`onRequest` throws or rejects: a generic message.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: box(320, 640),
  args: {
    resendCooldown: 0
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    await send(canvas, 'ana.silva.from.the.finance.department@acmecorporationholdings.com');
    await canvas.findByRole('heading', {
      name: 'Check your email'
    });
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
  }
}`,...U.parameters?.docs?.source},description:{story:`A phone with a long unbroken email: it wraps, nothing scrolls sideways.`,...U.parameters?.docs?.description}}}})))()}export{G as a,I as i,w as n,U as r,F as t};