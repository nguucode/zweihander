import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./Search-BDXMHiGy.js";var o=t({Clear:()=>p,Controlled:()=>h,Default:()=>f,Disabled:()=>y,EscapeClears:()=>m,FullWidth:()=>v,ReadOnly:()=>b,Sizes:()=>_,WithLabel:()=>g,__namedExportsOrder:()=>x,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{s=r(),i(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Inputs/Search`,component:a,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]}},args:{onChange:u()}},f={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`searchbox`,{name:`Search`});await l(n).toHaveAttribute(`placeholder`,`Search`),await l(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await t.type(n,`badge`),await l(n).toHaveValue(`badge`)}},p={args:{defaultValue:`tooltip`},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`searchbox`);await t.click(e.getByRole(`button`,{name:`Clear search`})),await l(r).toHaveValue(``),await l(r).not.toHaveFocus(),await l(n.onChange).toHaveBeenCalled(),await l(e.queryByRole(`button`,{name:`Clear search`})).toBeNull(),await t.type(r,`modal`),await t.tab(),await l(e.getByRole(`button`,{name:`Clear search`})).toHaveFocus(),await t.keyboard(`{Enter}`),await l(r).toHaveValue(``),await l(r).toHaveFocus()}},m={args:{defaultValue:`modal`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`searchbox`);await t.click(n),await t.keyboard(`{Escape}`),await l(n).toHaveValue(``)}},h={render:function(e){let[t,n]=(0,s.useState)(`card`);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,c.jsx)(a,{...e,value:t,onChange:e=>n(e.target.value)}),(0,c.jsxs)(`span`,{children:[`Query: “`,t,`”`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Clear search`})),await l(e.getByText(`Query: “”`)).toBeVisible(),await t.type(e.getByRole(`searchbox`),`tag`),await l(e.getByText(`Query: “tag”`)).toBeVisible()}},g={args:{label:`Find a component`},play:async({canvas:e})=>{await l(e.getByRole(`searchbox`,{name:`Find a component`})).toBeVisible()}},_={render:e=>(0,c.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,c.jsx)(a,{...e,size:t,"aria-label":`Search ${t}`,defaultValue:`query`},t))})},v={args:{isFullWidth:!0}},y={args:{disabled:!0,defaultValue:`locked`},play:async({canvas:e})=>{await l(e.getByRole(`searchbox`)).toBeDisabled(),await l(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},b={args:{readOnly:!0,defaultValue:`fixed`},play:async({canvas:e})=>{await l(e.queryByRole(`button`,{name:`Clear search`})).toBeNull()}},x=[`Default`,`Clear`,`EscapeClears`,`Controlled`,`WithLabel`,`Sizes`,`FullWidth`,`Disabled`,`ReadOnly`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const field = canvas.getByRole('searchbox', {
      name: 'Search'
    });
    await expect(field).toHaveAttribute('placeholder', 'Search');
    // No clear button until there is something to clear.
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
    await userEvent.type(field, 'badge');
    await expect(field).toHaveValue('badge');
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tooltip'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const field = canvas.getByRole('searchbox');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(field).toHaveValue('');
    // A pointer press keeps an idle field idle, and onChange hears about it.
    await expect(field).not.toHaveFocus();
    await expect(args.onChange).toHaveBeenCalled();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
    // From the keyboard, focus goes back to the field rather than being lost.
    await userEvent.type(field, 'modal');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Clear search'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(field).toHaveValue('');
    await expect(field).toHaveFocus();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'modal'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const field = canvas.getByRole('searchbox');
    await userEvent.click(field);
    await userEvent.keyboard('{Escape}');
    await expect(field).toHaveValue('');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [q, setQ] = useState('card');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <Search {...args} value={q} onChange={e => setQ(e.target.value)} />
        <span>Query: “{q}”</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(canvas.getByText('Query: “”')).toBeVisible();
    await userEvent.type(canvas.getByRole('searchbox'), 'tag');
    await expect(canvas.getByText('Query: “tag”')).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Find a component'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox', {
      name: 'Find a component'
    })).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <Search key={size} {...args} size={size} aria-label={\`Search \${size}\`} defaultValue="query" />)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'locked'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('searchbox')).toBeDisabled();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'fixed'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).toBeNull();
  }
}`,...b.parameters?.docs?.source}}}})))()}export{S as a,_ as i,f as n,o as r,p as t};