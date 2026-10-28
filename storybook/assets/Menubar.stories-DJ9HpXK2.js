import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{h as s}from"./createBaseUIEventDetails-DBMJcLG-.js";import{n as ee,t as c}from"./useBaseUiId-1qKEMtl3.js";import{n as l,t as te}from"./CompositeRoot-BhbU7C-u.js";import{A as u,F as d,M as f,N as p,j as ne}from"./usePopupHandleStore-BNjVeyoG.js";import{n as re,t as m}from"./icon-C9aTyDDd.js";import{n as ie,t as ae}from"./expectAnatomy-C52ByQ6s.js";import{n as h,t as g}from"./Pictured-DOIgaTd2.js";import{a as oe,c as se,d as ce,f as le,h as ue,i as de,m as fe,n as pe,o as me,p as he,r as ge,s as _e}from"./Menu-NLwpYJmZ.js";var _;function v(){return(v=t((()=>{_=`data-has-submenu-open`})))()}function ve(e){let t=p(),{events:n}=d(),r=ue();return y.useEffect(()=>{function e(e){e.nodeId&&e.parentNodeId===t&&(e.open?r.hasSubmenuOpen||r.setHasSubmenuOpen(!0):e.reason!==`sibling-open`&&e.reason!==`list-navigation`&&r.setHasSubmenuOpen(!1))}return n.on(`menuopenchange`,e),()=>{n.off(`menuopenchange`,e)}},[n,t,r]),(0,b.jsx)(u,{id:t,children:e.children})}var y,b,x,S;function C(){return(C=t((()=>{y=e(r(),1),f(),fe(),l(),c(),v(),s(),b=o(),x={hasSubmenuOpen(e){return e?{[_]:``}:null}},S=y.forwardRef(function(e,t){let{orientation:n=`horizontal`,loopFocus:r=!0,render:i,className:a,modal:o=!0,disabled:s=!1,id:c,style:l,...u}=e,[d,f]=y.useState(null),[p,re]=y.useState(!1),m=ee(c),ie={orientation:n,modal:o,hasSubmenuOpen:p},ae=y.useRef(null),h=y.useRef(!1),g=y.useMemo(()=>({contentElement:d,setContentElement:f,setHasSubmenuOpen:re,hasSubmenuOpen:p,modal:o,disabled:s,orientation:n,allowMouseUpTriggerRef:h,rootId:m}),[d,p,o,s,n,m]);return(0,b.jsx)(he.Provider,{value:g,children:(0,b.jsx)(ne,{children:(0,b.jsx)(ve,{children:(0,b.jsx)(te,{render:i,className:a,style:l,state:ie,stateAttributesMapping:x,refs:[t,f,ae],props:[{role:`menubar`,id:m,"aria-orientation":n},u],orientation:n,loopFocus:r,enableHomeAndEndKeys:!0,highlightItemOnHover:p})})})})})})))()}var w,T,E;function D(){return(D=t((()=>{w=`_bar_z8dnw_4`,T=`_trigger_z8dnw_24`,E={bar:w,trigger:T}})))()}function O({menus:e,"aria-label":t,isModal:n=!0,container:r,className:i}){return(0,k.jsx)(S,{"aria-label":t,modal:n,className:a(E.bar,i),children:e.map((e,t)=>(0,k.jsxs)(ce,{disabled:e.disabled,defaultOpen:e.defaultOpen,children:[(0,k.jsx)(_e,{className:E.trigger,children:e.label}),(0,k.jsx)(ge,{side:`bottom`,align:`start`,container:r,children:(0,k.jsx)(pe,{items:e.items})})]},t))})}var k;function A(){return(A=t((()=>{le(),se(),C(),i(),de(),D(),k=o(),O.__docgenInfo={description:`A row of menus, as in a desktop app: File, Edit, View, each opening a flyout.`,methods:[],displayName:`Menubar`,props:{menus:{required:!0,tsType:{name:`Array`,elements:[{name:`MenubarMenu`}],raw:`MenubarMenu[]`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:`Names the bar. Needed when a page has more than one menubar.`},isModal:{required:!1,tsType:{name:`boolean`},description:"While a flyout is open, lock page scroll and make the rest of the page\ninert. `false` leaves the page as is.",defaultValue:{value:`true`,computed:!1}},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where the flyouts render instead of `<body>`, e.g. an element in fullscreen."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ye=n({Anatomy:()=>X,Default:()=>H,DisabledMenu:()=>G,DoConventionalOrder:()=>Z,DontNavigation:()=>Q,HoverSwitches:()=>W,Modal:()=>U,Open:()=>J,__namedExportsOrder:()=>be,anatomyParts:()=>Y,default:()=>z}),j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,be;function $(){return($=t((()=>{ie(),h(),re(),A(),me(),j=o(),{expect:M,fn:N,userEvent:P,waitFor:F,within:I}=__STORYBOOK_MODULE_TEST__,L=N(),R=[{label:`File`,items:[{label:`New invoice`,shortcut:`⌘ N`},{label:`Open…`,shortcut:`⌘ O`},{label:`Export as`,items:[{label:`PDF`},{label:`CSV`},{label:`Excel`}]},{type:`separator`},{label:`Print…`,shortcut:`⌘ P`}]},{label:`Edit`,items:[{label:`Undo`,shortcut:`⌘ Z`,onSelect:L},{label:`Redo`,shortcut:`⇧ ⌘ Z`,disabled:!0},{type:`separator`},{label:`Duplicate line`,icon:(0,j.jsx)(m,{name:`plus`}),shortcut:`⌘ D`},{label:`Delete line`,icon:(0,j.jsx)(m,{name:`close`}),isDestructive:!0}]},{label:`View`,items:[{type:`group`,label:`Show`,items:[{type:`checkbox`,label:`Tax column`,defaultChecked:!0},{type:`checkbox`,label:`Notes`}]},{type:`separator`},{type:`radio`,label:`Density`,defaultValue:`default`,options:[{value:`compact`,label:`Compact`},{value:`default`,label:`Default`}]}]},{label:`Help`,items:[{label:`Documentation`,href:`#docs`},{label:`Keyboard shortcuts`,href:`#shortcuts`}]}],z={title:`Components/Navigation/Menubar`,tags:[`experimental`],component:O,args:{menus:R,"aria-label":`Invoice editor`},argTypes:{menus:{description:"The menus, left to right. Each is `{ label, items, disabled?, defaultOpen? }`; `items` takes the same entries as Menu's `items`: actions, links, submenus, checkbox and radio items, groups and separators.",control:!1,table:{type:{summary:`MenubarMenu[]`}}},"aria-label":{description:`Names the bar, e.g. "Invoice editor". Needed when a page has more than one menubar.`,control:`text`,table:{type:{summary:`string`}}},isModal:{description:"While a flyout is open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the flyouts render instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the bar.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,j.jsx)(`div`,{style:{minBlockSize:`18rem`},children:e()})]},B=()=>I(document.body),V=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),H={play:async({canvas:e})=>{L.mockClear();let t=e.getByRole(`menubar`,{name:`Invoice editor`}),[n,r,i]=I(t).getAllByRole(`menuitem`);await M(n).toHaveAttribute(`aria-haspopup`,`menu`),await M(n).toHaveAttribute(`aria-expanded`,`false`),await P.tab(),await M(n).toHaveFocus(),await P.keyboard(`{ArrowRight}`),await F(()=>M(r).toHaveFocus()),await P.keyboard(`{ArrowDown}`);let a=await B().findByRole(`menu`);await M(r).toHaveAttribute(`aria-expanded`,`true`),await M(a.querySelector(`kbd`)).toHaveAttribute(`aria-hidden`,`true`),await M(I(a).getByRole(`menuitem`,{name:`Undo`})).toBeInTheDocument(),await F(()=>M(I(a).getByRole(`menuitem`,{name:/Undo/})).toHaveFocus()),await P.keyboard(`{ArrowRight}`),await F(()=>M(i).toHaveAttribute(`aria-expanded`,`true`)),await P.keyboard(`{ArrowLeft}`),await F(()=>M(r).toHaveAttribute(`aria-expanded`,`true`)),await P.keyboard(`{Escape}`),await F(()=>M(B().queryByRole(`menu`)).toBeNull()),await M(r).toHaveFocus(),await P.keyboard(`{ArrowDown}`);let o=await B().findByRole(`menu`);await F(()=>M(I(o).getByRole(`menuitem`,{name:/Undo/})).toHaveFocus()),await P.keyboard(`{Enter}`),await M(L).toHaveBeenCalledOnce(),await F(()=>M(B().queryByRole(`menu`)).toBeNull()),await P.keyboard(`{ArrowRight}`),await F(()=>M(i).toHaveFocus());for(let e of[`{Enter}`,` `])await P.keyboard(e),await F(()=>M(i).toHaveAttribute(`aria-expanded`,`true`)),await P.keyboard(`{Escape}`),await F(()=>M(B().queryByRole(`menu`)).toBeNull())}},U={play:async({canvas:e})=>{let t=e.getByRole(`menuitem`,{name:`Edit`}),n=document.createElement(`div`);n.style.blockSize=`var(--control-sm)`,document.body.append(n),await F(()=>M(t.getBoundingClientRect().height).toBe(n.getBoundingClientRect().height)),n.remove(),await P.click(t);let r=await B().findByRole(`menu`);await M(I(r).getByRole(`menuitem`,{name:/Duplicate line/}).querySelector(`:scope > span:first-child`)).toHaveAttribute(`aria-hidden`,`true`),await F(()=>M(V()).toBe(!0)),await P.keyboard(`{Escape}`),await F(()=>M(B().queryByRole(`menu`)).toBeNull()),await F(()=>M(V()).toBe(!1))}},W={args:{isModal:!1},play:async({canvas:e})=>{let t=e.getByRole(`menubar`),[n,r]=I(t).getAllByRole(`menuitem`);await P.click(n),await B().findByRole(`menu`),await M(n).toHaveAttribute(`aria-expanded`,`true`),await M(V()).toBe(!1),await P.hover(r),await F(()=>M(r).toHaveAttribute(`aria-expanded`,`true`)),await M(n).toHaveAttribute(`aria-expanded`,`false`),await F(()=>M(B().getAllByRole(`menu`)).toHaveLength(1)),await P.keyboard(`{Escape}`),await F(()=>M(B().queryByRole(`menu`)).toBeNull())}},G={args:{menus:[R[0],{...R[1],disabled:!0},R[2]]},play:async({canvas:e})=>{let[t,n,r]=I(e.getByRole(`menubar`)).getAllByRole(`menuitem`);await M(n).toHaveAttribute(`aria-disabled`,`true`),await P.tab(),await M(t).toHaveFocus(),await P.keyboard(`{ArrowRight}`),await F(()=>M(r).toHaveFocus())}},K=e=>(0,j.jsx)(g,{positioner:oe.positioner,style:{display:`inline-flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`var(--space-1)`},children:t=>(0,j.jsx)(O,{...e,isModal:!1,container:t})}),q=[R[0],{...R[1],defaultOpen:!0},R[2],R[3]],J={tags:[`!dev`],args:{menus:q},render:K,play:async({canvas:e})=>{let t=await e.findByRole(`menu`,{hidden:!0});await M(I(t).getAllByRole(`menuitem`,{hidden:!0})).toHaveLength(4)}},Y=[{name:`Bar`,selector:`[role="menubar"]`,description:`The row of menus. One tab stop: the arrows move along it.`},{name:`Menu trigger`,selector:`[role="menubar"] > [aria-expanded="true"]`,description:`A top-level item: File, Edit, View. Highlighted while its flyout is open.`},{name:`Flyout`,selector:`[role="menu"]`,description:`A Menu popup, with all of Menu's entries.`},{name:`Group label`,selector:`[role="group"] > div:first-child`,description:`Optional. Names a group of items.`},{name:`Item`,selector:`[role="menu"] [role="menuitemcheckbox"]`,description:`An entry, here a checkbox item. Flyouts take every Menu entry: actions, links, submenus, checkbox and radio items.`},{name:`Separator`,selector:`[role="menu"] [role="separator"]`,description:`A rule between groups of items.`}],X={tags:[`!dev`],args:{menus:[R[0],R[1],{...R[2],defaultOpen:!0},R[3]]},render:K,play:async({canvasElement:e})=>{let t=await ae(e,Y);await M(t[1]).toHaveTextContent(`View`),await M(t[3]).toHaveTextContent(`Show`)}},Z={tags:[`!dev`],args:{menus:q},render:K},Q={tags:[`!dev`],args:{menus:[{label:`Sales`,defaultOpen:!0,items:[{label:`Invoices`,href:`#invoices`},{label:`Quotes`,href:`#quotes`},{label:`Customers`,href:`#customers`}]},{label:`Purchases`,items:[{label:`Bills`,href:`#bills`}]},{label:`Reports`,items:[{label:`Profit and loss`,href:`#pl`}]}]},render:K},be=[`Default`,`Modal`,`HoverSwitches`,`DisabledMenu`,`Open`,`anatomyParts`,`Anatomy`,`DoConventionalOrder`,`DontNavigation`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    onUndo.mockClear();
    const bar = canvas.getByRole('menubar', {
      name: 'Invoice editor'
    });
    const [file, edit, view] = within(bar).getAllByRole('menuitem');
    await expect(file).toHaveAttribute('aria-haspopup', 'menu');
    await expect(file).toHaveAttribute('aria-expanded', 'false');
    // One tab stop: Tab lands on the first menu, the arrows move along the bar.
    await userEvent.tab();
    await expect(file).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(edit).toHaveFocus());
    // Arrow Down opens the flyout on its first item.
    await userEvent.keyboard('{ArrowDown}');
    const menu = await body().findByRole('menu');
    await expect(edit).toHaveAttribute('aria-expanded', 'true');
    // The shortcut is plain text, hidden from assistive tech: the label names the item.
    await expect(menu.querySelector('kbd')).toHaveAttribute('aria-hidden', 'true');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Undo'
    })).toBeInTheDocument();
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Undo/
    })).toHaveFocus());
    // Arrow Right from inside a flyout moves to the next menu, open.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'));
    // Escape closes and returns focus to the menu's trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(edit).toHaveFocus();
    // Enter on an action runs it and closes the flyout.
    await userEvent.keyboard('{ArrowDown}');
    const again = await body().findByRole('menu');
    await waitFor(() => expect(within(again).getByRole('menuitem', {
      name: /Undo/
    })).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await expect(onUndo).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    // Enter and Space on a trigger open its flyout too.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveFocus());
    for (const key of ['{Enter}', ' ']) {
      await userEvent.keyboard(key);
      await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const edit = canvas.getByRole('menuitem', {
      name: 'Edit'
    });
    const probe = document.createElement('div');
    probe.style.blockSize = 'var(--control-sm)';
    document.body.append(probe);
    await waitFor(() => expect(edit.getBoundingClientRect().height).toBe(probe.getBoundingClientRect().height));
    probe.remove();
    await userEvent.click(edit);
    const menu = await body().findByRole('menu');
    // The icon is decorative.
    await expect(within(menu).getByRole('menuitem', {
      name: /Duplicate line/
    }).querySelector(':scope > span:first-child')).toHaveAttribute('aria-hidden', 'true');
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await waitFor(() => expect(isScrollLocked()).toBe(false));
  }
}`,...U.parameters?.docs?.source},description:{story:`Modal by default: page scroll is locked while a flyout is open. Triggers are one sm tier tall.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: false
  },
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('menubar');
    const [file, edit] = within(bar).getAllByRole('menuitem');
    await userEvent.click(file);
    await body().findByRole('menu');
    await expect(file).toHaveAttribute('aria-expanded', 'true');
    await expect(isScrollLocked()).toBe(false);
    await userEvent.hover(edit);
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'));
    await expect(file).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(1));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...W.parameters?.docs?.source},description:{story:`With one flyout open, moving the pointer to another menu opens that one instead.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [menus[0], {
      ...menus[1],
      disabled: true
    }, menus[2]]
  },
  play: async ({
    canvas
  }) => {
    const [file, edit, view] = within(canvas.getByRole('menubar')).getAllByRole('menuitem');
    await expect(edit).toHaveAttribute('aria-disabled', 'true');
    await userEvent.tab();
    await expect(file).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveFocus());
  }
}`,...G.parameters?.docs?.source},description:{story:`A menu that does not apply right now stays in place, muted, and the arrows skip it.`,...G.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: editOpen
  },
  render: picture,
  play: async ({
    canvas
  }) => {
    const menu = await canvas.findByRole('menu', {
      hidden: true
    });
    await expect(within(menu).getAllByRole('menuitem', {
      hidden: true
    })).toHaveLength(4);
  }
}`,...J.parameters?.docs?.source},description:{story:`The Edit menu open, for the docs and the visual baseline.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: [menus[0], menus[1], {
      ...menus[2],
      defaultOpen: true
    }, menus[3]]
  },
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('View');
    await expect(found[3]).toHaveTextContent('Show');
  }
}`,...X.parameters?.docs?.source},description:{story:`Every part present, the View menu open in place.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: editOpen
  },
  render: picture
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Do: menus named for what they hold, in the order desktop apps use.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: [{
      label: 'Sales',
      defaultOpen: true,
      items: [{
        label: 'Invoices',
        href: '#invoices'
      }, {
        label: 'Quotes',
        href: '#quotes'
      }, {
        label: 'Customers',
        href: '#customers'
      }]
    }, {
      label: 'Purchases',
      items: [{
        label: 'Bills',
        href: '#bills'
      }]
    }, {
      label: 'Reports',
      items: [{
        label: 'Profit and loss',
        href: '#pl'
      }]
    }]
  },
  render: picture
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Don't: a menubar used as site navigation, every flyout a list of pages.`,...Q.parameters?.docs?.description}}}})))()}export{Q as a,Y as c,Z as i,$ as l,H as n,ye as o,G as r,J as s,X as t};