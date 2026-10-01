import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./Button-BLXGvKSL.js";import{n as a,t as o}from"./TextInput-3ILXg2e3.js";import{n as s,t as c}from"./docs.module-DGjpHcjL.js";var l=t({Tokens:()=>h,__namedExportsOrder:()=>g,default:()=>m});function u(){return(0,d.jsx)(`div`,{className:c.stackWide,style:{gap:`var(--space-4)`},children:p.map(({token:e,value:t,usage:n,note:r,demo:i})=>(0,d.jsxs)(`div`,{className:c.card,style:{display:`flex`,flexDirection:`column`,gap:`var(--space-2)`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-4)`},children:[(0,d.jsx)(`div`,{style:{width:`9rem`,flexShrink:0},children:i}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[(0,d.jsx)(`span`,{style:{fontFamily:`var(--font-mono)`,fontSize:`var(--text-body)`},children:e}),(0,d.jsx)(`span`,{className:c.caption,children:t})]})]}),(0,d.jsxs)(`p`,{className:c.note,children:[(0,d.jsxs)(`strong`,{style:{color:`var(--foreground)`,fontWeight:500},children:[n,`.`]}),` `,r]})]},e))})}var d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),s(),d=n(),{expect:f}=__STORYBOOK_MODULE_TEST__,p=[{token:`--cursor-button`,value:`default`,usage:`Button, and anything that acts on the current page`,note:`Matches the browser's own convention: an interactive element that doesn't navigate keeps the regular arrow, not a hand.`,demo:(0,d.jsx)(i,{children:`Button`})},{token:`--cursor-link`,value:`pointer`,usage:`A Button rendered as a real link`,note:`A Button with href renders a real <a href>, which navigates — so it keeps the hand the browser gives every other link.`,demo:(0,d.jsx)(i,{href:`#cursors`,children:`Link`})},{token:`--cursor-disabled`,value:`not-allowed`,usage:`A disabled control that stays hoverable`,note:`TextInput uses this. Button does not — its disabled state is pointer-events: none, so it is never hovered and a cursor there would be dead CSS.`,demo:(0,d.jsx)(`div`,{style:{width:`9rem`},children:(0,d.jsx)(o,{"aria-label":`Disabled`,placeholder:`Disabled`,disabled:!0,isFullWidth:!0})})}],m={title:`Foundations/Cursors`,render:()=>(0,d.jsx)(u,{}),parameters:{layout:`padded`}},h={play:async({canvas:e})=>{let t=e=>getComputedStyle(e).cursor;await f(t(e.getByRole(`button`,{name:`Button`}))).toBe(`default`),await f(t(e.getByRole(`link`,{name:`Link`}))).toBe(`pointer`),await f(t(e.getByRole(`textbox`,{name:`Disabled`}))).toBe(`not-allowed`)}},g=[`Tokens`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const cursor = (el: Element) => getComputedStyle(el).cursor;
    // The three cases have to stay distinct, and the button/link split is the
    // whole point of the page — assert it rather than describing it in prose.
    await expect(cursor(canvas.getByRole('button', {
      name: 'Button'
    }))).toBe('default');
    await expect(cursor(canvas.getByRole('link', {
      name: 'Link'
    }))).toBe('pointer');
    await expect(cursor(canvas.getByRole('textbox', {
      name: 'Disabled'
    }))).toBe('not-allowed');
  }
}`,...h.parameters?.docs?.source}}}})))()}export{h as n,_ as r,l as t};