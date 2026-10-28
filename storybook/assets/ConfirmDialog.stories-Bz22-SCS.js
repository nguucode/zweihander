import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./Pictured-DOIgaTd2.js";import{a as l,i as u}from"./Modal-ByvhTgOp.js";import{i as d,n as f,r as p,t as m}from"./ConfirmDialog-D_hrnfs8.js";var h=t({Anatomy:()=>k,Default:()=>T,DoEverydayDelete:()=>j,DontTypeForSmall:()=>M,StateWaiting:()=>A,TypeToConfirm:()=>E,__namedExportsOrder:()=>N,anatomyParts:()=>O,default:()=>S}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{a(),s(),r(),f(),d(),l(),g=n(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Overlays/Confirm Dialog`,tags:[`beta`],component:m,args:{trigger:(0,g.jsx)(i,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. You cannot undo this.`,confirmLabel:`Delete project`,onConfirm:v(),onOpenChange:v()},argTypes:{title:{description:`The action, as a question: "Delete “Atlas”?". Names the dialog; the warning icon is not part of the name.`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Required: what happens, to what, and that it cannot be undone. Read as the dialog's description.`,control:`text`,table:{type:{summary:`ReactNode`}}},confirmLabel:{description:`Required: the destructive button, named after what it does ("Delete project"), never "OK".`,control:`text`,table:{type:{summary:`string`}}},cancelLabel:{description:`The safe button. It has focus when the dialog opens.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Cancel'`}}},confirmText:{description:`Type to confirm: adds a field, and the confirm button stays disabled until the reader types this exactly (case-sensitive, spaces around it ignored). Use the name of what is deleted. Only for a delete that is large and cannot be undone; empty means no field.`,control:`text`,table:{type:{summary:`string`}}},onConfirm:{description:`Called when the reader confirms, by the button or Enter in the field. The dialog then closes.`,control:!1,table:{type:{summary:`() => void`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1,table:{type:{summary:`ReactElement`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, Cancel, Escape and confirm.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where it renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},isModal:{description:"`false` renders a plain, non-modal dialog, for pictures of it such as the ones on these docs. A real confirm dialog stays modal.",control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},excludeStories:[`anatomyParts`]},C=()=>x(document.body),w={title:`Delete the “northwind” workspace?`,description:`Its 12 projects, 3,480 files and every member’s access are deleted for good. You cannot undo this.`,confirmLabel:`Delete workspace`,confirmText:`northwind`},T={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete project`});await y.click(n);let r=await C().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await _(r).toHaveAccessibleDescription(e.description);let i=x(r).getByRole(`button`,{name:`Cancel`});await b(()=>_(i).toHaveFocus()),await y.click(r.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await _(C().getByRole(`alertdialog`)).toBeVisible(),await y.click(i),await b(()=>_(C().queryByRole(`alertdialog`)).toBeNull()),await b(()=>_(n).toHaveFocus()),await _(e.onConfirm).not.toHaveBeenCalled(),await y.click(n),await C().findByRole(`alertdialog`),await y.keyboard(`{Escape}`),await b(()=>_(C().queryByRole(`alertdialog`)).toBeNull()),await _(e.onConfirm).not.toHaveBeenCalled(),await y.click(n);let a=await C().findByRole(`alertdialog`);await y.click(x(a).getByRole(`button`,{name:`Delete project`})),await _(e.onConfirm).toHaveBeenCalledTimes(1),await b(()=>_(C().queryByRole(`alertdialog`)).toBeNull()),await _(e.onOpenChange).toHaveBeenLastCalledWith(!1)}},E={args:{...w,trigger:(0,g.jsx)(i,{variant:`destructive`,children:`Delete workspace`})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete workspace`});await y.click(n);let r=await C().findByRole(`alertdialog`,{name:`Delete the “northwind” workspace?`}),i=x(r).getByRole(`textbox`,{name:`To confirm, type northwind`}),a=x(r).getByRole(`button`,{name:`Delete workspace`});await b(()=>_(i).toHaveFocus()),await _(a).toBeDisabled(),await y.type(i,`Northwind{Enter}`),await _(a).toBeDisabled(),await _(e.onConfirm).not.toHaveBeenCalled(),await y.clear(i),await y.type(i,` northwind `),await _(a).toBeEnabled(),await y.keyboard(`{Enter}`),await _(e.onConfirm).toHaveBeenCalledTimes(1),await b(()=>_(C().queryByRole(`alertdialog`)).toBeNull()),await y.click(n);let o=await C().findByRole(`alertdialog`);await _(x(o).getByRole(`textbox`)).toHaveValue(``),await _(x(o).getByRole(`button`,{name:`Delete workspace`})).toBeDisabled()}},D=({height:e=`19rem`,...t})=>(0,g.jsx)(c,{style:{position:`relative`,contain:`layout paint`,inlineSize:`min(26rem, 100vw - 6rem)`,blockSize:e,borderRadius:`var(--radius-panel)`},children:e=>(0,g.jsx)(m,{...t,trigger:void 0,open:!0,isModal:!1,container:e})}),O=[{name:`Warning icon`,selector:`.${p.icon}`,description:"In `--destructive`. Decorative: not part of the name."},{name:`Title`,selector:`[role="dialog"] h2`,description:`The action, as a question. Names the dialog.`},{name:`Consequence`,selector:`.${u.description}`,description:`What happens, to what, and that it cannot be undone.`},{name:`Type to confirm`,selector:`[role="dialog"] input`,description:"Optional, `confirmText`. The confirm button waits for an exact match."},{name:`Cancel`,selector:`.${u.footer} > :first-child`,description:`The safe choice. Focus starts here, or in the field.`},{name:`Confirm`,selector:`.${u.footer} > :last-child`,description:"`destructive`, named after what it does."}],k={tags:[`!dev`],args:w,render:D,play:async({canvasElement:e})=>{let t=await o(e,O);await _(t[1]).toHaveTextContent(`Delete the “northwind” workspace?`),await _(t[5]).toBeDisabled()}},A={tags:[`!dev`],args:w,render:D},j={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`},render:e=>D({...e,height:`14rem`})},M={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`,confirmText:`delete`},render:e=>D({...e,height:`19rem`})},N=[`Default`,`TypeToConfirm`,`anatomyParts`,`Anatomy`,`StateWaiting`,`DoEverydayDelete`,`DontTypeForSmall`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`An everyday delete: say what happens, then Cancel or the action.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`A large delete that cannot be undone: the button waits until the name is typed.`,...E.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Every part present, the dialog open in place.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: workspace,
  render: picture
}`,...A.parameters?.docs?.source},description:{story:`Specs, States: the field empty, the confirm button disabled.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment'
  },
  render: args => picture({
    ...args,
    height: '14rem'
  })
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Do: an everyday delete asks once, with no typing.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment',
    confirmText: 'delete'
  },
  render: args => picture({
    ...args,
    height: '19rem'
  })
}`,...M.parameters?.docs?.source},description:{story:`Guidelines, Don't: typing for a small delete teaches readers to type without reading.`,...M.parameters?.docs?.description}}}})))()}export{M as a,O as c,j as i,P as l,h as n,A as o,T as r,E as s,k as t};