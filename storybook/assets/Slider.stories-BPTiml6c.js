import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{f as s,h as c}from"./useStableCallback-D10ebQio.js";import{n as l,t as u}from"./useRenderElement-BMuTcvdq.js";import{o as d}from"./shadowDom-DmVu_9Lp.js";import{n as f,r as p,t as m}from"./useLabel-CUqoWyxw.js";import{a as h,c as g,d as _,f as v,i as y,l as b,n as ee,o as te,r as ne,s as re,t as ie,u as x}from"./SliderThumb-B_2iooBB.js";import{r as ae,t as oe}from"./formatNumber-Diqi8AEZ.js";import{i as se,r as ce}from"./PrehydrationScript-CinpHN3x.js";import{n as le}from"./valueToPercent-BpVlHomU.js";var S,C;function ue(){return(ue=t((()=>{S=e(i(),1),s(),f(),u(),b(),_(),C=S.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=a;delete o.id;let{state:s,setLabelId:u,controlRef:f,rootLabelId:h}=x();function g(e,t){if(t){let n=d(e.currentTarget).getElementById(t);if(c(n)){m(n);return}}let n=f.current?.querySelectorAll(`input[type="range"]`),r=n?.length===1?n[0]:null;c(r)&&m(r)}let _=p({id:h,setLabelId:u,focusControl:g});return l(`div`,e,{ref:t,state:s,props:[_,a],stateAttributesMapping:v})})})))()}var w,de;function T(){return(T=t((()=>{w=e(i(),1),ae(),u(),b(),_(),de=w.forwardRef(function(e,t){let{"aria-live":n=`off`,render:r,className:i,children:a,style:o,...s}=e,{thumbMap:c,state:u,values:d,format:f,locale:p}=x(),m=Array.from(c.values(),({inputId:e})=>e).join(` `).trim()||void 0,h=w.useMemo(()=>d.map(e=>oe(e,p,f)),[f,p,d]),g=h.join(` – `);return l(`output`,e,{state:u,ref:t,props:[{"aria-live":n,children:typeof a==`function`?a(h,d):g,htmlFor:m},s],stateAttributesMapping:v})})})))()}function fe(e,t,n,r,i,a){let o={visibility:a||n&&(r===void 0||t&&i===void 0)?`hidden`:void 0,position:e?`absolute`:`relative`,[e?`width`:`height`]:`inherit`},s=`${r??0}%`,c=`${(i??0)-(r??0)}%`;return n&&(o[`--start-position`]=s,s=`var(--start-position)`,t&&(o[`--relative-size`]=c,c=`var(--relative-size)`)),o[e?`bottom`:`insetInlineStart`]=t?s:0,o[e?`height`:`width`]=t?c:s,o}var E,D;function O(){return(O=t((()=>{E=e(i(),1),ce(),u(),b(),_(),D=E.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{indicatorPosition:o,inset:s,max:c,min:u,orientation:d,renderBeforeHydration:f,state:p,values:m}=x(),h=se(),g=fe(d===`vertical`,m.length>1,s,s?o[0]:le(m[0],u,c),s?o[1]:le(m[m.length-1],u,c),s&&f&&h);return l(`div`,e,{state:p,ref:t,props:[{"data-base-ui-slider-indicator":f?``:void 0,style:g,suppressHydrationWarning:f||void 0},a],stateAttributesMapping:v})})})))()}var k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{k=`_slider_1tqei_1`,A=`_sm_1tqei_14`,j=`_vertical_1tqei_21`,M=`_header_1tqei_25`,N=`_label_1tqei_32`,P=`_value_1tqei_36`,F=`_control_1tqei_43`,I=`_track_1tqei_57`,L=`_indicator_1tqei_71`,R=`_thumb_1tqei_76`,z={slider:k,sm:A,vertical:j,header:M,label:N,value:P,control:F,track:I,indicator:L,thumb:R}})))()}function V({value:e,defaultValue:t,onValueChange:n,onValueCommitted:r,min:i=0,max:a=100,step:s=1,largeStep:c,label:l,showValue:u=!1,format:d,thumbLabels:f,size:p=`md`,orientation:m=`horizontal`,disabled:g=!1,name:_,"aria-label":v,className:y}){let b=e??t??i,ee=Array.isArray(b)?b.length:1;return(0,H.jsxs)(re,{value:e,defaultValue:t,onValueChange:n&&(e=>n(e)),onValueCommitted:r&&(e=>r(e)),min:i,max:a,step:s,largeStep:c,format:d,orientation:m,disabled:g,name:_,thumbAlignment:`edge`,className:o(z.slider,z[p],z[m],y),children:[(l||u)&&(0,H.jsxs)(`div`,{className:z.header,children:[l&&(0,H.jsx)(C,{className:z.label,children:l}),u&&(0,H.jsx)(de,{className:z.value,children:e=>e.join(` – `)})]}),(0,H.jsx)(h,{className:z.control,children:(0,H.jsxs)(ne,{className:z.track,children:[(0,H.jsx)(D,{className:z.indicator}),Array.from({length:ee},(e,t)=>(0,H.jsx)(ie,{index:t,className:z.thumb,getAriaLabel:f?e=>f[e]??``:l?void 0:()=>v??``},t))]})})]})}var H;function pe(){return(pe=t((()=>{g(),ue(),T(),te(),y(),O(),ee(),a(),B(),H=r(),V.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{value:{required:!1,tsType:{name:`V`},description:`A number for one thumb; an array of two for a range.`},defaultValue:{required:!1,tsType:{name:`V`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: V) => void`,signature:{arguments:[{type:{name:`V`},name:`value`}],return:{name:`void`}}},description:`While dragging.`},onValueCommitted:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: V) => void`,signature:{arguments:[{type:{name:`V`},name:`value`}],return:{name:`void`}}},description:`Once, when the pointer is released or a key is let go. Use it for anything expensive.`},min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},largeStep:{required:!1,tsType:{name:`number`},description:`Page Up / Page Down and Shift+arrow step.`},label:{required:!1,tsType:{name:`ReactNode`},description:`Visible label; also the accessible name of a single thumb.`},showValue:{required:!1,tsType:{name:`boolean`},description:`Show the current value (or range) after the label.`,defaultValue:{value:`false`,computed:!1}},format:{required:!1,tsType:{name:`Intl.NumberFormatOptions`},description:"How the value is written, e.g. `{ style: 'currency', currency: 'USD' }`."},thumbLabels:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"One name per thumb for a range, e.g. `['Minimum price', 'Maximum price']`."},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:"The accessible name when there is no visible `label`."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var me=n({Default:()=>q,Disabled:()=>$,Range:()=>J,Small:()=>X,Steps:()=>Y,Vertical:()=>Q,WithoutVisibleLabel:()=>Z,__namedExportsOrder:()=>_e,default:()=>ge}),he,U,W,G,K,ge,q,J,Y,X,Z,Q,$,_e;function ve(){return(ve=t((()=>{pe(),he=r(),{expect:U,fn:W,userEvent:G,waitFor:K}=__STORYBOOK_MODULE_TEST__,ge={title:`Components/Controls/Slider`,component:V,parameters:{a11y:{test:`error`}},args:{label:`Volume`,defaultValue:40,showValue:!0,onValueChange:W(),onValueCommitted:W()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]}},decorators:[e=>(0,he.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},q={play:async({args:e,canvas:t})=>{let n=t.getByRole(`slider`,{name:`Volume`});await U(n).toHaveAttribute(`aria-valuenow`,`40`),await U(t.getByText(`40`)).toBeVisible(),await G.click(n),await G.keyboard(`{ArrowRight}`),await K(()=>U(n).toHaveAttribute(`aria-valuenow`,`41`)),await U(e.onValueChange).toHaveBeenLastCalledWith(41),await G.keyboard(`{End}`),await K(()=>U(n).toHaveAttribute(`aria-valuenow`,`100`)),await U(e.onValueCommitted).toHaveBeenCalled()}},J={args:{label:`Price`,defaultValue:[20,80],format:{style:`currency`,currency:`USD`,maximumFractionDigits:0},thumbLabels:[`Minimum price`,`Maximum price`]},play:async({canvas:e})=>{await U(e.getByRole(`slider`,{name:`Minimum price`})).toHaveAttribute(`aria-valuenow`,`20`),await U(e.getByRole(`slider`,{name:`Maximum price`})).toHaveAttribute(`aria-valuenow`,`80`),await U(e.getByText(`$20 – $80`)).toBeVisible()}},Y={args:{label:`Rating`,defaultValue:3,min:1,max:5,step:1}},X={args:{size:`sm`}},Z={args:{label:void 0,showValue:!1,"aria-label":`Brush size`},play:async({canvas:e})=>{await U(e.getByRole(`slider`,{name:`Brush size`})).toBeVisible()}},Q={args:{orientation:`vertical`,label:`Level`},play:async({canvas:e})=>{await U(e.getByRole(`slider`)).toHaveAttribute(`aria-orientation`,`vertical`)}},$={args:{disabled:!0},play:async({canvas:e})=>{await U(e.getByRole(`slider`)).toBeDisabled()}},_e=[`Default`,`Range`,`Steps`,`Small`,`WithoutVisibleLabel`,`Vertical`,`Disabled`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const thumb = canvas.getByRole('slider', {
      name: 'Volume'
    });
    await expect(thumb).toHaveAttribute('aria-valuenow', '40');
    await expect(canvas.getByText('40')).toBeVisible();
    // Keyboard: arrows step by \`step\`, Page Up by \`largeStep\`, End to max.
    await userEvent.click(thumb);
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '41'));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(41);
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '100'));
    await expect(args.onValueCommitted).toHaveBeenCalled();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    defaultValue: [20, 80] as never,
    format: {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    },
    thumbLabels: ['Minimum price', 'Maximum price']
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider', {
      name: 'Minimum price'
    })).toHaveAttribute('aria-valuenow', '20');
    await expect(canvas.getByRole('slider', {
      name: 'Maximum price'
    })).toHaveAttribute('aria-valuenow', '80');
    await expect(canvas.getByText('$20 – $80')).toBeVisible();
  }
}`,...J.parameters?.docs?.source},description:{story:`Two thumbs, each with its own name.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    defaultValue: 3,
    min: 1,
    max: 5,
    step: 1
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    showValue: false,
    'aria-label': 'Brush size'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider', {
      name: 'Brush size'
    })).toBeVisible();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    label: 'Level'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider')).toBeDisabled();
  }
}`,...$.parameters?.docs?.source}}}})))()}export{X as a,Z as c,me as i,ve as l,$ as n,Y as o,J as r,Q as s,q as t};