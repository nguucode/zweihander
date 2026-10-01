import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./ProgressBar-BxRb7uA5.js";var a=t({Default:()=>u,Indeterminate:()=>h,Max:()=>m,Sizes:()=>p,ValueLabel:()=>d,Variants:()=>f,WithoutVisibleLabel:()=>g,__namedExportsOrder:()=>_,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o=n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Loaders/ProgressBar`,component:i,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]}},args:{value:70,label:`Uploading`},decorators:[e=>(0,o.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},l={display:`grid`,gap:`var(--space-4)`},u={play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await s(t).toHaveAttribute(`aria-valuenow`,`70`),await s(t).toHaveAttribute(`aria-valuemax`,`100`)}},d={args:{showValueLabel:!0},play:async({canvas:e})=>{await s(e.getByText(`70%`)).toBeVisible()}},f={render:e=>(0,o.jsx)(`div`,{style:l,children:[`primary`,`accent`,`secondary`,`destructive`].map(t=>(0,o.jsx)(i,{...e,variant:t,label:t,showValueLabel:!0},t))})},p={render:e=>(0,o.jsx)(`div`,{style:l,children:[`sm`,`md`,`lg`].map(t=>(0,o.jsx)(i,{...e,size:t,label:t,isRounded:!0},t))})},m={args:{value:3,max:5,showValueLabel:!0,label:`Steps done`},play:async({canvas:e})=>{await s(e.getByRole(`progressbar`)).toHaveAttribute(`aria-valuemax`,`5`),await s(e.getByText(`60%`)).toBeVisible()}},h={args:{isIndeterminate:!0,label:`Connecting`},play:async({canvas:e})=>{await s(e.getByRole(`progressbar`,{name:`Connecting`})).not.toHaveAttribute(`aria-valuenow`)}},g={args:{label:void 0,"aria-label":`Storage used`},play:async({canvas:e})=>{await s(e.getByRole(`progressbar`,{name:`Storage used`})).toBeVisible()}},_=[`Default`,`ValueLabel`,`Variants`,`Sizes`,`Max`,`Indeterminate`,`WithoutVisibleLabel`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(bar).toHaveAttribute('aria-valuenow', '70');
    await expect(bar).toHaveAttribute('aria-valuemax', '100');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showValueLabel: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('70%')).toBeVisible();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} {...args} variant={variant} label={variant} showValueLabel />)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <ProgressBar key={size} {...args} size={size} label={size} isRounded />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    showValueLabel: true,
    label: 'Steps done'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '5');
    await expect(canvas.getByText('60%')).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Connecting'
  },
  play: async ({
    canvas
  }) => {
    // No value to report: aria-valuenow is absent, not 0.
    await expect(canvas.getByRole('progressbar', {
      name: 'Connecting'
    })).not.toHaveAttribute('aria-valuenow');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Storage used'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Storage used'
    })).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}}})))()}export{p as a,g as c,a as i,v as l,h as n,d as o,m as r,f as s,u as t};