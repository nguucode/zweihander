import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as l}from"./Button-BLXGvKSL.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{u=`_stepper_tq0jk_1`,d=`_sm_tq0jk_9`,f=`_list_tq0jk_15`,p=`_vertical_tq0jk_21`,m=`_step_tq0jk_1`,h=`_target_tq0jk_32`,g=`_label_tq0jk_49`,_=`_marker_tq0jk_58`,v=`_complete_tq0jk_81`,y=`_current_tq0jk_86`,b=`_error_tq0jk_90`,x=`_text_tq0jk_96`,S=`_upcoming_tq0jk_107`,C=`_description_tq0jk_114`,w=`_connector_tq0jk_124`,T=`_horizontal_tq0jk_132`,E=`_srOnly_tq0jk_159`,D={stepper:u,sm:d,list:f,vertical:p,step:m,target:h,label:g,marker:_,complete:v,current:y,error:b,text:x,upcoming:S,description:C,connector:w,horizontal:T,srOnly:E}})))()}function k({steps:e,current:t,orientation:n=`horizontal`,size:r=`md`,onStepClick:i,"aria-label":o=`Progress`,className:c,...l}){return(0,A.jsx)(`nav`,{"aria-label":o,className:s(D.stepper,D[n],D[r],c),...l,children:(0,A.jsx)(`ol`,{className:D.list,children:e.map((n,r)=>{let o=n.status??(r<t?`complete`:r===t?`current`:`upcoming`),c=i!==void 0&&o!==`upcoming`,l=(0,A.jsx)(`span`,{className:D.marker,"aria-hidden":`true`,children:o===`complete`?(0,A.jsx)(a,{name:`check`}):o===`error`?(0,A.jsx)(a,{name:`danger`}):r+1}),u=(0,A.jsxs)(`span`,{className:D.text,children:[(0,A.jsxs)(`span`,{className:D.label,children:[n.label,(0,A.jsxs)(`span`,{className:D.srOnly,children:[`, `,j[o]]})]}),n.description&&(0,A.jsx)(`span`,{className:D.description,children:n.description})]});return(0,A.jsxs)(`li`,{className:s(D.step,D[o]),"aria-current":o===`current`?`step`:void 0,children:[c?(0,A.jsxs)(`button`,{type:`button`,className:D.target,onClick:()=>i(r),children:[l,u]}):(0,A.jsxs)(`span`,{className:D.target,children:[l,u]}),r<e.length-1&&(0,A.jsx)(`span`,{className:D.connector,"aria-hidden":`true`})]},r)})})})}var A,j;function M(){return(M=e((()=>{i(),o(),O(),A=n(),j={complete:`completed`,current:`current`,upcoming:`not started`,error:`has an error`},k.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`StepperStep`}],raw:`StepperStep[]`},description:``},current:{required:!0,tsType:{name:`number`},description:`0-based index of the step the reader is on. Steps before it are complete.`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onStepClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Makes finished steps (and the current one) buttons that go back to
them. Upcoming steps stay plain: they cannot be skipped to.`},"aria-label":{required:!1,tsType:{name:`string`},description:`The nav landmark's name.`,defaultValue:{value:`'Progress'`,computed:!1}}},composes:[`Omit`]}})))()}var N=t({Default:()=>V,Navigable:()=>G,Small:()=>U,Vertical:()=>H,WithError:()=>W,__namedExportsOrder:()=>K,default:()=>B}),P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{P=r(),c(),M(),F=n(),{expect:I,userEvent:L,within:R}=__STORYBOOK_MODULE_TEST__,z=[{label:`Account`,description:`Email and password`},{label:`Workspace`,description:`Name and URL`},{label:`Invite`,description:`Add your team`},{label:`Done`}],B={title:`Components/Navigation/Stepper`,component:k,parameters:{a11y:{test:`error`}},args:{steps:z,current:1},argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},size:{control:`inline-radio`,options:[`sm`,`md`]},current:{control:{type:`range`,min:0,max:3}},steps:{control:!1}},decorators:[e=>(0,F.jsx)(`div`,{style:{maxInlineSize:`44rem`},children:e()})]},V={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Progress`}),n=R(t).getAllByRole(`listitem`);await I(n).toHaveLength(4),await I(n[1]).toHaveAttribute(`aria-current`,`step`),await I(n[0]).toHaveTextContent(`Account, completed`),await I(n[2]).toHaveTextContent(`Invite, not started`),await I(R(t).queryByRole(`button`)).toBeNull()}},H={args:{orientation:`vertical`,current:2}},U={args:{size:`sm`}},W={args:{current:2,steps:[z[0],{...z[1],status:`error`,description:`That URL is taken`},z[2],z[3]]},play:async({canvas:e})=>{await I(e.getAllByRole(`listitem`)[1]).toHaveTextContent(`Workspace, has an error`)}},G={render:function(e){let[t,n]=(0,P.useState)(2);return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[(0,F.jsx)(k,{...e,current:t,onStepClick:n}),(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,F.jsx)(l,{appearance:`outlined`,variant:`accent`,disabled:t===0,onClick:()=>n(t-1),children:`Back`}),(0,F.jsx)(l,{disabled:t===z.length-1,onClick:()=>n(t+1),children:`Next`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`navigation`);await I(R(t).getAllByRole(`button`)).toHaveLength(3),await L.click(R(t).getByRole(`button`,{name:/Account/})),await I(R(t).getAllByRole(`listitem`)[0]).toHaveAttribute(`aria-current`,`step`)}},K=[`Default`,`Vertical`,`Small`,`WithError`,`Navigable`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Progress'
    });
    const items = within(nav).getAllByRole('listitem');
    await expect(items).toHaveLength(4);
    await expect(items[1]).toHaveAttribute('aria-current', 'step');
    // Status is spoken with the label, since the marker is decorative.
    await expect(items[0]).toHaveTextContent('Account, completed');
    await expect(items[2]).toHaveTextContent('Invite, not started');
    // Without onStepClick nothing is a button.
    await expect(within(nav).queryByRole('button')).toBeNull();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    current: 2
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2,
    steps: [steps[0], {
      ...steps[1],
      status: 'error',
      description: 'That URL is taken'
    }, steps[2], steps[3]]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('listitem')[1]).toHaveTextContent('Workspace, has an error');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [current, setCurrent] = useState(2);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-6)'
    }}>
        <Stepper {...args} current={current} onStepClick={setCurrent} />
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <Button appearance="outlined" variant="accent" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
            Back
          </Button>
          <Button disabled={current === steps.length - 1} onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        </div>
      </div>;
  },
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation');
    // Account, Workspace (done) and Invite (current) are buttons; Done is not.
    await expect(within(nav).getAllByRole('button')).toHaveLength(3);
    await userEvent.click(within(nav).getByRole('button', {
      name: /Account/
    }));
    await expect(within(nav).getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step');
  }
}`,...G.parameters?.docs?.source},description:{story:`Finished steps become buttons that go back; upcoming ones cannot be skipped to.`,...G.parameters?.docs?.description}}}})))()}export{H as a,N as i,G as n,W as o,U as r,q as s,V as t};