import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./icon-D2EAxy9f.js";import{n as ee,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as l}from"./useStableCallback-CiiHsHLZ.js";import{n as u,t as d}from"./useIsoLayoutEffect-pZTQXUp4.js";import{a as f,c as p,d as m,f as h,i as g,m as _,n as v,p as y,t as b}from"./useRenderElement-JLgEYJQi.js";import{n as x,t as S}from"./useButton-BKapWYk8.js";import{n as C,t as w}from"./useControlled-gPwvbF4e.js";import{n as T,t as te}from"./useBaseUiId-6AHk5GE-.js";import{n as ne,t as E}from"./useCompositeListItem-Cz2xKMqi.js";import{n as D,t as O}from"./stateAttributesMapping-CzWYZolq.js";import{n as k,t as A}from"./CompositeList-DObGx-Xq.js";import{a as re,c as ie,i as j,l as ae,n as oe,o as se,r as ce,s as le,t as ue,u as de}from"./useCollapsiblePanel-BsS7KJWJ.js";function fe(){let e=pe.useContext(me);if(e===void 0)throw Error(y(10));return e}var pe,me;function M(){return(M=t((()=>{_(),pe=e(i(),1),me=pe.createContext(void 0)})))()}var N,P,he,ge;function _e(){return(_e=t((()=>{N=e(i(),1),w(),l(),p(),k(),M(),b(),P=r(),he={value:()=>null},ge=N.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,hiddenUntilFound:a,keepMounted:o,loopFocus:ee,onValueChange:s,multiple:l=!1,orientation:u=`vertical`,value:d,defaultValue:p,style:m,...h}=e,g=p??f,_=N.useRef([]),[y,b]=C({controlled:d,default:g,name:`Accordion`,state:`value`}),x=c((e,t,n)=>{if(!l){let t=y[0]===e?[]:[e];if(s?.(t,n),n.isCanceled)return;b(t)}else if(t){let t=y.slice();if(t.push(e),s?.(t,n),n.isCanceled)return;b(t)}else{let t=y.filter(t=>t!==e);if(s?.(t,n),n.isCanceled)return;b(t)}}),S=N.useMemo(()=>({value:y,disabled:i,orientation:u}),[y,i,u]),w=N.useMemo(()=>({disabled:i,handleValueChange:x,hiddenUntilFound:a??!1,keepMounted:o??!1,state:S,value:y}),[i,x,a,o,S,y]),T=v(`div`,e,{state:S,ref:t,props:h,stateAttributesMapping:he});return(0,P.jsx)(me.Provider,{value:w,children:(0,P.jsx)(A,{elementsRef:_,children:T})})})})))()}function F(){let e=I.useContext(L);if(e===void 0)throw Error(y(9));return e}var I,L;function R(){return(R=t((()=>{_(),I=e(i(),1),L=I.createContext(void 0)})))()}var ve;function ye(){return(ye=t((()=>{ve=`data-index`})))()}var z;function B(){return(B=t((()=>{j(),O(),ye(),z={...ce,index:e=>({[ve]:String(e)}),...D,value:()=>null}})))()}var V,be,xe;function Se(){return(Se=t((()=>{V=e(i(),1),l(),m(),te(),ae(),le(),E(),M(),R(),B(),b(),be=r(),xe=V.forwardRef(function(e,t){let{className:n,disabled:r=!1,onOpenChange:i,render:a,value:o,style:ee,...s}=e,{ref:l,index:u}=ne(),d=h(t,l),{disabled:f,handleValueChange:p,state:m,value:g}=fe(),_=T(),y=o??_,b=r||f,x=g.indexOf(y)!==-1,S=c((e,t)=>{i?.(e,t),!t.isCanceled&&p(y,e,t)}),C=de({open:x,onOpenChange:S,disabled:b}),w=V.useMemo(()=>({open:C.open,disabled:C.disabled,transitionStatus:C.transitionStatus}),[C.open,C.disabled,C.transitionStatus]),te=V.useMemo(()=>({...C,onOpenChange:S,state:w}),[C,w,S]),E=V.useMemo(()=>({...m,hidden:!x&&!C.mounted,index:u,disabled:b,open:x}),[C.mounted,b,u,x,m]),D=T(),[O,k]=V.useState(),A=O===null?void 0:O??D,re=V.useMemo(()=>({defaultTriggerId:D,open:x,state:E,setTriggerId:k,triggerId:A}),[D,x,E,k,A]),ie=v(`div`,e,{state:E,ref:d,props:s,stateAttributesMapping:z});return(0,be.jsx)(se.Provider,{value:te,children:(0,be.jsx)(L.Provider,{value:re,children:ie})})})})))()}var Ce,we;function Te(){return(Te=t((()=>{Ce=e(i(),1),b(),R(),B(),we=Ce.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=F();return v(`h3`,e,{state:o,ref:t,props:a,stateAttributesMapping:z})})})))()}var Ee,De;function Oe(){return(Oe=t((()=>{Ee=e(i(),1),d(),j(),S(),le(),R(),b(),De=Ee.forwardRef(function(e,t){let{disabled:n,className:r,id:i,render:a,nativeButton:o=!0,style:ee,...s}=e,{panelId:c,open:l,handleTrigger:d,disabled:f}=ie(),{getButtonProps:p,buttonRef:m}=x({disabled:n||f,focusableWhenDisabled:!0,native:o}),{defaultTriggerId:h,state:g,setTriggerId:_}=F(),y=i||void 0,b=y??h;return u(()=>(_(e=>y??(e===null?void 0:e)),()=>{_(e=>e===y?null:e)}),[y,_]),v(`button`,e,{state:g,ref:[t,m],props:[{"aria-controls":l?c:void 0,"aria-expanded":l,id:b,onClick:d},s,p],stateAttributesMapping:re})})})))()}var ke,Ae;function je(){return(je=t((()=>{ke=`--accordion-panel-height`,Ae=`--accordion-panel-width`})))()}var Me,Ne;function Pe(){return(Pe=t((()=>{Me=e(i(),1),d(),le(),ue(),M(),R(),B(),je(),b(),Ne=Me.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,id:a,render:o,style:ee,...s}=e,{hiddenUntilFound:c,keepMounted:l}=fe(),{defaultPanelId:d,mounted:f,onOpenChange:p,open:m,setMounted:h,setOpen:_,setPanelIdState:y,transitionStatus:b}=ie(),x=r??c,S=i??l,C=a||void 0,w=a??d;u(()=>(y(e=>C??(e===null?void 0:e)),()=>{y(e=>e===C?null:e)}),[C,y]);let{height:T,props:te,ref:ne,shouldPreventOpenAnimation:E,shouldRender:D,transitionStatus:O,width:k}=oe({externalRef:t,hiddenUntilFound:x,id:w,keepMounted:S,mounted:f,onOpenChange:p,open:m,setMounted:h,setOpen:_,transitionStatus:b}),{state:A,triggerId:re}=F(),j={...A,transitionStatus:O},ae=g(ee,j),se=v(`div`,{...e,style:void 0},{state:j,ref:ne,props:[te,{"aria-labelledby":re,role:`region`,style:{[ke]:T===void 0?`auto`:`${T}px`,[Ae]:k===void 0?`auto`:`${k}px`}},s,ae?{style:ae}:void 0,E?{style:{animationName:`none`}}:void 0],stateAttributesMapping:z});return D?se:null})})))()}var Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,H;function Ke(){return(Ke=t((()=>{Fe=`_accordion_b0wgq_1`,Ie=`_sm_b0wgq_10`,Le=`_item_b0wgq_17`,Re=`_outlined_b0wgq_21`,ze=`_flush_b0wgq_27`,Be=`_header_b0wgq_35`,Ve=`_trigger_b0wgq_40`,He=`_title_b0wgq_88`,Ue=`_chevron_b0wgq_92`,We=`_panel_b0wgq_106`,Ge=`_content_b0wgq_117`,H={accordion:Fe,sm:Ie,item:Le,outlined:Re,flush:ze,header:Be,trigger:Ve,title:He,chevron:Ue,panel:We,content:Ge}})))()}function qe({items:e,onValueChange:t,appearance:n=`outlined`,size:r=`md`,headingLevel:i=3,className:a,...ee}){let c=`h${i}`;return(0,U.jsx)(ge,{...ee,onValueChange:t&&(e=>t(e)),hiddenUntilFound:!0,className:s(H.accordion,H[n],H[r],a),children:e.map(e=>(0,U.jsxs)(xe,{value:e.value,disabled:e.disabled,className:H.item,children:[(0,U.jsx)(we,{render:(0,U.jsx)(c,{}),className:H.header,children:(0,U.jsxs)(De,{className:H.trigger,children:[(0,U.jsx)(`span`,{className:H.title,children:e.title}),(0,U.jsx)(o,{name:`chevron-down`,className:H.chevron})]})}),(0,U.jsx)(Ne,{className:H.panel,children:(0,U.jsx)(`div`,{className:H.content,children:e.content})})]},e.value))})}var U;function Je(){return(Je=t((()=>{_e(),Se(),Te(),Oe(),Pe(),a(),ee(),Ke(),U=r(),qe.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`AccordionItem`}],raw:`AccordionItem[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Controlled: the values of the open items.`},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Base UI's event details are dropped.`},multiple:{required:!1,tsType:{name:`boolean`},description:`Allow more than one item open at once.`},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'flush'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'flush'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`The heading element each trigger sits in. Match it to the page's outline.`,defaultValue:{value:`3`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var Ye=n({Controlled:()=>$,Default:()=>K,DisabledItem:()=>Z,FindInPage:()=>Q,Flush:()=>Y,Headings:()=>q,Multiple:()=>J,Small:()=>X,__namedExportsOrder:()=>tt,default:()=>et}),Xe,W,G,Ze,Qe,$e,et,K,q,J,Y,X,Z,Q,$,tt;function nt(){return(nt=t((()=>{Xe=i(),Je(),W=r(),{expect:G,fn:Ze,waitFor:Qe}=__STORYBOOK_MODULE_TEST__,$e=[{value:`install`,title:`How do I install it?`,content:`Copy a component with the shadcn CLI, or install the npm package and import it.`},{value:`theme`,title:`Can I change the colours?`,content:`Wrap a subtree in Theme and pick an accent and a gray; every component follows.`},{value:`dark`,title:`Does it support dark mode?`,content:`Yes. Add the dark class to any element and everything inside switches.`}],et={title:`Components/Data Display/Accordion`,component:qe,parameters:{a11y:{test:`error`}},argTypes:{appearance:{control:`inline-radio`,options:[`outlined`,`flush`]},size:{control:`inline-radio`,options:[`sm`,`md`]},headingLevel:{control:`inline-radio`,options:[2,3,4,5,6]}},args:{items:$e,onValueChange:Ze()},decorators:[e=>(0,W.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})]},K={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`How do I install it?`});await G(r).toHaveAttribute(`aria-expanded`,`false`),await t.click(r),await G(r).toHaveAttribute(`aria-expanded`,`true`),await G(e.getByText(/Copy a component/)).toBeVisible(),await G(n.onValueChange).toHaveBeenLastCalledWith([`install`]),await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await G(r).toHaveAttribute(`aria-expanded`,`false`),await t.tab(),await G(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveFocus(),await t.keyboard(`{Enter}`),await G(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`true`),await t.keyboard(` `),await G(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`false`)}},q={args:{headingLevel:2},play:async({canvas:e})=>{await G(e.getAllByRole(`heading`,{level:2})).toHaveLength(3)}},J={args:{multiple:!0,defaultValue:[`install`]},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await G(e.getByRole(`button`,{name:`How do I install it?`})).toHaveAttribute(`aria-expanded`,`true`),await G(e.getByRole(`button`,{name:`Can I change the colours?`})).toHaveAttribute(`aria-expanded`,`true`)}},Y={args:{appearance:`flush`,defaultValue:[`theme`]}},X={args:{size:`sm`,defaultValue:[`install`]}},Z={args:{items:$e.map(e=>e.value===`dark`?{...e,disabled:!0}:e)},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Does it support dark mode?`});await t.click(n),await G(n).toHaveAttribute(`aria-expanded`,`false`)}},Q={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[hidden]`)].find(e=>e.textContent?.includes(`Copy a component`));await G(t).toHaveAttribute(`hidden`,`until-found`)}},$={render:function(e){let[t,n]=(0,Xe.useState)([]);return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,W.jsx)(qe,{...e,value:t,onValueChange:n}),(0,W.jsxs)(`span`,{children:[`Open: `,t.join(`, `)||`none`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await Qe(()=>G(e.getByText(`Open: theme`)).toBeVisible())}},tt=[`Default`,`Headings`,`Multiple`,`Flush`,`Small`,`DisabledItem`,`FindInPage`,`Controlled`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{nt as a,J as i,K as n,Y as r,Ye as t};