import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./icon-C9aTyDDd.js";import{n as a,t as o}from"./VerticalNav-CYEe4TA2.js";var s=t({Empty:()=>y,Grouped:()=>_,LongLabels:()=>v,WithIcons:()=>g,__namedExportsOrder:()=>b,default:()=>h}),c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),c=n(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p=[{label:`Profile`,href:`#profile`,icon:(0,c.jsx)(i,{name:`user`})},{label:`Notifications`,href:`#notifications`,icon:(0,c.jsx)(i,{name:`notifications`})},{label:`Members`,href:`#members`,icon:(0,c.jsx)(i,{name:`user`}),badge:12},{label:`Billing`,href:`#billing`,icon:(0,c.jsx)(i,{name:`file`})},{label:`Fiscal calendar`,href:`#calendar`,icon:(0,c.jsx)(i,{name:`calendar`})},{label:`Help`,href:`#help`,icon:(0,c.jsx)(i,{name:`help`})}],m=[{label:`Overview`,href:`#overview`},{type:`group`,label:`Account`,items:[{label:`Profile`,href:`#profile`},{label:`Password`,href:`#password`},{label:`Notifications`,href:`#notifications`}]},{type:`group`,label:`Workspace`,items:[{label:`General`,href:`#general`},{label:`Members`,href:`#members`,badge:12},{label:`Billing`,href:`#billing`},{label:`Integrations`,href:`#integrations`,badge:3}]}],h={title:`Patterns/Application UI/Vertical Nav`,tags:[`experimental`],component:o,parameters:{layout:`padded`},args:{"aria-label":`Settings`,items:p,currentHref:`#members`},argTypes:{items:{description:'The links, in order: `{ label, href?, icon?, badge?, render? }`; `badge` is a count. A `{ type: "group", label, items }` entry is a named list. `render` replaces the `<a>`, e.g. a router\'s `<Link />`.',control:!1},currentHref:{description:'The href of the section on screen: that item gets `aria-current="page"` and the selected fill.',control:`text`},"aria-label":{description:`The nav landmark's name, e.g. "Settings". Required: the app's own nav is already a navigation landmark.`,control:`text`}},decorators:[e=>(0,c.jsx)(`div`,{"data-testid":`column`,style:{inlineSize:240},children:(0,c.jsx)(e,{})})]},g={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Settings`}),n=f(t).getByRole(`link`,{current:`page`});await l(n).toHaveAccessibleName(`Members, 12`),await l(f(t).getAllByRole(`link`).filter(e=>e.getAttribute(`aria-current`))).toHaveLength(1);let r=f(t).getByRole(`link`,{name:`Profile`});await l(r.querySelector(`:scope > [aria-hidden="true"] > svg`)).not.toBeNull(),await l(getComputedStyle(n).fontWeight).toBe(`500`),await l(getComputedStyle(r).fontWeight).toBe(`400`),await u.tab(),await l(f(t).getByRole(`link`,{name:`Profile`})).toHaveFocus(),await u.tab(),await l(f(t).getByRole(`link`,{name:`Notifications`})).toHaveFocus()}},_={args:{items:m,currentHref:`#profile`},play:async({canvas:e})=>{let t=e.getByRole(`list`,{name:`Workspace`});await l(f(t).getAllByRole(`listitem`)).toHaveLength(4),await l(f(t).getByRole(`link`,{name:`Integrations, 3`})).toBeVisible(),await l(e.getByRole(`list`,{name:`Account`})).toBeVisible(),await l(e.queryByRole(`heading`)).toBeNull(),await l(e.getByRole(`link`,{current:`page`})).toHaveAccessibleName(`Profile`)}},v={args:{items:[{label:`Profile`,href:`#profile`,icon:(0,c.jsx)(i,{name:`user`})},{label:`Intercompanyreconciliationandeliminationrules`,href:`#rules`,icon:(0,c.jsx)(i,{name:`file`}),badge:128},{label:`Approval workflows for purchase orders over the limit`,href:`#approvals`,icon:(0,c.jsx)(i,{name:`check`})}],currentHref:`#rules`},decorators:[e=>(0,c.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:180},children:(0,c.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByTestId(`narrow`);await d(async()=>{for(let n of e.getAllByRole(`link`))await l(n.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right+.5),await l(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth);let n=e.getByRole(`link`,{name:`Profile`}).getBoundingClientRect(),r=e.getByRole(`link`,{current:`page`}).getBoundingClientRect();await l(r.height).toBeGreaterThan(n.height)})}},y={args:{items:[],currentHref:void 0},tags:[`!dev`],play:async({canvas:e})=>{await l(e.getByRole(`navigation`,{name:`Settings`})).toBeInTheDocument(),await l(e.queryByRole(`link`)).toBeNull()}},b=[`WithIcons`,`Grouped`,`LongLabels`,`Empty`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Settings'
    });
    // One current item, and the count joins its name with a comma.
    const current = within(nav).getByRole('link', {
      current: 'page'
    });
    await expect(current).toHaveAccessibleName('Members, 12');
    await expect(within(nav).getAllByRole('link').filter(l => l.getAttribute('aria-current'))).toHaveLength(1);
    // Icons are decorative.
    const profile = within(nav).getByRole('link', {
      name: 'Profile'
    });
    await expect(profile.querySelector(':scope > [aria-hidden="true"] > svg')).not.toBeNull();
    // Current is not shown by color alone: it is also medium weight.
    await expect(getComputedStyle(current).fontWeight).toBe('500');
    await expect(getComputedStyle(profile).fontWeight).toBe('400');
    // Tab goes down the list in order.
    await userEvent.tab();
    await expect(within(nav).getByRole('link', {
      name: 'Profile'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(within(nav).getByRole('link', {
      name: 'Notifications'
    })).toHaveFocus();
  }
}`,...g.parameters?.docs?.source},description:{story:`Icons, a count, and the current section.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: grouped,
    currentHref: '#profile'
  },
  play: async ({
    canvas
  }) => {
    const workspace = canvas.getByRole('list', {
      name: 'Workspace'
    });
    await expect(within(workspace).getAllByRole('listitem')).toHaveLength(4);
    await expect(within(workspace).getByRole('link', {
      name: 'Integrations, 3'
    })).toBeVisible();
    await expect(canvas.getByRole('list', {
      name: 'Account'
    })).toBeVisible();
    await expect(canvas.queryByRole('heading')).toBeNull();
    await expect(canvas.getByRole('link', {
      current: 'page'
    })).toHaveAccessibleName('Profile');
  }
}`,..._.parameters?.docs?.source},description:{story:`Named groups, with an ungrouped item first. A group label names its list; it is not a heading.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Profile',
      href: '#profile',
      icon: <Icon name="user" />
    }, {
      label: 'Intercompanyreconciliationandeliminationrules',
      href: '#rules',
      icon: <Icon name="file" />,
      badge: 128
    }, {
      label: 'Approval workflows for purchase orders over the limit',
      href: '#approvals',
      icon: <Icon name="check" />
    }],
    currentHref: '#rules'
  },
  decorators: [Story => <div data-testid="narrow" style={{
    inlineSize: 180
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const column = canvas.getByTestId('narrow');
    await waitFor(async () => {
      for (const link of canvas.getAllByRole('link')) {
        await expect(link.getBoundingClientRect().right).toBeLessThanOrEqual(column.getBoundingClientRect().right + 0.5);
        await expect(link.scrollWidth).toBeLessThanOrEqual(link.clientWidth);
      }
      // Wrapped to more than one line, not truncated.
      const short = canvas.getByRole('link', {
        name: 'Profile'
      }).getBoundingClientRect();
      const long = canvas.getByRole('link', {
        current: 'page'
      }).getBoundingClientRect();
      await expect(long.height).toBeGreaterThan(short.height);
    });
  }
}`,...v.parameters?.docs?.source},description:{story:`A long label wraps inside a narrow column instead of being cut off or overflowing.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    currentHref: undefined
  },
  tags: ['!dev'],
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('navigation', {
      name: 'Settings'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('link')).toBeNull();
  }
}`,...y.parameters?.docs?.source},description:{story:`No items: the landmark stays, with nothing in it to tab to.`,...y.parameters?.docs?.description}}}})))()}export{x as a,g as i,v as n,s as r,_ as t};