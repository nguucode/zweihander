import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{d as s,f as c,n as l,t as u}from"./useStableCallback-D10ebQio.js";import{n as d,t as f}from"./useIsoLayoutEffect-DlZGxu_J.js";import{c as p,d as m,f as h,m as g,n as _,p as v,s as y,t as b,v as x,y as S}from"./useRenderElement-BMuTcvdq.js";import{n as C,t as w}from"./useButton-DvXmwjM6.js";import{i as T,o as ee,t as te}from"./shadowDom-DmVu_9Lp.js";import{n as E,t as D}from"./icon-Dc4hTclj.js";import{n as O,t as k}from"./useControlled-_gtp84q_.js";import{N as A,S as ne,T as re,_ as ie,g as ae,m as j,n as oe,p as se,r as M,s as ce,t as N,v as le,y as ue}from"./createBaseUIEventDetails-BcktkkBO.js";import{n as de,r as fe,t as pe}from"./visuallyHidden-DpEW8Wz9.js";import{a as me,b as P,c as he,d as ge,f as _e,g as ve,h as ye,i as F,l as be,s as xe,u as Se,y as Ce}from"./useLabel-CUqoWyxw.js";import{n as I,t as we}from"./useValueChanged-COiRwBi8.js";import{n as Te,t as L}from"./useOnMount-nF-cZMtp.js";import{i as Ee,r as De}from"./os-DS3_-Lha.js";import{n as Oe,r as ke,t as Ae}from"./useTimeout-DqIvLsmM.js";import{n as je,r as Me,t as Ne}from"./useValueAsRef-C6iike0V.js";import{n as Pe,t as Fe}from"./useForcedRerendering-BXWLm9Yr.js";import{t as R}from"./clamp-cF-EN37A.js";import{n as z,r as B,t as Ie}from"./formatNumber-Diqi8AEZ.js";import{a as Le,o as Re,r as ze,t as Be}from"./InputField-DT_Sik-1.js";function V(){let e=H.useContext(Ve);if(e===void 0)throw Error(v(43));return e}var H,Ve;function U(){return(U=t((()=>{g(),H=e(i(),1),Ve=H.createContext(void 0)})))()}var He;function W(){return(W=t((()=>{P(),He={inputValue:()=>null,value:()=>null,...Ce}})))()}function Ue(e){return it.test(e)}function We(e,t){let[n,r=`0`]=String(e).split(`e`);return Number(`${n}e${Number(r)+t}`)}function Ge(e,t){return z(e,t).formatToParts(gt)}function Ke(e,t){let n=Ge(e,t),r={};n.forEach(e=>{r[e.type]=e.value});let i=`.`;return z(e).formatToParts(.1).forEach(e=>{e.type===`decimal`&&(i=e.value)}),{...r,decimal:i}}function G(e,t,n){let r=e.replace(ct,``).trim();r=r.replace(ft,`-`).replace(pt,`+`);let i=!1,a=(e,t)=>(t===`-`&&(i=!0),``);r=r.replace(/([+-])\s*$/,a).replace(/^\s*([+-])/,a);let o=t;o===void 0&&(nt.test(r)?o=`ar`:rt.test(r)&&(o=`zh`));let{group:s,decimal:c,currency:l,exponentSeparator:u}=Ke(o,n),d=z(o,n).formatToParts(1).filter(e=>e.type===`unit`).map(e=>dt(e.value)),f=d.length?new RegExp(d.join(`|`),`g`):null,p=null;s&&(p=/\p{Zs}/u.test(s)?/\p{Zs}/gu:s===`'`||s===`’`?/['’]/g:new RegExp(dt(s),`g`));let m=[[p,``],[new RegExp(dt(c),`g`),`.`],[/[．٫]/g,`.`],[/[，٬]/g,``],[l?new RegExp(dt(l),`g`):null,``],[f,``],[et,``],[tt,``],[u?new RegExp(dt(u),`g`):null,`e`],[Je,e=>String(e.charCodeAt(0)%16)],[Ye,e=>String(Math.max(qe.indexOf(e)-1,0))]].reduce((e,[t,n])=>t?e.replace(t,n):e,r),h=m.lastIndexOf(`.`);if(h!==-1&&(m=`${m.slice(0,h).replace(/\./g,``)}.${m.slice(h+1).replace(/\./g,``)}`),/^[-+]?Infinity$/i.test(r)||r.includes(`∞`))return null;let g=(i?`-`:``)+m,_=parseFloat(g),v=n?.style,y=v===`unit`&&n?.unit===`percent`,b=Qe.test(e)||v===`percent`;return $e.test(e)?_=We(_,-3):!y&&b&&(_=We(_,-2)),Number.isFinite(_)?_:null}var qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt;function _t(){return(_t=t((()=>{B(),qe=`零〇一二三四五六七八九`,Je=/[٠-٩۰-۹０-９]/g,Ye=/[零〇一二三四五六七八九]/g,Xe=[`%`,`٪`,`％`,`﹪`],Ze=[`‰`,`؉`],Qe=/[%٪％﹪]/,$e=/[‰؉]/,et=/[%٪％﹪]/g,tt=/[‰؉]/g,nt=/[٠-٩۰-۹]/,rt=/[零〇一二三四五六七八九]/,it=/[0-9٠-٩۰-۹０-９零〇一二三四五六七八九]/,at=[`.`,`,`,`．`,`，`,`٫`,`٬`],ot=/\p{Zs}/u,st=/\p{Cf}/u,ct=/\p{Cf}/gu,lt=[`+`,`＋`,`﹢`],ut=[`-`,`−`,`－`,`‒`,`–`,`—`,`﹣`],dt=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),ft=/[-−－‒–—﹣]/gu,pt=/[+＋﹢]/gu,mt=/[-−－‒–—﹣]/,ht=/[+＋﹢]/,gt=11111.1})))()}function vt(e){return e?.maximumFractionDigits!=null||e?.minimumFractionDigits!=null||e?.maximumSignificantDigits!=null||e?.minimumSignificantDigits!=null||e?.roundingIncrement!=null||e?.roundingMode!=null||e?.roundingPriority!=null}function yt(e,t){if(!Number.isFinite(e))return e;if(!vt(t)){let t=parseFloat(e.toPrecision(15));return Math.abs(t-e)<=Math.min(2**-52*Math.max(1,Math.abs(e)),Ct)?t:e}let n=z(`en-US`,{...t,signDisplay:`auto`,currencySign:`standard`,notation:t.notation===`compact`?`standard`:t.notation,useGrouping:!1}),r=n.format(e),i=G(r,`en-US`,t);return i===null?e:n.format(i)===r?i:e}function bt(e,t,n,r){let i=Math.abs(n),a=Math.sign(n),o=i*St*a,s=e-t+o;return r?t+Math.round(s/n)*n:t+(a>0?Math.floor(s/i):Math.ceil(s/i))*i}function xt(e,t,n,r,i,a,o,s,c){if(e===null)return e;let l=e;if(t!=null&&o&&t!==0&&(l=bt(l,s||n===-(2**53-1)?i:n,t,s)),c&&(l=R(l,n,r)),t==null&&!vt(a))return l;let u=yt(l,a);return c?R(u,n,r):u}var St,Ct;function wt(){return(wt=t((()=>{B(),_t(),St=1e-10,Ct=1e-10})))()}var K,Tt,Et;function Dt(){return(Dt=t((()=>{K=e(i(),1),k(),u(),f(),Ne(),Fe(),m(),pe(),De(),B(),T(),U(),ye(),be(),F(),W(),b(),_t(),wt(),M(),j(),Tt=r(),Et=K.forwardRef(function(e,t){let{id:n,min:r,max:i,smallStep:a=.1,step:o=1,largeStep:s=10,required:c=!1,disabled:u=!1,readOnly:f=!1,form:p,name:m,defaultValue:g=null,value:v,onValueChange:y,onValueCommitted:b,allowWheelScrub:x=!1,snapOnStep:S=!1,allowOutOfRange:C=!1,format:w,locale:T,render:E,className:D,inputRef:k,style:ne,...ie}=e,{setDirty:ae,validityData:j,disabled:se,setFilled:M,name:ce,state:le,validation:ue}=ve(),{clearErrors:pe}=Se(),P=se||u,he=ce??m,ge=o===`any`?1:o,[_e,ye]=K.useState(!1),F=r??-(2**53-1),be=i??2**53-1,xe=r??0,Ce=w?.style,I=K.useRef(null),we=h(k,ue.inputRef),Te=me({id:n}),[L,De]=O({controlled:v,default:g,name:`NumberField`,state:`value`}),Oe=je(L);d(()=>{M(L!==null)},[M,L]);let ke=Pe(),Ae=je(w),Ne=K.useRef(!1),Fe=l((e,t)=>{Ne.current=!1,b?.(e,t)}),R=K.useRef(!0),z=K.useRef(null),[B,Le]=K.useState(()=>Ie(L,T,w)),[Re,ze]=K.useState(`numeric`),Be=l(()=>{let e=Ge(T,w),t=new Set(at),n=e=>e.forEach(e=>t.add(e)),r=e.find(e=>e.type===`decimal`)?.value??Ke(T,w).decimal;t.add(r),e.forEach(e=>{e.type!==`integer`&&e.type!==`fraction`&&e.type!==`exponentInteger`&&e.type!==`compact`&&(n(Array.from(e.value)),ot.test(e.value)&&t.add(` `))});let i=Ce===`percent`||Ce===`unit`&&w?.unit===`percent`,a=Ce===`percent`||Ce===`unit`&&w?.unit===`permille`;return i&&n(Xe),a&&n(Ze),n(lt),(F<0||C)&&n(ut),t}),V=l(e=>e?.altKey?a:e?.shiftKey?s:ge),H=l((e,t)=>{let n=t.event,r=t.direction,i=t.reason.startsWith(`input-`)||t.reason===`none`,a=!C||!i,o=xt(e,r?V(n)*r:void 0,F,be,xe,Ae.current,S,n?.altKey??!1,a),s=o!==L||i&&(e!==L||R.current===!1);if(s){if(y?.(o,t),t.isCanceled)return!1;De(o),ae(o!==j.initialValue),Ne.current=!0}return z.current=o,R.current&&Le(Ie(o,T,w)),ke(),s}),U=l((e,{direction:t,currentValue:n,event:r,reason:i})=>{let a=n??Oe.current,o=r;return typeof a==`number`?H(a+e*t,N(i,o,void 0,{direction:t})):H(0,N(i,o))});d(function(){if(!R.current)return;let e=Ie(L,T,w);e!==B&&Le(e)}),d(function(){if(!Ee)return;let e=`text`;F>=0&&(e=`decimal`),ze(e)},[F]);let W=l(()=>{let e=I.current;if(!e)return;let t=e.value.length;e.setSelectionRange(t,t),e.focus()});K.useEffect(function(){let e=I.current;if(P||f||!x||!e)return;function t(e){if(e.ctrlKey||te(ee(I.current))!==I.current)return;let t=Math.abs(e.deltaX)>Math.abs(e.deltaY),n=e.shiftKey&&t?e.deltaX:e.deltaY;if(n===0||!e.shiftKey&&t)return;e.preventDefault(),R.current=!0;let r=V(e);U(r,{direction:n>0?-1:1,event:e,reason:`wheel`})&&Fe(z.current,oe(A,e))}return Me(e,`wheel`,t)},[x,U,P,f,V,Fe,z,Oe]);let Ue=K.useMemo(()=>({...le,disabled:P,readOnly:f,required:c,value:L,inputValue:B,scrubbing:_e}),[le,P,f,c,L,B,_e]),We=K.useMemo(()=>({inputRef:I,focusInput:W,minWithDefault:F,maxWithDefault:be,id:Te,setValue:H,incrementValue:U,getStepAmount:V,allowInputSyncRef:R,formatOptionsRef:Ae,valueRef:Oe,lastChangedValueRef:z,hasPendingCommitRef:Ne,name:he,nameProp:m,inputMode:Re,getAllowedNonNumericKeys:Be,min:r,max:i,setInputValue:Le,locale:T,setIsScrubbing:ye,state:Ue,onValueCommitted:Fe}),[I,W,F,be,Te,H,U,V,Ae,Oe,he,m,Re,Be,r,i,Le,T,Ue,Fe]),G=_(`div`,e,{ref:t,state:Ue,props:ie,stateAttributesMapping:He});return(0,Tt.jsxs)(Ve.Provider,{value:We,children:[G,(0,Tt.jsx)(`input`,{...ue.getValidationProps(P,{onFocus(){W()},onChange(e){if(e.nativeEvent.defaultPrevented||P||f)return;let t=e.currentTarget.valueAsNumber,n=Number.isNaN(t)?null:t,r=N(re,e.nativeEvent);H(n,r),pe(he),ue.change(z.current??n)}}),ref:we,type:`number`,form:p,name:he,value:L??``,min:r,max:i,step:o,disabled:P,readOnly:f,required:c,"aria-hidden":!0,tabIndex:-1,style:he?fe:de,suppressHydrationWarning:!0})]})})})))()}var Ot,kt;function At(){return(At=t((()=>{Ot=e(i(),1),U(),W(),b(),kt=Ot.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=V();return _(`div`,e,{ref:t,state:o,props:[{role:`group`},a],stateAttributesMapping:He})})})))()}function jt(){let e=S(Nt.create).current;return Te(e.disposeEffect),e}var Mt,Nt;function Pt(){return(Pt=t((()=>{x(),L(),Oe(),Mt=0,Nt=class e extends Ae{static create(){return new e}start(e,t){this.clear(),this.currentId=setInterval(()=>{t()},e)}clear=()=>{this.currentId!==Mt&&(clearInterval(this.currentId),this.currentId=Mt)}}})))()}function Ft(e){return e===`touch`||e===`pen`}function It(e){let{disabled:t,tick:n,onStop:r,tickDelay:i=Lt,startDelay:a=Rt,scrollDistance:o=zt,elementRef:c}=e,u=ke(),d=jt(),f=ke(),p=q.useRef(!1),m=q.useRef(0),h=q.useRef({x:0,y:0}),g=q.useRef(!1),_=q.useRef(!1),v=q.useRef(``),b=q.useRef(y),x=q.useRef(y),S=l(()=>{f.clear(),u.clear(),d.clear(),b.current(),m.current=0});function C(e){S();let t=c.current;if(!t)return;let o=s(t);function l(e){e.preventDefault()}if(b.current=Me(o,`contextmenu`,l),x.current(),x.current=Me(o,`pointerup`,e=>{p.current=!1,S(),r?.(e)},{once:!0}),!n(e)){S();return}u.start(a,()=>{d.start(i,()=>{n(e)||S()})})}return q.useEffect(()=>()=>{S(),x.current()},[S]),q.useEffect(()=>{t&&(p.current=!1,g.current=!1,v.current=``,S())},[t,S]),{pointerHandlers:{onTouchStart(){g.current=!0},onTouchEnd(){g.current=!1},onPointerDown(e){e.defaultPrevented||e.button||t||(v.current=e.pointerType,_.current=!1,p.current=!0,h.current={x:e.clientX,y:e.clientY},Ft(e.pointerType)?f.start(Bt,()=>{let t=m.current;m.current=0,p.current&&t<Vt?(C(e.nativeEvent),_.current=!0):(_.current=!1,S())}):(e.preventDefault(),C(e.nativeEvent)))},onPointerUp(e){Ft(e.pointerType)&&(p.current=!1)},onPointerMove(e){if(t||!Ft(e.pointerType)||!p.current)return;m.current+=1;let{x:n,y:r}=h.current,i=n-e.clientX,a=r-e.clientY;i**2+a**2>o**2&&S()},onMouseEnter(e){e.defaultPrevented||t||!p.current||g.current||Ft(v.current)||C(e.nativeEvent)},onMouseLeave(){g.current||S()},onMouseUp(){g.current||S()}},shouldSkipClick:l(e=>e.defaultPrevented?!0:Ft(v.current)?_.current:e.detail!==0)}}var q,Lt,Rt,zt,Bt,Vt;function Ht(){return(Ht=t((()=>{q=e(i(),1),p(),Oe(),Pt(),u(),c(),Lt=60,Rt=400,zt=8,Bt=50,Vt=3})))()}function Ut(e,t,n){let{render:r,className:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{allowInputSyncRef:l,formatOptionsRef:u,getStepAmount:d,id:f,incrementValue:p,inputRef:m,focusInput:h,maxWithDefault:g,minWithDefault:v,setValue:y,state:b,valueRef:x,locale:S,lastChangedValueRef:w,onValueCommitted:T}=V(),{disabled:ee,readOnly:te,value:E,inputValue:D}=b,O=a||ee||E!=null&&(n?E>=g:E<=v),k=n?se:ce;function A(e){let t=!l.current;if(l.current=!0,!t){w.current=x.current;return}let n=G(D,S,u.current);if(n!==null){let t=N(k,e);y(n,t),t.isCanceled||(x.current=n)}}let{pointerHandlers:ne,shouldSkipClick:re}=It({disabled:O||te,elementRef:m,tick(e){let t=d(e);return p(t,{direction:n?1:-1,event:e,reason:k})},onStop(e){let t=w.current??x.current;T(t,oe(k,e))}}),ie={disabled:O,"aria-label":n?`Increase`:`Decrease`,"aria-controls":f,tabIndex:-1,style:Wt,...ne,onClick(e){let t=O||te;if(e.defaultPrevented||t||re(e))return;A(e.nativeEvent);let r=d(e),i=x.current;p(r,{direction:n?1:-1,event:e.nativeEvent,reason:k});let a=w.current??x.current;a!==i&&T(a,oe(k,e.nativeEvent))},onPointerDown(e){e.defaultPrevented||te||e.button||O||(A(e.nativeEvent),w.current=null,Ft(e.pointerType)||h(),ne.onPointerDown(e))}},{getButtonProps:ae,buttonRef:j}=C({disabled:O||te,native:o,focusableWhenDisabled:!0}),M={...b,disabled:O};return _(`button`,e,{ref:[t,j],state:M,props:[ie,c,ae],stateAttributesMapping:He})}var Wt;function Gt(){return(Gt=t((()=>{b(),w(),Ht(),_t(),M(),j(),U(),W(),Wt={WebkitUserSelect:`none`,userSelect:`none`}})))()}var Kt,qt;function Jt(){return(Jt=t((()=>{Kt=e(i(),1),Gt(),qt=Kt.forwardRef(function(e,t){return Ut(e,t,!0)})})))()}var Yt,Xt;function Zt(){return(Zt=t((()=>{Yt=e(i(),1),Gt(),Xt=Yt.forwardRef(function(e,t){return Ut(e,t,!1)})})))()}var Qt,$t,en;function tn(){return(tn=t((()=>{Qt=e(i(),1),f(),B(),U(),ye(),ge(),be(),xe(),_t(),W(),b(),M(),we(),j(),wt(),$t=new Set([`Backspace`,`Delete`,`ArrowLeft`,`ArrowRight`,`Tab`,`Enter`,`Escape`]),en=Qt.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{allowInputSyncRef:o,formatOptionsRef:s,getAllowedNonNumericKeys:c,getStepAmount:l,id:u,incrementValue:f,inputMode:p,max:m,min:h,name:g,nameProp:v,setValue:y,state:b,setInputValue:x,locale:S,inputRef:C,onValueCommitted:w,lastChangedValueRef:T,hasPendingCommitRef:ee,valueRef:te}=V(),{disabled:E,readOnly:D,required:O,value:k,inputValue:A}=b,{clearErrors:re}=Se(),{validationMode:j,setTouched:se,setFocused:M,invalid:ce,shouldValidateOnChange:de,validation:fe}=ve(),{labelId:pe}=he(),me=Qt.useRef(!1),P=Qt.useRef(null);return _e(C,u,k,void 0,!E,v),d(()=>{if(P.current!=null){let e=P.current;P.current=null,C.current?.setSelectionRange(e,e)}}),I(k,()=>{if(re(g),me.current&&!de()){me.current=!1;return}fe.change(k)}),_(`input`,e,{ref:[t,C],state:b,props:[{id:u,required:O,disabled:E,readOnly:D,inputMode:p,value:A,type:`text`,autoComplete:`off`,autoCorrect:`off`,spellCheck:`false`,"aria-roledescription":`Number field`,"aria-invalid":!E&&ce?!0:void 0,"aria-labelledby":pe,suppressHydrationWarning:!0,onFocus(e){e.defaultPrevented||E||M(!0)},onBlur(e){if(e.defaultPrevented||E||(se(!0),M(!1),D))return;let t=!o.current,n=ee.current;if(o.current=!0,A.trim()===``){let r=N(le,e.nativeEvent);if(y(null,r),r.isCanceled)return;j===`onBlur`&&fe.commit(null),(t||n||k!==null)&&w(null,oe(le,e.nativeEvent));return}let r=s.current,i=G(A,S,r);if(i===null)return;let a=vt(r),c;c=!t&&!a?k:a?yt(i,r):i;let l=oe(ae,e.nativeEvent),u=k!==c,d=t||u||n,f=c;if(u){let t=N(ae,e.nativeEvent);if(me.current=!0,y(c,t),t.isCanceled){me.current=!1;return}f=T.current,f===k&&(me.current=!1)}j===`onBlur`&&fe.commit(f),d&&w(f,l);let p=Ie(f,S,r);A!==p&&x(p)},onChange(e){if(e.nativeEvent.defaultPrevented)return;o.current=!1;let t=e.currentTarget.value;if(t.trim()===``){x(t),y(null,N(le,e.nativeEvent));return}let n=c();if(!Array.from(t).every(e=>Ue(e)||mt.test(e)||n.has(e)||st.test(e)))return;let r=G(t,S,s.current);x(t),r!==null&&y(r,N(ie,e.nativeEvent))},onKeyDown(e){if(e.defaultPrevented||D||E)return;let t=e.nativeEvent,n=!o.current,r=c(),i=r.has(e.key),{decimal:a,currency:u,percentSign:d}=Ke(S,s.current),p=e.currentTarget.selectionStart,g=e.currentTarget.selectionEnd,_=p===0&&g===A.length,v=e=>p!=null&&g!=null&&e>=p&&e<g;[[mt,ft],[ht,pt]].forEach(([t,n])=>{if(t.test(e.key)&&Array.from(r).some(e=>t.test(e))){let e=A.search(n),t=e!==-1&&v(e);i=!(mt.test(A)||ht.test(A))||_||t}}),[a,u,d].forEach(t=>{if(e.key===t){let e=A.indexOf(t),n=v(e);i=e===-1||_||n}});let b=$t.has(e.key),x=e.key===`ArrowUp`||e.key===`ArrowDown`;if(e.which===229||e.altKey&&!x||e.ctrlKey||e.metaKey||i||Ue(e.key)||b)return;let C=null;if(e.key===`Home`&&h!=null?C=h:e.key===`End`&&m!=null&&(C=m),e.key.length>1&&!x&&C===null)return;let ee=n?G(A,S,s.current):null,O=l(e);e.preventDefault(),e.stopPropagation();let k=oe(ne,t),re=!1;(x||C!==null)&&(o.current=!0),x?(n||(T.current=te.current),re=f(O,{direction:e.key===`ArrowUp`?1:-1,currentValue:ee,event:t,reason:ne})):C!==null&&(re=y(C,N(ne,t))),re&&w(T.current,k)},onPaste(e){if(e.defaultPrevented||D||E)return;let t=``;try{t=e.clipboardData?.getData(`text/plain`)??``}catch{return}e.preventDefault();let n=e.currentTarget,r=n.selectionStart,i=n.selectionEnd,a=A.slice(0,r)+t+A.slice(i),c=G(a,S,s.current);c!==null&&(o.current=!1,P.current=r+t.length,y(c,N(ue,e.nativeEvent)),x(a))}},a,e=>fe.getValidationProps(E,e)],stateAttributesMapping:He})})})))()}var nn,rn,an,on,sn;function cn(){return(cn=t((()=>{nn=`_group_cw53d_3`,rn=`_input_cw53d_8`,an=`_step_cw53d_13`,on=`_sm_cw53d_33`,sn={group:nn,input:rn,step:an,sm:on}})))()}function ln({ref:e,label:t,helperText:n,validationState:r,size:i=`md`,isFullWidth:a,precision:s,name:c,placeholder:l,disabled:u,required:d,className:f,onValueChange:p,id:m,"aria-label":h,...g}){return(0,J.jsx)(Be,{label:t,helperText:n,validationState:r,required:d,disabled:u,name:c,isFullWidth:a,className:f,children:(0,J.jsx)(Et,{...g,id:m,required:d,format:s===void 0?void 0:{minimumFractionDigits:s,maximumFractionDigits:s},onValueChange:p&&(e=>p(e)),children:(0,J.jsxs)(kt,{className:o(ze(i),sn.group,sn[i]),children:[(0,J.jsx)(en,{ref:e,placeholder:l,"aria-label":h,className:o(Re.control,sn.input)}),(0,J.jsx)(Xt,{className:sn.step,children:(0,J.jsx)(D,{name:`minus`})}),(0,J.jsx)(qt,{className:sn.step,children:(0,J.jsx)(D,{name:`plus`})})]})})})}var J;function un(){return(un=t((()=>{Dt(),At(),tn(),Zt(),Jt(),E(),a(),Le(),cn(),J=r(),ln.__docgenInfo={description:``,methods:[],displayName:`NumberInput`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},value:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``},defaultValue:{required:!1,tsType:{name:`number`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},name:`value`}],return:{name:`void`}}},description:"The spec's `onChange`. `null` when the field is emptied."},min:{required:!1,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``},step:{required:!1,tsType:{name:`number`},description:``},precision:{required:!1,tsType:{name:`number`},description:`Decimal places shown and accepted.`},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var dn=n({Controlled:()=>xn,Default:()=>Z,Disabled:()=>yn,InAForm:()=>Sn,Limits:()=>hn,Precision:()=>Q,ReadOnly:()=>bn,Sizes:()=>$,Step:()=>gn,Typing:()=>_n,Validation:()=>vn,__namedExportsOrder:()=>Cn,default:()=>mn}),fn,Y,X,pn,mn,Z,hn,gn,Q,_n,$,vn,yn,bn,xn,Sn,Cn;function wn(){return(wn=t((()=>{fn=i(),un(),Y=r(),{expect:X,fn:pn}=__STORYBOOK_MODULE_TEST__,mn={title:`Components/Inputs/NumberInput`,component:ln,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Quantity`,defaultValue:6,min:0,max:100,onValueChange:pn()}},Z={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await X(r).toHaveValue(`6`),await t.click(e.getByRole(`button`,{name:/increase/i})),await X(r).toHaveValue(`7`),await X(n.onValueChange).toHaveBeenLastCalledWith(7),await t.click(e.getByRole(`button`,{name:/decrease/i})),await X(r).toHaveValue(`6`),await t.click(r),await t.keyboard(`{ArrowUp}{ArrowUp}`),await X(r).toHaveValue(`8`),await t.keyboard(`{ArrowDown}`),await X(r).toHaveValue(`7`)}},hn={args:{defaultValue:99,max:100},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/increase/i});await t.click(n),await X(e.getByLabelText(`Quantity`)).toHaveValue(`100`),await X(n).toBeDisabled(),await X(getComputedStyle(n).opacity).toBe(`0.5`)}},gn={args:{defaultValue:10,step:5},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await X(e.getByLabelText(`Quantity`)).toHaveValue(`15`)}},Q={args:{label:`Price`,defaultValue:9.5,step:.25,precision:2},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Price`);await X(n).toHaveValue(`9.50`),await t.click(e.getByRole(`button`,{name:/increase/i})),await X(n).toHaveValue(`9.75`)}},_n={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await t.clear(r),await X(n.onValueChange).toHaveBeenLastCalledWith(null),await t.type(r,`42`),await X(n.onValueChange).toHaveBeenLastCalledWith(42)}},$={render:e=>(0,Y.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,Y.jsx)(ln,{...e,size:t,label:t},t))})},vn={args:{validationState:`error`,helperText:`Order at least 1.`,defaultValue:0},play:async({canvas:e})=>{await X(e.getByLabelText(`Quantity`)).toHaveAttribute(`aria-invalid`,`true`),await X(e.getByLabelText(`Quantity`)).toHaveAccessibleDescription(`Order at least 1.`)}},yn={args:{disabled:!0},play:async({canvas:e})=>{await X(e.getByLabelText(`Quantity`)).toBeDisabled(),await X(e.getByRole(`button`,{name:/increase/i})).toBeDisabled()}},bn={args:{readOnly:!0},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await X(n.onValueChange).not.toHaveBeenCalled()}},xn={render:function(e){let[t,n]=(0,fn.useState)(3);return(0,Y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,Y.jsx)(ln,{...e,defaultValue:void 0,value:t,onValueChange:n}),(0,Y.jsxs)(`span`,{children:[`Value: `,t??`empty`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await X(e.getByText(`Value: 4`)).toBeVisible()}},Sn={render:e=>(0,Y.jsx)(`form`,{"aria-label":`Order`,children:(0,Y.jsx)(ln,{...e,name:`quantity`})}),play:async({canvasElement:e})=>{await X(new FormData(e.querySelector(`form`)).get(`quantity`)).toBe(`6`)}},Cn=[`Default`,`Limits`,`Step`,`Precision`,`Typing`,`Sizes`,`Validation`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByLabelText('Quantity');
    await expect(input).toHaveValue('6');
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(input).toHaveValue('7');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(7);
    await userEvent.click(canvas.getByRole('button', {
      name: /decrease/i
    }));
    await expect(input).toHaveValue('6');
    // Arrow keys step from the field itself.
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await expect(input).toHaveValue('8');
    await userEvent.keyboard('{ArrowDown}');
    await expect(input).toHaveValue('7');
  }
}`,...Z.parameters?.docs?.source}}},hn.parameters={...hn.parameters,docs:{...hn.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 99,
    max: 100
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const increase = canvas.getByRole('button', {
      name: /increase/i
    });
    await userEvent.click(increase);
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('100');
    // At the limit, the button is disabled rather than silently doing nothing,
    // and it looks it.
    await expect(increase).toBeDisabled();
    // Dimmed by opacity; colour matches the idle button, so it can't tell.
    await expect(getComputedStyle(increase).opacity).toBe('0.5');
  }
}`,...hn.parameters?.docs?.source}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 10,
    step: 5
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('15');
  }
}`,...gn.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    defaultValue: 9.5,
    step: 0.25,
    precision: 2
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Price');
    await expect(input).toHaveValue('9.50');
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(input).toHaveValue('9.75');
  }
}`,...Q.parameters?.docs?.source}}},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByLabelText('Quantity');
    await userEvent.clear(input);
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null);
    await userEvent.type(input, '42');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(42);
  }
}`,..._n.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <NumberInput key={size} {...args} size={size} label={size} />)}
    </div>
}`,...$.parameters?.docs?.source}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Order at least 1.',
    defaultValue: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Quantity')).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByLabelText('Quantity')).toHaveAccessibleDescription('Order at least 1.');
  }
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Quantity')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /increase/i
    })).toBeDisabled();
  }
}`,...yn.parameters?.docs?.source}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...bn.parameters?.docs?.source}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [n, setN] = useState<number | null>(3);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <NumberInput {...args} defaultValue={undefined} value={n} onValueChange={setN} />
        <span>Value: {n ?? 'empty'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(canvas.getByText('Value: 4')).toBeVisible();
  }
}`,...xn.parameters?.docs?.source}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Order">
      <NumberInput {...args} name="quantity" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('quantity')).toBe('6');
  }
}`,...Sn.parameters?.docs?.source}}}})))()}export{wn as a,$ as i,dn as n,Q as r,Z as t};