import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{a as r,o as i}from"./Theme-2soWRbQy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,r as d,t as f}from"./Tag-DjFi4YNU.js";import{a as p,r as m,t as h}from"./story-helpers-EInZsLED.js";var g=t({Anatomy:()=>z,Colors:()=>k,Contrast:()=>I,Default:()=>D,DoSubtleHues:()=>B,DontSolidWarmHues:()=>V,Matrix:()=>O,Removable:()=>N,RemovableList:()=>P,Sizes:()=>A,TouchTarget:()=>F,Truncated:()=>L,WithAvatar:()=>M,WithIcon:()=>j,__namedExportsOrder:()=>H,anatomyParts:()=>R,default:()=>S}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{_=n(),c(),o(),i(),d(),m(),v=a(),{expect:y,fn:b}=__STORYBOOK_MODULE_TEST__,x=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,S={title:`Components/Atomic Elements/Tag`,tags:[`beta`],component:u,args:{text:`Account verified`},argTypes:{text:{description:`The label. Required. Truncates with an ellipsis rather than wrapping.`,control:`text`,table:{type:{summary:`string`}}},variant:{description:"A status (`neutral`, `info`, `success`, `warning`, `danger`) or one of the 17 accent hues, for categories.",control:`select`,options:f,table:{type:{summary:`TagVariant`},defaultValue:{summary:`'info'`}}},appearance:{description:"`subtle` tint, `outlined` border, or `solid` fill. Solid hue tags fall under 4.5:1 on warm hues.",control:`inline-radio`,options:[`subtle`,`outlined`,`solid`],table:{type:{summary:`'subtle' | 'outlined' | 'solid'`},defaultValue:{summary:`'subtle'`}}},size:{description:"20px (`sm`) or 24px (`md`) tall: the control tier below its name, to sit in a line of text.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},startIcon:{description:'Icon before the text, usually `<Icon name="…" />`. Decorative: hidden from screen readers.',control:!1,table:{type:{summary:`ReactNode`}}},startAvatar:{description:"Image URL for a small round picture before the text, e.g. a person in a filter. Decorative. Wins over `startIcon`.",control:`text`,table:{type:{summary:`string`}}},hasRemoveButton:{description:'Adds a remove button named "Remove `text`".',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onRemove:{description:`Called when the remove button is pressed. The tag does not remove itself: drop it from your list.`,control:!1,table:{type:{summary:`(event: MouseEvent) => void`}}}},excludeStories:[`anatomyParts`]},C={display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},w={display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`,alignItems:`center`},T=[`neutral`,`info`,`success`,`warning`,`danger`],E=f.filter(e=>!T.includes(e)),D={},O={render:e=>(0,v.jsx)(`div`,{style:C,children:[`subtle`,`outlined`,`solid`].map(t=>(0,v.jsx)(`div`,{style:w,children:T.map(n=>(0,v.jsx)(u,{...e,appearance:t,variant:n,text:n},n))},t))})},k={parameters:{a11y:{test:`todo`}},render:e=>(0,v.jsx)(`div`,{style:C,children:[`subtle`,`outlined`,`solid`].map(t=>(0,v.jsx)(`div`,{style:w,children:E.map(n=>(0,v.jsx)(u,{...e,appearance:t,variant:n,text:n},n))},t))})},A={render:e=>(0,v.jsxs)(`div`,{style:w,children:[(0,v.jsx)(u,{...e,size:`sm`,startIcon:(0,v.jsx)(s,{name:`success`}),hasRemoveButton:!0}),(0,v.jsx)(u,{...e,size:`md`,startIcon:(0,v.jsx)(s,{name:`success`}),hasRemoveButton:!0})]}),play:async({canvasElement:e})=>{let[t,n]=[...e.querySelectorAll(`span[class*="tag"]`)].map(e=>e.getBoundingClientRect().height);await y([t,n]).toEqual([20,24])}},j={args:{startIcon:(0,v.jsx)(s,{name:`success`}),variant:`success`},play:async({canvas:e,canvasElement:t})=>{await y(t.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await y(e.queryByRole(`img`)).toBeNull()}},M={args:{text:`Mary Thompson`,startAvatar:x,hasRemoveButton:!0},play:async({canvas:e,canvasElement:t})=>{await y(t.querySelector(`img`)).toHaveAttribute(`alt`,``),await y(e.queryByRole(`img`)).toBeNull()}},N={args:{hasRemoveButton:!0,onRemove:b()},play:async({canvas:e,args:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Remove Account verified`});await y(r.tagName).toBe(`BUTTON`),await n.click(r),await y(t.onRemove).toHaveBeenCalledTimes(1),await n.tab(),await n.tab({shift:!0}),await y(r).toHaveFocus(),await n.keyboard(`{Enter}`),await n.keyboard(` `),await y(t.onRemove).toHaveBeenCalledTimes(3)}},P={render:function(e){let[t,n]=(0,_.useState)([`Design`,`Research`,`Engineering`]);return(0,v.jsx)(`div`,{style:w,children:t.map(t=>(0,v.jsx)(u,{...e,text:t,hasRemoveButton:!0,onRemove:()=>n(e=>e.filter(e=>e!==t))},t))})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Remove Research`})),await y(e.queryByText(`Research`)).toBeNull(),await y(e.getAllByRole(`button`)).toHaveLength(2),await t.tab(),await y(e.getByRole(`button`,{name:`Remove Design`})).toHaveFocus(),await t.keyboard(`{Enter}`),await y(e.queryByText(`Design`)).toBeNull(),await y(document.body).toHaveFocus()}},F={args:{hasRemoveButton:!0},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Remove Account verified`}),[n]=p(`pointer: coarse`,t,`::before`);await y(n).toBeDefined(),await y([n.style.inlineSize,n.style.blockSize]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`]),await y(getComputedStyle(t).getPropertyValue(`--target-coarse`).trim()).toBe(`44px`),await y(n.style.position).toBe(`absolute`),await y(n.style.background).toBe(``);let r=t.parentElement.getBoundingClientRect(),i=t.getBoundingClientRect();await y(r.height).toBe(24),await y(i.top+i.height/2).toBeCloseTo(r.top+r.height/2,0)}},I={render:e=>(0,v.jsx)(`div`,{children:[`light`,`dark`].map(t=>(0,v.jsx)(r,{appearance:t,style:{...w,background:`var(--background)`,padding:4},children:[`subtle`,`outlined`,`solid`].flatMap(n=>(n===`solid`?T:f).map(r=>(0,v.jsx)(u,{...e,size:`sm`,appearance:n,variant:r,text:`Aa`,"data-audit":`${t} ${n} ${r}`},n+r)))},t))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[data-audit]`)){let{color:e,backgroundColor:r}=getComputedStyle(n),i=h(e,getComputedStyle(n.parentElement).backgroundColor,r);i<4.5&&t.push(`${n.dataset.audit}: ${i.toFixed(2)}`)}await y(t).toEqual([])}},L={args:{text:`A tag whose text is far longer than the space it has been given`},render:e=>(0,v.jsx)(`div`,{style:{inlineSize:`12rem`},children:(0,v.jsx)(u,{...e})})},R=[{name:`Container`,selector:`span`,description:`The box: fill, border and corner by appearance and variant.`},{name:`Start icon`,selector:`span > [aria-hidden="true"]`,description:`Optional and decorative. A start avatar takes its place when given.`},{name:`Text`,selector:`span > span:not([aria-hidden])`,description:`Truncates with an ellipsis rather than wrapping.`},{name:`Remove button`,selector:`button`,description:`Optional. A real <button> named "Remove" and the text.`}],z={tags:[`!dev`],args:{text:`Design`,startIcon:(0,v.jsx)(s,{name:`success`}),hasRemoveButton:!0},play:async({canvasElement:e})=>{let t=await l(e,R);await y(t[0]).toContainElement(t[3]),await y(t[2]).toHaveTextContent(`Design`)}},B={render:e=>(0,v.jsx)(`div`,{style:w,children:[`orange`,`amber`,`yellow`,`lime`].map(t=>(0,v.jsx)(u,{...e,variant:t,text:t},t))})},V={tags:[`!dev`],parameters:{a11y:{test:`off`}},render:e=>(0,v.jsx)(`div`,{style:w,children:[`orange`,`amber`,`yellow`,`lime`].map(t=>(0,v.jsx)(u,{...e,appearance:`solid`,variant:t,text:t},t))})},H=[`Default`,`Matrix`,`Colors`,`Sizes`,`WithIcon`,`WithAvatar`,`Removable`,`RemovableList`,`TouchTarget`,`Contrast`,`Truncated`,`anatomyParts`,`Anatomy`,`DoSubtleHues`,`DontSolidWarmHues`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => <div key={appearance} style={row}>
          {statuses.map(variant => <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />)}
        </div>)}
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  render: args => <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => <div key={appearance} style={row}>
          {hues.map(variant => <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />)}
        </div>)}
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Every hue, for categories rather than status: labels, projects, owners.
Solid hues all take a white label, which the warm ones carry below 4.5:1
(a deliberate call), so contrast here warns instead of failing.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Tag {...args} size="sm" startIcon={<Icon name="success" />} hasRemoveButton />
      <Tag {...args} size="md" startIcon={<Icon name="success" />} hasRemoveButton />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const [sm, md] = [...canvasElement.querySelectorAll('span[class*="tag"]')].map(t => t.getBoundingClientRect().height);
    await expect([sm, md]).toEqual([20, 24]);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="success" />,
    variant: 'success'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Decorative: hidden, so the tag reads as its text alone.
    await expect(canvasElement.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    await expect(canvas.queryByRole('img')).toBeNull();
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Mary Thompson',
    startAvatar: portrait,
    hasRemoveButton: true
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Decorative: alt="", so the name is said once, by the text.
    await expect(canvasElement.querySelector('img')).toHaveAttribute('alt', '');
    await expect(canvas.queryByRole('img')).toBeNull();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    hasRemoveButton: true,
    onRemove: fn()
  },
  play: async ({
    canvas,
    args,
    userEvent
  }) => {
    const remove = canvas.getByRole('button', {
      name: 'Remove Account verified'
    });
    // A native button, not a span with a role.
    await expect(remove.tagName).toBe('BUTTON');
    await userEvent.click(remove);
    await expect(args.onRemove).toHaveBeenCalledTimes(1);
    // Reachable and operable by keyboard alone.
    await userEvent.tab();
    await userEvent.tab({
      shift: true
    });
    await expect(remove).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onRemove).toHaveBeenCalledTimes(3);
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [tags, setTags] = useState(['Design', 'Research', 'Engineering']);
    return <div style={row}>
        {tags.map(t => <Tag key={t} {...args} text={t} hasRemoveButton onRemove={() => setTags(all => all.filter(x => x !== t))} />)}
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Research'
    }));
    await expect(canvas.queryByText('Research')).toBeNull();
    await expect(canvas.getAllByRole('button')).toHaveLength(2);
    // Removed by keyboard, focus has nowhere to stay: it drops to the page.
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Remove Design'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.queryByText('Design')).toBeNull();
    await expect(document.body).toHaveFocus();
  }
}`,...P.parameters?.docs?.source},description:{story:`Removing a tag is the parent's job: onRemove reports, the list updates.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    hasRemoveButton: true
  },
  play: async ({
    canvas
  }) => {
    const remove = canvas.getByRole('button', {
      name: 'Remove Account verified'
    });
    const [area] = mediaRules('pointer: coarse', remove, '::before');
    await expect(area).toBeDefined();
    await expect([area.style.inlineSize, area.style.blockSize]).toEqual(['var(--target-coarse)', 'var(--target-coarse)']);
    // …and the token is the 44px WCAG 2.5.5 asks for.
    await expect(getComputedStyle(remove).getPropertyValue('--target-coarse').trim()).toBe('44px');
    // Absolutely placed and unpainted: the tag looks and measures the same.
    await expect(area.style.position).toBe('absolute');
    await expect(area.style.background).toBe('');
    // Centred on the button, so past a 24px tag it reaches (44 - 24) / 2 = 10px each side.
    const tag = remove.parentElement!.getBoundingClientRect();
    const button = remove.getBoundingClientRect();
    await expect(tag.height).toBe(24);
    await expect(button.top + button.height / 2).toBeCloseTo(tag.top + tag.height / 2, 0);
  }
}`,...F.parameters?.docs?.source},description:{story:"The remove button's touch target. A play cannot switch the pointer type, so\nthis reads the `(pointer: coarse)` rule that reaches the button.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      ...row,
      background: 'var(--background)',
      padding: 4
    }}>
          {(['subtle', 'outlined', 'solid'] as const).flatMap(appearance => (appearance === 'solid' ? statuses : TAG_VARIANTS).map(variant => <Tag key={appearance + variant} {...args} size="sm" appearance={appearance} variant={variant} text="Aa" data-audit={\`\${mode} \${appearance} \${variant}\`} />))}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const tag of canvasElement.querySelectorAll<HTMLElement>('[data-audit]')) {
      const {
        color,
        backgroundColor
      } = getComputedStyle(tag);
      const ratio = contrast(color, getComputedStyle(tag.parentElement!).backgroundColor, backgroundColor);
      if (ratio < 4.5) failures.push(\`\${tag.dataset.audit}: \${ratio.toFixed(2)}\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...I.parameters?.docs?.source},description:{story:`Every label on its fill, in both modes: every status in every appearance,
