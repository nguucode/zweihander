import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Tabs-DUo2_J8n.js";import{n as a,t as o}from"./icon-C8IlC69p.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{a as l,r as u}from"./story-helpers-EInZsLED.js";var d=t({ActivateOnFocus:()=>T,Anatomy:()=>D,Default:()=>y,DoShortLabels:()=>O,DontLongLabels:()=>k,FullWidth:()=>S,Pills:()=>b,Small:()=>x,StatesPills:()=>M,StatesUnderline:()=>j,Vertical:()=>C,WithIcons:()=>w,__namedExportsOrder:()=>N,anatomyParts:()=>E,default:()=>v}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{s(),a(),r(),u(),f=n(),{expect:p,fn:m,userEvent:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_=e=>(0,f.jsx)(`p`,{style:{margin:0},children:e}),v={title:`Components/Navigation/Tabs`,tags:[`beta`],component:i,args:{"aria-label":`Project`,items:[{value:`overview`,label:`Overview`,content:_(`Atlas is a design system for the payments team.`)},{value:`activity`,label:`Activity`,content:_(`12 changes this week.`)},{value:`billing`,label:`Billing`,content:_(`Paid until 1 March.`),disabled:!0},{value:`settings`,label:`Settings`,content:_(`Name, visibility and members.`)}],onValueChange:m()},argTypes:{items:{description:"The tabs, in order. `content` is the panel shown while the tab is selected; a disabled tab can be focused but not selected.",control:!1,table:{type:{summary:`{ value: string; label: ReactNode; content?: ReactNode; icon?: ReactNode; disabled?: boolean }[]`}}},value:{description:"The selected tab, when you control it. Pair with `onValueChange`.",control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:`The tab selected first, when Tabs keeps its own state.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`first enabled tab`}}},onValueChange:{description:"Called with the newly selected tab's `value`.",control:!1,table:{type:{summary:`(value: string) => void`}}},appearance:{description:"`underline`: a line under the selected tab, for the sections of a page. `pills`: a filled segment, for switching views in a toolbar.",control:`inline-radio`,options:[`underline`,`pills`],table:{type:{summary:`'underline' | 'pills'`},defaultValue:{summary:`'underline'`}}},size:{description:"24px (`sm`) or 32px (`md`) tabs, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},orientation:{description:`A row above the panel, or a column beside it. Arrow keys follow: Left and Right, or Up and Down.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},isFullWidth:{description:`Tabs share the full width equally.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},activateOnFocus:{description:`Select a tab as soon as it gets focus, rather than on Enter or Space. For light panels only.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},keepMounted:{description:`Keep hidden panels in the DOM, e.g. to preserve a form's state.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:`Names the tab list when no heading on the page does.`,control:`text`,table:{type:{summary:`string`}}},className:{description:`Added to the root element.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},y={play:async({args:e,canvas:t})=>{let n=t.getByRole(`tab`,{name:`Overview`});await p(t.getByRole(`tablist`,{name:`Project`})).toBeVisible(),await p(n).toHaveAttribute(`aria-selected`,`true`);let r=await t.findByRole(`tabpanel`,{name:`Overview`});await p(r).toHaveTextContent(`design system`),await p(n).toHaveAttribute(`aria-controls`,r.id),await p(n.getBoundingClientRect().height).toBe(32),await h.tab(),await p(n).toHaveFocus(),await h.tab(),await p(r).toHaveFocus(),await h.tab({shift:!0}),await p(n).toHaveFocus(),await h.click(t.getByRole(`tab`,{name:`Activity`})),await p(e.onValueChange).toHaveBeenLastCalledWith(`activity`),await g(()=>p(t.getByRole(`tabpanel`)).toHaveTextContent(`12 changes`)),await h.keyboard(`{ArrowRight}`);let i=t.getByRole(`tab`,{name:`Billing`});await g(()=>p(i).toHaveFocus()),await p(i).toHaveAttribute(`aria-disabled`,`true`),await h.keyboard(`{Enter}`),await p(i).toHaveAttribute(`aria-selected`,`false`),await h.keyboard(`{ArrowRight}`),await g(()=>p(t.getByRole(`tab`,{name:`Settings`})).toHaveFocus()),await p(t.getByRole(`tab`,{name:`Settings`})).toHaveAttribute(`aria-selected`,`false`),await h.keyboard(`{Enter}`),await g(()=>p(t.getByRole(`tab`,{name:`Settings`})).toHaveAttribute(`aria-selected`,`true`)),await h.keyboard(`{Home}`),await g(()=>p(n).toHaveFocus()),await h.keyboard(`{End}`),await g(()=>p(t.getByRole(`tab`,{name:`Settings`})).toHaveFocus())}},b={args:{appearance:`pills`}},x={args:{size:`sm`},play:async({canvas:e})=>{let t=e.getByRole(`tab`,{name:`Overview`});await p(t.getBoundingClientRect().height).toBe(24),await p(l(`pointer: coarse`,t).find(e=>e.style.minBlockSize)?.style.minBlockSize).toBe(`var(--target-coarse)`)}},S={args:{isFullWidth:!0,appearance:`pills`}},C={args:{orientation:`vertical`},play:async({canvas:e})=>{await p(e.getByRole(`tablist`)).toHaveAttribute(`aria-orientation`,`vertical`),await h.click(e.getByRole(`tab`,{name:`Overview`})),await h.keyboard(`{ArrowDown}`),await g(()=>p(e.getByRole(`tab`,{name:`Activity`})).toHaveFocus()),await h.keyboard(`{ArrowUp}`),await g(()=>p(e.getByRole(`tab`,{name:`Overview`})).toHaveFocus())}},w={args:{items:[{value:`files`,label:`Files`,icon:(0,f.jsx)(o,{name:`menu`}),content:_(`214 files`)},{value:`search`,label:`Search`,icon:(0,f.jsx)(o,{name:`search`}),content:_(`Search this project`)},{value:`starred`,label:`Starred`,icon:(0,f.jsx)(o,{name:`star`}),content:_(`3 starred`)}]}},T={args:{activateOnFocus:!0},play:async({canvas:e})=>{await h.click(e.getByRole(`tab`,{name:`Overview`})),await h.keyboard(`{ArrowRight}`),await g(()=>p(e.getByRole(`tab`,{name:`Activity`})).toHaveAttribute(`aria-selected`,`true`))}},E=[{name:`Tab list`,selector:`[role="tablist"]`,description:`The row (or column) of tabs. With underline, a 1px rule along its edge.`},{name:`Icon`,selector:`[role="tab"] > span[aria-hidden="true"]`,description:`Optional. Decorative, sized to the tab.`},{name:`Selected tab`,selector:`[role="tab"][aria-selected="true"]`,description:`Medium weight, in the selected colour.`},{name:`Indicator`,selector:`[role="tablist"] > span[role="presentation"]`,description:`Marks the selected tab and slides to the next one: a 2px bar (underline) or a lifted chip (pills).`},{name:`Tab`,selector:`[role="tab"][aria-selected="false"]`,description:`An unselected tab: icon and label, muted until hovered.`},{name:`Panel`,selector:`[role="tabpanel"]`,description:`The selected tab's content.`}],D={tags:[`!dev`],args:w.args,play:async({canvasElement:e})=>{let t=await c(e,E);await p(t[2]).toHaveTextContent(`Files`)}},O={},k={tags:[`!dev`],args:{items:[{value:`overview`,label:`Overview of this project`,content:_(`Atlas is a design system for the payments team.`)},{value:`activity`,label:`Recent activity and changes`,content:_(`12 changes this week.`)},{value:`settings`,label:`Settings and members`,content:_(`Name, visibility and members.`)}]}},A=[{value:`list`,label:`List`},{value:`board`,label:`Board`},{value:`archive`,label:`Archive`,disabled:!0}],j={tags:[`!dev`],args:{items:A,"aria-label":`View`}},M={tags:[`!dev`],args:{items:A,"aria-label":`View`,appearance:`pills`}},N=[`Default`,`Pills`,`Small`,`FullWidth`,`Vertical`,`WithIcons`,`ActivateOnFocus`,`anatomyParts`,`Anatomy`,`DoShortLabels`,`DontLongLabels`,`StatesUnderline`,`StatesPills`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const overview = canvas.getByRole('tab', {
      name: 'Overview'
    });
    await expect(canvas.getByRole('tablist', {
      name: 'Project'
    })).toBeVisible();
    // The first enabled tab is selected by default, and labels its panel.
    await expect(overview).toHaveAttribute('aria-selected', 'true');
    const overviewPanel = await canvas.findByRole('tabpanel', {
      name: 'Overview'
    });
    await expect(overviewPanel).toHaveTextContent('design system');
    await expect(overview).toHaveAttribute('aria-controls', overviewPanel.id);
    // 32px tall at md.
    await expect(overview.getBoundingClientRect().height).toBe(32);
    // One tab stop: Tab enters on the selected tab, the next Tab leaves for the panel.
    await userEvent.tab();
    await expect(overview).toHaveFocus();
    await userEvent.tab();
    await expect(overviewPanel).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(overview).toHaveFocus();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Activity'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith('activity');
    // The panel swaps after the click; wait for it rather than race it.
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('12 changes'));
    // Arrows move focus without selecting. A disabled tab still takes focus
    // (aria-disabled), so it is found and announced, but cannot be selected.
    await userEvent.keyboard('{ArrowRight}');
    const billing = canvas.getByRole('tab', {
      name: 'Billing'
    });
    await waitFor(() => expect(billing).toHaveFocus());
    await expect(billing).toHaveAttribute('aria-disabled', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(billing).toHaveAttribute('aria-selected', 'false');
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Settings'
    })).toHaveFocus());
    await expect(canvas.getByRole('tab', {
      name: 'Settings'
    })).toHaveAttribute('aria-selected', 'false');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Settings'
    })).toHaveAttribute('aria-selected', 'true'));
    // Home and End jump to the ends.
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(overview).toHaveFocus());
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Settings'
    })).toHaveFocus());
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'pills'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  play: async ({
    canvas
  }) => {
    const tab = canvas.getByRole('tab', {
      name: 'Overview'
    });
    await expect(tab.getBoundingClientRect().height).toBe(24);
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', tab).find(r => r.style.minBlockSize)?.style.minBlockSize).toBe('var(--target-coarse)');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    appearance: 'pills'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical');
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Overview'
    }));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Activity'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Overview'
    })).toHaveFocus());
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'files',
      label: 'Files',
      icon: <Icon name="menu" />,
      content: panel('214 files')
    }, {
      value: 'search',
      label: 'Search',
      icon: <Icon name="search" />,
      content: panel('Search this project')
    }, {
      value: 'starred',
      label: 'Starred',
      icon: <Icon name="star" />,
      content: panel('3 starred')
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    activateOnFocus: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Overview'
    }));
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Activity'
    })).toHaveAttribute('aria-selected', 'true'));
  }
}`,...T.parameters?.docs?.source},description:{story:`Select on focus: arrowing through the tabs switches panels as it goes.`,...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: WithIcons.args,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Files');
  }
}`,...D.parameters?.docs?.source},description:{story:`Every part present: tabs with icons, one selected, and its panel.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Do: short labels, a word or two, that fit on one line.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      value: 'overview',
      label: 'Overview of this project',
      content: panel('Atlas is a design system for the payments team.')
    }, {
      value: 'activity',
      label: 'Recent activity and changes',
      content: panel('12 changes this week.')
    }, {
      value: 'settings',
      label: 'Settings and members',
      content: panel('Name, visibility and members.')
    }]
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Don't: long labels push the tabs past the edge of their container.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: stateItems,
    'aria-label': 'View'
  }
}`,...j.parameters?.docs?.source},description:{story:`Specs, States: a small tab list, one disabled, that fits a States cell.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: stateItems,
    'aria-label': 'View',
    appearance: 'pills'
  }
}`,...M.parameters?.docs?.source},description:{story:`Specs, States: the same in pills.`,...M.parameters?.docs?.description}}}})))()}export{S as a,j as c,w as d,E as f,k as i,d as l,y as n,b as o,P as p,O as r,M as s,D as t,C as u};