import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-CUvRSo4U.js";import{n as i,r as a}from"./Theme-BL5fAwhM.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{i as l,r as u,s as d}from"./story-helpers-EInZsLED.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=`_bone_o7264_4`,p=`_square_o7264_10`,m=`_rounded_o7264_13`,h=`_circle_o7264_16`,g=`_rows_o7264_23`,_=`_line_o7264_29`,v=`_animated_o7264_33`,y=`_pulse_o7264_1`,b={bone:f,square:p,rounded:m,circle:h,rows:g,line:_,animated:v,pulse:y}})))()}function S({width:e,height:t,appearance:n=`square`,rows:i,isFullWidth:a=!1,hasAnimation:o=!1,className:s,style:c,...l}){let u=a?`100%`:w(e);if(i&&i>1){let e=r(b.bone,b[n===`circle`?`rounded`:n],b.line,o&&b.animated);return(0,C.jsx)(`div`,{"aria-hidden":`true`,className:r(b.rows,s),style:{inlineSize:u,...c},...l,children:Array.from({length:i},(n,r)=>(0,C.jsx)(`div`,{className:e,style:{blockSize:w(t)}},r))})}let d=n===`circle`?void 0:w(t);return(0,C.jsx)(`div`,{"aria-hidden":`true`,className:r(b.bone,b[n],o&&b.animated,s),style:{inlineSize:u,blockSize:d,...c},...l})}var C,w;function T(){return(T=e((()=>{n(),x(),C=o(),w=e=>typeof e==`number`?`${e}px`:e,S.__docgenInfo={description:`A placeholder in the shape of content that is still loading. Decorative:
put \`aria-busy\` on the region it stands in for, and announce the load
elsewhere if it matters.`,methods:[],displayName:`Skeleton`,props:{width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`A number is pixels; a string is any CSS length.`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square' | 'rounded'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`},{name:`literal`,value:`'rounded'`}]},description:``,defaultValue:{value:`'square'`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:`Several lines of text: stacked bars, the last one shorter. A circle's rows are rounded bars.`},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hasAnimation:{required:!1,tsType:{name:`boolean`},description:`A gentle pulse. Off by default: many pulsing shapes are noise.`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var E=t({Anatomy:()=>z,Animated:()=>F,Appearances:()=>M,CardPlaceholder:()=>I,Default:()=>j,DontOneBlock:()=>B,FullWidth:()=>P,Muted:()=>L,Rows:()=>N,__namedExportsOrder:()=>V,anatomyParts:()=>R,default:()=>k}),D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{s(),a(),T(),u(),D=o(),{expect:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Loaders/Skeleton`,tags:[`beta`],component:S,argTypes:{width:{description:`A number is pixels; a string is any CSS length. Fills the container when omitted; a circle is 40px.`,control:`number`,table:{type:{summary:`number | string`},defaultValue:{summary:`'100%'`}}},height:{description:"Of the shape, or of each line with `rows`. A single circle ignores it: its height is its width.",control:`number`,table:{type:{summary:`number | string`},defaultValue:{summary:`16`}}},appearance:{description:"The corners: `square`, `rounded`, or a `circle` for an avatar. With `rows`, a circle draws rounded lines.",control:`inline-radio`,options:[`circle`,`square`,`rounded`],table:{type:{summary:`'circle' | 'square' | 'rounded'`},defaultValue:{summary:`'square'`}}},rows:{description:`Lines of text: stacked bars 8px apart, the last one at 60%.`,control:`number`,table:{type:{summary:`number`}}},isFullWidth:{description:"Fills the width of its container, whatever `width` says.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},hasAnimation:{description:`A slow pulse. Off by default: a screen of pulsing shapes is noise.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},args:{width:240,height:16},excludeStories:[`anatomyParts`]},A={background:`var(--background)`,padding:`var(--space-4)`,borderRadius:`var(--radius-lg)`},j={play:async({canvasElement:e})=>{let t=e.querySelector(`div > div`);await O(t).toHaveAttribute(`aria-hidden`,`true`),await O(t.getBoundingClientRect().width).toBe(240)}},M={render:e=>(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,D.jsx)(S,{...e,appearance:`circle`,width:40,"data-testid":`circle`}),(0,D.jsx)(S,{...e,appearance:`square`,width:120,height:40}),(0,D.jsx)(S,{...e,appearance:`rounded`,width:120,height:40})]}),play:async({canvas:e})=>{let{width:t,height:n}=e.getByTestId(`circle`).getBoundingClientRect();await O([t,n]).toEqual([40,40])}},N={args:{rows:4,width:320,height:12,appearance:`rounded`},play:async({canvasElement:e})=>{await O(e.firstElementChild).toHaveAttribute(`aria-hidden`,`true`);let t=[...e.querySelectorAll(`[aria-hidden] > div`)].map(e=>e.getBoundingClientRect());await O(t).toHaveLength(4),await O(t.map(e=>e.height)).toEqual([12,12,12,12]),await O(t.map(e=>e.width)).toEqual([320,320,320,192])}},P={args:{isFullWidth:!0,width:void 0}},F={args:{hasAnimation:!0,rows:3,width:320,appearance:`rounded`},play:async({canvasElement:e})=>{let t=e.querySelector(`[aria-hidden] > div`);await O(getComputedStyle(t).animationName).not.toBe(`none`);let n=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSMediaRule&&e.conditionText.includes(`prefers-reduced-motion: reduce`)).flatMap(e=>[...e.cssRules]).filter(e=>e instanceof CSSStyleRule&&t.matches(e.selectorText));await O(n.map(e=>e.style.animationName)).toContain(`none`)}},I={render:()=>(0,D.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Loading profile`,role:`region`,style:{...A,display:`flex`,alignItems:`flex-start`,gap:`var(--space-3)`,inlineSize:320},children:[(0,D.jsx)(S,{appearance:`circle`,width:40,hasAnimation:!0,style:{flexShrink:0}}),(0,D.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:`var(--space-2)`},children:[(0,D.jsx)(S,{appearance:`rounded`,height:14,width:`50%`,hasAnimation:!0}),(0,D.jsx)(S,{appearance:`rounded`,rows:2,height:10,isFullWidth:!0,hasAnimation:!0})]})]}),play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Loading profile`});await O(t).toHaveAttribute(`aria-busy`,`true`),await O(t.querySelectorAll(`[aria-hidden="true"]`)).toHaveLength(3),await O(t).toHaveTextContent(``)}},L={render:e=>(0,D.jsx)(`div`,{children:[`light`,`dark`].map(t=>(0,D.jsxs)(i,{appearance:t,style:{background:`var(--background)`,padding:`var(--space-2)`},children:[(0,D.jsx)(S,{...e}),(0,D.jsx)(`span`,{style:{color:`var(--muted)`}})]},t))}),play:async({canvasElement:e})=>{for(let t of e.querySelectorAll(`[aria-hidden="true"]`)){let e=getComputedStyle(t).backgroundColor;await O(e).toBe(getComputedStyle(t.nextElementSibling).color);let n=getComputedStyle(t.parentElement).backgroundColor,[r,i]=[l(d(n,e)),l(d(n))].sort((e,t)=>t-e);await O((r+.05)/(i+.05)).toBeLessThan(3)}}},R=[{name:`Shape`,selector:`[data-part="shape"]`,description:`One bone in --muted, sized like what it stands in for: here an avatar.`},{name:`Line`,selector:`[data-part="rows"] > :first-child`,description:`With rows, one line of text.`},{name:`Last line`,selector:`[data-part="rows"] > :last-child`,description:`At 60%, like the end of a paragraph.`}],z={tags:[`!dev`],render:()=>(0,D.jsxs)(`div`,{style:{...A,display:`flex`,alignItems:`flex-start`,gap:`var(--space-3)`,inlineSize:320},children:[(0,D.jsx)(S,{appearance:`circle`,width:40,"data-part":`shape`,style:{flexShrink:0}}),(0,D.jsx)(S,{appearance:`rounded`,rows:3,height:12,isFullWidth:!0,"data-part":`rows`,style:{flex:1}})]}),play:async({canvasElement:e})=>{await c(e,R)}},B={tags:[`!dev`],render:()=>(0,D.jsx)(`div`,{"aria-busy":`true`,"aria-label":`Loading profile`,role:`region`,style:{...A,inlineSize:320},children:(0,D.jsx)(S,{appearance:`rounded`,height:88,isFullWidth:!0})})},V=[`Default`,`Appearances`,`Rows`,`FullWidth`,`Animated`,`CardPlaceholder`,`Muted`,`anatomyParts`,`Anatomy`,`DontOneBlock`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const bone = canvasElement.querySelector('div > div')!;
    await expect(bone).toHaveAttribute('aria-hidden', 'true');
    await expect(bone.getBoundingClientRect().width).toBe(240);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    width: undefined
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`How it is used: shapes of the content, with aria-busy on the region.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`--muted on the page, in both modes: under 3:1, the lowest floor, on purpose.`,...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Every part present: a shape, and a stack of lines.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div aria-busy="true" aria-label="Loading profile" role="region" style={{
    ...card,
    inlineSize: 320
  }}>
      <Skeleton appearance="rounded" height={88} isFullWidth />
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Don't: one block for a whole card, which jumps to a different layout on load.`,...B.parameters?.docs?.description}}}})))()}export{B as a,R as c,T as d,I as i,H as l,F as n,N as o,M as r,E as s,z as t,S as u};