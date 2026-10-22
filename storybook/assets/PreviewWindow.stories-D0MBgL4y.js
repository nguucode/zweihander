import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./react-dom-BXgx-GBU.js";import{t as r}from"./client-D_rWBZGf.js";import{n as i,t as a}from"./PreviewWindow-BwN9P4Ua.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=n(),s=r(),i(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Site/Playground/Stage`,render:()=>(0,c.jsx)(`div`,{}),parameters:{docs:{description:{component:`The Stage on its own: what the Playground stories rely on, pinned down without timing.`}}}},d={play:async({canvasElement:e})=>{let t=document.createElement(`div`);t.style.cssText=`display: flex; inline-size: 800px; block-size: 600px`,e.append(t);let n=(0,s.createRoot)(t);(0,o.flushSync)(()=>n.render((0,c.jsx)(a,{vp:`desktop`,theme:{accent:`blue`,gray:`slate`,appearance:`light`},children:(0,c.jsx)(`p`,{children:`Page`})})));let r=t.querySelector(`[data-testid="preview-window"]`),i=r?.getBoundingClientRect().width;n.unmount(),t.remove(),await l(r).not.toBeNull(),await l(i).toBeGreaterThan(0),await l(i).toBeLessThan(800)}},f=[`WindowOnFirstCommit`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const host = document.createElement('div');
    host.style.cssText = 'display: flex; inline-size: 800px; block-size: 600px';
    canvasElement.append(host);
    const root = createRoot(host);
    flushSync(() => root.render(<PreviewWindow vp="desktop" theme={{
      accent: 'blue',
      gray: 'slate',
      appearance: 'light'
    }}>
          <p>Page</p>
        </PreviewWindow>));
    // Read in the same task as the render: no await between them.
    const win = host.querySelector<HTMLElement>('[data-testid="preview-window"]');
    const scaled = win?.getBoundingClientRect().width;
    root.unmount();
    host.remove();
    await expect(win).not.toBeNull();
    // Already scaled to the room inside the padding, not 0 or full size.
    await expect(scaled).toBeGreaterThan(0);
    await expect(scaled).toBeLessThan(800);
  }
}`,...d.parameters?.docs?.source},description:{story:`The window is in the DOM as soon as React commits, not one rendering step
later when a ResizeObserver first reports the Stage's size. WebKit ran
play functions in that gap, so a plain \`getByTestId\` found no window.`,...d.parameters?.docs?.description}}}})))()}p();export{d as WindowOnFirstCommit,f as __namedExportsOrder,u as default};