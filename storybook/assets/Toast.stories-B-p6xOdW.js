import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,m as o,n as s,p as c,t as l}from"./useRenderElement-euNwqn97.js";import{n as u,t as d}from"./utils-CUvRSo4U.js";import{t as f}from"./jsx-runtime-DeHZSEgm.js";import{t as p}from"./react-dom-BXgx-GBU.js";import{d as m,f as h,n as g,t as ee}from"./useStableCallback-BEuE3z7O.js";import{n as _,t as v}from"./useIsoLayoutEffect-BLzSB4yc.js";import{n as te,t as y}from"./useButton-C_juKO0K.js";import{i as ne,n as re,o as ie,r as b,t as ae}from"./shadowDom-DQlB61gq.js";import{n as oe,t as x}from"./Button-CAzJH1mZ.js";import{i as se,r as ce}from"./useBaseUiId-1qKEMtl3.js";import{D as le,E as ue,H as de,J as fe,K as S,Q as pe,Z as me,et as he}from"./usePopupHandleStore-BmUfXaj1.js";import{i as ge,l as C,r as _e,u as ve}from"./useTransitionStatus-CYDYA4DW.js";import{l as w,n as ye}from"./element-GOhf3GOb.js";import{n as be,t as xe}from"./getElementTransform-DsA570Bb.js";import{n as Se,t as Ce}from"./inertValue-Ds7KHeQ8.js";import{n as we,t as Te}from"./useOnMount-D_fl61ik.js";import{n as Ee,t as De}from"./icon-Cjfg2BMt.js";import{n as Oe,t as ke}from"./expectAnatomy-C52ByQ6s.js";import{n as Ae,r as T,t as je}from"./useTimeout-B-hMNeNI.js";import{r as Me}from"./useValueAsRef-CNJnJqq4.js";import{n as Ne,t as Pe}from"./visuallyHidden-DpEW8Wz9.js";import{n as Fe,t as Ie}from"./FloatingPortalLite-DELmv3io.js";import{r as Le,t as Re}from"./Modal-Doq9jB4-.js";function ze(){let e=Be.useContext(Ve);if(!e)throw Error(a(73));return e}var Be,Ve;function E(){return(E=t((()=>{i(),Be=e(r(),1),Ve=Be.createContext(void 0)})))()}function He(e){return Ue+=1,`${e}-${Math.random().toString(36).slice(2,6)}-${Ue}`}var Ue;function We(){return(We=t((()=>{Ue=0})))()}function Ge(e,t){if(typeof e==`string`)return{description:e};if(typeof e==`function`){let n=e(t);return typeof n==`string`?{description:n}:n}return e}function Ke(e){let t=new Map,n=0,r=0;return e.forEach((e,i)=>{let a=e.transitionStatus===`ending`;t.set(e.id,{value:e,domIndex:i,visibleIndex:a?-1:n,offsetY:r}),r+=e.height||0,a||(n+=1)}),t}function qe(e,t){let n=0;return e.map(e=>{if(e.transitionStatus===`ending`)return e;let r=n>=t;return n+=1,e.limited===r?e:{...e,limited:r}})}var D,Je;function Ye(){return(Ye=t((()=>{le(),We(),Ae(),ne(),ye(),D={toasts:e=>e.toasts,isEmpty:e=>e.toasts.length===0,toast:(e,t)=>e.toastMetadata.get(t)?.value,toastIndex:(e,t)=>e.toastMetadata.get(t)?.domIndex??-1,toastOffsetY:(e,t)=>e.toastMetadata.get(t)?.offsetY??0,toastVisibleIndex:(e,t)=>e.toastMetadata.get(t)?.visibleIndex??-1,focused:e=>e.focused,expanded:e=>e.hovering||e.focused,expandedOrOutOfFocus:e=>e.hovering||e.focused||!e.isWindowFocused,prevFocusElement:e=>e.prevFocusElement},Je=class extends ue{timers=new Map;areTimersPaused=!1;constructor(e){super({...e,toastMetadata:Ke(e.toasts)},{},D)}setViewport=e=>{this.set(`viewport`,e)};syncProviderProps(e,t){let n=this.state.limit!==t;if(this.state.timeout===e&&!n)return;let r={timeout:e,limit:t};if(n){let e=qe(this.state.toasts,t);r.toasts=e,r.toastMetadata=Ke(e)}this.update(r)}disposeEffect=()=>()=>{this.timers.forEach(e=>{e.timeout?.clear()}),this.timers.clear()};removeToast(e,t=!1){let n=D.toastIndex(this.state,e);if(n===-1)return;let r=this.state.toasts[n];t||r?.onRemove?.();let i=[...this.state.toasts];i.splice(n,1),this.setToasts(i)}addToast=e=>{let{timeout:t,limit:n}=this.state,r=e.id||He(`toast`);if(e.id){let t=D.toast(this.state,e.id);if(t){if(t.transitionStatus===`ending`)this.removeToast(e.id,!0);else{let{id:t,transitionStatus:n,...r}=e;return this.updateToastInternal(e.id,r,!0,!0),e.id}}}let i={...e,id:r,updateKey:0,transitionStatus:`starting`},a=[i,...this.state.toasts];this.setToasts(qe(a,n));let o=i.timeout??t;return i.type!==`loading`&&o>0&&this.scheduleTimer(r,o,()=>this.closeToast(r)),D.expandedOrOutOfFocus(this.state)&&this.pauseTimers(),r};updateToast=(e,t)=>{let n=D.toast(this.state,e);n&&n.transitionStatus!==`ending`&&this.updateToastInternal(e,typeof t==`function`?t(n):t,!1,!0)};updateToastInternal=(e,t,n=!1,r=!1)=>{let{timeout:i,toasts:a}=this.state,o=D.toast(this.state,e);if(!o||o.transitionStatus===`ending`)return;let s={...o,...t,...r&&{updateKey:o.updateKey+1}};this.setToasts(a.map(t=>t.id===e?s:t));let c=s.timeout??i,l=o.timeout??i,u=Object.hasOwn(t,`timeout`),d=s.transitionStatus!==`ending`&&s.type!==`loading`&&c>0,f=this.timers.has(e),p=l!==c,m=o.type===`loading`;if(!d&&f){this.clearTimer(e);return}d&&(!f||p||u||m||n)&&(this.clearTimer(e),this.scheduleTimer(e,c,()=>this.closeToast(e)),D.expandedOrOutOfFocus(this.state)&&this.pauseTimers())};closeToast=e=>{let t=e===void 0,{limit:n,toasts:r}=this.state,i;if(t)i=r,this.clearTimers();else{let t=D.toast(this.state,e);if(!t)return;i=[t],this.clearTimer(e)}let a=qe(r.map(n=>t||n.id===e?{...n,transitionStatus:`ending`,height:0}:n),n);this.setToasts(a,!a.some(e=>e.transitionStatus!==`ending`)),i.forEach(e=>{e.transitionStatus!==`ending`&&e.onClose?.()}),this.handleFocusManagement(e)};promiseToast=(e,t)=>{let n=Ge(t.loading),r=this.addToast({...n,type:`loading`}),i=e.then(e=>{let n=Ge(t.success,e);return this.updateToast(r,{...n,type:`success`,timeout:n.timeout}),e}).catch(e=>{let n=Ge(t.error,e);return this.updateToast(r,{...n,type:`error`,timeout:n.timeout}),Promise.reject(e)});return{}.hasOwnProperty.call(t,`setPromise`)&&t.setPromise(i),i};pauseTimers(){this.areTimersPaused||(this.areTimersPaused=!0,this.timers.forEach(e=>{e.timeout&&(e.timeout.clear(),e.remaining=Math.max(e.remaining-(Date.now()-e.start),0))}))}resumeTimers(){this.areTimersPaused&&(this.areTimersPaused=!1,this.timers.forEach((e,t)=>{e.remaining=e.remaining>0?e.remaining:e.delay,e.timeout??=je.create(),e.timeout.start(e.remaining,()=>{this.handleTimerFired(t),e.callback()}),e.start=Date.now()}))}restoreFocusToPrevElement(){this.state.prevFocusElement?.focus({preventScroll:!0})}handleDocumentPointerDown=e=>{if(e.pointerType!==`touch`)return;let t=b(e);re(this.state.viewport,t)||(this.resumeTimers(),this.update({hovering:!1,focused:!1}))};scheduleTimer(e,t,n){let r=Date.now(),i=D.expandedOrOutOfFocus(this.state)?void 0:je.create();i?.start(t,()=>{this.handleTimerFired(e),n()}),this.timers.set(e,{timeout:i,start:r,delay:t,remaining:t,callback:n})}clearTimers(){this.timers.forEach(e=>{e.timeout?.clear()}),this.timers.clear(),this.areTimersPaused=!1}clearTimer(e){this.timers.get(e)?.timeout?.clear(),this.timers.delete(e),this.resetPausedStateIfNoTimersRemain()}handleTimerFired(e){this.timers.delete(e),this.resetPausedStateIfNoTimersRemain()}resetPausedStateIfNoTimersRemain(){this.timers.size===0&&(this.areTimersPaused=!1)}setToasts(e,t=e.length===0){let n={toasts:e,toastMetadata:Ke(e)};t&&(n.hovering=!1,n.focused=!1),this.update(n)}handleFocusManagement(e){let t=ae(ie(this.state.viewport));if(!this.state.viewport||!re(this.state.viewport,t)||!w(t))return;if(e===void 0){this.restoreFocusToPrevElement();return}let n=D.toasts(this.state),r=D.toastIndex(this.state,e),i=(e,t)=>{for(let r=e;r>=0&&r<n.length;r+=t)if(n[r].transitionStatus!==`ending`)return n[r];return null},a=i(r+1,1)??i(r-1,-1);a?a.ref?.current?.focus():this.restoreFocusToPrevElement()}}})))()}function Xe(e){let{store:t,timeout:n,limit:r}=e;return _(()=>{t.syncProviderProps(n,r)},[t,n,r]),null}var Ze,Qe,$e;function et(){return(et=t((()=>{Ze=e(r(),1),Te(),c(),v(),E(),Ye(),Qe=f(),$e=function(e){let{children:t,timeout:n=5e3,limit:r=3,toastManager:i}=e,a=o(()=>new Je({timeout:n,limit:r,viewport:null,toasts:[],hovering:!1,focused:!1,isWindowFocused:!0,prevFocusElement:null})).current;return we(a.disposeEffect),Ze.useEffect(function(){if(i)return i[` subscribe`](({action:e,options:t})=>{let n=t.id;e===`promise`&&t.promise?a.promiseToast(t.promise,t):e===`update`&&n?a.updateToast(n,t.updates):e===`close`?a.closeToast(n):a.addToast(t)})},[a,i]),(0,Qe.jsxs)(Ve.Provider,{value:a,children:[(0,Qe.jsx)(Xe,{store:a,timeout:n,limit:r}),t]})}})))()}var tt;function nt(){return(nt=t((()=>{tt=`--toast-frontmost-height`})))()}var O,k,rt;function it(){return(it=t((()=>{O=e(r(),1),h(),Pe(),Ae(),ne(),pe(),E(),l(),ye(),nt(),k=f(),rt=O.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...o}=e,c=ze(),l=T(),u=O.useRef(!1),d=O.useRef(!1),f=O.useRef(!1),p=c.useState(`isEmpty`),h=c.useState(`toasts`),g=c.useState(`focused`),ee=c.useState(`expanded`),_=c.useState(`prevFocusElement`),v=h[0]?.height,te=h.some(e=>e.transitionStatus===`ending`),y=h.filter(e=>e.priority===`high`);O.useEffect(()=>{let e=c.state.viewport;if(!e||p)return;let t=m(e),n=ie(e);function r(t){t.key===`F6`&&b(t)!==e&&(t.preventDefault(),c.set(`prevFocusElement`,ae(n)),e?.focus({preventScroll:!0}),c.pauseTimers(),c.set(`focused`,!0))}function i(e){b(e)===t&&(c.set(`isWindowFocused`,!1),c.pauseTimers())}function a(n){if(n.relatedTarget)return;let r=b(n),i=ae(ie(e));(r===t||!re(e,r)||!w(i))&&c.resumeTimers(),l.start(0,()=>c.set(`isWindowFocused`,!0))}return he(Me(t,`keydown`,r),Me(t,`blur`,i,!0),Me(t,`focus`,a,!0),Me(n,`pointerdown`,c.handleDocumentPointerDown,!0))},[c,l,p]);function ne(e){u.current=!0;let t=e.relatedTarget===c.state.viewport?h.find(e=>e.transitionStatus!==`ending`&&!e.limited):void 0;t?t.ref?.current?.focus():c.restoreFocusToPrevElement()}function oe(e){e.key===`Tab`&&e.shiftKey&&b(e.nativeEvent)===c.state.viewport&&(e.preventDefault(),c.restoreFocusToPrevElement())}function x(){c.state.toasts.some(e=>e.transitionStatus===`ending`)||f.current||!d.current||(c.state.isWindowFocused&&c.resumeTimers(),c.set(`hovering`,!1),d.current=!1)}O.useEffect(x,[te,c]);function se(){c.pauseTimers(),c.set(`hovering`,!0),d.current=!1}function ce(){c.state.isWindowFocused&&c.resumeTimers()}function le(){d.current=!0,x()}function ue(e){e.pointerType===`touch`&&(f.current=!0)}function de(e){e.pointerType===`touch`&&(f.current=!1,x())}function fe(){if(u.current){u.current=!1;return}g||w(ae(ie(c.state.viewport)))&&(c.set(`focused`,!0),c.pauseTimers())}function S(e){g&&!re(c.state.viewport,e.relatedTarget)&&(c.set(`focused`,!1),ce())}let pe={tabIndex:-1,role:`region`,"aria-live":`polite`,"aria-atomic":!1,"aria-relevant":`additions text`,"aria-label":`Notifications`,onMouseEnter:se,onMouseMove:se,onMouseLeave:le,onFocus:fe,onBlur:S,onKeyDown:oe,onClick:fe,onPointerDown:ue,onPointerUp:de,onPointerCancel:de,style:{[tt]:v?`${v}px`:void 0}},ge={expanded:ee},C=!p&&_&&(0,k.jsx)(me,{onFocus:ne}),_e=s(`div`,e,{ref:[t,c.setViewport],state:ge,props:[pe,o,{children:(0,k.jsxs)(O.Fragment,{children:[C,a,C]})}]});return(0,k.jsxs)(O.Fragment,{children:[C,_e,!g&&y.length>0&&(0,k.jsx)(`div`,{style:Ne,children:y.map(e=>(0,k.jsxs)(`div`,{role:`alert`,"aria-atomic":!0,children:[(0,k.jsx)(`div`,{children:e.title}),(0,k.jsx)(`div`,{children:e.description})]},e.id))})]})})})))()}function at(){let e=ot.useContext(st);if(!e)throw Error(a(66));return e}var ot,st;function ct(){return(ct=t((()=>{i(),ot=e(r(),1),st=ot.createContext(void 0)})))()}function lt(e,t,n){switch(e){case`up`:return-n;case`down`:return n;case`left`:return-t;case`right`:return t;default:return 0}}function ut(){return(ut=t((()=>{r()})))()}var dt,ft,pt,mt,ht;function gt(){return(gt=t((()=>{dt=`--toast-index`,ft=`--toast-offset-y`,pt=`--toast-height`,mt=`--toast-swipe-movement-x`,ht=`--toast-swipe-movement-y`})))()}var _t;function vt(){return(vt=t((()=>{C(),_t=`data-swipe-direction`})))()}var A,yt,bt,xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=t((()=>{A=e(r(),1),yt=e(p(),1),Se(),v(),ee(),ne(),ct(),C(),E(),l(),_e(),fe(),ut(),be(),gt(),vt(),bt=f(),xt={...ve,swipeDirection(e){return e?{[_t]:e}:null}},St=40,Ct=10,wt=.5,Tt=1,Et=`${de},${S}`,Dt=A.forwardRef(function(e,t){let{toast:n,render:r,className:i,swipeDirection:a=[`down`,`right`],style:o,...c}=e,l=n.positionerProps?.anchor!==void 0,u=[];l||(u=Array.isArray(a)?a:[a]);let d=u.length>0,f=ze(),[p,m]=A.useState(void 0),[h,ee]=A.useState(!1),[v,te]=A.useState(!1),[y,ne]=A.useState({x:0,y:0}),[oe,x]=A.useState({x:0,y:0,scale:1}),[se,ce]=A.useState(),[le,ue]=A.useState(),[de,fe]=A.useState(null),S=A.useRef(null),pe=A.useRef(void 0),me=A.useRef({x:0,y:0}),he=A.useRef({x:0,y:0,scale:1}),C=A.useRef(void 0),_e=A.useRef(0),ve=A.useRef(!1),w=A.useRef({x:0,y:0}),ye=A.useRef(!1),be=A.useRef({x:0,y:0}),Se=A.useRef(null),we=A.useRef(null),Te=f.useState(`toastIndex`,n.id),Ee=f.useState(`toastVisibleIndex`,n.id),De=f.useState(`toastOffsetY`,n.id),Oe=f.useState(`focused`),ke=f.useState(`expanded`);ge({open:n.transitionStatus!==`ending`,ref:S,onComplete(){n.transitionStatus===`ending`&&f.removeToast(n.id)}});let Ae=g((e=!1)=>{let t=S.current;if(!t)return;let r=t.style.height;t.style.height=`auto`;let i=t.offsetHeight;t.style.height=r;function a(){f.updateToastInternal(n.id,{ref:S,height:i,transitionStatus:void 0})}e?yt.flushSync(a):a()});_(()=>{let e=pe.current;(n.transitionStatus===`starting`||e!==n.id)&&(e!==void 0&&(m(void 0),x({x:0,y:0,scale:1}),T({x:0,y:0})),pe.current=n.id,Ae())},[Ae,n.id,n.transitionStatus]);function T(e){be.current=e,ne(e)}_(()=>()=>{we.current?.abort()},[]);function je(e,t){let n=e=>e>0?e**wt:-(Math.abs(e)**wt),r=e>0&&!u.includes(`right`)||e<0&&!u.includes(`left`),i=t>0&&!u.includes(`down`)||t<0&&!u.includes(`up`);return{x:r?n(e):e,y:i?n(t):t}}let Ne=g(e=>{if(e.pointerId!==Se.current)return;Se.current=null,we.current?.abort(),we.current=null,ee(!1),te(!1),fe(null);let t=he.current;if(e.type===`pointercancel`||ve.current){T({x:t.x,y:t.y}),m(void 0);return}let r=be.current,i=r.x-t.x,a=r.y-t.y,o;for(let e of u)if(lt(e,i,a)>St){o=e;break}o?(m(o),f.closeToast(n.id)):(T({x:t.x,y:t.y}),m(void 0))});function Pe(e){if(e.button!==0||(e.pointerType===`touch`&&f.pauseTimers(),b(e.nativeEvent)?.closest(`button,a,input,textarea,[role="button"],${Et}`)))return;ve.current=!1,C.current=void 0,_e.current=0,Se.current=e.pointerId,me.current={x:e.clientX,y:e.clientY},w.current=me.current;let t=e.currentTarget,n=xe(t);he.current=n,x(n),T({x:n.x,y:n.y}),f.set(`hovering`,!0),ee(!0),te(!1),fe(null),ye.current=!0,we.current?.abort();let r=new AbortController;we.current=r;let i=ie(t);i.addEventListener(`pointerup`,Ne,{signal:r.signal}),i.addEventListener(`pointercancel`,Ne,{signal:r.signal}),t.setPointerCapture?.(e.pointerId)}function Fe(e){if(e.pointerId!==Se.current)return;e.preventDefault(),ye.current&&=(me.current={x:e.clientX,y:e.clientY},!1);let{clientY:t,clientX:n,movementX:r,movementY:i}=e;(i<0&&t>w.current.y||i>0&&t<w.current.y)&&(w.current={x:w.current.x,y:t}),(r<0&&n>w.current.x||r>0&&n<w.current.x)&&(w.current={x:n,y:w.current.y});let a=n-me.current.x,o=t-me.current.y,s=t-w.current.y,c=n-w.current.x,l=de;if(!v&&Math.sqrt(a*a+o*o)>=Tt){te(!0);let e=u.includes(`left`)||u.includes(`right`),t=u.includes(`up`)||u.includes(`down`);e&&t&&(l=Math.abs(a)>Math.abs(o)?`horizontal`:`vertical`,fe(l))}let d;if(!C.current)l===`vertical`?o>0?d=`down`:o<0&&(d=`up`):l===`horizontal`?a>0?d=`right`:a<0&&(d=`left`):d=Math.abs(a)>=Math.abs(o)?a>0?`right`:`left`:o>0?`down`:`up`,d&&u.includes(d)&&(C.current=d,_e.current=lt(d,a,o),m(d));else{let e=C.current,t=lt(e,c,s);t>St?(ve.current=!1,m(e)):!(u.includes(`left`)&&u.includes(`right`))&&!(u.includes(`up`)&&u.includes(`down`))&&_e.current-t>=Ct&&(ve.current=!0)}let f=je(a,o),p=he.current.x,h=he.current.y,g=u.includes(`left`)||u.includes(`right`),ee=u.includes(`up`)||u.includes(`down`);l!==`vertical`&&g&&(p+=f.x),l!==`horizontal`&&ee&&(h+=f.y),T({x:p,y:h})}function Ie(e){if(e.key===`Escape`){if(!S.current||!re(S.current,ae(ie(S.current))))return;f.closeToast(n.id)}}A.useEffect(()=>{let e=S.current;if(!d||!e)return;function t(t){Se.current!==null&&re(e,b(t))&&t.preventDefault()}return Me(e,`touchmove`,t,{passive:!1})},[d]);function Le(){let e=y.x-oe.x,t=y.y-oe.y;return{transition:h?`none`:void 0,transform:h?`translateX(${y.x}px) translateY(${y.y}px) scale(${oe.scale})`:void 0,[mt]:`${e}px`,[ht]:`${t}px`}}let Re=n.priority===`high`,Be={role:Re?`alertdialog`:`dialog`,tabIndex:0,"aria-modal":!1,"aria-labelledby":se,"aria-describedby":le,"aria-hidden":Re&&!Oe?!0:void 0,onPointerDown:d?Pe:void 0,onPointerMove:d?Fe:void 0,onPointerUp:d?Ne:void 0,onPointerCancel:d?Ne:void 0,onKeyDown:Ie,inert:Ce(n.limited),style:{...Le(),[dt]:n.transitionStatus===`ending`?Te:Ee,[ft]:`${De}px`,[pt]:n.height?`${n.height}px`:void 0}},Ve=A.useMemo(()=>({toast:n,setTitleId:ce,setDescriptionId:ue,recalculateHeight:Ae,visibleIndex:Ee,expanded:ke}),[n,ce,ue,Ae,Ee,ke]),E={transitionStatus:n.transitionStatus,expanded:ke,limited:n.limited||!1,type:n.type,swiping:h,swipeDirection:p},He=s(`div`,e,{ref:[t,S],state:E,stateAttributesMapping:xt,props:[Be,c]});return(0,bt.jsx)(st.Provider,{value:Ve,children:He})})})))()}var kt,At;function jt(){return(jt=t((()=>{kt=e(r(),1),v(),ct(),l(),At=kt.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{visibleIndex:o,expanded:c,recalculateHeight:l}=at(),u=kt.useRef(null);return _(()=>{l();let e=u.current;if(!e||typeof ResizeObserver!=`function`||typeof MutationObserver!=`function`)return;let t=new ResizeObserver(()=>l(!0)),n=new MutationObserver(()=>l(!0));return t.observe(e),n.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{t.disconnect(),n.disconnect()}},[l]),s(`div`,e,{ref:[t,u],state:{expanded:c,behind:o>0},props:a})})})))()}function Mt(e){return e==null||typeof e==`boolean`||e===``?!1:!Array.isArray(e)||e.some(Mt)}function Nt(e){return Pt.isValidElement(e)&&Mt(e.props.children)}var Pt;function Ft(){return(Ft=t((()=>{Pt=e(r(),1)})))()}function It(e,t,n){let{toast:r,setTitleId:i,setDescriptionId:a}=at(),o=n===`title`?i:a,s=t??(n===`title`?r.title:r.description);return{id:se(e),children:s,type:r.type,setId:o}}function Lt(e,t,n){let r=Nt(e);return _(()=>{if(r)return n(t),()=>{n(e=>e===t?void 0:e)}},[r,t,n]),r?e:null}function Rt(){return(Rt=t((()=>{ce(),v(),ct(),Ft()})))()}var zt,Bt;function Vt(){return(Vt=t((()=>{zt=e(r(),1),l(),Rt(),Bt=zt.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,children:o,...c}=e,{id:l,children:u,type:d,setId:f}=It(a,o,`description`);return Lt(s(`p`,e,{ref:t,state:{type:d},props:{...c,id:l,children:u}}),l,f)})})))()}var Ht,Ut;function Wt(){return(Wt=t((()=>{Ht=e(r(),1),l(),Rt(),Ut=Ht.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,children:o,...c}=e,{id:l,children:u,type:d,setId:f}=It(a,o,`title`);return Lt(s(`h2`,e,{ref:t,state:{type:d},props:{...c,id:l,children:u}}),l,f)})})))()}var Gt,Kt;function qt(){return(qt=t((()=>{Gt=e(r(),1),ct(),E(),y(),l(),Kt=Gt.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a,nativeButton:o=!0,...c}=e,l=ze(),{toast:u,expanded:d}=at(),[f,p]=Gt.useState(!1),{getButtonProps:m,buttonRef:h}=te({disabled:a,native:o}),g={type:u.type};return s(`button`,e,{ref:[t,h],state:g,props:[{"aria-hidden":!d&&!f,onClick(){l.closeToast(u.id)},onFocus(){p(!0)},onBlur(){p(!1)}},c,m]})})})))()}var Jt,Yt;function Xt(){return(Xt=t((()=>{Jt=e(r(),1),ct(),y(),l(),Ft(),Yt=Jt.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a,nativeButton:o=!0,...c}=e,{toast:l}=at(),u=l.actionProps?.children??c.children,{getButtonProps:d,buttonRef:f}=te({disabled:a,native:o}),p={type:l.type},m=s(`button`,e,{ref:[t,f],state:p,props:[c,l.actionProps,d,{children:u}]});return Nt(m)?m:null})})))()}var Zt,Qt,$t;function en(){return(en=t((()=>{Zt=e(r(),1),Fe(),Qt=f(),$t=Zt.forwardRef(function(e,t){return(0,Qt.jsx)(Ie,{ref:t,...e})})})))()}function tn(){let e=ze(),t=e.useState(`toasts`);return nn.useMemo(()=>({toasts:t,add:e.addToast,close:e.closeToast,update:e.updateToast,promise:e.promiseToast}),[t,e])}var nn;function rn(){return(rn=t((()=>{nn=e(r(),1),E()})))()}var an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,j;function wn(){return(wn=t((()=>{an=`_viewport_5xxof_3`,on=`_top_5xxof_16`,sn=`_bottom_5xxof_19`,cn=`_left_5xxof_24`,ln=`_right_5xxof_27`,un=`_center_5xxof_30`,dn=`_toast_5xxof_35`,fn=`_info_5xxof_73`,pn=`_success_5xxof_76`,mn=`_warning_5xxof_79`,hn=`_danger_5xxof_82`,gn=`_icon_5xxof_86`,_n=`_spinner_5xxof_97`,vn=`_spin_5xxof_97`,yn=`_content_5xxof_113`,bn=`_title_5xxof_121`,xn=`_description_5xxof_127`,Sn=`_action_5xxof_132`,Cn=`_close_5xxof_155`,j={viewport:an,top:on,bottom:sn,left:cn,right:ln,center:un,toast:dn,info:fn,success:pn,warning:mn,danger:hn,icon:gn,spinner:_n,spin:vn,content:yn,title:bn,description:xn,action:Sn,close:Cn}})))()}function Tn({swipe:e}){let{toasts:t}=tn();return t.map(t=>{let n=Dn(t.type),r=n===`loading`?null:On[n];return(0,N.jsxs)(Dt,{toast:t,swipeDirection:e,"aria-label":t.title?void 0:typeof t.description==`string`?t.description:`Notification`,className:d(j.toast,j[n]),children:[n===`loading`&&(0,N.jsx)(`span`,{className:d(j.icon,j.spinner),"aria-hidden":`true`}),r&&(0,N.jsx)(`span`,{className:j.icon,"aria-hidden":`true`,children:(0,N.jsx)(De,{name:r})}),(0,N.jsxs)(At,{className:j.content,children:[t.title&&(0,N.jsx)(Ut,{className:j.title}),t.description&&(0,N.jsx)(Bt,{className:j.description}),t.actionProps&&(0,N.jsx)(Yt,{className:j.action})]}),(0,N.jsx)(Kt,{"aria-label":`Dismiss`,className:j.close,children:(0,N.jsx)(De,{name:`close`})})]},t.id)})}function M({children:e,placement:t=`bottom-right`,timeout:n=5e3,limit:r=3,container:i}){let[a,o]=t.split(`-`),s=o===`center`?a===`top`?`up`:`down`:o;return(0,N.jsxs)($e,{timeout:n,limit:r,children:[e,(0,N.jsx)($t,{container:i,children:(0,N.jsx)(rt,{className:d(j.viewport,j[a],j[o]),children:(0,N.jsx)(Tn,{swipe:s})})})]})}function En(){let e=tn(),t=({variant:e,action:t,priority:n,...r})=>{let i={...r};e!==void 0&&(i.type=e);let a=n??(e===`danger`?`high`:void 0);return a!==void 0&&(i.priority=a),t!==void 0&&(i.actionProps={children:t.label,onClick:t.onClick}),i};return{add:n=>e.add(t(n)),update:(n,r)=>e.update(n,t(r)),close:t=>e.close(t),promise:e.promise}}var N,Dn,On;function kn(){return(kn=t((()=>{r(),rn(),Ot(),jt(),Wt(),Vt(),Xt(),qt(),et(),en(),it(),Ee(),u(),wn(),N=f(),Dn=e=>e===`error`?`danger`:e===`loading`?`loading`:e??`neutral`,On={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`},M.__docgenInfo={description:`Wrap the app once. Toasts render in a corner of the viewport, above everything.`,methods:[],displayName:`ToastProvider`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},placement:{required:!1,tsType:{name:`union`,raw:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`,elements:[{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-center'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`},{name:`literal`,value:`'bottom-right'`}]},description:``,defaultValue:{value:`'bottom-right'`,computed:!1}},timeout:{required:!1,tsType:{name:`number`},description:`Default time on screen, in milliseconds.`,defaultValue:{value:`5000`,computed:!1}},limit:{required:!1,tsType:{name:`number`},description:`Toasts shown at once; older ones wait.`,defaultValue:{value:`3`,computed:!1}},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | RefObject<HTMLElement | null> | null`,elements:[{name:`HTMLElement`},{name:`RefObject`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}],raw:`RefObject<HTMLElement | null>`},{name:`null`}]},description:"Where the toasts render, `document.body` by default. In an element with\na `transform` they sit in its corner instead of the window's, and in a\nsize container (`container-type: inline-size`) they fit its width: a\npreview, or a frame in the page."}}}})))()}var An=n({Anatomy:()=>Z,Default:()=>V,DoUndo:()=>Q,DontMustAct:()=>$,FromModal:()=>K,Pending:()=>X,PromiseToast:()=>U,StateExample:()=>Y,Static:()=>q,Timeout:()=>H,TopCenter:()=>G,Update:()=>W,Variants:()=>Vn,VariantsStatic:()=>J,__namedExportsOrder:()=>Wn,anatomyParts:()=>Un,default:()=>zn});function jn({options:e,label:t=`Show toast`}){let n=En();return(0,F.jsx)(x,{onClick:()=>n.add(e),children:t})}function Mn(){let e=En();return(0,F.jsx)(x,{onClick:()=>e.promise(new Promise(e=>setTimeout(e,600)),{loading:`Uploading 3 files…`,success:`Uploaded 3 files`,error:`Upload failed`}),children:`Upload`})}function Nn(){let e=En();return(0,F.jsx)(x,{onClick:()=>{let t=e.add({variant:`success`,title:`Moved`,action:{label:`Undo`,onClick:()=>{}}});setTimeout(()=>e.update(t,{description:`3 files`}),100)},children:`Move`})}function Pn(){let e=En();return(0,F.jsx)(Re,{trigger:(0,F.jsx)(x,{children:`Open modal`}),title:`Share`,footer:(0,F.jsx)(x,{onClick:()=>e.add({variant:`success`,title:`Link copied`}),children:`Copy link`})})}function Fn({toasts:e,pending:t}){let n=En();return(0,In.useEffect)(()=>{for(let t of e)n.add({timeout:0,...t});return t&&n.promise(new Promise(()=>{}),{loading:t,success:``,error:``}),()=>n.close()},[]),null}function P({toasts:e,pending:t,height:n=`7.5rem`}){let[r,i]=(0,In.useState)(null);return(0,F.jsxs)(`div`,{style:{position:`relative`,blockSize:n},children:[(0,F.jsx)(`svg`,{"aria-hidden":`true`,style:{display:`block`,inlineSize:`27rem`,maxInlineSize:`100%`,blockSize:0}}),(0,F.jsx)(`div`,{ref:i,style:{position:`absolute`,inset:0,containerType:`inline-size`,transform:`translateZ(0)`},children:r&&(0,F.jsx)(M,{container:r,placement:`top-left`,limit:e.length+ +!!t,children:(0,F.jsx)(Fn,{toasts:e,pending:t})})})]})}var In,F,I,Ln,L,R,z,Rn,zn,B,Bn,V,Vn,H,U,W,G,K,Hn,q,J,Y,X,Un,Z,Q,$,Wn;function Gn(){return(Gn=t((()=>{In=r(),Oe(),oe(),Le(),kn(),F=f(),{expect:I,fn:Ln,userEvent:L,waitFor:R,within:z}=__STORYBOOK_MODULE_TEST__,Rn=Ln(),zn={title:`Components/Notifications/Toast`,tags:[`beta`],component:M,args:{children:null,placement:`bottom-right`,timeout:5e3,limit:3},argTypes:{children:{description:"The app. `useToast()` works anywhere inside it.",control:!1,table:{type:{summary:`ReactNode`}}},placement:{description:`The corner, or edge centre, toasts appear in. They swipe away toward the nearest edge.`,control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],table:{type:{summary:`'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`},defaultValue:{summary:`'bottom-right'`}}},timeout:{description:"Default time on screen, in milliseconds. A toast can set its own; `0` keeps it until dismissed.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5000`}}},limit:{description:`Toasts shown at once; newer ones wait until one closes.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`3`}}},container:{description:"Where the toasts render. In an element with a `transform` they sit in its corner instead of the window's; in a size container (`container-type: inline-size`) they fit its width.",control:!1,table:{type:{summary:`HTMLElement | RefObject<HTMLElement | null> | null`},defaultValue:{summary:`document.body`}}}},excludeStories:[`anatomyParts`]},B=()=>z(document.body),Bn={display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`},V={render:e=>(0,F.jsx)(M,{...e,children:(0,F.jsx)(jn,{options:{title:`File moved to Trash`,description:`Q3 report.pdf`,action:{label:`Undo`,onClick:Rn}}})}),play:async({canvas:e})=>{Rn.mockClear(),await L.click(e.getByRole(`button`,{name:`Show toast`}));let t=(await B().findByText(`File moved to Trash`,{},{timeout:3e3})).closest(`[data-base-ui-toast], [role]`);await R(()=>I(B().getByText(`Q3 report.pdf`)).toBeVisible()),await L.click(await B().findByRole(`button`,{name:`Undo`})),await I(Rn).toHaveBeenCalledOnce(),await L.click(z(t).getByRole(`button`,{name:`Dismiss`})),await R(()=>I(B().queryByText(`File moved to Trash`)).toBeNull(),{timeout:3e3})}},Vn={render:e=>(0,F.jsx)(M,{...e,limit:5,children:(0,F.jsx)(`div`,{style:Bn,children:[`neutral`,`info`,`success`,`warning`,`danger`].map(e=>(0,F.jsx)(jn,{label:e,options:{variant:e,title:`${e[0].toUpperCase()}${e.slice(1)}`,description:`Something happened.`}},e))})}),play:async({canvas:e})=>{for(let t of[`neutral`,`info`,`success`,`warning`,`danger`])await L.click(e.getByRole(`button`,{name:t}));await R(()=>I(document.querySelectorAll(`[role="dialog"], [role="alertdialog"]`)).toHaveLength(5)),await I(document.querySelector(`[role="alertdialog"]`)).toHaveTextContent(`Danger`)}},H={render:e=>(0,F.jsx)(M,{...e,timeout:400,children:(0,F.jsx)(jn,{options:{title:`Saved`}})}),play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:`Show toast`})),await B().findByText(`Saved`),await R(()=>I(B().queryByText(`Saved`)).toBeNull(),{timeout:3e3})}},U={render:e=>(0,F.jsx)(M,{...e,children:(0,F.jsx)(Mn,{})}),play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:`Upload`})),await B().findByText(`Uploading 3 files…`),await I(await B().findByRole(`dialog`,{name:`Uploaded 3 files`},{timeout:3e3})).toBeVisible()}},W={render:e=>(0,F.jsx)(M,{...e,children:(0,F.jsx)(Nn,{})}),play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:`Move`})),await B().findByText(`3 files`,{},{timeout:3e3});let t=document.querySelector(`[role="dialog"]`);await I(t).toHaveAttribute(`data-type`,`success`),await I(z(t).getByRole(`button`,{name:`Undo`})).toBeVisible()}},G={args:{placement:`top-center`},render:e=>(0,F.jsx)(M,{...e,children:(0,F.jsx)(jn,{options:{variant:`success`,title:`Invite sent`}})})},K={render:e=>(0,F.jsx)(M,{...e,children:(0,F.jsx)(Pn,{})}),play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:`Open modal`}));let t=await B().findByRole(`dialog`);await L.click(z(t).getByRole(`button`,{name:`Copy link`}));let n=await B().findByText(`Link copied`);await I(n.closest(`[aria-hidden="true"]`)).toBeNull(),await R(()=>{let e=n.getBoundingClientRect();return I(n.contains(document.elementFromPoint(e.x+2,e.y+e.height/2))).toBe(!0)})}},Hn={title:`File moved to Trash`,description:`Q3 report.pdf`,action:{label:`Undo`,onClick:()=>{}}},q={render:()=>(0,F.jsx)(P,{toasts:[Hn]}),play:async({canvasElement:e})=>{let t=await z(e).findByRole(`dialog`,{},{timeout:3e3});await I(t).toHaveTextContent(`File moved to Trash`)}},J={render:()=>(0,F.jsx)(P,{height:`24.5rem`,toasts:[`neutral`,`info`,`success`,`warning`,`danger`].map(e=>({variant:e,title:`${e[0].toUpperCase()}${e.slice(1)}`,description:`Something happened.`,priority:`low`}))}),play:async({canvasElement:e})=>{await R(()=>I(e.querySelectorAll(`[role="dialog"], [role="alertdialog"]`)).toHaveLength(5))}},Y={tags:[`!dev`],render:()=>(0,F.jsx)(P,{toasts:[Hn],height:`9rem`})},X={tags:[`!dev`],render:()=>(0,F.jsx)(P,{toasts:[],pending:`Uploading 3 files…`,height:`6rem`})},Un=[{name:`Container`,selector:`[role="dialog"]`,description:`The overlay surface, in the page's own appearance.`},{name:`Icon`,selector:`[role="dialog"] > span[aria-hidden="true"]`,description:"The variant's filled icon; none for `neutral`, a spinner while pending."},{name:`Title`,selector:`[role="dialog"] h2`,description:`Semibold. What happened.`},{name:`Description`,selector:`[role="dialog"] p`,description:`Optional, muted.`},{name:`Action`,selector:`[role="dialog"] button:not([aria-label])`,description:`Optional, one text button, e.g. "Undo".`},{name:`Close button`,selector:`[role="dialog"] button[aria-label="Dismiss"]`,description:`Always there.`}],Z={tags:[`!dev`],render:()=>(0,F.jsx)(P,{toasts:[{...Hn,variant:`success`}]}),play:async({canvasElement:e})=>{await z(e).findByRole(`dialog`,{},{timeout:3e3});let t=await ke(e,Un);await I(t[2]).toHaveTextContent(`File moved to Trash`),await I(t[4]).toHaveTextContent(`Undo`);let n=getComputedStyle(t[0]);await I(n.paddingLeft).toBe(`15px`),await I(n.columnGap).toBe(`16px`),await I(getComputedStyle(t[2].parentElement).rowGap).toBe(`8px`),await I(t[4].offsetHeight).toBe(24),await I(t[4].offsetTop-(t[3].offsetTop+t[3].offsetHeight)).toBe(0)}},Q={tags:[`!dev`],render:()=>(0,F.jsx)(P,{toasts:[Hn]})},$={tags:[`!dev`],render:()=>(0,F.jsx)(P,{toasts:[{variant:`warning`,title:`Your card expires tomorrow`,description:`Update it to keep your plan.`,action:{label:`Update card`,onClick:()=>{}}}]})},Wn=[`Default`,`Variants`,`Timeout`,`PromiseToast`,`Update`,`TopCenter`,`FromModal`,`Static`,`VariantsStatic`,`StateExample`,`Pending`,`anatomyParts`,`Anatomy`,`DoUndo`,`DontMustAct`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <Demo options={{
      title: 'File moved to Trash',
      description: 'Q3 report.pdf',
      action: {
        label: 'Undo',
        onClick: onUndo
      }
    }} />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    onUndo.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show toast'
    }));
    const title = await body().findByText('File moved to Trash', {}, {
      timeout: 3000
    });
    const toast = title.closest('[data-base-ui-toast], [role]') as HTMLElement;
    // It fades in from opacity 0.
    await waitFor(() => expect(body().getByText('Q3 report.pdf')).toBeVisible());
    await userEvent.click(await body().findByRole('button', {
      name: 'Undo'
    }));
    await expect(onUndo).toHaveBeenCalledOnce();
    await userEvent.click(within(toast).getByRole('button', {
      name: 'Dismiss'
    }));
    await waitFor(() => expect(body().queryByText('File moved to Trash')).toBeNull(), {
      timeout: 3000
    });
  }
}`,...V.parameters?.docs?.source}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args} limit={5}>
      <div style={row}>
        {(['neutral', 'info', 'success', 'warning', 'danger'] as const).map(variant => <Demo key={variant} label={variant} options={{
        variant,
        title: \`\${variant[0].toUpperCase()}\${variant.slice(1)}\`,
        description: 'Something happened.'
      }} />)}
      </div>
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    for (const v of ['neutral', 'info', 'success', 'warning', 'danger']) await userEvent.click(canvas.getByRole('button', {
      name: v
    }));
    // Each toast is a non-modal dialog; all five fit under the limit.
    // All five fit under the limit. Danger is high priority: an alertdialog
    // whose text Base UI announces assertively through a separate live region.
    await waitFor(() => expect(document.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5));
    await expect(document.querySelector('[role="alertdialog"]')).toHaveTextContent('Danger');
  }
}`,...Vn.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args} timeout={400}>
      <Demo options={{
      title: 'Saved'
    }} />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show toast'
    }));
    await body().findByText('Saved');
    await waitFor(() => expect(body().queryByText('Saved')).toBeNull(), {
      timeout: 3000
    });
  }
}`,...H.parameters?.docs?.source},description:{story:"Closes itself after `timeout`.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <PromiseDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Upload'
    }));
    await body().findByText('Uploading 3 files…');
    // Named by its message, since promise() gives it no title.
    await expect(await body().findByRole('dialog', {
      name: 'Uploaded 3 files'
    }, {
      timeout: 3000
    })).toBeVisible();
  }
}`,...U.parameters?.docs?.source},description:{story:`A loading toast that becomes success or danger when the promise settles.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <UpdateDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Move'
    }));
    await body().findByText('3 files', {}, {
      timeout: 3000
    });
    const toast = document.querySelector('[role="dialog"]')!;
    await expect(toast).toHaveAttribute('data-type', 'success');
    await expect(within(toast as HTMLElement).getByRole('button', {
      name: 'Undo'
    })).toBeVisible();
  }
}`,...W.parameters?.docs?.source},description:{story:`A partial update changes only what it names: the variant and action stay.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top-center'
  },
  render: args => <ToastProvider {...args}>
      <Demo options={{
      variant: 'success',
      title: 'Invite sent'
    }} />
    </ToastProvider>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider {...args}>
      <ModalDemo />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open modal'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Copy link'
    }));
    const title = await body().findByText('Link copied');
    // Not hidden from assistive tech by the modal, and drawn on top of it.
    await expect(title.closest('[aria-hidden="true"]')).toBeNull();
    await waitFor(() => {
      const r = title.getBoundingClientRect();
      return expect(title.contains(document.elementFromPoint(r.x + 2, r.y + r.height / 2))).toBe(true);
    });
  }
}`,...K.parameters?.docs?.source},description:{story:`A toast raised from inside a modal shows above it and stays reachable.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Preview toasts={[moved]} />,
  play: async ({
    canvasElement
  }) => {
    // Rendered into the story, not the page's corner.
    const toast = await within(canvasElement).findByRole('dialog', {}, {
      timeout: 3000
    });
    await expect(toast).toHaveTextContent('File moved to Trash');
  }
}`,...q.parameters?.docs?.source},description:{story:`One toast in place, every part showing.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Preview height="24.5rem" toasts={(['neutral', 'info', 'success', 'warning', 'danger'] as const).map(variant => ({
    variant,
    title: \`\${variant[0].toUpperCase()}\${variant.slice(1)}\`,
    description: 'Something happened.',
    // A picture of each variant. A high-priority toast hides itself from
    // assistive tech until focused (Base UI announces its text through a
    // live region of its own), which axe flags in a static preview.
    priority: 'low'
  }))} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('[role="dialog"], [role="alertdialog"]')).toHaveLength(5));
  }
}`,...J.parameters?.docs?.source},description:{story:`Every variant in place: the colour is on the icon only.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} height="9rem" />
}`,...Y.parameters?.docs?.source},description:{story:`The States block's example: four side by side are narrow, so the title wraps.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[]} pending="Uploading 3 files…" height="6rem" />
}`,...X.parameters?.docs?.source},description:{story:"While a `promise()` is pending: a spinner in place of the icon.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[{
    ...moved,
    variant: 'success'
  }]} />,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByRole('dialog', {}, {
      timeout: 3000
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('File moved to Trash');
    await expect(found[4]).toHaveTextContent('Undo');
    // Atlassian's flag: content 16px from the edge (15px padding and the 1px border), 16px from
    // the icon to the text, 8px from the title to the description, the action a 24px row right under it.
    const toast = getComputedStyle(found[0]);
    await expect(toast.paddingLeft).toBe('15px');
    await expect(toast.columnGap).toBe('16px');
    await expect(getComputedStyle(found[2].parentElement!).rowGap).toBe('8px');
    await expect((found[4] as HTMLElement).offsetHeight).toBe(24);
    await expect((found[4] as HTMLElement).offsetTop - ((found[3] as HTMLElement).offsetTop + (found[3] as HTMLElement).offsetHeight)).toBe(0);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present, in place.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[moved]} />
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: news about something done, with a way to undo it.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Preview toasts={[{
    variant: 'warning',
    title: 'Your card expires tomorrow',
    description: 'Update it to keep your plan.',
    action: {
      label: 'Update card',
      onClick: () => {}
    }
  }]} />
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a problem the reader must fix, in something that goes away.`,...$.parameters?.docs?.description}}}})))()}export{K as a,Y as c,G as d,J as f,$ as i,q as l,Gn as m,V as n,X as o,Un as p,Q as r,U as s,Z as t,An as u};