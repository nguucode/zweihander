import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{n as s,t as c}from"./useStableCallback-D10ebQio.js";import{n as ee,t as l}from"./useIsoLayoutEffect-DlZGxu_J.js";import{i as u,n as d,t as f}from"./useRenderElement-BMuTcvdq.js";import{n as p,t as m}from"./useButton-DvXmwjM6.js";import{n as h,t as g}from"./icon-Dc4hTclj.js";import{n as _,t as v}from"./stateAttributesMapping-BlyEAp0f.js";import{a as te,c as ne,i as y,l as re,n as ie,o as b,r as ae,s as x,t as oe,u as se}from"./useCollapsiblePanel-DyzImQEg.js";var S;function C(){return(C=t((()=>{y(),v(),S={...ae,..._}})))()}var w,T,E;function D(){return(D=t((()=>{w=e(i(),1),c(),f(),re(),x(),C(),T=r(),E=w.forwardRef(function(e,t){let{render:n,className:r,defaultOpen:i=!1,disabled:a=!1,onOpenChange:o,open:c,style:ee,...l}=e,u=s(o),f=se({open:c,defaultOpen:i,onOpenChange:u,disabled:a}),p=w.useMemo(()=>({open:f.open,disabled:f.disabled,transitionStatus:f.transitionStatus}),[f.open,f.disabled,f.transitionStatus]),m=w.useMemo(()=>({...f,onOpenChange:u,state:p}),[f,u,p]),h=d(`div`,e,{state:p,ref:t,props:l,stateAttributesMapping:S});return(0,T.jsx)(b.Provider,{value:m,children:h})})})))()}var O,k,ce;function le(){return(le=t((()=>{O=e(i(),1),y(),v(),f(),m(),x(),k={...te,..._},ce=O.forwardRef(function(e,t){let{panelId:n,open:r,handleTrigger:i,state:a,disabled:o}=ne(),{className:s,disabled:c=o,render:ee,nativeButton:l=!0,style:u,...f}=e,{getButtonProps:m,buttonRef:h}=p({disabled:c,focusableWhenDisabled:!0,native:l});return d(`button`,e,{state:a,ref:[t,h],props:[{"aria-controls":r?n:void 0,"aria-expanded":r,onClick:i},f,m],stateAttributesMapping:k})})})))()}var ue,A;function j(){return(j=t((()=>{ue=`--collapsible-panel-height`,A=`--collapsible-panel-width`})))()}var M,N;function P(){return(P=t((()=>{M=e(i(),1),l(),f(),x(),C(),oe(),j(),N=M.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,render:a,id:o,style:s,...c}=e,{defaultPanelId:l,mounted:f,onOpenChange:p,open:m,setMounted:h,setPanelIdState:g,setOpen:_,state:v,transitionStatus:te}=ne(),y=r??!1,re=i??!1,b=o||void 0,ae=b??l;ee(()=>(g(e=>b??(e===null?void 0:e)),()=>{g(e=>e===b?null:e)}),[b,g]);let{height:x,props:oe,ref:se,shouldPreventOpenAnimation:C,shouldRender:w,transitionStatus:T,width:E}=ie({externalRef:t,hiddenUntilFound:y,id:ae,keepMounted:re,mounted:f,onOpenChange:p,open:m,setMounted:h,setOpen:_,transitionStatus:te}),D={...v,transitionStatus:T},O=u(s,D),k=d(`div`,{...e,style:void 0},{state:D,ref:se,props:[oe,{style:{[ue]:x===void 0?`auto`:`${x}px`,[A]:E===void 0?`auto`:`${E}px`}},c,O?{style:O}:void 0,C?{style:{animationName:`none`}}:void 0],stateAttributesMapping:S});return w?k:null})})))()}var F,I,L,R,z,B,V,H,U;function de(){return(de=t((()=>{F=`_collapse_1yn7l_1`,I=`_sm_1yn7l_8`,L=`_trigger_1yn7l_14`,R=`_chevron_1yn7l_43`,z=`_closedLabel_1yn7l_55`,B=`_openLabel_1yn7l_56`,V=`_panel_1yn7l_63`,H=`_content_1yn7l_72`,U={collapse:F,sm:I,trigger:L,chevron:R,closedLabel:z,openLabel:B,panel:V,content:H}})))()}function fe({label:e,openLabel:t,children:n,open:r,defaultOpen:i,onOpenChange:a,size:s=`md`,disabled:c=!1,hiddenUntilFound:ee=!0,className:l}){return(0,W.jsxs)(E,{open:r,defaultOpen:i,onOpenChange:a&&(e=>a(e)),disabled:c,className:o(U.collapse,U[s],l),children:[(0,W.jsxs)(ce,{className:U.trigger,children:[(0,W.jsx)(`span`,{className:U.chevron,"aria-hidden":`true`,children:(0,W.jsx)(g,{name:`chevron-right`})}),t===void 0?e:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{className:U.closedLabel,children:e}),(0,W.jsx)(`span`,{className:U.openLabel,children:t})]})]}),(0,W.jsx)(N,{className:U.panel,hiddenUntilFound:ee,children:(0,W.jsx)(`div`,{className:U.content,children:n})})]})}var W;function pe(){return(pe=t((()=>{D(),le(),P(),h(),a(),de(),W=r(),fe.__docgenInfo={description:`One show/hide section: a text button with a chevron and the content it
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