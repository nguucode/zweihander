import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{n as s,t as c}from"./useRenderElement-BMuTcvdq.js";import{n as l,t as u}from"./useButton-DvXmwjM6.js";import{n as d,t as f}from"./Button-BdtJKtga.js";import{n as p,t as m}from"./icon-Dc4hTclj.js";import{n as h,t as g}from"./useBaseUiId-DYEHfiI7.js";import{m as ee,o as te,r as ne,t as re}from"./createBaseUIEventDetails-BcktkkBO.js";import{a as ie,c as ae,d as oe,f as se,i as ce,l as le,m as _,n as ue,o as de,p as v,r as fe,s as pe,t as me,u as he}from"./PopoverPopup-Inu_SKPK.js";import{n as ge,t as _e}from"./TextInput-ceLmDhn8.js";var y,b;function x(){return(x=t((()=>{y=e(i(),1),v(),c(),g(),b=y.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=_(),c=h(a.id);return o.useSyncedValueWithCleanup(`titleElementId`,c),s(`h2`,e,{ref:t,props:[{id:c},a]})})})))()}var S,C;function w(){return(w=t((()=>{S=e(i(),1),v(),g(),c(),C=S.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=_(),c=h(a.id);return o.useSyncedValueWithCleanup(`descriptionElementId`,c),s(`p`,e,{ref:t,props:[{id:c},a]})})})))()}var T,E;function D(){return(D=t((()=>{T=e(i(),1),v(),c(),u(),ne(),ee(),fe(),E=T.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...c}=e,{buttonRef:u,getButtonProps:d}=l({disabled:a,focusableWhenDisabled:!1,native:o}),f=_();return ce(),s(`button`,e,{ref:[t,u],props:[{onClick(e){f.setOpen(!1,re(te,e.nativeEvent))}},c,d]})})})))()}var O,k,A,j,M,ve,N,P,F;function I(){return(I=t((()=>{O=`_positioner_281n7_3`,k=`_popup_281n7_7`,A=`_header_281n7_33`,j=`_title_281n7_40`,M=`_description_281n7_47`,ve=`_body_281n7_52`,N=`_close_281n7_57`,P=`_hiddenClose_281n7_93`,F={positioner:O,popup:k,header:A,title:j,description:M,body:ve,close:N,hiddenClose:P}})))()}function L({trigger:e,title:t,description:n,children:r,side:i=`bottom`,align:a=`center`,hasCloseButton:s=!1,closeLabel:c=`Close`,openOnHover:l=!1,open:u,defaultOpen:d,onOpenChange:f,isModal:p=!1,"aria-label":h,className:g}){return(0,R.jsxs)(oe,{open:u,defaultOpen:d,onOpenChange:f&&(e=>f(e)),modal:p,children:[(0,R.jsx)(le,{render:e,openOnHover:l}),(0,R.jsx)(pe,{children:(0,R.jsx)(ie,{className:F.positioner,side:i,align:a,sideOffset:6,children:(0,R.jsxs)(me,{"aria-label":t?void 0:h,className:o(F.popup,g),children:[(t||s)&&(0,R.jsxs)(`div`,{className:F.header,children:[t&&(0,R.jsx)(b,{className:F.title,children:t}),s&&(0,R.jsx)(E,{"aria-label":c,className:F.close,children:(0,R.jsx)(m,{name:`close`})})]}),p&&!s&&(0,R.jsx)(E,{"aria-label":c,className:o(F.close,F.hiddenClose),children:(0,R.jsx)(m,{name:`close`})}),n&&(0,R.jsx)(C,{className:F.description,children:n}),r&&(0,R.jsx)(`div`,{className:F.body,children:r})]})})})]})}var R;function z(){return(z=t((()=>{se(),he(),ae(),de(),ue(),x(),D(),w(),p(),a(),I(),R=r(),L.__docgenInfo={description:``,methods:[],displayName:`Popover`,props:{trigger:{required:!0,tsType:{name:`ReactElement`},description:`The element that opens it: one button. Its props are merged, not wrapped.`},title:{required:!1,tsType:{name:`ReactNode`},description:"Names the popover (it is a dialog). Without one, pass `aria-label`."},description:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},side:{required:!1,tsType:{name:`union`,raw:`'top' | 'right' | 'bottom' | 'left'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`}]},description:``,defaultValue:{value:`'bottom'`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`}]},description:``,defaultValue:{value:`'center'`,computed:!1}},hasCloseButton:{required:!1,tsType:{name:`boolean`},description:`A close button in the corner. Escape and a click outside close it either way.`,defaultValue:{value:`false`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Close'`,computed:!1}},openOnHover:{required:!1,tsType:{name:`boolean`},description:`Open on hover as well as click, for previews. Content must still be reachable by click and keyboard.`,defaultValue:{value:`false`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},isModal:{required:!1,tsType:{name:`boolean`},description:`Trap focus inside while open, lock page scroll and block clicks outside (Base UI's modal mode).`,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ye=n({ContentOnly:()=>X,Default:()=>J,Modal:()=>Z,Open:()=>Y,__namedExportsOrder:()=>Q,default:()=>K}),B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{d(),ge(),z(),B=r(),{expect:V,fn:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K={title:`Components/Overlays/Popover`,component:L,parameters:{a11y:{test:`error`}},args:{trigger:(0,B.jsx)(f,{appearance:`outlined`,variant:`accent`,children:`Share`}),title:`Share this file`,description:`Anyone you invite can view and comment.`,children:(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`end`},children:[(0,B.jsx)(_e,{label:`Email`,placeholder:`name@company.com`}),(0,B.jsx)(f,{children:`Invite`})]}),onOpenChange:H()},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},trigger:{control:!1},children:{control:!1}},decorators:[e=>(0,B.jsx)(`div`,{style:{minBlockSize:`16rem`,display:`flex`,justifyContent:`center`,alignItems:`start`,paddingBlock:`var(--space-6)`},children:e()})]},q=()=>G(document.body),J={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Share`});await U.click(n);let r=await q().findByRole(`dialog`,{name:`Share this file`});await V(r).toHaveAccessibleDescription(`Anyone you invite can view and comment.`),await V(n).toHaveAttribute(`aria-expanded`,`true`),await V(e.onOpenChange).toHaveBeenLastCalledWith(!0),await U.keyboard(`{Escape}`),await W(()=>V(q().queryByRole(`dialog`)).toBeNull()),await V(n).toHaveFocus()}},Y={args:{defaultOpen:!0,hasCloseButton:!0},play:async()=>{let e=await q().findByRole(`dialog`);await U.click(G(e).getByRole(`button`,{name:`Close`})),await W(()=>V(q().queryByRole(`dialog`)).toBeNull())}},X={args:{title:void 0,description:void 0,"aria-label":`Keyboard shortcuts`,trigger:(0,B.jsx)(f,{appearance:`ghost`,variant:`accent`,children:`Shortcuts`}),children:(0,B.jsxs)(`dl`,{style:{display:`grid`,gridTemplateColumns:`auto auto`,gap:`var(--space-1) var(--space-4)`,margin:0},children:[(0,B.jsx)(`dt`,{children:`Search`}),(0,B.jsx)(`dd`,{style:{margin:0},children:`⌘ K`}),(0,B.jsx)(`dt`,{children:`New file`}),(0,B.jsx)(`dd`,{style:{margin:0},children:`⌘ N`})]})},play:async({canvas:e})=>{await U.click(e.getByRole(`button`,{name:`Shortcuts`}));let t=await q().findByRole(`dialog`,{name:`Keyboard shortcuts`});await W(()=>V(t).toBeVisible()),await V(t).toHaveTextContent(`⌘ K`)}},Z={args:{isModal:!0},play:async({canvas:e})=>{await U.click(e.getByRole(`button`,{name:`Share`}));let t=await q().findByRole(`dialog`);await W(()=>V(t.contains(document.activeElement)).toBe(!0)),await V(G(t).getByRole(`button`,{name:`Close`})).toHaveFocus()}},Q=[`Default`,`Open`,`ContentOnly`,`Modal`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    hasCloseButton: true
  },
  play: async () => {
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Close'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...Y.parameters?.docs?.source},description:{story:`Open from the start, with the close button.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Modal: focus moves inside and is kept there until it closes.`,...Z.parameters?.docs?.description}}}})))()}export{ye as a,Y as i,J as n,$ as o,Z as r,X as t};