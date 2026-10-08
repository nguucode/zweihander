import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{n as s,t as c}from"./useStableCallback-D10ebQio.js";import{n as l,t as u}from"./useIsoLayoutEffect-DlZGxu_J.js";import{a as d,c as f,d as p,f as m,i as ee,m as h,n as g,p as _,t as v}from"./useRenderElement-BMuTcvdq.js";import{n as y,t as b}from"./useButton-DvXmwjM6.js";import{n as x,t as S}from"./icon-Dc4hTclj.js";import{n as C,t as w}from"./useControlled-_gtp84q_.js";import{n as T,t as E}from"./useBaseUiId-DYEHfiI7.js";import{n as te,t as D}from"./useCompositeListItem-BY-KI59I.js";import{n as O,t as k}from"./stateAttributesMapping-BlyEAp0f.js";import{n as A,t as j}from"./CompositeList-CC4yVXmb.js";import{a as ne,c as re,i as M,l as ie,n as ae,o as oe,r as se,s as ce,t as le,u as ue}from"./useCollapsiblePanel-DyzImQEg.js";function de(){let e=fe.useContext(pe);if(e===void 0)throw Error(_(10));return e}var fe,pe;function N(){return(N=t((()=>{h(),fe=e(i(),1),pe=fe.createContext(void 0)})))()}var P,me,he,ge;function _e(){return(_e=t((()=>{P=e(i(),1),w(),c(),f(),A(),N(),v(),me=r(),he={value:()=>null},ge=P.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,hiddenUntilFound:a,keepMounted:o,loopFocus:c,onValueChange:l,multiple:u=!1,orientation:f=`vertical`,value:p,defaultValue:m,style:ee,...h}=e,_=m??d,v=P.useRef([]),[y,b]=C({controlled:p,default:_,name:`Accordion`,state:`value`}),x=s((e,t,n)=>{if(!u){let t=y[0]===e?[]:[e];if(l?.(t,n),n.isCanceled)return;b(t)}else if(t){let t=y.slice();if(t.push(e),l?.(t,n),n.isCanceled)return;b(t)}else{let t=y.filter(t=>t!==e);if(l?.(t,n),n.isCanceled)return;b(t)}}),S=P.useMemo(()=>({value:y,disabled:i,orientation:f}),[y,i,f]),w=P.useMemo(()=>({disabled:i,handleValueChange:x,hiddenUntilFound:a??!1,keepMounted:o??!1,state:S,value:y}),[i,x,a,o,S,y]),T=g(`div`,e,{state:S,ref:t,props:h,stateAttributesMapping:he});return(0,me.jsx)(pe.Provider,{value:w,children:(0,me.jsx)(j,{elementsRef:v,children:T})})})})))()}function F(){let e=I.useContext(ve);if(e===void 0)throw Error(_(9));return e}var I,ve;function L(){return(L=t((()=>{h(),I=e(i(),1),ve=I.createContext(void 0)})))()}var ye;function be(){return(be=t((()=>{ye=`data-index`})))()}var R;function z(){return(z=t((()=>{M(),k(),be(),R={...se,index:e=>({[ye]:String(e)}),...O,value:()=>null}})))()}var B,xe,Se;function Ce(){return(Ce=t((()=>{B=e(i(),1),c(),p(),E(),ie(),ce(),D(),N(),L(),z(),v(),xe=r(),Se=B.forwardRef(function(e,t){let{className:n,disabled:r=!1,onOpenChange:i,render:a,value:o,style:c,...l}=e,{ref:u,index:d}=te(),f=m(t,u),{disabled:p,handleValueChange:ee,state:h,value:_}=de(),v=T(),y=o??v,b=r||p,x=_.indexOf(y)!==-1,S=s((e,t)=>{i?.(e,t),!t.isCanceled&&ee(y,e,t)}),C=ue({open:x,onOpenChange:S,disabled:b}),w=B.useMemo(()=>({open:C.open,disabled:C.disabled,transitionStatus:C.transitionStatus}),[C.open,C.disabled,C.transitionStatus]),E=B.useMemo(()=>({...C,onOpenChange:S,state:w}),[C,w,S]),D=B.useMemo(()=>({...h,hidden:!x&&!C.mounted,index:d,disabled:b,open:x}),[C.mounted,b,d,x,h]),O=T(),[k,A]=B.useState(),j=k===null?void 0:k??O,ne=B.useMemo(()=>({defaultTriggerId:O,open:x,state:D,setTriggerId:A,triggerId:j}),[O,x,D,A,j]),re=g(`div`,e,{state:D,ref:f,props:l,stateAttributesMapping:R});return(0,xe.jsx)(oe.Provider,{value:E,children:(0,xe.jsx)(ve.Provider,{value:ne,children:re})})})})))()}var we,Te;function Ee(){return(Ee=t((()=>{we=e(i(),1),v(),L(),z(),Te=we.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=F();return g(`h3`,e,{state:o,ref:t,props:a,stateAttributesMapping:R})})})))()}var De,Oe;function ke(){return(ke=t((()=>{De=e(i(),1),u(),M(),b(),ce(),L(),v(),Oe=De.forwardRef(function(e,t){let{disabled:n,className:r,id:i,render:a,nativeButton:o=!0,style:s,...c}=e,{panelId:u,open:d,handleTrigger:f,disabled:p}=re(),{getButtonProps:m,buttonRef:ee}=y({disabled:n||p,focusableWhenDisabled:!0,native:o}),{defaultTriggerId:h,state:_,setTriggerId:v}=F(),b=i||void 0,x=b??h;return l(()=>(v(e=>b??(e===null?void 0:e)),()=>{v(e=>e===b?null:e)}),[b,v]),g(`button`,e,{state:_,ref:[t,ee],props:[{"aria-controls":d?u:void 0,"aria-expanded":d,id:x,onClick:f},c,m],stateAttributesMapping:ne})})})))()}var Ae,je;function Me(){return(Me=t((()=>{Ae=`--accordion-panel-height`,je=`--accordion-panel-width`})))()}var Ne,Pe;function Fe(){return(Fe=t((()=>{Ne=e(i(),1),u(),ce(),le(),N(),L(),z(),Me(),v(),Pe=Ne.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,id:a,render:o,style:s,...c}=e,{hiddenUntilFound:u,keepMounted:d}=de(),{defaultPanelId:f,mounted:p,onOpenChange:m,open:h,setMounted:_,setOpen:v,setPanelIdState:y,transitionStatus:b}=re(),x=r??u,S=i??d,C=a||void 0,w=a??f;l(()=>(y(e=>C??(e===null?void 0:e)),()=>{y(e=>e===C?null:e)}),[C,y]);let{height:T,props:E,ref:te,shouldPreventOpenAnimation:D,shouldRender:O,transitionStatus:k,width:A}=ae({externalRef:t,hiddenUntilFound:x,id:w,keepMounted:S,mounted:p,onOpenChange:m,open:h,setMounted:_,setOpen:v,transitionStatus:b}),{state:j,triggerId:ne}=F(),M={...j,transitionStatus:k},ie=ee(s,M),oe=g(`div`,{...e,style:void 0},{state:M,ref:te,props:[E,{"aria-labelledby":ne,role:`region`,style:{[Ae]:T===void 0?`auto`:`${T}px`,[je]:A===void 0?`auto`:`${A}px`}},c,ie?{style:ie}:void 0,D?{style:{animationName:`none`}}:void 0],stateAttributesMapping:R});return O?oe:null})})))()}var Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,V;function qe(){return(qe=t((()=>{Ie=`_accordion_1do7l_1`,Le=`_sm_1do7l_11`,Re=`_item_1do7l_19`,ze=`_outlined_1do7l_23`,Be=`_flush_1do7l_29`,Ve=`_header_1do7l_37`,He=`_trigger_1do7l_42`,Ue=`_title_1do7l_91`,We=`_chevron_1do7l_95`,Ge=`_panel_1do7l_109`,Ke=`_content_1do7l_120`,V={accordion:Ie,sm:Le,item:Re,outlined:ze,flush:Be,header:Ve,trigger:He,title:Ue,chevron:We,panel:Ge,content:Ke}})))()}function Je({items:e,onValueChange:t,appearance:n=`outlined`,size:r=`md`,headingLevel:i=3,className:a,...s}){let c=`h${i}`;return(0,H.jsx)(ge,{...s,onValueChange:t&&(e=>t(e)),hiddenUntilFound:!0,className:o(V.accordion,V[n],V[r],a),children:e.map(e=>(0,H.jsxs)(Se,{value:e.value,disabled:e.disabled,className:V.item,children:[(0,H.jsx)(Te,{render:(0,H.jsx)(c,{}),className:V.header,children:(0,H.jsxs)(Oe,{className:V.trigger,children:[(0,H.jsx)(`span`,{className:V.title,children:e.title}),(0,H.jsx)(S,{name:`chevron-down`,className:V.chevron})]})}),(0,H.jsx)(Pe,{className:V.panel,children:(0,H.jsx)(`div`,{className:V.content,children:e.content})})]},e.value))})}var H;function Ye(){return(Ye=t((()=>{_e(),Ce(),Ee(),ke(),Fe(),x(),a(),qe(),H=r(),Je.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`AccordionItem`}],raw:`AccordionItem[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Controlled: the values of the open items.`},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Base UI's event details are dropped.`},multiple:{required:!1,tsType:{name:`boolean`},description:`Allow more than one item open at once.`},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'flush'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'flush'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`The heading element each trigger sits in. Match it to the page's outline.`,defaultValue:{value:`3`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Xe=n({Controlled:()=>$,Default:()=>K,DisabledItem:()=>Z,FindInPage:()=>Q,Flush:()=>Y,Headings:()=>q,Multiple:()=>J,Small:()=>X,__namedExportsOrder:()=>tt,default:()=>et}),Ze,U,W,Qe,$e,G,et,K,q,J,Y,X,Z,Q,$,tt;function nt(){return(nt=t((()=>{Ze=i(),Ye(),U=r(),{expect:W,fn:Qe,waitFor:$e}=__STORYBOOK_MODULE_TEST__,G=[{value:`install`,title:`How do I install it?`,content:`Copy a component with the shadcn CLI, or install the npm package and import it.`},{value:`theme`,title:`Can I change the colours?`,content:`Wrap a subtree in Theme and pick an accent and a gray; every component follows.`},{value:`dark`,title:`Does it support dark mode?`,content:`Yes. Add the dark class to any element and everything inside switches.`}],et={title:`Components/Data Display/Accordion`,component:Je,parameters:{a11y:{test:`error`}},argTypes:{appearance:{control:`inline-radio`,options:[`outlined`,`flush`]},size:{control:`inline-radio`,options:[`sm`,`md`]},headingLevel:{control:`inline-radio`,options:[2,3,4,5,6]}},args:{items:G,onValueChange:Qe()},decorators:[e=>(0,U.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})]},K={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`How do I install it?`});await W(r).toHaveAttribute(`aria-expanded`,`false`),await t.click(r),await W(r).toHaveAttribute(`aria-expanded`,`true`),await W(e.getByText(/Copy a component/)).toBeVisible(),await W(n.onValueChange).toHaveBeenLastCalledWith([`install`]),await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await W(r).toHaveAttribute(`aria-expanded`,`false`),await t.tab(),await W(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveFocus(),await t.keyboard(`{Enter}`),await W(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`true`),await t.keyboard(` `),await W(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`false`)}},q={args:{headingLevel:2},play:async({canvas:e})=>{await W(e.getAllByRole(`heading`,{level:2})).toHaveLength(3)}},J={args:{multiple:!0,defaultValue:[`install`]},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await W(e.getByRole(`button`,{name:`How do I install it?`})).toHaveAttribute(`aria-expanded`,`true`),await W(e.getByRole(`button`,{name:`Can I change the colours?`})).toHaveAttribute(`aria-expanded`,`true`)}},Y={args:{appearance:`flush`,defaultValue:[`theme`]}},X={args:{size:`sm`,defaultValue:[`install`]}},Z={args:{items:G.map(e=>e.value===`dark`?{...e,disabled:!0}:e)},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Does it support dark mode?`});await t.click(n),await W(n).toHaveAttribute(`aria-expanded`,`false`)}},Q={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[hidden]`)].find(e=>e.textContent?.includes(`Copy a component`));await W(t).toHaveAttribute(`hidden`,`until-found`)}},$={render:function(e){let[t,n]=(0,Ze.useState)([]);return(0,U.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,U.jsx)(Je,{...e,value:t,onValueChange:n}),(0,U.jsxs)(`span`,{children:[`Open: `,t.join(`, `)||`none`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await $e(()=>W(e.getByText(`Open: theme`)).toBeVisible())}},tt=[`Default`,`Headings`,`Multiple`,`Flush`,`Small`,`DisabledItem`,`FindInPage`,`Controlled`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const install = canvas.getByRole('button', {
      name: 'How do I install it?'
    });
    await expect(install).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(install);
    await expect(install).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(/Copy a component/)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['install']);
    // Single mode: opening another closes the first.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await expect(install).toHaveAttribute('aria-expanded', 'false');
    // Each trigger is a tab stop; Enter and Space toggle.
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveAttribute('aria-expanded', 'false');
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    headingLevel: 2
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('heading', {
      level: 2
    })).toHaveLength(3);
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: ['install']
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await expect(canvas.getByRole('button', {
      name: 'How do I install it?'
    })).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'flush',
    defaultValue: ['theme']
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: ['install']
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    items: faq.map(i => i.value === 'dark' ? {
      ...i,
      disabled: true
    } : i)
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const dark = canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    });
    await userEvent.click(dark);
    await expect(dark).toHaveAttribute('aria-expanded', 'false');
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const panel = [...canvasElement.querySelectorAll('[hidden]')].find(el => el.textContent?.includes('Copy a component'));
    await expect(panel).toHaveAttribute('hidden', 'until-found');
  }
}`,...Q.parameters?.docs?.source},description:{story:`Collapsed panels stay in the DOM, so find-in-page can reach them.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([]);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)'
    }}>
        <Accordion {...args} value={open} onValueChange={setOpen} />
        <span>Open: {open.join(', ') || 'none'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await waitFor(() => expect(canvas.getByText('Open: theme')).toBeVisible());
  }
}`,...$.parameters?.docs?.source}}}})))()}export{nt as a,J as i,K as n,Y as r,Xe as t};