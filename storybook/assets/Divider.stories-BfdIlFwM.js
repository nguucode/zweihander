import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{n as a,t as o}from"./Divider-C72TQrwi.js";var s=t({Anatomy:()=>S,Dashed:()=>g,Decorative:()=>b,Default:()=>f,DoDivideGroups:()=>C,DontDivideEveryItem:()=>w,Inset:()=>_,Sizes:()=>m,Vertical:()=>p,VerticalDashed:()=>v,VerticalInset:()=>y,VerticalSizes:()=>h,__namedExportsOrder:()=>T,anatomyParts:()=>x,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),a(),c=n(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={display:`grid`,gap:`var(--space-2)`,inlineSize:`12rem`},d={title:`Components/Atomic Elements/Divider`,tags:[`beta`],component:o,argTypes:{orientation:{description:`Horizontal between stacked blocks; vertical between items in a row, where it stretches to the row.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},inset:{description:`Indents both ends so the line stops short of its container: 16px horizontal, 8px vertical.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{description:`Line thickness: 1px, 2px or 4px.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'sm'`}}},appearance:{description:"Line style. The spec's `variant`: here `variant` always means colour.",control:`inline-radio`,options:[`solid`,`dashed`],table:{type:{summary:`'solid' | 'dashed'`},defaultValue:{summary:`'solid'`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{args:t,parameters:n})=>n.bare?(0,c.jsx)(e,{}):t.orientation===`vertical`?(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,height:`var(--space-12)`},children:[(0,c.jsx)(`span`,{children:`Left`}),(0,c.jsx)(e,{}),(0,c.jsx)(`span`,{children:`Right`})]}):(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,c.jsx)(`span`,{children:`Above`}),(0,c.jsx)(e,{}),(0,c.jsx)(`span`,{children:`Below`})]})]},f={play:async({canvas:e})=>{let t=e.getByRole(`separator`);await l(t).not.toHaveAttribute(`aria-orientation`),await l(getComputedStyle(t).borderTopWidth).toBe(`1px`)}},p={args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getByRole(`separator`);await l(t).toHaveAttribute(`aria-orientation`,`vertical`),await l(t.getBoundingClientRect().height).toBeGreaterThan(0)}},m={render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{...e,size:`sm`}),(0,c.jsx)(o,{...e,size:`md`}),(0,c.jsx)(o,{...e,size:`lg`})]}),play:async({canvas:e})=>{let t=e.getAllByRole(`separator`).map(e=>getComputedStyle(e).borderTopWidth);await l(t).toEqual([`1px`,`2px`,`4px`])}},h={...m,args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getAllByRole(`separator`);await l(t.map(e=>getComputedStyle(e).borderLeftWidth)).toEqual([`1px`,`2px`,`4px`]),await l(t.map(e=>e.getBoundingClientRect().width)).toEqual([1,2,4])}},g={args:{appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await l(getComputedStyle(e.getByRole(`separator`)).borderTopStyle).toBe(`dashed`)}},_={args:{inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await l(t.getBoundingClientRect().width).toBeLessThan(n.width)}},v={args:{orientation:`vertical`,appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await l(getComputedStyle(e.getByRole(`separator`)).borderLeftStyle).toBe(`dashed`)}},y={args:{orientation:`vertical`,inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await l(t.getBoundingClientRect().height).toBeLessThan(n.height)}},b={args:{orientation:`vertical`,"aria-hidden":!0},play:async({canvas:e,canvasElement:t})=>{await l(e.queryByRole(`separator`)).toBeNull(),await l(t.querySelector(`hr`)).toBeVisible()}},x=[{name:`Line`,selector:`hr`,description:`An <hr>, drawn as a border in the border colour.`}],S={tags:[`!dev`],args:{size:`lg`},parameters:{bare:!0},render:e=>(0,c.jsx)(`div`,{style:{inlineSize:`16rem`},children:(0,c.jsx)(o,{...e})}),play:async({canvasElement:e})=>{await i(e,x)}},C={parameters:{bare:!0},render:e=>(0,c.jsxs)(`div`,{style:u,children:[(0,c.jsx)(`span`,{children:`Profile`}),(0,c.jsx)(`span`,{children:`Settings`}),(0,c.jsx)(o,{...e}),(0,c.jsx)(`span`,{children:`Sign out`})]}),play:async({canvas:e})=>{await l(e.getAllByRole(`separator`)).toHaveLength(1)}},w={tags:[`!dev`],parameters:{bare:!0},render:e=>(0,c.jsxs)(`div`,{style:u,children:[(0,c.jsx)(`span`,{children:`Profile`}),(0,c.jsx)(o,{...e}),(0,c.jsx)(`span`,{children:`Settings`}),(0,c.jsx)(o,{...e}),(0,c.jsx)(`span`,{children:`Sign out`})]})},T=[`Default`,`Vertical`,`Sizes`,`VerticalSizes`,`Dashed`,`Inset`,`VerticalDashed`,`VerticalInset`,`Decorative`,`anatomyParts`,`Anatomy`,`DoDivideGroups`,`DontDivideEveryItem`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    // Horizontal is the implicit orientation of <hr>; saying it again is noise.
    await expect(divider).not.toHaveAttribute('aria-orientation');
    await expect(getComputedStyle(divider).borderTopWidth).toBe('1px');
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    await expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    await expect(divider.getBoundingClientRect().height).toBeGreaterThan(0);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Divider {...args} size="sm" />
      <Divider {...args} size="md" />
      <Divider {...args} size="lg" />
    </>,
  play: async ({
    canvas
  }) => {
    const widths = canvas.getAllByRole('separator').map(d => getComputedStyle(d).borderTopWidth);
    await expect(widths).toEqual(['1px', '2px', '4px']);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Sizes,
  args: {
    orientation: 'vertical'
  },
  play: async ({
    canvas
  }) => {
    const dividers = canvas.getAllByRole('separator');
    await expect(dividers.map(d => getComputedStyle(d).borderLeftWidth)).toEqual(['1px', '2px', '4px']);
    // The box is only as wide as its line.
    await expect(dividers.map(d => d.getBoundingClientRect().width)).toEqual([1, 2, 4]);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'dashed',
    size: 'md'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderTopStyle).toBe('dashed');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    inset: true
  },
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    const parent = divider.parentElement!.getBoundingClientRect();
    await expect(divider.getBoundingClientRect().width).toBeLessThan(parent.width);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    appearance: 'dashed',
    size: 'md'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderLeftStyle).toBe('dashed');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    inset: true
  },
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    const row = divider.parentElement!.getBoundingClientRect();
    await expect(divider.getBoundingClientRect().height).toBeLessThan(row.height);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    'aria-hidden': true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.queryByRole('separator')).toBeNull();
    await expect(canvasElement.querySelector('hr')).toBeVisible();
  }
}`,...b.parameters?.docs?.source},description:{story:`Between two icons already grouped, the line is decoration: hidden, not announced.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'lg'
  },
  // Alone, at a width: the marker's leader would otherwise cross the text.
  parameters: {
    bare: true
  },
  render: args => <div style={{
    inlineSize: '16rem'
  }}>
      <Divider {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expectAnatomy(canvasElement, anatomyParts);
  }
}`,...S.parameters?.docs?.source},description:{story:`The thickest line, so the marker has something to point at.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    bare: true
  },
  render: args => <div style={menu}>
      <span>Profile</span>
      <span>Settings</span>
      <Divider {...args} />
      <span>Sign out</span>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1);
  }
}`,...C.parameters?.docs?.source},description:{story:`Guidelines, Do: one divider between two groups.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    bare: true
  },
  render: args => <div style={menu}>
      <span>Profile</span>
      <Divider {...args} />
      <span>Settings</span>
      <Divider {...args} />
      <span>Sign out</span>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Guidelines, Don't: a line after every item turns the list into stripes.`,...w.parameters?.docs?.description}}}})))()}export{C as a,m as c,E as d,s as i,p as l,g as n,w as o,f as r,_ as s,S as t,x as u};