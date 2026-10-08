import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{r,t as i}from"./palettes-BiV_yfbL.js";import{n as a,t as o}from"./Avatar-eVXMKP5w.js";var s=t({BrokenImage:()=>_,Colors:()=>b,Default:()=>m,EmptySource:()=>y,Fallbacks:()=>g,Silhouette:()=>v,Sizes:()=>h,__namedExportsOrder:()=>x,default:()=>f}),c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a(),c=n(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,f={title:`Components/Atomic Elements/Avatar`,component:o,parameters:{a11y:{test:`error`}},args:{imageSrc:d,imageAlt:`Mary Thompson`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`subtle`,`solid`]},color:{control:`select`,options:[void 0,...i]}}},p={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},m={play:async({canvas:e,canvasElement:t})=>{await l(e.getByRole(`img`,{name:`Mary Thompson`})).toBeVisible(),await l(t.querySelector(`img`)).toHaveAttribute(`alt`,``)}},h={render:e=>(0,c.jsx)(`div`,{style:p,children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,c.jsx)(o,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>e.getByRole(`img`,{name:t}).getBoundingClientRect().width);await l(t).toEqual([24,32,40,48])}},g={render:e=>(0,c.jsxs)(`div`,{style:p,children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(o,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,c.jsx)(o,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]})},_={args:{imageSrc:`data:image/png;base64,broken`,initials:`mt`},play:async({canvas:e,canvasElement:t})=>{await u(()=>l(t.querySelector(`img`)).toBeNull()),await l(e.getByText(`mt`)).toBeVisible()}},v={args:{imageSrc:void 0,imageAlt:void 0,color:`violet`},play:async({canvasElement:e})=>{await l(e.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`),await l(e.querySelector(`svg`)).toBeVisible()}},y={args:{imageSrc:``,initials:`MT`},play:async({canvas:e,canvasElement:t})=>{await l(t.querySelector(`img`)).toBeNull(),await l(e.getByText(`MT`)).toBeVisible()}},b={args:{imageSrc:void 0,imageAlt:void 0,initials:`SR`},render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[`subtle`,`solid`].flatMap(t=>[e.initials,void 0].map(n=>(0,c.jsxs)(`div`,{style:{...p,flexWrap:`wrap`,gap:`var(--space-2)`},children:[(0,c.jsx)(o,{...e,initials:n,variant:t}),i.map(r=>(0,c.jsx)(o,{...e,initials:n,variant:t,color:r},r))]},t+n)))})},x=[`Default`,`Sizes`,`Fallbacks`,`BrokenImage`,`Silhouette`,`EmptySource`,`Colors`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Mary Thompson'
    })).toBeVisible();
    // The <img> itself is silent; the name is on the container.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Avatar key={size} {...args} size={size} imageAlt={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const widths = ['xs', 'sm', 'md', 'lg'].map(n => canvas.getByRole('img', {
      name: n
    }).getBoundingClientRect().width);
    await expect(widths).toEqual([24, 32, 40, 48]);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: 'data:image/png;base64,broken',
    initials: 'mt'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelector('img')).toBeNull());
    // Initials are uppercased by style, not by rewriting what was passed.
    await expect(canvas.getByText('mt')).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined,
    color: 'violet'
  },
  play: async ({
    canvasElement
  }) => {
    // No name means decorative: hidden, not announced as an empty image.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
    // Neither image nor initials: the silhouette.
    await expect(canvasElement.querySelector('svg')).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: '',
    initials: 'MT'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // '' is no image: straight to the initials, no broken <img> first.
    await expect(canvasElement.querySelector('img')).toBeNull();
    await expect(canvas.getByText('MT')).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined,
    initials: 'SR'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      {(['subtle', 'solid'] as const).flatMap(variant => [args.initials, undefined].map(initials => <div key={variant + initials} style={{
      ...row,
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }}>
            <Avatar {...args} initials={initials} variant={variant} />
            {ACCENT_COLORS.map(color => <Avatar key={color} {...args} initials={initials} variant={variant} color={color} />)}
          </div>))}
    </div>
}`,...b.parameters?.docs?.source}}}})))()}export{h as a,g as i,b as n,S as o,m as r,s as t};