import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TokenTable-CC7xKKB4.js";var a=t({Durations:()=>u,__namedExportsOrder:()=>d,default:()=>l}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c=[{name:`--duration-fast`,use:`Popups appearing: menu, tooltip, popover, date picker, listbox`},{name:`--duration-base`,use:`State changes: hover and press colours, switch, accordion, modal`},{name:`--duration-slow`,use:`Things that travel: the tab indicator, a toast sliding in, a drawer`},{name:`--duration-spin`,use:`One turn of every spinner`},{name:`--duration-spin-reduced`,use:`One turn under prefers-reduced-motion`}],l={title:`Foundations/Motion`,render:()=>(0,o.jsx)(i,{tokens:c}),parameters:{layout:`padded`}},u={play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-token="${t}"]`).textContent;await s(t(`--duration-fast`)).toBe(`100ms`),await s(t(`--duration-base`)).toBe(`150ms`),await s(t(`--duration-slow`)).toBe(`200ms`),await s(t(`--duration-spin`)).toBe(`800ms`),await s(t(`--duration-spin-reduced`)).toBe(`2.5s`)}},d=[`Durations`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const value = (name: string) => canvasElement.querySelector(\`[data-token="\${name}"]\`)!.textContent;
    // Under reduced motion the three transition steps resolve to 0ms, which
    // is the point of the token; the test runner does not emulate it.
    await expect(value('--duration-fast')).toBe('100ms');
    await expect(value('--duration-base')).toBe('150ms');
    await expect(value('--duration-slow')).toBe('200ms');
    await expect(value('--duration-spin')).toBe('800ms');
    await expect(value('--duration-spin-reduced')).toBe('2.5s');
  }
}`,...u.parameters?.docs?.source}}}})))()}export{a as n,f as r,u as t};