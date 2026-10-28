import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Avatar-Br9NGvV-.js";import{n as a,t as o}from"./Link-Bhk0TW_i.js";import{c as s,l as c,u as l}from"./ListItemParts-DR4A9nR3.js";import{n as u,t as d}from"./StackedList-CbCllvYC.js";var f=t({Appearances:()=>A,Card:()=>w,Dark:()=>j,Empty:()=>O,Flat:()=>C,LongContent:()=>k,Separate:()=>T,SeparateStackedList:()=>D,WithStackedList:()=>E,__namedExportsOrder:()=>M,default:()=>S}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{r(),a(),l(),u(),p=n(),{expect:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[`Payment run, October`,`Payment run, November`,`Payment run, December`],b=h(),x=y.map(e=>(0,p.jsx)(c,{children:e},e)),S={title:`Patterns/Application UI/List Container`,tags:[`experimental`],component:s,parameters:{layout:`padded`},args:{children:x,role:`region`,"aria-label":`Payment runs`},argTypes:{children:{description:"The rows: one `ListContainerItem` (an `<li>`) each. What goes in a row is yours.",control:!1},appearance:{description:"`flat`: rows divided by a line, no frame. `card`: the same inside a bordered panel. `separate`: each row its own panel, a gap instead of lines.",control:`inline-radio`,options:[`flat`,`card`,`separate`],table:{type:{summary:`'flat' | 'card' | 'separate'`},defaultValue:{summary:`'flat'`}}},footer:{description:`After the last row, past a divider: a Pagination or a "View all" link. Rendered as given.`,control:!1},empty:{description:`Shown instead of the list when there are no rows.`,control:`text`,table:{defaultValue:{summary:`"Nothing here yet."`}}}},decorators:[e=>(0,p.jsx)(`div`,{style:{maxInlineSize:640},children:(0,p.jsx)(e,{})})]},C={play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Payment runs`});await m(e.getByRole(`list`).tagName).toBe(`UL`);let n=e.getAllByRole(`listitem`);await m(n).toHaveLength(3),await m(getComputedStyle(n[0]).borderTopWidth).toBe(`0px`),await m(getComputedStyle(n[1]).borderTopWidth).toBe(`1px`),await m(getComputedStyle(t).borderTopWidth).toBe(`0px`)}},w={args:{appearance:`card`},play:async({canvas:e})=>{let t=e.getByRole(`region`);await m(getComputedStyle(t).borderTopWidth).toBe(`1px`),await m(getComputedStyle(t).borderTopLeftRadius).not.toBe(`0px`);let n=e.getAllByRole(`listitem`);await m(getComputedStyle(n[0]).borderTopWidth).toBe(`0px`),await m(getComputedStyle(n[1]).borderTopWidth).toBe(`1px`)}},T={args:{appearance:`separate`,role:void 0,"aria-label":void 0},play:async({canvas:e})=>{await m(e.queryByRole(`region`)).toBeNull(),await m(e.getByRole(`list`).parentElement).not.toHaveAttribute(`role`);let t=e.getAllByRole(`listitem`);await m(getComputedStyle(t[0]).borderTopWidth).toBe(`1px`),await m(getComputedStyle(t[0]).borderTopLeftRadius).not.toBe(`0px`),await _(()=>m(t[1].getBoundingClientRect().top).toBeGreaterThan(t[0].getBoundingClientRect().bottom))}},E={args:{children:void 0,appearance:`card`},decorators:[e=>(0,p.jsx)(`div`,{style:{minBlockSize:`16rem`},children:e()})],render:e=>(0,p.jsx)(d,{...e,"aria-label":`Team`,items:[{id:1,media:(0,p.jsx)(i,{initials:`IO`,color:`teal`}),title:`Ines Okafor`,description:`ines.okafor@example.com`,meta:`Finance lead`,href:`#ines`},{id:2,media:(0,p.jsx)(i,{initials:`TL`,color:`violet`}),title:`Tomas Lindqvist`,description:`tomas.lindqvist@example.com`,meta:`Controller`,actions:[{label:`Remove`,isDestructive:!0,onSelect:b}]}],footer:(0,p.jsx)(o,{href:`#team`,children:`View all`})}),play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Team`});await m(getComputedStyle(t).borderTopWidth).toBe(`1px`);let n=e.getByRole(`link`,{name:`View all`}).parentElement;await m(t.contains(n)).toBe(!0),await m(getComputedStyle(n).borderTopWidth).toBe(`1px`),b.mockClear();let r=e.getAllByRole(`listitem`)[1];await m(r.parentElement?.tagName).toBe(`UL`),await g.pointer({keys:`[MouseRight]`,target:r}),await g.click(await v(document.body).findByRole(`menuitem`,{name:`Remove`})),await m(b).toHaveBeenCalled()}},D={...E,args:{children:void 0,appearance:`separate`},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=e.getByRole(`link`,{name:`Ines Okafor`});await m(n.offsetParent).toBe(t[0]),await m(getComputedStyle(t[0]).borderTopWidth).toBe(`1px`),await g.tab(),await m(n).toHaveFocus()}},O={args:{appearance:`card`,children:[],empty:`No payment runs yet.`,footer:(0,p.jsx)(o,{href:`#new`,children:`Start a payment run`})},play:async({canvas:e})=>{await m(e.queryByRole(`list`)).toBeNull(),await m(e.getByText(`No payment runs yet.`)).toBeVisible(),await m(e.getByRole(`link`,{name:`Start a payment run`})).toBeVisible()}},k={args:{appearance:`card`,children:[(0,p.jsx)(c,{children:`maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com`},`long`),...x]},decorators:[e=>(0,p.jsx)(`div`,{style:{inlineSize:300},children:(0,p.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByRole(`region`);await _(()=>m(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth))}},A={render:e=>(0,p.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[`flat`,`card`,`separate`].map(t=>(0,p.jsx)(s,{...e,appearance:t,"aria-label":t,footer:(0,p.jsx)(o,{href:`#all`,children:`View all`})},t))}),play:async({canvas:e})=>{await m(e.getAllByRole(`region`)).toHaveLength(3)}},j={...A,globals:{theme:`dark`}},M=[`Flat`,`Card`,`Separate`,`WithStackedList`,`SeparateStackedList`,`Empty`,`LongContent`,`Appearances`,`Dark`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const region = canvas.getByRole('region', {
      name: 'Payment runs'
    });
    await expect(canvas.getByRole('list').tagName).toBe('UL');
    const li = canvas.getAllByRole('listitem');
    await expect(li).toHaveLength(3);
    // A line between rows, none above the first, no frame.
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('0px');
    await expect(getComputedStyle(li[1]).borderTopWidth).toBe('1px');
    await expect(getComputedStyle(region).borderTopWidth).toBe('0px');
  }
}`,...C.parameters?.docs?.source},description:{story:`Rows divided by a line, no frame: a list in a page section or a panel that already has an edge.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'card'
  },
  play: async ({
    canvas
  }) => {
    const region = canvas.getByRole('region');
    await expect(getComputedStyle(region).borderTopWidth).toBe('1px');
    await expect(getComputedStyle(region).borderTopLeftRadius).not.toBe('0px');
    const li = canvas.getAllByRole('listitem');
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('0px');
    await expect(getComputedStyle(li[1]).borderTopWidth).toBe('1px');
  }
}`,...w.parameters?.docs?.source},description:{story:`The same rows in a bordered panel, for a list that stands on its own on the page.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'separate',
    role: undefined,
    'aria-label': undefined
  },
  play: async ({
    canvas
  }) => {
    // No landmark of its own: the page names the region when it needs one.
    await expect(canvas.queryByRole('region')).toBeNull();
    await expect(canvas.getByRole('list').parentElement).not.toHaveAttribute('role');
    const li = canvas.getAllByRole('listitem');
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('1px');
    await expect(getComputedStyle(li[0]).borderTopLeftRadius).not.toBe('0px');
    await waitFor(() => expect(li[1].getBoundingClientRect().top).toBeGreaterThan(li[0].getBoundingClientRect().bottom));
  }
}`,...T.parameters?.docs?.source},description:{story:`Each row its own panel, with a gap instead of lines: rows that read as separate objects.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    appearance: 'card'
  },
  decorators: [Story => <div style={{
    minBlockSize: '16rem'
  }}>{Story()}</div>],
  render: args => <StackedList {...args} aria-label="Team" items={[{
    id: 1,
    media: <Avatar initials="IO" color="teal" />,
    title: 'Ines Okafor',
    description: 'ines.okafor@example.com',
    meta: 'Finance lead',
    href: '#ines'
  }, {
    id: 2,
    media: <Avatar initials="TL" color="violet" />,
    title: 'Tomas Lindqvist',
    description: 'tomas.lindqvist@example.com',
    meta: 'Controller',
    actions: [{
      label: 'Remove',
      isDestructive: true,
      onSelect: onRemove
    }]
  }]} footer={<Link href="#team">View all</Link>} />,
  play: async ({
    canvas
  }) => {
    const region = canvas.getByRole('region', {
      name: 'Team'
    });
    await expect(getComputedStyle(region).borderTopWidth).toBe('1px');
    // The footer sits inside the panel, past a divider.
    const footer = canvas.getByRole('link', {
      name: 'View all'
    }).parentElement!;
    await expect(region.contains(footer)).toBe(true);
    await expect(getComputedStyle(footer).borderTopWidth).toBe('1px');
    // The row is still the context menu area, and still the list's own <li>.
    onRemove.mockClear();
    const row = canvas.getAllByRole('listitem')[1];
    await expect(row.parentElement?.tagName).toBe('UL');
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: row
    });
    await userEvent.click(await within(document.body).findByRole('menuitem', {
      name: 'Remove'
    }));
    await expect(onRemove).toHaveBeenCalled();
  }
}`,...E.parameters?.docs?.source},description:{story:"Stacked List renders through List Container, so it takes the same `appearance`, `footer` and `empty`. A row with actions keeps its context menu inside the frame.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...WithStackedList,
  args: {
    children: undefined,
    appearance: 'separate'
  },
  play: async ({
    canvas
  }) => {
    const li = canvas.getAllByRole('listitem');
    const link = canvas.getByRole('link', {
      name: 'Ines Okafor'
    });
    await expect(link.offsetParent).toBe(li[0]);
    await expect(getComputedStyle(li[0]).borderTopWidth).toBe('1px');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...D.parameters?.docs?.source},description:{story:`Stacked List with separate panels: the linked row's target and focus ring stay inside each panel.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'card',
    children: [],
    empty: 'No payment runs yet.',
    footer: <Link href="#new">Start a payment run</Link>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByText('No payment runs yet.')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Start a payment run'
    })).toBeVisible();
  }
}`,...O.parameters?.docs?.source},description:{story:`No rows: a line in the panel instead of the list. The footer still shows.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'card',
    children: [<ListContainerItem key="long">maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com</ListContainerItem>, ...items]
  },
  decorators: [Story => <div style={{
    inlineSize: 300
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const region = canvas.getByRole('region');
    await waitFor(() => expect(region.scrollWidth).toBeLessThanOrEqual(region.clientWidth));
  }
}`,...k.parameters?.docs?.source},description:{story:`A word with no spaces in a narrow column breaks rather than overflows.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-6)'
  }}>
      {(['flat', 'card', 'separate'] as const).map(a => <ListContainer key={a} {...args} appearance={a} aria-label={a} footer={<Link href="#all">View all</Link>} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('region')).toHaveLength(3);
  }
}`,...A.parameters?.docs?.source},description:{story:`The three appearances one under the other, for the visual check.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Appearances,
  globals: {
    theme: 'dark'
  }
}`,...j.parameters?.docs?.source},description:{story:`Dark mode, so the accessibility check covers both themes.`,...j.parameters?.docs?.description}}}})))()}export{k as a,E as c,f as i,N as l,O as n,T as o,C as r,D as s,w as t};