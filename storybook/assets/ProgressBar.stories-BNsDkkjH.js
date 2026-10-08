import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{m as s,n as c,p as l,t as u}from"./useRenderElement-BMuTcvdq.js";import{n as d,t as f}from"./visuallyHidden-DpEW8Wz9.js";import{n as ee,t as te}from"./useRegisteredLabelId-Dg-alkNE.js";import{t as ne}from"./clamp-cF-EN37A.js";import{r as re,t as ie}from"./formatNumber-Diqi8AEZ.js";import{n as ae}from"./valueToPercent-BpVlHomU.js";function p(){let e=m.useContext(h);if(e===void 0)throw Error(l(51));return e}var m,h;function g(){return(g=t((()=>{s(),m=e(i(),1),h=m.createContext(void 0)})))()}var _,v,y;function b(){return(b=t((()=>{_=`data-complete`,v=`data-indeterminate`,y=`data-progressing`})))()}var x;function S(){return(S=t((()=>{b(),x={status(e){return e===`progressing`?{[y]:``}:e===`complete`?{[_]:``}:e===`indeterminate`?{[v]:``}:null}}})))()}var C,w,T;function E(){return(E=t((()=>{C=e(i(),1),f(),re(),u(),g(),S(),w=r(),T=C.forwardRef(function(e,t){let{format:n,getAriaValueText:r,locale:i,max:a=100,min:o=0,value:s,render:l,className:u,children:f,style:ee,...te}=e,[re,p]=C.useState(),m=`indeterminate`,g=null,_=null,v=``,y=`indeterminate progress`;if(s!=null&&Number.isFinite(s)){let e=ae(s,o,a);g=ne(Number.isNaN(e)?0:e,0,100),_=ne(s,o,a),m=_===a?`complete`:`progressing`,v=n?ie(_,i,n):ie(g/100,i,{style:`percent`}),y=v}let b=C.useMemo(()=>({status:m}),[m]),S={"aria-labelledby":re,"aria-valuemax":a,"aria-valuemin":o,"aria-valuenow":_??void 0,"aria-valuetext":r?r(v,s):y,role:`progressbar`,children:(0,w.jsxs)(C.Fragment,{children:[f,(0,w.jsx)(`span`,{role:`presentation`,style:d,children:`x`})]})},T=C.useMemo(()=>({formattedValue:v,percentageValue:g,setLabelId:p,state:b,value:s}),[v,g,p,b,s]),E=c(`div`,e,{state:b,ref:t,props:[S,te],stateAttributesMapping:x});return(0,w.jsx)(h.Provider,{value:T,children:E})})})))()}var oe,se;function ce(){return(ce=t((()=>{oe=e(i(),1),u(),g(),S(),se=oe.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=p();return c(`div`,e,{state:o,ref:t,props:a,stateAttributesMapping:x})})})))()}var le,ue;function de(){return(de=t((()=>{le=e(i(),1),u(),g(),S(),ue=le.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{percentageValue:o,state:s}=p(),l=o==null?{}:{insetInlineStart:0,height:`inherit`,width:`${o}%`};return c(`div`,e,{state:s,ref:t,props:[{style:l},a],stateAttributesMapping:x})})})))()}var fe,pe;function D(){return(D=t((()=>{fe=e(i(),1),u(),g(),S(),pe=fe.forwardRef(function(e,t){let{className:n,render:r,children:i,style:a,...o}=e,{value:s,formattedValue:l,state:u}=p(),d=u.status===`indeterminate`;return c(`span`,e,{state:u,ref:t,props:[{"aria-hidden":!0,children:typeof i==`function`?i(d?`indeterminate`:l,s):d?null:l},o],stateAttributesMapping:x})})})))()}var O,k;function A(){return(A=t((()=>{O=e(i(),1),u(),te(),g(),S(),k=O.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{setLabelId:s,state:l}=p(),u=ee(a,s);return c(`span`,e,{state:l,ref:t,props:[{id:u,role:`presentation`},o],stateAttributesMapping:x})})})))()}var j,M,N,P,F,I,L,R,z,B,me,he,ge,_e,ve,V;function ye(){return(ye=t((()=>{j=`_root_i68zj_1`,M=`_sm_i68zj_13`,N=`_md_i68zj_16`,P=`_lg_i68zj_19`,F=`_primary_i68zj_27`,I=`_accent_i68zj_30`,L=`_secondary_i68zj_33`,R=`_destructive_i68zj_36`,z=`_label_i68zj_40`,B=`_row_i68zj_44`,me=`_track_i68zj_50`,he=`_rounded_i68zj_58`,ge=`_indicator_i68zj_59`,_e=`_slide_i68zj_1`,ve=`_value_i68zj_96`,V={root:j,sm:M,md:N,lg:P,primary:F,accent:I,secondary:L,destructive:R,label:z,row:B,track:me,rounded:he,indicator:ge,slide:_e,value:ve}})))()}function H({value:e=0,max:t=100,size:n=`md`,isRounded:r=!1,variant:i=`primary`,isIndeterminate:a=!1,showValueLabel:s=!1,label:c,className:l,"aria-label":u,...d}){return(0,U.jsxs)(T,{...d,value:a?null:e,max:t,"aria-label":c?void 0:u,className:o(V.root,V[n],V[i],r&&V.rounded,l),children:[c&&(0,U.jsx)(k,{className:V.label,children:c}),(0,U.jsxs)(`div`,{className:V.row,children:[(0,U.jsx)(se,{className:V.track,children:(0,U.jsx)(ue,{className:V.indicator})}),s&&!a&&(0,U.jsx)(pe,{className:V.value})]})]})}var U;function be(){return(be=t((()=>{E(),A(),ce(),de(),D(),a(),ye(),U=r(),H.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:"The spec's `maxValue`.",defaultValue:{value:`100`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isRounded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},isIndeterminate:{required:!1,tsType:{name:`boolean`},description:`Progress is happening but how much is unknown: a sliding bar.`,defaultValue:{value:`false`,computed:!1}},showValueLabel:{required:!1,tsType:{name:`boolean`},description:`Show the value ("70%") after the bar.`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`A visible label above the bar; also its accessible name.`},"aria-label":{required:!1,tsType:{name:`string`},description:"The accessible name when there is no visible `label`."},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})))()}var xe=n({Default:()=>q,Indeterminate:()=>Q,Max:()=>Z,Sizes:()=>X,ValueLabel:()=>J,Variants:()=>Y,WithoutVisibleLabel:()=>$,__namedExportsOrder:()=>Ce,default:()=>Se}),W,G,Se,K,q,J,Y,X,Z,Q,$,Ce;function we(){return(we=t((()=>{be(),W=r(),{expect:G}=__STORYBOOK_MODULE_TEST__,Se={title:`Components/Loaders/ProgressBar`,component:H,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]}},args:{value:70,label:`Uploading`},decorators:[e=>(0,W.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},K={display:`grid`,gap:`var(--space-4)`},q={play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await G(t).toHaveAttribute(`aria-valuenow`,`70`),await G(t).toHaveAttribute(`aria-valuemax`,`100`)}},J={args:{showValueLabel:!0},play:async({canvas:e})=>{await G(e.getByText(`70%`)).toBeVisible()}},Y={render:e=>(0,W.jsx)(`div`,{style:K,children:[`primary`,`accent`,`secondary`,`destructive`].map(t=>(0,W.jsx)(H,{...e,variant:t,label:t,showValueLabel:!0},t))})},X={render:e=>(0,W.jsx)(`div`,{style:K,children:[`sm`,`md`,`lg`].map(t=>(0,W.jsx)(H,{...e,size:t,label:t,isRounded:!0},t))})},Z={args:{value:3,max:5,showValueLabel:!0,label:`Steps done`},play:async({canvas:e})=>{await G(e.getByRole(`progressbar`)).toHaveAttribute(`aria-valuemax`,`5`),await G(e.getByText(`60%`)).toBeVisible()}},Q={args:{isIndeterminate:!0,label:`Connecting`},play:async({canvas:e})=>{await G(e.getByRole(`progressbar`,{name:`Connecting`})).not.toHaveAttribute(`aria-valuenow`)}},$={args:{label:void 0,"aria-label":`Storage used`},play:async({canvas:e})=>{await G(e.getByRole(`progressbar`,{name:`Storage used`})).toBeVisible()}},Ce=[`Default`,`ValueLabel`,`Variants`,`Sizes`,`Max`,`Indeterminate`,`WithoutVisibleLabel`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(bar).toHaveAttribute('aria-valuenow', '70');
    await expect(bar).toHaveAttribute('aria-valuemax', '100');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    showValueLabel: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('70%')).toBeVisible();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} {...args} variant={variant} label={variant} showValueLabel />)}
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <ProgressBar key={size} {...args} size={size} label={size} isRounded />)}
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    showValueLabel: true,
    label: 'Steps done'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '5');
    await expect(canvas.getByText('60%')).toBeVisible();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Connecting'
  },
  play: async ({
    canvas
  }) => {
    // No value to report: aria-valuenow is absent, not 0.
    await expect(canvas.getByRole('progressbar', {
      name: 'Connecting'
    })).not.toHaveAttribute('aria-valuenow');
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Storage used'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Storage used'
    })).toBeVisible();
  }
}`,...$.parameters?.docs?.source}}}})))()}export{X as a,$ as c,xe as i,we as l,Q as n,J as o,Z as r,Y as s,q as t};