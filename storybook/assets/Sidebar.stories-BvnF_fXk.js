import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./icon-Dc4hTclj.js";import{n as a,t as o}from"./Sidebar-Cz-fsNU0.js";var s=t({Collapsed:()=>v,Collapsible:()=>_,Default:()=>g,Plain:()=>y,__namedExportsOrder:()=>b,default:()=>h}),c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),c=n(),{expect:l,fn:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m=[{label:`Search`,href:`#search`,icon:(0,c.jsx)(i,{name:`search`})},{label:`Inbox`,href:`#inbox`,icon:(0,c.jsx)(i,{name:`info`}),badge:12},{type:`group`,label:`Projects`,items:[{label:`Atlas`,href:`#atlas`,icon:(0,c.jsx)(i,{name:`star`})},{label:`Billing revamp`,href:`#billing`,icon:(0,c.jsx)(i,{name:`calendar`})},{label:`Onboarding`,href:`#onboarding`,icon:(0,c.jsx)(i,{name:`user`})}]},{type:`group`,label:`Workspace`,items:[{label:`Settings`,href:`#settings`,icon:(0,c.jsx)(i,{name:`menu`})}]}],h={title:`Components/Navigation/Sidebar`,component:o,parameters:{a11y:{test:`error`},layout:`fullscreen`},args:{items:m,currentHref:`#atlas`,header:(0,c.jsx)(`strong`,{style:{paddingInline:`var(--space-3)`},children:`Zweihänder`}),footer:(0,c.jsx)(`span`,{style:{paddingInline:`var(--space-3)`,color:`var(--muted-foreground)`},children:`sam@atlas.dev`}),onCollapsedChange:u()},argTypes:{items:{control:!1},header:{control:!1},footer:{control:!1}},decorators:[e=>(0,c.jsx)(`div`,{style:{blockSize:`32rem`,display:`flex`},children:e()})]},g={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await l(p(t).getByRole(`link`,{name:`Atlas`})).toHaveAttribute(`aria-current`,`page`),await l(p(t).getByRole(`link`,{name:/Inbox/})).not.toHaveAttribute(`aria-current`),await l(p(t).getByRole(`list`,{name:`Projects`})).toBeVisible(),await l(p(t).getByText(`12`)).toBeVisible()}},_={args:{isCollapsible:!0},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Collapse sidebar`});await l(n).toHaveAttribute(`aria-expanded`,`true`),await d.click(n),await l(e.onCollapsedChange).toHaveBeenLastCalledWith(!0),await l(t.getByRole(`button`,{name:`Expand sidebar`})).toHaveAttribute(`aria-expanded`,`false`);let r=t.getByRole(`link`,{name:`Atlas`});await l(r).toHaveAttribute(`aria-current`,`page`),await l(t.getByRole(`list`,{name:`Projects`})).toBeInTheDocument(),await l(t.getByRole(`link`,{name:`Inbox, 12`})).toBeInTheDocument(),r.focus(),await f(()=>l(p(document.body).getByRole(`tooltip`)).toHaveTextContent(`Atlas`))}},v={args:{defaultCollapsed:!0,isCollapsible:!0}},y={args:{header:void 0,footer:void 0,items:m.slice(0,2),currentHref:`#inbox`}},b=[`Default`,`Collapsible`,`Collapsed`,`Plain`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    // Still findable by group name.
    await expect(canvas.getByRole('list', {
      name: 'Projects'
    })).toBeInTheDocument();
    // The badge is hidden in the rail, so the count joins the name.
    await expect(canvas.getByRole('link', {
      name: 'Inbox, 12'
    })).toBeInTheDocument();
    // Keyboard focus shows the label as a tooltip.
    atlas.focus();
    await waitFor(() => expect(within(document.body).getByRole('tooltip')).toHaveTextContent('Atlas'));
  }
}`,..._.parameters?.docs?.source},description:{story:`The icon rail: labels move into tooltips and stay the links' names.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true,
    isCollapsible: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    header: undefined,
    footer: undefined,
    items: items.slice(0, 2),
    currentHref: '#inbox'
  }
}`,...y.parameters?.docs?.source}}}})))()}export{x as a,s as i,g as n,y as r,_ as t};