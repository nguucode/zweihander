import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as ee}from"./Select-K7Tvpi3R.js";import{n as te,t as ne}from"./FieldControl-BeQ__K97.js";import{a as re,c as l,d as ie,f as u,l as d,n as f,o as ae,s as oe,t as p,u as se}from"./PopoverPopup-DeWig6p7.js";import{a as ce,c as m,i as h,n as le,o as g,r as ue,s as _,t as de}from"./SliderThumb-uxuHs26E.js";import{a as v,i as y,o as fe,r as pe,t as me}from"./InputField-DjjlzSzi.js";var b,x,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,S;function Be(){return(Be=e((()=>{b=`_panel_1kaw0_1`,x=`_trigger_1kaw0_2`,he=`_disabled_1kaw0_16`,ge=`_area_1kaw0_23`,_e=`_areaThumb_1kaw0_40`,ve=`_stripThumb_1kaw0_41`,ye=`_strips_1kaw0_68`,be=`_strip_1kaw0_41`,xe=`_stripControl_1kaw0_76`,Se=`_stripTrack_1kaw0_83`,Ce=`_hueTrack_1kaw0_92`,we=`_alphaTrack_1kaw0_106`,Te=`_hueThumb_1kaw0_118`,Ee=`_alphaThumb_1kaw0_121`,De=`_fields_1kaw0_130`,Oe=`_format_1kaw0_136`,ke=`_channels_1kaw0_141`,Ae=`_channel_1kaw0_141`,je=`_hexChannel_1kaw0_161`,Me=`_alphaChannel_1kaw0_168`,Ne=`_unit_1kaw0_175`,Pe=`_swatches_1kaw0_183`,Fe=`_swatch_1kaw0_183`,Ie=`_hexInput_1kaw0_249`,Le=`_positioner_1kaw0_255`,Re=`_popup_1kaw0_261`,ze=`_srOnly_1kaw0_281`,S={panel:b,trigger:x,disabled:he,area:ge,areaThumb:_e,stripThumb:ve,strips:ye,strip:be,stripControl:xe,stripTrack:Se,hueTrack:Ce,alphaTrack:we,hueThumb:Te,alphaThumb:Ee,fields:De,format:Oe,channels:ke,channel:Ae,hexChannel:je,alphaChannel:Me,unit:Ne,swatches:Pe,swatch:Fe,hexInput:Ie,positioner:Le,popup:Re,srOnly:ze}})))()}function C(e){let t=e.trim().replace(/^#/,``).toLowerCase();return/^([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(t)?(t.length<5&&(t=[...t].map(e=>e+e).join(``)),`#${t.endsWith(`ff`)&&t.length===8?t.slice(0,6):t}`):null}function w(e){let t=C(e);if(t||typeof document>`u`||!CSS.supports(`color`,e.trim()))return t;if(k??=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),!k)return null;k.fillStyle=`#000`,k.fillStyle=e.trim();let n=k.fillStyle,r=n.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/);return r?C([r[1],r[2],r[3]].map(Number).map(j).join(``)+j(Number(r[4]??1)*255)):n.startsWith(`#`)?C(n):(k.clearRect(0,0,1,1),k.fillRect(0,0,1,1),C([...k.getImageData(0,0,1,1).data].map(j).join(``)))}function Ve(e){let[t,n,r]=We(e).map(e=>e/255),i=Math.max(t,n,r),a=i-Math.min(t,n,r),o=0;return a&&(o=i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4),{h:(o*60+360)%360,s:i?a/i:0,v:i}}function He({h:e,s:t,v:n}){let r=r=>{let i=(r+e/60)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return`#${[r(5),r(3),r(1)].map(e=>j(e*255)).join(``)}`}function Ue({label:e,value:t,onCommit:n,onStep:r,disabled:a,className:o}){let[s,c]=(0,D.useState)(null),ee=()=>{s!==null&&s.trim()!==``&&n(s),c(null)};return(0,O.jsx)(`input`,{type:`text`,inputMode:r?`numeric`:void 0,spellCheck:!1,autoComplete:`off`,"aria-label":e,className:i(fe.control,S.channel,o),value:s??t,disabled:a,onChange:e=>c(e.target.value),onFocus:e=>e.currentTarget.select(),onBlur:ee,onKeyDown:e=>{e.key===`Enter`?ee():r&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),c(null),r((e.key===`ArrowUp`?1:-1)*(e.shiftKey?10:1)))}})}function T({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,alpha:r=!0,defaultFormat:a=`hex`,swatches:o,disabled:s=!1,className:c}){let te=(0,D.useId)(),[ne,re]=(0,D.useState)(()=>A(t,r)??`#000000`),l=(e===void 0?null:A(e,r))??ne,ie=l.slice(0,7),u=l.length>7?parseInt(l.slice(7),16)/255:1,[d,f]=(0,D.useState)(()=>Ve(l)),[ae,oe]=(0,D.useState)(l);l!==ae&&(oe(l),He(d)!==ie&&f(Ve(l)));let[p,se]=(0,D.useState)(a),m=(e,t=u)=>{f(e);let r=Math.round(M(t)*255),i=He(e)+(r<255?j(r):``);oe(i),re(i),i!==l&&n?.(i)},h=(e,t=u)=>{let n=Ve(e);m(n.s&&n.v?n:{...n,h:d.h},t)},le=e=>{let t=e.currentTarget.getBoundingClientRect();m({...d,s:M((e.clientX-t.left)/t.width),v:M(1-(e.clientY-t.top)/t.height)})},g=e=>{let t=e.shiftKey?.1:.01,n={ArrowRight:{s:d.s+t},ArrowLeft:{s:d.s-t},ArrowUp:{v:d.v+t},ArrowDown:{v:d.v-t},PageUp:{v:d.v+.1},PageDown:{v:d.v-.1},Home:{s:0},End:{s:1}}[e.key];n&&(e.preventDefault(),m({...d,s:M(n.s??d.s),v:M(n.v??d.v)}))},v=We(ie),y=Ge(d),me=p===`rgb`?[`Red`,`Green`,`Blue`].map((e,t)=>[e,v[t],255,e=>h(`#${v.map((n,r)=>j(r===t?e:n)).join(``)}`)]):p===`hsl`?[[`Hue degrees`,Math.round(y.h),360,e=>m({...d,h:e%360})],[`Saturation percent`,N(y.s),100,e=>m(Ke({...y,s:e/100}))],[`Lightness percent`,N(y.l),100,e=>m(Ke({...y,l:e/100}))]]:p===`hsb`?[[`Hue degrees`,Math.round(d.h),360,e=>m({...d,h:e%360})],[`Saturation percent`,N(d.s),100,e=>m({...d,s:e/100})],[`Brightness percent`,N(d.v),100,e=>m({...d,v:e/100})]]:[],b=(e,t,n,r,i)=>(0,O.jsx)(Ue,{label:e,value:String(t),className:i,disabled:s,onCommit:e=>{let t=Number(e.replace(`%`,``));Number.isFinite(t)&&r(M(Math.round(t),n))},onStep:e=>r(M(t+e,n))},e),x=o?.map(e=>typeof e==`string`?{value:e,label:e}:e);return(0,O.jsxs)(`div`,{className:i(S.panel,s&&S.disabled,c),style:{"--picker-hue":d.h,"--picker-color":l,"--picker-rgb":ie},children:[(0,O.jsx)(`div`,{className:S.area,"data-disabled":s||void 0,onPointerDown:e=>{if(!(s||e.button!==0)){try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}e.preventDefault(),e.currentTarget.querySelector(`input`)?.focus({preventScroll:!0}),le(e)}},onPointerMove:e=>e.currentTarget.hasPointerCapture(e.pointerId)&&le(e),children:(0,O.jsxs)(`div`,{className:S.areaThumb,style:{left:`${d.s*100}%`,top:`${(1-d.v)*100}%`},children:[(0,O.jsx)(`input`,{type:`range`,className:S.srOnly,"aria-label":`Saturation`,"aria-valuetext":`Saturation ${N(d.s)}%, brightness ${N(d.v)}%`,min:0,max:100,value:N(d.s),disabled:s,onChange:e=>m({...d,s:Number(e.target.value)/100}),onKeyDown:g}),(0,O.jsx)(`input`,{type:`range`,className:S.srOnly,tabIndex:-1,"aria-label":`Brightness`,"aria-valuetext":`Brightness ${N(d.v)}%`,min:0,max:100,value:N(d.v),disabled:s,onChange:e=>m({...d,v:Number(e.target.value)/100})})]})}),(0,O.jsxs)(`div`,{className:S.strips,children:[(0,O.jsx)(_,{className:S.strip,min:0,max:359,value:Math.round(d.h)%360,disabled:s,onValueChange:e=>m({...d,h:e}),thumbAlignment:`edge`,children:(0,O.jsx)(ce,{className:S.stripControl,children:(0,O.jsx)(ue,{className:i(S.stripTrack,S.hueTrack),children:(0,O.jsx)(de,{className:i(S.stripThumb,S.hueThumb),getAriaLabel:()=>`Hue`,getAriaValueText:(e,t)=>`${t} degrees`})})})}),r&&(0,O.jsx)(_,{className:S.strip,min:0,max:100,value:N(u),disabled:s,onValueChange:e=>m(d,e/100),thumbAlignment:`edge`,children:(0,O.jsx)(ce,{className:S.stripControl,children:(0,O.jsx)(ue,{className:i(S.stripTrack,S.alphaTrack),children:(0,O.jsx)(de,{className:i(S.stripThumb,S.alphaThumb),getAriaLabel:()=>`Opacity`,getAriaValueText:(e,t)=>`${t}%`})})})})]}),(0,O.jsxs)(`div`,{className:S.fields,children:[(0,O.jsx)(ee,{"aria-label":`Colour format`,size:`sm`,className:S.format,options:qe,value:p,disabled:s,onValueChange:e=>e&&se(e)}),(0,O.jsxs)(`span`,{className:i(pe(`sm`),S.channels),"data-disabled":s||void 0,children:[p===`hex`?(0,O.jsx)(Ue,{label:`Hex`,value:ie.slice(1),className:S.hexChannel,disabled:s,onCommit:e=>{let t=A(e,r);t&&h(t.slice(0,7),t.length>7?parseInt(t.slice(7),16)/255:u)}}):me.map(([e,t,n,r])=>b(e,t,n,r)),r&&b(`Opacity percent`,N(u),100,e=>m(d,e/100),S.alphaChannel),r&&(0,O.jsx)(`span`,{className:i(fe.affix,S.unit),"aria-hidden":!0,children:`%`})]})]}),x&&x.length>0&&(0,O.jsx)(`div`,{role:`radiogroup`,"aria-label":`Swatches`,className:S.swatches,children:x.map(e=>{let t=A(e.value,r)??e.value;return(0,O.jsx)(`input`,{type:`radio`,name:`${te}-swatch`,className:S.swatch,style:{"--swatch":t},"aria-label":e.label,checked:t===l,disabled:s,onChange:()=>h(t.slice(0,7),t.length>7?parseInt(t.slice(7),16)/255:1)},e.value)})})]})}function E({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,alpha:r=!0,defaultFormat:a,swatches:o,label:s,helperText:c,validationState:ee,size:te=`md`,isFullWidth:l,name:u,disabled:f,required:ae,id:se,className:ce,"aria-label":m}){let[h,le]=(0,D.useState)(()=>A(t,r)??`#000000`),g=(e===void 0?null:A(e,r))??h,[ue,_]=(0,D.useState)(g),[de,v]=(0,D.useState)(!1),[b,x]=(0,D.useState)(g);g!==b&&(x(g),_(g),v(!1));let he=e=>{le(e),x(e),_(e),v(!1),e!==g&&n?.(e)},ge=(0,D.useRef)(null),_e=()=>{let e=A(ue,r);e?he(e):v(!0)};return(0,O.jsx)(me,{label:s,helperText:de?`Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).`:c,validationState:de?`error`:ee,required:ae,disabled:f,isFullWidth:l,className:ce,children:(0,O.jsxs)(`span`,{ref:ge,className:pe(te),onMouseDown:y,children:[(0,O.jsxs)(ie,{children:[(0,O.jsx)(d,{className:i(fe.iconButton,S.trigger),style:{"--swatch":g},disabled:f,"aria-label":`Choose colour, ${g} selected`}),(0,O.jsx)(oe,{children:(0,O.jsx)(re,{className:S.positioner,anchor:ge,side:`bottom`,align:`start`,sideOffset:8,children:(0,O.jsx)(p,{"aria-label":`Choose colour`,className:S.popup,children:(0,O.jsx)(T,{value:g,onValueChange:he,alpha:r,defaultFormat:a,swatches:o})})})})]}),(0,O.jsx)(ne,{id:se,value:ue,spellCheck:!1,autoComplete:`off`,"aria-label":m,required:ae,className:i(fe.control,S.hexInput),onChange:e=>{_(e.target.value),v(!1)},onBlur:_e,onKeyDown:e=>e.key===`Enter`&&_e()}),u&&(0,O.jsx)(`input`,{type:`hidden`,name:u,value:g})]})})}var D,O,k,A,We,j,Ge,Ke,M,N,qe;function Je(){return(Je=e((()=>{D=n(),te(),u(),se(),l(),ae(),f(),m(),g(),h(),le(),r(),c(),v(),Be(),O=a(),A=(e,t)=>{let n=w(e);return n&&!t?n.slice(0,7):n},We=e=>{let t=parseInt(e.slice(1,7),16);return[t>>16,t>>8&255,t&255]},j=e=>Math.round(e).toString(16).padStart(2,`0`),Ge=({h:e,s:t,v:n})=>{let r=n*(1-t/2);return{h:e,s:r===0||r===1?0:(n-r)/Math.min(r,1-r),l:r}},Ke=({h:e,s:t,l:n})=>{let r=n+t*Math.min(n,1-n);return{h:e,s:r?2*(1-n/r):0,v:r}},M=(e,t=1)=>Math.min(t,Math.max(0,e)),N=e=>Math.round(e*100),qe=[{value:`hex`,label:`Hex`},{value:`rgb`,label:`RGB`},{value:`hsl`,label:`HSL`},{value:`hsb`,label:`HSB`}],T.__docgenInfo={description:`The picker on its own, laid out like Figma's: a saturation/brightness area,
hue and opacity strips, channel fields in a chosen
format, and optional swatches. Use it inline, or through ColorPicker, which
puts it in a popover under a hex field.`,methods:[],displayName:`ColorPanel`,props:{value:{required:!1,tsType:{name:`string`},description:"`#rrggbb`, or `#rrggbbaa` when not opaque."},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#3b82f6'`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hex: string) => void`,signature:{arguments:[{type:{name:`string`},name:`hex`}],return:{name:`void`}}},description:``},alpha:{required:!1,tsType:{name:`boolean`},description:"Show the opacity slider and field. Off, the value is always `#rrggbb`.",defaultValue:{value:`true`,computed:!1}},defaultFormat:{required:!1,tsType:{name:`union`,raw:`'hex' | 'rgb' | 'hsl' | 'hsb'`,elements:[{name:`literal`,value:`'hex'`},{name:`literal`,value:`'rgb'`},{name:`literal`,value:`'hsl'`},{name:`literal`,value:`'hsb'`}]},description:`The format of the channel fields when the panel opens.`,defaultValue:{value:`'hex'`,computed:!1}},swatches:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`string | { value: string; label: string }`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}]}],raw:`Swatch[]`},description:`Preset colours under the pickers. A plain string is named by its hex.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},E.__docgenInfo={description:`A hex field with a swatch button that opens the ColorPanel.`,methods:[],displayName:`ColorPicker`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Under the field. Replaced by a format hint while the typed text is not a
colour. The field reads any CSS colour and shows it back as hex.`},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:`Submitted as the hex value.`},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},defaultValue:{defaultValue:{value:`'#3b82f6'`,computed:!1},required:!1},alpha:{defaultValue:{value:`true`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var Ye=t({Anatomy:()=>Z,Default:()=>V,Disabled:()=>q,DoBrandSwatches:()=>Q,DontNoSwatches:()=>$,FormatsAndOpacity:()=>W,InForm:()=>J,Normalize:()=>X,Panel:()=>Y,Required:()=>K,Swatches:()=>U,TypeAHex:()=>H,WithoutAlpha:()=>G,__namedExportsOrder:()=>rt,anatomyParts:()=>nt,default:()=>$e});function Xe(){let[e,t]=(0,Ze.useState)(`#3b82f6`);return(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,P.jsx)(T,{value:e,onValueChange:t,swatches:z}),(0,P.jsx)(`output`,{children:e})]})}var Ze,P,F,Qe,I,L,R,z,$e,B,V,H,U,et,tt,W,G,K,q,J,Y,X,nt,Z,Q,$,rt;function it(){return(it=e((()=>{Ze=n(),o(),Je(),P=a(),{expect:F,fn:Qe,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,z=[{value:`#0a0a0a`,label:`Ink`},{value:`#ffffff`,label:`Paper`},{value:`#ef4444`,label:`Red`},{value:`#f59e0b`,label:`Amber`},{value:`#22c55e`,label:`Green`},{value:`#3b82f6`,label:`Blue`},{value:`#8b5cf6`,label:`Violet`},{value:`#ec4899`,label:`Pink`}],$e={title:`Components/Controls/Color Picker`,tags:[`beta`],component:E,args:{label:`Brand colour`,defaultValue:`#3b82f6`,swatches:z,onValueChange:Qe()},argTypes:{value:{description:"Controlled colour, as hex. Pair with `onValueChange`.",control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:`Starting colour when uncontrolled. Any CSS colour; shown and returned as hex.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'#3b82f6'`}}},onValueChange:{description:"Called with lowercase `#rrggbb`, or `#rrggbbaa` below full opacity, on every change: typing (once committed), dragging, keys, swatches.",control:!1,table:{type:{summary:`(hex: string) => void`}}},alpha:{description:"Shows opacity. Off, any alpha in the value is dropped and the value is always `#rrggbb`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},defaultFormat:{description:`The channel fields’ format when the panel first opens. A view only: the value stays hex.`,control:`inline-radio`,options:[`hex`,`rgb`,`hsl`,`hsb`],table:{type:{summary:`'hex' | 'rgb' | 'hsl' | 'hsb'`},defaultValue:{summary:`'hex'`}}},swatches:{description:"Presets under the channels. A plain string is named by its hex; give brand colours a `label`.",control:!1,table:{type:{summary:`(string | { value: string; label: string })[]`}}},label:{description:`Names the hex field.`,control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:`Under the field. Replaced by a format hint while the typed text is not a colour.`,control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"As on Text Input: `error` sets `aria-invalid` and a red edge; `success` a green one.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"The field: 32px (`sm`) or 40px (`md`), as on Text Input. The panel is the same at both.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isFullWidth:{description:`Fills the width of its container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:`Submitted with a form, as the hex value.`,control:`text`,table:{type:{summary:`string`}}},required:{description:`Set on the hex input. Adds an asterisk to the label.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dims the field and disables the swatch button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:"The name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},B=()=>R(document.body).findByRole(`dialog`,{name:`Choose colour`}),V={play:async({args:e,canvas:t})=>{await F(t.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#3b82f6`),await I.click(t.getByRole(`button`,{name:`Choose colour, #3b82f6 selected`}));let n=R(await B()),r=n.getByRole(`slider`,{name:`Saturation`});await L(()=>F(r).toHaveFocus()),await F(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 96%`),await F(n.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`);let i=()=>t.getByRole(`textbox`).parentElement.getBoundingClientRect(),a=await B();await L(()=>F(Math.round(a.getBoundingClientRect().top-i().bottom)).toBe(8)),await L(()=>{let[e,t]=[a.getBoundingClientRect(),i()];F([Math.round(t.left),Math.round(t.right)]).toContain(Math.round(e.left)===Math.round(t.left)?Math.round(e.left):Math.round(e.right))}),await F(getComputedStyle(a).paddingTop).toBe(`16px`),await F(getComputedStyle(a).paddingLeft).toBe(`16px`),await I.keyboard(`{Shift>}{ArrowDown}{/Shift}`),await F(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 86%`),await I.keyboard(`{ArrowLeft}`),await F(r).toHaveAttribute(`aria-valuetext`,`Saturation 75%, brightness 86%`);let o=e.onValueChange.mock.lastCall[0];await F(t.getByRole(`textbox`)).toHaveValue(o),await I.keyboard(`{Escape}`),await L(()=>F(R(document.body).queryByRole(`dialog`)).toBeNull()),await L(()=>F(t.getByRole(`button`,{name:`Choose colour, ${o} selected`})).toHaveFocus())}},H={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Brand colour`});await I.clear(n),await I.type(n,`F00{Enter}`),await F(e.onValueChange).toHaveBeenLastCalledWith(`#ff0000`),await F(n).toHaveValue(`#ff0000`),await I.clear(n),await I.type(n,`reddish{Enter}`),await F(n).toHaveAttribute(`aria-invalid`,`true`),await F(t.getByText(`Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).`)).toBeVisible(),await F(e.onValueChange).toHaveBeenCalledTimes(1);for(let[t,r]of[[`rgb(0 128 255)`,`#0080ff`],[`hsl(120 100% 25% / 50%)`,`#00800080`],[`rebeccapurple`,`#663399`]])await I.clear(n),await I.type(n,`${t}{Enter}`),await F(e.onValueChange).toHaveBeenLastCalledWith(r),await F(n).toHaveValue(r)}},U={play:async({args:e,canvas:t})=>{await I.click(t.getByRole(`button`,{name:/Choose colour/}));let n=R(await B()),r=R(n.getByRole(`radiogroup`,{name:`Swatches`}));await F(r.getByRole(`radio`,{name:`Blue`})).toBeChecked(),await L(()=>{let e=r.getAllByRole(`radio`).map(e=>e.getBoundingClientRect());F(e.every(t=>t.width===24&&t.height===24&&t.top===e[0].top)).toBe(!0)}),await I.click(r.getByRole(`radio`,{name:`Violet`})),await F(e.onValueChange).toHaveBeenLastCalledWith(`#8b5cf6`),await F(r.getByRole(`radio`,{name:`Violet`})).toBeChecked(),await F(r.getByRole(`radio`,{name:`Blue`})).not.toBeChecked(),await I.keyboard(`{ArrowRight}`),await F(e.onValueChange).toHaveBeenLastCalledWith(`#ec4899`),await F(r.getByRole(`radio`,{name:`Pink`})).toHaveFocus()}},et=async(e,t)=>{await I.click(e.getByRole(`combobox`,{name:`Colour format`})),await I.click(await R(document.body).findByRole(`option`,{name:t})),await L(()=>F(R(document.body).queryByRole(`listbox`)).toBeNull())},tt=(e,t)=>{let n=getComputedStyle(e),r=document.createElement(`canvas`).getContext(`2d`);return r.font=`${n.fontWeight} ${n.fontSize} ${n.fontFamily}`,[`paddingLeft`,`paddingRight`,`borderLeftWidth`,`borderRightWidth`].reduce((e,t)=>e-parseFloat(n[t]),parseFloat(n.width))-r.measureText(t).width},W={play:async({args:e,canvas:t})=>{await I.click(t.getByRole(`button`,{name:/Choose colour/}));let n=R(await B());await F(n.getByRole(`textbox`,{name:`Hex`})).toHaveValue(`3b82f6`),await et(n,`RGB`);let r=n.getByRole(`textbox`,{name:`Red`});await F(r).toHaveValue(`59`),await I.clear(r),await I.type(r,`255{Enter}`),await F(e.onValueChange).toHaveBeenLastCalledWith(`#ff82f6`);for(let e of[`Red`,`Green`,`Blue`])await F(tt(n.getByRole(`textbox`,{name:e}),`255`)).toBeGreaterThanOrEqual(1);await F(tt(n.getByRole(`textbox`,{name:`Opacity percent`}),`100`)).toBeGreaterThanOrEqual(1),await I.keyboard(`{ArrowDown}`),await F(e.onValueChange).toHaveBeenLastCalledWith(`#fe82f6`),await et(n,`HSL`),await F(n.getByRole(`textbox`,{name:`Lightness percent`})).toHaveValue(`75`);let i=n.getByRole(`textbox`,{name:`Opacity percent`});await I.clear(i),await I.type(i,`50{Enter}`),await F(e.onValueChange).toHaveBeenLastCalledWith(`#fe82f680`),await F(n.getByRole(`slider`,{name:`Opacity`})).toHaveAttribute(`aria-valuetext`,`50%`),await F(t.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#fe82f680`)}},G={args:{alpha:!1,defaultValue:`#3b82f680`},play:async({canvas:e})=>{await F(e.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#3b82f6`),await I.click(e.getByRole(`button`,{name:/Choose colour/}));let t=R(await B());await F(t.queryByRole(`slider`,{name:`Opacity`})).toBeNull(),await F(t.queryByRole(`textbox`,{name:`Opacity percent`})).toBeNull(),await I.keyboard(`{Escape}`),await L(()=>F(R(document.body).queryByRole(`dialog`)).toBeNull())}},K={args:{required:!0},play:async({canvas:e})=>{await F(e.getByRole(`textbox`,{name:/Brand colour/})).toBeRequired()}},q={args:{disabled:!0},play:async({canvas:e})=>{await F(e.getByRole(`textbox`)).toBeDisabled(),await F(e.getByRole(`button`,{name:/Choose colour/})).toBeDisabled()}},J={args:{name:`brand`},render:e=>(0,P.jsx)(`form`,{"aria-label":`Theme`,children:(0,P.jsx)(E,{...e})}),play:async({canvas:e})=>{let t=e.getByRole(`form`);await F(new FormData(t).get(`brand`)).toBe(`#3b82f6`)}},Y={render:()=>(0,P.jsx)(Xe,{}),play:async({canvas:e})=>{let t=e.getByRole(`slider`,{name:`Saturation`}),n=t.closest(`div`).parentElement.getBoundingClientRect();await I.pointer({keys:`[MouseLeft]`,coords:{clientX:n.right-1,clientY:n.top+1},target:t.closest(`div`).parentElement}),await L(()=>F(t).toHaveAttribute(`aria-valuetext`,F.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/))),await F(t).toHaveFocus(),t.focus();for(let e=0;e<11;e++)await I.keyboard(`{Shift>}{ArrowDown}{/Shift}`);await F(e.getByRole(`status`)).toHaveTextContent(`#000000`),await F(e.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`)}},X={tags:[`!dev`,`!autodocs`],play:async()=>{await F(C(`#ABC`)).toBe(`#aabbcc`),await F(C(`3B82F6`)).toBe(`#3b82f6`),await F(C(`#3b82f`)).toBeNull(),await F(C(`blue`)).toBeNull(),await F(C(`#3b82f680`)).toBe(`#3b82f680`),await F(C(`#3b82f6FF`)).toBe(`#3b82f6`),await F(C(`#abc8`)).toBe(`#aabbcc88`),await F(w(`rgb(59, 130, 246)`)).toBe(`#3b82f6`),await F(w(`hsl(0 100% 50% / 0.5)`)).toBe(`#ff000080`),await F(w(`white`)).toBe(`#ffffff`),await F(w(`oklch(62.3% 0.214 259.8)`)).toMatch(/^#[0-9a-f]{6}$/),await F(w(`reddish`)).toBeNull()}},nt=[{name:`Field`,selector:`input[aria-labelledby]`,description:`A text field holding the hex, with the label, helper and validation of every Zweihänder field. Reads any CSS colour.`},{name:`Swatch button`,selector:`button[aria-haspopup="dialog"]`,description:`At the start of the field, filled with the current colour. Opens the panel.`},{name:`Area`,selector:`div:has(> div > input[aria-label="Saturation"])`,description:`Saturation left to right, brightness bottom to top, in the current hue.`},{name:`Hue strip`,selector:`[role="group"]:has(input[aria-label="Hue"])`,description:`A slider round the colour wheel, 0 to 359 degrees.`},{name:`Opacity strip`,selector:`[role="group"]:has(input[aria-label="Opacity"])`,description:"0 to 100%, over a checkerboard. Hidden with `alpha={false}`."},{name:`Format menu`,selector:`[aria-label="Colour format"]`,description:`The kit’s Select: Hex, RGB, HSL or HSB, which the channel fields follow.`},{name:`Channel fields`,selector:`span:has(> input[aria-label="Hex"])`,description:`One field box: the hex, or three numbers, then opacity in %.`},{name:`Swatches`,selector:`[role="radiogroup"]`,description:`Optional presets under a divider. The chosen one has a ring.`}],Z={tags:[`!dev`],render:e=>(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`,justifyItems:`start`},children:[(0,P.jsx)(E,{...e}),(0,P.jsx)(T,{defaultValue:`#3b82f6`,swatches:z})]}),play:async({canvasElement:e})=>{let t=await s(e,nt);await F(t[0]).toHaveValue(`#3b82f6`)}},Q={render:()=>(0,P.jsx)(T,{defaultValue:`#3b82f6`,swatches:z})},$={tags:[`!dev`],render:()=>(0,P.jsx)(T,{defaultValue:`#3d84f2`})},rt=[`Default`,`TypeAHex`,`Swatches`,`FormatsAndOpacity`,`WithoutAlpha`,`Required`,`Disabled`,`InForm`,`Panel`,`Normalize`,`anatomyParts`,`Anatomy`,`DoBrandSwatches`,`DontNoSwatches`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: 'Brand colour'
    })).toHaveValue('#3b82f6');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose colour, #3b82f6 selected'
    }));
    const dialog = within(await popup());
    const area = dialog.getByRole('slider', {
      name: 'Saturation'
    });
    // Opening puts focus in the area, the first thing in the popup.
    await waitFor(() => expect(area).toHaveFocus());
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 96%');
    await expect(dialog.getByRole('slider', {
      name: 'Hue'
    })).toHaveAttribute('aria-valuetext', '217 degrees');
    // The popup hangs off the whole field, not the swatch: 8px under it,
    // with 16px round the panel, as Date Picker's calendar.
    const field = () => canvas.getByRole('textbox').parentElement!.getBoundingClientRect();
    const panel = await popup();
    await waitFor(() => expect(Math.round(panel.getBoundingClientRect().top - field().bottom)).toBe(8));
    // Start-aligned; flush against the viewport's edge, as in this test, it
    // takes the field's other edge. Either way an edge of the field, which
    // the swatch, 7px inside it, is not.
    await waitFor(() => {
      const [p, f] = [panel.getBoundingClientRect(), field()];
      expect([Math.round(f.left), Math.round(f.right)]).toContain(Math.round(p.left) === Math.round(f.left) ? Math.round(p.left) : Math.round(p.right));
    });
    await expect(getComputedStyle(panel).paddingTop).toBe('16px');
    await expect(getComputedStyle(panel).paddingLeft).toBe('16px');
    // Up and down are brightness; left and right, saturation.
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 86%');
    await userEvent.keyboard('{ArrowLeft}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 75%, brightness 86%');
    const last = (args.onValueChange as ReturnType<typeof fn>).mock.lastCall![0] as string;
    await expect(canvas.getByRole('textbox')).toHaveValue(last);
    await userEvent.keyboard('{Escape}');
    // Focus goes back once the exit transition ends and the popup unmounts,
    // which WebKit on the CI runner can hold past one 3s wait.
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(canvas.getByRole('button', {
      name: \`Choose colour, \${last} selected\`
    })).toHaveFocus());
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Brand colour'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'F00{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ff0000');
    await expect(input).toHaveValue('#ff0000');
    await userEvent.clear(input);
    await userEvent.type(input, 'reddish{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).')).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledTimes(1);
    // Any CSS colour is read, and shown back as hex.
    for (const [typed, hex] of [['rgb(0 128 255)', '#0080ff'], ['hsl(120 100% 25% / 50%)', '#00800080'], ['rebeccapurple', '#663399']]) {
      await userEvent.clear(input);
      await userEvent.type(input, \`\${typed}{Enter}\`);
      await expect(args.onValueChange).toHaveBeenLastCalledWith(hex);
      await expect(input).toHaveValue(hex);
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose colour/
    }));
    const dialog = within(await popup());
    const swatches = within(dialog.getByRole('radiogroup', {
      name: 'Swatches'
    }));
    await expect(swatches.getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    // Fixed 24px, all in one row.
    await waitFor(() => {
      const boxes = swatches.getAllByRole('radio').map(r => r.getBoundingClientRect());
      expect(boxes.every(b => b.width === 24 && b.height === 24 && b.top === boxes[0].top)).toBe(true);
    });
    await userEvent.click(swatches.getByRole('radio', {
      name: 'Violet'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#8b5cf6');
    await expect(swatches.getByRole('radio', {
      name: 'Violet'
    })).toBeChecked();
    await expect(swatches.getByRole('radio', {
      name: 'Blue'
    })).not.toBeChecked();
    // One tab stop; arrows move between swatches and choose.
    await userEvent.keyboard('{ArrowRight}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ec4899');
    await expect(swatches.getByRole('radio', {
      name: 'Pink'
    })).toHaveFocus();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose colour/
    }));
    const dialog = within(await popup());
    await expect(dialog.getByRole('textbox', {
      name: 'Hex'
    })).toHaveValue('3b82f6');
    await chooseFormat(dialog, 'RGB');
    const red = dialog.getByRole('textbox', {
      name: 'Red'
    });
    await expect(red).toHaveValue('59');
    await userEvent.clear(red);
    await userEvent.type(red, '255{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ff82f6');
    // The widest values show in full, with a pixel for the caret.
    for (const name of ['Red', 'Green', 'Blue']) {
      await expect(room(dialog.getByRole('textbox', {
        name
      }) as HTMLInputElement, '255')).toBeGreaterThanOrEqual(1);
    }
    await expect(room(dialog.getByRole('textbox', {
      name: 'Opacity percent'
    }) as HTMLInputElement, '100')).toBeGreaterThanOrEqual(1);
    // Up and down step, Shift by 10.
    await userEvent.keyboard('{ArrowDown}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#fe82f6');
    await chooseFormat(dialog, 'HSL');
    await expect(dialog.getByRole('textbox', {
      name: 'Lightness percent'
    })).toHaveValue('75');
    // Opacity below 100% adds the alpha byte.
    const opacity = dialog.getByRole('textbox', {
      name: 'Opacity percent'
    });
    await userEvent.clear(opacity);
    await userEvent.type(opacity, '50{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#fe82f680');
    await expect(dialog.getByRole('slider', {
      name: 'Opacity'
    })).toHaveAttribute('aria-valuetext', '50%');
    await expect(canvas.getByRole('textbox', {
      name: 'Brand colour'
    })).toHaveValue('#fe82f680');
  }
}`,...W.parameters?.docs?.source},description:{story:`Channel fields in Hex, RGB, HSL or HSB, and opacity, as in Figma.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    alpha: false,
    defaultValue: '#3b82f680'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: 'Brand colour'
    })).toHaveValue('#3b82f6');
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose colour/
    }));
    const dialog = within(await popup());
    await expect(dialog.queryByRole('slider', {
      name: 'Opacity'
    })).toBeNull();
    await expect(dialog.queryByRole('textbox', {
      name: 'Opacity percent'
    })).toBeNull();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull());
  }
}`,...G.parameters?.docs?.source},description:{story:"`alpha={false}`: no opacity, and the value stays `#rrggbb`.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: /Brand colour/
    })).toBeRequired();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /Choose colour/
    })).toBeDisabled();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'brand'
  },
  render: args => <form aria-label="Theme">
      <ColorPicker {...args} />
    </form>,
  play: async ({
    canvas
  }) => {
    const form = canvas.getByRole('form') as HTMLFormElement;
    await expect(new FormData(form).get('brand')).toBe('#3b82f6');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledPanel />,
  play: async ({
    canvas
  }) => {
    const area = canvas.getByRole('slider', {
      name: 'Saturation'
    });
    // A click in the top-right corner is the pure hue.
    const box = area.closest('div')!.parentElement!.getBoundingClientRect();
    await userEvent.pointer({
      keys: '[MouseLeft]',
      coords: {
        clientX: box.right - 1,
        clientY: box.top + 1
      },
      target: area.closest('div')!.parentElement!
    });
    await waitFor(() => expect(area).toHaveAttribute('aria-valuetext', expect.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/)));
    await expect(area).toHaveFocus();
    // Down to black: the hex forgets the hue, the strip does not.
    area.focus();
    for (let i = 0; i < 11; i++) await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(canvas.getByRole('status')).toHaveTextContent('#000000');
    await expect(canvas.getByRole('slider', {
      name: 'Hue'
    })).toHaveAttribute('aria-valuetext', '217 degrees');
  }
}`,...Y.parameters?.docs?.source},description:{story:`The panel alone, e.g. in a sidebar.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  play: async () => {
    await expect(normalizeHex('#ABC')).toBe('#aabbcc');
    await expect(normalizeHex('3B82F6')).toBe('#3b82f6');
    await expect(normalizeHex('#3b82f')).toBeNull();
    await expect(normalizeHex('blue')).toBeNull();
    await expect(normalizeHex('#3b82f680')).toBe('#3b82f680');
    await expect(normalizeHex('#3b82f6FF')).toBe('#3b82f6');
    await expect(normalizeHex('#abc8')).toBe('#aabbcc88');
    await expect(parseColor('rgb(59, 130, 246)')).toBe('#3b82f6');
    await expect(parseColor('hsl(0 100% 50% / 0.5)')).toBe('#ff000080');
    await expect(parseColor('white')).toBe('#ffffff');
    await expect(parseColor('oklch(62.3% 0.214 259.8)')).toMatch(/^#[0-9a-f]{6}$/);
    await expect(parseColor('reddish')).toBeNull();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-6)',
    justifyItems: 'start'
  }}>
      <ColorPicker {...args} />
      <ColorPanel defaultValue="#3b82f6" swatches={brand} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveValue('#3b82f6');
  }
}`,...Z.parameters?.docs?.source},description:{story:`The field and, under it, the panel it opens, so every part is in view at once.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <ColorPanel defaultValue="#3b82f6" swatches={brand} />
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: the colours people should use, offered as named swatches.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <ColorPanel defaultValue="#3d84f2" />
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a palette to follow, but no swatches, so it is matched by eye.`,...$.parameters?.docs?.description}}}})))()}export{$ as a,U as c,E as d,Je as f,Q as i,nt as l,Ye as n,W as o,V as r,Y as s,Z as t,it as u};