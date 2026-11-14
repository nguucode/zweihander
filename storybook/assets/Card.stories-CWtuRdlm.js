import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,y as r}from"./useRenderElement-euNwqn97.js";import{n as i,t as a}from"./useRender-Bn_E94XY.js";import{n as o,t as ee}from"./utils-CUvRSo4U.js";import{n as s,t as c}from"./Theme-cxt2PJ_N.js";import{t as l}from"./jsx-runtime-DeHZSEgm.js";import{n as u,t as d}from"./Button-CAzJH1mZ.js";import{n as f,t as p}from"./expectAnatomy-C52ByQ6s.js";import{r as m,t as h}from"./Avatar-BSv5Q1i3.js";import{n as g,r as _,t as te}from"./story-helpers-EInZsLED.js";var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{v=`_card_1tb6w_1`,y=`_vertical_1tb6w_15`,b=`_horizontal_1tb6w_19`,x=`_xs_1tb6w_24`,S=`_sm_1tb6w_28`,C=`_rounded_1tb6w_33`,w=`_elevated_1tb6w_37`,T=`_outline_1tb6w_44`,E=`_unstyled_1tb6w_54`,D=`_interactive_1tb6w_58`,O={card:v,vertical:y,horizontal:b,xs:x,sm:S,rounded:C,elevated:w,outline:T,unstyled:E,interactive:D}})))()}function A({size:e=`sm`,appearance:t=`elevated`,orientation:n=`vertical`,isRounded:a=!0,onClick:o,render:s,className:c,...l}){let u=o!==void 0||s!==void 0;return i({render:s,defaultTagName:o?`button`:`div`,props:r({className:ee(O.card,O[e],O[t],O[n],a&&O.rounded,u&&O.interactive,c),...o&&{onClick:o,...!s&&{type:`button`}}},l)})}function j(){return(j=e((()=>{n(),a(),o(),k()})))()}var M=t({Anatomy:()=>X,Appearances:()=>V,Clickable:()=>G,ClickableOutline:()=>J,Contrast:()=>q,Default:()=>B,DontNestButtons:()=>Z,Horizontal:()=>U,Link:()=>K,Sizes:()=>H,Square:()=>W,__namedExportsOrder:()=>Q,anatomyParts:()=>Y,default:()=>z}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{f(),u(),m(),s(),j(),_(),N=l(),{expect:P,fn:F}=__STORYBOOK_MODULE_TEST__,I={margin:0,fontSize:`var(--text-heading-xs)`,lineHeight:`var(--leading-heading-xs)`,fontWeight:600},L={margin:0,color:`var(--color-text-subtlest)`},R=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`h3`,{style:I,children:`Payment method`}),(0,N.jsx)(`p`,{style:L,children:`Change how you pay for your plan.`})]}),z={title:`Components/Data Display/Card`,tags:[`beta`],component:A,argTypes:{children:{description:"The content (the spec's `content`). Stacked or side by side, by `orientation`. A clickable card takes phrasing content only: spans, no headings, no links or buttons.",control:!1,table:{type:{summary:`ReactNode`}}},size:{description:`Padding 12 or 16px; the gap between children scales with it.`,control:`inline-radio`,options:[`xs`,`sm`],table:{type:{summary:`'xs' | 'sm'`},defaultValue:{summary:`'sm'`}}},appearance:{description:"`elevated`: the card surface with a faint shadow, no visible edge. `outline`: the surface and its 1px `--color-border` edge, no shadow. `unstyled`: keeps the padding and layout, drops every visual.",control:`inline-radio`,options:[`elevated`,`outline`,`unstyled`],table:{type:{summary:`'elevated' | 'outline' | 'unstyled'`},defaultValue:{summary:`'elevated'`}}},orientation:{description:"How children flow: `vertical` stacks them, `horizontal` sets them side by side (media and text).",control:`inline-radio`,options:[`vertical`,`horizontal`],table:{type:{summary:`'vertical' | 'horizontal'`},defaultValue:{summary:`'vertical'`}}},isRounded:{description:"Rounds the corners with `--radius-lg`. Off: square corners.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},onClick:{description:'Makes the whole card one `<button type="button">`. Called on click, Enter and Space.',control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}},render:{description:"Replaces the element, e.g. `<a href>` or a router's Link for a card that navigates. Props and styles merge onto it, and it gets the hover and focus of a clickable card.",control:!1,table:{type:{summary:`ReactElement | (props, state) => ReactElement`}}}},args:{children:(0,N.jsx)(R,{})},decorators:[e=>(0,N.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})],excludeStories:[`anatomyParts`]},B={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`heading`,{name:`Payment method`}).parentElement;await P(n.tagName).toBe(`DIV`),await P(n).not.toHaveAttribute(`role`),await P(getComputedStyle(n).paddingTop).toBe(`16px`),await P(getComputedStyle(n).borderTopColor).toBe(`rgba(0, 0, 0, 0)`),await P(e.getAllByRole(`heading`)).toHaveLength(1),await t.tab(),await P(document.body).toHaveFocus()}},V={render:e=>(0,N.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`elevated`,`outline`,`unstyled`].map(t=>(0,N.jsxs)(A,{...e,appearance:t,"data-appearance":t,children:[(0,N.jsx)(`h3`,{style:I,children:t}),(0,N.jsx)(`p`,{style:L,children:`Change how you pay for your plan.`})]},t))}),play:async({canvasElement:e})=>{let t=t=>getComputedStyle(e.querySelector(`[data-appearance="${t}"]`));await P(t(`outline`).borderTopColor).not.toBe(`rgba(0, 0, 0, 0)`);for(let e of[`elevated`,`unstyled`])await P(t(e).borderTopColor).toBe(`rgba(0, 0, 0, 0)`);for(let e of[`elevated`,`outline`,`unstyled`])await P(t(e).borderTopWidth).toBe(`1px`)}},H={render:e=>(0,N.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`xs`,`sm`].map(t=>(0,N.jsx)(A,{...e,size:t,"data-size":t},t))}),play:async({canvasElement:e})=>{let t=[`xs`,`sm`].map(t=>getComputedStyle(e.querySelector(`[data-size="${t}"]`)).paddingTop);await P(t).toEqual([`12px`,`16px`])}},U={args:{orientation:`horizontal`,children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{initials:`MT`}),(0,N.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`,flex:1},children:[(0,N.jsx)(`h3`,{style:I,children:`Mary Thompson`}),(0,N.jsx)(`p`,{style:L,children:`Product designer`})]}),(0,N.jsx)(d,{size:`sm`,appearance:`outlined`,variant:`secondary`,children:`Follow`})]})}},W={args:{isRounded:!1}},G={args:{onClick:F(),children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{style:I,children:`Payment method`}),(0,N.jsx)(`span`,{style:L,children:`Change how you pay for your plan.`})]})},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/Payment method.*Change how you pay for your plan/});await P(e.getAllByRole(`button`)).toHaveLength(1),await P(r).toHaveAttribute(`type`,`button`),await t.click(r),await t.tab({shift:!0}),await t.tab(),await P(r).toHaveFocus(),await t.keyboard(`{Enter}`),await t.keyboard(` `),await P(n.onClick).toHaveBeenCalledTimes(3)}},K={args:{render:(0,N.jsx)(`a`,{href:`#billing`})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`link`,{name:/Payment method/});await P(n).toHaveAttribute(`href`,`#billing`),await P(n).not.toHaveAttribute(`type`),await t.tab(),await P(n).toHaveFocus()}},q={render:()=>(0,N.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,N.jsx)(c,{appearance:e,style:{display:`grid`,gap:`var(--space-2)`,background:`var(--color-surface)`,padding:`var(--space-2)`},children:[`elevated`,`outline`,`unstyled`].map(t=>(0,N.jsx)(A,{appearance:t,onClick:()=>{},"data-audit":`${e} ${t}`,children:(0,N.jsx)(`span`,{style:L,children:`Change how you pay for your plan.`})},t))},e))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[data-audit]`)){let e=n.dataset.audit,r=getComputedStyle(n.firstElementChild).color,i=te(r,getComputedStyle(n.parentElement).backgroundColor,getComputedStyle(n).backgroundColor);i<4.5&&t.push(`${e}: ${i.toFixed(2)}`);let a=g(n);for(let n of a)(n.style.background||n.style.backgroundColor||n.style.backgroundImage)&&t.push(`${e}: ${n.selectorText} changes the surface`);!e.endsWith(`unstyled`)&&!a.some(e=>e.style.boxShadow||e.style.borderColor)&&t.push(`${e}: hover changes neither shadow nor edge`)}await P(t).toEqual([])}},J={args:{...G.args,appearance:`outline`},play:async({canvas:e})=>{let t=e.getByRole(`button`);await P(g(t).some(e=>e.style.borderColor===`var(--color-border-bold)`)).toBe(!0)}},Y=[{name:`Container`,selector:`div:has(> h3)`,description:`The surface: --color-surface-raised, a shadow (elevated) or a --color-border edge (outline), and the padding from size. Content stacks or sits side by side, by orientation.`},{name:`Title`,selector:`div:has(> h3) > h3`,description:`Your content: a heading at the level the page needs. The card has none of its own.`},{name:`Body`,selector:`div:has(> h3) > p`,description:`Your content: anything, here a line of muted text.`}],X={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await p(e,Y);await P(t[1]).toHaveTextContent(`Payment method`)}},Z={tags:[`!dev`],parameters:{a11y:{test:`off`}},args:{onClick:F(),orientation:`horizontal`,children:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{initials:`MT`}),(0,N.jsxs)(`span`,{style:{display:`grid`,gap:`var(--space-1)`,flex:1},children:[(0,N.jsx)(`span`,{style:I,children:`Mary Thompson`}),(0,N.jsx)(`span`,{style:L,children:`Product designer`})]}),(0,N.jsx)(d,{size:`sm`,appearance:`outlined`,variant:`secondary`,children:`Follow`})]})}},Q=[`Default`,`Appearances`,`Sizes`,`Horizontal`,`Square`,`Clickable`,`Link`,`Contrast`,`ClickableOutline`,`anatomyParts`,`Anatomy`,`DontNestButtons`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    // No size given: sm. Card has no md (Figma has xs and sm only).
    await expect(getComputedStyle(card).paddingTop).toBe('16px');
    // Elevated draws no edge: its 1px border is transparent.
    await expect(getComputedStyle(card).borderTopColor).toBe('rgba(0, 0, 0, 0)');
    await expect(canvas.getAllByRole('heading')).toHaveLength(1);
    await userEvent.tab();
    await expect(document.body).toHaveFocus();
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['elevated', 'outline', 'unstyled'] as const).map(appearance => <Card key={appearance} {...args} appearance={appearance} data-appearance={appearance}>
          <h3 style={title}>{appearance}</h3>
          <p style={muted}>Change how you pay for your plan.</p>
        </Card>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Only outline draws its edge; every appearance keeps the same 1px box.
    const edge = (a: string) => getComputedStyle(canvasElement.querySelector(\`[data-appearance="\${a}"]\`)!);
    await expect(edge('outline').borderTopColor).not.toBe('rgba(0, 0, 0, 0)');
    for (const a of ['elevated', 'unstyled']) await expect(edge(a).borderTopColor).toBe('rgba(0, 0, 0, 0)');
    for (const a of ['elevated', 'outline', 'unstyled']) await expect(edge(a).borderTopWidth).toBe('1px');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['xs', 'sm'] as const).map(size => <Card key={size} {...args} size={size} data-size={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pads = ['xs', 'sm'].map(s => getComputedStyle(canvasElement.querySelector(\`[data-size="\${s}"]\`)!).paddingTop);
    await expect(pads).toEqual(['12px', '16px']);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isRounded: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`The whole card is one button, so its content must be phrasing content:
spans, not headings or paragraphs, and nothing interactive.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`A card that navigates renders a real link.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      display: 'grid',
      gap: 'var(--space-2)',
      background: 'var(--color-surface)',
      padding: 'var(--space-2)'
    }}>
          {(['elevated', 'outline', 'unstyled'] as const).map(appearance => <Card key={appearance} appearance={appearance} onClick={() => {}} data-audit={\`\${mode} \${appearance}\`}>
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
}`,...q.parameters?.docs?.source},description:{story:`Muted text on every appearance of a clickable card, in both modes, at rest
and on hover: hover may change the shadow or the edge, never the surface.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Clickable.args,
    appearance: 'outline'
  },
  play: async ({
    canvas
  }) => {
    const card = canvas.getByRole('button');
    // Hover strengthens the edge to the 3:1 control border.
    await expect(hoverRules(card).some(r => r.style.borderColor === 'var(--color-border-bold)')).toBe(true);
  }
}`,...J.parameters?.docs?.source},description:{story:"A clickable `outline` card: on hover its edge strengthens instead of the shadow.",...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Payment method');
  }
}`,...X.parameters?.docs?.source},description:{story:`A plain card with a heading and a line of text, so the docs can point at each.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Don't: a button inside a clickable card.`,...Z.parameters?.docs?.description}}}})))()}export{J as a,U as c,W as d,Y as f,G as i,K as l,V as n,B as o,$ as p,M as r,Z as s,X as t,H as u};