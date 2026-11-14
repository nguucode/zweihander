import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-CAzJH1mZ.js";import{n as c,t as l}from"./icon-Cjfg2BMt.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";import{a as f,r as ee}from"./story-helpers-EInZsLED.js";var p,m,h,g,_,v,te,ne,re,ie,ae,oe,y,b,x,se,S,C,w,T,E;function D(){return(D=e((()=>{p=`_stepper_mq9pz_1`,m=`_sm_mq9pz_10`,h=`_list_mq9pz_17`,g=`_vertical_mq9pz_23`,_=`_step_mq9pz_1`,v=`_target_mq9pz_34`,te=`_label_mq9pz_51`,ne=`_marker_mq9pz_60`,re=`_complete_mq9pz_84`,ie=`_current_mq9pz_89`,ae=`_error_mq9pz_93`,oe=`_text_mq9pz_99`,y=`_upcoming_mq9pz_110`,b=`_description_mq9pz_117`,x=`_connector_mq9pz_127`,se=`_horizontal_mq9pz_135`,S=`_srOnly_mq9pz_162`,C=`_summary_mq9pz_179`,w=`_count_mq9pz_182`,T=`_bullets_mq9pz_185`,E={stepper:p,sm:m,list:h,vertical:g,step:_,target:v,label:te,marker:ne,complete:re,current:ie,error:ae,text:oe,upcoming:y,description:b,connector:x,horizontal:se,srOnly:S,summary:C,count:w,bullets:T}})))()}function O({steps:e,current:t,orientation:n=`horizontal`,appearance:r=`circles`,size:a=`md`,onStepClick:o,"aria-label":s=`Progress`,className:c,...u}){let d=r===`bullets`,f=e[t];return(0,k.jsxs)(`nav`,{"aria-label":s,className:i(E.stepper,d?E.bullets:E[n],E[a],c),...u,children:[d&&f&&(0,k.jsxs)(`p`,{className:E.summary,"aria-hidden":`true`,children:[(0,k.jsxs)(`span`,{className:E.count,children:[`Step `,t+1,` of `,e.length,`:`]}),` `,(0,k.jsx)(`span`,{className:E.label,children:f.label})]}),(0,k.jsx)(`ol`,{className:E.list,children:e.map((n,r)=>{let a=n.status??(r<t?`complete`:r===t?`current`:`upcoming`),s=o!==void 0&&a!==`upcoming`,c=(0,k.jsx)(`span`,{className:E.marker,"aria-hidden":`true`,children:d?null:a===`complete`?(0,k.jsx)(l,{name:`check`}):a===`error`?(0,k.jsx)(l,{name:`danger`}):r+1}),u=(0,k.jsxs)(`span`,{className:i(E.text,d&&E.srOnly),children:[(0,k.jsxs)(`span`,{className:E.label,children:[n.label,(0,k.jsxs)(`span`,{className:E.srOnly,children:[`, `,A[a]]})]}),n.description&&(0,k.jsx)(`span`,{className:E.description,children:n.description})]});return(0,k.jsxs)(`li`,{className:i(E.step,E[a]),"aria-current":a===`current`||r===t?`step`:void 0,children:[s?(0,k.jsxs)(`button`,{type:`button`,className:E.target,onClick:()=>o(r),children:[c,u]}):(0,k.jsxs)(`span`,{className:E.target,children:[c,u]}),!d&&r<e.length-1&&(0,k.jsx)(`span`,{className:E.connector,"aria-hidden":`true`})]},r)})})]})}var k,A;function j(){return(j=e((()=>{c(),r(),D(),k=a(),A={complete:`completed`,current:`current`,upcoming:`not started`,error:`has an error`},O.__docgenInfo={description:``,methods:[],displayName:`Stepper`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`StepperStep`}],raw:`StepperStep[]`},description:``},current:{required:!0,tsType:{name:`number`},description:`0-based index of the step the reader is on. Steps before it are complete.`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:'Ignored with `appearance="bullets"`, which is always one row.',defaultValue:{value:`'horizontal'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'circles' | 'bullets'`,elements:[{name:`literal`,value:`'circles'`},{name:`literal`,value:`'bullets'`}]},description:`\`circles\` shows every step's marker and label. \`bullets\` shows only
the current step's label ("Step 2 of 4: Workspace") over a row of
dots, for a narrow space or a longer flow.`,defaultValue:{value:`'circles'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onStepClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Makes finished steps (and the current one) buttons that go back to
them. Upcoming steps stay plain: they cannot be skipped to.`},"aria-label":{required:!1,tsType:{name:`string`},description:`The nav landmark's name.`,defaultValue:{value:`'Progress'`,computed:!1}}},composes:[`Omit`]}})))()}var ce=t({Anatomy:()=>Z,Bullets:()=>G,BulletsErrorOnCurrent:()=>K,BulletsNavigable:()=>q,Clickable:()=>Y,Default:()=>B,DoFewShortSteps:()=>Q,DontTooManySteps:()=>$,Navigable:()=>W,Small:()=>H,Statuses:()=>J,Vertical:()=>V,WithError:()=>U,__namedExportsOrder:()=>le,anatomyParts:()=>X,default:()=>z}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{M=n(),u(),o(),j(),ee(),N=a(),{expect:P,fn:F,userEvent:I,within:L}=__STORYBOOK_MODULE_TEST__,R=[{label:`Account`,description:`Email and password`},{label:`Workspace`,description:`Name and URL`},{label:`Invite`,description:`Add your team`},{label:`Done`}],z={title:`Components/Navigation/Stepper`,tags:[`beta`],component:O,args:{steps:R,current:1},argTypes:{steps:{description:"The steps, in order: `{ label, description?, status? }`. `status` (`'complete' | 'current' | 'upcoming' | 'error'`) overrides the one worked out from `current`, e.g. to flag an error.",control:!1,table:{type:{summary:`StepperStep[]`}}},current:{description:`The 0-based index of the step the reader is on. Steps before it are complete, steps after it upcoming.`,control:{type:`range`,min:0,max:3},table:{type:{summary:`number`}}},orientation:{description:"`horizontal` puts each label under its marker; `vertical` stacks the steps, for long descriptions or a narrow column. Bullets are always one row.",control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},appearance:{description:'`circles` shows every step with its marker and label. `bullets` shows only the current step\'s label, "Step 2 of 4: Workspace", over a row of dots: for a dialog, a phone, or a flow too long for labels.',control:`inline-radio`,options:[`circles`,`bullets`],table:{type:{summary:`'circles' | 'bullets'`},defaultValue:{summary:`'circles'`}}},size:{description:"A 32px (`md`) or 24px (`sm`) marker. `sm` takes a 12px label. With bullets the dots stay one size and only the text shrinks.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},onStepClick:{description:`Makes complete steps and the current one buttons that go back to them, called with the index. Upcoming steps stay plain text.`,control:!1,table:{type:{summary:`(index: number) => void`}}},"aria-label":{description:"The `<nav>` landmark's name.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Progress'`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,N.jsx)(`div`,{style:{maxInlineSize:`44rem`},children:e()})]},B={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Progress`});await P(L(t).getByRole(`list`).tagName).toBe(`OL`);let n=L(t).getAllByRole(`listitem`);await P(n).toHaveLength(4),await P(n[1]).toHaveAttribute(`aria-current`,`step`),await P(n[0]).toHaveTextContent(`Account, completed`),await P(n[2]).toHaveTextContent(`Invite, not started`),await P(L(t).queryByRole(`button`)).toBeNull(),await P(n[0].querySelector(`svg`).getBoundingClientRect().width).toBe(16)}},V={args:{orientation:`vertical`,current:2}},H={args:{size:`sm`},play:async({canvas:e})=>{let t=L(e.getByRole(`navigation`)).getAllByRole(`listitem`)[0];await P(t.querySelector(`svg`).getBoundingClientRect().width).toBe(14)}},U={args:{current:2,steps:[R[0],{...R[1],status:`error`,description:`That URL is taken`},R[2],R[3]]},play:async({canvas:e})=>{await P(e.getAllByRole(`listitem`)[1]).toHaveTextContent(`Workspace, has an error`)}},W={render:function(e){let[t,n]=(0,M.useState)(2);return(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[(0,N.jsx)(O,{...e,current:t,onStepClick:n}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,N.jsx)(s,{appearance:`outlined`,variant:`accent`,disabled:t===0,onClick:()=>n(t-1),children:`Back`}),(0,N.jsx)(s,{disabled:t===R.length-1,onClick:()=>n(t+1),children:`Next`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`navigation`);await P(L(t).getAllByRole(`button`)).toHaveLength(3),await P(L(t).getByRole(`button`,{name:/^Invite\s*, current/})).toBeInTheDocument(),await I.tab();let n=L(t).getByRole(`button`,{name:/^Account\s*, completed/});await P(n).toHaveFocus(),await P(getComputedStyle(n).outlineStyle).toBe(`solid`),await P(f(`pointer: coarse`,n).find(e=>e.style.minBlockSize)?.style.minBlockSize).toBe(`var(--target-coarse)`),await I.keyboard(`{Enter}`),await P(L(t).getAllByRole(`listitem`)[0]).toHaveAttribute(`aria-current`,`step`)}},G={args:{appearance:`bullets`,current:2,steps:[R[0],{...R[1],status:`error`},R[2],R[3]]},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`navigation`,{name:`Progress`});await P(L(n).getByText(/Step 3 of 4/)).toBeVisible(),await P(L(n).getByText(`Invite`,{selector:`p span`})).toBeVisible();let r=L(n).getAllByRole(`listitem`);await P(r).toHaveLength(4),await P(r[2]).toHaveAttribute(`aria-current`,`step`),await P(r[1]).toHaveTextContent(`Workspace, has an error`),await P(L(r[0]).getByText(`Account`).getBoundingClientRect().width).toBeLessThanOrEqual(1),await P(t.querySelector(`ol svg`)).toBeNull();for(let e of r)await P(e.children).toHaveLength(1)}},K={tags:[`!dev`],args:{appearance:`bullets`,current:1,steps:[R[0],{...R[1],status:`error`},R[2]]},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`)[1];await P(t).toHaveAttribute(`aria-current`,`step`),await P(getComputedStyle(t.querySelector(`[aria-hidden="true"]`)).boxShadow).not.toBe(`none`)}},q={tags:[`!dev`],args:{appearance:`bullets`,current:2,onStepClick:F()},play:async({args:e,canvas:t})=>{await P(t.getAllByRole(`button`)).toHaveLength(3),await I.click(t.getByRole(`button`,{name:/^Account\s*, completed/})),await P(e.onStepClick).toHaveBeenCalledWith(0)}},J={tags:[`!dev`],args:{size:`sm`,current:2,steps:[{label:`Cart`},{label:`Ship`,status:`error`},{label:`Pay`},{label:`Done`}]}},Y={tags:[`!dev`],args:{size:`sm`,current:1,steps:[{label:`Cart`},{label:`Ship`},{label:`Pay`}],onStepClick:F()}},X=[{name:`Marker`,selector:`li:nth-child(1) > span > span:first-child`,description:`A disc: a check when complete, the number when current or upcoming, a warning on error.`},{name:`Label`,selector:`li:nth-child(2) > span > span:last-child > span:first-child`,description:`The step's name, with its status in hidden text for screen readers.`},{name:`Description`,selector:`li:nth-child(2) > span > span:last-child > span:last-child`,description:`Optional, small and muted.`},{name:`Connector`,selector:`li:nth-child(2) > span:last-child`,description:`The line to the next step: primary once the step is complete.`}],Z={tags:[`!dev`],args:{current:1},play:async({canvasElement:e})=>{let t=await d(e,X);await P(t[1]).toHaveTextContent(`Workspace`),await P(t[2]).toHaveTextContent(`Name and URL`)}},Q={tags:[`!dev`],args:{current:1,steps:[{label:`Cart`},{label:`Shipping`},{label:`Payment`},{label:`Review`}]}},$={tags:[`!dev`],args:{current:3,steps:[`Email`,`Password`,`Name`,`Company`,`Role`,`Team size`,`Use case`,`Invite`,`Plan`,`Done`].map(e=>({label:e}))}},le=[`Default`,`Vertical`,`Small`,`WithError`,`Navigable`,`Bullets`,`BulletsErrorOnCurrent`,`BulletsNavigable`,`Statuses`,`Clickable`,`anatomyParts`,`Anatomy`,`DoFewShortSteps`,`DontTooManySteps`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    // The complete step's check is 16px in its 32px marker.
    await expect(items[0].querySelector('svg')!.getBoundingClientRect().width).toBe(16);
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    current: 2
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  play: async ({
    canvas
  }) => {
    // 14px in the 24px marker.
    const done = within(canvas.getByRole('navigation')).getAllByRole('listitem')[0];
    await expect(done.querySelector('svg')!.getBoundingClientRect().width).toBe(14);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Finished steps become buttons that go back; upcoming ones cannot be skipped to.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'bullets',
    current: 2,
    steps: [steps[0], {
      ...steps[1],
      status: 'error'
    }, steps[2], steps[3]]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Progress'
    });
    await expect(within(nav).getByText(/Step 3 of 4/)).toBeVisible();
    await expect(within(nav).getByText('Invite', {
      selector: 'p span'
    })).toBeVisible();
    const items = within(nav).getAllByRole('listitem');
    await expect(items).toHaveLength(4);
    await expect(items[2]).toHaveAttribute('aria-current', 'step');
    await expect(items[1]).toHaveTextContent('Workspace, has an error');
    // Only the current label shows: the others are clipped to nothing.
    await expect(within(items[0]).getByText('Account').getBoundingClientRect().width).toBeLessThanOrEqual(1);
    // The dots carry no numbers or icons, and there are no connectors between them.
    await expect(canvasElement.querySelector('ol svg')).toBeNull();
    for (const item of items) await expect(item.children).toHaveLength(1);
  }
}`,...G.parameters?.docs?.source},description:{story:`Only the current step's label is shown; every dot still says its label and status.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    appearance: 'bullets',
    current: 1,
    steps: [steps[0], {
      ...steps[1],
      status: 'error'
    }, steps[2]]
  },
  play: async ({
    canvas
  }) => {
    const item = canvas.getAllByRole('listitem')[1];
    await expect(item).toHaveAttribute('aria-current', 'step');
    await expect(getComputedStyle(item.querySelector('[aria-hidden="true"]')!).boxShadow).not.toBe('none');
  }
}`,...K.parameters?.docs?.source},description:{story:"An error on the current step keeps `aria-current` and, with bullets, the ring.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    appearance: 'bullets',
    current: 2,
    onStepClick: fn()
  },
  play: async ({
    args,
    canvas
  }) => {
    await expect(canvas.getAllByRole('button')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: /^Account\\s*, completed/
    }));
    await expect(args.onStepClick).toHaveBeenCalledWith(0);
  }
}`,...q.parameters?.docs?.source},description:{story:"Bullets with `onStepClick`: each finished dot is a button named by its step.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Every status at once, small and short so it fits a cell of the States table.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"With `onStepClick`, for the States table: finished steps and the current one are buttons.",...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Every part present.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: a few steps with short labels.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    current: 3,
    steps: ['Email', 'Password', 'Name', 'Company', 'Role', 'Team size', 'Use case', 'Invite', 'Plan', 'Done'].map(label => ({
      label
    }))
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: too many steps, so each one is squeezed and the flow looks longer than it is.`,...$.parameters?.docs?.description}}}})))()}export{Q as a,H as c,V as d,X as f,B as i,J as l,G as n,$ as o,ue as p,Y as r,W as s,Z as t,ce as u};