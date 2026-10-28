import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-Bwi4V5f1.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{r as l,t as u}from"./Avatar-Br9NGvV-.js";import{n as d,r as f,t as p}from"./story-helpers-EInZsLED.js";import{n as m,t as h}from"./Card-DvxLWsiy.js";var g=t({Anatomy:()=>P,Appearances:()=>T,Clickable:()=>k,ClickableOutline:()=>M,Contrast:()=>j,Default:()=>w,DontNestButtons:()=>F,Horizontal:()=>D,Link:()=>A,NoBorderSquare:()=>O,Sizes:()=>E,__namedExportsOrder:()=>I,anatomyParts:()=>N,default:()=>C}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s(),a(),l(),r(),m(),f(),_=i(),{expect:v,fn:y}=__STORYBOOK_MODULE_TEST__,b={margin:0,fontSize:`var(--text-heading-xs)`,lineHeight:`var(--leading-heading-xs)`,fontWeight:600},x={margin:0,color:`var(--muted-foreground)`},S=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`h3`,{style:b,children:`Payment method`}),(0,_.jsx)(`p`,{style:x,children:`Change how you pay for your plan.`})]}),C={title:`Components/Data Display/Card`,tags:[`beta`],component:h,argTypes:{children:{description:"The content (the spec's `content`). Stacked or side by side, by `orientation`. A clickable card takes phrasing content only: spans, no headings, no links or buttons.",control:!1,table:{type:{summary:`ReactNode`}}},size:{description:`Padding 12, 16, 24 or 32px; the gap between children scales with it.`,control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`],table:{type:{summary:`'xs' | 'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},appearance:{description:"`elevated`: the card surface with a faint shadow. `outline`: the surface and its edge, no shadow. `unstyled`: keeps the padding and layout, drops every visual. `surface`: a block of an AppShell page, elevated when the Theme's `contentStyle` is `card`, a section with a rule above when it is `flat`.",control:`inline-radio`,options:[`elevated`,`outline`,`unstyled`,`surface`],table:{type:{summary:`'elevated' | 'outline' | 'unstyled' | 'surface'`},defaultValue:{summary:`'elevated'`}}},orientation:{description:"How children flow: `vertical` stacks them, `horizontal` sets them side by side (media and text).",control:`inline-radio`,options:[`vertical`,`horizontal`],table:{type:{summary:`'vertical' | 'horizontal'`},defaultValue:{summary:`'vertical'`}}},isRounded:{description:"Rounds the corners with `--radius-panel`. Off: square corners.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},hasBorder:{description:"The 1px `--border` edge. Off: no visible edge. `unstyled` never has one.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},onClick:{description:'Makes the whole card one `<button type="button">`. Called on click, Enter and Space.',control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}},render:{description:"Replaces the element, e.g. `<a href>` or a router's Link for a card that navigates. Props and styles merge onto it, and it gets the hover and focus of a clickable card.",control:!1,table:{type:{summary:`ReactElement | (props, state) => ReactElement`}}}},args:{children:(0,_.jsx)(S,{})},decorators:[e=>(0,_.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})],excludeStories:[`anatomyParts`]},w={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`heading`,{name:`Payment method`}).parentElement;await v(n.tagName).toBe(`DIV`),await v(n).not.toHaveAttribute(`role`),await v(getComputedStyle(n).paddingTop).toBe(`24px`),await v(e.getAllByRole(`heading`)).toHaveLength(1),await t.tab(),await v(document.body).toHaveFocus()}},T={render:e=>(0,_.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`elevated`,`outline`,`unstyled`,`surface`].map(t=>(0,_.jsxs)(h,{...e,appearance:t,children:[(0,_.jsx)(`h3`,{style:b,children:t}),(0,_.jsx)(`p`,{style:x,children:`Change how you pay for your plan.`})]},t))})},E={render:e=>(0,_.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,_.jsx)(h,{...e,size:t,"data-size":t},t))}),play:async({canvasElement:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>getComputedStyle(e.querySelector(`[data-size="${t}"]`)).paddingTop);await v(t).toEqual([`12px`,`16px`,`24px`,`32px`])}},D={args:{orientation:`horizontal`,children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{initials:`MT`}),(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`,flex:1},children:[(0,_.jsx)(`h3`,{style:b,children:`Mary Thompson`}),(0,_.jsx)(`p`,{style:x,children:`Product designer`})]}),(0,_.jsx)(o,{size:`sm`,appearance:`outlined`,variant:`secondary`,children:`Follow`})]})}},O={args:{hasBorder:!1,isRounded:!1}},k={args:{onClick:y(),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`span`,{style:b,children:`Payment method`}),(0,_.jsx)(`span`,{style:x,children:`Change how you pay for your plan.`})]})},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/Payment method.*Change how you pay for your plan/});await v(e.getAllByRole(`button`)).toHaveLength(1),await v(r).toHaveAttribute(`type`,`button`),await t.click(r),await t.tab({shift:!0}),await t.tab(),await v(r).toHaveFocus(),await t.keyboard(`{Enter}`),await t.keyboard(` `),await v(n.onClick).toHaveBeenCalledTimes(3)}},A={args:{render:(0,_.jsx)(`a`,{href:`#billing`})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`link`,{name:/Payment method/});await v(n).toHaveAttribute(`href`,`#billing`),await v(n).not.toHaveAttribute(`type`),await t.tab(),await v(n).toHaveFocus()}},j={render:()=>(0,_.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,_.jsx)(n,{appearance:e,style:{display:`grid`,gap:`var(--space-2)`,background:`var(--background)`,padding:`var(--space-2)`},children:[`elevated`,`outline`,`unstyled`,`surface`].map(t=>(0,_.jsx)(h,{appearance:t,onClick:()=>{},"data-audit":`${e} ${t}`,children:(0,_.jsx)(`span`,{style:x,children:`Change how you pay for your plan.`})},t))},e))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[data-audit]`)){let e=n.dataset.audit,r=getComputedStyle(n.firstElementChild).color,i=p(r,getComputedStyle(n.parentElement).backgroundColor,getComputedStyle(n).backgroundColor);i<4.5&&t.push(`${e}: ${i.toFixed(2)}`);let a=d(n);for(let n of a)(n.style.background||n.style.backgroundColor||n.style.backgroundImage)&&t.push(`${e}: ${n.selectorText} changes the surface`);!e.endsWith(`unstyled`)&&!a.some(e=>e.style.boxShadow||e.style.borderColor)&&t.push(`${e}: hover changes neither shadow nor edge`)}await v(t).toEqual([])}},M={args:{...k.args,appearance:`outline`},play:async({canvas:e})=>{let t=e.getByRole(`button`);await v(d(t).some(e=>e.style.borderColor===`var(--control-border)`)).toBe(!0)}},N=[{name:`Container`,selector:`div:has(> h3)`,description:`The surface: --card, its --border edge and the padding from size. Content stacks or sits side by side, by orientation.`},{name:`Title`,selector:`div:has(> h3) > h3`,description:`Your content: a heading at the level the page needs. The card has none of its own.`},{name:`Body`,selector:`div:has(> h3) > p`,description:`Your content: anything, here a line of muted text.`}],P={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await c(e,N);await v(t[1]).toHaveTextContent(`Payment method`)}},F={tags:[`!dev`],parameters:{a11y:{test:`off`}},args:{onClick:y(),orientation:`horizontal`,children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(u,{initials:`MT`}),(0,_.jsxs)(`span`,{style:{display:`grid`,gap:`var(--space-1)`,flex:1},children:[(0,_.jsx)(`span`,{style:b,children:`Mary Thompson`}),(0,_.jsx)(`span`,{style:x,children:`Product designer`})]}),(0,_.jsx)(o,{size:`sm`,appearance:`outlined`,variant:`secondary`,children:`Follow`})]})}},I=[`Default`,`Appearances`,`Sizes`,`Horizontal`,`NoBorderSquare`,`Clickable`,`Link`,`Contrast`,`ClickableOutline`,`anatomyParts`,`Anatomy`,`DontNestButtons`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    // A plain <div>: no role, no tab stop, no heading of its own.
    const card = canvas.getByRole('heading', {
      name: 'Payment method'
    }).parentElement!;
    await expect(card.tagName).toBe('DIV');
    await expect(card).not.toHaveAttribute('role');
    // No size given: md, the house default.
    await expect(getComputedStyle(card).paddingTop).toBe('24px');
    await expect(canvas.getAllByRole('heading')).toHaveLength(1);
    await userEvent.tab();
    await expect(document.body).toHaveFocus();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['elevated', 'outline', 'unstyled', 'surface'] as const).map(appearance => <Card key={appearance} {...args} appearance={appearance}>
          <h3 style={title}>{appearance}</h3>
          <p style={muted}>Change how you pay for your plan.</p>
        </Card>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Card key={size} {...args} size={size} data-size={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pads = ['xs', 'sm', 'md', 'lg'].map(s => getComputedStyle(canvasElement.querySelector(\`[data-size="\${s}"]\`)!).paddingTop);
    await expect(pads).toEqual(['12px', '16px', '24px', '32px']);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    children: <>
        <Avatar initials="MT" />
        <div style={{
        display: 'grid',
        gap: 'var(--space-1)',
        flex: 1
      }}>
          <h3 style={title}>Mary Thompson</h3>
          <p style={muted}>Product designer</p>
        </div>
        <Button size="sm" appearance="outlined" variant="secondary">
          Follow
        </Button>
      </>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    hasBorder: false,
    isRounded: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: <>
        <span style={title}>Payment method</span>
        <span style={muted}>Change how you pay for your plan.</span>
      </>
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    // One button, its whole content the label.
    const card = canvas.getByRole('button', {
      name: /Payment method.*Change how you pay for your plan/
    });
    await expect(canvas.getAllByRole('button')).toHaveLength(1);
    await expect(card).toHaveAttribute('type', 'button');
    await userEvent.click(card);
    await userEvent.tab({
      shift: true
    });
    await userEvent.tab();
    await expect(card).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...k.parameters?.docs?.source},description:{story:`The whole card is one button, so its content must be phrasing content:
spans, not headings or paragraphs, and nothing interactive.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a href="#billing" />
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: /Payment method/
    });
    await expect(link).toHaveAttribute('href', '#billing');
    await expect(link).not.toHaveAttribute('type');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...A.parameters?.docs?.source},description:{story:`A card that navigates renders a real link.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      display: 'grid',
      gap: 'var(--space-2)',
      background: 'var(--background)',
      padding: 'var(--space-2)'
    }}>
          {(['elevated', 'outline', 'unstyled', 'surface'] as const).map(appearance => <Card key={appearance} appearance={appearance} onClick={() => {}} data-audit={\`\${mode} \${appearance}\`}>
              <span style={muted}>Change how you pay for your plan.</span>
            </Card>)}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const card of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const audit = card.dataset.audit!;
      const text = getComputedStyle(card.firstElementChild!).color;
      const ratio = contrast(text, getComputedStyle(card.parentElement!).backgroundColor, getComputedStyle(card).backgroundColor);
      if (ratio < 4.5) failures.push(\`\${audit}: \${ratio.toFixed(2)}\`);
      const hover = hoverRules(card);
      // The surface under the text is the same on hover, so the rest ratio holds there too.
      for (const r of hover) if (r.style.background || r.style.backgroundColor || r.style.backgroundImage) failures.push(\`\${audit}: \${r.selectorText} changes the surface\`);
      if (!audit.endsWith('unstyled') && !hover.some(r => r.style.boxShadow || r.style.borderColor)) failures.push(\`\${audit}: hover changes neither shadow nor edge\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...j.parameters?.docs?.source},description:{story:`Muted text on every appearance of a clickable card, in both modes, at rest
and on hover: hover may change the shadow or the edge, never the surface.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Clickable.args,
    appearance: 'outline'
  },
  play: async ({
    canvas
  }) => {
    const card = canvas.getByRole('button');
    // Hover strengthens the edge to the 3:1 control border.
    await expect(hoverRules(card).some(r => r.style.borderColor === 'var(--control-border)')).toBe(true);
  }
}`,...M.parameters?.docs?.source},description:{story:"A clickable `outline` card: on hover its edge strengthens instead of the shadow.",...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Payment method');
  }
}`,...P.parameters?.docs?.source},description:{story:`A plain card with a heading and a line of text, so the docs can point at each.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  // The Don't is the a11y failure itself: a button inside a button is
  // invalid HTML and axe's nested-interactive rule fails it.
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  args: {
    onClick: fn(),
    orientation: 'horizontal',
    children: <>
        <Avatar initials="MT" />
        <span style={{
        display: 'grid',
        gap: 'var(--space-1)',
        flex: 1
      }}>
          <span style={title}>Mary Thompson</span>
          <span style={muted}>Product designer</span>
        </span>
        <Button size="sm" appearance="outlined" variant="secondary">
          Follow
        </Button>
      </>
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Don't: a button inside a clickable card.`,...F.parameters?.docs?.description}}}})))()}export{M as a,D as c,E as d,N as f,k as i,A as l,T as n,w as o,L as p,g as r,F as s,P as t,O as u};