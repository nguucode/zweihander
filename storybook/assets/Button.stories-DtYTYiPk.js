import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./palettes-BiV_yfbL.js";import{a as r,o as i}from"./Theme-2soWRbQy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-B7N9C5Fg.js";import{n as c,t as l}from"./icon-C8IlC69p.js";import{n as u,t as d}from"./expectAnatomy-C52ByQ6s.js";var f=t({Anatomy:()=>N,Default:()=>y,Disabled:()=>T,DisabledHref:()=>D,DisabledRender:()=>k,DoOnePrimary:()=>P,DontDisableWhileSaving:()=>I,DontTwoPrimaries:()=>F,FullWidth:()=>A,Href:()=>E,IconOnly:()=>C,Loading:()=>w,Matrix:()=>b,Render:()=>O,Sizes:()=>x,StateContrast:()=>j,WithIcons:()=>S,__namedExportsOrder:()=>L,anatomyParts:()=>M,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{u(),c(),i(),o(),p=a(),{expect:m,fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Buttons/Button`,tags:[`beta`],component:s,argTypes:{variant:{description:"Colour by meaning. `accent` is the inverted neutral; `destructive` is for actions that delete or cannot be undone.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`],table:{type:{summary:`'primary' | 'accent' | 'secondary' | 'destructive'`},defaultValue:{summary:`'primary'`}}},appearance:{description:"Emphasis: `contained` for the main action, `outlined` and `ghost` for the rest.",control:`inline-radio`,options:[`contained`,`outlined`,`ghost`],table:{type:{summary:`'contained' | 'outlined' | 'ghost'`},defaultValue:{summary:`'contained'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. `sm` takes a 12px label.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},children:{description:"The label. With `isIconOnly`, the icon.",control:`text`,table:{type:{summary:`ReactNode`}}},startIcon:{description:'Icon before the label, usually `<Icon name="…" />`. Decorative: hidden from screen readers.',control:!1,table:{type:{summary:`ReactNode`}}},endIcon:{description:`Icon after the label, e.g. a chevron for a menu. Decorative.`,control:!1,table:{type:{summary:`ReactNode`}}},isIconOnly:{description:"Square, for an icon with no visible label. Requires `aria-label`: a type error without it.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isLoading:{description:`Shows a spinner in place of the content, keeping the width and focus, and blocks clicks. On a link it behaves as disabled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isFullWidth:{description:`Fills the width of its container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed and out of the tab order. On a link, drops `href`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{description:"Native button type. `button` by default, so it never submits a form by accident.",control:!1,table:{type:{summary:`'button' | 'submit' | 'reset'`},defaultValue:{summary:`'button'`}}},href:{description:"Renders an `<a>` instead: it navigates, it does not act. `target` and `rel` pass through.",control:!1,table:{type:{summary:`string`}}},render:{description:"Replaces the rendered element, e.g. a router's `<Link />`. Props and styles merge onto it.",control:!1,table:{type:{summary:`ReactElement | (props, state) => ReactElement`}}},onClick:{description:`Called on click, Enter and Space. Not called while disabled or loading.`,control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}}},args:{children:`Button`,onClick:h()},excludeStories:[`anatomyParts`]},_={display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`,alignItems:`center`},v={display:`grid`,gap:`var(--space-3)`},y={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Button`});await m(r).toHaveAttribute(`type`,`button`),await t.click(r),await t.keyboard(`{Enter}`),await t.keyboard(` `),await m(n.onClick).toHaveBeenCalledTimes(3)}},b={render:e=>(0,p.jsx)(`div`,{style:v,children:[`contained`,`outlined`,`ghost`].map(t=>(0,p.jsx)(`div`,{style:_,children:[`primary`,`accent`,`secondary`,`destructive`].map(n=>(0,p.jsx)(s,{...e,variant:n,appearance:t,children:n},n))},t))})},x={render:e=>(0,p.jsx)(`div`,{style:_,children:[`sm`,`md`].map(t=>(0,p.jsx)(s,{...e,size:t,children:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`].map(t=>e.getByRole(`button`,{name:t}).getBoundingClientRect().height);await m(t).toEqual([24,32])}},S={args:{startIcon:(0,p.jsx)(l,{name:`plus`}),endIcon:(0,p.jsx)(l,{name:`chevron-down`}),children:`Add product`},play:async({canvas:e})=>{await m(e.getByRole(`button`)).toHaveAccessibleName(`Add product`)}},C={args:{isIconOnly:!0,"aria-label":`Close`,children:(0,p.jsx)(l,{name:`close`})},render:e=>(0,p.jsx)(`div`,{style:_,children:[`sm`,`md`].map(t=>(0,p.jsx)(s,{...e,size:t,appearance:`ghost`},t))}),play:async({canvas:e})=>{let[t]=e.getAllByRole(`button`,{name:`Close`}),n=t.getBoundingClientRect();await m(n.width).toBe(n.height)}},w={args:{isLoading:!0,children:`Save`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Save`});await m(r).toHaveAttribute(`aria-busy`,`true`),await m(r).toHaveAttribute(`aria-disabled`,`true`),await t.tab(),await m(r).toHaveFocus(),await t.keyboard(`{Enter}`),await m(n.onClick).not.toHaveBeenCalled()}},T={args:{disabled:!0},play:async({canvas:e})=>{await m(e.getByRole(`button`,{name:`Button`})).toBeDisabled()}},E={args:{href:`#zweihander`,children:`Documentation`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Documentation`});await m(t).toHaveAttribute(`href`,`#zweihander`),await m(t).not.toHaveAttribute(`type`),await m(e.queryByRole(`button`)).not.toBeInTheDocument();let n=document.createElement(`span`);n.style.cursor=`var(--cursor-link)`,t.append(n);let r=getComputedStyle(n).cursor;n.remove(),await m(getComputedStyle(t).cursor).toBe(r)}},D={args:{href:`#zweihander`,disabled:!0,children:`Documentation`},play:async({canvasElement:e})=>{let t=e.querySelector(`a`);await m(t).not.toHaveAttribute(`href`),await m(t).toHaveAttribute(`aria-disabled`,`true`)}},O={args:{render:(0,p.jsx)(`a`,{href:`#settings`}),children:`Settings`,variant:`secondary`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Settings`});await m(t).toHaveAttribute(`href`,`#settings`),await m(t).not.toHaveAttribute(`role`)}},k={args:{render:(0,p.jsx)(`a`,{href:`#settings`}),disabled:!0,children:`Settings`},play:async({canvasElement:e})=>{let t=e.querySelector(`a`);await m(t).not.toHaveAttribute(`href`),await m(t).toHaveAttribute(`aria-disabled`,`true`)}},A={args:{isFullWidth:!0},render:e=>(0,p.jsx)(`div`,{style:{inlineSize:`20rem`},children:(0,p.jsx)(s,{...e})}),play:async({canvas:e})=>{await m(e.getByRole(`button`).getBoundingClientRect().width).toBe(320)}},j={parameters:{a11y:{test:`off`}},render:()=>(0,p.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,p.jsx)(r,{appearance:e,style:{background:`var(--background)`,padding:8},children:n.map(t=>(0,p.jsx)(r,{accentColor:t,style:{display:`flex`,gap:4},children:[`primary`,`accent`,`secondary`,`destructive`].flatMap(n=>[`contained`,`outlined`,`ghost`].map(r=>(0,p.jsx)(s,{size:`sm`,variant:n,appearance:r,"data-audit":`${e} ${t} ${n} ${r}`,children:`Aa`},n+r)))},t))},e))}),play:async({canvasElement:e})=>{let t=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),n=(e,n)=>(t.clearRect(0,0,1,1),n&&(t.fillStyle=n,t.fillRect(0,0,1,1)),t.fillStyle=e,t.fillRect(0,0,1,1),[...t.getImageData(0,0,1,1).data.slice(0,3)]),r=([e,t,n])=>[e,t,n].map(e=>e/255).map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4).reduce((e,t,n)=>e+t*[.2126,.7152,.0722][n],0),i=(e,t)=>{let[n,i]=[r(e),r(t)].sort((e,t)=>t-e);return(n+.05)/(i+.05)},a=[];for(let t of e.querySelectorAll(`[data-audit]`)){let e=document.createElement(`span`);t.append(e);let r=getComputedStyle(t.parentElement.parentElement).backgroundColor;for(let o of[``,`-hover`,`-active`]){e.style.background=`var(--button-bg${o})`,e.style.color=`var(--button-fg${o})`;let{backgroundColor:s,color:c}=getComputedStyle(e),l=n(s,r),u=i(n(c,n(s,r).length?`rgb(${l})`:r),l);u<4.5&&a.push(`${t.dataset.audit}${o||` rest`}: ${u.toFixed(2)}`)}e.remove()}await m(a).toEqual([])}},M=[{name:`Container`,selector:`button`,description:`The box: fill, border and label colour, from variant × appearance.`},{name:`Start icon`,selector:`button > span:first-child`,description:`Optional. Decorative, sized to the button.`},{name:`Label`,selector:`button > span:nth-child(2)`,description:`The text. An icon-only button has an icon here instead, and an aria-label.`},{name:`End icon`,selector:`button > span:last-child`,description:`Optional, e.g. a chevron for a menu.`}],N={tags:[`!dev`],args:{startIcon:(0,p.jsx)(l,{name:`plus`}),endIcon:(0,p.jsx)(l,{name:`chevron-down`}),children:(0,p.jsx)(`span`,{children:`Add product`})},play:async({canvasElement:e})=>{let t=await d(e,M);await m(t[2]).toHaveTextContent(`Add product`)}},P={render:e=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(s,{...e,children:`Save`}),(0,p.jsx)(s,{...e,variant:`secondary`,appearance:`outlined`,children:`Cancel`})]})},F={tags:[`!dev`],render:e=>(0,p.jsxs)(`div`,{style:_,children:[(0,p.jsx)(s,{...e,children:`Save`}),(0,p.jsx)(s,{...e,children:`Publish`})]})},I={tags:[`!dev`],args:{disabled:!0,children:`Saving…`}},L=[`Default`,`Matrix`,`Sizes`,`WithIcons`,`IconOnly`,`Loading`,`Disabled`,`Href`,`DisabledHref`,`Render`,`DisabledRender`,`FullWidth`,`StateContrast`,`anatomyParts`,`Anatomy`,`DoOnePrimary`,`DontTwoPrimaries`,`DontDisableWhileSaving`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Button'
    });
    await expect(button).toHaveAttribute('type', 'button');
    await userEvent.click(button);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['contained', 'outlined', 'ghost'] as const).map(appearance => <div key={appearance} style={row}>
          {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <Button key={variant} {...args} variant={variant} appearance={appearance}>
              {variant}
            </Button>)}
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md'] as const).map(size => <Button key={size} {...args} size={size}>
          {size}
        </Button>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md'].map(n => canvas.getByRole('button', {
      name: n
    }).getBoundingClientRect().height);
    await expect(heights).toEqual([24, 32]);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="plus" />,
    endIcon: <Icon name="chevron-down" />,
    children: 'Add product'
  },
  play: async ({
    canvas
  }) => {
    // Icons are decoration; the name is the label alone.
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Add product');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isIconOnly: true,
    'aria-label': 'Close',
    children: <Icon name="close" />
  },
  render: args => <div style={row}>
      {(['sm', 'md'] as const).map(size => <Button key={size} {...args} size={size} appearance="ghost" />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const [sm] = canvas.getAllByRole('button', {
      name: 'Close'
    });
    const box = sm.getBoundingClientRect();
    await expect(box.width).toBe(box.height);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Save'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    // Still in the tab order, so focus is not dropped mid-submit...
    await userEvent.tab();
    await expect(button).toHaveFocus();
    // ...but it does not act.
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Button'
    })).toBeDisabled();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#zweihander',
    children: 'Documentation'
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'Documentation'
    });
    await expect(link).toHaveAttribute('href', '#zweihander');
    await expect(link).not.toHaveAttribute('type');
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();

    // Styling a link as a Button must keep the link's hand. Compared against
    // --cursor-link rather than a bare <a href>: WebKit computes a bare link's
    // cursor as 'auto' and only shows the hand on hover.
    const probe = document.createElement('span');
    probe.style.cursor = 'var(--cursor-link)';
    link.append(probe);
    const expected = getComputedStyle(probe).cursor;
    probe.remove();
    await expect(getComputedStyle(link).cursor).toBe(expected);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#zweihander',
    disabled: true,
    children: 'Documentation'
  },
  play: async ({
    canvasElement
  }) => {
    // No href is what actually stops an <a> navigating.
    const a = canvasElement.querySelector('a')!;
    await expect(a).not.toHaveAttribute('href');
    await expect(a).toHaveAttribute('aria-disabled', 'true');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a href="#settings" />,
    children: 'Settings',
    variant: 'secondary'
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'Settings'
    });
    // The render element's own href survives.
    await expect(link).toHaveAttribute('href', '#settings');
    await expect(link).not.toHaveAttribute('role');
  }
}`,...O.parameters?.docs?.source},description:{story:`A router's Link, or any element: props and styles merge onto it.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a href="#settings" />,
    disabled: true,
    children: 'Settings'
  },
  play: async ({
    canvasElement
  }) => {
    // The render element's own href would still navigate from the keyboard,
    // so a disabled render drops it.
    const a = canvasElement.querySelector('a')!;
    await expect(a).not.toHaveAttribute('href');
    await expect(a).toHaveAttribute('aria-disabled', 'true');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  },
  render: args => <div style={{
    inlineSize: '20rem'
  }}>
      <Button {...args} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button').getBoundingClientRect().width).toBe(320);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      background: 'var(--background)',
      padding: 8
    }}>
          {ACCENT_COLORS.map(accent => <Theme key={accent} accentColor={accent} style={{
        display: 'flex',
        gap: 4
      }}>
              {(['primary', 'accent', 'secondary', 'destructive'] as const).flatMap(variant => (['contained', 'outlined', 'ghost'] as const).map(appearance => <Button key={variant + appearance} size="sm" variant={variant} appearance={appearance} data-audit={\`\${mode} \${accent} \${variant} \${appearance}\`}>
                    Aa
                  </Button>))}
            </Theme>)}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const ctx = document.createElement('canvas').getContext('2d', {
      willReadFrequently: true
    })!;
    // Resolve any CSS colour (oklch, color-mix, alpha) to sRGB, composited
    // over the page colour, by painting it.
    const rgb = (color: string, over?: string) => {
      ctx.clearRect(0, 0, 1, 1);
      if (over) {
        ctx.fillStyle = over;
        ctx.fillRect(0, 0, 1, 1);
      }
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      return [...ctx.getImageData(0, 0, 1, 1).data.slice(0, 3)];
    };
    const lum = ([r, g, b]: number[]) => [r, g, b].map(c => c / 255).map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4).reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0);
    const ratio = (a: number[], b: number[]) => {
      const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
      return (x + 0.05) / (y + 0.05);
    };
    const failures: string[] = [];
    for (const button of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const probe = document.createElement('span');
      button.append(probe);
      const page = getComputedStyle(button.parentElement!.parentElement!).backgroundColor;
      for (const state of ['', '-hover', '-active']) {
        probe.style.background = \`var(--button-bg\${state})\`;
        probe.style.color = \`var(--button-fg\${state})\`;
        const {
          backgroundColor,
          color
        } = getComputedStyle(probe);
        const bg = rgb(backgroundColor, page);
        const value = ratio(rgb(color, rgb(backgroundColor, page).length ? \`rgb(\${bg})\` : page), bg);
        if (value < 4.5) failures.push(\`\${button.dataset.audit}\${state || ' rest'}: \${value.toFixed(2)}\`);
      }
      probe.remove();
    }
    await expect(failures).toEqual([]);
  }
}`,...j.parameters?.docs?.source},description:{story:`Every state of every variant × appearance, under all seventeen accents,
in both modes, measured: the label must clear 4.5:1 on its fill at rest,
on hover and when pressed. The colours are read back from the button's
own state properties, resolved by the browser and composited over the
page, so this measures the CSS that ships rather than a copy of it.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    startIcon: <Icon name="plus" />,
    endIcon: <Icon name="chevron-down" />,
    children: <span>Add product</span>
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Add product');
  }
}`,...N.parameters?.docs?.source},description:{story:`Every part present, the label in its own element so the docs can point at it.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Button {...args}>Save</Button>
      <Button {...args} variant="secondary" appearance="outlined">
        Cancel
      </Button>
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Guidelines, Do: one primary action, the rest stepped down.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={row}>
      <Button {...args}>Save</Button>
      <Button {...args}>Publish</Button>
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Don't: two primaries compete for the same click.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    disabled: true,
    children: 'Saving…'
  }
}`,...I.parameters?.docs?.source},description:{story:`Guidelines, Don't: disabling to show progress drops focus and hides the button's state.`,...I.parameters?.docs?.description}}}})))()}export{P as a,E as c,b as d,x as f,R as h,T as i,C as l,M as m,f as n,I as o,S as p,y as r,F as s,N as t,w as u};