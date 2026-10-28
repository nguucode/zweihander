import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{i,n as a,t as o}from"./useRenderElement-euNwqn97.js";import{n as s,t as c}from"./utils-CUvRSo4U.js";import{t as l}from"./jsx-runtime-DeHZSEgm.js";import{n as u,t as d}from"./useStableCallback-BEuE3z7O.js";import{n as f,t as p}from"./useIsoLayoutEffect-BLzSB4yc.js";import{n as m,t as h}from"./useButton-C_juKO0K.js";import{l as g,u as _}from"./useTransitionStatus-CYDYA4DW.js";import{n as ee,t as te}from"./icon-C9aTyDDd.js";import{n as ne,t as v}from"./expectAnatomy-C52ByQ6s.js";import{a as y,r as b}from"./story-helpers-EInZsLED.js";import{a as re,c as ie,i as x,l as ae,n as oe,o as se,r as ce,s as S,t as le,u as C}from"./useCollapsiblePanel-D4wnurDW.js";var w;function T(){return(T=t((()=>{x(),g(),w={...ce,..._}})))()}var E,D,ue;function de(){return(de=t((()=>{E=e(r(),1),d(),o(),ae(),S(),T(),D=l(),ue=E.forwardRef(function(e,t){let{render:n,className:r,defaultOpen:i=!1,disabled:o=!1,onOpenChange:s,open:c,style:l,...d}=e,f=u(s),p=C({open:c,defaultOpen:i,onOpenChange:f,disabled:o}),m=E.useMemo(()=>({open:p.open,disabled:p.disabled,transitionStatus:p.transitionStatus}),[p.open,p.disabled,p.transitionStatus]),h=E.useMemo(()=>({...p,onOpenChange:f,state:m}),[p,f,m]),g=a(`div`,e,{state:m,ref:t,props:d,stateAttributesMapping:w});return(0,D.jsx)(se.Provider,{value:h,children:g})})})))()}var fe,pe,me;function he(){return(he=t((()=>{fe=e(r(),1),x(),g(),o(),h(),S(),pe={...re,..._},me=fe.forwardRef(function(e,t){let{panelId:n,open:r,handleTrigger:i,state:o,disabled:s}=ie(),{className:c,disabled:l=s,render:u,nativeButton:d=!0,style:f,...p}=e,{getButtonProps:h,buttonRef:g}=m({disabled:l,focusableWhenDisabled:!0,native:d});return a(`button`,e,{state:o,ref:[t,g],props:[{"aria-controls":r?n:void 0,"aria-expanded":r,onClick:i},p,h],stateAttributesMapping:pe})})})))()}var ge,_e;function O(){return(O=t((()=>{ge=`--collapsible-panel-height`,_e=`--collapsible-panel-width`})))()}var k,A;function j(){return(j=t((()=>{k=e(r(),1),p(),o(),S(),T(),le(),O(),A=k.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:o,render:s,id:c,style:l,...u}=e,{defaultPanelId:d,mounted:p,onOpenChange:m,open:h,setMounted:g,setPanelIdState:_,setOpen:ee,state:te,transitionStatus:ne}=ie(),v=r??!1,y=o??!1,b=c||void 0,re=b??d;f(()=>(_(e=>b??(e===null?void 0:e)),()=>{_(e=>e===b?null:e)}),[b,_]);let{height:x,props:ae,ref:se,shouldPreventOpenAnimation:ce,shouldRender:S,transitionStatus:le,width:C}=oe({externalRef:t,hiddenUntilFound:v,id:re,keepMounted:y,mounted:p,onOpenChange:m,open:h,setMounted:g,setOpen:ee,transitionStatus:ne}),T={...te,transitionStatus:le},E=i(l,T),D=a(`div`,{...e,style:void 0},{state:T,ref:se,props:[ae,{style:{[ge]:x===void 0?`auto`:`${x}px`,[_e]:C===void 0?`auto`:`${C}px`}},u,E?{style:E}:void 0,ce?{style:{animationName:`none`}}:void 0],stateAttributesMapping:w});return S?D:null})})))()}var M,N,P,F,I,ve,ye,be,L;function xe(){return(xe=t((()=>{M=`_collapse_1qwb4_1`,N=`_sm_1qwb4_8`,P=`_trigger_1qwb4_14`,F=`_chevron_1qwb4_43`,I=`_closedLabel_1qwb4_55`,ve=`_openLabel_1qwb4_56`,ye=`_panel_1qwb4_63`,be=`_content_1qwb4_72`,L={collapse:M,sm:N,trigger:P,chevron:F,closedLabel:I,openLabel:ve,panel:ye,content:be}})))()}function R({label:e,openLabel:t,children:n,open:r,defaultOpen:i,onOpenChange:a,size:o=`md`,disabled:s=!1,hiddenUntilFound:l=!0,className:u}){return(0,z.jsxs)(ue,{open:r,defaultOpen:i,onOpenChange:a&&(e=>a(e)),disabled:s,className:c(L.collapse,L[o],u),children:[(0,z.jsxs)(me,{className:L.trigger,children:[(0,z.jsx)(`span`,{className:L.chevron,"aria-hidden":`true`,children:(0,z.jsx)(te,{name:`chevron-right`})}),t===void 0?e:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`span`,{className:L.closedLabel,children:e}),(0,z.jsx)(`span`,{className:L.openLabel,children:t})]})]}),(0,z.jsx)(A,{className:L.panel,hiddenUntilFound:l,children:(0,z.jsx)(`div`,{className:L.content,children:n})})]})}var z;function Se(){return(Se=t((()=>{de(),he(),j(),ee(),s(),xe(),z=l(),R.__docgenInfo={description:`One show/hide section: a text button with a chevron and the content it
reveals. For a list of sections, use Accordion.`,methods:[],displayName:`Collapse`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`The trigger's text, e.g. "Show details".`},openLabel:{required:!1,tsType:{name:`ReactNode`},description:'The trigger\'s text while open, e.g. "Hide details". Defaults to `label`.'},children:{required:!0,tsType:{name:`ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hiddenUntilFound:{required:!1,tsType:{name:`boolean`},description:`Keep the closed content in the page as \`hidden="until-found"\`, so the
browser's find-in-page reaches it and opens it. On by default.`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Ce=n({Anatomy:()=>Z,Default:()=>U,Disabled:()=>K,DoAsideInText:()=>Q,DontStackAsList:()=>$,Open:()=>W,ReducedMotion:()=>Y,Searchable:()=>q,Small:()=>G,TouchTarget:()=>J,__namedExportsOrder:()=>De,anatomyParts:()=>X,default:()=>Ee}),B,V,we,H,Te,Ee,U,W,G,K,q,J,Y,X,Z,Q,$,De;function Oe(){return(Oe=t((()=>{ne(),Se(),b(),B=l(),{expect:V,fn:we,userEvent:H,waitFor:Te}=__STORYBOOK_MODULE_TEST__,Ee={title:`Components/Data Display/Collapse`,tags:[`beta`],component:R,args:{label:`Show details`,openLabel:`Hide details`,children:(0,B.jsx)(`p`,{style:{margin:0},children:`Billed yearly on 1 March. Seats you add mid-year are charged for the months left, and removed seats are credited to the next invoice.`}),onOpenChange:we()},argTypes:{label:{description:`The trigger's text, e.g. "Show details". Required.`,control:`text`,table:{type:{summary:`ReactNode`}}},openLabel:{description:"The trigger's text while open, e.g. \"Hide details\". Defaults to `label`. The button's name follows the state; `aria-expanded` says it either way.",control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`label`}}},children:{description:`The content the trigger shows and hides. Required.`,control:!1,table:{type:{summary:`ReactNode`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Starting open state when uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the new state on click, Enter and Space. Not called while disabled.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},size:{description:"The text size: `--text-body` (`md`) or `--text-body-sm` (`sm`). Match the text around it.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},disabled:{description:`Dimmed, and clicking does nothing.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},hiddenUntilFound:{description:'Keep the closed content in the page as `hidden="until-found"`, so the browser\'s find-in-page reaches it and opens it. Turn it off only for content that is expensive to render.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},className:{description:`Added to the container.`,control:!1,table:{type:{summary:`string`}}}},decorators:[e=>(0,B.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})],excludeStories:[`anatomyParts`]},U={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Show details`});await V(n).toHaveAttribute(`aria-expanded`,`false`),await V(n.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await H.click(n),await V(e.onOpenChange).toHaveBeenLastCalledWith(!0);let r=t.getByRole(`button`,{name:`Hide details`});await V(r).toHaveAttribute(`aria-expanded`,`true`),await Te(()=>V(t.getByText(/Billed yearly/)).toBeVisible());let i=document.getElementById(r.getAttribute(`aria-controls`));await V(i).toContainElement(t.getByText(/Billed yearly/)),await H.keyboard(`{Enter}`),await V(t.getByRole(`button`,{name:`Show details`})).toHaveAttribute(`aria-expanded`,`false`),await H.keyboard(` `),await V(t.getByRole(`button`,{name:`Hide details`})).toHaveAttribute(`aria-expanded`,`true`)}},W={args:{defaultOpen:!0}},G={args:{size:`sm`,label:`Advanced settings`,openLabel:void 0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Advanced settings`});await t.tab(),await V(n).toHaveFocus(),await t.keyboard(` `),await V(n).toHaveAttribute(`aria-expanded`,`true`),await V(n).toHaveAccessibleName(`Advanced settings`),await t.keyboard(`{Enter}`),await V(n).toHaveAttribute(`aria-expanded`,`false`)}},K={args:{disabled:!0},play:async({args:e,canvas:t})=>{await H.click(t.getByRole(`button`,{name:`Show details`})),await V(e.onOpenChange).not.toHaveBeenCalled()}},q={play:async({canvas:e})=>{let t=e.getByText(/Billed yearly/,{});await V(t.closest(`[hidden]`)).toHaveAttribute(`hidden`,`until-found`)}},J={play:async({canvas:e})=>{let[t]=y(`pointer: coarse`,e.getByRole(`button`),`::before`);await V(t).toBeDefined(),await V([t.style.minInlineSize,t.style.blockSize]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`])}},Y={args:{defaultOpen:!0},play:async({canvas:e})=>{let t=e.getByRole(`button`),n=document.getElementById(t.getAttribute(`aria-controls`)),r=t.querySelector(`[aria-hidden="true"]`),i=getComputedStyle(n).getPropertyValue(`--duration-base`).trim();for(let e of[n,r])await V(Number.parseFloat(getComputedStyle(e).transitionDuration)*1e3).toBe(Number.parseFloat(i));let a=y(`prefers-reduced-motion: reduce`,document.documentElement);await V(a.map(e=>e.style.getPropertyValue(`--duration-base`).trim())).toContain(`0ms`)}},X=[{name:`Container`,selector:`div:has(> button)`,description:`Holds the trigger and the panel; sets the text size.`},{name:`Trigger`,selector:`button`,description:`A medium-weight text button, underlined on hover.`},{name:`Chevron`,selector:`button > [aria-hidden="true"]`,description:`Points right when closed and down when open. Decorative.`},{name:`Label`,selector:`button > span:last-child`,description:`The text. With openLabel, a second label replaces it while open.`},{name:`Panel`,selector:`button + div`,description:`The content, under the trigger. Its height animates open and shut.`}],Z={tags:[`!dev`],args:{defaultOpen:!0,label:(0,B.jsx)(`span`,{children:`Billing details`}),openLabel:void 0},play:async({canvasElement:e})=>{let t=await v(e,X);await V(t[3]).toHaveTextContent(`Billing details`),await V(t[4]).toHaveTextContent(/Billed yearly/)}},Q={render:e=>(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,B.jsx)(`p`,{style:{margin:0},children:`Your plan renews on 1 March for 12 seats.`}),(0,B.jsx)(R,{...e})]})},$={tags:[`!dev`],render:e=>(0,B.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,B.jsx)(R,{...e,label:`Billing`,openLabel:void 0}),(0,B.jsx)(R,{...e,label:`Seats`,openLabel:void 0}),(0,B.jsx)(R,{...e,label:`Invoices`,openLabel:void 0})]})},De=[`Default`,`Open`,`Small`,`Disabled`,`Searchable`,`TouchTarget`,`ReducedMotion`,`anatomyParts`,`Anatomy`,`DoAsideInText`,`DontStackAsList`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Show details'
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    // The chevron is hidden: the exact name above has nothing from it.
    await expect(trigger.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    await userEvent.click(trigger);
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // The name follows the state.
    const open = canvas.getByRole('button', {
      name: 'Hide details'
    });
    await expect(open).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(canvas.getByText(/Billed yearly/)).toBeVisible());
    // The trigger controls the panel it opened.
    const panel = document.getElementById(open.getAttribute('aria-controls')!)!;
    await expect(panel).toContainElement(canvas.getByText(/Billed yearly/));
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Show details'
    })).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('button', {
      name: 'Hide details'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Advanced settings',
    openLabel: undefined
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Without openLabel the name stays put; aria-expanded carries the state.
    const trigger = canvas.getByRole('button', {
      name: 'Advanced settings'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAccessibleName('Advanced settings');
    await userEvent.keyboard('{Enter}');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show details'
    }));
    await expect(args.onOpenChange).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const text = canvas.getByText(/Billed yearly/, {}) as HTMLElement;
    await expect(text.closest('[hidden]')).toHaveAttribute('hidden', 'until-found');
  }
}`,...q.parameters?.docs?.source},description:{story:`Closed content stays findable: it is hidden="until-found", not removed.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const [area] = mediaRules('pointer: coarse', canvas.getByRole('button'), '::before');
    await expect(area).toBeDefined();
    await expect([area.style.minInlineSize, area.style.blockSize]).toEqual(['var(--target-coarse)', 'var(--target-coarse)']);
  }
}`,...J.parameters?.docs?.source},description:{story:"A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches the trigger.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // Open, so the panel is mounted.
  args: {
    defaultOpen: true
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button');
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!;
    const chevron = trigger.querySelector('[aria-hidden="true"]')!;
    const base = getComputedStyle(panel).getPropertyValue('--duration-base').trim();
    for (const el of [panel, chevron]) {
      await expect(Number.parseFloat(getComputedStyle(el).transitionDuration) * 1000).toBe(Number.parseFloat(base));
    }
    const reduced = mediaRules('prefers-reduced-motion: reduce', document.documentElement);
    await expect(reduced.map(r => r.style.getPropertyValue('--duration-base').trim())).toContain('0ms');
  }
}`,...Y.parameters?.docs?.source},description:{story:`A play cannot set prefers-reduced-motion. The panel and the chevron time their transitions with --duration-base, and the reduced-motion rule in tokens.css sets that to 0ms.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultOpen: true,
    label: <span>Billing details</span>,
    openLabel: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveTextContent('Billing details');
    await expect(found[4]).toHaveTextContent(/Billed yearly/);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Open, the label in its own element so the docs can point at it.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-2)'
  }}>
      <p style={{
      margin: 0
    }}>Your plan renews on 1 March for 12 seats.</p>
      <Collapse {...args} />
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: one aside in running text, its label saying what opening it does.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-2)'
  }}>
      <Collapse {...args} label="Billing" openLabel={undefined} />
      <Collapse {...args} label="Seats" openLabel={undefined} />
      <Collapse {...args} label="Invoices" openLabel={undefined} />
    </div>
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a stack of Collapses standing in for an Accordion.`,...$.parameters?.docs?.description}}}})))()}export{Q as a,q as c,Oe as d,K as i,G as l,Ce as n,$ as o,U as r,W as s,Z as t,X as u};