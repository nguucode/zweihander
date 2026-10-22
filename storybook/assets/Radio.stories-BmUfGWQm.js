import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./Radio-BTazO6kK.js";var c=t({Anatomy:()=>D,Controlled:()=>w,Default:()=>h,Disabled:()=>y,DisabledOption:()=>C,DoFewOptions:()=>O,DontTooMany:()=>k,GroupHelperText:()=>_,Horizontal:()=>x,InAForm:()=>T,OptionHelperText:()=>g,ReadOnly:()=>v,Validation:()=>S,Variants:()=>b,__namedExportsOrder:()=>A,anatomyParts:()=>E,default:()=>m}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l=n(),i(),o(),u=r(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p=[{value:`free`,label:`Free`,helperText:`One project, community support.`},{value:`pro`,label:`Pro`,helperText:`Unlimited projects.`},{value:`team`,label:`Team`,helperText:`Pro, plus shared billing.`}],m={title:`Components/Controls/Radio`,tags:[`beta`],component:s,argTypes:{options:{description:"The radios, in order. Each `label` names its radio; `helperText` describes it; `disabled` skips it.",control:!1,table:{type:{summary:`{ value: string; label: ReactNode; helperText?: ReactNode; disabled?: boolean }[]`}}},label:{description:`The group's legend: names the radiogroup.`,control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the whole group. The error message when `validationState` is `error`, and then on every radio.",control:`text`,table:{type:{summary:`ReactNode`}}},value:{description:"Controlled selection: the chosen option’s `value`. Pair with `onValueChange`.",control:`text`,table:{type:{summary:`string`}}},defaultValue:{description:`Starting selection when uncontrolled. None selected when left out.`,control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:`Called with the new value on click and arrow keys.`,control:!1,table:{type:{summary:`(value: string) => void`}}},variant:{description:"Colour of the selected radio: `neutral` (the foreground) or `primary` (the accent).",control:`inline-radio`,options:[`primary`,`neutral`],table:{type:{summary:`'primary' | 'neutral'`},defaultValue:{summary:`'neutral'`}}},orientation:{description:`Stacked or in a row that wraps. Layout only: arrow keys work either way.`,control:`inline-radio`,options:[`vertical`,`horizontal`],table:{type:{summary:`'vertical' | 'horizontal'`},defaultValue:{summary:`'vertical'`}}},validationState:{description:"`error` sets `aria-invalid` on every radio, turns the outlines and the group message red; `success` turns the message green.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},name:{description:`Submitted with a form, with the selected value.`,control:`text`,table:{type:{summary:`string`}}},disabled:{description:`Every radio dimmed, and the selection cannot change.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`One must be selected to submit. Adds an asterisk to the legend.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but the selection cannot change.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{label:`Plan`,options:p,onValueChange:f()},excludeStories:[`anatomyParts`]},h={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`radiogroup`,{name:`Plan`});await d(r).toBeVisible(),await t.click(e.getByRole(`radio`,{name:`Pro`})),await d(e.getByRole(`radio`,{name:`Pro`})).toBeChecked(),await d(n.onValueChange).toHaveBeenLastCalledWith(`pro`),await t.keyboard(`{ArrowDown}`),await d(e.getByRole(`radio`,{name:`Team`})).toBeChecked(),await d(e.getByRole(`radio`,{name:`Team`})).toHaveFocus(),await t.tab(),await d(e.getByRole(`radio`,{name:`Free`})).not.toHaveFocus()}},g={play:async({canvas:e})=>{await d(e.getByRole(`radio`,{name:`Pro`})).toHaveAccessibleDescription(`Unlimited projects.`)}},_={args:{helperText:`You can change plans at any time.`},play:async({canvas:e})=>{await d(e.getByRole(`radiogroup`)).toHaveAccessibleDescription(`You can change plans at any time.`),await d(e.getByRole(`radio`,{name:`Pro`})).toHaveAccessibleDescription(`Unlimited projects.`)}},v={args:{readOnly:!0,defaultValue:`pro`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await d(e.getByRole(`radio`,{name:`Pro`})).toBeChecked(),await d(n.onValueChange).not.toHaveBeenCalled()}},y={args:{disabled:!0,defaultValue:`free`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await d(n.onValueChange).not.toHaveBeenCalled()}},b={render:e=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-12)`},children:[`neutral`,`primary`].map(t=>(0,u.jsx)(s,{...e,label:t,variant:t,defaultValue:`pro`},t))})},x={args:{orientation:`horizontal`,label:`Size`,options:[{value:`s`,label:`Small`},{value:`m`,label:`Medium`},{value:`l`,label:`Large`}],defaultValue:`m`}},S={args:{validationState:`error`,helperText:`Choose a plan to continue.`,required:!0},play:async({canvas:e})=>{await d(e.getByRole(`radio`,{name:`Free`})).toHaveAttribute(`aria-invalid`,`true`),await d(e.getByText(`Choose a plan to continue.`)).toBeVisible(),await d(e.getByRole(`radio`,{name:`Free`})).toHaveAccessibleDescription(/Choose a plan to continue\./);let t=t=>getComputedStyle(e.getByText(t)).color;await d(t(`Unlimited projects.`)).not.toBe(t(`Choose a plan to continue.`))}},C={args:{options:p.map(e=>e.value===`team`?{...e,disabled:!0}:e),defaultValue:`pro`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`radio`,{name:`Pro`})),await t.keyboard(`{ArrowDown}`),await d(e.getByRole(`radio`,{name:`Team`})).not.toBeChecked()}},w={render:function(e){let[t,n]=(0,l.useState)(`free`);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,u.jsx)(s,{...e,value:t,onValueChange:n}),(0,u.jsxs)(`span`,{children:[`Selected: `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`radio`,{name:`Team`})),await d(e.getByText(`Selected: team`)).toBeVisible()}},T={render:e=>(0,u.jsx)(`form`,{"aria-label":`Signup`,children:(0,u.jsx)(s,{...e,name:`plan`,defaultValue:`pro`})}),play:async({canvasElement:e})=>{await d(new FormData(e.querySelector(`form`)).get(`plan`)).toBe(`pro`)}},E=[{name:`Legend`,selector:`[role="radiogroup"] > :first-child`,description:"Names the group. Optional, but a group without one needs `aria-label`."},{name:`Radio`,selector:`[role="radio"]`,description:`The 20px circle: an outline when unselected.`},{name:`Dot`,selector:`[role="radio"] > span`,description:`Shown in the selected radio, which fills with the variant.`},{name:`Option label`,selector:`label > span:last-child`,description:`Names its radio. Part of the click target.`},{name:`Option helper`,selector:`[role="radiogroup"] p`,description:`Optional. Describes one option, indented under its label.`},{name:`Group helper`,selector:`[role="radiogroup"] + p`,description:`Optional. Under the whole group; the error message in the error state.`}],D={tags:[`!dev`],args:{options:p.map(e=>({...e,label:(0,u.jsx)(`span`,{children:e.label})})),defaultValue:`pro`,helperText:`You can change plans at any time.`},play:async({canvasElement:e})=>{let t=await a(e,E);await d(t[0]).toHaveTextContent(`Plan`),await d(t[3]).toHaveTextContent(`Free`)}},O={args:{label:`Delivery`,options:[{value:`standard`,label:`Standard`},{value:`express`,label:`Express`},{value:`pickup`,label:`Pick up in store`}],defaultValue:`standard`}},k={tags:[`!dev`],args:{label:`Country`,orientation:`horizontal`,options:[`Australia`,`Brazil`,`Canada`,`France`,`Germany`,`India`,`Japan`,`Mexico`,`Spain`,`Vietnam`].map(e=>({value:e,label:e}))}},A=[`Default`,`OptionHelperText`,`GroupHelperText`,`ReadOnly`,`Disabled`,`Variants`,`Horizontal`,`Validation`,`DisabledOption`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoFewOptions`,`DontTooMany`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('radio', {
      name: 'Pro'
    })).toHaveAccessibleDescription('Unlimited projects.');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-12)'
  }}>
      {(['neutral', 'primary'] as const).map(variant => <RadioGroup key={variant} {...args} label={variant} variant={variant} defaultValue="pro" />)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Signup">
      <RadioGroup {...args} name="plan" defaultValue="pro" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('plan')).toBe('pro');
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    options: plans.map(p => ({
      ...p,
      label: <span>{p.label}</span>
    })),
    defaultValue: 'pro',
    helperText: 'You can change plans at any time.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Plan');
    await expect(found[3]).toHaveTextContent('Free');
  }
}`,...D.parameters?.docs?.source},description:{story:`Every part present, each option's label in its own element so the docs can point at it.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delivery',
    options: [{
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'express',
      label: 'Express'
    }, {
      value: 'pickup',
      label: 'Pick up in store'
    }],
    defaultValue: 'standard'
  }
}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Do: a few options, all in view, the usual one selected.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Country',
    orientation: 'horizontal',
    options: ['Australia', 'Brazil', 'Canada', 'France', 'Germany', 'India', 'Japan', 'Mexico', 'Spain', 'Vietnam'].map(c => ({
      value: c,
      label: c
    }))
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Don't: a long list of radios belongs in a Select.`,...k.parameters?.docs?.description}}}})))()}export{O as a,c,E as d,j as f,y as i,S as l,w as n,k as o,h as r,x as s,D as t,b as u};