import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./Checkbox-5Fepdwz1.js";import{r as c,t as l}from"./TextInput-vfco79YG.js";import{r as u,t as d}from"./PasswordInput-CBpNGzdF.js";import{n as f,t as p}from"./Link-Bhk0TW_i.js";import{n as m,t as ee}from"./Alert-C-O0NCPv.js";import{a as h,n as g,r as _,t as v}from"./AuthLayout-DKCgRmPV.js";var y,b,x,S,C;function w(){return(w=e((()=>{y=`_form_130jc_1`,b=`_row_130jc_8`,x=`_forgot_130jc_17`,S=`_signUp_130jc_21`,C={form:y,row:b,forgot:x,signUp:S}})))()}function T({title:e=`Sign in to your account`,providers:t=[],onProviderSelect:n,onSignIn:r,hasRememberMe:i=!0,forgotPasswordHref:o=`#forgot-password`,signUpHref:c,footer:u,...f}){let[m,h]=(0,E.useState)({}),[y,b]=(0,E.useState)(),[x,S]=(0,E.useState)(!1),w=(0,E.useRef)(null),T=(0,E.useRef)(null);async function O(e){if(e.preventDefault(),x)return;let t=e.currentTarget,n=new FormData(t),i={email:String(n.get(`email`)).trim(),password:String(n.get(`password`)),remember:n.get(`remember`)!=null},a={};if(i.email?w.current?.validity.typeMismatch&&(a.email=`Enter an email address like name@company.com.`):a.email=`Enter your email address.`,i.password||(a.password=`Enter your password.`),h(a),b(void 0),a.email)return w.current?.focus();if(a.password)return T.current?.focus();S(!0);try{let e=await _(()=>r?.(i));e&&(b(e),T.current&&(T.current.value=``),T.current?.focus())}finally{S(!1)}}return(0,D.jsxs)(v,{title:e,footer:(c||u)&&(0,D.jsxs)(D.Fragment,{children:[c&&(0,D.jsxs)(`p`,{className:C.signUp,children:[`No account? `,(0,D.jsx)(p,{href:c,children:`Sign up`})]}),u]}),...f,children:[(0,D.jsx)(g,{providers:t,onSelect:n,disabled:x}),y&&(0,D.jsx)(ee,{variant:`danger`,isLive:!0,children:y}),(0,D.jsxs)(`form`,{className:C.form,noValidate:!0,onSubmit:O,children:[(0,D.jsx)(l,{ref:w,label:`Email`,name:`email`,type:`email`,autoComplete:`username`,isFullWidth:!0,validationState:m.email?`error`:void 0,helperText:m.email,onChange:()=>m.email&&h({...m,email:void 0})}),(0,D.jsx)(d,{ref:T,name:`password`,isFullWidth:!0,validationState:m.password?`error`:void 0,helperText:m.password,onChange:()=>m.password&&h({...m,password:void 0})}),(0,D.jsxs)(`div`,{className:C.row,children:[i&&(0,D.jsx)(s,{name:`remember`,label:`Keep me signed in`}),(0,D.jsx)(p,{href:o,className:C.forgot,children:`Forgot password?`})]}),(0,D.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:x,children:`Sign in`})]})]})}var E,D;function O(){return(O=e((()=>{E=n(),i(),o(),c(),f(),m(),h(),u(),w(),D=r(),T.__docgenInfo={description:`A sign-in page, a template: email and password in the Auth Layout, with
optional single sign-on buttons, "Keep me signed in", a link to reset the
password and one to sign up. It checks that both fields are filled and
the email looks like one; whether they are right is for \`onSignIn\`.`,methods:[],displayName:`SignIn`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Sign in to your account'`,computed:!1}},providers:{required:!1,tsType:{name:`Array`,elements:[{name:`AuthProvider`}],raw:`SignInProvider[]`},description:`Single sign-on and social buttons, above the form with an "or" line. None by default.`,defaultValue:{value:`[]`,computed:!1}},onProviderSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onSignIn:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: SignInValues) => string | void | Promise<string | void>`,signature:{arguments:[{type:{name:`SignInValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with valid values. Return (or resolve to) a message to show it
above the form, e.g. wrong credentials; the button shows it is busy
while a promise is pending. A thrown error or a rejected promise
shows a generic message.`},hasRememberMe:{required:!1,tsType:{name:`boolean`},description:`Shows "Keep me signed in".`,defaultValue:{value:`true`,computed:!1}},forgotPasswordHref:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#forgot-password'`,computed:!1}},signUpHref:{required:!1,tsType:{name:`string`},description:`Shows "No account? Sign up" under the form. Leave it out where accounts are by invitation.`}},composes:[`Omit`]}})))()}var k=t({Default:()=>H,Phone:()=>Z,Plain:()=>J,ShowPassword:()=>q,SignsIn:()=>U,Unavailable:()=>K,Validation:()=>W,WithAside:()=>Y,WithAsideNarrow:()=>X,WrongPassword:()=>G,__namedExportsOrder:()=>Q,default:()=>B}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{O(),A=r(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I=(e,t=760)=>[n=>(0,A.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],L=(0,A.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),R=[{id:`google`,label:`Continue with Google`},{id:`microsoft`,label:`Continue with Microsoft`}],z=(0,A.jsxs)(`figure`,{style:{display:`grid`,alignContent:`end`,gap:`var(--space-group)`,blockSize:`100%`,margin:0,padding:`var(--space-12)`,boxSizing:`border-box`,background:`var(--primary-subtle)`,color:`var(--primary-subtle-text)`},children:[(0,A.jsx)(`blockquote`,{style:{margin:0,fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-md)`,lineHeight:`var(--leading-heading-md)`},children:`“Month-end close went from five days to two.”`}),(0,A.jsx)(`figcaption`,{children:`Ana Silva, Finance lead at Acme Corp`})]}),B={title:`Templates/Auth/Sign In`,tags:[`experimental`],component:T,parameters:{layout:`fullscreen`},args:{brand:L,providers:R,signUpHref:`#sign-up`,onSignIn:M(),onProviderSelect:M(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},providers:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},V=e=>({email:e.getByLabelText(`Email`),password:e.getByLabelText(`Password`),submit:e.getByRole(`button`,{name:`Sign in`})}),H={decorators:I(1200),play:async({canvas:e,args:t})=>{let n=e.getByRole(`main`);await j(F(n).getByRole(`heading`,{level:1,name:`Sign in to your account`})).toBeVisible(),await j(e.getAllByRole(`heading`)).toHaveLength(1);let{email:r,password:i}=V(e);await j(r).toHaveAttribute(`type`,`email`),await j(r).toHaveAttribute(`autocomplete`,`username`),await j(i).toHaveAttribute(`type`,`password`),await j(i).toHaveAttribute(`autocomplete`,`current-password`),await j(e.getByRole(`checkbox`,{name:`Keep me signed in`})).not.toBeChecked(),await j(e.getByRole(`link`,{name:`Forgot password?`})).toHaveAttribute(`href`,`#forgot-password`),await j(e.getByRole(`link`,{name:`Sign up`})).toHaveAttribute(`href`,`#sign-up`);let a=e.getByRole(`button`,{name:`Continue with Google`});await j(e.getByText(`or`)).toBeVisible(),await j(a.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await N.click(a),await j(t.onProviderSelect).toHaveBeenCalledWith(`google`);let o=e.getByRole(`heading`,{level:1}).closest(`header`).parentElement,s=n.getBoundingClientRect(),c=o.getBoundingClientRect();await P(()=>j(Math.abs(c.left-s.left-(s.right-c.right))).toBeLessThan(2))}},U={decorators:I(1200),play:async({canvas:e,args:t})=>{let{email:n,password:r}=V(e);await N.type(n,`  ana@acme.com `),await N.type(r,`correct horse`),await N.click(e.getByRole(`checkbox`,{name:`Keep me signed in`})),await N.keyboard(`{Enter}`),await j(t.onSignIn).toHaveBeenCalledWith({email:`ana@acme.com`,password:`correct horse`,remember:!0})}},W={decorators:I(1200),play:async({canvas:e,args:t})=>{let{email:n,password:r,submit:i}=V(e);await N.click(i),await j(n).toHaveAttribute(`aria-invalid`,`true`),await j(n).toHaveAccessibleDescription(`Enter your email address.`),await j(r).toHaveAccessibleDescription(`Enter your password.`),await j(n).toHaveFocus(),await j(t.onSignIn).not.toHaveBeenCalled(),await N.type(n,`ana`),await j(n).not.toHaveAttribute(`aria-invalid`,`true`),await N.click(i),await j(n).toHaveAccessibleDescription(`Enter an email address like name@company.com.`),await N.type(n,`@acme.com`),await N.click(i),await j(r).toHaveFocus(),await j(n).not.toHaveAttribute(`aria-invalid`,`true`),await j(t.onSignIn).not.toHaveBeenCalled()}},G={decorators:I(1200),args:{onSignIn:M(()=>new Promise(e=>setTimeout(()=>e(`The email or password is incorrect.`),200)))},play:async({canvas:e})=>{let{email:t,password:n,submit:r}=V(e);await N.type(t,`ana@acme.com`),await N.type(n,`wrong`),await N.click(r),await j(r).toHaveAttribute(`aria-busy`,`true`),await j(e.getByRole(`button`,{name:`Continue with Google`})).toBeDisabled();let i=await e.findByRole(`alert`);await j(i).toHaveTextContent(`The email or password is incorrect.`),await j(r).not.toHaveAttribute(`aria-busy`),await j(n).toHaveValue(``),await j(n).toHaveFocus(),await j(t).toHaveValue(`ana@acme.com`)}},K={decorators:I(1200),args:{onSignIn:M(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{let{email:t,password:n,submit:r}=V(e);await N.type(t,`ana@acme.com`),await N.type(n,`correct horse`),await N.click(r),await j(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`),await j(r).toBeEnabled()}},q={decorators:I(1200),play:async({canvas:e})=>{let{email:t,password:n}=V(e);await N.type(n,`correct horse`),await N.click(e.getByRole(`button`,{name:`Show password`})),await j(n).toHaveAttribute(`type`,`text`);let r=e.getByRole(`button`,{name:`Hide password`});await j(r).toHaveTextContent(`Hide`),await N.type(t,`ana@acme.com{Enter}`),await j(n).toHaveAttribute(`type`,`password`),await j(e.getByRole(`button`,{name:`Show password`})).toBeVisible()}},J={decorators:I(1200),args:{appearance:`plain`,providers:[],hasRememberMe:!1,signUpHref:void 0,footer:(0,A.jsx)(`span`,{children:`Need access? Ask your administrator.`})},play:async({canvas:e})=>{await j(e.getByText(`Need access? Ask your administrator.`)).toBeVisible(),await j(e.queryByRole(`checkbox`)).toBeNull(),await j(e.queryByRole(`link`,{name:`Sign up`})).toBeNull(),await j(e.queryByText(`or`)).toBeNull(),await j(e.getByRole(`link`,{name:`Forgot password?`})).toBeVisible()}},Y={decorators:I(1280),args:{aside:z,asideLabel:`Customer story`,description:`Welcome back. Use your work email.`},play:async({canvas:e})=>{let t=e.getByRole(`main`),n=e.getByRole(`complementary`,{name:`Customer story`});await P(()=>j(n.getBoundingClientRect().left).toBeGreaterThanOrEqual(t.getBoundingClientRect().right-1)),await j(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()}},X={...Y,decorators:I(600),play:async({canvas:e})=>{await P(()=>j(e.queryByRole(`complementary`)).toBeNull()),await j(e.getByRole(`heading`,{level:1})).toBeVisible()}},Z={decorators:I(320,640),args:{title:`Signintoyouraccountatacmecorporationfinance`},play:async({canvasElement:e,canvas:t})=>{let n=e.firstElementChild;await P(()=>j(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)),await j(t.getByRole(`button`,{name:`Sign in`})).toBeVisible()}},Q=[`Default`,`SignsIn`,`Validation`,`WrongPassword`,`Unavailable`,`ShowPassword`,`Plain`,`WithAside`,`WithAsideNarrow`,`Phone`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Sign in to your account'
    })).toBeVisible();
    await expect(canvas.getAllByRole('heading')).toHaveLength(1);
    const {
      email,
      password
    } = fields(canvas);
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'username');
    await expect(password).toHaveAttribute('type', 'password');
    await expect(password).toHaveAttribute('autocomplete', 'current-password');
    await expect(canvas.getByRole('checkbox', {
      name: 'Keep me signed in'
    })).not.toBeChecked();
    await expect(canvas.getByRole('link', {
      name: 'Forgot password?'
    })).toHaveAttribute('href', '#forgot-password');
    await expect(canvas.getByRole('link', {
      name: 'Sign up'
    })).toHaveAttribute('href', '#sign-up');
    // Single sign-on comes first, then the "or" line, then the form.
    const google = canvas.getByRole('button', {
      name: 'Continue with Google'
    });
    await expect(canvas.getByText('or')).toBeVisible();
    await expect(google.compareDocumentPosition(email) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await userEvent.click(google);
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google');
    // The column is centred on the page.
    const column = canvas.getByRole('heading', {
      level: 1
    }).closest('header')!.parentElement!;
    const page = main.getBoundingClientRect();
    const rect = column.getBoundingClientRect();
    await waitFor(() => expect(Math.abs(rect.left - page.left - (page.right - rect.right))).toBeLessThan(2));
  }
}`,...H.parameters?.docs?.source},description:{story:`In a card on the canvas: single sign-on, then email and password, Keep me signed in, the reset link and sign-up.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const {
      email,
      password
    } = fields(canvas);
    await userEvent.type(email, '  ana@acme.com ');
    await userEvent.type(password, 'correct horse');
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Keep me signed in'
    }));
    await userEvent.keyboard('{Enter}');
    await expect(args.onSignIn).toHaveBeenCalledWith({
      email: 'ana@acme.com',
      password: 'correct horse',
      remember: true
    });
  }
}`,...U.parameters?.docs?.source},description:{story:"Valid values go to `onSignIn`; Enter in a field sends the form.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const {
      email,
      password,
      submit
    } = fields(canvas);
    await userEvent.click(submit);
    await expect(email).toHaveAttribute('aria-invalid', 'true');
    await expect(email).toHaveAccessibleDescription('Enter your email address.');
    await expect(password).toHaveAccessibleDescription('Enter your password.');
    await expect(email).toHaveFocus();
    await expect(args.onSignIn).not.toHaveBeenCalled();
    await userEvent.type(email, 'ana');
    await expect(email).not.toHaveAttribute('aria-invalid', 'true');
    await userEvent.click(submit);
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.');
    await userEvent.type(email, '@acme.com');
    await userEvent.click(submit);
    await expect(password).toHaveFocus();
    await expect(email).not.toHaveAttribute('aria-invalid', 'true');
    await expect(args.onSignIn).not.toHaveBeenCalled();
  }
}`,...W.parameters?.docs?.source},description:{story:`An empty or malformed field is marked, says how to fix it, and gets focus; typing clears its message.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    onSignIn: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('The email or password is incorrect.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    const {
      email,
      password,
      submit
    } = fields(canvas);
    await userEvent.type(email, 'ana@acme.com');
    await userEvent.type(password, 'wrong');
    await userEvent.click(submit);
    // Busy while it waits, and a second press sends nothing.
    await expect(submit).toHaveAttribute('aria-busy', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Continue with Google'
    })).toBeDisabled();
    const alert = await canvas.findByRole('alert');
    await expect(alert).toHaveTextContent('The email or password is incorrect.');
    await expect(submit).not.toHaveAttribute('aria-busy');
    await expect(password).toHaveValue('');
    await expect(password).toHaveFocus();
    await expect(email).toHaveValue('ana@acme.com');
  }
}`,...G.parameters?.docs?.source},description:{story:"`onSignIn` returns a message: it is announced above the form, the password is cleared and focused.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    onSignIn: fn(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    const {
      email,
      password,
      submit
    } = fields(canvas);
    await userEvent.type(email, 'ana@acme.com');
    await userEvent.type(password, 'correct horse');
    await userEvent.click(submit);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
    await expect(submit).toBeEnabled();
  }
}`,...K.parameters?.docs?.source},description:{story:"`onSignIn` throws or rejects (the server is down): a generic message, and the form can be sent again.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas
  }) => {
    const {
      email,
      password
    } = fields(canvas);
    await userEvent.type(password, 'correct horse');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(password).toHaveAttribute('type', 'text');
    const hide = canvas.getByRole('button', {
      name: 'Hide password'
    });
    await expect(hide).toHaveTextContent('Hide');
    await userEvent.type(email, 'ana@acme.com{Enter}');
    await expect(password).toHaveAttribute('type', 'password');
    await expect(canvas.getByRole('button', {
      name: 'Show password'
    })).toBeVisible();
  }
}`,...q.parameters?.docs?.source},description:{story:`Show reveals the password and the button becomes Hide; sending the form hides it again.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    appearance: 'plain',
    providers: [],
    hasRememberMe: false,
    signUpHref: undefined,
    footer: <span>Need access? Ask your administrator.</span>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Need access? Ask your administrator.')).toBeVisible();
    await expect(canvas.queryByRole('checkbox')).toBeNull();
    await expect(canvas.queryByRole('link', {
      name: 'Sign up'
    })).toBeNull();
    await expect(canvas.queryByText('or')).toBeNull();
    await expect(canvas.getByRole('link', {
      name: 'Forgot password?'
    })).toBeVisible();
  }
}`,...J.parameters?.docs?.source},description:{story:`On the canvas, without a card, single sign-on, Keep me signed in or sign-up: where accounts come by invitation.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: box(1280),
  args: {
    aside,
    asideLabel: 'Customer story',
    description: 'Welcome back. Use your work email.'
  },
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    const panel = canvas.getByRole('complementary', {
      name: 'Customer story'
    });
    await waitFor(() => expect(panel.getBoundingClientRect().left).toBeGreaterThanOrEqual(main.getBoundingClientRect().right - 1));
    await expect(main.compareDocumentPosition(panel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  }
}`,...Y.parameters?.docs?.source},description:{story:`With a panel beside the form from 64rem: the form keeps the left half, the panel the right.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...WithAside,
  decorators: box(600),
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.queryByRole('complementary')).toBeNull());
    await expect(canvas.getByRole('heading', {
      level: 1
    })).toBeVisible();
  }
}`,...X.parameters?.docs?.source},description:{story:`Under 64rem the panel is hidden and the form has the page.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(320, 640),
  args: {
    title: 'Signintoyouraccountatacmecorporationfinance'
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
    await expect(canvas.getByRole('button', {
      name: 'Sign in'
    })).toBeVisible();
  }
}`,...Z.parameters?.docs?.source},description:{story:`A phone with a long unbroken title: the column takes the width and nothing scrolls sideways.`,...Z.parameters?.docs?.description}}}})))()}export{Y as a,k as i,Z as n,G as o,J as r,$ as s,H as t};