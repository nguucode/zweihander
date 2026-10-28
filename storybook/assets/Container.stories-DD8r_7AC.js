import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-CUvRSo4U.js";import{a as i,o as a}from"./Theme-2soWRbQy.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Card-DvxLWsiy.js";import{n as l,t as u}from"./AppShell-DzI1P-p3.js";var d,f,p;function m(){return(m=e((()=>{d=`_container_6lbsj_5`,f=`_padded_6lbsj_24`,p={container:d,padded:f}})))()}function h({size:e=`md`,padded:t=!1,className:n,...i}){return(0,g.jsx)(`div`,{className:r(p.container,t&&p.padded,n),"data-size":e,...i})}var g;function _(){return(_=e((()=>{n(),m(),g=o(),h.__docgenInfo={description:`Caps the width of a page's content and centres it in the space it is
given. It owns no landmark and no surface; inside an App Shell, App
Content keeps the padding, the scroll and the aside column.`,methods:[],displayName:`Container`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:"The widest the content gets: `sm` 48rem, `md` 64rem, `lg` 80rem.",defaultValue:{value:`'md'`,computed:!1}},padded:{required:!1,tsType:{name:`boolean`},description:"Adds the page's side padding, `--space-container` and `--space-section`\nfrom a 64rem viewport. Leave it off inside an App Shell: App Content\nalready pads the page.",defaultValue:{value:`false`,computed:!1}}},composes:[`ComponentProps`]}})))()}var v=t({Dark:()=>P,Default:()=>k,InAppShell:()=>M,Narrow:()=>N,Padded:()=>j,Sizes:()=>A,__namedExportsOrder:()=>F,default:()=>O}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{a(),s(),l(),_(),y=o(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S=e=>(0,y.jsx)(`div`,{style:{padding:`var(--space-container)`,border:`1px dashed var(--border)`,borderRadius:`var(--radius-md)`,background:`var(--surface-filled)`,color:`var(--muted-foreground)`,overflowWrap:`anywhere`},children:e}),C={inlineSize:`84rem`,overflow:`hidden`,outline:`1px solid var(--border)`},w=e=>e*parseFloat(getComputedStyle(document.documentElement).fontSize),T=e=>e.getBoundingClientRect(),E=e=>[...e.querySelectorAll(`[data-size]`)],D=e=>{let t=e.parentElement,n=getComputedStyle(t),r=T(t);return{start:T(e).left-r.left-parseFloat(n.paddingLeft)-parseFloat(n.borderLeftWidth),end:r.right-T(e).right-parseFloat(n.paddingRight)-parseFloat(n.borderRightWidth)}},O={title:`Patterns/Application UI/Container`,tags:[`experimental`],component:h,parameters:{layout:`padded`},args:{children:S(`Page content`)},argTypes:{size:{description:"The widest the content gets: `sm` 48rem for a form or a settings page, `md` 64rem for most pages, `lg` 80rem for a wide table or a dashboard."},padded:{description:"Adds the page's side padding, `--space-container`, and `--space-section` from a 64rem viewport. Leave it off inside an App Shell, where App Content already pads the page."},children:{description:`The page content. Rendered as is.`,control:!1}},render:e=>(0,y.jsx)(`div`,{style:C,children:(0,y.jsx)(h,{...e})})},k={play:async({canvasElement:e})=>{let[t]=E(e);await b(t.tagName).toBe(`DIV`),await b(t).not.toHaveAttribute(`role`),await b(t.tabIndex).toBe(-1),await b(t).not.toHaveAttribute(`tabindex`),await x(()=>{b(T(t).width).toBeCloseTo(w(64),0);let{start:e,end:n}=D(t);b(Math.abs(e-n)).toBeLessThanOrEqual(1)})}},A={render:e=>(0,y.jsxs)(`div`,{style:{...C,display:`grid`,gap:`var(--space-group)`},children:[(0,y.jsx)(h,{...e,size:`sm`,children:S(`sm, 48rem: a form or a settings page`)}),(0,y.jsx)(h,{...e,children:S(`md, 64rem: most pages`)}),(0,y.jsx)(h,{...e,size:`lg`,children:S(`lg, 80rem: a wide table or a dashboard`)})]}),play:async({canvasElement:e})=>{await x(()=>{let t=E(e).map(e=>T(e).width);b(t[0]).toBeCloseTo(w(48),0),b(t[1]).toBeCloseTo(w(64),0),b(t[2]).toBeCloseTo(w(80),0)})}},j={args:{padded:!0},play:async({canvasElement:e})=>{let[t]=E(e),n=window.innerWidth>=w(64)?`--space-section`:`--space-container`,r=document.createElement(`div`);r.style.paddingInlineStart=`var(${n})`,t.append(r);let i=getComputedStyle(r).paddingInlineStart;r.remove(),await b(getComputedStyle(t).paddingInlineStart).toBe(i),await b(getComputedStyle(t).paddingInlineEnd).toBe(i),await x(()=>b(t.clientWidth-2*parseFloat(i)).toBeCloseTo(w(64),0))}},M={args:{size:`sm`},render:e=>(0,y.jsx)(i,{canvas:`neutral`,style:{blockSize:480,border:`1px solid var(--border)`},children:(0,y.jsx)(u,{style:{blockSize:`100%`},children:(0,y.jsx)(h,{...e,children:(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-group)`},children:[(0,y.jsx)(`h1`,{style:{margin:0,fontFamily:`var(--font-heading)`,fontSize:`var(--text-heading-xl)`,lineHeight:`var(--leading-heading-xl)`,fontWeight:500},children:`Billing`}),(0,y.jsx)(c,{appearance:`surface`,size:`sm`,children:`Invoices go to finance@example.com on the first of each month.`})]})})})}),play:async({canvas:e,canvasElement:t})=>{let[n]=E(t);await b(n.parentElement).toBe(e.getByRole(`main`)),await b(getComputedStyle(n).paddingInlineStart).toBe(`0px`),await x(()=>{b(T(n).width).toBeLessThanOrEqual(w(48)+1);let{start:e,end:t}=D(n);b(Math.abs(e-t)).toBeLessThanOrEqual(1)})}},N={args:{children:S(`Quarterlyreconciliationofsubsidiaryaccountsreceivable`)},render:e=>(0,y.jsx)(`div`,{style:{inlineSize:200},children:(0,y.jsx)(h,{...e})}),play:async({canvasElement:e})=>{let[t]=E(e);await x(()=>{b(T(t).width).toBeCloseTo(200,0),b(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)})}},P={...M,globals:{theme:`dark`}},F=[`Default`,`Sizes`,`Padded`,`InAppShell`,`Narrow`,`Dark`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const [el] = containers(canvasElement);
    // A plain div: no role, no landmark, not focusable.
    await expect(el.tagName).toBe('DIV');
    await expect(el).not.toHaveAttribute('role');
    await expect(el.tabIndex).toBe(-1);
    await expect(el).not.toHaveAttribute('tabindex');
    await waitFor(() => {
      expect(box(el).width).toBeCloseTo(rem(64), 0);
      const {
        start,
        end
      } = gaps(el);
      expect(Math.abs(start - end)).toBeLessThanOrEqual(1);
    });
  }
}`,...k.parameters?.docs?.source},description:{story:"`md` by default: the content stops at 64rem and sits in the middle.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    ...wide,
    display: 'grid',
    gap: 'var(--space-group)'
  }}>
      <Container {...args} size="sm">{block('sm, 48rem: a form or a settings page')}</Container>
      <Container {...args}>{block('md, 64rem: most pages')}</Container>
      <Container {...args} size="lg">{block('lg, 80rem: a wide table or a dashboard')}</Container>
    </div>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const widths = containers(canvasElement).map(el => box(el).width);
      expect(widths[0]).toBeCloseTo(rem(48), 0);
      expect(widths[1]).toBeCloseTo(rem(64), 0);
      expect(widths[2]).toBeCloseTo(rem(80), 0);
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`The three sizes, one under the other, for the visual baseline.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    padded: true
  },
  play: async ({
    canvasElement
  }) => {
    const [el] = containers(canvasElement);
    const step = window.innerWidth >= rem(64) ? '--space-section' : '--space-container';
    const probe = document.createElement('div');
    probe.style.paddingInlineStart = \`var(\${step})\`;
    el.append(probe);
    const expected = getComputedStyle(probe).paddingInlineStart;
    probe.remove();
    await expect(getComputedStyle(el).paddingInlineStart).toBe(expected);
    await expect(getComputedStyle(el).paddingInlineEnd).toBe(expected);
    await waitFor(() => expect(el.clientWidth - 2 * parseFloat(expected)).toBeCloseTo(rem(64), 0));
  }
}`,...j.parameters?.docs?.source},description:{story:"`padded` outside an App Shell: side padding by breakpoint, and the cap still measures the content.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => <Theme canvas="neutral" style={{
    blockSize: 480,
    border: '1px solid var(--border)'
  }}>
      <AppShell style={{
      blockSize: '100%'
    }}>
        <Container {...args}>
          <div style={{
          display: 'grid',
          gap: 'var(--space-group)'
        }}>
            <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-heading-xl)',
            lineHeight: 'var(--leading-heading-xl)',
            fontWeight: 500
          }}>Billing</h1>
            <Card appearance="surface" size="sm">
              Invoices go to finance@example.com on the first of each month.
            </Card>
          </div>
        </Container>
      </AppShell>
    </Theme>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const [el] = containers(canvasElement);
    await expect(el.parentElement).toBe(canvas.getByRole('main'));
    await expect(getComputedStyle(el).paddingInlineStart).toBe('0px');
    await waitFor(() => {
      expect(box(el).width).toBeLessThanOrEqual(rem(48) + 1);
      const {
        start,
        end
      } = gaps(el);
      expect(Math.abs(start - end)).toBeLessThanOrEqual(1);
    });
  }
}`,...M.parameters?.docs?.source},description:{story:`In an App Shell: App Content pads the page and the Container only caps and centres it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: block('Quarterlyreconciliationofsubsidiaryaccountsreceivable')
  },
  render: args => <div style={{
    inlineSize: 200
  }}>
      <Container {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const [el] = containers(canvasElement);
    await waitFor(() => {
      expect(box(el).width).toBeCloseTo(200, 0);
      expect(el.scrollWidth).toBeLessThanOrEqual(el.clientWidth);
    });
  }
}`,...N.parameters?.docs?.source},description:{story:`Narrower than its size, it takes the width it is given and never overflows.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...InAppShell,
  globals: {
    theme: 'dark'
  }
}`,...P.parameters?.docs?.source},description:{story:`Dark mode, so the accessibility check covers both themes.`,...P.parameters?.docs?.description}}}})))()}export{A as a,j as i,M as n,I as o,N as r,v as t};