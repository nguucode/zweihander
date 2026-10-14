import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useRenderElement-euNwqn97.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{f as l,h as u}from"./useStableCallback-BEuE3z7O.js";import{o as d}from"./shadowDom-DQlB61gq.js";import{i as f,r as p}from"./PrehydrationScript-BVaHcaZV.js";import{n as m,t as h}from"./expectAnatomy-C52ByQ6s.js";import{n as g,r as _,t as v}from"./useLabel-CVENVzak.js";import{a as ee,c as y,d as b,f as x,i as te,l as S,n as ne,o as re,r as ie,s as ae,t as oe,u as C}from"./SliderThumb-C_GbAlvR.js";import{r as se,t as ce}from"./formatNumber-Diqi8AEZ.js";import{n as le}from"./valueToPercent-BpVlHomU.js";var ue,w;function T(){return(T=t((()=>{ue=e(r(),1),l(),g(),a(),S(),b(),w=ue.forwardRef(function(e,t){let{render:n,className:r,style:a,...o}=e,s=o;delete s.id;let{state:c,setLabelId:l,controlRef:f,rootLabelId:p}=C();function m(e,t){if(t){let n=d(e.currentTarget).getElementById(t);if(u(n)){v(n);return}}let n=f.current?.querySelectorAll(`input[type="range"]`),r=n?.length===1?n[0]:null;u(r)&&v(r)}let h=_({id:p,setLabelId:l,focusControl:m});return i(`div`,e,{ref:t,state:c,props:[h,o],stateAttributesMapping:x})})})))()}var E,D;function de(){return(de=t((()=>{E=e(r(),1),se(),a(),S(),b(),D=E.forwardRef(function(e,t){let{"aria-live":n=`off`,render:r,className:a,children:o,style:s,...c}=e,{thumbMap:l,state:u,values:d,format:f,locale:p}=C(),m=Array.from(l.values(),({inputId:e})=>e).join(` `).trim()||void 0,h=E.useMemo(()=>d.map(e=>ce(e,p,f)),[f,p,d]),g=h.join(` – `);return i(`output`,e,{state:u,ref:t,props:[{"aria-live":n,children:typeof o==`function`?o(h,d):g,htmlFor:m},c],stateAttributesMapping:x})})})))()}function fe(e,t,n,r,i,a){let o={visibility:a||n&&(r===void 0||t&&i===void 0)?`hidden`:void 0,position:e?`absolute`:`relative`,[e?`width`:`height`]:`inherit`},s=`${r??0}%`,c=`${(i??0)-(r??0)}%`;return n&&(o[`--start-position`]=s,s=`var(--start-position)`,t&&(o[`--relative-size`]=c,c=`var(--relative-size)`)),o[e?`bottom`:`insetInlineStart`]=t?s:0,o[e?`height`:`width`]=t?c:s,o}var pe,me;function he(){return(he=t((()=>{pe=e(r(),1),p(),a(),S(),b(),me=pe.forwardRef(function(e,t){let{render:n,className:r,style:a,...o}=e,{indicatorPosition:s,inset:c,max:l,min:u,orientation:d,renderBeforeHydration:p,state:m,values:h}=C(),g=f(),_=fe(d===`vertical`,h.length>1,c,c?s[0]:le(h[0],u,l),c?s[1]:le(h[h.length-1],u,l),c&&p&&g);return i(`div`,e,{state:m,ref:t,props:[{"data-base-ui-slider-indicator":p?``:void 0,style:_,suppressHydrationWarning:p||void 0},o],stateAttributesMapping:x})})})))()}var ge,_e,ve,ye,O,k,A,j,M,N,P;function F(){return(F=t((()=>{ge=`_slider_1hrej_1`,_e=`_sm_1hrej_14`,ve=`_vertical_1hrej_21`,ye=`_header_1hrej_25`,O=`_label_1hrej_32`,k=`_value_1hrej_36`,A=`_control_1hrej_43`,j=`_track_1hrej_57`,M=`_indicator_1hrej_71`,N=`_thumb_1hrej_76`,P={slider:ge,sm:_e,vertical:ve,header:ye,label:O,value:k,control:A,track:j,indicator:M,thumb:N}})))()}function I({value:e,defaultValue:t,onValueChange:n,onValueCommitted:r,min:i=0,max:a=100,step:o=1,largeStep:c,label:l,showValue:u=!1,format:d,thumbLabels:f,size:p=`md`,orientation:m=`horizontal`,disabled:h=!1,name:g,"aria-label":_,className:v}){let y=e??t??i,b=Array.isArray(y)?y.length:1;return(0,L.jsxs)(ae,{value:e,defaultValue:t,onValueChange:n&&(e=>n(e)),onValueCommitted:r&&(e=>r(e)),min:i,max:a,step:o,largeStep:c,format:d,orientation:m,disabled:h,name:g,thumbAlignment:`edge`,className:s(P.slider,P[p],P[m],v),children:[(l||u)&&(0,L.jsxs)(`div`,{className:P.header,children:[l&&(0,L.jsx)(w,{className:P.label,children:l}),u&&(0,L.jsx)(D,{className:P.value,children:e=>e.join(` – `)})]}),(0,L.jsx)(ee,{className:P.control,children:(0,L.jsxs)(ie,{className:P.track,children:[(0,L.jsx)(me,{className:P.indicator}),Array.from({length:b},(e,t)=>(0,L.jsx)(oe,{index:t,className:P.thumb,getAriaLabel:f?e=>f[e]??``:l?void 0:()=>_??``},t))]})})]})}var L;function R(){return(R=t((()=>{y(),T(),de(),re(),te(),he(),ne(),o(),F(),L=c(),I.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{value:{required:!1,tsType:{name:`V`},description:`A number for one thumb; an array of two for a range.`},defaultValue:{required:!1,tsType:{name:`V`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: V) => void`,signature:{arguments:[{type:{name:`V`},name:`value`}],return:{name:`void`}}},description:`While dragging.`},onValueCommitted:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: V) => void`,signature:{arguments:[{type:{name:`V`},name:`value`}],return:{name:`void`}}},description:`Once, when the pointer is released or a key is let go. Use it for anything expensive.`},min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},largeStep:{required:!1,tsType:{name:`number`},description:`Page Up / Page Down and Shift+arrow step.`},label:{required:!1,tsType:{name:`ReactNode`},description:`Visible label; also the accessible name of a single thumb.`},showValue:{required:!1,tsType:{name:`boolean`},description:`Show the current value (or range) after the label.`,defaultValue:{value:`false`,computed:!1}},format:{required:!1,tsType:{name:`Intl.NumberFormatOptions`},description:"How the value is written, e.g. `{ style: 'currency', currency: 'USD' }`."},thumbLabels:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"One name per thumb for a range, e.g. `['Minimum price', 'Maximum price']`."},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:"The accessible name when there is no visible `label`."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var be=n({Anatomy:()=>Z,Default:()=>U,Disabled:()=>Y,DoApproximate:()=>Q,DontExactNumber:()=>$,Range:()=>W,Small:()=>K,Steps:()=>G,Vertical:()=>J,WithoutVisibleLabel:()=>q,__namedExportsOrder:()=>Ce,anatomyParts:()=>X,default:()=>Se}),xe,z,B,V,H,Se,U,W,G,K,q,J,Y,X,Z,Q,$,Ce;function we(){return(we=t((()=>{m(),R(),xe=c(),{expect:z,fn:B,userEvent:V,waitFor:H}=__STORYBOOK_MODULE_TEST__,Se={title:`Components/Controls/Slider`,tags:[`beta`],component:I,args:{label:`Volume`,defaultValue:40,showValue:!0,onValueChange:B(),onValueCommitted:B()},argTypes:{value:{description:`Controlled value: a number for one thumb, an array of two for a range.`,control:!1,table:{type:{summary:`number | number[]`}}},defaultValue:{description:`Starting value when uncontrolled. An array makes it a range.`,control:!1,table:{type:{summary:`number | number[]`},defaultValue:{summary:`min`}}},onValueChange:{description:`Called on every step while dragging or pressing keys.`,control:!1,table:{type:{summary:`(value: number | number[]) => void`}}},onValueCommitted:{description:`Called once, when the pointer or key is released. Use it for anything expensive.`,control:!1,table:{type:{summary:`(value: number | number[]) => void`}}},min:{description:`The lowest value.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},max:{description:`The highest value.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`100`}}},step:{description:`What an arrow key moves by, and the values a drag snaps to.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},largeStep:{description:`What Page Up, Page Down and Shift with an arrow move by.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`10`}}},label:{description:`Visible label over the track; also the name of a single thumb.`,control:`text`,table:{type:{summary:`ReactNode`}}},showValue:{description:`Shows the value, or the range, after the label.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},format:{description:'How the value is written and spoken, e.g. `{ style: "currency", currency: "USD" }`.',control:!1,table:{type:{summary:`Intl.NumberFormatOptions`}}},thumbLabels:{description:'One name per thumb for a range, e.g. `["Minimum price", "Maximum price"]`.',control:!1,table:{type:{summary:`string[]`}}},size:{description:"A 20px thumb on a 6px track (`md`), or 16px on 4px with a 12px label (`sm`).",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},orientation:{description:`A vertical slider is 12rem tall; arrow keys follow the axis.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},disabled:{description:`Dims the control and stops it moving. The label and value stay readable.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:`Submitted with a form.`,control:`text`,table:{type:{summary:`string`}}},"aria-label":{description:"The name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`}}}},decorators:[e=>(0,xe.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})],excludeStories:[`anatomyParts`]},U={play:async({args:e,canvas:t})=>{let n=t.getByRole(`slider`,{name:`Volume`});await z(n).toHaveAttribute(`aria-valuenow`,`40`),await z(t.getByText(`40`)).toBeVisible(),await V.tab(),await z(n).toHaveFocus(),await V.keyboard(`{ArrowRight}`),await H(()=>z(n).toHaveAttribute(`aria-valuenow`,`41`)),await z(e.onValueChange).toHaveBeenLastCalledWith(41),await V.keyboard(`{End}`),await H(()=>z(n).toHaveAttribute(`aria-valuenow`,`100`)),await z(e.onValueCommitted).toHaveBeenCalled()}},W={args:{label:`Price`,defaultValue:[20,80],format:{style:`currency`,currency:`USD`,maximumFractionDigits:0},thumbLabels:[`Minimum price`,`Maximum price`]},play:async({canvas:e})=>{await z(e.getByRole(`slider`,{name:`Minimum price`})).toHaveAttribute(`aria-valuenow`,`20`),await z(e.getByRole(`slider`,{name:`Maximum price`})).toHaveAttribute(`aria-valuenow`,`80`);let t=new Intl.NumberFormat(void 0,{style:`currency`,currency:`USD`,maximumFractionDigits:0});await z(e.getByText(`${t.format(20)} – ${t.format(80)}`)).toBeVisible()}},G={args:{label:`Rating`,defaultValue:3,min:1,max:5,step:1}},K={args:{size:`sm`}},q={args:{label:void 0,showValue:!1,"aria-label":`Brush size`},play:async({canvas:e})=>{await z(e.getByRole(`slider`,{name:`Brush size`})).toBeVisible()}},J={args:{orientation:`vertical`,label:`Level`},play:async({canvas:e})=>{await z(e.getByRole(`slider`)).toHaveAttribute(`aria-orientation`,`vertical`)}},Y={args:{disabled:!0},play:async({canvas:e})=>{await z(e.getByRole(`slider`)).toBeDisabled()}},X=[{name:`Label`,selector:`[id$="-label"]`,description:`Optional. Names a single thumb.`},{name:`Value`,selector:`output`,description:"Optional, with `showValue`: the value or range, formatted, in tabular figures."},{name:`Track`,selector:`[data-base-ui-slider-control] > div`,description:`The full range.`},{name:`Indicator`,selector:`[data-base-ui-slider-indicator]`,description:`The filled part: from the start to the thumb, or between two thumbs.`},{name:`Thumb`,selector:`[data-index="0"]`,description:`One per value. Drag it, or focus it and use the keys.`}],Z={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await h(e,X);await z(t[0]).toHaveTextContent(`Volume`)}},Q={args:{label:`Brightness`,defaultValue:.7,format:{style:`percent`},min:0,max:1,step:.01,largeStep:.1}},$={tags:[`!dev`],args:{label:`Quantity`,defaultValue:137,min:1,max:500}},Ce=[`Default`,`Range`,`Steps`,`Small`,`WithoutVisibleLabel`,`Vertical`,`Disabled`,`anatomyParts`,`Anatomy`,`DoApproximate`,`DontExactNumber`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    // Tab, not a click: WebKit maps a click on the hidden input to the track's start.
    await userEvent.tab();
    await expect(thumb).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '41'));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(41);
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(thumb).toHaveAttribute('aria-valuenow', '100'));
    await expect(args.onValueCommitted).toHaveBeenCalled();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    // Formatted in the browser's locale, as the component does: WebKit's default
    // locale writes US$.
    const usd = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    await expect(canvas.getByText(\`\${usd.format(20)} – \${usd.format(80)}\`)).toBeVisible();
  }
}`,...W.parameters?.docs?.source},description:{story:`Two thumbs, each with its own name.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    defaultValue: 3,
    min: 1,
    max: 5,
    step: 1
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    label: 'Level'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('slider')).toBeDisabled();
  }
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Volume');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Brightness',
    defaultValue: 0.7,
    format: {
      style: 'percent'
    },
    min: 0,
    max: 1,
    step: 0.01,
    largeStep: 0.1
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: an approximate value, with the number shown as it moves.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Quantity',
    defaultValue: 137,
    min: 1,
    max: 500
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: an exact figure picked by dragging.`,...$.parameters?.docs?.description}}}})))()}export{$ as a,K as c,q as d,X as f,R as h,Q as i,G as l,I as m,U as n,W as o,we as p,Y as r,be as s,Z as t,J as u};