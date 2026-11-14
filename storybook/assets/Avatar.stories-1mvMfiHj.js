import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./palettes-BiV_yfbL.js";import{n as a,t as o}from"./Theme-cxt2PJ_N.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,r as d,t as f}from"./Avatar-BSv5Q1i3.js";import{r as p,t as m}from"./story-helpers-EInZsLED.js";var h=t({Anatomy:()=>W,BrokenImage:()=>k,Colors:()=>M,Contrast:()=>N,Default:()=>T,DoDecorativeBesideName:()=>G,DontRepeatName:()=>K,EmptySource:()=>j,Fallbacks:()=>O,Group:()=>B,GroupEdges:()=>H,GroupTooltips:()=>V,InitialsSizes:()=>D,Silhouette:()=>A,Sizes:()=>E,Status:()=>F,StatusDecorative:()=>R,StatusLabel:()=>L,StatusSizes:()=>I,__namedExportsOrder:()=>q,anatomyParts:()=>U,default:()=>S}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{c(),r(),a(),d(),p(),g=s(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,S={title:`Components/Atomic Elements/Avatar`,tags:[`beta`],component:f,args:{imageSrc:x,imageAlt:`Mary Thompson`},argTypes:{size:{description:"16, 24, 32, 40, 96 or 128px across: Atlassian's avatar sizes. Initials step up from 12px to 32px with it; `xs` shows the first letter only.",control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],table:{type:{summary:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`},defaultValue:{summary:`'md'`}}},imageSrc:{description:`The picture, cropped to fill the circle. If it fails to load, the initials or the silhouette show instead.`,control:`text`,table:{type:{summary:`string`}}},imageAlt:{description:`Who this is. Names the whole avatar. Without it the avatar is decorative and hidden from assistive tech.`,control:`text`,table:{type:{summary:`string`}}},initials:{description:"One or two letters, shown when there is no image. Pass the letters, not a name: they are uppercased by style. `xs` shows the first only.",control:`text`,table:{type:{summary:`string`}}},color:{description:`Any accent hue, to tell people apart in a list. Unset is the neutral gray. Carries no meaning.`,control:`select`,options:[void 0,...i],table:{type:{summary:`AccentColor`}}},variant:{description:"`subtle` is a tint of the hue; `solid` is its fill (600 in light, 400 in dark).",control:`inline-radio`,options:[`subtle`,`solid`],table:{type:{summary:`'subtle' | 'solid'`},defaultValue:{summary:`'subtle'`}}},status:{description:'A presence dot at the bottom-end corner, in the Badge presence colours. With `imageAlt` it joins the name: "Mary Thompson, Online".',control:`select`,options:[void 0,`online`,`away`,`busy`,`offline`],table:{type:{summary:`'online' | 'away' | 'busy' | 'offline'`}}},statusLabel:{description:`The status word in the name, for another language.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Online' | 'Away' | 'Busy' | 'Offline'`}}}},excludeStories:[`anatomyParts`]},C={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},w=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],T={play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`img`,{name:`Mary Thompson`});await _(n).toBeVisible(),await _(n.getBoundingClientRect().width).toBe(32),await _(t.querySelector(`img`)).toHaveAttribute(`alt`,``)}},E={render:e=>(0,g.jsx)(`div`,{style:C,children:w.map(t=>(0,g.jsx)(f,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=w.map(t=>e.getByRole(`img`,{name:t}).getBoundingClientRect());await _(t.map(e=>e.width)).toEqual([16,24,32,40,96,128]),await _(t.map(e=>e.height)).toEqual([16,24,32,40,96,128])}},D={args:{imageSrc:void 0,initials:`sr`},render:e=>(0,g.jsx)(`div`,{style:C,children:w.map(t=>(0,g.jsx)(f,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{let t=w.map(t=>e.getByRole(`img`,{name:t}).firstElementChild);await _(t.map(e=>e.textContent)).toEqual([`s`,`sr`,`sr`,`sr`,`sr`,`sr`]),await _(t.map(e=>parseFloat(getComputedStyle(e).fontSize))).toEqual([12,12,12,14,28,32]),await _(t.map(e=>getComputedStyle(e).fontWeight)).toEqual([`500`,`500`,`500`,`500`,`600`,`600`]);for(let e of t)await _(e.getBoundingClientRect().width).toBeLessThan(e.parentElement.getBoundingClientRect().width)}},O={render:e=>(0,g.jsxs)(`div`,{style:C,children:[(0,g.jsx)(f,{...e}),(0,g.jsx)(f,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,g.jsx)(f,{...e,imageSrc:void 0,imageAlt:`Unknown user`})]}),play:async({canvas:e})=>{await _(e.getByRole(`img`,{name:`Sam Rivera`})).toHaveTextContent(`SR`),await _(e.getByRole(`img`,{name:`Unknown user`}).querySelector(`svg`)).toBeVisible()}},k={args:{imageSrc:`data:image/png;base64,broken`,initials:`mt`},play:async({canvas:e,canvasElement:t})=>{await y(()=>_(t.querySelector(`img`)).toBeNull());let n=e.getByText(`mt`);await _(n).toBeVisible(),await _(getComputedStyle(n).textTransform).toBe(`uppercase`)}},A={args:{imageSrc:void 0,imageAlt:void 0,color:`violet`},play:async({canvas:e,canvasElement:t})=>{await _(t.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`),await _(e.queryByRole(`img`)).toBeNull();let n=t.querySelector(`svg`);await _(n).toBeVisible();let[r,i]=[t.querySelector(`span`).getBoundingClientRect(),n.getBoundingClientRect()];await _(i.width/r.width).toBeCloseTo(.6,2),await _(i.left-r.left).toBeCloseTo(r.right-i.right,1)}},j={args:{imageSrc:``,initials:`MT`},play:async({canvas:e,canvasElement:t})=>{await _(t.querySelector(`img`)).toBeNull(),await _(e.getByText(`MT`)).toBeVisible()}},M={args:{imageSrc:void 0,imageAlt:void 0,initials:`SR`},render:e=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[`subtle`,`solid`].flatMap(t=>[e.initials,void 0].map(n=>(0,g.jsxs)(`div`,{style:{...C,flexWrap:`wrap`,gap:`var(--space-2)`},children:[(0,g.jsx)(f,{...e,initials:n,variant:t}),i.map(r=>(0,g.jsx)(f,{...e,initials:n,variant:t,color:r},r))]},t+n)))})},N={args:{imageSrc:void 0,imageAlt:void 0},render:e=>(0,g.jsx)(`div`,{children:[`light`,`dark`].flatMap(t=>n.map(n=>(0,g.jsx)(o,{appearance:t,grayColor:n,style:{background:`var(--color-surface)`,display:`flex`,flexWrap:`wrap`,gap:2,padding:2},children:[`subtle`,`solid`].flatMap(r=>[void 0,...i].flatMap(i=>[`SR`,void 0].map(a=>(0,g.jsx)(f,{...e,size:`sm`,variant:r,color:i,initials:a,"data-audit":`${t} ${n} ${r} ${i??`neutral`}`},r+i+a))))},t+n)))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[data-audit]`)){let e=n.dataset.audit,[,,r,i]=e.split(` `),a=getComputedStyle(n.parentElement).backgroundColor,o=getComputedStyle(n).backgroundColor,s=n.querySelector(`svg`),c=getComputedStyle(s??n.firstElementChild).color,l=m(c,a,o);if(!s)l<(r===`solid`&&i===`neutral`?6.5:4.5)&&t.push(`${e} initials ${l.toFixed(2)}`);else{let a=n.parentElement.appendChild(document.createElement(`span`));a.style.color=`var(--color-text-subtlest)`;let o=r===`subtle`&&i===`neutral`?getComputedStyle(a).color:getComputedStyle(n.previousElementSibling.firstElementChild).color;a.remove(),c!==o&&t.push(`${e} silhouette ${c} is not ${o}`),l<3&&t.push(`${e} silhouette ${l.toFixed(2)}`)}}await _(t).toEqual([])}},P=[`online`,`away`,`busy`,`offline`],F={render:e=>(0,g.jsx)(`div`,{style:C,children:P.map((t,n)=>(0,g.jsx)(f,{...e,imageSrc:n?void 0:e.imageSrc,initials:`SR`,status:t},t))}),play:async({canvas:e,canvasElement:t})=>{for(let t of[`Online`,`Away`,`Busy`,`Offline`])await _(e.getByRole(`img`,{name:`Mary Thompson, ${t}`})).toBeVisible();let n=t.querySelector(`[role="img"]`),r=n.lastElementChild;await y(()=>{let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();_([t.right,t.bottom]).toEqual([e.right,e.bottom]),_(t.width).toBeGreaterThan(0)}),await _(getComputedStyle(n).overflow).toBe(`visible`);let i=[...t.querySelectorAll(`[role="img"]`)].map(e=>getComputedStyle(e.lastElementChild).backgroundColor);await _(new Set(i).size).toBe(4)}},I={args:{status:`online`},render:e=>(0,g.jsx)(`div`,{style:C,children:w.map(t=>(0,g.jsx)(f,{...e,size:t,imageAlt:t},t))}),play:async({canvas:e})=>{await y(()=>{let t=w.map(t=>{let n=e.getByRole(`img`,{name:`${t}, Online`});return{a:n.getBoundingClientRect(),d:n.lastElementChild.getBoundingClientRect()}});_(t.map(({d:e})=>[e.width,e.height])).toEqual([[0,0],[8,8],[8,8],[8,8],[16,16],[20,20]]);for(let{a:e,d:n}of t.slice(1,4))_([n.right,n.bottom]).toEqual([e.right,e.bottom]);for(let{a:e,d:n}of t.slice(4)){let t=Math.hypot(n.left+n.width/2-(e.left+e.width/2),n.top+n.height/2-(e.top+e.height/2));_(Math.abs(t-e.width/2)).toBeLessThan(1)}})}},L={tags:[`!dev`],args:{status:`away`,statusLabel:`Vắng mặt`},play:async({canvas:e})=>{await _(e.getByRole(`img`,{name:`Mary Thompson, Vắng mặt`})).toBeVisible()}},R={tags:[`!dev`],args:{imageAlt:void 0,status:`online`},play:async({canvas:e})=>{await _(e.queryByRole(`img`)).toBeNull()}},z=[{initials:`MT`,imageAlt:`Mary Thompson`,color:`violet`},{initials:`SR`,imageAlt:`Sam Rivera`,color:`teal`},{initials:`LT`,imageAlt:`Linh Tran`,color:`amber`},{initials:`AS`,imageAlt:`Ana Silva`,color:`blue`},{initials:`IO`,imageAlt:`Ian Okafor`,color:`pink`},{initials:`KN`,imageAlt:`Kim Nguyen`}],B={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:w.map(e=>(0,g.jsx)(u,{size:e,max:4,avatars:[{...z[0],size:`lg`},...z.slice(1)],"data-testid":e},e))}),play:async({canvas:e})=>{let t=e.getByTestId(`md`);await _([...t.children].map(e=>e.getAttribute(`aria-label`))).toEqual([`Mary Thompson`,`Sam Rivera`,`Linh Tran`,`3 more`]),await _(t.lastElementChild).toHaveTextContent(`+3`),await y(()=>{let[e,n]=[...t.children].map(e=>e.getBoundingClientRect());_(e.width).toBe(t.lastElementChild.getBoundingClientRect().width),_(n.left-e.left).toBeCloseTo(e.width-4)});for(let[t,n,r]of[[`xs`,16,4],[`sm`,24,0],[`2xl`,128,4]]){let[i,a]=[...e.getByTestId(t).children].map(e=>e.getBoundingClientRect());await _(i.width).toBe(n),await _(a.left-i.left).toBeCloseTo(n-r)}let n=[...t.children].map(e=>Number(getComputedStyle(e).zIndex));await _(n).toEqual([...n].sort((e,t)=>t-e)),await _(new Set(n).size).toBe(4)}},V={render:()=>(0,g.jsx)(u,{max:4,hasTooltips:!0,avatars:[...z]}),play:async({canvas:e})=>{let t=b(document.body);await v.hover(e.getByRole(`img`,{name:`Sam Rivera`})),await _(await t.findByRole(`tooltip`)).toHaveTextContent(`Sam Rivera`),await v.unhover(e.getByRole(`img`,{name:`Sam Rivera`})),await v.tab();let n=e.getByRole(`img`,{name:`3 more`});await _(n).toHaveFocus(),await y(()=>_(t.getByRole(`tooltip`)).toHaveTextContent(`Ana Silva, Ian Okafor, Kim Nguyen`)),await _(n).toHaveAccessibleDescription(`Ana Silva, Ian Okafor, Kim Nguyen`)}},H={tags:[`!dev`],render:()=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,g.jsx)(u,{max:5,avatars:[...z],"data-testid":`one-over`}),(0,g.jsx)(u,{avatars:[...z],"data-testid":`no-max`}),(0,g.jsx)(u,{max:3,avatars:z.map(({initials:e})=>({initials:e})),"data-testid":`decorative`}),(0,g.jsx)(u,{max:3,avatars:[...z],moreLabel:e=>`${e} người khác`,"data-testid":`label`})]}),play:async({canvas:e})=>{await _(e.getByTestId(`one-over`).children).toHaveLength(5),await _(e.getByTestId(`one-over`).lastElementChild).toHaveTextContent(`+2`),await _(e.getByTestId(`no-max`).children).toHaveLength(6),await _(e.getByTestId(`decorative`).lastElementChild).toHaveAttribute(`aria-hidden`,`true`),await _(e.getByRole(`img`,{name:`4 người khác`})).toBeVisible()}},U=[{name:`Container`,selector:`[role="img"]`,description:`The circle, in the chosen colour and variant. Clips its content and carries the name.`},{name:`Image`,selector:`img`,description:`Cropped to fill. Silent itself: the name is on the container.`},{name:`Initials`,selector:`[role="img"] > span`,description:`Shown when there is no image, or it fails to load.`},{name:`Silhouette`,selector:`svg`,description:`The kit's user icon at 60% of the circle, when there is neither.`},{name:`Status dot`,selector:`[role="img"] > span:last-child:empty`,description:`Optional. Presence, on the bottom-end corner, in a ring of the page colour. Part of the name.`},{name:`Group`,selector:`[data-part="group"]`,description:`Optional. Avatars overlapping by 4px, each ringed in the page colour.`},{name:`More`,selector:`[data-part="group"] > :last-child`,description:'A neutral avatar with "+n" for the people past `max`. Named only when the avatars are.'}],W={tags:[`!dev`],args:{size:`lg`},render:e=>(0,g.jsxs)(`div`,{style:C,children:[(0,g.jsx)(f,{...e}),(0,g.jsx)(f,{...e,imageSrc:void 0,initials:`SR`,imageAlt:`Sam Rivera`}),(0,g.jsx)(f,{...e,imageSrc:void 0,imageAlt:`Unknown user`,status:`online`}),(0,g.jsx)(u,{size:`lg`,max:3,avatars:[...z],"data-part":`group`})]}),play:async({canvasElement:e})=>{let t=await l(e,U);await _(t[2]).toHaveTextContent(`SR`)}},G={args:{imageAlt:void 0},render:e=>(0,g.jsxs)(`div`,{style:{...C,gap:`var(--space-2)`},children:[(0,g.jsx)(f,{...e}),(0,g.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await _(e.queryByRole(`img`)).toBeNull(),await _(e.getByText(`Mary Thompson`)).toBeVisible()}},K={tags:[`!dev`],render:e=>(0,g.jsxs)(`div`,{style:{...C,gap:`var(--space-2)`},children:[(0,g.jsx)(f,{...e}),(0,g.jsx)(`span`,{children:`Mary Thompson`})]}),play:async({canvas:e})=>{await _(e.getByRole(`img`,{name:`Mary Thompson`})).toBeVisible()}},q=[`Default`,`Sizes`,`InitialsSizes`,`Fallbacks`,`BrokenImage`,`Silhouette`,`EmptySource`,`Colors`,`Contrast`,`Status`,`StatusSizes`,`StatusLabel`,`StatusDecorative`,`Group`,`GroupTooltips`,`GroupEdges`,`anatomyParts`,`Anatomy`,`DoDecorativeBesideName`,`DontRepeatName`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    const avatar = canvas.getByRole('img', {
      name: 'Mary Thompson'
    });
    await expect(avatar).toBeVisible();
    // No size given: md, the house default.
    await expect(avatar.getBoundingClientRect().width).toBe(32);
    // The <img> itself is silent; the name is on the container.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {SIZES.map(size => <Avatar key={size} {...args} size={size} imageAlt={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const boxes = SIZES.map(n => canvas.getByRole('img', {
      name: n
    }).getBoundingClientRect());
    await expect(boxes.map(b => b.width)).toEqual([16, 24, 32, 40, 96, 128]);
    // A circle at every size.
    await expect(boxes.map(b => b.height)).toEqual([16, 24, 32, 40, 96, 128]);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    initials: 'sr'
  },
  render: args => <div style={row}>
      {SIZES.map(size => <Avatar key={size} {...args} size={size} imageAlt={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const text = SIZES.map(n => canvas.getByRole('img', {
      name: n
    }).firstElementChild!);
    await expect(text.map(el => el.textContent)).toEqual(['s', 'sr', 'sr', 'sr', 'sr', 'sr']);
    await expect(text.map(el => parseFloat(getComputedStyle(el).fontSize))).toEqual([12, 12, 12, 14, 28, 32]);
    // Medium on the row sizes, semibold (Figma's Heading/xl and 2xl) on the profile sizes.
    await expect(text.map(el => getComputedStyle(el).fontWeight)).toEqual(['500', '500', '500', '500', '600', '600']);
    // The letters fit inside the circle at every size.
    for (const el of text) {
      await expect(el.getBoundingClientRect().width).toBeLessThan(el.parentElement!.getBoundingClientRect().width);
    }
  }
}`,...D.parameters?.docs?.source},description:{story:"Initials at every size: two letters, except `xs`, which has room for one.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    // Neither image nor initials: the silhouette, the user icon at 60% of the circle, centred.
    const svg = canvasElement.querySelector('svg')!;
    await expect(svg).toBeVisible();
    const [a, i] = [canvasElement.querySelector('span')!.getBoundingClientRect(), svg.getBoundingClientRect()];
    await expect(i.width / a.width).toBeCloseTo(0.6, 2);
    await expect(i.left - a.left).toBeCloseTo(a.right - i.right, 1);
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    imageAlt: undefined
  },
  render: args => <div>
      {(['light', 'dark'] as const).flatMap(mode => GRAY_COLORS.map(gray => <Theme key={mode + gray} appearance={mode} grayColor={gray} style={{
      background: 'var(--color-surface)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
      padding: 2
    }}>
            {(['subtle', 'solid'] as const).flatMap(variant => [undefined, ...ACCENT_COLORS].flatMap(color => ['SR', undefined].map(initials => <Avatar key={variant + color + initials} {...args} size="sm" variant={variant} color={color} initials={initials} data-audit={\`\${mode} \${gray} \${variant} \${color ?? 'neutral'}\`} />)))}
          </Theme>))}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const avatar of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const audit = avatar.dataset.audit!;
      const [,, variant, color] = audit.split(' ');
      const page = getComputedStyle(avatar.parentElement!).backgroundColor;
      const fill = getComputedStyle(avatar).backgroundColor;
      const svg = avatar.querySelector('svg');
      const fg = getComputedStyle(svg ?? avatar.firstElementChild!).color;
      const ratio = contrast(fg, page, fill);
      if (!svg) {
        // Initials: 4.5:1 everywhere; neutral solid (gray 600 under gray 50) 6.5:1 on every ramp.
        const floor = variant === 'solid' && color === 'neutral' ? 6.5 : 4.5;
        if (ratio < floor) failures.push(\`\${audit} initials \${ratio.toFixed(2)}\`);
      } else {
        // The initials' colour (neutral subtle: --color-text-subtlest), past 3:1.
        const probe = avatar.parentElement!.appendChild(document.createElement('span'));
        probe.style.color = 'var(--color-text-subtlest)';
        const expected = variant === 'subtle' && color === 'neutral' ? getComputedStyle(probe).color : getComputedStyle(avatar.previousElementSibling!.firstElementChild!).color;
        probe.remove();
        if (fg !== expected) failures.push(\`\${audit} silhouette \${fg} is not \${expected}\`);
        if (ratio < 3) failures.push(\`\${audit} silhouette \${ratio.toFixed(2)}\`);
      }
    }
    await expect(failures).toEqual([]);
  }
}`,...N.parameters?.docs?.source},description:{story:`Every colour × variant, initials and silhouette, on every gray ramp in both
modes, measured from the CSS that ships.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'online'
  },
  render: args => <div style={row}>
      {SIZES.map(size => <Avatar key={size} {...args} size={size} imageAlt={size} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      const dots = SIZES.map(n => {
        const avatar = canvas.getByRole('img', {
          name: \`\${n}, Online\`
        });
        return {
          a: avatar.getBoundingClientRect(),
          d: avatar.lastElementChild!.getBoundingClientRect()
        };
      });
      // No dot at xs (16px), as in Atlassian; the name above still says "Online".
      expect(dots.map(({
        d
      }) => [d.width, d.height])).toEqual([[0, 0], [8, 8], [8, 8], [8, 8], [16, 16], [20, 20]]);
      for (const {
        a,
        d
      } of dots.slice(1, 4)) expect([d.right, d.bottom]).toEqual([a.right, a.bottom]);
      // xl and 2xl: the dot's centre is on the circle, so it overlaps the picture instead of floating off it.
      for (const {
        a,
        d
      } of dots.slice(4)) {
        const fromCentre = Math.hypot(d.left + d.width / 2 - (a.left + a.width / 2), d.top + d.height / 2 - (a.top + a.height / 2));
        expect(Math.abs(fromCentre - a.width / 2)).toBeLessThan(1);
      }
    });
  }
}`,...I.parameters?.docs?.source},description:{story:"The dot at every size: on the box's corner up to `lg`, on the curve at `xl` and `2xl`.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
      {SIZES.map(size =>
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
      // Each tucks under the one before by 4px, Atlassian's stack.
      expect(second.left - first.left).toBeCloseTo(first.width - 4);
    });
    // The same 4px at the two ends of the scale; at sm (24px) the circles only touch.
    for (const [size, px, overlap] of [['xs', 16, 4], ['sm', 24, 0], ['2xl', 128, 4]] as const) {
      const [first, second] = [...canvas.getByTestId(size).children].map(el => el.getBoundingClientRect());
      await expect(first.width).toBe(px);
      await expect(second.left - first.left).toBeCloseTo(px - overlap);
    }
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
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Don't: imageAlt repeats the printed name, so it is read twice.`,...K.parameters?.docs?.description}}}})))()}export{G as a,B as c,E as d,F as f,S as g,J as h,M as i,V as l,U as m,h as n,K as o,I as p,k as r,O as s,W as t,D as u};