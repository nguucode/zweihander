import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as l,t as u}from"./EmptyState-DFT2bqlk.js";var d=t({Anatomy:()=>b,Default:()=>h,DontNoData:()=>x,FirstUse:()=>g,Small:()=>_,TitleOnly:()=>v,__namedExportsOrder:()=>S,anatomyParts:()=>y,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s(),a(),r(),l(),f=n(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/States/EmptyState`,tags:[`beta`],component:u,args:{icon:(0,f.jsx)(o,{name:`search`}),title:`No projects match "atlas"`,description:`Check the spelling, or clear the search to see every project.`,action:(0,f.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`Clear search`})},argTypes:{title:{description:"Says what is empty. A real heading, at `headingLevel`.",control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Why it is empty, or what will appear here. Muted, at most 40 characters wide.`,control:`text`,table:{type:{summary:`ReactNode`}}},icon:{description:'An icon (`<Icon name="search" />`) or a small illustration, on a disc. Decorative: hidden from screen readers.',control:!1,table:{type:{summary:`ReactNode`}}},action:{description:`The way forward: usually one Button, at most two.`,control:!1,table:{type:{summary:`ReactNode`}}},size:{description:"`sm` for a panel or a table body; `md` for a whole page or section.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},headingLevel:{description:"The title's heading level, so it fits the page outline: `3` inside a section headed by an `h2`.",control:`inline-radio`,options:[2,3,4,5,6],table:{type:{summary:`2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`2`}}}},excludeStories:[`anatomyParts`]},h={play:async({canvas:e,canvasElement:t})=>{await p(e.getByRole(`heading`,{level:2,name:`No projects match "atlas"`})).toBeVisible(),await p(e.getByRole(`button`,{name:`Clear search`})).toBeVisible(),await p(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await p(e.queryByRole(`status`)).toBeNull(),await p(e.queryByRole(`alert`)).toBeNull(),await p(t.querySelector(`[aria-live]`)).toBeNull()}},g={args:{icon:(0,f.jsx)(o,{name:`plus`}),title:`No projects yet`,description:`Projects keep a team’s files, tasks and conversations in one place.`,action:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{startIcon:(0,f.jsx)(o,{name:`plus`}),children:`New project`}),(0,f.jsx)(i,{appearance:`ghost`,variant:`accent`,children:`Import`})]})}},_={args:{size:`sm`,headingLevel:3,action:void 0,title:`No comments`,description:`Comments on this file show up here.`,icon:(0,f.jsx)(o,{name:`info`})},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})],play:async({canvas:e})=>{await p(e.getByRole(`heading`,{level:3})).toHaveTextContent(`No comments`)}},v={args:{icon:void 0,description:void 0,action:void 0,title:`Nothing scheduled for today`}},y=[{name:`Container`,selector:`div:has(> h2)`,description:`Centres everything; its padding follows the size prop.`},{name:`Icon disc`,selector:`div:has(> h2) > span`,description:`Optional. An icon on a muted disc. Decorative.`},{name:`Title`,selector:`h2`,description:`A real heading, level set by headingLevel. Says what is empty.`},{name:`Description`,selector:`div:has(> h2) > p`,description:`Optional. Says why, or what will appear here.`},{name:`Action`,selector:`div:has(> h2) > div`,description:`Optional. The way forward: usually one Button, at most two.`}],b={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await c(e,y);await p(t[4]).toContainElement(e.querySelector(`button`))}},x={tags:[`!dev`],args:{icon:void 0,description:void 0,action:void 0,title:`No data`}},S=[`Default`,`FirstUse`,`Small`,`TitleOnly`,`anatomyParts`,`Anatomy`,`DontNoData`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'No projects match "atlas"'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Clear search'
    })).toBeVisible();
    // The icon is decoration.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    // Not a live region: it is not announced when it replaces results.
    await expect(canvas.queryByRole('status')).toBeNull();
    await expect(canvas.queryByRole('alert')).toBeNull();
    await expect(canvasElement.querySelector('[aria-live]')).toBeNull();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="plus" />,
    title: 'No projects yet',
    description: 'Projects keep a team’s files, tasks and conversations in one place.',
    action: <>
        <Button startIcon={<Icon name="plus" />}>New project</Button>
        <Button appearance="ghost" variant="accent">
          Import
        </Button>
      </>
  }
}`,...g.parameters?.docs?.source},description:{story:`First use: nothing has been made yet, so the action is the way in.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    headingLevel: 3,
    action: undefined,
    title: 'No comments',
    description: 'Comments on this file show up here.',
    icon: <Icon name="info" />
  },
  decorators: [Story => <div style={{
    maxInlineSize: '20rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)'
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 3
    })).toHaveTextContent('No comments');
  }
}`,..._.parameters?.docs?.source},description:{story:`Inside a panel or a table body.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    description: undefined,
    action: undefined,
    title: 'Nothing scheduled for today'
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toContainElement(canvasElement.querySelector('button'));
  }
}`,...b.parameters?.docs?.source},description:{story:`Every part present, so the docs can point at each.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    icon: undefined,
    description: undefined,
    action: undefined,
    title: 'No data'
  }
}`,...x.parameters?.docs?.source},description:{story:`Guidelines, Don't: says nothing about why it is empty, or what to do.`,...x.parameters?.docs?.description}}}})))()}export{g as a,y as c,d as i,C as l,h as n,_ as o,x as r,v as s,b as t};