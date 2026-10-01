import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{n as a,t as o}from"./Button-BLXGvKSL.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=`_anchor_if0gi_1`,c=`_badge_if0gi_10`,l=`_sm_if0gi_27`,u=`_md_if0gi_32`,d=`_dot_if0gi_39`,f=`_primary_if0gi_51`,p=`_accent_if0gi_58`,m=`_secondary_if0gi_63`,h=`_destructive_if0gi_74`,g=`_floating_if0gi_82`,_={anchor:s,badge:c,sm:l,md:u,dot:d,primary:f,accent:p,secondary:m,destructive:h,floating:g,"top-start":`_top-start_if0gi_90`,"top-end":`_top-end_if0gi_96`,"bottom-start":`_bottom-start_if0gi_102`,"bottom-end":`_bottom-end_if0gi_108`}})))()}function y({count:e,variant:t=`primary`,size:n=`md`,isDot:r=!1,maxCount:a,isFloating:o=!1,floatingPlacement:s=`top-end`,children:c,className:l,...u}){let d=(r||e!==void 0)&&(0,b.jsx)(`span`,{role:u[`aria-label`]?`img`:void 0,"aria-hidden":!u[`aria-label`]&&(r||o)?!0:void 0,className:i(_.badge,_[t],_[n],r&&_.dot,o&&[_.floating,_[s]],l),...u,children:r?null:a!==void 0&&e>a?`${a}+`:e});return c===void 0?d:(0,b.jsxs)(`span`,{className:_.anchor,children:[c,d]})}var b;function x(){return(x=e((()=>{r(),v(),b=n(),y.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{count:{required:!1,tsType:{name:`number`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isDot:{required:!1,tsType:{name:`boolean`},description:`A dot with no number: "something new", not "how many".`,defaultValue:{value:`false`,computed:!1}},maxCount:{required:!1,tsType:{name:`number`},description:"Counts above this show as `maxCount+`."},isFloating:{required:!1,tsType:{name:`boolean`},description:"Pins the badge to a corner of `children` instead of sitting inline.",defaultValue:{value:`false`,computed:!1}},floatingPlacement:{required:!1,tsType:{name:`union`,raw:`'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,elements:[{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`},{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`}]},description:``,defaultValue:{value:`'top-end'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`The element a floating badge is pinned to.`}},composes:[`Omit`]}})))()}var S=t({Default:()=>D,Dot:()=>j,Floating:()=>F,FloatingDot:()=>I,Inline:()=>P,LabelledCount:()=>N,LabelledDot:()=>M,MaxCount:()=>A,Sizes:()=>k,Variants:()=>O,__namedExportsOrder:()=>L,default:()=>T}),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{a(),x(),C=n(),{expect:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Atomic Elements/Badge`,component:y,parameters:{a11y:{test:`error`}},args:{count:8},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]},size:{control:`inline-radio`,options:[`sm`,`md`]},floatingPlacement:{control:`inline-radio`,options:[`top-start`,`top-end`,`bottom-start`,`bottom-end`]},children:{control:!1}}},E={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},D={play:async({canvas:e})=>{await w(e.getByText(`8`)).toBeVisible()}},O={render:e=>(0,C.jsxs)(`div`,{style:E,children:[(0,C.jsx)(y,{...e,variant:`primary`}),(0,C.jsx)(y,{...e,variant:`accent`}),(0,C.jsx)(y,{...e,variant:`secondary`}),(0,C.jsx)(y,{...e,variant:`destructive`}),(0,C.jsx)(y,{...e,isDot:!0,variant:`primary`}),(0,C.jsx)(y,{...e,isDot:!0,variant:`accent`}),(0,C.jsx)(y,{...e,isDot:!0,variant:`secondary`}),(0,C.jsx)(y,{...e,isDot:!0,variant:`destructive`})]})},k={args:{count:3},render:e=>(0,C.jsxs)(`div`,{style:E,children:[(0,C.jsx)(y,{...e,size:`sm`}),(0,C.jsx)(y,{...e,size:`md`}),(0,C.jsx)(y,{...e,size:`sm`,isDot:!0}),(0,C.jsx)(y,{...e,size:`md`,isDot:!0})]}),play:async({canvas:e})=>{let[t,n]=e.getAllByText(`3`);await w(t.getBoundingClientRect().height).toBe(16),await w(n.getBoundingClientRect().height).toBe(20),await w(n.getBoundingClientRect().width).toBe(20)}},A={args:{count:120,maxCount:99,variant:`destructive`},play:async({canvas:e})=>{await w(e.getByText(`99+`)).toBeVisible()}},j={args:{isDot:!0},play:async({canvasElement:e})=>{await w(e.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`)}},M={args:{isDot:!0,"aria-label":`Online`,variant:`accent`},play:async({canvas:e})=>{await w(e.getByRole(`img`,{name:`Online`})).toBeVisible()}},N={args:{count:3,"aria-label":`3 unread messages`},play:async({canvas:e})=>{await w(e.getByRole(`img`,{name:`3 unread messages`})).toBeVisible()}},P={args:{count:12},render:e=>(0,C.jsxs)(o,{variant:`secondary`,children:[`Inbox `,(0,C.jsx)(y,{...e})]}),play:async({canvas:e})=>{await w(e.getByRole(`button`)).toHaveAccessibleName(`Inbox 12`)}},F={args:{count:4,isFloating:!0,variant:`destructive`},render:e=>(0,C.jsx)(`div`,{style:{...E,gap:`var(--space-12)`,padding:`var(--space-6)`},children:[`top-start`,`top-end`,`bottom-start`,`bottom-end`].map(t=>(0,C.jsx)(y,{...e,floatingPlacement:t,children:(0,C.jsx)(o,{variant:`secondary`,children:t})},t))}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/^top-end/}).getBoundingClientRect(),n=e.getAllByText(`4`)[1].getBoundingClientRect();await w(e.getAllByText(`4`)[1]).toHaveAttribute(`aria-hidden`,`true`),await w(Math.round(n.left+n.width/2)).toBe(Math.round(t.right)),await w(Math.round(n.top+n.height/2)).toBe(Math.round(t.top))}},I={args:{isDot:!0,isFloating:!0,variant:`destructive`},render:e=>(0,C.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,C.jsx)(y,{...e,children:(0,C.jsx)(o,{variant:`secondary`,children:`Notifications`})})})},L=[`Default`,`Variants`,`Sizes`,`MaxCount`,`Dot`,`LabelledDot`,`LabelledCount`,`Inline`,`Floating`,`FloatingDot`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('8')).toBeVisible();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      <Badge {...args} variant="primary" />
      <Badge {...args} variant="accent" />
      <Badge {...args} variant="secondary" />
      <Badge {...args} variant="destructive" />
      <Badge {...args} isDot variant="primary" />
      <Badge {...args} isDot variant="accent" />
      <Badge {...args} isDot variant="secondary" />
      <Badge {...args} isDot variant="destructive" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true
  },
  play: async ({
    canvasElement
  }) => {
    // Unlabelled, a dot is decoration and is hidden from assistive tech.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true,
    'aria-label': 'Online',
    variant: 'accent'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: 'Online'
    })).toBeVisible();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}export{k as a,A as i,D as n,O as o,F as r,R as s,S as t};