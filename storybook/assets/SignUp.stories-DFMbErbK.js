import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./Checkbox-5Fepdwz1.js";import{r as c,t as l}from"./TextInput-vfco79YG.js";import{n as u,r as d,t as f}from"./PasswordInput-CBpNGzdF.js";import{n as p,t as m}from"./Link-Bhk0TW_i.js";import{n as h,t as g}from"./Alert-C-O0NCPv.js";import{a as _,n as v,r as y,t as b}from"./AuthLayout-DKCgRmPV.js";var x,S,C;function w(){return(w=e((()=>{x=`_form_1bbud_1`,S=`_signIn_1bbud_6`,C={form:x,signIn:S}})))()}function T({title:e=`Create your account`,providers:t=[],onProviderSelect:n,passwordRules:r=u,terms:i,onSignUp:o,signInHref:c=`#sign-in`,footer:d,...p}){let[h,_]=(0,E.useState)({}),[x,S]=(0,E.useState)(),[w,T]=(0,E.useState)(!1),O=(0,E.useRef)(null),k=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null);async function M(e){if(e.preventDefault(),w)return;let t=new FormData(e.currentTarget),n={name:String(t.get(`name`)).trim(),email:String(t.get(`email`)).trim(),password:String(t.get(`password`)),acceptedTerms:t.get(`terms`)!=null},a={};if(n.name||(a.name=`Enter your full name.`),n.email?k.current?.validity.typeMismatch&&(a.email=`Enter an email address like name@company.com.`):a.email=`Enter your email address.`,n.password?r.every(e=>e.test(n.password))||(a.password=`Choose a password that meets every rule.`):a.password=`Enter a password.`,i&&!n.acceptedTerms&&(a.terms=`Agree to the terms to create an account.`),_(a),S(void 0),a.name)return O.current?.focus();if(a.email)return k.current?.focus();if(a.password)return A.current?.focus();if(a.terms)return j.current?.focus();T(!0);try{let e=await y(()=>o?.(n));e&&S(e)}finally{T(!1)}}let N=e=>()=>h[e]&&_({...h,[e]:void 0});return(0,D.jsxs)(b,{title:e,footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`p`,{className:C.signIn,children:[`Already have an account? `,(0,D.jsx)(m,{href:c,children:`Sign in`})]}),d]}),...p,children:[(0,D.jsx)(v,{providers:t,onSelect:n,disabled:w}),x&&(0,D.jsx)(g,{variant:`danger`,isLive:!0,children:x}),(0,D.jsxs)(`form`,{className:C.form,noValidate:!0,onSubmit:M,children:[(0,D.jsx)(l,{ref:O,label:`Full name`,name:`name`,autoComplete:`name`,isFullWidth:!0,validationState:h.name?`error`:void 0,helperText:h.name,onChange:N(`name`)}),(0,D.jsx)(l,{ref:k,label:`Email`,name:`email`,type:`email`,autoComplete:`email`,isFullWidth:!0,validationState:h.email?`error`:void 0,helperText:h.email,onChange:N(`email`)}),(0,D.jsx)(f,{ref:A,name:`password`,autoComplete:`new-password`,rules:r,isFullWidth:!0,validationState:h.password?`error`:void 0,helperText:h.password,onChange:N(`password`)}),i&&(0,D.jsx)(s,{ref:j,name:`terms`,label:i,validationState:h.terms?`error`:void 0,helperText:h.terms,onCheckedChange:N(`terms`)}),(0,D.jsx)(a,{type:`submit`,isFullWidth:!0,isLoading:w,children:`Create account`})]})]})}var E,D;function O(){return(O=e((()=>{E=n(),i(),o(),c(),p(),h(),_(),d(),w(),D=r(),T.__docgenInfo={description:`A sign-up page, a template: full name, email and a new password with its
rules in the Auth Layout, with optional single sign-on buttons and a terms
checkbox, and a link back to sign in. It checks the fields; whether the
account can be made is for \`onSignUp\`.`,methods:[],displayName:`SignUp`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Create your account'`,computed:!1}},providers:{required:!1,tsType:{name:`Array`,elements:[{name:`AuthProvider`}],raw:`AuthProvider[]`},description:`Single sign-on and social buttons, above the form with an "or" line. None by default.`,defaultValue:{value:`[]`,computed:!1}},onProviderSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},passwordRules:{required:!1,tsType:{name:`Array`,elements:[{name:`PasswordRule`}],raw:`PasswordRule[]`},description:`What the password needs, ticked off as the reader types; the form is not
sent until every one is met. At least 12 characters by default.`,defaultValue:{value:`[
  { label: 'At least 12 characters', test: (password) => password.length >= 12 },
]`,computed:!1}},terms:{required:!1,tsType:{name:`ReactNode`},description:`The label of a checkbox the reader must tick to create the account,
with links to the documents: "I agree to the <Link>Terms</Link>".
No checkbox when left out.`},onSignUp:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: SignUpValues) => string | void | Promise<string | void>`,signature:{arguments:[{type:{name:`SignUpValues`},name:`values`}],return:{name:`union`,raw:`string | void | Promise<string | void>`,elements:[{name:`string`},{name:`void`},{name:`Promise`,elements:[{name:`union`,raw:`string | void`,elements:[{name:`string`},{name:`void`}]}],raw:`Promise<string | void>`}]}}},description:`Called with valid values. Return (or resolve to) a message to show it
above the form, e.g. the email already has an account; the button shows
it is busy while a promise is pending. A thrown error or a rejected
promise shows a generic message.`},signInHref:{required:!1,tsType:{name:`string`},description:`Where "Already have an account? Sign in" goes.`,defaultValue:{value:`'#sign-in'`,computed:!1}}},composes:[`Omit`]}})))()}var k=t({CreatesAccount:()=>B,Default:()=>z,EmailTaken:()=>U,PasswordRules:()=>V,Phone:()=>K,Plain:()=>G,Unavailable:()=>W,Validation:()=>H,__namedExportsOrder:()=>q,default:()=>L}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{p(),O(),A=r(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I=(e,t=860)=>[n=>(0,A.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],L={title:`Templates/Auth/Sign Up`,tags:[`experimental`],component:T,parameters:{layout:`fullscreen`},args:{brand:(0,A.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),providers:[{id:`google`,label:`Sign up with Google`},{id:`microsoft`,label:`Sign up with Microsoft`}],terms:(0,A.jsxs)(A.Fragment,{children:[`I agree to the `,(0,A.jsx)(m,{href:`#terms`,children:`Terms of Service`}),` and the `,(0,A.jsx)(m,{href:`#privacy`,children:`Privacy Policy`})]}),signInHref:`#sign-in`,onSignUp:M(),onProviderSelect:M(),style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},providers:{control:!1},terms:{control:!1},passwordRules:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]}}},R=e=>({name:e.getByLabelText(`Full name`),email:e.getByLabelText(`Email`),password:e.getByLabelText(`Password`),submit:e.getByRole(`button`,{name:`Create account`})}),z={decorators:I(1200),play:async({canvas:e,args:t})=>{let n=e.getByRole(`main`);await j(F(n).getByRole(`heading`,{level:1,name:`Create your account`})).toBeVisible(),await j(e.getAllByRole(`heading`)).toHaveLength(1);let{name:r,email:i,password:a}=R(e);await j(r).toHaveAttribute(`autocomplete`,`name`),await j(i).toHaveAttribute(`type`,`email`),await j(i).toHaveAttribute(`autocomplete`,`email`),await j(a).toHaveAttribute(`type`,`password`),await j(a).toHaveAttribute(`autocomplete`,`new-password`),await j(a).toHaveAccessibleDescription(`At least 12 characters (not met)`),await j(e.getByRole(`checkbox`,{name:/I agree to the Terms of Service/})).not.toBeChecked(),await j(e.getByRole(`link`,{name:`Sign in`})).toHaveAttribute(`href`,`#sign-in`);let o=e.getByRole(`button`,{name:`Sign up with Google`});await j(e.getByText(`or`)).toBeVisible(),await j(o.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await N.click(o),await j(t.onProviderSelect).toHaveBeenCalledWith(`google`)}},B={decorators:I(1200),play:async({canvas:e,args:t})=>{let{name:n,email:r,password:i}=R(e);await N.type(n,` Ana Silva `),await N.type(r,`ana@acme.com `),await N.click(e.getByRole(`checkbox`)),await N.type(i,`correct horse battery{Enter}`),await j(t.onSignUp).toHaveBeenCalledWith({name:`Ana Silva`,email:`ana@acme.com`,password:`correct horse battery`,acceptedTerms:!0})}},V={decorators:I(1200),args:{passwordRules:[{label:`At least 12 characters`,test:e=>e.length>=12},{label:`A number`,test:e=>/\d/.test(e)}]},play:async({canvas:e})=>{let{password:t}=R(e);await j(t).toHaveAccessibleDescription(`At least 12 characters (not met) A number (not met)`),await N.type(t,`horse1`),await j(t).toHaveAccessibleDescription(`At least 12 characters (not met) A number (met)`),await N.type(t,` battery staple`),await j(t).toHaveAccessibleDescription(`At least 12 characters (met) A number (met)`),t.form.reset(),await P(()=>j(t).toHaveAccessibleDescription(`At least 12 characters (not met) A number (not met)`))}},H={decorators:I(1200),play:async({canvas:e,args:t})=>{let{name:n,email:r,password:i,submit:a}=R(e),o=e.getByRole(`checkbox`);await N.click(a),await j(n).toHaveAttribute(`aria-invalid`,`true`),await j(n).toHaveAccessibleDescription(`Enter your full name.`),await j(r).toHaveAccessibleDescription(`Enter your email address.`),await j(i).toHaveAccessibleDescription(`Enter a password. At least 12 characters (not met)`),await j(o).toHaveAccessibleDescription(`Agree to the terms to create an account.`),await j(n).toHaveFocus(),await N.type(n,`Ana Silva`),await j(n).not.toHaveAttribute(`aria-invalid`,`true`),await N.type(r,`ana`),await N.click(a),await j(r).toHaveFocus(),await j(r).toHaveAccessibleDescription(`Enter an email address like name@company.com.`),await N.type(r,`@acme.com`),await N.type(i,`short`),await N.click(a),await j(i).toHaveFocus(),await j(i).toHaveAccessibleDescription(`Choose a password that meets every rule. At least 12 characters (not met)`),await N.type(i,` but long enough`),await N.click(a),await j(o).toHaveFocus(),await j(t.onSignUp).not.toHaveBeenCalled(),await N.click(o),await j(o).not.toHaveAttribute(`aria-invalid`,`true`),await N.click(a),await j(t.onSignUp).toHaveBeenCalledOnce()}},U={decorators:I(1200),args:{terms:void 0,onSignUp:M(()=>new Promise(e=>setTimeout(()=>e(`An account with this email already exists. Sign in instead.`),200)))},play:async({canvas:e})=>{let{name:t,email:n,password:r,submit:i}=R(e);await N.type(t,`Ana Silva`),await N.type(n,`ana@acme.com`),await N.type(r,`correct horse battery`),await N.click(i),await j(i).toHaveAttribute(`aria-busy`,`true`),await j(e.getByRole(`button`,{name:`Sign up with Google`})).toBeDisabled();let a=await e.findByRole(`alert`);await j(a).toHaveTextContent(`An account with this email already exists.`),await j(i).not.toHaveAttribute(`aria-busy`),await j(n).toHaveValue(`ana@acme.com`),await j(r).toHaveValue(`correct horse battery`)}},W={decorators:I(1200),args:{terms:void 0,onSignUp:M(()=>Promise.reject(Error(`503`)))},play:async({canvas:e})=>{let{name:t,email:n,password:r,submit:i}=R(e);await N.type(t,`Ana Silva`),await N.type(n,`ana@acme.com`),await N.type(r,`correct horse battery`),await N.click(i),await j(await e.findByRole(`alert`)).toHaveTextContent(`Something went wrong. Try again.`),await j(i).toBeEnabled()}},G={decorators:I(1200),args:{appearance:`plain`,providers:[],terms:void 0},play:async({canvas:e})=>{await j(e.queryByRole(`checkbox`)).toBeNull(),await j(e.queryByText(`or`)).toBeNull(),await j(e.getByRole(`link`,{name:`Sign in`})).toBeVisible()}},K={decorators:I(320,760),args:{title:`Createyouraccountatacmecorporationfinance`,passwordRules:[{label:`Notthenameofyourcompanyoritsproducts`,test:()=>!0}]},play:async({canvasElement:e,canvas:t})=>{let n=e.firstElementChild;await P(()=>j(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)),await j(t.getByRole(`button`,{name:`Create account`})).toBeVisible()}},q=[`Default`,`CreatesAccount`,`PasswordRules`,`Validation`,`EmailTaken`,`Unavailable`,`Plain`,`Phone`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Create your account'
    })).toBeVisible();
    await expect(canvas.getAllByRole('heading')).toHaveLength(1);
    const {
      name,
      email,
      password
    } = fields(canvas);
    await expect(name).toHaveAttribute('autocomplete', 'name');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'email');
    await expect(password).toHaveAttribute('type', 'password');
    await expect(password).toHaveAttribute('autocomplete', 'new-password');
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met)');
    await expect(canvas.getByRole('checkbox', {
      name: /I agree to the Terms of Service/
    })).not.toBeChecked();
    await expect(canvas.getByRole('link', {
      name: 'Sign in'
    })).toHaveAttribute('href', '#sign-in');
    // Single sign-on comes first, then the "or" line, then the form.
    const google = canvas.getByRole('button', {
      name: 'Sign up with Google'
    });
    await expect(canvas.getByText('or')).toBeVisible();
    await expect(google.compareDocumentPosition(name) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await userEvent.click(google);
    await expect(args.onProviderSelect).toHaveBeenCalledWith('google');
  }
}`,...z.parameters?.docs?.source},description:{story:`In a card: single sign-on, then full name, email, a new password with its rule, the terms and a link to sign in.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const {
      name,
      email,
      password
    } = fields(canvas);
    await userEvent.type(name, ' Ana Silva ');
    await userEvent.type(email, 'ana@acme.com ');
    await userEvent.click(canvas.getByRole('checkbox'));
    await userEvent.type(password, 'correct horse battery{Enter}');
    await expect(args.onSignUp).toHaveBeenCalledWith({
      name: 'Ana Silva',
      email: 'ana@acme.com',
      password: 'correct horse battery',
      acceptedTerms: true
    });
  }
}`,...B.parameters?.docs?.source},description:{story:"Valid values go to `onSignUp`, the name and email trimmed; Enter in a field sends the form.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    passwordRules: [{
      label: 'At least 12 characters',
      test: password => password.length >= 12
    }, {
      label: 'A number',
      test: password => /\\d/.test(password)
    }]
  },
  play: async ({
    canvas
  }) => {
    const {
      password
    } = fields(canvas);
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)');
    await userEvent.type(password, 'horse1');
    await expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (met)');
    await userEvent.type(password, ' battery staple');
    await expect(password).toHaveAccessibleDescription('At least 12 characters (met) A number (met)');
    // Resetting the form unticks them.
    password.form!.reset();
    await waitFor(() => expect(password).toHaveAccessibleDescription('At least 12 characters (not met) A number (not met)'));
  }
}`,...V.parameters?.docs?.source},description:{story:`Each rule is ticked off as the reader types, and says so to a screen reader when the field is read.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  play: async ({
    canvas,
    args
  }) => {
    const {
      name,
      email,
      password,
      submit
    } = fields(canvas);
    const agree = canvas.getByRole('checkbox');
    await userEvent.click(submit);
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await expect(name).toHaveAccessibleDescription('Enter your full name.');
    await expect(email).toHaveAccessibleDescription('Enter your email address.');
    await expect(password).toHaveAccessibleDescription('Enter a password. At least 12 characters (not met)');
    await expect(agree).toHaveAccessibleDescription('Agree to the terms to create an account.');
    await expect(name).toHaveFocus();
    // Typing clears that field's message.
    await userEvent.type(name, 'Ana Silva');
    await expect(name).not.toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(email, 'ana');
    await userEvent.click(submit);
    await expect(email).toHaveFocus();
    await expect(email).toHaveAccessibleDescription('Enter an email address like name@company.com.');
    await userEvent.type(email, '@acme.com');
    await userEvent.type(password, 'short');
    await userEvent.click(submit);
    await expect(password).toHaveFocus();
    await expect(password).toHaveAccessibleDescription('Choose a password that meets every rule. At least 12 characters (not met)');
    await userEvent.type(password, ' but long enough');
    await userEvent.click(submit);
    await expect(agree).toHaveFocus();
    await expect(args.onSignUp).not.toHaveBeenCalled();
    await userEvent.click(agree);
    await expect(agree).not.toHaveAttribute('aria-invalid', 'true');
    await userEvent.click(submit);
    await expect(args.onSignUp).toHaveBeenCalledOnce();
  }
}`,...H.parameters?.docs?.source},description:{story:`An empty or malformed field, an unmet rule or unticked terms is marked, says how to fix it, and the first gets focus.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    terms: undefined,
    onSignUp: fn(() => new Promise<string>(resolve => setTimeout(() => resolve('An account with this email already exists. Sign in instead.'), 200)))
  },
  play: async ({
    canvas
  }) => {
    const {
      name,
      email,
      password,
      submit
    } = fields(canvas);
    await userEvent.type(name, 'Ana Silva');
    await userEvent.type(email, 'ana@acme.com');
    await userEvent.type(password, 'correct horse battery');
    await userEvent.click(submit);
    // Busy while it waits, and a second press sends nothing.
    await expect(submit).toHaveAttribute('aria-busy', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Sign up with Google'
    })).toBeDisabled();
    const alert = await canvas.findByRole('alert');
    await expect(alert).toHaveTextContent('An account with this email already exists.');
    await expect(submit).not.toHaveAttribute('aria-busy');
    await expect(email).toHaveValue('ana@acme.com');
    await expect(password).toHaveValue('correct horse battery');
  }
}`,...U.parameters?.docs?.source},description:{story:"`onSignUp` returns a message: it is announced above the form, and what was typed stays.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    terms: undefined,
    onSignUp: fn(() => Promise.reject(new Error('503')))
  },
  play: async ({
    canvas
  }) => {
    const {
      name,
      email,
      password,
      submit
    } = fields(canvas);
    await userEvent.type(name, 'Ana Silva');
    await userEvent.type(email, 'ana@acme.com');
    await userEvent.type(password, 'correct horse battery');
    await userEvent.click(submit);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Something went wrong. Try again.');
    await expect(submit).toBeEnabled();
  }
}`,...W.parameters?.docs?.source},description:{story:"`onSignUp` throws or rejects: a generic message, and the form can be sent again.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  decorators: box(1200),
  args: {
    appearance: 'plain',
    providers: [],
    terms: undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('checkbox')).toBeNull();
    await expect(canvas.queryByText('or')).toBeNull();
    await expect(canvas.getByRole('link', {
      name: 'Sign in'
    })).toBeVisible();
  }
}`,...G.parameters?.docs?.source},description:{story:`On the canvas, without a card, single sign-on or terms: the fewest parts.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: box(320, 760),
  args: {
    title: 'Createyouraccountatacmecorporationfinance',
    passwordRules: [{
      label: 'Notthenameofyourcompanyoritsproducts',
      test: () => true
    }]
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
    await expect(canvas.getByRole('button', {
      name: 'Create account'
    })).toBeVisible();
  }
}`,...K.parameters?.docs?.source},description:{story:`A phone with a long unbroken title and rule: the column takes the width, the terms wrap, nothing scrolls sideways.`,...K.parameters?.docs?.description}}}})))()}export{k as a,G as i,U as n,J as o,K as r,z as t};