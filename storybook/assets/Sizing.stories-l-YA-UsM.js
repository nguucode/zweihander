import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./icon-C8IlC69p.js";import{n as c,t as l}from"./Select-Cu2j16sr.js";import{n as u,t as d}from"./TextInput-C5Y6Z6LQ.js";import{n as f,t as p}from"./docs.module-DsqiEr3v.js";var m=t({SameTier:()=>w,Tiers:()=>C,__namedExportsOrder:()=>T,default:()=>S});function h(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)({});return(0,_.useLayoutEffect)(()=>{let t={};for(let n of e.current.querySelectorAll(`[data-probe]`)){let e=getComputedStyle(n)[n.dataset.prop];t[n.dataset.probe]=Number.parseFloat(e)>1e3?`pill`:e}n(t)},[]),(0,v.jsxs)(`table`,{ref:e,className:p.tokenTable,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Property`}),b.map(e=>(0,v.jsx)(`th`,{children:(0,v.jsx)(`code`,{children:e})},e)),(0,v.jsx)(`th`,{children:`Token`})]})}),(0,v.jsx)(`tbody`,{children:x.map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:e.label}),b.map(n=>(0,v.jsxs)(`td`,{"data-token":e.token(n),children:[(0,v.jsx)(`span`,{"data-probe":e.token(n),"data-prop":e.prop,"aria-hidden":`true`,style:{position:`absolute`,visibility:`hidden`,[e.prop]:`var(${e.token(n)})`}}),(0,v.jsx)(`code`,{children:t[e.token(n)]})]},n)),(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{children:e.token(`{tier}`)})})]},e.label))})]})}function g(){return(0,v.jsxs)(`div`,{className:p.row,style:{flexWrap:`wrap`},children:[(0,v.jsx)(a,{size:`sm`,startIcon:(0,v.jsx)(s,{name:`plus`}),children:`Button`}),(0,v.jsx)(d,{size:`sm`,"aria-label":`Text input`,placeholder:`Text input`,prefix:(0,v.jsx)(s,{name:`search`})}),(0,v.jsx)(l,{size:`sm`,"aria-label":`Select`,placeholder:`Select`,options:[`One`,`Two`]})]})}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{_=n(),i(),c(),u(),o(),f(),v=r(),{expect:y}=__STORYBOOK_MODULE_TEST__,b=[`xs`,`sm`,`md`],x=[{label:`Height`,token:e=>`--control-${e}`,prop:`inlineSize`},{label:`Padding, pad`,token:e=>`--control-${e}-pad`,prop:`inlineSize`},{label:`Padding, pad-spacious`,token:e=>`--control-${e}-pad-spacious`,prop:`inlineSize`},{label:`Gap, icon to label`,token:e=>`--control-${e}-gap`,prop:`inlineSize`},{label:`Icon`,token:e=>`--icon-${e}`,prop:`inlineSize`},{label:`Radius, control`,token:e=>`--control-${e}-radius`,prop:`borderTopLeftRadius`},{label:`Radius, field`,token:e=>`--control-${e}-radius-field`,prop:`borderTopLeftRadius`}],S={title:`Foundations/Sizing`,parameters:{layout:`padded`}},C={render:()=>(0,v.jsx)(h,{}),play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-token="${t}"] code`).textContent;await y(t(`--control-xs`)).toBe(`20px`),await y(t(`--control-sm`)).toBe(`24px`),await y(t(`--control-md`)).toBe(`32px`),await y(t(`--icon-xs`)).toBe(`12px`),await y(t(`--icon-sm`)).toBe(`14px`),await y(t(`--icon-md`)).toBe(`16px`),await y(t(`--control-md-pad`)).toBe(`10px`),await y(t(`--control-md-pad-spacious`)).toBe(`12px`)}},w={render:()=>(0,v.jsx)(g,{}),play:async({canvasElement:e})=>{let t=e.querySelector(`button:not([role="combobox"])`),n=[t,e.querySelector(`input`).parentElement,e.querySelector(`[role="combobox"]`)],r=e=>e.querySelector(`svg`).getBoundingClientRect().width,i=e=>getComputedStyle(e);for(let e of n)await y(e.getBoundingClientRect().height).toBe(24),await y(r(e)).toBe(14),await y(i(e).fontSize).toBe(i(t).fontSize),await y(i(e).borderTopLeftRadius).toBe(i(t).borderTopLeftRadius)}},T=[`Tiers`,`SameTier`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <TierTable />,
  play: async ({
    canvasElement
  }) => {
    const value = (name: string) => canvasElement.querySelector(\`[data-token="\${name}"] code\`)!.textContent;
    await expect(value('--control-xs')).toBe('20px');
    await expect(value('--control-sm')).toBe('24px');
    await expect(value('--control-md')).toBe('32px');
    await expect(value('--icon-xs')).toBe('12px');
    await expect(value('--icon-sm')).toBe('14px');
    await expect(value('--icon-md')).toBe('16px');
    await expect(value('--control-md-pad')).toBe('10px');
    await expect(value('--control-md-pad-spacious')).toBe('12px');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SmallControls />,
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector('button:not([role="combobox"])')!;
    const field = canvasElement.querySelector('input')!.parentElement!;
    const select = canvasElement.querySelector('[role="combobox"]')!;
    const parts = [button, field, select];
    const iconOf = (el: Element) => el.querySelector('svg')!.getBoundingClientRect().width;
    const style = (el: Element) => getComputedStyle(el);
    for (const el of parts) {
      await expect(el.getBoundingClientRect().height).toBe(24);
      await expect(iconOf(el)).toBe(14);
      await expect(style(el).fontSize).toBe(style(button).fontSize);
      await expect(style(el).borderTopLeftRadius).toBe(style(button).borderTopLeftRadius);
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}export{E as i,m as n,C as r,w as t};