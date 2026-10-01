import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./Tag-Yrwndnqs.js";var c=t({Default:()=>v,Matrix:()=>y,Removable:()=>w,RemovableList:()=>T,Rounded:()=>C,Sizes:()=>b,Truncated:()=>E,WithAvatar:()=>S,WithIcon:()=>x,__namedExportsOrder:()=>D,default:()=>m}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{l=r(),i(),o(),u=n(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,m={title:`Components/Atomic Elements/Tag`,component:s,parameters:{a11y:{test:`error`}},args:{text:`Account verified`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},appearance:{control:`inline-radio`,options:[`subtle`,`outlined`,`solid`]},variant:{control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`]},startIcon:{control:!1}}},h={display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},g={display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`,alignItems:`center`},_=[`info`,`success`,`warning`,`danger`],v={},y={render:e=>(0,u.jsx)(`div`,{style:h,children:[`subtle`,`outlined`,`solid`].map(t=>(0,u.jsx)(`div`,{style:g,children:_.map(n=>(0,u.jsx)(s,{...e,appearance:t,variant:n,text:n},n))},t))})},b={render:e=>(0,u.jsxs)(`div`,{style:g,children:[(0,u.jsx)(s,{...e,size:`sm`,startIcon:(0,u.jsx)(a,{name:`success`}),hasRemoveButton:!0}),(0,u.jsx)(s,{...e,size:`md`,startIcon:(0,u.jsx)(a,{name:`success`}),hasRemoveButton:!0})]}),play:async({canvasElement:e})=>{let[t,n]=[...e.querySelectorAll(`span[class*="tag"]`)].map(e=>e.getBoundingClientRect().height);await d([t,n]).toEqual([20,24])}},x={args:{startIcon:(0,u.jsx)(a,{name:`success`}),variant:`success`}},S={args:{text:`Mary Thompson`,startAvatar:p,hasRemoveButton:!0}},C={args:{isRounded:!0,appearance:`outlined`}},w={args:{hasRemoveButton:!0,onRemove:f()},play:async({canvas:e,args:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Remove Account verified`});await n.click(r),await d(t.onRemove).toHaveBeenCalledTimes(1),await n.tab(),await n.tab({shift:!0}),await d(r).toHaveFocus(),await n.keyboard(`{Enter}`),await n.keyboard(` `),await d(t.onRemove).toHaveBeenCalledTimes(3)}},T={render:function(e){let[t,n]=(0,l.useState)([`Design`,`Research`,`Engineering`]);return(0,u.jsx)(`div`,{style:g,children:t.map(t=>(0,u.jsx)(s,{...e,text:t,hasRemoveButton:!0,onRemove:()=>n(e=>e.filter(e=>e!==t))},t))})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Remove Research`})),await d(e.queryByText(`Research`)).toBeNull(),await d(e.getAllByRole(`button`)).toHaveLength(2)}},E={args:{text:`A tag whose text is far longer than the space it has been given`},render:e=>(0,u.jsx)(`div`,{style:{inlineSize:`12rem`},children:(0,u.jsx)(s,{...e})})},D=[`Default`,`Matrix`,`Sizes`,`WithIcon`,`WithAvatar`,`Rounded`,`Removable`,`RemovableList`,`Truncated`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => <div key={appearance} style={row}>
          {variants.map(variant => <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />)}
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="success" />,
    variant: 'success'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Mary Thompson',
    startAvatar: portrait,
    hasRemoveButton: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isRounded: true,
    appearance: 'outlined'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  }
}`,...T.parameters?.docs?.source},description:{story:`Removing a tag is the parent's job: onRemove reports, the list updates.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A tag whose text is far longer than the space it has been given'
  },
  render: args => <div style={{
    inlineSize: '12rem'
  }}>
      <Tag {...args} />
    </div>
}`,...E.parameters?.docs?.source}}}})))()}export{c as a,b as i,y as n,O as o,T as r,v as t};