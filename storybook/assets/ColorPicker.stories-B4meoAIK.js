import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./FieldControl-jyg4H2F9.js";import{a as c,c as l,d as ee,f as te,l as u,n as d,o as f,s as p,t as ne,u as re}from"./PopoverPopup-Inu_SKPK.js";import{n as m,t as ie}from"./Select-DumeCDxx.js";import{a as ae,c as h,i as oe,n as g,o as _,r as se,s as v,t as y}from"./SliderThumb-B_2iooBB.js";import{a as b,i as ce,o as x,r as le,t as ue}from"./InputField-DT_Sik-1.js";var S,C,w,T,E,D,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,O;function Me(){return(Me=e((()=>{S=`_panel_6138t_1`,C=`_disabled_6138t_11`,w=`_area_6138t_17`,T=`_areaThumb_6138t_34`,E=`_stripThumb_6138t_35`,D=`_strips_6138t_61`,de=`_strip_6138t_35`,fe=`_stripControl_6138t_69`,pe=`_stripTrack_6138t_76`,me=`_hueTrack_6138t_83`,he=`_alphaTrack_6138t_96`,ge=`_hueThumb_6138t_108`,_e=`_alphaThumb_6138t_111`,ve=`_fields_6138t_120`,ye=`_format_6138t_126`,be=`_channels_6138t_131`,xe=`_channel_6138t_131`,Se=`_hexChannel_6138t_151`,Ce=`_alphaChannel_6138t_158`,we=`_unit_6138t_164`,Te=`_swatches_6138t_169`,Ee=`_swatch_6138t_169`,De=`_trigger_6138t_217`,Oe=`_hexInput_6138t_227`,ke=`_positioner_6138t_233`,Ae=`_popup_6138t_237`,je=`_srOnly_6138t_257`,O={panel:S,disabled:C,area:w,areaThumb:T,stripThumb:E,strips:D,strip:de,stripControl:fe,stripTrack:pe,hueTrack:me,alphaTrack:he,hueThumb:ge,alphaThumb:_e,fields:ve,format:ye,channels:be,channel:xe,hexChannel:Se,alphaChannel:Ce,unit:we,swatches:Te,swatch:Ee,trigger:De,hexInput:Oe,positioner:ke,popup:Ae,srOnly:je}})))()}function k(e){let t=e.trim().replace(/^#/,``).toLowerCase();return/^([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(t)?(t.length<5&&(t=[...t].map(e=>e+e).join(``)),`#${t.endsWith(`ff`)&&t.length===8?t.slice(0,6):t}`):null}function A(e){let t=k(e);if(t||typeof document>`u`||!CSS.supports(`color`,e.trim()))return t;if(N??=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),!N)return null;N.fillStyle=`#000`,N.fillStyle=e.trim();let n=N.fillStyle,r=n.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/);return r?k([r[1],r[2],r[3]].map(Number).map(F).join(``)+F(Number(r[4]??1)*255)):n.startsWith(`#`)?k(n):(N.clearRect(0,0,1,1),N.fillRect(0,0,1,1),k([...N.getImageData(0,0,1,1).data].map(F).join(``)))}function Ne(e){let[t,n,r]=Re(e).map(e=>e/255),i=Math.max(t,n,r),a=i-Math.min(t,n,r),o=0;return a&&(o=i===t?(n-r)/a%6:i===n?(r-t)/a+2:(t-n)/a+4),{h:(o*60+360)%360,s:i?a/i:0,v:i}}function Pe({h:e,s:t,v:n}){let r=r=>{let i=(r+e/60)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return`#${[r(5),r(3),r(1)].map(e=>F(e*255)).join(``)}`}function Fe({label:e,value:t,onCommit:n,onStep:r,disabled:i,className:o}){let[s,c]=(0,j.useState)(null),l=()=>{s!==null&&s.trim()!==``&&n(s),c(null)};return(0,M.jsx)(`input`,{type:`text`,inputMode:r?`numeric`:void 0,spellCheck:!1,autoComplete:`off`,"aria-label":e,className:a(x.control,O.channel,o),value:s??t,disabled:i,onChange:e=>c(e.target.value),onFocus:e=>e.currentTarget.select(),onBlur:l,onKeyDown:e=>{e.key===`Enter`?l():r&&(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),c(null),r((e.key===`ArrowUp`?1:-1)*(e.shiftKey?10:1)))}})}function Ie({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,alpha:r=!0,defaultFormat:i=`hex`,swatches:o,disabled:s=!1,className:c}){let l=(0,j.useId)(),[ee,te]=(0,j.useState)(()=>P(t,r)??`#000000`),u=(e===void 0?null:P(e,r))??ee,d=u.slice(0,7),f=u.length>7?parseInt(u.slice(7),16)/255:1,[p,ne]=(0,j.useState)(()=>Ne(u)),[re,m]=(0,j.useState)(u);u!==re&&(m(u),Pe(p)!==d&&ne(Ne(u)));let[h,oe]=(0,j.useState)(i),g=(e,t=f)=>{ne(e);let r=Math.round(I(t)*255),i=Pe(e)+(r<255?F(r):``);m(i),te(i),i!==u&&n?.(i)},_=(e,t=f)=>{let n=Ne(e);g(n.s&&n.v?n:{...n,h:p.h},t)},b=e=>{let t=e.currentTarget.getBoundingClientRect();g({...p,s:I((e.clientX-t.left)/t.width),v:I(1-(e.clientY-t.top)/t.height)})},ce=e=>{let t=e.shiftKey?.1:.01,n={ArrowRight:{s:p.s+t},ArrowLeft:{s:p.s-t},ArrowUp:{v:p.v+t},ArrowDown:{v:p.v-t},PageUp:{v:p.v+.1},PageDown:{v:p.v-.1},Home:{s:0},End:{s:1}}[e.key];n&&(e.preventDefault(),g({...p,s:I(n.s??p.s),v:I(n.v??p.v)}))},ue=Re(d),S=ze(p),C=h===`rgb`?[`Red`,`Green`,`Blue`].map((e,t)=>[e,ue[t],255,e=>_(`#${ue.map((n,r)=>F(r===t?e:n)).join(``)}`)]):h===`hsl`?[[`Hue degrees`,Math.round(S.h),360,e=>g({...p,h:e%360})],[`Saturation percent`,L(S.s),100,e=>g(Be({...S,s:e/100}))],[`Lightness percent`,L(S.l),100,e=>g(Be({...S,l:e/100}))]]:h===`hsb`?[[`Hue degrees`,Math.round(p.h),360,e=>g({...p,h:e%360})],[`Saturation percent`,L(p.s),100,e=>g({...p,s:e/100})],[`Brightness percent`,L(p.v),100,e=>g({...p,v:e/100})]]:[],w=(e,t,n,r,i)=>(0,M.jsx)(Fe,{label:e,value:String(t),className:i,disabled:s,onCommit:e=>{let t=Number(e.replace(`%`,``));Number.isFinite(t)&&r(I(Math.round(t),n))},onStep:e=>r(I(t+e,n))},e),T=o?.map(e=>typeof e==`string`?{value:e,label:e}:e);return(0,M.jsxs)(`div`,{className:a(O.panel,s&&O.disabled,c),style:{"--picker-hue":p.h,"--picker-color":u,"--picker-rgb":d},children:[(0,M.jsx)(`div`,{className:O.area,"data-disabled":s||void 0,onPointerDown:e=>{s||e.button!==0||(e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault(),e.currentTarget.querySelector(`input`)?.focus({preventScroll:!0}),b(e))},onPointerMove:e=>e.currentTarget.hasPointerCapture(e.pointerId)&&b(e),children:(0,M.jsxs)(`div`,{className:O.areaThumb,style:{left:`${p.s*100}%`,top:`${(1-p.v)*100}%`},children:[(0,M.jsx)(`input`,{type:`range`,className:O.srOnly,"aria-label":`Saturation`,"aria-valuetext":`Saturation ${L(p.s)}%, brightness ${L(p.v)}%`,min:0,max:100,value:L(p.s),disabled:s,onChange:e=>g({...p,s:Number(e.target.value)/100}),onKeyDown:ce}),(0,M.jsx)(`input`,{type:`range`,className:O.srOnly,tabIndex:-1,"aria-label":`Brightness`,"aria-valuetext":`Brightness ${L(p.v)}%`,min:0,max:100,value:L(p.v),disabled:s,onChange:e=>g({...p,v:Number(e.target.value)/100})})]})}),(0,M.jsxs)(`div`,{className:O.strips,children:[(0,M.jsx)(v,{className:O.strip,min:0,max:359,value:Math.round(p.h)%360,disabled:s,onValueChange:e=>g({...p,h:e}),thumbAlignment:`edge`,children:(0,M.jsx)(ae,{className:O.stripControl,children:(0,M.jsx)(se,{className:a(O.stripTrack,O.hueTrack),children:(0,M.jsx)(y,{className:a(O.stripThumb,O.hueThumb),getAriaLabel:()=>`Hue`,getAriaValueText:(e,t)=>`${t} degrees`})})})}),r&&(0,M.jsx)(v,{className:O.strip,min:0,max:100,value:L(f),disabled:s,onValueChange:e=>g(p,e/100),thumbAlignment:`edge`,children:(0,M.jsx)(ae,{className:O.stripControl,children:(0,M.jsx)(se,{className:a(O.stripTrack,O.alphaTrack),children:(0,M.jsx)(y,{className:a(O.stripThumb,O.alphaThumb),getAriaLabel:()=>`Opacity`,getAriaValueText:(e,t)=>`${t}%`})})})})]}),(0,M.jsxs)(`div`,{className:O.fields,children:[(0,M.jsx)(ie,{"aria-label":`Colour format`,className:O.format,options:Ve,value:h,disabled:s,onValueChange:e=>e&&oe(e)}),(0,M.jsxs)(`span`,{className:a(le(`md`),O.channels),"data-disabled":s||void 0,children:[h===`hex`?(0,M.jsx)(Fe,{label:`Hex`,value:d.slice(1),className:O.hexChannel,disabled:s,onCommit:e=>{let t=P(e,r);t&&_(t.slice(0,7),t.length>7?parseInt(t.slice(7),16)/255:f)}}):C.map(([e,t,n,r])=>w(e,t,n,r)),r&&w(`Opacity percent`,L(f),100,e=>g(p,e/100),O.alphaChannel),r&&(0,M.jsx)(`span`,{className:a(x.affix,O.unit),"aria-hidden":!0,children:`%`})]})]}),T&&T.length>0&&(0,M.jsx)(`div`,{role:`radiogroup`,"aria-label":`Swatches`,className:O.swatches,children:T.map(e=>{let t=P(e.value,r)??e.value;return(0,M.jsx)(`input`,{type:`radio`,name:`${l}-swatch`,className:O.swatch,style:{"--swatch":t},"aria-label":e.label,checked:t===u,disabled:s,onChange:()=>_(t.slice(0,7),t.length>7?parseInt(t.slice(7),16)/255:1)},e.value)})})]})}function Le({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,alpha:r=!0,defaultFormat:i,swatches:o,label:l,helperText:te,validationState:d,size:f=`md`,isFullWidth:re,name:m,disabled:ie,required:ae,id:h,className:oe,"aria-label":g}){let[_,se]=(0,j.useState)(()=>P(t,r)??`#000000`),v=(e===void 0?null:P(e,r))??_,[y,b]=(0,j.useState)(v),[S,C]=(0,j.useState)(!1),[w,T]=(0,j.useState)(v);v!==w&&(T(v),b(v),C(!1));let E=e=>{se(e),T(e),b(e),C(!1),e!==v&&n?.(e)},D=()=>{let e=P(y,r);e?E(e):C(!0)};return(0,M.jsx)(ue,{label:l,helperText:S?`Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).`:te,validationState:S?`error`:d,required:ae,disabled:ie,isFullWidth:re,className:oe,children:(0,M.jsxs)(`span`,{className:le(f),onMouseDown:ce,children:[(0,M.jsxs)(ee,{children:[(0,M.jsx)(u,{className:a(x.iconButton,O.trigger),style:{"--swatch":v},disabled:ie,"aria-label":`Choose colour, ${v} selected`}),(0,M.jsx)(p,{children:(0,M.jsx)(c,{className:O.positioner,side:`bottom`,align:`start`,sideOffset:6,children:(0,M.jsx)(ne,{"aria-label":`Choose colour`,className:O.popup,children:(0,M.jsx)(Ie,{value:v,onValueChange:E,alpha:r,defaultFormat:i,swatches:o})})})})]}),(0,M.jsx)(s,{id:h,value:y,spellCheck:!1,autoComplete:`off`,"aria-label":g,required:ae,className:a(x.control,O.hexInput),onChange:e=>{b(e.target.value),C(!1)},onBlur:D,onKeyDown:e=>e.key===`Enter`&&D()}),m&&(0,M.jsx)(`input`,{type:`hidden`,name:m,value:v})]})})}var j,M,N,P,Re,F,ze,Be,I,L,Ve;function He(){return(He=e((()=>{j=r(),o(),te(),re(),l(),f(),d(),h(),_(),oe(),g(),i(),m(),b(),Me(),M=n(),P=(e,t)=>{let n=A(e);return n&&!t?n.slice(0,7):n},Re=e=>{let t=parseInt(e.slice(1,7),16);return[t>>16,t>>8&255,t&255]},F=e=>Math.round(e).toString(16).padStart(2,`0`),ze=({h:e,s:t,v:n})=>{let r=n*(1-t/2);return{h:e,s:r===0||r===1?0:(n-r)/Math.min(r,1-r),l:r}},Be=({h:e,s:t,l:n})=>{let r=n+t*Math.min(n,1-n);return{h:e,s:r?2*(1-n/r):0,v:r}},I=(e,t=1)=>Math.min(t,Math.max(0,e)),L=e=>Math.round(e*100),Ve=[{value:`hex`,label:`Hex`},{value:`rgb`,label:`RGB`},{value:`hsl`,label:`HSL`},{value:`hsb`,label:`HSB`}],Ie.__docgenInfo={description:`The picker on its own, laid out like Figma's: a saturation/brightness area,
hue and opacity strips, channel fields in a chosen
format, and optional swatches. Use it inline, or through ColorPicker, which
puts it in a popover under a hex field.`,methods:[],displayName:`ColorPanel`,props:{value:{required:!1,tsType:{name:`string`},description:"`#rrggbb`, or `#rrggbbaa` when not opaque."},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#3b82f6'`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hex: string) => void`,signature:{arguments:[{type:{name:`string`},name:`hex`}],return:{name:`void`}}},description:``},alpha:{required:!1,tsType:{name:`boolean`},description:"Show the opacity slider and field. Off, the value is always `#rrggbb`.",defaultValue:{value:`true`,computed:!1}},defaultFormat:{required:!1,tsType:{name:`union`,raw:`'hex' | 'rgb' | 'hsl' | 'hsb'`,elements:[{name:`literal`,value:`'hex'`},{name:`literal`,value:`'rgb'`},{name:`literal`,value:`'hsl'`},{name:`literal`,value:`'hsb'`}]},description:`The format of the channel fields when the panel opens.`,defaultValue:{value:`'hex'`,computed:!1}},swatches:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`string | { value: string; label: string }`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}]}],raw:`Swatch[]`},description:`Preset colours under the pickers. A plain string is named by its hex.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},Le.__docgenInfo={description:`A hex field with a swatch button that opens the ColorPanel.`,methods:[],displayName:`ColorPicker`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Under the field. Replaced by a format hint while the typed text is not a
colour. The field reads any CSS colour and shows it back as hex.`},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:`Submitted as the hex value.`},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},defaultValue:{defaultValue:{value:`'#3b82f6'`,computed:!1},required:!1},alpha:{defaultValue:{value:`true`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var Ue=t({Default:()=>W,Disabled:()=>X,FormatsAndOpacity:()=>q,InForm:()=>Z,Normalize:()=>$,Panel:()=>Q,Required:()=>Y,Swatches:()=>K,TypeAHex:()=>G,WithoutAlpha:()=>J,__namedExportsOrder:()=>Ze,default:()=>Je});function We(){let[e,t]=(0,Ge.useState)(`#3b82f6`);return(0,R.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,R.jsx)(Ie,{value:e,onValueChange:t,swatches:qe}),(0,R.jsx)(`output`,{children:e})]})}var Ge,R,z,Ke,B,V,H,qe,Je,U,W,G,K,Ye,Xe,q,J,Y,X,Z,Q,$,Ze;function Qe(){return(Qe=e((()=>{Ge=r(),He(),R=n(),{expect:z,fn:Ke,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,qe=[{value:`#0a0a0a`,label:`Ink`},{value:`#ffffff`,label:`Paper`},{value:`#ef4444`,label:`Red`},{value:`#f59e0b`,label:`Amber`},{value:`#22c55e`,label:`Green`},{value:`#3b82f6`,label:`Blue`},{value:`#8b5cf6`,label:`Violet`},{value:`#ec4899`,label:`Pink`}],Je={title:`Components/Controls/Color Picker`,component:Le,parameters:{a11y:{test:`error`}},args:{label:`Brand colour`,defaultValue:`#3b82f6`,swatches:qe,onValueChange:Ke()}},U=()=>H(document.body).findByRole(`dialog`,{name:`Choose colour`}),W={play:async({args:e,canvas:t})=>{await z(t.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#3b82f6`),await B.click(t.getByRole(`button`,{name:`Choose colour, #3b82f6 selected`}));let n=H(await U()),r=n.getByRole(`slider`,{name:`Saturation`});await V(()=>z(r).toHaveFocus()),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 96%`),await z(n.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`),await B.keyboard(`{Shift>}{ArrowDown}{/Shift}`),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 86%`),await B.keyboard(`{ArrowLeft}`),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 75%, brightness 86%`);let i=e.onValueChange.mock.lastCall[0];await z(t.getByRole(`textbox`)).toHaveValue(i),await B.keyboard(`{Escape}`),await V(()=>z(t.getByRole(`button`,{name:`Choose colour, ${i} selected`})).toHaveFocus())}},G={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Brand colour`});await B.clear(n),await B.type(n,`F00{Enter}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#ff0000`),await z(n).toHaveValue(`#ff0000`),await B.clear(n),await B.type(n,`reddish{Enter}`),await z(n).toHaveAttribute(`aria-invalid`,`true`),await z(t.getByText(`Enter a colour, e.g. #3b82f6, rgb(59 130 246) or hsl(217 91% 60%).`)).toBeVisible(),await z(e.onValueChange).toHaveBeenCalledTimes(1);for(let[t,r]of[[`rgb(0 128 255)`,`#0080ff`],[`hsl(120 100% 25% / 50%)`,`#00800080`],[`rebeccapurple`,`#663399`]])await B.clear(n),await B.type(n,`${t}{Enter}`),await z(e.onValueChange).toHaveBeenLastCalledWith(r),await z(n).toHaveValue(r)}},K={play:async({args:e,canvas:t})=>{await B.click(t.getByRole(`button`,{name:/Choose colour/}));let n=H(await U()),r=H(n.getByRole(`radiogroup`,{name:`Swatches`}));await z(r.getByRole(`radio`,{name:`Blue`})).toBeChecked(),await B.click(r.getByRole(`radio`,{name:`Violet`})),await z(e.onValueChange).toHaveBeenLastCalledWith(`#8b5cf6`),await z(r.getByRole(`radio`,{name:`Violet`})).toBeChecked(),await z(r.getByRole(`radio`,{name:`Blue`})).not.toBeChecked(),await B.keyboard(`{ArrowRight}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#ec4899`),await z(r.getByRole(`radio`,{name:`Pink`})).toHaveFocus()}},Ye=async(e,t)=>{await B.click(e.getByRole(`combobox`,{name:`Colour format`})),await B.click(await H(document.body).findByRole(`option`,{name:t})),await V(()=>z(H(document.body).queryByRole(`listbox`)).toBeNull())},Xe=(e,t)=>{let n=getComputedStyle(e),r=document.createElement(`canvas`).getContext(`2d`);return r.font=`${n.fontWeight} ${n.fontSize} ${n.fontFamily}`,e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)-r.measureText(t).width},q={play:async({args:e,canvas:t})=>{await B.click(t.getByRole(`button`,{name:/Choose colour/}));let n=H(await U());await z(n.getByRole(`textbox`,{name:`Hex`})).toHaveValue(`3b82f6`),await Ye(n,`RGB`);let r=n.getByRole(`textbox`,{name:`Red`});await z(r).toHaveValue(`59`),await B.clear(r),await B.type(r,`255{Enter}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#ff82f6`);for(let e of[`Red`,`Green`,`Blue`])await z(Xe(n.getByRole(`textbox`,{name:e}),`255`)).toBeGreaterThanOrEqual(1);await z(Xe(n.getByRole(`textbox`,{name:`Opacity percent`}),`100`)).toBeGreaterThanOrEqual(1),await B.keyboard(`{ArrowDown}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#fe82f6`),await Ye(n,`HSL`),await z(n.getByRole(`textbox`,{name:`Lightness percent`})).toHaveValue(`75`);let i=n.getByRole(`textbox`,{name:`Opacity percent`});await B.clear(i),await B.type(i,`50{Enter}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#fe82f680`),await z(n.getByRole(`slider`,{name:`Opacity`})).toHaveAttribute(`aria-valuetext`,`50%`),await z(t.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#fe82f680`)}},J={args:{alpha:!1,defaultValue:`#3b82f680`},play:async({canvas:e})=>{await z(e.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#3b82f6`),await B.click(e.getByRole(`button`,{name:/Choose colour/}));let t=H(await U());await z(t.queryByRole(`slider`,{name:`Opacity`})).toBeNull(),await z(t.queryByRole(`textbox`,{name:`Opacity percent`})).toBeNull(),await B.keyboard(`{Escape}`),await V(()=>z(H(document.body).queryByRole(`dialog`)).toBeNull())}},Y={args:{required:!0},play:async({canvas:e})=>{await z(e.getByRole(`textbox`,{name:/Brand colour/})).toBeRequired()}},X={args:{disabled:!0},play:async({canvas:e})=>{await z(e.getByRole(`textbox`)).toBeDisabled(),await z(e.getByRole(`button`,{name:/Choose colour/})).toBeDisabled()}},Z={args:{name:`brand`},render:e=>(0,R.jsx)(`form`,{"aria-label":`Theme`,children:(0,R.jsx)(Le,{...e})}),play:async({canvas:e})=>{let t=e.getByRole(`form`);await z(new FormData(t).get(`brand`)).toBe(`#3b82f6`)}},Q={render:()=>(0,R.jsx)(We,{}),play:async({canvas:e})=>{let t=e.getByRole(`slider`,{name:`Saturation`}),n=t.closest(`div`).parentElement.getBoundingClientRect();await B.pointer({keys:`[MouseLeft]`,coords:{clientX:n.right-1,clientY:n.top+1},target:t.closest(`div`).parentElement}),await V(()=>z(t).toHaveAttribute(`aria-valuetext`,z.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/))),await z(t).toHaveFocus(),t.focus();for(let e=0;e<11;e++)await B.keyboard(`{Shift>}{ArrowDown}{/Shift}`);await z(e.getByRole(`status`)).toHaveTextContent(`#000000`),await z(e.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`)}},$={tags:[`!dev`,`!autodocs`],play:async()=>{await z(k(`#ABC`)).toBe(`#aabbcc`),await z(k(`3B82F6`)).toBe(`#3b82f6`),await z(k(`#3b82f`)).toBeNull(),await z(k(`blue`)).toBeNull(),await z(k(`#3b82f680`)).toBe(`#3b82f680`),await z(k(`#3b82f6FF`)).toBe(`#3b82f6`),await z(k(`#abc8`)).toBe(`#aabbcc88`),await z(A(`rgb(59, 130, 246)`)).toBe(`#3b82f6`),await z(A(`hsl(0 100% 50% / 0.5)`)).toBe(`#ff000080`),await z(A(`white`)).toBe(`#ffffff`),await z(A(`oklch(62.3% 0.214 259.8)`)).toMatch(/^#[0-9a-f]{6}$/),await z(A(`reddish`)).toBeNull()}},Ze=[`Default`,`TypeAHex`,`Swatches`,`FormatsAndOpacity`,`WithoutAlpha`,`Required`,`Disabled`,`InForm`,`Panel`,`Normalize`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    // Up and down are brightness; left and right, saturation.
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 86%');
    await userEvent.keyboard('{ArrowLeft}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 75%, brightness 86%');
    const last = (args.onValueChange as ReturnType<typeof fn>).mock.lastCall![0] as string;
    await expect(canvas.getByRole('textbox')).toHaveValue(last);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: \`Choose colour, \${last} selected\`
    })).toHaveFocus());
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Channel fields in Hex, RGB, HSL or HSB, and opacity, as in Figma.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"`alpha={false}`: no opacity, and the value stays `#rrggbb`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`The panel alone, e.g. in a sidebar.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{Q as a,q as i,W as n,K as o,X as r,Qe as s,Ue as t};