import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{n as a,t as o}from"./Button-BdtJKtga.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s=`_anchor_dc3ga_1`,c=`_badge_dc3ga_10`,l=`_sm_dc3ga_28`,u=`_md_dc3ga_34`,d=`_dot_dc3ga_40`,f=`_primary_dc3ga_52`,p=`_accent_dc3ga_59`,m=`_secondary_dc3ga_64`,h=`_destructive_dc3ga_75`,g=`_success_dc3ga_82`,_=`_warning_dc3ga_87`,v=`_floating_dc3ga_101`,y={anchor:s,badge:c,sm:l,md:u,dot:d,primary:f,accent:p,secondary:m,destructive:h,success:g,warning:_,floating:v,"top-start":`_top-start_dc3ga_109`,"top-end":`_top-end_dc3ga_115`,"bottom-start":`_bottom-start_dc3ga_121`,"bottom-end":`_bottom-end_dc3ga_127`}})))()}function x({count:e,variant:t=`primary`,size:n=`md`,isDot:r=!1,maxCount:a,isFloating:o=!1,floatingPlacement:s=`top-end`,children:c,className:l,...u}){let d=(r||e!==void 0)&&(0,S.jsx)(`span`,{role:u[`aria-label`]?`img`:void 0,"aria-hidden":!u[`aria-label`]&&(r||o)?!0:void 0,className:i(y.badge,y[t],y[n],r&&y.dot,o&&[y.floating,y[s]],l),...u,children:r?null:a!==void 0&&e>a?`${a}+`:e});return c===void 0?d:(0,S.jsxs)(`span`,{className:y.anchor,children:[c,d]})}var S;function C(){return(C=e((()=>{r(),b(),S=n(),x.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{count:{required:!1,tsType:{name:`number`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary' | 'destructive' | 'success' | 'warning'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isDot:{required:!1,tsType:{name:`boolean`},description:`A dot with no number: "something new", not "how many".`,defaultValue:{value:`false`,computed:!1}},maxCount:{required:!1,tsType:{name:`number`},description:"Counts above this show as `maxCount+`."},isFloating:{required:!1,tsType:{name:`boolean`},description:"Pins the badge to a corner of `children` instead of sitting inline.",defaultValue:{value:`false`,computed:!1}},floatingPlacement:{required:!1,tsType:{name:`union`,raw:`'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,elements:[{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`},{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`}]},description:``,defaultValue:{value:`'top-end'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`The element a floating badge is pinned to.`}},composes:[`Omit`]}})))()}var w=t({Default:()=>k,Dot:()=>F,Floating:()=>z,FloatingDot:()=>B,Inline:()=>R,LabelledCount:()=>L,LabelledDot:()=>I,MaxCount:()=>P,Sizes:()=>N,Status:()=>M,Variants:()=>j,__namedExportsOrder:()=>V,default:()=>D}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{a(),C(),T=n(),{expect:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Atomic Elements/Badge`,component:x,parameters:{a11y:{test:`error`}},args:{count:8},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`,`success`,`warning`]},size:{control:`inline-radio`,options:[`sm`,`md`]},floatingPlacement:{control:`inline-radio`,options:[`top-start`,`top-end`,`bottom-start`,`bottom-end`]},children:{control:!1}}},O={display:`flex`,gap:`var(--space-4)`,alignItems:`center`},k={play:async({canvas:e})=>{await E(e.getByText(`8`)).toBeVisible()}},A=[`primary`,`accent`,`secondary`,`destructive`,`success`,`warning`],j={render:e=>(0,T.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,T.jsx)(`div`,{style:O,children:A.map(t=>(0,T.jsx)(x,{...e,variant:t},t))}),(0,T.jsx)(`div`,{style:O,children:A.map(t=>(0,T.jsx)(x,{...e,isDot:!0,variant:t},t))})]})},M={args:{isDot:!0},render:e=>(0,T.jsxs)(`div`,{style:O,children:[(0,T.jsx)(x,{...e,variant:`success`,"aria-label":`Online`}),(0,T.jsx)(x,{...e,variant:`warning`,"aria-label":`Away`}),(0,T.jsx)(x,{...e,variant:`destructive`,"aria-label":`Busy`}),(0,T.jsx)(x,{...e,variant:`secondary`,"aria-label":`Offline`})]}),play:async({canvas:e})=>{await E(e.getByRole(`img`,{name:`Online`})).toBeVisible()}},N={args:{count:3},render:e=>(0,T.jsxs)(`div`,{style:O,children:[(0,T.jsx)(x,{...e,size:`sm`}),(0,T.jsx)(x,{...e,size:`md`}),(0,T.jsx)(x,{...e,size:`sm`,isDot:!0}),(0,T.jsx)(x,{...e,size:`md`,isDot:!0})]}),play:async({canvas:e})=>{let[t,n]=e.getAllByText(`3`);await E(t.getBoundingClientRect().height).toBe(16),await E(n.getBoundingClientRect().height).toBe(20),await E(n.getBoundingClientRect().width).toBe(20)}},P={args:{count:120,maxCount:99,variant:`destructive`},play:async({canvas:e})=>{await E(e.getByText(`99+`)).toBeVisible()}},F={args:{isDot:!0},play:async({canvasElement:e})=>{await E(e.querySelector(`span`)).toHaveAttribute(`aria-hidden`,`true`)}},I={args:{isDot:!0,"aria-label":`Online`,variant:`success`},play:async({canvas:e})=>{await E(e.getByRole(`img`,{name:`Online`})).toBeVisible()}},L={args:{count:3,"aria-label":`3 unread messages`},play:async({canvas:e})=>{await E(e.getByRole(`img`,{name:`3 unread messages`})).toBeVisible()}},R={args:{count:12},render:e=>(0,T.jsxs)(o,{variant:`secondary`,children:[`Inbox `,(0,T.jsx)(x,{...e})]}),play:async({canvas:e})=>{await E(e.getByRole(`button`)).toHaveAccessibleName(`Inbox 12`)}},z={args:{count:4,isFloating:!0,variant:`destructive`},render:e=>(0,T.jsx)(`div`,{style:{...O,gap:`var(--space-12)`,padding:`var(--space-6)`},children:[`top-start`,`top-end`,`bottom-start`,`bottom-end`].map(t=>(0,T.jsx)(x,{...e,floatingPlacement:t,children:(0,T.jsx)(o,{variant:`secondary`,children:t})},t))}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/^top-end/}).getBoundingClientRect(),n=e.getAllByText(`4`)[1].getBoundingClientRect();await E(e.getAllByText(`4`)[1]).toHaveAttribute(`aria-hidden`,`true`),await E(Math.round(n.left+n.width/2)).toBe(Math.round(t.right)),await E(Math.round(n.top+n.height/2)).toBe(Math.round(t.top))}},B={args:{isDot:!0,isFloating:!0,variant:`destructive`},render:e=>(0,T.jsx)(`div`,{style:{padding:`var(--space-4)`},children:(0,T.jsx)(x,{...e,children:(0,T.jsx)(o,{variant:`secondary`,children:`Notifications`})})})},V=[`Default`,`Variants`,`Status`,`Sizes`,`MaxCount`,`Dot`,`LabelledDot`,`LabelledCount`,`Inline`,`Floating`,`FloatingDot`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('8')).toBeVisible();
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Presence on an avatar: a labelled dot per state.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    isDot: true
  },
  play: async ({
    canvasElement
  }) => {
    // Unlabelled, a dot is decoration and is hidden from assistive tech.
    await expect(canvasElement.querySelector('span')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}})))()}export{N as a,H as c,P as i,k as n,M as o,z as r,j as s,w as t};