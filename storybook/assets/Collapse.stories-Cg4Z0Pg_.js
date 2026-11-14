import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{a,r as o}from"./story-helpers-EInZsLED.js";import{n as s,t as c}from"./Collapse-UQi94Pz6.js";var l=t({Anatomy:()=>w,Default:()=>g,Disabled:()=>y,DoAsideInText:()=>T,DontStackAsList:()=>E,Open:()=>_,ReducedMotion:()=>S,Searchable:()=>b,Small:()=>v,TouchTarget:()=>x,__namedExportsOrder:()=>D,anatomyParts:()=>C,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),s(),o(),u=n(),{expect:d,fn:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Data Display/Collapse`,tags:[`beta`],component:c,args:{label:`Show details`,openLabel:`Hide details`,children:(0,u.jsx)(`p`,{style:{margin:0},children:`Billed yearly on 1 March. Seats you add mid-year are charged for the months left, and removed seats are credited to the next invoice.`}),onOpenChange:f()},argTypes:{label:{description:`The trigger's text, e.g. "Show details". Required.`,control:`text`,table:{type:{summary:`ReactNode`}}},openLabel:{description:"The trigger's text while open, e.g. \"Hide details\". Defaults to `label`. The button's name follows the state; `aria-expanded` says it either way.",control:`text`,table:{type:{summary:`ReactNode`},defaultValue:{summary:`label`}}},children:{description:`The content the trigger shows and hides. Required.`,control:!1,table:{type:{summary:`ReactNode`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Starting open state when uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the new state on click, Enter and Space. Not called while disabled.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},size:{description:"The text size: `--text-body` (`md`) or `--text-body-sm` (`sm`). Match the text around it.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},disabled:{description:`Dimmed, and clicking does nothing.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},hiddenUntilFound:{description:'Keep the closed content in the page as `hidden="until-found"`, so the browser\'s find-in-page reaches it and opens it. Turn it off only for content that is expensive to render.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},className:{description:`Added to the container.`,control:!1,table:{type:{summary:`string`}}}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})],excludeStories:[`anatomyParts`]},g={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Show details`});await d(n).toHaveAttribute(`aria-expanded`,`false`),await d(n.querySelector(`svg`).closest(`[aria-hidden="true"]`)).not.toBeNull(),await p.click(n),await d(e.onOpenChange).toHaveBeenLastCalledWith(!0);let r=t.getByRole(`button`,{name:`Hide details`});await d(r).toHaveAttribute(`aria-expanded`,`true`),await m(()=>d(t.getByText(/Billed yearly/)).toBeVisible());let i=document.getElementById(r.getAttribute(`aria-controls`));await d(i).toContainElement(t.getByText(/Billed yearly/)),await p.keyboard(`{Enter}`),await d(t.getByRole(`button`,{name:`Show details`})).toHaveAttribute(`aria-expanded`,`false`),await p.keyboard(` `),await d(t.getByRole(`button`,{name:`Hide details`})).toHaveAttribute(`aria-expanded`,`true`)}},_={args:{defaultOpen:!0}},v={args:{size:`sm`,label:`Advanced settings`,openLabel:void 0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Advanced settings`});await t.tab(),await d(n).toHaveFocus(),await t.keyboard(` `),await d(n).toHaveAttribute(`aria-expanded`,`true`),await d(n).toHaveAccessibleName(`Advanced settings`),await t.keyboard(`{Enter}`),await d(n).toHaveAttribute(`aria-expanded`,`false`)}},y={args:{disabled:!0},play:async({args:e,canvas:t})=>{await p.click(t.getByRole(`button`,{name:`Show details`})),await d(e.onOpenChange).not.toHaveBeenCalled()}},b={play:async({canvas:e})=>{let t=e.getByText(/Billed yearly/,{});await d(t.closest(`[hidden]`)).toHaveAttribute(`hidden`,`until-found`)}},x={play:async({canvas:e})=>{let[t]=a(`pointer: coarse`,e.getByRole(`button`),`::before`);await d(t).toBeDefined(),await d([t.style.minInlineSize,t.style.blockSize]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`])}},S={args:{defaultOpen:!0},play:async({canvas:e})=>{let t=e.getByRole(`button`),n=document.getElementById(t.getAttribute(`aria-controls`)),r=t.querySelector(`[aria-hidden="true"]`),i=getComputedStyle(n).getPropertyValue(`--duration-base`).trim();for(let e of[n,r])await d(Number.parseFloat(getComputedStyle(e).transitionDuration)*1e3).toBe(Number.parseFloat(i));let o=a(`prefers-reduced-motion: reduce`,document.documentElement);await d(o.map(e=>e.style.getPropertyValue(`--duration-base`).trim())).toContain(`0ms`)}},C=[{name:`Container`,selector:`div:has(> button)`,description:`Holds the trigger and the panel; sets the text size.`},{name:`Trigger`,selector:`button`,description:`A medium-weight text button, underlined on hover.`},{name:`Chevron`,selector:`button > [aria-hidden="true"]`,description:`Points right when closed and down when open. Decorative.`},{name:`Label`,selector:`button > span:last-child`,description:`The text. With openLabel, a second label replaces it while open.`},{name:`Panel`,selector:`button + div`,description:`The content, under the trigger. Its height animates open and shut.`}],w={tags:[`!dev`],args:{defaultOpen:!0,label:(0,u.jsx)(`span`,{children:`Billing details`}),openLabel:void 0},play:async({canvasElement:e})=>{let t=await i(e,C);await d(t[3]).toHaveTextContent(`Billing details`),await d(t[4]).toHaveTextContent(/Billed yearly/)}},T={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,u.jsx)(`p`,{style:{margin:0},children:`Your plan renews on 1 March for 12 seats.`}),(0,u.jsx)(c,{...e})]})},E={tags:[`!dev`],render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,u.jsx)(c,{...e,label:`Billing`,openLabel:void 0}),(0,u.jsx)(c,{...e,label:`Seats`,openLabel:void 0}),(0,u.jsx)(c,{...e,label:`Invoices`,openLabel:void 0})]})},D=[`Default`,`Open`,`Small`,`Disabled`,`Searchable`,`TouchTarget`,`ReducedMotion`,`anatomyParts`,`Anatomy`,`DoAsideInText`,`DontStackAsList`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Show details'
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    // The chevron is hidden: the exact name above has nothing from it.
    await expect(trigger.querySelector('svg')!.closest('[aria-hidden="true"]')).not.toBeNull();
    await userEvent.click(trigger);
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // The name follows the state.
    const open = canvas.getByRole('button', {
      name: 'Hide details'
    });
    await expect(open).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(canvas.getByText(/Billed yearly/)).toBeVisible());
    // The trigger controls the panel it opened.
    const panel = document.getElementById(open.getAttribute('aria-controls')!)!;
    await expect(panel).toContainElement(canvas.getByText(/Billed yearly/));
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Show details'
    })).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('button', {
      name: 'Hide details'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Advanced settings',
    openLabel: undefined
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Without openLabel the name stays put; aria-expanded carries the state.
    const trigger = canvas.getByRole('button', {
      name: 'Advanced settings'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAccessibleName('Advanced settings');
    await userEvent.keyboard('{Enter}');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show details'
    }));
    await expect(args.onOpenChange).not.toHaveBeenCalled();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const text = canvas.getByText(/Billed yearly/, {}) as HTMLElement;
    await expect(text.closest('[hidden]')).toHaveAttribute('hidden', 'until-found');
  }
}`,...b.parameters?.docs?.source},description:{story:`Closed content stays findable: it is hidden="until-found", not removed.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const [area] = mediaRules('pointer: coarse', canvas.getByRole('button'), '::before');
    await expect(area).toBeDefined();
    await expect([area.style.minInlineSize, area.style.blockSize]).toEqual(['var(--target-coarse)', 'var(--target-coarse)']);
  }
}`,...x.parameters?.docs?.source},description:{story:"A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches the trigger.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // Open, so the panel is mounted.
  args: {
    defaultOpen: true
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button');
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!;
    const chevron = trigger.querySelector('[aria-hidden="true"]')!;
    const base = getComputedStyle(panel).getPropertyValue('--duration-base').trim();
    for (const el of [panel, chevron]) {
      await expect(Number.parseFloat(getComputedStyle(el).transitionDuration) * 1000).toBe(Number.parseFloat(base));
    }
    const reduced = mediaRules('prefers-reduced-motion: reduce', document.documentElement);
    await expect(reduced.map(r => r.style.getPropertyValue('--duration-base').trim())).toContain('0ms');
  }
}`,...S.parameters?.docs?.source},description:{story:`A play cannot set prefers-reduced-motion. The panel and the chevron time their transitions with --duration-base, and the reduced-motion rule in tokens.css sets that to 0ms.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultOpen: true,
    label: <span>Billing details</span>,
    openLabel: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveTextContent('Billing details');
    await expect(found[4]).toHaveTextContent(/Billed yearly/);
  }
}`,...w.parameters?.docs?.source},description:{story:`Open, the label in its own element so the docs can point at it.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-2)'
  }}>
      <p style={{
      margin: 0
    }}>Your plan renews on 1 March for 12 seats.</p>
      <Collapse {...args} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Guidelines, Do: one aside in running text, its label saying what opening it does.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-2)'
  }}>
      <Collapse {...args} label="Billing" openLabel={undefined} />
      <Collapse {...args} label="Seats" openLabel={undefined} />
      <Collapse {...args} label="Invoices" openLabel={undefined} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Don't: bare Collapses stacked as a list of sections, with no headings.`,...E.parameters?.docs?.description}}}})))()}export{T as a,b as c,O as d,y as i,v as l,l as n,E as o,g as r,_ as s,w as t,C as u};