import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{a,r as o}from"./story-helpers-EInZsLED.js";import{n as s,t as c}from"./Breadcrumbs-DB9SpFVe.js";var l=t({Anatomy:()=>w,Collapsed:()=>y,CustomSeparator:()=>v,Default:()=>h,DoCollapseLongTrail:()=>T,DontWrapLongTrail:()=>E,Named:()=>_,Render:()=>b,Small:()=>g,StatesExample:()=>D,__namedExportsOrder:()=>O,anatomyParts:()=>C,default:()=>m}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),o(),s(),u=n(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Navigation/Breadcrumbs`,tags:[`beta`],component:c,args:{items:[{label:`Home`,href:`#home`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},argTypes:{items:{description:"The trail, top level first. The last item is the current page, shown as text. `render` on an item replaces its `<a>`, e.g. with a router's link.",control:!1,table:{type:{summary:`{ label: ReactNode; href?: string; render?: ReactElement }[]`}}},maxItems:{description:'Collapse the middle beyond this many items (2 or more): the first item, "…", and the last `maxItems - 1`. "…" expands them in place.',control:`number`,table:{type:{summary:`number`}}},separator:{description:`Drawn between items, hidden from screen readers.`,control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`chevron-right icon`}}},size:{description:"Text size: `body-sm` (`sm`) or `body` (`md`).",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},"aria-label":{description:"Names the `<nav>` landmark. Change it when a page has two trails.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Breadcrumb'`}}}},excludeStories:[`anatomyParts`]},h={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Breadcrumb`});await d(p(t).getByRole(`list`).tagName).toBe(`OL`);let n=p(t).getAllByRole(`listitem`);await d(n).toHaveLength(4),await d(p(t).getAllByRole(`link`)).toHaveLength(3),await d(p(t).getByText(`Settings`)).toHaveAttribute(`aria-current`,`page`)}},g={args:{size:`sm`}},_={tags:[`!dev`],args:{"aria-label":`Folder path`},play:async({canvas:e})=>{await d(e.getByRole(`navigation`,{name:`Folder path`})).toBeVisible()}},v={args:{separator:`/`},play:async({canvas:e})=>{let t=e.getAllByText(`/`);await d(t).toHaveLength(3);for(let e of t)await d(e).toHaveAttribute(`aria-hidden`,`true`)}},y={args:{maxItems:3,items:[{label:`Home`,href:`#home`},{label:`Workspaces`,href:`#ws`},{label:`Design`,href:`#design`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},play:async({canvas:e})=>{await d(e.getAllByRole(`listitem`)).toHaveLength(4),await d(e.queryByRole(`link`,{name:`Design`})).toBeNull(),await f.tab(),await f.tab();let t=e.getByRole(`button`,{name:`Show 3 more`});await d(t).toHaveFocus(),await d(a(`pointer: coarse`,t,`::before`).find(e=>e.style.inlineSize)?.style.inlineSize).toBe(`var(--target-coarse)`),await f.keyboard(`{Enter}`),await d(e.getAllByRole(`listitem`)).toHaveLength(6),await d(e.getByRole(`link`,{name:`Design`})).toBeVisible(),await d(e.getByRole(`link`,{name:`Workspaces`})).toHaveFocus()}},b={args:{items:[{label:`Home`,render:(0,u.jsx)(`a`,{href:`/`,"data-router":`true`})},{label:`Settings`}]},play:async({canvas:e})=>{await d(e.getByRole(`link`,{name:`Home`})).toHaveAttribute(`data-router`,`true`)}},x=[{label:`Home`,href:`#home`},{label:`Workspaces`,href:`#ws`},{label:`Design`,href:`#design`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}],S={inlineSize:`18rem`},C=[{name:`Link`,selector:`li:first-child > a`,description:`Each level above the current page. Muted, underlined on hover.`},{name:`Separator`,selector:`li:first-child > [aria-hidden="true"]`,description:`A chevron, or any node. Decorative, hidden from screen readers.`},{name:`Ellipsis`,selector:`li > button`,description:`With maxItems: a button standing in for the collapsed middle.`},{name:`Current page`,selector:`[aria-current="page"]`,description:`The last item. Text, not a link: foreground colour, medium weight.`}],w={tags:[`!dev`],args:{items:x.slice(1),maxItems:4},play:async({canvasElement:e})=>{let t=await i(e,C);await d(t[3]).toHaveTextContent(`Settings`)}},T={args:{items:x,maxItems:3},render:e=>(0,u.jsx)(`div`,{style:S,children:(0,u.jsx)(c,{...e})})},E={tags:[`!dev`],args:{items:x},render:e=>(0,u.jsx)(`div`,{style:S,children:(0,u.jsx)(c,{...e})})},D={tags:[`!dev`],args:{items:x,maxItems:2}},O=[`Default`,`Small`,`Named`,`CustomSeparator`,`Collapsed`,`Render`,`anatomyParts`,`Anatomy`,`DoCollapseLongTrail`,`DontWrapLongTrail`,`StatesExample`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Breadcrumb'
    });
    // An ordered list, so screen readers announce the count and each position.
    await expect(within(nav).getByRole('list').tagName).toBe('OL');
    const items = within(nav).getAllByRole('listitem');
    await expect(items).toHaveLength(4);
    await expect(within(nav).getAllByRole('link')).toHaveLength(3);
    // The last item is the current page: marked, and not a link.
    await expect(within(nav).getByText('Settings')).toHaveAttribute('aria-current', 'page');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    'aria-label': 'Folder path'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('navigation', {
      name: 'Folder path'
    })).toBeVisible();
  }
}`,..._.parameters?.docs?.source},description:{story:`A second trail on the page gets its own landmark name.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '/'
  },
  play: async ({
    canvas
  }) => {
    // Separators are hidden from screen readers, so they are not read between items.
    const separators = canvas.getAllByText('/');
    await expect(separators).toHaveLength(3);
    for (const separator of separators) await expect(separator).toHaveAttribute('aria-hidden', 'true');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    items: [{
      label: 'Home',
      href: '#home'
    }, {
      label: 'Workspaces',
      href: '#ws'
    }, {
      label: 'Design',
      href: '#design'
    }, {
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'Atlas',
      href: '#atlas'
    }, {
      label: 'Settings'
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('listitem')).toHaveLength(4);
    await expect(canvas.queryByRole('link', {
      name: 'Design'
    })).toBeNull();
    // Home, …, Atlas, Settings: three hidden. Reach "…" from the keyboard and press it.
    await userEvent.tab();
    await userEvent.tab();
    const ellipsis = canvas.getByRole('button', {
      name: 'Show 3 more'
    });
    await expect(ellipsis).toHaveFocus();
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', ellipsis, '::before').find(r => r.style.inlineSize)?.style.inlineSize).toBe('var(--target-coarse)');
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getAllByRole('listitem')).toHaveLength(6);
    await expect(canvas.getByRole('link', {
      name: 'Design'
    })).toBeVisible();
    // Focus moves to the first revealed item instead of being dropped.
    await expect(canvas.getByRole('link', {
      name: 'Workspaces'
    })).toHaveFocus();
  }
}`,...y.parameters?.docs?.source},description:{story:`Long trails collapse the middle; "…" expands it in place.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      render: <a href="/" data-router="true" />
    }, {
      label: 'Settings'
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('link', {
      name: 'Home'
    })).toHaveAttribute('data-router', 'true');
  }
}`,...b.parameters?.docs?.source},description:{story:`A router's link keeps its own element.`,...b.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: longTrail.slice(1),
    maxItems: 4
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveTextContent('Settings');
  }
}`,...w.parameters?.docs?.source},description:{story:`Every part present: a trail collapsed so the ellipsis shows.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: longTrail,
    maxItems: 3
  },
  render: args => <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Guidelines, Do: a long trail in a narrow place collapses to one line.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: longTrail
  },
  render: args => <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Don't: the same trail left to wrap.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: longTrail,
    maxItems: 2
  }
}`,...D.parameters?.docs?.source},description:{story:`Specs, States: a short trail with an ellipsis, that fits a States cell.`,...D.parameters?.docs?.description}}}})))()}export{h as a,g as c,k as d,v as i,D as l,l as n,T as o,y as r,E as s,w as t,C as u};