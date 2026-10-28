import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,t as l}from"./Checkbox-5Fepdwz1.js";import{i as u,t as d}from"./Menu-NLwpYJmZ.js";import{n as f,t as p}from"./Search-DLU6gPnk.js";import{n as m,r as h,t as g}from"./Drawer-DTbJ5PGE.js";import{i as _,n as v}from"./DataTablePage-CGPRGfTA.js";import{n as y,t as b}from"./FilterBar-D6WzH-CQ.js";var x=t({AppliedAtOnce:()=>L,AppliedInABatch:()=>R,Default:()=>F,Empty:()=>I,InTableToolbar:()=>z,Narrow:()=>B,__namedExportsOrder:()=>V,default:()=>P});function S({filters:e,onApply:t}){let[n,r]=(0,w.useState)(e);return(0,T.jsx)(g,{title:`Filters`,onOpenChange:t=>t&&r(e),trigger:(0,T.jsx)(a,{variant:`secondary`,appearance:`ghost`,startIcon:(0,T.jsx)(s,{name:`plus`}),children:`More filters`}),footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{render:(0,T.jsx)(a,{variant:`secondary`}),children:`Cancel`}),(0,T.jsx)(m,{render:(0,T.jsx)(a,{}),onClick:()=>t(n),children:`Apply`})]}),children:Object.keys(A).map(e=>(0,T.jsxs)(`fieldset`,{style:{border:0,margin:0,padding:0,display:`grid`,gap:`var(--space-2)`,marginBlockEnd:`var(--space-group)`},children:[(0,T.jsx)(`legend`,{style:{fontWeight:600,marginBlockEnd:`var(--space-2)`},children:A[e].label}),A[e].options.map(t=>(0,T.jsx)(l,{label:t,checked:n[e].includes(t),onCheckedChange:n=>r(r=>({...r,[e]:M(r[e],t,n)}))},t))]},e))})}function C({initial:e=j,longLabel:t,label:n}){let[r,i]=(0,w.useState)(``),[o,c]=(0,w.useState)(e),l=N(o);return(0,T.jsx)(b,{"aria-label":n,search:(0,T.jsx)(p,{"aria-label":`Search invoices`,placeholder:`Search invoices`,value:r,onChange:e=>i(e.target.value)}),filters:(0,T.jsxs)(T.Fragment,{children:[Object.keys(A).map(e=>(0,T.jsx)(d,{trigger:(0,T.jsx)(a,{variant:`secondary`,appearance:`outlined`,endIcon:(0,T.jsx)(s,{name:`chevron-down`}),children:A[e].label}),items:A[e].options.map(t=>({type:`checkbox`,label:t,checked:o[e].includes(t),onCheckedChange:n=>c(r=>({...r,[e]:M(r[e],t,n)}))}))},e)),(0,T.jsx)(S,{filters:o,onApply:c})]}),applied:t?[...l,{id:`customer`,label:`Customer: Nordwestdeutsche Landesbank Girozentrale Hannover`}]:l,onRemove:e=>{let[t,n]=e.split(`:`);c(e=>({...e,[t]:e[t].filter(e=>e!==n)}))},onClearAll:()=>c(j)})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{w=n(),o(),i(),c(),f(),u(),h(),_(),y(),T=r(),{expect:E,userEvent:D,waitFor:O,within:k}=__STORYBOOK_MODULE_TEST__,A={status:{label:`Status`,options:[`Draft`,`Sent`,`Paid`,`Overdue`]},owner:{label:`Owner`,options:[`Mia Chen`,`Noah Kim`,`Ava Patel`]}},j={status:[],owner:[]},M=(e,t,n)=>n?[...e,t]:e.filter(e=>e!==t),N=e=>Object.keys(A).flatMap(t=>e[t].map(e=>({id:`${t}:${e}`,label:`${A[t].label}: ${e}`}))),P={title:`Patterns/Application UI/Filter Bar`,tags:[`experimental`],component:b,parameters:{layout:`padded`},argTypes:{search:{description:`Usually a Search, first in the row.`,control:!1},filters:{description:`A button per field that opens its choices (a Menu applies at once), then Add filter or More filters (a Drawer applies in a batch).`,control:!1},applied:{description:"The filters in force as `{ id, label }`, one removable chip each. The chip row hides when empty.",control:!1},onRemove:{description:`Called with a chip's id when its remove button is pressed. Without it the chips have no remove button.`},onClearAll:{description:`Called by Clear all. Without it there is no Clear all.`},clearAllLabel:{description:`The Clear all button text.`,control:`text`},"aria-label":{description:'Names the `search` landmark. Defaults to "Filters"; say what it filters when a page has more than one.',control:`text`},appliedLabel:{description:`The chip list's accessible name.`,control:`text`}},render:()=>(0,T.jsx)(C,{initial:{status:[`Overdue`,`Sent`],owner:[`Mia Chen`]}})},F={play:async({canvas:e})=>{await E(e.getByRole(`search`,{name:`Filters`})).toBeVisible();let t=e.getByRole(`list`,{name:`Applied filters`});await E(k(t).getAllByRole(`listitem`)).toHaveLength(3),await D.click(e.getByRole(`button`,{name:`Remove Status: Overdue`})),await E(e.queryByText(`Status: Overdue`)).toBeNull(),await E(e.getByRole(`button`,{name:`Remove Status: Sent`})).toHaveFocus(),await D.click(e.getByRole(`button`,{name:`Remove Owner: Mia Chen`})),await E(e.getByRole(`button`,{name:`Remove Status: Sent`})).toHaveFocus(),await D.click(e.getByRole(`button`,{name:`Clear all`})),await E(e.queryByRole(`list`)).toBeNull(),await E(e.getByRole(`searchbox`,{name:`Search invoices`})).toHaveFocus()}},I={render:()=>(0,T.jsx)(C,{}),play:async({canvas:e})=>{await E(e.queryByRole(`list`)).toBeNull(),await E(e.queryByRole(`button`,{name:`Clear all`})).toBeNull()}},L={render:()=>(0,T.jsx)(C,{}),play:async({canvas:e})=>{await D.click(e.getByRole(`button`,{name:`Status`}));let t=await k(document.body).findByRole(`menuitemcheckbox`,{name:`Paid`});await D.click(t),await D.keyboard(`{Escape}`),await O(()=>E(k(document.body).queryByRole(`menu`)).toBeNull()),await E(e.getByRole(`button`,{name:`Remove Status: Paid`})).toBeVisible()}},R={render:()=>(0,T.jsx)(C,{}),play:async({canvas:e})=>{let t=k(document.body),n=e.getByRole(`button`,{name:`More filters`});await D.click(n),await D.click(await t.findByRole(`checkbox`,{name:`Draft`})),await D.click(t.getByRole(`button`,{name:`Cancel`})),await O(()=>E(t.queryByRole(`dialog`)).toBeNull()),await E(e.queryByRole(`list`)).toBeNull(),await D.click(n),await D.click(await t.findByRole(`checkbox`,{name:`Draft`})),await D.click(t.getByRole(`checkbox`,{name:`Noah Kim`})),await D.click(t.getByRole(`button`,{name:`Apply`})),await O(()=>E(t.queryByRole(`dialog`)).toBeNull()),await E(e.getByRole(`button`,{name:`Remove Status: Draft`})).toBeVisible(),await E(e.getByRole(`button`,{name:`Remove Owner: Noah Kim`})).toBeVisible()}},z={render:()=>(0,T.jsxs)(v,{children:[(0,T.jsx)(C,{initial:{status:[`Overdue`],owner:[]},label:`Invoice filters`}),(0,T.jsx)(a,{startIcon:(0,T.jsx)(s,{name:`plus`}),children:`New invoice`})]}),play:async({canvas:e})=>{let t=e.getByRole(`search`,{name:`Invoice filters`}).getBoundingClientRect(),n=e.getByRole(`button`,{name:`New invoice`}).getBoundingClientRect();await E(n.left).toBeGreaterThanOrEqual(t.right),await D.click(e.getByRole(`button`,{name:`Remove Status: Overdue`})),await E(e.queryByRole(`list`)).toBeNull(),await E(e.getByRole(`searchbox`,{name:`Search invoices`})).toHaveFocus()}},B={render:()=>(0,T.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:320},children:(0,T.jsx)(C,{initial:{status:[`Overdue`],owner:[]},longLabel:!0})}),play:async({canvas:e})=>{let t=e.getByTestId(`narrow`).getBoundingClientRect().right;await O(async()=>{for(let n of e.getAllByRole(`listitem`))await E(n.getBoundingClientRect().right).toBeLessThanOrEqual(t+.5);await E(e.getByRole(`button`,{name:`More filters`}).getBoundingClientRect().right).toBeLessThanOrEqual(t+.5)})}},V=[`Default`,`Empty`,`AppliedAtOnce`,`AppliedInABatch`,`InTableToolbar`,`Narrow`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('search', {
      name: 'Filters'
    })).toBeVisible();
    const list = canvas.getByRole('list', {
      name: 'Applied filters'
    });
    await expect(within(list).getAllByRole('listitem')).toHaveLength(3);
    // Removing a chip hands focus to the one that takes its place.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Overdue'
    }));
    await expect(canvas.queryByText('Status: Overdue')).toBeNull();
    await expect(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    })).toHaveFocus();
    // The last chip hands it back to the one before.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Owner: Mia Chen'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Status: Sent'
    })).toHaveFocus();
    // Clear all takes the row away, and focus goes back to the search.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear all'
    }));
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByRole('searchbox', {
      name: 'Search invoices'
    })).toHaveFocus();
  }
}`,...F.parameters?.docs?.source},description:{story:`Search, a menu per field, More filters, and the applied filters as chips.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceFilters />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.queryByRole('button', {
      name: 'Clear all'
    })).toBeNull();
  }
}`,...I.parameters?.docs?.source},description:{story:`Nothing applied: just the controls, no chip row and no Clear all.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceFilters />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Status'
    }));
    const paid = await within(document.body).findByRole('menuitemcheckbox', {
      name: 'Paid'
    });
    await userEvent.click(paid);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('menu')).toBeNull());
    await expect(canvas.getByRole('button', {
      name: 'Remove Status: Paid'
    })).toBeVisible();
  }
}`,...L.parameters?.docs?.source},description:{story:`A field's menu applies each choice as it is ticked.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <InvoiceFilters />,
  play: async ({
    canvas
  }) => {
    const body = within(document.body);
    const more = canvas.getByRole('button', {
      name: 'More filters'
    });
    await userEvent.click(more);
    await userEvent.click(await body.findByRole('checkbox', {
      name: 'Draft'
    }));
    await userEvent.click(body.getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    await expect(canvas.queryByRole('list')).toBeNull();
    await userEvent.click(more);
    await userEvent.click(await body.findByRole('checkbox', {
      name: 'Draft'
    }));
    await userEvent.click(body.getByRole('checkbox', {
      name: 'Noah Kim'
    }));
    await userEvent.click(body.getByRole('button', {
      name: 'Apply'
    }));
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
    await expect(canvas.getByRole('button', {
      name: 'Remove Status: Draft'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Remove Owner: Noah Kim'
    })).toBeVisible();
  }
}`,...R.parameters?.docs?.source},description:{story:`More filters opens a Drawer: nothing applies until Apply, and Cancel drops the changes.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <TableToolbar>
      <InvoiceFilters initial={{
      status: ['Overdue'],
      owner: []
    }} label="Invoice filters" />
      <Button startIcon={<Icon name="plus" />}>New invoice</Button>
    </TableToolbar>,
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('search', {
      name: 'Invoice filters'
    }).getBoundingClientRect();
    const action = canvas.getByRole('button', {
      name: 'New invoice'
    }).getBoundingClientRect();
    await expect(action.left).toBeGreaterThanOrEqual(bar.right);
    // Removing the only chip takes focus back to the first control.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Overdue'
    }));
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByRole('searchbox', {
      name: 'Search invoices'
    })).toHaveFocus();
  }
}`,...z.parameters?.docs?.source},description:{story:`In a TableToolbar it takes the free space, and the page's main action stays at the end. Named after what it filters.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="narrow" style={{
    inlineSize: 320
  }}>
      <InvoiceFilters initial={{
      status: ['Overdue'],
      owner: []
    }} longLabel />
    </div>,
  play: async ({
    canvas
  }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right;
    await waitFor(async () => {
      for (const item of canvas.getAllByRole('listitem')) await expect(item.getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
      await expect(canvas.getByRole('button', {
        name: 'More filters'
      }).getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
    });
  }
}`,...B.parameters?.docs?.source},description:{story:`At 320px the controls wrap and a long value truncates inside its chip.`,...B.parameters?.docs?.description}}}})))()}export{z as a,x as i,F as n,B as o,I as r,H as s,R as t};