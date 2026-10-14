import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./ErrorState-DjNSzlL4.js";var u=t({Anatomy:()=>C,Default:()=>_,DefaultTitle:()=>y,DontRawError:()=>w,Live:()=>x,Small:()=>b,WithDetails:()=>v,__namedExportsOrder:()=>T,anatomyParts:()=>S,default:()=>g}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d=n(),o(),i(),c(),f=r(),{expect:p,fn:m,userEvent:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/States/ErrorState`,tags:[`beta`],component:l,args:{title:`Couldn’t load projects`,description:`The server didn’t answer. Your projects are safe; try again in a moment.`,action:(0,f.jsx)(a,{onClick:m(),children:`Try again`})},argTypes:{title:{description:`What failed, in the reader's words. The default is the last resort, for failures you cannot describe.`,control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`'Something went wrong'`}}},description:{description:`What happened and what is safe: "Your projects are safe; try again in a moment."`,control:`text`,table:{type:{summary:`ReactNode`}}},details:{description:`A reference for support, e.g. an error code or request id. Shown small and monospaced, selected in one click.`,control:`text`,table:{type:{summary:`ReactNode`}}},action:{description:`The way forward, usually "Try again".`,control:!1,table:{type:{summary:`ReactNode`}}},icon:{description:"Replaces the `danger` icon on the disc. Decorative: hidden from screen readers.",control:!1,table:{type:{summary:`ReactNode`},defaultValue:{summary:`<Icon name="danger" />`}}},isLive:{description:'Makes it a `role="alert"`, announced when it replaces content that was loading.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{description:"`sm` for a panel or a table body; `md` for a whole page or section.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},headingLevel:{description:`The title's heading level, so it fits the page outline.`,control:`inline-radio`,options:[2,3,4,5,6],table:{type:{summary:`2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`2`}}}},excludeStories:[`anatomyParts`]},_={play:async({canvas:e,canvasElement:t})=>{await p(e.getByRole(`heading`,{level:2,name:`Couldn’t load projects`})).toBeVisible(),await p(e.getByRole(`button`,{name:`Try again`})).toBeVisible(),await p(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await p(e.queryByRole(`alert`)).toBeNull()}},v={args:{details:`Error 503 · req_8f2c91ad`},play:async({canvas:e})=>{await p(e.getByText(`Error 503 · req_8f2c91ad`)).toBeVisible()}},y={args:{title:void 0,description:`Reload the page to try again.`,action:void 0},play:async({canvas:e})=>{await p(e.getByRole(`heading`,{name:`Something went wrong`})).toBeVisible()}},b={args:{size:`sm`,headingLevel:3,title:`Couldn’t load comments`,description:void 0,action:(0,f.jsx)(a,{size:`sm`,appearance:`outlined`,variant:`accent`,children:`Retry`})},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})]},x={render:function(e){let[t,n]=(0,d.useState)(!1);return t?(0,f.jsx)(l,{...e,isLive:!0}):(0,f.jsx)(a,{onClick:()=>n(!0),children:`Load projects`})},play:async({canvas:e})=>{await h.click(e.getByRole(`button`,{name:`Load projects`})),await p(await e.findByRole(`alert`)).toHaveTextContent(`Couldn’t load projects`)}},S=[{name:`Container`,selector:`div:has(> h2)`,description:`Empty State's container: centred, padding from the size prop.`},{name:`Icon disc`,selector:`div:has(> h2) > span`,description:`The danger icon on a disc in the danger tone. Decorative.`},{name:`Title`,selector:`h2`,description:`A real heading: what failed.`},{name:`Description`,selector:`div:has(> h2) > p`,description:`Optional. What happened and what is safe.`},{name:`Details`,selector:`div:has(> h2) > p > span`,description:`Optional. A code or request id for support, monospaced.`},{name:`Action`,selector:`div:has(> h2) > div`,description:`Optional. The way forward, usually "Try again".`}],C={tags:[`!dev`],args:{details:`Error 503 · req_8f2c91ad`},play:async({canvasElement:e})=>{let t=await s(e,S);await p(t[4]).toHaveTextContent(`Error 503`)}},w={tags:[`!dev`],args:{title:`Error`,description:`TypeError: Failed to fetch at loadProjects (api.ts:42)`,action:void 0}},T=[`Default`,`WithDetails`,`DefaultTitle`,`Small`,`Live`,`anatomyParts`,`Anatomy`,`DontRawError`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Couldn’t load projects'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Try again'
    })).toBeVisible();
    // The icon is decoration; the title says it.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    // Not announced unless isLive.
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    details: 'Error 503 · req_8f2c91ad'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Error 503 · req_8f2c91ad')).toBeVisible();
  }
}`,...v.parameters?.docs?.source},description:{story:`A reference for support: small, monospaced, selected in one click.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: 'Reload the page to try again.',
    action: undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      name: 'Something went wrong'
    })).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    headingLevel: 3,
    title: 'Couldn’t load comments',
    description: undefined,
    action: <Button size="sm" appearance="outlined" variant="accent">Retry</Button>
  },
  decorators: [Story => <div style={{
    maxInlineSize: '20rem',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)'
  }}>{Story()}</div>]
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [failed, setFailed] = useState(false);
    return failed ? <ErrorState {...args} isLive /> : <Button onClick={() => setFailed(true)}>Load projects</Button>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Load projects'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Couldn’t load projects');
  }
}`,...x.parameters?.docs?.source},description:{story:`Replaces a list that failed to load, and is announced.`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    details: 'Error 503 · req_8f2c91ad'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveTextContent('Error 503');
  }
}`,...C.parameters?.docs?.source},description:{story:`Every part present, so the docs can point at each.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Error',
    description: 'TypeError: Failed to fetch at loadProjects (api.ts:42)',
    action: undefined
  }
}`,...w.parameters?.docs?.source},description:{story:`Guidelines, Don't: the raw error as the message, and no way forward.`,...w.parameters?.docs?.description}}}})))()}export{u as a,v as c,w as i,S as l,_ as n,x as o,y as r,b as s,C as t,E as u};