import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./palettes-BiV_yfbL.js";import{a as r,o as i}from"./Theme-2soWRbQy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{a as c,r as l,t as u}from"./story-helpers-EInZsLED.js";import{n as d,t as f}from"./ProgressBar-9A23yjyg.js";var p=t({Anatomy:()=>D,Default:()=>v,DoNameTheTask:()=>O,DontBareBar:()=>k,FillContrast:()=>A,Indeterminate:()=>w,Max:()=>C,Sizes:()=>S,TopList:()=>y,ValueLabel:()=>b,Variants:()=>x,WithoutVisibleLabel:()=>T,__namedExportsOrder:()=>j,anatomyParts:()=>E,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{o(),i(),l(),d(),m=a(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Loaders/ProgressBar`,tags:[`beta`],component:f,argTypes:{value:{description:"How far along, out of `max`. Ignored while `isIndeterminate`.",control:{type:`range`,min:0,max:100},table:{type:{summary:`number`},defaultValue:{summary:`0`}}},max:{description:"The value at which the task is done. The spec calls it `maxValue`.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`100`}}},size:{description:"Track height: 4px (`sm`), 8px (`md`) or 12px (`lg`).",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},variant:{description:"Colour of the fill. `destructive` for a task that is failing or about to run out, such as storage nearly full.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`],table:{type:{summary:`'primary' | 'accent' | 'secondary' | 'destructive'`},defaultValue:{summary:`'primary'`}}},isRounded:{description:`Pill ends on the track and the fill.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isIndeterminate:{description:`Progress is happening but how much is unknown: a third of the track slides across.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},showValueLabel:{description:`Shows the percentage after the bar, in tabular figures. Hidden while indeterminate.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{description:`A visible label above the bar; also its accessible name.`,control:`text`,table:{type:{summary:`ReactNode`}}},"aria-label":{description:"The accessible name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`}}}},args:{value:70,label:`Uploading`},excludeStories:[`anatomyParts`],decorators:[e=>(0,m.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},_={display:`grid`,gap:`var(--space-4)`},v={play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await h(t).toHaveAttribute(`aria-valuenow`,`70`),await h(t).toHaveAttribute(`aria-valuemax`,`100`);let n=document.createElement(`span`);n.style.transitionDuration=`var(--duration-slow)`,t.append(n);let r=t.querySelector(`[role="progressbar"] > div > :first-child > *`);await h(getComputedStyle(r).transitionDuration).toBe(getComputedStyle(n).transitionDuration),n.remove()}},y={render:()=>{let e=[[`/`,154],[`/api/v1/invoices`,131],[`/dashboard`,43],[`/login`,21]];return(0,m.jsx)(`ol`,{style:{display:`grid`,gap:`var(--space-cluster)`,margin:0,padding:0,listStyle:`none`},children:e.map(([t,n])=>(0,m.jsxs)(`li`,{style:{display:`grid`,gridTemplateColumns:`1fr 8rem 3rem`,gap:`var(--space-cluster)`,alignItems:`center`},children:[(0,m.jsx)(`span`,{children:t}),(0,m.jsx)(f,{value:n,max:e[0][1],size:`sm`,isRounded:!0,"aria-label":t}),(0,m.jsx)(`span`,{style:{textAlign:`end`,fontVariantNumeric:`tabular-nums`},children:n})]},t))})},play:async({canvas:e})=>{await h(e.getByRole(`progressbar`,{name:`/`})).toHaveAttribute(`aria-valuenow`,`154`),await h(e.getByRole(`progressbar`,{name:`/login`})).toHaveAttribute(`aria-valuemax`,`154`)}},b={args:{showValueLabel:!0},play:async({canvas:e})=>{let t=e.getByText(`70%`);await h(t).toBeVisible();let n=document.createElement(`span`);n.style.color=`var(--muted-foreground)`,t.after(n),await h(getComputedStyle(t).color).toBe(getComputedStyle(n).color),n.remove()}},x={render:e=>(0,m.jsx)(`div`,{style:_,children:[`primary`,`accent`,`secondary`,`destructive`].map(t=>(0,m.jsx)(f,{...e,variant:t,label:t,showValueLabel:!0},t))})},S={render:e=>(0,m.jsx)(`div`,{style:_,children:[`sm`,`md`,`lg`].map(t=>(0,m.jsx)(f,{...e,size:t,label:t,isRounded:!0},t))})},C={args:{value:3,max:5,showValueLabel:!0,label:`Steps done`},play:async({canvas:e})=>{await h(e.getByRole(`progressbar`)).toHaveAttribute(`aria-valuemax`,`5`),await h(e.getByText(`60%`)).toBeVisible()}},w={args:{isIndeterminate:!0,label:`Connecting`},play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Connecting`});await h(t).not.toHaveAttribute(`aria-valuenow`);let n=t.querySelector(`:scope > div > :first-child > *`);await h(getComputedStyle(n).animationDuration).toBe(`1.4s`),await h(c(`prefers-reduced-motion: reduce`,n).map(e=>e.style.animationDuration)).toContain(`4s`)}},T={args:{label:void 0,"aria-label":`Storage used`},play:async({canvas:e})=>{await h(e.getByRole(`progressbar`,{name:`Storage used`})).toBeVisible()}},E=[{name:`Label`,selector:`[role="progressbar"] > :first-child`,description:`Optional, above the bar. Names the progressbar.`},{name:`Track`,selector:`[role="progressbar"] > div > :first-child`,description:`The full length, --secondary.`},{name:`Indicator`,selector:`[role="progressbar"] > div > :first-child > *`,description:`The filled share, coloured by variant. A sliding third when indeterminate.`},{name:`Value label`,selector:`[role="progressbar"] > div > :last-child`,description:`Optional, showValueLabel: the percentage after the bar.`}],D={tags:[`!dev`],args:{showValueLabel:!0,size:`lg`},decorators:[e=>(0,m.jsx)(`div`,{style:{inlineSize:`20rem`},children:e()})],play:async({canvasElement:e})=>{let t=await s(e,E);await h(t[0]).toHaveTextContent(`Uploading`),await h(t[3]).toHaveTextContent(`70%`)}},O={args:{label:`Uploading report.pdf`,showValueLabel:!0}},k={tags:[`!dev`],args:{label:void 0,"aria-label":`Uploading report.pdf`,showValueLabel:!0}},A={decorators:[],render:()=>(0,m.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,m.jsx)(r,{appearance:e,style:{background:`var(--background)`,padding:8},children:n.map(t=>(0,m.jsx)(r,{accentColor:t,style:{display:`flex`,gap:4},children:[`primary`,`accent`,`secondary`,`destructive`].map(n=>(0,m.jsx)(f,{size:`sm`,variant:n,value:50,"aria-label":`${e} ${t} ${n}`},n))},t))},e))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[role="progressbar"]`)){let e=getComputedStyle(n.parentElement.parentElement).backgroundColor,r=n.querySelector(`:scope > div > :first-child`),i=getComputedStyle(r.firstElementChild).backgroundColor,a=u(i,e,getComputedStyle(r).backgroundColor);a<3&&t.push(`${n.getAttribute(`aria-label`)}: ${a.toFixed(2)}`)}await h(t).toEqual([])}},j=[`Default`,`TopList`,`ValueLabel`,`Variants`,`Sizes`,`Max`,`Indeterminate`,`WithoutVisibleLabel`,`anatomyParts`,`Anatomy`,`DoNameTheTask`,`DontBareBar`,`FillContrast`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(bar).toHaveAttribute('aria-valuenow', '70');
    await expect(bar).toHaveAttribute('aria-valuemax', '100');
    // The fill eases on --duration-slow, which reduced motion sets to 0ms.
    const probe = document.createElement('span');
    probe.style.transitionDuration = 'var(--duration-slow)';
    bar.append(probe);
    const indicator = bar.querySelector('[role="progressbar"] > div > :first-child > *')!;
    await expect(getComputedStyle(indicator).transitionDuration).toBe(getComputedStyle(probe).transitionDuration);
    probe.remove();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = [['/', 154], ['/api/v1/invoices', 131], ['/dashboard', 43], ['/login', 21]] as const;
    return <ol style={{
      display: 'grid',
      gap: 'var(--space-cluster)',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }}>
        {rows.map(([path, count]) => <li key={path} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 8rem 3rem',
        gap: 'var(--space-cluster)',
        alignItems: 'center'
      }}>
            <span>{path}</span>
            <ProgressBar value={count} max={rows[0][1]} size="sm" isRounded aria-label={path} />
            <span style={{
          textAlign: 'end',
          fontVariantNumeric: 'tabular-nums'
        }}>{count}</span>
          </li>)}
      </ol>;
  },
  play: async ({
    canvas
  }) => {
    // The largest row fills its bar; the rest are a share of it, not of the total.
    await expect(canvas.getByRole('progressbar', {
      name: '/'
    })).toHaveAttribute('aria-valuenow', '154');
    await expect(canvas.getByRole('progressbar', {
      name: '/login'
    })).toHaveAttribute('aria-valuemax', '154');
  }
}`,...y.parameters?.docs?.source},description:{story:`A top-N list ("Top paths", "Top countries") is not a chart: one bar per row,
each measured against the largest, the count beside it.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    showValueLabel: true
  },
  play: async ({
    canvas
  }) => {
    const value = canvas.getByText('70%');
    await expect(value).toBeVisible();
    // The value label is --muted-foreground (read back through a probe beside it).
    const probe = document.createElement('span');
    probe.style.color = 'var(--muted-foreground)';
    value.after(probe);
    await expect(getComputedStyle(value).color).toBe(getComputedStyle(probe).color);
    probe.remove();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} {...args} variant={variant} label={variant} showValueLabel />)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <ProgressBar key={size} {...args} size={size} label={size} isRounded />)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    showValueLabel: true,
    label: 'Steps done'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '5');
    await expect(canvas.getByText('60%')).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Connecting'
  },
  play: async ({
    canvas
  }) => {
    // No value to report: aria-valuenow is absent, not 0.
    const bar = canvas.getByRole('progressbar', {
      name: 'Connecting'
    });
    await expect(bar).not.toHaveAttribute('aria-valuenow');
    // Reduced motion slows the slide to 4s a pass. A play cannot set
    // prefers-reduced-motion, so read the rule that would apply.
    const indicator = bar.querySelector(':scope > div > :first-child > *')!;
    await expect(getComputedStyle(indicator).animationDuration).toBe('1.4s');
    await expect(mediaRules('prefers-reduced-motion: reduce', indicator).map(r => r.style.animationDuration)).toContain('4s');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Storage used'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Storage used'
    })).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    showValueLabel: true,
    size: 'lg'
  },
  // The docs stage shrink-wraps its example; a bar needs a width to show its fill.
  decorators: [Story => <div style={{
    inlineSize: '20rem'
  }}>{Story()}</div>],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Uploading');
    await expect(found[3]).toHaveTextContent('70%');
  }
}`,...D.parameters?.docs?.source},description:{story:`Every part present.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uploading report.pdf',
    showValueLabel: true
  }
}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Do: the label says what is in progress.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: undefined,
    'aria-label': 'Uploading report.pdf',
    showValueLabel: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Don't: a bare bar, with only an aria-label, leaves sighted readers guessing.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      background: 'var(--background)',
      padding: 8
    }}>
          {ACCENT_COLORS.map(accent => <Theme key={accent} accentColor={accent} style={{
        display: 'flex',
        gap: 4
      }}>
              {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} size="sm" variant={variant} value={50} aria-label={\`\${mode} \${accent} \${variant}\`} />)}
            </Theme>)}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const bar of canvasElement.querySelectorAll<HTMLElement>('[role="progressbar"]')) {
      const page = getComputedStyle(bar.parentElement!.parentElement!).backgroundColor;
      const track = bar.querySelector(':scope > div > :first-child')!;
      const fill = getComputedStyle(track.firstElementChild!).backgroundColor;
      const value = contrast(fill, page, getComputedStyle(track).backgroundColor);
      if (value < 3) failures.push(\`\${bar.getAttribute('aria-label')}: \${value.toFixed(2)}\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...A.parameters?.docs?.source},description:{story:`The fill clears 3:1 on the track for every variant, under all seventeen accents, in both modes.`,...A.parameters?.docs?.description}}}})))()}export{C as a,b as c,E as d,M as f,w as i,x as l,O as n,p as o,k as r,S as s,D as t,T as u};