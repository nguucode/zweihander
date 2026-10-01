import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./icon-D2EAxy9f.js";import{n as s,t as c}from"./utils-CUvRSo4U.js";import{d as l,f as u,n as d,t as f}from"./useStableCallback-CiiHsHLZ.js";import{n as p,t as m}from"./useIsoLayoutEffect-pZTQXUp4.js";import{c as h,d as g,f as _,m as v,n as y,p as b,s as x,t as S,v as C,y as w}from"./useRenderElement-JLgEYJQi.js";import{n as T,t as ee}from"./useButton-BKapWYk8.js";import{i as te,o as E,t as ne}from"./shadowDom-DbPtrSJB.js";import{n as D,t as O}from"./useControlled-gPwvbF4e.js";import{N as k,S as re,T as ie,_ as ae,g as oe,m as A,n as se,p as ce,r as j,s as le,t as M,v as ue,y as de}from"./createBaseUIEventDetails-CDFGPHSH.js";import{n as fe,r as pe,t as me}from"./visuallyHidden-DpEW8Wz9.js";import{a as he,b as N,c as ge,d as _e,f as ve,g as ye,h as be,i as P,l as xe,s as Se,u as Ce,y as we}from"./useLabel-CiQliSMv.js";import{n as F,t as Te}from"./useValueChanged-BNsmavhn.js";import{n as Ee,t as I}from"./useOnMount-C8HrP9l0.js";import{i as De,r as Oe}from"./os-DS3_-Lha.js";import{n as ke,r as Ae,t as je}from"./useTimeout-CTVpo4ur.js";import{n as Me,r as Ne,t as Pe}from"./useValueAsRef-DAeDNF9Q.js";import{n as Fe,t as Ie}from"./useForcedRerendering-gc86yPxw.js";import{t as L}from"./clamp-cF-EN37A.js";import{n as R,r as z,t as Le}from"./formatNumber-Diqi8AEZ.js";import{a as Re,o as ze,r as Be,t as Ve}from"./InputField-C3EkeSPi.js";function B(){let e=V.useContext(He);if(e===void 0)throw Error(b(43));return e}var V,He;function H(){return(H=t((()=>{v(),V=e(i(),1),He=V.createContext(void 0)})))()}var Ue;function U(){return(U=t((()=>{N(),Ue={inputValue:()=>null,value:()=>null,...we}})))()}function We(e){return at.test(e)}function Ge(e,t){let[n,r=`0`]=String(e).split(`e`);return Number(`${n}e${Number(r)+t}`)}function Ke(e,t){return R(e,t).formatToParts(_t)}function qe(e,t){let n=Ke(e,t),r={};n.forEach(e=>{r[e.type]=e.value});let i=`.`;return R(e).formatToParts(.1).forEach(e=>{e.type===`decimal`&&(i=e.value)}),{...r,decimal:i}}function W(e,t,n){let r=e.replace(lt,``).trim();r=r.replace(pt,`-`).replace(mt,`+`);let i=!1,a=(e,t)=>(t===`-`&&(i=!0),``);r=r.replace(/([+-])\s*$/,a).replace(/^\s*([+-])/,a);let o=t;o===void 0&&(rt.test(r)?o=`ar`:it.test(r)&&(o=`zh`));let{group:s,decimal:c,currency:l,exponentSeparator:u}=qe(o,n),d=R(o,n).formatToParts(1).filter(e=>e.type===`unit`).map(e=>ft(e.value)),f=d.length?new RegExp(d.join(`|`),`g`):null,p=null;s&&(p=/\p{Zs}/u.test(s)?/\p{Zs}/gu:s===`'`||s===`’`?/['’]/g:new RegExp(ft(s),`g`));let m=[[p,``],[new RegExp(ft(c),`g`),`.`],[/[．٫]/g,`.`],[/[，٬]/g,``],[l?new RegExp(ft(l),`g`):null,``],[f,``],[tt,``],[nt,``],[u?new RegExp(ft(u),`g`):null,`e`],[Ye,e=>String(e.charCodeAt(0)%16)],[Xe,e=>String(Math.max(Je.indexOf(e)-1,0))]].reduce((e,[t,n])=>t?e.replace(t,n):e,r),h=m.lastIndexOf(`.`);if(h!==-1&&(m=`${m.slice(0,h).replace(/\./g,``)}.${m.slice(h+1).replace(/\./g,``)}`),/^[-+]?Infinity$/i.test(r)||r.includes(`∞`))return null;let g=(i?`-`:``)+m,_=parseFloat(g),v=n?.style,y=v===`unit`&&n?.unit===`percent`,b=$e.test(e)||v===`percent`;return et.test(e)?_=Ge(_,-3):!y&&b&&(_=Ge(_,-2)),Number.isFinite(_)?_:null}var Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t;function vt(){return(vt=t((()=>{z(),Je=`零〇一二三四五六七八九`,Ye=/[٠-٩۰-۹０-９]/g,Xe=/[零〇一二三四五六七八九]/g,Ze=[`%`,`٪`,`％`,`﹪`],Qe=[`‰`,`؉`],$e=/[%٪％﹪]/,et=/[‰؉]/,tt=/[%٪％﹪]/g,nt=/[‰؉]/g,rt=/[٠-٩۰-۹]/,it=/[零〇一二三四五六七八九]/,at=/[0-9٠-٩۰-۹０-９零〇一二三四五六七八九]/,ot=[`.`,`,`,`．`,`，`,`٫`,`٬`],st=/\p{Zs}/u,ct=/\p{Cf}/u,lt=/\p{Cf}/gu,ut=[`+`,`＋`,`﹢`],dt=[`-`,`−`,`－`,`‒`,`–`,`—`,`﹣`],ft=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),pt=/[-−－‒–—﹣]/gu,mt=/[+＋﹢]/gu,ht=/[-−－‒–—﹣]/,gt=/[+＋﹢]/,_t=11111.1})))()}function yt(e){return e?.maximumFractionDigits!=null||e?.minimumFractionDigits!=null||e?.maximumSignificantDigits!=null||e?.minimumSignificantDigits!=null||e?.roundingIncrement!=null||e?.roundingMode!=null||e?.roundingPriority!=null}function bt(e,t){if(!Number.isFinite(e))return e;if(!yt(t)){let t=parseFloat(e.toPrecision(15));return Math.abs(t-e)<=Math.min(2**-52*Math.max(1,Math.abs(e)),wt)?t:e}let n=R(`en-US`,{...t,signDisplay:`auto`,currencySign:`standard`,notation:t.notation===`compact`?`standard`:t.notation,useGrouping:!1}),r=n.format(e),i=W(r,`en-US`,t);return i===null?e:n.format(i)===r?i:e}function xt(e,t,n,r){let i=Math.abs(n),a=Math.sign(n),o=i*Ct*a,s=e-t+o;return r?t+Math.round(s/n)*n:t+(a>0?Math.floor(s/i):Math.ceil(s/i))*i}function St(e,t,n,r,i,a,o,s,c){if(e===null)return e;let l=e;if(t!=null&&o&&t!==0&&(l=xt(l,s||n===-(2**53-1)?i:n,t,s)),c&&(l=L(l,n,r)),t==null&&!yt(a))return l;let u=bt(l,a);return c?L(u,n,r):u}var Ct,wt;function Tt(){return(Tt=t((()=>{z(),vt(),Ct=1e-10,wt=1e-10})))()}var G,Et,Dt;function Ot(){return(Ot=t((()=>{G=e(i(),1),O(),f(),m(),Pe(),Ie(),g(),me(),Oe(),z(),te(),H(),be(),xe(),P(),U(),S(),vt(),Tt(),j(),A(),Et=r(),Dt=G.forwardRef(function(e,t){let{id:n,min:r,max:i,smallStep:a=.1,step:o=1,largeStep:s=10,required:c=!1,disabled:l=!1,readOnly:u=!1,form:f,name:m,defaultValue:h=null,value:g,onValueChange:v,onValueCommitted:b,allowWheelScrub:x=!1,snapOnStep:S=!1,allowOutOfRange:C=!1,format:w,locale:T,render:ee,className:te,inputRef:O,style:re,...ae}=e,{setDirty:oe,validityData:A,disabled:ce,setFilled:j,name:le,state:ue,validation:de}=ye(),{clearErrors:me}=Ce(),N=ce||l,ge=le??m,_e=o===`any`?1:o,[ve,be]=G.useState(!1),P=r??-(2**53-1),xe=i??2**53-1,Se=r??0,we=w?.style,F=G.useRef(null),Te=_(O,de.inputRef),Ee=he({id:n}),[I,Oe]=D({controlled:g,default:h,name:`NumberField`,state:`value`}),ke=Me(I);p(()=>{j(I!==null)},[j,I]);let Ae=Fe(),je=Me(w),Pe=G.useRef(!1),Ie=d((e,t)=>{Pe.current=!1,b?.(e,t)}),L=G.useRef(!0),R=G.useRef(null),[z,Re]=G.useState(()=>Le(I,T,w)),[ze,Be]=G.useState(`numeric`),Ve=d(()=>{let e=Ke(T,w),t=new Set(ot),n=e=>e.forEach(e=>t.add(e)),r=e.find(e=>e.type===`decimal`)?.value??qe(T,w).decimal;t.add(r),e.forEach(e=>{e.type!==`integer`&&e.type!==`fraction`&&e.type!==`exponentInteger`&&e.type!==`compact`&&(n(Array.from(e.value)),st.test(e.value)&&t.add(` `))});let i=we===`percent`||we===`unit`&&w?.unit===`percent`,a=we===`percent`||we===`unit`&&w?.unit===`permille`;return i&&n(Ze),a&&n(Qe),n(ut),(P<0||C)&&n(dt),t}),B=d(e=>e?.altKey?a:e?.shiftKey?s:_e),V=d((e,t)=>{let n=t.event,r=t.direction,i=t.reason.startsWith(`input-`)||t.reason===`none`,a=!C||!i,o=St(e,r?B(n)*r:void 0,P,xe,Se,je.current,S,n?.altKey??!1,a),s=o!==I||i&&(e!==I||L.current===!1);if(s){if(v?.(o,t),t.isCanceled)return!1;Oe(o),oe(o!==A.initialValue),Pe.current=!0}return R.current=o,L.current&&Re(Le(o,T,w)),Ae(),s}),H=d((e,{direction:t,currentValue:n,event:r,reason:i})=>{let a=n??ke.current,o=r;return typeof a==`number`?V(a+e*t,M(i,o,void 0,{direction:t})):V(0,M(i,o))});p(function(){if(!L.current)return;let e=Le(I,T,w);e!==z&&Re(e)}),p(function(){if(!De)return;let e=`text`;P>=0&&(e=`decimal`),Be(e)},[P]);let U=d(()=>{let e=F.current;if(!e)return;let t=e.value.length;e.setSelectionRange(t,t),e.focus()});G.useEffect(function(){let e=F.current;if(N||u||!x||!e)return;function t(e){if(e.ctrlKey||ne(E(F.current))!==F.current)return;let t=Math.abs(e.deltaX)>Math.abs(e.deltaY),n=e.shiftKey&&t?e.deltaX:e.deltaY;if(n===0||!e.shiftKey&&t)return;e.preventDefault(),L.current=!0;let r=B(e);H(r,{direction:n>0?-1:1,event:e,reason:`wheel`})&&Ie(R.current,se(k,e))}return Ne(e,`wheel`,t)},[x,H,N,u,B,Ie,R,ke]);let We=G.useMemo(()=>({...ue,disabled:N,readOnly:u,required:c,value:I,inputValue:z,scrubbing:ve}),[ue,N,u,c,I,z,ve]),Ge=G.useMemo(()=>({inputRef:F,focusInput:U,minWithDefault:P,maxWithDefault:xe,id:Ee,setValue:V,incrementValue:H,getStepAmount:B,allowInputSyncRef:L,formatOptionsRef:je,valueRef:ke,lastChangedValueRef:R,hasPendingCommitRef:Pe,name:ge,nameProp:m,inputMode:ze,getAllowedNonNumericKeys:Ve,min:r,max:i,setInputValue:Re,locale:T,setIsScrubbing:be,state:We,onValueCommitted:Ie}),[F,U,P,xe,Ee,V,H,B,je,ke,ge,m,ze,Ve,r,i,Re,T,We,Ie]),W=y(`div`,e,{ref:t,state:We,props:ae,stateAttributesMapping:Ue});return(0,Et.jsxs)(He.Provider,{value:Ge,children:[W,(0,Et.jsx)(`input`,{...de.getValidationProps(N,{onFocus(){U()},onChange(e){if(e.nativeEvent.defaultPrevented||N||u)return;let t=e.currentTarget.valueAsNumber,n=Number.isNaN(t)?null:t,r=M(ie,e.nativeEvent);V(n,r),me(ge),de.change(R.current??n)}}),ref:Te,type:`number`,form:f,name:ge,value:I??``,min:r,max:i,step:o,disabled:N,readOnly:u,required:c,"aria-hidden":!0,tabIndex:-1,style:ge?pe:fe,suppressHydrationWarning:!0})]})})})))()}var kt,At;function jt(){return(jt=t((()=>{kt=e(i(),1),H(),U(),S(),At=kt.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=B();return y(`div`,e,{ref:t,state:o,props:[{role:`group`},a],stateAttributesMapping:Ue})})})))()}function Mt(){let e=w(Pt.create).current;return Ee(e.disposeEffect),e}var Nt,Pt;function Ft(){return(Ft=t((()=>{C(),I(),ke(),Nt=0,Pt=class e extends je{static create(){return new e}start(e,t){this.clear(),this.currentId=setInterval(()=>{t()},e)}clear=()=>{this.currentId!==Nt&&(clearInterval(this.currentId),this.currentId=Nt)}}})))()}function It(e){return e===`touch`||e===`pen`}function Lt(e){let{disabled:t,tick:n,onStop:r,tickDelay:i=Rt,startDelay:a=zt,scrollDistance:o=Bt,elementRef:s}=e,c=Ae(),u=Mt(),f=Ae(),p=K.useRef(!1),m=K.useRef(0),h=K.useRef({x:0,y:0}),g=K.useRef(!1),_=K.useRef(!1),v=K.useRef(``),y=K.useRef(x),b=K.useRef(x),S=d(()=>{f.clear(),c.clear(),u.clear(),y.current(),m.current=0});function C(e){S();let t=s.current;if(!t)return;let o=l(t);function d(e){e.preventDefault()}if(y.current=Ne(o,`contextmenu`,d),b.current(),b.current=Ne(o,`pointerup`,e=>{p.current=!1,S(),r?.(e)},{once:!0}),!n(e)){S();return}c.start(a,()=>{u.start(i,()=>{n(e)||S()})})}return K.useEffect(()=>()=>{S(),b.current()},[S]),K.useEffect(()=>{t&&(p.current=!1,g.current=!1,v.current=``,S())},[t,S]),{pointerHandlers:{onTouchStart(){g.current=!0},onTouchEnd(){g.current=!1},onPointerDown(e){e.defaultPrevented||e.button||t||(v.current=e.pointerType,_.current=!1,p.current=!0,h.current={x:e.clientX,y:e.clientY},It(e.pointerType)?f.start(Vt,()=>{let t=m.current;m.current=0,p.current&&t<Ht?(C(e.nativeEvent),_.current=!0):(_.current=!1,S())}):(e.preventDefault(),C(e.nativeEvent)))},onPointerUp(e){It(e.pointerType)&&(p.current=!1)},onPointerMove(e){if(t||!It(e.pointerType)||!p.current)return;m.current+=1;let{x:n,y:r}=h.current,i=n-e.clientX,a=r-e.clientY;i**2+a**2>o**2&&S()},onMouseEnter(e){e.defaultPrevented||t||!p.current||g.current||It(v.current)||C(e.nativeEvent)},onMouseLeave(){g.current||S()},onMouseUp(){g.current||S()}},shouldSkipClick:d(e=>e.defaultPrevented?!0:It(v.current)?_.current:e.detail!==0)}}var K,Rt,zt,Bt,Vt,Ht;function Ut(){return(Ut=t((()=>{K=e(i(),1),h(),ke(),Ft(),f(),u(),Rt=60,zt=400,Bt=8,Vt=50,Ht=3})))()}function Wt(e,t,n){let{render:r,className:i,disabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{allowInputSyncRef:l,formatOptionsRef:u,getStepAmount:d,id:f,incrementValue:p,inputRef:m,focusInput:h,maxWithDefault:g,minWithDefault:_,setValue:v,state:b,valueRef:x,locale:S,lastChangedValueRef:C,onValueCommitted:w}=B(),{disabled:ee,readOnly:te,value:E,inputValue:ne}=b,D=a||ee||E!=null&&(n?E>=g:E<=_),O=n?ce:le;function k(e){let t=!l.current;if(l.current=!0,!t){C.current=x.current;return}let n=W(ne,S,u.current);if(n!==null){let t=M(O,e);v(n,t),t.isCanceled||(x.current=n)}}let{pointerHandlers:re,shouldSkipClick:ie}=Lt({disabled:D||te,elementRef:m,tick(e){let t=d(e);return p(t,{direction:n?1:-1,event:e,reason:O})},onStop(e){let t=C.current??x.current;w(t,se(O,e))}}),ae={disabled:D,"aria-label":n?`Increase`:`Decrease`,"aria-controls":f,tabIndex:-1,style:Gt,...re,onClick(e){let t=D||te;if(e.defaultPrevented||t||ie(e))return;k(e.nativeEvent);let r=d(e),i=x.current;p(r,{direction:n?1:-1,event:e.nativeEvent,reason:O});let a=C.current??x.current;a!==i&&w(a,se(O,e.nativeEvent))},onPointerDown(e){e.defaultPrevented||te||e.button||D||(k(e.nativeEvent),C.current=null,It(e.pointerType)||h(),re.onPointerDown(e))}},{getButtonProps:oe,buttonRef:A}=T({disabled:D||te,native:o,focusableWhenDisabled:!0}),j={...b,disabled:D};return y(`button`,e,{ref:[t,A],state:j,props:[ae,c,oe],stateAttributesMapping:Ue})}var Gt;function Kt(){return(Kt=t((()=>{S(),ee(),Ut(),vt(),j(),A(),H(),U(),Gt={WebkitUserSelect:`none`,userSelect:`none`}})))()}var qt,Jt;function Yt(){return(Yt=t((()=>{qt=e(i(),1),Kt(),Jt=qt.forwardRef(function(e,t){return Wt(e,t,!0)})})))()}var Xt,Zt;function Qt(){return(Qt=t((()=>{Xt=e(i(),1),Kt(),Zt=Xt.forwardRef(function(e,t){return Wt(e,t,!1)})})))()}var $t,en,tn;function nn(){return(nn=t((()=>{$t=e(i(),1),m(),z(),H(),be(),_e(),xe(),Se(),vt(),U(),S(),j(),Te(),A(),Tt(),en=new Set([`Backspace`,`Delete`,`ArrowLeft`,`ArrowRight`,`Tab`,`Enter`,`Escape`]),tn=$t.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{allowInputSyncRef:o,formatOptionsRef:s,getAllowedNonNumericKeys:c,getStepAmount:l,id:u,incrementValue:d,inputMode:f,max:m,min:h,name:g,nameProp:_,setValue:v,state:b,setInputValue:x,locale:S,inputRef:C,onValueCommitted:w,lastChangedValueRef:T,hasPendingCommitRef:ee,valueRef:te}=B(),{disabled:E,readOnly:ne,required:D,value:O,inputValue:k}=b,{clearErrors:ie}=Ce(),{validationMode:A,setTouched:ce,setFocused:j,invalid:le,shouldValidateOnChange:fe,validation:pe}=ye(),{labelId:me}=ge(),he=$t.useRef(!1),N=$t.useRef(null);return ve(C,u,O,void 0,!E,_),p(()=>{if(N.current!=null){let e=N.current;N.current=null,C.current?.setSelectionRange(e,e)}}),F(O,()=>{if(ie(g),he.current&&!fe()){he.current=!1;return}pe.change(O)}),y(`input`,e,{ref:[t,C],state:b,props:[{id:u,required:D,disabled:E,readOnly:ne,inputMode:f,value:k,type:`text`,autoComplete:`off`,autoCorrect:`off`,spellCheck:`false`,"aria-roledescription":`Number field`,"aria-invalid":!E&&le?!0:void 0,"aria-labelledby":me,suppressHydrationWarning:!0,onFocus(e){e.defaultPrevented||E||j(!0)},onBlur(e){if(e.defaultPrevented||E||(ce(!0),j(!1),ne))return;let t=!o.current,n=ee.current;if(o.current=!0,k.trim()===``){let r=M(ue,e.nativeEvent);if(v(null,r),r.isCanceled)return;A===`onBlur`&&pe.commit(null),(t||n||O!==null)&&w(null,se(ue,e.nativeEvent));return}let r=s.current,i=W(k,S,r);if(i===null)return;let a=yt(r),c;c=!t&&!a?O:a?bt(i,r):i;let l=se(oe,e.nativeEvent),u=O!==c,d=t||u||n,f=c;if(u){let t=M(oe,e.nativeEvent);if(he.current=!0,v(c,t),t.isCanceled){he.current=!1;return}f=T.current,f===O&&(he.current=!1)}A===`onBlur`&&pe.commit(f),d&&w(f,l);let p=Le(f,S,r);k!==p&&x(p)},onChange(e){if(e.nativeEvent.defaultPrevented)return;o.current=!1;let t=e.currentTarget.value;if(t.trim()===``){x(t),v(null,M(ue,e.nativeEvent));return}let n=c();if(!Array.from(t).every(e=>We(e)||ht.test(e)||n.has(e)||ct.test(e)))return;let r=W(t,S,s.current);x(t),r!==null&&v(r,M(ae,e.nativeEvent))},onKeyDown(e){if(e.defaultPrevented||ne||E)return;let t=e.nativeEvent,n=!o.current,r=c(),i=r.has(e.key),{decimal:a,currency:u,percentSign:f}=qe(S,s.current),p=e.currentTarget.selectionStart,g=e.currentTarget.selectionEnd,_=p===0&&g===k.length,y=e=>p!=null&&g!=null&&e>=p&&e<g;[[ht,pt],[gt,mt]].forEach(([t,n])=>{if(t.test(e.key)&&Array.from(r).some(e=>t.test(e))){let e=k.search(n),t=e!==-1&&y(e);i=!(ht.test(k)||gt.test(k))||_||t}}),[a,u,f].forEach(t=>{if(e.key===t){let e=k.indexOf(t),n=y(e);i=e===-1||_||n}});let b=en.has(e.key),x=e.key===`ArrowUp`||e.key===`ArrowDown`;if(e.which===229||e.altKey&&!x||e.ctrlKey||e.metaKey||i||We(e.key)||b)return;let C=null;if(e.key===`Home`&&h!=null?C=h:e.key===`End`&&m!=null&&(C=m),e.key.length>1&&!x&&C===null)return;let ee=n?W(k,S,s.current):null,D=l(e);e.preventDefault(),e.stopPropagation();let O=se(re,t),ie=!1;(x||C!==null)&&(o.current=!0),x?(n||(T.current=te.current),ie=d(D,{direction:e.key===`ArrowUp`?1:-1,currentValue:ee,event:t,reason:re})):C!==null&&(ie=v(C,M(re,t))),ie&&w(T.current,O)},onPaste(e){if(e.defaultPrevented||ne||E)return;let t=``;try{t=e.clipboardData?.getData(`text/plain`)??``}catch{return}e.preventDefault();let n=e.currentTarget,r=n.selectionStart,i=n.selectionEnd,a=k.slice(0,r)+t+k.slice(i),c=W(a,S,s.current);c!==null&&(o.current=!1,N.current=r+t.length,v(c,M(de,e.nativeEvent)),x(a))}},a,e=>pe.getValidationProps(E,e)],stateAttributesMapping:Ue})})})))()}var rn,an,on,sn,cn;function ln(){return(ln=t((()=>{rn=`_group_12ef5_3`,an=`_input_12ef5_9`,on=`_step_12ef5_13`,sn=`_lg_12ef5_51`,cn={group:rn,input:an,step:on,lg:sn}})))()}function un({ref:e,label:t,helperText:n,validationState:r,size:i=`md`,appearance:a=`outlined`,isFullWidth:s,precision:l,name:u,placeholder:d,disabled:f,required:p,className:m,onValueChange:h,id:g,"aria-label":_,...v}){return(0,q.jsx)(Ve,{label:t,helperText:n,validationState:r,required:p,disabled:f,name:u,isFullWidth:s,className:m,children:(0,q.jsx)(Dt,{...v,id:g,required:p,format:l===void 0?void 0:{minimumFractionDigits:l,maximumFractionDigits:l},onValueChange:h&&(e=>h(e)),children:(0,q.jsxs)(At,{className:c(Be(i,a),cn.group,cn[i]),children:[(0,q.jsx)(tn,{ref:e,placeholder:d,"aria-label":_,className:c(ze.control,cn.input)}),(0,q.jsx)(Zt,{className:cn.step,children:(0,q.jsx)(o,{name:`minus`})}),(0,q.jsx)(Jt,{className:cn.step,children:(0,q.jsx)(o,{name:`plus`})})]})})})}var q;function dn(){return(dn=t((()=>{Ot(),jt(),nn(),Qt(),Yt(),a(),s(),Re(),ln(),q=r(),un.__docgenInfo={description:``,methods:[],displayName:`NumberInput`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},value:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:``},defaultValue:{required:!1,tsType:{name:`number`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},name:`value`}],return:{name:`void`}}},description:"The spec's `onChange`. `null` when the field is emptied."},min:{required:!1,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``},step:{required:!1,tsType:{name:`number`},description:``},precision:{required:!1,tsType:{name:`number`},description:`Decimal places shown and accepted.`},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'underlined' | 'unstyled'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underlined'`},{name:`literal`,value:`'unstyled'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var fn=n({Appearances:()=>vn,Controlled:()=>Sn,Default:()=>X,Disabled:()=>bn,InAForm:()=>Cn,Limits:()=>gn,Precision:()=>Q,ReadOnly:()=>xn,Sizes:()=>$,Step:()=>Z,Typing:()=>_n,Validation:()=>yn,__namedExportsOrder:()=>wn,default:()=>hn}),pn,J,Y,mn,hn,X,gn,Z,Q,_n,$,vn,yn,bn,xn,Sn,Cn,wn;function Tn(){return(Tn=t((()=>{pn=i(),dn(),J=r(),{expect:Y,fn:mn}=__STORYBOOK_MODULE_TEST__,hn={title:`Components/Inputs/NumberInput`,component:un,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`outlined`,`filled`,`underlined`,`unstyled`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Quantity`,defaultValue:6,min:0,max:100,onValueChange:mn()}},X={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await Y(r).toHaveValue(`6`),await t.click(e.getByRole(`button`,{name:/increase/i})),await Y(r).toHaveValue(`7`),await Y(n.onValueChange).toHaveBeenLastCalledWith(7),await t.click(e.getByRole(`button`,{name:/decrease/i})),await Y(r).toHaveValue(`6`),await t.click(r),await t.keyboard(`{ArrowUp}{ArrowUp}`),await Y(r).toHaveValue(`8`),await t.keyboard(`{ArrowDown}`),await Y(r).toHaveValue(`7`)}},gn={args:{defaultValue:99,max:100},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/increase/i});await t.click(n),await Y(e.getByLabelText(`Quantity`)).toHaveValue(`100`),await Y(n).toBeDisabled(),await Y(getComputedStyle(n).color).not.toBe(getComputedStyle(e.getByRole(`button`,{name:/decrease/i})).color)}},Z={args:{defaultValue:10,step:5},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await Y(e.getByLabelText(`Quantity`)).toHaveValue(`15`)}},Q={args:{label:`Price`,defaultValue:9.5,step:.25,precision:2},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Price`);await Y(n).toHaveValue(`9.50`),await t.click(e.getByRole(`button`,{name:/increase/i})),await Y(n).toHaveValue(`9.75`)}},_n={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await t.clear(r),await Y(n.onValueChange).toHaveBeenLastCalledWith(null),await t.type(r,`42`),await Y(n.onValueChange).toHaveBeenLastCalledWith(42)}},$={render:e=>(0,J.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`,`lg`].map(t=>(0,J.jsx)(un,{...e,size:t,label:t},t))})},vn={render:e=>(0,J.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`outlined`,`filled`,`underlined`,`unstyled`].map(t=>(0,J.jsx)(un,{...e,appearance:t,label:t},t))})},yn={args:{validationState:`error`,helperText:`Order at least 1.`,defaultValue:0},play:async({canvas:e})=>{await Y(e.getByLabelText(`Quantity`)).toHaveAttribute(`aria-invalid`,`true`),await Y(e.getByLabelText(`Quantity`)).toHaveAccessibleDescription(`Order at least 1.`)}},bn={args:{disabled:!0},play:async({canvas:e})=>{await Y(e.getByLabelText(`Quantity`)).toBeDisabled(),await Y(e.getByRole(`button`,{name:/increase/i})).toBeDisabled()}},xn={args:{readOnly:!0},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await Y(n.onValueChange).not.toHaveBeenCalled()}},Sn={render:function(e){let[t,n]=(0,pn.useState)(3);return(0,J.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,J.jsx)(un,{...e,defaultValue:void 0,value:t,onValueChange:n}),(0,J.jsxs)(`span`,{children:[`Value: `,t??`empty`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await Y(e.getByText(`Value: 4`)).toBeVisible()}},Cn={render:e=>(0,J.jsx)(`form`,{"aria-label":`Order`,children:(0,J.jsx)(un,{...e,name:`quantity`})}),play:async({canvasElement:e})=>{await Y(new FormData(e.querySelector(`form`)).get(`quantity`)).toBe(`6`)}},wn=[`Default`,`Limits`,`Step`,`Precision`,`Typing`,`Sizes`,`Appearances`,`Validation`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`{
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
    await expect(getComputedStyle(increase).color).not.toBe(getComputedStyle(canvas.getByRole('button', {
      name: /decrease/i
    })).color);
  }
}`,...gn.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
      {(['sm', 'md', 'lg'] as const).map(size => <NumberInput key={size} {...args} size={size} label={size} />)}
    </div>
}`,...$.parameters?.docs?.source}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['outlined', 'filled', 'underlined', 'unstyled'] as const).map(appearance => <NumberInput key={appearance} {...args} appearance={appearance} label={appearance} />)}
    </div>
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`{
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
}`,...yn.parameters?.docs?.source}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`{
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
}`,...bn.parameters?.docs?.source}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
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
}`,...xn.parameters?.docs?.source}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
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
}`,...Sn.parameters?.docs?.source}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Order">
      <NumberInput {...args} name="quantity" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('quantity')).toBe('6');
  }
}`,...Cn.parameters?.docs?.source}}}})))()}export{Tn as a,$ as i,fn as n,Q as r,X as t};