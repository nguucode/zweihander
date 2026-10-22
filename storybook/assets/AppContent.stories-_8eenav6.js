import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Card-DvxLWsiy.js";import{i as s,n as c,r as l,t as u}from"./AppShell-DepFTtOm.js";import{n as d,t as f}from"./PageHeading-CKwZip1N.js";var p=t({Flat:()=>v,OnCanvas:()=>y,__namedExportsOrder:()=>b,default:()=>_}),m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),c(),s(),d(),m=i(),{expect:h}=__STORYBOOK_MODULE_TEST__,g=(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-group)`},children:[(0,m.jsx)(f,{title:`Dashboard`,description:`What happened across your projects this month.`}),(0,m.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-group)`,gridTemplateColumns:`repeat(auto-fit, minmax(10rem, 1fr))`},children:[`Active projects`,`Open tasks`,`Team members`].map(e=>(0,m.jsx)(o,{appearance:`surface`,size:`sm`,children:e},e))})]}),_={title:`Patterns/Application UI/App Content`,tags:[`experimental`],component:l,parameters:{layout:`padded`},argTypes:{children:{control:!1}},render:(e,{parameters:t})=>(0,m.jsx)(n,{canvas:`neutral`,contentStyle:t.contentStyle,style:{blockSize:480,border:`1px solid var(--border)`},children:(0,m.jsx)(u,{style:{blockSize:`100%`},children:g})})},v={parameters:{contentStyle:`flat`},play:async({canvas:e})=>{await h(getComputedStyle(e.getByRole(`main`)).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}},y={parameters:{contentStyle:`card`},play:async({canvas:e})=>{await h(getComputedStyle(e.getByRole(`main`)).backgroundColor).toBe(`rgba(0, 0, 0, 0)`)}},b=[`Flat`,`OnCanvas`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    contentStyle: 'flat'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,...v.parameters?.docs?.source},description:{story:`contentStyle="flat": one card surface, inset 8px; the blocks are ruled-off sections.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    contentStyle: 'card'
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getByRole('main')).backgroundColor).toBe('rgba(0, 0, 0, 0)');
  }
}`,...y.parameters?.docs?.source},description:{story:`contentStyle="card": the page sits on the canvas and each block is a raised Card.`,...y.parameters?.docs?.description}}}})))()}export{x as i,v as n,y as r,p as t};