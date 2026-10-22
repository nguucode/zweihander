import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TokenTable-CC7xKKB4.js";var a=t({Layers:()=>u,__namedExportsOrder:()=>d,default:()=>l}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c=[{name:`--layer-sticky`,use:`Sticky headers that scroll with the page`},{name:`--layer-overlay`,use:`Popover, menu, listbox, date picker, modal, drawer`},{name:`--layer-tooltip`,use:`Tooltips, and the skip link`},{name:`--layer-toast`,use:`Toasts: above everything, including an open modal`}],l={title:`Foundations/Layering`,render:()=>(0,o.jsx)(i,{tokens:c}),parameters:{layout:`padded`}},u={play:async({canvasElement:e})=>{let t=t=>Number(e.querySelector(`[data-token="${t}"]`).textContent);await s(t(`--layer-sticky`)).toBeLessThan(t(`--layer-overlay`)),await s(t(`--layer-overlay`)).toBeLessThan(t(`--layer-tooltip`)),await s(t(`--layer-tooltip`)).toBeLessThan(t(`--layer-toast`))}},d=[`Layers`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const value = (name: string) => Number(canvasElement.querySelector(\`[data-token="\${name}"]\`)!.textContent);
    // The order is the contract; the numbers only have to keep it.
    await expect(value('--layer-sticky')).toBeLessThan(value('--layer-overlay'));
    await expect(value('--layer-overlay')).toBeLessThan(value('--layer-tooltip'));
    await expect(value('--layer-tooltip')).toBeLessThan(value('--layer-toast'));
  }
}`,...u.parameters?.docs?.source}}}})))()}export{u as n,f as r,a as t};