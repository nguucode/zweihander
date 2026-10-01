import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";var a=t({Catalog:()=>u,Decorative:()=>d,Labelled:()=>f,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o=n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Foundations/Icons`,component:i,parameters:{a11y:{test:`error`}},args:{name:`close`}},l=[`calendar`,`check`,`chevron-down`,`chevron-left`,`chevron-right`,`chevron-up`,`chevrons-up-down`,`close`,`danger`,`external`,`file`,`info`,`menu`,`minus`,`more`,`pause`,`play`,`plus`,`search`,`star`,`star-filled`,`success`,`upload`,`user`,`warning`],u={render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(8rem, 1fr))`,gap:`var(--space-4)`,fontFamily:`var(--font-sans)`,fontSize:`var(--text-body-sm)`,color:`var(--foreground)`},children:l.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,o.jsx)(i,{name:e,style:{fontSize:24}}),(0,o.jsx)(`code`,{children:e})]},e))})},d={play:async({canvasElement:e})=>{await s(e.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`)}},f={args:{name:`warning`,label:`Warning`},play:async({canvas:e})=>{await s(e.getByRole(`img`,{name:`Warning`})).toBeVisible()}},p=[`Catalog`,`Decorative`,`Labelled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
    gap: 'var(--space-4)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--foreground)'
  }}>
      {names.map(name => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }}>
          <Icon name={name} style={{
        fontSize: 24
      }} />
          <code>{name}</code>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Every icon the kit ships, by the name components use. Boxicons free, MIT.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'warning',
    label: 'Warning'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Warning'
    })).toBeVisible();
  }
}`,...f.parameters?.docs?.source}}}})))()}export{a as n,m as r,u as t};