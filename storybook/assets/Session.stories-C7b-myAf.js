import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./Link-Bhk0TW_i.js";import{r as c,t as l}from"./Modal-ByvhTgOp.js";import{a as u,t as d}from"./AuthLayout-DKCgRmPV.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{f=`_timer_9dmiq_2`,p=`_account_9dmiq_9`,m=`_label_9dmiq_16`,h=`_id_9dmiq_22`,g=`_other_9dmiq_28`,_={timer:f,account:p,label:m,id:h,other:g}})))()}function y({open:e,countdown:t=60,onContinue:n,onSignOut:r,onExpire:i=r,title:o=`Your session is about to end`}){let[s,c]=(0,x.useState)(t),[u,d]=(0,x.useState)(e);e!==u&&(d(e),e&&c(t));let f=(0,x.useRef)(null),p=(0,x.useRef)(i);return(0,x.useEffect)(()=>{p.current=i}),(0,x.useEffect)(()=>{if(!e)return;let n=Date.now()+t*1e3,r=setInterval(()=>{let e=Math.max(0,Math.ceil((n-Date.now())/1e3));c(e),e===0&&(clearInterval(r),p.current())},250);return()=>clearInterval(r)},[e,t]),(0,S.jsx)(l,{isAlert:!0,size:`sm`,open:e,onOpenChange:e=>!e&&n(),initialFocus:f,title:o,description:(0,S.jsxs)(S.Fragment,{children:[`You haven't done anything for a while. For your security, we'll sign you out in`,` `,(0,S.jsx)(`strong`,{role:`timer`,className:_.timer,children:C(s)}),`.`]}),footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{variant:`secondary`,appearance:`outlined`,onClick:r,children:`Sign out`}),(0,S.jsx)(a,{ref:f,onClick:n,children:`Stay signed in`})]})})}function b({reason:e=`signed-out`,title:t,description:n,account:r,signInHref:i=`#sign-in`,otherAccountHref:o,...c}){let l=!!r;return(0,S.jsxs)(d,{title:t??w[e].title,description:n??w[e].description,...c,children:[l&&(0,S.jsxs)(`p`,{className:_.account,children:[(0,S.jsx)(`span`,{className:_.label,children:`Account`}),(0,S.jsx)(`strong`,{className:_.id,children:r})]}),(0,S.jsx)(a,{href:i,isFullWidth:!0,children:`Sign in again`}),l&&o&&(0,S.jsx)(`p`,{className:_.other,children:(0,S.jsx)(s,{href:o,children:`Use another account`})})]})}var x,S,C,w;function T(){return(T=e((()=>{x=n(),i(),o(),c(),u(),v(),S=r(),C=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`,w={"signed-out":{title:`You're signed out`,description:`Sign in again to pick up where you left off.`},inactive:{title:`You were signed out`,description:`You weren't active for a while, so we signed you out to keep your account safe.`},expired:{title:`Your session has ended`,description:`Sign in again to continue.`}},y.__docgenInfo={description:`The warning before a session ends for inactivity: a countdown, Stay
signed in and Sign out, in an alert dialog. It owns the countdown only;
when to open it and what each button does is the app's.`,methods:[],displayName:`SessionTimeout`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Open it when the session is about to end. The app tracks inactivity, not this pattern.`},countdown:{required:!1,tsType:{name:`number`},description:`Seconds left when it opens. Give at least 20 (WCAG 2.2.1).`,defaultValue:{value:`60`,computed:!1}},onContinue:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Stay signed in, or Escape: the reader is here. Extend the session, then close it.`},onSignOut:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Sign out, pressed by the reader.`},onExpire:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"The countdown reached zero. Defaults to `onSignOut`; send the reader to Signed Out with reason `inactive`.",defaultValue:{value:`onSignOut`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Your session is about to end'`,computed:!1}}}},b.__docgenInfo={description:`The page after a session ends, in the Auth Layout: why (the reader
signed out, was inactive, or the session expired), the remembered
account, and Sign in again.`,methods:[],displayName:`SignedOut`,props:{reason:{required:!1,tsType:{name:`union`,raw:`'signed-out' | 'inactive' | 'expired'`,elements:[{name:`literal`,value:`'signed-out'`},{name:`literal`,value:`'inactive'`},{name:`literal`,value:`'expired'`}]},description:`Picks the title and the line under it.`,defaultValue:{value:`'signed-out'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:`Replaces the reason's title.`},account:{required:!1,tsType:{name:`string`},description:`The account that was signed in, remembered: an email or a username, masked by you if need be.`},signInHref:{required:!1,tsType:{name:`string`},description:`Where Sign in again goes. Carry the remembered account there, so the reader only types a password.`,defaultValue:{value:`'#sign-in'`,computed:!1}},otherAccountHref:{required:!1,tsType:{name:`string`},description:'Shows "Use another account" under Sign in again, when `account` is set.'}},composes:[`Omit`]}})))()}var ee=t({EscapeContinues:()=>J,Expired:()=>z,Expires:()=>Q,Inactive:()=>R,Narrow:()=>B,SignOut:()=>X,SignedOutPage:()=>L,Warning:()=>K,__namedExportsOrder:()=>$,default:()=>I});function E(e){let[t,n]=(0,D.useState)(!1),r=e=>()=>{n(!1),e?.()};return(0,O.jsxs)(`div`,{style:{padding:`var(--space-section)`},children:[(0,O.jsx)(a,{variant:`secondary`,appearance:`outlined`,onClick:()=>n(!0),children:`Show the warning`}),(0,O.jsx)(y,{...e,open:t,onContinue:r(e.onContinue),onSignOut:r(e.onSignOut),onExpire:e.onExpire&&r(e.onExpire)})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function te(){return(te=e((()=>{D=n(),i(),T(),O=r(),{expect:k,fn:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P=(e,t=640)=>[n=>(0,O.jsx)(`div`,{style:{inlineSize:e,blockSize:t,overflow:`auto`,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:n()})],F=(0,O.jsx)(`strong`,{style:{fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),I={title:`Patterns/Application UI/Session`,tags:[`experimental`],component:b,parameters:{layout:`fullscreen`},decorators:P(1200),args:{brand:F,style:{minBlockSize:`100%`}},argTypes:{brand:{control:!1},aside:{control:!1},appearance:{control:`inline-radio`,options:[`card`,`plain`]},reason:{control:`inline-radio`,options:[`signed-out`,`inactive`,`expired`],description:`Why the session ended: picks the title and the line under it.`},title:{control:`text`,description:`Replaces the reason's title.`},description:{control:`text`,description:`Replaces the reason's line under the title.`},account:{control:`text`,description:`The remembered account (an email or a username, masked if need be), shown above Sign in again.`},signInHref:{control:`text`,description:`Where Sign in again goes. Carry the remembered account there.`},otherAccountHref:{control:`text`,description:'Shows "Use another account" under Sign in again, when `account` is set.'}}},L={play:async({canvas:e})=>{await k(e.getByRole(`heading`,{level:1,name:`You're signed out`})).toBeVisible(),await k(e.getAllByRole(`heading`,{level:1})).toHaveLength(1),await k(N(e.getByRole(`main`)).getByRole(`heading`,{level:1})).toBeVisible();let t=e.getByRole(`link`,{name:`Sign in again`});await k(t).toHaveAttribute(`href`,`#sign-in`),await k(e.queryByText(`Account`)).toBeNull(),await k(e.queryByRole(`link`,{name:`Use another account`})).toBeNull()}},R={args:{reason:`inactive`,account:`ava.stone@example.com`,signInHref:`/sign-in?account=remembered`,otherAccountHref:`/sign-in`},play:async({canvas:e})=>{await k(e.getByRole(`heading`,{level:1,name:`You were signed out`})).toBeVisible(),await k(e.getByText(/weren't active for a while/)).toBeVisible(),await k(e.getByText(`ava.stone@example.com`)).toBeVisible(),await k(e.getByRole(`link`,{name:`Sign in again`})).toHaveAttribute(`href`,`/sign-in?account=remembered`),await k(e.getByRole(`link`,{name:`Use another account`})).toHaveAttribute(`href`,`/sign-in`),await j.tab(),await k(e.getByRole(`link`,{name:`Sign in again`})).toHaveFocus(),await j.tab(),await k(e.getByRole(`link`,{name:`Use another account`})).toHaveFocus()}},z={args:{reason:`expired`,account:`ava.stone@example.com`},play:async({canvas:e})=>{await k(e.getByRole(`heading`,{level:1,name:`Your session has ended`})).toBeVisible(),await k(e.queryByRole(`link`,{name:`Use another account`})).toBeNull()}},B={decorators:P(320),args:{reason:`inactive`,account:`procurement.department.northern-region.long-address@enterprise-holdings.example.com`,otherAccountHref:`/sign-in`},play:async({canvasElement:e,canvas:t})=>{let n=e.firstElementChild;await M(()=>k(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)),await k(t.getByRole(`link`,{name:`Sign in again`})).toBeVisible()}},V=()=>({onContinue:A(),onSignOut:A(),onExpire:A()}),H=e=>Object.values(e).forEach(e=>e.mockClear()),U=async e=>{await j.click(e.getByRole(`button`,{name:`Show the warning`}));let t=await N(document.body).findByRole(`alertdialog`,{name:`Your session is about to end`});return await M(()=>k(t).toBeVisible()),t},W=()=>M(()=>k(N(document.body).queryByRole(`alertdialog`)).toBeNull()),G=V(),K={decorators:P(1200,320),render:()=>(0,O.jsx)(E,{...G}),play:async({canvas:e})=>{H(G);let t=await U(e),n=N(t).getByRole(`button`,{name:`Stay signed in`});await M(()=>k(n).toHaveFocus());let r=N(t).getByRole(`timer`);await k(r).toHaveTextContent(/^(1:00|0:59)$/),await k(r).not.toHaveAttribute(`aria-live`),await k(t).toHaveAccessibleDescription(/we'll sign you out in (1:00|0:59)/),await j.keyboard(`{Enter}`),await W(),await k(G.onContinue).toHaveBeenCalledOnce(),await k(G.onSignOut).not.toHaveBeenCalled()}},q=V(),J={tags:[`!dev`],decorators:P(1200,320),render:()=>(0,O.jsx)(E,{...q}),play:async({canvas:e})=>{H(q),await U(e),await j.keyboard(`{Escape}`),await W(),await k(q.onContinue).toHaveBeenCalledOnce(),await k(e.getByRole(`button`,{name:`Show the warning`})).toHaveFocus()}},Y=V(),X={tags:[`!dev`],decorators:P(1200,320),render:()=>(0,O.jsx)(E,{...Y}),play:async({canvas:e})=>{H(Y);let t=await U(e);await j.click(N(t).getByRole(`button`,{name:`Sign out`})),await W(),await k(Y.onSignOut).toHaveBeenCalledOnce(),await k(Y.onExpire).not.toHaveBeenCalled()}},Z=V(),Q={tags:[`!dev`],decorators:P(1200,320),render:()=>(0,O.jsx)(E,{...Z,countdown:2}),play:async({canvas:e})=>{H(Z);let t=await U(e);await k(N(t).getByRole(`timer`)).toHaveTextContent(/^0:0[12]$/),await M(()=>k(Z.onExpire).toHaveBeenCalledOnce(),{timeout:4e3}),await W(),await k(Z.onContinue).not.toHaveBeenCalled(),await k(Z.onSignOut).not.toHaveBeenCalled()}},$=[`SignedOutPage`,`Inactive`,`Expired`,`Narrow`,`Warning`,`EscapeContinues`,`SignOut`,`Expires`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: "You're signed out"
    })).toBeVisible();
    // One h1, inside main.
    await expect(canvas.getAllByRole('heading', {
      level: 1
    })).toHaveLength(1);
    await expect(within(canvas.getByRole('main')).getByRole('heading', {
      level: 1
    })).toBeVisible();
    const again = canvas.getByRole('link', {
      name: 'Sign in again'
    });
    await expect(again).toHaveAttribute('href', '#sign-in');
    await expect(canvas.queryByText('Account')).toBeNull();
    await expect(canvas.queryByRole('link', {
      name: 'Use another account'
    })).toBeNull();
  }
}`,...L.parameters?.docs?.source},description:{story:`The reader pressed Sign out: no account remembered on a shared computer.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'inactive',
    account: 'ava.stone@example.com',
    signInHref: '/sign-in?account=remembered',
    otherAccountHref: '/sign-in'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'You were signed out'
    })).toBeVisible();
    await expect(canvas.getByText(/weren't active for a while/)).toBeVisible();
    await expect(canvas.getByText('ava.stone@example.com')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Sign in again'
    })).toHaveAttribute('href', '/sign-in?account=remembered');
    await expect(canvas.getByRole('link', {
      name: 'Use another account'
    })).toHaveAttribute('href', '/sign-in');
    // Sign in again comes first in the tab order: it is what most readers want.
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Sign in again'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Use another account'
    })).toHaveFocus();
  }
}`,...R.parameters?.docs?.source},description:{story:`Signed out after the warning ran out, with the account remembered.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'expired',
    account: 'ava.stone@example.com'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Your session has ended'
    })).toBeVisible();
    // No href for another account: the link is left out.
    await expect(canvas.queryByRole('link', {
      name: 'Use another account'
    })).toBeNull();
  }
}`,...z.parameters?.docs?.source},description:{story:`The session ran out on the server (a token expired), not from inactivity.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  decorators: box(320),
  args: {
    reason: 'inactive',
    account: 'procurement.department.northern-region.long-address@enterprise-holdings.example.com',
    otherAccountHref: '/sign-in'
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    const frame = canvasElement.firstElementChild as HTMLElement;
    await waitFor(() => expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth));
    await expect(canvas.getByRole('link', {
      name: 'Sign in again'
    })).toBeVisible();
  }
}`,...B.parameters?.docs?.source},description:{story:`A 320px phone with a long id: the id breaks, the page does not scroll sideways.`,...B.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: box(1200, 320),
  render: () => <Demo {...timeout} />,
  play: async ({
    canvas
  }) => {
    reset(timeout);
    const dialog = await open(canvas);
    const stay = within(dialog).getByRole('button', {
      name: 'Stay signed in'
    });
    await waitFor(() => expect(stay).toHaveFocus());
    const timer = within(dialog).getByRole('timer');
    await expect(timer).toHaveTextContent(/^(1:00|0:59)$/);
    // Not live: it is read with the dialog, not every second.
    await expect(timer).not.toHaveAttribute('aria-live');
    await expect(dialog).toHaveAccessibleDescription(/we'll sign you out in (1:00|0:59)/);
    await userEvent.keyboard('{Enter}');
    await closed();
    await expect(timeout.onContinue).toHaveBeenCalledOnce();
    await expect(timeout.onSignOut).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source},description:{story:`The warning, a minute before the session ends. Stay signed in has focus; it keeps the session.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...escape} />,
  play: async ({
    canvas
  }) => {
    reset(escape);
    await open(canvas);
    await userEvent.keyboard('{Escape}');
    await closed();
    await expect(escape.onContinue).toHaveBeenCalledOnce();
    await expect(canvas.getByRole('button', {
      name: 'Show the warning'
    })).toHaveFocus();
  }
}`,...J.parameters?.docs?.source},description:{story:`Escape counts as Stay signed in: the reader is at the keyboard.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...signOut} />,
  play: async ({
    canvas
  }) => {
    reset(signOut);
    const dialog = await open(canvas);
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Sign out'
    }));
    await closed();
    await expect(signOut.onSignOut).toHaveBeenCalledOnce();
    await expect(signOut.onExpire).not.toHaveBeenCalled();
  }
}`,...X.parameters?.docs?.source},description:{story:`Sign out ends the session now.`,...X.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: box(1200, 320),
  render: () => <Demo {...expiry} countdown={2} />,
  play: async ({
    canvas
  }) => {
    reset(expiry);
    const dialog = await open(canvas);
    await expect(within(dialog).getByRole('timer')).toHaveTextContent(/^0:0[12]$/);
    await waitFor(() => expect(expiry.onExpire).toHaveBeenCalledOnce(), {
      timeout: 4000
    });
    await closed();
    await expect(expiry.onContinue).not.toHaveBeenCalled();
    await expect(expiry.onSignOut).not.toHaveBeenCalled();
  }
}`,...Q.parameters?.docs?.source},description:{story:"Nobody answers: at zero it calls `onExpire`. A 2-second countdown here; give at least 20 in an app.",...Q.parameters?.docs?.description}}}})))()}export{K as a,T as c,L as i,B as n,te as o,ee as r,y as s,R as t};