import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-B7N9C5Fg.js";import{n as s,t as c}from"./TextInput-BLOoJTSm.js";import{n as l,t as u}from"./docs.module-DsqiEr3v.js";var d=t({SideBySide:()=>v,__namedExportsOrder:()=>y,default:()=>_});function f(){return(0,m.jsx)(`div`,{className:u.stack,children:g.map(([e,t])=>(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderRadius:`var(--radius-md)`,border:`1px solid var(--border)`,padding:`var(--space-2) var(--space-3)`,background:`var(--${e})`,color:`var(--${t})`},children:[(0,m.jsxs)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`var(--text-body-sm)`},children:[`--`,e]}),(0,m.jsxs)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`var(--text-body-sm)`,opacity:.7},children:[`--`,t]})]},e))})}function p(){return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-4)`,background:`var(--background)`,color:`var(--foreground)`,padding:`var(--space-4)`},children:[(0,m.jsx)(f,{}),(0,m.jsx)(c,{label:`Email`,placeholder:`you@example.com`}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,m.jsx)(o,{children:`Save`}),(0,m.jsx)(o,{variant:`destructive`,children:`Delete`}),(0,m.jsx)(o,{variant:`secondary`,appearance:`outlined`,children:`Cancel`})]})]})}var m,h,g,_,v,y;function b(){return(b=e((()=>{a(),s(),r(),l(),m=i(),{expect:h}=__STORYBOOK_MODULE_TEST__,g=[[`background`,`foreground`],[`card`,`card-foreground`],[`primary`,`primary-foreground`],[`muted`,`muted-foreground`],[`destructive`,`destructive-foreground`]],_={title:`Foundations/Dark mode`,parameters:{layout:`padded`}},v={parameters:{a11y:{test:`off`}},name:`Side by side`,render:()=>(0,m.jsxs)(`div`,{className:u.gridHalves,style:{gap:`var(--space-4)`},children:[(0,m.jsx)(n,{appearance:`light`,style:{overflow:`hidden`,borderRadius:`var(--radius-panel)`,border:`1px solid var(--border)`},children:(0,m.jsx)(p,{})}),(0,m.jsx)(n,{appearance:`dark`,style:{overflow:`hidden`,borderRadius:`var(--radius-panel)`,border:`1px solid var(--border)`},children:(0,m.jsx)(p,{})})]}),play:async({canvasElement:e})=>{let[t,n]=e.querySelectorAll(`.light, .dark`);await h(getComputedStyle(t).colorScheme).toBe(`light`),await h(getComputedStyle(n).colorScheme).toBe(`dark`)}},y=[`SideBySide`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  // Token specimen, not UI: the second label shows the token name in the swatch's own muted tone on purpose.
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  name: 'Side by side',
  render: () => <div className={docs.gridHalves} style={{
    gap: 'var(--space-4)'
  }}>
      <Theme appearance="light" style={{
      overflow: 'hidden',
      borderRadius: 'var(--radius-panel)',
      border: '1px solid var(--border)'
    }}>
        <Sample />
      </Theme>
      <Theme appearance="dark" style={{
      overflow: 'hidden',
      borderRadius: 'var(--radius-panel)',
      border: '1px solid var(--border)'
    }}>
        <Sample />
      </Theme>
    </div>,
  // Each scope tells the browser its appearance, so native UI it draws
  // (scrollbars, date and select popups, autofill) matches the tokens.
  play: async ({
    canvasElement
  }) => {
    const [light, dark] = canvasElement.querySelectorAll<HTMLElement>('.light, .dark');
    await expect(getComputedStyle(light).colorScheme).toBe('light');
    await expect(getComputedStyle(dark).colorScheme).toBe('dark');
  }
}`,...v.parameters?.docs?.source}}}})))()}export{v as n,b as r,d as t};