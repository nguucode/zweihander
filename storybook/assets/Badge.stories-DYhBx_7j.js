import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-B7N9C5Fg.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{n as s,t as c}from"./Badge-DDdo415p.js";var l=t({Anatomy:()=>O,Default:()=>m,DoNameTheAnchor:()=>k,DontCountOnlyInBadge:()=>A,Dot:()=>b,Floating:()=>w,FloatingDot:()=>T,Inline:()=>C,LabelledCount:()=>S,LabelledDot:()=>x,MaxCount:()=>y,Sizes:()=>v,Status:()=>_,Variants:()=>g,Zero:()=>E,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>f}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),r(),s(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Atomic Elements/Badge`,tags:[`beta`],component:c,args:{count:8},argTypes:{count:{description:'The number shown. Nothing renders without `count` or `isDot`. `0` shows "0".',control:`number`,table:{type:{summary:`number`}}},variant:{description:"Colour. `accent` is the inverted neutral. For presence: `success` Online, `warning` Away, `destructive` Busy, `secondary` Offline.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`,`success`,`warning`],table:{type:{summary:`'primary' | 'accent' | 'secondary' | 'destructive' | 'success' | 'warning'`},defaultValue:{summary:`'primary'`}}},size:{description:"16px (`sm`) or 20px (`md`) tall. Dots are 6px and 8px.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},isDot:{description:'A dot with no number: "something new", not "how many". Hidden from assistive tech unless it has `aria-label`.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},maxCount:{description:"Counts above this show as `maxCount+`, e.g. `99+`, so a large number does not stretch the badge.",control:`number`,table:{type:{summary:`number`}}},isFloating:{description:"Pins the badge to a corner of `children`, with a ring in the page colour. Hidden from assistive tech.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},floatingPlacement:{description:`The corner a floating badge sits on. Start and end are physical: left and right.`,control:`inline-radio`,options:[`top-start`,`top-end`,`bottom-start`,`bottom-end`],table:{type:{summary:`'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`},defaultValue:{summary:`'top-end'`}}},children:{description:`The element a floating badge is pinned to. Put the meaning in its name, e.g. "Notifications, 4 unread".`,control:!1,table:{type:{summary:`ReactNode`}}},"aria-label":{description:`Exposes the badge as an image with this name, e.g. "Online" on a status dot.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},p={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},m={play:async({canvas:e})=>{await d(e.getByText(`8`)).toBeVisible()}},h=[`primary`,`accent`,`secondary`,`destructive`,`success`,`warning`],g={render:e=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,u.jsx)(`div`,{style:p,children:h.map(t=>(0,u.jsx)(c,{...e,variant:t},t))}),(0,u.jsx)(`div`,{style:p,children:h.map(t=>(0,u.jsx)(c,{...e,isDot:!0,variant:t},t))})]})},_={args:{isDot:!0},render:e=>(0,u.jsxs)(`div`,{style:p,children:[(0,u.jsx)(c,{...e,variant:`success`,"aria-label":`Online`}),(0,u.jsx)(c,{...e,variant:`warning`,"aria-label":`Away`}),(0,u.jsx)(c,{...e,variant:`destructive`,"aria-label":`Busy`}),(0,u.jsx)(c,{...e,variant:`secondary`,"aria-label":`Offline`})]}),play:async({canvas:e})=>{await d(e.getByRole(`img`,{name:`Online`})).toBeVisible()}},v={args:{count:3},render:e=>(0,u.jsxs)(`div`,{style:p,children:[(0,u.jsx)(c,{...e,size:`sm`}),(0,u.jsx)(c,{...e,size:`md`}),(0,u.jsx)(c,{...e,size:`sm`,isDot:!0}),(0,u.jsx)(c,{...e,size:`md`,isDot:!0})]}),play:async({canvas:e})=>{let[t,n]=e.getAllByText(`3`);await d(t.getBoundingClientRect().height).toBe(16),await d(n.getBoundingClientRect().height).toBe(20),await d(n.getBoundingClientRect().width).toBe(20)}},y={args:{count:120,maxCount:99,variant:`destructive`},play:async({canvas:e})=>{await d(e.getByText(`99+`)).toBeVisible()}},b={args:{isDot:!0},play:async({canvasElement:e})=>{await d(e.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`)}},x={args:{isDot:!0,"aria-label":`Online`,variant:`success`},play:async({canvas:e})=>{await d(e.getByRole(`img`,{name:`Online`})).toBeVisible()}},S={args:{count:3,"aria-label":`3 unread messages`},play:async({canvas:e})=>{await d(e.getByRole(`img`,{name:`3 unread messages`})).toBeVisible()}},C={args:{count:12},render:e=>(0,u.jsxs)(i,{variant:`secondary`,children:[`Inbox `,(0,u.jsx)(c,{...e})]}),play:async({canvas:e})=>{await d(e.getByRole(`button`)).toHaveAccessibleName(`Inbox 12`)}},w={args:{count:4,isFloating:!0,variant:`destructive`},render:e=>(0,u.jsx)(`div`,{style:{...p,gap:`var(--space-12)`,padding:`var(--space-6)`},children:[`top-start`,`top-end`,`bottom-start`,`bottom-end`].map(t=>(0,u.jsx)(c,{...e,floatingPlacement:t,children:(0,u.jsx)(i,{variant:`secondary`,children:t})},t))}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/^top-end/}).getBoundingClientRect(),n=e.getAllByText(`4`)[1].getBoundingClientRect();await d(e.getAllByText(`4`)[1]).toHaveAttribute(`aria-hidden`,`true`),await d(Math.round(n.left+n.width/2)).toBe(Math.round(t.right)),await d(Math.round(n.top+n.height/2)).toBe(Math.round(t.top))}},T={args:{isDot:!0,isFloating:!0,variant:`destructive`},render:e=>(0,u.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,u.jsx)(c,{...e,children:(0,u.jsx)(i,{variant:`secondary`,children:`Notifications`})})})},E={args:{count:0},play:async({canvas:e})=>{await d(e.getByText(`0`)).toBeVisible()}},D=[{name:`Anchor`,selector:`span:has(> button)`,description:`Wraps the element a floating badge pins to.`},{name:`Container`,selector:`button + span`,description:`The pill and its count, in tabular figures. Past maxCount, a "+" follows. Floating, it gets a ring in the page colour.`},{name:`Dot`,selector:`span:has(> button) + span`,description:`The container with no count: something new, not how many.`}],O={tags:[`!dev`],args:{count:120,maxCount:99,isFloating:!0,variant:`destructive`},render:e=>(0,u.jsxs)(`div`,{style:{...p,gap:`var(--space-8)`,padding:`var(--space-4)`},children:[(0,u.jsx)(c,{...e,children:(0,u.jsx)(i,{variant:`secondary`,children:`Inbox`})}),(0,u.jsx)(c,{isDot:!0,variant:`success`})]}),play:async({canvasElement:e})=>{let t=await o(e,D);await d(t[1]).toHaveTextContent(`99+`),await d(t[2]).toBeEmptyDOMElement()}},k={args:{count:4,isFloating:!0,variant:`destructive`},render:e=>(0,u.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,u.jsx)(c,{...e,children:(0,u.jsx)(i,{variant:`secondary`,"aria-label":`Notifications, 4 unread`,children:`Notifications`})})}),play:async({canvas:e})=>{await d(e.getByRole(`button`)).toHaveAccessibleName(`Notifications, 4 unread`)}},A={tags:[`!dev`],args:{count:4,isFloating:!0,variant:`destructive`},render:e=>(0,u.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,u.jsx)(c,{...e,children:(0,u.jsx)(i,{variant:`secondary`,children:`Notifications`})})}),play:async({canvas:e})=>{await d(e.getByRole(`button`)).toHaveAccessibleName(`Notifications`)}},j=[`Default`,`Variants`,`Status`,`Sizes`,`MaxCount`,`Dot`,`LabelledDot`,`LabelledCount`,`Inline`,`Floating`,`FloatingDot`,`Zero`,`anatomyParts`,`Anatomy`,`DoNameTheAnchor`,`DontCountOnlyInBadge`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('8')).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      <div style={row}>
        {variants.map(v => <Badge key={v} {...args} variant={v} />)}
      </div>
      <div style={row}>
        {variants.map(v => <Badge key={v} {...args} isDot variant={v} />)}
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true
  },
  render: args => <div style={row}>
      <Badge {...args} variant="success" aria-label="Online" />
      <Badge {...args} variant="warning" aria-label="Away" />
      <Badge {...args} variant="destructive" aria-label="Busy" />
      <Badge {...args} variant="secondary" aria-label="Offline" />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Online'
    })).toBeVisible();
  }
}`,..._.parameters?.docs?.source},description:{story:`Presence on an avatar: a labelled dot per state.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  },
  render: args => <div style={row}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="sm" isDot />
      <Badge {...args} size="md" isDot />
    </div>,
  play: async ({
    canvas
  }) => {
    const [sm, md] = canvas.getAllByText('3');
    await expect(sm.getBoundingClientRect().height).toBe(16);
    await expect(md.getBoundingClientRect().height).toBe(20);
    // A single digit stays a circle, not an oval.
    await expect(md.getBoundingClientRect().width).toBe(20);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    maxCount: 99,
    variant: 'destructive'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('99+')).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true
  },
  play: async ({
    canvasElement
  }) => {
    // Unlabelled, a dot is decoration and is hidden from assistive tech.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true,
    'aria-label': 'Online',
    variant: 'success'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Online'
    })).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3,
    'aria-label': '3 unread messages'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: '3 unread messages'
    })).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  },
  render: args => <Button variant="secondary">
      Inbox <Badge {...args} />
    </Button>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Inbox 12');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4,
    isFloating: true,
    variant: 'destructive'
  },
  render: args => <div style={{
    ...row,
    gap: 'var(--space-12)',
    padding: 'var(--space-6)'
  }}>
      {(['top-start', 'top-end', 'bottom-start', 'bottom-end'] as const).map(p => <Badge key={p} {...args} floatingPlacement={p}>
          <Button variant="secondary">{p}</Button>
        </Badge>)}
    </div>,
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button', {
      name: /^top-end/
    }).getBoundingClientRect();
    const badge = canvas.getAllByText('4')[1].getBoundingClientRect();
    // Hidden: read after the button it would be a stray "4".
    await expect(canvas.getAllByText('4')[1]).toHaveAttribute('aria-hidden', 'true');
    // Centred on the button's top-right corner.
    await expect(Math.round(badge.left + badge.width / 2)).toBe(Math.round(button.right));
    await expect(Math.round(badge.top + badge.height / 2)).toBe(Math.round(button.top));
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true,
    isFloating: true,
    variant: 'destructive'
  },
  render: args => <div style={{
    padding: 'var(--space-4)'
  }}>
      <Badge {...args}>
        <Button variant="secondary">Notifications</Button>
      </Badge>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('0')).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`Zero is a count like any other: hide the badge yourself if nothing new means none.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    count: 120,
    maxCount: 99,
    isFloating: true,
    variant: 'destructive'
  },
  render: args => <div style={{
    ...row,
    gap: 'var(--space-8)',
    padding: 'var(--space-4)'
  }}>
      <Badge {...args}>
        <Button variant="secondary">Inbox</Button>
      </Badge>
      <Badge isDot variant="success" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('99+');
    await expect(found[2]).toBeEmptyDOMElement();
  }
}`,...O.parameters?.docs?.source},description:{story:`A floating count past maxCount, and a dot, so every part is on screen.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4,
    isFloating: true,
    variant: 'destructive'
  },
  render: args => <div style={{
    padding: 'var(--space-4)'
  }}>
      <Badge {...args}>
        <Button variant="secondary" aria-label="Notifications, 4 unread">
          Notifications
        </Button>
      </Badge>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Notifications, 4 unread');
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: the anchor's name carries the count the floating badge shows.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    count: 4,
    isFloating: true,
    variant: 'destructive'
  },
  render: args => <div style={{
    padding: 'var(--space-4)'
  }}>
      <Badge {...args}>
        <Button variant="secondary">Notifications</Button>
      </Badge>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button')).toHaveAccessibleName('Notifications');
  }
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: the floating badge is hidden, so a screen reader never hears the count.`,...A.parameters?.docs?.description}}}})))()}export{w as a,_ as c,M as d,A as i,g as l,l as n,y as o,k as r,v as s,O as t,D as u};