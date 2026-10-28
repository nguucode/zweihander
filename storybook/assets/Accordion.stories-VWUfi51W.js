import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{a as o,r as s}from"./story-helpers-EInZsLED.js";import{n as c,t as l}from"./Accordion-BXCFEoiy.js";var u=t({Anatomy:()=>j,Controlled:()=>D,Default:()=>v,Disabled:()=>T,DisabledItem:()=>w,DoRelatedSections:()=>M,DontSingleItem:()=>N,FindInPage:()=>E,Flush:()=>S,Headings:()=>b,Multiple:()=>x,Open:()=>y,ReducedMotion:()=>k,Small:()=>C,TouchTarget:()=>O,__namedExportsOrder:()=>P,anatomyParts:()=>A,default:()=>_}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{d=n(),i(),s(),c(),f=r(),{expect:p,fn:m,waitFor:h}=__STORYBOOK_MODULE_TEST__,g=[{value:`install`,title:`How do I install it?`,content:`Copy a component with the shadcn CLI, or install the npm package and import it.`},{value:`theme`,title:`Can I change the colours?`,content:`Wrap a subtree in Theme and pick an accent and a gray; every component follows.`},{value:`dark`,title:`Does it support dark mode?`,content:`Yes. Add the dark class to any element and everything inside switches.`}],_={title:`Components/Data Display/Accordion`,tags:[`beta`],component:l,argTypes:{items:{description:'The sections, in order. Flat, per the kit\'s "flat props" convention: each is `{ value, title, content, disabled? }`, and `value` is its id in `value` and `defaultValue`.',control:!1,table:{type:{summary:`{ value: string; title: ReactNode; content: ReactNode; disabled?: boolean }[]`}}},value:{description:"Controlled: the values of the open items. Pair with `onValueChange`. An array in single mode too: Base UI's model, and the type stays the same when `multiple` is switched on.",control:!1,table:{type:{summary:`string[]`}}},defaultValue:{description:`The items open at first, when uncontrolled.`,control:`object`,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},onValueChange:{description:`Called with the values of the open items when one opens or closes. Base UI's event details are dropped.`,control:!1,table:{type:{summary:`(value: string[]) => void`}}},multiple:{description:`Allow more than one item open at once. Off: opening an item closes the one that was open.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},appearance:{description:"`outlined` frames the items in a panel; `flush` leaves them edge to edge, with no side padding.",control:`inline-radio`,options:[`outlined`,`flush`],table:{type:{summary:`'outlined' | 'flush'`},defaultValue:{summary:`'outlined'`}}},size:{description:"Triggers 32px (`md`) or 24px (`sm`) tall, from the control tiers. `sm` takes 12px text.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},headingLevel:{description:`The heading element each trigger sits in. Match it to the page's outline, which the component cannot know.`,control:`inline-radio`,options:[2,3,4,5,6],table:{type:{summary:`2 | 3 | 4 | 5 | 6`},defaultValue:{summary:`3`}}},disabled:{description:"Disables every item. To disable one, set `disabled` on its entry in `items`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},className:{description:`Added to the container.`,control:!1,table:{type:{summary:`string`}}}},args:{items:g,onValueChange:m()},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`32rem`},children:e()})],excludeStories:[`anatomyParts`]},v={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`How do I install it?`});await p(r).toHaveAttribute(`aria-expanded`,`false`),await t.click(r),await p(r).toHaveAttribute(`aria-expanded`,`true`),await p(e.getByText(/Copy a component/)).toBeVisible(),await p(n.onValueChange).toHaveBeenLastCalledWith([`install`]),await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await p(r).toHaveAttribute(`aria-expanded`,`false`),await t.tab(),await p(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveFocus(),await t.keyboard(`{Enter}`),await p(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`true`),await t.keyboard(` `),await p(e.getByRole(`button`,{name:`Does it support dark mode?`})).toHaveAttribute(`aria-expanded`,`false`)}},y={args:{defaultValue:[`install`]},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`How do I install it?`});await p(n.parentElement).toBe(e.getByRole(`heading`,{level:3,name:`How do I install it?`})),await p(n).toHaveAttribute(`aria-expanded`,`true`),await p(n.getBoundingClientRect().height).toBe(32);let r=e.getByRole(`region`,{name:`How do I install it?`});await p(n).toHaveAttribute(`aria-controls`,r.id),await p(r).toHaveTextContent(/Copy a component/),n.focus(),await t.keyboard(`{ArrowDown}`),await p(n).toHaveFocus(),await t.tab(),await p(e.getByRole(`button`,{name:`Can I change the colours?`})).toHaveFocus()}},b={args:{headingLevel:2},play:async({canvas:e})=>{await p(e.getAllByRole(`heading`,{level:2})).toHaveLength(3)}},x={args:{multiple:!0,defaultValue:[`install`]},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await p(e.getByRole(`button`,{name:`How do I install it?`})).toHaveAttribute(`aria-expanded`,`true`),await p(e.getByRole(`button`,{name:`Can I change the colours?`})).toHaveAttribute(`aria-expanded`,`true`)}},S={args:{appearance:`flush`,defaultValue:[`theme`]}},C={args:{size:`sm`,defaultValue:[`install`]},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`How do I install it?`});await p(t.getBoundingClientRect().height).toBe(24)}},w={args:{items:g.map(e=>e.value===`dark`?{...e,disabled:!0}:e)},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Does it support dark mode?`});await p(n).toHaveAttribute(`aria-disabled`,`true`),await t.click(n),await p(n).toHaveAttribute(`aria-expanded`,`false`)}},T={args:{disabled:!0},play:async({canvas:e,userEvent:t,args:n})=>{for(let n of e.getAllByRole(`button`))await p(n).toHaveAttribute(`aria-disabled`,`true`),await t.click(n),await p(n).toHaveAttribute(`aria-expanded`,`false`);await p(n.onValueChange).not.toHaveBeenCalled()}},E={play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[hidden]`)].find(e=>e.textContent?.includes(`Copy a component`));await p(t).toHaveAttribute(`hidden`,`until-found`)}},D={render:function(e){let[t,n]=(0,d.useState)([]);return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,f.jsx)(l,{...e,value:t,onValueChange:n}),(0,f.jsxs)(`span`,{children:[`Open: `,t.join(`, `)||`none`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Can I change the colours?`})),await h(()=>p(e.getByText(`Open: theme`)).toBeVisible())}},O={play:async({canvas:e})=>{let[t]=e.getAllByRole(`button`),[n]=o(`pointer: coarse`,t);await p(n).toBeDefined(),await p(n.style.minBlockSize).toBe(`var(--target-coarse)`),await p(o(`pointer: coarse`,t,`::before`)).toEqual([])}},k={args:{defaultValue:[`install`]},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`How do I install it?`}),n=e.getByRole(`region`,{name:`How do I install it?`}),r=t.querySelector(`svg`),i=getComputedStyle(n).getPropertyValue(`--duration-base`).trim();for(let e of[n,r])await p(Number.parseFloat(getComputedStyle(e).transitionDuration)*1e3).toBe(Number.parseFloat(i));let a=o(`prefers-reduced-motion: reduce`,document.documentElement);await p(a.map(e=>e.style.getPropertyValue(`--duration-base`).trim())).toContain(`0ms`)}},A=[{name:`Container`,selector:`[data-orientation]:not([data-index])`,description:`Frames the items (outlined) or leaves them edge to edge (flush).`},{name:`Item`,selector:`div:has(> h3)`,description:`One header and its panel, separated from the next by a --border line.`},{name:`Header`,selector:`h3`,description:`A real heading element, h3 by default (headingLevel).`},{name:`Trigger`,selector:`h3 > button`,description:`A button filling the header. It turns the panel on and off.`},{name:`Title`,selector:`h3 > button > span`,description:`The item's title, medium weight.`},{name:`Chevron`,selector:`h3 > button > svg`,description:`Points down when closed and up when open. Decorative.`},{name:`Panel`,selector:`[role="region"]`,description:`The content, in muted text. A closed panel stays in the DOM for find-in-page.`}],j={tags:[`!dev`],args:{defaultValue:[`install`]},play:async({canvasElement:e})=>{let t=await a(e,A);await p(t[4]).toHaveTextContent(`How do I install it?`),await p(t[6]).toHaveTextContent(/Copy a component/)}},M={args:{defaultValue:[`install`]}},N={tags:[`!dev`],args:{items:g.slice(0,1)}},P=[`Default`,`Open`,`Headings`,`Multiple`,`Flush`,`Small`,`DisabledItem`,`Disabled`,`FindInPage`,`Controlled`,`TouchTarget`,`ReducedMotion`,`anatomyParts`,`Anatomy`,`DoRelatedSections`,`DontSingleItem`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const install = canvas.getByRole('button', {
      name: 'How do I install it?'
    });
    await expect(install).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(install);
    await expect(install).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(/Copy a component/)).toBeVisible();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['install']);
    // Single mode: opening another closes the first.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await expect(install).toHaveAttribute('aria-expanded', 'false');
    // Each trigger is a tab stop; Enter and Space toggle.
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    })).toHaveAttribute('aria-expanded', 'false');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['install']
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'How do I install it?'
    });
    await expect(trigger.parentElement).toBe(canvas.getByRole('heading', {
      level: 3,
      name: 'How do I install it?'
    }));
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger.getBoundingClientRect().height).toBe(32);
    const region = canvas.getByRole('region', {
      name: 'How do I install it?'
    });
    await expect(trigger).toHaveAttribute('aria-controls', region.id);
    await expect(region).toHaveTextContent(/Copy a component/);
    // No arrow-key movement between triggers: Tab moves, arrows do not.
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(trigger).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    })).toHaveFocus();
  }
}`,...y.parameters?.docs?.source},description:{story:`One item open: the trigger is a button in a heading, and the panel is a region it labels.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    headingLevel: 2
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('heading', {
      level: 2
    })).toHaveLength(3);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: ['install']
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await expect(canvas.getByRole('button', {
      name: 'How do I install it?'
    })).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'flush',
    defaultValue: ['theme']
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: ['install']
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'How do I install it?'
    });
    await expect(trigger.getBoundingClientRect().height).toBe(24);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: faq.map(i => i.value === 'dark' ? {
      ...i,
      disabled: true
    } : i)
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const dark = canvas.getByRole('button', {
      name: 'Does it support dark mode?'
    });
    await expect(dark).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(dark);
    await expect(dark).toHaveAttribute('aria-expanded', 'false');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    for (const trigger of canvas.getAllByRole('button')) {
      await expect(trigger).toHaveAttribute('aria-disabled', 'true');
      await userEvent.click(trigger);
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    }
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...T.parameters?.docs?.source},description:{story:"`disabled` on the accordion: every item.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const panel = [...canvasElement.querySelectorAll('[hidden]')].find(el => el.textContent?.includes('Copy a component'));
    await expect(panel).toHaveAttribute('hidden', 'until-found');
  }
}`,...E.parameters?.docs?.source},description:{story:`Collapsed panels stay in the DOM, so find-in-page can reach them.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([]);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)'
    }}>
        <Accordion {...args} value={open} onValueChange={setOpen} />
        <span>Open: {open.join(', ') || 'none'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Can I change the colours?'
    }));
    await waitFor(() => expect(canvas.getByText('Open: theme')).toBeVisible());
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const [trigger] = canvas.getAllByRole('button');
    const [rule] = mediaRules('pointer: coarse', trigger);
    await expect(rule).toBeDefined();
    // The trigger itself grows: no invisible hit area overlapping the next one.
    await expect(rule.style.minBlockSize).toBe('var(--target-coarse)');
    await expect(mediaRules('pointer: coarse', trigger, '::before')).toEqual([]);
  }
}`,...O.parameters?.docs?.source},description:{story:"A play cannot switch the pointer type, so this reads the `(pointer: coarse)` rule that reaches a trigger.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['install']
  },
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'How do I install it?'
    });
    const panel = canvas.getByRole('region', {
      name: 'How do I install it?'
    });
    const chevron = trigger.querySelector('svg')!;
    const base = getComputedStyle(panel).getPropertyValue('--duration-base').trim();
    for (const el of [panel, chevron]) {
      await expect(Number.parseFloat(getComputedStyle(el).transitionDuration) * 1000).toBe(Number.parseFloat(base));
    }
    const reduced = mediaRules('prefers-reduced-motion: reduce', document.documentElement);
    await expect(reduced.map(r => r.style.getPropertyValue('--duration-base').trim())).toContain('0ms');
  }
}`,...k.parameters?.docs?.source},description:{story:`A play cannot set prefers-reduced-motion. The panel and the chevron time their transitions with --duration-base, and the reduced-motion rule in tokens.css sets that to 0ms.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: ['install']
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveTextContent('How do I install it?');
    await expect(found[6]).toHaveTextContent(/Copy a component/);
  }
}`,...j.parameters?.docs?.source},description:{story:`The first item open, so every part is on screen.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['install']
  }
}`,...M.parameters?.docs?.source},description:{story:`Guidelines, Do: several related sections a reader picks from.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: faq.slice(0, 1)
  }
}`,...N.parameters?.docs?.source},description:{story:`Guidelines, Don't: one section in an accordion. That is a Collapse.`,...N.parameters?.docs?.description}}}})))()}export{T as a,S as c,y as d,C as f,v as i,b as l,F as m,j as n,M as o,A as p,D as r,N as s,u as t,x as u};