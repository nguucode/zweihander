import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./icon-D2EAxy9f.js";import{n as s,t as c}from"./utils-CUvRSo4U.js";import{n as l,t as u}from"./useStableCallback-CiiHsHLZ.js";import{n as d,t as f}from"./useIsoLayoutEffect-pZTQXUp4.js";import{i as p,n as m,t as h}from"./useRenderElement-JLgEYJQi.js";import{n as g,t as _}from"./useButton-BKapWYk8.js";import{n as v,t as y}from"./stateAttributesMapping-CzWYZolq.js";import{a as ee,c as te,i as b,l as ne,n as re,o as x,r as ie,s as S,t as ae,u as oe}from"./useCollapsiblePanel-BsS7KJWJ.js";var C;function w(){return(w=t((()=>{b(),y(),C={...ie,...v}})))()}var T,E,D;function O(){return(O=t((()=>{T=e(i(),1),u(),h(),ne(),S(),w(),E=r(),D=T.forwardRef(function(e,t){let{render:n,className:r,defaultOpen:i=!1,disabled:a=!1,onOpenChange:o,open:s,style:c,...u}=e,d=l(o),f=oe({open:s,defaultOpen:i,onOpenChange:d,disabled:a}),p=T.useMemo(()=>({open:f.open,disabled:f.disabled,transitionStatus:f.transitionStatus}),[f.open,f.disabled,f.transitionStatus]),h=T.useMemo(()=>({...f,onOpenChange:d,state:p}),[f,d,p]),g=m(`div`,e,{state:p,ref:t,props:u,stateAttributesMapping:C});return(0,E.jsx)(x.Provider,{value:h,children:g})})})))()}var k,A,se;function ce(){return(ce=t((()=>{k=e(i(),1),b(),y(),h(),_(),S(),A={...ee,...v},se=k.forwardRef(function(e,t){let{panelId:n,open:r,handleTrigger:i,state:a,disabled:o}=te(),{className:s,disabled:c=o,render:l,nativeButton:u=!0,style:d,...f}=e,{getButtonProps:p,buttonRef:h}=g({disabled:c,focusableWhenDisabled:!0,native:u});return m(`button`,e,{state:a,ref:[t,h],props:[{"aria-controls":r?n:void 0,"aria-expanded":r,onClick:i},f,p],stateAttributesMapping:A})})})))()}var le,ue;function j(){return(j=t((()=>{le=`--collapsible-panel-height`,ue=`--collapsible-panel-width`})))()}var M,N;function P(){return(P=t((()=>{M=e(i(),1),f(),h(),S(),w(),ae(),j(),N=M.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,render:a,id:o,style:s,...c}=e,{defaultPanelId:l,mounted:u,onOpenChange:f,open:h,setMounted:g,setPanelIdState:_,setOpen:v,state:y,transitionStatus:ee}=te(),b=r??!1,ne=i??!1,x=o||void 0,ie=x??l;d(()=>(_(e=>x??(e===null?void 0:e)),()=>{_(e=>e===x?null:e)}),[x,_]);let{height:S,props:ae,ref:oe,shouldPreventOpenAnimation:w,shouldRender:T,transitionStatus:E,width:D}=re({externalRef:t,hiddenUntilFound:b,id:ie,keepMounted:ne,mounted:u,onOpenChange:f,open:h,setMounted:g,setOpen:v,transitionStatus:ee}),O={...y,transitionStatus:E},k=p(s,O),A=m(`div`,{...e,style:void 0},{state:O,ref:oe,props:[ae,{style:{[le]:S===void 0?`auto`:`${S}px`,[ue]:D===void 0?`auto`:`${D}px`}},c,k?{style:k}:void 0,w?{style:{animationName:`none`}}:void 0],stateAttributesMapping:C});return T?A:null})})))()}var F,I,L,R,z,B,V,H,U;function de(){return(de=t((()=>{F=`_collapse_1yn7l_1`,I=`_sm_1yn7l_8`,L=`_trigger_1yn7l_14`,R=`_chevron_1yn7l_43`,z=`_closedLabel_1yn7l_55`,B=`_openLabel_1yn7l_56`,V=`_panel_1yn7l_63`,H=`_content_1yn7l_72`,U={collapse:F,sm:I,trigger:L,chevron:R,closedLabel:z,openLabel:B,panel:V,content:H}})))()}function fe({label:e,openLabel:t,children:n,open:r,defaultOpen:i,onOpenChange:a,size:s=`md`,disabled:l=!1,hiddenUntilFound:u=!0,className:d}){return(0,W.jsxs)(D,{open:r,defaultOpen:i,onOpenChange:a&&(e=>a(e)),disabled:l,className:c(U.collapse,U[s],d),children:[(0,W.jsxs)(se,{className:U.trigger,children:[(0,W.jsx)(`span`,{className:U.chevron,"aria-hidden":`true`,children:(0,W.jsx)(o,{name:`chevron-right`})}),t===void 0?e:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{className:U.closedLabel,children:e}),(0,W.jsx)(`span`,{className:U.openLabel,children:t})]})]}),(0,W.jsx)(N,{className:U.panel,hiddenUntilFound:u,children:(0,W.jsx)(`div`,{className:U.content,children:n})})]})}var W;function pe(){return(pe=t((()=>{O(),ce(),P(),a(),s(),de(),W=r(),fe.__docgenInfo={description:`One show/hide section: a text button with a chevron and the content it
reveals. For a list of sections, use Accordion.`,methods:[],displayName:`Collapse`,props:{label:{required:!0,tsType:{name:`ReactNode`},description:`The trigger's text, e.g. "Show details".`},openLabel:{required:!1,tsType:{name:`ReactNode`},description:'The trigger\'s text while open, e.g. "Hide details". Defaults to `label`.'},children:{required:!0,tsType:{name:`ReactNode`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hiddenUntilFound:{required:!1,tsType:{name:`boolean`},description:`Keep the closed content in the page as \`hidden="until-found"\`, so the
browser's find-in-page reaches it and opens it. On by default.`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var me=n({Default:()=>J,Disabled:()=>Z,Open:()=>Y,Searchable:()=>Q,Small:()=>X,__namedExportsOrder:()=>ve,default:()=>_e}),G,K,he,q,ge,_e,J,Y,X,Z,Q,ve;function $(){return($=t((()=>{pe(),G=r(),{expect:K,fn:he,userEvent:q,waitFor:ge}=__STORYBOOK_MODULE_TEST__,_e={title:`Components/Data Display/Collapse`,component:fe,parameters:{a11y:{test:`error`}},args:{label:`Show details`,openLabel:`Hide details`,children:(0,G.jsx)(`p`,{style:{margin:0},children:`Billed yearly on 1 March. Seats you add mid-year are charged for the months left, and removed seats are credited to the next invoice.`}),onOpenChange:he()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},children:{control:!1}},decorators:[e=>(0,G.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})]},J={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Show details`});await K(n).toHaveAttribute(`aria-expanded`,`false`),await q.click(n),await K(e.onOpenChange).toHaveBeenLastCalledWith(!0);let r=t.getByRole(`button`,{name:`Hide details`});await K(r).toHaveAttribute(`aria-expanded`,`true`),await ge(()=>K(t.getByText(/Billed yearly/)).toBeVisible());let i=document.getElementById(r.getAttribute(`aria-controls`));await K(i).toContainElement(t.getByText(/Billed yearly/)),await q.keyboard(`{Enter}`),await K(t.getByRole(`button`,{name:`Show details`})).toHaveAttribute(`aria-expanded`,`false`)}},Y={args:{defaultOpen:!0}},X={args:{size:`sm`,label:`Advanced settings`,openLabel:void 0}},Z={args:{disabled:!0},play:async({args:e,canvas:t})=>{await q.click(t.getByRole(`button`,{name:`Show details`})),await K(e.onOpenChange).not.toHaveBeenCalled()}},Q={play:async({canvas:e})=>{let t=e.getByText(/Billed yearly/,{});await K(t.closest(`[hidden]`)).toHaveAttribute(`hidden`,`until-found`)}},ve=[`Default`,`Open`,`Small`,`Disabled`,`Searchable`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Show details'
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
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
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Advanced settings',
    openLabel: undefined
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const text = canvas.getByText(/Billed yearly/, {}) as HTMLElement;
    await expect(text.closest('[hidden]')).toHaveAttribute('hidden', 'until-found');
  }
}`,...Q.parameters?.docs?.source},description:{story:`Closed content stays findable: it is hidden="until-found", not removed.`,...Q.parameters?.docs?.description}}}})))()}export{X as a,Y as i,J as n,$ as o,Z as r,me as t};