every hue in subtle and outlined. Solid hues are the documented exception.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A tag whose text is far longer than the space it has been given'
  },
  render: args => <div style={{
    inlineSize: '12rem'
  }}>
      <Tag {...args} />
    </div>
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    text: 'Design',
    startIcon: <Icon name="success" />,
    hasRemoveButton: true
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toContainElement(found[3] as HTMLElement);
    await expect(found[2]).toHaveTextContent('Design');
  }
}`,...z.parameters?.docs?.source},description:{story:`Every part present.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['orange', 'amber', 'yellow', 'lime'] as const).map(variant => <Tag key={variant} {...args} variant={variant} text={variant} />)}
    </div>
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Do: a hue in subtle or outlined, where every label clears 4.5:1.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  // Off on purpose: this story exists to show the label that fails 4.5:1.
  parameters: {
    a11y: {
      test: 'off'
    }
  },
  render: args => <div style={row}>
      {(['orange', 'amber', 'yellow', 'lime'] as const).map(variant => <Tag key={variant} {...args} appearance="solid" variant={variant} text={variant} />)}
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Don't: solid warm hues carry their white label under 4.5:1.`,...V.parameters?.docs?.description}}}})))()}export{O as a,g as c,V as i,R as l,k as n,P as o,B as r,A as s,z as t,U as u};