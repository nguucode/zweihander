import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{c=`_root_1n4ck_2`,l=`_vertical_1n4ck_8`,u=`_pane_1n4ck_12`,d=`_end_1n4ck_18`,f=`_handle_1n4ck_24`,p={root:c,vertical:l,pane:u,end:d,handle:f}})))()}function h({start:e,end:t,orientation:n=`horizontal`,size:r,defaultSize:a=50,onSizeChange:o,minSize:s=10,maxSize:c=90,handleLabel:l=`Resize`,className:u,style:d}){let f=(0,g.useRef)(null),m=(0,g.useId)(),[h,y]=(0,g.useState)(a),b=(0,g.useRef)(null);(0,g.useEffect)(()=>()=>b.current?.(),[]);let x=e=>Math.min(c,Math.max(s,e)),S=x(r??h),C=n===`horizontal`,w=e=>{let t=x(e);t!==S&&(r===void 0&&y(t),o?.(t))},T=()=>{let e=f.current.getBoundingClientRect();return(C?e.width:e.height)||1},E=()=>C&&getComputedStyle(f.current).direction===`rtl`?-1:1,D=e=>e*100/T(),O=e=>{if(e.button!==0)return;e.preventDefault();let t=S,n=C?e.clientX:e.clientY,r=E(),i=e=>w(t+r*D((C?e.clientX:e.clientY)-n)),a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a),window.removeEventListener(`pointercancel`,a),b.current=null};b.current=a,window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a),window.addEventListener(`pointercancel`,a)},k=e=>{let t=(C?{ArrowRight:1,ArrowLeft:-1}:{ArrowDown:1,ArrowUp:-1})[e.key],n=t===void 0?e.key===`Home`?s:e.key===`End`?c:void 0:S+E()*t*D(v);n!==void 0&&(e.preventDefault(),w(n))};return(0,_.jsxs)(`div`,{ref:f,className:i(p.root,!C&&p.vertical,u),style:{...d,"--resizable-size":`${S}%`},children:[(0,_.jsx)(`div`,{id:m,className:p.pane,children:e}),(0,_.jsx)(`div`,{role:`separator`,"aria-orientation":C?`vertical`:`horizontal`,"aria-label":l,"aria-controls":m,"aria-valuenow":Math.round(S),"aria-valuemin":s,"aria-valuemax":c,tabIndex:0,className:p.handle,onPointerDown:O,onKeyDown:k}),(0,_.jsx)(`div`,{className:i(p.pane,p.end),children:t})]})}var g,_,v;function y(){return(y=e((()=>{g=n(),r(),m(),_=a(),v=16,h.__docgenInfo={description:`Two panes and a handle between them that moves the split, by dragging or
with the arrow keys, after the APG window splitter. Nest one in a pane for three.`,methods:[],displayName:`Resizable`,props:{start:{required:!0,tsType:{name:`ReactNode`},description:`The first pane: on the inline start side by side, on top when stacked. The handle sets its size.`},end:{required:!0,tsType:{name:`ReactNode`},description:`The second pane: it takes the space the first leaves.`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:"`horizontal` puts the panes side by side, `vertical` stacks them.",defaultValue:{value:`'horizontal'`,computed:!1}},size:{required:!1,tsType:{name:`number`},description:"The first pane's size in percent of the whole, for controlled use. Pair with `onSizeChange`."},defaultSize:{required:!1,tsType:{name:`number`},description:`The first pane's starting size in percent, when uncontrolled.`,defaultValue:{value:`50`,computed:!1}},onSizeChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(size: number) => void`,signature:{arguments:[{type:{name:`number`},name:`size`}],return:{name:`void`}}},description:`Called with the first pane's new size in percent while the handle moves.`},minSize:{required:!1,tsType:{name:`number`},description:`The first pane's smallest size, in percent.`,defaultValue:{value:`10`,computed:!1}},maxSize:{required:!1,tsType:{name:`number`},description:`The first pane's largest size, in percent.`,defaultValue:{value:`90`,computed:!1}},handleLabel:{required:!1,tsType:{name:`string`},description:`The handle's accessible name. Name it after the first pane: "Resize filters".`,defaultValue:{value:`'Resize'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})))()}var b=t({Anatomy:()=>z,Controlled:()=>F,Default:()=>j,DoNameEachHandle:()=>I,DontKeepDefaultName:()=>L,Limits:()=>N,Rtl:()=>P,Vertical:()=>M,__namedExportsOrder:()=>B,anatomyParts:()=>R,default:()=>O}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{o(),y(),x=a(),{expect:S,fn:C,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E=({title:e,children:t})=>(0,x.jsxs)(`div`,{style:{padding:`var(--space-4)`,display:`grid`,gap:`var(--space-2)`,alignContent:`start`},children:[(0,x.jsx)(`strong`,{children:e}),(0,x.jsx)(`span`,{style:{color:`var(--muted-foreground)`},children:t})]}),D={blockSize:240,inlineSize:600,maxInlineSize:`100%`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},O={title:`Components/Data Display/Resizable`,tags:[`experimental`],component:h,args:{start:(0,x.jsx)(E,{title:`Inbox`,children:`Messages, newest first.`}),end:(0,x.jsx)(E,{title:`Message`,children:`The message picked on the left.`}),handleLabel:`Resize inbox`},decorators:[e=>(0,x.jsx)(`div`,{style:D,children:e()})],argTypes:{start:{description:`The first pane: on the inline start side by side, on top when stacked. The handle sets its size.`,control:!1,table:{type:{summary:`ReactNode`}}},end:{description:`The second pane. It takes the space the first leaves.`,control:!1,table:{type:{summary:`ReactNode`}}},orientation:{description:"`horizontal` puts the panes side by side with an upright handle; `vertical` stacks them with a flat one.",control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},size:{description:"The first pane's size in percent of the whole, for controlled use. Pair with `onSizeChange`.",control:{type:`number`,min:0,max:100},table:{type:{summary:`number`}}},defaultSize:{description:`The first pane's starting size in percent, when uncontrolled.`,control:{type:`number`,min:0,max:100},table:{type:{summary:`number`},defaultValue:{summary:`50`}}},onSizeChange:{description:`Called with the first pane's new size in percent while the handle moves. Store it to keep the split across visits.`,table:{type:{summary:`(size: number) => void`}}},minSize:{description:`The first pane's smallest size in percent. Home moves the handle here.`,control:{type:`number`,min:0,max:100},table:{type:{summary:`number`},defaultValue:{summary:`10`}}},maxSize:{description:`The first pane's largest size in percent. End moves the handle here.`,control:{type:`number`,min:0,max:100},table:{type:{summary:`number`},defaultValue:{summary:`90`}}},handleLabel:{description:`The handle's accessible name. Name it after the first pane: "Resize inbox".`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Resize'`}}},className:{table:{disable:!0}},style:{table:{disable:!0}}},excludeStories:[`anatomyParts`]},k=e=>e.getBoundingClientRect().width,A=e=>e.getBoundingClientRect().height,j={args:{onSizeChange:C()},play:async({args:e,canvas:t,canvasElement:n,step:r})=>{let i=t.getByRole(`separator`,{name:`Resize inbox`}),a=n.querySelector(`:scope > div > div`),o=a.firstElementChild;await r(`The handle is a focusable vertical separator for the first pane, its size as the value`,async()=>{await S(i).toHaveAttribute(`aria-orientation`,`vertical`),await S(i).toHaveAttribute(`aria-controls`,o.id),await S(i).toHaveAttribute(`aria-valuenow`,`50`),await S(i).toHaveAttribute(`aria-valuemin`,`10`),await S(i).toHaveAttribute(`aria-valuemax`,`90`),await w.tab(),await S(i).toHaveFocus()}),await r(`Arrow Right moves the handle 16px right, Arrow Left 16px left`,async()=>{let t=k(o);await w.keyboard(`{ArrowRight}`),await T(()=>S(k(o)).toBeCloseTo(t+16,0)),await S(e.onSizeChange).toHaveBeenCalled(),await w.keyboard(`{ArrowLeft}{ArrowLeft}`),await T(()=>S(k(o)).toBeCloseTo(t-16,0))}),await r(`End moves it to the largest size, Home to the smallest`,async()=>{await w.keyboard(`{End}`),await S(i).toHaveAttribute(`aria-valuenow`,`90`),await w.keyboard(`{Home}`),await S(i).toHaveAttribute(`aria-valuenow`,`10`),await T(()=>S(k(o)/k(a)).toBeCloseTo(.1,2))}),await r(`Dragging the handle moves it by the distance dragged`,async()=>{let e=k(o),{x:t,y:n}=i.getBoundingClientRect();await w.pointer([{keys:`[MouseLeft>]`,target:i,coords:{clientX:t,clientY:n}},{target:i,coords:{clientX:t+60,clientY:n}},{keys:`[/MouseLeft]`,target:i,coords:{clientX:t+60,clientY:n}}]),await T(()=>S(k(o)).toBeCloseTo(e+60,0))})}},M={args:{orientation:`vertical`,start:(0,x.jsx)(E,{title:`Query`,children:`select * from invoices`}),end:(0,x.jsx)(E,{title:`Results`,children:`12 rows`}),handleLabel:`Resize query`},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`separator`,{name:`Resize query`}),r=t.querySelector(`:scope > div > div > div:first-child`);await S(n).toHaveAttribute(`aria-orientation`,`horizontal`),n.focus();let i=A(r);await w.keyboard(`{ArrowDown}`),await T(()=>S(A(r)).toBeCloseTo(i+16,0)),await w.keyboard(`{ArrowUp}{ArrowUp}`),await T(()=>S(A(r)).toBeCloseTo(i-16,0)),await w.keyboard(`{ArrowRight}`),await T(()=>S(A(r)).toBeCloseTo(i-16,0))}},N={args:{defaultSize:30,minSize:20,maxSize:40},play:async({canvas:e})=>{let t=e.getByRole(`separator`),{x:n,y:r}=t.getBoundingClientRect();await w.pointer([{keys:`[MouseLeft>]`,target:t,coords:{clientX:n,clientY:r}},{target:t,coords:{clientX:n+500,clientY:r}},{keys:`[/MouseLeft]`,target:t,coords:{clientX:n+500,clientY:r}}]),await S(t).toHaveAttribute(`aria-valuenow`,`40`),await w.pointer([{keys:`[MouseLeft>]`,target:t,coords:{clientX:n,clientY:r}},{target:t,coords:{clientX:n-500,clientY:r}},{keys:`[/MouseLeft]`,target:t,coords:{clientX:n-500,clientY:r}}]),await S(t).toHaveAttribute(`aria-valuenow`,`20`)}},P={decorators:[e=>(0,x.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`separator`);t.focus(),await w.keyboard(`{ArrowLeft}`),await T(()=>S(Number(t.getAttribute(`aria-valuenow`))).toBeGreaterThan(50)),await w.keyboard(`{ArrowRight}{ArrowRight}`),await T(()=>S(Number(t.getAttribute(`aria-valuenow`))).toBeLessThan(50))}},F={args:{size:30,onSizeChange:C()},play:async({args:e,canvas:t})=>{let n=t.getByRole(`separator`);n.focus(),await w.keyboard(`{End}`),await S(e.onSizeChange).toHaveBeenLastCalledWith(90),await S(n).toHaveAttribute(`aria-valuenow`,`30`)}},I={tags:[`!dev`],args:{defaultSize:25,start:(0,x.jsx)(E,{title:`Folders`}),handleLabel:`Resize folders`,end:(0,x.jsx)(h,{defaultSize:40,start:(0,x.jsx)(E,{title:`Inbox`}),end:(0,x.jsx)(E,{title:`Message`}),handleLabel:`Resize inbox`})},play:async({canvas:e})=>{await S(e.getByRole(`separator`,{name:`Resize folders`})).toBeInTheDocument(),await S(e.getByRole(`separator`,{name:`Resize inbox`})).toBeInTheDocument()}},L={tags:[`!dev`],args:{defaultSize:25,start:(0,x.jsx)(E,{title:`Folders`}),handleLabel:void 0,end:(0,x.jsx)(h,{defaultSize:40,start:(0,x.jsx)(E,{title:`Inbox`}),end:(0,x.jsx)(E,{title:`Message`})})},play:async({canvas:e})=>{await S(e.getAllByRole(`separator`,{name:`Resize`})).toHaveLength(2)}},R=[{name:`Pane A`,selector:`div:has(+ [role="separator"])`,description:`The first pane. Its size is a percentage of the whole, set by the handle; it scrolls when its content is longer.`},{name:`Handle`,selector:`[role="separator"]`,description:"A 1px `--border` line with a 24px hit area (44px on touch). Hover and drag turn it 2px `--primary`."},{name:`Pane B`,selector:`[role="separator"] + div`,description:`The second pane: the space the first leaves.`}],z={tags:[`!dev`],args:{defaultSize:40},play:async({canvasElement:e})=>{await s(e,R)}},B=[`Default`,`Vertical`,`Limits`,`Rtl`,`Controlled`,`DoNameEachHandle`,`DontKeepDefaultName`,`anatomyParts`,`Anatomy`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onSizeChange: fn()
  },
  play: async ({
    args,
    canvas,
    canvasElement,
    step
  }) => {
    const handle = canvas.getByRole('separator', {
      name: 'Resize inbox'
    });
    const root = canvasElement.querySelector(':scope > div > div')!;
    const first = root.firstElementChild!;
    await step('The handle is a focusable vertical separator for the first pane, its size as the value', async () => {
      await expect(handle).toHaveAttribute('aria-orientation', 'vertical');
      await expect(handle).toHaveAttribute('aria-controls', first.id);
      await expect(handle).toHaveAttribute('aria-valuenow', '50');
      await expect(handle).toHaveAttribute('aria-valuemin', '10');
      await expect(handle).toHaveAttribute('aria-valuemax', '90');
      await userEvent.tab();
      await expect(handle).toHaveFocus();
    });
    await step('Arrow Right moves the handle 16px right, Arrow Left 16px left', async () => {
      const before = width(first);
      await userEvent.keyboard('{ArrowRight}');
      await waitFor(() => expect(width(first)).toBeCloseTo(before + 16, 0));
      await expect(args.onSizeChange).toHaveBeenCalled();
      await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
      await waitFor(() => expect(width(first)).toBeCloseTo(before - 16, 0));
    });
    await step('End moves it to the largest size, Home to the smallest', async () => {
      await userEvent.keyboard('{End}');
      await expect(handle).toHaveAttribute('aria-valuenow', '90');
      await userEvent.keyboard('{Home}');
      await expect(handle).toHaveAttribute('aria-valuenow', '10');
      await waitFor(() => expect(width(first) / width(root)).toBeCloseTo(0.1, 2));
    });
    await step('Dragging the handle moves it by the distance dragged', async () => {
      const before = width(first);
      const {
        x,
        y
      } = handle.getBoundingClientRect();
      await userEvent.pointer([{
        keys: '[MouseLeft>]',
        target: handle,
        coords: {
          clientX: x,
          clientY: y
        }
      }, {
        target: handle,
        coords: {
          clientX: x + 60,
          clientY: y
        }
      }, {
        keys: '[/MouseLeft]',
        target: handle,
        coords: {
          clientX: x + 60,
          clientY: y
        }
      }]);
      await waitFor(() => expect(width(first)).toBeCloseTo(before + 60, 0));
    });
  }
}`,...j.parameters?.docs?.source},description:{story:`Drag the line between the panes, or focus it and use the arrow keys.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    start: <Pane title="Query">select * from invoices</Pane>,
    end: <Pane title="Results">12 rows</Pane>,
    handleLabel: 'Resize query'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const handle = canvas.getByRole('separator', {
      name: 'Resize query'
    });
    const first = canvasElement.querySelector(':scope > div > div > div:first-child')!;
    await expect(handle).toHaveAttribute('aria-orientation', 'horizontal');
    handle.focus();
    const before = height(first);
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(height(first)).toBeCloseTo(before + 16, 0));
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await waitFor(() => expect(height(first)).toBeCloseTo(before - 16, 0));
    // The other axis does nothing.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(height(first)).toBeCloseTo(before - 16, 0));
  }
}`,...M.parameters?.docs?.source},description:{story:`Stacked panes: the handle lies flat and moves with Arrow Up and Arrow Down.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSize: 30,
    minSize: 20,
    maxSize: 40
  },
  play: async ({
    canvas
  }) => {
    const handle = canvas.getByRole('separator');
    const {
      x,
      y
    } = handle.getBoundingClientRect();
    await userEvent.pointer([{
      keys: '[MouseLeft>]',
      target: handle,
      coords: {
        clientX: x,
        clientY: y
      }
    }, {
      target: handle,
      coords: {
        clientX: x + 500,
        clientY: y
      }
    }, {
      keys: '[/MouseLeft]',
      target: handle,
      coords: {
        clientX: x + 500,
        clientY: y
      }
    }]);
    await expect(handle).toHaveAttribute('aria-valuenow', '40');
    await userEvent.pointer([{
      keys: '[MouseLeft>]',
      target: handle,
      coords: {
        clientX: x,
        clientY: y
      }
    }, {
      target: handle,
      coords: {
        clientX: x - 500,
        clientY: y
      }
    }, {
      keys: '[/MouseLeft]',
      target: handle,
      coords: {
        clientX: x - 500,
        clientY: y
      }
    }]);
    await expect(handle).toHaveAttribute('aria-valuenow', '20');
  }
}`,...N.parameters?.docs?.source},description:{story:`Limits: the first pane stays between 20% and 40%, however far the handle is dragged.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div dir="rtl">{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const handle = canvas.getByRole('separator');
    handle.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBeGreaterThan(50));
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBeLessThan(50));
  }
}`,...P.parameters?.docs?.source},description:{story:`Right to left: the first pane is on the right, so Arrow Left grows it.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    size: 30,
    onSizeChange: fn()
  },
  play: async ({
    args,
    canvas
  }) => {
    const handle = canvas.getByRole('separator');
    handle.focus();
    await userEvent.keyboard('{End}');
    await expect(args.onSizeChange).toHaveBeenLastCalledWith(90);
    // Not stored by the caller, so it stays where it was.
    await expect(handle).toHaveAttribute('aria-valuenow', '30');
  }
}`,...F.parameters?.docs?.source},description:{story:`The size owned by the caller: the handle reports, the caller decides.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultSize: 25,
    start: <Pane title="Folders" />,
    handleLabel: 'Resize folders',
    end: <Resizable defaultSize={40} start={<Pane title="Inbox" />} end={<Pane title="Message" />} handleLabel="Resize inbox" />
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('separator', {
      name: 'Resize folders'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('separator', {
      name: 'Resize inbox'
    })).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source},description:{story:`Three panes: a Resizable in the second pane of another. Each handle is named after its own pane.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultSize: 25,
    start: <Pane title="Folders" />,
    handleLabel: undefined,
    end: <Resizable defaultSize={40} start={<Pane title="Inbox" />} end={<Pane title="Message" />} />
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('separator', {
      name: 'Resize'
    })).toHaveLength(2);
  }
}`,...L.parameters?.docs?.source},description:{story:`Both handles keep the default name: a screen reader hears "Resize" twice and cannot tell them apart.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultSize: 40
  },
  play: async ({
    canvasElement
  }) => {
    await expectAnatomy(canvasElement, anatomyParts);
  }
}`,...z.parameters?.docs?.source}}}})))()}export{N as a,R as c,y as d,L as i,V as l,j as n,b as o,I as r,M as s,z as t,h as u};