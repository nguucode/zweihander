import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,n as o,t as s}from"./useRenderElement-euNwqn97.js";import{n as c,t as l}from"./utils-CUvRSo4U.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{n as d,t as f}from"./useStableCallback-BEuE3z7O.js";import{n as ee,t as p}from"./useIsoLayoutEffect-BLzSB4yc.js";import{n as m,t as h}from"./useButton-C_juKO0K.js";import{i as g,n as _,o as v,r as y}from"./shadowDom-DQlB61gq.js";import{C as te,E as b,O as x,a as S,h as C,i as ne,r as w,t as T,w as E}from"./createBaseUIEventDetails-DBMJcLG-.js";import{F as D,k as re}from"./composite-CoxyU9zQ.js";import{G as ie,J as ae,R as oe,_t as O,bt as k,gt as se,z as ce}from"./usePopupHandleStore-BNjVeyoG.js";import{i as A,l as le,n as ue,r as de,t as fe,u as j}from"./useTransitionStatus-CYDYA4DW.js";import{n as pe,t as me}from"./inertValue-Ds7KHeQ8.js";import{n as M,t as he}from"./icon-C9aTyDDd.js";import{n as ge,t as _e}from"./expectAnatomy-C52ByQ6s.js";import{n as ve,r as ye}from"./useTimeout-B-hMNeNI.js";import{a as be,i as xe,n as Se,o as Ce,r as we,t as Te}from"./usePositioner-aWG-SdUw.js";import{c as Ee,d as De,l as Oe,o as ke,s as Ae,u as je}from"./useOpenInteractionType-3N3ftBF9.js";import{i as Me,n as Ne,r as Pe,t as Fe}from"./getPseudoElementBounds-Yep4k2VK.js";import{a as Ie,f as Le,i as Re,n as ze,p as Be,t as Ve}from"./useLabelableId-Bpe6sV6F.js";import{i as He,r as Ue}from"./useTriggerFocusGuards-BHtMLnKU.js";import{r as We}from"./resolveAriaLabelledBy-CzfQWzxd.js";import{a as Ge,o as N,r as Ke,s as qe,t as Je}from"./InputField-DYKQ89HJ.js";import{A as Ye,C as Xe,D as Ze,E as Qe,F as $e,I as et,L as tt,N as nt,O as rt,R as it,S as at,T as ot,_ as st,a as ct,b as lt,c as ut,g as dt,h as ft,i as pt,k as mt,l as ht,n as gt,o as _t,r as vt,s as yt,t as bt,u as xt,v as St,w as Ct,x as wt,y as Tt}from"./ComboboxEmpty-1-0sC-_U.js";function Et(e){let{multiple:t=!1,defaultValue:n,value:r,onValueChange:i,autoComplete:a,...o}=e;return(0,Dt.jsx)(mt,{...o,selectionMode:t?`multiple`:`single`,selectedValue:r,defaultSelectedValue:n,onSelectedValueChange:i,formAutoComplete:a})}var Dt;function Ot(){return(Ot=t((()=>{r(),Ye(),Dt=u()})))()}var kt,At;function jt(){return(jt=t((()=>{kt=e(r(),1),f(),ve(),s(),h(),$e(),Ze(),Le(),Re(),re(),g(),Fe(),w(),C(),Ee(),Pe(),Ve(),Tt(),At=kt.forwardRef(function(e,t){let{render:n,className:r,nativeButton:i=!0,disabled:a=!1,id:s,style:c,...l}=e,{state:u,disabled:f,setTouched:ee,setFocused:p,validationMode:h,validation:g}=Be(),{labelId:te}=Ie(),x=it(),S=x.useState(`selectionMode`),C=x.useState(`disabled`),w=x.useState(`readOnly`),re=x.useState(`required`),ie=x.useState(`positionerElement`),ae=x.useState(`listElement`),oe=x.useState(`popupId`),O=x.useState(`triggerProps`),k=x.useState(`inputInsidePopup`),se=x.useState(`id`),ce=x.useState(`labelId`),A=x.useState(`open`),le=x.useState(`selectedValue`),ue=x.useState(`activeIndex`),de=x.useState(`selectedIndex`),fe=x.useState(`hasSelectedValue`),j=et(),pe=tt(),me=ye(),M=f||C||a,he=lt(),ge=wt(x);ze({id:k?s:void 0});let _e=k?s??se:s,ve=We(te,ce),be;A&&k?be=oe??nt(se):A&&(be=ae?.id);let xe=kt.useRef(``);function Se(e){xe.current=e.pointerType}let{reference:Ce}=Me(j,{enabled:!A&&!w&&!C&&S===`single`,listRef:x.context.labelsRef,activeIndex:ue,selectedIndex:de,onMatch(e){let t=x.context.valuesRef.current[e];t!==void 0&&x.context.setSelectedValue(t,T(b))}}),{reference:we}=Oe(j,{enabled:!C,event:`mousedown`}),{buttonRef:Te,getButtonProps:Ee}=m({native:i,disabled:M}),De={...u,readOnly:w,open:A,disabled:M,popupSide:ge,listEmpty:he,placeholder:S!==`none`&&!fe},ke=d(e=>{x.set(`triggerElement`,e)});return o(`button`,e,{ref:[t,Te,ke],state:De,props:[O,we,Ce,{id:_e,tabIndex:k?0:-1,role:k?`combobox`:void 0,"aria-expanded":A,"aria-haspopup":k?`dialog`:`listbox`,"aria-controls":be,"aria-required":k&&re||void 0,"aria-readonly":k&&w||void 0,"aria-labelledby":ve,onPointerDown:Se,onPointerEnter:Se,onFocus(){p(!0),!M&&me.start(0,x.context.forceMount)},onBlur(e){if(!_(ie,e.relatedTarget)&&(ee(!0),p(!1),h===`onBlur`)){let e=S===`none`?pe:le;g.commit(e)}},onMouseDown(e){if(M||(k||j.set(`domReferenceElement`,e.currentTarget),x.context.forceMount(),xe.current!==`touch`&&(x.context.inputRef.current?.focus(),k||e.preventDefault()),A))return;let t=v(e.currentTarget);function n(e){let t=x.state.triggerElement;if(!t)return;let n=y(e),r=x.state.positionerElement,i=x.state.listElement;_(t,n)||_(r,n)||_(i,n)||Ne(e,t)||x.context.setOpen(!1,T(ne,e))}k&&t.addEventListener(`mouseup`,n,{once:!0})},onKeyDown(e){(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(D(e),x.context.setOpen(!0,T(E,e.nativeEvent)),x.context.inputRef.current?.focus())}},g.getValidationProps(M,l),Ee],stateAttributesMapping:rt})})})))()}var Mt,Nt;function Pt(){return(Pt=t((()=>{Mt=e(r(),1),s(),yt(),Nt=Mt.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...s}=e,c=ut();return o(`div`,e,{ref:[t,c],props:[{children:a,role:`status`,"aria-live":`polite`,"aria-atomic":!0},s]})})})))()}function Ft(){let e=It.useContext(Lt);if(e===void 0)throw Error(a(20));return e}var It,Lt;function Rt(){return(Rt=t((()=>{i(),It=e(r(),1),Lt=It.createContext(void 0)})))()}var zt,Bt,Vt;function Ht(){return(Ht=t((()=>{zt=e(r(),1),ce(),$e(),Rt(),Bt=u(),Vt=zt.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,i=it(),a=i.useState(`mounted`),o=i.useState(`forceMounted`);return a||n||o?(0,Bt.jsx)(Lt.Provider,{value:n,children:(0,Bt.jsx)(oe,{ref:t,...r})}):null})})))()}var Ut,Wt,Gt;function Kt(){return(Kt=t((()=>{Ut=e(r(),1),p(),f(),pe(),$e(),ot(),Tt(),be(),Rt(),ae(),Ae(),Te(),Ue(),Wt=u(),Gt=Ut.forwardRef(function(e,t){let{render:n,className:r,anchor:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:f,arrowPadding:p,sticky:m,disableAnchorTracking:h=!1,collisionAvoidance:g=ie,style:_,...v}=e,y=it(),te=et(),b=Ft(),x=y.useState(`modal`),S=y.useState(`open`),C=y.useState(`mounted`),ne=y.useState(`openMethod`),w=y.useState(`positionerElement`),T=y.useState(`triggerElement`),E=y.useState(`inputElement`),D=y.useState(`inputGroupElement`),re=y.useState(`inputInsidePopup`),ae=y.useState(`transitionStatus`),oe=lt(),O=Ce({anchor:i??(re?T:D??E),floatingRootContext:te,positionMethod:a,mounted:C,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:p,collisionBoundary:u,collisionPadding:f,sticky:m,disableAnchorTracking:h,keepMounted:b,collisionAvoidance:g,lazyFlip:!0});He(S&&x,ne===`touch`,w,T);let k={open:S,side:O.side,align:O.align,anchorHidden:O.anchorHidden,empty:oe};ee(()=>{y.set(`popupSide`,O.side)},[y,O.side]);let se=d(e=>{y.set(`positionerElement`,e)}),ce=Se(e,k,{styles:O.positionerStyles,transitionStatus:ae,props:v,refs:[t,se],hidden:!C,inert:!S});return(0,Wt.jsxs)(Ct.Provider,{value:O,children:[C&&x&&(0,Wt.jsx)(ke,{inert:me(!S),cutout:D??E??T}),ce]})})})))()}var qt,Jt,Yt,Xt;function Zt(){return(Zt=t((()=>{qt=e(r(),1),p(),De(),s(),$e(),se(),ot(),de(),le(),g(),xe(),Xe(),Tt(),Jt=u(),Yt={...O,...j},Xt=qt.forwardRef(function(e,t){let{render:n,className:r,style:i,initialFocus:a,finalFocus:s,...c}=e,l=it(),u=Qe(),d=et(),f=l.useState(`mounted`),p=l.useState(`open`),m=l.useState(`openMethod`),h=l.useState(`popupProps`),g=l.useState(`transitionStatus`),v=l.useState(`inputInsidePopup`),te=l.useState(`inputElement`),b=l.useState(`modal`),x=l.useState(`id`),S=lt(),C=c.id??(v?nt(x):void 0);ee(()=>(l.set(`popupId`,l.context.popupRef.current?.id||C),()=>{l.set(`popupId`,void 0)}),[l,C]),A({open:p,ref:l.context.popupRef,onComplete(){p&&l.context.onOpenChangeComplete(!0)}});let ne={open:p,side:u.side,align:u.align,anchorHidden:u.anchorHidden,transitionStatus:g,empty:S},w=o(`div`,e,{state:ne,ref:[t,l.context.popupRef],props:[h,{id:C,role:v?`dialog`:`presentation`,onFocus(e){let t=y(e.nativeEvent);m!==`touch`&&(_(l.state.listElement,t)||t===e.currentTarget)&&l.context.inputRef.current?.focus()}},we(g),c],stateAttributesMapping:Yt}),T=a===void 0?v?e=>e===`touch`?l.context.popupRef.current:te:!1:a,E;E=s??(v?void 0:!1);let D=!v||b;return(0,Jt.jsx)(je,{context:d,disabled:!f,modal:D,openInteractionType:m,initialFocus:T,returnFocus:E,getInsideElements:()=>[l.context.startDismissRef.current,l.context.endDismissRef.current],children:(0,Jt.jsxs)(qt.Fragment,{children:[w,D&&(0,Jt.jsx)(at,{ref:l.context.endDismissRef})]})})})})))()}var Qt,$t,en,tn;function nn(){return(nn=t((()=>{Qt=e(r(),1),ct(),fe(),de(),s(),le(),$t=u(),en=Qt.forwardRef(function(e,t){let{selected:n}=_t();return e.keepMounted||n?(0,$t.jsx)(tn,{...e,ref:t}):null}),tn=Qt.memo(Qt.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:a,...s}=e,{selected:c}=_t(),l=Qt.useRef(null),{transitionStatus:u,setMounted:d}=ue(c),f=o(`span`,e,{ref:[t,l],state:{selected:c,transitionStatus:u},props:[{"aria-hidden":!0,children:`✔️`},s],stateAttributesMapping:j});return A({batch:!0,enabled:!c,open:c,ref:l,onComplete(){c||d(!1)}}),f}))})))()}var rn,an,on;function sn(){return(sn=t((()=>{rn=e(r(),1),$e(),s(),h(),Le(),fe(),le(),de(),w(),C(),se(),an={...j,...k},on=rn.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,nativeButton:a=!0,keepMounted:s=!1,style:c,...l}=e,{disabled:u}=Be(),d=it(),f=d.useState(`selectionMode`),ee=d.useState(`disabled`),p=d.useState(`readOnly`),h=d.useState(`open`),g=d.useState(`selectedValue`),_=d.useState(`hasSelectionChips`),v=tt(),y=!1;y=f===`none`?v!==``:f===`single`?g!=null:_;let b=u||ee||i,{buttonRef:C,getButtonProps:ne}=m({native:a,disabled:b}),{mounted:w,transitionStatus:E,setMounted:D}=ue(y),re={disabled:b,visible:y,open:h,transitionStatus:E};A({open:y,ref:d.context.clearRef,onComplete(){y||D(!1)}});let ie=o(`button`,e,{state:re,ref:[t,C,d.context.clearRef],props:[{tabIndex:-1,children:`x`,onMouseDown(e){e.preventDefault()},onClick(e){if(b||p)return;let t=d.context.keyboardActiveRef.current?te:x;d.context.setInputValue(``,T(S,e.nativeEvent)),f===`none`?d.context.setIndices({activeIndex:null,type:t}):(d.context.setSelectedValue(Array.isArray(g)?[]:null,T(S,e.nativeEvent)),d.context.setIndices({activeIndex:null,selectedIndex:null,type:t})),d.context.inputRef.current?.focus()}},l,ne],stateAttributesMapping:an});return s||w?ie:null})})))()}var cn,ln,un;function dn(){return(dn=t((()=>{cn=`_group_1f9xv_2`,ln=`_match_1f9xv_10`,un={group:cn,match:ln}})))()}function fn({text:e,query:t}){let n=t?e.toLowerCase().indexOf(t.toLowerCase()):-1;return n<0?(0,F.jsx)(F.Fragment,{children:e}):(0,F.jsxs)(F.Fragment,{children:[e.slice(0,n),(0,F.jsx)(`mark`,{className:un.match,children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}function P({ref:e,options:t,value:n,defaultValue:r,onValueChange:i,placeholder:a,label:o,helperText:s,validationState:c,size:u=`md`,isFullWidth:d,isLoading:f,isClearable:ee=!0,emptyText:p=`No matches`,name:m,disabled:h,readOnly:g,required:_,autoFocus:v,id:y,className:te,container:b,"aria-label":x}){let S=t.map(e=>typeof e==`string`?{value:e,label:e}:e),C=e=>e==null?e:S.find(t=>t.value===e)??null,[ne,w]=(0,pn.useState)(``),T=(0,pn.useRef)(null),E=(0,pn.useId)();return(0,F.jsx)(Je,{label:o,labelId:E,helperText:s,validationState:c,required:_,disabled:h,name:m,isFullWidth:d,className:te,children:(0,F.jsxs)(Et,{items:S,value:C(n),defaultValue:C(r),onValueChange:(e,t)=>{t.event instanceof MouseEvent&&setTimeout(()=>T.current?.blur()),i?.(e?.value??null)},onInputValueChange:(e,t)=>w(t.reason===`input-change`?e:``),isItemEqualToValue:(e,t)=>e.value===t.value,readOnly:g,required:_,autoHighlight:!0,children:[(0,F.jsxs)(ft,{className:l(Ke(u),un.group),children:[(0,F.jsx)(st,{ref:t=>{T.current=t,typeof e==`function`?e(t):e&&(e.current=t)},id:y,placeholder:a,autoFocus:v,"aria-label":x,"aria-busy":f||void 0,className:N.control}),f&&(0,F.jsx)(`span`,{className:l(N.icon,N.spinner),"aria-hidden":`true`}),ee&&!g&&(0,F.jsx)(on,{className:N.iconButton,"aria-label":`Clear selection`,children:(0,F.jsx)(he,{name:`clear`})}),(0,F.jsx)(At,{className:N.iconButton,render:e=>(0,F.jsx)(`button`,{...e,"aria-labelledby":void 0,"aria-label":`Show options`}),children:(0,F.jsx)(he,{name:`chevron-down`})})]}),(0,F.jsx)(Vt,{container:b,children:(0,F.jsx)(Gt,{className:N.positioner,sideOffset:4,children:(0,F.jsxs)(Xt,{className:N.popup,style:qe(u),children:[f?(0,F.jsx)(Nt,{className:N.status,children:`Loading…`}):(0,F.jsx)(bt,{className:N.empty,children:p}),(0,F.jsx)(ht,{"aria-labelledby":o?E:void 0,"aria-label":o?void 0:x,children:e=>(0,F.jsxs)(vt,{value:e,disabled:e.disabled,className:N.option,children:[(0,F.jsx)(en,{className:N.check,children:(0,F.jsx)(he,{name:`check`})}),(0,F.jsx)(`span`,{children:(0,F.jsx)(fn,{text:e.label,query:ne})})]},e.value)})]})})})]})})}var pn,F;function mn(){return(mn=t((()=>{pn=r(),Ot(),dt(),St(),sn(),jt(),Ht(),Kt(),Zt(),Pt(),gt(),xt(),pt(),nn(),M(),c(),Ge(),dn(),F=u(),P.__docgenInfo={description:``,methods:[],displayName:`Combobox`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`string | { value: string; label: string; disabled?: boolean }`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{ value: string; label: string; disabled?: boolean }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}]}],raw:`ComboboxOption[]`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},name:`value`}],return:{name:`void`}}},description:"The spec's `onChange`. `null` when cleared."},placeholder:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:`Options are still arriving: a spinner, and "Loading…" in the list.`},isClearable:{required:!1,tsType:{name:`boolean`},description:`Show a button that clears the selection.`,defaultValue:{value:`true`,computed:!1}},emptyText:{required:!1,tsType:{name:`string`},description:`Shown in the list when nothing matches.`,defaultValue:{value:`'No matches'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},autoFocus:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density."},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var hn=n({Anatomy:()=>Z,Clear:()=>H,Controlled:()=>Y,Default:()=>z,Disabled:()=>J,DoLongList:()=>Q,DontFewOptions:()=>$,Empty:()=>V,InAForm:()=>X,KeepsSelection:()=>B,Loading:()=>q,NotClearable:()=>U,OpenButton:()=>W,Sizes:()=>G,Validation:()=>K,__namedExportsOrder:()=>Sn,anatomyParts:()=>bn,default:()=>yn}),gn,I,L,_n,R,vn,yn,z,B,V,H,U,W,G,K,q,J,Y,X,bn,Z,xn,Q,$,Sn;function Cn(){return(Cn=t((()=>{gn=r(),ge(),mn(),I=u(),{expect:L,fn:_n,screen:R,waitFor:vn}=__STORYBOOK_MODULE_TEST__,yn={title:`Components/Inputs/Combobox`,tags:[`beta`],component:P,argTypes:{options:{description:"Strings, or `{ value, label, disabled? }`. Labels are strings: they are what is typed, matched and shown in the input.",control:!1},value:{description:"Controlled value: the chosen option's `value`, or `null`. Pair with `onValueChange`.",control:!1},defaultValue:{description:`Starting value when uncontrolled.`,control:!1},onValueChange:{description:"Called with the chosen option's `value`, or `null` when cleared. The spec's `onChange`.",control:!1},placeholder:{description:`Shown while the input is empty. A hint, never the label.`,control:`text`},label:{description:`Names the field. Also names the options list.`,control:`text`},helperText:{description:`Under the field. Read with it as its description.`,control:`text`},validationState:{description:"`error` turns the edge and helper red and sets `aria-invalid`; `success` turns them green.",control:`inline-radio`,options:[`default`,`success`,`error`]},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`]},isFullWidth:{description:`Fills the width of its container instead of 20rem.`,control:`boolean`},isLoading:{description:`Options are still arriving: a spinner in the field, "Loading…" in the list.`,control:`boolean`},isClearable:{description:`Shows a button that clears the selection.`,control:`boolean`},emptyText:{description:`Shown in the list when nothing matches.`,control:`text`},name:{description:"Submits the chosen option's `value` with a form.",control:`text`},disabled:{description:`Dimmed, out of the tab order, not submitted.`,control:`boolean`},readOnly:{description:`Shown and submitted, but cannot be changed.`,control:`boolean`},required:{description:`Marks the label with an asterisk and blocks an empty form submit.`,control:`boolean`},autoFocus:{description:`Focuses the input on mount.`,control:!1},id:{description:`For the input, e.g. to point an outside label at it.`,control:!1},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`On the field's outer element.`,control:!1},"aria-label":{description:"Names the field and its list when there is no visible `label`.",control:`text`},ref:{description:`The input element.`,control:!1}},args:{label:`Team member`,placeholder:`Type a name`,options:[{value:`miya`,label:`Miya Burns`},{value:`marlone`,label:`Marlone Thompson`},{value:`phoenix`,label:`Phoenix Hickman`},{value:`angelica`,label:`Angelica Mathews`,disabled:!0},{value:`candice`,label:`Candice Wu`}],onValueChange:_n()},excludeStories:[`anatomyParts`]},z={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`,{name:`Team member`});await t.type(r,`thom`);let i=await R.findByRole(`option`,{name:`Marlone Thompson`});await L(R.getByRole(`listbox`,{name:`Team member`})).toBeVisible(),await L(R.queryByRole(`option`,{name:`Miya Burns`})).toBeNull(),await L(i.querySelector(`mark`)).toHaveTextContent(`Thom`),await t.keyboard(`{Enter}`),await L(n.onValueChange).toHaveBeenLastCalledWith(`marlone`),await vn(()=>L(r).toHaveValue(`Marlone Thompson`))}},B={args:{defaultValue:`phoenix`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Show options`}));let n=await R.findByRole(`option`,{name:`Phoenix Hickman`});await L(n).toHaveAttribute(`aria-selected`,`true`),await L(R.queryAllByRole(`option`).some(e=>e.querySelector(`mark`))).toBe(!1)}},V={play:async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`combobox`),`zzz`),await vn(()=>L(R.getByText(`No matches`)).toBeVisible(),{timeout:3e3})}},H={args:{defaultValue:`phoenix`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`);await L(r).toHaveValue(`Phoenix Hickman`),await t.click(e.getByRole(`button`,{name:`Clear selection`})),await L(r).toHaveValue(``),await L(n.onValueChange).toHaveBeenLastCalledWith(null)}},U={args:{isClearable:!1,defaultValue:`miya`},play:async({canvas:e})=>{await L(e.queryByRole(`button`,{name:`Clear selection`})).toBeNull()}},W={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Show options`})),await L(await R.findAllByRole(`option`)).toHaveLength(5)}},G={render:e=>(0,I.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,I.jsx)(P,{...e,size:t,label:t,defaultValue:`marlone`},t))})},K={args:{validationState:`error`,helperText:`Choose someone to assign.`,required:!0},play:async({canvas:e})=>{let t=e.getByRole(`combobox`,{name:/Team member/});await L(t).toHaveAttribute(`aria-invalid`,`true`),await L(t).toHaveAccessibleDescription(`Choose someone to assign.`)}},q={args:{isLoading:!0,options:[]},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await vn(()=>L(R.getByText(`Loading…`)).toBeVisible(),{timeout:3e3})}},J={args:{disabled:!0},play:async({canvas:e})=>{await L(e.getByRole(`combobox`)).toBeDisabled()}},Y={render:function(e){let[t,n]=(0,gn.useState)(null);return(0,I.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,I.jsx)(P,{...e,value:t,onValueChange:n}),(0,I.jsxs)(`span`,{children:[`Assigned: `,t??`nobody`]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByRole(`combobox`),`candi`),await t.keyboard(`{Enter}`),await L(e.getByText(`Assigned: candice`)).toBeVisible(),await vn(()=>L(R.queryByRole(`listbox`)).toBeNull())}},X={render:e=>(0,I.jsx)(`form`,{"aria-label":`Assign`,children:(0,I.jsx)(P,{...e,name:`assignee`,defaultValue:`miya`})}),play:async({canvasElement:e})=>{await L(new FormData(e.querySelector(`form`)).get(`assignee`)).toBe(`miya`)}},bn=[{name:`Label`,selector:`label`,description:`Names the field and its options list.`},{name:`Field`,selector:`:has(> input[role="combobox"])`,description:`The box: edge, fill and focus ring. Holds the input and its buttons.`},{name:`Input`,selector:`input[role="combobox"]`,description:`Typing filters the list. Shows the chosen option's label.`},{name:`Clear button`,selector:`button[aria-label="Clear selection"]`,description:`Shown while there is a value, unless isClearable is false.`},{name:`Open button`,selector:`button[aria-label="Show options"]`,description:`The chevron: opens the full list. Out of the tab order.`},{name:`Helper text`,selector:`p`,description:`Optional. Turns red with the edge in the error state.`}],Z={tags:[`!dev`],args:{defaultValue:`marlone`,helperText:`Type to filter the team.`},play:async({canvasElement:e})=>{let t=await _e(e,bn);await L(t[1]).toContainElement(t[2]),await L(t[5]).toHaveTextContent(`Type to filter the team.`)}},xn=[`Low`,`Medium`,`High`],Q={args:{label:`Country`,placeholder:`Type a country`,options:[`Australia`,`Brazil`,`Canada`,`Denmark`,`France`,`Germany`,`India`,`Japan`,`Mexico`,`Norway`,`Portugal`,`Singapore`,`South Korea`,`Spain`,`Thailand`,`United Kingdom`,`United States`,`Vietnam`]}},$={tags:[`!dev`],args:{label:`Priority`,placeholder:`Type a priority`,options:xn}},Sn=[`Default`,`KeepsSelection`,`Empty`,`Clear`,`NotClearable`,`OpenButton`,`Sizes`,`Validation`,`Loading`,`Disabled`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoLongList`,`DontFewOptions`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByRole('combobox', {
      name: 'Team member'
    });
    await userEvent.type(input, 'thom');
    // Only matching options remain; the match is marked.
    const option = await screen.findByRole('option', {
      name: 'Marlone Thompson'
    });
    // The list carries the field's name, as the input does.
    await expect(screen.getByRole('listbox', {
      name: 'Team member'
    })).toBeVisible();
    await expect(screen.queryByRole('option', {
      name: 'Miya Burns'
    })).toBeNull();
    await expect(option.querySelector('mark')).toHaveTextContent('Thom');
    // The first match is highlighted, so Enter picks it.
    await userEvent.keyboard('{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('marlone');
    await waitFor(() => expect(input).toHaveValue('Marlone Thompson'));
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'phoenix'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show options'
    }));
    const chosen = await screen.findByRole('option', {
      name: 'Phoenix Hickman'
    });
    await expect(chosen).toHaveAttribute('aria-selected', 'true');
    // Nothing is marked: the input holds a chosen label, not a query.
    await expect(screen.queryAllByRole('option').some(o => o.querySelector('mark'))).toBe(false);
  }
}`,...B.parameters?.docs?.source},description:{story:`The chosen option keeps its check while the user types again.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole('combobox'), 'zzz');
    // The popup fades in over 100ms, so the message exists before it is
    // visible: wait for visibility, not presence.
    await waitFor(() => expect(screen.getByText('No matches')).toBeVisible(), {
      timeout: 3000
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'phoenix'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByRole('combobox');
    await expect(input).toHaveValue('Phoenix Hickman');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear selection'
    }));
    await expect(input).toHaveValue('');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isClearable: false,
    defaultValue: 'miya'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button', {
      name: 'Clear selection'
    })).toBeNull();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show options'
    }));
    await expect(await screen.findAllByRole('option')).toHaveLength(5);
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <Combobox key={size} {...args} size={size} label={size} defaultValue="marlone" />)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Choose someone to assign.',
    required: true
  },
  play: async ({
    canvas
  }) => {
    const input = canvas.getByRole('combobox', {
      name: /Team member/
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Choose someone to assign.');
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    options: []
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('combobox'));
    await waitFor(() => expect(screen.getByText('Loading…')).toBeVisible(), {
      timeout: 3000
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('combobox')).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [who, setWho] = useState<string | null>(null);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <Combobox {...args} value={who} onValueChange={setWho} />
        <span>Assigned: {who ?? 'nobody'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole('combobox'), 'candi');
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByText('Assigned: candice')).toBeVisible();
    // The a11y check runs after the play: let the closing list unmount first,
    // or axe can catch it mid-exit without its name.
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Assign">
      <Combobox {...args} name="assignee" defaultValue="miya" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('assignee')).toBe('miya');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: 'marlone',
    helperText: 'Type to filter the team.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toContainElement(found[2] as HTMLElement);
    await expect(found[5]).toHaveTextContent('Type to filter the team.');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present: a value, so the clear button shows, and helper text.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    placeholder: 'Type a country',
    options: ['Australia', 'Brazil', 'Canada', 'Denmark', 'France', 'Germany', 'India', 'Japan', 'Mexico', 'Norway', 'Portugal', 'Singapore', 'South Korea', 'Spain', 'Thailand', 'United Kingdom', 'United States', 'Vietnam']
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: a long list people already know an entry of, found by typing.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Priority',
    placeholder: 'Type a priority',
    options: priorities
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: three options hidden behind typing.`,...$.parameters?.docs?.description}}}})))()}export{J as a,q as c,K as d,bn as f,mn as h,z as i,W as l,P as m,H as n,Q as o,Cn as p,hn as r,$ as s,Z as t,G as u};