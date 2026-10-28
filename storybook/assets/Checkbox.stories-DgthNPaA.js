import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./Checkbox-5Fepdwz1.js";var c=t({Anatomy:()=>E,AutoFocus:()=>C,Default:()=>h,Disabled:()=>x,DoPositiveLabel:()=>D,DontNegativeLabel:()=>O,InAForm:()=>w,Indeterminate:()=>v,ReadOnly:()=>S,SelectAll:()=>y,Validation:()=>b,Variants:()=>g,WithHelperText:()=>_,__namedExportsOrder:()=>k,anatomyParts:()=>T,default:()=>p}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l=n(),i(),o(),u=r(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Controls/Checkbox`,tags:[`beta`],component:s,argTypes:{checked:{description:"Controlled state. Pair with `onCheckedChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultChecked:{description:`Starting state when uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onCheckedChange:{description:`Called with the new state on click and Space.`,control:!1,table:{type:{summary:`(checked: boolean) => void`}}},isIndeterminate:{description:`Neither checked nor unchecked: a "select all" whose children are partly selected. Display only; a click still sets all or none.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{description:`Names the checkbox. Clicking it toggles the box.`,control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the label: the description, or the error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},variant:{description:"Colour of the checked box: `neutral` (the foreground) or `primary` (the accent).",control:`inline-radio`,options:[`primary`,`neutral`],table:{type:{summary:`'primary' | 'neutral'`},defaultValue:{summary:`'neutral'`}}},validationState:{description:"`error` sets `aria-invalid` and turns the outline and helper red; `success` turns the helper green.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},name:{description:`Submitted with a form, when checked.`,control:`text`,table:{type:{summary:`string`}}},value:{description:"Submitted under `name` when checked.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'on'`}}},disabled:{description:`Dimmed, and cannot be changed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must be checked to submit. Adds an asterisk to the label.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but cannot be changed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoFocus:{description:`Focuses the box on mount.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{label:`Remember me`,onCheckedChange:f()},excludeStories:[`anatomyParts`]},m={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},h={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`checkbox`,{name:`Remember me`});await d(r).not.toBeChecked(),await t.click(r),await d(r).toBeChecked(),await d(n.onCheckedChange).toHaveBeenLastCalledWith(!0),await t.click(e.getByText(`Remember me`)),await d(r).not.toBeChecked(),await t.keyboard(` `),await d(r).toBeChecked()}},g={render:e=>(0,u.jsx)(`div`,{style:m,children:[`neutral`,`primary`].map(t=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-6)`},children:[(0,u.jsx)(s,{...e,variant:t,label:`${t}, off`}),(0,u.jsx)(s,{...e,variant:t,label:`${t}, on`,defaultChecked:!0}),(0,u.jsx)(s,{...e,variant:t,label:`${t}, mixed`,isIndeterminate:!0})]},t))})},_={args:{helperText:`Save my login details for next time.`},play:async({canvas:e})=>{await d(e.getByRole(`checkbox`)).toHaveAccessibleDescription(`Save my login details for next time.`)}},v={args:{isIndeterminate:!0,label:`Select all`},play:async({canvas:e})=>{await d(e.getByRole(`checkbox`)).toHaveAttribute(`aria-checked`,`mixed`)}},y={render:function(e){let[t,n]=(0,l.useState)({Email:!0,SMS:!1,Push:!1}),r=Object.values(t),i=r.every(Boolean),a=r.some(Boolean);return(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,label:`All channels`,checked:i,isIndeterminate:a&&!i,onCheckedChange:e=>n({Email:e,SMS:e,Push:e})}),(0,u.jsx)(`div`,{style:{...m,paddingInlineStart:`var(--space-6)`},children:Object.entries(t).map(([e,r])=>(0,u.jsx)(s,{label:e,checked:r,onCheckedChange:r=>n({...t,[e]:r})},e))})]})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`checkbox`,{name:`All channels`});await d(n).toHaveAttribute(`aria-checked`,`mixed`),await t.click(n),await d(e.getByRole(`checkbox`,{name:`Push`})).toBeChecked(),await d(n).toHaveAttribute(`aria-checked`,`true`)}},b={render:e=>(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,label:`I accept the terms`,validationState:`error`,helperText:`Accept the terms to continue.`,required:!0}),(0,u.jsx)(s,{...e,label:`Newsletter`,validationState:`success`,helperText:`Subscribed.`,defaultChecked:!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`checkbox`,{name:/I accept the terms/});await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Accept the terms to continue.`)}},x={render:e=>(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,label:`Off, disabled`,disabled:!0}),(0,u.jsx)(s,{...e,label:`On, disabled`,disabled:!0,defaultChecked:!0})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`checkbox`,{name:`Off, disabled`})),await d(n.onCheckedChange).not.toHaveBeenCalled()}},S={args:{readOnly:!0,defaultChecked:!0},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`checkbox`)),await d(e.getByRole(`checkbox`)).toBeChecked(),await d(n.onCheckedChange).not.toHaveBeenCalled()}},C={args:{autoFocus:!0},play:async({canvas:e})=>{await d(e.getByRole(`checkbox`)).toHaveFocus()}},w={render:e=>(0,u.jsx)(`form`,{"aria-label":`Login`,children:(0,u.jsx)(s,{...e,name:`remember`,value:`yes`,defaultChecked:!0})}),play:async({canvasElement:e})=>{await d(new FormData(e.querySelector(`form`)).get(`remember`)).toBe(`yes`)}},T=[{name:`Container`,selector:`[role="checkbox"]`,description:`The 20px box: an outline when unchecked, filled with the variant when checked.`},{name:`Check mark`,selector:`[role="checkbox"] > span`,description:"`check` when checked, `minus` when indeterminate. Absent when unchecked."},{name:`Label`,selector:`label > span:last-child`,description:`Names the box. Part of the click target.`},{name:`Helper text`,selector:`p`,description:`Optional. Indented under the label; the error message in the error state.`}],E={tags:[`!dev`],args:{defaultChecked:!0,helperText:`Save my login details for next time.`},play:async({canvasElement:e})=>{let t=await a(e,T);await d(t[2]).toHaveTextContent(`Remember me`)}},D={args:{label:`Email me product updates`}},O={tags:[`!dev`],args:{label:`Don't email me product updates`}},k=[`Default`,`Variants`,`WithHelperText`,`Indeterminate`,`SelectAll`,`Validation`,`Disabled`,`ReadOnly`,`AutoFocus`,`InAForm`,`anatomyParts`,`Anatomy`,`DoPositiveLabel`,`DontNegativeLabel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const box = canvas.getByRole('checkbox', {
      name: 'Remember me'
    });
    await expect(box).not.toBeChecked();
    await userEvent.click(box);
    await expect(box).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    await userEvent.click(canvas.getByText('Remember me'));
    await expect(box).not.toBeChecked();
    await userEvent.keyboard(' ');
    await expect(box).toBeChecked();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['neutral', 'primary'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: 'var(--space-6)'
    }}>
          <Checkbox {...args} variant={variant} label={\`\${variant}, off\`} />
          <Checkbox {...args} variant={variant} label={\`\${variant}, on\`} defaultChecked />
          <Checkbox {...args} variant={variant} label={\`\${variant}, mixed\`} isIndeterminate />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Save my login details for next time.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAccessibleDescription('Save my login details for next time.');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Select all'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [items, setItems] = useState({
      Email: true,
      SMS: false,
      Push: false
    });
    const values = Object.values(items);
    const all = values.every(Boolean);
    const some = values.some(Boolean);
    return <div style={stack}>
        <Checkbox {...args} label="All channels" checked={all} isIndeterminate={some && !all} onCheckedChange={on => setItems({
        Email: on,
        SMS: on,
        Push: on
      })} />
        <div style={{
        ...stack,
        paddingInlineStart: 'var(--space-6)'
      }}>
          {Object.entries(items).map(([name, on]) => <Checkbox key={name} label={name} checked={on} onCheckedChange={next => setItems({
          ...items,
          [name]: next
        })} />)}
        </div>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const parent = canvas.getByRole('checkbox', {
      name: 'All channels'
    });
    await expect(parent).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(parent);
    await expect(canvas.getByRole('checkbox', {
      name: 'Push'
    })).toBeChecked();
    await expect(parent).toHaveAttribute('aria-checked', 'true');
  }
}`,...y.parameters?.docs?.source},description:{story:`The usual job of indeterminate: a parent that reflects its children.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Checkbox {...args} label="I accept the terms" validationState="error" helperText="Accept the terms to continue." required />
      <Checkbox {...args} label="Newsletter" validationState="success" helperText="Subscribed." defaultChecked />
    </div>,
  play: async ({
    canvas
  }) => {
    const terms = canvas.getByRole('checkbox', {
      name: /I accept the terms/
    });
    await expect(terms).toHaveAttribute('aria-invalid', 'true');
    await expect(terms).toHaveAccessibleDescription('Accept the terms to continue.');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Checkbox {...args} label="Off, disabled" disabled />
      <Checkbox {...args} label="On, disabled" disabled defaultChecked />
    </div>,
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Off, disabled'
    }));
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultChecked: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('checkbox'));
    await expect(canvas.getByRole('checkbox')).toBeChecked();
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveFocus();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Login">
      <Checkbox {...args} name="remember" value="yes" defaultChecked />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('remember')).toBe('yes');
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultChecked: true,
    helperText: 'Save my login details for next time.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Remember me');
  }
}`,...E.parameters?.docs?.source},description:{story:`Every part present.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email me product updates'
  }
}`,...D.parameters?.docs?.source},description:{story:`Guidelines, Do: the label says what checking does.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: "Don't email me product updates"
  }
}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Don't: a negative label makes unchecked a double negative.`,...O.parameters?.docs?.description}}}})))()}export{O as a,b as c,A as d,D as i,g as l,c as n,v as o,h as r,y as s,E as t,T as u};