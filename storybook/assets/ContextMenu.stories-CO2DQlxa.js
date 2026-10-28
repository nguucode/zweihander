import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,t as d}from"./Pictured-DOIgaTd2.js";import{a as f,i as p,o as m,t as h}from"./Menu-NLwpYJmZ.js";import{i as g,n as _,r as v,t as y}from"./ContextMenu-CdEivZ3U.js";var b=t({Anatomy:()=>G,Default:()=>I,Disabled:()=>R,DoShortcutToVisible:()=>K,DontOnlyWay:()=>q,Keyboard:()=>L,OnRows:()=>V,Open:()=>U,__namedExportsOrder:()=>J,anatomyParts:()=>W,default:()=>N}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{x=n(),c(),u(),o(),i(),_(),g(),p(),m(),S=r(),{expect:C,fireEvent:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k=T(),A=T(),j=[{label:`Open`,onSelect:k},{label:`Duplicate`,icon:(0,S.jsx)(s,{name:`plus`}),shortcut:`⌘ D`},{label:`Mark as paid`,disabled:!0},{type:`separator`},{label:`Delete`,icon:(0,S.jsx)(s,{name:`close`}),isDestructive:!0,onSelect:A}],M=(e=`INV-1042 · Acme Ltd · $1,200.00`)=>(0,S.jsx)(`div`,{tabIndex:0,style:{display:`flex`,alignItems:`center`,minBlockSize:`var(--row-height)`,paddingInline:`var(--space-3)`,border:`1px dashed var(--border)`,borderRadius:`var(--radius-field)`,color:`var(--foreground)`,fontFamily:`var(--font-sans)`,fontSize:`var(--text-body)`},children:e}),N={title:`Components/Navigation/Context Menu`,tags:[`experimental`],component:y,args:{items:j,children:M()},argTypes:{children:{description:"The area that opens the menu on right click or long press: one element, such as a `<tr>`, an `<li>` or a card. Its props are merged rather than wrapped, so table and list markup stays valid. Make it, or a control inside it, focusable so Shift+F10 reaches it.",control:!1,table:{type:{summary:`ReactElement`}}},items:{description:"The entries, the same data as Menu's `items`: actions, links, submenus, checkbox and radio items, groups and separators.",control:!1,table:{type:{summary:`MenuEntry[]`}}},disabled:{description:`Leaves the browser's own menu in place, for an area with nothing to act on right now.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:!1,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled. With no pointer to open at, the popup sits at the corner of the page: for pictures, not for pages.`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called when the menu opens or closes: a right click, Escape, a click outside, or choosing an action.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup, as in Menu.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,S.jsx)(`div`,{style:{minBlockSize:`16rem`,maxInlineSize:`28rem`},children:e()})]},P=()=>O(document.body),F=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),I={play:async({canvas:e})=>{k.mockClear();let t=e.getByText(/INV-1042/);await E.pointer({keys:`[MouseRight]`,target:t});let n=await P().findByRole(`menu`);await C(t).toHaveAttribute(`data-popup-open`),await C(getComputedStyle(t).outlineStyle).toBe(`solid`),await D(()=>C(F()).toBe(!0)),await E.keyboard(`{ArrowDown}`),await D(()=>C(O(n).getByRole(`menuitem`,{name:`Open`})).toHaveFocus()),await E.keyboard(`{Enter}`),await C(k).toHaveBeenCalledOnce(),await D(()=>C(P().queryByRole(`menu`)).toBeNull()),await C(t).not.toHaveAttribute(`data-popup-open`)}},L={play:async({canvas:e})=>{let t=e.getByText(/INV-1042/);await E.tab(),await C(t).toHaveFocus();let n=w.contextMenu(t);await C(n).toBe(!1),await P().findByRole(`menu`),await E.keyboard(`{Escape}`),await D(()=>C(P().queryByRole(`menu`)).toBeNull()),await D(()=>C(t).toHaveFocus())}},R={args:{disabled:!0},play:async({canvas:e})=>{let t=e.getByText(/INV-1042/),n=w.contextMenu(t);await C(n).toBe(!0),await C(t).not.toHaveAttribute(`data-popup-open`)}},z=[`INV-1042 · Acme Ltd`,`INV-1043 · Globex`,`INV-1044 · Initech`],B=[`Open`,`Duplicate`,`Mark as paid`,`Delete`],V={render:e=>(0,S.jsx)(`ul`,{style:{display:`grid`,gap:`var(--space-1)`,margin:0,padding:0,listStyle:`none`,fontFamily:`var(--font-sans)`,color:`var(--foreground)`},children:z.map(t=>(0,S.jsx)(y,{items:e.items,children:(0,S.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingInlineStart:`var(--space-3)`,borderBottom:`1px solid var(--border)`},children:[t,(0,S.jsx)(h,{align:`end`,items:e.items,trigger:(0,S.jsx)(a,{variant:`secondary`,appearance:`ghost`,size:`sm`,isIconOnly:!0,"aria-label":`Actions for ${t}`,children:(0,S.jsx)(s,{name:`more`})})})]})},t))}),play:async({canvas:e})=>{A.mockClear();let t=e.getAllByRole(`listitem`);await C(t).toHaveLength(3),await C(t[1].parentElement?.tagName).toBe(`UL`),await E.pointer({keys:`[MouseRight]`,target:t[1]});let n=await P().findByRole(`menu`);await C(t[1]).toHaveAttribute(`data-popup-open`),await C(t[0]).not.toHaveAttribute(`data-popup-open`);for(let e of B)await C(O(n).getByRole(`menuitem`,{name:e})).toBeInTheDocument();await E.click(O(n).getByRole(`menuitem`,{name:`Delete`})),await C(A).toHaveBeenCalledOnce(),await D(()=>C(P().queryByRole(`menu`)).toBeNull()),await E.click(e.getByRole(`button`,{name:`Actions for INV-1043 · Globex`}));let r=await P().findByRole(`menu`);for(let e of B)await C(O(r).getByRole(`menuitem`,{name:e})).toBeInTheDocument();await E.keyboard(`{Escape}`),await D(()=>C(P().queryByRole(`menu`)).toBeNull())}},H=e=>(0,S.jsx)(d,{positioner:f.positioner,style:{display:`grid`,gap:`var(--space-1)`,justifyItems:`start`},children:t=>(0,S.jsx)(h,{items:e.items,trigger:(0,x.cloneElement)(e.children,{className:v.area}),open:!0,isModal:!1,container:t})}),U={tags:[`!dev`],render:H,play:async({canvas:e})=>{let t=await e.findByRole(`menu`,{hidden:!0});await C(O(t).getAllByRole(`menuitem`,{hidden:!0})).toHaveLength(4),await D(()=>C(F()).toBe(!1))}},W=[{name:`Area`,selector:`[data-popup-open]`,description:`The element that takes the right click or long press: a row, a card, an object. Outlined while its menu is open.`},{name:`Popup`,selector:`[role="menu"]`,description:`A Menu popup, opened with its corner at the pointer.`},{name:`Item`,selector:`[role="menu"] [role="menuitem"]`,description:`An entry, the same as an action menu's: label, optional icon and shortcut.`},{name:`Separator`,selector:`[role="menu"] [role="separator"]`,description:`A rule before the destructive items.`}],G={tags:[`!dev`],render:H,play:async({canvasElement:e})=>{let t=await l(e,W);await C(t[0]).toHaveTextContent(`INV-1042`),await C(t[2]).toHaveTextContent(`Open`)}},K={tags:[`!dev`],args:{children:(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-3)`,paddingInlineStart:`var(--space-3)`,fontFamily:`var(--font-sans)`,color:`var(--foreground)`},children:[`INV-1042 · Acme Ltd`,(0,S.jsx)(a,{variant:`secondary`,appearance:`ghost`,size:`sm`,isIconOnly:!0,"aria-label":`Actions for INV-1042`,children:(0,S.jsx)(s,{name:`more`})})]})},render:H},q={tags:[`!dev`],args:{children:M(`INV-1042 · Acme Ltd`),items:[{label:`Send reminder`},{label:`Export as PDF`},{type:`separator`},{label:`Void invoice`,isDestructive:!0}]},render:H},J=[`Default`,`Keyboard`,`Disabled`,`OnRows`,`Open`,`anatomyParts`,`Anatomy`,`DoShortcutToVisible`,`DontOnlyWay`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    onOpenInvoice.mockClear();
    const target = canvas.getByText(/INV-1042/);
    // Right click opens the menu at the pointer and marks the area it acts on.
    await userEvent.pointer({
      keys: '[MouseRight]',
      target
    });
    const menu = await body().findByRole('menu');
    await expect(target).toHaveAttribute('data-popup-open');
    await expect(getComputedStyle(target).outlineStyle).toBe('solid');
    // Modal by default, like the operating system's menus.
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    // The keys inside are Menu's: the arrows move, Enter runs the action and closes.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: 'Open'
    })).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await expect(onOpenInvoice).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(target).not.toHaveAttribute('data-popup-open');
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const target = canvas.getByText(/INV-1042/);
    await userEvent.tab();
    await expect(target).toHaveFocus();
    // What the browser sends for Shift+F10; user-event cannot press it for real.
    const allowed = fireEvent.contextMenu(target);
    await expect(allowed).toBe(false);
    await body().findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await waitFor(() => expect(target).toHaveFocus());
  }
}`,...L.parameters?.docs?.source},description:{story:"Shift+F10 and the Menu key: the browser fires `contextmenu` on the focused element, which opens the menu. Escape closes it and focus goes back.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    const target = canvas.getByText(/INV-1042/);
    const allowed = fireEvent.contextMenu(target);
    await expect(allowed).toBe(true);
    await expect(target).not.toHaveAttribute('data-popup-open');
  }
}`,...R.parameters?.docs?.source},description:{story:`Nothing to act on: the browser's own menu shows instead.`,...R.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <ul style={{
    display: 'grid',
    gap: 'var(--space-1)',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontFamily: 'var(--font-sans)',
    color: 'var(--foreground)'
  }}>
      {invoices.map(name => <ContextMenu key={name} items={args.items}>
          <li style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInlineStart: 'var(--space-3)',
        borderBottom: '1px solid var(--border)'
      }}>
            {name}
            <Menu align="end" items={args.items} trigger={<Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label={\`Actions for \${name}\`}>
                  <Icon name="more" />
                </Button>} />
          </li>
        </ContextMenu>)}
    </ul>,
  play: async ({
    canvas
  }) => {
    onDelete.mockClear();
    const rows = canvas.getAllByRole('listitem');
    // The area is the <li> itself: no wrapper inside the list.
    await expect(rows).toHaveLength(3);
    await expect(rows[1].parentElement?.tagName).toBe('UL');
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: rows[1]
    });
    const menu = await body().findByRole('menu');
    await expect(rows[1]).toHaveAttribute('data-popup-open');
    await expect(rows[0]).not.toHaveAttribute('data-popup-open');
    for (const name of itemNames) await expect(within(menu).getByRole('menuitem', {
      name
    })).toBeInTheDocument();
    await userEvent.click(within(menu).getByRole('menuitem', {
      name: 'Delete'
    }));
    await expect(onDelete).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    // Every item is also behind the row's visible button, named after the row.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions for INV-1043 · Globex'
    }));
    const again = await body().findByRole('menu');
    for (const name of itemNames) await expect(within(again).getByRole('menuitem', {
      name
    })).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...V.parameters?.docs?.source},description:{story:`On each row of a list: the same items as the row's visible "more" button, so the right click is a shortcut, not the only way in.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
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
    await waitFor(() => expect(isScrollLocked()).toBe(false));
  }
}`,...U.parameters?.docs?.source},description:{story:`Open, for the docs and the visual baseline.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('INV-1042');
    await expect(found[2]).toHaveTextContent('Open');
  }
}`,...G.parameters?.docs?.source},description:{story:`Every part present, open in place.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    children: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      paddingInlineStart: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--foreground)'
    }}>
        INV-1042 · Acme Ltd
        <Button variant="secondary" appearance="ghost" size="sm" isIconOnly aria-label="Actions for INV-1042">
          <Icon name="more" />
        </Button>
      </div>
  },
  render: picture
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Do: the right click repeats a row's visible actions.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    children: area('INV-1042 · Acme Ltd'),
    items: [{
      label: 'Send reminder'
    }, {
      label: 'Export as PDF'
    }, {
      type: 'separator'
    }, {
      label: 'Void invoice',
      isDestructive: true
    }]
  },
  render: picture
}`,...q.parameters?.docs?.source},description:{story:`Guidelines, Don't: the only way to an action, with nothing on screen that says it is there.`,...q.parameters?.docs?.description}}}})))()}export{K as a,U as c,R as i,W as l,b as n,q as o,I as r,V as s,G as t,Y as u};