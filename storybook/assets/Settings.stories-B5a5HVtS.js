import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{r as c,t as l}from"./Avatar-Br9NGvV-.js";import{n as ee,t as te}from"./Checkbox-5Fepdwz1.js";import{n as u,t as ne}from"./Radio-vEly5vBb.js";import{i as d,t as re}from"./Menu-NLwpYJmZ.js";import{r as ie,t as f}from"./TextInput-vfco79YG.js";import{n as p,r as ae,t as m}from"./PasswordInput-CBpNGzdF.js";import{n as oe,t as se}from"./Textarea-Dd8hy5Kc.js";import{n as ce,t as le}from"./ConfirmDialog-D_hrnfs8.js";import{n as ue,t as de}from"./AppShell-DzI1P-p3.js";import{i as fe,n as pe}from"./TopBar-DXYi-mW1.js";import{a as me,i as h,n as he}from"./FormLayouts-OSTbjqat.js";import{r as ge,t as _e}from"./NavSidebar-Do9w0wRH.js";import{n as ve,t as ye}from"./VerticalNav-CYEe4TA2.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g=`_page_xqh09_3`,_=`_brand_xqh09_9`,v=`_sidebar_xqh09_13`,y=`_account_xqh09_17`,b=`_heading_xqh09_22`,x=`_title_xqh09_27`,S=`_description_xqh09_36`,C=`_body_xqh09_46`,w=`_nav_xqh09_58`,T=`_panels_xqh09_64`,E=`_panel_xqh09_64`,D=`_saveBar_xqh09_77`,O=`_status_xqh09_90`,k=`_actions_xqh09_97`,A=`_danger_xqh09_105`,j={page:g,brand:_,sidebar:v,account:y,heading:b,title:x,description:S,body:C,nav:w,panels:T,panel:E,saveBar:D,status:O,actions:k,danger:A}})))()}function N({defaultSection:e=`profile`,onSave:t,onDeleteAccount:n,...r}){let[i,o]=(0,I.useState)(e),[c,ee]=(0,I.useState)(z),u=(e,n)=>{ee(t=>({...t,[e]:n})),t?.(e,n)},d=(0,L.jsx)(`div`,{className:j.account,children:(0,L.jsx)(re,{align:`start`,trigger:(0,L.jsx)(a,{variant:`secondary`,appearance:`ghost`,startIcon:(0,L.jsx)(l,{initials:`IO`,size:`sm`}),children:c.profile.name}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})});return(0,L.jsx)(de,{brand:(0,L.jsx)(`strong`,{className:j.brand,children:`Zweihänder`}),sidebar:(0,L.jsx)(_e,{items:[{label:`Dashboard`,href:`#dashboard`,icon:(0,L.jsx)(s,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,L.jsx)(s,{name:`file`})},{label:`Team`,href:`#team`,icon:(0,L.jsx)(s,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,L.jsx)(s,{name:`calendar`})}],className:j.sidebar,footer:d}),header:(0,L.jsx)(pe,{end:d}),...r,children:(0,L.jsxs)(`div`,{className:j.page,children:[(0,L.jsxs)(`div`,{className:j.heading,children:[(0,L.jsx)(`h1`,{className:j.title,children:`Settings`}),(0,L.jsx)(`p`,{className:j.description,children:`Your profile, sign-in and the notifications you get.`})]}),(0,L.jsxs)(`div`,{className:j.body,children:[(0,L.jsx)(ye,{"aria-label":`Settings`,className:j.nav,items:R.map(({id:e,label:t})=>({label:t,href:`#${e}`})),currentHref:`#${i}`,onClick:e=>{let t=e.target.closest(`a`);t&&(e.preventDefault(),o(t.hash.slice(1)))}}),(0,L.jsxs)(`div`,{className:j.panels,children:[(0,L.jsx)(P,{id:`profile`,hidden:i!==`profile`,saved:c.profile,onSave:u,children:e=>(0,L.jsxs)(h,{title:`Profile`,description:`Shown to everyone in your workspace.`,children:[(0,L.jsx)(f,{label:`Full name`,name:`name`,autoComplete:`name`,required:!0,isFullWidth:!0,defaultValue:e.name}),(0,L.jsx)(f,{label:`Email`,name:`email`,type:`email`,readOnly:!0,isFullWidth:!0,defaultValue:e.email,helperText:`Managed by your organisation's sign-in. Ask an admin to change it.`}),(0,L.jsx)(f,{label:`Username`,name:`username`,prefix:`zweihander.app/`,isFullWidth:!0,defaultValue:e.username}),(0,L.jsx)(se,{label:`About`,name:`about`,helperText:`A few sentences about yourself.`,minRows:3,isFullWidth:!0,defaultValue:e.about})]})}),(0,L.jsxs)(`div`,{hidden:i!==`account`,className:j.panel,children:[(0,L.jsx)(be,{onSave:t}),(0,L.jsx)(xe,{username:c.profile.username,onDeleteAccount:n})]}),(0,L.jsx)(P,{id:`notifications`,hidden:i!==`notifications`,saved:c.notifications,onSave:u,children:e=>(0,L.jsxs)(h,{title:`Notifications`,description:`We always email you about sign-ins and billing.`,children:[(0,L.jsxs)(he,{legend:`By email`,children:[(0,L.jsx)(te,{name:`comments`,label:`Comments`,helperText:`When someone comments on your work.`,defaultChecked:e.comments===`on`}),(0,L.jsx)(te,{name:`mentions`,label:`Mentions`,helperText:`When someone mentions you.`,defaultChecked:e.mentions===`on`})]}),(0,L.jsx)(ne,{label:`Push notifications`,name:`push`,defaultValue:e.push,options:[{value:`everything`,label:`Everything`},{value:`mentions`,label:`Only mentions`},{value:`none`,label:`No push notifications`}]})]})})]})]})]})})}function P({id:e,hidden:t,saved:n,onSave:r,children:i}){let[a,o]=(0,I.useState)(0),[s,c]=(0,I.useState)(``);return(0,L.jsxs)(`form`,{"aria-label":B(e),hidden:t,className:j.panel,onSubmit:t=>{t.preventDefault(),r(e,Object.fromEntries(new FormData(t.currentTarget))),o(e=>e+1),c(`Saved.`)},onChange:()=>c(``),children:[(0,L.jsx)(`div`,{children:i(n)},a),(0,L.jsx)(F,{status:s,onDiscard:()=>{o(e=>e+1),c(`Changes discarded.`)}})]})}function F({status:e,onDiscard:t,saveLabel:n=`Save`}){return(0,L.jsxs)(`div`,{className:j.saveBar,children:[(0,L.jsx)(`p`,{role:`status`,className:j.status,children:e}),(0,L.jsxs)(`div`,{className:j.actions,children:[(0,L.jsx)(a,{type:`button`,variant:`secondary`,appearance:`ghost`,onClick:t,children:`Discard`}),(0,L.jsx)(a,{type:`submit`,children:n})]})]})}function be({onSave:e}){let[t,n]=(0,I.useState)(0),[r,i]=(0,I.useState)(``),[a,o]=(0,I.useState)({});return(0,L.jsxs)(`form`,{"aria-label":`Change password`,className:j.panel,onSubmit:t=>{t.preventDefault();let r=t.currentTarget,a=new FormData(r),s=String(a.get(`currentPassword`)??``),c=String(a.get(`newPassword`)??``),l={current:s?void 0:`Enter your current password.`,next:p.every(e=>e.test(c))?void 0:`Choose a password that meets every rule.`};if(o(l),l.current||l.next){i(``),r.querySelector(l.current?`[name="currentPassword"]`:`[name="newPassword"]`)?.focus();return}e?.(`account`,{currentPassword:s,newPassword:c}),n(e=>e+1),i(`Password changed.`)},onChange:()=>i(``),noValidate:!0,children:[(0,L.jsxs)(h,{title:`Password`,description:`Use a password you do not use anywhere else.`,children:[(0,L.jsx)(m,{label:`Current password`,name:`currentPassword`,isFullWidth:!0,validationState:a.current?`error`:`default`,helperText:a.current}),(0,L.jsx)(m,{label:`New password`,name:`newPassword`,autoComplete:`new-password`,rules:p,isFullWidth:!0,validationState:a.next?`error`:`default`,helperText:a.next})]},t),(0,L.jsx)(F,{status:r,saveLabel:`Change password`,onDiscard:()=>{n(e=>e+1),o({}),i(``)}})]})}function xe({username:e,onDeleteAccount:t}){return(0,L.jsx)(h,{className:j.danger,title:`Delete account`,description:`Your profile, projects and files are deleted for good. This cannot be undone.`,children:(0,L.jsx)(`div`,{children:(0,L.jsx)(le,{title:`Delete your account?`,description:`Your profile, projects and files are deleted for good. You cannot undo this.`,confirmLabel:`Delete account`,confirmText:e,onConfirm:()=>t?.(),trigger:(0,L.jsx)(a,{variant:`destructive`,appearance:`outlined`,children:`Delete account`})})})})}var I,L,R,z,B;function Se(){return(Se=e((()=>{I=n(),o(),c(),i(),ee(),u(),ae(),ie(),oe(),d(),ce(),me(),ge(),fe(),ve(),ue(),M(),L=r(),R=[{id:`profile`,label:`Profile`},{id:`account`,label:`Account`},{id:`notifications`,label:`Notifications`}],z={profile:{name:`Ines Okafor`,email:`ines@example.com`,username:`ines`,about:``},notifications:{comments:`on`,push:`mentions`}},B=e=>R.find(t=>t.id===e)?.label,N.__docgenInfo={description:`The settings page: a heading, a Vertical Nav of sections beside the
section shown (above it on a narrow screen), each section a form of
Form Sections with a save bar at its end that stays in view, and a
danger zone under Account. The values are local; swap them for your
data layer when you copy the page.`,methods:[],displayName:`Settings`,props:{defaultSection:{required:!1,tsType:{name:`union`,raw:`'profile' | 'account' | 'notifications'`,elements:[{name:`literal`,value:`'profile'`},{name:`literal`,value:`'account'`},{name:`literal`,value:`'notifications'`}]},description:`The section shown first.`,defaultValue:{value:`'profile'`,computed:!1}},onSave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(section: SettingsSection, values: Values) => void`,signature:{arguments:[{type:{name:`union`,raw:`'profile' | 'account' | 'notifications'`,elements:[{name:`literal`,value:`'profile'`},{name:`literal`,value:`'account'`},{name:`literal`,value:`'notifications'`}]},name:`section`},{type:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},name:`values`}],return:{name:`void`}}},description:"Called with a section's values when it is saved: the form's fields by\nname. Account sends `currentPassword` and `newPassword`. Replace with a\ncall to your API."},onDeleteAccount:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called once the reader confirms Delete account.`}},composes:[`Omit`]}})))()}var Ce=t({Account:()=>X,Default:()=>J,DeleteAccount:()=>Z,Narrow:()=>Q,SwitchSections:()=>Y,__namedExportsOrder:()=>Ee,default:()=>Te}),we,V,H,U,W,G,K,Te,q,J,Y,X,Z,Q,Ee;function $(){return($=e((()=>{Se(),we=r(),{expect:V,fn:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K=e=>[t=>(0,we.jsx)(`div`,{style:{inlineSize:e,blockSize:760,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],Te={title:`Templates/Application UI/Settings`,tags:[`experimental`],component:N,parameters:{layout:`fullscreen`},argTypes:{defaultSection:{control:`inline-radio`,options:[`profile`,`account`,`notifications`]}},args:{onSave:H(),onDeleteAccount:H()}},q=()=>G(document.body),J={decorators:K(1400),play:async({canvas:e,args:t})=>{await V(e.getAllByRole(`heading`,{level:1})).toHaveLength(1),await V(e.getByRole(`heading`,{level:1,name:`Settings`})).toBeVisible();let n=e.getByRole(`navigation`,{name:`Settings`});await V(G(n).getByRole(`link`,{name:`Profile`})).toHaveAttribute(`aria-current`,`page`);let r=e.getByRole(`form`,{name:`Profile`});await W(()=>V(r.getBoundingClientRect().left).toBeGreaterThan(n.getBoundingClientRect().right));let i=G(r).getByRole(`textbox`,{name:/Full name/});await U.clear(i),await U.type(i,`Ines O.`),await U.click(G(r).getByRole(`button`,{name:`Save`})),await V(t.onSave).toHaveBeenCalledWith(`profile`,V.objectContaining({name:`Ines O.`,username:`ines`})),await V(G(r).getByRole(`textbox`,{name:`Email`})).toHaveAttribute(`readonly`),await V(G(r).getByRole(`status`)).toHaveTextContent(`Saved.`),await U.type(G(r).getByRole(`textbox`,{name:/Full name/}),` draft`),await V(G(r).getByRole(`status`)).toBeEmptyDOMElement(),await U.click(G(r).getByRole(`button`,{name:`Discard`})),await V(G(r).getByRole(`textbox`,{name:/Full name/})).toHaveValue(`Ines O.`),await V(G(r).getByRole(`status`)).toHaveTextContent(`Changes discarded.`)}},Y={decorators:K(1400),play:async({canvas:e,args:t})=>{let n=e.getByRole(`navigation`,{name:`Settings`});await U.type(e.getByRole(`textbox`,{name:/Username/}),`-draft`);let r=G(n).getByRole(`link`,{name:`Notifications`});await U.click(r),await V(r).toHaveAttribute(`aria-current`,`page`),await V(r).toHaveFocus(),await V(e.queryByRole(`form`,{name:`Profile`})).toBeNull();let i=e.getByRole(`form`,{name:`Notifications`});await V(G(G(i).getByRole(`group`,{name:`By email`})).getAllByRole(`checkbox`)).toHaveLength(2),await U.click(G(i).getByRole(`checkbox`,{name:/Mentions/})),await U.click(G(i).getByRole(`radio`,{name:`Everything`})),await U.click(G(i).getByRole(`button`,{name:`Save`})),await V(t.onSave).toHaveBeenCalledWith(`notifications`,{comments:`on`,mentions:`on`,push:`everything`}),await U.click(G(n).getByRole(`link`,{name:`Profile`})),await V(e.getByRole(`textbox`,{name:/Username/})).toHaveValue(`ines-draft`)}},X={decorators:K(1400),args:{defaultSection:`account`},play:async({canvas:e,args:t})=>{let n=e.getByRole(`form`,{name:`Change password`}),r=G(n).getByLabelText(`Current password`),i=G(n).getByLabelText(`New password`);await V(r).toHaveAttribute(`autocomplete`,`current-password`),await V(i).toHaveAttribute(`autocomplete`,`new-password`);let a=G(n).getByRole(`button`,{name:`Change password`});await U.type(i,`short`),await U.click(a),await V(r).toHaveAttribute(`aria-invalid`,`true`),await V(r).toHaveAccessibleDescription(`Enter your current password.`),await V(i).toHaveAccessibleDescription(`Choose a password that meets every rule. At least 12 characters (not met)`),await V(r).toHaveFocus(),await V(t.onSave).not.toHaveBeenCalled(),await U.type(r,`hunter2`),await U.type(i,` but long enough`),await U.click(a),await V(t.onSave).toHaveBeenCalledWith(`account`,{currentPassword:`hunter2`,newPassword:`short but long enough`}),await V(G(n).getByRole(`status`)).toHaveTextContent(`Password changed.`),await V(G(n).getByLabelText(`New password`)).toHaveValue(``)}},Z={decorators:K(1400),args:{defaultSection:`account`},play:async({canvas:e,args:t})=>{let n=e.getByRole(`button`,{name:`Delete account`});await U.click(n);let r=await q().findByRole(`alertdialog`,{name:`Delete your account?`}),i=G(r).getByRole(`textbox`,{name:`To confirm, type ines`});await W(()=>V(i).toHaveFocus()),await V(G(r).getByRole(`button`,{name:`Delete account`})).toBeDisabled(),await U.click(G(r).getByRole(`button`,{name:`Cancel`})),await W(()=>V(q().queryByRole(`alertdialog`)).toBeNull()),await W(()=>V(n).toHaveFocus()),await V(t.onDeleteAccount).not.toHaveBeenCalled(),await U.click(n),r=await q().findByRole(`alertdialog`,{name:`Delete your account?`}),await U.type(G(r).getByRole(`textbox`),`ines`),await U.click(G(r).getByRole(`button`,{name:`Delete account`})),await V(t.onDeleteAccount).toHaveBeenCalledTimes(1),await W(()=>V(q().queryByRole(`alertdialog`)).toBeNull())}},Q={decorators:K(390),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Settings`}),n=e.getByRole(`form`,{name:`Profile`});await W(()=>V(n.getBoundingClientRect().top).toBeGreaterThanOrEqual(t.getBoundingClientRect().bottom)),await V(G(t).getAllByRole(`link`)).toHaveLength(3);for(let e of G(t).getAllByRole(`link`))await V(e).toBeVisible()}},Ee=[`Default`,`SwitchSections`,`Account`,`DeleteAccount`,`Narrow`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  play: async ({
    canvas,
    args
  }) => {
    await expect(canvas.getAllByRole('heading', {
      level: 1
    })).toHaveLength(1);
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Settings'
    })).toBeVisible();
    const nav = canvas.getByRole('navigation', {
      name: 'Settings'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Profile'
    })).toHaveAttribute('aria-current', 'page');
    const form = canvas.getByRole('form', {
      name: 'Profile'
    });
    // Wide: the nav is a column left of the section.
    await waitFor(() => expect(form.getBoundingClientRect().left).toBeGreaterThan(nav.getBoundingClientRect().right));
    const name = within(form).getByRole('textbox', {
      name: /Full name/
    });
    await userEvent.clear(name);
    await userEvent.type(name, 'Ines O.');
    await userEvent.click(within(form).getByRole('button', {
      name: 'Save'
    }));
    await expect(args.onSave).toHaveBeenCalledWith('profile', expect.objectContaining({
      name: 'Ines O.',
      username: 'ines'
    }));
    // The email is read-only: focusable and sent, not editable.
    await expect(within(form).getByRole('textbox', {
      name: 'Email'
    })).toHaveAttribute('readonly');
    await expect(within(form).getByRole('status')).toHaveTextContent('Saved.');

    // Discard goes back to the saved value, not the first one.
    await userEvent.type(within(form).getByRole('textbox', {
      name: /Full name/
    }), ' draft');
    await expect(within(form).getByRole('status')).toBeEmptyDOMElement();
    await userEvent.click(within(form).getByRole('button', {
      name: 'Discard'
    }));
    await expect(within(form).getByRole('textbox', {
      name: /Full name/
    })).toHaveValue('Ines O.');
    await expect(within(form).getByRole('status')).toHaveTextContent('Changes discarded.');
  }
}`,...J.parameters?.docs?.source},description:{story:`Profile: the nav beside the section, Save stores the form, Discard goes back to what was saved.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  play: async ({
    canvas,
    args
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Settings'
    });
    await userEvent.type(canvas.getByRole('textbox', {
      name: /Username/
    }), '-draft');
    const notifications = within(nav).getByRole('link', {
      name: 'Notifications'
    });
    await userEvent.click(notifications);
    await expect(notifications).toHaveAttribute('aria-current', 'page');
    // Focus stays on the link; the section follows it.
    await expect(notifications).toHaveFocus();
    await expect(canvas.queryByRole('form', {
      name: 'Profile'
    })).toBeNull();
    const form = canvas.getByRole('form', {
      name: 'Notifications'
    });
    await expect(within(within(form).getByRole('group', {
      name: 'By email'
    })).getAllByRole('checkbox')).toHaveLength(2);
    await userEvent.click(within(form).getByRole('checkbox', {
      name: /Mentions/
    }));
    await userEvent.click(within(form).getByRole('radio', {
      name: 'Everything'
    }));
    await userEvent.click(within(form).getByRole('button', {
      name: 'Save'
    }));
    await expect(args.onSave).toHaveBeenCalledWith('notifications', {
      comments: 'on',
      mentions: 'on',
      push: 'everything'
    });
    await userEvent.click(within(nav).getByRole('link', {
      name: 'Profile'
    }));
    await expect(canvas.getByRole('textbox', {
      name: /Username/
    })).toHaveValue('ines-draft');
  }
}`,...Y.parameters?.docs?.source},description:{story:`The nav swaps the section in place; a draft survives a look at another section.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  args: {
    defaultSection: 'account'
  },
  play: async ({
    canvas,
    args
  }) => {
    const form = canvas.getByRole('form', {
      name: 'Change password'
    });
    const current = within(form).getByLabelText('Current password');
    const next = within(form).getByLabelText('New password');
    await expect(current).toHaveAttribute('autocomplete', 'current-password');
    await expect(next).toHaveAttribute('autocomplete', 'new-password');

    // Both checked on send; focus goes to the first field to fix.
    const change = within(form).getByRole('button', {
      name: 'Change password'
    });
    await userEvent.type(next, 'short');
    await userEvent.click(change);
    await expect(current).toHaveAttribute('aria-invalid', 'true');
    await expect(current).toHaveAccessibleDescription('Enter your current password.');
    await expect(next).toHaveAccessibleDescription('Choose a password that meets every rule. At least 12 characters (not met)');
    await expect(current).toHaveFocus();
    await expect(args.onSave).not.toHaveBeenCalled();
    await userEvent.type(current, 'hunter2');
    await userEvent.type(next, ' but long enough');
    await userEvent.click(change);
    await expect(args.onSave).toHaveBeenCalledWith('account', {
      currentPassword: 'hunter2',
      newPassword: 'short but long enough'
    });
    await expect(within(form).getByRole('status')).toHaveTextContent('Password changed.');
    // The fields empty, so the password is not left on screen.
    await expect(within(form).getByLabelText('New password')).toHaveValue('');
  }
}`,...X.parameters?.docs?.source},description:{story:`Account: change the password, then the danger zone.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  args: {
    defaultSection: 'account'
  },
  play: async ({
    canvas,
    args
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Delete account'
    });
    await userEvent.click(trigger);
    let dialog = await body().findByRole('alertdialog', {
      name: 'Delete your account?'
    });
    const field = within(dialog).getByRole('textbox', {
      name: 'To confirm, type ines'
    });
    await waitFor(() => expect(field).toHaveFocus());
    await expect(within(dialog).getByRole('button', {
      name: 'Delete account'
    })).toBeDisabled();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(args.onDeleteAccount).not.toHaveBeenCalled();
    await userEvent.click(trigger);
    dialog = await body().findByRole('alertdialog', {
      name: 'Delete your account?'
    });
    await userEvent.type(within(dialog).getByRole('textbox'), 'ines');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Delete account'
    }));
    await expect(args.onDeleteAccount).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...Z.parameters?.docs?.source},description:{story:`Delete account asks first, and waits until the username is typed; Cancel keeps everything.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: box(390),
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Settings'
    });
    const form = canvas.getByRole('form', {
      name: 'Profile'
    });
    await waitFor(() => expect(form.getBoundingClientRect().top).toBeGreaterThanOrEqual(nav.getBoundingClientRect().bottom));
    await expect(within(nav).getAllByRole('link')).toHaveLength(3);
    for (const link of within(nav).getAllByRole('link')) await expect(link).toBeVisible();
  }
}`,...Q.parameters?.docs?.source},description:{story:`A phone: the nav stacks above the section, every link still in view.`,...Q.parameters?.docs?.description}}}})))()}export{$ as a,Ce as i,J as n,Q as r,X as t};