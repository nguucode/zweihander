import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{r as l,t as u}from"./Avatar-Br9NGvV-.js";import{n as d,t as f}from"./Kbd-DUFr_I3T.js";import{i as p,t as m}from"./Menu-NLwpYJmZ.js";import{n as h,t as g}from"./Popover-Db3qGhTm.js";import{n as _,r as v,t as y}from"./NavSidebar-Do9w0wRH.js";var b=t({Anatomy:()=>B,Categories:()=>M,Collapsed:()=>F,Collapsible:()=>P,CurrentItem:()=>H,CurrentPastLimit:()=>N,Default:()=>j,DoGroupWithIcons:()=>U,DontLongLabelsNoIcons:()=>W,Item:()=>V,LongContent:()=>R,Plain:()=>L,RailPreview:()=>I,__namedExportsOrder:()=>G,anatomyParts:()=>z,default:()=>A}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{s(),a(),d(),l(),r(),p(),h(),v(),x=n(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=e=>(0,x.jsx)(i,{variant:`secondary`,appearance:`ghost`,size:`sm`,isIconOnly:!0,"aria-label":e,children:(0,x.jsx)(o,{name:`plus`})}),O=[{label:`New`,href:`#new`,icon:(0,x.jsx)(o,{name:`plus`})},{label:`Inbox`,href:`#inbox`,icon:(0,x.jsx)(o,{name:`info`}),badge:12},{label:`Invoices`,href:`#invoices`,icon:(0,x.jsx)(o,{name:`file`})},{label:`Customers`,href:`#customers`,icon:(0,x.jsx)(o,{name:`user`})},{type:`group`,label:`Pinned`,isCollapsible:!0,items:[{label:`Q3 VAT return`,href:`#vat`,icon:(0,x.jsx)(o,{name:`star`})},{label:`Vendor ledger`,href:`#ledger`,icon:(0,x.jsx)(o,{name:`star`})}]},{type:`group`,label:`Recent`,isCollapsible:!0,limit:3,items:[{label:`INV-2041 · Nordwind GmbH`,href:`#r1`},{label:`Bank reconciliation Sep`,href:`#r2`},{label:`PO-118 · Hanoi Steel`,href:`#r3`},{label:`Payroll run 2026-10`,href:`#r4`},{label:`Credit note CN-77`,href:`#r5`}]}],k=O.map(e=>e.type===`group`&&e.label===`Pinned`?{...e,action:D(`Add to Pinned`)}:e),A={title:`Patterns/Application UI/Nav Sidebar`,tags:[`beta`],component:y,parameters:{layout:`fullscreen`},args:{items:O,currentHref:`#invoices`,brand:(0,x.jsxs)(`strong`,{"data-testid":`brand`,style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,x.jsx)(`img`,{src:`logo.svg`,alt:``,width:16,height:16,style:{imageRendering:`pixelated`}}),`Zweihänder`]}),header:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{align:`start`,trigger:(0,x.jsx)(_,{appearance:`switcher`,icon:(0,x.jsx)(u,{size:`xs`,initials:`KT`,variant:`solid`,color:`blue`}),label:`Kafka Trading Co.`,end:(0,x.jsx)(o,{name:`chevrons-up-down`})}),items:[{type:`radio`,label:`Companies`,defaultValue:`kt`,options:[{value:`kt`,label:`Kafka Trading Co.`},{value:`kl`,label:`Kafka Logistics`},{value:`sh`,label:`Shore Holdings`}]},{type:`separator`},{label:`Add company`,icon:(0,x.jsx)(o,{name:`plus`})}]}),(0,x.jsx)(_,{appearance:`field`,icon:(0,x.jsx)(o,{name:`search`}),label:`Search`,end:(0,x.jsx)(f,{size:`sm`,keys:[`⌘`,`K`]})})]}),footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{side:`right`,align:`end`,title:`Notifications`,trigger:(0,x.jsx)(_,{icon:(0,x.jsx)(o,{name:`notifications`}),label:`Notifications`,badge:3}),children:`INV-2039 is 14 days overdue. Linh approved PO-118. September close is ready to review.`}),(0,x.jsx)(m,{side:`right`,align:`end`,trigger:(0,x.jsx)(_,{icon:(0,x.jsx)(o,{name:`help`}),label:`Help and support`}),items:[{label:`Help center`},{label:`Keyboard shortcuts`},{type:`separator`},{label:`Contact support`}]}),(0,x.jsx)(m,{side:`right`,align:`end`,trigger:(0,x.jsx)(_,{icon:(0,x.jsx)(u,{size:`xs`,initials:`NN`,variant:`solid`}),label:`Nguu Nguyen`}),items:[{label:`Profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})]}),isCollapsible:!0,onCollapsedChange:C()},argTypes:{items:{description:"The links, as data. An item is `{ label, href, icon?, badge?, render? }`; a category is `{ type: 'group', label, items, action?, isCollapsible?, defaultCollapsed?, isCollapsed?, onCollapsedChange?, limit? }`. `render` replaces the `<a>`, e.g. with a router's `<Link />`.",control:!1,table:{type:{summary:`NavSidebarEntry[]`}}},currentHref:{description:'The `href` of the page the reader is on. That item gets the selected fill and `aria-current="page"`.',control:`text`,table:{type:{summary:`string`}}},brand:{description:"The logo, in the top row with the collapse button. Inside an App Shell's sidebar layout the shell passes its own `brand`.",control:!1,table:{type:{summary:`ReactNode`}}},header:{description:"Under the logo: a tenant switcher and search, built from `NavSidebarButton`. Stays in the rail as icons.",control:!1,table:{type:{summary:`ReactNode`}}},footer:{description:`Pinned to the bottom, in a row: the account, notifications, help. Stacked in the rail.`,control:!1,table:{type:{summary:`ReactNode`}}},isCollapsed:{description:"Controlled: the icon rail, labels in tooltips. Items without an `icon` are left out. Pair with `onCollapsedChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultCollapsed:{description:`Starts as the icon rail, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onCollapsedChange:{description:`Called with the new state when the collapse button is pressed.`,control:!1,table:{type:{summary:`(collapsed: boolean) => void`}}},isCollapsible:{description:`Shows a button in the top row that collapses and expands the sidebar.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:"The `<nav>` landmark's name. Change it when a page has more than one navigation.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Main'`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.bare?e():(0,x.jsx)(`div`,{style:{blockSize:`40rem`,display:`flex`},children:e()})]},j={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await S(E(t).getByRole(`link`,{name:`Invoices`})).toHaveAttribute(`aria-current`,`page`),await S(E(t).getByRole(`link`,{name:`Inbox, 12`})).not.toHaveAttribute(`aria-current`),await S(E(t).getByTestId(`brand`)).toBeVisible(),await S(E(t).getByRole(`list`,{name:`Pinned`})).toBeVisible(),await S(E(t).queryByRole(`button`,{name:`Add to Pinned`})).toBeNull(),await S(E(t).getByRole(`button`,{name:`Kafka Trading Co.`})).toBeVisible(),await S(E(t).getByRole(`button`,{name:`Search`})).toBeVisible(),await S(E(t).getByRole(`button`,{name:`Notifications, 3`})).toBeVisible(),await S(E(t).getByRole(`button`,{name:`Help and support`})).toBeVisible(),await S(E(t).getByRole(`button`,{name:`Nguu Nguyen`})).toBeVisible();let n=e=>{let t=e.getBoundingClientRect();return t.left+t.width/2},r=e=>E(t).getByRole(`button`,{name:e}).querySelector(`span`),i=n(E(t).getByRole(`link`,{name:`Invoices`}).querySelector(`span`));for(let e of[E(t).getByTestId(`brand`).querySelector(`img`),r(/Kafka Trading/),r(/Search/),r(/Nguu Nguyen/)])await S(n(e)).toBeCloseTo(i,0);await w.click(E(t).getByRole(`button`,{name:`Kafka Trading Co.`}));let a=E(document.body);await T(()=>S(a.getByRole(`menuitemradio`,{name:`Kafka Logistics`})).toBeVisible()),await w.keyboard(`{Escape}`),await T(()=>S(a.queryByRole(`menu`)).toBeNull())}},M={args:{header:void 0,footer:void 0,items:k},play:async({canvas:e})=>{await S(e.getByRole(`button`,{name:`Add to Pinned`})).toBeInTheDocument();let t=e.getByRole(`button`,{name:`Recent`});await S(t).toHaveAttribute(`aria-expanded`,`true`);let n=e.getByRole(`list`,{name:`Recent`});await S(t).toHaveAttribute(`aria-controls`,n.parentElement.id),await S(E(n).getAllByRole(`link`)).toHaveLength(3),await w.click(e.getByRole(`button`,{name:`Show more`})),await S(E(n).getAllByRole(`link`)).toHaveLength(5),await w.click(e.getByRole(`button`,{name:`Show less`})),await S(E(n).getAllByRole(`link`)).toHaveLength(3),await w.click(t),await S(t).toHaveAttribute(`aria-expanded`,`false`),await S(n).not.toBeVisible(),t.focus(),await w.keyboard(`{Enter}`),await S(n).toBeVisible()}},N={tags:[`!dev`],args:{header:void 0,footer:void 0,currentHref:`#r5`},play:async({canvas:e})=>{await S(e.getByRole(`link`,{name:`Credit note CN-77`})).toHaveAttribute(`aria-current`,`page`),await S(e.getByRole(`button`,{name:`Show less`})).toBeVisible()}},P={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Collapse sidebar`});await S(n).toHaveAttribute(`aria-expanded`,`true`),await w.click(n),await S(e.onCollapsedChange).toHaveBeenLastCalledWith(!0);let r=t.getByRole(`button`,{name:`Expand sidebar`});await S(r).toHaveAttribute(`aria-expanded`,`false`);let i=t.getByRole(`link`,{name:`Invoices`});await S(i).toHaveAttribute(`aria-current`,`page`),await S(t.getByRole(`list`,{name:`Pinned`})).toBeInTheDocument(),await S(t.queryByRole(`list`,{name:`Recent`})).toBeNull(),await S(t.getByRole(`link`,{name:`Inbox, 12`})).toBeInTheDocument(),await S(t.getByRole(`button`,{name:`Kafka Trading Co.`})).toBeVisible(),await S(t.getByRole(`button`,{name:`Search`})).toBeVisible(),await S(t.getByRole(`button`,{name:`Nguu Nguyen`})).toBeVisible(),await S(t.getByRole(`button`,{name:`Help and support`})).toBeVisible(),await S(t.getByRole(`button`,{name:`Notifications, 3`})).toBeVisible();let a=E(document.body);i.focus(),await T(()=>S(a.getByRole(`tooltip`)).toHaveTextContent(`Invoices`)),i.blur(),await T(()=>S(a.queryByRole(`tooltip`)).toBeNull()),r.focus(),await T(()=>S(getComputedStyle(r).opacity).toBe(`1`)),await w.keyboard(`{Enter}`),await S(t.getByRole(`button`,{name:`Collapse sidebar`})).toBeInTheDocument()}},F={args:{defaultCollapsed:!0}},I={args:{defaultCollapsed:!0},play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Main`}),r=n.parentElement,i=r.getBoundingClientRect().width;await S(i).toBeLessThan(100),await w.hover(t.getByRole(`link`,{name:`Invoices`})),await T(()=>S(n.getBoundingClientRect().width).toBeGreaterThan(200)),await S(r.getBoundingClientRect().width).toBeCloseTo(i,0),await S(getComputedStyle(n).position).toBe(`absolute`);let a=t.getByRole(`button`,{name:`Keep sidebar open`});await w.click(a),await S(e.onCollapsedChange).toHaveBeenLastCalledWith(!1),await T(()=>S(getComputedStyle(n).position).not.toBe(`absolute`)),await S(t.getByRole(`button`,{name:`Collapse sidebar`})).toHaveAttribute(`aria-expanded`,`true`)}},L={args:{brand:void 0,header:void 0,footer:void 0,isCollapsible:!1,items:O.slice(0,2),currentHref:`#inbox`}},R={tags:[`!dev`],args:{header:void 0,items:[{label:`Supercalifragilisticexpialidocious-invoice-reconciliation`,href:`#long`,icon:(0,x.jsx)(o,{name:`file`})},{type:`group`,label:`Empty`,items:[],action:D(`Add to Empty`)}],currentHref:`#long`},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await S(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await S(e.getByRole(`button`,{name:`Add to Empty`})).toBeInTheDocument()}},z=[{name:`Brand row`,selector:`nav > div:first-child`,description:`Optional: the logo, and the collapse button with isCollapsible.`},{name:`Collapse button`,selector:`button[aria-expanded][aria-label$="sidebar"]`,description:`Folds the sidebar to the icon rail and back.`},{name:`Header`,selector:`nav > div:nth-child(2)`,description:`Optional: a tenant switcher and search, as NavSidebarButtons.`},{name:`Item`,selector:`a[href="#inbox"]`,description:`A link: icon, label, optional badge. A flush row of tier md.`},{name:`Badge`,selector:`a[href="#inbox"] > span:last-child`,description:`Optional: a count or a short tag.`},{name:`Current item`,selector:`a[aria-current="page"]`,description:`The page the reader is on: the selected fill and medium weight.`},{name:`Category label`,selector:`button[aria-controls]:not([aria-haspopup])`,description:`Names the list; with isCollapsible, opens and closes it.`},{name:`Category action`,selector:`button[aria-label="Add to Pinned"]`,description:`Optional: e.g. adds an item. Shows on hover and focus.`},{name:`Show more`,selector:`nav ul + button`,description:`With limit: shows the rest of a long category.`},{name:`Footer`,selector:`nav > div:last-child`,description:`Optional, pinned to the bottom: the account, notifications, help.`}],B={tags:[`!dev`],args:{currentHref:`#vat`,items:k},play:async({canvasElement:e})=>{let t=await c(e,z);await S(t[0]).toHaveTextContent(`Zweihänder`),await S(t[6]).toHaveTextContent(`Pinned`),await S(t[9]).toHaveTextContent(`Nguu Nguyen`)}},V={tags:[`!dev`],parameters:{bare:!0},args:{brand:void 0,header:void 0,footer:void 0,isCollapsible:!1,items:[{label:`Inbox`,href:`#inbox`,icon:(0,x.jsx)(o,{name:`info`}),badge:12}],currentHref:void 0}},H={...V,args:{...V.args,currentHref:`#inbox`}},U={tags:[`!dev`],args:{brand:void 0,header:void 0,footer:void 0,isCollapsible:!1,items:O.slice(0,5)}},W={tags:[`!dev`],args:{brand:void 0,header:void 0,footer:void 0,isCollapsible:!1,currentHref:`#reports`,items:[{label:`Search across every workspace`,href:`#search`},{label:`Quarterly revenue reports for finance`,href:`#reports`},{label:`Customer onboarding checklist templates`,href:`#onboarding`}]}},G=[`Default`,`Categories`,`CurrentPastLimit`,`Collapsible`,`Collapsed`,`RailPreview`,`Plain`,`LongContent`,`anatomyParts`,`Anatomy`,`Item`,`CurrentItem`,`DoGroupWithIcons`,`DontLongLabelsNoIcons`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Invoices'
    })).toHaveAttribute('aria-current', 'page');
    // A badge joins the name with a comma.
    await expect(within(nav).getByRole('link', {
      name: 'Inbox, 12'
    })).not.toHaveAttribute('aria-current');
    await expect(within(nav).getByTestId('brand')).toBeVisible();
    // A category's name names its list; its add action is opt-in, off here.
    await expect(within(nav).getByRole('list', {
      name: 'Pinned'
    })).toBeVisible();
    await expect(within(nav).queryByRole('button', {
      name: 'Add to Pinned'
    })).toBeNull();
    // The header and footer rows are buttons named by their text.
    await expect(within(nav).getByRole('button', {
      name: 'Kafka Trading Co.'
    })).toBeVisible();
    // The shortcut hint is shown but kept out of the name.
    await expect(within(nav).getByRole('button', {
      name: 'Search'
    })).toBeVisible();
    await expect(within(nav).getByRole('button', {
      name: 'Notifications, 3'
    })).toBeVisible();
    await expect(within(nav).getByRole('button', {
      name: 'Help and support'
    })).toBeVisible();
    await expect(within(nav).getByRole('button', {
      name: 'Nguu Nguyen'
    })).toBeVisible();
    // Logo, tenant avatar, search icon, nav icon and account avatar share one centre line.
    const centre = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2;
    };
    const icon = (name: RegExp) => within(nav).getByRole('button', {
      name
    }).querySelector('span')!;
    const line = centre(within(nav).getByRole('link', {
      name: 'Invoices'
    }).querySelector('span')!);
    for (const el of [within(nav).getByTestId('brand').querySelector('img')!, icon(/Kafka Trading/), icon(/Search/), icon(/Nguu Nguyen/)]) await expect(centre(el)).toBeCloseTo(line, 0);
    // The tenant switcher is a Menu trigger.
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Kafka Trading Co.'
    }));
    const body = within(document.body);
    await waitFor(() => expect(body.getByRole('menuitemradio', {
      name: 'Kafka Logistics'
    })).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
  }
}`,...j.parameters?.docs?.source},description:{story:`The logo, tenant and search on top; categories; the account, notifications and help at the bottom.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    header: undefined,
    footer: undefined,
    items: itemsWithAction
  },
  play: async ({
    canvas
  }) => {
    // The add action, opted into on Pinned, is a named button in the label row.
    await expect(canvas.getByRole('button', {
      name: 'Add to Pinned'
    })).toBeInTheDocument();
    const toggle = canvas.getByRole('button', {
      name: 'Recent'
    });
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const recent = canvas.getByRole('list', {
      name: 'Recent'
    });
    await expect(toggle).toHaveAttribute('aria-controls', recent.parentElement!.id);
    await expect(within(recent).getAllByRole('link')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show more'
    }));
    await expect(within(recent).getAllByRole('link')).toHaveLength(5);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show less'
    }));
    await expect(within(recent).getAllByRole('link')).toHaveLength(3);
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(recent).not.toBeVisible();
    // Keyboard: Enter opens it again.
    toggle.focus();
    await userEvent.keyboard('{Enter}');
    await expect(recent).toBeVisible();
  }
}`,...M.parameters?.docs?.source},description:{story:`Categories open and close from their label, and a long one shows its first items with "Show more".`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    header: undefined,
    footer: undefined,
    currentHref: '#r5'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('link', {
      name: 'Credit note CN-77'
    })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('button', {
      name: 'Show less'
    })).toBeVisible();
  }
}`,...N.parameters?.docs?.source},description:{story:`The current page past a category's limit opens it, so the current page is never hidden.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const toggle = canvas.getByRole('button', {
      name: 'Collapse sidebar'
    });
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(toggle);
    await expect(args.onCollapsedChange).toHaveBeenLastCalledWith(true);
    const expand = canvas.getByRole('button', {
      name: 'Expand sidebar'
    });
    await expect(expand).toHaveAttribute('aria-expanded', 'false');
    const invoices = canvas.getByRole('link', {
      name: 'Invoices'
    });
    await expect(invoices).toHaveAttribute('aria-current', 'page');
    // Still findable by category name: the label is only visually hidden.
    await expect(canvas.getByRole('list', {
      name: 'Pinned'
    })).toBeInTheDocument();
    // Items without an icon, and the category they made up, are left out.
    await expect(canvas.queryByRole('list', {
      name: 'Recent'
    })).toBeNull();
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', {
      name: 'Inbox, 12'
    })).toBeInTheDocument();
    // The header and footer rows keep their names, now that only the icon shows.
    await expect(canvas.getByRole('button', {
      name: 'Kafka Trading Co.'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Search'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Nguu Nguyen'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Help and support'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Notifications, 3'
    })).toBeVisible();
    // Keyboard focus shows the label as a tooltip. (Hovering the rail opens
    // the preview instead; see RailPreview.)
    const body = within(document.body);
    invoices.focus();
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Invoices'));
    invoices.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
    // Keyboard focus on the expand button shows it over the logo.
    expand.focus();
    await waitFor(() => expect(getComputedStyle(expand).opacity).toBe('1'));
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Collapse sidebar'
    })).toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source},description:{story:`The icon rail: labels move into tooltips; the header and footer stay, as icons.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  },
  play: async ({
    args,
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    const slot = nav.parentElement!;
    const rail = slot.getBoundingClientRect().width;
    await expect(rail).toBeLessThan(100);
    await userEvent.hover(canvas.getByRole('link', {
      name: 'Invoices'
    }));
    // After the hover delay the full sidebar shows, floating: the slot keeps the rail's width.
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeGreaterThan(200));
    await expect(slot.getBoundingClientRect().width).toBeCloseTo(rail, 0);
    await expect(getComputedStyle(nav).position).toBe('absolute');
    const keep = canvas.getByRole('button', {
      name: 'Keep sidebar open'
    });
    await userEvent.click(keep);
    await expect(args.onCollapsedChange).toHaveBeenLastCalledWith(false);
    await waitFor(() => expect(getComputedStyle(nav).position).not.toBe('absolute'));
    await expect(canvas.getByRole('button', {
      name: 'Collapse sidebar'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...I.parameters?.docs?.source},description:{story:`Hovering the rail floats the full sidebar over the page, as in the Claude
apps, while the rail keeps its place in the layout; the preview's button
docks it.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    items: items.slice(0, 2),
    currentHref: '#inbox'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    header: undefined,
    items: [{
      label: 'Supercalifragilisticexpialidocious-invoice-reconciliation',
      href: '#long',
      icon: <Icon name="file" />
    }, {
      type: 'group',
      label: 'Empty',
      items: [],
      action: add('Add to Empty')
    }],
    currentHref: '#long'
  },
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(nav.scrollWidth).toBeLessThanOrEqual(nav.clientWidth);
    await expect(canvas.getByRole('button', {
      name: 'Add to Empty'
    })).toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source},description:{story:`Harsh content: a label with no spaces, and a category with nothing in it.`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    currentHref: '#vat',
    items: itemsWithAction
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Zweihänder');
    await expect(found[6]).toHaveTextContent('Pinned');
    await expect(found[9]).toHaveTextContent('Nguu Nguyen');
  }
}`,...B.parameters?.docs?.source},description:{story:`Every part present.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    bare: true
  },
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    items: [{
      label: 'Inbox',
      href: '#inbox',
      icon: <Icon name="info" />,
      badge: 12
    }],
    currentHref: undefined
  }
}`,...V.parameters?.docs?.source},description:{story:`One item, sized to its content, for the States table.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...Item,
  args: {
    ...Item.args,
    currentHref: '#inbox'
  }
}`,...H.parameters?.docs?.source},description:{story:`The same item, current.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    items: items.slice(0, 5)
  }
}`,...U.parameters?.docs?.source},description:{story:`Guidelines, Do: short labels, each with an icon, grouped under a few names.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    brand: undefined,
    header: undefined,
    footer: undefined,
    isCollapsible: false,
    currentHref: '#reports',
    items: [{
      label: 'Search across every workspace',
      href: '#search'
    }, {
      label: 'Quarterly revenue reports for finance',
      href: '#reports'
    }, {
      label: 'Customer onboarding checklist templates',
      href: '#onboarding'
    }]
  }
}`,...W.parameters?.docs?.source},description:{story:`Guidelines, Don't: items without icons cannot collapse to a rail, and long labels get cut.`,...W.parameters?.docs?.description}}}})))()}export{j as a,V as c,I as d,z as f,H as i,b as l,M as n,U as o,K as p,P as r,W as s,B as t,L as u};