import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./Avatar-C--DiZ3P.js";var a=t({BrokenImage:()=>h,Default:()=>f,EmptySource:()=>_,Fallbacks:()=>m,Placeholder:()=>g,Sizes:()=>p,Square:()=>v,__namedExportsOrder:()=>y,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o=n(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,u={title:`Components/Atomic Elements/Avatar`,component:i,parameters:{a11y:{test:`error`}},args:{imageSrc:l,imageAlt:`Mary Thompson`},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`circle`,`square`]}}},d={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},f={play:async({canvas:e,canvasElement:t})=>{await s(e.getByRole(`img`,{name:`Mary Thompson`})).toBeVisible(),await s(t.querySelector(`img`)).toHaveAttribute(`alt`,``)}},p={render:e=>(0,o.jsx)(`div`,{style:d,children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,o.jsx)(i,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>e.getByRole(`img`,{name:t}).getBoundingClientRect().width);await s(t).toEqual([24,32,40,48])}},m={render:e=>(0,o.jsxs)(`div`,{style:d,children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(i,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,o.jsx)(i,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]})},h={args:{imageSrc:`data:image/png;base64,broken`,initials:`mt`},play:async({canvas:e,canvasElement:t})=>{await c(()=>s(t.querySelector(`img`)).toBeNull()),await s(e.getByText(`mt`)).toBeVisible()}},g={args:{imageSrc:void 0,imageAlt:void 0},play:async({canvasElement:e})=>{await s(e.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`),await s(e.querySelector(`svg`)).toBeVisible()}},_={args:{imageSrc:``},play:async({canvasElement:e})=>{await s(e.querySelector(`img`)).toBeNull(),await s(e.querySelector(`svg`)).toBeVisible()}},v={args:{appearance:`square`,size:`lg`},render:e=>(0,o.jsxs)(`div`,{style:d,children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(i,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`})]})},y=[`Default`,`Sizes`,`Fallbacks`,`BrokenImage`,`Placeholder`,`EmptySource`,`Square`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined
  },
  play: async ({
    canvasElement
  }) => {
    // No name means decorative: hidden, not announced as an empty image.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvasElement.querySelector('svg')).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: ''
  },
  play: async ({
    canvasElement
  }) => {
    // '' is no image: straight to the placeholder, no broken <img> first.
    await expect(canvasElement.querySelector('img')).toBeNull();
    await expect(canvasElement.querySelector('svg')).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'square',
    size: 'lg'
  },
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
    </div>
}`,...v.parameters?.docs?.source}}}})))()}export{v as a,p as i,f as n,b as o,m as r,a as t};