import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Button-BdtJKtga.js";import{n as a,t as o}from"./icon-Dc4hTclj.js";import{n as s,t as c}from"./EmptyState-YjTMlcHM.js";var l=t({Default:()=>p,FirstUse:()=>m,Small:()=>h,TitleOnly:()=>g,__namedExportsOrder:()=>_,default:()=>f}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a(),r(),s(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/States/EmptyState`,component:c,parameters:{a11y:{test:`error`}},args:{icon:(0,u.jsx)(o,{name:`search`}),title:`No projects match "atlas"`,description:`Check the spelling, or clear the search to see every project.`,action:(0,u.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`Clear search`})},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},headingLevel:{control:`inline-radio`,options:[2,3,4,5,6]},icon:{control:!1},action:{control:!1}}},p={play:async({canvas:e,canvasElement:t})=>{await d(e.getByRole(`heading`,{level:2,name:`No projects match "atlas"`})).toBeVisible(),await d(e.getByRole(`button`,{name:`Clear search`})).toBeVisible(),await d(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull()}},m={args:{icon:(0,u.jsx)(o,{name:`plus`}),title:`No projects yet`,description:`Projects keep a team’s files, tasks and conversations in one place.`,action:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{startIcon:(0,u.jsx)(o,{name:`plus`}),children:`New project`}),(0,u.jsx)(i,{appearance:`ghost`,variant:`accent`,children:`Import`})]})}},h={args:{size:`sm`,headingLevel:3,action:void 0,title:`No comments`,description:`Comments on this file show up here.`,icon:(0,u.jsx)(o,{name:`info`})},decorators:[e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})],play:async({canvas:e})=>{await d(e.getByRole(`heading`,{level:3})).toHaveTextContent(`No comments`)}},g={args:{icon:void 0,description:void 0,action:void 0,title:`Nothing scheduled for today`}},_=[`Default`,`FirstUse`,`Small`,`TitleOnly`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`First use: nothing has been made yet, so the action is the way in.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Inside a panel or a table body.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    description: undefined,
    action: undefined,
    title: 'Nothing scheduled for today'
  }
}`,...g.parameters?.docs?.source}}}})))()}export{g as a,h as i,l as n,v as o,m as r,p as t};