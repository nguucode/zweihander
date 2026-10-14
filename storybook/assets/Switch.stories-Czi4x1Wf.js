import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./Switch-D4C0lD2s.js";var u=t({Anatomy:()=>O,Controlled:()=>T,Default:()=>_,Disabled:()=>C,DoApplyAtOnce:()=>k,DontWaitForSave:()=>A,InAForm:()=>E,ReadOnly:()=>w,RightToLeft:()=>S,Sizes:()=>y,Validation:()=>x,Variants:()=>v,WithHelperText:()=>b,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{d=n(),o(),i(),c(),f=r(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Controls/Switch`,tags:[`beta`],component:l,argTypes:{checked:{description:"Controlled state. Pair with `onCheckedChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultChecked:{description:`Starting state when uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onCheckedChange:{description:`Called with the new state on click and Space. The setting should take effect here, not on Submit.`,control:!1,table:{type:{summary:`(checked: boolean) => void`}}},label:{description:`Names the setting. Clicking it toggles the switch.`,control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the label: the description, or the error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},size:{description:"Track 28×16 (`sm`), 36×20 (`md`) or 44×24px (`lg`).",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},variant:{description:"Colour of the on state. `accent` is the inverted neutral; `destructive` for a setting that is risky to turn on.",control:`inline-radio`,options:[`primary`,`accent`,`destructive`],table:{type:{summary:`'primary' | 'accent' | 'destructive'`},defaultValue:{summary:`'primary'`}}},validationState:{description:"`error` sets `aria-invalid`, draws a red edge inside the track and turns the helper red; `success` turns the helper green.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},name:{description:`Submitted with a form, when on.`,control:`text`,table:{type:{summary:`string`}}},value:{description:"Submitted under `name` when on, like a checkbox.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'on'`}}},disabled:{description:`Dimmed, and cannot be changed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must be on to submit. Adds an asterisk to the label.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but cannot be changed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{label:`Email notifications`,onCheckedChange:m()},excludeStories:[`anatomyParts`]},g={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},_={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`,{name:`Email notifications`});await p(r).toHaveAttribute(`aria-checked`,`false`),await t.click(r),await p(r).toHaveAttribute(`aria-checked`,`true`),await p(n.onCheckedChange).toHaveBeenLastCalledWith(!0),await t.click(e.getByText(`Email notifications`)),await p(r).toHaveAttribute(`aria-checked`,`false`),await t.keyboard(` `),await p(r).toHaveAttribute(`aria-checked`,`true`)}},v={render:e=>(0,f.jsx)(`div`,{style:g,children:[`primary`,`accent`,`destructive`].map(t=>(0,f.jsx)(l,{...e,variant:t,label:t,defaultChecked:!0},t))})},y={render:e=>(0,f.jsx)(`div`,{style:g,children:[`sm`,`md`,`lg`].map(t=>(0,f.jsx)(l,{...e,size:t,label:t,defaultChecked:!0},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>e.getByRole(`switch`,{name:t}).getBoundingClientRect().width);await p(t).toEqual([28,36,44])}},b={args:{helperText:`A summary once a day, never more.`},play:async({canvas:e})=>{await p(e.getByRole(`switch`)).toHaveAccessibleDescription(`A summary once a day, never more.`)}},x={render:e=>(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,label:`Accept the terms`,validationState:`error`,helperText:`Required to continue.`,required:!0}),(0,f.jsx)(l,{...e,label:`Backups`,validationState:`success`,helperText:`Backups are on.`,defaultChecked:!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`switch`,{name:/Accept the terms/});await p(t).toHaveAttribute(`aria-invalid`,`true`),await p(t).toHaveAccessibleDescription(`Required to continue.`)}},S={args:{defaultChecked:!0},render:e=>(0,f.jsxs)(`div`,{dir:`rtl`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,f.jsx)(l,{...e,label:`Right to left`}),(0,f.jsx)(`div`,{dir:`ltr`,children:(0,f.jsx)(l,{...e,label:`Left to right`})})]}),play:async({canvas:e})=>{let t=t=>{let n=e.getByRole(`switch`,{name:t}),r=n.getBoundingClientRect(),i=n.firstElementChild.getBoundingClientRect();return{start:i.left-r.left,end:r.right-i.right}},n=t(`Right to left`);await p(n.start).toBeGreaterThanOrEqual(0),await p(n.start).toBeLessThan(n.end);let r=t(`Left to right`);await p(r.end).toBeGreaterThanOrEqual(0),await p(r.end).toBeLessThan(r.start)}},C={render:e=>(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,label:`Off, disabled`,disabled:!0}),(0,f.jsx)(l,{...e,label:`On, disabled`,disabled:!0,defaultChecked:!0})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`switch`,{name:`Off, disabled`})),await p(n.onCheckedChange).not.toHaveBeenCalled()}},w={args:{readOnly:!0,defaultChecked:!0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`);await t.click(r),await p(r).toHaveAttribute(`aria-checked`,`true`),await p(n.onCheckedChange).not.toHaveBeenCalled()}},T={render:function(e){let[t,n]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,checked:t,onCheckedChange:n}),(0,f.jsx)(`span`,{children:t?`Notifications on`:`Notifications off`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`switch`)),await p(e.getByText(`Notifications off`)).toBeVisible()}},E={render:e=>(0,f.jsx)(`form`,{"aria-label":`Settings`,children:(0,f.jsx)(l,{...e,name:`notify`,defaultChecked:!0})}),play:async({canvasElement:e})=>{let t=new FormData(e.querySelector(`form`));await p(t.get(`notify`)).toBe(`on`)}},D=[{name:`Track`,selector:`[role="switch"]`,description:"The pill: `--control-border` when off, the variant’s solid when on."},{name:`Thumb`,selector:`[role="switch"] > span`,description:`Slides to the end when on.`},{name:`Label`,selector:`label > span:last-child`,description:`Names the setting. Part of the click target.`},{name:`Helper text`,selector:`p`,description:`Optional. Indented under the label; the error message in the error state.`}],O={tags:[`!dev`],args:{defaultChecked:!0,helperText:`A summary once a day, never more.`},play:async({canvasElement:e})=>{let t=await s(e,D);await p(t[2]).toHaveTextContent(`Email notifications`)}},k={args:{label:`Dark mode`,defaultChecked:!0}},A={tags:[`!dev`],render:e=>(0,f.jsxs)(`form`,{"aria-label":`Preferences`,style:g,onSubmit:e=>e.preventDefault(),children:[(0,f.jsx)(l,{...e,label:`Dark mode`,defaultChecked:!0}),(0,f.jsx)(a,{type:`submit`,size:`sm`,children:`Save`})]})},j=[`Default`,`Variants`,`Sizes`,`WithHelperText`,`Validation`,`RightToLeft`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoApplyAtOnce`,`DontWaitForSave`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const control = canvas.getByRole('switch', {
      name: 'Email notifications'
    });
    await expect(control).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(control);
    await expect(control).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    // Clicking the label toggles it too.
    await userEvent.click(canvas.getByText('Email notifications'));
    await expect(control).toHaveAttribute('aria-checked', 'false');
    // Space toggles from the keyboard.
    await userEvent.keyboard(' ');
    await expect(control).toHaveAttribute('aria-checked', 'true');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'destructive'] as const).map(variant => <Switch key={variant} {...args} variant={variant} label={variant} defaultChecked />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <Switch key={size} {...args} size={size} label={size} defaultChecked />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const widths = ['sm', 'md', 'lg'].map(n => canvas.getByRole('switch', {
      name: n
    }).getBoundingClientRect().width);
    await expect(widths).toEqual([28, 36, 44]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'A summary once a day, never more.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('switch')).toHaveAccessibleDescription('A summary once a day, never more.');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Switch {...args} label="Accept the terms" validationState="error" helperText="Required to continue." required />
      <Switch {...args} label="Backups" validationState="success" helperText="Backups are on." defaultChecked />
    </div>,
  play: async ({
    canvas
  }) => {
    const terms = canvas.getByRole('switch', {
      name: /Accept the terms/
    });
    await expect(terms).toHaveAttribute('aria-invalid', 'true');
    await expect(terms).toHaveAccessibleDescription('Required to continue.');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  render: args => <div dir="rtl" style={{
    display: 'grid',
    gap: 'var(--space-3)',
    justifyItems: 'start'
  }}>
      <Switch {...args} label="Right to left" />
      {/* A left-to-right island inside a right-to-left page. */}
      <div dir="ltr">
        <Switch {...args} label="Left to right" />
      </div>
    </div>,
  play: async ({
    canvas
  }) => {
    const gaps = (name: string) => {
      const sw = canvas.getByRole('switch', {
        name
      });
      const track = sw.getBoundingClientRect();
      const thumb = sw.firstElementChild!.getBoundingClientRect();
      return {
        start: thumb.left - track.left,
        end: track.right - thumb.right
      };
    };
    // On is the end side: the left in RTL, the right in LTR. The thumb stays inside.
    const rtl = gaps('Right to left');
    await expect(rtl.start).toBeGreaterThanOrEqual(0);
    await expect(rtl.start).toBeLessThan(rtl.end);
    const ltr = gaps('Left to right');
    await expect(ltr.end).toBeGreaterThanOrEqual(0);
    await expect(ltr.end).toBeLessThan(ltr.start);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Switch {...args} label="Off, disabled" disabled />
      <Switch {...args} label="On, disabled" disabled defaultChecked />
    </div>,
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Off, disabled'
    }));
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultChecked: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const control = canvas.getByRole('switch');
    await userEvent.click(control);
    await expect(control).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [on, setOn] = useState(true);
    return <div style={stack}>
        <Switch {...args} checked={on} onCheckedChange={setOn} />
        <span>{on ? 'Notifications on' : 'Notifications off'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('switch'));
    await expect(canvas.getByText('Notifications off')).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Settings">
      <Switch {...args} name="notify" defaultChecked />
    </form>,
  play: async ({
    canvasElement
  }) => {
    const data = new FormData(canvasElement.querySelector('form')!);
    await expect(data.get('notify')).toBe('on');
  }
}`,...E.parameters?.docs?.source},description:{story:`Submits "on" under its name when on, like a native checkbox.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultChecked: true,
    helperText: 'A summary once a day, never more.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Email notifications');
  }
}`,...O.parameters?.docs?.source},description:{story:`Every part present.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    defaultChecked: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: a switch applies the setting the moment it is flipped.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <form aria-label="Preferences" style={stack} onSubmit={e => e.preventDefault()}>
      <Switch {...args} label="Dark mode" defaultChecked />
      <Button type="submit" size="sm">
        Save
      </Button>
    </form>
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: a switch that waits for a Save button.`,...A.parameters?.docs?.description}}}})))()}export{A as a,x as c,M as d,k as i,v as l,T as n,y as o,_ as r,u as s,O as t,D as u};