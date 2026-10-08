import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./docs.module-DGjpHcjL.js";var a=t({Body:()=>h,Families:()=>_,Headings:()=>m,Weights:()=>g,__namedExportsOrder:()=>v,default:()=>p});function o({token:e,px:t,weight:n}){return(0,s.jsxs)(`div`,{className:i.rowBaseline,style:{borderBottom:`1px solid var(--border)`,padding:`var(--space-2) 0`},children:[(0,s.jsxs)(`span`,{className:i.caption,style:{width:`10rem`,flexShrink:0},children:[`--text-`,e]}),(0,s.jsx)(`span`,{style:{flex:1,...l(e,n)},children:`Zweihänder`}),(0,s.jsx)(`span`,{className:i.caption,style:{width:`7rem`,textAlign:`right`},children:t})]})}var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),s=n(),{expect:c}=__STORYBOOK_MODULE_TEST__,l=(e,t)=>({fontSize:`var(--text-${e})`,lineHeight:`var(--leading-${e})`,fontWeight:t}),u=[{token:`heading-2xl`,px:`32 / 36`},{token:`heading-xl`,px:`28 / 32`},{token:`heading-lg`,px:`24 / 28`},{token:`heading-md`,px:`20 / 24`},{token:`heading-sm`,px:`16 / 20`},{token:`heading-xs`,px:`14 / 20`},{token:`heading-2xs`,px:`12 / 16`}],d=[{token:`body-lg`,px:`16 / 24`},{token:`body`,px:`14 / 20`},{token:`body-sm`,px:`13 / 16`},{token:`body-xs`,px:`10 / 14`}],f=[{value:400,name:`regular`},{value:500,name:`medium`},{value:600,name:`semibold`},{value:700,name:`bold`}],p={title:`Foundations/Typography`,parameters:{layout:`padded`}},m={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`},children:u.map(e=>(0,s.jsx)(o,{...e,weight:700},e.token))}),play:async({canvas:e})=>{let t=e.getAllByText(`Zweihänder`)[0];await c(getComputedStyle(t).fontWeight).toBe(`700`),await c(Number.parseFloat(getComputedStyle(t).fontSize)).toBe(32)}},h={render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`},children:d.map(e=>(0,s.jsx)(o,{...e,weight:400},e.token))}),play:async({canvas:e})=>{let t=e.getAllByText(`Zweihänder`)[1];await c(Number.parseFloat(getComputedStyle(t).fontSize)).toBe(14)}},g={render:()=>(0,s.jsx)(`div`,{className:i.stack,children:f.map(({value:e,name:t})=>(0,s.jsxs)(`div`,{className:i.rowBaseline,children:[(0,s.jsx)(`span`,{className:i.caption,style:{width:`8rem`,flexShrink:0},children:e}),(0,s.jsx)(`span`,{style:{...l(`body-lg`,e)},children:`Zweihänder`}),(0,s.jsx)(`span`,{className:i.caption,children:t})]},e))}),play:async({canvas:e})=>{let t=e.getAllByText(`Zweihänder`).at(-1);await c(getComputedStyle(t).fontWeight).toBe(`700`)}},_={render:()=>(0,s.jsxs)(`div`,{className:i.stackWide,children:[(0,s.jsxs)(`div`,{className:i.stack,children:[(0,s.jsx)(`span`,{className:i.caption,children:`--font-sans`}),(0,s.jsx)(`span`,{style:{...l(`heading-md`,700),fontFamily:`var(--font-sans)`},children:`Zweihänder — system-ui 0123`})]}),(0,s.jsxs)(`div`,{className:i.stack,children:[(0,s.jsx)(`span`,{className:i.caption,children:`--font-mono`}),(0,s.jsx)(`span`,{style:{...l(`heading-md`,700),fontFamily:`var(--font-mono)`},children:`Zweihänder — ui-monospace 0123`})]})]}),play:async({canvas:e})=>{let t=e.getByText(/system-ui 0123/);await c(getComputedStyle(t).fontFamily).toMatch(/^system-ui/)}},v=[`Headings`,`Body`,`Weights`,`Families`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      {HEADINGS.map(h => <Row key={h.token} {...h} weight={700} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const el = canvas.getAllByText('Zweihänder')[0];
    // A heading role carries its weight, not just its size.
    await expect(getComputedStyle(el).fontWeight).toBe('700');
    await expect(Number.parseFloat(getComputedStyle(el).fontSize)).toBe(32);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      {BODY.map(b => <Row key={b.token} {...b} weight={400} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const el = canvas.getAllByText('Zweihänder')[1];
    // body is 14px, one step down from the 16px many interfaces start at.
    await expect(Number.parseFloat(getComputedStyle(el).fontSize)).toBe(14);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.stack}>
      {WEIGHTS.map(({
      value,
      name
    }) => <div key={value} className={docs.rowBaseline}>
          <span className={docs.caption} style={{
        width: '8rem',
        flexShrink: 0
      }}>
            {value}
          </span>
          <span style={{
        ...role('body-lg', value)
      }}>Zweihänder</span>
          <span className={docs.caption}>{name}</span>
        </div>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const bold = canvas.getAllByText('Zweihänder').at(-1)!;
    await expect(getComputedStyle(bold).fontWeight).toBe('700');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.stackWide}>
      <div className={docs.stack}>
        <span className={docs.caption}>--font-sans</span>
        <span style={{
        ...role('heading-md', 700),
        fontFamily: 'var(--font-sans)'
      }}>
          Zweihänder — system-ui 0123
        </span>
      </div>
      <div className={docs.stack}>
        <span className={docs.caption}>--font-mono</span>
        <span style={{
        ...role('heading-md', 700),
        fontFamily: 'var(--font-mono)'
      }}>
          Zweihänder — ui-monospace 0123
        </span>
      </div>
    </div>,
  play: async ({
    canvas
  }) => {
    const sans = canvas.getByText(/system-ui 0123/);
    await expect(getComputedStyle(sans).fontFamily).toMatch(/^system-ui/);
  }
}`,..._.parameters?.docs?.source}}}})))()}export{g as a,a as i,_ as n,y as o,m as r,h as t};