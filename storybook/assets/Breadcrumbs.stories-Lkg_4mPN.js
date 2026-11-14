import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useRender-Bn_E94XY.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./icon-Cjfg2BMt.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";import{a as f,r as p}from"./story-helpers-EInZsLED.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{m=`_breadcrumbs_kyfy1_1`,h=`_md_kyfy1_5`,g=`_sm_kyfy1_10`,_=`_list_kyfy1_16`,v=`_item_kyfy1_27`,y=`_link_kyfy1_41`,b=`_current_kyfy1_42`,x=`_ellipsis_kyfy1_61`,S=`_separator_kyfy1_71`,C={breadcrumbs:m,md:h,sm:g,list:_,item:v,link:y,current:b,ellipsis:x,separator:S}})))()}function T({item:e}){return r({render:e.render,defaultTagName:`a`,props:{href:e.href,className:C.link,children:e.label}})}function E({items:e,maxItems:t,separator:n,size:r=`md`,"aria-label":i=`Breadcrumb`,className:a,...s}){let[c,u]=(0,D.useState)(!1),d=(0,D.useRef)(null),f=(0,D.useRef)(!1);(0,D.useEffect)(()=>{f.current&&(f.current=!1,d.current?.querySelectorAll(`li`)[1]?.querySelector(`a, [href], button`)?.focus())},[c]);let p=!c&&t!==void 0&&t>=2&&e.length>t?[e[0],`ellipsis`,...e.slice(e.length-(t-1))]:e,m=(0,O.jsx)(`span`,{className:C.separator,"aria-hidden":`true`,children:n??(0,O.jsx)(l,{name:`chevron-right`})});return(0,O.jsx)(`nav`,{"aria-label":i,className:o(C.breadcrumbs,C[r],a),...s,children:(0,O.jsx)(`ol`,{ref:d,className:C.list,children:p.map((n,r)=>{let i=r===p.length-1;return(0,O.jsxs)(`li`,{className:C.item,children:[n===`ellipsis`?(0,O.jsx)(`button`,{type:`button`,className:C.ellipsis,"aria-label":`Show ${e.length-t} more`,onClick:()=>{f.current=!0,u(!0)},children:(0,O.jsx)(l,{name:`more`})}):i?(0,O.jsx)(`span`,{className:C.current,"aria-current":`page`,children:n.label}):(0,O.jsx)(T,{item:n}),!i&&m]},r)})})})}var D,O;function k(){return(k=e((()=>{D=n(),i(),c(),a(),w(),O=s(),E.__docgenInfo={description:``,methods:[],displayName:`Breadcrumbs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:`From the top level down. The last one is the current page.`},maxItems:{required:!1,tsType:{name:`number`},description:'Collapse the middle when there are more than this many: the first item,\n"…", and the last `maxItems - 1`. The "…" expands them in place.'},separator:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`The nav landmark's name.`,defaultValue:{value:`'Breadcrumb'`,computed:!1}}},composes:[`Omit`]}})))()}var A=t({Anatomy:()=>G,Collapsed:()=>B,CustomSeparator:()=>z,Default:()=>I,DoCollapseLongTrail:()=>K,DontWrapLongTrail:()=>q,Named:()=>R,Render:()=>V,Small:()=>L,StatesExample:()=>J,__namedExportsOrder:()=>Y,anatomyParts:()=>W,default:()=>F}),j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{u(),p(),k(),j=s(),{expect:M,userEvent:N,within:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Navigation/Breadcrumbs`,tags:[`beta`],component:E,args:{items:[{label:`Home`,href:`#home`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},argTypes:{items:{description:"The trail, top level first. The last item is the current page, shown as text. `render` on an item replaces its `<a>`, e.g. with a router's link.",control:!1,table:{type:{summary:`{ label: ReactNode; href?: string; render?: ReactElement }[]`}}},maxItems:{description:'Collapse the middle beyond this many items (2 or more): the first item, "…", and the last `maxItems - 1`. "…" expands them in place.',control:`number`,table:{type:{summary:`number`}}},separator:{description:`Drawn between items, hidden from screen readers.`,control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`chevron-right icon`}}},size:{description:"Text size: `body-sm` (`sm`) or `body` (`md`).",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},"aria-label":{description:"Names the `<nav>` landmark. Change it when a page has two trails.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Breadcrumb'`}}}},excludeStories:[`anatomyParts`]},I={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Breadcrumb`});await M(P(t).getByRole(`list`).tagName).toBe(`OL`);let n=P(t).getAllByRole(`listitem`);await M(n).toHaveLength(4),await M(P(t).getAllByRole(`link`)).toHaveLength(3),await M(P(t).getByText(`Settings`)).toHaveAttribute(`aria-current`,`page`),await M(getComputedStyle(P(t).getByRole(`list`)).columnGap).toBe(`8px`),await M(getComputedStyle(n[0]).columnGap).toBe(`8px`)}},L={args:{size:`sm`}},R={tags:[`!dev`],args:{"aria-label":`Folder path`},play:async({canvas:e})=>{await M(e.getByRole(`navigation`,{name:`Folder path`})).toBeVisible()}},z={args:{separator:`/`},play:async({canvas:e})=>{let t=e.getAllByText(`/`);await M(t).toHaveLength(3);for(let e of t)await M(e).toHaveAttribute(`aria-hidden`,`true`)}},B={args:{maxItems:3,items:[{label:`Home`,href:`#home`},{label:`Workspaces`,href:`#ws`},{label:`Design`,href:`#design`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},play:async({canvas:e})=>{await M(e.getAllByRole(`listitem`)).toHaveLength(4),await M(e.queryByRole(`link`,{name:`Design`})).toBeNull(),await N.tab(),await N.tab();let t=e.getByRole(`button`,{name:`Show 3 more`});await M(t).toHaveFocus(),await M(f(`pointer: coarse`,t,`::before`).find(e=>e.style.inlineSize)?.style.inlineSize).toBe(`var(--target-coarse)`),await N.keyboard(`{Enter}`),await M(e.getAllByRole(`listitem`)).toHaveLength(6),await M(e.getByRole(`link`,{name:`Design`})).toBeVisible(),await M(e.getByRole(`link`,{name:`Workspaces`})).toHaveFocus()}},V={args:{items:[{label:`Home`,render:(0,j.jsx)(`a`,{href:`/`,"data-router":`true`})},{label:`Settings`}]},play:async({canvas:e})=>{await M(e.getByRole(`link`,{name:`Home`})).toHaveAttribute(`data-router`,`true`)}},H=[{label:`Home`,href:`#home`},{label:`Workspaces`,href:`#ws`},{label:`Design`,href:`#design`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}],U={inlineSize:`18rem`},W=[{name:`Link`,selector:`li:first-child > a`,description:`Each level above the current page. Muted, underlined on hover.`},{name:`Separator`,selector:`li:first-child > [aria-hidden="true"]`,description:`A chevron, or any node. Decorative, hidden from screen readers.`},{name:`Ellipsis`,selector:`li > button`,description:`With maxItems: a button standing in for the collapsed middle.`},{name:`Current page`,selector:`[aria-current="page"]`,description:`The last item. Text, not a link: foreground colour, medium weight.`}],G={tags:[`!dev`],args:{items:H.slice(1),maxItems:4},play:async({canvasElement:e})=>{let t=await d(e,W);await M(t[3]).toHaveTextContent(`Settings`)}},K={args:{items:H,maxItems:3},render:e=>(0,j.jsx)(`div`,{style:U,children:(0,j.jsx)(E,{...e})})},q={tags:[`!dev`],args:{items:H},render:e=>(0,j.jsx)(`div`,{style:U,children:(0,j.jsx)(E,{...e})})},J={tags:[`!dev`],args:{items:H,maxItems:2}},Y=[`Default`,`Small`,`Named`,`CustomSeparator`,`Collapsed`,`Render`,`anatomyParts`,`Anatomy`,`DoCollapseLongTrail`,`DontWrapLongTrail`,`StatesExample`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    // 8px either side of the separator, as Atlassian's breadcrumbs.
    await expect(getComputedStyle(within(nav).getByRole('list')).columnGap).toBe('8px');
    await expect(getComputedStyle(items[0]).columnGap).toBe('8px');
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`A second trail on the page gets its own landmark name.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Long trails collapse the middle; "…" expands it in place.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`A router's link keeps its own element.`,...V.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Every part present: a trail collapsed so the ellipsis shows.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    items: longTrail,
    maxItems: 3
  },
  render: args => <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Do: a long trail in a narrow place collapses to one line.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: longTrail
  },
  render: args => <div style={narrow}>
      <Breadcrumbs {...args} />
    </div>
}`,...q.parameters?.docs?.source},description:{story:`Guidelines, Don't: the same trail left to wrap.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: longTrail,
    maxItems: 2
  }
}`,...J.parameters?.docs?.source},description:{story:`Specs, States: a short trail with an ellipsis, that fits a States cell.`,...J.parameters?.docs?.description}}}})))()}export{I as a,L as c,X as d,z as i,J as l,A as n,K as o,B as r,q as s,G as t,W as u};