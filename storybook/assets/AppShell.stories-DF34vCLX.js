import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Avatar-eVXMKP5w.js";import{n as c,t as l}from"./Button-BdtJKtga.js";import{n as u,t as d}from"./icon-Dc4hTclj.js";import{n as f,t as p}from"./Search-BDXMHiGy.js";import{n as m,t as h}from"./Menu-LijYhVc8.js";import{n as g,t as _}from"./Sidebar-Cz-fsNU0.js";import{a as ee,c as v,g as te,h as ne,i as re,m as ie,n as ae,o as oe,p as se,r as ce,s as le,t as ue}from"./DialogRoot-BRHPlzsW.js";import{n as de,t as fe}from"./PageHeading-BfmteASR.js";import{n as pe,t as me}from"./Stats-CkVLagUw.js";var y,he,ge,_e,ve,b,x,ye,be,xe,Se,Ce,we,S,C,w,T,E,D,O;function k(){return(k=e((()=>{y=`_shell_7i0f7_5`,he=`_frame_7i0f7_15`,ge=`_sidebar_7i0f7_21`,_e=`_withSidebar_7i0f7_29`,ve=`_column_7i0f7_37`,b=`_main_7i0f7_45`,x=`_skip_7i0f7_59`,ye=`_header_7i0f7_80`,be=`_start_7i0f7_98`,xe=`_center_7i0f7_104`,Se=`_end_7i0f7_108`,Ce=`_menuButton_7i0f7_117`,we=`_withMobileNavigation_7i0f7_122`,S=`_nav_7i0f7_128`,C=`_navLink_7i0f7_141`,w=`_backdrop_7i0f7_167`,T=`_drawer_7i0f7_179`,E=`_drawerClose_7i0f7_194`,D=`_srOnly_7i0f7_243`,O={shell:y,frame:he,sidebar:ge,withSidebar:_e,column:ve,main:b,skip:x,header:ye,start:be,center:xe,end:Se,menuButton:Ce,withMobileNavigation:we,nav:S,navLink:C,backdrop:w,drawer:T,drawerClose:E,srOnly:D}})))()}function A({sidebar:e,header:t,mobileNavigation:n,navigationLabel:r=`Navigation`,mainId:i,children:o,className:s,...c}){let[l,u]=(0,N.useState)(!1),f=(0,N.useId)(),p=(0,N.useRef)(null),m=i??`${f}main`,h=I(e),g=I(n),_=g?n:h?e:null,v=_!==null,te=e=>{e.target.closest(`a[href]`)&&u(!1)};return(0,P.jsxs)(F.Provider,{value:{hasDrawer:v,isOpen:l,open:()=>u(!0),label:r},children:[(0,P.jsxs)(`div`,{className:a(O.shell,h&&O.withSidebar,g&&O.withMobileNavigation,s),...c,children:[(0,P.jsx)(`a`,{href:`#${m}`,className:O.skip,onClick:e=>{e.preventDefault(),p.current?.focus()},children:`Skip to content`}),(0,P.jsxs)(`div`,{className:O.frame,children:[h&&(0,P.jsx)(`div`,{className:O.sidebar,children:e}),(0,P.jsxs)(`div`,{className:O.column,children:[t,(0,P.jsx)(`main`,{ref:p,id:m,tabIndex:-1,className:O.main,children:o})]})]})]}),v&&(0,P.jsx)(ue,{open:l,onOpenChange:u,children:(0,P.jsxs)(ee,{children:[(0,P.jsx)(ne,{className:O.backdrop}),(0,P.jsxs)(le,{className:O.drawer,onClick:te,children:[(0,P.jsx)(ce,{className:O.srOnly,children:r}),(0,P.jsx)(se,{className:O.drawerClose,"aria-label":`Close ${r.toLowerCase()}`,children:(0,P.jsx)(d,{name:`close`})}),_]})]})})]})}function j({start:e,end:t,children:n,className:r,...i}){let o=(0,N.useContext)(F);return(0,P.jsxs)(`header`,{className:a(O.header,r),...i,children:[o.hasDrawer&&(0,P.jsx)(l,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Open ${o.label.toLowerCase()}`,"aria-haspopup":`dialog`,"aria-expanded":o.isOpen,className:O.menuButton,onClick:o.open,children:(0,P.jsx)(d,{name:`menu`})}),e&&(0,P.jsx)(`div`,{className:O.start,children:e}),n&&(0,P.jsx)(`div`,{className:O.center,children:n}),t&&(0,P.jsx)(`div`,{className:O.end,children:t})]})}function M({items:e,currentHref:t,className:n,"aria-label":r=`Main`,...i}){return(0,P.jsx)(`nav`,{"aria-label":r,className:a(O.nav,n),...i,children:(0,P.jsx)(`ul`,{children:e.map(e=>(0,P.jsx)(`li`,{children:(0,P.jsx)(`a`,{href:e.href,className:O.navLink,"aria-current":e.href===t?`page`:void 0,children:e.label})},e.href))})})}var N,P,F,I;function Te(){return(Te=e((()=>{N=r(),ae(),oe(),te(),v(),re(),ie(),u(),i(),c(),k(),P=n(),F=(0,N.createContext)({hasDrawer:!1,isOpen:!1,open:()=>{},label:`Navigation`}),I=e=>e!=null&&e!==!1,A.__docgenInfo={description:`The frame of an application: navigation, a header, and the page. The
sidebar stays put while the content scrolls; on narrow screens the
navigation moves into a drawer that the header's menu button opens.`,methods:[],displayName:`AppShell`,props:{sidebar:{required:!1,tsType:{name:`ReactNode`},description:`A Sidebar. Beside the content from 64rem; in the drawer below that.`},header:{required:!1,tsType:{name:`ReactNode`},description:`An AppHeader, above the content.`},mobileNavigation:{required:!1,tsType:{name:`ReactNode`},description:"What the drawer holds on narrow screens. Defaults to `sidebar`; pass it\nfor a top-navigation shell, whose links move into the drawer below 48rem."},navigationLabel:{required:!1,tsType:{name:`string`},description:`Names the drawer and its button.`,defaultValue:{value:`'Navigation'`,computed:!1}},mainId:{required:!1,tsType:{name:`string`},description:"The `id` of the `main` element, which the skip link targets. Generated if not given."},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`ComponentProps`]},j.__docgenInfo={description:`The bar above the content. Inside an AppShell with navigation it adds the drawer's menu button on narrow screens.`,methods:[],displayName:`AppHeader`,props:{start:{required:!1,tsType:{name:`ReactNode`},description:`Breadcrumbs, or a logo and AppNav.`},end:{required:!1,tsType:{name:`ReactNode`},description:`Search, notifications, the account menu.`},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`ComponentProps`]},M.__docgenInfo={description:`Top navigation links for a header. Hidden below 48rem, where the drawer holds them.`,methods:[],displayName:`AppNav`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AppNavItem`}],raw:`AppNavItem[]`},description:``},currentHref:{required:!1,tsType:{name:`string`},description:`The href of the page you are on.`},"aria-label":{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Main'`,computed:!1}}},composes:[`Omit`]}})))()}var Ee=t({CollapsedRail:()=>J,Mobile:()=>X,TopNavigation:()=>Y,TopNavigationMobile:()=>Z,WithSidebar:()=>q,WithoutNavigation:()=>Q,__namedExportsOrder:()=>Ae,default:()=>Oe}),L,R,z,B,V,H,U,W,G,De,K,Oe,q,J,ke,Y,X,Z,Q,Ae;function $(){return($=e((()=>{u(),o(),c(),f(),m(),g(),Te(),de(),pe(),L=n(),{expect:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H=[{label:`Dashboard`,href:`#dashboard`,icon:(0,L.jsx)(d,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,L.jsx)(d,{name:`file`}),badge:`12`},{label:`Team`,href:`#team`,icon:(0,L.jsx)(d,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,L.jsx)(d,{name:`calendar`})},{type:`group`,label:`Your teams`,items:[{label:`Design`,href:`#design`,icon:(0,L.jsx)(d,{name:`more`})},{label:`Engineering`,href:`#engineering`,icon:(0,L.jsx)(d,{name:`more`})}]}],U=(0,L.jsx)(`strong`,{style:{fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),W=(e=!1)=>(0,L.jsx)(_,{items:H,currentHref:`#dashboard`,header:U,isCollapsible:e,defaultCollapsed:e,style:{blockSize:`100%`}}),G=(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,L.jsx)(d,{name:`info`})}),(0,L.jsx)(h,{align:`end`,trigger:(0,L.jsx)(l,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Account`,children:(0,L.jsx)(s,{initials:`AS`,size:`sm`})}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})]}),De=(0,L.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-8)`},children:[(0,L.jsx)(fe,{title:`Dashboard`,description:`What happened across your projects this month.`,actions:(0,L.jsx)(l,{startIcon:(0,L.jsx)(d,{name:`plus`}),children:`New project`})}),(0,L.jsx)(me,{title:`Last 30 days`,stats:[{label:`Active projects`,value:`8`,change:{value:`2`,direction:`up`}},{label:`Open tasks`,value:`134`,change:{value:`12%`,direction:`down`,isPositive:!0}},{label:`Team members`,value:`24`}]})]}),K=e=>[t=>(0,L.jsx)(`div`,{style:{inlineSize:e,blockSize:640,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],Oe={title:`Patterns/Application UI/App Shell`,component:A,parameters:{a11y:{test:`error`},layout:`padded`},args:{children:De,style:{blockSize:`100%`}},argTypes:{children:{control:!1},sidebar:{control:!1},header:{control:!1},mobileNavigation:{control:!1}}},q={args:{sidebar:W(),header:(0,L.jsx)(j,{start:(0,L.jsx)(p,{"aria-label":`Search`,placeholder:`Search`}),end:G})},decorators:K(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await R(V(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await R(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull();let n=e.getByRole(`main`),r=e.getByRole(`link`,{name:`Skip to content`});await R(r).toHaveAttribute(`href`,`#${n.id}`),await z.click(r),await R(n).toHaveFocus()}},J={args:{sidebar:W(!0),header:(0,L.jsx)(j,{start:(0,L.jsx)(p,{"aria-label":`Search`,placeholder:`Search`}),end:G})},decorators:K(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`}),n=t.getBoundingClientRect().width;await R(n).toBeLessThan(100),await R(V(t).getByRole(`link`,{name:`Projects, 12`})).toBeVisible(),await z.click(V(t).getByRole(`button`,{name:/Expand/})),await B(()=>R(t.getBoundingClientRect().width).toBeGreaterThan(n+100))}},ke=[{label:`Dashboard`,href:`#dashboard`},{label:`Projects`,href:`#projects`},{label:`Team`,href:`#team`},{label:`Calendar`,href:`#calendar`}],Y={args:{header:(0,L.jsx)(j,{start:(0,L.jsxs)(L.Fragment,{children:[U,(0,L.jsx)(M,{items:ke,currentHref:`#dashboard`})]}),end:G}),mobileNavigation:(0,L.jsx)(_,{items:H.slice(0,4),currentHref:`#dashboard`,header:U,style:{blockSize:`100%`}}),mainId:`content`},decorators:K(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await R(V(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await R(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await R(e.getByRole(`main`)).toHaveAttribute(`id`,`content`),await R(e.getByRole(`link`,{name:`Skip to content`})).toHaveAttribute(`href`,`#content`)}},X={args:{sidebar:W(),header:(0,L.jsx)(j,{end:G})},decorators:K(390),play:async({canvas:e})=>{await R(e.queryByRole(`navigation`,{name:`Main`})).toBeNull();let t=e.getByRole(`button`,{name:`Open navigation`});await R(t).toHaveAttribute(`aria-haspopup`,`dialog`),await R(t).toHaveAttribute(`aria-expanded`,`false`),await z.click(t);let n=await V(document.body).findByRole(`dialog`,{name:`Navigation`});await R(t).toHaveAttribute(`aria-expanded`,`true`),await z.click(V(n).getByRole(`link`,{name:`Team`})),await B(()=>R(V(document.body).queryByRole(`dialog`)).toBeNull()),await B(()=>R(e.getByRole(`button`,{name:`Open navigation`})).toHaveFocus())}},Z={...Y,decorators:K(390),play:async({canvas:e})=>{await R(e.queryByRole(`navigation`,{name:`Main`})).toBeNull(),await z.click(e.getByRole(`button`,{name:`Open navigation`}));let t=await V(document.body).findByRole(`dialog`,{name:`Navigation`});await R(V(t).getByRole(`link`,{name:/^Projects/})).toBeVisible(),await z.keyboard(`{Escape}`),await B(()=>R(V(document.body).queryByRole(`dialog`)).toBeNull())}},Q={args:{sidebar:!1,mobileNavigation:null,header:(0,L.jsx)(j,{start:U,end:G})},decorators:K(390),play:async({canvas:e})=>{await R(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await R(e.getByRole(`main`)).toBeVisible()}},Ae=[`WithSidebar`,`CollapsedRail`,`TopNavigation`,`Mobile`,`TopNavigationMobile`,`WithoutNavigation`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`A sidebar beside the content, a header with search and the account menu.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`The sidebar as an icon rail, with the labels one click away.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`No sidebar: a logo and links in the header, which move into the drawer on a phone.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`On a phone the navigation is a drawer from the header's menu button; choosing a link closes it.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`The top-navigation shell on a phone: links are in the drawer, not squeezed into the bar.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"A sidebar that is switched off, e.g. `sidebar={isAdmin && <Sidebar />}`:\nno sidebar column, no drawer and no menu button, as with no sidebar at all.",...Q.parameters?.docs?.description}}}})))()}export{q as a,Y as i,J as n,$ as o,X as r,Ee as t};