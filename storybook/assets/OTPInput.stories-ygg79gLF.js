import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,n as o,t as s}from"./useRenderElement-euNwqn97.js";import{n as c,t as l}from"./utils-CUvRSo4U.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{n as d,t as f}from"./useStableCallback-BEuE3z7O.js";import{n as p,t as m}from"./useIsoLayoutEffect-BLzSB4yc.js";import{i as ee,n as te,o as ne}from"./shadowDom-DQlB61gq.js";import{n as re,t as ie}from"./Button-CAzJH1mZ.js";import{n as ae,t as h}from"./useControlled-CUOYUBAC.js";import{n as oe,t as se}from"./useCompositeListItem-Cr5gKG7F.js";import{n as g,t as ce}from"./CompositeList-iA23h0cH.js";import{S as _,_ as le,m as v,n as ue,r as de,t as fe,v as pe,y as me}from"./createBaseUIEventDetails-lwVYrDoO.js";import{F as y,k as b}from"./composite-CoxyU9zQ.js";import{n as he,t as x}from"./DirectionContext-Ckaevnia.js";import{n as ge,t as S}from"./expectAnatomy-C52ByQ6s.js";import{n as C,t as _e}from"./useValueAsRef-CNJnJqq4.js";import{n as w,r as ve,t as ye}from"./visuallyHidden-DpEW8Wz9.js";import{a as T,b as E,c as be,d as xe,f as Se,g as Ce,h as we,i as Te,l as Ee,s as De,u as Oe,y as ke}from"./useLabel-CVENVzak.js";import{n as Ae,t as D}from"./useAriaLabelledBy-DxUD2_yL.js";import{n as je,t as Me}from"./useValueChanged-D243-kJo.js";import{n as Ne,t as Pe}from"./Separator-DOU11_UA.js";import{a as Fe,n as O,t as Ie}from"./InputField-DjjlzSzi.js";function Le(){let e=k.useContext(ze);if(e===void 0)throw Error(a(98));return e}function Re(e,t,n){return{...e,value:t,index:n,filled:t!==``}}var k,ze;function Be(){return(Be=t((()=>{i(),k=e(r(),1),ze=k.createContext(void 0)})))()}var Ve,He;function Ue(){return(Ue=t((()=>{E(),Ve={value:()=>null,length:()=>null,...ke},He={value:()=>null,index:()=>null,...ke}})))()}function We(e){return e===`none`?null:Ze[e]}function Ge(e){return(e??``).replace(/\s/g,``)}function Ke(e,t){return t?e.replace(t.regexp,``):e}function qe(e,t,n,r){let i=Ge(e),a=We(n),o=Ke(i,a),s=i.length>o.length;if(r){let e=r(o);s||=o.length>e.length,o=Ke(e,a),s||=e.length>o.length}let c=t<0?0:t,l=Array.from(o);return[l.slice(0,c).join(``),s||l.length>c]}function Je(e,t,n,r){return qe(e,t,n,r)[0]}function Ye(e,t,n,r,i,a){let o=Je(n,r,i,a);return Je(`${e.slice(0,t)}${o}${e.slice(t+o.length)}`,r,i,a)}function Xe(e,t){return t<0||t>=e.length?e:`${e.slice(0,t)}${e.slice(t+1)}`}var Ze;function A(){return(A=t((()=>{Ze={numeric:{slotPattern:`\\d{1}`,getRootPattern:e=>`\\d{${e}}`,regexp:/[^\d]/g,inputMode:`numeric`},alpha:{slotPattern:`[a-zA-Z]{1}`,getRootPattern:e=>`[a-zA-Z]{${e}}`,regexp:/[^a-zA-Z]/g,inputMode:`text`},alphanumeric:{slotPattern:`[a-zA-Z0-9]{1}`,getRootPattern:e=>`[a-zA-Z0-9]{${e}}`,regexp:/[^a-zA-Z0-9]/g,inputMode:`text`}}})))()}function Qe(...e){let t=e.flatMap(e=>e?.split(/\s+/).filter(Boolean)??[]);return t.length>0?Array.from(new Set(t)).join(` `):void 0}var j,$e,M;function N(){return(N=t((()=>{j=e(r(),1),h(),m(),f(),_e(),ye(),ee(),g(),we(),xe(),Ee(),De(),D(),Te(),s(),Me(),de(),v(),Be(),Ue(),A(),$e=u(),M=j.forwardRef(function(e,t){let{"aria-describedby":n,"aria-labelledby":r,id:i,autoComplete:a=`one-time-code`,defaultValue:s=``,value:c,onValueChange:l,onValueComplete:u,form:f,length:m,autoSubmit:ee=!1,mask:re=!1,inputMode:ie,validationType:h=`numeric`,normalizeValue:oe,disabled:se=!1,readOnly:g=!1,required:_=!1,name:le,onValueInvalid:v,render:de,className:pe,style:me,...y}=e,{setDirty:b,validityData:he,disabled:x,setFilled:ge,invalid:S,name:_e,state:ye,validation:E,validationMode:xe,setFocused:we,setTouched:Te}=Ce(),{clearErrors:Ee}=Oe(),{getDescriptionProps:De,labelId:ke}=be(),D=x||se,Me=_e??le,[Ne,Pe]=ae({controlled:c,default:s,name:`OTPField`,state:`value`}),Fe=j.useRef(null),O=j.useRef([]),Ie=j.useRef(null),Le=j.useRef(null),Re=j.useMemo(()=>({get current(){return O.current[0]??null}}),[]),k=T({id:i}),Be=Ae(r,ke,Re,!0,k),He=r==null?Be:void 0,Ue=Qe(n,De({})[`aria-describedby`]),Ge=We(h),Ke=Ge?.slotPattern,Ye=Ge?.getRootPattern(m),Xe=ie??Ge?.inputMode,Ze=Number.isInteger(m)&&m>0,A=Je(Ne,m,h,oe),M=C(A),N=A!==``,[et,tt]=j.useState(0),[nt,rt]=j.useState(()=>Math.min(A.length,m-1)),[P,it]=j.useState(!1),at=P?Math.min(nt,Math.max(m-1,0)):Math.min(A.length,m-1);p(()=>{ge(N)},[N,ge]),Se(Re,k,A,void 0,!D,le);let F=d(e=>{let t=Math.min(Math.max(e,0),Math.max(O.current.length-1,0)),n=O.current[t];n?.focus(),n?.select()}),ot=d((e,t)=>{Ie.current={index:e,value:t}});function st(){let e=E.inputRef.current?.form??O.current[0]?.form??null;if(f){let t=ne(Fe.current).getElementById(f);t?.tagName===`FORM`&&(e=t)}e&&typeof e.requestSubmit==`function`&&e.requestSubmit()}function ct(e,t){u?.(e,t),ee&&st()}je(A,()=>{Ee(Me),b(A!==he.initialValue),E.change(A);let e=Ie.current;e!=null&&(Ie.current=null,e.value===A&&F(e.index));let t=Le.current;t!=null&&(Le.current=null,t.value===A&&ct(A,t.eventDetails))});let lt=d((e,t)=>{let n=Je(e,m,h,oe),r=(t.reason===`input-change`||t.reason===`input-paste`)&&n.length===m&&(M.current.length!==m||t.reason===`input-paste`)?ue(t.reason,t.event):null;return n===M.current?(r!=null&&ct(n,r),null):(l?.(n,t),t.isCanceled?null:(Pe(n),r==null?n.length!==m&&(Le.current=null):Le.current={value:n,eventDetails:r},n))}),ut=d((e,t)=>{v?.(e,t)}),dt=d((e,t)=>{if(e>M.current.length){F(Math.min(M.current.length,m-1));return}rt(e),it(!0),we(!0),t.currentTarget.select()}),I=d(e=>{te(Fe.current,e.relatedTarget)||(Te(!0),it(!1),we(!1),xe===`onBlur`&&E.commit(M.current))}),ft=j.useCallback(e=>{if(k!=null)return e===0?k:`${k}-${e+1}`},[k]),L=j.useMemo(()=>({...ye,complete:A.length===m,disabled:D,filled:N,focused:P,length:m,readOnly:g,required:_,value:A}),[D,ye,N,P,m,g,_,A]),pt=j.useMemo(()=>({autoComplete:a,activeIndex:at,disabled:D,form:f,focusInput:F,queueFocusInput:ot,getInputId:ft,handleInputBlur:I,handleInputFocus:dt,inputMode:Xe,inputAriaLabelledBy:He,invalid:S,length:m,mask:re,pattern:Ke,reportValueInvalid:ut,readOnly:g,required:_,normalizeValue:oe,setValue:lt,state:L,validationType:h,value:A}),[at,a,D,F,f,ft,I,dt,Xe,He,S,m,re,Ke,ot,g,ut,_,oe,lt,L,h,A]),R=o(`div`,e,{ref:[t,Fe],state:L,props:[{role:`group`,"aria-describedby":Ue,"aria-labelledby":Be},y],stateAttributesMapping:Ve});return(0,$e.jsx)(ce,{elementsRef:O,onMapChange:e=>{tt(e.size)},children:(0,$e.jsxs)(ze.Provider,{value:pt,children:[R,Ze&&(0,$e.jsx)(`input`,{...E.getValidationProps(D,{onFocus(){F(0)},onChange(e){if(e.nativeEvent.defaultPrevented||D||g)return;let t=e.currentTarget.value,[n,r]=qe(t,m,h,oe);r&&ut(t,ue(`input-change`,e.nativeEvent));let i=lt(n,fe(`input-change`,e.nativeEvent));i!=null&&i!==``&&ot(i.length-1,i)}}),ref:E.inputRef,type:`text`,id:k&&Me==null?`${k}-hidden-input`:void 0,form:f,name:Me,value:A,autoComplete:a,inputMode:Xe,minLength:m,maxLength:m,pattern:Ye,disabled:D,readOnly:g,required:_,"aria-hidden":!0,tabIndex:-1,style:Me?ve:w})]})})})})))()}var et,tt;function nt(){return(nt=t((()=>{et=e(r(),1),b(),se(),x(),s(),de(),v(),Be(),Ue(),A(),tt=et.forwardRef(function(e,t){let{"aria-label":n,"aria-labelledby":r,render:i,className:a,style:s,...c}=e,{activeIndex:l,autoComplete:u,disabled:d,form:f,focusInput:p,queueFocusInput:m,getInputId:ee,handleInputBlur:te,handleInputFocus:ne,inputMode:re,inputAriaLabelledBy:ie,invalid:ae,length:h,mask:se,pattern:g,reportValueInvalid:ce,readOnly:v,required:de,normalizeValue:b,setValue:x,state:ge,validationType:S,value:C}=Le(),{ref:_e,index:w}=oe({guess:!0}),ve=et.useRef(null),ye=he(),T=C[w]??``,E=Re(ge,T,w),be=n,xe=r??ie,Se=w===0?void 0:be,Ce={id:ee(w),value:T,type:se?`password`:`text`,inputMode:re,autoComplete:w===0?u:`off`,autoCorrect:`off`,spellCheck:`false`,enterKeyHint:w===h-1?`done`:`next`,maxLength:w===0?h:void 0,tabIndex:l===w?0:-1,disabled:d,form:f,pattern:g,readOnly:v,required:de,"aria-labelledby":Se==null?xe:void 0,"aria-invalid":!d&&ae?!0:void 0,"aria-label":Se,onMouseDown(e){e.defaultPrevented||d||(e.preventDefault(),p(w))},onFocus(e){e.defaultPrevented||d||ne(w,e)},onBlur(e){e.defaultPrevented||te(e)},onChange(e){if(e.defaultPrevented||d||v)return;let t=e.currentTarget.value,[n,r]=qe(t,h,S,b);if(r&&ce(t,ue(le,e.nativeEvent)),n===``){t===``?x(Xe(C,w),fe(pe,e.nativeEvent)):T!==``&&(e.currentTarget.value=T,e.currentTarget.select());return}let i=Ye(C,w,n,h,S,b),a=x(i,fe(le,e.nativeEvent));if(a!=null){let e=Math.min(w+n.length,h-1);m(e,a)}},onKeyDown(e){if(e.defaultPrevented||d)return;let t=Math.max(h-1,0),n=Math.min(C.length,t),r=(e.ctrlKey||e.metaKey)&&!e.altKey,i=ye===`rtl`,a=i?`ArrowRight`:`ArrowLeft`,o=i?`ArrowLeft`:`ArrowRight`;if(e.key===a){y(e),p(r?0:Math.max(0,w-1));return}if(e.key===o){y(e),p(r?n:Math.min(t,w+1));return}if(e.key===`Home`||e.key===`ArrowUp`){y(e),p(0);return}if(e.key===`End`||e.key===`ArrowDown`){y(e),p(n);return}if(v)return;function s(t,n){let r=x(t,fe(_,e.nativeEvent));r!=null&&m(n,r)}if(e.key===`Backspace`&&r){y(e),s(``,0);return}if(e.key===`Delete`){y(e),s(Xe(C,w),w);return}let c=e.currentTarget.value,l=e.currentTarget.selectionStart===0&&e.currentTarget.selectionEnd===c.length;if(e.key.length===1&&l&&T===e.key){y(e),w<h-1&&p(w+1);return}if(e.key===`Backspace`){y(e);let t=Math.max(0,w-1);s(Xe(C,T===``?t:w),t)}},onPaste(e){if(e.defaultPrevented||d||v)return;let t=``;try{t=e.clipboardData?.getData(`text/plain`)??``}catch{return}e.preventDefault();let[n,r]=qe(t,h,S,b);if(r&&ce(t,ue(me,e.nativeEvent)),n===``)return;let i=x(Ye(C,w,n,h,S,b),fe(me,e.nativeEvent));if(i!=null){let e=Math.min(w+n.length,h-1);m(e,i)}}};return o(`input`,e,{ref:[t,_e,ve],state:E,props:[Ce,c],stateAttributesMapping:He})})})))()}function rt({onResend:e,cooldown:t=30,label:n=`Resend code`,disabled:r,className:i}){let[a,o]=(0,P.useState)(t),[s,c]=(0,P.useState)(!1);(0,P.useEffect)(()=>{if(a<=0)return;let e=setTimeout(()=>o(a-1),1e3);return()=>clearTimeout(e)},[a]);async function l(){c(!0);try{await e()}catch{return}finally{c(!1)}o(t)}return(0,it.jsx)(ie,{variant:`secondary`,appearance:`ghost`,size:`sm`,className:i,disabled:r||a>0,isLoading:s,onClick:l,children:a>0?`${n} (${at(a)})`:n})}var P,it,at;function F(){return(F=t((()=>{P=r(),re(),it=u(),at=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`,rt.__docgenInfo={description:`Internal: the small "Resend code" / "Resend link" button shared by OTP
Input and the auth templates, disabled with a countdown while it cools
down. Its name carries the time left.`,methods:[],displayName:`ResendButton`,props:{onResend:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<unknown>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<unknown>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<unknown>`}]}}},description:`Sends again. Return a promise to show the button busy until it settles:
the cooldown restarts only if it resolves, so a failed send can be retried.`},cooldown:{required:!1,tsType:{name:`number`},description:`Seconds before resend is allowed, from mount and after each send.`,defaultValue:{value:`30`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Resend code'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ot,st,ct,lt,ut,dt,I;function ft(){return(ft=t((()=>{ot=`_root_140ax_4`,st=`_sm_140ax_12`,ct=`_md_140ax_13`,lt=`_cell_140ax_24`,ut=`_separator_140ax_64`,dt=`_resend_140ax_69`,I={root:ot,sm:st,md:ct,cell:lt,separator:ut,resend:dt}})))()}function L({ref:e,length:t=6,groupSize:n,onValueChange:r,onValueComplete:i,onResend:a,resendCooldown:o=30,resendLabel:s=`Resend code`,slotLabel:c=mt,label:u,helperText:d,validationState:f,size:p=`md`,name:m,disabled:ee,required:te,className:ne,...re}){let ie=(0,pt.useRef)(null);async function ae(){await a?.(),ie.current?.focus()}return(0,R.jsx)(Ie,{label:u,helperText:d,validationState:f,required:te,disabled:ee,name:m,className:ne,footer:a&&(0,R.jsx)(rt,{className:I.resend,cooldown:o,label:s,disabled:ee,onResend:ae}),children:(0,R.jsx)(M,{...re,length:t,required:te,onValueChange:r&&(e=>r(e)),onValueComplete:i&&(e=>i(e)),className:l(I.root,I[p]),children:Array.from({length:t},(r,i)=>(0,R.jsxs)(pt.Fragment,{children:[n&&i>0&&i%n===0&&(0,R.jsx)(Pe,{className:I.separator,children:`–`}),(0,R.jsx)(tt,{ref:i===0?t=>{ie.current=t,O(e,t)}:void 0,"aria-label":i===0?void 0:c(i+1,t),className:I.cell})]},i))})})}var pt,R,mt;function ht(){return(ht=t((()=>{pt=r(),N(),Ne(),nt(),F(),c(),Fe(),ft(),R=u(),mt=(e,t)=>`Character ${e} of ${t}`,L.__docgenInfo={description:``,methods:[],displayName:`OTPInput`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:`Points at the first cell.`},length:{required:!1,tsType:{name:`number`},description:`Number of characters.`,defaultValue:{value:`6`,computed:!1}},groupSize:{required:!1,tsType:{name:`number`},description:`Splits the cells into groups of this many, with a dash between groups.`},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onValueComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called once every cell is filled, typed or pasted.`},validationType:{required:!1,tsType:{name:`union`,raw:`'numeric' | 'alpha' | 'alphanumeric'`,elements:[{name:`literal`,value:`'numeric'`},{name:`literal`,value:`'alpha'`},{name:`literal`,value:`'alphanumeric'`}]},description:`Which characters a cell accepts; others are dropped.`},mask:{required:!1,tsType:{name:`boolean`},description:`Shows dots instead of the characters.`},autoSubmit:{required:!1,tsType:{name:`boolean`},description:`Submits the surrounding form once every cell is filled.`},onResend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<unknown>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<unknown>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<unknown>`}]}}},description:`Shows a resend button under the cells, disabled while the cooldown counts
down. Return a promise to show the button busy until it settles: the
cooldown restarts only if it resolves, so a failed send can be retried.`},resendCooldown:{required:!1,tsType:{name:`number`},description:`Seconds before resend is allowed, from mount and after each resend.`,defaultValue:{value:`30`,computed:!1}},resendLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Resend code'`,computed:!1}},slotLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(position: number, length: number) => string`,signature:{arguments:[{type:{name:`number`},name:`position`},{type:{name:`number`},name:`length`}],return:{name:`string`}}},description:`The accessible name of each cell after the first, which the label names.`,defaultValue:{value:"(position: number, length: number) => `Character ${position} of ${length}`",computed:!1}},label:{required:!0,tsType:{name:`ReactNode`},description:`Names the group and the first cell. Required: Base UI names the first cell only through a label.`},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var gt=n({Alphanumeric:()=>X,Anatomy:()=>Z,Controlled:()=>Ct,Default:()=>U,Disabled:()=>xt,DoOneField:()=>Q,DontLongCode:()=>$,Grouped:()=>G,InAForm:()=>wt,Masked:()=>bt,Paste:()=>W,ReadOnly:()=>St,Resend:()=>J,ResendFails:()=>Y,Sizes:()=>K,Validation:()=>q,__namedExportsOrder:()=>Et,anatomyParts:()=>Tt,default:()=>yt}),_t,z,B,V,vt,yt,H,U,W,G,K,q,J,Y,X,bt,xt,St,Ct,wt,Tt,Z,Q,$,Et;function Dt(){return(Dt=t((()=>{_t=r(),ge(),ht(),z=u(),{expect:B,fn:V,waitFor:vt}=__STORYBOOK_MODULE_TEST__,yt={title:`Components/Inputs/OTPInput`,tags:[`beta`],component:L,argTypes:{label:{description:"The visible name, above the cells. A real `<label>` for the first cell; it also names the group. Required.",control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the cells, read as the group's description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours every cell's edge and the helper text. `error` also sets `aria-invalid` on the cells.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"Square cells of 32px (`sm`) or 40px (`md`), as tall as a Text Input of the same size.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},length:{description:`How many characters the code has, one cell each.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`6`}}},groupSize:{description:"Splits the cells into groups of this many, with a dash between groups: `3` shows a 6-digit code as 3 – 3.",control:`number`,table:{type:{summary:`number`}}},value:{description:"The code, controlled. Pair with `onValueChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting code, uncontrolled.`,control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:`Called with the whole code on every change: typing, deleting, pasting or autofill.`,control:!1,table:{type:{summary:`(value: string) => void`}}},onValueComplete:{description:`Called once every cell is filled. The place to verify the code.`,control:!1,table:{type:{summary:`(value: string) => void`}}},validationType:{description:`Which characters a cell accepts; the rest are dropped as typed or pasted. Also picks the mobile keyboard.`,control:`inline-radio`,options:[`numeric`,`alpha`,`alphanumeric`],table:{type:{summary:`'numeric' | 'alpha' | 'alphanumeric'`},defaultValue:{summary:`'numeric'`}}},mask:{description:`Shows dots instead of the characters, for a code read over someone's shoulder.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoSubmit:{description:`Submits the surrounding form once every cell is filled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onResend:{description:"Shows a resend button under the cells, disabled with a countdown for `resendCooldown` seconds from mount and after each send. Return a promise to show it busy; the cooldown restarts only if it resolves. To restart the countdown from outside (a new channel), remount with a new `key`.",control:!1,table:{type:{summary:`() => void | Promise<unknown>`}}},resendCooldown:{description:"Seconds before resend is allowed. `0` allows it at once. Read on mount and on each send.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`30`}}},resendLabel:{description:"The resend button's text. The countdown follows it in brackets, as `m:ss`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Resend code'`}}},slotLabel:{description:`The accessible name of each cell after the first; the label names the first. Translate it with the rest of the screen.`,control:!1,table:{type:{summary:`(position: number, length: number) => string`},defaultValue:{summary:`"Character 2 of 6"`}}},disabled:{description:`Dimmed, out of the tab order. The resend button too.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but typing does not change it.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:`Submitted with the form, as the whole code in one value.`,control:!1,table:{type:{summary:`string`}}},ref:{description:`Points at the first cell.`,control:!1,table:{type:{summary:`Ref`}}},id:{description:"The id of the first cell; the others take `{id}-2`, `{id}-3` and so on.",control:!1,table:{type:{summary:`string`}}},className:{description:`Added to the outer element, the field with its label and helper text.`,control:!1,table:{type:{summary:`string`}}}},args:{label:`Verification code`,onValueChange:V(),onValueComplete:V()},excludeStories:[`anatomyParts`]},H=e=>[...e.querySelectorAll(`[role="group"] input`)],U={play:async({canvas:e,canvasElement:t,userEvent:n,args:r})=>{let i=e.getByRole(`textbox`,{name:`Verification code`}),a=H(t);await B(a).toHaveLength(6),await B(e.getByRole(`group`,{name:`Verification code`})).toBeVisible(),await B(a[1]).toHaveAccessibleName(`Character 2 of 6`),await B(i).toHaveAttribute(`autocomplete`,`one-time-code`),await n.tab(),await B(i).toHaveFocus(),await B(a.filter(e=>e.tabIndex===0)).toHaveLength(1),await n.keyboard(`12a3`),await B(r.onValueChange).toHaveBeenLastCalledWith(`123`),await B(a[3]).toHaveFocus(),await n.keyboard(`{Backspace}`),await B(r.onValueChange).toHaveBeenLastCalledWith(`12`),await n.keyboard(`{ArrowLeft}`),await B(a[1]).toHaveFocus(),await n.keyboard(`{ArrowRight}`),await B(a[2]).toHaveFocus(),await n.keyboard(`3456`),await B(r.onValueComplete).toHaveBeenCalledWith(`123456`)}},W={play:async({canvas:e,canvasElement:t,userEvent:n,args:r})=>{await n.click(e.getByRole(`textbox`,{name:`Verification code`})),await n.paste(`987 654`),await B(H(t).map(e=>e.value).join(``)).toBe(`987654`),await B(r.onValueComplete).toHaveBeenCalledWith(`987654`)}},G={args:{groupSize:3},play:async({canvas:e})=>{await B(e.getAllByRole(`separator`)).toHaveLength(1)}},K={args:{groupSize:3,defaultValue:`1234`},render:e=>(0,z.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,z.jsx)(L,{...e,size:t,label:t},t))})},q={args:{validationState:`error`,helperText:`That code is wrong. Check it and try again.`,defaultValue:`123456`},play:async({canvas:e,canvasElement:t})=>{for(let e of H(t))await B(e).toHaveAttribute(`aria-invalid`,`true`);await B(e.getByRole(`group`)).toHaveAccessibleDescription(`That code is wrong. Check it and try again.`)}},J={args:{onResend:V(),resendCooldown:1},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/resend code/i});await B(r).toBeDisabled(),await B(r).toHaveTextContent(`Resend code (0:01)`),await vt(()=>B(r).toBeEnabled(),{timeout:3e3}),await B(r).toHaveTextContent(/^Resend code$/),await t.click(r),await B(n.onResend).toHaveBeenCalledTimes(1),await vt(()=>B(r).toBeDisabled()),await B(e.getByRole(`textbox`,{name:`Verification code`})).toHaveFocus()}},Y={args:{onResend:V(()=>Promise.reject(Error(`offline`))),resendCooldown:0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/resend code/i});await t.click(r),await B(n.onResend).toHaveBeenCalledTimes(1),await vt(()=>B(r).not.toHaveAttribute(`aria-busy`)),await B(r).toBeEnabled(),await B(r).toHaveTextContent(/^Resend code$/)}},X={args:{label:`Backup code`,validationType:`alphanumeric`,length:8,groupSize:4},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`textbox`,{name:`Backup code`})),await t.keyboard(`AB-12`),await B(n.onValueChange).toHaveBeenLastCalledWith(`AB12`)}},bt={args:{mask:!0,defaultValue:`123`},play:async({canvasElement:e})=>{await B(H(e)[0]).toHaveAttribute(`type`,`password`)}},xt={args:{disabled:!0,onResend:V(),resendCooldown:0},play:async({canvas:e,canvasElement:t})=>{for(let e of H(t))await B(e).toBeDisabled();await B(e.getByRole(`button`,{name:/resend code/i})).toBeDisabled()}},St={args:{readOnly:!0,defaultValue:`123456`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`textbox`,{name:`Verification code`})),await t.keyboard(`{Backspace}9`),await B(n.onValueChange).not.toHaveBeenCalled()}},Ct={render:function(e){let[t,n]=(0,_t.useState)(``);return(0,z.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,z.jsx)(L,{...e,value:t,onValueChange:n}),(0,z.jsxs)(`span`,{children:[`Code: `,t||`empty`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`textbox`,{name:`Verification code`})),await t.keyboard(`42`),await B(e.getByText(`Code: 42`)).toBeVisible()}},wt={render:e=>(0,z.jsx)(`form`,{"aria-label":`Verify`,children:(0,z.jsx)(L,{...e,name:`code`,defaultValue:`246810`})}),play:async({canvasElement:e})=>{await B(new FormData(e.querySelector(`form`)).get(`code`)).toBe(`246810`)}},Tt=[{name:`Label`,selector:`label`,description:`Names the group and the first cell. Clicking it focuses the first cell.`},{name:`Cell`,selector:`[role="group"] > input:first-of-type`,description:`One character, centred in tabular figures. Each cell is its own box.`},{name:`Group separator`,selector:`[role="separator"]`,description:"A dash between groups of `groupSize` cells. Optional."},{name:`Helper text`,selector:`p`,description:`The group's description. The error message when invalid.`},{name:`Resend button`,selector:`button`,description:`Sends a new code. Disabled with a countdown during the cooldown. Optional.`}],Z={tags:[`!dev`],args:{groupSize:3,helperText:`We sent a code to your phone.`,onResend:V(),resendCooldown:0},play:async({canvasElement:e})=>{let t=await S(e,Tt);await B(t[4]).toHaveAccessibleName(`Resend code`)}},Q={args:{helperText:`Sent to •••• 4821.`,onResend:V(),resendCooldown:0}},$={tags:[`!dev`],args:{label:`Licence key`,length:16,validationType:`alphanumeric`}},Et=[`Default`,`Paste`,`Grouped`,`Sizes`,`Validation`,`Resend`,`ResendFails`,`Alphanumeric`,`Masked`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoOneField`,`DontLongCode`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    args
  }) => {
    const first = canvas.getByRole('textbox', {
      name: 'Verification code'
    });
    const all = cells(canvasElement);
    await expect(all).toHaveLength(6);
    // The label names the group and the first cell; the others say where they are.
    await expect(canvas.getByRole('group', {
      name: 'Verification code'
    })).toBeVisible();
    await expect(all[1]).toHaveAccessibleName('Character 2 of 6');
    // Phones offer the code from a text message into the first cell.
    await expect(first).toHaveAttribute('autocomplete', 'one-time-code');
    // One tab stop: only the cell to type into is in the tab order.
    await userEvent.tab();
    await expect(first).toHaveFocus();
    await expect(all.filter(c => c.tabIndex === 0)).toHaveLength(1);
    // Typing fills a cell and moves on; letters are dropped from a numeric code.
    await userEvent.keyboard('12a3');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('123');
    await expect(all[3]).toHaveFocus();
    // Backspace clears the cell before and moves back to it.
    await userEvent.keyboard('{Backspace}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('12');
    // Left and Right move between cells.
    await userEvent.keyboard('{ArrowLeft}');
    await expect(all[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(all[2]).toHaveFocus();
    await userEvent.keyboard('3456');
    await expect(args.onValueComplete).toHaveBeenCalledWith('123456');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    // A pasted code, spaces and all, fills every cell at once.
    await userEvent.paste('987 654');
    await expect(cells(canvasElement).map(c => c.value).join('')).toBe('987654');
    await expect(args.onValueComplete).toHaveBeenCalledWith('987654');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    groupSize: 3
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1);
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    groupSize: 3,
    defaultValue: '1234'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <OTPInput key={size} {...args} size={size} label={size} />)}
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'That code is wrong. Check it and try again.',
    defaultValue: '123456'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('group')).toHaveAccessibleDescription('That code is wrong. Check it and try again.');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    onResend: fn(),
    resendCooldown: 1
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: /resend code/i
    });
    // Disabled while it counts down, with the time left in its name.
    await expect(button).toBeDisabled();
    await expect(button).toHaveTextContent('Resend code (0:01)');
    await waitFor(() => expect(button).toBeEnabled(), {
      timeout: 3000
    });
    await expect(button).toHaveTextContent(/^Resend code$/);
    await userEvent.click(button);
    await expect(args.onResend).toHaveBeenCalledTimes(1);
    // Pressing it starts the cooldown again, and focus goes to the first cell
    // for the new code instead of being lost with the disabled button.
    await waitFor(() => expect(button).toBeDisabled());
    await expect(canvas.getByRole('textbox', {
      name: 'Verification code'
    })).toHaveFocus();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    onResend: fn(() => Promise.reject(new Error('offline'))),
    resendCooldown: 0
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: /resend code/i
    });
    await userEvent.click(button);
    await expect(args.onResend).toHaveBeenCalledTimes(1);
    // A failed send starts no cooldown: the button is ready to try again.
    await waitFor(() => expect(button).not.toHaveAttribute('aria-busy'));
    await expect(button).toBeEnabled();
    await expect(button).toHaveTextContent(/^Resend code$/);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Backup code',
    validationType: 'alphanumeric',
    length: 8,
    groupSize: 4
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Backup code'
    }));
    await userEvent.keyboard('AB-12');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('AB12');
  }
}`,...X.parameters?.docs?.source}}},bt.parameters={...bt.parameters,docs:{...bt.parameters?.docs,source:{originalSource:`{
  args: {
    mask: true,
    defaultValue: '123'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(cells(canvasElement)[0]).toHaveAttribute('type', 'password');
  }
}`,...bt.parameters?.docs?.source}}},xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onResend: fn(),
    resendCooldown: 0
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /resend code/i
    })).toBeDisabled();
  }
}`,...xt.parameters?.docs?.source}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: '123456'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    await userEvent.keyboard('{Backspace}9');
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...St.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [code, setCode] = useState('');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <OTPInput {...args} value={code} onValueChange={setCode} />
        <span>Code: {code || 'empty'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    await userEvent.keyboard('42');
    await expect(canvas.getByText('Code: 42')).toBeVisible();
  }
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Verify">
      <OTPInput {...args} name="code" defaultValue="246810" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('code')).toBe('246810');
  }
}`,...wt.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    groupSize: 3,
    helperText: 'We sent a code to your phone.',
    onResend: fn(),
    resendCooldown: 0
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveAccessibleName('Resend code');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Sent to •••• 4821.',
    onResend: fn(),
    resendCooldown: 0
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: one field for the whole code, labelled, with resend.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Licence key',
    length: 16,
    validationType: 'alphanumeric'
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a long code split into cells nobody can scan.`,...$.parameters?.docs?.description}}}})))()}export{gt as a,Tt as c,ht as d,$ as i,Dt as l,U as n,J as o,Q as r,K as s,Z as t,L as u};