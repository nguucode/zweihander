import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./icon-C8IlC69p.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./NavSidebar-1USZlcJ_.js";var l=t({Anatomy:()=>C,Collapsed:()=>b,Collapsible:()=>y,CurrentItem:()=>T,Default:()=>v,DoGroupWithIcons:()=>E,DontLongLabelsNoIcons:()=>D,Item:()=>w,Plain:()=>x,__namedExportsOrder:()=>O,anatomyParts:()=>S,default:()=>_}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{a(),r(),s(),u=n(),{expect:d,fn:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g=[{label:`Search`,href:`#search`,icon:(0,u.jsx)(i,{name:`search`})},{label:`Inbox`,href:`#inbox`,icon:(0,u.jsx)(i,{name:`info`}),badge:12},{type:`group`,label:`Projects`,items:[{label:`Atlas`,href:`#atlas`,icon:(0,u.jsx)(i,{name:`star`})},{label:`Billing revamp`,href:`#billing`,icon:(0,u.jsx)(i,{name:`calendar`})},{label:`Onboarding`,href:`#onboarding`,icon:(0,u.jsx)(i,{name:`user`})}]},{type:`group`,label:`Workspace`,items:[{label:`Settings`,href:`#settings`,icon:(0,u.jsx)(i,{name:`menu`})}]}],_={title:`Patterns/Application UI/Nav Sidebar`,tags:[`beta`],component:c,parameters:{layout:`fullscreen`},args:{items:g,currentHref:`#atlas`,header:(0,u.jsx)(`strong`,{style:{paddingInline:`var(--space-3)`},children:`Zweihänder`}),footer:(0,u.jsx)(`span`,{style:{paddingInline:`var(--space-3)`,color:`var(--muted-foreground)`},children:`sam@atlas.dev`}),onCollapsedChange:f()},argTypes:{items:{description:"The links, as data. An item is `{ label, href, icon?, badge?, render? }`; a group is `{ type: 'group', label, items }`. `render` replaces the `<a>`, e.g. with a router's `<Link />`.",control:!1,table:{type:{summary:`NavSidebarEntry[]`}}},currentHref:{description:'The `href` of the page the reader is on. That item gets the selected fill and `aria-current="page"`.',control:`text`,table:{type:{summary:`string`}}},header:{description:`Above the items: the product name, a workspace switcher. Hidden in the rail.`,control:!1,table:{type:{summary:`ReactNode`}}},footer:{description:`Pinned to the bottom: the signed-in user, help. Hidden in the rail.`,control:!1,table:{type:{summary:`ReactNode`}}},isCollapsed:{description:"Controlled: the icon rail, labels in tooltips. Every item needs an `icon`. Pair with `onCollapsedChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultCollapsed:{description:`Starts as the icon rail, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onCollapsedChange:{description:`Called with the new state when the collapse button is pressed.`,control:!1,table:{type:{summary:`(collapsed: boolean) => void`}}},isCollapsible:{description:`Shows a button in the header that collapses and expands the sidebar.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:"The `<nav>` landmark's name. Change it when a page has more than one navigation.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Main'`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.bare?e():(0,u.jsx)(`div`,{style:{blockSize:`32rem`,display:`flex`},children:e()})]},v={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await d(h(t).getByRole(`link`,{name:`Atlas`})).toHaveAttribute(`aria-current`,`page`),await d(h(t).getByRole(`link`,{name:/Inbox/})).not.toHaveAttribute(`aria-current`),await d(h(t).getByRole(`list`,{name:`Projects`})).toBeVisible(),await d(h(t).getByText(`12`)).toBeVisible()}},y={args:{isCollapsible:!0},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Collapse sidebar`});await d(n).toHaveAttribute(`aria-expanded`,`true`),await p.click(n),await d(e.onCollapsedChange).toHaveBeenLastCalledWith(!0),await d(t.getByRole(`button`,{name:`Expand sidebar`})).toHaveAttribute(`aria-expanded`,`false`);let r=t.getByRole(`link`,{name:`Atlas`});await d(r).toHaveAttribute(`aria-current`,`page`),await d(t.getByRole(`list`,{name:`Projects`})).toBeInTheDocument(),await d(t.getByText(`Projects`)).toBeVisible(),await d(t.getByRole(`link`,{name:`Inbox, 12`})).toBeInTheDocument();let i=h(document.body);await p.hover(r),await m(()=>d(i.getByRole(`tooltip`)).toHaveTextContent(`Atlas`)),await p.unhover(r),await m(()=>d(i.queryByRole(`tooltip`)).toBeNull()),n.focus(),await p.tab(),await p.tab(),await d(t.getByRole(`link`,{name:`Inbox, 12`})).toHaveFocus(),await m(()=>d(i.getByRole(`tooltip`)).toHaveTextContent(`Inbox, 12`))}},b={args:{defaultCollapsed:!0,isCollapsible:!0}},x={args:{header:void 0,footer:void 0,items:g.slice(0,2),currentHref:`#inbox`}},S=[{name:`Header`,selector:`nav > div:first-child > div:first-child`,description:`Optional: the product name, a workspace switcher.`},{name:`Collapse button`,selector:`button[aria-expanded]`,description:`With isCollapsible: folds the sidebar to the icon rail and back.`},{name:`Item`,selector:`a[href="#search"]`,description:`A link: icon, label, optional badge. A flush row of tier md.`},{name:`Icon`,selector:`a[href="#search"] > span:first-child`,description:`Decorative. Required for the rail, where it is all that shows.`},{name:`Badge`,selector:`a[href="#inbox"] > span:last-child`,description:`Optional: a count or a short tag.`},{name:`Group label`,selector:`div:has(> ul[aria-labelledby]) > div:first-child`,description:`Names the group's list. A label, not a heading.`},{name:`Current item`,selector:`a[aria-current="page"]`,description:`The page the reader is on: the selected fill and medium weight.`},{name:`Footer`,selector:`nav > div:last-child`,description:`Optional, pinned to the bottom: the signed-in user, help.`}],C={tags:[`!dev`],args:{isCollapsible:!0},play:async({canvasElement:e})=>{let t=await o(e,S);await d(t[0]).toHaveTextContent(`Zweihänder`),await d(t[5]).toHaveTextContent(`Projects`),await d(t[7]).toHaveTextContent(`sam@atlas.dev`)}},w={tags:[`!dev`],parameters:{bare:!0},args:{header:void 0,footer:void 0,items:[{label:`Inbox`,href:`#inbox`,icon:(0,u.jsx)(i,{name:`info`}),badge:12}],currentHref:void 0}},T={...w,args:{...w.args,currentHref:`#inbox`}},E={tags:[`!dev`],args:{header:void 0,footer:void 0}},D={tags:[`!dev`],args:{header:void 0,footer:void 0,currentHref:`#reports`,items:[{label:`Search across every workspace`,href:`#search`},{label:`Quarterly revenue reports for finance`,href:`#reports`},{label:`Customer onboarding checklist templates`,href:`#onboarding`}]}},O=[`Default`,`Collapsible`,`Collapsed`,`Plain`,`anatomyParts`,`Anatomy`,`Item`,`CurrentItem`,`DoGroupWithIcons`,`DontLongLabelsNoIcons`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Atlas'
    })).toHaveAttribute('aria-current', 'page');
    await expect(within(nav).getByRole('link', {
      name: /Inbox/
    })).not.toHaveAttribute('aria-current');
    // A group's name names its list.
    await expect(within(nav).getByRole('list', {
      name: 'Projects'
    })).toBeVisible();
    await expect(within(nav).getByText('12')).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isCollapsible: true
  },
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
    await expect(canvas.getByRole('button', {
      name: 'Expand sidebar'
    })).toHaveAttribute('aria-expanded', 'false');
    const atlas = canvas.getByRole('link', {
      name: 'Atlas'
    });
    await expect(atlas).toHaveAttribute('aria-current', 'page');
    // Still findable by group name: the label is only visually hidden, not display: none.
    await expect(canvas.getByRole('list', {
      name: 'Projects'
    })).toBeInTheDocument();
    await expect(canvas.getByText('Projects')).toBeVisible();
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', {
      name: 'Inbox, 12'
    })).toBeInTheDocument();
    // Hover shows the label as a tooltip (after the hover delay).
    const body = within(document.body);
    await userEvent.hover(atlas);
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Atlas'));
    await userEvent.unhover(atlas);
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
    // Keyboard focus shows it too, with the same text as the name, badge included.
    toggle.focus();
    await userEvent.tab(); // Search
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Inbox, 12'
    })).toHaveFocus();
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Inbox, 12'));
  }
}`,...y.parameters?.docs?.source},description:{story:`The icon rail: labels move into tooltips and stay the links' names.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true,
    isCollapsible: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    header: undefined,
    footer: undefined,
    items: items.slice(0, 2),
    currentHref: '#inbox'
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isCollapsible: true
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Zweihänder');
    await expect(found[5]).toHaveTextContent('Projects');
    await expect(found[7]).toHaveTextContent('sam@atlas.dev');
  }
}`,...C.parameters?.docs?.source},description:{story:`Every part present.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    bare: true
  },
  args: {
    header: undefined,
    footer: undefined,
    items: [{
      label: 'Inbox',
      href: '#inbox',
      icon: <Icon name="info" />,
      badge: 12
    }],
    currentHref: undefined
  }
}`,...w.parameters?.docs?.source},description:{story:`One item, sized to its content, for the States table.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Item,
  args: {
    ...Item.args,
    currentHref: '#inbox'
  }
}`,...T.parameters?.docs?.source},description:{story:`The same item, current.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    header: undefined,
    footer: undefined
  }
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Do: short labels, each with an icon, grouped under a few names.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    header: undefined,
    footer: undefined,
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
}`,...D.parameters?.docs?.source},description:{story:`Guidelines, Don't: items without icons cannot collapse to a rail, and long labels get cut.`,...D.parameters?.docs?.description}}}})))()}export{E as a,l as c,k as d,v as i,x as l,y as n,D as o,T as r,w as s,C as t,S as u};