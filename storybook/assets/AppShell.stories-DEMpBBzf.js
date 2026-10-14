import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-B7N9C5Fg.js";import{n as a,t as o}from"./icon-C8IlC69p.js";import{n as s,t as c}from"./Avatar-BBwyc8n2.js";import{n as l,t as u}from"./Search-4b91RVgZ.js";import{n as d,t as f}from"./Menu-CDcAobrP.js";import{n as p,t as m}from"./Sidebar-BrzJz0jX.js";import{i as h,n as g,r as _,t as v}from"./AppShell-mVHKSfOV.js";import{n as y,t as b}from"./PageHeading-BtfeZsYm.js";import{n as x,t as S}from"./Stats-DY_CHUOe.js";var C=t({CollapsedRail:()=>L,Mobile:()=>B,TopNavigation:()=>z,TopNavigationMobile:()=>V,WithSidebar:()=>I,WithoutNavigation:()=>H,__namedExportsOrder:()=>U,default:()=>F}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{a(),s(),r(),l(),d(),p(),h(),y(),x(),w=n(),{expect:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k=[{label:`Dashboard`,href:`#dashboard`,icon:(0,w.jsx)(o,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,w.jsx)(o,{name:`file`}),badge:`12`},{label:`Team`,href:`#team`,icon:(0,w.jsx)(o,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,w.jsx)(o,{name:`calendar`})},{type:`group`,label:`Your teams`,items:[{label:`Design`,href:`#design`,icon:(0,w.jsx)(o,{name:`more`})},{label:`Engineering`,href:`#engineering`,icon:(0,w.jsx)(o,{name:`more`})}]}],A=(0,w.jsx)(`strong`,{style:{fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),j=(e=!1)=>(0,w.jsx)(m,{items:k,currentHref:`#dashboard`,header:A,isCollapsible:e,defaultCollapsed:e,style:{blockSize:`100%`}}),M=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,w.jsx)(o,{name:`info`})}),(0,w.jsx)(f,{align:`end`,trigger:(0,w.jsx)(i,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Account`,children:(0,w.jsx)(c,{initials:`AS`,size:`sm`})}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})]}),N=(0,w.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-8)`},children:[(0,w.jsx)(b,{title:`Dashboard`,description:`What happened across your projects this month.`,actions:(0,w.jsx)(i,{startIcon:(0,w.jsx)(o,{name:`plus`}),children:`New project`})}),(0,w.jsx)(S,{title:`Last 30 days`,stats:[{label:`Active projects`,value:`8`,change:{value:`2`,direction:`up`}},{label:`Open tasks`,value:`134`,change:{value:`12%`,direction:`down`,isPositive:!0}},{label:`Team members`,value:`24`}]})]}),P=e=>[t=>(0,w.jsx)(`div`,{style:{inlineSize:e,blockSize:640,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],F={title:`Patterns/Application UI/App Shell`,tags:[`experimental`],component:_,parameters:{layout:`padded`},args:{children:N,style:{blockSize:`100%`}},argTypes:{children:{control:!1},sidebar:{control:!1},header:{control:!1},mobileNavigation:{control:!1}}},I={args:{sidebar:j(),header:(0,w.jsx)(v,{start:(0,w.jsx)(u,{"aria-label":`Search`,placeholder:`Search`}),end:M})},decorators:P(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await T(O(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await T(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull();let n=e.getByRole(`main`),r=e.getByRole(`link`,{name:`Skip to content`});await T(r).toHaveAttribute(`href`,`#${n.id}`),await E.click(r),await T(n).toHaveFocus()}},L={args:{sidebar:j(!0),header:(0,w.jsx)(v,{start:(0,w.jsx)(u,{"aria-label":`Search`,placeholder:`Search`}),end:M})},decorators:P(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`}),n=t.getBoundingClientRect().width;await T(n).toBeLessThan(100),await T(O(t).getByRole(`link`,{name:`Projects, 12`})).toBeVisible(),await E.click(O(t).getByRole(`button`,{name:/Expand/})),await D(()=>T(t.getBoundingClientRect().width).toBeGreaterThan(n+100))}},R=[{label:`Dashboard`,href:`#dashboard`},{label:`Projects`,href:`#projects`},{label:`Team`,href:`#team`},{label:`Calendar`,href:`#calendar`}],z={args:{header:(0,w.jsx)(v,{start:(0,w.jsxs)(w.Fragment,{children:[A,(0,w.jsx)(g,{items:R,currentHref:`#dashboard`})]}),end:M}),mobileNavigation:(0,w.jsx)(m,{items:k.slice(0,4),currentHref:`#dashboard`,header:A,style:{blockSize:`100%`}}),mainId:`content`},decorators:P(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await T(O(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await T(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await T(e.getByRole(`main`)).toHaveAttribute(`id`,`content`),await T(e.getByRole(`link`,{name:`Skip to content`})).toHaveAttribute(`href`,`#content`)}},B={args:{sidebar:j(),header:(0,w.jsx)(v,{end:M})},decorators:P(390),play:async({canvas:e})=>{await T(e.queryByRole(`navigation`,{name:`Main`})).toBeNull();let t=e.getByRole(`button`,{name:`Open navigation`});await T(t).toHaveAttribute(`aria-haspopup`,`dialog`),await T(t).toHaveAttribute(`aria-expanded`,`false`),await E.click(t);let n=await O(document.body).findByRole(`dialog`,{name:`Navigation`});await T(t).toHaveAttribute(`aria-expanded`,`true`),await E.click(O(n).getByRole(`link`,{name:`Team`})),await D(()=>T(O(document.body).queryByRole(`dialog`)).toBeNull()),await D(()=>T(e.getByRole(`button`,{name:`Open navigation`})).toHaveFocus())}},V={...z,decorators:P(390),play:async({canvas:e})=>{await T(e.queryByRole(`navigation`,{name:`Main`})).toBeNull(),await E.click(e.getByRole(`button`,{name:`Open navigation`}));let t=await O(document.body).findByRole(`dialog`,{name:`Navigation`});await T(O(t).getByRole(`link`,{name:/^Projects/})).toBeVisible(),await E.keyboard(`{Escape}`),await D(()=>T(O(document.body).queryByRole(`dialog`)).toBeNull())}},H={args:{sidebar:!1,mobileNavigation:null,header:(0,w.jsx)(v,{start:A,end:M})},decorators:P(390),play:async({canvas:e})=>{await T(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await T(e.getByRole(`main`)).toBeVisible()}},U=[`WithSidebar`,`CollapsedRail`,`TopNavigation`,`Mobile`,`TopNavigationMobile`,`WithoutNavigation`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />
  },
  decorators: box(1100),
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Dashboard'
    })).toHaveAttribute('aria-current', 'page');
    // Wide: the sidebar is the navigation, so no menu button.
    await expect(canvas.queryByRole('button', {
      name: 'Open navigation'
    })).toBeNull();
    // The skip link targets the shell's own main, and moves focus to it.
    const main = canvas.getByRole('main');
    const skip = canvas.getByRole('link', {
      name: 'Skip to content'
    });
    await expect(skip).toHaveAttribute('href', \`#\${main.id}\`);
    await userEvent.click(skip);
    await expect(main).toHaveFocus();
  }
}`,...I.parameters?.docs?.source},description:{story:`A sidebar beside the content, a header with search and the account menu.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(true),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" />} end={headerEnd} />
  },
  decorators: box(1100),
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    const narrow = nav.getBoundingClientRect().width;
    await expect(narrow).toBeLessThan(100);
    // Collapsed, the links keep their names.
    await expect(within(nav).getByRole('link', {
      name: 'Projects, 12'
    })).toBeVisible();
    await userEvent.click(within(nav).getByRole('button', {
      name: /Expand/
    }));
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeGreaterThan(narrow + 100));
  }
}`,...L.parameters?.docs?.source},description:{story:`The sidebar as an icon rail, with the labels one click away.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    header: <AppHeader start={<>{brand}<AppNav items={topLinks} currentHref="#dashboard" /></>} end={headerEnd} />,
    mobileNavigation: <Sidebar items={entries.slice(0, 4)} currentHref="#dashboard" header={brand} style={{
      blockSize: '100%'
    }} />,
    mainId: 'content'
  },
  decorators: box(1100),
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Dashboard'
    })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.queryByRole('button', {
      name: 'Open navigation'
    })).toBeNull();
    await expect(canvas.getByRole('main')).toHaveAttribute('id', 'content');
    await expect(canvas.getByRole('link', {
      name: 'Skip to content'
    })).toHaveAttribute('href', '#content');
  }
}`,...z.parameters?.docs?.source},description:{story:`No sidebar: a logo and links in the header, which move into the drawer on a phone.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(),
    header: <AppHeader end={headerEnd} />
  },
  decorators: box(390),
  play: async ({
    canvas
  }) => {
    // Hidden, so out of the accessibility tree too: no second, unreachable navigation.
    await expect(canvas.queryByRole('navigation', {
      name: 'Main'
    })).toBeNull();
    const menu = canvas.getByRole('button', {
      name: 'Open navigation'
    });
    await expect(menu).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menu);
    const drawer = await within(document.body).findByRole('dialog', {
      name: 'Navigation'
    });
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(within(drawer).getByRole('link', {
      name: 'Team'
    }));
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull());
    // Focus is back on the button that opened it.
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Open navigation'
    })).toHaveFocus());
  }
}`,...B.parameters?.docs?.source},description:{story:`On a phone the navigation is a drawer from the header's menu button; choosing a link closes it.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...TopNavigation,
  decorators: box(390),
  play: async ({
    canvas
  }) => {
    // Hidden, so out of the accessibility tree too: no second, unreachable navigation.
    await expect(canvas.queryByRole('navigation', {
      name: 'Main'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open navigation'
    }));
    const drawer = await within(document.body).findByRole('dialog', {
      name: 'Navigation'
    });
    await expect(within(drawer).getByRole('link', {
      name: /^Projects/
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull());
  }
}`,...V.parameters?.docs?.source},description:{story:`The top-navigation shell on a phone: links are in the drawer, not squeezed into the bar.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: false,
    mobileNavigation: null,
    header: <AppHeader start={brand} end={headerEnd} />
  },
  decorators: box(390),
  play: async ({
    canvas
  }) => {
    // A menu button here would open nothing.
    await expect(canvas.queryByRole('button', {
      name: 'Open navigation'
    })).toBeNull();
    await expect(canvas.getByRole('main')).toBeVisible();
  }
}`,...H.parameters?.docs?.source},description:{story:"A sidebar that is switched off, e.g. `sidebar={isAdmin && <Sidebar />}`:\nno sidebar column, no drawer and no menu button, as with no sidebar at all.",...H.parameters?.docs?.description}}}})))()}export{I as a,z as i,L as n,W as o,B as r,C as t};