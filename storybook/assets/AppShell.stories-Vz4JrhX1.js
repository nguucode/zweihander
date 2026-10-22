import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,n as r,o as i,t as a}from"./Theme-2soWRbQy.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-B7N9C5Fg.js";import{n as ee,t as l}from"./icon-C8IlC69p.js";import{n as te,t as u}from"./Avatar-IDpw_Msn.js";import{n as ne,t as d}from"./Card-DvxLWsiy.js";import{n as re,t as f}from"./Search-ESZiVGsy.js";import{n as ie,t as p}from"./Menu-nUxslcJV.js";import{n as m,t as h}from"./AppShell-DepFTtOm.js";import{i as g,n as _,r as ae}from"./TopBar-Q8VQjIE4.js";import{n as oe,t as v}from"./PageHeading-CKwZip1N.js";import{n as y,t as b}from"./NavSidebar-1USZlcJ_.js";import{n as se,t as ce}from"./Stats--VnYIcCg.js";var le=t({CardOnTint:()=>H,CollapsedRail:()=>K,Combinations:()=>G,Compact:()=>V,Mobile:()=>Y,TopBarLayout:()=>B,TopNavigation:()=>J,TopNavigationMobile:()=>X,TransparentOnPlain:()=>U,WithSidebar:()=>z,WithoutNavigation:()=>Z,__namedExportsOrder:()=>Q,default:()=>R}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),i(),te(),s(),ne(),re(),ie(),y(),g(),m(),oe(),se(),x=o(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E=[{label:`Dashboard`,href:`#dashboard`,icon:(0,x.jsx)(l,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,x.jsx)(l,{name:`file`}),badge:`12`},{label:`Team`,href:`#team`,icon:(0,x.jsx)(l,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,x.jsx)(l,{name:`calendar`})},{type:`group`,label:`Your teams`,items:[{label:`Design`,href:`#design`,icon:(0,x.jsx)(l,{name:`more`})},{label:`Engineering`,href:`#engineering`,icon:(0,x.jsx)(l,{name:`more`})}]}],D=(0,x.jsx)(`strong`,{"data-testid":`brand`,style:{fontSize:`var(--text-heading-xs)`},children:`Zweihänder`}),O=(0,x.jsx)(p,{align:`start`,trigger:(0,x.jsx)(c,{variant:`secondary`,appearance:`ghost`,startIcon:(0,x.jsx)(u,{initials:`AS`,size:`sm`}),children:`Ana Silva`}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]}),k=(e=!1,t=!0)=>(0,x.jsx)(b,{items:E,currentHref:`#dashboard`,header:t&&!e?(0,x.jsx)(f,{"aria-label":`Search`,placeholder:`Search`}):void 0,footer:t&&!e?O:void 0,isCollapsible:e,defaultCollapsed:e,style:{blockSize:`100%`}}),A=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,x.jsx)(l,{name:`info`})}),(0,x.jsx)(p,{align:`end`,trigger:(0,x.jsx)(c,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Account`,children:(0,x.jsx)(u,{initials:`AS`,size:`sm`})}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})]}),j=(0,x.jsx)(_,{start:(0,x.jsx)(f,{"aria-label":`Search`,placeholder:`Search`}),end:A}),M=(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-8)`},children:[(0,x.jsx)(v,{title:`Dashboard`,description:`What happened across your projects this month.`,actions:(0,x.jsx)(c,{startIcon:(0,x.jsx)(l,{name:`plus`}),children:`New project`})}),(0,x.jsx)(ce,{title:`Last 30 days`,stats:[{label:`Active projects`,value:`8`,change:{value:`2`,direction:`up`}},{label:`Open tasks`,value:`134`,change:{value:`12%`,direction:`down`,isPositive:!0}},{label:`Team members`,value:`24`}]})]}),N=(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-group)`},children:[(0,x.jsx)(v,{title:`Dashboard`,description:`What happened across your projects this month.`}),(0,x.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-group)`,gridTemplateColumns:`repeat(auto-fit, minmax(10rem, 1fr))`},children:[[`Active projects`,`8`],[`Open tasks`,`134`],[`Team members`,`24`]].map(([e,t])=>(0,x.jsxs)(d,{appearance:`surface`,size:`sm`,"data-testid":`block`,children:[(0,x.jsx)(`span`,{style:{color:`var(--muted-foreground)`},children:e}),(0,x.jsx)(`strong`,{style:{fontSize:`var(--text-heading-sm)`},children:t})]},e))}),(0,x.jsxs)(d,{appearance:`surface`,size:`sm`,children:[(0,x.jsx)(`strong`,{children:`Recent activity`}),(0,x.jsx)(`span`,{style:{color:`var(--muted-foreground)`},children:`Ledger import finished for 3 projects.`})]})]}),P=e=>t=>(0,x.jsx)(n,{...e,style:{blockSize:`100%`},children:t()}),F=e=>{let t=e.querySelector(`nav[aria-label="Main"] a svg`);return e.querySelector(`[data-testid="brand"]`).getBoundingClientRect().left-t.getBoundingClientRect().left},I=e=>{let t=e.querySelector(`main`).closest(`[class*="shell"]`),n=e.querySelector(`[data-testid="brand"]`).getBoundingClientRect();return n.top+n.height/2-t.getBoundingClientRect().top},L=e=>[t=>(0,x.jsx)(`div`,{style:{inlineSize:e,blockSize:640,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],R={title:`Templates/Application UI/App Shell`,tags:[`experimental`],component:h,parameters:{layout:`padded`},args:{children:M,style:{blockSize:`100%`}},argTypes:{layout:{description:"`sidebar`: the sidebar runs the full height, no top bar on wide screens. `top-bar`: the header runs the full width above the sidebar and the content.",control:`inline-radio`,options:[`sidebar`,`top-bar`],table:{type:{summary:`'sidebar' | 'top-bar'`},defaultValue:{summary:`'sidebar'`}}},topBarSurface:{description:"The header on the card colour (`solid`) or on the canvas (`transparent`).",control:`inline-radio`,options:[`solid`,`transparent`],table:{type:{summary:`'solid' | 'transparent'`},defaultValue:{summary:`'solid'`}}},sidebarSurface:{description:"The sidebar on the card colour (`solid`) or on the canvas (`transparent`).",control:`inline-radio`,options:[`solid`,`transparent`],table:{type:{summary:`'solid' | 'transparent'`},defaultValue:{summary:`'transparent'`}}},brand:{description:`The logo. The shell places it in the same spot in either layout.`,control:!1},children:{control:!1},sidebar:{control:!1},header:{control:!1},mobileNavigation:{control:!1}}},z={args:{brand:D,sidebar:k()},decorators:L(1100),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`navigation`,{name:`Main`});await S(T(n).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await S(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await S(t.querySelector(`header`)).not.toBeVisible(),await S(F(t)).toBeCloseTo(0,0),await S(t.querySelectorAll(`[data-testid="brand"]`)).toHaveLength(1),await S(I(t)).toBeCloseTo(28,0);let r=e.getByRole(`main`),i=e.getByRole(`link`,{name:`Skip to content`});await S(i).toHaveAttribute(`href`,`#${r.id}`),await C.click(i),await S(r).toHaveFocus()}},B={args:{layout:`top-bar`,sidebarSurface:`solid`,brand:D,sidebar:k(!1,!1),header:j},decorators:L(1100),play:async({canvasElement:e})=>{let t=e.querySelector(`header`),n=e.querySelector(`main`).closest(`[class*="shell"]`);await S(t.getBoundingClientRect().width).toBeCloseTo(n.getBoundingClientRect().width,0),await S(F(e)).toBeCloseTo(0,0),await S(e.querySelectorAll(`[data-testid="brand"]`)).toHaveLength(1),await S(I(e)).toBeCloseTo(28,0)}},V={...z,decorators:[P({density:`compact`}),...L(1100)],play:async({canvasElement:e})=>{await S(F(e)).toBeCloseTo(0,0),await S(e.querySelectorAll(`[data-testid="brand"]`)).toHaveLength(1),await S(I(e)).toBeCloseTo(22,0)}},H={args:{layout:`top-bar`,brand:D,sidebar:k(!1,!1),header:j,children:N},decorators:[P({canvas:`tinted`,contentStyle:`card`}),...L(1100)],play:async({canvas:e})=>{await S(getComputedStyle(e.getByRole(`main`)).backgroundColor).toBe(`rgba(0, 0, 0, 0)`);let t=e.getAllByTestId(`block`)[0];await S(getComputedStyle(t).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}},U={args:{layout:`top-bar`,topBarSurface:`transparent`,brand:D,sidebar:k(!1,!1),header:j,children:N},decorators:[P({canvas:`plain`,contentStyle:`card`}),...L(1100)],play:async({canvas:e,canvasElement:t})=>{let n=t.querySelector(`header`).parentElement;await S(getComputedStyle(n).borderBottomColor).not.toBe(`rgba(0, 0, 0, 0)`);let r=e.getByRole(`navigation`,{name:`Main`}).parentElement;await S(getComputedStyle(r).borderInlineEndColor).not.toBe(`rgba(0, 0, 0, 0)`)}},W=[];{let e=[[`sidebar`,void 0,`solid`],[`sidebar`,void 0,`transparent`],[`top-bar`,`solid`,`solid`],[`top-bar`,`solid`,`transparent`],[`top-bar`,`transparent`,`solid`],[`top-bar`,`transparent`,`transparent`]],t=new Set([2,4,6,8,14,20,26,27,28,29,30,32]),n=0;for(let[i,o,s]of e)for(let e of a)for(let a of r)n+=1,t.has(n)||W.push({id:n,layout:i,top:o,nav:s,canvas:e,contentStyle:a})}G={parameters:{layout:`fullscreen`},render:()=>(0,x.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-group)`,gridTemplateColumns:`repeat(auto-fill, minmax(18rem, 1fr))`,padding:`var(--space-group)`},children:W.map(e=>(0,x.jsxs)(`figure`,{style:{margin:0,display:`grid`,gap:`var(--space-inline)`},children:[(0,x.jsx)(`div`,{style:{aspectRatio:`1100 / 700`,overflow:`hidden`,border:`1px solid var(--border)`,borderRadius:`var(--radius-field)`,containerType:`inline-size`},"aria-hidden":`true`,inert:!0,children:(0,x.jsx)(n,{canvas:e.canvas,contentStyle:e.contentStyle,style:{inlineSize:1100,blockSize:700,transformOrigin:`0 0`,transform:`scale(calc(100cqi / 1100px))`},children:(0,x.jsx)(h,{layout:e.layout,topBarSurface:e.top,sidebarSurface:e.nav,brand:(0,x.jsx)(`strong`,{children:`Zweihänder`}),sidebar:(0,x.jsx)(b,{items:E,currentHref:`#dashboard`,style:{blockSize:`100%`}}),style:{blockSize:`100%`},children:N})})}),(0,x.jsxs)(`figcaption`,{style:{fontSize:`var(--text-body-sm)`,color:`var(--muted-foreground)`},children:[(0,x.jsxs)(`strong`,{style:{color:`var(--foreground)`},children:[`#`,String(e.id).padStart(2,`0`)]}),` `,e.layout,e.top&&` · top ${e.top}`,` · nav `,e.nav,` · `,e.canvas,` · `,e.contentStyle]})]},e.id))}),play:async({canvasElement:e})=>{await S(e.querySelectorAll(`figure`)).toHaveLength(24)}},K={args:{brand:D,sidebar:k(!0),header:j},decorators:L(1100),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`navigation`,{name:`Main`}),r=n.getBoundingClientRect().width;await S(r).toBeLessThan(100),await S(F(t)).toBeCloseTo(0,0),await S(I(t)).toBeCloseTo(28,0),await S(T(n).getByRole(`link`,{name:`Projects, 12`})).toBeVisible(),await C.click(T(n).getByRole(`button`,{name:/Expand/})),await w(()=>S(n.getBoundingClientRect().width).toBeGreaterThan(r+100))}},q=[{label:`Dashboard`,href:`#dashboard`},{label:`Projects`,href:`#projects`},{label:`Team`,href:`#team`},{label:`Calendar`,href:`#calendar`}],J={args:{layout:`top-bar`,brand:D,header:(0,x.jsx)(_,{start:(0,x.jsx)(ae,{items:q,currentHref:`#dashboard`}),end:A}),mobileNavigation:(0,x.jsx)(b,{items:E.slice(0,4),currentHref:`#dashboard`,style:{blockSize:`100%`}}),mainId:`content`},decorators:L(1100),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await S(T(t).getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`),await S(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await S(e.getByRole(`main`)).toHaveAttribute(`id`,`content`),await S(e.getByRole(`link`,{name:`Skip to content`})).toHaveAttribute(`href`,`#content`)}},Y={args:{sidebar:k(),header:(0,x.jsx)(_,{end:A})},decorators:L(390),play:async({canvas:e})=>{await S(e.queryByRole(`navigation`,{name:`Main`})).toBeNull();let t=e.getByRole(`button`,{name:`Open navigation`});await S(t).toHaveAttribute(`aria-haspopup`,`dialog`),await S(t).toHaveAttribute(`aria-expanded`,`false`),await C.click(t);let n=await T(document.body).findByRole(`dialog`,{name:`Navigation`});await S(t).toHaveAttribute(`aria-expanded`,`true`),await C.click(T(n).getByRole(`link`,{name:`Team`})),await w(()=>S(T(document.body).queryByRole(`dialog`)).toBeNull()),await w(()=>S(e.getByRole(`button`,{name:`Open navigation`})).toHaveFocus())}},X={...J,decorators:L(390),play:async({canvas:e})=>{await S(e.queryByRole(`navigation`,{name:`Main`})).toBeNull(),await C.click(e.getByRole(`button`,{name:`Open navigation`}));let t=await T(document.body).findByRole(`dialog`,{name:`Navigation`});await S(T(t).getByRole(`link`,{name:/^Projects/})).toBeVisible(),await C.keyboard(`{Escape}`),await w(()=>S(T(document.body).queryByRole(`dialog`)).toBeNull())}},Z={args:{sidebar:!1,mobileNavigation:null,brand:D,header:(0,x.jsx)(_,{end:A})},decorators:L(390),play:async({canvas:e})=>{await S(e.queryByRole(`button`,{name:`Open navigation`})).toBeNull(),await S(e.getByRole(`main`)).toBeVisible()}},Q=[`WithSidebar`,`TopBarLayout`,`Compact`,`CardOnTint`,`TransparentOnPlain`,`Combinations`,`CollapsedRail`,`TopNavigation`,`Mobile`,`TopNavigationMobile`,`WithoutNavigation`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    brand,
    sidebar: sidebar()
  },
  decorators: box(1100),
  play: async ({
    canvas,
    canvasElement
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Dashboard'
    })).toHaveAttribute('aria-current', 'page');
    // Wide: the sidebar is the navigation, so no menu button and no top bar.
    await expect(canvas.queryByRole('button', {
      name: 'Open navigation'
    })).toBeNull();
    // The shell's header is the first <header>; PageHeading inside the page is another.
    await expect(canvasElement.querySelector('header')).not.toBeVisible();
    // The logo lines up with the sidebar's icons: two --space-inline in.
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0);
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1);
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0);
    // The skip link targets the shell's own main, and moves focus to it.
    const main = canvas.getByRole('main');
    const skip = canvas.getByRole('link', {
      name: 'Skip to content'
    });
    await expect(skip).toHaveAttribute('href', \`#\${main.id}\`);
    await userEvent.click(skip);
    await expect(main).toHaveFocus();
  }
}`,...z.parameters?.docs?.source},description:{story:`The defaults: the sidebar runs the full height on the neutral canvas, with
search and the account in it and no top bar; the page is one flat surface.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'top-bar',
    sidebarSurface: 'solid',
    brand,
    sidebar: sidebar(false, false),
    header: topBar
  },
  decorators: box(1100),
  play: async ({
    canvasElement
  }) => {
    const bar = canvasElement.querySelector('header')!;
    const shell = canvasElement.querySelector('main')!.closest('[class*="shell"]')!;
    await expect(bar.getBoundingClientRect().width).toBeCloseTo(shell.getBoundingClientRect().width, 0);
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0);
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1);
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0);
  }
}`,...B.parameters?.docs?.source},description:{story:`The header runs the full width above the sidebar; the logo stays where it was in the sidebar layout.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...WithSidebar,
  decorators: [themed({
    density: 'compact'
  }), ...box(1100)],
  play: async ({
    canvasElement
  }) => {
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0);
    // Rendered once, and on the same centre line in either layout.
    await expect(canvasElement.querySelectorAll('[data-testid="brand"]')).toHaveLength(1);
    await expect(logoMiddle(canvasElement)).toBeCloseTo(22, 0);
  }
}`,...V.parameters?.docs?.source},description:{story:`Compact density: the bar, the sidebar's width and the logo's place all follow it.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'top-bar',
    brand,
    sidebar: sidebar(false, false),
    header: topBar,
    children: blocks
  },
  decorators: [themed({
    canvas: 'tinted',
    contentStyle: 'card'
  }), ...box(1100)],
  play: async ({
    canvas
  }) => {
    // No page surface: the main is see-through, each block carries the card colour.
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).toBe('rgba(0, 0, 0, 0)');
    const block = canvas.getAllByTestId('block')[0];
    await expect(getComputedStyle(block).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,...H.parameters?.docs?.source},description:{story:`contentStyle="card" on a tinted canvas: the page sits on the canvas and its
blocks are raised Cards; the sidebar is transparent on the tint.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'top-bar',
    topBarSurface: 'transparent',
    brand,
    sidebar: sidebar(false, false),
    header: topBar,
    children: blocks
  },
  decorators: [themed({
    canvas: 'plain',
    contentStyle: 'card'
  }), ...box(1100)],
  play: async ({
    canvas,
    canvasElement
  }) => {
    const top = canvasElement.querySelector('header')!.parentElement!;
    await expect(getComputedStyle(top).borderBottomColor).not.toBe('rgba(0, 0, 0, 0)');
    const side = canvas.getByRole('navigation', {
      name: 'Main'
    }).parentElement!;
    await expect(getComputedStyle(side).borderInlineEndColor).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,...U.parameters?.docs?.source},description:{story:`On a plain canvas a transparent piece keeps its edge, since no fill marks it.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-group)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
    padding: 'var(--space-group)'
  }}>
      {COMBOS.map(c => <figure key={c.id} style={{
      margin: 0,
      display: 'grid',
      gap: 'var(--space-inline)'
    }}>
          {/* Laid out at 1100px so the shell is wide enough for its sidebar, then scaled down. */}
          <div style={{
        aspectRatio: '1100 / 700',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-field)',
        containerType: 'inline-size'
      }} aria-hidden="true" inert>
            <Theme canvas={c.canvas} contentStyle={c.contentStyle} style={{
          inlineSize: 1100,
          blockSize: 700,
          transformOrigin: '0 0',
          transform: 'scale(calc(100cqi / 1100px))'
        }}>
              <AppShell layout={c.layout} topBarSurface={c.top} sidebarSurface={c.nav} brand={<strong>Zweihänder</strong>} sidebar={<NavSidebar items={entries} currentHref="#dashboard" style={{
            blockSize: '100%'
          }} />} style={{
            blockSize: '100%'
          }}>
                {blocks}
              </AppShell>
            </Theme>
          </div>
          <figcaption style={{
        fontSize: 'var(--text-body-sm)',
        color: 'var(--muted-foreground)'
      }}>
            <strong style={{
          color: 'var(--foreground)'
        }}>#{String(c.id).padStart(2, '0')}</strong> {c.layout}
            {c.top && \` · top \${c.top}\`} · nav {c.nav} · {c.canvas} · {c.contentStyle}
          </figcaption>
        </figure>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelectorAll('figure')).toHaveLength(24);
  }
}`,...G.parameters?.docs?.source},description:{story:`Every combination in use, small. Rules: no plain canvas with flat content; no transparent top bar over a solid sidebar (except where it looks the same, #25); no solid full-height sidebar with flat content.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    brand,
    sidebar: sidebar(true),
    header: topBar
  },
  decorators: box(1100),
  play: async ({
    canvas,
    canvasElement
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    const narrow = nav.getBoundingClientRect().width;
    await expect(narrow).toBeLessThan(100);
    // The logo keeps its place in the rail, cut to the rail's width.
    await expect(logoOffset(canvasElement)).toBeCloseTo(0, 0);
    await expect(logoMiddle(canvasElement)).toBeCloseTo(28, 0);
    // Collapsed, the links keep their names.
    await expect(within(nav).getByRole('link', {
      name: 'Projects, 12'
    })).toBeVisible();
    await userEvent.click(within(nav).getByRole('button', {
      name: /Expand/
    }));
    await waitFor(() => expect(nav.getBoundingClientRect().width).toBeGreaterThan(narrow + 100));
  }
}`,...K.parameters?.docs?.source},description:{story:`The sidebar as an icon rail, with the labels one click away.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'top-bar',
    brand,
    header: <TopBar start={<TopBarNav items={topLinks} currentHref="#dashboard" />} end={headerEnd} />,
    mobileNavigation: <NavSidebar items={entries.slice(0, 4)} currentHref="#dashboard" style={{
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
}`,...J.parameters?.docs?.source},description:{story:`No sidebar: a logo and links in the header, which move into the drawer on a phone.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: sidebar(),
    header: <TopBar end={headerEnd} />
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
}`,...Y.parameters?.docs?.source},description:{story:`On a phone the navigation is a drawer from the header's menu button; choosing a link closes it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`The top-navigation shell on a phone: links are in the drawer, not squeezed into the bar.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: false,
    mobileNavigation: null,
    brand,
    header: <TopBar end={headerEnd} />
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
}`,...Z.parameters?.docs?.source},description:{story:"A sidebar that is switched off, e.g. `sidebar={isAdmin && <NavSidebar />}`:\nno sidebar column, no drawer and no menu button, as with no sidebar at all.",...Z.parameters?.docs?.description}}}})))()}export{Y as a,U as c,G as i,z as l,H as n,B as o,K as r,J as s,le as t,$ as u};