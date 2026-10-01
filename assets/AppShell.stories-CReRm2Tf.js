import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as ee}from"./Avatar-C--DiZ3P.js";import{n as l,t as u}from"./Button-BLXGvKSL.js";import{n as te,t as d}from"./Search-DJOMJV1K.js";import{n as f,t as p}from"./Menu-Dl135OjD.js";import{n as m,t as h}from"./Sidebar-CbAxM5g7.js";import{a as ne,c as g,g as re,h as ie,i as ae,m as oe,n as se,o as ce,p as le,r as ue,s as de,t as fe}from"./DialogRoot-C3ueFj_U.js";import{n as pe,t as me}from"./PageHeading-eHe75SJL.js";import{n as he,t as ge}from"./Stats-DMeli4be.js";var _e,ve,ye,be,xe,Se,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_e=`_shell_7i0f7_5`,ve=`_frame_7i0f7_15`,ye=`_sidebar_7i0f7_21`,be=`_withSidebar_7i0f7_29`,xe=`_column_7i0f7_37`,Se=`_main_7i0f7_45`,_=`_skip_7i0f7_59`,v=`_header_7i0f7_80`,y=`_start_7i0f7_98`,b=`_center_7i0f7_104`,x=`_end_7i0f7_108`,S=`_menuButton_7i0f7_117`,C=`_withMobileNavigation_7i0f7_122`,w=`_nav_7i0f7_128`,T=`_navLink_7i0f7_141`,E=`_backdrop_7i0f7_167`,D=`_drawer_7i0f7_179`,O=`_drawerClose_7i0f7_194`,k=`_srOnly_7i0f7_243`,A={shell:_e,frame:ve,sidebar:ye,withSidebar:be,column:xe,main:Se,skip:_,header:v,start:y,center:b,end:x,menuButton:S,withMobileNavigation:C,nav:w,navLink:T,backdrop:E,drawer:D,drawerClose:O,srOnly:k}})))()}function M({sidebar:e,header:t,mobileNavigation:n,navigationLabel:r=`Navigation`,mainId:i,children:o,className:c,...ee}){let[l,u]=(0,P.useState)(!1),te=(0,P.useId)(),d=(0,P.useRef)(null),f=i??`${te}main`,p=L(e),m=L(n),h=m?n:p?e:null,g=h!==null,re=e=>{e.target.closest(`a[href]`)&&u(!1)};return(0,F.jsxs)(I.Provider,{value:{hasDrawer:g,isOpen:l,open:()=>u(!0),label:r},children:[(0,F.jsxs)(`div`,{className:s(A.shell,p&&A.withSidebar,m&&A.withMobileNavigation,c),...ee,children:[(0,F.jsx)(`a`,{href:`#${f}`,className:A.skip,onClick:e=>{e.preventDefault(),d.current?.focus()},children:`Skip to content`}),(0,F.jsxs)(`div`,{className:A.frame,children:[p&&(0,F.jsx)(`div`,{className:A.sidebar,children:e}),(0,F.jsxs)(`div`,{className:A.column,children:[t,(0,F.jsx)(`main`,{ref:d,id:f,tabIndex:-1,className:A.main,children:o})]})]})]}),g&&(0,F.jsx)(fe,{open:l,onOpenChange:u,children:(0,F.jsxs)(ne,{children:[(0,F.jsx)(ie,{className:A.backdrop}),(0,F.jsxs)(de,{className:A.drawer,onClick:re,children:[(0,F.jsx)(ue,{className:A.srOnly,children:r}),(0,F.jsx)(le,{className:A.drawerClose,"aria-label":`Close ${r.toLowerCase()}`,children:(0,F.jsx)(a,{name:`close`})}),h]})]})})]})}function N({start:e,end:t,children:n,className:r,...i}){let o=(0,P.useContext)(I);return(0,F.jsxs)(`header`,{className:s(A.header,r),...i,children:[o.hasDrawer&&(0,F.jsx)(u,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Open ${o.label.toLowerCase()}`,"aria-haspopup":`dialog`,"aria-expanded":o.isOpen,className:A.menuButton,onClick:o.open,children:(0,F.jsx)(a,{name:`menu`})}),e&&(0,F.jsx)(`div`,{className:A.start,children:e}),n&&(0,F.jsx)(`div`,{className:A.center,children:n}),t&&(0,F.jsx)(`div`,{className:A.end,children:t})]})}function Ce({items:e,currentHref:t,className:n,"aria-label":r=`Main`,...i}){return(0,F.jsx)(`nav`,{"aria-label":r,className:s(A.nav,n),...i,children:(0,F.jsx)(`ul`,{children:e.map(e=>(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:e.href,className:A.navLink,"aria-current":e.href===t?`page`:void 0,children:e.label})},e.href))})})}var P,F,I,L;function we(){return(we=e((()=>{P=r(),se(),ce(),re(),g(),ae(),oe(),i(),o(),l(),j(),F=n(),I=(0,P.createContext)({hasDrawer:!1,isOpen:!1,open:()=>{},label:`Navigation`}),L=e=>e!=null&&e!==!1,M.__docgenInfo={description:`The frame of an application: navigation, a header, and the page. The
sidebar stays put while the content scrolls; on narrow screens the
navigation moves into a drawer that the header's menu button opens.`,methods:[],displayName:`AppShell`,props:{sidebar:{required:!1,tsType:{name:`ReactNode`},description:`A Sidebar. Beside the content from 64rem; in the drawer below that.`},header:{required:!1,tsType:{name:`ReactNode`},description:`An AppHeader, above the content.`},mobileNavigation:{required:!1,tsType:{name:`ReactNode`},description:"What the drawer holds on narrow screens. Defaults to `sidebar`; pass it\nfor a top-navigation shell, whose links move into the drawer below 48rem."},navigationLabel:{required:!1,tsType:{name:`string`},description:`Names the drawer and its button.`,defaultValue:{value:`'Navigation'`,computed:!1}},mainId:{required:!1,tsType:{name:`string`},description:"The `id` of the `main` element, which the skip link targets. Generated if not given."},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`ComponentProps`]},N.__docgenInfo={description:`The bar above the content. Inside an AppShell with navigation it adds the drawer's menu button on narrow screens.`,methods:[],displayName:`AppHeader`,props:{start:{required:!1,tsType:{name:`ReactNode`},description:`Breadcrumbs, or a logo and AppNav.`},end:{required:!1,tsType:{name:`ReactNode`},description:`Search, notifications, the account menu.`},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`ComponentProps`]},Ce.__docgenInfo={description:`Top navigation links for a header. Hidden below 48rem, where the drawer holds them.`,methods:[],displayName:`AppNav`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AppNavItem`}],raw:`AppNavItem[]`},description:``},currentHref:{required:!1,tsType:{name:`string`},description:`The href of the page you are on.`},"aria-label":{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Main'`,computed:!1}}},composes:[`Omit`]}})))()}var Te=t({CollapsedRail:()=>Y,Mobile:()=>Z,TopNavigation:()=>X,TopNavigationMobile:()=>Q,WithSidebar:()=>J,WithoutNavigation:()=>$,__namedExportsOrder:()=>ke,default:()=>De}),R,z,B,V,H,U,W,G,K,Ee,q,De,J,Y,Oe,X,Z,Q,$,ke;function Ae(){return(Ae=e((()=>{i(),c(),l(),te(),f(),m(),we(),pe(),he(),R=n(),{expect:z,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,U=[{label:`Dashboard`,href:`#dashboard`,icon:(0,R.jsx)(a,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,R.jsx)(a,{name:`file`}),badge:`12`},{label:`Team`,href:`#team`,icon:(0,R.jsx)(a,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,R.jsx)(a,{name:`calendar`})},{type:`group`,label:`Your teams`,items:[{label:`Design`,href:`#design`,icon:(0,R.jsx)(a,{name:`more`})},{label:`Engineering`,href:`#engineering`,icon:(0,R.jsx)(a,{name:`more`})}]}],W=(0,R.jsx)(`strong`,{style:{fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),G=(e=!1)=>(0,R.jsx)(h,{items:U,currentHref:`#dashboard`,header:W,isCollapsible:e,defaultCollapsed:e,style:{blockSize:`100%`}}),K=(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,R.jsx)(a,{name:`info`})}),(0,R.jsx)(p,{align:`end`,trigger:(0,R.jsx)(u,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Account`,children:(0,R.jsx)(ee,{initials:`AS`,size:`sm`})}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})]}),Ee=(0,R.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-8)`},children:[(0,R.jsx)(me,{title:`Dashboard`,description:`What happened across your projects this month.`,actions:(0,R.jsx)(u,{startIcon:(0,R.jsx)(a,{name:`plus`}),children:`New project`})}),(0,R.jsx)(ge,{title:`Last 30 days`,stats:[{label:`Active projects`,value:`8`,change:{value:`2`,direction:`up`}},{label:`Open tasks`,value:`134`,change:{value:`12%`,direction:`down`,isPositive:!0}},{label:`Team members`,value:`24`}]})]}),q=e=>[t=>(0,R.jsx)(`div`,{style:{inlineSize:e,blockSize:640,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],De={title:`Patterns/Application UI/App Shell`,component:M,parameters:{a11y:{test:`error`},layout:`padded`},args:{children:Ee,style:{blockSize:`100%`}},argTypes:{children:{control:!1},sidebar:{control:!1},header:{control:!1},mobileNavigation:{control:!1}}},J={args:{sidebar:G(),header:(0,R.jsx)(N,{start:(0,R.jsx)(d,{"aria-label":`Search`,placeholder:`Search`,size:`sm`}),end:K})},decorators:q(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await z(H(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await z(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull();let n=e.getByRole(`main`),r=e.getByRole(`link`,{name:`Skip to content`});await z(r).toHaveAttribute(`href`,`#${n.id}`),await B.click(r),await z(n).toHaveFocus()}},Y={args:{sidebar:G(!0),header:(0,R.jsx)(N,{start:(0,R.jsx)(d,{"aria-label":`Search`,placeholder:`Search`,size:`sm`}),end:K})},decorators:q(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`}),n=t.getBoundingClientRect().width;await z(n).toBeLessThan(100),await z(H(t).getByRole(`link`,{name:`Projects, 12`})).toBeVisible(),await B.click(H(t).getByRole(`button`,{name:/Expand/})),await V(()=>z(t.getBoundingClientRect().width).toBeGreaterThan(n+100))}},Oe=[{label:`Dashboard`,href:`#dashboard`},{label:`Projects`,href:`#projects`},{label:`Team`,href:`#team`},{label:`Calendar`,href:`#calendar`}],X={args:{header:(0,R.jsx)(N,{start:(0,R.jsxs)(R.Fragment,{children:[W,(0,R.jsx)(Ce,{items:Oe,currentHref:`#dashboard`})]}),end:K}),mobileNavigation:(0,R.jsx)(h,{items:U.slice(0,4),currentHref:`#dashboard`,header:W,style:{blockSize:`100%`}}),mainId:`content`},decorators:q(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await z(H(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await z(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await z(e.getByRole(`main`)).toHaveAttribute(`id`,`content`),await z(e.getByRole(`link`,{name:`Skip to content`})).toHaveAttribute(`href`,`#content`)}},Z={args:{sidebar:G(),header:(0,R.jsx)(N,{end:K})},decorators:q(390),play:async({canvas:e})=>{await z(e.queryByRole(`navigation`,{name:`Main`})).toBeNull();let t=e.getByRole(`button`,{name:`Open navigation`});await z(t).toHaveAttribute(`aria-haspopup`,`dialog`),await z(t).toHaveAttribute(`aria-expanded`,`false`),await B.click(t);let n=await H(document.body).findByRole(`dialog`,{name:`Navigation`});await z(t).toHaveAttribute(`aria-expanded`,`true`),await B.click(H(n).getByRole(`link`,{name:`Team`})),await V(()=>z(H(document.body).queryByRole(`dialog`)).toBeNull()),await V(()=>z(e.getByRole(`button`,{name:`Open navigation`})).toHaveFocus())}},Q={...X,decorators:q(390),play:async({canvas:e})=>{await z(e.queryByRole(`navigation`,{name:`Main`})).toBeNull(),await B.click(e.getByRole(`button`,{name:`Open navigation`}));let t=await H(document.body).findByRole(`dialog`,{name:`Navigation`});await z(H(t).getByRole(`link`,{name:/^Projects/})).toBeVisible(),await B.keyboard(`{Escape}`),await V(()=>z(H(document.body).queryByRole(`dialog`)).toBeNull())}},$={args:{sidebar:!1,mobileNavigation:null,header:(0,R.jsx)(N,{start:W,end:K})},decorators:q(390),play:async({canvas:e})=>{await z(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await z(e.getByRole(`main`)).toBeVisible()}},ke=[`WithSidebar`,`CollapsedRail`,`TopNavigation`,`Mobile`,`TopNavigationMobile`,`WithoutNavigation`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" size="sm" />} end={headerEnd} />
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
}`,...J.parameters?.docs?.source},description:{story:`A sidebar beside the content, a header with search and the account menu.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(true),
    header: <AppHeader start={<Search aria-label="Search" placeholder="Search" size="sm" />} end={headerEnd} />
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
}`,...Y.parameters?.docs?.source},description:{story:`The sidebar as an icon rail, with the labels one click away.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`No sidebar: a logo and links in the header, which move into the drawer on a phone.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`On a phone the navigation is a drawer from the header's menu button; choosing a link closes it.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`The top-navigation shell on a phone: links are in the drawer, not squeezed into the bar.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"A sidebar that is switched off, e.g. `sidebar={isAdmin && <Sidebar />}`:\nno sidebar column, no drawer and no menu button, as with no sidebar at all.",...$.parameters?.docs?.description}}}})))()}export{J as a,X as i,Y as n,Ae as o,Z as r,Te as t};