import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as l}from"./icon-C8IlC69p.js";import{n as u,t as ee}from"./expectAnatomy-C52ByQ6s.js";import{a as te,r as ne}from"./story-helpers-EInZsLED.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{d=`_stepper_x3l3n_1`,f=`_sm_x3l3n_9`,p=`_list_x3l3n_15`,m=`_vertical_x3l3n_21`,h=`_step_x3l3n_1`,g=`_target_x3l3n_32`,_=`_label_x3l3n_49`,v=`_marker_x3l3n_58`,y=`_complete_x3l3n_81`,b=`_current_x3l3n_86`,x=`_error_x3l3n_90`,S=`_text_x3l3n_96`,C=`_upcoming_x3l3n_107`,w=`_description_x3l3n_114`,T=`_connector_x3l3n_124`,E=`_horizontal_x3l3n_132`,D=`_srOnly_x3l3n_159`,O={stepper:d,sm:f,list:p,vertical:m,step:h,target:g,label:_,marker:v,complete:y,current:b,error:x,text:S,upcoming:C,description:w,connector:T,horizontal:E,srOnly:D}})))()}function A({steps:e,current:t,orientation:n=`horizontal`,size:r=`md`,onStepClick:a,"aria-label":o=`Progress`,className:s,...c}){return(0,j.jsx)(`nav`,{"aria-label":o,className:i(O.stepper,O[n],O[r],s),...c,children:(0,j.jsx)(`ol`,{className:O.list,children:e.map((n,r)=>{let o=n.status??(r<t?`complete`:r===t?`current`:`upcoming`),s=a!==void 0&&o!==`upcoming`,c=(0,j.jsx)(`span`,{className:O.marker,"aria-hidden":`true`,children:o===`complete`?(0,j.jsx)(l,{name:`check`}):o===`error`?(0,j.jsx)(l,{name:`danger`}):r+1}),u=(0,j.jsxs)(`span`,{className:O.text,children:[(0,j.jsxs)(`span`,{className:O.label,children:[n.label,(0,j.jsxs)(`span`,{className:O.srOnly,children:[`, `,M[o]]})]}),n.description&&(0,j.jsx)(`span`,{className:O.description,children:n.description})]});return(0,j.jsxs)(`li`,{className:i(O.step,O[o]),"aria-current":o===`current`?`step`:void 0,children:[s?(0,j.jsxs)(`button`,{type:`button`,className:O.target,onClick:()=>a(r),children:[c,u]}):(0,j.jsxs)(`span`,{className:O.target,children:[c,u]}),r<e.length-1&&(0,j.jsx)(`span`,{className:O.connector,"aria-hidden":`true`})]},r)})})})}var j,M;function N(){return(N=e((()=>{c(),r(),k(),j=a(),M={complete:`completed`,current:`current`,upcoming:`not started`,error:`has an error`},A.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`StepperStep`}],raw:`StepperStep[]`},description:``},current:{required:!0,tsType:{name:`number`},description:`0-based index of the step the reader is on. Steps before it are complete.`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onStepClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Makes finished steps (and the current one) buttons that go back to
them. Upcoming steps stay plain: they cannot be skipped to.`},"aria-label":{required:!1,tsType:{name:`string`},description:`The nav landmark's name.`,defaultValue:{value:`'Progress'`,computed:!1}}},composes:[`Omit`]}})))()}var re=t({Anatomy:()=>X,Clickable:()=>J,Default:()=>H,DoFewShortSteps:()=>Z,DontTooManySteps:()=>Q,Navigable:()=>K,Small:()=>W,Statuses:()=>q,Vertical:()=>U,WithError:()=>G,__namedExportsOrder:()=>$,anatomyParts:()=>Y,default:()=>V}),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function ie(){return(ie=e((()=>{P=n(),u(),o(),N(),ne(),F=a(),{expect:I,fn:L,userEvent:R,within:z}=__STORYBOOK_MODULE_TEST__,B=[{label:`Account`,description:`Email and password`},{label:`Workspace`,description:`Name and URL`},{label:`Invite`,description:`Add your team`},{label:`Done`}],V={title:`Components/Navigation/Stepper`,tags:[`beta`],component:A,args:{steps:B,current:1},argTypes:{steps:{description:"The steps, in order: `{ label, description?, status? }`. `status` (`'complete' | 'current' | 'upcoming' | 'error'`) overrides the one worked out from `current`, e.g. to flag an error.",control:!1,table:{type:{summary:`StepperStep[]`}}},current:{description:`The 0-based index of the step the reader is on. Steps before it are complete, steps after it upcoming.`,control:{type:`range`,min:0,max:3},table:{type:{summary:`number`}}},orientation:{description:"`horizontal` puts each label under its marker; `vertical` stacks the steps, for long descriptions or a narrow column.",control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},size:{description:"A 32px (`md`) or 24px (`sm`) marker. `sm` takes a 12px label.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},onStepClick:{description:`Makes complete steps and the current one buttons that go back to them, called with the index. Upcoming steps stay plain text.`,control:!1,table:{type:{summary:`(index: number) => void`}}},"aria-label":{description:"The `<nav>` landmark's name.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Progress'`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,F.jsx)(`div`,{style:{maxInlineSize:`44rem`},children:e()})]},H={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Progress`});await I(z(t).getByRole(`list`).tagName).toBe(`OL`);let n=z(t).getAllByRole(`listitem`);await I(n).toHaveLength(4),await I(n[1]).toHaveAttribute(`aria-current`,`step`),await I(n[0]).toHaveTextContent(`Account, completed`),await I(n[2]).toHaveTextContent(`Invite, not started`),await I(z(t).queryByRole(`button`)).toBeNull()}},U={args:{orientation:`vertical`,current:2}},W={args:{size:`sm`}},G={args:{current:2,steps:[B[0],{...B[1],status:`error`,description:`That URL is taken`},B[2],B[3]]},play:async({canvas:e})=>{await I(e.getAllByRole(`listitem`)[1]).toHaveTextContent(`Workspace, has an error`)}},K={render:function(e){let[t,n]=(0,P.useState)(2);return(0,F.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[(0,F.jsx)(A,{...e,current:t,onStepClick:n}),(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,F.jsx)(s,{appearance:`outlined`,variant:`accent`,disabled:t===0,onClick:()=>n(t-1),children:`Back`}),(0,F.jsx)(s,{disabled:t===B.length-1,onClick:()=>n(t+1),children:`Next`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`navigation`);await I(z(t).getAllByRole(`button`)).toHaveLength(3),await I(z(t).getByRole(`button`,{name:/^Invite\s*, current/})).toBeInTheDocument(),await R.tab();let n=z(t).getByRole(`button`,{name:/^Account\s*, completed/});await I(n).toHaveFocus(),await I(getComputedStyle(n).outlineStyle).toBe(`solid`),await I(te(`pointer: coarse`,n).find(e=>e.style.minBlockSize)?.style.minBlockSize).toBe(`var(--target-coarse)`),await R.keyboard(`{Enter}`),await I(z(t).getAllByRole(`listitem`)[0]).toHaveAttribute(`aria-current`,`step`)}},q={tags:[`!dev`],args:{size:`sm`,current:2,steps:[{label:`Cart`},{label:`Ship`,status:`error`},{label:`Pay`},{label:`Done`}]}},J={tags:[`!dev`],args:{size:`sm`,current:1,steps:[{label:`Cart`},{label:`Ship`},{label:`Pay`}],onStepClick:L()}},Y=[{name:`Marker`,selector:`li:nth-child(1) > span > span:first-child`,description:`A disc: a check when complete, the number when current or upcoming, a warning on error.`},{name:`Label`,selector:`li:nth-child(2) > span > span:last-child > span:first-child`,description:`The step's name, with its status in hidden text for screen readers.`},{name:`Description`,selector:`li:nth-child(2) > span > span:last-child > span:last-child`,description:`Optional, small and muted.`},{name:`Connector`,selector:`li:nth-child(2) > span:last-child`,description:`The line to the next step: primary once the step is complete.`}],X={tags:[`!dev`],args:{current:1},play:async({canvasElement:e})=>{let t=await ee(e,Y);await I(t[1]).toHaveTextContent(`Workspace`),await I(t[2]).toHaveTextContent(`Name and URL`)}},Z={tags:[`!dev`],args:{current:1,steps:[{label:`Cart`},{label:`Shipping`},{label:`Payment`},{label:`Review`}]}},Q={tags:[`!dev`],args:{current:3,steps:[`Email`,`Password`,`Name`,`Company`,`Role`,`Team size`,`Use case`,`Invite`,`Plan`,`Done`].map(e=>({label:e}))}},$=[`Default`,`Vertical`,`Small`,`WithError`,`Navigable`,`Statuses`,`Clickable`,`anatomyParts`,`Anatomy`,`DoFewShortSteps`,`DontTooManySteps`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Progress'
    });
    // An ordered list, so screen readers announce the count and each position.
    await expect(within(nav).getByRole('list').tagName).toBe('OL');
    const items = within(nav).getAllByRole('listitem');
    await expect(items).toHaveLength(4);
    await expect(items[1]).toHaveAttribute('aria-current', 'step');
    // Status is spoken with the label, since the marker is decorative.
    await expect(items[0]).toHaveTextContent('Account, completed');
    await expect(items[2]).toHaveTextContent('Invite, not started');
    // Without onStepClick nothing is a button.
    await expect(within(nav).queryByRole('button')).toBeNull();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    current: 2
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    // The marker ("3") is decorative: the name starts with the label and its status.
    await expect(within(nav).getByRole('button', {
      name: /^Invite\\s*, current/
    })).toBeInTheDocument();
    // Real buttons: reached with Tab, showing the focus ring, pressed with Enter.
    await userEvent.tab();
    const account = within(nav).getByRole('button', {
      name: /^Account\\s*, completed/
    });
    await expect(account).toHaveFocus();
    await expect(getComputedStyle(account).outlineStyle).toBe('solid');
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', account).find(r => r.style.minBlockSize)?.style.minBlockSize).toBe('var(--target-coarse)');
    await userEvent.keyboard('{Enter}');
    await expect(within(nav).getAllByRole('listitem')[0]).toHaveAttribute('aria-current', 'step');
  }
}`,...K.parameters?.docs?.source},description:{story:`Finished steps become buttons that go back; upcoming ones cannot be skipped to.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    current: 2,
    steps: [{
      label: 'Cart'
    }, {
      label: 'Ship',
      status: 'error'
    }, {
      label: 'Pay'
    }, {
      label: 'Done'
    }]
  }
}`,...q.parameters?.docs?.source},description:{story:`Every status at once, small and short so it fits a cell of the States table.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    current: 1,
    steps: [{
      label: 'Cart'
    }, {
      label: 'Ship'
    }, {
      label: 'Pay'
    }],
    onStepClick: fn()
  }
}`,...J.parameters?.docs?.source},description:{story:"With `onStepClick`, for the States table: finished steps and the current one are buttons.",...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    current: 1
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Workspace');
    await expect(found[2]).toHaveTextContent('Name and URL');
  }
}`,...X.parameters?.docs?.source},description:{story:`Every part present.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    current: 1,
    steps: [{
      label: 'Cart'
    }, {
      label: 'Shipping'
    }, {
      label: 'Payment'
    }, {
      label: 'Review'
    }]
  }
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Do: a few steps with short labels.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    current: 3,
    steps: ['Email', 'Password', 'Name', 'Company', 'Role', 'Team size', 'Use case', 'Invite', 'Plan', 'Done'].map(label => ({
      label
    }))
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Don't: too many steps, so each one is squeezed and the flow looks longer than it is.`,...Q.parameters?.docs?.description}}}})))()}export{Q as a,q as c,Y as d,ie as f,Z as i,re as l,J as n,K as o,H as r,W as s,X as t,U as u};