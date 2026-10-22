import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as l}from"./icon-C8IlC69p.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";import{n as f,t as p}from"./EmptyState-DFT2bqlk.js";var m,h;function g(){return(g=e((()=>{m=`_success_312t7_3`,h={success:m}})))()}function _({icon:e=(0,v.jsx)(l,{name:`success`}),isLive:t=!1,className:n,...r}){return(0,v.jsx)(p,{role:t?`status`:void 0,icon:e,className:i(h.success,n),...r})}var v;function y(){return(y=e((()=>{c(),r(),f(),g(),v=a(),_.__docgenInfo={description:`What a flow shows when it has finished: the invite is sent, the import
is done. Empty State's layout in the success tone, with the next step as
its action.`,methods:[],displayName:`SuccessState`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:`What was done.`},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce it when it replaces a form or a progress view (`role="status"`).',defaultValue:{value:`false`,computed:!1}},icon:{defaultValue:{value:`<Icon name="success" />`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var b=t({AfterSubmit:()=>O,Anatomy:()=>A,Default:()=>E,DontForQuickSave:()=>j,Small:()=>D,__namedExportsOrder:()=>M,anatomyParts:()=>k,default:()=>T}),x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{x=n(),u(),o(),y(),S=a(),{expect:C,userEvent:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/States/SuccessState`,tags:[`beta`],component:_,args:{title:`Invites sent`,description:`3 people will get an email with a link to join Atlas.`,action:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{children:`Go to project`}),(0,S.jsx)(s,{appearance:`ghost`,variant:`accent`,children:`Invite more`})]})},argTypes:{title:{description:`What was done: "Invites sent", "Import finished".`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`What happens next, or what the reader can now do.`,control:`text`,table:{type:{summary:`ReactNode`}}},action:{description:`The next step: where the reader goes now. Usually one or two Buttons.`,control:!1,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the `success` icon on the disc. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode`},defaultValue:{summary:`<Icon name="success" />`}}},isLive:{description:'Makes it a `role="status"`, read politely when it replaces a form or a progress view.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{description:"`sm` for a panel or a table body; `md` for a whole page or section.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},headingLevel:{description:`The title's heading level, so it fits the page outline.`,control:`inline-radio`,options:[2,3,4,5,6],table:{type:{summary:`2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`2`}}}},excludeStories:[`anatomyParts`]},E={play:async({canvas:e,canvasElement:t})=>{await C(e.getByRole(`heading`,{level:2,name:`Invites sent`})).toBeVisible(),await C(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await C(e.queryByRole(`status`)).toBeNull()}},D={args:{size:`sm`,headingLevel:3,title:`All caught up`,description:`No new notifications.`,action:void 0},decorators:[e=>(0,S.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})]},O={render:function(e){let[t,n]=(0,x.useState)(!1);return t?(0,S.jsx)(_,{...e,isLive:!0}):(0,S.jsx)(s,{onClick:()=>n(!0),children:`Send invites`})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Send invites`})),await C(await e.findByRole(`status`)).toHaveTextContent(`Invites sent`)}},k=[{name:`Container`,selector:`div:has(> h2)`,description:`Empty State's container: centred, padding from the size prop.`},{name:`Icon disc`,selector:`div:has(> h2) > span`,description:`The success icon on a disc in the success tone. Decorative.`},{name:`Title`,selector:`h2`,description:`A real heading: what was done.`},{name:`Description`,selector:`div:has(> h2) > p`,description:`Optional. What happens next.`},{name:`Action`,selector:`div:has(> h2) > div`,description:`Optional. The next step.`}],A={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await d(e,k);await C(t[4]).toContainElement(e.querySelector(`button`))}},j={tags:[`!dev`],args:{size:`sm`,headingLevel:3,title:`Changes saved`,description:void 0,action:void 0},decorators:[e=>(0,S.jsxs)(`section`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:[(0,S.jsx)(`h2`,{style:{margin:0,padding:`var(--space-3) var(--space-4) 0`,fontSize:`var(--text-heading-sm)`},children:`Profile`}),e()]})]},M=[`Default`,`Small`,`AfterSubmit`,`anatomyParts`,`Anatomy`,`DontForQuickSave`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Replaces a form once it is sent, and is announced.`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toContainElement(canvasElement.querySelector('button'));
  }
}`,...A.parameters?.docs?.source},description:{story:`Every part present, so the docs can point at each.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Don't: a whole success screen for a quick save, in place of the form being edited.`,...j.parameters?.docs?.description}}}})))()}export{D as a,N as c,j as i,A as n,b as o,E as r,k as s,O as t};