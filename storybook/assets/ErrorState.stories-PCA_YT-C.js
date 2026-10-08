import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Button-BdtJKtga.js";import{n as c,t as l}from"./icon-Dc4hTclj.js";import{n as u,t as d}from"./EmptyState-YjTMlcHM.js";var f,p,m;function h(){return(h=e((()=>{f=`_error_15kes_3`,p=`_details_15kes_8`,m={error:f,details:p}})))()}function g({title:e=`Something went wrong`,icon:t=(0,_.jsx)(l,{name:`danger`}),description:n,details:r,isLive:i=!1,className:o,...s}){return(0,_.jsx)(d,{role:i?`alert`:void 0,title:e,icon:t,description:(n||r)&&(0,_.jsxs)(_.Fragment,{children:[n,r&&(0,_.jsx)(`span`,{className:m.details,children:r})]}),className:a(m.error,o),...s})}var _;function v(){return(v=e((()=>{c(),i(),u(),h(),_=n(),g.__docgenInfo={description:`What a list, panel or page shows when loading it failed: why, and a way
forward, usually a retry. Empty State's layout in the danger tone.`,methods:[],displayName:`ErrorState`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:`What failed, in the reader's words.`,defaultValue:{value:`'Something went wrong'`,computed:!1}},details:{required:!1,tsType:{name:`ReactNode`},description:`A reference for support, e.g. an error code or request id. Shown small, selectable.`},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce it when it replaces content that was loading (`role="alert"`).',defaultValue:{value:`false`,computed:!1}},icon:{defaultValue:{value:`<Icon name="danger" />`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var y=t({Default:()=>E,DefaultTitle:()=>O,Live:()=>A,Small:()=>k,WithDetails:()=>D,__namedExportsOrder:()=>j,default:()=>T}),b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{b=r(),o(),v(),x=n(),{expect:S,fn:C,userEvent:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/States/ErrorState`,component:g,parameters:{a11y:{test:`error`}},args:{title:`Couldn’t load projects`,description:`The server didn’t answer. Your projects are safe; try again in a moment.`,action:(0,x.jsx)(s,{onClick:C(),children:`Try again`})},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},headingLevel:{control:`inline-radio`,options:[2,3,4,5,6]},icon:{control:!1},action:{control:!1}}},E={play:async({canvas:e})=>{await S(e.getByRole(`heading`,{level:2,name:`Couldn’t load projects`})).toBeVisible(),await S(e.getByRole(`button`,{name:`Try again`})).toBeVisible()}},D={args:{details:`Error 503 · req_8f2c91ad`},play:async({canvas:e})=>{await S(e.getByText(`Error 503 · req_8f2c91ad`)).toBeVisible()}},O={args:{title:void 0,description:`Reload the page to try again.`,action:void 0},play:async({canvas:e})=>{await S(e.getByRole(`heading`,{name:`Something went wrong`})).toBeVisible()}},k={args:{size:`sm`,headingLevel:3,title:`Couldn’t load comments`,description:void 0,action:(0,x.jsx)(s,{size:`sm`,appearance:`outlined`,variant:`accent`,children:`Retry`})},decorators:[e=>(0,x.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})]},A={render:function(e){let[t,n]=(0,b.useState)(!1);return t?(0,x.jsx)(g,{...e,isLive:!0}):(0,x.jsx)(s,{onClick:()=>n(!0),children:`Load projects`})},play:async({canvas:e})=>{await w.click(e.getByRole(`button`,{name:`Load projects`})),await S(await e.findByRole(`alert`)).toHaveTextContent(`Couldn’t load projects`)}},j=[`Default`,`WithDetails`,`DefaultTitle`,`Small`,`Live`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Couldn’t load projects'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Try again'
    })).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    details: 'Error 503 · req_8f2c91ad'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Error 503 · req_8f2c91ad')).toBeVisible();
  }
}`,...D.parameters?.docs?.source},description:{story:`A reference for support: small, monospaced, selected in one click.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Replaces a list that failed to load, and is announced.`,...A.parameters?.docs?.description}}}})))()}export{k as a,A as i,O as n,D as o,y as r,M as s,E as t};