import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./Select-oNuK5AvO.js";var o=t({Appearances:()=>v,Controlled:()=>w,Default:()=>m,Disabled:()=>x,DisabledLook:()=>S,InAForm:()=>T,Keyboard:()=>h,Loading:()=>b,ReadOnly:()=>C,Sizes:()=>_,Strings:()=>g,Validation:()=>y,__namedExportsOrder:()=>E,default:()=>p}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{s=r(),i(),c=n(),{expect:l,fn:u,screen:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Inputs/Select`,component:a,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`outlined`,`filled`,`underlined`,`unstyled`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Team member`,placeholder:`Choose someone`,options:[{value:`miya`,label:`Miya Burns`},{value:`marlone`,label:`Marlone Thompson`},{value:`phoenix`,label:`Phoenix Hickman`},{value:`angelica`,label:`Angelica Mathews`,disabled:!0},{value:`candice`,label:`Candice Wu`}],onValueChange:u()}},m={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`,{name:`Team member`});await l(r).toHaveTextContent(`Choose someone`),await t.click(r),await t.click(await d.findByRole(`option`,{name:`Phoenix Hickman`})),await l(n.onValueChange).toHaveBeenLastCalledWith(`phoenix`),await f(()=>l(r).toHaveTextContent(`Phoenix Hickman`)),await f(()=>l(d.queryByRole(`listbox`)).toBeNull())}},h={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`,{name:`Team member`});await t.tab(),await l(r).toHaveFocus(),await t.keyboard(`{ArrowDown}`),await d.findByRole(`listbox`),await t.keyboard(`{ArrowDown}{Enter}`),await f(()=>l(n.onValueChange).toHaveBeenCalled()),await f(()=>l(d.queryByRole(`listbox`)).toBeNull()),await l(r).toHaveFocus()}},g={args:{label:`Size`,placeholder:`Pick a size`,options:[`Small`,`Medium`,`Large`],defaultValue:`Medium`},play:async({canvas:e})=>{await l(e.getByRole(`combobox`,{name:`Size`})).toHaveTextContent(`Medium`)}},_={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`,`lg`].map(t=>(0,c.jsx)(a,{...e,size:t,label:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>e.getByRole(`combobox`,{name:t}).getBoundingClientRect().height);await l(t).toEqual([32,40,48])}},v={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`outlined`,`filled`,`underlined`,`unstyled`].map(t=>(0,c.jsx)(a,{...e,appearance:t,label:t,defaultValue:`marlone`},t))})},y={args:{validationState:`error`,helperText:`Choose someone to assign.`,required:!0},play:async({canvas:e})=>{let t=e.getByRole(`combobox`,{name:/Team member/});await l(t).toHaveAttribute(`aria-invalid`,`true`),await l(t).toHaveAccessibleDescription(`Choose someone to assign.`)}},b={args:{isLoading:!0},play:async({canvas:e})=>{await l(e.getByRole(`combobox`)).toHaveAttribute(`aria-busy`,`true`)}},x={args:{disabled:!0,defaultValue:`miya`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await l(d.queryByRole(`listbox`)).toBeNull()}},S={args:{disabled:!0},play:async({canvas:e})=>{await l(getComputedStyle(e.getByRole(`combobox`)).opacity).toBe(`0.5`)}},C={args:{readOnly:!0,defaultValue:`miya`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`);await l(r).toHaveAttribute(`aria-readonly`,`true`),await t.click(r),await t.click(await d.findByRole(`option`,{name:`Candice Wu`})),await t.keyboard(`{Escape}`),await f(()=>l(d.queryByRole(`listbox`)).toBeNull()),await l(n.onValueChange).not.toHaveBeenCalled(),await l(r).toHaveTextContent(`Miya Burns`)}},w={render:function(e){let[t,n]=(0,s.useState)(`miya`);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,c.jsx)(a,{...e,value:t,onValueChange:n}),(0,c.jsxs)(`span`,{children:[`Assigned: `,t??`nobody`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await t.click(await d.findByRole(`option`,{name:`Candice Wu`})),await l(e.getByText(`Assigned: candice`)).toBeVisible(),await f(()=>l(d.queryByRole(`listbox`)).toBeNull())}},T={render:e=>(0,c.jsx)(`form`,{"aria-label":`Assign`,children:(0,c.jsx)(a,{...e,name:`assignee`,defaultValue:`marlone`})}),play:async({canvasElement:e})=>{await l(new FormData(e.querySelector(`form`)).get(`assignee`)).toBe(`marlone`)}},E=[`Default`,`Keyboard`,`Strings`,`Sizes`,`Appearances`,`Validation`,`Loading`,`Disabled`,`DisabledLook`,`ReadOnly`,`Controlled`,`InAForm`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const trigger = canvas.getByRole('combobox', {
      name: 'Team member'
    });
    await expect(trigger).toHaveTextContent('Choose someone');
    await userEvent.click(trigger);
    // The list renders in a portal at the end of <body>.
    await userEvent.click(await screen.findByRole('option', {
      name: 'Phoenix Hickman'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith('phoenix');
    await waitFor(() => expect(trigger).toHaveTextContent('Phoenix Hickman'));
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const trigger = canvas.getByRole('combobox', {
      name: 'Team member'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await screen.findByRole('listbox');
    // Arrow down past the first option, skip the disabled one, Enter selects.
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalled());
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Size',
    placeholder: 'Pick a size',
    options: ['Small', 'Medium', 'Large'],
    defaultValue: 'Medium'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('combobox', {
      name: 'Size'
    })).toHaveTextContent('Medium');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Select key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md', 'lg'].map(n => canvas.getByRole('combobox', {
      name: n
    }).getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['outlined', 'filled', 'underlined', 'unstyled'] as const).map(appearance => <Select key={appearance} {...args} appearance={appearance} label={appearance} defaultValue="marlone" />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Choose someone to assign.',
    required: true
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('combobox', {
      name: /Team member/
    });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(trigger).toHaveAccessibleDescription('Choose someone to assign.');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('combobox')).toHaveAttribute('aria-busy', 'true');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'miya'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(screen.queryByRole('listbox')).toBeNull();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    // The trigger is the field box, so it dims itself.
    await expect(getComputedStyle(canvas.getByRole('combobox')).opacity).toBe('0.5');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'miya'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    // Base UI's readOnly locks the value, not the popup: it still opens so
    // the options can be read, but choosing one changes nothing.
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toHaveAttribute('aria-readonly', 'true');
    await userEvent.click(trigger);
    await userEvent.click(await screen.findByRole('option', {
      name: 'Candice Wu'
    }));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await expect(trigger).toHaveTextContent('Miya Burns');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [who, setWho] = useState<string | null>('miya');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <Select {...args} value={who} onValueChange={setWho} />
        <span>Assigned: {who ?? 'nobody'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('combobox'));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Candice Wu'
    }));
    await expect(canvas.getByText('Assigned: candice')).toBeVisible();
    // The a11y check runs as soon as play returns. Until the exit transition
    // ends, the closing popup keeps Base UI's focus guards (aria-hidden,
    // tabindex=0) without its modal state, which axe reports as
    // aria-hidden-focus. Wait for it to finish closing.
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Assign">
      <Select {...args} name="assignee" defaultValue="marlone" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('assignee')).toBe('marlone');
  }
}`,...T.parameters?.docs?.source}}}})))()}export{D as a,_ as i,m as n,o as r,v as t};