import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-Bwi4V5f1.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./States-COwIDKmw.js";import{n as h,t as g}from"./icon-C9aTyDDd.js";import{n as _,t as v}from"./Status-Bh5ZRJmX.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{n(),h(),o(),c(),u(),s(),l(),_(),y=t(),{STORY_RENDERED:b}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Internal/Docs blocks`,tags:[`!dev`]},D=(0,y.jsx)(r,{startIcon:(0,y.jsx)(g,{name:`plus`}),size:`md`,children:`Add item`}),O=(0,y.jsxs)(a,{children:[(0,y.jsx)(f,{value:`overview`,children:(0,y.jsx)(`p`,{children:`What it is.`})}),(0,y.jsx)(f,{value:`specs`,children:(0,y.jsx)(`p`,{children:`How it is built.`})}),(0,y.jsx)(f,{value:`guidelines`,children:(0,y.jsx)(`p`,{children:`How to use it.`})})]}),k={render:()=>O,play:async({canvas:e})=>{await S(e.getByRole(`tablist`,{name:`Documentation`})).toBeVisible();let[t,n,r]=e.getAllByRole(`tab`);await S([t,n,r].map(e=>e.textContent)).toEqual([`Overview`,`Specs`,`Guidelines`]),await S(t).toHaveAttribute(`aria-selected`,`true`),await S(e.getByRole(`tabpanel`)).toHaveTextContent(`What it is.`),await C.click(n),await w(()=>S(e.getByRole(`tabpanel`)).toHaveTextContent(`How it is built.`)),await C.keyboard(`{ArrowRight}`),await w(()=>S(r).toHaveAttribute(`aria-selected`,`true`)),await w(()=>S(e.getByRole(`tabpanel`)).toHaveTextContent(`How to use it.`)),await C.keyboard(`{ArrowLeft}{ArrowLeft}`),await w(()=>S(t).toHaveAttribute(`aria-selected`,`true`)),await S(t).toHaveFocus()}},A=(0,y.jsx)(m,{parts:[{name:`Container`,selector:`button`,description:`The box.`},{name:`Start icon`,selector:`svg`,description:"Decorative: `aria-hidden`."}],children:D}),j={name:`Anatomy`,render:()=>A,play:async({canvas:e})=>{let t=await e.findAllByRole(`img`,{name:/^\d: /});await S(t.map(e=>e.getAttribute(`aria-label`))).toEqual([`1: Container`,`2: Start icon`]),await S(t.map(e=>e.textContent)).toEqual([`1`,`2`]);for(let[n,r]of[[t[0],e.getByRole(`button`)],[t[1],e.getByRole(`button`).querySelector(`svg`)]]){let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();await S(Math.abs(e.left+e.width/2-(t.left+t.width/2))).toBeLessThanOrEqual(1),await S(e.bottom).toBeLessThan(t.top);let i=n.previousElementSibling.getBoundingClientRect();await S(Math.abs(i.bottom-t.top)).toBeLessThanOrEqual(1)}let n=e.getByRole(`table`);await S(T(n).getByRole(`rowheader`,{name:`Start icon`})).toBeVisible(),await S(n).not.toHaveTextContent(`Not found`),await S(T(n).getByText(`aria-hidden`).tagName).toBe(`CODE`),await S(n).not.toHaveTextContent("`")}},M={render:()=>(0,y.jsx)(m,{parts:[{name:`Container`,selector:`button`},{name:`Label`,selector:`button`},{name:`Again`,selector:`button`}],children:D}),play:async({canvas:e})=>{let t=(await e.findAllByRole(`img`,{name:/^\d: /})).map(e=>e.getBoundingClientRect());await S(t).toHaveLength(3);for(let[e,n]of t.entries())for(let r of t.slice(e+1))await S(n.right<=r.left||r.right<=n.left||n.bottom<=r.top||r.bottom<=n.top).toBe(!0)}},N={render:()=>(0,y.jsx)(m,{parts:[{name:`Container`,selector:`button`},{name:`Badge`,selector:`[data-badge]`}],children:D}),play:async({canvas:e})=>{await S(await e.findAllByRole(`img`,{name:/^\d: /})).toHaveLength(1),await S(e.getByRole(`table`)).toHaveTextContent(`Not found: [data-badge] matches nothing in the example.`)}},P=(0,y.jsx)(d,{caption:`Measurements, md`,rows:[{part:`Container`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Background`,token:`--background`},{part:`Label`,property:`Line height`,token:`--leading-body`}]}),F={render:()=>P,play:async({canvas:e})=>{let t=e.getAllByRole(`row`).slice(1),n=e=>e.cells[3];await S(n(t[0])).toHaveTextContent(/^32px$/),await S(n(t[0])).toHaveAttribute(`data-kind`,`length`);let r=n(t[1]);await S(r).toHaveAttribute(`data-kind`,`color`),await S(r.querySelector(`[aria-hidden="true"]`)).not.toBeNull(),await S(n(t[2])).toHaveAttribute(`data-kind`,`raw`);let i=document.documentElement,a=i.classList.contains(`dark`),o=r.textContent;i.classList.toggle(`dark`);try{await w(()=>S(r.textContent).not.toBe(o))}finally{i.classList.toggle(`dark`,a)}await w(()=>S(r.textContent).toBe(o))}},I=(0,y.jsx)(p,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`},{label:`Disabled`,content:(0,y.jsx)(r,{startIcon:(0,y.jsx)(g,{name:`plus`}),disabled:!0,children:`Add item`})}],children:D}),L={name:`States`,render:()=>I,play:async({canvasElement:e})=>{x.getChannel().emit(b);let t=T(e).getAllByRole(`listitem`);await S(t.map(e=>e.lastElementChild.textContent)).toEqual([`Enabled`,`Hover`,`Focus`,`Pressed`,`Disabled`]);let n=t=>e.querySelector(`[data-state="${t}"]`);await S(n(`Hover`)).toHaveClass(`pseudo-hover-all`),await S(n(`Focus`)).toHaveClass(`pseudo-focus-visible-all`),await S(n(`Pressed`)).toHaveClass(`pseudo-active-all`),await S(n(`Disabled`).querySelector(`button`)).toBeDisabled();let r=e=>{let t=getComputedStyle(n(e).querySelector(`button`));return`${t.backgroundColor} ${t.outlineStyle}`},i=()=>{let e=n(`Hover`).querySelector(`button`),t=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSStyleRule&&e.selectorText.includes(`:hover`)),r=t.filter(e=>e.selectorText.includes(`pseudo-hover-all`)),i=r.filter(t=>e.matches(t.selectorText));return`${document.styleSheets.length} sheets, ${t.length} :hover rules, ${r.length} rewritten, ${i.length} reach the button: ${i.map(e=>e.cssText).join(` | `).slice(0,300)||t.find(e=>e.selectorText.includes(`button`))?.cssText.slice(0,300)}`};await w(()=>{x.getChannel().emit(b),S(r(`Hover`),i()).not.toBe(r(`Enabled`))}),await S(getComputedStyle(n(`Hover`).querySelector(`button`)).transitionDuration).toBe(`0s`),await S(r(`Pressed`)).not.toBe(r(`Hover`)),await S(getComputedStyle(n(`Focus`).querySelector(`button`)).outlineStyle).toBe(`solid`)}},R=(0,y.jsx)(i,{do:(0,y.jsx)(r,{children:`Save`}),doCaption:`One primary button: the thing to do next.`,dont:(0,y.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,y.jsx)(r,{children:`Save`}),(0,y.jsx)(r,{children:`Publish`})]}),dontCaption:`Two primary buttons compete for the same click.`}),z={name:`Do / Don’t`,render:()=>R,play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`figure`);await S(t.querySelector(`figcaption`)).toHaveTextContent(/^Do One primary button/),await S(n.querySelector(`figcaption`)).toHaveTextContent(/^Don’t Two primary buttons/),await S(T(t).getByRole(`button`,{name:`Save`})).toBeVisible()}},B={name:`Status`,render:()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v,{of:{default:{tags:[`beta`]}}}),(0,y.jsx)(v,{of:{default:{tags:[`autodocs`]}}})]}),play:async({canvasElement:e})=>{await S(e.textContent).toBe(`Beta`)}},V=(0,y.jsxs)(y.Fragment,{children:[O,A,P,I,R]}),H={globals:{theme:`dark`},render:()=>V,play:async({canvas:e})=>{await S(document.documentElement).toHaveClass(`dark`),await S(e.getAllByRole(`figure`)).toHaveLength(2)}},U={render:()=>(0,y.jsx)(`div`,{style:{inlineSize:320},children:V}),play:async({canvasElement:e})=>{let t=e.firstElementChild;await S(t.scrollWidth).toBeLessThanOrEqual(320);for(let t of T(e).getAllByRole(`figure`))await S(t.getBoundingClientRect().width).toBeLessThanOrEqual(320)}},W=[`Tabs`,`AnatomyMarkers`,`AnatomyCrowded`,`AnatomyMissingPart`,`Spec`,`StateRow`,`Pair`,`StatusTag`,`Dark`,`Narrow`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => tabs,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('tablist', {
      name: 'Documentation'
    })).toBeVisible();
    const [overview, specs, guidelines] = canvas.getAllByRole('tab');
    await expect([overview, specs, guidelines].map(t => t.textContent)).toEqual(['Overview', 'Specs', 'Guidelines']);
    // Overview first, always.
    await expect(overview).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('What it is.');
    // Mouse.
    await userEvent.click(specs);
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How it is built.'));
    // Arrow keys select as they move: a docs page, not a toolbar.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(guidelines).toHaveAttribute('aria-selected', 'true'));
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How to use it.'));
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await waitFor(() => expect(overview).toHaveAttribute('aria-selected', 'true'));
    await expect(overview).toHaveFocus();
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Anatomy',
  render: () => anatomy,
  play: async ({
    canvas
  }) => {
    // One marker per part, each named by number and part.
    const markers = await canvas.findAllByRole('img', {
      name: /^\\d: /
    });
    await expect(markers.map(m => m.getAttribute('aria-label'))).toEqual(['1: Container', '2: Start icon']);
    await expect(markers.map(m => m.textContent)).toEqual(['1', '2']);
    // Each sits above its part, centred on it, with a line down to the part.
    for (const [marker, part] of [[markers[0], canvas.getByRole('button')], [markers[1], canvas.getByRole('button').querySelector('svg')!]] as const) {
      const m = marker.getBoundingClientRect();
      const p = part.getBoundingClientRect();
      await expect(Math.abs(m.left + m.width / 2 - (p.left + p.width / 2))).toBeLessThanOrEqual(1);
      await expect(m.bottom).toBeLessThan(p.top);
      const line = (marker.previousElementSibling as HTMLElement).getBoundingClientRect();
      await expect(Math.abs(line.bottom - p.top)).toBeLessThanOrEqual(1);
    }
    // The key lists every part.
    const key = canvas.getByRole('table');
    await expect(within(key).getByRole('rowheader', {
      name: 'Start icon'
    })).toBeVisible();
    await expect(key).not.toHaveTextContent('Not found');
    // Backticks in a description become inline code.
    await expect(within(key).getByText('aria-hidden').tagName).toBe('CODE');
    await expect(key).not.toHaveTextContent('\`');
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Anatomy parts={[{
    name: 'Container',
    selector: 'button'
  }, {
    name: 'Label',
    selector: 'button'
  }, {
    name: 'Again',
    selector: 'button'
  }]}>
      {example}
    </Anatomy>,
  play: async ({
    canvas
  }) => {
    // Parts with the same centre still get three markers that do not overlap:
    // one above, one below, one slid aside.
    const boxes = (await canvas.findAllByRole('img', {
      name: /^\\d: /
    })).map(m => m.getBoundingClientRect());
    await expect(boxes).toHaveLength(3);
    for (const [i, a] of boxes.entries()) for (const b of boxes.slice(i + 1)) await expect(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top).toBe(true);
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Anatomy parts={[{
    name: 'Container',
    selector: 'button'
  }, {
    name: 'Badge',
    selector: '[data-badge]'
  }]}>
      {example}
    </Anatomy>,
  play: async ({
    canvas
  }) => {
    // A selector that matches nothing gets no marker, and says so in the key.
    await expect(await canvas.findAllByRole('img', {
      name: /^\\d: /
    })).toHaveLength(1);
    await expect(canvas.getByRole('table')).toHaveTextContent('Not found: [data-badge] matches nothing in the example.');
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => spec,
  play: async ({
    canvas
  }) => {
    const rows = canvas.getAllByRole('row').slice(1) as HTMLTableRowElement[];
    const value = (row: HTMLTableRowElement) => row.cells[3];
    // A length resolves to px, calc() and all.
    await expect(value(rows[0])).toHaveTextContent(/^32px$/);
    await expect(value(rows[0])).toHaveAttribute('data-kind', 'length');
    // A colour shows a swatch and the computed colour.
    const background = value(rows[1]);
    await expect(background).toHaveAttribute('data-kind', 'color');
    await expect(background.querySelector('[aria-hidden="true"]')).not.toBeNull();
    // Anything else shows its declared value.
    await expect(value(rows[2])).toHaveAttribute('data-kind', 'raw');
    // The value follows the theme.
    const html = document.documentElement;
    const wasDark = html.classList.contains('dark');
    const before = background.textContent;
    html.classList.toggle('dark');
    try {
      await waitFor(() => expect(background.textContent).not.toBe(before));
    } finally {
      html.classList.toggle('dark', wasDark);
    }
    await waitFor(() => expect(background.textContent).toBe(before));
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => states,
  play: async ({
    canvasElement
  }) => {
    // Storybook announces each render, and the addon rewrites the stylesheets
    // then (docs pages included). The test runner announces nothing, so play
    // Storybook's part.
    addons.getChannel().emit(STORY_RENDERED);
    const cells = within(canvasElement).getAllByRole('listitem');
    await expect(cells.map(c => c.lastElementChild!.textContent)).toEqual(['Enabled', 'Hover', 'Focus', 'Pressed', 'Disabled']);
    const stage = (label: string) => canvasElement.querySelector<HTMLElement>(\`[data-state="\${label}"]\`)!;
    await expect(stage('Hover')).toHaveClass('pseudo-hover-all');
    await expect(stage('Focus')).toHaveClass('pseudo-focus-visible-all');
    await expect(stage('Pressed')).toHaveClass('pseudo-active-all');
    await expect(stage('Disabled').querySelector('button')).toBeDisabled();
    // The forced states actually paint: the addon rewrote :hover and friends.
    const look = (label: string) => {
      const s = getComputedStyle(stage(label).querySelector('button')!);
      return \`\${s.backgroundColor} \${s.outlineStyle}\`;
    };
    // What the addon did to the stylesheets, for the failure message.
    const rewritten = () => {
      const button = stage('Hover').querySelector('button')!;
      const rules = [...document.styleSheets].flatMap(sheet => {
        try {
          return [...sheet.cssRules];
        } catch {
          return [];
        }
      });
      const hover = rules.filter((r): r is CSSStyleRule => r instanceof CSSStyleRule && r.selectorText.includes(':hover'));
      const forced = hover.filter(r => r.selectorText.includes('pseudo-hover-all'));
      const engaged = forced.filter(r => button.matches(r.selectorText));
      return \`\${document.styleSheets.length} sheets, \${hover.length} :hover rules, \${forced.length} rewritten, \${engaged.length} reach the button: \${engaged.map(r => r.cssText).join(' | ').slice(0, 300) || hover.find(r => r.selectorText.includes('button'))?.cssText.slice(0, 300)}\`;
    };
    await waitFor(() => {
      // Again on each try: a stylesheet Vite injects late is rewritten too.
      addons.getChannel().emit(STORY_RENDERED);
      expect(look('Hover'), rewritten()).not.toBe(look('Enabled'));
    });
    // No transition to wait out: each state shows its end value at once.
    await expect(getComputedStyle(stage('Hover').querySelector('button')!).transitionDuration).toBe('0s');
    await expect(look('Pressed')).not.toBe(look('Hover'));
    await expect(getComputedStyle(stage('Focus').querySelector('button')!).outlineStyle).toBe('solid');
  }
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Do / Don’t',
  render: () => pair,
  play: async ({
    canvas
  }) => {
    const [good, bad] = canvas.getAllByRole('figure');
    // The verdict is a word, not only a colour.
    await expect(good.querySelector('figcaption')).toHaveTextContent(/^Do One primary button/);
    await expect(bad.querySelector('figcaption')).toHaveTextContent(/^Don’t Two primary buttons/);
    await expect(within(good).getByRole('button', {
      name: 'Save'
    })).toBeVisible();
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Status',
  render: () => <>
      <Status of={{
      default: {
        tags: ['beta']
      }
    }} />
      <Status of={{
      default: {
        tags: ['autodocs']
      }
    }} />
    </>,
  play: async ({
    canvasElement
  }) => {
    // The status tag, capitalised; a module with no status tag shows nothing.
    await expect(canvasElement.textContent).toBe('Beta');
  }
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => all,
  play: async ({
    canvas
  }) => {
    await expect(document.documentElement).toHaveClass('dark');
    await expect(canvas.getAllByRole('figure')).toHaveLength(2);
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    inlineSize: 320
  }}>{all}</div>,
  play: async ({
    canvasElement
  }) => {
    // At phone width nothing pushes the page sideways: tables scroll in their
    // own box, grids drop to one column.
    const box = canvasElement.firstElementChild as HTMLElement;
    await expect(box.scrollWidth).toBeLessThanOrEqual(320);
    for (const figure of within(canvasElement).getAllByRole('figure')) await expect(figure.getBoundingClientRect().width).toBeLessThanOrEqual(320);
  }
}`,...U.parameters?.docs?.source}}}})))()}G();export{M as AnatomyCrowded,j as AnatomyMarkers,N as AnatomyMissingPart,H as Dark,U as Narrow,z as Pair,F as Spec,L as StateRow,B as StatusTag,k as Tabs,W as __namedExportsOrder,E as default};