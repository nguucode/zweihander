import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./palettes-BiV_yfbL.js";import{a,o}from"./Theme-2soWRbQy.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,t as d}from"./Avatar-IDpw_Msn.js";import{i as f,r as p,s as m,t as h}from"./story-helpers-EInZsLED.js";var g=t({Anatomy:()=>N,BrokenImage:()=>E,Colors:()=>k,Contrast:()=>j,Default:()=>C,DoDecorativeBesideName:()=>P,DontRepeatName:()=>F,EmptySource:()=>O,Fallbacks:()=>T,Silhouette:()=>D,Sizes:()=>w,__namedExportsOrder:()=>I,anatomyParts:()=>M,default:()=>x}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{c(),r(),o(),u(),p(),_=s(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,x={title:`Components/Atomic Elements/Avatar`,tags:[`beta`],component:d,args:{imageSrc:b,imageAlt:`Mary Thompson`},argTypes:{size:{description:`24, 32, 40 or 48px across. Initials step up from 12px to 16px with it.`,control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`],table:{type:{summary:`'xs' | 'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},imageSrc:{description:`The picture, cropped to fill the circle. If it fails to load, the initials or the silhouette show instead.`,control:`text`,table:{type:{summary:`string`}}},imageAlt:{description:`Who this is. Names the whole avatar. Without it the avatar is decorative and hidden from assistive tech.`,control:`text`,table:{type:{summary:`string`}}},initials:{description:`One or two letters, shown when there is no image. Pass the letters, not a name: they are uppercased by style.`,control:`text`,table:{type:{summary:`string`}}},color:{description:`Any accent hue, to tell people apart in a list. Unset is the neutral gray. Carries no meaning.`,control:`select`,options:[void 0,...i],table:{type:{summary:`AccentColor`}}},variant:{description:"`subtle` is a tint of the hue; `solid` is its fill (600 in light, 400 in dark).",control:`inline-radio`,options:[`subtle`,`solid`],table:{type:{summary:`'subtle' | 'solid'`},defaultValue:{summary:`'subtle'`}}}},excludeStories:[`anatomyParts`]},S={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},C={play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`img`,{name:`Mary Thompson`});await v(n).toBeVisible(),await v(n.getBoundingClientRect().width).toBe(40),await v(t.querySelector(`img`)).toHaveAttribute(`alt`,``)}},w={render:e=>(0,_.jsx)(`div`,{style:S,children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,_.jsx)(d,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>e.getByRole(`img`,{name:t}).getBoundingClientRect().width);await v(t).toEqual([24,32,40,48])}},T={render:e=>(0,_.jsxs)(`div`,{style:S,children:[(0,_.jsx)(d,{...e}),(0,_.jsx)(d,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,_.jsx)(d,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]}),play:async({canvas:e})=>{await v(e.getByRole(`img`,{name:`Sam Rivera`})).toHaveTextContent(`SR`),await v(e.getByRole(`img`,{name:`Unknown user`}).querySelector(`svg`)).toBeVisible()}},E={args:{imageSrc:`data:image/png;base64,broken`,initials:`mt`},play:async({canvas:e,canvasElement:t})=>{await y(()=>v(t.querySelector(`img`)).toBeNull());let n=e.getByText(`mt`);await v(n).toBeVisible(),await v(getComputedStyle(n).textTransform).toBe(`uppercase`)}},D={args:{imageSrc:void 0,imageAlt:void 0,color:`violet`},play:async({canvas:e,canvasElement:t})=>{await v(t.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`),await v(e.queryByRole(`img`)).toBeNull(),await v(t.querySelector(`svg`)).toBeVisible()}},O={args:{imageSrc:``,initials:`MT`},play:async({canvas:e,canvasElement:t})=>{await v(t.querySelector(`img`)).toBeNull(),await v(e.getByText(`MT`)).toBeVisible()}},k={args:{imageSrc:void 0,imageAlt:void 0,initials:`SR`},render:e=>(0,_.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[`subtle`,`solid`].flatMap(t=>[e.initials,void 0].map(n=>(0,_.jsxs)(`div`,{style:{...S,flexWrap:`wrap`,gap:`var(--space-2)`},children:[(0,_.jsx)(d,{...e,initials:n,variant:t}),i.map(r=>(0,_.jsx)(d,{...e,initials:n,variant:t,color:r},r))]},t+n)))})},A=[`orange`,`amber`,`yellow`,`lime`],j={args:{imageSrc:void 0,imageAlt:void 0},render:e=>(0,_.jsx)(`div`,{children:[`light`,`dark`].flatMap(t=>n.map(n=>(0,_.jsx)(a,{appearance:t,grayColor:n,style:{background:`var(--background)`,display:`flex`,flexWrap:`wrap`,gap:2,padding:2},children:[`subtle`,`solid`].flatMap(r=>[void 0,...i].flatMap(i=>[`SR`,void 0].map(a=>(0,_.jsx)(d,{...e,size:`xs`,variant:r,color:i,initials:a,"data-audit":`${t} ${n} ${r} ${i??`neutral`}`},r+i+a))))},t+n)))}),play:async({canvasElement:e})=>{let t=[],n=new Map;for(let r of e.querySelectorAll(`[data-audit]`)){let e=r.dataset.audit,[i,a,o,s]=e.split(` `),c=getComputedStyle(r.parentElement).backgroundColor,l=getComputedStyle(r).backgroundColor,u=r.querySelector(`svg`),d=getComputedStyle(u??r.firstElementChild).color,p=h(d,c,l);if(!u)p<(o===`solid`&&s===`neutral`?6.5:4.5)&&t.push(`${e} initials ${p.toFixed(2)}`);else if(o===`subtle`){let n=r.parentElement.appendChild(document.createElement(`span`));n.style.color=`var(--muted-foreground)`;let i=s===`neutral`?getComputedStyle(n).color:getComputedStyle(r.previousElementSibling.firstElementChild).color;n.remove(),d!==i&&t.push(`${e} silhouette ${d} is not ${i}`),p<3&&t.push(`${e} silhouette ${p.toFixed(2)}`)}else{let r=`${i} ${a}`;n.set(r,(n.get(r)??new Set).add(d)),f(m(d))<.9&&t.push(`${e} silhouette is not white: ${d}`),i===`light`&&p<3&&!A.includes(s)&&t.push(`${e} silhouette ${p.toFixed(2)}`)}}await v(t).toEqual([]),await v([...n.values()].every(e=>e.size===1)).toBe(!0)}},M=[{name:`Container`,selector:`[role="img"]`,description:`The circle, in the chosen colour and variant. Clips its content and carries the name.`},{name:`Image`,selector:`img`,description:`Cropped to fill. Silent itself: the name is on the container.`},{name:`Initials`,selector:`[role="img"] > span`,description:`Shown when there is no image, or it fails to load.`},{name:`Silhouette`,selector:`svg`,description:`A head and shoulders, when there is neither.`}],N={tags:[`!dev`],args:{size:`lg`},render:e=>(0,_.jsxs)(`div`,{style:S,children:[(0,_.jsx)(d,{...e}),(0,_.jsx)(d,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,_.jsx)(d,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]}),play:async({canvasElement:e})=>{let t=await l(e,M);await v(t[2]).toHaveTextContent(`SR`)}},P={args:{imageAlt:void 0},render:e=>(0,_.jsxs)(`div`,{style:{...S,gap:`var(--space-2)`},children:[(0,_.jsx)(d,{...e}),(0,_.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await v(e.queryByRole(`img`)).toBeNull(),await v(e.getByText(`Mary Thompson`)).toBeVisible()}},F={tags:[`!dev`],render:e=>(0,_.jsxs)(`div`,{style:{...S,gap:`var(--space-2)`},children:[(0,_.jsx)(d,{...e}),(0,_.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await v(e.getByRole(`img`,{name:`Mary Thompson`})).toBeVisible()}},I=[`Default`,`Sizes`,`Fallbacks`,`BrokenImage`,`Silhouette`,`EmptySource`,`Colors`,`Contrast`,`anatomyParts`,`Anatomy`,`DoDecorativeBesideName`,`DontRepeatName`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    const avatar = canvas.getByRole('img', {
      name: 'Mary Thompson'
    });
    await expect(avatar).toBeVisible();
    // No size given: md, the house default.
    await expect(avatar.getBoundingClientRect().width).toBe(40);
    // The <img> itself is silent; the name is on the container.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Avatar key={size} {...args} size={size} imageAlt={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const widths = ['xs', 'sm', 'md', 'lg'].map(n => canvas.getByRole('img', {
      name: n
    }).getBoundingClientRect().width);
    await expect(widths).toEqual([24, 32, 40, 48]);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>,
  play: async ({
    canvas
  }) => {
    // Whichever part is showing, the avatar announces the person: not "S R", not nothing.
    await expect(canvas.getByRole('img', {
      name: 'Sam Rivera'
    })).toHaveTextContent('SR');
    await expect(canvas.getByRole('img', {
      name: 'Unknown user'
    }).querySelector('svg')).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: 'data:image/png;base64,broken',
    initials: 'mt'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelector('img')).toBeNull());
    // Initials are uppercased by style, not by rewriting what was passed.
    const initials = canvas.getByText('mt');
    await expect(initials).toBeVisible();
    await expect(getComputedStyle(initials).textTransform).toBe('uppercase');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined,
    color: 'violet'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // No name means decorative: hidden, not announced as an empty image.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.queryByRole('img')).toBeNull();
    // Neither image nor initials: the silhouette.
    await expect(canvasElement.querySelector('svg')).toBeVisible();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: '',
    initials: 'MT'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // '' is no image: straight to the initials, no broken <img> first.
    await expect(canvasElement.querySelector('img')).toBeNull();
    await expect(canvas.getByText('MT')).toBeVisible();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined,
    initials: 'SR'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      {(['subtle', 'solid'] as const).flatMap(variant => [args.initials, undefined].map(initials => <div key={variant + initials} style={{
      ...row,
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }}>
            <Avatar {...args} initials={initials} variant={variant} />
            {ACCENT_COLORS.map(color => <Avatar key={color} {...args} initials={initials} variant={variant} color={color} />)}
          </div>))}
    </div>
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined
  },
  render: args => <div>
      {(['light', 'dark'] as const).flatMap(mode => GRAY_COLORS.map(gray => <Theme key={mode + gray} appearance={mode} grayColor={gray} style={{
      background: 'var(--background)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
      padding: 2
    }}>
            {(['subtle', 'solid'] as const).flatMap(variant => [undefined, ...ACCENT_COLORS].flatMap(color => ['SR', undefined].map(initials => <Avatar key={variant + color + initials} {...args} size="xs" variant={variant} color={color} initials={initials} data-audit={\`\${mode} \${gray} \${variant} \${color ?? 'neutral'}\`} />)))}
          </Theme>))}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    const solidSilhouettes = new Map<string, Set<string>>();
    for (const avatar of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const audit = avatar.dataset.audit!;
      const [mode, gray, variant, color] = audit.split(' ');
      const page = getComputedStyle(avatar.parentElement!).backgroundColor;
      const fill = getComputedStyle(avatar).backgroundColor;
      const svg = avatar.querySelector('svg');
      const fg = getComputedStyle(svg ?? avatar.firstElementChild!).color;
      const ratio = contrast(fg, page, fill);
      if (!svg) {
        // Initials: 4.5:1 everywhere; neutral solid (gray 600 under gray 50) 6.5:1 on every ramp.
        const floor = variant === 'solid' && color === 'neutral' ? 6.5 : 4.5;
        if (ratio < floor) failures.push(\`\${audit} initials \${ratio.toFixed(2)}\`);
      } else if (variant === 'subtle') {
        // The initials' colour (neutral: --muted-foreground), past 3:1.
        const probe = avatar.parentElement!.appendChild(document.createElement('span'));
        probe.style.color = 'var(--muted-foreground)';
        const expected = color === 'neutral' ? getComputedStyle(probe).color : getComputedStyle(avatar.previousElementSibling!.firstElementChild!).color;
        probe.remove();
        if (fg !== expected) failures.push(\`\${audit} silhouette \${fg} is not \${expected}\`);
        if (ratio < 3) failures.push(\`\${audit} silhouette \${ratio.toFixed(2)}\`);
      } else {
        // Solid: one white across hues. In light mode only the warm hues may
        // fall under 3:1; in dark mode the fill is the 400 step and most hues
        // do, which the docs state as the accepted trade-off.
        const key = \`\${mode} \${gray}\`;
        solidSilhouettes.set(key, (solidSilhouettes.get(key) ?? new Set()).add(fg));
        if (lum(paint(fg)) < 0.9) failures.push(\`\${audit} silhouette is not white: \${fg}\`);
        if (mode === 'light' && ratio < 3 && !WARM.includes(color)) failures.push(\`\${audit} silhouette \${ratio.toFixed(2)}\`);
      }
    }
    await expect(failures).toEqual([]);
    await expect([...solidSilhouettes.values()].every(colours => colours.size === 1)).toBe(true);
  }
}`,...j.parameters?.docs?.source},description:{story:`Every colour × variant, initials and silhouette, on every gray ramp in both
modes, measured from the CSS that ships.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'lg'
  },
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('SR');
  }
}`,...N.parameters?.docs?.source},description:{story:`One avatar per fallback, so every part is on screen at once.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    imageAlt: undefined
  },
  render: args => <div style={{
    ...row,
    gap: 'var(--space-2)'
  }}>
      <Avatar {...args} />
      <span>Mary Thompson</span>
    </div>,
  play: async ({
    canvas
  }) => {
    // Said once, by the text.
    await expect(canvas.queryByRole('img')).toBeNull();
    await expect(canvas.getByText('Mary Thompson')).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Do: the name is printed, so the avatar beside it stays decorative.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    ...row,
    gap: 'var(--space-2)'
  }}>
      <Avatar {...args} />
      <span>Mary Thompson</span>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Mary Thompson'
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Don't: imageAlt repeats the printed name, so it is read twice.`,...F.parameters?.docs?.description}}}})))()}export{P as a,w as c,x as d,k as i,M as l,g as n,F as o,E as r,T as s,N as t,L as u};