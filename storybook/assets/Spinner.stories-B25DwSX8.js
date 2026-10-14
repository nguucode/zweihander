import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./palettes-BiV_yfbL.js";import{n as r,r as i}from"./Theme-BL5fAwhM.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{a as c,r as l,t as u}from"./story-helpers-EInZsLED.js";import{n as d,t as f}from"./Spinner-x3z_vCDn.js";var p=t({Anatomy:()=>k,Clamped:()=>T,Default:()=>b,Delay:()=>D,Determinate:()=>w,DoOneForTheRegion:()=>A,DontOnePerItem:()=>j,IndeterminateWithValue:()=>E,IndicatorContrast:()=>M,Sizes:()=>S,Variants:()=>C,WithLabel:()=>x,__namedExportsOrder:()=>N,anatomyParts:()=>O,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{o(),i(),l(),d(),m=a(),{expect:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Loaders/Spinner`,tags:[`beta`],component:f,argTypes:{size:{description:"The ring: 16px (`sm`), 24px (`md`) or 32px (`lg`) across.",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},variant:{description:"Colour of the indicator. `accent` is the foreground, as on Button.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`],table:{type:{summary:`'primary' | 'accent' | 'secondary'`},defaultValue:{summary:`'accent'`}}},label:{description:`Shown under the indicator, and its accessible name. Without one the name is "Loading", visually hidden.`,control:`text`,table:{type:{summary:`string`}}},delay:{description:`Milliseconds before anything shows, so a fast load never flashes a spinner. The live region is there from the start.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},value:{description:`0–100, clamped. Turns the spinner into a progress ring that shows how far along it is. Omit to spin.`,control:{type:`range`,min:0,max:100},table:{type:{summary:`number`}}},isIndeterminate:{description:"Spin even when `value` is given.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},excludeStories:[`anatomyParts`]},v=e=>{let t=document.createElement(`span`);t.style.transitionDuration=`var(--duration-slow)`,e.append(t);let n=getComputedStyle(t).transitionDuration;return t.remove(),n},y={display:`flex`,gap:`var(--space-6)`,alignItems:`center`},b={play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`,{name:`Loading`});await g(()=>h(n).toHaveTextContent(`Loading`));let r=t.querySelector(`svg`);await h(r).toHaveAttribute(`aria-hidden`,`true`);let i=c(`prefers-reduced-motion: reduce`,r).map(e=>e.style.animationDuration);await h(i).toContain(`var(--duration-spin-reduced)`)}},x={args:{label:`Loading projects…`},play:async({canvas:e})=>{await h(e.getByRole(`status`,{name:`Loading projects…`})).toBeInTheDocument(),await h(await e.findByText(`Loading projects…`)).toBeVisible()}},S={render:e=>(0,m.jsx)(`div`,{style:y,children:[`sm`,`md`,`lg`].map(t=>(0,m.jsx)(f,{...e,size:t,label:t},t))}),play:async({canvasElement:e})=>{await g(()=>h(e.querySelectorAll(`svg`)).toHaveLength(3));let t=[...e.querySelectorAll(`svg`)].map(e=>parseFloat(getComputedStyle(e).width));await h(t).toEqual([16,24,32])}},C={render:e=>(0,m.jsx)(`div`,{style:y,children:[`primary`,`accent`,`secondary`].map(t=>(0,m.jsx)(f,{...e,variant:t,label:t},t))})},w={args:{value:70,label:`Uploading`,variant:`primary`,size:`lg`},play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await h(t).toHaveAttribute(`aria-valuenow`,`70`),await h(t).toHaveAttribute(`aria-valuemin`,`0`),await h(t).toHaveAttribute(`aria-valuemax`,`100`);let n=t.querySelector(`svg > circle:last-child`);await h(getComputedStyle(n).transitionDuration).toBe(v(t))}},T={args:{value:150,label:`Uploading`},play:async({canvas:e})=>{await h(e.getByRole(`progressbar`,{name:`Uploading`})).toHaveAttribute(`aria-valuenow`,`100`)}},E={args:{value:40,isIndeterminate:!0},play:async({canvas:e})=>{await h(e.queryByRole(`progressbar`)).toBeNull(),await h(e.getByRole(`status`,{name:`Loading`})).toBeInTheDocument()}},D={args:{delay:400},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`);await h(n).toBeEmptyDOMElement(),await g(()=>h(t.querySelector(`svg`)).toBeVisible(),{timeout:2e3}),await h(n).toHaveTextContent(`Loading`)}},O=[{name:`Track`,selector:`svg > circle:first-child`,description:`The full ring, --border. Frames the motion; decoration.`},{name:`Indicator`,selector:`svg > circle:last-child`,description:`The arc: a quarter turn while spinning, or the value as a share of the ring.`},{name:`Label`,selector:`[role="progressbar"] > span`,description:`Optional, under the ring. Also the accessible name.`}],k={tags:[`!dev`],args:{value:70,label:`Uploading`,size:`lg`,variant:`primary`},play:async({canvasElement:e})=>{let t=await s(e,O);await h(t[2]).toHaveTextContent(`Uploading`)}},A={render:e=>(0,m.jsx)(`div`,{"aria-busy":`true`,style:{display:`grid`,placeItems:`center`,inlineSize:320,blockSize:120,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:(0,m.jsx)(f,{...e,label:`Loading projects…`})})},j={tags:[`!dev`],render:e=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[1,2,3].map(t=>(0,m.jsx)(`div`,{style:{display:`grid`,placeItems:`center`,inlineSize:100,blockSize:120,border:`1px solid var(--border)`,borderRadius:`var(--radius-md)`},children:(0,m.jsx)(f,{...e})},t))})},M={render:()=>(0,m.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,m.jsx)(r,{appearance:e,style:{background:`var(--background)`,padding:8},children:n.map(t=>(0,m.jsx)(r,{accentColor:t,style:{display:`flex`,gap:4},children:[`primary`,`accent`,`secondary`].map(n=>(0,m.jsx)(f,{size:`sm`,variant:n,value:50,label:`${e} ${t} ${n}`},n))},t))},e))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[role="progressbar"]`)){let e=getComputedStyle(n.parentElement.parentElement).backgroundColor,r=u(getComputedStyle(n.querySelector(`svg > circle:last-child`)).stroke,e);r<3&&t.push(`${n.getAttribute(`aria-label`)}: ${r.toFixed(2)}`)}await h(t).toEqual([])}},N=[`Default`,`WithLabel`,`Sizes`,`Variants`,`Determinate`,`Clamped`,`IndeterminateWithValue`,`Delay`,`anatomyParts`,`Anatomy`,`DoOneForTheRegion`,`DontOnePerItem`,`IndicatorContrast`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    // A status, named "Loading" when no label is given; the text that is
    // announced arrives after the region is in the page.
    const status = canvas.getByRole('status', {
      name: 'Loading'
    });
    await waitFor(() => expect(status).toHaveTextContent('Loading'));
    const svg = canvasElement.querySelector('svg')!;
    await expect(svg).toHaveAttribute('aria-hidden', 'true');
    // Reduced motion slows the turn rather than stopping it. A play cannot
    // set prefers-reduced-motion, so read the rule that would apply.
    const reduced = mediaRules('prefers-reduced-motion: reduce', svg).map(r => r.style.animationDuration);
    await expect(reduced).toContain('var(--duration-spin-reduced)');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading projects…'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status', {
      name: 'Loading projects…'
    })).toBeInTheDocument();
    await expect(await canvas.findByText('Loading projects…')).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md', 'lg'] as const).map(size => <Spinner key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('svg')).toHaveLength(3));
    // Layout width, not the bounding box: the ring is spinning, and a rotated
    // square's box is wider than the square.
    const widths = [...canvasElement.querySelectorAll('svg')].map(s => parseFloat(getComputedStyle(s).width));
    await expect(widths).toEqual([16, 24, 32]);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map(variant => <Spinner key={variant} {...args} variant={variant} label={variant} />)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    label: 'Uploading',
    variant: 'primary',
    size: 'lg'
  },
  play: async ({
    canvas
  }) => {
    const ring = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(ring).toHaveAttribute('aria-valuenow', '70');
    await expect(ring).toHaveAttribute('aria-valuemin', '0');
    await expect(ring).toHaveAttribute('aria-valuemax', '100');
    // The ring eases on --duration-slow, which reduced motion sets to 0ms.
    const arc = ring.querySelector('svg > circle:last-child')!;
    await expect(getComputedStyle(arc).transitionDuration).toBe(durationSlow(ring));
  }
}`,...w.parameters?.docs?.source},description:{story:`With a value it becomes a progress ring and says how far along it is.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 150,
    label: 'Uploading'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Uploading'
    })).toHaveAttribute('aria-valuenow', '100');
  }
}`,...T.parameters?.docs?.source},description:{story:`Values outside 0–100 are clamped.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    isIndeterminate: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('progressbar')).toBeNull();
    await expect(canvas.getByRole('status', {
      name: 'Loading'
    })).toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source},description:{story:`isIndeterminate wins over value: it spins, and is a status again.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 400
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const status = canvas.getByRole('status');
    await expect(status).toBeEmptyDOMElement();
    await waitFor(() => expect(canvasElement.querySelector('svg')).toBeVisible(), {
      timeout: 2000
    });
    await expect(status).toHaveTextContent('Loading');
  }
}`,...D.parameters?.docs?.source},description:{story:`Nothing visible for the first 400ms, so a fast load never flashes a
spinner. The empty live region is there from the start, so its text is
announced when it arrives.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    value: 70,
    label: 'Uploading',
    size: 'lg',
    variant: 'primary'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Uploading');
  }
}`,...k.parameters?.docs?.source},description:{story:`Every part present. A progress ring, so the arc holds still to be pointed at.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div aria-busy="true" style={{
    display: 'grid',
    placeItems: 'center',
    inlineSize: 320,
    blockSize: 120,
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)'
  }}>
      <Spinner {...args} label="Loading projects…" />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Do: one spinner, labelled, for the region that is loading.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-2)'
  }}>
      {[1, 2, 3].map(n => <div key={n} style={{
      display: 'grid',
      placeItems: 'center',
      inlineSize: 100,
      blockSize: 120,
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)'
    }}>
          <Spinner {...args} />
        </div>)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Don't: a spinner in every card says the same thing three times.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      background: 'var(--background)',
      padding: 8
    }}>
          {ACCENT_COLORS.map(accent => <Theme key={accent} accentColor={accent} style={{
        display: 'flex',
        gap: 4
      }}>
              {(['primary', 'accent', 'secondary'] as const).map(variant => <Spinner key={variant} size="sm" variant={variant} value={50} label={\`\${mode} \${accent} \${variant}\`} />)}
            </Theme>)}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const ring of canvasElement.querySelectorAll<HTMLElement>('[role="progressbar"]')) {
      const page = getComputedStyle(ring.parentElement!.parentElement!).backgroundColor;
      const value = contrast(getComputedStyle(ring.querySelector('svg > circle:last-child')!).stroke, page);
      if (value < 3) failures.push(\`\${ring.getAttribute('aria-label')}: \${value.toFixed(2)}\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...M.parameters?.docs?.source},description:{story:`The indicator clears 3:1 on the page for every variant, under all seventeen accents, in both modes.`,...M.parameters?.docs?.description}}}})))()}export{j as a,C as c,P as d,A as i,x as l,D as n,S as o,w as r,p as s,k as t,O as u};