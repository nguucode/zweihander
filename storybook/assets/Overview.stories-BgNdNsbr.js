import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./palettes-BiV_yfbL.js";import{n as i,t as a}from"./Theme-cxt2PJ_N.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-CAzJH1mZ.js";import{r as l,t as u}from"./TextInput-BeBTUF8_.js";import{n as d,t as f}from"./docs.module-BTv-zDNP.js";var p=t({AccentColor:()=>v,Appearance:()=>b,GrayColor:()=>y,Nested:()=>S,NestedPalettes:()=>C,TokenOverride:()=>x,__namedExportsOrder:()=>w,default:()=>_});function m({label:e}){return(0,h.jsxs)(`div`,{className:f.card,style:{display:`flex`,flexDirection:`column`,gap:`var(--space-3)`,background:`var(--color-surface-raised)`,color:`var(--color-text)`},children:[(0,h.jsx)(`span`,{style:{fontSize:`var(--text-body)`,fontWeight:500},children:e}),(0,h.jsx)(u,{label:`Email`,placeholder:`you@example.com`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,h.jsx)(c,{children:`Primary`}),(0,h.jsx)(c,{variant:`secondary`,children:`Secondary`})]})]})}var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s(),l(),i(),d(),h=o(),{expect:g}=__STORYBOOK_MODULE_TEST__,_={title:`Foundations/Overview`,component:a,parameters:{layout:`padded`}},v={name:`Accent color`,render:()=>(0,h.jsxs)(`div`,{className:f.stackWide,style:{gap:`var(--space-4)`},children:[(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`},children:r.map(e=>(0,h.jsx)(a,{accentColor:e,render:(0,h.jsx)(c,{size:`sm`}),children:e},e))}),(0,h.jsx)(`p`,{className:f.note,children:`Every label above clears 4.5:1 on its own fill — the warm hues take dark labels rather than white.`})]}),play:async({canvas:e})=>{let t=t=>getComputedStyle(e.getByRole(`button`,{name:t})).backgroundColor;await g(t(`blue`)).not.toBe(t(`red`))}},y={name:`Gray color`,render:()=>(0,h.jsx)(`div`,{className:f.gridThirds,children:n.map(e=>(0,h.jsx)(a,{grayColor:e,appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-3)`},children:(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderRadius:`var(--radius-field)`,background:`var(--color-surface)`,padding:`var(--space-2) var(--space-3)`},children:[(0,h.jsx)(`span`,{style:{fontSize:`var(--text-body)`,color:`var(--color-text)`},children:e}),(0,h.jsx)(`span`,{style:{fontSize:`var(--text-body)`,color:`var(--color-text-subtlest)`},children:`muted`})]})},e))})},b={render:()=>(0,h.jsxs)(`div`,{className:f.gridHalves,style:{gap:`var(--space-4)`},children:[(0,h.jsx)(a,{appearance:`light`,style:{borderRadius:`var(--radius-panel)`,background:`var(--color-surface)`,padding:`var(--space-4)`},children:(0,h.jsx)(m,{label:`appearance="light"`})}),(0,h.jsx)(a,{appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,background:`var(--color-surface)`,padding:`var(--space-4)`},children:(0,h.jsx)(m,{label:`appearance="dark"`})})]}),play:async({canvas:e})=>{let[t,n]=e.getAllByText(/appearance=/),r=e=>getComputedStyle(e.closest(`.light, .dark`)).getPropertyValue(`--color-surface`);await g(r(t)).not.toBe(r(n))}},x={parameters:{a11y:{test:`off`}},name:`Token override`,render:()=>(0,h.jsxs)(`div`,{className:f.gridHalves,style:{gap:`var(--space-4)`},children:[(0,h.jsx)(a,{style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-4)`},children:(0,h.jsx)(m,{label:`default tokens`})}),(0,h.jsx)(a,{style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-4)`},tokens:{radius:`1.5rem`,"color-background-brand-bold":`oklch(0.55 0.2 150)`},children:(0,h.jsx)(m,{label:`radius + brand overridden`})})]}),play:async({canvas:e})=>{let t=e.getByText(`radius + brand overridden`).closest(`div[style]`);await g(t).toHaveStyle({"--radius":`1.5rem`})}},S={render:()=>(0,h.jsx)(a,{appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,background:`var(--color-surface)`,padding:`var(--space-4)`},children:(0,h.jsxs)(`div`,{className:f.stackWide,style:{gap:`var(--space-4)`},children:[(0,h.jsx)(m,{label:`dark page`}),(0,h.jsx)(a,{appearance:`light`,style:{borderRadius:`var(--radius-panel)`,background:`var(--color-surface)`,padding:`var(--space-4)`},children:(0,h.jsx)(m,{label:`light island inside it`})})]})}),play:async({canvas:e})=>{let t=e.getByText(`light island inside it`).closest(`.light`);await g(t).toBeInTheDocument();let n=e=>getComputedStyle(e).getPropertyValue(`--color-surface`).trim();await g(n(t)).toBe(n(document.documentElement)),await g(n(t)).not.toBe(n(t.parentElement.closest(`.dark`)))}},C={render:()=>(0,h.jsx)(a,{appearance:`dark`,accentColor:`orange`,grayColor:`slate`,"data-testid":`dark`,style:{background:`var(--color-surface)`,padding:`var(--space-4)`},children:(0,h.jsxs)(a,{appearance:`light`,style:{background:`var(--color-surface)`,padding:`var(--space-4)`},children:[(0,h.jsxs)(a,{accentColor:`orange`,grayColor:`slate`,"data-testid":`island`,children:[(0,h.jsx)(m,{label:`orange on slate, light, inside dark`}),(0,h.jsx)(a,{appearance:`dark`,style:{padding:`var(--space-2)`},children:(0,h.jsx)(a,{accentColor:`orange`,grayColor:`slate`,"data-testid":`deep`,children:(0,h.jsx)(m,{label:`and dark again inside that`})})})]}),(0,h.jsx)(a,{accentColor:`orange`,grayColor:`slate`,appearance:`dark`,"data-testid":`same-element`,children:(0,h.jsx)(m,{label:`accent and appearance on one element`})})]})}),play:async({canvas:e})=>{let t=(e,t)=>getComputedStyle(e).getPropertyValue(t).trim(),n=e.getByTestId(`dark`),r=e.getByTestId(`island`);for(let i of[`--color-text-brand`,`--color-background-brand-bold`,`--color-border-focused`,`--color-text`,`--color-text-subtlest`,`--color-border-bold`])await g(t(r,i)).not.toBe(t(n,i)),await g(t(e.getByTestId(`deep`),i)).toBe(t(n,i)),await g(t(e.getByTestId(`same-element`),i)).toBe(t(n,i))}},w=[`AccentColor`,`GrayColor`,`Appearance`,`TokenOverride`,`Nested`,`NestedPalettes`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Accent color',
  render: () => <div className={docs.stackWide} style={{
    gap: 'var(--space-4)'
  }}>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }}>
        {ACCENT_COLORS.map(accent => <Theme key={accent} accentColor={accent} render={<Button size="sm" />}>
            {accent}
          </Theme>)}
      </div>
      <p className={docs.note}>
        Every label above clears 4.5:1 on its own fill — the warm hues take dark
        labels rather than white.
      </p>
    </div>,
  play: async ({
    canvas
  }) => {
    const solid = (name: string) => getComputedStyle(canvas.getByRole('button', {
      name
    })).backgroundColor;
    // Changing the accent has to actually move --color-background-brand-bold.
    await expect(solid('blue')).not.toBe(solid('red'));
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Gray color',
  render: () => <div className={docs.gridThirds}>
      {GRAY_COLORS.map(gray => <Theme key={gray} grayColor={gray} appearance="dark" style={{
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--space-3)'
    }}>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 'var(--radius-field)',
        background: 'var(--color-surface)',
        padding: 'var(--space-2) var(--space-3)'
      }}>
            <span style={{
          fontSize: 'var(--text-body)',
          color: 'var(--color-text)'
        }}>{gray}</span>
            <span style={{
          fontSize: 'var(--text-body)',
          color: 'var(--color-text-subtlest)'
        }}>muted</span>
          </div>
        </Theme>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.gridHalves} style={{
    gap: 'var(--space-4)'
  }}>
      <Theme appearance="light" style={{
      borderRadius: 'var(--radius-panel)',
      background: 'var(--color-surface)',
      padding: 'var(--space-4)'
    }}>
        <Panel label="appearance=&quot;light&quot;" />
      </Theme>
      <Theme appearance="dark" style={{
      borderRadius: 'var(--radius-panel)',
      background: 'var(--color-surface)',
      padding: 'var(--space-4)'
    }}>
        <Panel label="appearance=&quot;dark&quot;" />
      </Theme>
    </div>,
  play: async ({
    canvas
  }) => {
    const [light, dark] = canvas.getAllByText(/appearance=/);
    const bg = (el: HTMLElement) => getComputedStyle(el.closest('.light, .dark') as HTMLElement).getPropertyValue('--color-surface');
    await expect(bg(light)).not.toBe(bg(dark));
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  // Shows a consumer's own --color-background-brand-bold override; its contrast is the consumer's, not the kit's.
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  name: 'Token override',
  render: () => <div className={docs.gridHalves} style={{
    gap: 'var(--space-4)'
  }}>
      <Theme style={{
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--space-4)'
    }}>
        <Panel label="default tokens" />
      </Theme>
      <Theme style={{
      borderRadius: 'var(--radius-panel)',
      padding: 'var(--space-4)'
    }} tokens={{
      radius: '1.5rem',
      'color-background-brand-bold': 'oklch(0.55 0.2 150)'
    }}>
        <Panel label="radius + brand overridden" />
      </Theme>
    </div>,
  play: async ({
    canvas
  }) => {
    const scope = canvas.getByText('radius + brand overridden').closest('div[style]');
    await expect(scope).toHaveStyle({
      '--radius': '1.5rem'
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Theme appearance="dark" style={{
    borderRadius: 'var(--radius-panel)',
    background: 'var(--color-surface)',
    padding: 'var(--space-4)'
  }}>
      <div className={docs.stackWide} style={{
      gap: 'var(--space-4)'
    }}>
        <Panel label="dark page" />
        <Theme appearance="light" style={{
        borderRadius: 'var(--radius-panel)',
        background: 'var(--color-surface)',
        padding: 'var(--space-4)'
      }}>
          <Panel label="light island inside it" />
        </Theme>
      </div>
    </Theme>,
  play: async ({
    canvas
  }) => {
    const island = canvas.getByText('light island inside it').closest('.light');
    await expect(island).toBeInTheDocument();
    const bg = (el: Element) => getComputedStyle(el as HTMLElement).getPropertyValue('--color-surface').trim();
    // Compared against :root rather than a literal, so the assertion is about
    // the nested scope resolving to the light default — not about how the
    // generator happens to spell oklch().
    await expect(bg(island!)).toBe(bg(document.documentElement));
    await expect(bg(island!)).not.toBe(bg(island!.parentElement!.closest('.dark')!));
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Theme appearance="dark" accentColor="orange" grayColor="slate" data-testid="dark" style={{
    background: 'var(--color-surface)',
    padding: 'var(--space-4)'
  }}>
      <Theme appearance="light" style={{
      background: 'var(--color-surface)',
      padding: 'var(--space-4)'
    }}>
        <Theme accentColor="orange" grayColor="slate" data-testid="island">
          <Panel label="orange on slate, light, inside dark" />
          <Theme appearance="dark" style={{
          padding: 'var(--space-2)'
        }}>
            <Theme accentColor="orange" grayColor="slate" data-testid="deep">
              <Panel label="and dark again inside that" />
            </Theme>
          </Theme>
        </Theme>
        <Theme accentColor="orange" grayColor="slate" appearance="dark" data-testid="same-element">
          <Panel label="accent and appearance on one element" />
        </Theme>
      </Theme>
    </Theme>,
  play: async ({
    canvas
  }) => {
    const v = (el: Element, name: string) => getComputedStyle(el).getPropertyValue(name).trim();
    const dark = canvas.getByTestId('dark');
    const island = canvas.getByTestId('island');
    for (const name of ['--color-text-brand', '--color-background-brand-bold', '--color-border-focused', '--color-text', '--color-text-subtlest', '--color-border-bold']) {
      // Light inside dark: the light palette, not the page's dark one.
      await expect(v(island, name)).not.toBe(v(dark, name));
      // Dark again one level down, and on the same element: the dark palette.
      await expect(v(canvas.getByTestId('deep'), name)).toBe(v(dark, name));
      await expect(v(canvas.getByTestId('same-element'), name)).toBe(v(dark, name));
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`An accent or gray set on a light island inside a dark page takes the
island's appearance, not the page's: the nearest scope wins at any depth.`,...C.parameters?.docs?.description}}}})))()}export{C as a,T as c,S as i,b as n,p as o,y as r,x as s,v as t};