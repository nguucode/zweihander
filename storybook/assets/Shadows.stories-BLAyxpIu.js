import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,r as i}from"./Theme-B3d-LNiV.js";import{n as a,t as o}from"./docs.module-DGjpHcjL.js";var s=t({Modes:()=>h,Scale:()=>m,__namedExportsOrder:()=>g,default:()=>p});function c({step:e}){return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-12)`},children:[(0,u.jsx)(`div`,{style:{height:`4.5rem`,width:`4.5rem`,borderRadius:`var(--radius-panel)`,background:`var(--card)`,boxShadow:`var(--shadow-${e})`}}),(0,u.jsxs)(`span`,{className:o.caption,children:[`--shadow-`,e]})]})}function l(){return(0,u.jsx)(`div`,{className:o.rowWrap,style:{padding:`var(--space-6)`,gap:`var(--space-12)`},children:f.map(e=>(0,u.jsx)(c,{step:e},e))})}var u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),a(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],p={title:`Foundations/Shadows`,render:()=>(0,u.jsx)(l,{}),parameters:{layout:`padded`}},m={},h={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,gridTemplateColumns:`repeat(auto-fit, minmax(18rem, 1fr))`},children:[`light`,`dark`].map(e=>(0,u.jsxs)(r,{appearance:e,style:{background:`var(--background)`,border:`1px solid var(--border)`,borderRadius:`var(--radius-panel)`,padding:`var(--space-6)`},children:[(0,u.jsx)(`div`,{className:o.caption,style:{marginBottom:`var(--space-6)`},children:e}),(0,u.jsx)(`div`,{className:o.rowWrap,style:{gap:`var(--space-8)`},children:[`xs`,`md`,`2xl`].map(e=>(0,u.jsx)(c,{step:e},e))})]},e))}),play:async({canvas:e})=>{let t=[`light`,`dark`].map(t=>getComputedStyle(e.getByText(t).parentElement).getPropertyValue(`--shadow-md`).trim());await d(t[0]).not.toBe(t[1]),await d(t.every(Boolean)).toBe(!0)}},g=[`Scale`,`Modes`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))'
  }}>
      {(['light', 'dark'] as const).map(appearance => <Theme key={appearance} appearance={appearance} style={{
      background: 'var(--background)',
      // The light panel is the near-white page, so without this its
      // edge barely shows and the comparison looks one-sided.
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--space-6)'
    }}>
          <div className={docs.caption} style={{
        marginBottom: 'var(--space-6)'
      }}>
            {appearance}
          </div>
          <div className={docs.rowWrap} style={{
        gap: 'var(--space-8)'
      }}>
            {(['xs', 'md', '2xl'] as const).map(step => <Swatch key={step} step={step} />)}
          </div>
        </Theme>)}
    </div>,
  play: async ({
    canvas
  }) => {
    // The point of the alpha scale: the same token is not the same value in
    // both modes. If someone copies the light values into .dark, this fails.
    const shadows = (['light', 'dark'] as const).map(mode => getComputedStyle(canvas.getByText(mode).parentElement!).getPropertyValue('--shadow-md').trim());
    await expect(shadows[0]).not.toBe(shadows[1]);
    await expect(shadows.every(Boolean)).toBe(true);
  }
}`,...h.parameters?.docs?.source},description:{story:`Both appearances at once — the toolbar can only show one at a time.`,...h.parameters?.docs?.description}}}})))()}export{_ as i,m as n,s as r,h as t};