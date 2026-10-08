import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Button-BdtJKtga.js";import{n as a,t as o}from"./Select-DumeCDxx.js";import{n as s,t as c}from"./TextInput-ceLmDhn8.js";import{n as l,r as u,t as d}from"./Modal-BqfntHMf.js";var f=t({Alert:()=>C,Default:()=>x,Dismissing:()=>S,Long:()=>T,WithSelect:()=>w,__namedExportsOrder:()=>E,default:()=>y}),p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),a(),s(),u(),p=n(),{expect:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Overlays/Modal`,component:d,parameters:{a11y:{test:`error`}},args:{trigger:(0,p.jsx)(i,{children:`Edit profile`}),title:`Edit profile`,description:`Changes show on your public page straight away.`,children:(0,p.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,p.jsx)(c,{label:`Name`,defaultValue:`Sam Rivera`,isFullWidth:!0}),(0,p.jsx)(c,{label:`Title`,defaultValue:`Product designer`,isFullWidth:!0})]}),footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{render:(0,p.jsx)(i,{variant:`secondary`}),children:`Cancel`}),(0,p.jsx)(i,{children:`Save`})]}),onOpenChange:h()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},trigger:{control:!1},children:{control:!1},footer:{control:!1},initialFocus:{control:!1}}},b=()=>v(document.body),x={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Edit profile`});await g.click(n);let r=await b().findByRole(`dialog`,{name:`Edit profile`});await m(r).toHaveAccessibleDescription(`Changes show on your public page straight away.`),await m(n.closest(`[aria-hidden="true"]`)).not.toBeNull(),await m(getComputedStyle(document.body).overflow).toBe(`hidden`),await _(()=>m(r.contains(document.activeElement)).toBe(!0)),await m(e.onOpenChange).toHaveBeenLastCalledWith(!0),await g.click(v(r).getByRole(`button`,{name:`Cancel`})),await _(()=>m(b().queryByRole(`dialog`)).toBeNull()),await m(n).toHaveFocus()}},S={play:async({canvas:e})=>{await g.click(e.getByRole(`button`,{name:`Edit profile`}));let t=await b().findByRole(`dialog`);await g.keyboard(`{Escape}`),await _(()=>m(b().queryByRole(`dialog`)).toBeNull()),await g.click(e.getByRole(`button`,{name:`Edit profile`})),t=await b().findByRole(`dialog`),await g.click(t.parentElement,{clientX:2,clientY:2}),await _(()=>m(b().queryByRole(`dialog`)).toBeNull())}},C={args:{isAlert:!0,trigger:(0,p.jsx)(i,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. This cannot be undone.`,children:void 0,size:`sm`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{render:(0,p.jsx)(i,{variant:`secondary`}),children:`Keep project`}),(0,p.jsx)(i,{variant:`destructive`,children:`Delete`})]})},play:async({canvas:e})=>{await g.click(e.getByRole(`button`,{name:`Delete project`}));let t=await b().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await m(v(t).queryByRole(`button`,{name:`Close`})).toBeNull(),await g.click(t.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await m(b().getByRole(`alertdialog`)).toBeVisible(),await g.click(v(t).getByRole(`button`,{name:`Keep project`})),await _(()=>m(b().queryByRole(`alertdialog`)).toBeNull()),await g.click(e.getByRole(`button`,{name:`Delete project`})),await b().findByRole(`alertdialog`),await g.keyboard(`{Escape}`),await _(()=>m(b().queryByRole(`alertdialog`)).toBeNull())}},w={args:{title:`Invite people`,description:void 0,trigger:(0,p.jsx)(i,{children:`Invite`}),children:(0,p.jsx)(o,{label:`Role`,options:[`Viewer`,`Commenter`,`Editor`],defaultValue:`Viewer`,isFullWidth:!0}),footer:(0,p.jsx)(i,{children:`Send invites`})},play:async({canvas:e})=>{await g.click(e.getByRole(`button`,{name:`Invite`}));let t=await b().findByRole(`dialog`);await g.click(v(t).getByRole(`combobox`,{name:`Role`}));let n=await b().findByRole(`option`,{name:`Editor`});await _(()=>{let e=n.getBoundingClientRect(),t=document.elementFromPoint(e.x+e.width/2,e.y+e.height/2);return m(n.contains(t)).toBe(!0)})}},T={args:{title:`Terms of service`,description:void 0,size:`lg`,trigger:(0,p.jsx)(i,{appearance:`outlined`,children:`Read the terms`}),children:(0,p.jsx)(`div`,{children:Array.from({length:12},(e,t)=>(0,p.jsxs)(`p`,{style:{margin:`0 0 var(--space-3)`},children:[t+1,`. These terms govern your use of the service. By creating an account you agree to them, and to the privacy notice that explains what we collect and why.`]},t))}),footer:(0,p.jsx)(l,{render:(0,p.jsx)(i,{}),children:`Accept`})},play:async({canvas:e})=>{await g.click(e.getByRole(`button`,{name:`Read the terms`}));let t=await b().findByRole(`dialog`),n=v(t).getByRole(`button`,{name:`Accept`});await _(()=>m(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight))}},E=[`Default`,`Dismissing`,`Alert`,`WithSelect`,`Long`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Edit profile'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Edit profile'
    });
    await expect(dialog).toHaveAccessibleDescription('Changes show on your public page straight away.');
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull();
    await expect(getComputedStyle(document.body).overflow).toBe('hidden');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Cancel is a ModalClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    let dialog = await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // A press outside the popup closes it too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    dialog = await body().findByRole('dialog');
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isAlert: true,
    trigger: <Button variant="destructive">Delete project</Button>,
    title: 'Delete “Atlas”?',
    description: 'Its 214 files and every comment on them are deleted for everyone. This cannot be undone.',
    children: undefined,
    size: 'sm',
    footer: <>
        <ModalClose render={<Button variant="secondary" />}>Keep project</ModalClose>
        <Button variant="destructive">Delete</Button>
      </>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete “Atlas”?'
    });
    await expect(within(dialog).queryByRole('button', {
      name: 'Close'
    })).toBeNull();
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await expect(body().getByRole('alertdialog')).toBeVisible();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Keep project'
    }));
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    // Escape still closes it.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    await body().findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...C.parameters?.docs?.source},description:{story:`A decision that must be made: role="alertdialog", no close button, and a press outside does nothing.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invite people',
    description: undefined,
    trigger: <Button>Invite</Button>,
    children: <Select label="Role" options={['Viewer', 'Commenter', 'Editor']} defaultValue="Viewer" isFullWidth />,
    footer: <Button>Send invites</Button>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Invite'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('combobox', {
      name: 'Role'
    }));
    const option = await body().findByRole('option', {
      name: 'Editor'
    });
    await waitFor(() => {
      const r = option.getBoundingClientRect();
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return expect(option.contains(hit)).toBe(true);
    });
  }
}`,...w.parameters?.docs?.source},description:{story:`A Select opened inside a modal lists its options above it.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms of service',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">Read the terms</Button>,
    children: <div>
        {Array.from({
        length: 12
      }, (_, i) => <p key={i} style={{
        margin: '0 0 var(--space-3)'
      }}>
            {i + 1}. These terms govern your use of the service. By creating an account you agree to them, and to the
            privacy notice that explains what we collect and why.
          </p>)}
      </div>,
    footer: <ModalClose render={<Button />}>Accept</ModalClose>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Read the terms'
    }));
    const dialog = await body().findByRole('dialog');
    // The body scrolls; the footer stays on screen.
    const accept = within(dialog).getByRole('button', {
      name: 'Accept'
    });
    await waitFor(() => expect(accept.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight));
  }
}`,...T.parameters?.docs?.source}}}})))()}export{f as a,T as i,x as n,w as o,S as r,D as s,C as t};