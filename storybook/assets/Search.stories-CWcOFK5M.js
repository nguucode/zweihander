import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C8IlC69p.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./Search-ESZiVGsy.js";import{n as u,t as d}from"./TextInput-BLOoJTSm.js";var f=t({Anatomy:()=>O,Clear:()=>y,Controlled:()=>x,Default:()=>v,Disabled:()=>T,DoSaySearchWhat:()=>k,DontTextInputWithIcon:()=>A,EscapeClears:()=>b,FullWidth:()=>w,ReadOnly:()=>E,Sizes:()=>C,WithLabel:()=>S,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>_}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{p=n(),o(),i(),c(),u(),m=r(),{expect:h,fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Inputs/Search`,tags:[`beta`],component:l,argTypes:{placeholder:{description:'What can be searched, e.g. "Search components". Not a name: the field is named by `label` or `aria-label`.',control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search'`}}},label:{description:"An optional visible label, above the field. Without one, `aria-label` names it.",control:`text`,table:{type:{summary:`ReactNode`}}},"aria-label":{description:"The name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Search'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. Match the toolbar or form it sits in.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, no clear button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: the query can be read and copied, not changed. No clear button.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:"The query, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting query, uncontrolled.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`''`}}},onChange:{description:`The native change event, also fired when the clear button or Escape empties the field.`,control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLInputElement>) => void`}}}},args:{onChange:g()},excludeStories:[`anatomyParts`]},v={play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`searchbox`,{name:`Search`});await h(r).toHaveAttribute(`placeholder`,`Search`),await h(t.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await n.type(r,`badge`),await h(r).toHaveValue(`badge`)}},y={args:{defaultValue:`tooltip`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`searchbox`);await t.click(e.getByRole(`button`,{name:`Clear search`})),await h(r).toHaveValue(``),await h(r).not.toHaveFocus(),await h(n.onChange).toHaveBeenCalled(),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await t.type(r,`modal`),await t.tab(),await h(e.getByRole(`button`,{name:`Clear search`})).toHaveFocus(),await t.keyboard(`{Enter}`),await h(r).toHaveValue(``),await h(r).toHaveFocus()}},b={args:{defaultValue:`modal`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`searchbox`);await t.click(n),await t.keyboard(`{Escape}`),await h(n).toHaveValue(``)}},x={render:function(e){let[t,n]=(0,p.useState)(`card`);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,m.jsx)(l,{...e,value:t,onChange:e=>n(e.target.value)}),(0,m.jsxs)(`span`,{children:[`Query: “`,t,`”`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Clear search`})),await h(e.getByText(`Query: “”`)).toBeVisible(),await t.type(e.getByRole(`searchbox`),`tag`),await h(e.getByText(`Query: “tag”`)).toBeVisible()}},S={args:{label:`Find a component`},play:async({canvas:e})=>{await h(e.getByRole(`searchbox`,{name:`Find a component`})).toBeVisible()}},C={render:e=>(0,m.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,m.jsx)(l,{...e,size:t,"aria-label":`Search ${t}`,defaultValue:`query`},t))})},w={args:{isFullWidth:!0}},T={args:{disabled:!0,defaultValue:`locked`},play:async({canvas:e})=>{await h(e.getByRole(`searchbox`)).toBeDisabled(),await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},E={args:{readOnly:!0,defaultValue:`fixed`},play:async({canvas:e})=>{await h(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},D=[{name:`Label`,selector:`label`,description:'Optional. Without it, the field is named "Search" or by `aria-label`.'},{name:`Container`,selector:`span:has(> input)`,description:`The box: edge, fill and focus ring.`},{name:`Search icon`,selector:`span:has(> input) > span:first-child`,description:`Decorative: hidden from screen readers.`},{name:`Input`,selector:`input`,description:`The query, or the placeholder while empty.`},{name:`Clear button`,selector:`button`,description:`Shown while there is a query, unless disabled or read-only. Named "Clear search".`}],O={tags:[`!dev`],args:{label:`Find a component`,defaultValue:`tooltip`},play:async({canvasElement:e})=>{let t=await s(e,D);await h(t[4]).toHaveAccessibleName(`Clear search`)}},k={args:{placeholder:`Search components`}},A={tags:[`!dev`],render:()=>(0,m.jsx)(d,{"aria-label":`Search`,placeholder:`Search components`,prefix:(0,m.jsx)(a,{name:`search`}),defaultValue:`tool`})},j=[`Default`,`Clear`,`EscapeClears`,`Controlled`,`WithLabel`,`Sizes`,`FullWidth`,`Disabled`,`ReadOnly`,`anatomyParts`,`Anatomy`,`DoSaySearchWhat`,`DontTextInputWithIcon`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    label: 'Find a component'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox', {
      name: 'Find a component'
    })).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <Search key={size} {...args} size={size} aria-label={\`Search \${size}\`} defaultValue="query" />)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox')).toBeDisabled();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Every part present: a label, and a query so the clear button shows.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search components'
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: the placeholder says what is searched.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <TextInput aria-label="Search" placeholder="Search components" prefix={<Icon name="search" />} defaultValue="tool" />
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: a Text Input with a search icon is not a search field.`,...A.parameters?.docs?.description}}}})))()}export{f as a,D as c,A as i,M as l,y as n,C as o,k as r,S as s,O as t};