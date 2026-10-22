import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./Select-Ehl_mGdv.js";var c=t({Anatomy:()=>O,Controlled:()=>T,Default:()=>g,Disabled:()=>S,DisabledLook:()=>C,DoAHandful:()=>k,DontTwoOptions:()=>A,InAForm:()=>E,Keyboard:()=>_,Loading:()=>x,ReadOnly:()=>w,Sizes:()=>y,Strings:()=>v,Validation:()=>b,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>h}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{l=n(),i(),o(),u=r(),{expect:d,fn:f,screen:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Inputs/Select`,tags:[`beta`],component:s,argTypes:{options:{description:"The choices: strings, or `{ value, label, disabled? }` objects when the label differs from the value or is a node. Required.",control:!1,table:{type:{summary:`string[] | { value: string; label: ReactNode; disabled?: boolean }[]`}}},label:{description:`The visible name, above the field. Clicking it focuses the field without opening it.`,control:`text`,table:{type:{summary:`ReactNode`}}},placeholder:{description:`Shown in the field until something is chosen.`,control:`text`,table:{type:{summary:`string`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. Options are 32px either way.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isLoading:{description:"Options are still arriving: a spinner replaces the chevron, and the field is `aria-busy`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dimmed, out of the tab order, and the list does not open.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`The list opens so the options can be read, but choosing one changes nothing.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:"The chosen value, controlled. `null` is nothing chosen. Pair with `onValueChange`.",control:!1,table:{type:{summary:`string | null`}}},defaultValue:{description:`The starting value, uncontrolled.`,control:!1,table:{type:{summary:`string | null`}}},onValueChange:{description:`Called with the chosen option's value.`,control:!1,table:{type:{summary:`(value: string | null) => void`}}},name:{description:`Submitted with the form, with the chosen value.`,control:!1,table:{type:{summary:`string`}}},autoFocus:{description:`Focuses the field on mount.`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:"The name when there is no visible `label`.",control:!1,table:{type:{summary:`string`}}},ref:{description:"Points at the field's `<button>`.",control:!1,table:{type:{summary:`Ref`}}},id:{description:"The id of the field's `<button>`.",control:!1,table:{type:{summary:`string`}}},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the outer element, the field with its label and helper text.`,control:!1,table:{type:{summary:`string`}}}},args:{label:`Team member`,placeholder:`Choose someone`,options:[{value:`miya`,label:`Miya Burns`},{value:`marlone`,label:`Marlone Thompson`},{value:`phoenix`,label:`Phoenix Hickman`},{value:`angelica`,label:`Angelica Mathews`,disabled:!0},{value:`candice`,label:`Candice Wu`}],onValueChange:f()},excludeStories:[`anatomyParts`]},g={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`,{name:`Team member`});await d(r).toHaveTextContent(`Choose someone`),await t.click(r),await t.click(await p.findByRole(`option`,{name:`Phoenix Hickman`})),await d(n.onValueChange).toHaveBeenLastCalledWith(`phoenix`),await m(()=>d(r).toHaveTextContent(`Phoenix Hickman`)),await m(()=>d(p.queryByRole(`listbox`)).toBeNull()),await t.click(r),await d(await p.findByRole(`option`,{name:`Phoenix Hickman`})).toHaveAttribute(`aria-selected`,`true`),await t.keyboard(`{Escape}`),await m(()=>d(p.queryByRole(`listbox`)).toBeNull())}},_={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`,{name:`Team member`});await t.tab(),await d(r).toHaveFocus(),await t.keyboard(`{ArrowDown}`);let i=await p.findByRole(`listbox`);await m(()=>d(i.contains(document.activeElement)).toBe(!0)),await t.keyboard(`{ArrowDown}{Enter}`),await m(()=>d(n.onValueChange).toHaveBeenCalled()),await m(()=>d(p.queryByRole(`listbox`)).toBeNull()),await d(r).toHaveFocus()}},v={args:{label:`Size`,placeholder:`Pick a size`,options:[`Small`,`Medium`,`Large`],defaultValue:`Medium`},play:async({canvas:e})=>{await d(e.getByRole(`combobox`,{name:`Size`})).toHaveTextContent(`Medium`)}},y={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,u.jsx)(s,{...e,size:t,label:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`].map(t=>e.getByRole(`combobox`,{name:t}).getBoundingClientRect().height);await d(t).toEqual([24,32])}},b={args:{validationState:`error`,helperText:`Choose someone to assign.`,required:!0},play:async({canvas:e})=>{let t=e.getByRole(`combobox`,{name:/Team member/});await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toHaveAccessibleDescription(`Choose someone to assign.`),await d(t).toHaveAttribute(`aria-required`,`true`),await d(e.getByText(`Team member`).tagName).toBe(`DIV`)}},x={args:{isLoading:!0},play:async({canvas:e})=>{await d(e.getByRole(`combobox`)).toHaveAttribute(`aria-busy`,`true`)}},S={args:{disabled:!0,defaultValue:`miya`},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await d(p.queryByRole(`listbox`)).toBeNull()}},C={args:{disabled:!0},play:async({canvas:e})=>{await d(getComputedStyle(e.getByRole(`combobox`)).opacity).toBe(`0.5`)}},w={args:{readOnly:!0,defaultValue:`miya`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`combobox`);await d(r).toHaveAttribute(`aria-readonly`,`true`),await t.click(r),await t.click(await p.findByRole(`option`,{name:`Candice Wu`})),await t.keyboard(`{Escape}`),await m(()=>d(p.queryByRole(`listbox`)).toBeNull()),await d(n.onValueChange).not.toHaveBeenCalled(),await d(r).toHaveTextContent(`Miya Burns`)}},T={render:function(e){let[t,n]=(0,l.useState)(`miya`);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,u.jsx)(s,{...e,value:t,onValueChange:n}),(0,u.jsxs)(`span`,{children:[`Assigned: `,t??`nobody`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`combobox`)),await t.click(await p.findByRole(`option`,{name:`Candice Wu`})),await d(e.getByText(`Assigned: candice`)).toBeVisible(),await m(()=>d(p.queryByRole(`listbox`)).toBeNull())}},E={render:e=>(0,u.jsx)(`form`,{"aria-label":`Assign`,children:(0,u.jsx)(s,{...e,name:`assignee`,defaultValue:`marlone`})}),play:async({canvasElement:e})=>{await d(new FormData(e.querySelector(`form`)).get(`assignee`)).toBe(`marlone`)}},D=[{name:`Label`,selector:`div:has(+ [role="combobox"])`,description:`Names the field. Clicking it focuses the field without opening the list.`},{name:`Container`,selector:`[role="combobox"]`,description:`The field: a button that opens the list, with the edge, fill and focus ring.`},{name:`Value`,selector:`[role="combobox"] > span:first-child`,description:`The chosen option's label, or the placeholder.`},{name:`Chevron`,selector:`[role="combobox"] > span:last-child`,description:"Points at the list. A spinner while `isLoading`."},{name:`Helper text`,selector:`[role="combobox"] ~ p`,description:`The field's description. The error message when invalid.`}],O={tags:[`!dev`],args:{defaultValue:`phoenix`,helperText:`They get an email when assigned.`},play:async({canvasElement:e})=>{let t=await a(e,D);await d(t[0]).toHaveTextContent(`Team member`),await d(t[2]).toHaveTextContent(`Phoenix Hickman`)}},k={args:{label:`Priority`,placeholder:`Choose a priority`,options:[`Low`,`Medium`,`High`,`Urgent`]}},A={tags:[`!dev`],args:{label:`Notifications`,placeholder:void 0,options:[`On`,`Off`],defaultValue:`On`}},j=[`Default`,`Keyboard`,`Strings`,`Sizes`,`Validation`,`Loading`,`Disabled`,`DisabledLook`,`ReadOnly`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoAHandful`,`DontTwoOptions`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    // Reopened, the chosen option is the selected one.
    await userEvent.click(trigger);
    await expect(await screen.findByRole('option', {
      name: 'Phoenix Hickman'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    const listbox = await screen.findByRole('listbox');
    // Keys go to the list only once focus has moved into it; WebKit is slower to get there.
    await waitFor(() => expect(listbox.contains(document.activeElement)).toBe(true));
    // Arrow down past the first option, skip the disabled one, Enter selects.
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalled());
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <Select key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md'].map(n => canvas.getByRole('combobox', {
      name: n
    }).getBoundingClientRect().height);
    await expect(heights).toEqual([24, 32]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    await expect(trigger).toHaveAttribute('aria-required', 'true');
    // The label is a <div>, so clicking it cannot also click the button.
    await expect(canvas.getByText('Team member').tagName).toBe('DIV');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('combobox')).toHaveAttribute('aria-busy', 'true');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    // The trigger is the field box, so it dims itself.
    await expect(getComputedStyle(canvas.getByRole('combobox')).opacity).toBe('0.5');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Assign">
      <Select {...args} name="assignee" defaultValue="marlone" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('assignee')).toBe('marlone');
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: 'phoenix',
    helperText: 'They get an email when assigned.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Team member');
    await expect(found[2]).toHaveTextContent('Phoenix Hickman');
  }
}`,...O.parameters?.docs?.source},description:{story:`Every part present.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    placeholder: 'Choose a priority',
    options: ['Low', 'Medium', 'High', 'Urgent']
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: a handful of options people pick from.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Notifications',
    placeholder: undefined,
    options: ['On', 'Off'],
    defaultValue: 'On'
  }
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: two options hide one behind a click; a Switch or radios show both.`,...A.parameters?.docs?.description}}}})))()}export{c as a,D as c,A as i,M as l,g as n,y as o,k as r,b as s,O as t};