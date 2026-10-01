import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./icon-D2EAxy9f.js";import{n as s,t as c}from"./utils-CUvRSo4U.js";import{n as l,t as u}from"./useRenderElement-JLgEYJQi.js";import{n as d,t as f}from"./useButton-BKapWYk8.js";import{n as ee,t as p}from"./Button-BLXGvKSL.js";import{n as m,t as h}from"./useBaseUiId-6AHk5GE-.js";import{m as te,o as ne,r as re,t as ie}from"./createBaseUIEventDetails-CDFGPHSH.js";import{dt as ae,ft as oe}from"./popupTriggerMap-DmvHRSuc.js";import{a as se,c as ce,d as le,f as ue,g,h as _,i as de,l as fe,m as pe,n as me,o as he,p as ge,r as _e,s as ve,t as ye,u as be}from"./PopoverPopup-CRCCRpL6.js";import{n as xe,t as Se}from"./TextInput-3ILXg2e3.js";var v,y;function b(){return(b=t((()=>{v=e(i(),1),ve(),_(),ae(),u(),y=v.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=g().useState(`open`),{arrowRef:s,side:c,align:u,arrowUncentered:d,arrowStyles:f}=ce();return l(`div`,e,{state:{open:o,side:c,align:u,uncentered:d},ref:[t,s],props:[{style:f,"aria-hidden":!0},a],stateAttributesMapping:oe})})})))()}var x,S;function C(){return(C=t((()=>{x=e(i(),1),_(),u(),h(),S=x.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=g(),s=m(a.id);return o.useSyncedValueWithCleanup(`titleElementId`,s),l(`h2`,e,{ref:t,props:[{id:s},a]})})})))()}var w,T;function E(){return(E=t((()=>{w=e(i(),1),_(),h(),u(),T=w.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=g(),s=m(a.id);return o.useSyncedValueWithCleanup(`descriptionElementId`,s),l(`p`,e,{ref:t,props:[{id:s},a]})})})))()}var D,O;function k(){return(k=t((()=>{D=e(i(),1),_(),u(),f(),re(),te(),_e(),O=D.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...s}=e,{buttonRef:c,getButtonProps:u}=d({disabled:a,focusableWhenDisabled:!1,native:o}),f=g();return de(),l(`button`,e,{ref:[t,c],props:[{onClick(e){f.setOpen(!1,ie(ne,e.nativeEvent))}},s,u]})})})))()}var A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{A=`_positioner_gmimg_3`,j=`_popup_gmimg_7`,M=`_header_gmimg_33`,N=`_title_gmimg_40`,P=`_description_gmimg_47`,F=`_body_gmimg_52`,I=`_arrow_gmimg_59`,L=`_close_gmimg_86`,R=`_hiddenClose_gmimg_122`,z={positioner:A,popup:j,header:M,title:N,description:P,body:F,arrow:I,close:L,hiddenClose:R}})))()}function Ce({trigger:e,title:t,description:n,children:r,side:i=`bottom`,align:a=`center`,hasArrow:s=!1,hasCloseButton:l=!1,closeLabel:u=`Close`,openOnHover:d=!1,open:f,defaultOpen:ee,onOpenChange:p,isModal:m=!1,"aria-label":h,className:te}){return(0,V.jsxs)(ge,{open:f,defaultOpen:ee,onOpenChange:p&&(e=>p(e)),modal:m,children:[(0,V.jsx)(le,{render:e,openOnHover:d}),(0,V.jsx)(fe,{children:(0,V.jsx)(se,{className:z.positioner,side:i,align:a,sideOffset:s?10:6,children:(0,V.jsxs)(ye,{"aria-label":t?void 0:h,className:c(z.popup,te),children:[s&&(0,V.jsx)(y,{className:z.arrow}),(t||l)&&(0,V.jsxs)(`div`,{className:z.header,children:[t&&(0,V.jsx)(S,{className:z.title,children:t}),l&&(0,V.jsx)(O,{"aria-label":u,className:z.close,children:(0,V.jsx)(o,{name:`close`})})]}),m&&!l&&(0,V.jsx)(O,{"aria-label":u,className:c(z.close,z.hiddenClose),children:(0,V.jsx)(o,{name:`close`})}),n&&(0,V.jsx)(T,{className:z.description,children:n}),r&&(0,V.jsx)(`div`,{className:z.body,children:r})]})})})]})}var V;function we(){return(we=t((()=>{pe(),ue(),be(),he(),me(),b(),C(),k(),E(),a(),s(),B(),V=r(),Ce.__docgenInfo={description:``,methods:[],displayName:`Popover`,props:{trigger:{required:!0,tsType:{name:`ReactElement`},description:`The element that opens it: one button. Its props are merged, not wrapped.`},title:{required:!1,tsType:{name:`ReactNode`},description:"Names the popover (it is a dialog). Without one, pass `aria-label`."},description:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'right' | 'bottom' | 'left'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`}]},description:``,defaultValue:{value:`'bottom'`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:``,defaultValue:{value:`'center'`,computed:!1}},hasArrow:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hasCloseButton:{required:!1,tsType:{name:`boolean`},description:`A close button in the corner. Escape and a click outside close it either way.`,defaultValue:{value:`false`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Close'`,computed:!1}},openOnHover:{required:!1,tsType:{name:`boolean`},description:`Open on hover as well as click, for previews. Content must still be reachable by click and keyboard.`,defaultValue:{value:`false`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},isModal:{required:!1,tsType:{name:`boolean`},description:`Trap focus inside while open, lock page scroll and block clicks outside (Base UI's modal mode).`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Te=n({ContentOnly:()=>Z,Default:()=>Y,Modal:()=>Q,Open:()=>X,__namedExportsOrder:()=>De,default:()=>q}),H,U,Ee,W,G,K,q,J,Y,X,Z,Q,De;function $(){return($=t((()=>{ee(),xe(),we(),H=r(),{expect:U,fn:Ee,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,q={title:`Components/Overlays/Popover`,component:Ce,parameters:{a11y:{test:`error`}},args:{trigger:(0,H.jsx)(p,{appearance:`outlined`,variant:`accent`,children:`Share`}),title:`Share this file`,description:`Anyone you invite can view and comment.`,children:(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`end`},children:[(0,H.jsx)(Se,{label:`Email`,placeholder:`name@company.com`}),(0,H.jsx)(p,{children:`Invite`})]}),onOpenChange:Ee()},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},trigger:{control:!1},children:{control:!1}},decorators:[e=>(0,H.jsx)(`div`,{style:{minBlockSize:`16rem`,display:`flex`,justifyContent:`center`,alignItems:`start`,paddingBlock:`var(--space-6)`},children:e()})]},J=()=>K(document.body),Y={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Share`});await W.click(n);let r=await J().findByRole(`dialog`,{name:`Share this file`});await U(r).toHaveAccessibleDescription(`Anyone you invite can view and comment.`),await U(n).toHaveAttribute(`aria-expanded`,`true`),await U(e.onOpenChange).toHaveBeenLastCalledWith(!0),await W.keyboard(`{Escape}`),await G(()=>U(J().queryByRole(`dialog`)).toBeNull()),await U(n).toHaveFocus()}},X={args:{defaultOpen:!0,hasCloseButton:!0,hasArrow:!0},play:async()=>{let e=await J().findByRole(`dialog`);await W.click(K(e).getByRole(`button`,{name:`Close`})),await G(()=>U(J().queryByRole(`dialog`)).toBeNull())}},Z={args:{title:void 0,description:void 0,"aria-label":`Keyboard shortcuts`,trigger:(0,H.jsx)(p,{appearance:`ghost`,variant:`accent`,children:`Shortcuts`}),children:(0,H.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto auto`,gap:`var(--space-1) var(--space-4)`,margin:0},children:[(0,H.jsx)(`dt`,{children:`Search`}),(0,H.jsx)(`dd`,{style:{margin:0},children:`⌘ K`}),(0,H.jsx)(`dt`,{children:`New file`}),(0,H.jsx)(`dd`,{style:{margin:0},children:`⌘ N`})]})},play:async({canvas:e})=>{await W.click(e.getByRole(`button`,{name:`Shortcuts`}));let t=await J().findByRole(`dialog`,{name:`Keyboard shortcuts`});await G(()=>U(t).toBeVisible()),await U(t).toHaveTextContent(`⌘ K`)}},Q={args:{isModal:!0},play:async({canvas:e})=>{await W.click(e.getByRole(`button`,{name:`Share`}));let t=await J().findByRole(`dialog`);await G(()=>U(t.contains(document.activeElement)).toBe(!0)),await U(K(t).getByRole(`button`,{name:`Close`})).toHaveFocus()}},De=[`Default`,`Open`,`ContentOnly`,`Modal`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Share'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Share this file'
    });
    await expect(dialog).toHaveAccessibleDescription('Anyone you invite can view and comment.');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Escape closes it and puts focus back on the trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    hasCloseButton: true,
    hasArrow: true
  },
  play: async () => {
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...X.parameters?.docs?.source},description:{story:`Open from the start, with the close button and an arrow.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    'aria-label': 'Keyboard shortcuts',
    trigger: <Button appearance="ghost" variant="accent">Shortcuts</Button>,
    children: <dl style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gap: 'var(--space-1) var(--space-4)',
      margin: 0
    }}>
        <dt>Search</dt>
        <dd style={{
        margin: 0
      }}>⌘ K</dd>
        <dt>New file</dt>
        <dd style={{
        margin: 0
      }}>⌘ N</dd>
      </dl>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Shortcuts'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Keyboard shortcuts'
    });
    // It fades in from opacity 0.
    await waitFor(() => expect(dialog).toBeVisible());
    await expect(dialog).toHaveTextContent('⌘ K');
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Share'
    }));
    const dialog = await body().findByRole('dialog');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    // Focus moves in, to the first control. Base UI's modal mode then keeps
    // it there; a synthetic Tab cannot exercise that trap, so it is not asserted.
    // With no visible close button, a hidden one is rendered: Base UI only
    // traps focus when there is one, and it takes focus first.
    await expect(within(dialog).getByRole('button', {
      name: 'Close'
    })).toHaveFocus();
  }
}`,...Q.parameters?.docs?.source},description:{story:`Modal: focus moves inside and is kept there until it closes.`,...Q.parameters?.docs?.description}}}})))()}export{Te as a,X as i,Y as n,$ as o,Q as r,Z as t};