import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Avatar-eVXMKP5w.js";import{n as a,t as o}from"./Button-BdtJKtga.js";import{n as s,t as c}from"./Card-BOuz_uNj.js";var l=t({Appearances:()=>v,Clickable:()=>S,Default:()=>_,Horizontal:()=>b,Link:()=>C,NoBorderSquare:()=>x,Sizes:()=>y,__namedExportsOrder:()=>w,default:()=>g}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),r(),s(),u=n(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={margin:0,fontSize:`var(--text-heading-xs)`,lineHeight:`var(--leading-heading-xs)`,fontWeight:600},m={margin:0,color:`var(--muted-foreground)`},h=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`h3`,{style:p,children:`Payment method`}),(0,u.jsx)(`p`,{style:m,children:`Change how you pay for your plan.`})]}),g={title:`Components/Data Display/Card`,component:c,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`elevated`,`outline`,`unstyled`]},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},render:{control:!1}},args:{children:(0,u.jsx)(h,{})},decorators:[e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},_={},v={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`elevated`,`outline`,`unstyled`].map(t=>(0,u.jsxs)(c,{...e,appearance:t,children:[(0,u.jsx)(`h3`,{style:p,children:t}),(0,u.jsx)(`p`,{style:m,children:`Change how you pay for your plan.`})]},t))})},y={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`xs`,`sm`,`md`,`lg`].map(t=>(0,u.jsx)(c,{...e,size:t,"data-size":t},t))}),play:async({canvasElement:e})=>{let t=[`xs`,`sm`,`md`,`lg`].map(t=>getComputedStyle(e.querySelector(`[data-size="${t}"]`)).paddingTop);await d(t).toEqual([`12px`,`16px`,`24px`,`32px`])}},b={args:{orientation:`horizontal`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{initials:`MT`,size:`md`}),(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`,flex:1},children:[(0,u.jsx)(`h3`,{style:p,children:`Mary Thompson`}),(0,u.jsx)(`p`,{style:m,children:`Product designer`})]}),(0,u.jsx)(o,{size:`sm`,appearance:`outlined`,variant:`secondary`,children:`Follow`})]})}},x={args:{hasBorder:!1,isRounded:!1}},S={args:{onClick:f(),children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{style:p,children:`Payment method`}),(0,u.jsx)(`span`,{style:m,children:`Change how you pay for your plan.`})]})},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/Payment method/});await d(r).toHaveAttribute(`type`,`button`),await t.click(r),await t.tab({shift:!0}),await t.tab(),await d(r).toHaveFocus(),await t.keyboard(`{Enter}`),await d(n.onClick).toHaveBeenCalledTimes(2)}},C={args:{render:(0,u.jsx)(`a`,{href:`#billing`})},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`link`,{name:/Payment method/});await d(n).toHaveAttribute(`href`,`#billing`),await d(n).not.toHaveAttribute(`type`),await t.tab(),await d(n).toHaveFocus()}},w=[`Default`,`Appearances`,`Sizes`,`Horizontal`,`NoBorderSquare`,`Clickable`,`Link`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['elevated', 'outline', 'unstyled'] as const).map(appearance => <Card key={appearance} {...args} appearance={appearance}>
          <h3 style={title}>{appearance}</h3>
          <p style={muted}>Change how you pay for your plan.</p>
        </Card>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Card key={size} {...args} size={size} data-size={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pads = ['xs', 'sm', 'md', 'lg'].map(s => getComputedStyle(canvasElement.querySelector(\`[data-size="\${s}"]\`)!).paddingTop);
    await expect(pads).toEqual(['12px', '16px', '24px', '32px']);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    children: <>
        <Avatar initials="MT" size="md" />
        <div style={{
        display: 'grid',
        gap: 'var(--space-1)',
        flex: 1
      }}>
          <h3 style={title}>Mary Thompson</h3>
          <p style={muted}>Product designer</p>
        </div>
        <Button size="sm" appearance="outlined" variant="secondary">
          Follow
        </Button>
      </>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    hasBorder: false,
    isRounded: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: <>
        <span style={title}>Payment method</span>
        <span style={muted}>Change how you pay for your plan.</span>
      </>
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const card = canvas.getByRole('button', {
      name: /Payment method/
    });
    await expect(card).toHaveAttribute('type', 'button');
    await userEvent.click(card);
    await userEvent.tab({
      shift: true
    });
    await userEvent.tab();
    await expect(card).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...S.parameters?.docs?.source},description:{story:`The whole card is one button, so its content must be phrasing content:
spans, not headings or paragraphs, and nothing interactive.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    render: <a href="#billing" />
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const link = canvas.getByRole('link', {
      name: /Payment method/
    });
    await expect(link).toHaveAttribute('href', '#billing');
    await expect(link).not.toHaveAttribute('type');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...C.parameters?.docs?.source},description:{story:`A card that navigates renders a real link.`,...C.parameters?.docs?.description}}}})))()}export{b as a,_ as i,l as n,T as o,S as r,v as t};