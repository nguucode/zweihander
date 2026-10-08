import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./palettes-BiV_yfbL.js";import{n as a,t as o}from"./Button-BdtJKtga.js";import{n as s,r as c,t as l}from"./Theme-B3d-LNiV.js";import{n as u,t as d}from"./TextInput-ceLmDhn8.js";import{n as f,t as p}from"./docs.module-DGjpHcjL.js";var m=t({AccentColor:()=>y,Appearance:()=>S,GrayColor:()=>b,Nested:()=>w,NestedPalettes:()=>T,Scaling:()=>x,TokenOverride:()=>C,__namedExportsOrder:()=>E,default:()=>v});function h({label:e}){return(0,g.jsxs)(`div`,{className:p.card,style:{display:`flex`,flexDirection:`column`,gap:`var(--space-3)`,background:`var(--card)`,color:`var(--card-foreground)`},children:[(0,g.jsx)(`span`,{style:{fontSize:`var(--text-body)`,fontWeight:500},children:e}),(0,g.jsx)(d,{label:`Email`,placeholder:`you@example.com`}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,g.jsx)(o,{children:`Primary`}),(0,g.jsx)(o,{variant:`secondary`,children:`Secondary`})]})]})}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),u(),c(),f(),g=n(),{expect:_}=__STORYBOOK_MODULE_TEST__,v={title:`Foundations/Overview`,component:s,parameters:{layout:`padded`}},y={name:`Accent color`,render:()=>(0,g.jsxs)(`div`,{className:p.stackWide,style:{gap:`var(--space-4)`},children:[(0,g.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`},children:i.map(e=>(0,g.jsx)(s,{accentColor:e,render:(0,g.jsx)(o,{size:`sm`}),children:e},e))}),(0,g.jsx)(`p`,{className:p.note,children:`Every label above clears 4.5:1 on its own fill — the warm hues take dark labels rather than white.`})]}),play:async({canvas:e})=>{let t=t=>getComputedStyle(e.getByRole(`button`,{name:t})).backgroundColor;await _(t(`blue`)).not.toBe(t(`red`))}},b={name:`Gray color`,render:()=>(0,g.jsx)(`div`,{className:p.gridThirds,children:r.map(e=>(0,g.jsx)(s,{grayColor:e,appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-3)`},children:(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,borderRadius:`var(--radius-field)`,background:`var(--background)`,padding:`var(--space-2) var(--space-3)`},children:[(0,g.jsx)(`span`,{style:{fontSize:`var(--text-body)`,color:`var(--foreground)`},children:e}),(0,g.jsx)(`span`,{style:{fontSize:`var(--text-body)`,color:`var(--muted-foreground)`},children:`muted`})]})},e))})},x={render:()=>(0,g.jsx)(`div`,{className:p.stackWide,style:{gap:`var(--space-4)`},children:l.map(e=>(0,g.jsxs)(s,{scaling:e,className:p.row,style:{gap:`var(--space-3)`},children:[(0,g.jsx)(`span`,{className:p.caption,style:{width:`3rem`,flexShrink:0},children:e}),(0,g.jsx)(o,{children:`Button`}),(0,g.jsx)(`div`,{style:{width:`10rem`},children:(0,g.jsx)(d,{"aria-label":`Input`,placeholder:`Input`,isFullWidth:!0})})]},e))}),play:async({canvas:e})=>{let t=t=>e.getByText(t).parentElement.querySelector(`button`).getBoundingClientRect().height;await _(t(`90%`)).toBeLessThan(t(`110%`))}},S={render:()=>(0,g.jsxs)(`div`,{className:p.gridHalves,style:{gap:`var(--space-4)`},children:[(0,g.jsx)(s,{appearance:`light`,style:{borderRadius:`var(--radius-panel)`,background:`var(--background)`,padding:`var(--space-4)`},children:(0,g.jsx)(h,{label:`appearance="light"`})}),(0,g.jsx)(s,{appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,background:`var(--background)`,padding:`var(--space-4)`},children:(0,g.jsx)(h,{label:`appearance="dark"`})})]}),play:async({canvas:e})=>{let[t,n]=e.getAllByText(/appearance=/),r=e=>getComputedStyle(e.closest(`.light, .dark`)).getPropertyValue(`--background`);await _(r(t)).not.toBe(r(n))}},C={name:`Token override`,render:()=>(0,g.jsxs)(`div`,{className:p.gridHalves,style:{gap:`var(--space-4)`},children:[(0,g.jsx)(s,{style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-4)`},children:(0,g.jsx)(h,{label:`default tokens`})}),(0,g.jsx)(s,{style:{borderRadius:`var(--radius-panel)`,padding:`var(--space-4)`},tokens:{radius:`1.5rem`,primary:`oklch(0.55 0.2 150)`},children:(0,g.jsx)(h,{label:`radius + primary overridden`})})]}),play:async({canvas:e})=>{let t=e.getByText(`radius + primary overridden`).closest(`div[style]`);await _(t).toHaveStyle({"--radius":`1.5rem`})}},w={render:()=>(0,g.jsx)(s,{appearance:`dark`,style:{borderRadius:`var(--radius-panel)`,background:`var(--background)`,padding:`var(--space-4)`},children:(0,g.jsxs)(`div`,{className:p.stackWide,style:{gap:`var(--space-4)`},children:[(0,g.jsx)(h,{label:`dark page`}),(0,g.jsx)(s,{appearance:`light`,style:{borderRadius:`var(--radius-panel)`,background:`var(--background)`,padding:`var(--space-4)`},children:(0,g.jsx)(h,{label:`light island inside it`})})]})}),play:async({canvas:e})=>{let t=e.getByText(`light island inside it`).closest(`.light`);await _(t).toBeInTheDocument();let n=e=>getComputedStyle(e).getPropertyValue(`--background`).trim();await _(n(t)).toBe(n(document.documentElement)),await _(n(t)).not.toBe(n(t.parentElement.closest(`.dark`)))}},T={render:()=>(0,g.jsx)(s,{appearance:`dark`,accentColor:`orange`,grayColor:`slate`,"data-testid":`dark`,style:{background:`var(--background)`,padding:`var(--space-4)`},children:(0,g.jsxs)(s,{appearance:`light`,style:{background:`var(--background)`,padding:`var(--space-4)`},children:[(0,g.jsxs)(s,{accentColor:`orange`,grayColor:`slate`,"data-testid":`island`,children:[(0,g.jsx)(h,{label:`orange on slate, light, inside dark`}),(0,g.jsx)(s,{appearance:`dark`,style:{padding:`var(--space-2)`},children:(0,g.jsx)(s,{accentColor:`orange`,grayColor:`slate`,"data-testid":`deep`,children:(0,g.jsx)(h,{label:`and dark again inside that`})})})]}),(0,g.jsx)(s,{accentColor:`orange`,grayColor:`slate`,appearance:`dark`,"data-testid":`same-element`,children:(0,g.jsx)(h,{label:`accent and appearance on one element`})})]})}),play:async({canvas:e})=>{let t=(e,t)=>getComputedStyle(e).getPropertyValue(t).trim(),n=e.getByTestId(`dark`),r=e.getByTestId(`island`);for(let i of[`--primary-text`,`--primary`,`--ring`,`--foreground`,`--muted-foreground`,`--control-border`])await _(t(r,i)).not.toBe(t(n,i)),await _(t(e.getByTestId(`deep`),i)).toBe(t(n,i)),await _(t(e.getByTestId(`same-element`),i)).toBe(t(n,i))}},E=[`AccentColor`,`GrayColor`,`Scaling`,`Appearance`,`TokenOverride`,`Nested`,`NestedPalettes`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    // Changing the accent has to actually move --primary.
    await expect(solid('blue')).not.toBe(solid('red'));
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        background: 'var(--background)',
        padding: 'var(--space-2) var(--space-3)'
      }}>
            <span style={{
          fontSize: 'var(--text-body)',
          color: 'var(--foreground)'
        }}>{gray}</span>
            <span style={{
          fontSize: 'var(--text-body)',
          color: 'var(--muted-foreground)'
        }}>muted</span>
          </div>
        </Theme>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.stackWide} style={{
    gap: 'var(--space-4)'
  }}>
      {SCALINGS.map(scaling => <Theme key={scaling} scaling={scaling} className={docs.row} style={{
      gap: 'var(--space-3)'
    }}>
          <span className={docs.caption} style={{
        width: '3rem',
        flexShrink: 0
      }}>{scaling}</span>
          <Button>Button</Button>
          <div style={{
        width: '10rem'
      }}>
            <TextInput aria-label="Input" placeholder="Input" isFullWidth />
          </div>
        </Theme>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const h = (label: string) => canvas.getByText(label).parentElement!.querySelector('button')!.getBoundingClientRect().height;
    // Scaling drives --spacing, so the control height has to follow it.
    await expect(h('90%')).toBeLessThan(h('110%'));
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={docs.gridHalves} style={{
    gap: 'var(--space-4)'
  }}>
      <Theme appearance="light" style={{
      borderRadius: 'var(--radius-panel)',
      background: 'var(--background)',
      padding: 'var(--space-4)'
    }}>
        <Panel label="appearance=&quot;light&quot;" />
      </Theme>
      <Theme appearance="dark" style={{
      borderRadius: 'var(--radius-panel)',
      background: 'var(--background)',
      padding: 'var(--space-4)'
    }}>
        <Panel label="appearance=&quot;dark&quot;" />
      </Theme>
    </div>,
  play: async ({
    canvas
  }) => {
    const [light, dark] = canvas.getAllByText(/appearance=/);
    const bg = (el: HTMLElement) => getComputedStyle(el.closest('.light, .dark') as HTMLElement).getPropertyValue('--background');
    await expect(bg(light)).not.toBe(bg(dark));
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      primary: 'oklch(0.55 0.2 150)'
    }}>
        <Panel label="radius + primary overridden" />
      </Theme>
    </div>,
  play: async ({
    canvas
  }) => {
    const scope = canvas.getByText('radius + primary overridden').closest('div[style]');
    await expect(scope).toHaveStyle({
      '--radius': '1.5rem'
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Theme appearance="dark" style={{
    borderRadius: 'var(--radius-panel)',
    background: 'var(--background)',
    padding: 'var(--space-4)'
  }}>
      <div className={docs.stackWide} style={{
      gap: 'var(--space-4)'
    }}>
        <Panel label="dark page" />
        <Theme appearance="light" style={{
        borderRadius: 'var(--radius-panel)',
        background: 'var(--background)',
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
    const bg = (el: Element) => getComputedStyle(el as HTMLElement).getPropertyValue('--background').trim();
    // Compared against :root rather than a literal, so the assertion is about
    // the nested scope resolving to the light default — not about how the
    // generator happens to spell oklch().
    await expect(bg(island!)).toBe(bg(document.documentElement));
    await expect(bg(island!)).not.toBe(bg(island!.parentElement!.closest('.dark')!));
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Theme appearance="dark" accentColor="orange" grayColor="slate" data-testid="dark" style={{
    background: 'var(--background)',
    padding: 'var(--space-4)'
  }}>
      <Theme appearance="light" style={{
      background: 'var(--background)',
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
    for (const name of ['--primary-text', '--primary', '--ring', '--foreground', '--muted-foreground', '--control-border']) {
      // Light inside dark: the light palette, not the page's dark one.
      await expect(v(island, name)).not.toBe(v(dark, name));
      // Dark again one level down, and on the same element: the dark palette.
      await expect(v(canvas.getByTestId('deep'), name)).toBe(v(dark, name));
      await expect(v(canvas.getByTestId('same-element'), name)).toBe(v(dark, name));
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`An accent or gray set on a light island inside a dark page takes the
island's appearance, not the page's: the nearest scope wins at any depth.`,...T.parameters?.docs?.description}}}})))()}export{T as a,C as c,w as i,D as l,S as n,m as o,b as r,x as s,y as t};