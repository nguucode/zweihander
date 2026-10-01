import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Tabs-DWdWQ7nP.js";var s=t({ActivateOnFocus:()=>x,Default:()=>h,FullWidth:()=>v,Pills:()=>g,Small:()=>_,Vertical:()=>y,WithIcons:()=>b,__namedExportsOrder:()=>S,default:()=>m}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),a(),c=n(),{expect:l,fn:u,userEvent:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=e=>(0,c.jsx)(`p`,{style:{margin:0},children:e}),m={title:`Components/Navigation/Tabs`,component:o,parameters:{a11y:{test:`error`}},args:{"aria-label":`Project`,items:[{value:`overview`,label:`Overview`,content:p(`Atlas is a design system for the payments team.`)},{value:`activity`,label:`Activity`,content:p(`12 changes this week.`)},{value:`billing`,label:`Billing`,content:p(`Paid until 1 March.`),disabled:!0},{value:`settings`,label:`Settings`,content:p(`Name, visibility and members.`)}],onValueChange:u()},argTypes:{appearance:{control:`inline-radio`,options:[`underline`,`pills`]},size:{control:`inline-radio`,options:[`sm`,`md`]},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},items:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},h={play:async({args:e,canvas:t})=>{let n=t.getByRole(`tab`,{name:`Overview`});await l(t.getByRole(`tablist`,{name:`Project`})).toBeVisible(),await l(n).toHaveAttribute(`aria-selected`,`true`),await l(await t.findByRole(`tabpanel`,{name:`Overview`})).toHaveTextContent(`design system`),await d.click(t.getByRole(`tab`,{name:`Activity`})),await l(e.onValueChange).toHaveBeenLastCalledWith(`activity`),await f(()=>l(t.getByRole(`tabpanel`)).toHaveTextContent(`12 changes`)),await d.keyboard(`{ArrowRight}`);let r=t.getByRole(`tab`,{name:`Billing`});await f(()=>l(r).toHaveFocus()),await l(r).toHaveAttribute(`aria-disabled`,`true`),await d.keyboard(`{Enter}`),await l(r).toHaveAttribute(`aria-selected`,`false`),await d.keyboard(`{ArrowRight}`),await f(()=>l(t.getByRole(`tab`,{name:`Settings`})).toHaveFocus()),await l(t.getByRole(`tab`,{name:`Settings`})).toHaveAttribute(`aria-selected`,`false`),await d.keyboard(`{Enter}`),await f(()=>l(t.getByRole(`tab`,{name:`Settings`})).toHaveAttribute(`aria-selected`,`true`)),await d.keyboard(`{Home}`),await f(()=>l(n).toHaveFocus()),await d.keyboard(`{End}`),await f(()=>l(t.getByRole(`tab`,{name:`Settings`})).toHaveFocus())}},g={args:{appearance:`pills`}},_={args:{size:`sm`}},v={args:{isFullWidth:!0,appearance:`pills`}},y={args:{orientation:`vertical`},play:async({canvas:e})=>{await l(e.getByRole(`tablist`)).toHaveAttribute(`aria-orientation`,`vertical`),await d.click(e.getByRole(`tab`,{name:`Overview`})),await d.keyboard(`{ArrowDown}`),await f(()=>l(e.getByRole(`tab`,{name:`Activity`})).toHaveFocus())}},b={args:{items:[{value:`files`,label:`Files`,icon:(0,c.jsx)(i,{name:`menu`}),content:p(`214 files`)},{value:`search`,label:`Search`,icon:(0,c.jsx)(i,{name:`search`}),content:p(`Search this project`)},{value:`starred`,label:`Starred`,icon:(0,c.jsx)(i,{name:`star`}),content:p(`3 starred`)}]}},x={args:{activateOnFocus:!0},play:async({canvas:e})=>{await d.click(e.getByRole(`tab`,{name:`Overview`})),await d.keyboard(`{ArrowRight}`),await f(()=>l(e.getByRole(`tab`,{name:`Activity`})).toHaveAttribute(`aria-selected`,`true`))}},S=[`Default`,`Pills`,`Small`,`FullWidth`,`Vertical`,`WithIcons`,`ActivateOnFocus`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(await canvas.findByRole('tabpanel', {
      name: 'Overview'
    })).toHaveTextContent('design system');
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'pills'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    appearance: 'pills'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Select on focus: arrowing through the tabs switches panels as it goes.`,...x.parameters?.docs?.description}}}})))()}export{s as a,C as c,_ as i,v as n,y as o,g as r,b as s,h as t};