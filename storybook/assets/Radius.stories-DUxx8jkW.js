import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Button-BdtJKtga.js";import{n as a,r as o}from"./Theme-B3d-LNiV.js";import{n as s,t as c}from"./TextInput-ceLmDhn8.js";import{n as l,t as u}from"./docs.module-DGjpHcjL.js";var d=t({Intent:()=>w,Presets:()=>S,Steps:()=>C,__namedExportsOrder:()=>T,default:()=>x});function f(){return(0,h.jsx)(`div`,{className:u.rowWrap,children:v.map(e=>(0,h.jsxs)(`div`,{style:_,children:[(0,h.jsx)(`div`,{style:{height:`4rem`,width:`4rem`,background:`var(--primary)`,borderRadius:`var(--${e})`}}),(0,h.jsxs)(`span`,{className:u.caption,children:[`--`,e]})]},e))})}function p(){return(0,h.jsx)(`div`,{className:u.rowWrap,children:y.map(({token:e,label:t,note:n})=>(0,h.jsxs)(`div`,{style:_,children:[(0,h.jsx)(`div`,{style:{display:`flex`,height:`4rem`,width:`7rem`,alignItems:`center`,justifyContent:`center`,background:`var(--secondary)`,color:`var(--secondary-foreground)`,fontSize:`var(--text-body)`,borderRadius:`var(--${e})`},children:t}),(0,h.jsxs)(`span`,{className:u.caption,children:[`--`,e]}),(0,h.jsx)(`span`,{className:u.caption,children:n})]},e))})}function m({preset:e}){return(0,h.jsxs)(a,{radius:e,className:u.stack,children:[(0,h.jsxs)(`span`,{className:u.caption,children:[`radius="`,e,`"`]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--space-3)`},children:[(0,h.jsx)(i,{children:`Button`}),(0,h.jsx)(`div`,{style:{width:`10rem`},children:(0,h.jsx)(c,{"aria-label":`Input`,placeholder:`Input`,isFullWidth:!0})}),(0,h.jsx)(`div`,{"data-panel":!0,style:{border:`1px solid var(--border)`,background:`var(--card)`,color:`var(--card-foreground)`,padding:`var(--space-2) var(--space-4)`,fontSize:`var(--text-body)`,borderRadius:`var(--radius-panel)`},children:`Panel`})]})]})}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),s(),o(),l(),h=n(),{expect:g}=__STORYBOOK_MODULE_TEST__,_={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`},v=[`radius-sm`,`radius-md`,`radius-lg`,`radius-xl`],y=[{token:`radius-control`,label:`control`,note:`Button, badge`},{token:`radius-field`,label:`field`,note:`Input, textarea`},{token:`radius-panel`,label:`panel`,note:`Card, dialog`}],b=[`none`,`small`,`medium`,`large`,`full`],x={title:`Foundations/Radius`,parameters:{layout:`padded`}},S={render:()=>(0,h.jsx)(`div`,{className:u.stackWide,children:b.map(e=>(0,h.jsx)(m,{preset:e},e))}),play:async({canvas:e})=>{let t=e=>Number.parseFloat(getComputedStyle(e).borderRadius),n=t=>e.getByText(`radius="${t}"`).parentElement,r=e=>{let r=n(e);return{control:t(r.querySelector(`button`)),field:t(r.querySelector(`input`).parentElement),panel:t(r.querySelector(`[data-panel]`))}},i=r(`none`);await g(i.control).toBe(0),await g(i.field).toBe(0),await g(i.panel).toBe(0);let a=r(`large`),o=r(`full`);await g(o.control).toBeGreaterThan(1e3),await g(o.field).toBeLessThan(16),await g(o.panel).toBeLessThan(1e3),await g(o.field).toBeGreaterThan(a.field),await g(o.panel).toBeGreaterThan(a.panel)}},C={render:()=>(0,h.jsx)(f,{})},w={render:()=>(0,h.jsx)(p,{})},T=[`Presets`,`Steps`,`Intent`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.stackWide}>
      {PRESETS.map(preset => <PresetRow key={preset} preset={preset} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const px = (el: Element) => Number.parseFloat(getComputedStyle(el).borderRadius);
    const scopeFor = (preset: string) => canvas.getByText(\`radius="\${preset}"\`).parentElement as HTMLElement;
    const parts = (preset: string) => {
      const scope = scopeFor(preset);
      return {
        control: px(scope.querySelector('button')!),
        // The field's corner is on the box that draws it, not the bare <input>.
        field: px(scope.querySelector('input')!.parentElement!),
        panel: px(scope.querySelector('[data-panel]')!)
      };
    };

    // none flattens everything.
    const none = parts('none');
    await expect(none.control).toBe(0);
    await expect(none.field).toBe(0);
    await expect(none.panel).toBe(0);
    const large = parts('large');
    const full = parts('full');

    // full pills the control...
    await expect(full.control).toBeGreaterThan(1000);
    // ...but a field must never reach a pill. The input is 32px tall, so
    // anything at or above 16px is one.
    await expect(full.field).toBeLessThan(16);
    await expect(full.panel).toBeLessThan(1000);
    // ...and it still has to be a step up from large, or "full" would just
    // be "large with a pill button".
    await expect(full.field).toBeGreaterThan(large.field);
    await expect(full.panel).toBeGreaterThan(large.panel);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <StepScale />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Intents />
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,C as i,S as n,d as r,w as t};