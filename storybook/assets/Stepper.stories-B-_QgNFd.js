import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{a as c,r as l}from"./story-helpers-EInZsLED.js";import{n as u,t as d}from"./Stepper-DpvxBFPW.js";var f=t({Anatomy:()=>M,Bullets:()=>E,BulletsErrorOnCurrent:()=>D,BulletsNavigable:()=>O,Clickable:()=>A,Default:()=>x,DoFewShortSteps:()=>N,DontTooManySteps:()=>P,Navigable:()=>T,Small:()=>C,Statuses:()=>k,Vertical:()=>S,WithError:()=>w,__namedExportsOrder:()=>F,anatomyParts:()=>j,default:()=>b}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{p=n(),o(),i(),u(),l(),m=r(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{label:`Account`,description:`Email and password`},{label:`Workspace`,description:`Name and URL`},{label:`Invite`,description:`Add your team`},{label:`Done`}],b={title:`Components/Navigation/Stepper`,tags:[`beta`],component:d,args:{steps:y,current:1},argTypes:{steps:{description:"The steps, in order: `{ label, description?, status? }`. `status` (`'complete' | 'current' | 'upcoming' | 'error'`) overrides the one worked out from `current`, e.g. to flag an error.",control:!1,table:{type:{summary:`StepperStep[]`}}},current:{description:`The 0-based index of the step the reader is on. Steps before it are complete, steps after it upcoming.`,control:{type:`range`,min:0,max:3},table:{type:{summary:`number`}}},orientation:{description:"`horizontal` puts each label under its marker; `vertical` stacks the steps, for long descriptions or a narrow column. Bullets are always one row.",control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},appearance:{description:'`circles` shows every step with its marker and label. `bullets` shows only the current step\'s label, "Step 2 of 4: Workspace", over a row of dots: for a dialog, a phone, or a flow too long for labels.',control:`inline-radio`,options:[`circles`,`bullets`],table:{type:{summary:`'circles' | 'bullets'`},defaultValue:{summary:`'circles'`}}},size:{description:"A 32px (`md`) or 24px (`sm`) marker. `sm` takes a 12px label. With bullets the dots stay one size and only the text shrinks.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},onStepClick:{description:`Makes complete steps and the current one buttons that go back to them, called with the index. Upcoming steps stay plain text.`,control:!1,table:{type:{summary:`(index: number) => void`}}},"aria-label":{description:"The `<nav>` landmark's name.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Progress'`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,m.jsx)(`div`,{style:{maxInlineSize:`44rem`},children:e()})]},x={play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Progress`});await h(v(t).getByRole(`list`).tagName).toBe(`OL`);let n=v(t).getAllByRole(`listitem`);await h(n).toHaveLength(4),await h(n[1]).toHaveAttribute(`aria-current`,`step`),await h(n[0]).toHaveTextContent(`Account, completed`),await h(n[2]).toHaveTextContent(`Invite, not started`),await h(v(t).queryByRole(`button`)).toBeNull()}},S={args:{orientation:`vertical`,current:2}},C={args:{size:`sm`}},w={args:{current:2,steps:[y[0],{...y[1],status:`error`,description:`That URL is taken`},y[2],y[3]]},play:async({canvas:e})=>{await h(e.getAllByRole(`listitem`)[1]).toHaveTextContent(`Workspace, has an error`)}},T={render:function(e){let[t,n]=(0,p.useState)(2);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[(0,m.jsx)(d,{...e,current:t,onStepClick:n}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,m.jsx)(a,{appearance:`outlined`,variant:`accent`,disabled:t===0,onClick:()=>n(t-1),children:`Back`}),(0,m.jsx)(a,{disabled:t===y.length-1,onClick:()=>n(t+1),children:`Next`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`navigation`);await h(v(t).getAllByRole(`button`)).toHaveLength(3),await h(v(t).getByRole(`button`,{name:/^Invite\s*, current/})).toBeInTheDocument(),await _.tab();let n=v(t).getByRole(`button`,{name:/^Account\s*, completed/});await h(n).toHaveFocus(),await h(getComputedStyle(n).outlineStyle).toBe(`solid`),await h(c(`pointer: coarse`,n).find(e=>e.style.minBlockSize)?.style.minBlockSize).toBe(`var(--target-coarse)`),await _.keyboard(`{Enter}`),await h(v(t).getAllByRole(`listitem`)[0]).toHaveAttribute(`aria-current`,`step`)}},E={args:{appearance:`bullets`,current:2,steps:[y[0],{...y[1],status:`error`},y[2],y[3]]},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`navigation`,{name:`Progress`});await h(v(n).getByText(/Step 3 of 4/)).toBeVisible(),await h(v(n).getByText(`Invite`,{selector:`p span`})).toBeVisible();let r=v(n).getAllByRole(`listitem`);await h(r).toHaveLength(4),await h(r[2]).toHaveAttribute(`aria-current`,`step`),await h(r[1]).toHaveTextContent(`Workspace, has an error`),await h(v(r[0]).getByText(`Account`).getBoundingClientRect().width).toBeLessThanOrEqual(1),await h(t.querySelector(`ol svg`)).toBeNull();for(let e of r)await h(e.children).toHaveLength(1)}},D={tags:[`!dev`],args:{appearance:`bullets`,current:1,steps:[y[0],{...y[1],status:`error`},y[2]]},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`)[1];await h(t).toHaveAttribute(`aria-current`,`step`),await h(getComputedStyle(t.querySelector(`[aria-hidden="true"]`)).boxShadow).not.toBe(`none`)}},O={tags:[`!dev`],args:{appearance:`bullets`,current:2,onStepClick:g()},play:async({args:e,canvas:t})=>{await h(t.getAllByRole(`button`)).toHaveLength(3),await _.click(t.getByRole(`button`,{name:/^Account\s*, completed/})),await h(e.onStepClick).toHaveBeenCalledWith(0)}},k={tags:[`!dev`],args:{size:`sm`,current:2,steps:[{label:`Cart`},{label:`Ship`,status:`error`},{label:`Pay`},{label:`Done`}]}},A={tags:[`!dev`],args:{size:`sm`,current:1,steps:[{label:`Cart`},{label:`Ship`},{label:`Pay`}],onStepClick:g()}},j=[{name:`Marker`,selector:`li:nth-child(1) > span > span:first-child`,description:`A disc: a check when complete, the number when current or upcoming, a warning on error.`},{name:`Label`,selector:`li:nth-child(2) > span > span:last-child > span:first-child`,description:`The step's name, with its status in hidden text for screen readers.`},{name:`Description`,selector:`li:nth-child(2) > span > span:last-child > span:last-child`,description:`Optional, small and muted.`},{name:`Connector`,selector:`li:nth-child(2) > span:last-child`,description:`The line to the next step: primary once the step is complete.`}],M={tags:[`!dev`],args:{current:1},play:async({canvasElement:e})=>{let t=await s(e,j);await h(t[1]).toHaveTextContent(`Workspace`),await h(t[2]).toHaveTextContent(`Name and URL`)}},N={tags:[`!dev`],args:{current:1,steps:[{label:`Cart`},{label:`Shipping`},{label:`Payment`},{label:`Review`}]}},P={tags:[`!dev`],args:{current:3,steps:[`Email`,`Password`,`Name`,`Company`,`Role`,`Team size`,`Use case`,`Invite`,`Plan`,`Done`].map(e=>({label:e}))}},F=[`Default`,`Vertical`,`Small`,`WithError`,`Navigable`,`Bullets`,`BulletsErrorOnCurrent`,`BulletsNavigable`,`Statuses`,`Clickable`,`anatomyParts`,`Anatomy`,`DoFewShortSteps`,`DontTooManySteps`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    current: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Finished steps become buttons that go back; upcoming ones cannot be skipped to.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Only the current step's label is shown; every dot still says its label and status.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"An error on the current step keeps `aria-current` and, with bullets, the ring.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Bullets with `onStepClick`: each finished dot is a button named by its step.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Every status at once, small and short so it fits a cell of the States table.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"With `onStepClick`, for the States table: finished steps and the current one are buttons.",...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Every part present.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Guidelines, Do: a few steps with short labels.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    current: 3,
    steps: ['Email', 'Password', 'Name', 'Company', 'Role', 'Team size', 'Use case', 'Invite', 'Plan', 'Done'].map(label => ({
      label
    }))
  }
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Don't: too many steps, so each one is squeezed and the flow looks longer than it is.`,...P.parameters?.docs?.description}}}})))()}export{N as a,C as c,S as d,j as f,x as i,k as l,E as n,P as o,I as p,A as r,T as s,M as t,f as u};