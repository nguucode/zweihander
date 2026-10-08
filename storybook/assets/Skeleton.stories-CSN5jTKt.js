import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=`_bone_aemsp_4`,o=`_square_aemsp_10`,s=`_rounded_aemsp_13`,c=`_circle_aemsp_16`,l=`_rows_aemsp_23`,u=`_line_aemsp_29`,d=`_animated_aemsp_33`,f=`_pulse_aemsp_1`,p={bone:a,square:o,rounded:s,circle:c,rows:l,line:u,animated:d,pulse:f}})))()}function h({width:e,height:t,appearance:n=`square`,rows:r,isFullWidth:a=!1,hasAnimation:o=!1,className:s,style:c,...l}){let u=a?`100%`:_(e);if(r&&r>1){let e=i(p.bone,p[n===`circle`?`rounded`:n],p.line,o&&p.animated);return(0,g.jsx)(`div`,{"aria-hidden":`true`,className:i(p.rows,s),style:{inlineSize:u,...c},...l,children:Array.from({length:r},(n,r)=>(0,g.jsx)(`div`,{className:e,style:{blockSize:_(t)}},r))})}let d=n===`circle`?void 0:_(t);return(0,g.jsx)(`div`,{"aria-hidden":`true`,className:i(p.bone,p[n],o&&p.animated,s),style:{inlineSize:u,blockSize:d,...c},...l})}var g,_;function v(){return(v=e((()=>{r(),m(),g=n(),_=e=>typeof e==`number`?`${e}px`:e,h.__docgenInfo={description:`A placeholder in the shape of content that is still loading. Decorative:
put \`aria-busy\` on the region it stands in for, and announce the load
elsewhere if it matters.`,methods:[],displayName:`Skeleton`,props:{width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`A number is pixels; a string is any CSS length.`},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'circle' | 'square' | 'rounded'`,elements:[{name:`literal`,value:`'circle'`},{name:`literal`,value:`'square'`},{name:`literal`,value:`'rounded'`}]},description:``,defaultValue:{value:`'square'`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:`Several lines of text: stacked bars, the last one shorter. A circle's rows are rounded bars.`},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hasAnimation:{required:!1,tsType:{name:`boolean`},description:`A gentle pulse. Off by default: many pulsing shapes are noise.`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var y=t({Animated:()=>D,Appearances:()=>w,CardPlaceholder:()=>O,Default:()=>C,FullWidth:()=>E,Rows:()=>T,__namedExportsOrder:()=>k,default:()=>S}),b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{v(),b=n(),{expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Loaders/Skeleton`,component:h,parameters:{a11y:{test:`error`}},argTypes:{appearance:{control:`inline-radio`,options:[`circle`,`square`,`rounded`]}},args:{width:240,height:16}},C={play:async({canvasElement:e})=>{let t=e.querySelector(`div > div`);await x(t).toHaveAttribute(`aria-hidden`,`true`),await x(t.getBoundingClientRect().width).toBe(240)}},w={render:e=>(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,b.jsx)(h,{...e,appearance:`circle`,width:40,"data-testid":`circle`}),(0,b.jsx)(h,{...e,appearance:`square`,width:120,height:40}),(0,b.jsx)(h,{...e,appearance:`rounded`,width:120,height:40})]}),play:async({canvas:e})=>{let{width:t,height:n}=e.getByTestId(`circle`).getBoundingClientRect();await x([t,n]).toEqual([40,40])}},T={args:{rows:4,width:320,height:12,appearance:`rounded`},play:async({canvasElement:e})=>{let t=[...e.querySelectorAll(`[aria-hidden] > div`)].map(e=>e.getBoundingClientRect());await x(t).toHaveLength(4),await x(t.map(e=>e.height)).toEqual([12,12,12,12]),await x(t.map(e=>e.width)).toEqual([320,320,320,192])}},E={args:{isFullWidth:!0,width:void 0}},D={args:{hasAnimation:!0,rows:3,width:320,appearance:`rounded`}},O={render:()=>(0,b.jsxs)(`div`,{"aria-busy":`true`,"aria-label":`Loading profile`,role:`region`,style:{display:`flex`,gap:`var(--space-3)`,inlineSize:320},children:[(0,b.jsx)(h,{appearance:`circle`,width:40,hasAnimation:!0}),(0,b.jsxs)(`div`,{style:{flex:1,display:`grid`,gap:`var(--space-2)`},children:[(0,b.jsx)(h,{appearance:`rounded`,height:14,width:`50%`,hasAnimation:!0}),(0,b.jsx)(h,{appearance:`rounded`,rows:2,height:10,isFullWidth:!0,hasAnimation:!0})]})]})},k=[`Default`,`Appearances`,`Rows`,`FullWidth`,`Animated`,`CardPlaceholder`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const bone = canvasElement.querySelector('div > div')!;
    await expect(bone).toHaveAttribute('aria-hidden', 'true');
    await expect(bone.getBoundingClientRect().width).toBe(240);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    alignItems: 'center'
  }}>
      <Skeleton {...args} appearance="circle" width={40} data-testid="circle" />
      <Skeleton {...args} appearance="square" width={120} height={40} />
      <Skeleton {...args} appearance="rounded" width={120} height={40} />
    </div>,
  play: async ({
    canvas
  }) => {
    // args carry height 16; a circle ignores it and stays round.
    const {
      width,
      height
    } = canvas.getByTestId('circle').getBoundingClientRect();
    await expect([width, height]).toEqual([40, 40]);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 4,
    width: 320,
    height: 12,
    appearance: 'rounded'
  },
  play: async ({
    canvasElement
  }) => {
    const lines = [...canvasElement.querySelectorAll('[aria-hidden] > div')].map(l => l.getBoundingClientRect());
    await expect(lines).toHaveLength(4);
    await expect(lines.map(l => l.height)).toEqual([12, 12, 12, 12]);
    // The last line is 60% of the 320px width, like the end of a paragraph.
    await expect(lines.map(l => l.width)).toEqual([320, 320, 320, 192]);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    width: undefined
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    hasAnimation: true,
    rows: 3,
    width: 320,
    appearance: 'rounded'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div aria-busy="true" aria-label="Loading profile" role="region" style={{
    display: 'flex',
    gap: 'var(--space-3)',
    inlineSize: 320
  }}>
      <Skeleton appearance="circle" width={40} hasAnimation />
      <div style={{
      flex: 1,
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
        <Skeleton appearance="rounded" height={14} width="50%" hasAnimation />
        <Skeleton appearance="rounded" rows={2} height={10} isFullWidth hasAnimation />
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`How it is used: shapes of the content, with aria-busy on the region.`,...O.parameters?.docs?.description}}}})))()}export{T as a,C as i,w as n,y as o,O as r,A as s,D as t};