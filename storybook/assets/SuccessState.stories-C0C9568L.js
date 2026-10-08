import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Button-BdtJKtga.js";import{n as c,t as l}from"./icon-Dc4hTclj.js";import{n as u,t as d}from"./EmptyState-YjTMlcHM.js";var f,p;function m(){return(m=e((()=>{f=`_success_312t7_3`,p={success:f}})))()}function h({icon:e=(0,g.jsx)(l,{name:`success`}),isLive:t=!1,className:n,...r}){return(0,g.jsx)(d,{role:t?`status`:void 0,icon:e,className:a(p.success,n),...r})}var g;function _(){return(_=e((()=>{c(),i(),u(),m(),g=n(),h.__docgenInfo={description:`What a flow shows when it has finished: the invite is sent, the import
is done. Empty State's layout in the success tone, with the next step as
its action.`,methods:[],displayName:`SuccessState`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:`What was done.`},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce it when it replaces a form or a progress view (`role="status"`).',defaultValue:{value:`false`,computed:!1}},icon:{defaultValue:{value:`<Icon name="success" />`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var v=t({AfterSubmit:()=>E,Default:()=>w,Small:()=>T,__namedExportsOrder:()=>D,default:()=>C}),y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{y=r(),o(),_(),b=n(),{expect:x,userEvent:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/States/SuccessState`,component:h,parameters:{a11y:{test:`error`}},args:{title:`Invites sent`,description:`3 people will get an email with a link to join Atlas.`,action:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{children:`Go to project`}),(0,b.jsx)(s,{appearance:`ghost`,variant:`accent`,children:`Invite more`})]})},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},headingLevel:{control:`inline-radio`,options:[2,3,4,5,6]},icon:{control:!1},action:{control:!1}}},w={play:async({canvas:e})=>{await x(e.getByRole(`heading`,{level:2,name:`Invites sent`})).toBeVisible()}},T={args:{size:`sm`,headingLevel:3,title:`All caught up`,description:`No new notifications.`,action:void 0},decorators:[e=>(0,b.jsx)(`div`,{style:{maxInlineSize:`20rem`,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:e()})]},E={render:function(e){let[t,n]=(0,y.useState)(!1);return t?(0,b.jsx)(h,{...e,isLive:!0}):(0,b.jsx)(s,{onClick:()=>n(!0),children:`Send invites`})},play:async({canvas:e})=>{await S.click(e.getByRole(`button`,{name:`Send invites`})),await x(await e.findByRole(`status`)).toHaveTextContent(`Invites sent`)}},D=[`Default`,`Small`,`AfterSubmit`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Invites sent'
    })).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Replaces a form once it is sent, and is announced.`,...E.parameters?.docs?.description}}}})))()}export{O as a,v as i,w as n,T as r,E as t};