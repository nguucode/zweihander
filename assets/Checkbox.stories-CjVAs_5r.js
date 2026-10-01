import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./Checkbox-DpPD95_V.js";var o=t({AutoFocus:()=>x,Default:()=>p,Disabled:()=>y,InAForm:()=>S,Indeterminate:()=>g,ReadOnly:()=>b,SelectAll:()=>_,Validation:()=>v,Variants:()=>m,WithHelperText:()=>h,__namedExportsOrder:()=>C,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{s=r(),i(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Controls/Checkbox`,component:a,parameters:{a11y:{test:`error`}},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`secondary`,`neutral`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Remember me`,onCheckedChange:u()}},f={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},p={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`checkbox`,{name:`Remember me`});await l(r).not.toBeChecked(),await t.click(r),await l(r).toBeChecked(),await l(n.onCheckedChange).toHaveBeenLastCalledWith(!0),await t.click(e.getByText(`Remember me`)),await l(r).not.toBeChecked(),await t.keyboard(` `),await l(r).toBeChecked()}},m={render:e=>(0,c.jsx)(`div`,{style:f,children:[`neutral`,`primary`,`secondary`].map(t=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-6)`},children:[(0,c.jsx)(a,{...e,variant:t,label:`${t}, off`}),(0,c.jsx)(a,{...e,variant:t,label:`${t}, on`,defaultChecked:!0}),(0,c.jsx)(a,{...e,variant:t,label:`${t}, mixed`,isIndeterminate:!0})]},t))})},h={args:{helperText:`Save my login details for next time.`},play:async({canvas:e})=>{await l(e.getByRole(`checkbox`)).toHaveAccessibleDescription(`Save my login details for next time.`)}},g={args:{isIndeterminate:!0,label:`Select all`},play:async({canvas:e})=>{await l(e.getByRole(`checkbox`)).toHaveAttribute(`aria-checked`,`mixed`)}},_={render:function(e){let[t,n]=(0,s.useState)({Email:!0,SMS:!1,Push:!1}),r=Object.values(t),i=r.every(Boolean),o=r.some(Boolean);return(0,c.jsxs)(`div`,{style:f,children:[(0,c.jsx)(a,{...e,label:`All channels`,checked:i,isIndeterminate:o&&!i,onCheckedChange:e=>n({Email:e,SMS:e,Push:e})}),(0,c.jsx)(`div`,{style:{...f,paddingInlineStart:`var(--space-6)`},children:Object.entries(t).map(([e,r])=>(0,c.jsx)(a,{label:e,checked:r,onCheckedChange:r=>n({...t,[e]:r})},e))})]})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`checkbox`,{name:`All channels`});await l(n).toHaveAttribute(`aria-checked`,`mixed`),await t.click(n),await l(e.getByRole(`checkbox`,{name:`Push`})).toBeChecked(),await l(n).toHaveAttribute(`aria-checked`,`true`)}},v={render:e=>(0,c.jsxs)(`div`,{style:f,children:[(0,c.jsx)(a,{...e,label:`I accept the terms`,validationState:`error`,helperText:`Accept the terms to continue.`,required:!0}),(0,c.jsx)(a,{...e,label:`Newsletter`,validationState:`success`,helperText:`Subscribed.`,defaultChecked:!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`checkbox`,{name:/I accept the terms/});await l(t).toHaveAttribute(`aria-invalid`,`true`),await l(t).toHaveAccessibleDescription(`Accept the terms to continue.`)}},y={render:e=>(0,c.jsxs)(`div`,{style:f,children:[(0,c.jsx)(a,{...e,label:`Off, disabled`,disabled:!0}),(0,c.jsx)(a,{...e,label:`On, disabled`,disabled:!0,defaultChecked:!0})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`checkbox`,{name:`Off, disabled`})),await l(n.onCheckedChange).not.toHaveBeenCalled()}},b={args:{readOnly:!0,defaultChecked:!0},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`checkbox`)),await l(e.getByRole(`checkbox`)).toBeChecked(),await l(n.onCheckedChange).not.toHaveBeenCalled()}},x={args:{autoFocus:!0},play:async({canvas:e})=>{await l(e.getByRole(`checkbox`)).toHaveFocus()}},S={render:e=>(0,c.jsx)(`form`,{"aria-label":`Login`,children:(0,c.jsx)(a,{...e,name:`remember`,value:`yes`,defaultChecked:!0})}),play:async({canvasElement:e})=>{await l(new FormData(e.querySelector(`form`)).get(`remember`)).toBe(`yes`)}},C=[`Default`,`Variants`,`WithHelperText`,`Indeterminate`,`SelectAll`,`Validation`,`Disabled`,`ReadOnly`,`AutoFocus`,`InAForm`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['neutral', 'primary', 'secondary'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: 'var(--space-6)'
    }}>
          <Checkbox {...args} variant={variant} label={\`\${variant}, off\`} />
          <Checkbox {...args} variant={variant} label={\`\${variant}, on\`} defaultChecked />
          <Checkbox {...args} variant={variant} label={\`\${variant}, mixed\`} isIndeterminate />
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Save my login details for next time.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAccessibleDescription('Save my login details for next time.');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Select all'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The usual job of indeterminate: a parent that reflects its children.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('checkbox')).toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Login">
      <Checkbox {...args} name="remember" value="yes" defaultChecked />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('remember')).toBe('yes');
  }
}`,...S.parameters?.docs?.source}}}})))()}export{m as a,v as i,p as n,w as o,_ as r,o as t};