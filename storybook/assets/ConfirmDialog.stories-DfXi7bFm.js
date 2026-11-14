import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-CAzJH1mZ.js";import{n as o,t as s}from"./icon-Cjfg2BMt.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,t as d}from"./Pictured-DOIgaTd2.js";import{r as f,t as p}from"./TextInput-BeBTUF8_.js";import{a as m,i as h,n as g,r as _,t as v}from"./Modal-Doq9jB4-.js";var y,b,x,S,C;function w(){return(w=e((()=>{y=`_dialog_jpjr0_2`,b=`_heading_jpjr0_6`,x=`_icon_jpjr0_13`,S=`_phrase_jpjr0_21`,C={dialog:y,heading:b,icon:x,phrase:S}})))()}function T({trigger:e,title:t,description:n,kind:r=`destructive`,confirmLabel:i,cancelLabel:o=`Cancel`,confirmText:c,onConfirm:l,open:u,defaultOpen:d=!1,onOpenChange:f,container:m,isModal:h=!0}){let[_,y]=(0,E.useState)(d),b=u??_,[x,S]=(0,E.useState)(``),[w,T]=(0,E.useState)(b);b!==w&&(T(b),b&&S(``));let O=e=>{y(e),f?.(e)},k=c?.trim()||void 0,A=k===void 0||x.trim()===k,j=()=>{A&&(l(),O(!1))};return(0,D.jsx)(v,{isAlert:h,isModal:h,closeOnBackdropClick:!1,hasCloseButton:!1,size:`sm`,trigger:e,container:m,open:b,onOpenChange:O,className:C.dialog,title:r===`destructive`?(0,D.jsxs)(`span`,{className:C.heading,children:[(0,D.jsx)(s,{name:`warning`,className:C.icon}),t]}):t,description:n,footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g,{render:(0,D.jsx)(a,{variant:`secondary`,appearance:`outlined`}),children:o}),(0,D.jsx)(a,{variant:r===`destructive`?`destructive`:`primary`,disabled:!A,onClick:j,children:i})]}),children:k!==void 0&&(0,D.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),j()},children:(0,D.jsx)(p,{label:(0,D.jsxs)(D.Fragment,{children:[`To confirm, type `,(0,D.jsx)(`strong`,{className:C.phrase,children:k})]}),value:x,onChange:e=>S(e.target.value),autoComplete:`off`,autoCapitalize:`off`,spellCheck:!1,isFullWidth:!0})})})}var E,D;function O(){return(O=e((()=>{E=n(),o(),i(),f(),_(),w(),D=r(),T.__docgenInfo={description:`Asks before an action, usually one that cannot be undone, in an alert dialog.`,methods:[],displayName:`ConfirmDialog`,props:{trigger:{required:!1,tsType:{name:`ReactElement`},description:"The button that opens it. Omit when `open` is controlled from elsewhere."},title:{required:!0,tsType:{name:`ReactNode`},description:`The action, as a question: "Delete “Atlas”?". Names the dialog.`},description:{required:!0,tsType:{name:`ReactNode`},description:`What happens, and that it cannot be undone. Describes the dialog.`},kind:{required:!1,tsType:{name:`union`,raw:`'default' | 'destructive'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'destructive'`}]},description:"`destructive` (the default): a warning icon and a destructive confirm\nbutton, for an action that cannot be undone. `default`: no icon and a\nprimary confirm button, for a decision that destroys nothing.",defaultValue:{value:`'destructive'`,computed:!1}},confirmLabel:{required:!0,tsType:{name:`string`},description:`The confirm button, named after what it does: "Delete project".`},cancelLabel:{required:!1,tsType:{name:`string`},description:`The safe button.`,defaultValue:{value:`'Cancel'`,computed:!1}},confirmText:{required:!1,tsType:{name:`string`},description:`Type to confirm: the confirm button stays disabled until the reader types
this exactly (case-sensitive, spaces around it ignored). Use the name of
what is deleted. Leave it out, or empty, for an everyday delete.`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the reader confirms. The dialog closes.`},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where it renders instead of `<body>`."},isModal:{required:!1,tsType:{name:`boolean`},description:"`false` for a picture of the dialog, as on the docs: a plain dialog, not modal.",defaultValue:{value:`true`,computed:!1}}}}})))()}var k=t({Anatomy:()=>U,Default:()=>z,DoEverydayDelete:()=>K,DontTypeForSmall:()=>q,KindDefault:()=>W,StateWaiting:()=>G,TypeToConfirm:()=>B,__namedExportsOrder:()=>J,anatomyParts:()=>H,default:()=>I}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{c(),u(),i(),O(),w(),m(),A=r(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/Overlays/Confirm Dialog`,tags:[`beta`],component:T,args:{trigger:(0,A.jsx)(a,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. You cannot undo this.`,confirmLabel:`Delete project`,onConfirm:M(),onOpenChange:M()},argTypes:{title:{description:`The action, as a question: "Delete “Atlas”?". Names the dialog; the warning icon is not part of the name.`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Required: what happens, to what, and that it cannot be undone. Read as the dialog's description.`,control:`text`,table:{type:{summary:`ReactNode`}}},kind:{description:"`destructive`: a warning icon and a destructive confirm button, for an action that cannot be undone. `default`: no icon and a primary confirm button, for a decision that destroys nothing (sign out, leave without saving).",control:`inline-radio`,options:[`default`,`destructive`],table:{type:{summary:`'default' | 'destructive'`},defaultValue:{summary:`'destructive'`}}},confirmLabel:{description:`Required: the confirm button, named after what it does ("Delete project"), never "OK".`,control:`text`,table:{type:{summary:`string`}}},cancelLabel:{description:`The safe button. It has focus when the dialog opens.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Cancel'`}}},confirmText:{description:`Type to confirm: adds a field, and the confirm button stays disabled until the reader types this exactly (case-sensitive, spaces around it ignored). Use the name of what is deleted. Only for a delete that is large and cannot be undone; empty means no field.`,control:`text`,table:{type:{summary:`string`}}},onConfirm:{description:`Called when the reader confirms, by the button or Enter in the field. The dialog then closes.`,control:!1,table:{type:{summary:`() => void`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1,table:{type:{summary:`ReactElement`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, Cancel, Escape and confirm.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where it renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},isModal:{description:"`false` renders a plain, non-modal dialog, for pictures of it such as the ones on these docs. A real confirm dialog stays modal.",control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},excludeStories:[`anatomyParts`]},L=()=>F(document.body),R={title:`Delete the “northwind” workspace?`,description:`Its 12 projects, 3,480 files and every member’s access are deleted for good. You cannot undo this.`,confirmLabel:`Delete workspace`,confirmText:`northwind`},z={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete project`});await N.click(n);let r=await L().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await j(r).toHaveAccessibleDescription(e.description);let i=F(r).getByRole(`button`,{name:`Cancel`});await P(()=>j(i).toHaveFocus()),await N.click(r.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await j(L().getByRole(`alertdialog`)).toBeVisible(),await N.click(i),await P(()=>j(L().queryByRole(`alertdialog`)).toBeNull()),await P(()=>j(n).toHaveFocus()),await j(e.onConfirm).not.toHaveBeenCalled(),await N.click(n),await L().findByRole(`alertdialog`),await N.keyboard(`{Escape}`),await P(()=>j(L().queryByRole(`alertdialog`)).toBeNull()),await j(e.onConfirm).not.toHaveBeenCalled(),await N.click(n);let a=await L().findByRole(`alertdialog`);await N.click(F(a).getByRole(`button`,{name:`Delete project`})),await j(e.onConfirm).toHaveBeenCalledTimes(1),await P(()=>j(L().queryByRole(`alertdialog`)).toBeNull()),await j(e.onOpenChange).toHaveBeenLastCalledWith(!1)}},B={args:{...R,trigger:(0,A.jsx)(a,{variant:`destructive`,children:`Delete workspace`})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete workspace`});await N.click(n);let r=await L().findByRole(`alertdialog`,{name:`Delete the “northwind” workspace?`}),i=F(r).getByRole(`textbox`,{name:`To confirm, type northwind`}),a=F(r).getByRole(`button`,{name:`Delete workspace`});await P(()=>j(i).toHaveFocus()),await j(a).toBeDisabled(),await N.type(i,`Northwind{Enter}`),await j(a).toBeDisabled(),await j(e.onConfirm).not.toHaveBeenCalled(),await N.clear(i),await N.type(i,` northwind `),await j(a).toBeEnabled(),await N.keyboard(`{Enter}`),await j(e.onConfirm).toHaveBeenCalledTimes(1),await P(()=>j(L().queryByRole(`alertdialog`)).toBeNull()),await N.click(n);let o=await L().findByRole(`alertdialog`);await j(F(o).getByRole(`textbox`)).toHaveValue(``),await j(F(o).getByRole(`button`,{name:`Delete workspace`})).toBeDisabled()}},V=({height:e=`17rem`,...t})=>(0,A.jsx)(d,{style:{position:`relative`,contain:`layout paint`,inlineSize:`min(27rem, 100vw - 6rem)`,blockSize:e,borderRadius:`var(--radius-panel)`},children:e=>(0,A.jsx)(T,{...t,trigger:void 0,open:!0,isModal:!1,container:e})}),H=[{name:`Warning icon`,selector:`.${C.icon}`,description:"In `--color-background-danger-bold`. Decorative: not part of the name."},{name:`Title`,selector:`[role="dialog"] h2`,description:`The action, as a question. Names the dialog.`},{name:`Consequence`,selector:`.${h.description}`,description:`What happens, to what, and that it cannot be undone.`},{name:`Type to confirm`,selector:`[role="dialog"] input`,description:"Optional, `confirmText`. The confirm button waits for an exact match."},{name:`Cancel`,selector:`.${h.footer} > :first-child`,description:`The safe choice. Focus starts here, or in the field.`},{name:`Confirm`,selector:`.${h.footer} > :last-child`,description:"`destructive`, named after what it does."}],U={tags:[`!dev`],args:R,render:V,play:async({canvasElement:e})=>{let t=await l(e,H);await j(t[1]).toHaveTextContent(`Delete the “northwind” workspace?`),await j(t[5]).toBeDisabled()}},W={tags:[`!dev`],args:{kind:`default`,title:`Sign out of every device?`,description:`You stay signed in here. Everywhere else asks for your password again.`,confirmLabel:`Sign out`},render:e=>V({...e,height:`12rem`}),play:async({canvasElement:e})=>{let t=F(e).getByRole(`dialog`);await j(t.querySelector(`.${C.icon}`)).toBeNull(),await j(getComputedStyle(t.querySelector(`.${h.heading}`)).rowGap).toBe(`16px`)}},G={tags:[`!dev`],args:R,render:V},K={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`},render:e=>V({...e,height:`12rem`})},q={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`,confirmText:`delete`},render:e=>V({...e,height:`17rem`})},J=[`Default`,`TypeToConfirm`,`anatomyParts`,`Anatomy`,`KindDefault`,`StateWaiting`,`DoEverydayDelete`,`DontTypeForSmall`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Delete project'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete “Atlas”?'
    });
    await expect(dialog).toHaveAccessibleDescription(args.description as string);
    // The safe choice has focus, so Enter cannot delete.
    const cancel = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    await waitFor(() => expect(cancel).toHaveFocus());
    // A press outside does nothing.
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await expect(body().getByRole('alertdialog')).toBeVisible();
    await userEvent.click(cancel);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(args.onConfirm).not.toHaveBeenCalled();
    // Escape closes it too.
    await userEvent.click(trigger);
    await body().findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await expect(args.onConfirm).not.toHaveBeenCalled();
    // The action confirms, once, and closes.
    await userEvent.click(trigger);
    const again = await body().findByRole('alertdialog');
    await userEvent.click(within(again).getByRole('button', {
      name: 'Delete project'
    }));
    await expect(args.onConfirm).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
  }
}`,...z.parameters?.docs?.source},description:{story:`An everyday delete: say what happens, then Cancel or the action.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...workspace,
    trigger: <Button variant="destructive">Delete workspace</Button>
  },
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Delete workspace'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete the “northwind” workspace?'
    });
    const field = within(dialog).getByRole('textbox', {
      name: 'To confirm, type northwind'
    });
    const confirm = within(dialog).getByRole('button', {
      name: 'Delete workspace'
    });
    // The field is the first thing to tab to, so it has focus.
    await waitFor(() => expect(field).toHaveFocus());
    await expect(confirm).toBeDisabled();
    // Case counts; Enter before a match does nothing.
    await userEvent.type(field, 'Northwind{Enter}');
    await expect(confirm).toBeDisabled();
    await expect(args.onConfirm).not.toHaveBeenCalled();
    await userEvent.clear(field);
    await userEvent.type(field, ' northwind ');
    await expect(confirm).toBeEnabled();
    // Enter in the field confirms once it matches.
    await userEvent.keyboard('{Enter}');
    await expect(args.onConfirm).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    // Reopened, the field starts empty again.
    await userEvent.click(trigger);
    const again = await body().findByRole('alertdialog');
    await expect(within(again).getByRole('textbox')).toHaveValue('');
    await expect(within(again).getByRole('button', {
      name: 'Delete workspace'
    })).toBeDisabled();
  }
}`,...B.parameters?.docs?.source},description:{story:`A large delete that cannot be undone: the button waits until the name is typed.`,...B.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: workspace,
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Delete the “northwind” workspace?');
    await expect(found[5]).toBeDisabled();
  }
}`,...U.parameters?.docs?.source},description:{story:`Every part present, the dialog open in place.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    kind: 'default',
    title: 'Sign out of every device?',
    description: 'You stay signed in here. Everywhere else asks for your password again.',
    confirmLabel: 'Sign out'
  },
  render: args => picture({
    ...args,
    height: '12rem'
  }),
  play: async ({
    canvasElement
  }) => {
    const dialog = within(canvasElement).getByRole('dialog');
    await expect(dialog.querySelector(\`.\${styles.icon}\`)).toBeNull();
    // 16px from the title to the description, where a Modal has 8px.
    await expect(getComputedStyle(dialog.querySelector(\`.\${modalStyles.heading}\`)!).rowGap).toBe('16px');
  }
}`,...W.parameters?.docs?.source},description:{story:'`kind="default"`: a decision that destroys nothing. No icon, a primary confirm button.',...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: workspace,
  render: picture
}`,...G.parameters?.docs?.source},description:{story:`Specs, States: the field empty, the confirm button disabled.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment'
  },
  render: args => picture({
    ...args,
    height: '12rem'
  })
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Do: an everyday delete asks once, with no typing.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment',
    confirmText: 'delete'
  },
  render: args => picture({
    ...args,
    height: '17rem'
  })
}`,...q.parameters?.docs?.source},description:{story:`Guidelines, Don't: typing for a small delete teaches readers to type without reading.`,...q.parameters?.docs?.description}}}})))()}export{q as a,B as c,K as i,H as l,k as n,W as o,z as r,G as s,U as t,Y as u};