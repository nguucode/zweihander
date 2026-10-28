import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Card-DvxLWsiy.js";import{i as s,n as c,r as l,t as u}from"./AppShell-DzI1P-p3.js";var d=t({Flat:()=>g,OnCanvas:()=>_,__namedExportsOrder:()=>v,default:()=>h}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),a(),c(),s(),f=i(),{expect:p}=__STORYBOOK_MODULE_TEST__,m=(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-group)`},children:[(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-inline)`},children:[(0,f.jsx)(`h1`,{style:{margin:0,fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xl)`,lineHeight:`var(--leading-heading-xl)`,fontWeight:500},children:`Dashboard`}),(0,f.jsx)(`p`,{style:{margin:0,color:`var(--muted-foreground)`},children:`What happened across your projects this month.`})]}),(0,f.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-group)`,gridTemplateColumns:`repeat(auto-fit, minmax(10rem, 1fr))`},children:[`Active projects`,`Open tasks`,`Team members`].map(e=>(0,f.jsx)(o,{appearance:`surface`,size:`sm`,children:e},e))})]}),h={title:`Patterns/Application UI/App Content`,tags:[`experimental`],component:l,parameters:{layout:`padded`},argTypes:{children:{control:!1},aside:{description:"A column beside the page, in an `aside` landmark: right of the page from 80rem of shell width, below it under 80rem.",control:!1},asideLabel:{description:`The aside's accessible name.`,control:`text`}},render:(e,{parameters:t})=>(0,f.jsx)(n,{canvas:`neutral`,contentStyle:t.contentStyle,style:{blockSize:480,border:`1px solid var(--border)`},children:(0,f.jsx)(u,{style:{blockSize:`100%`},children:m})})},g={parameters:{contentStyle:`flat`},play:async({canvas:e})=>{await p(getComputedStyle(e.getByRole(`main`)).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}},_={parameters:{contentStyle:`card`},play:async({canvas:e})=>{await p(getComputedStyle(e.getByRole(`main`)).backgroundColor).toBe(`rgba(0, 0, 0, 0)`)}},v=[`Flat`,`OnCanvas`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    contentStyle: 'flat'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,...g.parameters?.docs?.source},description:{story:`contentStyle="flat": one card surface, inset 8px; the blocks are ruled-off sections.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    contentStyle: 'card'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).toBe('rgba(0, 0, 0, 0)');
  }
}`,..._.parameters?.docs?.source},description:{story:`contentStyle="card": the page sits on the canvas and each block is a raised Card.`,..._.parameters?.docs?.description}}}})))()}export{y as i,g as n,_ as r,d as t};