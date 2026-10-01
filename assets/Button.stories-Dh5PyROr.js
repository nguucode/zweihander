import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Button-BLXGvKSL.js";import{t as s}from"./palettes-BiV_yfbL.js";import{n as c,r as l}from"./Theme-CzJoMzJJ.js";var u=t({Default:()=>_,Disabled:()=>C,DisabledHref:()=>T,DisabledRender:()=>D,FullWidth:()=>O,Href:()=>w,IconOnly:()=>x,Loading:()=>S,Matrix:()=>v,Render:()=>E,Sizes:()=>y,StateContrast:()=>k,WithIcons:()=>b,__namedExportsOrder:()=>A,default:()=>m}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{r(),l(),a(),d=n(),{expect:f,fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Buttons/Button`,component:o,parameters:{a11y:{test:`error`}},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]},appearance:{control:`inline-radio`,options:[`contained`,`outlined`,`ghost`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`xl`]},startIcon:{control:!1},endIcon:{control:!1},render:{control:!1}},args:{children:`Button`,onClick:p()}},h={display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`,alignItems:`center`},g={display:`grid`,gap:`var(--space-3)`},_={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Button`});await f(r).toHaveAttribute(`type`,`button`),await t.click(r),await t.keyboard(`{Enter}`),await t.keyboard(` `),await f(n.onClick).toHaveBeenCalledTimes(3)}},v={render:e=>(0,d.jsx)(`div`,{style:g,children:[`contained`,`outlined`,`ghost`].map(t=>(0,d.jsx)(`div`,{style:h,children:[`primary`,`accent`,`secondary`,`destructive`].map(n=>(0,d.jsx)(o,{...e,variant:n,appearance:t,children:n},n))},t))})},y={render:e=>(0,d.jsx)(`div`,{style:h,children:[`sm`,`md`,`lg`,`xl`].map(t=>(0,d.jsx)(o,{...e,size:t,children:t},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`,`xl`].map(t=>e.getByRole(`button`,{name:t}).getBoundingClientRect().height);await f(t).toEqual([32,40,48,56])}},b={args:{startIcon:(0,d.jsx)(i,{name:`plus`}),endIcon:(0,d.jsx)(i,{name:`chevron-down`}),children:`Add product`},play:async({canvas:e})=>{await f(e.getByRole(`button`)).toHaveAccessibleName(`Add product`)}},x={args:{isIconOnly:!0,"aria-label":`Close`,children:(0,d.jsx)(i,{name:`close`})},render:e=>(0,d.jsx)(`div`,{style:h,children:[`sm`,`md`,`lg`,`xl`].map(t=>(0,d.jsx)(o,{...e,size:t,appearance:`ghost`},t))}),play:async({canvas:e})=>{let[t]=e.getAllByRole(`button`,{name:`Close`}),n=t.getBoundingClientRect();await f(n.width).toBe(n.height)}},S={args:{isLoading:!0,children:`Save`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Save`});await f(r).toHaveAttribute(`aria-busy`,`true`),await f(r).toHaveAttribute(`aria-disabled`,`true`),await t.tab(),await f(r).toHaveFocus(),await t.keyboard(`{Enter}`),await f(n.onClick).not.toHaveBeenCalled()}},C={args:{disabled:!0},play:async({canvas:e})=>{await f(e.getByRole(`button`,{name:`Button`})).toBeDisabled()}},w={args:{href:`#zweihander`,children:`Documentation`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Documentation`});await f(t).toHaveAttribute(`href`,`#zweihander`),await f(t).not.toHaveAttribute(`type`),await f(e.queryByRole(`button`)).not.toBeInTheDocument();let n=document.createElement(`a`);n.href=`#`,document.body.append(n),await f(getComputedStyle(t).cursor).toBe(getComputedStyle(n).cursor),n.remove()}},T={args:{href:`#zweihander`,disabled:!0,children:`Documentation`},play:async({canvasElement:e})=>{let t=e.querySelector(`a`);await f(t).not.toHaveAttribute(`href`),await f(t).toHaveAttribute(`aria-disabled`,`true`)}},E={args:{render:(0,d.jsx)(`a`,{href:`#settings`}),children:`Settings`,variant:`secondary`},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`Settings`});await f(t).toHaveAttribute(`href`,`#settings`),await f(t).not.toHaveAttribute(`role`)}},D={args:{render:(0,d.jsx)(`a`,{href:`#settings`}),disabled:!0,children:`Settings`},play:async({canvasElement:e})=>{let t=e.querySelector(`a`);await f(t).not.toHaveAttribute(`href`),await f(t).toHaveAttribute(`aria-disabled`,`true`)}},O={args:{isFullWidth:!0},render:e=>(0,d.jsx)(`div`,{style:{inlineSize:`20rem`},children:(0,d.jsx)(o,{...e})}),play:async({canvas:e})=>{await f(e.getByRole(`button`).getBoundingClientRect().width).toBe(320)}},k={parameters:{a11y:{test:`off`}},render:()=>(0,d.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,d.jsx)(c,{appearance:e,style:{background:`var(--background)`,padding:8},children:s.map(t=>(0,d.jsx)(c,{accentColor:t,style:{display:`flex`,gap:4},children:[`primary`,`accent`,`secondary`,`destructive`].flatMap(n=>[`contained`,`outlined`,`ghost`].map(r=>(0,d.jsx)(o,{size:`sm`,variant:n,appearance:r,"data-audit":`${e} ${t} ${n} ${r}`,children:`Aa`},n+r)))},t))},e))}),play:async({canvasElement:e})=>{let t=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),n=(e,n)=>(t.clearRect(0,0,1,1),n&&(t.fillStyle=n,t.fillRect(0,0,1,1)),t.fillStyle=e,t.fillRect(0,0,1,1),[...t.getImageData(0,0,1,1).data.slice(0,3)]),r=([e,t,n])=>[e,t,n].map(e=>e/255).map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4).reduce((e,t,n)=>e+t*[.2126,.7152,.0722][n],0),i=(e,t)=>{let[n,i]=[r(e),r(t)].sort((e,t)=>t-e);return(n+.05)/(i+.05)},a=[];for(let t of e.querySelectorAll(`[data-audit]`)){let e=document.createElement(`span`);t.append(e);let r=getComputedStyle(t.parentElement.parentElement).backgroundColor;for(let o of[``,`-hover`,`-active`]){e.style.background=`var(--button-bg${o})`,e.style.color=`var(--button-fg${o})`;let{backgroundColor:s,color:c}=getComputedStyle(e),l=n(s,r),u=i(n(c,n(s,r).length?`rgb(${l})`:r),l);u<4.5&&a.push(`${t.dataset.audit}${o||` rest`}: ${u.toFixed(2)}`)}e.remove()}await f(a).toEqual([])}},A=[`Default`,`Matrix`,`Sizes`,`WithIcons`,`IconOnly`,`Loading`,`Disabled`,`Href`,`DisabledHref`,`Render`,`DisabledRender`,`FullWidth`,`StateContrast`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['contained', 'outlined', 'ghost'] as const).map(appearance => <div key={appearance} style={row}>
          {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <Button key={variant} {...args} variant={variant} appearance={appearance}>
              {variant}
            </Button>)}
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} {...args} size={size}>
          {size}
        </Button>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const heights = ['sm', 'md', 'lg', 'xl'].map(n => canvas.getByRole('button', {
      name: n
    }).getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48, 56]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isIconOnly: true,
    'aria-label': 'Close',
    children: <Icon name="close" />
  },
  render: args => <div style={row}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} {...args} size={size} appearance="ghost" />)}
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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

    // Styling a link as a Button must not take away the hand the browser
    // gives every other link. Compared against a bare <a href> rather than
    // the literal 'pointer', so overriding --cursor-link keeps this honest.
    const bare = document.createElement('a');
    bare.href = '#';
    document.body.append(bare);
    await expect(getComputedStyle(link).cursor).toBe(getComputedStyle(bare).cursor);
    bare.remove();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`A router's Link, or any element: props and styles merge onto it.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Every state of every variant × appearance, under all seventeen accents,
in both modes, measured: the label must clear 4.5:1 on its fill at rest,
on hover and when pressed. The colours are read back from the button's
own state properties, resolved by the browser and composited over the
page, so this measures the CSS that ships rather than a copy of it.`,...k.parameters?.docs?.description}}}})))()}export{S as a,b as c,x as i,j as l,_ as n,v as o,w as r,y as s,u as t};