import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,n as o,t as s}from"./useRenderElement-euNwqn97.js";import{n as c,t as l}from"./utils-CUvRSo4U.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{n as d,t as f}from"./useIsoLayoutEffect-BLzSB4yc.js";import{n as p,t as m}from"./Button-Bwi4V5f1.js";import{h}from"./createBaseUIEventDetails-DBMJcLG-.js";import{n as g,t as _}from"./useBaseUiId-1qKEMtl3.js";import{n as v,t as y}from"./icon-C9aTyDDd.js";import{n as b,t as ee}from"./expectAnatomy-C52ByQ6s.js";import{n as x,t as te}from"./Pictured-DOIgaTd2.js";import{r as ne,s as re}from"./resolveValueLabel-DJD8cNKe.js";import{n as ie,t as S}from"./Kbd-DUFr_I3T.js";import{A as ae,F as oe,M as se,R as ce,_ as le,d as ue,f as de,g as fe,h as pe,i as me,j as he,k as ge,l as _e,m as ve,n as ye,p as be,r as xe,t as Se,u as Ce,v as we}from"./ComboboxEmpty-1-0sC-_U.js";import{c as Te,i as Ee,n as De,r as Oe,s as ke,t as Ae}from"./DialogTrigger-CMfx2vci.js";import{a as je,i as Me,n as Ne,o as Pe,r as Fe,t as Ie}from"./DialogRoot-BMwDoOib.js";function Le(){let e=C.useContext(w);if(e===void 0)throw Error(a(18));return e}var C,w;function T(){return(T=t((()=>{i(),C=e(r(),1),w=C.createContext(void 0)})))()}var E,D,Re;function ze(){return(ze=t((()=>{E=e(r(),1),s(),T(),ve(),oe(),D=u(),Re=E.forwardRef(function(e,t){let{render:n,className:r,style:i,items:a,...s}=e,c=ce().useState(`grid`),[l,u]=E.useState(),d=E.useMemo(()=>({labelId:l,setLabelId:u,items:a}),[l,u,a]),f=o(`div`,e,{ref:t,props:[{role:c?`rowgroup`:`group`,"aria-labelledby":l},s]}),p=(0,D.jsx)(w.Provider,{value:d,children:f});return a?(0,D.jsx)(be,{items:a,children:p}):p})})))()}var Be,Ve;function He(){return(He=t((()=>{Be=e(r(),1),f(),_(),T(),s(),Ve=Be.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...s}=e,{setLabelId:c}=Le(),l=g(a);return d(()=>(c(l),()=>{c(e=>e===l?void 0:e)}),[l,c]),o(`div`,e,{ref:t,props:[{id:l,"aria-hidden":!0},s]})})})))()}function Ue(e){let{openOnInputClick:t=!1,value:n,defaultValue:r,onValueChange:i,mode:a=`list`,itemToStringValue:o,...s}=e,c=(a===`inline`||a===`both`)&&!e.readOnly,l=a===`inline`||a===`none`,u=n!==void 0,[d,f]=O.useState(r??``),[p,m]=O.useState(``);O.useEffect(()=>{(u||!c)&&m(``)},[n,u,c]);let h;h=c&&p!==``?p:u?n??``:d;let g=se({locale:s.locale}),_=String((u?n:d)??``).trim(),v=l||s.filter===null?null:s.filter??g.contains;function y(e,t){m(``),u||f(e),i?.(e,t)}function b(t,n){e.onItemHighlighted?.(t,n),n.reason!==`pointer`&&m(c&&t!=null?re(t,o):``)}return(0,We.jsx)(ge,{...s,itemToStringLabel:o,openOnInputClick:t,selectionMode:`none`,fillInputOnItemPress:!0,filter:v,filterQuery:a===`both`?_:void 0,autoComplete:a,inputValue:h,defaultInputValue:r,onInputValueChange:y,onItemHighlighted:b})}var O,We;function Ge(){return(Ge=t((()=>{O=e(r(),1),ae(),he(),ne(),h(),We=u()})))()}var Ke;function qe(){return(qe=t((()=>{fe(),Ke=pe})))()}var Je;function Ye(){return(Ye=t((()=>{me(),Je=xe})))()}var Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,k;function pt(){return(pt=t((()=>{Xe=`_backdrop_p7h3x_2`,Ze=`_viewport_p7h3x_16`,Qe=`_popup_p7h3x_28`,$e=`_search_p7h3x_59`,et=`_searchIcon_p7h3x_70`,tt=`_input_p7h3x_76`,nt=`_results_p7h3x_95`,rt=`_list_p7h3x_104`,it=`_group_p7h3x_111`,at=`_groupLabel_p7h3x_116`,ot=`_item_p7h3x_125`,st=`_icon_p7h3x_145`,ct=`_label_p7h3x_158`,lt=`_empty_p7h3x_166`,ut=`_footer_p7h3x_176`,dt=`_hint_p7h3x_189`,ft=`_visuallyHidden_p7h3x_195`,k={backdrop:Xe,viewport:Ze,popup:Qe,search:$e,searchIcon:et,input:tt,results:nt,list:rt,group:it,groupLabel:at,item:ot,icon:st,label:ct,empty:lt,footer:ut,hint:dt,visuallyHidden:ft}})))()}function A({groups:e,trigger:t,hotkey:n=`k`,onSelect:r,placeholder:i=`Search commands…`,inputLabel:a=`Search commands`,emptyText:o=`No results`,label:s=`Command palette`,open:c,defaultOpen:u=!1,onOpenChange:d,isModal:f=!0,container:p,className:m}){let[h,g]=(0,j.useState)(u),_=c??h,v=e=>{c===void 0&&g(e),d?.(e)},b=(0,j.useId)(),{contains:ee}=se({sensitivity:`base`});(0,j.useEffect)(()=>{if(!n)return;let e=e=>{e.repeat||e.isComposing||(e.metaKey||e.ctrlKey)&&!e.altKey&&!e.shiftKey&&e.key.toLowerCase()===n.toLowerCase()&&(e.preventDefault(),v(!_))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)});let x=(0,j.useRef)(null),te=e=>{x.current=e,v(!1)};return(0,M.jsxs)(Ie,{open:_,onOpenChange:v,onOpenChangeComplete:e=>{let t=x.current;!e&&t&&(x.current=null,t.onSelect?.(),r?.(t))},modal:f,children:[t&&(0,M.jsx)(Ae,{render:t}),(0,M.jsxs)(ke,{container:p,children:[(0,M.jsx)(je,{className:k.backdrop}),(0,M.jsx)(Oe,{className:k.viewport,children:(0,M.jsx)(Fe,{className:l(k.popup,m),"aria-label":s,children:(0,M.jsxs)(Ue,{items:e,itemToStringValue:e=>e.label,filter:(e,t)=>[e.label,...e.keywords??[]].some(e=>ee(e,t)),open:!0,inline:!0,autoHighlight:`always`,keepHighlight:!0,children:[(0,M.jsxs)(Ke,{className:k.search,children:[(0,M.jsx)(y,{name:`search`,className:k.searchIcon}),(0,M.jsx)(le,{className:k.input,placeholder:i,"aria-label":a,"aria-describedby":b})]}),(0,M.jsxs)(`div`,{className:k.results,children:[(0,M.jsx)(Se,{className:k.empty,children:o}),(0,M.jsx)(_e,{className:k.list,children:e=>(0,M.jsxs)(Re,{items:e.items,className:k.group,children:[(0,M.jsx)(Ve,{className:k.groupLabel,children:e.label}),(0,M.jsx)(ue,{children:e=>(0,M.jsxs)(Je,{value:e,disabled:e.disabled,className:k.item,onClick:()=>te(e),children:[e.icon&&(0,M.jsx)(`span`,{className:k.icon,"aria-hidden":`true`,children:e.icon}),(0,M.jsx)(`span`,{className:k.label,children:e.label}),e.shortcut&&(0,M.jsx)(S,{size:`sm`,keys:e.shortcut,"aria-hidden":`true`})]},e.value)})]},e.label)})]}),(0,M.jsxs)(`div`,{className:k.footer,children:[(0,M.jsx)(`span`,{id:b,className:k.visuallyHidden,children:`Arrow keys to move, Enter to choose, Escape to close.`}),(0,M.jsxs)(`span`,{className:k.hint,"aria-hidden":`true`,children:[(0,M.jsx)(S,{size:`sm`,keys:[`↑`,`↓`]}),` Move`]}),(0,M.jsxs)(`span`,{className:k.hint,"aria-hidden":`true`,children:[(0,M.jsx)(S,{size:`sm`,children:`↵`}),` Choose`]}),(0,M.jsxs)(`span`,{className:k.hint,"aria-hidden":`true`,children:[(0,M.jsx)(S,{size:`sm`,children:`Esc`}),` Close`]})]})]})})})]})]})}var j,M;function mt(){return(mt=t((()=>{j=r(),he(),Ge(),qe(),we(),ye(),Ce(),ze(),He(),de(),Ye(),Ne(),De(),Te(),Pe(),Ee(),Me(),ie(),v(),c(),pt(),M=u(),A.__docgenInfo={description:``,methods:[],displayName:`CommandPalette`,props:{groups:{required:!0,tsType:{name:`Array`,elements:[{name:`CommandPaletteGroup`}],raw:`CommandPaletteGroup[]`},description:``},trigger:{required:!1,tsType:{name:`ReactElement`},description:`The button that opens it, e.g. a search field in the sidebar.`},hotkey:{required:!1,tsType:{name:`union`,raw:`string | false`,elements:[{name:`string`},{name:`literal`,value:`false`}]},description:"The letter that toggles it with ⌘ or Ctrl, anywhere on the page.\n`false` binds nothing: only one palette on a page should own the key.",defaultValue:{value:`'k'`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: CommandPaletteItem) => void`,signature:{arguments:[{type:{name:`CommandPaletteItem`},name:`item`}],return:{name:`void`}}},description:"Called with the chosen item, after its own `onSelect`."},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search commands…'`,computed:!1}},inputLabel:{required:!1,tsType:{name:`string`},description:`Names the search input.`,defaultValue:{value:`'Search commands'`,computed:!1}},emptyText:{required:!1,tsType:{name:`string`},description:`Shown when nothing matches.`,defaultValue:{value:`'No results'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Names the dialog.`,defaultValue:{value:`'Command palette'`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},isModal:{required:!1,tsType:{name:`boolean`},description:"Trap focus, lock page scroll and make the page inert while open. `false` is for pictures of it.",defaultValue:{value:`true`,computed:!1}},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where it renders instead of `<body>`."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ht=n({Anatomy:()=>Y,Default:()=>H,DoGroup:()=>Q,DontMix:()=>$,Empty:()=>G,Hotkey:()=>K,Keyboard:()=>U,Matching:()=>W,NoResults:()=>Z,Results:()=>X,__namedExportsOrder:()=>_t,anatomyParts:()=>J,default:()=>gt}),N,P,F,I,L,R,gt,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,_t;function vt(){return(vt=t((()=>{b(),x(),ie(),p(),v(),mt(),pt(),N=u(),{expect:P,fn:F,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,gt={title:`Components/Navigation/Command Palette`,tags:[`beta`],component:A,args:{groups:[{label:`Recent`,items:[{value:`inv-1042`,label:`Invoice INV-1042, Shore Holdings`,icon:(0,N.jsx)(y,{name:`file`})},{value:`acme`,label:`Acme Logistics`,icon:(0,N.jsx)(y,{name:`user`})}]},{label:`Commands`,items:[{value:`new-invoice`,label:`New invoice`,icon:(0,N.jsx)(y,{name:`plus`}),keywords:[`bill`],shortcut:[`⌘`,`N`]},{value:`new-customer`,label:`New customer`,icon:(0,N.jsx)(y,{name:`plus`})},{value:`export`,label:`Export ledger`,icon:(0,N.jsx)(y,{name:`upload`}),shortcut:[`⌘`,`⇧`,`E`]},{value:`close-period`,label:`Close period`,icon:(0,N.jsx)(y,{name:`calendar`}),disabled:!0},{value:`help`,label:`Open help`,icon:(0,N.jsx)(y,{name:`help`}),shortcut:[`⌘`,`/`]}]},{label:`Customers`,items:[{value:`hoa-binh`,label:`Hòa Bình Trading`,icon:(0,N.jsx)(y,{name:`user`})},{value:`shore`,label:`Shore Holdings`,icon:(0,N.jsx)(y,{name:`user`})}]}],trigger:(0,N.jsxs)(m,{appearance:`outlined`,variant:`secondary`,"aria-keyshortcuts":`Meta+K Control+K`,children:[`Search `,(0,N.jsx)(S,{size:`sm`,keys:[`⌘`,`K`],"aria-hidden":!0})]}),hotkey:!1,onSelect:F(),onOpenChange:F()},argTypes:{groups:{description:"Titled groups of items: `{ label, items }`. An item is `{ value, label, icon?, keywords?, shortcut?, disabled?, onSelect? }`. Typing matches `label` and `keywords`, ignoring case and accents; a group with no match is left out. Recent items are a group you pass: the palette does not remember them.",control:!1,table:{type:{summary:`CommandPaletteGroup[]`}}},trigger:{description:`The button that opens it, e.g. a search field in the sidebar. Its props are merged, not wrapped.`,control:!1,table:{type:{summary:`ReactElement`}}},hotkey:{description:"The letter that toggles it with ⌘ or Ctrl, anywhere on the page. `false` binds nothing: only one palette on a page should own the key.",control:`text`,table:{type:{summary:`string | false`},defaultValue:{summary:`'k'`}}},onSelect:{description:"Called with the chosen item (pointer or Enter), after the item's own `onSelect`, once the palette has closed and focus is back on the trigger.",control:!1,table:{type:{summary:`(item: CommandPaletteItem) => void`}}},placeholder:{description:`In the empty input.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search commands…'`}}},inputLabel:{description:`Accessible name of the search input.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search commands'`}}},emptyText:{description:`Shown when nothing matches.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'No results'`}}},label:{description:`Names the dialog.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Command palette'`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on the trigger, the hotkey, Escape, a press outside and a choice.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, traps focus, locks page scroll and makes the rest of the page inert. `false` is for pictures of it.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where it renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},z=()=>R(document.body),B=async e=>{await I.click(e.getByRole(`button`,{name:`Search`}));let t=await z().findByRole(`dialog`,{name:`Command palette`}),n=R(t).getByRole(`combobox`,{name:`Search commands`});return await L(()=>P(n).toHaveFocus()),{dialog:t,input:n}},V=e=>e.querySelector(`[role="option"][data-highlighted]`),H={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Search`}),{dialog:r,input:i}=await B(t);await P(i).toHaveAccessibleDescription(`Arrow keys to move, Enter to choose, Escape to close.`),await P(R(r).getByRole(`group`,{name:`Commands`})).toBeInTheDocument(),await L(()=>P(V(r)).toHaveTextContent(`Invoice INV-1042`)),await P(i).toHaveAttribute(`aria-activedescendant`,V(r).id),await P(R(r).getByRole(`option`,{name:`New invoice`})).toBeInTheDocument(),await I.type(i,`export`),await L(()=>P(R(r).getAllByRole(`option`)).toHaveLength(1)),await L(()=>P(V(r)).toHaveTextContent(`Export ledger`)),await I.keyboard(`{Enter}`),await L(()=>P(z().queryByRole(`dialog`)).toBeNull()),await L(()=>P(e.onSelect).toHaveBeenCalledWith(P.objectContaining({value:`export`}))),await P(n).toHaveFocus()}},U={play:async({args:e,canvas:t})=>{let{dialog:n}=await B(t);await L(()=>P(V(n)).toHaveTextContent(`Invoice INV-1042`)),await I.keyboard(`{ArrowDown}{ArrowDown}`),await L(()=>P(V(n)).toHaveTextContent(`New invoice`)),await I.keyboard(`{ArrowDown}{ArrowDown}{ArrowDown}`),await L(()=>P(V(n)).toHaveTextContent(`Close period`)),await P(V(n)).toHaveAttribute(`aria-disabled`,`true`),await I.keyboard(`{Enter}`),await P(e.onSelect).not.toHaveBeenCalled(),await P(z().getByRole(`dialog`)).toBeVisible(),await I.click(R(n).getByRole(`option`,{name:`Hòa Bình Trading`})),await L(()=>P(e.onSelect).toHaveBeenCalledWith(P.objectContaining({value:`hoa-binh`})))}},W={play:async({canvas:e})=>{let{dialog:t,input:n}=await B(e);await I.type(n,`bill`),await L(()=>P(R(t).getAllByRole(`option`).map(e=>e.textContent)).toEqual([P.stringContaining(`New invoice`)])),await I.clear(n),await I.type(n,`hoa binh`),await L(()=>P(R(t).getAllByRole(`option`).map(e=>e.textContent)).toEqual([`Hòa Bình Trading`])),await P(R(t).queryByRole(`group`,{name:`Commands`})).toBeNull()}},G={play:async({canvas:e})=>{let{dialog:t,input:n}=await B(e);await I.type(n,`zzz`),await L(()=>P(R(t).getByText(`No results`)).toBeVisible()),await P(R(t).queryAllByRole(`option`)).toHaveLength(0),await I.keyboard(`{Escape}`),await L(()=>P(z().queryByRole(`dialog`)).toBeNull());let r=await B(e);await I.click(r.dialog.parentElement,{clientX:2,clientY:2}),await L(()=>P(z().queryByRole(`dialog`)).toBeNull())}},K={args:{hotkey:`k`,trigger:void 0},render:e=>(0,N.jsxs)(`p`,{style:{margin:0},children:[`Press `,(0,N.jsx)(S,{keys:[`⌘`,`K`]}),` or `,(0,N.jsx)(S,{keys:[`Ctrl`,`K`]}),` to open the palette.`,(0,N.jsx)(A,{...e})]}),play:async({args:e})=>{await I.keyboard(`{Meta>}k{/Meta}`);let t=await z().findByRole(`dialog`,{name:`Command palette`});await L(()=>P(R(t).getByRole(`combobox`)).toHaveFocus()),await I.keyboard(`{Meta>}k{/Meta}`),await L(()=>P(z().queryByRole(`dialog`)).toBeNull()),await I.keyboard(`{Control>}k{/Control}`),await z().findByRole(`dialog`),await P(e.onOpenChange).toHaveBeenLastCalledWith(!0),await I.keyboard(`{Escape}`),await L(()=>P(z().queryByRole(`dialog`)).toBeNull())}},q=({height:e=`30rem`,...t})=>(0,N.jsx)(te,{style:{position:`relative`,contain:`layout paint`,inlineSize:`min(44rem, 100vw - 4rem)`,blockSize:e,borderRadius:`var(--radius-panel)`},children:e=>(0,N.jsx)(A,{...t,trigger:void 0,open:!0,isModal:!1,container:e})}),J=[{name:`Container`,selector:`[role="dialog"]`,description:`A dialog near the top of the screen, over a scrim. Opened by its trigger or ⌘K.`},{name:`Search input`,selector:`[role="combobox"]`,description:`Focused on open. Typing filters every group at once.`},{name:`Group label`,selector:`.${k.groupLabel}`,description:`Names a group: Recent, Commands, an object type. It names the group for a screen reader too.`},{name:`Item`,selector:`[role="option"]`,description:`The first match is highlighted, so Enter always does something.`},{name:`Icon`,selector:`.${k.icon}`,description:`Optional. What kind of thing the item is.`},{name:`Shortcut`,selector:`[role="option"] kbd:has(> kbd)`,description:`Optional. The key that does the same outside the palette, as Kbd caps. Shown, not read.`},{name:`Key hints`,selector:`.${k.footer}`,description:`The keys that work here. Read once, as the input's description.`}],Y={tags:[`!dev`],render:q,play:async({canvasElement:e})=>{let t=await ee(e,J);await P(t[3]).toHaveAttribute(`data-highlighted`)}},X={tags:[`!dev`],render:q},Z={tags:[`!dev`],args:{groups:[]},render:e=>q({...e,height:`14rem`}),play:async({canvas:e})=>{await P(await e.findByText(`No results`)).toBeInTheDocument()}},Q={tags:[`!dev`],render:q},$={tags:[`!dev`],args:{groups:[{label:`Results`,items:[{value:`invoice`,label:`Invoice`},{value:`acme`,label:`Acme Logistics`},{value:`export`,label:`Export`},{value:`settings`,label:`Settings`},{value:`shore`,label:`Shore Holdings`},{value:`customer`,label:`Customer`},{value:`period`,label:`Period`}]}]},render:q},_t=[`Default`,`Keyboard`,`Matching`,`Empty`,`Hotkey`,`anatomyParts`,`Anatomy`,`Results`,`NoResults`,`DoGroup`,`DontMix`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Search'
    });
    const {
      dialog,
      input
    } = await open(canvas);
    await expect(input).toHaveAccessibleDescription('Arrow keys to move, Enter to choose, Escape to close.');
    // Groups are named by their label, and the first item is highlighted.
    await expect(within(dialog).getByRole('group', {
      name: 'Commands'
    })).toBeInTheDocument();
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Invoice INV-1042'));
    // Focus stays in the input; the highlight is its active descendant.
    await expect(input).toHaveAttribute('aria-activedescendant', highlighted(dialog)!.id);
    // A shortcut is shown, not part of the item's name.
    await expect(within(dialog).getByRole('option', {
      name: 'New invoice'
    })).toBeInTheDocument();
    // Typing filters; the first match is highlighted; Enter chooses it.
    await userEvent.type(input, 'export');
    await waitFor(() => expect(within(dialog).getAllByRole('option')).toHaveLength(1));
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Export ledger'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // The choice runs once focus is back on the trigger.
    await waitFor(() => expect(args.onSelect).toHaveBeenCalledWith(expect.objectContaining({
      value: 'export'
    })));
    await expect(trigger).toHaveFocus();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const {
      dialog
    } = await open(canvas);
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Invoice INV-1042'));
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('New invoice'));
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}');
    await waitFor(() => expect(highlighted(dialog)).toHaveTextContent('Close period'));
    await expect(highlighted(dialog)).toHaveAttribute('aria-disabled', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(args.onSelect).not.toHaveBeenCalled();
    await expect(body().getByRole('dialog')).toBeVisible();
    await userEvent.click(within(dialog).getByRole('option', {
      name: 'Hòa Bình Trading'
    }));
    await waitFor(() => expect(args.onSelect).toHaveBeenCalledWith(expect.objectContaining({
      value: 'hoa-binh'
    })));
  }
}`,...U.parameters?.docs?.source},description:{story:`Arrow keys move the highlight. A disabled item can be reached, but Enter does nothing on it. A click chooses.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const {
      dialog,
      input
    } = await open(canvas);
    await userEvent.type(input, 'bill');
    await waitFor(() => expect(within(dialog).getAllByRole('option').map(o => o.textContent)).toEqual([expect.stringContaining('New invoice')]));
    await userEvent.clear(input);
    await userEvent.type(input, 'hoa binh');
    await waitFor(() => expect(within(dialog).getAllByRole('option').map(o => o.textContent)).toEqual(['Hòa Bình Trading']));
    // Only the group with a match is left.
    await expect(within(dialog).queryByRole('group', {
      name: 'Commands'
    })).toBeNull();
  }
}`,...W.parameters?.docs?.source},description:{story:`Keywords match, and accents do not have to be typed.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const {
      dialog,
      input
    } = await open(canvas);
    await userEvent.type(input, 'zzz');
    await waitFor(() => expect(within(dialog).getByText('No results')).toBeVisible());
    await expect(within(dialog).queryAllByRole('option')).toHaveLength(0);
    // Escape closes it, and so does a press outside.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    const again = await open(canvas);
    await userEvent.click(again.dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    hotkey: 'k',
    trigger: undefined
  },
  render: args => <p style={{
    margin: 0
  }}>
      Press <Kbd keys={['⌘', 'K']} /> or <Kbd keys={['Ctrl', 'K']} /> to open the palette.
      <CommandPalette {...args} />
    </p>,
  play: async ({
    args
  }) => {
    await userEvent.keyboard('{Meta>}k{/Meta}');
    const dialog = await body().findByRole('dialog', {
      name: 'Command palette'
    });
    await waitFor(() => expect(within(dialog).getByRole('combobox')).toHaveFocus());
    await userEvent.keyboard('{Meta>}k{/Meta}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await userEvent.keyboard('{Control>}k{/Control}');
    await body().findByRole('dialog');
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...K.parameters?.docs?.source},description:{story:`⌘K or Ctrl+K toggles it from anywhere on the page.`,...K.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveAttribute('data-highlighted');
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture
}`,...X.parameters?.docs?.source},description:{story:`Specs, States: the open palette with results.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    groups: []
  },
  render: args => picture({
    ...args,
    height: '14rem'
  }),
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByText('No results')).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Specs, States: nothing to list.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: grouped, each command a verb, objects under their type.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    groups: [{
      label: 'Results',
      items: [{
        value: 'invoice',
        label: 'Invoice'
      }, {
        value: 'acme',
        label: 'Acme Logistics'
      }, {
        value: 'export',
        label: 'Export'
      }, {
        value: 'settings',
        label: 'Settings'
      }, {
        value: 'shore',
        label: 'Shore Holdings'
      }, {
        value: 'customer',
        label: 'Customer'
      }, {
        value: 'period',
        label: 'Period'
      }]
    }]
  },
  render: picture
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: one long list of nouns, commands and records mixed.`,...$.parameters?.docs?.description}}}})))()}export{$ as a,U as c,X as d,J as f,Q as i,W as l,ht as n,G as o,vt as p,H as r,K as s,Y as t,Z as u};