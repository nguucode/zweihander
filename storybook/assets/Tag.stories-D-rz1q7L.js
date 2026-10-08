import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./icon-Dc4hTclj.js";import{n as o,r as s,t as c}from"./Tag-DNTINP1j.js";var l=t({Colors:()=>S,Default:()=>b,Matrix:()=>x,Removable:()=>E,RemovableList:()=>D,Sizes:()=>C,Truncated:()=>O,WithAvatar:()=>T,WithIcon:()=>w,__namedExportsOrder:()=>k,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{u=r(),i(),s(),d=n(),{expect:f,fn:p}=__STORYBOOK_MODULE_TEST__,m=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c7d2fe%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2212%22%20fill%3D%22%236366f1%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2242%22%20width%3D%2240%22%20height%3D%2230%22%20rx%3D%2220%22%20fill%3D%22%236366f1%22%2F%3E%3C%2Fsvg%3E`,h={title:`Components/Atomic Elements/Tag`,component:o,parameters:{a11y:{test:`error`}},args:{text:`Account verified`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},appearance:{control:`inline-radio`,options:[`subtle`,`outlined`,`solid`]},variant:{control:`select`,options:c},startIcon:{control:!1}}},g={display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},_={display:`flex`,flexWrap:`wrap`,gap:`var(--space-2)`,alignItems:`center`},v=[`neutral`,`info`,`success`,`warning`,`danger`],y=c.filter(e=>!v.includes(e)),b={},x={render:e=>(0,d.jsx)(`div`,{style:g,children:[`subtle`,`outlined`,`solid`].map(t=>(0,d.jsx)(`div`,{style:_,children:v.map(n=>(0,d.jsx)(o,{...e,appearance:t,variant:n,text:n},n))},t))})},S={parameters:{a11y:{test:`todo`}},render:e=>(0,d.jsx)(`div`,{style:g,children:[`subtle`,`outlined`,`solid`].map(t=>(0,d.jsx)(`div`,{style:_,children:y.map(n=>(0,d.jsx)(o,{...e,appearance:t,variant:n,text:n},n))},t))})},C={render:e=>(0,d.jsxs)(`div`,{style:_,children:[(0,d.jsx)(o,{...e,size:`sm`,startIcon:(0,d.jsx)(a,{name:`success`}),hasRemoveButton:!0}),(0,d.jsx)(o,{...e,size:`md`,startIcon:(0,d.jsx)(a,{name:`success`}),hasRemoveButton:!0})]}),play:async({canvasElement:e})=>{let[t,n]=[...e.querySelectorAll(`span[class*="tag"]`)].map(e=>e.getBoundingClientRect().height);await f([t,n]).toEqual([20,24])}},w={args:{startIcon:(0,d.jsx)(a,{name:`success`}),variant:`success`}},T={args:{text:`Mary Thompson`,startAvatar:m,hasRemoveButton:!0}},E={args:{hasRemoveButton:!0,onRemove:p()},play:async({canvas:e,args:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Remove Account verified`});await n.click(r),await f(t.onRemove).toHaveBeenCalledTimes(1),await n.tab(),await n.tab({shift:!0}),await f(r).toHaveFocus(),await n.keyboard(`{Enter}`),await n.keyboard(` `),await f(t.onRemove).toHaveBeenCalledTimes(3)}},D={render:function(e){let[t,n]=(0,u.useState)([`Design`,`Research`,`Engineering`]);return(0,d.jsx)(`div`,{style:_,children:t.map(t=>(0,d.jsx)(o,{...e,text:t,hasRemoveButton:!0,onRemove:()=>n(e=>e.filter(e=>e!==t))},t))})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Remove Research`})),await f(e.queryByText(`Research`)).toBeNull(),await f(e.getAllByRole(`button`)).toHaveLength(2)}},O={args:{text:`A tag whose text is far longer than the space it has been given`},render:e=>(0,d.jsx)(`div`,{style:{inlineSize:`12rem`},children:(0,d.jsx)(o,{...e})})},k=[`Default`,`Matrix`,`Colors`,`Sizes`,`WithIcon`,`WithAvatar`,`Removable`,`RemovableList`,`Truncated`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => <div key={appearance} style={row}>
          {statuses.map(variant => <Tag key={variant} {...args} appearance={appearance} variant={variant} text={variant} />)}
        </div>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Every hue, for categories rather than status: labels, projects, owners.
Solid hues all take a white label, which the warm ones carry below 4.5:1
(a deliberate call), so contrast here warns instead of failing.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="success" />,
    variant: 'success'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Mary Thompson',
    startAvatar: portrait,
    hasRemoveButton: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Removing a tag is the parent's job: onRemove reports, the list updates.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'A tag whose text is far longer than the space it has been given'
  },
  render: args => <div style={{
    inlineSize: '12rem'
  }}>
      <Tag {...args} />
    </div>
}`,...O.parameters?.docs?.source}}}})))()}export{C as a,D as i,b as n,l as o,x as r,A as s,S as t};