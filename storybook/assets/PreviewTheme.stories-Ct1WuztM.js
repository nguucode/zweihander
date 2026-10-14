import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{l as n,r}from"./story-helpers-EInZsLED.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Site/Preview theme`,render:()=>(0,i.jsx)(`p`,{children:`Themed content`}),parameters:{docs:{description:{component:"The preview decorator's side of the Preview theme: the globals the\nPlayground sends become a `<Theme>` around the story."}}}},s=e=>e.querySelector(`[data-preview-theme]`),c={globals:{appearance:`dark`},play:async({canvasElement:e})=>{await a(s(e)).toHaveClass(`dark`),await a(document.documentElement).toHaveClass(`dark`)}},l={globals:{appearance:`light`},play:async({canvasElement:e})=>{await a(s(e)).toHaveClass(`light`),await a(document.documentElement).not.toHaveClass(`dark`)}},u={globals:{appearance:`system`},beforeEach:n(!0),play:async({canvasElement:e})=>{await a(s(e)).toHaveClass(`dark`)}},d={globals:{appearance:`system`},beforeEach:n(!1),play:async({canvasElement:e})=>{await a(s(e)).toHaveClass(`light`)}},f={globals:{appearance:`light`,accent:`rose`,gray:`slate`,radius:`full`},play:async({canvasElement:e})=>{let t=s(e);await a(t).toHaveAttribute(`data-accent`,`rose`),await a(t).toHaveAttribute(`data-gray`,`slate`),await a(t.style.getPropertyValue(`--radius-factor`)).toBe(`1.5`),await a(t.style.getPropertyValue(`--radius-full`)).toBe(`9999px`),await a(document.documentElement).toHaveAttribute(`data-accent`,`rose`),await a(document.documentElement.style.getPropertyValue(`--radius-factor`)).toBe(`1.5`)}},p={globals:{appearance:`light`,font:`inter`,scaling:`110%`},play:async({canvasElement:e})=>{let t=s(e);await a(t.style.getPropertyValue(`--font-sans`)).toContain(`Inter`),await a(t.style.getPropertyValue(`--scaling`)).toBe(`1.1`);let n=e.querySelector(`p`);await a(getComputedStyle(n).getPropertyValue(`--font-heading`)).toContain(`Inter`),await a(getComputedStyle(n).fontFamily).toContain(`Inter`),await a(getComputedStyle(document.body).getPropertyValue(`--font-heading`)).toContain(`Inter`),await a(document.documentElement.style.getPropertyValue(`--scaling`)).toBe(`1.1`),await document.fonts.load(`16px "Inter Variable"`),await a(document.fonts.check(`16px "Inter Variable"`)).toBe(!0)}},m={globals:{appearance:`light`,font:`system`,scaling:`100%`},play:async({canvasElement:e})=>{let t=s(e);await a(t.style.getPropertyValue(`--font-sans`)).toBe(``),await a(t.style.getPropertyValue(`--scaling`)).toBe(`1`)}},h={globals:{appearance:`light`,accent:`foo`,radius:`huge`,font:`comic`,scaling:`200%`},play:async({canvasElement:e})=>{let t=s(e);await a(t).not.toHaveAttribute(`data-accent`),await a(t.style.getPropertyValue(`--radius-factor`)).toBe(``),await a(t.style.getPropertyValue(`--font-sans`)).toBe(``),await a(t.style.getPropertyValue(`--scaling`)).toBe(``)}},g={globals:{theme:`dark`},play:async({canvasElement:e})=>{await a(s(e)).toBeNull(),await a(document.documentElement).toHaveClass(`dark`)}},_=[`Dark`,`Light`,`SystemOnDarkOs`,`SystemOnLightOs`,`ColorAndRadius`,`Typography`,`SystemFont`,`UnknownValues`,`ToolbarTheme`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'dark'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(wrapper(canvasElement)).toHaveClass('dark');
    // Popups portal to <body>: the frame's <html> goes dark with it.
    await expect(document.documentElement).toHaveClass('dark');
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'light'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(wrapper(canvasElement)).toHaveClass('light');
    await expect(document.documentElement).not.toHaveClass('dark');
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'system'
  },
  beforeEach: withPrefersDark(true),
  play: async ({
    canvasElement
  }) => {
    await expect(wrapper(canvasElement)).toHaveClass('dark');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'system'
  },
  beforeEach: withPrefersDark(false),
  play: async ({
    canvasElement
  }) => {
    await expect(wrapper(canvasElement)).toHaveClass('light');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'light',
    accent: 'rose',
    gray: 'slate',
    radius: 'full'
  },
  play: async ({
    canvasElement
  }) => {
    const scope = wrapper(canvasElement) as HTMLElement;
    await expect(scope).toHaveAttribute('data-accent', 'rose');
    await expect(scope).toHaveAttribute('data-gray', 'slate');
    await expect(scope.style.getPropertyValue('--radius-factor')).toBe('1.5');
    await expect(scope.style.getPropertyValue('--radius-full')).toBe('9999px');
    // Popups portal to <body>: the frame's <html> wears the same.
    await expect(document.documentElement).toHaveAttribute('data-accent', 'rose');
    await expect(document.documentElement.style.getPropertyValue('--radius-factor')).toBe('1.5');
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'light',
    font: 'inter',
    scaling: '110%'
  },
  play: async ({
    canvasElement
  }) => {
    const scope = wrapper(canvasElement) as HTMLElement;
    await expect(scope.style.getPropertyValue('--font-sans')).toContain('Inter');
    await expect(scope.style.getPropertyValue('--scaling')).toBe('1.1');
    // Headings follow: --font-heading derives from --font-sans on every element.
    const text = canvasElement.querySelector('p')!;
    await expect(getComputedStyle(text).getPropertyValue('--font-heading')).toContain('Inter');
    await expect(getComputedStyle(text).fontFamily).toContain('Inter');
    // Popups portal to <body>: the frame's <html> wears the same.
    await expect(getComputedStyle(document.body).getPropertyValue('--font-heading')).toContain('Inter');
    await expect(document.documentElement.style.getPropertyValue('--scaling')).toBe('1.1');
    // The face is there: bundled with the preview (the build has no font CDN request).
    await document.fonts.load('16px "Inter Variable"');
    await expect(document.fonts.check('16px "Inter Variable"')).toBe(true);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'light',
    font: 'system',
    scaling: '100%'
  },
  play: async ({
    canvasElement
  }) => {
    const scope = wrapper(canvasElement) as HTMLElement;
    await expect(scope.style.getPropertyValue('--font-sans')).toBe('');
    await expect(scope.style.getPropertyValue('--scaling')).toBe('1');
  }
}`,...m.parameters?.docs?.source},description:{story:`System is the token's own stack: nothing set, so the default stays.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    appearance: 'light',
    accent: 'foo',
    radius: 'huge',
    font: 'comic',
    scaling: '200%'
  },
  play: async ({
    canvasElement
  }) => {
    const scope = wrapper(canvasElement) as HTMLElement;
    await expect(scope).not.toHaveAttribute('data-accent');
    await expect(scope.style.getPropertyValue('--radius-factor')).toBe('');
    await expect(scope.style.getPropertyValue('--font-sans')).toBe('');
    await expect(scope.style.getPropertyValue('--scaling')).toBe('');
  }
}`,...h.parameters?.docs?.source},description:{story:`A value the kit does not have is dropped: the default stays.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(wrapper(canvasElement)).toBeNull();
    await expect(document.documentElement).toHaveClass('dark');
  }
}`,...g.parameters?.docs?.source},description:{story:`Outside the Playground no appearance is set: no wrapper, the toolbar's theme as before.`,...g.parameters?.docs?.description}}}})))()}v();export{f as ColorAndRadius,c as Dark,l as Light,m as SystemFont,u as SystemOnDarkOs,d as SystemOnLightOs,g as ToolbarTheme,p as Typography,h as UnknownValues,_ as __namedExportsOrder,o as default};