import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./SuccessState-BZbi33wS.js";var u=t({AfterSubmit:()=>v,Anatomy:()=>b,Default:()=>g,DontForQuickSave:()=>x,Small:()=>_,__namedExportsOrder:()=>S,anatomyParts:()=>y,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=n(),o(),i(),c(),f=r(),{expect:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/States/SuccessState`,tags:[`beta`],component:l,args:{title:`Invites sent`,description:`3 people will get an email with a link to join Atlas.`,action:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{children:`Go to project`}),(0,f.jsx)(a,{appearance:`ghost`,variant:`accent`,children:`Invite more`})]})},argTypes:{title:{description:`What was done: "Invites sent", "Import finished".`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`What happens next, or what the reader can now do.`,control:`text`,table:{type:{summary:`ReactNode`}}},action:{description:`The next step: where the reader goes now. Usually one or two Buttons.`,control:!1,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the `success` icon on the disc. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode`},defaultValue:{summary:`<Icon name="success" />`}}},isLive:{description:'Makes it a `role="status"`, read politely when it replaces a form or a progress view.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{description:"`sm` for a panel or a table body; `md` for a whole page or section.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},headingLevel:{description:`The title's heading level, so it fits the page outline.`,control:`inline-radio`,options:[2,3,4,5,6],table:{type:{summary:`2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`2`}}}},excludeStories:[`anatomyParts`]},g={play:async({canvas:e,canvasElement:t})=>{await p(e.getByRole(`heading`,{level:2,name:`Invites sent`})).toBeVisible(),await p(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await p(e.queryByRole(`status`)).toBeNull()}},_={args:{size:`sm`,headingLevel:3,title:`All caught up`,description:`No new notifications.`,action:void 0},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})]},v={render:function(e){let[t,n]=(0,d.useState)(!1);return t?(0,f.jsx)(l,{...e,isLive:!0}):(0,f.jsx)(a,{onClick:()=>n(!0),children:`Send invites`})},play:async({canvas:e})=>{await m.click(e.getByRole(`button`,{name:`Send invites`})),await p(await e.findByRole(`status`)).toHaveTextContent(`Invites sent`)}},y=[{name:`Container`,selector:`div:has(> h2)`,description:`Empty State's container: centred, padding from the size prop.`},{name:`Icon disc`,selector:`div:has(> h2) > span`,description:`The success icon on a disc in the success tone. Decorative.`},{name:`Title`,selector:`h2`,description:`A real heading: what was done.`},{name:`Description`,selector:`div:has(> h2) > p`,description:`Optional. What happens next.`},{name:`Action`,selector:`div:has(> h2) > div`,description:`Optional. The next step.`}],b={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await s(e,y);await p(t[4]).toContainElement(e.querySelector(`button`))}},x={tags:[`!dev`],args:{size:`sm`,headingLevel:3,title:`Changes saved`,description:void 0,action:void 0},decorators:[e=>(0,f.jsxs)(`section`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:[(0,f.jsx)(`h2`,{style:{margin:0,padding:`var(--space-3) var(--space-4) 0`,fontSize:`var(--text-heading-sm)`},children:`Profile`}),e()]})]},S=[`Default`,`Small`,`AfterSubmit`,`anatomyParts`,`Anatomy`,`DontForQuickSave`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Invites sent'
    })).toBeVisible();
    // The icon is decoration; the title says it.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    // Not announced unless isLive.
    await expect(canvas.queryByRole('status')).toBeNull();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    headingLevel: 3,
    title: 'All caught up',
    description: 'No new notifications.',
    action: undefined
  },
  decorators: [Story => <div style={{
    maxInlineSize: '20rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)'
  }}>{Story()}</div>]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [sent, setSent] = useState(false);
    return sent ? <SuccessState {...args} isLive /> : <Button onClick={() => setSent(true)}>Send invites</Button>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Send invites'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Invites sent');
  }
}`,...v.parameters?.docs?.source},description:{story:`Replaces a form once it is sent, and is announced.`,...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    size: 'sm',
    headingLevel: 3,
    title: 'Changes saved',
    description: undefined,
    action: undefined
  },
  decorators: [Story => <section style={{
    maxInlineSize: '20rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)'
  }}>
        <h2 style={{
      margin: 0,
      padding: 'var(--space-3) var(--space-4) 0',
      fontSize: 'var(--text-heading-sm)'
    }}>Profile</h2>
        {Story()}
      </section>]
}`,...x.parameters?.docs?.source},description:{story:`Guidelines, Don't: a whole success screen for a quick save, in place of the form being edited.`,...x.parameters?.docs?.description}}}})))()}export{_ as a,C as c,x as i,b as n,u as o,g as r,y as s,v as t};