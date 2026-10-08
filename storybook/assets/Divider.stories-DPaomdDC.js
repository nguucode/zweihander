import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=`_divider_15pls_5`,o=`_horizontal_15pls_12`,s=`_vertical_15pls_20`,c=`_sm_15pls_25`,l=`_md_15pls_29`,u=`_lg_15pls_33`,d=`_dashed_15pls_4`,f=`_inset_15pls_41`,p={divider:a,horizontal:o,vertical:s,sm:c,md:l,lg:u,dashed:d,inset:f}})))()}function h({orientation:e=`horizontal`,inset:t=!1,size:n=`sm`,appearance:r=`solid`,className:a,...o}){return(0,g.jsx)(`hr`,{"aria-orientation":e===`vertical`?`vertical`:void 0,className:i(p.divider,p[e],p[n],p[r],t&&p.inset,a),...o})}var g;function _(){return(_=e((()=>{r(),m(),g=n(),h.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},inset:{required:!1,tsType:{name:`boolean`},description:`Indents both ends so the line stops short of its container's edges.`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Line thickness: 1px, 2px, 4px.`,defaultValue:{value:`'sm'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dashed'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`}]},description:"uiguideline calls this `variant`; renamed because `variant` means color here.",defaultValue:{value:`'solid'`,computed:!1}}},composes:[`ComponentProps`]}})))()}var v=t({Dashed:()=>E,Default:()=>S,Inset:()=>D,Sizes:()=>w,Vertical:()=>C,VerticalDashed:()=>O,VerticalInset:()=>k,VerticalSizes:()=>T,__namedExportsOrder:()=>A,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_(),y=n(),{expect:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/Atomic Elements/Divider`,component:h,parameters:{a11y:{test:`error`}},argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`solid`,`dashed`]}},decorators:[(e,{args:t})=>t.orientation===`vertical`?(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,height:`var(--space-12)`},children:[(0,y.jsx)(`span`,{children:`Left`}),(0,y.jsx)(e,{}),(0,y.jsx)(`span`,{children:`Right`})]}):(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,y.jsx)(`span`,{children:`Above`}),(0,y.jsx)(e,{}),(0,y.jsx)(`span`,{children:`Below`})]})]},S={play:async({canvas:e})=>{let t=e.getByRole(`separator`);await b(t).not.toHaveAttribute(`aria-orientation`),await b(getComputedStyle(t).borderTopWidth).toBe(`1px`)}},C={args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getByRole(`separator`);await b(t).toHaveAttribute(`aria-orientation`,`vertical`),await b(t.getBoundingClientRect().height).toBeGreaterThan(0)}},w={render:e=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{...e,size:`sm`}),(0,y.jsx)(h,{...e,size:`md`}),(0,y.jsx)(h,{...e,size:`lg`})]}),play:async({canvas:e})=>{let t=e.getAllByRole(`separator`).map(e=>getComputedStyle(e).borderTopWidth);await b(t).toEqual([`1px`,`2px`,`4px`])}},T={...w,args:{orientation:`vertical`},play:async({canvas:e})=>{let t=e.getAllByRole(`separator`);await b(t.map(e=>getComputedStyle(e).borderLeftWidth)).toEqual([`1px`,`2px`,`4px`]),await b(t.map(e=>e.getBoundingClientRect().width)).toEqual([1,2,4])}},E={args:{appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await b(getComputedStyle(e.getByRole(`separator`)).borderTopStyle).toBe(`dashed`)}},D={args:{inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await b(t.getBoundingClientRect().width).toBeLessThan(n.width)}},O={args:{orientation:`vertical`,appearance:`dashed`,size:`md`},play:async({canvas:e})=>{await b(getComputedStyle(e.getByRole(`separator`)).borderLeftStyle).toBe(`dashed`)}},k={args:{orientation:`vertical`,inset:!0},play:async({canvas:e})=>{let t=e.getByRole(`separator`),n=t.parentElement.getBoundingClientRect();await b(t.getBoundingClientRect().height).toBeLessThan(n.height)}},A=[`Default`,`Vertical`,`Sizes`,`VerticalSizes`,`Dashed`,`Inset`,`VerticalDashed`,`VerticalInset`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const divider = canvas.getByRole('separator');
    // Horizontal is the implicit orientation of <hr>; saying it again is noise.
    await expect(divider).not.toHaveAttribute('aria-orientation');
    await expect(getComputedStyle(divider).borderTopWidth).toBe('1px');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'dashed',
    size: 'md'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('separator')).borderTopStyle).toBe('dashed');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}export{C as a,w as i,v as n,j as o,D as r,S as t};