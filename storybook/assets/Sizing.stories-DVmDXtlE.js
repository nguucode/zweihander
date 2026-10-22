import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./icon-C8IlC69p.js";import{n as c,t as l}from"./Select-Ehl_mGdv.js";import{n as u,t as d}from"./TextInput-BLOoJTSm.js";import{n as f,t as p}from"./docs.module-DsqiEr3v.js";var m=t({BoxRamp:()=>O,SameTier:()=>k,Tiers:()=>D,__namedExportsOrder:()=>A,default:()=>E});function h(){let e=(0,y.useRef)(null),[t,n]=(0,y.useState)({});return(0,y.useLayoutEffect)(()=>{let t={};for(let n of e.current.querySelectorAll(`[data-probe]`)){let e=getComputedStyle(n)[n.dataset.prop??`inlineSize`];t[n.dataset.probe]=Number.parseFloat(e)>1e3?`pill`:e}n(t)},[]),{ref:e,values:t}}function g(){let{ref:e,values:t}=h();return(0,b.jsxs)(`table`,{ref:e,className:p.tokenTable,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Property`}),S.map(e=>(0,b.jsx)(`th`,{children:(0,b.jsx)(`code`,{children:e})},e)),(0,b.jsx)(`th`,{children:`Token`})]})}),(0,b.jsx)(`tbody`,{children:C.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:e.label}),S.map(n=>(0,b.jsxs)(`td`,{"data-token":e.token(n),children:[(0,b.jsx)(`span`,{"data-probe":e.token(n),"data-prop":e.prop,"aria-hidden":`true`,style:{position:`absolute`,visibility:`hidden`,[e.prop]:`var(${e.token(n)})`}}),(0,b.jsx)(`code`,{children:t[e.token(n)]})]},n)),(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:e.token(`{tier}`)})})]},e.label))})]})}function _(){let{ref:e,values:t}=h();return(0,b.jsxs)(`table`,{ref:e,className:p.tokenTable,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Step`}),T.map(e=>(0,b.jsx)(`th`,{children:e==="default"?`Default`:`Compact`},e)),(0,b.jsx)(`th`,{children:`Token`})]})}),(0,b.jsx)(`tbody`,{children:w.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`code`,{children:e})}),T.map(n=>(0,b.jsxs)(`td`,{"data-density":n,"data-token":`--box-${e}@${n}`,children:[(0,b.jsx)(`span`,{"data-probe":`--box-${e}@${n}`,"aria-hidden":`true`,style:{position:`absolute`,visibility:`hidden`,inlineSize:`var(--box-${e})`}}),(0,b.jsx)(`code`,{children:t[`--box-${e}@${n}`]})]},n)),(0,b.jsx)(`td`,{children:(0,b.jsxs)(`code`,{children:[`--box-`,e]})})]},e))})]})}function v(){return(0,b.jsxs)(`div`,{className:p.row,style:{flexWrap:`wrap`},children:[(0,b.jsx)(a,{size:`sm`,startIcon:(0,b.jsx)(s,{name:`plus`}),children:`Button`}),(0,b.jsx)(d,{size:`sm`,"aria-label":`Text input`,placeholder:`Text input`,prefix:(0,b.jsx)(s,{name:`search`})}),(0,b.jsx)(l,{size:`sm`,"aria-label":`Select`,placeholder:`Select`,options:[`One`,`Two`]})]})}var y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{y=n(),i(),c(),u(),o(),f(),b=r(),{expect:x}=__STORYBOOK_MODULE_TEST__,S=[`xs`,`sm`,`md`],C=[{label:`Height`,token:e=>`--control-${e}`,prop:`inlineSize`},{label:`Padding, pad`,token:e=>`--control-${e}-pad`,prop:`inlineSize`},{label:`Padding, pad-spacious`,token:e=>`--control-${e}-pad-spacious`,prop:`inlineSize`},{label:`Gap, icon to label`,token:e=>`--control-${e}-gap`,prop:`inlineSize`},{label:`Icon`,token:e=>`--icon-${e}`,prop:`inlineSize`},{label:`Radius, control`,token:e=>`--control-${e}-radius`,prop:`borderTopLeftRadius`},{label:`Radius, field`,token:e=>`--control-${e}-radius-field`,prop:`borderTopLeftRadius`}],w=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`],T=[`default`,`compact`],E={title:`Foundations/Sizing`,parameters:{layout:`padded`}},D={render:()=>(0,b.jsx)(g,{}),play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-token="${t}"] code`).textContent;await x(t(`--control-xs`)).toBe(`20px`),await x(t(`--control-sm`)).toBe(`24px`),await x(t(`--control-md`)).toBe(`32px`),await x(t(`--icon-xs`)).toBe(`12px`),await x(t(`--icon-sm`)).toBe(`14px`),await x(t(`--icon-md`)).toBe(`16px`),await x(t(`--control-md-pad`)).toBe(`10px`),await x(t(`--control-md-pad-spacious`)).toBe(`12px`)}},O={render:()=>(0,b.jsx)(_,{}),play:async({canvasElement:e})=>{let t=t=>w.map(n=>e.querySelector(`[data-token="--box-${n}@${t}"] code`).textContent);await x(t(`default`)).toEqual([`16px`,`20px`,`24px`,`32px`,`40px`,`48px`]),await x(t(`compact`)).toEqual([`16px`,`20px`,`22px`,`28px`,`36px`,`44px`])}},k={render:()=>(0,b.jsx)(v,{}),play:async({canvasElement:e})=>{let t=e.querySelector(`button:not([role="combobox"])`),n=[t,e.querySelector(`input`).parentElement,e.querySelector(`[role="combobox"]`)],r=e=>e.querySelector(`svg`).getBoundingClientRect().width,i=e=>getComputedStyle(e);for(let e of n)await x(e.getBoundingClientRect().height).toBe(24),await x(r(e)).toBe(14),await x(i(e).fontSize).toBe(i(t).fontSize),await x(i(e).borderTopLeftRadius).toBe(i(t).borderTopLeftRadius)}},A=[`Tiers`,`BoxRamp`,`SameTier`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <BoxRampTable />,
  play: async ({
    canvasElement
  }) => {
    const column = (d: string) => STEPS.map(step => canvasElement.querySelector(\`[data-token="--box-\${step}@\${d}"] code\`)!.textContent);
    await expect(column('default')).toEqual(['16px', '20px', '24px', '32px', '40px', '48px']);
    await expect(column('compact')).toEqual(['16px', '20px', '22px', '28px', '36px', '44px']);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}export{j as a,D as i,k as n,m as r,O as t};