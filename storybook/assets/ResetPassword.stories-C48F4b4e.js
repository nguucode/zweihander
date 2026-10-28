import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,r as s,t as c}from"./PasswordInput-CBpNGzdF.js";import{n as l,t as u}from"./Link-Bhk0TW_i.js";import{n as d,t as f}from"./Alert-C-O0NCPv.js";import{a as p,i as m,r as h,t as g}from"./AuthLayout-DKCgRmPV.js";import{n as _,t as v}from"./PasswordReset.module-IzLgxtax.js";function y({email:e,passwordRules:t=o,onChangePassword:n,signInHref:r=`#sign-in`,footer:i,...s}){let[l,d]=(0,b.useState)(),[p,_]=(0,b.useState)(),[y,S]=(0,b.useState)(!1),[C,w]=(0,b.useState)(!1),T=(0,b.useRef)(null),E=(0,b.useRef)(null);(0,b.useEffect)(()=>{C&&m(T.current)},[C]);async function D(e){if(e.preventDefault(),y)return;let r=String(new FormData(e.currentTarget).get(`password`)),i=r?t.every(e=>e.test(r))?void 0:`Choose a password that meets every rule.`:`Enter a new password.`;if(d(i),_(void 0),i)return E.current?.focus();S(!0);try{let e=await h(()=>n?.({password:r}));e?_(e):w(!0)}finally{S(!1)}}return C?(0,x.jsx)(g,{ref:T,title:`Password changed`,description:`Sign in with your new password.`,footer:i,...s,children:(0,x.jsx)(a,{href:r,isFullWidth:!0,children:`Sign in`})}):(0,x.jsxs)(g,{ref:T,title:`Choose a new password`,description:e&&(0,x.jsxs)(x.Fragment,{children:[`For `,(0,x.jsx)(`strong`,{className:v.email,children:e}),`.`]}),footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`p`,{className:v.back,children:(0,x.jsx)(u,{href:r,children:`Back to sign in`})}),i]}),...s,children:[p&&(0,x.jsx)(f,{variant:`danger`,isLive:!0,children:p}),(0,x.jsxs)(`form`,{className:v.form,noValidate:!0,onSubmit:D,children:[e&&(0,x.jsx)(`input`,{type:`email`,name:`username`,autoComplete:`username`,value:e,readOnly:!0,hidden:!0}),(0,x.jsx)(c,{ref:E,label:`New password`,name:`password`,autoComplete:`new-password`,rules:t,isFullWidth:!0,validationState:l?`error`:void 0,helperText:l,onChange:()=>l&&d(void 0)}),(0,x.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:y,children:`Change password`})]})]})}var b,x;function S(){return(S=e((()=>{b=n(),i(),l(),d(),p(),s(),_(),x=r(),y.__docgenInfo={description:`A reset-password page, a template: the page the emailed link opens, after
Forgot Password. A new password with its rules in the Auth Layout, then
"Password changed" with a way to sign in. It checks the rules; whether
the link is still good is for \`onChangePassword\`.`,methods:[],displayName:`ResetPassword`,props:{email:{required:!1,tsType:{name:`string`},description:`The account's email, from the link. Named in the description, and given
to password managers so they save the new password under it.`},passwordRules:{required:!1,tsType:{name:`Array`,elements:[{name:`PasswordRule`}],raw:`PasswordRule[]`},description:`What the new password needs, ticked off as the reader types; the form is
not sent until every one is met. At least 12 characters by default.`,defaultValue:{value:`[
  { label: 'At least 12 characters', test: (password) => password.length >= 12 },
]`,computed:!1}},onChangePassword:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: ResetPasswordValues) => string | void | Promise<string | void>`,signature:{arguments:[{type:{name:`ResetPasswordValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with a valid password. Return (or resolve to) a message to show
it above the form, e.g. the link has expired; the button shows it is
busy while a promise is pending. A thrown error or a rejected promise
shows a generic message. Otherwise the page says the password changed.`},signInHref:{required:!1,tsType:{name:`string`},description:`Where "Back to sign in" and, once changed, "Sign in" go.`,defaultValue:{value:`'#sign-in'`,computed:!1}}},composes:[`Omit`]}})))()}var C=t({Changed:()=>M,Default:()=>j,LinkExpired:()=>P,Unavailable:()=>F,Validation:()=>N,WithoutEmail:()=>I,__namedExportsOrder:()=>L,default:()=>A}),w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{S(),w=r(),{expect:T,fn:E,userEvent:D,within:O}=__STORYBOOK_MODULE_TEST__,k=e=>(0,w.jsx)(`div`,{style:{inlineSize:1200,blockSize:720,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:e()}),A={title:`Templates/Auth/Reset Password`,tags:[`experimental`],component:y,parameters:{layout:`fullscreen`},decorators:[k],args:{brand:(0,w.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),email:`ana@acme.com`,signInHref:`#sign-in`,onChangePassword:E(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},passwordRules:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},j={play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`main`);await T(O(n).getByRole(`heading`,{level:1,name:`Choose a new password`})).toBeVisible(),await T(e.getByText(/^For/)).toHaveTextContent(`For ana@acme.com.`);let r=e.getByLabelText(`New password`);await T(r).toHaveAttribute(`autocomplete`,`new-password`),await T(r).toHaveAccessibleDescription(`At least 12 characters (not met)`),await T(e.getByRole(`button`,{name:`Show new password`})).toBeVisible();let i=t.querySelector(`input[autocomplete="username"]`);await T(i).toHaveValue(`ana@acme.com`),await T(i).not.toBeVisible(),await T(e.getByRole(`link`,{name:`Back to sign in`})).toHaveAttribute(`href`,`#sign-in`)}},M={play:async({canvas:e,args:t})=>{await D.type(e.getByLabelText(`New password`),`correct horse battery{Enter}`),await T(t.onChangePassword).toHaveBeenCalledWith({password:`correct horse battery`});let n=await e.findByRole(`heading`,{level:1,name:`Password changed`});await T(n).toHaveFocus(),await T(e.getByRole(`link`,{name:`Sign in`})).toHaveAttribute(`href`,`#sign-in`),await T(e.queryByRole(`link`,{name:`Back to sign in`})).toBeNull()}},N={play:async({canvas:e,args:t})=>{let n=e.getByLabelText(`New password`),r=e.getByRole(`button`,{name:`Change password`});await D.click(r),await T(n).toHaveAttribute(`aria-invalid`,`true`),await T(n).toHaveAccessibleDescription(`Enter a new password. At least 12 characters (not met)`),await T(n).toHaveFocus(),await D.type(n,`short`),await T(n).not.toHaveAttribute(`aria-invalid`,`true`),await D.click(r),await T(n).toHaveAccessibleDescription(`Choose a password that meets every rule. At least 12 characters (not met)`),await T(t.onChangePassword).not.toHaveBeenCalled()}},P={args:{onChangePassword:E(()=>new Promise(e=>setTimeout(()=>e(`This link has expired. Go back to sign in and request a new one.`),200)))},play:async({canvas:e})=>{await D.type(e.getByLabelText(`New password`),`correct horse battery{Enter}`),await T(e.getByRole(`button`,{name:`Change password`})).toHaveAttribute(`aria-busy`,`true`),await T(await e.findByRole(`alert`)).toHaveTextContent(`This link has expired.`),await T(e.getByRole(`heading`,{level:1,name:`Choose a new password`})).toBeVisible()}},F={args:{onChangePassword:E(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{await D.type(e.getByLabelText(`New password`),`correct horse battery{Enter}`),await T(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`)}},I={args:{email:void 0,appearance:`plain`},play:async({canvasElement:e})=>{await T(e.querySelector(`input[autocomplete="username"]`)).toBeNull()}},L=[`Default`,`Changed`,`Validation`,`LinkExpired`,`Unavailable`,`WithoutEmail`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Choose a new password'
    })).toBeVisible();
    await expect(canvas.getByText(/^For/)).toHaveTextContent('For ana@acme.com.');
    const password = canvas.getByLabelText('New password');
    await expect(password).toHaveAttribute('autocomplete', 'new-password');
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met)');
    await expect(canvas.getByRole('button', {
      name: 'Show new password'
    })).toBeVisible();
    // A hidden username for password managers, out of the tab order and the accessibility tree.
    const username = canvasElement.querySelector('input[autocomplete="username"]');
    await expect(username).toHaveValue('ana@acme.com');
    await expect(username).not.toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Back to sign in'
    })).toHaveAttribute('href', '#sign-in');
  }
}`,...j.parameters?.docs?.source},description:{story:`Step 3: a new password with its rules, for the account the link named.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}');
    await expect(args.onChangePassword).toHaveBeenCalledWith({
      password: 'correct horse battery'
    });
    const title = await canvas.findByRole('heading', {
      level: 1,
      name: 'Password changed'
    });
    await expect(title).toHaveFocus();
    await expect(canvas.getByRole('link', {
      name: 'Sign in'
    })).toHaveAttribute('href', '#sign-in');
    await expect(canvas.queryByRole('link', {
      name: 'Back to sign in'
    })).toBeNull();
  }
}`,...M.parameters?.docs?.source},description:{story:"A valid password goes to `onChangePassword`; the page says it changed, focuses that, and offers Sign in.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const password = canvas.getByLabelText('New password');
    const submit = canvas.getByRole('button', {
      name: 'Change password'
    });
    await userEvent.click(submit);
    await expect(password).toHaveAttribute('aria-invalid', 'true');
    await expect(password).toHaveAccessibleDescription('Enter a new password. At least 12 characters (not met)');
    await expect(password).toHaveFocus();
    await userEvent.type(password, 'short');
    await expect(password).not.toHaveAttribute('aria-invalid', 'true');
    await userEvent.click(submit);
    await expect(password).toHaveAccessibleDescription('Choose a password that meets every rule. At least 12 characters (not met)');
    await expect(args.onChangePassword).not.toHaveBeenCalled();
  }
}`,...N.parameters?.docs?.source},description:{story:`An empty password or an unmet rule is marked and keeps focus; nothing is sent.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    onChangePassword: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('This link has expired. Go back to sign in and request a new one.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Change password'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('This link has expired.');
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Choose a new password'
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:"`onChangePassword` returns a message, e.g. the link expired: announced above the form, busy while it waits.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onChangePassword: fn(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    await userEvent.type(canvas.getByLabelText('New password'), 'correct horse battery{Enter}');
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
  }
}`,...F.parameters?.docs?.source},description:{story:"`onChangePassword` throws or rejects: a generic message.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    email: undefined,
    appearance: 'plain'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('input[autocomplete="username"]')).toBeNull();
  }
}`,...I.parameters?.docs?.source},description:{story:`Without an email there is no description and no hidden username.`,...I.parameters?.docs?.description}}}})))()}export{R as a,I as i,P as n,C as r,j as t};