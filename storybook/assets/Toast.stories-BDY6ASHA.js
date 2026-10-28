import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{r as c,t as l}from"./Modal-ByvhTgOp.js";import{n as u,r as d,t as f}from"./Toast-Rp8LWS30.js";var p=t({Anatomy:()=>W,Default:()=>j,DoUndo:()=>G,DontMustAct:()=>K,FromModal:()=>L,Pending:()=>H,PromiseToast:()=>P,StateExample:()=>V,Static:()=>z,Timeout:()=>N,TopCenter:()=>I,Update:()=>F,Variants:()=>M,VariantsStatic:()=>B,__namedExportsOrder:()=>q,anatomyParts:()=>U,default:()=>O});function m({options:e,label:t=`Show toast`}){let n=d();return(0,x.jsx)(a,{onClick:()=>n.add(e),children:t})}function h(){let e=d();return(0,x.jsx)(a,{onClick:()=>e.promise(new Promise(e=>setTimeout(e,600)),{loading:`Uploading 3 files…`,success:`Uploaded 3 files`,error:`Upload failed`}),children:`Upload`})}function g(){let e=d();return(0,x.jsx)(a,{onClick:()=>{let t=e.add({variant:`success`,title:`Moved`,action:{label:`Undo`,onClick:()=>{}}});setTimeout(()=>e.update(t,{description:`3 files`}),100)},children:`Move`})}function _(){let e=d();return(0,x.jsx)(l,{trigger:(0,x.jsx)(a,{children:`Open modal`}),title:`Share`,footer:(0,x.jsx)(a,{onClick:()=>e.add({variant:`success`,title:`Link copied`}),children:`Copy link`})})}function v({toasts:e,pending:t}){let n=d();return(0,b.useEffect)(()=>{for(let t of e)n.add({timeout:0,...t});return t&&n.promise(new Promise(()=>{}),{loading:t,success:``,error:``}),()=>n.close()},[]),null}function y({toasts:e,pending:t,height:n=`7rem`}){let[r,i]=(0,b.useState)(null);return(0,x.jsxs)(`div`,{style:{position:`relative`,blockSize:n},children:[(0,x.jsx)(`svg`,{"aria-hidden":`true`,style:{display:`block`,inlineSize:`26rem`,maxInlineSize:`100%`,blockSize:0}}),(0,x.jsx)(`div`,{ref:i,style:{position:`absolute`,inset:0,containerType:`inline-size`,transform:`translateZ(0)`},children:r&&(0,x.jsx)(f,{container:r,placement:`top-left`,limit:e.length+ +!!t,children:(0,x.jsx)(v,{toasts:e,pending:t})})})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{b=n(),o(),i(),c(),u(),x=r(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=C(),O={title:`Components/Notifications/Toast`,tags:[`beta`],component:f,args:{children:null,placement:`bottom-right`,timeout:5e3,limit:3},argTypes:{children:{description:"The app. `useToast()` works anywhere inside it.",control:!1,table:{type:{summary:`ReactNode`}}},placement:{description:`The corner, or edge centre, toasts appear in. They swipe away toward the nearest edge.`,control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],table:{type:{summary:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`},defaultValue:{summary:`'bottom-right'`}}},timeout:{description:"Default time on screen, in milliseconds. A toast can set its own; `0` keeps it until dismissed.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5000`}}},limit:{description:`Toasts shown at once; newer ones wait until one closes.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`3`}}},container:{description:"Where the toasts render. In an element with a `transform` they sit in its corner instead of the window's; in a size container (`container-type: inline-size`) they fit its width.",control:!1,table:{type:{summary:`HTMLElement | RefObject<HTMLElement | null> | null`},defaultValue:{summary:`document.body`}}}},excludeStories:[`anatomyParts`]},k=()=>E(document.body),A={display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`},j={render:e=>(0,x.jsx)(f,{...e,children:(0,x.jsx)(m,{options:{title:`File moved to Trash`,description:`Q3 report.pdf`,action:{label:`Undo`,onClick:D}}})}),play:async({canvas:e})=>{D.mockClear(),await w.click(e.getByRole(`button`,{name:`Show toast`}));let t=(await k().findByText(`File moved to Trash`,{},{timeout:3e3})).closest(`[data-base-ui-toast], [role]`);await T(()=>S(k().getByText(`Q3 report.pdf`)).toBeVisible()),await w.click(await k().findByRole(`button`,{name:`Undo`})),await S(D).toHaveBeenCalledOnce(),await w.click(E(t).getByRole(`button`,{name:`Dismiss`})),await T(()=>S(k().queryByText(`File moved to Trash`)).toBeNull(),{timeout:3e3})}},M={render:e=>(0,x.jsx)(f,{...e,limit:5,children:(0,x.jsx)(`div`,{style:A,children:[`default`,`info`,`success`,`warning`,`danger`].map(e=>(0,x.jsx)(m,{label:e,options:{variant:e,title:`${e[0].toUpperCase()}${e.slice(1)}`,description:`Something happened.`}},e))})}),play:async({canvas:e})=>{for(let t of[`default`,`info`,`success`,`warning`,`danger`])await w.click(e.getByRole(`button`,{name:t}));await T(()=>S(document.querySelectorAll(`[role="dialog"], [role="alertdialog"]`)).toHaveLength(5)),await S(document.querySelector(`[role="alertdialog"]`)).toHaveTextContent(`Danger`)}},N={render:e=>(0,x.jsx)(f,{...e,timeout:400,children:(0,x.jsx)(m,{options:{title:`Saved`}})}),play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Show toast`})),await k().findByText(`Saved`),await T(()=>S(k().queryByText(`Saved`)).toBeNull(),{timeout:3e3})}},P={render:e=>(0,x.jsx)(f,{...e,children:(0,x.jsx)(h,{})}),play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Upload`})),await k().findByText(`Uploading 3 files…`),await S(await k().findByRole(`dialog`,{name:`Uploaded 3 files`},{timeout:3e3})).toBeVisible()}},F={render:e=>(0,x.jsx)(f,{...e,children:(0,x.jsx)(g,{})}),play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Move`})),await k().findByText(`3 files`,{},{timeout:3e3});let t=document.querySelector(`[role="dialog"]`);await S(t).toHaveAttribute(`data-type`,`success`),await S(E(t).getByRole(`button`,{name:`Undo`})).toBeVisible()}},I={args:{placement:`top-center`},render:e=>(0,x.jsx)(f,{...e,children:(0,x.jsx)(m,{options:{variant:`success`,title:`Invite sent`}})})},L={render:e=>(0,x.jsx)(f,{...e,children:(0,x.jsx)(_,{})}),play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Open modal`}));let t=await k().findByRole(`dialog`);await w.click(E(t).getByRole(`button`,{name:`Copy link`}));let n=await k().findByText(`Link copied`);await S(n.closest(`[aria-hidden="true"]`)).toBeNull(),await T(()=>{let e=n.getBoundingClientRect();return S(n.contains(document.elementFromPoint(e.x+2,e.y+e.height/2))).toBe(!0)})}},R={title:`File moved to Trash`,description:`Q3 report.pdf`,action:{label:`Undo`,onClick:()=>{}}},z={render:()=>(0,x.jsx)(y,{toasts:[R]}),play:async({canvasElement:e})=>{let t=await E(e).findByRole(`dialog`,{},{timeout:3e3});await S(t).toHaveTextContent(`File moved to Trash`)}},B={render:()=>(0,x.jsx)(y,{height:`22rem`,toasts:[`default`,`info`,`success`,`warning`,`danger`].map(e=>({variant:e,title:`${e[0].toUpperCase()}${e.slice(1)}`,description:`Something happened.`,priority:`low`}))}),play:async({canvasElement:e})=>{await T(()=>S(e.querySelectorAll(`[role="dialog"], [role="alertdialog"]`)).toHaveLength(5))}},V={tags:[`!dev`],render:()=>(0,x.jsx)(y,{toasts:[R],height:`8.5rem`})},H={tags:[`!dev`],render:()=>(0,x.jsx)(y,{toasts:[],pending:`Uploading 3 files…`,height:`5.5rem`})},U=[{name:`Container`,selector:`[role="dialog"]`,description:`The surface, in the opposite appearance to the page.`},{name:`Icon`,selector:`[role="dialog"] > span[aria-hidden="true"]`,description:"The variant's filled icon; none for `default`, a spinner while pending."},{name:`Title`,selector:`[role="dialog"] h2`,description:`Semibold. What happened.`},{name:`Description`,selector:`[role="dialog"] p`,description:`Optional, muted.`},{name:`Action`,selector:`[role="dialog"] button:not([aria-label])`,description:`Optional, one text button, e.g. "Undo".`},{name:`Close button`,selector:`[role="dialog"] button[aria-label="Dismiss"]`,description:`Always there.`}],W={tags:[`!dev`],render:()=>(0,x.jsx)(y,{toasts:[{...R,variant:`success`}]}),play:async({canvasElement:e})=>{await E(e).findByRole(`dialog`,{},{timeout:3e3});let t=await s(e,U);await S(t[2]).toHaveTextContent(`File moved to Trash`),await S(t[4]).toHaveTextContent(`Undo`)}},G={tags:[`!dev`],render:()=>(0,x.jsx)(y,{toasts:[R]})},K={tags:[`!dev`],render:()=>(0,x.jsx)(y,{toasts:[{variant:`warning`,title:`Your card expires tomorrow`,description:`Update it to keep your plan.`,action:{label:`Update card`,onClick:()=>{}}}]})},q=[`Default`,`Variants`,`Timeout`,`PromiseToast`,`Update`,`TopCenter`,`FromModal`,`Static`,`VariantsStatic`,`StateExample`,`Pending`,`anatomyParts`,`Anatomy`,`DoUndo`,`DontMustAct`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <Demo options={{
      title: 'File moved to Trash',
      description: 'Q3 report.pdf',
      action: {
        label: 'Undo',
        onClick: onUndo
      }
    }} />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    onUndo.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show toast'
    }));
    const title = await body().findByText('File moved to Trash', {}, {
      timeout: 3000
    });
    const toast = title.closest('[data-base-ui-toast], [role]') as HTMLElement;
    // It fades in from opacity 0.
    await waitFor(() => expect(body().getByText('Q3 report.pdf')).toBeVisible());
    await userEvent.click(await body().findByRole('button', {
      name: 'Undo'
    }));
    await expect(onUndo).toHaveBeenCalledOnce();
    await userEvent.click(within(toast).getByRole('button', {
      name: 'Dismiss'
    }));
    await waitFor(() => expect(body().queryByText('File moved to Trash')).toBeNull(), {
      timeout: 3000
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args} limit={5}>
      <div style={row}>
        {(['default', 'info', 'success', 'warning', 'danger'] as const).map(variant => <Demo key={variant} label={variant} options={{
        variant,
        title: \`\${variant[0].toUpperCase()}\${variant.slice(1)}\`,
        description: 'Something happened.'
      }} />)}
      </div>
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    for (const v of ['default', 'info', 'success', 'warning', 'danger']) await userEvent.click(canvas.getByRole('button', {
      name: v
    }));
    // Each toast is a non-modal dialog; all five fit under the limit.
    // All five fit under the limit. Danger is high priority: an alertdialog
    // whose text Base UI announces assertively through a separate live region.
    await waitFor(() => expect(document.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5));
    await expect(document.querySelector('[role="alertdialog"]')).toHaveTextContent('Danger');
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args} timeout={400}>
      <Demo options={{
      title: 'Saved'
    }} />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show toast'
    }));
    await body().findByText('Saved');
    await waitFor(() => expect(body().queryByText('Saved')).toBeNull(), {
      timeout: 3000
    });
  }
}`,...N.parameters?.docs?.source},description:{story:"Closes itself after `timeout`.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <PromiseDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Upload'
    }));
    await body().findByText('Uploading 3 files…');
    // Named by its message, since promise() gives it no title.
    await expect(await body().findByRole('dialog', {
      name: 'Uploaded 3 files'
    }, {
      timeout: 3000
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`A loading toast that becomes success or danger when the promise settles.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <UpdateDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Move'
    }));
    await body().findByText('3 files', {}, {
      timeout: 3000
    });
    const toast = document.querySelector('[role="dialog"]')!;
    await expect(toast).toHaveAttribute('data-type', 'success');
    await expect(within(toast as HTMLElement).getByRole('button', {
      name: 'Undo'
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:`A partial update changes only what it names: the variant and action stay.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top-center'
  },
  render: args => <ToastProvider {...args}>
      <Demo options={{
      variant: 'success',
      title: 'Invite sent'
    }} />
    </ToastProvider>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <ModalDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open modal'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Copy link'
    }));
    const title = await body().findByText('Link copied');
    // Not hidden from assistive tech by the modal, and drawn on top of it.
    await expect(title.closest('[aria-hidden="true"]')).toBeNull();
    await waitFor(() => {
      const r = title.getBoundingClientRect();
      return expect(title.contains(document.elementFromPoint(r.x + 2, r.y + r.height / 2))).toBe(true);
    });
  }
}`,...L.parameters?.docs?.source},description:{story:`A toast raised from inside a modal shows above it and stays reachable.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Preview toasts={[moved]} />,
  play: async ({
    canvasElement
  }) => {
    // Rendered into the story, not the page's corner.
    const toast = await within(canvasElement).findByRole('dialog', {}, {
      timeout: 3000
    });
    await expect(toast).toHaveTextContent('File moved to Trash');
  }
}`,...z.parameters?.docs?.source},description:{story:`One toast in place, every part showing.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Preview height="22rem" toasts={(['default', 'info', 'success', 'warning', 'danger'] as const).map(variant => ({
    variant,
    title: \`\${variant[0].toUpperCase()}\${variant.slice(1)}\`,
    description: 'Something happened.',
    // A picture of each variant. A high-priority toast hides itself from
    // assistive tech until focused (Base UI announces its text through a
    // live region of its own), which axe flags in a static preview.
    priority: 'low'
  }))} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5));
  }
}`,...B.parameters?.docs?.source},description:{story:`Every variant in place: the colour is on the icon only.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} height="8.5rem" />
}`,...V.parameters?.docs?.source},description:{story:`The States block's example: four side by side are narrow, so the title wraps.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[]} pending="Uploading 3 files…" height="5.5rem" />
}`,...H.parameters?.docs?.source},description:{story:"While a `promise()` is pending: a spinner in place of the icon.",...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[{
    ...moved,
    variant: 'success'
  }]} />,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByRole('dialog', {}, {
      timeout: 3000
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('File moved to Trash');
    await expect(found[4]).toHaveTextContent('Undo');
  }
}`,...W.parameters?.docs?.source},description:{story:`Every part present, in place.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} />
}`,...G.parameters?.docs?.source},description:{story:`Guidelines, Do: news about something done, with a way to undo it.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[{
    variant: 'warning',
    title: 'Your card expires tomorrow',
    description: 'Update it to keep your plan.',
    action: {
      label: 'Update card',
      onClick: () => {}
    }
  }]} />
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Don't: a problem the reader must fix, in something that goes away.`,...K.parameters?.docs?.description}}}})))()}export{L as a,V as c,I as d,B as f,K as i,z as l,J as m,j as n,H as o,U as p,G as r,P as s,W as t,p as u};