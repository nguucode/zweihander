import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,c as i,d as a,f as o,i as s,l as c,o as l,p as u,r as ee,u as d}from"./iframe-C8tnim7F.js";import{n as f,t as p}from"./Button-Bwi4V5f1.js";import{n as m,t as h}from"./Tabs-Cta8uQ9T.js";import{n as g,t as _}from"./icon-C9aTyDDd.js";import{n as te,r as v}from"./Tag-DjFi4YNU.js";import{i as y,n as ne}from"./Tooltip-C5EQMDXx.js";import{n as re,t as b}from"./Select-BsYPTVUS.js";import{c as ie,l as ae,r as x}from"./story-helpers-EInZsLED.js";import{n as oe,t as S}from"./Radio-vEly5vBb.js";import{n as se,t as ce}from"./Popover-Db3qGhTm.js";import{n as le,t as ue}from"./Switch-CaqanT6z.js";import{n as de,t as fe}from"./Accordion-BXCFEoiy.js";import{n as pe,t as me}from"./EmptyState-DFT2bqlk.js";import{n as he,t as ge}from"./Spinner-x3z_vCDn.js";import{n as _e,t as ve}from"./NumberInput-3tms31Bw.js";import{r as ye,t as be}from"./TextInput-vfco79YG.js";import{n as xe,t as Se}from"./Search-DLU6gPnk.js";import{r as Ce,t as we}from"./Modal-ByvhTgOp.js";import{n as Te,t as Ee}from"./ErrorState-DIhT6KT4.js";var De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,C;function kt(){return(kt=e((()=>{De=`_shell_16qv9_4`,Oe=`_header_16qv9_15`,ke=`_brand_16qv9_23`,Ae=`_title_16qv9_29`,je=`_headerLink_16qv9_38`,Me=`_card_16qv9_44`,Ne=`_columns_16qv9_50`,Pe=`_aside_16qv9_62`,Fe=`_center_16qv9_68`,Ie=`_browser_16qv9_80`,Le=`_browserBody_16qv9_98`,Re=`_drawer_16qv9_105`,ze=`_filters_16qv9_116`,Be=`_themeRow_16qv9_117`,Ve=`_count_16qv9_123`,He=`_group_16qv9_130`,Ue=`_groupTitle_16qv9_136`,We=`_cards_16qv9_144`,Ge=`_cardName_16qv9_176`,Ke=`_toolbar_16qv9_190`,qe=`_itemName_16qv9_198`,Je=`_tools_16qv9_211`,Ye=`_live_16qv9_217`,Xe=`_frame_16qv9_227`,Ze=`_overlay_16qv9_234`,Qe=`_panel_16qv9_245`,$e=`_missing_16qv9_251`,et=`_hint_16qv9_252`,tt=`_props_16qv9_259`,nt=`_propsHeader_16qv9_265`,rt=`_sections_16qv9_274`,it=`_section_16qv9_274`,at=`_anatomy_16qv9_284`,ot=`_anatomyNumber_16qv9_298`,st=`_specTable_16qv9_304`,ct=`_specCaption_16qv9_311`,lt=`_specRow_16qv9_329`,ut=`_specPart_16qv9_341`,dt=`_specValue_16qv9_342`,ft=`_specProperty_16qv9_348`,pt=`_specToken_16qv9_349`,mt=`_specSwatch_16qv9_358`,ht=`_prose_16qv9_368`,gt=`_proseList_16qv9_371`,_t=`_pair_16qv9_384`,vt=`_example_16qv9_390`,yt=`_exampleKind_16qv9_423`,bt=`_themeSections_16qv9_429`,xt=`_themeSection_16qv9_429`,St=`_themeLegend_16qv9_446`,Ct=`_swatchGroup_16qv9_455`,wt=`_swatchLabel_16qv9_461`,Tt=`_swatches_16qv9_467`,Et=`_swatch_16qv9_455`,Dt=`_themeFooter_16qv9_503`,Ot=`_themeCopied_16qv9_512`,C={shell:De,header:Oe,brand:ke,title:Ae,headerLink:je,card:Me,columns:Ne,aside:Pe,center:Fe,browser:Ie,browserBody:Le,drawer:Re,filters:ze,themeRow:Be,count:Ve,group:He,groupTitle:Ue,cards:We,cardName:Ge,toolbar:Ke,itemName:qe,tools:Je,live:Ye,frame:Xe,overlay:Ze,panel:Qe,missing:$e,hint:et,props:tt,propsHeader:nt,sections:rt,section:it,anatomy:at,anatomyNumber:ot,specTable:st,specCaption:ct,specRow:lt,specPart:ut,specValue:dt,specProperty:ft,specToken:pt,specSwatch:mt,prose:ht,proseList:gt,pair:_t,example:vt,exampleKind:yt,themeSections:bt,themeSection:xt,themeLegend:St,swatchGroup:Ct,swatchLabel:wt,swatches:Tt,swatch:Et,themeFooter:Dt,themeCopied:Ot}})))()}function At(e){let t=e.specs?.pseudo??[],n=t.some(e=>e===`hover`||e.startsWith(`focus`)),r=[`default`,...t,...n?[`active`]:[],...rn(e)?[`disabled`]:[]],i=new Set,a=r.filter(e=>nn[e]&&!i.has(nn[e])&&i.add(nn[e]));return a.length>1?a:[]}function jt(e,t,n,r){let i=t.props.filter(e=>e.options);return e.filter(e=>{let t=i.filter(t=>t.options.map(String).includes(e.caption??``));return!t.length||t.some(t=>String(n[t.name]??t.default)===e.caption)}).map(e=>({...e,rows:e.rows.filter(e=>on(e,r))})).filter(e=>e.rows.length)}function Mt(e,t,n,r){if(!e.specs)return null;let i=[...e.specs.measurements,...e.specs.color];return{parts:e.specs.anatomy.map(({name:e,selector:t})=>({name:e,selector:t})),tokens:[...new Set(jt(i,e,t,n).flatMap(e=>e.rows.map(e=>e.token)))],highlight:r&&{part:s(r.part,e.specs.anatomy.map(e=>e.name))??``,property:r.property,token:r.token},...n==="default"||n===`disabled`?{}:{pseudo:n}}}function Nt(e){let t=new URLSearchParams(location.search),n=$t.find(([e])=>e===t.get(`tab`))?.[0]??`playground`,r=e.find(e=>e.id===t.get(`item`))??e.find(e=>e.kind===`component`&&e.name===`Button`)??e[0],i={};for(let e of r.props){let n=t.get(e.name),r=n===null?void 0:Ft(e,n);r!==void 0&&r!==pn(e)&&(i[e.name]=r)}return{item:r,tab:n,args:i}}function Pt(){let e=new URLSearchParams(location.search),t=t=>a(t,e.get(dn(t)))??i[t];return{accent:t(`accent`),gray:t(`gray`),radius:t(`radius`),canvas:t(`canvas`),contentStyle:t(`contentStyle`),font:t(`font`),scaling:t(`scaling`),appearance:t(`appearance`)}}function Ft(e,t){return e.options?e.options.find(e=>String(e)===t):e.control===`boolean`?t===`true`||t!==`false`&&void 0:e.control===`number`?t.trim()&&Number.isFinite(Number(t))?Number(t):void 0:t}function It(){clearTimeout(gn),gn=void 0,D=null}function Lt(){D!==null&&D!==location.href&&(history.replaceState(null,``,D),hn=Date.now()),It()}function Rt(e){if(D=e,gn)return;let t=hn+mn-Date.now();t<=0?Lt():gn=setTimeout(Lt,t)}function w(e){let t=new URL(D??location.href);for(let[n,r]of Object.entries(e))r===void 0?t.searchParams.delete(n):t.searchParams.set(n,r);return t.href}function zt(){return(0,T.useSyncExternalStore)(e=>{let t=matchMedia(cn);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},()=>matchMedia(cn).matches)}function Bt({manifest:e,storybookUrl:t=`../storybook/`,homeUrl:n=`../`}){let{items:r}=e,[i,a]=(0,T.useState)(()=>Nt(r)),[o,s]=(0,T.useState)(Pt),c=(0,T.useRef)(o),l=u(),[ee,d]=(0,T.useState)(xn),[f,m]=(0,T.useState)(Sn),[h,g]=(0,T.useState)(!1),[v,y]=(0,T.useState)(null),[re,b]=(0,T.useState)({}),[ie,ae]=(0,T.useState)(`default`),[x,oe]=(0,T.useState)(null),S=zt();(0,T.useEffect)(()=>{let e=()=>{It(),a(Nt(r)),Rt(w(fn(c.current)))};return addEventListener(`popstate`,e),()=>removeEventListener(`popstate`,e)},[r]),(0,T.useEffect)(()=>(addEventListener(`pagehide`,Lt),()=>{removeEventListener(`pagehide`,Lt),It()}),[]),(0,T.useEffect)(()=>{document.documentElement.classList.toggle(`dark`,l)},[l]);let se=e=>{if(g(!1),y(null),ae(`default`),oe(null),e.id===i.item.id)return;let t=w({..._n(i.item),item:e.id});Lt(),history.pushState(null,``,t),a(t=>({...t,item:e,args:{}}))},ce=e=>{oe(null),Rt(w({tab:e===`playground`?void 0:e})),a(t=>({...t,tab:e}))},le=(e,t)=>{let n=t!==void 0&&t!==pn(e);Rt(w({[e.name]:n?String(t):void 0})),a(r=>{let{[e.name]:i,...a}=r.args;return{...r,args:n?{...a,[e.name]:t}:a}})},ue=e=>{Rt(w(fn(e))),c.current=e,s(e)},de=()=>{Rt(w(_n(i.item))),a(e=>({...e,args:{}}))},fe=en(i.item),pe=fe.includes(i.tab)?i.tab:`playground`,me=rn(i.item),he=me&&i.args[me.name]===!0?`disabled`:ie,ge=e=>{me&&e===`disabled`!=(he===`disabled`)&&le(me,e===`disabled`),ae(e===`disabled`?`default`:e)},_e=(0,E.jsx)(Ut,{items:r,selected:i.item,filters:ee,onFilters:d,folds:f,onFolds:m,onSelect:se});return(0,E.jsxs)(`div`,{className:C.shell,children:[(0,E.jsxs)(`header`,{className:C.header,children:[(0,E.jsx)(`a`,{href:n,className:C.brand,children:`zweihänder`}),(0,E.jsx)(`h1`,{className:C.title,children:`Playground`}),(0,E.jsx)(`a`,{href:t,className:C.headerLink,children:`Storybook`})]}),(0,E.jsxs)(`div`,{className:C.columns,children:[S&&(0,E.jsx)(`nav`,{"aria-label":`Items`,className:C.browser,children:_e}),(0,E.jsxs)(`main`,{className:C.center,children:[(0,E.jsxs)(`div`,{className:C.toolbar,children:[!S&&(0,E.jsx)(we,{title:`Items`,open:h,onOpenChange:g,className:C.drawer,trigger:(0,E.jsx)(p,{appearance:`outlined`,variant:`secondary`,startIcon:(0,E.jsx)(_,{name:`menu`}),children:`Browse`}),children:_e}),(0,E.jsx)(`h2`,{className:C.itemName,children:i.item.name}),x&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(te,{text:tn(x.kind),variant:x.kind===`do`?`success`:`danger`}),(0,E.jsxs)(p,{appearance:`ghost`,variant:`secondary`,startIcon:(0,E.jsx)(_,{name:`chevron-left`}),onClick:()=>oe(null),children:[`Back to `,i.item.name]})]}),(0,E.jsxs)(`div`,{className:C.tools,children:[(0,E.jsx)(Vt,{theme:o,onChange:ue}),(0,E.jsx)(ne,{content:`Open in Storybook`,children:(0,E.jsx)(p,{appearance:`ghost`,variant:`secondary`,isIconOnly:!0,"aria-label":`Open in Storybook`,href:vn(t,x?.storyId??i.item.storyId),children:(0,E.jsx)(_,{name:`external`})})})]})]}),(0,E.jsx)(Gt,{item:i.item,storyId:x?.storyId,args:x?{}:i.args,theme:o,storybookUrl:t,inspect:pe===`specs`&&!x?Mt(i.item,i.args,he,v):null,onValues:b})]}),(0,E.jsx)(`aside`,{"aria-label":`Details`,className:C.aside,children:(0,E.jsx)(Kt,{item:i.item,has:fe,tab:pe,onTab:ce,content:{playground:(0,E.jsx)(Zt,{item:i.item,args:i.args,onChange:le,onReset:de}),specs:i.item.specs&&(0,E.jsx)(qt,{specs:i.item.specs,measurements:jt(i.item.specs.measurements,i.item,i.args,he),color:jt(i.item.specs.color,i.item,i.args,he),states:At(i.item),state:he,onState:ge,values:re,highlight:v,onHighlight:y}),guideline:i.item.guideline&&(0,E.jsx)(Xt,{guideline:i.item.guideline,example:x,onExample:oe,docsUrl:yn(t,i.item,`guidelines`)})}})})]})]})}function Vt({theme:e,onChange:t}){let n=n=>t({...e,...n}),[r,a]=(0,T.useState)(``),s=(0,T.useRef)(void 0);return(0,T.useEffect)(()=>()=>clearTimeout(s.current),[]),(0,E.jsx)(ce,{title:`Preview theme`,align:`end`,isModal:!0,trigger:(0,E.jsx)(p,{appearance:`outlined`,variant:`secondary`,children:`Theme`}),children:(0,E.jsxs)(`div`,{className:C.themeSections,children:[(0,E.jsxs)(`fieldset`,{className:C.themeSection,children:[(0,E.jsx)(`legend`,{className:C.themeLegend,children:`Color`}),(0,E.jsx)(Ht,{label:`Accent`,attribute:`data-accent`,values:c.accent,value:e.accent,onChange:e=>n({accent:e})}),(0,E.jsx)(Ht,{label:`Gray`,attribute:`data-gray`,values:c.gray,value:e.gray,onChange:e=>n({gray:e})})]}),(0,E.jsxs)(`fieldset`,{className:C.themeSection,children:[(0,E.jsx)(`legend`,{className:C.themeLegend,children:`Typo`}),(0,E.jsxs)(`div`,{className:C.themeRow,children:[(0,E.jsx)(b,{label:`Font`,options:O(c.font),value:e.font,onValueChange:e=>e&&n({font:e}),isFullWidth:!0}),(0,E.jsx)(b,{label:`Scaling`,options:O(c.scaling),value:e.scaling,onValueChange:e=>e&&n({scaling:e}),isFullWidth:!0})]})]}),(0,E.jsx)(S,{label:`Radius`,orientation:`horizontal`,options:O(c.radius),value:e.radius,onValueChange:e=>n({radius:e})}),(0,E.jsx)(S,{label:`Canvas`,orientation:`horizontal`,options:O(c.canvas),value:e.canvas,onValueChange:e=>n({canvas:e})}),(0,E.jsx)(S,{label:`Content`,orientation:`horizontal`,options:O(c.contentStyle),value:e.contentStyle,onValueChange:e=>n({contentStyle:e})}),(0,E.jsx)(S,{label:`Theme`,orientation:`horizontal`,options:O(c.appearance),value:e.appearance,onValueChange:e=>n({appearance:e})}),(0,E.jsxs)(`div`,{className:C.themeFooter,children:[(0,E.jsx)(`span`,{role:`status`,className:C.themeCopied,children:r}),(0,E.jsx)(p,{appearance:`ghost`,variant:`secondary`,onClick:()=>t(i),children:`Reset`}),(0,E.jsx)(p,{appearance:`outlined`,variant:`secondary`,onClick:async()=>{clearTimeout(s.current),a(``);try{await navigator.clipboard.writeText(o(e)),a(`Code copied`)}catch{a(`Could not copy: the browser blocked the clipboard`)}s.current=setTimeout(()=>a(``),3e3)},children:`Copy code`})]})]})})}function Ht({label:e,attribute:t,values:n,value:r,onChange:i}){let a=(0,T.useId)();return(0,E.jsxs)(`div`,{role:`radiogroup`,"aria-labelledby":`${a}-label`,className:C.swatchGroup,children:[(0,E.jsx)(`span`,{id:`${a}-label`,className:C.swatchLabel,children:e}),(0,E.jsx)(`div`,{className:C.swatches,children:n.map(e=>(0,E.jsx)(`input`,{type:`radio`,name:a,"aria-label":bn(e),[t]:e,className:C.swatch,checked:e===r,onChange:()=>i(e)},e))})]})}function Ut({items:e,selected:t,filters:n,onFilters:r,folds:i,onFolds:a,onSelect:o}){let{query:s,category:c,status:l}=n,u=Cn(e.map(e=>e.category)),ee=Cn(e.map(e=>e.status)),d=s.trim().toLowerCase(),f=e.filter(e=>e.name.toLowerCase().includes(d)&&(c===k||e.category===c)&&(l===k||e.status===l)),m=d!==``||c!==k||l!==k,h=m?i.filtering:i.browsing,g=e=>{r(e),a({...i,filtering:[]})},v=e=>g({...n,...e}),y=(e,t)=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),o(t))};return(0,E.jsxs)(`div`,{className:C.browserBody,children:[(0,E.jsx)(Se,{"aria-label":`Search by name`,placeholder:`Search by name`,value:s,onChange:e=>v({query:e.target.value}),isFullWidth:!0}),(0,E.jsxs)(`div`,{className:C.filters,children:[(0,E.jsx)(b,{label:`Category`,options:[{value:k,label:`All`},...u],value:c,onValueChange:e=>v({category:e??k}),isFullWidth:!0}),(0,E.jsx)(b,{label:`Status`,options:[{value:k,label:`All`},...ee],value:l,onValueChange:e=>v({status:e??k}),isFullWidth:!0})]}),(0,E.jsx)(`p`,{role:`status`,className:C.count,children:f.length===1?`1 item`:`${f.length} items`}),f.length===0?(0,E.jsx)(me,{headingLevel:3,icon:(0,E.jsx)(_,{name:`search`}),title:`Nothing matches`,description:`No item has that name in the chosen Category and status.`,action:(0,E.jsx)(p,{appearance:`outlined`,variant:`secondary`,onClick:()=>g(xn),children:`Clear search and filters`})}):sn.map(([e,n])=>{let r=f.filter(t=>t.kind===e);if(!r.length)return null;let o=Cn(r.map(e=>e.category)),s=o.map(t=>`${e}:${t}`);return(0,E.jsxs)(`section`,{"aria-labelledby":`pg-group-${e}`,className:C.group,children:[(0,E.jsx)(`h2`,{id:`pg-group-${e}`,className:C.groupTitle,children:n}),(0,E.jsx)(fe,{multiple:!0,appearance:`flush`,value:s.filter(e=>!h.includes(e)),onValueChange:e=>a({...i,[m?`filtering`:`browsing`]:[...h.filter(e=>!s.includes(e)),...s.filter(t=>!e.includes(t))]}),items:o.map((e,n)=>({value:s[n],title:e,content:(0,E.jsx)(`ul`,{className:C.cards,children:r.filter(t=>t.category===e).map(e=>(0,E.jsx)(`li`,{children:(0,E.jsxs)(`a`,{href:w({..._n(t),item:e.id}),"aria-current":e.id===t.id?`true`:void 0,className:C.card,onClick:t=>y(t,e),children:[(0,E.jsx)(`span`,{className:C.cardName,children:e.name}),(0,E.jsx)(te,{text:e.status,size:`sm`,variant:e.status===`experimental`?`warning`:`info`})]})},e.id))})}))})]},e)})]})}function Wt(e){try{let t=typeof e==`string`?JSON.parse(e):e;return t?.key===wn?t.event:void 0}catch{return}}function Gt({item:e,storyId:t=e.storyId,args:n,theme:r,storybookUrl:a,inspect:o,onValues:s}){let c=(0,T.useRef)(null),[l,u]=(0,T.useState)(null),d=`${a}iframe.html?${new URLSearchParams({id:t,viewMode:`story`,embed:`true`,globals:`appearance:${i.appearance}`})}`,f=vn(a,t),m=l?.src===d?l.ok?`ready`:`error`:`loading`;(0,T.useEffect)(()=>{let e=setTimeout(()=>u(e=>e?.src===d?e:{src:d,ok:!1}),ln);return()=>clearTimeout(e)},[d]);let[h,g]=(0,T.useState)(null),_=(0,T.useRef)(s);(0,T.useEffect)(()=>{_.current=s}),(0,T.useEffect)(()=>{let e=e=>{let t=c.current?.contentWindow;if(!t||e.source!==t)return;let n=Wt(e.data);n?.type===`storyRendered`&&g(t);let r=n?.args?.[0];n?.type===`playground/inspected`&&r?.values&&_.current(r.values)};return addEventListener(`message`,e),()=>removeEventListener(`message`,e)},[]);let te=(0,T.useRef)(null);(0,T.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let r=te.current?.target===e?te.current.args:{};te.current={target:e,args:n};let i=Tn(e,d),a=Object.keys(r).filter(e=>!Object.hasOwn(n,e)),o=Object.fromEntries(Object.entries(n).filter(([e,t])=>r[e]!==t));a.length&&i(`resetStoryArgs`,{storyId:t,argNames:a}),Object.keys(o).length&&i(`updateStoryArgs`,{storyId:t,updatedArgs:o})},[n,h,d,t]);let v=(0,T.useRef)(null);(0,T.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let t=v.current?.target===e?v.current.theme:i;v.current={target:e,theme:r};let n=Object.fromEntries(Object.entries(r).filter(([e,n])=>t[e]!==n));Object.keys(n).length&&Tn(e,d)(`updateGlobals`,{globals:n})},[r,h,d]);let y=JSON.stringify(o),ne=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let t=ne.current?.target===e?ne.current.request:`null`;ne.current={target:e,request:y},y!==t&&Tn(e,d)(ee,{request:JSON.parse(y)})},[y,h,d]),(0,E.jsxs)(`div`,{className:C.live,children:[(0,E.jsx)(`iframe`,{ref:c,title:`${e.name} live view`,src:d,className:C.frame,onLoad:()=>u({src:d,ok:!0})},d),m===`loading`&&(0,E.jsx)(`div`,{className:C.overlay,children:(0,E.jsx)(ge,{label:`Loading ${e.name}`})}),m===`error`&&(0,E.jsx)(`div`,{className:C.overlay,children:(0,E.jsx)(Ee,{headingLevel:3,title:`The live view did not load`,description:`${e.name} could not be shown here. Storybook has the same story.`,action:(0,E.jsx)(p,{href:f,children:`Open in Storybook`})})})]})}function Kt({item:e,has:t,tab:n,onTab:r,content:i}){let a=$t.filter(([e])=>!t.includes(e)).map(([,e])=>e);return(0,E.jsxs)(`div`,{className:C.panel,children:[(0,E.jsx)(h,{"aria-label":`Details`,isFullWidth:!0,items:$t.map(([e,n])=>({value:e,label:n,disabled:!t.includes(e),content:i[e]??null})),value:n,onValueChange:e=>r(e)}),a.length>0&&(0,E.jsxs)(`p`,{className:C.missing,children:[a.join(` and `),` `,a.length===1?`is`:`are`,` not written for `,e.name,` yet.`]})]})}function qt({specs:e,measurements:t,color:n,states:r,state:i,onState:a,values:o,highlight:c,onHighlight:u}){let ee=e.anatomy.map(e=>e.name),d=(e,t)=>(0,E.jsxs)(`table`,{className:C.specTable,children:[e.caption&&(0,E.jsx)(`caption`,{className:C.specCaption,children:e.caption}),(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{scope:`col`,children:`Part`}),(0,E.jsx)(`th`,{scope:`col`,children:`Value`})]})}),(0,E.jsx)(`tbody`,{children:e.rows.map((e,t)=>{let n=o[e.token],r=ee.indexOf(s(e.part,ee)??``);return(0,E.jsxs)(`tr`,{tabIndex:0,"aria-current":e===c?`true`:void 0,className:C.specRow,onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onFocus:()=>u(e),onClick:()=>u(e),onBlur:()=>u(null),children:[(0,E.jsxs)(`td`,{children:[(0,E.jsxs)(`span`,{className:C.specPart,children:[r>=0&&(0,E.jsxs)(`span`,{"aria-hidden":`true`,children:[l(r),` `]}),e.part]}),(0,E.jsx)(`span`,{className:C.specProperty,children:e.property})]}),(0,E.jsxs)(`td`,{children:[(0,E.jsxs)(`span`,{className:C.specValue,children:[n?.kind===`color`&&(0,E.jsx)(`span`,{"aria-hidden":`true`,className:C.specSwatch,style:{background:n.text}}),n?.text??`…`]}),(0,E.jsx)(`code`,{className:C.specToken,children:e.token})]})]},t)})})]},t);return(0,E.jsxs)(`div`,{className:C.sections,children:[r.length>0&&(0,E.jsx)(S,{label:`State`,helperText:`Forced on the live item. Color rows follow it.`,orientation:`horizontal`,options:r.map(e=>({value:e,label:nn[e]})),value:i,onValueChange:e=>a(e)}),e.anatomy.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-anatomy`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-anatomy`,className:C.groupTitle,children:`Anatomy`}),(0,E.jsx)(`ol`,{className:C.anatomy,children:e.anatomy.map((e,t)=>(0,E.jsxs)(`li`,{children:[(0,E.jsx)(`span`,{"aria-hidden":`true`,className:C.anatomyNumber,children:l(t)}),(0,E.jsxs)(`span`,{children:[(0,E.jsx)(`strong`,{children:e.name}),` `,e.description]})]},e.name))})]}),t.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-measurements`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-measurements`,className:C.groupTitle,children:`Measurements`}),t.map(d)]}),n.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-color`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-color`,className:C.groupTitle,children:`Color`}),n.map(d)]})]})}function Jt(e){return e.replace(/\s*\n\s*/g,` `).split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((e,t)=>e.startsWith("`")?(0,E.jsx)(`code`,{children:e.slice(1,-1)},t):e.startsWith(`**`)?(0,E.jsx)(`strong`,{children:e.slice(2,-2)},t):e.startsWith(`[`)?e.slice(1,e.indexOf(`]`)):e)}function Yt({blocks:e}){return e.map((e,t)=>e.startsWith(`- `)?(0,E.jsx)(`ul`,{className:C.proseList,children:e.split(/\n(?=- )/).map((e,t)=>(0,E.jsx)(`li`,{children:Jt(e.slice(2))},t))},t):(0,E.jsx)(`p`,{className:C.prose,children:Jt(e)},t))}function Xt({guideline:e,example:t,onExample:n,docsUrl:r}){let i=(e,{storyId:r,caption:i})=>(0,E.jsxs)(`button`,{type:`button`,"aria-pressed":t?.storyId===r,className:C.example,"data-kind":e,onClick:()=>n({storyId:r,kind:e,caption:i}),children:[(0,E.jsx)(`span`,{className:C.exampleKind,children:tn(e)}),i]});return(0,E.jsxs)(`div`,{className:C.sections,children:[e.intro.length>0&&(0,E.jsx)(`div`,{className:C.section,children:(0,E.jsx)(Yt,{blocks:e.intro})}),e.whenToUse.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-when`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-when`,className:C.groupTitle,children:`When to use`}),(0,E.jsx)(Yt,{blocks:e.whenToUse})]}),e.whenNotToUse.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-when-not`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-when-not`,className:C.groupTitle,children:`When not to use`}),(0,E.jsx)(Yt,{blocks:e.whenNotToUse})]}),e.doDont.length>0&&(0,E.jsxs)(`section`,{"aria-labelledby":`pg-dodont`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-dodont`,className:C.groupTitle,children:`Do and don't`}),(0,E.jsx)(`p`,{className:C.hint,children:`Pick one to see it in the live view.`}),e.doDont.map((e,t)=>(0,E.jsxs)(`div`,{className:C.pair,children:[i(`do`,e.do),i(`dont`,e.dont)]},t))]}),e.sections.map((e,t)=>(0,E.jsxs)(`section`,{"aria-labelledby":`pg-guide-${t}`,className:C.section,children:[(0,E.jsx)(`h2`,{id:`pg-guide-${t}`,className:C.groupTitle,children:e.title}),(0,E.jsx)(Yt,{blocks:e.blocks})]},e.title)),(0,E.jsx)(`a`,{href:r,className:C.headerLink,children:`The full docs page`})]})}function Zt({item:e,args:t,onChange:n,onReset:r}){return(0,E.jsxs)(`div`,{className:C.props,children:[(0,E.jsxs)(`div`,{className:C.propsHeader,children:[(0,E.jsx)(`h2`,{id:`pg-props`,className:C.groupTitle,children:`Props`}),(0,E.jsx)(p,{appearance:`ghost`,variant:`secondary`,onClick:r,children:`Reset`})]}),e.props.length===0&&(0,E.jsxs)(`p`,{className:C.missing,children:[e.name,` has no props to change here.`]}),e.props.map(r=>(0,E.jsx)(Qt,{prop:r,value:Object.hasOwn(t,r.name)?t[r.name]:pn(r),onChange:e=>n(r,e)},`${e.id} ${r.name}`))]})}function Qt({prop:e,value:t,onChange:n}){let r={label:e.name,helperText:e.description,isFullWidth:!0},{options:i}=e;return i?(0,E.jsx)(b,{...r,options:i.map(String),value:t===void 0?null:String(t),placeholder:`Not set`,onValueChange:e=>n(i.find(t=>String(t)===e))}):e.control===`boolean`?(0,E.jsx)(ue,{label:e.name,helperText:e.description,checked:t===!0,onCheckedChange:n}):e.control===`number`?(0,E.jsx)(ve,{...r,value:typeof t==`number`?t:null,onValueChange:e=>n(e??void 0)}):(0,E.jsx)(be,{...r,value:String(t??``),onChange:e=>n(e.target.value)})}var T,E,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,D,hn,gn,_n,vn,yn,bn,O,k,xn,Sn,Cn,wn,Tn;function En(){return(En=e((()=>{T=t(),v(),de(),f(),oe(),le(),_e(),xe(),re(),ye(),he(),m(),Ce(),se(),y(),pe(),Te(),g(),r(),kt(),d(),E=n(),$t=[[`playground`,`Playground`],[`specs`,`Specs`],[`guideline`,`Guideline`]],en=e=>[`playground`,...e.specs?[`specs`]:[],...e.guideline?[`guideline`]:[]],tn=e=>e===`do`?`Do`:`Don't`,nn={default:`Default`,hover:`Hover`,"focus-visible":`Focus`,focus:`Focus`,"focus-within":`Focus`,active:`Pressed`,disabled:`Disabled`},rn=e=>e.props.find(e=>e.control===`boolean`&&/^(isD|d)isabled$/.test(e.name)),an=[[/hover/i,[`hover`]],[/focus(?! ring)/i,[`focus-visible`,`focus`,`focus-within`]],[/press/i,[`active`]],[/disabled/i,[`disabled`]]],on=(e,t)=>{let n=e.part.split(`,`).slice(1).join(`,`),r=an.filter(([e])=>e.test(n));return!r.length||r.some(([,e])=>e.includes(t))},sn=[[`component`,`Components`],[`pattern`,`Patterns`],[`template`,`Templates`]],cn=`(min-width: 1024px)`,ln=2e4,un=Object.keys(i),dn=e=>`theme-${e}`,fn=e=>Object.fromEntries(un.map(t=>[dn(t),e[t]===i[t]?void 0:e[t]])),pn=e=>e.default??{boolean:!1,text:``}[e.control],mn=200,D=null,hn=0,_n=e=>Object.fromEntries(e.props.map(e=>[e.name,void 0])),vn=(e,t)=>`${e}?path=/story/${t}`,yn=(e,t,n)=>`${e}?path=/docs/${t.id}--docs&docTab=${n}`,bn=e=>e[0].toUpperCase()+e.slice(1).replaceAll(`-`,` `),O=e=>e.map(e=>({value:e,label:bn(e)})),k=`all`,xn={query:``,category:k,status:k},Sn={browsing:[],filtering:[]},Cn=e=>[...new Set(e)].sort(),wn=`storybook-channel`,Tn=(e,t)=>(n,r)=>e.postMessage(JSON.stringify({key:wn,event:{type:n,args:[r]}}),new URL(t,location.href).origin),Bt.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{manifest:{required:!0,tsType:{name:`Manifest`},description:``},storybookUrl:{required:!1,tsType:{name:`string`},description:`Where the deployed Storybook lives, relative to the page.`,defaultValue:{value:`'../storybook/'`,computed:!1}},homeUrl:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'../'`,computed:!1}}}}})))()}var A,j,M,N,Dn,On,kn,P,An,jn,F,I,Mn,L,R,z,B,V,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,H,U,Hn,W,Un,Wn,Gn,Kn,qn,G,Jn,K,q,J,Y,X,Z,Q,$,Yn;function Xn(){return(Xn=e((()=>{x(),En(),{expect:A,screen:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,Dn=(e,t,n,r,i=[])=>{let a=`${{component:`components`,pattern:`patterns`,template:`templates`}[e]}-${n}-${t}`.toLowerCase().replaceAll(` `,`-`);return{kind:e,id:a,name:t,category:n,status:r,storyId:`${a}--default`,props:i}},On={items:[Dn(`component`,`Badge`,`Atomic Elements`,`beta`,[{name:`count`,control:`number`,default:8},{name:`isDot`,control:`boolean`,default:!1,description:`A dot with no number.`}]),{...Dn(`component`,`Button`,`Buttons`,`beta`,[{name:`variant`,control:`inline-radio`,options:[`primary`,`secondary`],default:`primary`},{name:`appearance`,control:`select`,options:[`filled`,`outlined`],default:`filled`},{name:`size`,control:`inline-radio`,options:[`sm`,`md`],default:`md`},{name:`isLoading`,control:`boolean`},{name:`children`,control:`text`,default:`Button`}]),specs:{anatomy:[{name:`Container`,selector:`button`,description:`The clickable box.`},{name:`Label`,selector:`button > span`,description:`The text.`}],measurements:[{caption:`sm`,rows:[{part:`Container`,property:`Height`,token:`--control-sm`}]},{caption:`md`,rows:[{part:`Container`,property:`Height`,token:`--control-md`}]},{caption:`Every size`,rows:[{part:`Focus ring`,property:`Width`,token:`--focus-width`}]}],color:[{caption:`primary`,rows:[{part:`Label, contained`,property:`Colour`,token:`--primary-foreground`}]},{caption:`secondary`,rows:[{part:`Label`,property:`Colour`,token:`--secondary-foreground`}]},{caption:`Every variant`,rows:[{part:`Container, hover`,property:`Background`,token:`--accent`}]}],pseudo:[`hover`,`focus-visible`,`focus`]},guideline:{intro:[],whenToUse:["For an action on this page: `save` or **delete**.",`- One primary per view
- The rest step down`],whenNotToUse:[`Not for going to [another page](?path=/docs/link).`],doDont:[{do:{storyId:`components-buttons-button--do-one`,caption:`One primary button.`},dont:{storyId:`components-buttons-button--dont-two`,caption:`Two primaries compete.`}}],sections:[{title:`Accessibility`,blocks:["A native `<button>`."]}]}},Dn(`component`,`Tooltip`,`Overlays`,`experimental`),{...Dn(`pattern`,`App Shell`,`Application UI`,`experimental`),guideline:{intro:[`The frame around an app.`],whenToUse:[],whenNotToUse:[],doDont:[],sections:[{title:`Layout`,blocks:[`A sidebar and the page.`]}]}}]},[kn,P,An]=On.items,jn=async(e,t)=>{let n=e.queryByRole(`button`,{name:`Browse`});return n?(await t.click(n),N(await j.findByRole(`dialog`,{name:`Items`}))):N(e.getByRole(`navigation`,{name:`Items`}))},F=e=>e.findByTitle(/live view$/),I=async(e,t)=>M(async()=>A(await F(e)).toHaveAttribute(`title`,`${t} live view`)),Mn=async e=>{await M(async()=>{let t=await F(e),n=t.parentElement;A([t.offsetWidth,t.offsetHeight]).toEqual([n.clientWidth,n.clientHeight]),A(n.closest(`main`).clientWidth).toBe(n.clientWidth)})},L=(e,t)=>N(e.getByRole(`tablist`,{name:`Details`})).getByRole(`tab`,{name:t}),R=e=>new URLSearchParams(location.search).get(e),z=e=>N(e.getByRole(`complementary`,{name:`Details`})),B=async e=>{await M(()=>A(e.contentDocument?.readyState).toBe(`complete`));let t=[];e.contentWindow.addEventListener(`message`,e=>t.push(JSON.parse(e.data).event));let n=JSON.stringify({key:`storybook-channel`,event:{type:`storyRendered`,args:[]}});return window.dispatchEvent(new MessageEvent(`message`,{data:n,source:e.contentWindow})),t},V=e=>()=>{let t=location.href,n=new URL(t);for(let e of[`item`,`tab`,...On.items.flatMap(e=>e.props.map(e=>e.name))])n.searchParams.delete(e);for(let e of[...n.searchParams.keys()].filter(e=>e.startsWith(`theme-`)))n.searchParams.delete(e);for(let[t,r]of Object.entries(e))n.searchParams.set(t,r);return n.href!==t&&history.replaceState(null,``,n),()=>{location.href!==t&&history.replaceState(null,``,t)}},Nn={title:`Site/Playground`,component:Bt,parameters:{layout:`fullscreen`},args:{manifest:On,storybookUrl:`/playground-fixture/`,homeUrl:`#`},beforeEach:V({})},Pn={play:async({canvas:e,userEvent:t})=>{await I(e,`Button`);let n=await F(e);await A(n.getAttribute(`src`)).toContain(`id=${P.storyId}`),await Mn(e),await M(()=>A(e.queryByRole(`status`,{name:/Loading/})).toBeNull()),await A(e.queryByRole(`tablist`,{name:`Viewport`})).toBeNull(),await A(e.queryByRole(`textbox`,{name:`Address`})).toBeNull(),await A(L(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`),await A(e.getByRole(`heading`,{name:`Button`,level:2})).toBeVisible(),await A(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/${P.storyId}`);let r=await jn(e,t);await A(r.getByRole(`link`,{name:/Button/})).toHaveAttribute(`aria-current`,`true`),await A(r.getByRole(`heading`,{name:`Components`})).toBeVisible(),await A(r.getByRole(`heading`,{name:`Patterns`})).toBeVisible(),await A(r.queryByRole(`heading`,{name:`Templates`})).toBeNull();let i=r.getByRole(`searchbox`,{name:`Search by name`});await t.type(i,`bad`),await A(r.getAllByRole(`link`)).toHaveLength(1),await A(r.getByRole(`link`,{name:/Badge/})).toBeVisible(),await A(r.queryByRole(`heading`,{name:`Patterns`})).toBeNull(),await t.type(i,`xyz`),await A(r.getByRole(`heading`,{name:`Nothing matches`})).toBeVisible(),await t.click(r.getByRole(`button`,{name:`Clear search and filters`})),await A(r.getAllByRole(`link`)).toHaveLength(4),await t.click(r.getByRole(`combobox`,{name:`Status`})),await t.click(await j.findByRole(`option`,{name:`experimental`})),await M(()=>A(r.getAllByRole(`link`)).toHaveLength(2)),await A(r.queryByRole(`link`,{name:/Button/})).toBeNull(),await A(r.getByRole(`status`)).toHaveTextContent(`2 items`),await t.click(r.getByRole(`combobox`,{name:`Category`})),await t.click(await j.findByRole(`option`,{name:`Overlays`})),await M(()=>A(r.getAllByRole(`link`)).toHaveLength(1)),await A(r.queryByRole(`heading`,{name:`Patterns`})).toBeNull(),await t.click(r.getByRole(`link`,{name:/Tooltip/})),await M(async()=>A((await F(e)).getAttribute(`src`)).toContain(`id=${An.storyId}`)),await I(e,`Tooltip`),await A(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/${An.storyId}`),await M(()=>A(R(`item`)).toBe(An.id)),await A(z(e).getByText(`Tooltip has no props to change here.`)).toBeVisible(),r=await jn(e,t),await A(r.getByRole(`link`,{name:/Tooltip/})).toHaveAttribute(`aria-current`,`true`),await A(r.getAllByRole(`link`)).toHaveLength(1),await t.keyboard(`{Escape}`),history.back(),await I(e,`Button`),await Mn(e)}},Fn={play:async({canvas:e,userEvent:t})=>{let n=await jn(e,t),r=e=>n.getByRole(`button`,{name:e});for(let e of[`Atomic Elements`,`Buttons`,`Overlays`,`Application UI`])await A(r(e)).toHaveAttribute(`aria-expanded`,`true`);let i=n.getByRole(`link`,{name:/Badge/});await A(i).toHaveTextContent(/^Badgebeta$/),await t.click(r(`Buttons`)),await A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await M(()=>A(n.getByRole(`link`,{name:/Button/,hidden:!0})).not.toBeVisible()),r(`Buttons`).focus(),await t.keyboard(`{Enter}`),await A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`),await M(()=>A(n.getByRole(`link`,{name:/Button/})).toBeVisible()),await t.keyboard(` `),await A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await t.click(r(`Atomic Elements`)),await A(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`false`),await t.type(n.getByRole(`searchbox`,{name:`Search by name`}),`b`),await A(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`true`),await A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`),await M(()=>A(n.getByRole(`link`,{name:/Badge/})).toBeVisible()),await A(n.queryByRole(`button`,{name:`Overlays`})).toBeNull(),await A(n.queryByRole(`button`,{name:`Application UI`})).toBeNull(),await t.clear(n.getByRole(`searchbox`,{name:`Search by name`})),await A(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`false`),await A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await A(r(`Overlays`)).toHaveAttribute(`aria-expanded`,`true`),await t.click(n.getByRole(`combobox`,{name:`Category`})),await t.click(await j.findByRole(`option`,{name:`Buttons`})),await M(()=>A(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`)),await A(n.queryByRole(`button`,{name:`Atomic Elements`})).toBeNull(),await A(n.queryByRole(`button`,{name:`Overlays`})).toBeNull(),await M(()=>A(j.queryByRole(`listbox`)).toBeNull())}},In={play:async({canvas:e,userEvent:t})=>{let n=z(e),r=await F(e),i=r.getAttribute(`src`),a=await B(r),o=()=>a.at(-1),s=e=>({type:`updateStoryArgs`,args:[{storyId:P.storyId,updatedArgs:e}]});await A(n.getByRole(`combobox`,{name:`variant`})).toHaveTextContent(`primary`),await A(n.getByRole(`switch`,{name:`isLoading`})).not.toBeChecked(),await A(n.getByRole(`textbox`,{name:`children`})).toHaveValue(`Button`),await t.click(n.getByRole(`combobox`,{name:`variant`})),await t.click(await j.findByRole(`option`,{name:`secondary`})),await M(()=>A(o()).toEqual(s({variant:`secondary`}))),await M(()=>A(R(`variant`)).toBe(`secondary`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await M(()=>A(o()).toEqual(s({isLoading:!0}))),await M(()=>A(R(`isLoading`)).toBe(`true`));let c=n.getByRole(`textbox`,{name:`children`});await t.clear(c),await t.type(c,`Save it!`),await M(()=>A(o()).toEqual(s({children:`Save it!`}))),await M(()=>A(R(`children`)).toBe(`Save it!`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await M(()=>A(o()).toEqual({type:`resetStoryArgs`,args:[{storyId:P.storyId,argNames:[`isLoading`]}]})),await M(()=>A(R(`isLoading`)).toBeNull()),await t.click(n.getByRole(`button`,{name:`Reset`})),await M(()=>A(o()).toEqual({type:`resetStoryArgs`,args:[{storyId:P.storyId,argNames:[`variant`,`children`]}]})),await M(()=>A(R(`variant`)).toBeNull()),await M(()=>A(R(`children`)).toBeNull()),await A(n.getByRole(`combobox`,{name:`variant`})).toHaveTextContent(`primary`),await A(n.getByRole(`textbox`,{name:`children`})).toHaveValue(`Button`),await A((await F(e)).getAttribute(`src`)).toBe(i)}},Ln={beforeEach:V({item:kn.id,count:`3`,isDot:`true`,gone:`x`}),play:async({canvas:e,userEvent:t})=>{await I(e,`Badge`);let n=await F(e);await A(n.getAttribute(`src`)).toContain(`id=${kn.storyId}`);let r=z(e),i=r.getByRole(`textbox`,{name:`count`});await A(i).toHaveValue(`3`),await A(r.getByRole(`switch`,{name:`isDot`})).toBeChecked();let a=await B(n);await M(()=>A(a).toEqual([{type:`updateStoryArgs`,args:[{storyId:kn.storyId,updatedArgs:{count:3,isDot:!0}}]}])),await t.clear(i),await t.type(i,`12`),await t.tab(),await M(()=>A(a.at(-1)).toEqual({type:`updateStoryArgs`,args:[{storyId:kn.storyId,updatedArgs:{count:12}}]})),await M(()=>A(R(`count`)).toBe(`12`))}},Rn={beforeEach:V({item:`components-gone-widget`,tab:`nope`}),play:async({canvas:e})=>{await I(e,`Button`),await A(L(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`)}},zn={play:async({canvas:e,userEvent:t})=>{let n=e.queryByRole(`button`,{name:`Browse`});n&&(n.focus(),await t.keyboard(`{Enter}`),await j.findByRole(`dialog`,{name:`Items`}));let r=N(n?j.getByRole(`dialog`):e.getByRole(`navigation`,{name:`Items`})).getByRole(`link`,{name:/Badge/});for(let e=0;e<20&&document.activeElement!==r;e++)await t.tab();await A(r).toHaveFocus(),await t.keyboard(`{Enter}`),await I(e,`Badge`)}},Bn={beforeEach:ae(!1),play:async({canvas:e,userEvent:t})=>{let n=z(e),r=await F(e),i=r.getAttribute(`src`),a=await B(r);await A(i).toContain(`globals=appearance%3Asystem`),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await M(()=>A(a.at(-1)?.type).toBe(`updateStoryArgs`));let o=e.getByRole(`button`,{name:`Theme`});await t.click(o);let s=N(await j.findByRole(`dialog`,{name:`Preview theme`}));await A(s.getByRole(`radio`,{name:`System`})).toBeChecked(),await t.click(s.getByRole(`radio`,{name:`Dark`})),await M(()=>A(a.at(-1)).toEqual({type:`updateGlobals`,args:[{globals:{appearance:`dark`}}]})),await A(a.filter(e=>e.type===`updateStoryArgs`)).toHaveLength(1),await A((await F(e)).getAttribute(`src`)).toBe(i),await A(document.documentElement).not.toHaveClass(`dark`),await t.keyboard(`{Escape}`),await M(()=>A(j.queryByRole(`dialog`,{name:`Preview theme`})).toBeNull()),await A(o).toHaveFocus(),await A(n.getByRole(`switch`,{name:`isLoading`})).toBeChecked(),await t.click(o);let c=await j.findByRole(`dialog`,{name:`Preview theme`});await M(()=>A(c.contains(document.activeElement)).toBe(!0)),await A(N(c).getByRole(`radio`,{name:`Dark`})).toBeChecked()}},Vn=()=>[...new URLSearchParams(location.search).keys()].filter(e=>e.startsWith(`theme-`)),H=async(e,t)=>(await t.click(e.getByRole(`button`,{name:`Theme`})),N(await j.findByRole(`dialog`,{name:`Preview theme`}))),U=e=>e.findLast(e=>e.type===`updateGlobals`)?.args[0]?.globals,Hn={play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e)),r=await H(e,t),i=N(r.getByRole(`radiogroup`,{name:`Accent`})),a=N(r.getByRole(`radiogroup`,{name:`Gray`}));await A(i.getAllByRole(`radio`)).toHaveLength(17),await A(a.getAllByRole(`radio`)).toHaveLength(9),await A(i.getByRole(`radio`,{name:`Blue`})).toBeChecked(),await A(a.getByRole(`radio`,{name:`Gray`})).toBeChecked(),await A(r.getByRole(`radio`,{name:`Rounded`})).toBeChecked(),await t.click(i.getByRole(`radio`,{name:`Rose`})),await M(()=>A(U(n)).toEqual({accent:`rose`})),await t.click(a.getByRole(`radio`,{name:`Slate`})),await M(()=>A(U(n)).toEqual({gray:`slate`})),await t.click(r.getByRole(`radio`,{name:`Full rounded`})),await M(()=>A(U(n)).toEqual({radius:`full-rounded`})),await t.click(r.getByRole(`radio`,{name:`Dark`})),await M(()=>A([R(`theme-accent`),R(`theme-gray`),R(`theme-radius`),R(`theme-appearance`)]).toEqual([`rose`,`slate`,`full-rounded`,`dark`])),await t.click(i.getByRole(`radio`,{name:`Blue`})),await M(()=>A(U(n)).toEqual({accent:`blue`})),await M(()=>A(R(`theme-accent`)).toBeNull()),await t.click(r.getByRole(`button`,{name:`Reset`})),await M(()=>A(U(n)).toEqual({gray:`gray`,radius:`rounded`,appearance:`system`})),await M(()=>A(Vn()).toEqual([])),await A(a.getByRole(`radio`,{name:`Gray`})).toBeChecked(),await A(r.getByRole(`radio`,{name:`System`})).toBeChecked()}},W={play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e)),r=await H(e,t),i=r.getByRole(`combobox`,{name:`Font`}),a=r.getByRole(`combobox`,{name:`Scaling`});await A(i).toHaveTextContent(`System`),await A(a).toHaveTextContent(`100%`),await t.click(i);let o=await j.findByRole(`listbox`);await A(N(o).getAllByRole(`option`).map(e=>e.textContent)).toEqual([`System`,`Inter`,`Geist`,`Serif`,`Mono`]),await t.click(N(o).getByRole(`option`,{name:`Inter`})),await M(()=>A(U(n)).toEqual({font:`inter`})),await t.click(a),await t.click(await j.findByRole(`option`,{name:`110%`})),await M(()=>A(U(n)).toEqual({scaling:`110%`})),await M(()=>A([R(`theme-font`),R(`theme-scaling`)]).toEqual([`inter`,`110%`])),await t.click(r.getByRole(`button`,{name:`Reset`})),await M(()=>A(U(n)).toEqual({font:`system`,scaling:`100%`})),await M(()=>A(Vn()).toEqual([])),await A(i).toHaveTextContent(`System`)}},Un=[],Wn=(e=!1)=>()=>{let t=[];return Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{writeText:async n=>{if(e)throw new DOMException(`Write permission denied.`,`NotAllowedError`);t.push(n)}}}),Un=t,()=>{delete navigator.clipboard}},Gn={beforeEach:Wn(),play:async({canvas:e,userEvent:t})=>{let n=await H(e,t),r=n.getByRole(`button`,{name:`Copy code`}),i=n.getByRole(`status`);await t.click(r),await M(()=>A(Un).toEqual([`<Theme>`])),await A(i).toHaveTextContent(`Code copied`),await t.click(N(n.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})),await t.click(n.getByRole(`radio`,{name:`Full rounded`})),await t.click(r),await M(()=>A(Un.at(-1)).toBe(`<Theme accentColor="rose" radius="full-rounded">`)),await t.click(N(n.getByRole(`radiogroup`,{name:`Gray`})).getByRole(`radio`,{name:`Slate`})),await t.click(n.getByRole(`combobox`,{name:`Scaling`})),await t.click(await j.findByRole(`option`,{name:`90%`})),await t.click(n.getByRole(`radio`,{name:`Dark`})),await t.click(n.getByRole(`combobox`,{name:`Font`})),await t.click(await j.findByRole(`option`,{name:`Serif`})),await t.click(r),await M(()=>A(Un.at(-1)).toBe(`<Theme accentColor="rose" grayColor="slate" radius="full-rounded" scaling="90%" appearance="dark" tokens={{ 'font-sans': "ui-serif, Georgia, serif" }}>`))}},Kn={beforeEach:Wn(!0),play:async({canvas:e,userEvent:t})=>{let n=await H(e,t);await t.click(n.getByRole(`button`,{name:`Copy code`})),await M(()=>A(n.getByRole(`status`)).toHaveTextContent(/could not copy/i))}},qn={beforeEach:V({"theme-accent":`rose`,"theme-radius":`full-rounded`,"theme-gray":`foo`,"theme-font":`geist`,"theme-scaling":`90%`,appearance:`outlined`}),play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e));await M(()=>A(U(n)).toEqual({accent:`rose`,radius:`full-rounded`,font:`geist`,scaling:`90%`})),await A(z(e).getByRole(`combobox`,{name:`appearance`})).toHaveTextContent(`outlined`),await A(n.find(e=>e.type===`updateStoryArgs`)?.args[0]).toMatchObject({updatedArgs:{appearance:`outlined`}});let r=await H(e,t);await A(N(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})).toBeChecked(),await A(N(r.getByRole(`radiogroup`,{name:`Gray`})).getByRole(`radio`,{name:`Gray`})).toBeChecked(),await A(r.getByRole(`radio`,{name:`Full rounded`})).toBeChecked(),await A(r.getByRole(`combobox`,{name:`Font`})).toHaveTextContent(`Geist`),await A(r.getByRole(`combobox`,{name:`Scaling`})).toHaveTextContent(`90%`)}},G={play:async({canvas:e,userEvent:t})=>{let n=await jn(e,t);await t.click(n.getByRole(`link`,{name:/Badge/})),await I(e,`Badge`),e.queryByRole(`button`,{name:`Browse`})&&await t.keyboard(`{Escape}`);let r=await H(e,t);await t.click(N(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})),await t.keyboard(`{Escape}`),history.back(),await I(e,`Button`),await M(()=>A(R(`theme-accent`)).toBe(`rose`));let i=await H(e,t);await A(N(i.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})).toBeChecked()}},Jn={beforeEach:V({"theme-accent":`foo`}),play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e)),r=await H(e,t);await A(N(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Blue`})).toBeChecked(),await A(n.filter(e=>e.type===`updateGlobals`)).toEqual([])}},K={beforeEach:ae(!0),play:async({canvas:e})=>{await A(e.queryByRole(`button`,{name:`Dark`})).toBeNull(),await M(()=>A(document.documentElement).toHaveClass(`dark`)),ie(!1),await M(()=>A(document.documentElement).not.toHaveClass(`dark`))}},q={beforeEach:V({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{await I(e,`Button`),await A(L(e,`Specs`)).toHaveAttribute(`aria-selected`,`true`),await A(L(e,`Guideline`)).not.toHaveAttribute(`aria-disabled`,`true`),await A(e.queryByText(/not written for Button/)).toBeNull();let n=await jn(e,t);await t.click(n.getByRole(`link`,{name:/Tooltip/})),await I(e,`Tooltip`),await A(L(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`),await A(L(e,`Specs`)).toHaveAttribute(`aria-disabled`,`true`),await A(e.getByText(`Specs and Guideline are not written for Tooltip yet.`)).toBeVisible(),await A(R(`tab`)).toBe(`specs`)}},J=e=>e.findLast(e=>e.type===`playground/inspect`)?.args[0]?.request,Y={beforeEach:V({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e)),r=z(e);await M(()=>A(J(n)).toEqual({parts:[{name:`Container`,selector:`button`},{name:`Label`,selector:`button > span`}],tokens:[`--control-md`,`--focus-width`,`--primary-foreground`],highlight:null})),await A(r.getByRole(`table`,{name:`md`})).toBeVisible(),await A(r.getByRole(`table`,{name:`Every size`})).toBeVisible(),await A(r.queryByRole(`table`,{name:`sm`})).toBeNull(),await A(r.getByRole(`heading`,{name:`Anatomy`})).toBeVisible();let i=await F(e),a=JSON.stringify({key:`storybook-channel`,event:{type:`playground/inspected`,args:[{values:{"--control-md":{kind:`length`,text:`32px`}}}]}});window.dispatchEvent(new MessageEvent(`message`,{data:a,source:i.contentWindow}));let o=await r.findByRole(`row`,{name:/Height 32px --control-md/});await t.hover(o),await M(()=>A(J(n)?.highlight).toEqual({part:`Container`,property:`Height`,token:`--control-md`})),await t.unhover(o),await M(()=>A(J(n)?.highlight).toBeNull()),o.focus(),await M(()=>A(J(n)?.highlight?.property).toBe(`Height`)),o.blur(),await M(()=>A(J(n)?.highlight).toBeNull()),e.queryByRole(`button`,{name:`Browse`})&&await A(getComputedStyle(e.getByRole(`main`)).position).toBe(`sticky`),await A(r.getByRole(`row`,{name:/^Focus ring Width/})).toBeVisible(),await t.click(L(e,`Playground`)),await M(()=>A(J(n)).toBeNull())}},X={beforeEach:V({tab:`specs`,size:`sm`}),play:async({canvas:e})=>{let t=await B(await F(e)),n=z(e);await A(n.getByRole(`table`,{name:`sm`})).toBeVisible(),await A(n.queryByRole(`table`,{name:`md`})).toBeNull(),await M(()=>A(J(t)?.tokens).toEqual([`--control-sm`,`--focus-width`,`--primary-foreground`]))}},Z={beforeEach:V({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{let n=await B(await F(e)),r=z(e),i=N(r.getByRole(`radiogroup`,{name:`State`}));await A(i.getAllByRole(`radio`)).toHaveLength(4);for(let e of[`Default`,`Hover`,`Focus`,`Pressed`])await A(i.getByRole(`radio`,{name:e})).toBeVisible();await A(r.getByRole(`table`,{name:`primary`})).toBeVisible(),await A(r.queryByRole(`table`,{name:`secondary`})).toBeNull(),await A(r.queryByRole(`table`,{name:`Every variant`})).toBeNull(),await t.click(i.getByRole(`radio`,{name:`Hover`})),await M(()=>A(J(n)?.pseudo).toBe(`hover`)),await A(r.getByRole(`row`,{name:/Container, hover Background/})).toBeVisible(),await A(J(n)?.tokens).toContain(`--accent`),await t.click(i.getByRole(`radio`,{name:`Default`})),await M(()=>A(J(n)).not.toHaveProperty(`pseudo`))}},Q={beforeEach:V({tab:`guideline`}),play:async({canvas:e,userEvent:t})=>{await I(e,`Button`);let n=z(e);await A(n.getByRole(`heading`,{name:`When to use`})).toBeVisible(),await A(n.getByText(`save`,{selector:`code`})).toBeVisible(),await A(n.getByText(`delete`,{selector:`strong`})).toBeVisible(),await A(n.getAllByRole(`listitem`).map(e=>e.textContent)).toEqual([`One primary per view`,`The rest step down`]),await A(n.getByText(`Not for going to another page.`)).toBeVisible(),await A(n.getByRole(`heading`,{name:`Accessibility`})).toBeVisible(),await A(n.getByRole(`link`,{name:`The full docs page`})).toHaveAttribute(`href`,`/playground-fixture/?path=/docs/${P.id}--docs&docTab=guidelines`);let r=await B(await F(e));await t.click(L(e,`Playground`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await M(()=>A(r.at(-1)?.type).toBe(`updateStoryArgs`)),await t.click(L(e,`Guideline`));let i=n.getByRole(`button`,{name:/^Do One primary button/});await t.click(i),await M(async()=>A((await F(e)).getAttribute(`src`)).toContain(`id=components-buttons-button--do-one`)),await A(i).toHaveAttribute(`aria-pressed`,`true`),await A(N(e.getByRole(`main`)).getByText(`Do`)).toBeVisible(),await A(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/components-buttons-button--do-one`),await t.click(e.getByRole(`button`,{name:`Back to Button`})),await M(async()=>A((await F(e)).getAttribute(`src`)).toContain(`id=${P.storyId}`)),await A(e.queryByRole(`button`,{name:`Back to Button`})).toBeNull(),await M(()=>A(R(`isLoading`)).toBe(`true`)),await A(z(e).queryByRole(`switch`,{name:`isLoading`})).toBeNull(),await t.click(n.getByRole(`button`,{name:/^Don't Two primaries/})),await M(async()=>A((await F(e)).getAttribute(`src`)).toContain(`id=components-buttons-button--dont-two`)),await t.click(L(e,`Playground`)),await M(async()=>A((await F(e)).getAttribute(`src`)).toContain(`id=${P.storyId}`))}},$={beforeEach:V({item:`patterns-application-ui-app-shell`,tab:`guideline`}),play:async({canvas:e})=>{await I(e,`App Shell`),await A(L(e,`Guideline`)).toHaveAttribute(`aria-selected`,`true`),await A(L(e,`Specs`)).toHaveAttribute(`aria-disabled`,`true`),await A(e.getByText(`Specs is not written for App Shell yet.`)).toBeVisible();let t=z(e);await A(t.getByText(`The frame around an app.`)).toBeVisible(),await A(t.getByRole(`heading`,{name:`Layout`})).toBeVisible(),await A(t.queryByRole(`heading`,{name:`When to use`})).toBeNull()}},Yn=[`Default`,`Grouped`,`Props`,`FromUrl`,`UnknownInUrl`,`Keyboard`,`PreviewTheme`,`ThemeColorRadius`,`ThemeTypo`,`ThemeCopyCode`,`ThemeCopyBlocked`,`ThemeFromUrl`,`ThemeSurvivesBack`,`ThemeUnknownInUrl`,`FollowsOs`,`DetailTabs`,`SpecsTab`,`SpecsFollowSize`,`SpecsStates`,`GuidelineTab`,`PatternGuideline`],Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    // No item in the URL: Button, on the Playground tab.
    await showing(canvas, 'Button');
    const iframe = await frame(canvas);
    await expect(iframe.getAttribute('src')).toContain(\`id=\${button.storyId}\`);
    await fillsCenter(canvas);
    await waitFor(() => expect(canvas.queryByRole('status', {
      name: /Loading/
    })).toBeNull());

    // No device to pick, and no browser chrome around the page.
    await expect(canvas.queryByRole('tablist', {
      name: 'Viewport'
    })).toBeNull();
    await expect(canvas.queryByRole('textbox', {
      name: 'Address'
    })).toBeNull();
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
    // The toolbar names the item; its Storybook page is one icon button away.
    await expect(canvas.getByRole('heading', {
      name: 'Button',
      level: 2
    })).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/story/\${button.storyId}\`);
    let items = await openItems(canvas, userEvent);
    await expect(items.getByRole('link', {
      name: /Button/
    })).toHaveAttribute('aria-current', 'true');
    await expect(items.getByRole('heading', {
      name: 'Components'
    })).toBeVisible();
    await expect(items.getByRole('heading', {
      name: 'Patterns'
    })).toBeVisible();
    await expect(items.queryByRole('heading', {
      name: 'Templates'
    })).toBeNull();

    // Search hides cards, and a group left empty goes with them.
    const search = items.getByRole('searchbox', {
      name: 'Search by name'
    });
    await userEvent.type(search, 'bad');
    await expect(items.getAllByRole('link')).toHaveLength(1);
    await expect(items.getByRole('link', {
      name: /Badge/
    })).toBeVisible();
    await expect(items.queryByRole('heading', {
      name: 'Patterns'
    })).toBeNull();
    await userEvent.type(search, 'xyz');
    await expect(items.getByRole('heading', {
      name: 'Nothing matches'
    })).toBeVisible();
    await userEvent.click(items.getByRole('button', {
      name: 'Clear search and filters'
    }));
    await expect(items.getAllByRole('link')).toHaveLength(4);

    // Status filter: only the experimental ones.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Status'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'experimental'
    }));
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(2));
    await expect(items.queryByRole('link', {
      name: /Button/
    })).toBeNull();
    await expect(items.getByRole('status')).toHaveTextContent('2 items');

    // Category filter on top: Overlays leaves Tooltip alone.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Category'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Overlays'
    }));
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(1));
    await expect(items.queryByRole('heading', {
      name: 'Patterns'
    })).toBeNull();

    // Picking a card shows it live and writes it to the URL.
    await userEvent.click(items.getByRole('link', {
      name: /Tooltip/
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${tooltip.storyId}\`));
    await showing(canvas, 'Tooltip');
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/story/\${tooltip.storyId}\`);
    await waitFor(() => expect(param('item')).toBe(tooltip.id));
    // Tooltip has no props: the column stays and says so.
    await expect(propsPanel(canvas).getByText('Tooltip has no props to change here.')).toBeVisible();

    // The filters survive closing and reopening the drawer.
    items = await openItems(canvas, userEvent);
    await expect(items.getByRole('link', {
      name: /Tooltip/
    })).toHaveAttribute('aria-current', 'true');
    await expect(items.getAllByRole('link')).toHaveLength(1);
    await userEvent.keyboard('{Escape}');

    // Back steps to the entry before Tooltip: Button, as the page opened.
    history.back();
    await showing(canvas, 'Button');
    await fillsCenter(canvas);
  }
}`,...Pn.parameters?.docs?.source}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const items = await openItems(canvas, userEvent);
    const section = (name: string) => items.getByRole('button', {
      name
    });

    // Each kind is cut into its Categories, all open at first.
    for (const name of ['Atomic Elements', 'Buttons', 'Overlays', 'Application UI']) await expect(section(name)).toHaveAttribute('aria-expanded', 'true');
    // The card has name and status; the section header carries the Category.
    const badgeCard = items.getByRole('link', {
      name: /Badge/
    });
    await expect(badgeCard).toHaveTextContent(/^Badgebeta$/);

    // The mouse folds a section and the keyboard opens it again.
    await userEvent.click(section('Buttons'));
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Button/,
      hidden: true
    })).not.toBeVisible());
    section('Buttons').focus();
    await userEvent.keyboard('{Enter}');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Button/
    })).toBeVisible());
    await userEvent.keyboard(' ');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');

    // A search opens the folded section that holds a match and hides the empty ones.
    await userEvent.click(section('Atomic Elements'));
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false');
    await userEvent.type(items.getByRole('searchbox', {
      name: 'Search by name'
    }), 'b');
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'true');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Badge/
    })).toBeVisible());
    await expect(items.queryByRole('button', {
      name: 'Overlays'
    })).toBeNull();
    await expect(items.queryByRole('button', {
      name: 'Application UI'
    })).toBeNull();

    // Clearing the search brings back the folds from before it.
    await userEvent.clear(items.getByRole('searchbox', {
      name: 'Search by name'
    }));
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');
    await expect(section('Overlays')).toHaveAttribute('aria-expanded', 'true');

    // A filter does the same: only the matching section, open.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Category'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Buttons'
    }));
    await waitFor(() => expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true'));
    await expect(items.queryByRole('button', {
      name: 'Atomic Elements'
    })).toBeNull();
    await expect(items.queryByRole('button', {
      name: 'Overlays'
    })).toBeNull();
    // The closing listbox stays in the DOM, unnamed, while it animates out;
    // the a11y check after the play function must not catch it (WebKit did).
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...Fn.parameters?.docs?.source}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const panel = propsPanel(canvas);
    const iframe = await frame(canvas);
    const src = iframe.getAttribute('src');
    const received = await fakePreview(iframe);
    const last = () => received.at(-1);
    const update = (updatedArgs: object) => ({
      type: 'updateStoryArgs',
      args: [{
        storyId: button.storyId,
        updatedArgs
      }]
    });

    // Controls start at the defaults.
    await expect(panel.getByRole('combobox', {
      name: 'variant'
    })).toHaveTextContent('primary');
    await expect(panel.getByRole('switch', {
      name: 'isLoading'
    })).not.toBeChecked();
    await expect(panel.getByRole('textbox', {
      name: 'children'
    })).toHaveValue('Button');

    // Each control sends its change into the frame and writes it to the URL.
    await userEvent.click(panel.getByRole('combobox', {
      name: 'variant'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'secondary'
    }));
    await waitFor(() => expect(last()).toEqual(update({
      variant: 'secondary'
    })));
    await waitFor(() => expect(param('variant')).toBe('secondary'));
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(last()).toEqual(update({
      isLoading: true
    })));
    await waitFor(() => expect(param('isLoading')).toBe('true'));
    const text = panel.getByRole('textbox', {
      name: 'children'
    });
    await userEvent.clear(text);
    await userEvent.type(text, 'Save it!');
    await waitFor(() => expect(last()).toEqual(update({
      children: 'Save it!'
    })));
    await waitFor(() => expect(param('children')).toBe('Save it!'));

    // Back to its default, a prop is reset in the frame and leaves the URL.
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(last()).toEqual({
      type: 'resetStoryArgs',
      args: [{
        storyId: button.storyId,
        argNames: ['isLoading']
      }]
    }));
    await waitFor(() => expect(param('isLoading')).toBeNull());

    // Reset puts everything back.
    await userEvent.click(panel.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(last()).toEqual({
      type: 'resetStoryArgs',
      args: [{
        storyId: button.storyId,
        argNames: ['variant', 'children']
      }]
    }));
    await waitFor(() => expect(param('variant')).toBeNull());
    await waitFor(() => expect(param('children')).toBeNull());
    await expect(panel.getByRole('combobox', {
      name: 'variant'
    })).toHaveTextContent('primary');
    await expect(panel.getByRole('textbox', {
      name: 'children'
    })).toHaveValue('Button');

    // None of it reloaded the frame.
    await expect((await frame(canvas)).getAttribute('src')).toBe(src);
  }
}`,...In.parameters?.docs?.source}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: badge.id,
    count: '3',
    isDot: 'true',
    gone: 'x'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Badge');
    const iframe = await frame(canvas);
    await expect(iframe.getAttribute('src')).toContain(\`id=\${badge.storyId}\`);

    // The shared props fill the panel and go into the frame once it has rendered; the unknown one is ignored.
    const panel = propsPanel(canvas);
    const count = panel.getByRole('textbox', {
      name: 'count'
    });
    await expect(count).toHaveValue('3');
    await expect(panel.getByRole('switch', {
      name: 'isDot'
    })).toBeChecked();
    const received = await fakePreview(iframe);
    await waitFor(() => expect(received).toEqual([{
      type: 'updateStoryArgs',
      args: [{
        storyId: badge.storyId,
        updatedArgs: {
          count: 3,
          isDot: true
        }
      }]
    }]));

    // The number control: only the change goes into the frame.
    await userEvent.clear(count);
    await userEvent.type(count, '12');
    await userEvent.tab();
    await waitFor(() => expect(received.at(-1)).toEqual({
      type: 'updateStoryArgs',
      args: [{
        storyId: badge.storyId,
        updatedArgs: {
          count: 12
        }
      }]
    }));
    await waitFor(() => expect(param('count')).toBe('12'));
  }
}`,...Ln.parameters?.docs?.source}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: 'components-gone-widget',
    tab: 'nope'
  }),
  play: async ({
    canvas
  }) => {
    await showing(canvas, 'Button');
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
  }
}`,...Rn.parameters?.docs?.source}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    // Everything is reachable with Tab, and a card opens with Enter.
    const browse = canvas.queryByRole('button', {
      name: 'Browse'
    });
    if (browse) {
      browse.focus();
      await userEvent.keyboard('{Enter}');
      await screen.findByRole('dialog', {
        name: 'Items'
      });
    }
    const items = within(browse ? screen.getByRole('dialog') : canvas.getByRole('navigation', {
      name: 'Items'
    }));
    const target = items.getByRole('link', {
      name: /Badge/
    });
    for (let i = 0; i < 20 && document.activeElement !== target; i++) await userEvent.tab();
    await expect(target).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await showing(canvas, 'Badge');
  }
}`,...zn.parameters?.docs?.source}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
  beforeEach: withPrefersDark(false),
  play: async ({
    canvas,
    userEvent
  }) => {
    const panel = propsPanel(canvas);
    const iframe = await frame(canvas);
    const src = iframe.getAttribute('src');
    const received = await fakePreview(iframe);
    // The frame starts on the default, System, without a message.
    await expect(src).toContain('globals=appearance%3Asystem');

    // A prop changed before the theme stays changed after it.
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'));
    const trigger = canvas.getByRole('button', {
      name: 'Theme'
    });
    await userEvent.click(trigger);
    const dialog = within(await screen.findByRole('dialog', {
      name: 'Preview theme'
    }));
    await expect(dialog.getByRole('radio', {
      name: 'System'
    })).toBeChecked();
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await waitFor(() => expect(received.at(-1)).toEqual({
      type: 'updateGlobals',
      args: [{
        globals: {
          appearance: 'dark'
        }
      }]
    }));
    await expect(received.filter(e => e.type === 'updateStoryArgs')).toHaveLength(1);
    await expect((await frame(canvas)).getAttribute('src')).toBe(src);
    // The page itself stays on the OS appearance.
    await expect(document.documentElement).not.toHaveClass('dark');

    // Escape closes it and gives focus back to the Theme button.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog', {
      name: 'Preview theme'
    })).toBeNull());
    await expect(trigger).toHaveFocus();
    await expect(panel.getByRole('switch', {
      name: 'isLoading'
    })).toBeChecked();

    // Opening it moves focus inside (the modal trap itself is Base UI's, and a
    // synthetic Tab cannot exercise it: see Popover.stories). Left open for the a11y check.
    await userEvent.click(trigger);
    const popup = await screen.findByRole('dialog', {
      name: 'Preview theme'
    });
    await waitFor(() => expect(popup.contains(document.activeElement)).toBe(true));
    await expect(within(popup).getByRole('radio', {
      name: 'Dark'
    })).toBeChecked();
  }
}`,...Bn.parameters?.docs?.source}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    const accent = within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    }));
    const gray = within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    }));
    // Every hue and ramp of the kit, each named; the defaults chosen.
    await expect(accent.getAllByRole('radio')).toHaveLength(17);
    await expect(gray.getAllByRole('radio')).toHaveLength(9);
    await expect(accent.getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    await expect(gray.getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'Rounded'
    })).toBeChecked();
    await userEvent.click(accent.getByRole('radio', {
      name: 'Rose'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'rose'
    }));
    await userEvent.click(gray.getByRole('radio', {
      name: 'Slate'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      gray: 'slate'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Full rounded'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      radius: 'full-rounded'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await waitFor(() => expect([param('theme-accent'), param('theme-gray'), param('theme-radius'), param('theme-appearance')]).toEqual(['rose', 'slate', 'full-rounded', 'dark']));

    // Back to the default: the param goes.
    await userEvent.click(accent.getByRole('radio', {
      name: 'Blue'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'blue'
    }));
    await waitFor(() => expect(param('theme-accent')).toBeNull());

    // Reset puts every option back and empties the URL of them.
    await userEvent.click(dialog.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      gray: 'gray',
      radius: 'rounded',
      appearance: 'system'
    }));
    await waitFor(() => expect(themeParams()).toEqual([]));
    await expect(gray.getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'System'
    })).toBeChecked();
  }
}`,...Hn.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    const font = dialog.getByRole('combobox', {
      name: 'Font'
    });
    const scaling = dialog.getByRole('combobox', {
      name: 'Scaling'
    });
    await expect(font).toHaveTextContent('System');
    await expect(scaling).toHaveTextContent('100%');
    await userEvent.click(font);
    const fonts = await screen.findByRole('listbox');
    await expect(within(fonts).getAllByRole('option').map(o => o.textContent)).toEqual(['System', 'Inter', 'Geist', 'Serif', 'Mono']);
    await userEvent.click(within(fonts).getByRole('option', {
      name: 'Inter'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      font: 'inter'
    }));
    await userEvent.click(scaling);
    await userEvent.click(await screen.findByRole('option', {
      name: '110%'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      scaling: '110%'
    }));
    await waitFor(() => expect([param('theme-font'), param('theme-scaling')]).toEqual(['inter', '110%']));

    // Reset covers Typo too.
    await userEvent.click(dialog.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      font: 'system',
      scaling: '100%'
    }));
    await waitFor(() => expect(themeParams()).toEqual([]));
    await expect(font).toHaveTextContent('System');
  }
}`,...W.parameters?.docs?.source}}},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`{
  beforeEach: withClipboard(),
  play: async ({
    canvas,
    userEvent
  }) => {
    const dialog = await openTheme(canvas, userEvent);
    const copy = dialog.getByRole('button', {
      name: 'Copy code'
    });
    const status = dialog.getByRole('status');
    // Nothing changed: a bare <Theme>.
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard).toEqual(['<Theme>']));
    await expect(status).toHaveTextContent('Code copied');

    // Only what differs from the defaults, the font as a token.
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Full rounded'
    }));
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" radius="full-rounded">'));
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    })).getByRole('radio', {
      name: 'Slate'
    }));
    await userEvent.click(dialog.getByRole('combobox', {
      name: 'Scaling'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: '90%'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await userEvent.click(dialog.getByRole('combobox', {
      name: 'Font'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Serif'
    }));
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" grayColor="slate" radius="full-rounded" scaling="90%" appearance="dark" tokens={{ \\'font-sans\\': "ui-serif, Georgia, serif" }}>'));
  }
}`,...Gn.parameters?.docs?.source}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`{
  beforeEach: withClipboard(true),
  play: async ({
    canvas,
    userEvent
  }) => {
    const dialog = await openTheme(canvas, userEvent);
    await userEvent.click(dialog.getByRole('button', {
      name: 'Copy code'
    }));
    await waitFor(() => expect(dialog.getByRole('status')).toHaveTextContent(/could not copy/i));
  }
}`,...Kn.parameters?.docs?.source}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    'theme-accent': 'rose',
    'theme-radius': 'full-rounded',
    'theme-gray': 'foo',
    'theme-font': 'geist',
    'theme-scaling': '90%',
    appearance: 'outlined'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    // Only what differs from the frame's start goes over; the unknown gray is dropped.
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'rose',
      radius: 'full-rounded',
      font: 'geist',
      scaling: '90%'
    }));
    // Button's own appearance prop is untouched by the theme's.
    await expect(propsPanel(canvas).getByRole('combobox', {
      name: 'appearance'
    })).toHaveTextContent('outlined');
    await expect(received.find(e => e.type === 'updateStoryArgs')?.args[0]).toMatchObject({
      updatedArgs: {
        appearance: 'outlined'
      }
    });
    const dialog = await openTheme(canvas, userEvent);
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    })).toBeChecked();
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    })).getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'Full rounded'
    })).toBeChecked();
    await expect(dialog.getByRole('combobox', {
      name: 'Font'
    })).toHaveTextContent('Geist');
    await expect(dialog.getByRole('combobox', {
      name: 'Scaling'
    })).toHaveTextContent('90%');
  }
}`,...qn.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const items = await openItems(canvas, userEvent);
    await userEvent.click(items.getByRole('link', {
      name: /Badge/
    }));
    await showing(canvas, 'Badge');
    if (canvas.queryByRole('button', {
      name: 'Browse'
    })) await userEvent.keyboard('{Escape}');
    const dialog = await openTheme(canvas, userEvent);
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    }));
    await userEvent.keyboard('{Escape}');
    history.back();
    await showing(canvas, 'Button');
    await waitFor(() => expect(param('theme-accent')).toBe('rose'));
    const again = await openTheme(canvas, userEvent);
    await expect(within(again.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    })).toBeChecked();
  }
}`,...G.parameters?.docs?.source},description:{story:`The Preview theme belongs to the page: Back changes the item, not the theme.`,...G.parameters?.docs?.description}}},Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    'theme-accent': 'foo'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    await expect(received.filter(e => e.type === 'updateGlobals')).toEqual([]);
  }
}`,...Jn.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  beforeEach: withPrefersDark(true),
  play: async ({
    canvas
  }) => {
    // No Dark button: the page follows the OS, and the Preview theme is apart.
    await expect(canvas.queryByRole('button', {
      name: 'Dark'
    })).toBeNull();
    await waitFor(() => expect(document.documentElement).toHaveClass('dark'));
    // And keeps following it when the OS setting changes.
    setPrefersDark(false);
    await waitFor(() => expect(document.documentElement).not.toHaveClass('dark'));
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Button');
    // Button has Specs: the URL's tab opens.
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Guideline')).not.toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.queryByText(/not written for Button/)).toBeNull();

    // Tooltip has neither: Playground shows, and the wanted tab stays in the URL for the next item.
    const items = await openItems(canvas, userEvent);
    await userEvent.click(items.getByRole('link', {
      name: /Tooltip/
    }));
    await showing(canvas, 'Tooltip');
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText('Specs and Guideline are not written for Tooltip yet.')).toBeVisible();
    await expect(param('tab')).toBe('specs');
  }
}`,...q.parameters?.docs?.source},description:{story:"The right column's tabs. An item without Specs or Guideline has them\ndisabled, says so, and a `?tab=` it lacks shows Playground.",...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    await waitFor(() => expect(lastInspect(received)).toEqual({
      parts: [{
        name: 'Container',
        selector: 'button'
      }, {
        name: 'Label',
        selector: 'button > span'
      }],
      tokens: ['--control-md', '--focus-width', '--primary-foreground'],
      highlight: null
    }));
    // The md table and the one for every size; sm is not the current size.
    await expect(panel.getByRole('table', {
      name: 'md'
    })).toBeVisible();
    await expect(panel.getByRole('table', {
      name: 'Every size'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'sm'
    })).toBeNull();
    await expect(panel.getByRole('heading', {
      name: 'Anatomy'
    })).toBeVisible();

    // The frame's answer fills the value column.
    const iframe = await frame(canvas);
    const data = JSON.stringify({
      key: 'storybook-channel',
      event: {
        type: 'playground/inspected',
        args: [{
          values: {
            '--control-md': {
              kind: 'length',
              text: '32px'
            }
          }
        }]
      }
    });
    window.dispatchEvent(new MessageEvent('message', {
      data,
      source: iframe.contentWindow
    }));
    const row = await panel.findByRole('row', {
      name: /Height 32px --control-md/
    });

    // Hover asks for that row's redline, on its anatomy part; leaving clears it.
    await userEvent.hover(row);
    await waitFor(() => expect(lastInspect(received)?.highlight).toEqual({
      part: 'Container',
      property: 'Height',
      token: '--control-md'
    }));
    await userEvent.unhover(row);
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull());
    // A tap (or Tab) focuses the row, which asks for the redline the same way.
    row.focus();
    await waitFor(() => expect(lastInspect(received)?.highlight?.property).toBe('Height'));
    row.blur();
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull());
    // Under 1024 the details sit below the live view, which sticks at the top so the redline stays in sight.
    if (canvas.queryByRole('button', {
      name: 'Browse'
    })) await expect(getComputedStyle(canvas.getByRole('main')).position).toBe('sticky');
    // A row whose part has no element in the anatomy (Focus ring) is still listed, unnumbered.
    await expect(panel.getByRole('row', {
      name: /^Focus ring Width/
    })).toBeVisible();

    // Back on Playground, the frame is told to stop drawing.
    await userEvent.click(detailTab(canvas, 'Playground'));
    await waitFor(() => expect(lastInspect(received)).toBeNull());
  }
}`,...Y.parameters?.docs?.source},description:{story:`Specs asks the frame to number the parts and resolve the tokens of the
tables it shows: the current size's, plus those for every size. The frame
answers with the values; hovering a row asks for its redline.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs',
    size: 'sm'
  }),
  play: async ({
    canvas
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    await expect(panel.getByRole('table', {
      name: 'sm'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'md'
    })).toBeNull();
    await waitFor(() => expect(lastInspect(received)?.tokens).toEqual(['--control-sm', '--focus-width', '--primary-foreground']));
  }
}`,...X.parameters?.docs?.source},description:{story:`The size picked on Playground is the size Specs measures.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    const picker = within(panel.getByRole('radiogroup', {
      name: 'State'
    }));
    // focus and focus-visible are one Focus; Pressed for an interactive item even if its page does not force it; no disabled prop, so no Disabled.
    await expect(picker.getAllByRole('radio')).toHaveLength(4);
    for (const name of ['Default', 'Hover', 'Focus', 'Pressed']) await expect(picker.getByRole('radio', {
      name
    })).toBeVisible();
    await expect(panel.getByRole('table', {
      name: 'primary'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'secondary'
    })).toBeNull();
    // The hover row's table is empty by default, so it is not shown.
    await expect(panel.queryByRole('table', {
      name: 'Every variant'
    })).toBeNull();
    await userEvent.click(picker.getByRole('radio', {
      name: 'Hover'
    }));
    await waitFor(() => expect(lastInspect(received)?.pseudo).toBe('hover'));
    await expect(panel.getByRole('row', {
      name: /Container, hover Background/
    })).toBeVisible();
    await expect(lastInspect(received)?.tokens).toContain('--accent');
    await userEvent.click(picker.getByRole('radio', {
      name: 'Default'
    }));
    await waitFor(() => expect(lastInspect(received)).not.toHaveProperty('pseudo'));
  }
}`,...Z.parameters?.docs?.source},description:{story:`The State picker forces a pseudo-class on the live item, and the Color
rows that name a state show only in it. Tables follow the variant as they
follow the size.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'guideline'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Button');
    const panel = propsPanel(canvas);
    await expect(panel.getByRole('heading', {
      name: 'When to use'
    })).toBeVisible();
    // Inline markdown: code and bold become elements, a link keeps its words.
    await expect(panel.getByText('save', {
      selector: 'code'
    })).toBeVisible();
    await expect(panel.getByText('delete', {
      selector: 'strong'
    })).toBeVisible();
    await expect(panel.getAllByRole('listitem').map(li => li.textContent)).toEqual(['One primary per view', 'The rest step down']);
    await expect(panel.getByText('Not for going to another page.')).toBeVisible();
    await expect(panel.getByRole('heading', {
      name: 'Accessibility'
    })).toBeVisible();
    await expect(panel.getByRole('link', {
      name: 'The full docs page'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/docs/\${button.id}--docs&docTab=guidelines\`);
    const received = await fakePreview(await frame(canvas));
    await userEvent.click(detailTab(canvas, 'Playground'));
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'));
    await userEvent.click(detailTab(canvas, 'Guideline'));

    // The Do example takes the live view; the item's props do not go to it.
    const doButton = panel.getByRole('button', {
      name: /^Do One primary button/
    });
    await userEvent.click(doButton);
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--do-one'));
    await expect(doButton).toHaveAttribute('aria-pressed', 'true');
    await expect(within(canvas.getByRole('main')).getByText('Do')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', '/playground-fixture/?path=/story/components-buttons-button--do-one');

    // Back shows the item again, its props kept.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back to Button'
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${button.storyId}\`));
    await expect(canvas.queryByRole('button', {
      name: 'Back to Button'
    })).toBeNull();
    await waitFor(() => expect(param('isLoading')).toBe('true'));
    await expect(propsPanel(canvas).queryByRole('switch', {
      name: 'isLoading'
    })).toBeNull();

    // Another tab ends the example too.
    await userEvent.click(panel.getByRole('button', {
      name: /^Don't Two primaries/
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--dont-two'));
    await userEvent.click(detailTab(canvas, 'Playground'));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${button.storyId}\`));
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guideline: when to use and when not, then the Do/Don't pairs. Picking one
shows its story in the live view, says which in the toolbar, and leads back.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: 'patterns-application-ui-app-shell',
    tab: 'guideline'
  }),
  play: async ({
    canvas
  }) => {
    await showing(canvas, 'App Shell');
    await expect(detailTab(canvas, 'Guideline')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText('Specs is not written for App Shell yet.')).toBeVisible();
    const panel = propsPanel(canvas);
    await expect(panel.getByText('The frame around an app.')).toBeVisible();
    await expect(panel.getByRole('heading', {
      name: 'Layout'
    })).toBeVisible();
    await expect(panel.queryByRole('heading', {
      name: 'When to use'
    })).toBeNull();
  }
}`,...$.parameters?.docs?.source},description:{story:`A pattern: no Specs, and a Guideline made of its page's opening prose and sections.`,...$.parameters?.docs?.description}}}})))()}Xn();export{Pn as Default,q as DetailTabs,K as FollowsOs,Ln as FromUrl,Fn as Grouped,Q as GuidelineTab,zn as Keyboard,$ as PatternGuideline,Bn as PreviewTheme,In as Props,X as SpecsFollowSize,Z as SpecsStates,Y as SpecsTab,Hn as ThemeColorRadius,Kn as ThemeCopyBlocked,Gn as ThemeCopyCode,qn as ThemeFromUrl,G as ThemeSurvivesBack,W as ThemeTypo,Jn as ThemeUnknownInUrl,Rn as UnknownInUrl,Yn as __namedExportsOrder,Nn as default};