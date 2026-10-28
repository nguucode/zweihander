import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{n as a,t as o}from"./Link-Bhk0TW_i.js";var s=t({Anatomy:()=>C,Default:()=>m,Disabled:()=>b,DoSayWhere:()=>T,DontClickHere:()=>E,External:()=>y,InText:()=>h,Render:()=>x,Sizes:()=>_,UnderlineOnHover:()=>v,Variants:()=>g,__namedExportsOrder:()=>D,anatomyParts:()=>S,default:()=>f}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),a(),c=n(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Navigation/Link`,tags:[`beta`],component:o,args:{href:`#pricing`,children:`See pricing`},argTypes:{href:{description:"Where it goes. Without one (or with `isDisabled`) it cannot navigate and is no longer a link to assistive tech.",control:`text`,table:{type:{summary:`string`}}},children:{description:`The link text. Say where it goes ("See pricing"), not "click here".`,control:`text`,table:{type:{summary:`ReactNode`}}},variant:{description:"Colour. `accent` is the foreground, as on Button; `secondary` is muted, for footers and meta text.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`],table:{type:{summary:`'primary' | 'accent' | 'secondary'`},defaultValue:{summary:`'primary'`}}},size:{description:"Text size: `body-sm`, `body` or `body-lg`. Omit it to inherit the size of the sentence around the link.",control:`inline-radio`,options:[void 0,`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`inherit`}}},underline:{description:'`always` inside running text: colour alone does not mark a link. `hover` only where the context already says "these are links", like a nav list.',control:`inline-radio`,options:[`always`,`hover`],table:{type:{summary:`'always' | 'hover'`},defaultValue:{summary:`'always'`}}},isExternal:{description:'Opens in a new tab, with `rel="noopener noreferrer"`, an external icon and "(opens in a new tab)" for screen readers.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isDisabled:{description:"Drops `href` and every `on*` handler, so it cannot navigate; sets `aria-disabled`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},render:{description:"Replaces the rendered element, e.g. a router's `<Link />`. Props and styles merge onto it.",control:!1,table:{type:{summary:`ReactElement | (props, state) => ReactElement`}}}},excludeStories:[`anatomyParts`]},p={display:`flex`,gap:`var(--space-6)`,alignItems:`baseline`},m={play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`See pricing`});await l(t).toHaveAttribute(`href`,`#pricing`),await l(getComputedStyle(t).textDecorationLine).toBe(`underline`),await d.tab(),await l(t).toHaveFocus()}},h={render:e=>(0,c.jsxs)(`p`,{style:{fontSize:`var(--text-body-lg)`,maxInlineSize:`32rem`,margin:0},children:[`Every plan includes unlimited projects. `,(0,c.jsx)(o,{...e}),` to compare storage and seats.`]}),play:async({canvas:e,canvasElement:t})=>{let n=t.querySelector(`p`);await l(getComputedStyle(e.getByRole(`link`)).fontSize).toBe(getComputedStyle(n).fontSize)}},g={render:e=>(0,c.jsx)(`div`,{style:p,children:[`primary`,`accent`,`secondary`].map(t=>(0,c.jsx)(o,{...e,variant:t,children:t},t))})},_={render:e=>(0,c.jsx)(`div`,{style:p,children:[`sm`,`md`,`lg`].map(t=>(0,c.jsx)(o,{...e,size:t,children:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>parseFloat(getComputedStyle(e.getByText(t)).fontSize));await l(t[0]).toBeLessThan(t[1]),await l(t[1]).toBeLessThan(t[2])}},v={args:{underline:`hover`,variant:`accent`},play:async({canvas:e})=>{let t=e.getByRole(`link`);await l(getComputedStyle(t).textDecorationLine).toBe(`none`)}},y={args:{href:`https://base-ui.com`,isExternal:!0,children:`Base UI docs`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Base UI docs (opens in a new tab)`});await l(t).toHaveAttribute(`target`,`_blank`),await l(t).toHaveAttribute(`rel`,`noopener noreferrer`)}},b={args:{isDisabled:!0,onClick:u()},play:async({args:e,canvasElement:t})=>{let n=t.querySelector(`a`);await l(n).not.toHaveAttribute(`href`),await l(n).toHaveAttribute(`aria-disabled`,`true`),await d.click(n),await l(e.onClick).not.toHaveBeenCalled(),await d.tab(),await l(n).not.toHaveFocus()}},x={args:{render:(0,c.jsx)(`a`,{"data-router":`true`}),href:`/settings`,children:`Settings`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Settings`});await l(t).toHaveAttribute(`data-router`,`true`),await l(t).toHaveAttribute(`href`,`/settings`)}},S=[{name:`Text`,selector:`a > span:first-child`,description:`The link's name, underlined: 1px, 2px on hover.`},{name:`External icon`,selector:`a > svg`,description:`With isExternal: an arrow out of a box. Decorative; screen readers hear "(opens in a new tab)" instead.`}],C={tags:[`!dev`],args:{href:`https://base-ui.com`,isExternal:!0,size:`lg`,children:(0,c.jsx)(`span`,{children:`Base UI docs`})},play:async({canvasElement:e})=>{let t=await i(e,S);await l(t[0]).toHaveTextContent(`Base UI docs`)}},w={fontSize:`var(--text-body)`,maxInlineSize:`24rem`,margin:0},T={render:e=>(0,c.jsxs)(`p`,{style:w,children:[`Storage depends on the plan. `,(0,c.jsx)(o,{...e,children:`Compare plans`}),` before you upgrade.`]})},E={tags:[`!dev`],render:e=>(0,c.jsxs)(`p`,{style:w,children:[`Storage depends on the plan. To compare plans, `,(0,c.jsx)(o,{...e,children:`click here`}),`.`]})},D=[`Default`,`InText`,`Variants`,`Sizes`,`UnderlineOnHover`,`External`,`Disabled`,`Render`,`anatomyParts`,`Anatomy`,`DoSayWhere`,`DontClickHere`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'See pricing'
    });
    await expect(link).toHaveAttribute('href', '#pricing');
    await expect(getComputedStyle(link).textDecorationLine).toBe('underline');
    // A real link: in the tab order.
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <p style={{
    fontSize: 'var(--text-body-lg)',
    maxInlineSize: '32rem',
    margin: 0
  }}>
      Every plan includes unlimited projects. <Link {...args} /> to compare storage and seats.
    </p>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const p = canvasElement.querySelector('p')!;
    await expect(getComputedStyle(canvas.getByRole('link')).fontSize).toBe(getComputedStyle(p).fontSize);
  }
}`,...h.parameters?.docs?.source},description:{story:`Without a size it takes the size of the sentence around it.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map(variant => <Link key={variant} {...args} variant={variant}>
          {variant}
        </Link>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md', 'lg'] as const).map(size => <Link key={size} {...args} size={size}>
          {size}
        </Link>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const sizes = ['sm', 'md', 'lg'].map(n => parseFloat(getComputedStyle(canvas.getByText(n)).fontSize));
    await expect(sizes[0]).toBeLessThan(sizes[1]);
    await expect(sizes[1]).toBeLessThan(sizes[2]);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'hover',
    variant: 'accent'
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link');
    // At rest there is no line; CSS :hover adds it (a synthetic hover cannot trigger :hover).
    await expect(getComputedStyle(link).textDecorationLine).toBe('none');
  }
}`,...v.parameters?.docs?.source},description:{story:`For navigation lists, where the context already says "these are links".`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://base-ui.com',
    isExternal: true,
    children: 'Base UI docs'
  },
  play: async ({
    canvas
  }) => {
    // The new tab is announced, not just drawn.
    const link = canvas.getByRole('link', {
      name: 'Base UI docs (opens in a new tab)'
    });
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    // No href: it cannot navigate, and so is no longer a link role.
    const a = canvasElement.querySelector('a')!;
    await expect(a).not.toHaveAttribute('href');
    await expect(a).toHaveAttribute('aria-disabled', 'true');
    // Its handlers are dropped too: a click does nothing.
    await userEvent.click(a);
    await expect(args.onClick).not.toHaveBeenCalled();
    // And it is out of the tab order.
    await userEvent.tab();
    await expect(a).not.toHaveFocus();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a data-router="true" />,
    href: '/settings',
    children: 'Settings'
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'Settings'
    });
    await expect(link).toHaveAttribute('data-router', 'true');
    await expect(link).toHaveAttribute('href', '/settings');
  }
}`,...x.parameters?.docs?.source},description:{story:`A router's link keeps its own element; Link only styles it.`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    href: 'https://base-ui.com',
    isExternal: true,
    size: 'lg',
    children: <span>Base UI docs</span>
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Base UI docs');
  }
}`,...C.parameters?.docs?.source},description:{story:`Every part present, the text in its own element so the docs can point at it.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <p style={sentence}>
      Storage depends on the plan. <Link {...args}>Compare plans</Link> before you upgrade.
    </p>
}`,...T.parameters?.docs?.source},description:{story:`Guidelines, Do: the link text says where it goes.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <p style={sentence}>
      Storage depends on the plan. To compare plans, <Link {...args}>click here</Link>.
    </p>
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Don't: "click here" means nothing out of context, e.g. in a screen reader's list of links.`,...E.parameters?.docs?.description}}}})))()}export{E as a,s as c,S as d,O as f,T as i,_ as l,m as n,y as o,b as r,h as s,C as t,g as u};