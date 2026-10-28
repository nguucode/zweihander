import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C9aTyDDd.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{r as c,t as l}from"./TextInput-vfco79YG.js";import{n as u,t as d}from"./Search-DLU6gPnk.js";var f=t({Anatomy:()=>k,Clear:()=>y,Controlled:()=>x,Default:()=>v,Disabled:()=>E,DoSaySearchWhat:()=>A,DontTextInputWithIcon:()=>j,EscapeClears:()=>b,FullWidth:()=>T,ReadOnly:()=>D,Shortcut:()=>S,Sizes:()=>w,WithLabel:()=>C,__namedExportsOrder:()=>M,anatomyParts:()=>O,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{p=n(),o(),i(),u(),c(),m=r(),{expect:h,fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Inputs/Search`,tags:[`beta`],component:d,argTypes:{placeholder:{description:'What can be searched, e.g. "Search components". Not a name: the field is named by `label` or `aria-label`.',control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search'`}}},label:{description:"An optional visible label, above the field. Without one, `aria-label` names it.",control:`text`,table:{type:{summary:`ReactNode`}}},"aria-label":{description:"The name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. Match the toolbar or form it sits in.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, no clear button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: the query can be read and copied, not changed. No clear button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:"The query, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting query, uncontrolled.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`''`}}},shortcut:{description:"One key, e.g. `/`, that focuses the field from anywhere on the page, unless focus is already in a form field. Shown as a key cap while the field is empty and idle. Off while disabled or read-only. No modifiers: ⌘K belongs to the Command Palette. One per page.",control:`text`,table:{type:{summary:`string`}}},onChange:{description:`The native change event, also fired when the clear button or Escape empties the field.`,control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLInputElement>) => void`}}}},args:{onChange:g()},excludeStories:[`anatomyParts`]},v={play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`searchbox`,{name:`Search`});await h(r).toHaveAttribute(`placeholder`,`Search`),await h(t.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await n.type(r,`badge`),await h(r).toHaveValue(`badge`)}},y={args:{defaultValue:`tooltip`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`searchbox`);await t.click(e.getByRole(`button`,{name:`Clear search`})),await h(r).toHaveValue(``),await h(r).not.toHaveFocus(),await h(n.onChange).toHaveBeenCalled(),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await t.type(r,`modal`),await t.tab(),await h(e.getByRole(`button`,{name:`Clear search`})).toHaveFocus(),await t.keyboard(`{Enter}`),await h(r).toHaveValue(``),await h(r).toHaveFocus()}},b={args:{defaultValue:`modal`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`searchbox`);await t.click(n),await t.keyboard(`{Escape}`),await h(n).toHaveValue(``)}},x={render:function(e){let[t,n]=(0,p.useState)(`card`);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,m.jsx)(d,{...e,value:t,onChange:e=>n(e.target.value)}),(0,m.jsxs)(`span`,{children:[`Query: “`,t,`”`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Clear search`})),await h(e.getByText(`Query: “”`)).toBeVisible(),await t.type(e.getByRole(`searchbox`),`tag`),await h(e.getByText(`Query: “tag”`)).toBeVisible()}},S={args:{shortcut:`/`,placeholder:`Search projects`},render:e=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,m.jsx)(d,{...e}),(0,m.jsx)(l,{"aria-label":`Note`})]}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`searchbox`),i=t.querySelector(`span:has(> input) > kbd`);await h(i).toHaveTextContent(`/`),await h(i).toHaveAttribute(`aria-hidden`,`true`),await h(r).toHaveAttribute(`aria-keyshortcuts`,`/`),await h(i).toBeVisible(),await n.click(t),await n.keyboard(`/`),await h(r).toHaveFocus(),await h(r).toHaveValue(``),await h(i).not.toBeVisible(),await n.keyboard(`/a`),await h(r).toHaveValue(`/a`);let a=e.getByRole(`textbox`,{name:`Note`});await n.click(a),await n.keyboard(`/`),await h(a).toHaveValue(`/`),await h(a).toHaveFocus(),await n.click(t);for(let e of[`Control`,`Meta`,`Alt`])await n.keyboard(`{${e}>}/{/${e}}`),await h(r).not.toHaveFocus();await h(r).toHaveValue(`/a`),await h(t.querySelector(`span:has(> input) > kbd`)).toBeNull()}},C={args:{label:`Find a component`},play:async({canvas:e})=>{await h(e.getByRole(`searchbox`,{name:`Find a component`})).toBeVisible()}},w={render:e=>(0,m.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,m.jsx)(d,{...e,size:t,"aria-label":`Search ${t}`,defaultValue:`query`},t))})},T={args:{isFullWidth:!0}},E={args:{disabled:!0,defaultValue:`locked`,shortcut:`/`},play:async({canvas:e})=>{await h(e.getByRole(`searchbox`)).toBeDisabled(),await h(e.getByRole(`searchbox`)).not.toHaveAttribute(`aria-keyshortcuts`),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},D={args:{readOnly:!0,defaultValue:`fixed`},play:async({canvas:e})=>{await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},O=[{name:`Label`,selector:`label`,description:'Optional. Without it, the field is named "Search" or by `aria-label`.'},{name:`Container`,selector:`span:has(> input)`,description:`The box: edge, fill and focus ring.`},{name:`Search icon`,selector:`span:has(> input) > span:first-child`,description:`Decorative: hidden from screen readers.`},{name:`Input`,selector:`input`,description:`The query, or the placeholder while empty.`},{name:`Clear button`,selector:`button`,description:`Shown while there is a query, unless disabled or read-only. Named "Clear search".`}],k={tags:[`!dev`],args:{label:`Find a component`,defaultValue:`tooltip`},play:async({canvasElement:e})=>{let t=await s(e,O);await h(t[4]).toHaveAccessibleName(`Clear search`)}},A={args:{placeholder:`Search components`}},j={tags:[`!dev`],render:()=>(0,m.jsx)(l,{"aria-label":`Search`,placeholder:`Search components`,prefix:(0,m.jsx)(a,{name:`search`}),defaultValue:`tool`})},M=[`Default`,`Clear`,`EscapeClears`,`Controlled`,`Shortcut`,`WithLabel`,`Sizes`,`FullWidth`,`Disabled`,`ReadOnly`,`anatomyParts`,`Anatomy`,`DoSaySearchWhat`,`DontTextInputWithIcon`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const field = canvas.getByRole('searchbox', {
      name: 'Search'
    });
    await expect(field).toHaveAttribute('placeholder', 'Search');
    // The search icon is decorative.
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    // No clear button until there is something to clear.
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
    await userEvent.type(field, 'badge');
    await expect(field).toHaveValue('badge');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tooltip'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const field = canvas.getByRole('searchbox');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(field).toHaveValue('');
    // A pointer press keeps an idle field idle, and onChange hears about it.
    await expect(field).not.toHaveFocus();
    await expect(args.onChange).toHaveBeenCalled();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
    // From the keyboard, focus goes back to the field rather than being lost.
    await userEvent.type(field, 'modal');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Clear search'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(field).toHaveValue('');
    await expect(field).toHaveFocus();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'modal'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const field = canvas.getByRole('searchbox');
    await userEvent.click(field);
    await userEvent.keyboard('{Escape}');
    await expect(field).toHaveValue('');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [q, setQ] = useState('card');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <Search {...args} value={q} onChange={e => setQ(e.target.value)} />
        <span>Query: “{q}”</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(canvas.getByText('Query: “”')).toBeVisible();
    await userEvent.type(canvas.getByRole('searchbox'), 'tag');
    await expect(canvas.getByText('Query: “tag”')).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    shortcut: '/',
    placeholder: 'Search projects'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      <Search {...args} />
      <TextInput aria-label="Note" />
    </div>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const field = canvas.getByRole('searchbox');
    const hint = canvasElement.querySelector('span:has(> input) > kbd')!;
    // Drawn for sight; the key is announced from the input instead.
    await expect(hint).toHaveTextContent('/');
    await expect(hint).toHaveAttribute('aria-hidden', 'true');
    await expect(field).toHaveAttribute('aria-keyshortcuts', '/');
    await expect(hint).toBeVisible();
    // From anywhere on the page, the key focuses the field without typing itself.
    await userEvent.click(canvasElement);
    await userEvent.keyboard('/');
    await expect(field).toHaveFocus();
    await expect(field).toHaveValue('');
    // While focused the hint would be wrong: the key now types.
    await expect(hint).not.toBeVisible();
    await userEvent.keyboard('/a');
    await expect(field).toHaveValue('/a');
    // In another text field the key is left alone.
    const note = canvas.getByRole('textbox', {
      name: 'Note'
    });
    await userEvent.click(note);
    await userEvent.keyboard('/');
    await expect(note).toHaveValue('/');
    await expect(note).toHaveFocus();
    // With a modifier it is not this key.
    await userEvent.click(canvasElement);
    for (const mod of ['Control', 'Meta', 'Alt']) {
      await userEvent.keyboard(\`{\${mod}>}/{/\${mod}}\`);
      await expect(field).not.toHaveFocus();
    }
    // With a query, the clear button takes the hint's place.
    await expect(field).toHaveValue('/a');
    await expect(canvasElement.querySelector('span:has(> input) > kbd')).toBeNull();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Find a component'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox', {
      name: 'Find a component'
    })).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <Search key={size} {...args} size={size} aria-label={\`Search \${size}\`} defaultValue="query" />)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked',
    shortcut: '/'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox')).toBeDisabled();
    await expect(canvas.getByRole('searchbox')).not.toHaveAttribute('aria-keyshortcuts');
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'fixed'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Find a component',
    defaultValue: 'tooltip'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveAccessibleName('Clear search');
  }
}`,...k.parameters?.docs?.source},description:{story:`Every part present: a label, and a query so the clear button shows.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search components'
  }
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Do: the placeholder says what is searched.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput aria-label="Search" placeholder="Search components" prefix={<Icon name="search" />} defaultValue="tool" />
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Don't: a Text Input with a search icon is not a search field.`,...j.parameters?.docs?.description}}}})))()}export{f as a,C as c,j as i,O as l,y as n,S as o,A as r,w as s,k as t,N as u};