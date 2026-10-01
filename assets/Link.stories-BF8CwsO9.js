import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./Link-BkAD4kjp.js";var a=t({Default:()=>f,Disabled:()=>v,External:()=>_,InText:()=>p,Render:()=>y,Sizes:()=>h,UnderlineOnHover:()=>g,Variants:()=>m,__namedExportsOrder:()=>b,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),o=n(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Navigation/Link`,component:i,parameters:{a11y:{test:`error`}},args:{href:`#pricing`,children:`See pricing`},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`]},size:{control:`inline-radio`,options:[void 0,`sm`,`md`,`lg`]},underline:{control:`inline-radio`,options:[`always`,`hover`]},render:{control:!1}}},d={display:`flex`,gap:`var(--space-6)`,alignItems:`baseline`},f={play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`See pricing`});await s(t).toHaveAttribute(`href`,`#pricing`),await s(getComputedStyle(t).textDecorationLine).toBe(`underline`)}},p={render:e=>(0,o.jsxs)(`p`,{style:{fontSize:`var(--text-body-lg)`,maxInlineSize:`32rem`,margin:0},children:[`Every plan includes unlimited projects. `,(0,o.jsx)(i,{...e}),` to compare storage and seats.`]}),play:async({canvas:e,canvasElement:t})=>{let n=t.querySelector(`p`);await s(getComputedStyle(e.getByRole(`link`)).fontSize).toBe(getComputedStyle(n).fontSize)}},m={render:e=>(0,o.jsx)(`div`,{style:d,children:[`primary`,`accent`,`secondary`].map(t=>(0,o.jsx)(i,{...e,variant:t,children:t},t))})},h={render:e=>(0,o.jsx)(`div`,{style:d,children:[`sm`,`md`,`lg`].map(t=>(0,o.jsx)(i,{...e,size:t,children:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>parseFloat(getComputedStyle(e.getByText(t)).fontSize));await s(t[0]).toBeLessThan(t[1]),await s(t[1]).toBeLessThan(t[2])}},g={args:{underline:`hover`,variant:`accent`},play:async({canvas:e})=>{let t=e.getByRole(`link`);await s(getComputedStyle(t).textDecorationLine).toBe(`none`)}},_={args:{href:`https://base-ui.com`,isExternal:!0,children:`Base UI docs`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Base UI docs (opens in a new tab)`});await s(t).toHaveAttribute(`target`,`_blank`),await s(t).toHaveAttribute(`rel`,`noopener noreferrer`)}},v={args:{isDisabled:!0,onClick:c()},play:async({args:e,canvasElement:t})=>{let n=t.querySelector(`a`);await s(n).not.toHaveAttribute(`href`),await s(n).toHaveAttribute(`aria-disabled`,`true`),await l.click(n),await s(e.onClick).not.toHaveBeenCalled()}},y={args:{render:(0,o.jsx)(`a`,{"data-router":`true`}),href:`/settings`,children:`Settings`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Settings`});await s(t).toHaveAttribute(`data-router`,`true`),await s(t).toHaveAttribute(`href`,`/settings`)}},b=[`Default`,`InText`,`Variants`,`Sizes`,`UnderlineOnHover`,`External`,`Disabled`,`Render`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'See pricing'
    });
    await expect(link).toHaveAttribute('href', '#pricing');
    await expect(getComputedStyle(link).textDecorationLine).toBe('underline');
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Without a size it takes the size of the sentence around it.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map(variant => <Link key={variant} {...args} variant={variant}>
          {variant}
        </Link>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`For navigation lists, where the context already says "these are links".`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`A router's link keeps its own element; Link only styles it.`,...y.parameters?.docs?.description}}}})))()}export{h as a,x as c,a as i,_ as n,g as o,p as r,m as s,f as t};