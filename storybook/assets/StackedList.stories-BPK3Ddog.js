import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C9aTyDDd.js";import{n as o,r as s}from"./Tag-DjFi4YNU.js";import{n as c,t as l}from"./Badge-DS9CFLFc.js";import{r as u,t as d}from"./Avatar-Br9NGvV-.js";import{n as f,t as p}from"./Link-Bhk0TW_i.js";import{n as m,t as h}from"./Pagination-CNj7Ulyf.js";import{n as g,t as _}from"./StackedList-CbCllvYC.js";var v=t({Dark:()=>B,Empty:()=>R,Linked:()=>N,LinkedWithActions:()=>F,LongContent:()=>z,Simple:()=>M,WithActions:()=>P,WithPagination:()=>I,WithViewAll:()=>L,__namedExportsOrder:()=>V,default:()=>j});function y(){let[e,t]=(0,b.useState)(1),n=[...D,...D,...D].map((e,t)=>({...e,id:t,title:`${e.title} ${t+1}`}));return(0,x.jsx)(_,{role:`region`,"aria-label":`Team`,items:n.slice((e-1)*3,e*3),footer:(0,x.jsx)(h,{totalItems:n.length,pageSize:3,page:e,onPageChange:t,size:`sm`,"aria-label":`Team pages`})})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{b=n(),i(),u(),c(),s(),f(),m(),g(),x=r(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=[{id:1,media:(0,x.jsx)(d,{initials:`IO`,color:`teal`}),title:`Ines Okafor`,description:`ines.okafor@example.com`,meta:`Finance lead`},{id:2,media:(0,x.jsx)(d,{initials:`TL`,color:`violet`}),title:`Tomas Lindqvist`,description:`tomas.lindqvist@example.com`,meta:`Controller`},{id:3,media:(0,x.jsx)(d,{initials:`NH`,color:`amber`}),title:`Noor Haddad`,description:`noor.haddad@example.com`,meta:`Accountant`}],O=[{id:`harbor`,media:(0,x.jsx)(a,{name:`file`}),title:`Harbor Lights`,status:(0,x.jsx)(o,{size:`sm`,variant:`success`,text:`Active`}),description:`Ines Okafor`,meta:`Due Nov 14`,href:`#harbor`},{id:`ledger`,media:(0,x.jsx)(a,{name:`file`}),title:`Ledger migration`,status:(0,x.jsx)(o,{size:`sm`,variant:`neutral`,text:`On hold`}),description:`Tomas Lindqvist`,meta:`Due Dec 2`,href:`#ledger`},{id:`audit`,media:(0,x.jsx)(a,{name:`file`}),title:`Year-end audit`,status:(0,x.jsx)(o,{size:`sm`,variant:`danger`,text:`Expired`}),description:`Noor Haddad`,meta:`Due Oct 1`,href:`#audit`}],k=C(),A=e=>[{label:`Edit`},{label:`Send message`},{type:`separator`},{label:`Remove`,isDestructive:!0,onSelect:()=>k(e)}],j={title:`Patterns/Application UI/Stacked List`,tags:[`experimental`],component:_,parameters:{layout:`padded`},args:{items:D,"aria-label":`Team`,role:`region`},argTypes:{items:{description:"The rows, in the order shown. Each has a `title`, and may have `media` (an Avatar or an Icon), `description` (a line under the title), `status` (a Tag or Badge after it), `meta` (facts at the end), `href` (the row links, with a chevron), `onClick` (runs when it is followed), `actions` (Menu entries: a ⋯ button and a context menu) and `id`.",control:!1},appearance:{description:"The frame, from List Container: `flat` (lines between rows), `card` (the same in a bordered panel) or `separate` (each row its own panel).",control:`inline-radio`,options:[`flat`,`card`,`separate`],table:{type:{summary:`'flat' | 'card' | 'separate'`},defaultValue:{summary:`'flat'`}}},footer:{description:`After the last row, past a divider: a Pagination or a "View all" link. Rendered as given.`,control:!1},empty:{description:`Shown instead of the list when there are no items.`,control:`text`,table:{defaultValue:{summary:`"Nothing here yet."`}}}},decorators:[e=>(0,x.jsx)(`div`,{style:{maxInlineSize:640},children:(0,x.jsx)(e,{})})]},M={play:async({canvas:e})=>{await S(e.getByRole(`region`,{name:`Team`})).toBeVisible(),await S(e.getByRole(`list`).tagName).toBe(`UL`);let t=e.getAllByRole(`listitem`);await S(t).toHaveLength(3),await S(t[1]).toHaveTextContent(`Tomas Lindqvisttomas.lindqvist@example.comController`),await S(t[0].querySelector(`:scope > [aria-hidden="true"]`)).not.toBeNull(),await S(getComputedStyle(t[0]).borderTopWidth).toBe(`0px`),await S(getComputedStyle(t[1]).borderTopWidth).toBe(`1px`),await T(()=>S(e.getByText(`Controller`).getBoundingClientRect().left).toBeGreaterThan(e.getByText(`Tomas Lindqvist`).getBoundingClientRect().right)),await S(e.queryByRole(`link`)).toBeNull(),await S(e.queryByRole(`button`)).toBeNull()}},N={args:{items:O,"aria-label":`Projects`},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=e.getByRole(`link`,{name:`Harbor Lights`});await S(n).toHaveAttribute(`href`,`#harbor`),await S(getComputedStyle(n,`::after`).position).toBe(`absolute`),await S(n.offsetParent).toBe(t[0]),await S(t[0]).toHaveTextContent(/^Harbor LightsActive/),await S(t[0].querySelector(`:scope > svg`)).toHaveAttribute(`aria-hidden`,`true`),await w.tab(),await S(n).toHaveFocus(),await w.tab(),await S(e.getByRole(`link`,{name:`Ledger migration`})).toHaveFocus()}},P={args:{items:D.map(e=>({...e,actions:A(e.title)}))},decorators:[e=>(0,x.jsx)(`div`,{style:{minBlockSize:`20rem`},children:e()})],play:async({canvas:e})=>{k.mockClear();let t=E(document.body),n=e.getAllByRole(`listitem`);await S(n[0].parentElement?.tagName).toBe(`UL`);let r=e.getByRole(`button`,{name:`Actions for Tomas Lindqvist`});await w.click(r),await w.click(await t.findByRole(`menuitem`,{name:`Remove`})),await S(k).toHaveBeenCalledWith(`Tomas Lindqvist`),await w.pointer({keys:`[MouseRight]`,target:n[2]}),await t.findByRole(`menu`),await w.click(t.getByRole(`menuitem`,{name:`Remove`})),await S(k).toHaveBeenLastCalledWith(`Noor Haddad`)}},F={args:{"aria-label":`Projects`,items:O.map((e,t)=>({...e,status:t===0?(0,x.jsxs)(x.Fragment,{children:[e.status,(0,x.jsx)(l,{count:3,size:`sm`,"aria-label":`3 unread comments`})]}):e.status,actions:A(e.title)}))},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`);await S(t[0].querySelector(`:scope > svg`)).toBeNull();let n=e.getByRole(`button`,{name:`Actions for Harbor Lights`});await T(()=>{let e=n.getBoundingClientRect();S(document.elementFromPoint(e.left+e.width/2,e.top+e.height/2)?.closest(`button`)).toBe(n)}),await S(t[0]).not.toHaveAttribute(`data-popup-open`),await w.pointer({keys:`[MouseRight]`,target:t[0]}),await S(E(document.body).queryByRole(`menu`)).toBeNull(),await S(e.getByRole(`img`,{name:`3 unread comments`})).toBeVisible(),await w.tab(),await S(e.getByRole(`link`,{name:`Harbor Lights`})).toHaveFocus(),await w.tab(),await S(n).toHaveFocus()}},I={render:()=>(0,x.jsx)(y,{}),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Team pages`}),n=e.getAllByRole(`list`)[0];await S(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await S(getComputedStyle(t.parentElement).borderTopWidth).toBe(`1px`),await w.click(E(t).getByRole(`button`,{name:/2/})),await S(E(n).getAllByRole(`listitem`)[0]).toHaveTextContent(`Ines Okafor 4`)}},L={args:{footer:(0,x.jsx)(p,{href:`#team`,children:`View all`})},play:async({canvas:e})=>{await S(e.getByRole(`link`,{name:`View all`})).toBeVisible()}},R={args:{items:[],empty:`No one on the team yet.`,footer:(0,x.jsx)(p,{href:`#invite`,children:`Invite people`})},play:async({canvas:e})=>{await S(e.queryByRole(`list`)).toBeNull(),await S(e.getByText(`No one on the team yet.`)).toBeVisible(),await S(e.getByRole(`link`,{name:`Invite people`})).toBeVisible()}},z={args:{items:[{media:(0,x.jsx)(d,{initials:`MW`}),title:`Maximiliana Wolfeschlegelsteinhausenbergerdorff`,status:(0,x.jsx)(o,{size:`sm`,variant:`neutral`,text:`Invited`}),description:`maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com`,meta:`Senior accounts payable specialist`,href:`#max`,actions:A(`Maximiliana`)},...D]},decorators:[e=>(0,x.jsx)(`div`,{style:{inlineSize:300},children:(0,x.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByRole(`region`);await T(()=>S(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)),await T(()=>S(e.getByText(`Senior accounts payable specialist`).getBoundingClientRect().top).toBeGreaterThanOrEqual(e.getByText(/maximiliana\.wolfe/).getBoundingClientRect().bottom))}},B={...F,globals:{theme:`dark`}},V=[`Simple`,`Linked`,`WithActions`,`LinkedWithActions`,`WithPagination`,`WithViewAll`,`Empty`,`LongContent`,`Dark`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('region', {
      name: 'Team'
    })).toBeVisible();
    // An unordered list: the count is announced.
    await expect(canvas.getByRole('list').tagName).toBe('UL');
    const rows = canvas.getAllByRole('listitem');
    await expect(rows).toHaveLength(3);
    // Read in order: name, email, role.
    await expect(rows[1]).toHaveTextContent('Tomas Lindqvisttomas.lindqvist@example.comController');
    // The avatar says nothing the name does not.
    await expect(rows[0].querySelector(':scope > [aria-hidden="true"]')).not.toBeNull();
    // A line divides the rows, not the first from what is above.
    await expect(getComputedStyle(rows[0]).borderTopWidth).toBe('0px');
    await expect(getComputedStyle(rows[1]).borderTopWidth).toBe('1px');
    // The role sits at the end of the row, level with the name.
    await waitFor(() => expect(canvas.getByText('Controller').getBoundingClientRect().left).toBeGreaterThan(canvas.getByText('Tomas Lindqvist').getBoundingClientRect().right));
    // No link, no menu: nothing to tab to.
    await expect(canvas.queryByRole('link')).toBeNull();
    await expect(canvas.queryByRole('button')).toBeNull();
  }
}`,...M.parameters?.docs?.source},description:{story:`People: an avatar, a name with an email under it, and a role at the end.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: projects,
    'aria-label': 'Projects'
  },
  play: async ({
    canvas
  }) => {
    const rows = canvas.getAllByRole('listitem');
    const link = canvas.getByRole('link', {
      name: 'Harbor Lights'
    });
    await expect(link).toHaveAttribute('href', '#harbor');
    // The link's box covers the whole row.
    await expect(getComputedStyle(link, '::after').position).toBe('absolute');
    await expect(link.offsetParent).toBe(rows[0]);
    // The status is read after the title, outside the link's name.
    await expect(rows[0]).toHaveTextContent(/^Harbor LightsActive/);
    // The chevron is decorative.
    await expect(rows[0].querySelector(':scope > svg')).toHaveAttribute('aria-hidden', 'true');
    // Keyboard: one stop per row.
    await userEvent.tab();
    await expect(link).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Ledger migration'
    })).toHaveFocus();
  }
}`,...N.parameters?.docs?.source},description:{story:`Records that open: the title links to the record, the whole row is the target, and a chevron says so. A status Tag follows the title.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    items: people.map(p => ({
      ...p,
      actions: actions(p.title as string)
    }))
  },
  decorators: [Story => <div style={{
    minBlockSize: '20rem'
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    onDelete.mockClear();
    const body = within(document.body);
    const rows = canvas.getAllByRole('listitem');
    // The <li> is the context menu area itself: no wrapper inside the list.
    await expect(rows[0].parentElement?.tagName).toBe('UL');
    const button = canvas.getByRole('button', {
      name: 'Actions for Tomas Lindqvist'
    });
    await userEvent.click(button);
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'Remove'
    }));
    await expect(onDelete).toHaveBeenCalledWith('Tomas Lindqvist');
    // Right click on the row opens the same entries.
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: rows[2]
    });
    await body.findByRole('menu');
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Remove'
    }));
    await expect(onDelete).toHaveBeenLastCalledWith('Noor Haddad');
  }
}`,...P.parameters?.docs?.source},description:{story:`A ⋯ Menu at the end of each row, named after the row; right click or long press on the row opens the same entries at the pointer.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Projects',
    items: projects.map((p, i) => ({
      ...p,
      status: i === 0 ? <>{p.status}<Badge count={3} size="sm" aria-label="3 unread comments" /></> : p.status,
      actions: actions(p.title as string)
    }))
  },
  play: async ({
    canvas
  }) => {
    const rows = canvas.getAllByRole('listitem');
    // A menu instead of the chevron.
    await expect(rows[0].querySelector(':scope > svg')).toBeNull();
    const button = canvas.getByRole('button', {
      name: 'Actions for Harbor Lights'
    });
    await waitFor(() => {
      const box = button.getBoundingClientRect();
      expect(document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2)?.closest('button')).toBe(button);
    });
    // A linked row keeps the browser's link menu: no context menu area on it.
    await expect(rows[0]).not.toHaveAttribute('data-popup-open');
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: rows[0]
    });
    await expect(within(document.body).queryByRole('menu')).toBeNull();
    await expect(canvas.getByRole('img', {
      name: '3 unread comments'
    })).toBeVisible();
    // Keyboard: the link, then its menu.
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Harbor Lights'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(button).toHaveFocus();
  }
}`,...F.parameters?.docs?.source},description:{story:`A link and a menu in one row: the menu sits above the row's link, so it gets the click; an unread count rides along as a Badge.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Paged />,
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Team pages'
    });
    // The footer comes after the list, past a divider.
    const list = canvas.getAllByRole('list')[0];
    await expect(list.compareDocumentPosition(nav) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await expect(getComputedStyle(nav.parentElement!).borderTopWidth).toBe('1px');
    await userEvent.click(within(nav).getByRole('button', {
      name: /2/
    }));
    await expect(within(list).getAllByRole('listitem')[0]).toHaveTextContent('Ines Okafor 4');
  }
}`,...I.parameters?.docs?.source},description:{story:`A Pagination in the footer, for a long list on its own page.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <Link href="#team">View all</Link>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('link', {
      name: 'View all'
    })).toBeVisible();
  }
}`,...L.parameters?.docs?.source},description:{story:`A "View all" link in the footer, for a short list in a card or on a dashboard.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    empty: 'No one on the team yet.',
    footer: <Link href="#invite">Invite people</Link>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByText('No one on the team yet.')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Invite people'
    })).toBeVisible();
  }
}`,...R.parameters?.docs?.source},description:{story:`Nothing yet: a line in place of the list. The footer still shows.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      media: <Avatar initials="MW" />,
      title: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
      status: <Tag size="sm" variant="neutral" text="Invited" />,
      description: 'maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com',
      meta: 'Senior accounts payable specialist',
      href: '#max',
      actions: actions('Maximiliana')
    }, ...people]
  },
  decorators: [Story => <div style={{
    inlineSize: 300
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const list = canvas.getByRole('region');
    await waitFor(() => expect(list.scrollWidth).toBeLessThanOrEqual(list.clientWidth));
    // The facts move under the text instead of squeezing it.
    await waitFor(() => expect(canvas.getByText('Senior accounts payable specialist').getBoundingClientRect().top).toBeGreaterThanOrEqual(canvas.getByText(/maximiliana\\.wolfe/).getBoundingClientRect().bottom));
  }
}`,...z.parameters?.docs?.source},description:{story:`Harsh content in a narrow column: the facts wrap under the text, and words with no spaces break rather than overflow.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  ...LinkedWithActions,
  globals: {
    theme: 'dark'
  }
}`,...B.parameters?.docs?.source},description:{story:`Dark mode, with links and actions, so the accessibility check covers both themes.`,...B.parameters?.docs?.description}}}})))()}export{M as a,I as c,z as i,L as l,N as n,v as o,F as r,P as s,R as t,H as u};