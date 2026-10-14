import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-CUvRSo4U.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s=`_divider_64zw6_5`,c=`_horizontal_64zw6_12`,l=`_vertical_64zw6_20`,u=`_sm_64zw6_27`,d=`_md_64zw6_31`,f=`_lg_64zw6_35`,p=`_dashed_64zw6_4`,m=`_inset_64zw6_43`,h={divider:s,horizontal:c,vertical:l,sm:u,md:d,lg:f,dashed:p,inset:m}})))()}function _({orientation:e=`horizontal`,inset:t=!1,size:n=`sm`,appearance:i=`solid`,className:a,...o}){return(0,v.jsx)(`hr`,{"aria-orientation":e===`vertical`?`vertical`:void 0,className:r(h.divider,h[e],h[n],h[i],t&&h.inset,a),...o})}var v;function y(){return(y=e((()=>{n(),g(),v=i(),_.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},inset:{required:!1,tsType:{name:`boolean`},description:`Indents both ends so the line stops short of its container's edges.`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Line thickness: 1px, 2px, 4px.`,defaultValue:{value:`'sm'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dashed'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`}]},description:"uiguideline calls this `variant`; renamed because `variant` means color here.",defaultValue:{value:`'solid'`,computed:!1}}},composes:[`ComponentProps`]}})))()}var b=t({Anatomy:()=>F,Dashed:()=>k,Decorative:()=>N,Default:()=>T,DoDivideGroups:()=>I,DontDivideEveryItem:()=>L,Inset:()=>A,Sizes:()=>D,Vertical:()=>E,VerticalDashed:()=>j,VerticalInset:()=>M,VerticalSizes:()=>O,__namedExportsOrder:()=>R,anatomyParts:()=>P,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{a(),y(),x=i(),{expect:S}=__STORYBOOK_MODULE_TEST__,C={display:`grid`,gap:`var(--space-2)`,inlineSize:`12rem`},w={title:`Components/Atomic Elements/Divider`,tags:[`beta`],component:_,argTypes:{orientation:{description:`Horizontal between stacked blocks; vertical between items in a row, where it stretches to the row.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`'horizontal' | 'vertical'`},defaultValue:{summary:`'horizontal'`}}},inset:{description:`Indents both ends so the line stops short of its container: 16px horizontal, 8px vertical.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},size:{description:`Line thickness: 1px, 2px or 4px.`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'sm'`}}},appearance:{description:"Line style. The spec's `variant`: here `variant` always means colour.",control:`inline-radio`,options:[`solid`,`dashed`],table:{type:{summary:`'solid' | 'dashed'`},defaultValue:{summary:`'solid'`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{args:t,parameters:n})=>n.bare?(0,x.jsx)(e,{}):t.orientation===`vertical`?(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,height:`var(--space-12)`},children:[(0,x.jsx)(`span`,{children:`Left`}),(0,x.jsx)(e,{}),(0,x.jsx)(`span`,{children:`Right`})]}):(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,x.jsx)(`span`,{children:`Above`}),(0,x.jsx)(e,{}),(0,x.jsx)(`span`,{children:`Below`})]})]},T={play:async({canvas:e})=>{let t=e.getByRole(`separator`);await S(t).not.toHaveAttribute(`aria-orientation`),await S(getComputedStyle(t).borderTopWidth).toBe(`1px`)}},E={args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getByRole(`separator`);await S(t).toHaveAttribute(`aria-orientation`,`vertical`),await S(t.getBoundingClientRect().height).toBeGreaterThan(0)}},D={render:e=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{...e,size:`sm`}),(0,x.jsx)(_,{...e,size:`md`}),(0,x.jsx)(_,{...e,size:`lg`})]}),play:async({canvas:e})=>{let t=e.getAllByRole(`separator`).map(e=>getComputedStyle(e).borderTopWidth);await S(t).toEqual([`1px`,`2px`,`4px`])}},O={...D,args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getAllByRole(`separator`);await S(t.map(e=>getComputedStyle(e).borderLeftWidth)).toEqual([`1px`,`2px`,`4px`]),await S(t.map(e=>e.getBoundingClientRect().width)).toEqual([1,2,4])}},k={args:{appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await S(getComputedStyle(e.getByRole(`separator`)).borderTopStyle).toBe(`dashed`)}},A={args:{inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await S(t.getBoundingClientRect().width).toBeLessThan(n.width)}},j={args:{orientation:`vertical`,appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await S(getComputedStyle(e.getByRole(`separator`)).borderLeftStyle).toBe(`dashed`)}},M={args:{orientation:`vertical`,inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await S(t.getBoundingClientRect().height).toBeLessThan(n.height)}},N={args:{orientation:`vertical`,"aria-hidden":!0},play:async({canvas:e,canvasElement:t})=>{await S(e.queryByRole(`separator`)).toBeNull(),await S(t.querySelector(`hr`)).toBeVisible()}},P=[{name:`Line`,selector:`hr`,description:`An <hr>, drawn as a border in the border colour.`}],F={tags:[`!dev`],args:{size:`lg`},parameters:{bare:!0},render:e=>(0,x.jsx)(`div`,{style:{inlineSize:`16rem`},children:(0,x.jsx)(_,{...e})}),play:async({canvasElement:e})=>{await o(e,P)}},I={parameters:{bare:!0},render:e=>(0,x.jsxs)(`div`,{style:C,children:[(0,x.jsx)(`span`,{children:`Profile`}),(0,x.jsx)(`span`,{children:`Settings`}),(0,x.jsx)(_,{...e}),(0,x.jsx)(`span`,{children:`Sign out`})]}),play:async({canvas:e})=>{await S(e.getAllByRole(`separator`)).toHaveLength(1)}},L={tags:[`!dev`],parameters:{bare:!0},render:e=>(0,x.jsxs)(`div`,{style:C,children:[(0,x.jsx)(`span`,{children:`Profile`}),(0,x.jsx)(_,{...e}),(0,x.jsx)(`span`,{children:`Settings`}),(0,x.jsx)(_,{...e}),(0,x.jsx)(`span`,{children:`Sign out`})]})},R=[`Default`,`Vertical`,`Sizes`,`VerticalSizes`,`Dashed`,`Inset`,`VerticalDashed`,`VerticalInset`,`Decorative`,`anatomyParts`,`Anatomy`,`DoDivideGroups`,`DontDivideEveryItem`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    // Horizontal is the implicit orientation of <hr>; saying it again is noise.
    await expect(divider).not.toHaveAttribute('aria-orientation');
    await expect(getComputedStyle(divider).borderTopWidth).toBe('1px');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'dashed',
    size: 'md'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderTopStyle).toBe('dashed');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`Between two icons already grouped, the line is decoration: hidden, not announced.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`The thickest line, so the marker has something to point at.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Guidelines, Do: one divider between two groups.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Don't: a line after every item turns the list into stripes.`,...L.parameters?.docs?.description}}}})))()}export{I as a,D as c,z as d,_ as f,b as i,E as l,k as n,L as o,y as p,T as r,A as s,F as t,P as u};