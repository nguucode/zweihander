import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./Theme-cxt2PJ_N.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-CAzJH1mZ.js";import{r as s,t as c}from"./TextInput-BeBTUF8_.js";import{n as l,t as u}from"./docs.module-BTv-zDNP.js";var d=t({Intent:()=>w,Presets:()=>S,Steps:()=>C,__namedExportsOrder:()=>T,default:()=>x});function f(){return(0,h.jsx)(`div`,{className:u.rowWrap,children:v.map(e=>(0,h.jsxs)(`div`,{style:_,children:[(0,h.jsx)(`div`,{style:{height:`4rem`,width:`4rem`,background:`var(--color-background-brand-bold)`,borderRadius:`var(--${e})`}}),(0,h.jsxs)(`span`,{className:u.caption,children:[`--`,e]})]},e))})}function p(){return(0,h.jsx)(`div`,{className:u.rowWrap,children:y.map(({token:e,label:t,note:n})=>(0,h.jsxs)(`div`,{style:_,children:[(0,h.jsx)(`div`,{style:{display:`flex`,height:`4rem`,width:`7rem`,alignItems:`center`,justifyContent:`center`,background:`var(--color-background-neutral)`,color:`var(--color-text)`,fontSize:`var(--text-body)`,borderRadius:`var(--${e})`},children:t}),(0,h.jsxs)(`span`,{className:u.caption,children:[`--`,e]}),(0,h.jsx)(`span`,{className:u.caption,children:n})]},e))})}function m({preset:e}){return(0,h.jsxs)(r,{radius:e,className:u.stack,children:[(0,h.jsxs)(`span`,{className:u.caption,children:[`radius="`,e,`"`]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:`var(--space-3)`},children:[(0,h.jsx)(o,{children:`Button`}),(0,h.jsx)(`div`,{style:{width:`10rem`},children:(0,h.jsx)(c,{"aria-label":`Input`,placeholder:`Input`,isFullWidth:!0})}),(0,h.jsx)(`div`,{"data-panel":!0,style:{border:`1px solid var(--color-border)`,background:`var(--color-surface-raised)`,color:`var(--color-text)`,padding:`var(--space-2) var(--space-4)`,fontSize:`var(--text-body)`,borderRadius:`var(--radius-panel)`},children:`Panel`})]})]})}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),s(),n(),l(),h=i(),{expect:g}=__STORYBOOK_MODULE_TEST__,_={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`},v=[`radius-xs`,`radius-sm`,`radius-md`,`radius-lg`,`radius-xl`,`radius-2xl`],y=[{token:`radius-control`,label:`control`,note:`Button, badge`},{token:`radius-field`,label:`field`,note:`Input, textarea`},{token:`radius-panel`,label:`panel`,note:`Card, dialog`}],b=[`sharp`,`rounded`,`full-rounded`],x={title:`Foundations/Radius`,parameters:{layout:`padded`}},S={render:()=>(0,h.jsx)(`div`,{className:u.stackWide,children:b.map(e=>(0,h.jsx)(m,{preset:e},e))}),play:async({canvas:e})=>{let t=e=>Number.parseFloat(getComputedStyle(e).borderRadius),n=t=>e.getByText(`radius="${t}"`).parentElement,r=e=>{let r=n(e);return{control:t(r.querySelector(`button`)),field:t(r.querySelector(`input`).parentElement),panel:t(r.querySelector(`[data-panel]`))}},i=r(`sharp`);await g(i.control).toBe(0),await g(i.field).toBe(0),await g(i.panel).toBe(0);let a=r(`rounded`),o=r(`full-rounded`);await g(o.control).toBeGreaterThan(1e3),await g(o.field).toBeLessThan(16),await g(o.panel).toBeLessThan(1e3),await g(o.field).toBeGreaterThan(a.field),await g(o.panel).toBeGreaterThan(a.panel)}},C={render:()=>(0,h.jsx)(f,{})},w={render:()=>(0,h.jsx)(p,{})},T=[`Presets`,`Steps`,`Intent`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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

    // sharp flattens everything.
    const sharp = parts('sharp');
    await expect(sharp.control).toBe(0);
    await expect(sharp.field).toBe(0);
    await expect(sharp.panel).toBe(0);
    const rounded = parts('rounded');
    const full = parts('full-rounded');

    // full pills the control...
    await expect(full.control).toBeGreaterThan(1000);
    // ...but a field must never reach a pill. The input is 32px tall, so
    // anything at or above 16px is one.
    await expect(full.field).toBeLessThan(16);
    await expect(full.panel).toBeLessThan(1000);
    // ...and it still has to be a step up from rounded, or "full-rounded"
    // would just be "rounded with a pill button".
    await expect(full.field).toBeGreaterThan(rounded.field);
    await expect(full.panel).toBeGreaterThan(rounded.panel);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <StepScale />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Intents />
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,C as i,S as n,d as r,w as t};