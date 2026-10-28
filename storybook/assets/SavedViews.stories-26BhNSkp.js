import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{i as c,t as l}from"./Menu-NLwpYJmZ.js";import{n as u,t as d}from"./FilterBar-D6WzH-CQ.js";import{n as f,t as p}from"./SavedViews-6SM2-3y-.js";var m=t({AsMenu:()=>P,Default:()=>k,ManageViews:()=>M,MenuLongName:()=>N,Modified:()=>A,Narrow:()=>F,SaveAsNewView:()=>j,__namedExportsOrder:()=>I,default:()=>O});function h({display:e,initialView:t=`all`,views:n=w}){let[r,i]=(0,g.useState)(n),[o,c]=(0,g.useState)(t),u=r.find(e=>e.id===o)??r[0],[f,m]=(0,g.useState)(u.statuses),h=e=>{c(e),m(r.find(t=>t.id===e)?.statuses??[])};return(0,_.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,gap:`var(--space-group)`},children:[(0,_.jsx)(p,{"aria-label":`Invoice views`,display:e,views:r.map(({statuses:e,...t})=>({...t,count:E(e)})),value:u.id,onValueChange:h,isModified:!D(f,u.statuses),onSave:()=>i(e=>e.map(e=>e.id===u.id?{...e,statuses:f}:e)),onDiscard:()=>m(u.statuses),onSaveAs:({label:e,isShared:t})=>{let n=e.toLowerCase().replace(/\W+/g,`-`);i(r=>[...r,{id:n,label:e,isShared:t,statuses:f}]),c(n)},isShareable:!0,onDelete:e=>{i(t=>t.filter(t=>t.id!==e)),e===u.id&&h(`all`)}}),(0,_.jsx)(d,{"aria-label":`Invoice filters`,filters:(0,_.jsx)(l,{trigger:(0,_.jsx)(a,{variant:`secondary`,appearance:`outlined`,endIcon:(0,_.jsx)(s,{name:`chevron-down`}),children:`Status`}),items:S.map(e=>({type:`checkbox`,label:e,checked:f.includes(e),onCheckedChange:t=>m(n=>t?[...n,e]:n.filter(t=>t!==e))}))}),applied:f.map(e=>({id:e,label:`Status: ${e}`})),onRemove:e=>m(t=>t.filter(t=>t!==e))}),(0,_.jsxs)(`p`,{style:{margin:0,color:`var(--muted-foreground)`},children:[E(f),` invoices`]})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{g=n(),o(),i(),c(),u(),f(),_=r(),{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=[`Draft`,`Sent`,`Paid`,`Overdue`],C=[...Array.from({length:6},()=>`Draft`),...Array.from({length:9},()=>`Sent`),...Array.from({length:21},()=>`Paid`),...Array.from({length:4},()=>`Overdue`)],w=[{id:`all`,label:`All`,isPredefined:!0,statuses:[]},{id:`open`,label:`Open`,isPredefined:!0,statuses:[`Draft`,`Sent`,`Overdue`]},{id:`overdue`,label:`Overdue`,isPredefined:!0,statuses:[`Overdue`]},{id:`to-chase`,label:`To chase`,isShared:!0,statuses:[`Sent`,`Overdue`]}],T={id:`long`,label:`Rechnungsprüfungsausnahmenbearbeitungsliste`,statuses:[`Draft`]},E=e=>C.filter(t=>e.length===0||e.includes(t)).length,D=(e,t)=>e.length===t.length&&e.every(e=>t.includes(e)),O={title:`Patterns/Application UI/Saved Views`,tags:[`experimental`],component:p,parameters:{layout:`padded`},argTypes:{views:{description:"The views as `{ id, label, count?, isPredefined?, isShared? }`, predefined first. A predefined view cannot be saved over or deleted.",control:!1},value:{description:`The id of the view in force.`,control:!1},onValueChange:{description:`Called with a view id when one is picked. Put that view's saved state in force.`},display:{description:"`tabs` for a handful of views; `menu` for more than fit on one line, as a button naming the view in force.",control:`inline-radio`,options:[`tabs`,`menu`],table:{defaultValue:{summary:`tabs`}}},isModified:{description:`The filters, sort or columns differ from the view as saved: shows Modified, Discard and Save.`,control:`boolean`},onSave:{description:`Saves the changes into the view in force. Without it, or on a predefined view, a modified view offers Save as new view instead.`},onDiscard:{description:`Puts the view back as saved. Without it there is no Discard.`},onSaveAs:{description:"Called with `{ label, isShared }` from the Save as new view dialog, once the name is filled in and not taken. Add the view and put it in force."},isShareable:{description:`Offers "Share with everyone" in the Save as new view dialog.`,control:`boolean`},onDelete:{description:`Called with a view id from Manage views. Without it there is no Manage views.`},"aria-label":{description:`Names the view list. Defaults to "Views"; say what it lists when a page has more than one.`,control:`text`}},args:{views:[],value:``,onValueChange:()=>{}},render:()=>(0,_.jsx)(h,{})},k={play:async({canvas:e})=>{let t=e.getByRole(`tablist`,{name:`Invoice views`});await v(x(t).getAllByRole(`tab`)).toHaveLength(4),await v(e.getByRole(`tab`,{name:`All 40`})).toHaveAttribute(`aria-selected`,`true`),await y.click(e.getByRole(`tab`,{name:`Overdue 4`})),await v(e.getByRole(`tab`,{name:`Overdue 4`})).toHaveAttribute(`aria-selected`,`true`),await v(e.getByText(`4 invoices`)).toBeVisible(),await v(e.getByRole(`status`)).toHaveTextContent(``)}},A={render:()=>(0,_.jsx)(h,{initialView:`to-chase`}),play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Remove Status: Sent`})),await v(e.getByRole(`status`)).toHaveTextContent(`Modified`),await y.click(e.getByRole(`button`,{name:`Discard`})),await v(e.getByRole(`status`)).toHaveTextContent(``),await b(()=>v(e.getByRole(`tab`,{name:`To chase 13`})).toHaveFocus()),await v(e.getByRole(`button`,{name:`Remove Status: Sent`})).toBeVisible(),await y.click(e.getByRole(`button`,{name:`Remove Status: Sent`})),await y.click(e.getByRole(`button`,{name:`Save`})),await v(e.getByRole(`status`)).toHaveTextContent(``),await b(()=>v(e.getByRole(`tab`,{name:`To chase 4`})).toHaveFocus())}},j={render:()=>(0,_.jsx)(h,{initialView:`open`}),play:async({canvas:e})=>{let t=x(document.body);await y.click(e.getByRole(`button`,{name:`Remove Status: Draft`})),await v(e.queryByRole(`button`,{name:`Save`})).toBeNull(),await y.click(e.getByRole(`button`,{name:`Save as new view`}));let n=await t.findByRole(`dialog`,{name:`Save as new view`}),r=x(n).getByRole(`textbox`,{name:`View name`});await b(()=>v(r).toHaveFocus()),await y.click(x(n).getByRole(`button`,{name:`Save view`})),await v(r).toHaveAttribute(`aria-invalid`,`true`),await v(r).toHaveAccessibleDescription(`Enter a name for the view.`),await y.type(r,`overdue`),await y.click(x(n).getByRole(`button`,{name:`Save view`})),await v(r).toHaveAccessibleDescription(`A view with this name already exists.`),await y.clear(r),await y.type(r,`Unpaid`),await y.click(x(n).getByRole(`checkbox`,{name:`Share with everyone`})),await y.click(x(n).getByRole(`button`,{name:`Save view`})),await b(()=>v(t.queryByRole(`dialog`)).toBeNull()),await v(e.getByRole(`tab`,{name:`Unpaid 13`})).toHaveAttribute(`aria-selected`,`true`),await b(()=>v(e.getByRole(`tab`,{name:`Unpaid 13`})).toHaveFocus()),await v(e.getByRole(`status`)).toHaveTextContent(``)}},M={render:()=>(0,_.jsx)(h,{views:[...w,{id:`mine`,label:`My drafts`,statuses:[`Draft`]}]}),play:async({canvas:e})=>{let t=x(document.body);await y.click(e.getByRole(`button`,{name:`View actions`})),await y.click(await t.findByRole(`menuitem`,{name:`Manage views…`}));let n=await t.findByRole(`dialog`,{name:`Manage views`}),r=x(n).getByRole(`list`,{name:`Invoice views`});await v(x(r).getAllByRole(`listitem`)).toHaveLength(5),await v(x(n).queryByRole(`button`,{name:`Delete All`})).toBeNull(),await y.click(x(n).getByRole(`button`,{name:`Delete To chase`})),await v(x(n).queryByText(`To chase`)).toBeNull(),await v(x(n).getByRole(`button`,{name:`Delete My drafts`})).toHaveFocus(),await y.click(x(n).getByRole(`button`,{name:`Delete My drafts`})),await v(x(n).getByRole(`button`,{name:`Done`})).toHaveFocus(),await y.click(x(n).getByRole(`button`,{name:`Done`})),await b(()=>v(t.queryByRole(`dialog`)).toBeNull()),await v(e.getAllByRole(`tab`)).toHaveLength(3)}},N={tags:[`!dev`],render:()=>(0,_.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:320},children:(0,_.jsx)(h,{display:`menu`,initialView:`long`,views:[...w,T]})}),play:async({canvas:e})=>{let t=e.getByTestId(`narrow`).getBoundingClientRect().right,n=e.getByRole(`button`,{name:`Invoice views: ${T.label}`});await b(()=>v(n.getBoundingClientRect().right).toBeLessThanOrEqual(t+.5))}},P={render:()=>(0,_.jsx)(h,{display:`menu`}),play:async({canvas:e})=>{let t=x(document.body),n=e.getByRole(`button`,{name:`Invoice views: All`});await y.click(n),await y.click(await t.findByRole(`menuitemradio`,{name:`To chase 13`})),await b(()=>v(t.queryByRole(`menu`)).toBeNull()),await v(e.getByRole(`button`,{name:`Invoice views: To chase`})).toBeVisible(),await v(e.getByText(`13 invoices`)).toBeVisible()}},F={render:()=>(0,_.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:320},children:(0,_.jsx)(h,{initialView:`to-chase`,views:[...w,T]})}),play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Remove Status: Sent`}));let t=e.getByTestId(`narrow`).getBoundingClientRect().right;await b(async()=>{await v(e.getByRole(`tablist`).parentElement.getBoundingClientRect().right).toBeLessThanOrEqual(t+.5),await v(e.getByRole(`button`,{name:`View actions`}).getBoundingClientRect().right).toBeLessThanOrEqual(t+.5)})}},I=[`Default`,`Modified`,`SaveAsNewView`,`ManageViews`,`MenuLongName`,`AsMenu`,`Narrow`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const list = canvas.getByRole('tablist', {
      name: 'Invoice views'
    });
    await expect(within(list).getAllByRole('tab')).toHaveLength(4);
    await expect(canvas.getByRole('tab', {
      name: 'All 40'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Overdue 4'
    }));
    await expect(canvas.getByRole('tab', {
      name: 'Overdue 4'
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('4 invoices')).toBeVisible();
    await expect(canvas.getByRole('status')).toHaveTextContent('');
  }
}`,...k.parameters?.docs?.source},description:{story:`Tabs with a count each; picking one puts its filters in force.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceViews initialView="to-chase" />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Modified');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Discard'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('');
    // The pressed button is gone: focus goes to the view in force.
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'To chase 13'
    })).toHaveFocus());
    await expect(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'To chase 4'
    })).toHaveFocus());
  }
}`,...A.parameters?.docs?.source},description:{story:`A saved view, changed: Modified is announced, Save writes the change into the view, Discard drops it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceViews initialView="open" />,
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Draft'
    }));
    await expect(canvas.queryByRole('button', {
      name: 'Save'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save as new view'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Save as new view'
    });
    const name = within(dialog).getByRole('textbox', {
      name: 'View name'
    });
    await waitFor(() => expect(name).toHaveFocus());
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Save view'
    }));
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await expect(name).toHaveAccessibleDescription('Enter a name for the view.');
    await userEvent.type(name, 'overdue');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Save view'
    }));
    await expect(name).toHaveAccessibleDescription('A view with this name already exists.');
    await userEvent.clear(name);
    await userEvent.type(name, 'Unpaid');
    await userEvent.click(within(dialog).getByRole('checkbox', {
      name: 'Share with everyone'
    }));
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Save view'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    await expect(canvas.getByRole('tab', {
      name: 'Unpaid 13'
    })).toHaveAttribute('aria-selected', 'true');
    await waitFor(() => expect(canvas.getByRole('tab', {
      name: 'Unpaid 13'
    })).toHaveFocus());
    await expect(canvas.getByRole('status')).toHaveTextContent('');
  }
}`,...j.parameters?.docs?.source},description:{story:`A predefined view cannot be saved over: a change offers Save as new view, which checks the name.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceViews views={[...VIEWS, {
    id: 'mine',
    label: 'My drafts',
    statuses: ['Draft']
  }]} />,
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'View actions'
    }));
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'Manage views…'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Manage views'
    });
    const list = within(dialog).getByRole('list', {
      name: 'Invoice views'
    });
    await expect(within(list).getAllByRole('listitem')).toHaveLength(5);
    await expect(within(dialog).queryByRole('button', {
      name: 'Delete All'
    })).toBeNull();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Delete To chase'
    }));
    await expect(within(dialog).queryByText('To chase')).toBeNull();
    await expect(within(dialog).getByRole('button', {
      name: 'Delete My drafts'
    })).toHaveFocus();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Delete My drafts'
    }));
    await expect(within(dialog).getByRole('button', {
      name: 'Done'
    })).toHaveFocus();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Done'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    await expect(canvas.getAllByRole('tab')).toHaveLength(3);
  }
}`,...M.parameters?.docs?.source},description:{story:`Manage views deletes saved views; predefined ones stay. Focus moves to the next delete button.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <div data-testid="narrow" style={{
    inlineSize: 320
  }}>
      <InvoiceViews display="menu" initialView="long" views={[...VIEWS, LONG]} />
    </div>,
  play: async ({
    canvas
  }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right;
    const trigger = canvas.getByRole('button', {
      name: \`Invoice views: \${LONG.label}\`
    });
    await waitFor(() => expect(trigger.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5));
  }
}`,...N.parameters?.docs?.source},description:{story:`A very long name in menu display truncates inside the button.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceViews display="menu" />,
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: 'Invoice views: All'
    });
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('menuitemradio', {
      name: 'To chase 13'
    }));
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await expect(canvas.getByRole('button', {
      name: 'Invoice views: To chase'
    })).toBeVisible();
    await expect(canvas.getByText('13 invoices')).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`Many views: a button names the view in force and opens them as a menu.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="narrow" style={{
    inlineSize: 320
  }}>
      <InvoiceViews initialView="to-chase" views={[...VIEWS, LONG]} />
    </div>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    }));
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right;
    await waitFor(async () => {
      await expect(canvas.getByRole('tablist').parentElement!.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
      await expect(canvas.getByRole('button', {
        name: 'View actions'
      }).getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
    });
  }
}`,...F.parameters?.docs?.source},description:{story:`At 320px, with a very long name, the tabs scroll inside the bar and the actions drop under them; nothing widens the page.`,...F.parameters?.docs?.description}}}})))()}export{F as a,L as c,A as i,k as n,j as o,M as r,m as s,P as t};