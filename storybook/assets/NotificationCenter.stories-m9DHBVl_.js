import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{r as c,t as l}from"./Avatar-Br9NGvV-.js";import{i as u,t as d}from"./Menu-NLwpYJmZ.js";import{i as f,n as p}from"./TopBar-DXYi-mW1.js";import{n as m,r as h,t as g}from"./NotificationCenter-DE4uz1CL.js";var _=t({Dark:()=>V,Default:()=>F,Empty:()=>R,LongContent:()=>B,ManyItems:()=>z,Open:()=>L,WithTabs:()=>I,__namedExportsOrder:()=>H,default:()=>P});function v(){let[e,t]=(0,x.useState)(M),n=e=>t(t=>t.map(t=>e===void 0||t.id===e?{...t,isUnread:!1}:t));return{items:e.map(e=>({...e,onClick:t=>{t.preventDefault(),n(e.id)}})),onMarkAllRead:()=>n(),actions:N,formatTime:j}}function y(e){return(0,S.jsx)(m,{...v(),...e})}function b(){return(0,S.jsx)(g,{...v()})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{x=n(),o(),c(),i(),u(),h(),f(),S=r(),{expect:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=()=>E(document.body),O=new Date(2026,9,27,12),k=e=>new Date(O.getTime()-e*6e4),A=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),j=e=>{let t=Math.round((e.getTime()-O.getTime())/6e4);return t>-60?A.format(t,`minute`):t>-1440?A.format(Math.round(t/60),`hour`):A.format(Math.round(t/1440),`day`)},M=[{id:1,media:(0,S.jsx)(l,{size:`sm`,initials:`LT`,color:`teal`}),actor:`Linh Tran`,action:(0,S.jsxs)(S.Fragment,{children:[`approved `,(0,S.jsx)(`strong`,{children:`PO-118`})]}),at:k(5),href:`#po-118`,isUnread:!0},{id:2,media:(0,S.jsx)(s,{name:`warning`}),actor:`INV-2039`,action:`is 14 days overdue`,at:k(180),href:`#inv-2039`,isUnread:!0},{id:3,media:(0,S.jsx)(l,{size:`sm`,initials:`NH`,color:`violet`}),actor:`Noor Haddad`,action:(0,S.jsxs)(S.Fragment,{children:[`mentioned you on `,(0,S.jsx)(`strong`,{children:`Harbor Lights`})]}),at:k(1560),href:`#harbor-lights`,comment:`Can you check the second-phase budget before Friday?`,isUnread:!0},{id:4,media:(0,S.jsx)(s,{name:`success`}),actor:`September close`,action:`is ready to review`,at:k(4320),href:`#close`},{id:5,media:(0,S.jsx)(s,{name:`file`}),actor:`Tomas Lindqvist`,action:(0,S.jsxs)(S.Fragment,{children:[`shared `,(0,S.jsx)(`strong`,{children:`Q3 forecast.xlsx`})]}),at:k(8640),href:`#q3-forecast`}],N=(0,S.jsx)(d,{align:`end`,trigger:(0,S.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`More`,children:(0,S.jsx)(s,{name:`more`})}),items:[{label:`View all notifications`,href:`#notifications`},{label:`Notification settings`,href:`#settings`}]}),P={title:`Patterns/Application UI/Notification Center`,tags:[`experimental`],component:g,parameters:{layout:`padded`},args:{items:M,formatTime:j},argTypes:{items:{description:"The notifications, newest first: Feed items (`actor`, `action`, `at`, and `media`, `comment`, `id`), with `href` to make the row a link and `isUnread` for the dot and the count.",control:!1},onMarkAllRead:{description:'Shows "Mark all as read" in the header, disabled while nothing is unread. Marking is yours: set `isUnread` to false.',control:!1},actions:{description:`More header actions after "Mark all as read", such as a link to notification settings. Rendered as given.`,control:!1},hasTabs:{description:`All and Unread tabs above the list; Unread carries the count.`,table:{defaultValue:{summary:`false`}}},empty:{description:`Shown instead of the list when there are no notifications.`,control:`text`,table:{defaultValue:{summary:`"No notifications yet."`}}},emptyUnread:{description:`Shown on the Unread tab when everything is read.`,control:`text`,table:{defaultValue:{summary:`"You are all caught up."`}}},formatTime:{description:'How the time reads. A relative time ("5 minutes ago") suits notifications; the `<time>` element carries the ISO moment either way.',control:!1},title:{description:`The panel's heading.`,control:`text`,table:{defaultValue:{summary:`"Notifications"`}}},headingLevel:{description:`The heading's level, to fit the page outline.`,control:`select`,options:[2,3,4],table:{defaultValue:{summary:`2`}}},label:{description:`The bell's accessible name; the unread count is added to it ("Notifications, 3 unread").`,control:`text`,table:{defaultValue:{summary:`"Notifications"`}}},side:{description:`Which side of the bell the panel opens on.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{defaultValue:{summary:`"bottom"`}}},align:{description:`How the panel lines up with the bell.`,control:`select`,options:[`start`,`center`,`end`],table:{defaultValue:{summary:`"end"`}}},open:{description:`Controlled open state.`,control:!1},defaultOpen:{description:`Open on first render.`,table:{defaultValue:{summary:`false`}}},onOpenChange:{description:`Called when the panel opens or closes.`,control:!1},container:{description:"Where the panel renders instead of `<body>`.",control:!1}}},F={render:()=>(0,S.jsx)(p,{end:(0,S.jsx)(b,{})}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Notifications, 3 unread`});await C(t).toHaveTextContent(`3`),await w.click(t);let n=await D().findByRole(`dialog`,{name:`Notifications`});await T(()=>C(n.contains(document.activeElement)).toBe(!0)),await T(()=>C(E(n).getByRole(`heading`,{level:2,name:`Notifications`})).toBeVisible());let r=E(n).getAllByRole(`listitem`);await C(r).toHaveLength(5),await C(E(r[0]).getByRole(`link`)).toHaveAttribute(`href`,`#po-118`),await C(E(r[0]).getByRole(`img`,{name:`Unread`})).toBeVisible(),await C(E(r[3]).queryByRole(`img`,{name:`Unread`})).toBeNull(),await w.click(E(r[0]).getByRole(`link`)),await T(()=>C(E(r[0]).queryByRole(`img`,{name:`Unread`})).toBeNull()),await C(e.getByRole(`button`,{name:`Notifications, 2 unread`})).toBeInTheDocument();let i=E(n).getByRole(`button`,{name:`Mark all as read`});await w.click(i),await T(()=>C(E(n).queryAllByRole(`img`,{name:`Unread`})).toHaveLength(0)),await C(i).toBeDisabled(),await w.keyboard(`{Escape}`),await T(()=>C(D().queryByRole(`dialog`)).toBeNull());let a=e.getByRole(`button`,{name:`Notifications`});await T(()=>C(a).toHaveFocus()),await C(a).not.toHaveTextContent(/\d/)}},I={render:()=>(0,S.jsx)(`div`,{style:{maxInlineSize:400},children:(0,S.jsx)(y,{hasTabs:!0})}),play:async({canvas:e})=>{let t=e.getByRole(`tab`,{name:`Unread 3`});await C(e.getByRole(`tab`,{name:`All`})).toHaveAttribute(`aria-selected`,`true`),await w.click(t);let n=await T(()=>e.getByRole(`tabpanel`));await C(E(n).getAllByRole(`listitem`)).toHaveLength(3),await w.click(e.getByRole(`button`,{name:`Mark all as read`})),await T(()=>C(E(e.getByRole(`tabpanel`)).getByText(`You are all caught up.`)).toBeVisible()),await C(e.getByRole(`tab`,{name:`Unread`})).toBeVisible()}},L={args:{defaultOpen:!0,onMarkAllRead:()=>{},actions:N},render:e=>(0,S.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,minBlockSize:560},children:(0,S.jsx)(g,{...e})}),play:async()=>{let e=await D().findByRole(`dialog`,{name:`Notifications`});await T(()=>C(e.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth))}},R={render:e=>(0,S.jsx)(`div`,{style:{maxInlineSize:400},children:(0,S.jsx)(m,{items:[],formatTime:e.formatTime,onMarkAllRead:()=>{}})}),play:async({canvas:e})=>{await C(e.queryByRole(`list`)).toBeNull(),await C(e.getByText(`No notifications yet.`)).toBeVisible(),await C(e.getByRole(`button`,{name:`Mark all as read`})).toBeDisabled()}},z={args:{defaultOpen:!0,onMarkAllRead:()=>{},items:Array.from({length:30},(e,t)=>({...M[t%M.length],id:t}))},render:e=>(0,S.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,S.jsx)(g,{...e})}),play:async()=>{let e=await D().findByRole(`dialog`,{name:`Notifications`});await T(()=>C(e.scrollHeight).toBeGreaterThan(e.clientHeight));let t=E(e).getByRole(`heading`,{name:`Notifications`});e.scrollTop=e.scrollHeight,await T(()=>C(t.getBoundingClientRect().top).toBeGreaterThanOrEqual(e.getBoundingClientRect().top)),await C(t.getBoundingClientRect().bottom).toBeLessThanOrEqual(e.getBoundingClientRect().bottom)}},B={render:e=>(0,S.jsx)(`div`,{"data-testid":`column`,style:{inlineSize:280},children:(0,S.jsx)(m,{formatTime:e.formatTime,items:[{media:(0,S.jsx)(s,{name:`file`}),actor:`Maximiliana Wolfeschlegelsteinhausenbergerdorff`,action:(0,S.jsxs)(S.Fragment,{children:[`shared `,(0,S.jsx)(`strong`,{children:`Quarterly_reconciliation_export_for_the_northern_region_v2_final.xlsx`})]}),at:k(3),href:`#file`,isUnread:!0},...M],onMarkAllRead:()=>{},actions:N})}),play:async({canvasElement:e,canvas:t})=>{let n=e.querySelector(`[data-testid="column"]`);await C(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth);let r=t.getAllByRole(`listitem`)[0],i=E(r).getByRole(`img`,{name:`Unread`}).getBoundingClientRect(),a=r.querySelector(`p`).getBoundingClientRect();await C(i.left).toBeGreaterThanOrEqual(a.right)}},V={...I,play:void 0,globals:{theme:`dark`}},H=[`Default`,`WithTabs`,`Open`,`Empty`,`ManyItems`,`LongContent`,`Dark`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <TopBar end={<Live />} />,
  play: async ({
    canvas
  }) => {
    const bell = canvas.getByRole('button', {
      name: 'Notifications, 3 unread'
    });
    // The badge shows the count; the name says it.
    await expect(bell).toHaveTextContent('3');
    await userEvent.click(bell);
    const panel = await body().findByRole('dialog', {
      name: 'Notifications'
    });
    // Focus moves into the panel, and a heading names it.
    await waitFor(() => expect(panel.contains(document.activeElement)).toBe(true));
    // The popup fades in, so wait for it to show.
    await waitFor(() => expect(within(panel).getByRole('heading', {
      level: 2,
      name: 'Notifications'
    })).toBeVisible());
    // Each row is a link; unread ones say so.
    const rows = within(panel).getAllByRole('listitem');
    await expect(rows).toHaveLength(5);
    await expect(within(rows[0]).getByRole('link')).toHaveAttribute('href', '#po-118');
    await expect(within(rows[0]).getByRole('img', {
      name: 'Unread'
    })).toBeVisible();
    await expect(within(rows[3]).queryByRole('img', {
      name: 'Unread'
    })).toBeNull();
    // Following a link marks that one read.
    await userEvent.click(within(rows[0]).getByRole('link'));
    await waitFor(() => expect(within(rows[0]).queryByRole('img', {
      name: 'Unread'
    })).toBeNull());
    await expect(canvas.getByRole('button', {
      name: 'Notifications, 2 unread'
    })).toBeInTheDocument();
    // Mark all as read: the dots go, the button disables, the bell's count goes.
    const markAll = within(panel).getByRole('button', {
      name: 'Mark all as read'
    });
    await userEvent.click(markAll);
    await waitFor(() => expect(within(panel).queryAllByRole('img', {
      name: 'Unread'
    })).toHaveLength(0));
    await expect(markAll).toBeDisabled();
    // Escape closes it and returns focus to the bell, now without a count.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    const quiet = canvas.getByRole('button', {
      name: 'Notifications'
    });
    await waitFor(() => expect(quiet).toHaveFocus());
    await expect(quiet).not.toHaveTextContent(/\\d/);
  }
}`,...F.parameters?.docs?.source},description:{story:`A bell at the end of the Top Bar. It names the unread count; the panel opens under it.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxInlineSize: 400
  }}>
      <LivePanel hasTabs />
    </div>,
  play: async ({
    canvas
  }) => {
    const unreadTab = canvas.getByRole('tab', {
      name: 'Unread 3'
    });
    await expect(canvas.getByRole('tab', {
      name: 'All'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(unreadTab);
    // The All panel fades out first, so wait until only Unread's is left.
    const panel = await waitFor(() => canvas.getByRole('tabpanel'));
    await expect(within(panel).getAllByRole('listitem')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Mark all as read'
    }));
    await waitFor(() => expect(within(canvas.getByRole('tabpanel')).getByText('You are all caught up.')).toBeVisible());
    await expect(canvas.getByRole('tab', {
      name: 'Unread'
    })).toBeVisible();
  }
}`,...I.parameters?.docs?.source},description:{story:`The panel on its own, with All and Unread tabs: for a Drawer, or a column of a page.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    onMarkAllRead: () => {},
    actions: settings
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    minBlockSize: 560
  }}>
      <NotificationCenter {...args} />
    </div>,
  play: async () => {
    const panel = await body().findByRole('dialog', {
      name: 'Notifications'
    });
    // As wide as a Popover goes, never past the window.
    await waitFor(() => expect(panel.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth));
  }
}`,...L.parameters?.docs?.source},description:{story:`Open from the start, the way it looks under the bell.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxInlineSize: 400
  }}>
      <NotificationPanel items={[]} formatTime={args.formatTime} onMarkAllRead={() => {}} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByText('No notifications yet.')).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Mark all as read'
    })).toBeDisabled();
  }
}`,...R.parameters?.docs?.source},description:{story:`Nothing yet: the line in place of the list, no count on the bell, Mark all as read disabled.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    onMarkAllRead: () => {},
    items: Array.from({
      length: 30
    }, (_, i) => ({
      ...notifications[i % notifications.length],
      id: i
    }))
  },
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <NotificationCenter {...args} />
    </div>,
  play: async () => {
    const panel = await body().findByRole('dialog', {
      name: 'Notifications'
    });
    await waitFor(() => expect(panel.scrollHeight).toBeGreaterThan(panel.clientHeight));
    const heading = within(panel).getByRole('heading', {
      name: 'Notifications'
    });
    panel.scrollTop = panel.scrollHeight;
    // The header stays at the top of the popup while the list scrolls.
    await waitFor(() => expect(heading.getBoundingClientRect().top).toBeGreaterThanOrEqual(panel.getBoundingClientRect().top));
    await expect(heading.getBoundingClientRect().bottom).toBeLessThanOrEqual(panel.getBoundingClientRect().bottom);
  }
}`,...z.parameters?.docs?.source},description:{story:`Many notifications in a short window: the list scrolls under the pinned header.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div data-testid="column" style={{
    inlineSize: 280
  }}>
      <NotificationPanel formatTime={args.formatTime} items={[{
      media: <Icon name="file" />,
      actor: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
      action: <>shared <strong>Quarterly_reconciliation_export_for_the_northern_region_v2_final.xlsx</strong></>,
      at: ago(3),
      href: '#file',
      isUnread: true
    }, ...notifications]} onMarkAllRead={() => {}} actions={settings} />
    </div>,
  play: async ({
    canvasElement,
    canvas
  }) => {
    const column = canvasElement.querySelector<HTMLElement>('[data-testid="column"]')!;
    await expect(column.scrollWidth).toBeLessThanOrEqual(column.clientWidth);
    const row = canvas.getAllByRole('listitem')[0];
    const dot = within(row).getByRole('img', {
      name: 'Unread'
    }).getBoundingClientRect();
    const sentence = row.querySelector('p')!.getBoundingClientRect();
    await expect(dot.left).toBeGreaterThanOrEqual(sentence.right);
  }
}`,...B.parameters?.docs?.source},description:{story:`Harsh content: a name and a document with no spaces in a narrow panel. They wrap, never overflow; the dot keeps its column.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...WithTabs,
  play: undefined,
  globals: {
    theme: 'dark'
  }
}`,...V.parameters?.docs?.source},description:{story:`Dark mode, with tabs, so the accessibility check covers both themes.`,...V.parameters?.docs?.description}}}})))()}export{L as a,_ as i,R as n,I as o,B as r,U as s,F as t};