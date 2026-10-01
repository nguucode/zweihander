import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./Breadcrumbs-BML8pWPx.js";var a=t({Collapsed:()=>m,CustomSeparator:()=>p,Default:()=>d,Render:()=>h,Small:()=>f,__namedExportsOrder:()=>g,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o=n(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Navigation/Breadcrumbs`,component:i,parameters:{a11y:{test:`error`}},args:{items:[{label:`Home`,href:`#home`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},items:{control:!1}}},d={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Breadcrumb`}),n=l(t).getAllByRole(`listitem`);await s(n).toHaveLength(4),await s(l(t).getAllByRole(`link`)).toHaveLength(3),await s(l(t).getByText(`Settings`)).toHaveAttribute(`aria-current`,`page`)}},f={args:{size:`sm`}},p={args:{separator:`/`}},m={args:{maxItems:3,items:[{label:`Home`,href:`#home`},{label:`Workspaces`,href:`#ws`},{label:`Design`,href:`#design`},{label:`Projects`,href:`#projects`},{label:`Atlas`,href:`#atlas`},{label:`Settings`}]},play:async({canvas:e})=>{await s(e.getAllByRole(`listitem`)).toHaveLength(4),await s(e.queryByRole(`link`,{name:`Design`})).toBeNull(),await c.click(e.getByRole(`button`,{name:`Show 3 more`})),await s(e.getAllByRole(`listitem`)).toHaveLength(6),await s(e.getByRole(`link`,{name:`Design`})).toBeVisible(),await s(e.getByRole(`link`,{name:`Workspaces`})).toHaveFocus()}},h={args:{items:[{label:`Home`,render:(0,o.jsx)(`a`,{href:`/`,"data-router":`true`})},{label:`Settings`}]},play:async({canvas:e})=>{await s(e.getByRole(`link`,{name:`Home`})).toHaveAttribute(`data-router`,`true`)}},g=[`Default`,`Small`,`CustomSeparator`,`Collapsed`,`Render`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Breadcrumb'
    });
    const items = within(nav).getAllByRole('listitem');
    await expect(items).toHaveLength(4);
    await expect(within(nav).getAllByRole('link')).toHaveLength(3);
    // The last item is the current page: marked, and not a link.
    await expect(within(nav).getByText('Settings')).toHaveAttribute('aria-current', 'page');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    separator: '/'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    // Home, …, Atlas, Settings: three hidden.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show 3 more'
    }));
    await expect(canvas.getAllByRole('listitem')).toHaveLength(6);
    await expect(canvas.getByRole('link', {
      name: 'Design'
    })).toBeVisible();
    // Focus moves to the first revealed item instead of being dropped.
    await expect(canvas.getByRole('link', {
      name: 'Workspaces'
    })).toHaveFocus();
  }
}`,...m.parameters?.docs?.source},description:{story:`Long trails collapse the middle; "…" expands it in place.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`A router's link keeps its own element.`,...h.parameters?.docs?.description}}}})))()}export{f as a,d as i,m as n,_ as o,p as r,a as t};