import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./Radio-D3NJaeSl.js";var o=t({Controlled:()=>S,Default:()=>p,Disabled:()=>_,DisabledOption:()=>x,GroupHelperText:()=>h,Horizontal:()=>y,InAForm:()=>C,OptionHelperText:()=>m,ReadOnly:()=>g,Validation:()=>b,Variants:()=>v,__namedExportsOrder:()=>w,default:()=>f}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s=r(),i(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d=[{value:`free`,label:`Free`,helperText:`One project, community support.`},{value:`pro`,label:`Pro`,helperText:`Unlimited projects.`},{value:`team`,label:`Team`,helperText:`Pro, plus shared billing.`}],f={title:`Components/Controls/Radio`,component:a,parameters:{a11y:{test:`error`}},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`neutral`]},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Plan`,options:d,onValueChange:u()}},p={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`radiogroup`,{name:`Plan`});await l(r).toBeVisible(),await t.click(e.getByRole(`radio`,{name:`Pro`})),await l(e.getByRole(`radio`,{name:`Pro`})).toBeChecked(),await l(n.onValueChange).toHaveBeenLastCalledWith(`pro`),await t.keyboard(`{ArrowDown}`),await l(e.getByRole(`radio`,{name:`Team`})).toBeChecked(),await l(e.getByRole(`radio`,{name:`Team`})).toHaveFocus(),await t.tab(),await l(e.getByRole(`radio`,{name:`Free`})).not.toHaveFocus()}},m={play:async({canvas:e})=>{await l(e.getByRole(`radio`,{name:`Pro`})).toHaveAccessibleDescription(`Unlimited projects.`)}},h={args:{helperText:`You can change plans at any time.`},play:async({canvas:e})=>{await l(e.getByRole(`radiogroup`)).toHaveAccessibleDescription(`You can change plans at any time.`),await l(e.getByRole(`radio`,{name:`Pro`})).toHaveAccessibleDescription(`Unlimited projects.`)}},g={args:{readOnly:!0,defaultValue:`pro`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await l(e.getByRole(`radio`,{name:`Pro`})).toBeChecked(),await l(n.onValueChange).not.toHaveBeenCalled()}},_={args:{disabled:!0,defaultValue:`free`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await l(n.onValueChange).not.toHaveBeenCalled()}},v={render:e=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-12)`},children:[`neutral`,`primary`].map(t=>(0,c.jsx)(a,{...e,label:t,variant:t,defaultValue:`pro`},t))})},y={args:{orientation:`horizontal`,label:`Size`,options:[{value:`s`,label:`Small`},{value:`m`,label:`Medium`},{value:`l`,label:`Large`}],defaultValue:`m`}},b={args:{validationState:`error`,helperText:`Choose a plan to continue.`,required:!0},play:async({canvas:e})=>{await l(e.getByRole(`radio`,{name:`Free`})).toHaveAttribute(`aria-invalid`,`true`),await l(e.getByText(`Choose a plan to continue.`)).toBeVisible(),await l(e.getByRole(`radio`,{name:`Free`})).toHaveAccessibleDescription(/Choose a plan to continue\./);let t=t=>getComputedStyle(e.getByText(t)).color;await l(t(`Unlimited projects.`)).not.toBe(t(`Choose a plan to continue.`))}},x={args:{options:d.map(e=>e.value===`team`?{...e,disabled:!0}:e),defaultValue:`pro`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`radio`,{name:`Pro`})),await t.keyboard(`{ArrowDown}`),await l(e.getByRole(`radio`,{name:`Team`})).not.toBeChecked()}},S={render:function(e){let[t,n]=(0,s.useState)(`free`);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,c.jsx)(a,{...e,value:t,onValueChange:n}),(0,c.jsxs)(`span`,{children:[`Selected: `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await l(e.getByText(`Selected: team`)).toBeVisible()}},C={render:e=>(0,c.jsx)(`form`,{"aria-label":`Signup`,children:(0,c.jsx)(a,{...e,name:`plan`,defaultValue:`pro`})}),play:async({canvasElement:e})=>{await l(new FormData(e.querySelector(`form`)).get(`plan`)).toBe(`pro`)}},w=[`Default`,`OptionHelperText`,`GroupHelperText`,`ReadOnly`,`Disabled`,`Variants`,`Horizontal`,`Validation`,`DisabledOption`,`Controlled`,`InAForm`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const group = canvas.getByRole('radiogroup', {
      name: 'Plan'
    });
    await expect(group).toBeVisible();
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Pro'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Pro'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith('pro');
    // Arrow keys move the selection within the group.
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Team'
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: 'Team'
    })).toHaveFocus();
    // One tab stop for the whole group: Tab leaves it.
    await userEvent.tab();
    await expect(canvas.getByRole('radio', {
      name: 'Free'
    })).not.toHaveFocus();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('radio', {
      name: 'Pro'
    })).toHaveAccessibleDescription('Unlimited projects.');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'You can change plans at any time.'
  },
  play: async ({
    canvas
  }) => {
    // Plain help describes the group once, not every option again.
    await expect(canvas.getByRole('radiogroup')).toHaveAccessibleDescription('You can change plans at any time.');
    await expect(canvas.getByRole('radio', {
      name: 'Pro'
    })).toHaveAccessibleDescription('Unlimited projects.');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'pro'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Team'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Pro'
    })).toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'free'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Team'
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-12)'
  }}>
      {(['neutral', 'primary'] as const).map(variant => <RadioGroup key={variant} {...args} label={variant} variant={variant} defaultValue="pro" />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    label: 'Size',
    options: [{
      value: 's',
      label: 'Small'
    }, {
      value: 'm',
      label: 'Medium'
    }, {
      value: 'l',
      label: 'Large'
    }],
    defaultValue: 'm'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Choose a plan to continue.',
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('radio', {
      name: 'Free'
    })).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Choose a plan to continue.')).toBeVisible();
    // The error message reaches each radio, so whichever has focus says it.
    await expect(canvas.getByRole('radio', {
      name: 'Free'
    })).toHaveAccessibleDescription(/Choose a plan to continue\\./);
    // Only the group message is in the error colour, not each option's help.
    const colour = (t: string) => getComputedStyle(canvas.getByText(t)).color;
    await expect(colour('Unlimited projects.')).not.toBe(colour('Choose a plan to continue.'));
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: plans.map(p => p.value === 'team' ? {
      ...p,
      disabled: true
    } : p),
    defaultValue: 'pro'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Pro'
    }));
    // Arrow keys skip the disabled option.
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('radio', {
      name: 'Team'
    })).not.toBeChecked();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [plan, setPlan] = useState('free');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)'
    }}>
        <RadioGroup {...args} value={plan} onValueChange={setPlan} />
        <span>Selected: {plan}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Team'
    }));
    await expect(canvas.getByText('Selected: team')).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Signup">
      <RadioGroup {...args} name="plan" defaultValue="pro" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('plan')).toBe('pro');
  }
}`,...C.parameters?.docs?.source}}}})))()}export{T as a,b as i,y as n,o as r,p as t};