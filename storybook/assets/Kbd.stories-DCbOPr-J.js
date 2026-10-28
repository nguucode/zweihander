import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./Kbd-DUFr_I3T.js";var l=t({Anatomy:()=>S,Combination:()=>g,Default:()=>h,DoHideInControl:()=>y,DontLeaveInName:()=>b,InText:()=>v,Sizes:()=>_,__namedExportsOrder:()=>C,anatomyParts:()=>x,default:()=>p}),u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),r(),s(),u=n(),{expect:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Atomic Elements/Kbd`,tags:[`experimental`],component:c,args:{children:`Esc`},argTypes:{children:{description:"One key: a glyph (`⌘`, `⇧`, `↵`) or a short word (`Esc`, `Tab`). Ignored when `keys` is set.",control:`text`,table:{type:{summary:`ReactNode`}}},keys:{description:"A combination, one key cap per entry, pressed together: `['⌘', 'K']`. Renders a `<kbd>` of `<kbd>`s and takes the place of `children`.",control:`object`,table:{type:{summary:`string[]`}}},size:{description:"20px (`md`) or 16px (`sm`) tall. `sm` fits inside a small control or a dense row.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}}},excludeStories:[`anatomyParts`]},m={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},h={play:async({canvas:e})=>{let t=e.getByText(`Esc`);await d(t.tagName).toBe(`KBD`),await d(t).not.toHaveAttribute(`role`),await f.tab(),await d(t).not.toHaveFocus()}},g={args:{keys:[`⌘`,`⇧`,`P`]},play:async({canvasElement:e})=>{let t=e.querySelector(`:scope kbd:has(> kbd)`);await d(t.querySelectorAll(`:scope > kbd`)).toHaveLength(3);for(let e of t.querySelectorAll(`:scope > kbd`))await d(getComputedStyle(e).borderBottomWidth).toBe(`2px`);await d(t).toHaveTextContent(`⌘⇧P`)}},_={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[`md`,`sm`].map(e=>(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(c,{size:e,children:`Esc`}),(0,u.jsx)(c,{size:e,children:`⌘`}),(0,u.jsx)(c,{size:e,keys:[`⌘`,`K`]}),(0,u.jsx)(c,{size:e,keys:[`Ctrl`,`Shift`,`P`]})]},e))})},v={render:()=>(0,u.jsxs)(`p`,{style:{margin:0},children:[`Press `,(0,u.jsx)(c,{children:`Esc`}),` to close, or `,(0,u.jsx)(c,{keys:[`⌘`,`S`]}),` to save and close.`]}),play:async({canvas:e})=>{await d(e.getByText(/Press/)).toHaveTextContent(`Press Esc to close, or ⌘S to save and close.`)}},y={tags:[`!dev`],render:()=>(0,u.jsxs)(i,{appearance:`outlined`,variant:`secondary`,"aria-keyshortcuts":`Meta+K`,children:[`Search `,(0,u.jsx)(c,{size:`sm`,keys:[`⌘`,`K`],"aria-hidden":!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Search`});await d(t).toHaveAttribute(`aria-keyshortcuts`,`Meta+K`)}},b={tags:[`!dev`],render:()=>(0,u.jsxs)(i,{appearance:`outlined`,variant:`secondary`,children:[`Search `,(0,u.jsx)(c,{size:`sm`,keys:[`⌘`,`K`]})]}),play:async({canvas:e})=>{await d(e.getByRole(`button`)).toHaveAccessibleName(/^Search\s*⌘\s*K$/)}},x=[{name:`Key`,selector:`kbd > kbd:first-child`,description:`One key cap: a glyph or a short word on a bordered chip, its lower edge thicker like a raised key.`},{name:`Group`,selector:`kbd:has(> kbd)`,description:"Optional, with `keys`: the outer `<kbd>` that holds a combination, the caps a small gap apart."}],S={tags:[`!dev`],args:{keys:[`⌘`,`K`]},render:e=>(0,u.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,u.jsx)(c,{...e})}),play:async({canvasElement:e})=>{await o(e,x)}},C=[`Default`,`Combination`,`Sizes`,`InText`,`DoHideInControl`,`DontLeaveInName`,`anatomyParts`,`Anatomy`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const key = canvas.getByText('Esc');
    await expect(key.tagName).toBe('KBD');
    await expect(key).not.toHaveAttribute('role');
    // A key cap is a picture of a key, not a control: never in the tab order.
    await userEvent.tab();
    await expect(key).not.toHaveFocus();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    keys: ['⌘', '⇧', 'P']
  },
  play: async ({
    canvasElement
  }) => {
    const group = canvasElement.querySelector(':scope kbd:has(> kbd)')!;
    await expect(group.querySelectorAll(':scope > kbd')).toHaveLength(3);
    // Each one is drawn as a cap, with the raised lower edge.
    for (const cap of group.querySelectorAll(':scope > kbd')) await expect(getComputedStyle(cap).borderBottomWidth).toBe('2px');
    await expect(group).toHaveTextContent('⌘⇧P');
  }
}`,...g.parameters?.docs?.source},description:{story:"A combination: one cap per key, inside one outer `<kbd>`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      {(['md', 'sm'] as const).map(size => <div key={size} style={row}>
          <Kbd size={size}>Esc</Kbd>
          <Kbd size={size}>⌘</Kbd>
          <Kbd size={size} keys={['⌘', 'K']} />
          <Kbd size={size} keys={['Ctrl', 'Shift', 'P']} />
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    margin: 0
  }}>
      Press <Kbd>Esc</Kbd> to close, or <Kbd keys={['⌘', 'S']} /> to save and close.
    </p>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/Press/)).toHaveTextContent('Press Esc to close, or ⌘S to save and close.');
  }
}`,...v.parameters?.docs?.source},description:{story:`In running text, read where it sits: "Press Esc to close".`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Button appearance="outlined" variant="secondary" aria-keyshortcuts="Meta+K">
      Search <Kbd size="sm" keys={['⌘', 'K']} aria-hidden />
    </Button>,
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Search'
    });
    await expect(button).toHaveAttribute('aria-keyshortcuts', 'Meta+K');
  }
}`,...y.parameters?.docs?.source},description:{story:"A shortcut hint inside a control: hidden from assistive tech, announced through `aria-keyshortcuts`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Button appearance="outlined" variant="secondary">
      Search <Kbd size="sm" keys={['⌘', 'K']} />
    </Button>,
  play: async ({
    canvas
  }) => {
    // Engines differ on spacing between the caps; the glyphs are in the name either way.
    await expect(canvas.getByRole('button')).toHaveAccessibleName(/^Search\\s*⌘\\s*K$/);
  }
}`,...b.parameters?.docs?.source},description:{story:`The hint left in the name: a screen reader hears "Search ⌘ K", glyphs and all.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    keys: ['⌘', 'K']
  },
  render: args => <div style={{
    padding: 'var(--space-4)'
  }}>
      <Kbd {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expectAnatomy(canvasElement, anatomyParts);
  }
}`,...S.parameters?.docs?.source}}}})))()}export{v as a,x as c,b as i,w as l,g as n,l as o,y as r,_ as s,S as t};