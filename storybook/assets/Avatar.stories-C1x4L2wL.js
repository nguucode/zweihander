import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./palettes-BiV_yfbL.js";import{a,o}from"./Theme-2soWRbQy.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,r as d,t as f}from"./Avatar-Br9NGvV-.js";import{i as p,r as m,s as h,t as g}from"./story-helpers-EInZsLED.js";var _=t({Anatomy:()=>W,BrokenImage:()=>k,Colors:()=>M,Contrast:()=>P,Default:()=>E,DoDecorativeBesideName:()=>G,DontRepeatName:()=>K,EmptySource:()=>j,Fallbacks:()=>O,Group:()=>B,GroupEdges:()=>H,GroupTooltips:()=>V,Silhouette:()=>A,Sizes:()=>D,Status:()=>I,StatusDecorative:()=>R,StatusLabel:()=>L,__namedExportsOrder:()=>q,anatomyParts:()=>U,default:()=>w}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{c(),r(),o(),d(),m(),v=s(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,w={title:`Components/Atomic Elements/Avatar`,tags:[`beta`],component:f,args:{imageSrc:C,imageAlt:`Mary Thompson`},argTypes:{size:{description:`24, 32, 40 or 48px across. Initials step up from 12px to 16px with it.`,control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`],table:{type:{summary:`'xs' | 'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},imageSrc:{description:`The picture, cropped to fill the circle. If it fails to load, the initials or the silhouette show instead.`,control:`text`,table:{type:{summary:`string`}}},imageAlt:{description:`Who this is. Names the whole avatar. Without it the avatar is decorative and hidden from assistive tech.`,control:`text`,table:{type:{summary:`string`}}},initials:{description:`One or two letters, shown when there is no image. Pass the letters, not a name: they are uppercased by style.`,control:`text`,table:{type:{summary:`string`}}},color:{description:`Any accent hue, to tell people apart in a list. Unset is the neutral gray. Carries no meaning.`,control:`select`,options:[void 0,...i],table:{type:{summary:`AccentColor`}}},variant:{description:"`subtle` is a tint of the hue; `solid` is its fill (600 in light, 400 in dark).",control:`inline-radio`,options:[`subtle`,`solid`],table:{type:{summary:`'subtle' | 'solid'`},defaultValue:{summary:`'subtle'`}}},status:{description:'A presence dot at the bottom-end corner, in the Badge presence colours. With `imageAlt` it joins the name: "Mary Thompson, Online".',control:`select`,options:[void 0,`online`,`away`,`busy`,`offline`],table:{type:{summary:`'online' | 'away' | 'busy' | 'offline'`}}},statusLabel:{description:`The status word in the name, for another language.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Online' | 'Away' | 'Busy' | 'Offline'`}}}},excludeStories:[`anatomyParts`]},T={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},E={play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`img`,{name:`Mary Thompson`});await y(n).toBeVisible(),await y(n.getBoundingClientRect().width).toBe(40),await y(t.querySelector(`img`)).toHaveAttribute(`alt`,``)}},D={render:e=>(0,v.jsx)(`div`,{style:T,children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,v.jsx)(f,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>e.getByRole(`img`,{name:t}).getBoundingClientRect().width);await y(t).toEqual([24,32,40,48])}},O={render:e=>(0,v.jsxs)(`div`,{style:T,children:[(0,v.jsx)(f,{...e}),(0,v.jsx)(f,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,v.jsx)(f,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]}),play:async({canvas:e})=>{await y(e.getByRole(`img`,{name:`Sam Rivera`})).toHaveTextContent(`SR`),await y(e.getByRole(`img`,{name:`Unknown user`}).querySelector(`svg`)).toBeVisible()}},k={args:{imageSrc:`data:image/png;base64,broken`,initials:`mt`},play:async({canvas:e,canvasElement:t})=>{await x(()=>y(t.querySelector(`img`)).toBeNull());let n=e.getByText(`mt`);await y(n).toBeVisible(),await y(getComputedStyle(n).textTransform).toBe(`uppercase`)}},A={args:{imageSrc:void 0,imageAlt:void 0,color:`violet`},play:async({canvas:e,canvasElement:t})=>{await y(t.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`),await y(e.queryByRole(`img`)).toBeNull(),await y(t.querySelector(`svg`)).toBeVisible()}},j={args:{imageSrc:``,initials:`MT`},play:async({canvas:e,canvasElement:t})=>{await y(t.querySelector(`img`)).toBeNull(),await y(e.getByText(`MT`)).toBeVisible()}},M={args:{imageSrc:void 0,imageAlt:void 0,initials:`SR`},render:e=>(0,v.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[`subtle`,`solid`].flatMap(t=>[e.initials,void 0].map(n=>(0,v.jsxs)(`div`,{style:{...T,flexWrap:`wrap`,gap:`var(--space-2)`},children:[(0,v.jsx)(f,{...e,initials:n,variant:t}),i.map(r=>(0,v.jsx)(f,{...e,initials:n,variant:t,color:r},r))]},t+n)))})},N=[`orange`,`amber`,`yellow`,`lime`],P={args:{imageSrc:void 0,imageAlt:void 0},render:e=>(0,v.jsx)(`div`,{children:[`light`,`dark`].flatMap(t=>n.map(n=>(0,v.jsx)(a,{appearance:t,grayColor:n,style:{background:`var(--background)`,display:`flex`,flexWrap:`wrap`,gap:2,padding:2},children:[`subtle`,`solid`].flatMap(r=>[void 0,...i].flatMap(i=>[`SR`,void 0].map(a=>(0,v.jsx)(f,{...e,size:`xs`,variant:r,color:i,initials:a,"data-audit":`${t} ${n} ${r} ${i??`neutral`}`},r+i+a))))},t+n)))}),play:async({canvasElement:e})=>{let t=[],n=new Map;for(let r of e.querySelectorAll(`[data-audit]`)){let e=r.dataset.audit,[i,a,o,s]=e.split(` `),c=getComputedStyle(r.parentElement).backgroundColor,l=getComputedStyle(r).backgroundColor,u=r.querySelector(`svg`),d=getComputedStyle(u??r.firstElementChild).color,f=g(d,c,l);if(!u)f<(o===`solid`&&s===`neutral`?6.5:4.5)&&t.push(`${e} initials ${f.toFixed(2)}`);else if(o===`subtle`){let n=r.parentElement.appendChild(document.createElement(`span`));n.style.color=`var(--muted-foreground)`;let i=s===`neutral`?getComputedStyle(n).color:getComputedStyle(r.previousElementSibling.firstElementChild).color;n.remove(),d!==i&&t.push(`${e} silhouette ${d} is not ${i}`),f<3&&t.push(`${e} silhouette ${f.toFixed(2)}`)}else{let r=`${i} ${a}`;n.set(r,(n.get(r)??new Set).add(d)),p(h(d))<.9&&t.push(`${e} silhouette is not white: ${d}`),i===`light`&&f<3&&!N.includes(s)&&t.push(`${e} silhouette ${f.toFixed(2)}`)}}await y(t).toEqual([]),await y([...n.values()].every(e=>e.size===1)).toBe(!0)}},F=[`online`,`away`,`busy`,`offline`],I={render:e=>(0,v.jsx)(`div`,{style:T,children:F.map((t,n)=>(0,v.jsx)(f,{...e,imageSrc:n?void 0:e.imageSrc,initials:`SR`,status:t},t))}),play:async({canvas:e,canvasElement:t})=>{for(let t of[`Online`,`Away`,`Busy`,`Offline`])await y(e.getByRole(`img`,{name:`Mary Thompson, ${t}`})).toBeVisible();let n=t.querySelector(`[role="img"]`),r=n.lastElementChild;await x(()=>{let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();y([t.right,t.bottom]).toEqual([e.right,e.bottom]),y(t.width).toBeGreaterThan(0)}),await y(getComputedStyle(n).overflow).toBe(`visible`);let i=[...t.querySelectorAll(`[role="img"]`)].map(e=>getComputedStyle(e.lastElementChild).backgroundColor);await y(new Set(i).size).toBe(4)}},L={tags:[`!dev`],args:{status:`away`,statusLabel:`Vắng mặt`},play:async({canvas:e})=>{await y(e.getByRole(`img`,{name:`Mary Thompson, Vắng mặt`})).toBeVisible()}},R={tags:[`!dev`],args:{imageAlt:void 0,status:`online`},play:async({canvas:e})=>{await y(e.queryByRole(`img`)).toBeNull()}},z=[{initials:`MT`,imageAlt:`Mary Thompson`,color:`violet`},{initials:`SR`,imageAlt:`Sam Rivera`,color:`teal`},{initials:`LT`,imageAlt:`Linh Tran`,color:`amber`},{initials:`AS`,imageAlt:`Ana Silva`,color:`blue`},{initials:`IO`,imageAlt:`Ian Okafor`,color:`pink`},{initials:`KN`,imageAlt:`Kim Nguyen`}],B={render:()=>(0,v.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`xs`,`sm`,`md`,`lg`].map(e=>(0,v.jsx)(u,{size:e,max:4,avatars:[{...z[0],size:`lg`},...z.slice(1)],"data-testid":e},e))}),play:async({canvas:e})=>{let t=e.getByTestId(`md`);await y([...t.children].map(e=>e.getAttribute(`aria-label`))).toEqual([`Mary Thompson`,`Sam Rivera`,`Linh Tran`,`3 more`]),await y(t.lastElementChild).toHaveTextContent(`+3`),await x(()=>{let[e,n]=[...t.children].map(e=>e.getBoundingClientRect());y(e.width).toBe(t.lastElementChild.getBoundingClientRect().width),y(n.left-e.left).toBeCloseTo(e.width*.75)});let n=[...t.children].map(e=>Number(getComputedStyle(e).zIndex));await y(n).toEqual([...n].sort((e,t)=>t-e)),await y(new Set(n).size).toBe(4)}},V={render:()=>(0,v.jsx)(u,{max:4,hasTooltips:!0,avatars:[...z]}),play:async({canvas:e})=>{let t=S(document.body);await b.hover(e.getByRole(`img`,{name:`Sam Rivera`})),await y(await t.findByRole(`tooltip`)).toHaveTextContent(`Sam Rivera`),await b.unhover(e.getByRole(`img`,{name:`Sam Rivera`})),await b.tab();let n=e.getByRole(`img`,{name:`3 more`});await y(n).toHaveFocus(),await x(()=>y(t.getByRole(`tooltip`)).toHaveTextContent(`Ana Silva, Ian Okafor, Kim Nguyen`)),await y(n).toHaveAccessibleDescription(`Ana Silva, Ian Okafor, Kim Nguyen`)}},H={tags:[`!dev`],render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,v.jsx)(u,{max:5,avatars:[...z],"data-testid":`one-over`}),(0,v.jsx)(u,{avatars:[...z],"data-testid":`no-max`}),(0,v.jsx)(u,{max:3,avatars:z.map(({initials:e})=>({initials:e})),"data-testid":`decorative`}),(0,v.jsx)(u,{max:3,avatars:[...z],moreLabel:e=>`${e} người khác`,"data-testid":`label`})]}),play:async({canvas:e})=>{await y(e.getByTestId(`one-over`).children).toHaveLength(5),await y(e.getByTestId(`one-over`).lastElementChild).toHaveTextContent(`+2`),await y(e.getByTestId(`no-max`).children).toHaveLength(6),await y(e.getByTestId(`decorative`).lastElementChild).toHaveAttribute(`aria-hidden`,`true`),await y(e.getByRole(`img`,{name:`4 người khác`})).toBeVisible()}},U=[{name:`Container`,selector:`[role="img"]`,description:`The circle, in the chosen colour and variant. Clips its content and carries the name.`},{name:`Image`,selector:`img`,description:`Cropped to fill. Silent itself: the name is on the container.`},{name:`Initials`,selector:`[role="img"] > span`,description:`Shown when there is no image, or it fails to load.`},{name:`Silhouette`,selector:`svg`,description:`A head and shoulders, when there is neither.`},{name:`Status dot`,selector:`[role="img"] > span:last-child:empty`,description:`Optional. Presence, on the bottom-end corner, in a ring of the page colour. Part of the name.`},{name:`Group`,selector:`[data-part="group"]`,description:`Optional. Avatars overlapping by a quarter, each ringed in the page colour.`},{name:`More`,selector:`[data-part="group"] > :last-child`,description:'A neutral avatar with "+n" for the people past `max`. Named only when the avatars are.'}],W={tags:[`!dev`],args:{size:`lg`},render:e=>(0,v.jsxs)(`div`,{style:T,children:[(0,v.jsx)(f,{...e}),(0,v.jsx)(f,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,v.jsx)(f,{...e,imageSrc:void 0,imageAlt:`Unknown user`,status:`online`}),(0,v.jsx)(u,{size:`lg`,max:3,avatars:[...z],"data-part":`group`})]}),play:async({canvasElement:e})=>{let t=await l(e,U);await y(t[2]).toHaveTextContent(`SR`)}},G={args:{imageAlt:void 0},render:e=>(0,v.jsxs)(`div`,{style:{...T,gap:`var(--space-2)`},children:[(0,v.jsx)(f,{...e}),(0,v.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await y(e.queryByRole(`img`)).toBeNull(),await y(e.getByText(`Mary Thompson`)).toBeVisible()}},K={tags:[`!dev`],render:e=>(0,v.jsxs)(`div`,{style:{...T,gap:`var(--space-2)`},children:[(0,v.jsx)(f,{...e}),(0,v.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await y(e.getByRole(`img`,{name:`Mary Thompson`})).toBeVisible()}},q=[`Default`,`Sizes`,`Fallbacks`,`BrokenImage`,`Silhouette`,`EmptySource`,`Colors`,`Contrast`,`Status`,`StatusLabel`,`StatusDecorative`,`Group`,`GroupTooltips`,`GroupEdges`,`anatomyParts`,`Anatomy`,`DoDecorativeBesideName`,`DontRepeatName`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Every colour × variant, initials and silhouette, on every gray ramp in both
modes, measured from the CSS that ships.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {STATUSES.map((status, i) => <Avatar key={status} {...args} imageSrc={i ? undefined : args.imageSrc} initials="SR" status={status} />)}
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // The dot is inside role="img", which is not read, so the status is in the name.
    for (const word of ['Online', 'Away', 'Busy', 'Offline']) {
      await expect(canvas.getByRole('img', {
        name: \`Mary Thompson, \${word}\`
      })).toBeVisible();
    }
    // Sits on the corner of the box, outside the curve, and is not cropped by it.
    const avatar = canvasElement.querySelector<HTMLElement>('[role="img"]')!;
    const dot = avatar.lastElementChild!;
    await waitFor(() => {
      const a = avatar.getBoundingClientRect();
      const d = dot.getBoundingClientRect();
      expect([d.right, d.bottom]).toEqual([a.right, a.bottom]);
      expect(d.width).toBeGreaterThan(0);
    });
    await expect(getComputedStyle(avatar).overflow).toBe('visible');
    // Four statuses, four colours.
    const colours = [...canvasElement.querySelectorAll('[role="img"]')].map(el => getComputedStyle(el.lastElementChild!).backgroundColor);
    await expect(new Set(colours).size).toBe(4);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    status: 'away',
    statusLabel: 'Vắng mặt'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Mary Thompson, Vắng mặt'
    })).toBeVisible();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    imageAlt: undefined,
    status: 'online'
  },
  play: async ({
    canvas
  }) => {
    // No name: the dot is hidden with the rest of the avatar.
    await expect(canvas.queryByRole('img')).toBeNull();
  }
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size =>
    // The first asks for lg; the group's size wins.
    <AvatarGroup key={size} size={size} max={4} avatars={[{
      ...PEOPLE[0],
      size: 'lg'
    }, ...PEOPLE.slice(1)]} data-testid={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const group = canvas.getByTestId('md');
    // max counts the "+n": three people, then +3 for the other three.
    await expect([...group.children].map(el => el.getAttribute('aria-label'))).toEqual(['Mary Thompson', 'Sam Rivera', 'Linh Tran', '3 more']);
    await expect(group.lastElementChild).toHaveTextContent('+3');
    await waitFor(() => {
      const [first, second] = [...group.children].map(el => el.getBoundingClientRect());
      // The group's size wins over each avatar's.
      expect(first.width).toBe(group.lastElementChild!.getBoundingClientRect().width);
      // Each tucks under the one before by a quarter of its size.
      expect(second.left - first.left).toBeCloseTo(first.width * 0.75);
    });
    // Earlier ones on top, so a status dot is never covered by the next.
    const z = [...group.children].map(el => Number(getComputedStyle(el).zIndex));
    await expect(z).toEqual([...z].sort((a, b) => b - a));
    await expect(new Set(z).size).toBe(4);
  }
}`,...B.parameters?.docs?.source},description:{story:'Overlapping, with a "+n" for the people past `max`.',...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4} hasTooltips avatars={[...PEOPLE]} />,
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    await userEvent.hover(canvas.getByRole('img', {
      name: 'Sam Rivera'
    }));
    await expect(await body.findByRole('tooltip')).toHaveTextContent('Sam Rivera');
    await userEvent.unhover(canvas.getByRole('img', {
      name: 'Sam Rivera'
    }));
    // Only the "+n" takes focus: the others' names are already their accessible names.
    await userEvent.tab();
    const more = canvas.getByRole('img', {
      name: '3 more'
    });
    await expect(more).toHaveFocus();
    await waitFor(() => expect(body.getByRole('tooltip')).toHaveTextContent('Ana Silva, Ian Okafor, Kim Nguyen'));
    await expect(more).toHaveAccessibleDescription('Ana Silva, Ian Okafor, Kim Nguyen');
  }
}`,...V.parameters?.docs?.source},description:{story:'`hasTooltips`: each name on hover, and the "+n" lists who it stands for, on hover or focus.',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      <AvatarGroup max={5} avatars={[...PEOPLE]} data-testid="one-over" />
      <AvatarGroup avatars={[...PEOPLE]} data-testid="no-max" />
      <AvatarGroup max={3} avatars={PEOPLE.map(({
      initials
    }) => ({
      initials
    }))} data-testid="decorative" />
      <AvatarGroup max={3} avatars={[...PEOPLE]} moreLabel={n => \`\${n} người khác\`} data-testid="label" />
    </div>,
  play: async ({
    canvas
  }) => {
    // One over max: the "+n" takes the last slot, so +2, never +1.
    await expect(canvas.getByTestId('one-over').children).toHaveLength(5);
    await expect(canvas.getByTestId('one-over').lastElementChild).toHaveTextContent('+2');
    await expect(canvas.getByTestId('no-max').children).toHaveLength(6);
    // Decorative avatars (names printed elsewhere): the "+n" is decorative too.
    await expect(canvas.getByTestId('decorative').lastElementChild).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.getByRole('img', {
      name: '4 người khác'
    })).toBeVisible();
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'lg'
  },
  render: args => <div style={row}>
      <Avatar {...args} />
      <Avatar {...args} imageSrc={undefined} initials="SR" imageAlt="Sam Rivera" />
      <Avatar {...args} imageSrc={undefined} imageAlt="Unknown user" status="online" />
      <AvatarGroup size="lg" max={3} avatars={[...PEOPLE]} data-part="group" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('SR');
  }
}`,...W.parameters?.docs?.source},description:{story:`One avatar per fallback, so every part is on screen at once.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Guidelines, Do: the name is printed, so the avatar beside it stays decorative.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Don't: imageAlt repeats the printed name, so it is read twice.`,...K.parameters?.docs?.description}}}})))()}export{G as a,B as c,I as d,U as f,M as i,V as l,w as m,_ as n,K as o,J as p,k as r,O as s,W as t,D as u};