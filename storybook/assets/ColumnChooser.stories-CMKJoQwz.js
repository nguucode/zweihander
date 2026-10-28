import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./Pictured-DOIgaTd2.js";import{n as c,t as l}from"./Table-Y4TRGaOz.js";import{i as u,r as d}from"./Popover-Db3qGhTm.js";import{n as f,t as p}from"./ColumnChooser-Dbm87zzg.js";var m=t({Anatomy:()=>F,Default:()=>O,DoFewColumns:()=>L,DontTwoColumns:()=>R,LastColumnStays:()=>j,Open:()=>N,RowHeaderAlwaysReported:()=>A,SomeHiddenByDefault:()=>k,StateButton:()=>I,__namedExportsOrder:()=>z,anatomyParts:()=>P,default:()=>T});function h(e){let[t,n]=(0,g.useState)(e.defaultVisibleKeys??w.map(e=>e.key)),[r,i]=(0,g.useState)({});return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,_.jsx)(`div`,{style:{display:`flex`,justifyContent:`end`},children:(0,_.jsx)(p,{...e,visibleKeys:t,onVisibleKeysChange:t=>{n(t),e.onVisibleKeysChange?.(t)},onReset:()=>{i({}),e.onReset?.()}})}),(0,_.jsx)(l,{caption:`Projects`,columns:w.filter(e=>t.includes(e.key)),rows:C,getRowId:e=>e.id,isResizable:!0,columnWidths:r,onColumnWidthsChange:i})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{g=n(),i(),o(),u(),f(),c(),_=r(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=[{id:`p1`,name:`Atlas`,owner:`Sam Rivera`,status:`Active`,files:214},{id:`p2`,name:`Billing revamp`,owner:`Mia Chen`,status:`Paused`,files:38},{id:`p3`,name:`Onboarding`,owner:`Leo Park`,status:`Active`,files:1203}],w=[{key:`name`,header:`Project`,isRowHeader:!0},{key:`owner`,header:`Owner`},{key:`status`,header:`Status`},{key:`files`,header:`Files`,align:`end`}],T={title:`Components/Data Display/Column Chooser`,tags:[`beta`],component:p,args:{columns:w,onVisibleKeysChange:y(),onReset:y()},argTypes:{columns:{description:"Every column, hidden ones included, in table order: `{ key, header, isRowHeader? }`. A Table's `columns` fit as they are. The row header cannot be hidden.",control:!1,table:{type:{summary:`ColumnChooserColumn[]`}}},visibleKeys:{description:"The shown columns' keys, controlled. Pair with `onVisibleKeysChange`.",control:!1,table:{type:{summary:`string[]`}}},defaultVisibleKeys:{description:`Shown at first, uncontrolled, and what Reset brings back.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`every column`}}},onVisibleKeysChange:{description:"Called with the shown keys, in column order, when a box is ticked or Reset is pressed. Filter the Table's `columns` with it.",control:!1,table:{type:{summary:`(keys: string[]) => void`}}},onReset:{description:`Also called by Reset, to put back what lives outside the chooser, such as column widths.`,control:!1,table:{type:{summary:`() => void`}}},label:{description:`The button's text and the popover's title.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Columns'`}}},resetLabel:{description:`The Reset button's text.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Reset'`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where the popup renders instead of `<body>`.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the button.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,_.jsx)(`div`,{style:{minBlockSize:`20rem`,paddingBlock:`var(--space-2)`},children:e()})]},E=()=>S(document.body),D=e=>e.getAllByRole(`columnheader`).map(e=>e.textContent),O={render:e=>(0,_.jsx)(h,{...e}),play:async({args:e,canvas:t,step:n})=>{let r=t.getByRole(`button`,{name:`Columns`});await n(`The button opens a dialog named Columns and moves focus into it`,async()=>{await v(r).toHaveAttribute(`aria-haspopup`,`dialog`),await b.click(r);let e=await E().findByRole(`dialog`,{name:`Columns`});await v(r).toHaveAttribute(`aria-expanded`,`true`),await x(()=>v(e.contains(document.activeElement)).toBe(!0))}),await n(`Each column is a checkbox named by its header; the row header is locked on`,async()=>{let e=E().getByRole(`dialog`,{name:`Columns`}),t=S(e).getAllByRole(`checkbox`);await v(t).toHaveLength(4);for(let[e,n]of[`Project`,`Owner`,`Status`,`Files`].entries())await v(t[e]).toHaveAccessibleName(n);let n=S(e).getByRole(`checkbox`,{name:`Project`});await v(n).toBeChecked(),await v(n).toHaveAttribute(`aria-disabled`,`true`)}),await n(`Space on a box hides its column and reports the shown keys in order`,async()=>{let n=S(E().getByRole(`dialog`)).getByRole(`checkbox`,{name:`Owner`});n.focus(),await b.keyboard(` `),await v(n).not.toBeChecked(),await v(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`status`,`files`]),await v(D(t)).toEqual([`Project`,`Status`,`Files`]),await b.keyboard(` `),await v(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`,`status`,`files`])}),await n(`Reset brings every column back`,async()=>{let n=E().getByRole(`dialog`);await b.click(S(n).getByRole(`checkbox`,{name:`Status`})),await b.click(S(n).getByRole(`button`,{name:`Reset`})),await v(e.onReset).toHaveBeenCalled(),await v(D(t)).toEqual([`Project`,`Owner`,`Status`,`Files`])}),await n(`Escape closes it and returns focus to the button`,async()=>{await b.keyboard(`{Escape}`),await x(()=>v(r).toHaveAttribute(`aria-expanded`,`false`)),await x(()=>v(r).toHaveFocus())})}},k={args:{defaultVisibleKeys:[`name`,`owner`]},render:e=>(0,_.jsx)(h,{...e}),play:async({args:e,canvas:t})=>{await v(D(t)).toEqual([`Project`,`Owner`]),await b.click(t.getByRole(`button`,{name:`Columns`}));let n=await E().findByRole(`dialog`);await b.click(S(n).getByRole(`checkbox`,{name:`Files`})),await v(D(t)).toEqual([`Project`,`Owner`,`Files`]),await b.click(S(n).getByRole(`button`,{name:`Reset`})),await v(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`]),await v(D(t)).toEqual([`Project`,`Owner`])}},A={args:{defaultVisibleKeys:[`files`,`owner`],defaultOpen:!0},play:async({args:e})=>{let t=await E().findByRole(`dialog`);await v(S(t).getByRole(`checkbox`,{name:`Project`})).toBeChecked(),await b.click(S(t).getByRole(`button`,{name:`Reset`})),await v(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`,`files`])}},j={args:{columns:w.map(({isRowHeader:e,...t})=>t),defaultVisibleKeys:[`owner`],defaultOpen:!0},play:async()=>{let e=await E().findByRole(`dialog`);await v(S(e).getByRole(`checkbox`,{name:`Owner`})).toHaveAttribute(`aria-disabled`,`true`),await v(S(e).getByRole(`checkbox`,{name:`Project`})).not.toHaveAttribute(`aria-disabled`)}},M=e=>(0,_.jsx)(s,{positioner:d.positioner,style:{display:`grid`,justifyItems:`end`,gap:6,minInlineSize:`16rem`},children:t=>(0,_.jsx)(p,{...e,open:!0,container:t})}),N={parameters:{picture:!0},args:{defaultVisibleKeys:[`name`,`status`,`files`]},render:M},P=[{name:`Button`,selector:`button[aria-haspopup="dialog"]`,description:`An outlined secondary Button, "Columns", with a chevron. Opens the popover.`},{name:`Popover`,selector:`[role="dialog"]`,description:`A Popover titled like the button, lined up with its end.`},{name:`Locked column`,selector:`[role="dialog"] [role="checkbox"][aria-disabled="true"]`,description:`The row header: always shown, so its box is ticked and disabled.`},{name:`Column checkbox`,selector:`[role="dialog"] [role="checkbox"]:not([aria-checked="true"])`,description:`One per column, named by its header, in table order. Ticked means shown.`},{name:`Reset`,selector:`[role="dialog"] button:not([aria-haspopup])`,description:`A small ghost Button: brings back the default columns and calls onReset.`}],F={tags:[`!dev`],parameters:{picture:!0},args:{defaultVisibleKeys:[`name`,`status`,`files`]},render:M,play:async({canvasElement:e})=>{let t=await a(e,P);await v(t[2]).toHaveAccessibleName(`Project`),await v(t[3]).toHaveAccessibleName(`Owner`),await v(t[4]).toHaveTextContent(`Reset`)}},I={tags:[`!dev`],parameters:{picture:!0}},L={tags:[`!dev`],parameters:{picture:!0},render:M},R={tags:[`!dev`],parameters:{picture:!0},args:{columns:w.slice(0,2)},render:M},z=[`Default`,`SomeHiddenByDefault`,`RowHeaderAlwaysReported`,`LastColumnStays`,`Open`,`anatomyParts`,`Anatomy`,`StateButton`,`DoFewColumns`,`DontTwoColumns`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <WithTable {...args} />,
  play: async ({
    args,
    canvas,
    step
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Columns'
    });
    await step('The button opens a dialog named Columns and moves focus into it', async () => {
      await expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
      await userEvent.click(trigger);
      const dialog = await body().findByRole('dialog', {
        name: 'Columns'
      });
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
      await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    });
    await step('Each column is a checkbox named by its header; the row header is locked on', async () => {
      const dialog = body().getByRole('dialog', {
        name: 'Columns'
      });
      const boxes = within(dialog).getAllByRole('checkbox');
      await expect(boxes).toHaveLength(4);
      for (const [i, name] of ['Project', 'Owner', 'Status', 'Files'].entries()) await expect(boxes[i]).toHaveAccessibleName(name);
      const project = within(dialog).getByRole('checkbox', {
        name: 'Project'
      });
      await expect(project).toBeChecked();
      await expect(project).toHaveAttribute('aria-disabled', 'true');
    });
    await step('Space on a box hides its column and reports the shown keys in order', async () => {
      const owner = within(body().getByRole('dialog')).getByRole('checkbox', {
        name: 'Owner'
      });
      owner.focus();
      await userEvent.keyboard(' ');
      await expect(owner).not.toBeChecked();
      await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'status', 'files']);
      await expect(headers(canvas)).toEqual(['Project', 'Status', 'Files']);
      await userEvent.keyboard(' ');
      await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner', 'status', 'files']);
    });
    await step('Reset brings every column back', async () => {
      const dialog = body().getByRole('dialog');
      await userEvent.click(within(dialog).getByRole('checkbox', {
        name: 'Status'
      }));
      await userEvent.click(within(dialog).getByRole('button', {
        name: 'Reset'
      }));
      await expect(args.onReset).toHaveBeenCalled();
      await expect(headers(canvas)).toEqual(['Project', 'Owner', 'Status', 'Files']);
    });
    await step('Escape closes it and returns focus to the button', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'false'));
      await waitFor(() => expect(trigger).toHaveFocus());
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultVisibleKeys: ['name', 'owner']
  },
  render: args => <WithTable {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    await expect(headers(canvas)).toEqual(['Project', 'Owner']);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Columns'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('checkbox', {
      name: 'Files'
    }));
    await expect(headers(canvas)).toEqual(['Project', 'Owner', 'Files']);
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Reset'
    }));
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner']);
    await expect(headers(canvas)).toEqual(['Project', 'Owner']);
  }
}`,...k.parameters?.docs?.source},description:{story:`Some columns start hidden; Reset hides them again.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultVisibleKeys: ['files', 'owner'],
    defaultOpen: true
  },
  play: async ({
    args
  }) => {
    const dialog = await body().findByRole('dialog');
    await expect(within(dialog).getByRole('checkbox', {
      name: 'Project'
    })).toBeChecked();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Reset'
    }));
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner', 'files']);
  }
}`,...A.parameters?.docs?.source},description:{story:`Keys that leave out the row header still report it: it cannot be hidden.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns.map(({
      isRowHeader: _r,
      ...c
    }) => c),
    defaultVisibleKeys: ['owner'],
    defaultOpen: true
  },
  play: async () => {
    const dialog = await body().findByRole('dialog');
    await expect(within(dialog).getByRole('checkbox', {
      name: 'Owner'
    })).toHaveAttribute('aria-disabled', 'true');
    await expect(within(dialog).getByRole('checkbox', {
      name: 'Project'
    })).not.toHaveAttribute('aria-disabled');
  }
}`,...j.parameters?.docs?.source},description:{story:`With no row header, the last column left cannot be hidden: a table needs one.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    picture: true
  },
  args: {
    defaultVisibleKeys: ['name', 'status', 'files']
  },
  render: picture
}`,...N.parameters?.docs?.source},description:{story:`Open, as a picture: the docs' main example. Owner hidden.`,...N.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    defaultVisibleKeys: ['name', 'status', 'files']
  },
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveAccessibleName('Project');
    await expect(found[3]).toHaveAccessibleName('Owner');
    await expect(found[4]).toHaveTextContent('Reset');
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  }
}`,...I.parameters?.docs?.source},description:{story:`Specs, States: the closed button, for its own states.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Do: a handful of optional columns, the name locked.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    columns: columns.slice(0, 2)
  },
  render: picture
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Don't: a chooser for a two-column table; there is nothing to choose.`,...R.parameters?.docs?.description}}}})))()}export{R as a,I as c,L as i,P as l,m as n,N as o,O as r,k as s,F as t,B as u};