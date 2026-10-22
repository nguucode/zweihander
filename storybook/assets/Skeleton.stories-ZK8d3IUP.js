import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{i as s,r as c,s as l}from"./story-helpers-EInZsLED.js";import{n as u,t as d}from"./Skeleton-DaxWbZcD.js";var f=t({Anatomy:()=>T,Animated:()=>x,Appearances:()=>v,CardPlaceholder:()=>S,Default:()=>_,DontOneBlock:()=>E,FullWidth:()=>b,Muted:()=>C,Rows:()=>y,__namedExportsOrder:()=>D,anatomyParts:()=>w,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),r(),u(),c(),p=i(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Loaders/Skeleton`,tags:[`beta`],component:d,argTypes:{width:{description:`A number is pixels; a string is any CSS length. Fills the container when omitted; a circle is 40px.`,control:`number`,table:{type:{summary:`number | string`},defaultValue:{summary:`'100%'`}}},height:{description:"Of the shape, or of each line with `rows`. A single circle ignores it: its height is its width.",control:`number`,table:{type:{summary:`number | string`},defaultValue:{summary:`16`}}},appearance:{description:"The corners: `square`, `rounded`, or a `circle` for an avatar. With `rows`, a circle draws rounded lines.",control:`inline-radio`,options:[`circle`,`square`,`rounded`],table:{type:{summary:`'circle' | 'square' | 'rounded'`},defaultValue:{summary:`'square'`}}},rows:{description:`Lines of text: stacked bars 8px apart, the last one at 60%.`,control:`number`,table:{type:{summary:`number`}}},isFullWidth:{description:"Fills the width of its container, whatever `width` says.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},hasAnimation:{description:`A slow pulse. Off by default: a screen of pulsing shapes is noise.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{width:240,height:16},excludeStories:[`anatomyParts`]},g={background:`var(--background)`,padding:`var(--space-4)`,borderRadius:`var(--radius-lg)`},_={play:async({canvasElement:e})=>{let t=e.querySelector(`div > div`);await m(t).toHaveAttribute(`aria-hidden`,`true`),await m(t.getBoundingClientRect().width).toBe(240)}},v={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,p.jsx)(d,{...e,appearance:`circle`,width:40,"data-testid":`circle`}),(0,p.jsx)(d,{...e,appearance:`square`,width:120,height:40}),(0,p.jsx)(d,{...e,appearance:`rounded`,width:120,height:40})]}),play:async({canvas:e})=>{let{width:t,height:n}=e.getByTestId(`circle`).getBoundingClientRect();await m([t,n]).toEqual([40,40])}},y={args:{rows:4,width:320,height:12,appearance:`rounded`},play:async({canvasElement:e})=>{await m(e.firstElementChild).toHaveAttribute(`aria-hidden`,`true`);let t=[...e.querySelectorAll(`[aria-hidden] > div`)].map(e=>e.getBoundingClientRect());await m(t).toHaveLength(4),await m(t.map(e=>e.height)).toEqual([12,12,12,12]),await m(t.map(e=>e.width)).toEqual([320,320,320,192])}},b={args:{isFullWidth:!0,width:void 0}},x={args:{hasAnimation:!0,rows:3,width:320,appearance:`rounded`},play:async({canvasElement:e})=>{let t=e.querySelector(`[aria-hidden] > div`);await m(getComputedStyle(t).animationName).not.toBe(`none`);let n=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSMediaRule&&e.conditionText.includes(`prefers-reduced-motion: reduce`)).flatMap(e=>[...e.cssRules]).filter(e=>e instanceof CSSStyleRule&&t.matches(e.selectorText));await m(n.map(e=>e.style.animationName)).toContain(`none`)}},S={render:()=>(0,p.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Loading profile`,role:`region`,style:{...g,display:`flex`,alignItems:`flex-start`,gap:`var(--space-3)`,inlineSize:320},children:[(0,p.jsx)(d,{appearance:`circle`,width:40,hasAnimation:!0,style:{flexShrink:0}}),(0,p.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:`var(--space-2)`},children:[(0,p.jsx)(d,{appearance:`rounded`,height:14,width:`50%`,hasAnimation:!0}),(0,p.jsx)(d,{appearance:`rounded`,rows:2,height:10,isFullWidth:!0,hasAnimation:!0})]})]}),play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Loading profile`});await m(t).toHaveAttribute(`aria-busy`,`true`),await m(t.querySelectorAll(`[aria-hidden="true"]`)).toHaveLength(3),await m(t).toHaveTextContent(``)}},C={render:e=>(0,p.jsx)(`div`,{children:[`light`,`dark`].map(t=>(0,p.jsxs)(n,{appearance:t,style:{background:`var(--background)`,padding:`var(--space-2)`},children:[(0,p.jsx)(d,{...e}),(0,p.jsx)(`span`,{style:{color:`var(--muted)`}})]},t))}),play:async({canvasElement:e})=>{for(let t of e.querySelectorAll(`[aria-hidden="true"]`)){let e=getComputedStyle(t).backgroundColor;await m(e).toBe(getComputedStyle(t.nextElementSibling).color);let n=getComputedStyle(t.parentElement).backgroundColor,[r,i]=[s(l(n,e)),s(l(n))].sort((e,t)=>t-e);await m((r+.05)/(i+.05)).toBeLessThan(3)}}},w=[{name:`Shape`,selector:`[data-part="shape"]`,description:`One bone in --muted, sized like what it stands in for: here an avatar.`},{name:`Line`,selector:`[data-part="rows"] > :first-child`,description:`With rows, one line of text.`},{name:`Last line`,selector:`[data-part="rows"] > :last-child`,description:`At 60%, like the end of a paragraph.`}],T={tags:[`!dev`],render:()=>(0,p.jsxs)(`div`,{style:{...g,display:`flex`,alignItems:`flex-start`,gap:`var(--space-3)`,inlineSize:320},children:[(0,p.jsx)(d,{appearance:`circle`,width:40,"data-part":`shape`,style:{flexShrink:0}}),(0,p.jsx)(d,{appearance:`rounded`,rows:3,height:12,isFullWidth:!0,"data-part":`rows`,style:{flex:1}})]}),play:async({canvasElement:e})=>{await o(e,w)}},E={tags:[`!dev`],render:()=>(0,p.jsx)(`div`,{"aria-busy":`true`,"aria-label":`Loading profile`,role:`region`,style:{...g,inlineSize:320},children:(0,p.jsx)(d,{appearance:`rounded`,height:88,isFullWidth:!0})})},D=[`Default`,`Appearances`,`Rows`,`FullWidth`,`Animated`,`CardPlaceholder`,`Muted`,`anatomyParts`,`Anatomy`,`DontOneBlock`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const bone = canvasElement.querySelector('div > div')!;
    await expect(bone).toHaveAttribute('aria-hidden', 'true');
    await expect(bone.getBoundingClientRect().width).toBe(240);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    alignItems: 'center'
  }}>
      <Skeleton {...args} appearance="circle" width={40} data-testid="circle" />
      <Skeleton {...args} appearance="square" width={120} height={40} />
      <Skeleton {...args} appearance="rounded" width={120} height={40} />
    </div>,
  play: async ({
    canvas
  }) => {
    // args carry height 16; a circle ignores it and stays round.
    const {
      width,
      height
    } = canvas.getByTestId('circle').getBoundingClientRect();
    await expect([width, height]).toEqual([40, 40]);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 4,
    width: 320,
    height: 12,
    appearance: 'rounded'
  },
  play: async ({
    canvasElement
  }) => {
    // The whole stack is hidden, not just each bar.
    await expect(canvasElement.firstElementChild).toHaveAttribute('aria-hidden', 'true');
    const lines = [...canvasElement.querySelectorAll('[aria-hidden] > div')].map(l => l.getBoundingClientRect());
    await expect(lines).toHaveLength(4);
    await expect(lines.map(l => l.height)).toEqual([12, 12, 12, 12]);
    // The last line is 60% of the 320px width, like the end of a paragraph.
    await expect(lines.map(l => l.width)).toEqual([320, 320, 320, 192]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    width: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    hasAnimation: true,
    rows: 3,
    width: 320,
    appearance: 'rounded'
  },
  play: async ({
    canvasElement
  }) => {
    // A play cannot set prefers-reduced-motion, so read the rule that reaches the bars.
    const bar = canvasElement.querySelector('[aria-hidden] > div')!;
    await expect(getComputedStyle(bar).animationName).not.toBe('none');
    const reduced = [...document.styleSheets].flatMap(sheet => {
      try {
        return [...sheet.cssRules];
      } catch {
        return []; // cross-origin
      }
    }).filter((r): r is CSSMediaRule => r instanceof CSSMediaRule && r.conditionText.includes('prefers-reduced-motion: reduce')).flatMap(m => [...m.cssRules]).filter((r): r is CSSStyleRule => r instanceof CSSStyleRule && bar.matches(r.selectorText));
    await expect(reduced.map(r => r.style.animationName)).toContain('none');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" aria-label="Loading profile" role="region" style={{
    ...card,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-3)',
    inlineSize: 320
  }}>
      <Skeleton appearance="circle" width={40} hasAnimation style={{
      flexShrink: 0
    }} />
      <div style={{
      flex: 1,
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
        <Skeleton appearance="rounded" height={14} width="50%" hasAnimation />
        <Skeleton appearance="rounded" rows={2} height={10} isFullWidth hasAnimation />
      </div>
    </div>,
  play: async ({
    canvas
  }) => {
    // The region says it is busy; the shapes inside it say nothing.
    const region = canvas.getByRole('region', {
      name: 'Loading profile'
    });
    await expect(region).toHaveAttribute('aria-busy', 'true');
    // Circle, title bar and the two-line stack: all three hidden.
    await expect(region.querySelectorAll('[aria-hidden="true"]')).toHaveLength(3);
    await expect(region).toHaveTextContent('');
  }
}`,...S.parameters?.docs?.source},description:{story:`How it is used: shapes of the content, with aria-busy on the region.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      background: 'var(--background)',
      padding: 'var(--space-2)'
    }}>
          <Skeleton {...args} />
          <span style={{
        color: 'var(--muted)'
      }} />
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    for (const bone of canvasElement.querySelectorAll<HTMLElement>('[aria-hidden="true"]')) {
      const fill = getComputedStyle(bone).backgroundColor;
      // The bone is --muted (read back through a probe beside it).
      await expect(fill).toBe(getComputedStyle(bone.nextElementSibling!).color);
      const page = getComputedStyle(bone.parentElement!).backgroundColor;
      const [x, y] = [lum(paint(page, fill)), lum(paint(page))].sort((m, n) => n - m);
      await expect((x + 0.05) / (y + 0.05)).toBeLessThan(3);
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`--muted on the page, in both modes: under 3:1, the lowest floor, on purpose.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div style={{
    ...card,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-3)',
    inlineSize: 320
  }}>
      <Skeleton appearance="circle" width={40} data-part="shape" style={{
      flexShrink: 0
    }} />
      <Skeleton appearance="rounded" rows={3} height={12} isFullWidth data-part="rows" style={{
      flex: 1
    }} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expectAnatomy(canvasElement, anatomyParts);
  }
}`,...T.parameters?.docs?.source},description:{story:`Every part present: a shape, and a stack of lines.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div aria-busy="true" aria-label="Loading profile" role="region" style={{
    ...card,
    inlineSize: 320
  }}>
      <Skeleton appearance="rounded" height={88} isFullWidth />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Don't: one block for a whole card, which jumps to a different layout on load.`,...E.parameters?.docs?.description}}}})))()}export{E as a,w as c,S as i,O as l,x as n,y as o,v as r,f as s,T as t};