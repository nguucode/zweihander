import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Button-BLXGvKSL.js";import{n as s,t as c}from"./Tag-Yrwndnqs.js";import{n as l,t as u}from"./Tabs-DWdWQ7nP.js";import{n as d,t as f}from"./Menu-Dl135OjD.js";import{n as p,t as m}from"./PageHeading-eHe75SJL.js";var h=t({Narrow:()=>E,Simple:()=>S,TabsSwitchedOff:()=>C,WithBreadcrumbsAndMeta:()=>w,WithTabs:()=>T,__namedExportsOrder:()=>D,default:()=>x}),g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),s(),a(),d(),l(),p(),g=n(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Patterns/Application UI/Page Heading`,component:m,parameters:{a11y:{test:`error`},layout:`padded`},args:{title:`Projects`},argTypes:{breadcrumbs:{control:!1},meta:{control:!1},actions:{control:!1},tabs:{control:!1}}},S={args:{title:`Projects`,description:`Everything your team is working on, sorted by last activity.`,actions:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{variant:`secondary`,appearance:`outlined`,children:`Import`}),(0,g.jsx)(o,{startIcon:(0,g.jsx)(i,{name:`plus`}),children:`New project`})]})},play:async({canvas:e})=>{await _(e.getByRole(`heading`,{level:1,name:`Projects`})).toBeVisible(),await _(e.getByRole(`button`,{name:`New project`})).toBeVisible()}},C={args:{...S.args,tabs:!1},play:async({canvas:e})=>{let t=e.getByRole(`heading`,{level:1,name:`Projects`}).closest(`header`);await _(getComputedStyle(t).borderBlockEndStyle).not.toBe(`none`)}},w={args:{title:`Senior Product Designer`,breadcrumbs:[{label:`Jobs`,href:`#jobs`},{label:`Design`,href:`#design`},{label:`Senior Product Designer`}],meta:[(0,g.jsx)(c,{size:`sm`,variant:`success`,text:`Open`},`s`),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{name:`user`}),`12 applicants`]}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{name:`calendar`}),`Closes 30 October 2026`]})],actions:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{variant:`secondary`,appearance:`outlined`,children:`Edit`}),(0,g.jsx)(o,{children:`Publish`}),(0,g.jsx)(f,{align:`end`,trigger:(0,g.jsx)(o,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`More actions`,children:(0,g.jsx)(i,{name:`more`})}),items:[{label:`Duplicate`},{label:`Archive`}]})]})},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Breadcrumb`});await _(b(t).getByText(`Senior Product Designer`)).toHaveAttribute(`aria-current`,`page`),await _(e.getByText(`12 applicants`)).toBeVisible(),await v.click(e.getByRole(`button`,{name:`More actions`}));let n=await b(document.body).findByRole(`menuitem`,{name:`Archive`});await y(()=>_(n).toBeVisible()),await v.keyboard(`{Escape}`),await y(()=>_(b(document.body).queryByRole(`menu`)).toBeNull())}},T={args:{title:`Atlas`,description:`Customer-facing analytics for the mobile app.`,actions:(0,g.jsx)(o,{variant:`secondary`,appearance:`outlined`,children:`Settings`}),tabs:(0,g.jsx)(u,{"aria-label":`Project sections`,items:[{value:`overview`,label:`Overview`,content:(0,g.jsx)(`p`,{children:`Overview of Atlas.`})},{value:`activity`,label:`Activity`,content:(0,g.jsx)(`p`,{children:`Recent activity.`})},{value:`members`,label:`Members`,content:(0,g.jsx)(`p`,{children:`Twelve members.`})}]})},play:async({canvas:e})=>{await v.click(e.getByRole(`tab`,{name:`Activity`})),await _(e.getByRole(`tabpanel`,{name:`Activity`})).toHaveTextContent(`Recent activity.`)}},E={...S,decorators:[e=>(0,g.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`heading`,{level:1}).getBoundingClientRect(),n=e.getByRole(`button`,{name:`New project`}).getBoundingClientRect();await _(n.top).toBeGreaterThanOrEqual(t.bottom)}},D=[`Simple`,`TabsSwitchedOff`,`WithBreadcrumbsAndMeta`,`WithTabs`,`Narrow`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'Everything your team is working on, sorted by last activity.',
    actions: <>
        <Button variant="secondary" appearance="outlined">
          Import
        </Button>
        <Button startIcon={<Icon name="plus" />}>New project</Button>
      </>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Projects'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'New project'
    })).toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`Title, a line of context and the page's main actions.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    tabs: false
  },
  play: async ({
    canvas
  }) => {
    const heading = canvas.getByRole('heading', {
      level: 1,
      name: 'Projects'
    }).closest('header')!;
    await expect(getComputedStyle(heading).borderBlockEndStyle).not.toBe('none');
  }
}`,...C.parameters?.docs?.source},description:{story:"Tabs switched off, e.g. `tabs={hasSections && <Tabs />}`: the heading keeps its own edge.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Senior Product Designer',
    breadcrumbs: [{
      label: 'Jobs',
      href: '#jobs'
    }, {
      label: 'Design',
      href: '#design'
    }, {
      label: 'Senior Product Designer'
    }],
    meta: [<Tag key="s" size="sm" variant="success" text="Open" />, <>
        <Icon name="user" />
        12 applicants
      </>, <>
        <Icon name="calendar" />
        Closes 30 October 2026
      </>],
    actions: <>
        <Button variant="secondary" appearance="outlined">
          Edit
        </Button>
        <Button>Publish</Button>
        <Menu align="end" trigger={<Button variant="secondary" appearance="ghost" isIconOnly aria-label="More actions">
              <Icon name="more" />
            </Button>} items={[{
        label: 'Duplicate'
      }, {
        label: 'Archive'
      }]} />
      </>
  },
  play: async ({
    canvas
  }) => {
    const crumbs = canvas.getByRole('navigation', {
      name: 'Breadcrumb'
    });
    await expect(within(crumbs).getByText('Senior Product Designer')).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByText('12 applicants')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    const archive = await within(document.body).findByRole('menuitem', {
      name: 'Archive'
    });
    await waitFor(() => expect(archive).toBeVisible());
    await userEvent.keyboard('{Escape}');
    // Let it finish closing: its focus guards are still in the page until then.
    await waitFor(() => expect(within(document.body).queryByRole('menu')).toBeNull());
  }
}`,...w.parameters?.docs?.source},description:{story:`A record's page: where it sits, its status and facts, and actions with an overflow menu.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Atlas',
    description: 'Customer-facing analytics for the mobile app.',
    actions: <Button variant="secondary" appearance="outlined">Settings</Button>,
    tabs: <Tabs aria-label="Project sections" items={[{
      value: 'overview',
      label: 'Overview',
      content: <p>Overview of Atlas.</p>
    }, {
      value: 'activity',
      label: 'Activity',
      content: <p>Recent activity.</p>
    }, {
      value: 'members',
      label: 'Members',
      content: <p>Twelve members.</p>
    }]} />
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Activity'
    }));
    await expect(canvas.getByRole('tabpanel', {
      name: 'Activity'
    })).toHaveTextContent('Recent activity.');
  }
}`,...T.parameters?.docs?.source},description:{story:`Sections of one page as tabs under the heading; the tab list's line is the heading's edge.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...Simple,
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading', {
      level: 1
    }).getBoundingClientRect();
    const action = canvas.getByRole('button', {
      name: 'New project'
    }).getBoundingClientRect();
    await expect(action.top).toBeGreaterThanOrEqual(title.bottom);
  }
}`,...E.parameters?.docs?.source},description:{story:`On a phone the actions drop under the title instead of squeezing it.`,...E.parameters?.docs?.description}}}})))()}export{T as a,w as i,h as n,O as o,S as r,E as t};