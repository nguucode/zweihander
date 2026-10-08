import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Button-BdtJKtga.js";import{n as a,r as o}from"./Theme-B3d-LNiV.js";import{n as s,t as c}from"./TextInput-ceLmDhn8.js";import{n as l,t as u}from"./docs.module-DGjpHcjL.js";var d=t({SideBySide:()=>_,__namedExportsOrder:()=>v,default:()=>g});function f(){return(0,m.jsx)(`div`,{className:u.stack,children:h.map(([e,t])=>(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderRadius:`var(--radius-md)`,border:`1px solid var(--border)`,padding:`var(--space-2) var(--space-3)`,background:`var(--${e})`,color:`var(--${t})`},children:[(0,m.jsxs)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`var(--text-body-sm)`},children:[`--`,e]}),(0,m.jsxs)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`var(--text-body-sm)`,opacity:.7},children:[`--`,t]})]},e))})}function p(){return(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-4)`,background:`var(--background)`,color:`var(--foreground)`,padding:`var(--space-4)`},children:[(0,m.jsx)(f,{}),(0,m.jsx)(c,{label:`Email`,placeholder:`you@example.com`}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,m.jsx)(i,{children:`Save`}),(0,m.jsx)(i,{variant:`destructive`,children:`Delete`}),(0,m.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Cancel`})]})]})}var m,h,g,_,v;function y(){return(y=e((()=>{r(),s(),o(),l(),m=n(),h=[[`background`,`foreground`],[`card`,`card-foreground`],[`primary`,`primary-foreground`],[`muted`,`muted-foreground`],[`destructive`,`destructive-foreground`]],g={title:`Foundations/Dark mode`,parameters:{layout:`padded`}},_={name:`Side by side`,render:()=>(0,m.jsxs)(`div`,{className:u.gridHalves,style:{gap:`var(--space-4)`},children:[(0,m.jsx)(a,{appearance:`light`,style:{overflow:`hidden`,borderRadius:`var(--radius-panel)`,border:`1px solid var(--border)`},children:(0,m.jsx)(p,{})}),(0,m.jsx)(a,{appearance:`dark`,style:{overflow:`hidden`,borderRadius:`var(--radius-panel)`,border:`1px solid var(--border)`},children:(0,m.jsx)(p,{})})]})},v=[`SideBySide`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,..._.parameters?.docs?.source}}}})))()}export{_ as n,y as r,d as t};