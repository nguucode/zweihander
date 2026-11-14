import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-CAzJH1mZ.js";import{n as o,t as ee}from"./icon-Cjfg2BMt.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as l,t as u}from"./Pictured-DOIgaTd2.js";import{n as d,t as te}from"./Checkbox-j24tliZU.js";import{n as f,t as p}from"./Table-CJ-sEei_.js";import{i as m,n as h,r as g,t as ne}from"./Popover-DZS76ujd.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{_=`_popup_17re3_3`,v=`_list_17re3_11`,y=`_row_17re3_19`,b=`_reset_17re3_20`,x=`_separator_17re3_37`,S={popup:_,list:v,row:y,reset:b,separator:x}})))()}function w({columns:e,visibleKeys:t,defaultVisibleKeys:n,onVisibleKeysChange:r,onReset:i,label:o=`Columns`,resetLabel:s=`Reset columns`,open:c,defaultOpen:l,onOpenChange:u,container:d,className:f}){let p=t=>e.filter(e=>e.isRowHeader||t.has(e.key)).map(e=>e.key),m=n?p(new Set(n)):e.map(e=>e.key),[h,g]=(0,T.useState)(m),_=new Set(t??h),v=e=>{let t=p(e);g(t),r?.(t)},y=e.filter(e=>_.has(e.key)).length;return(0,E.jsxs)(ne,{trigger:(0,E.jsx)(a,{variant:`secondary`,appearance:`outlined`,endIcon:(0,E.jsx)(ee,{name:`chevron-down`}),className:f,children:o}),"aria-label":o,className:S.popup,align:`end`,open:c,defaultOpen:l,onOpenChange:u,container:d,children:[(0,E.jsx)(`div`,{className:S.list,children:e.map(e=>{let t=e.isRowHeader||_.has(e.key);return(0,E.jsx)(te,{className:S.row,label:e.header,checked:t,disabled:e.isRowHeader||t&&y<=1,onCheckedChange:t=>{let n=new Set(_);t?n.add(e.key):n.delete(e.key),v(n)}},e.key)})}),(0,E.jsx)(`div`,{role:`separator`,className:S.separator}),(0,E.jsx)(`button`,{type:`button`,className:S.reset,onClick:()=>{v(new Set(m)),i?.()},children:s})]})}var T,E;function D(){return(D=e((()=>{T=n(),o(),i(),d(),h(),C(),E=r(),w.__docgenInfo={description:`A button that opens a list of a table's columns, each with a checkbox to show or hide it.`,methods:[],displayName:`ColumnChooser`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`ColumnChooserColumn`}],raw:`ColumnChooserColumn[]`},description:`Every column, hidden ones included, in table order.`},visibleKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"The shown columns' keys. Pair with `onVisibleKeysChange`."},defaultVisibleKeys:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Shown at first, uncontrolled, and what Reset brings back. Defaults to every column.`},onVisibleKeysChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(keys: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`keys`}],return:{name:`void`}}},description:`Called with the shown keys, in column order, when a box is ticked or Reset is pressed.`},onReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Also called by Reset, to put back what lives outside the chooser, such as column widths.`},label:{required:!1,tsType:{name:`string`},description:`The button's text and the popup's accessible name.`,defaultValue:{value:`'Columns'`,computed:!1}},resetLabel:{required:!1,tsType:{name:`string`},description:`The text of the last row, which brings back the default columns.`,defaultValue:{value:`'Reset columns'`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where the popup renders instead of `<body>`."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var re=t({Anatomy:()=>J,Default:()=>V,DoFewColumns:()=>X,DontTwoColumns:()=>Z,LastColumnStays:()=>W,Open:()=>K,RowHeaderAlwaysReported:()=>U,SomeHiddenByDefault:()=>H,StateButton:()=>Y,__namedExportsOrder:()=>Q,anatomyParts:()=>q,default:()=>R});function O(e){let[t,n]=(0,k.useState)(e.defaultVisibleKeys??L.map(e=>e.key)),[r,i]=(0,k.useState)({});return(0,A.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`end`},children:(0,A.jsx)(w,{...e,visibleKeys:t,onVisibleKeysChange:t=>{n(t),e.onVisibleKeysChange?.(t)},onReset:()=>{i({}),e.onReset?.()}})}),(0,A.jsx)(p,{caption:`Projects`,columns:L.filter(e=>t.includes(e.key)),rows:I,getRowId:e=>e.id,isResizable:!0,columnWidths:r,onColumnWidthsChange:i})]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{k=n(),s(),l(),m(),D(),f(),A=r(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I=[{id:`p1`,name:`Atlas`,owner:`Sam Rivera`,status:`Active`,files:214},{id:`p2`,name:`Billing revamp`,owner:`Mia Chen`,status:`Paused`,files:38},{id:`p3`,name:`Onboarding`,owner:`Leo Park`,status:`Active`,files:1203}],L=[{key:`name`,header:`Project`,isRowHeader:!0},{key:`owner`,header:`Owner`},{key:`status`,header:`Status`},{key:`files`,header:`Files`,align:`end`}],R={title:`Components/Data Display/Column Chooser`,tags:[`beta`],component:w,args:{columns:L,onVisibleKeysChange:M(),onReset:M()},argTypes:{columns:{description:"Every column, hidden ones included, in table order: `{ key, header, isRowHeader? }`. A Table's `columns` fit as they are. The row header cannot be hidden.",control:!1,table:{type:{summary:`ColumnChooserColumn[]`}}},visibleKeys:{description:"The shown columns' keys, controlled. Pair with `onVisibleKeysChange`.",control:!1,table:{type:{summary:`string[]`}}},defaultVisibleKeys:{description:`Shown at first, uncontrolled, and what Reset brings back.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`every column`}}},onVisibleKeysChange:{description:"Called with the shown keys, in column order, when a box is ticked or Reset is pressed. Filter the Table's `columns` with it.",control:!1,table:{type:{summary:`(keys: string[]) => void`}}},onReset:{description:`Also called by Reset, to put back what lives outside the chooser, such as column widths.`,control:!1,table:{type:{summary:`() => void`}}},label:{description:`The button's text and the popup's accessible name.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Columns'`}}},resetLabel:{description:`The text of the last row, which brings back the default columns.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Reset columns'`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where the popup renders instead of `<body>`.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the button.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,A.jsx)(`div`,{style:{minBlockSize:`20rem`,paddingBlock:`var(--space-2)`},children:e()})]},z=()=>F(document.body),B=e=>e.getAllByRole(`columnheader`).map(e=>e.textContent),V={render:e=>(0,A.jsx)(O,{...e}),play:async({args:e,canvas:t,step:n})=>{let r=t.getByRole(`button`,{name:`Columns`});await n(`The button opens a dialog named Columns and moves focus into it`,async()=>{await j(r).toHaveAttribute(`aria-haspopup`,`dialog`),await N.click(r);let e=await z().findByRole(`dialog`,{name:`Columns`});await j(r).toHaveAttribute(`aria-expanded`,`true`),await P(()=>j(e.contains(document.activeElement)).toBe(!0))}),await n(`Each column is a checkbox named by its header; the row header is locked on`,async()=>{let e=z().getByRole(`dialog`,{name:`Columns`}),t=F(e).getAllByRole(`checkbox`);await j(t).toHaveLength(4);for(let[e,n]of[`Project`,`Owner`,`Status`,`Files`].entries())await j(t[e]).toHaveAccessibleName(n);let n=F(e).getByRole(`checkbox`,{name:`Project`});await j(n).toBeChecked(),await j(n).toHaveAttribute(`aria-disabled`,`true`)}),await n(`Space on a box hides its column and reports the shown keys in order`,async()=>{let n=F(z().getByRole(`dialog`)).getByRole(`checkbox`,{name:`Owner`});n.focus(),await N.keyboard(` `),await j(n).not.toBeChecked(),await j(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`status`,`files`]),await j(B(t)).toEqual([`Project`,`Status`,`Files`]),await N.keyboard(` `),await j(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`,`status`,`files`])}),await n(`A click anywhere on a row toggles its box`,async()=>{let e=F(z().getByRole(`dialog`)).getByRole(`checkbox`,{name:`Status`});await N.click(e.closest(`label`)),await j(e).not.toBeChecked(),await j(B(t)).toEqual([`Project`,`Owner`,`Files`])}),await n(`Reset brings every column back`,async()=>{let n=z().getByRole(`dialog`);await N.click(F(n).getByRole(`button`,{name:`Reset columns`})),await j(e.onReset).toHaveBeenCalled(),await j(B(t)).toEqual([`Project`,`Owner`,`Status`,`Files`])}),await n(`Escape closes it and returns focus to the button`,async()=>{await N.keyboard(`{Escape}`),await P(()=>j(r).toHaveAttribute(`aria-expanded`,`false`)),await P(()=>j(r).toHaveFocus())})}},H={args:{defaultVisibleKeys:[`name`,`owner`]},render:e=>(0,A.jsx)(O,{...e}),play:async({args:e,canvas:t})=>{await j(B(t)).toEqual([`Project`,`Owner`]),await N.click(t.getByRole(`button`,{name:`Columns`}));let n=await z().findByRole(`dialog`);await N.click(F(n).getByRole(`checkbox`,{name:`Files`})),await j(B(t)).toEqual([`Project`,`Owner`,`Files`]),await N.click(F(n).getByRole(`button`,{name:`Reset columns`})),await j(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`]),await j(B(t)).toEqual([`Project`,`Owner`])}},U={args:{defaultVisibleKeys:[`files`,`owner`],defaultOpen:!0},play:async({args:e})=>{let t=await z().findByRole(`dialog`);await j(F(t).getByRole(`checkbox`,{name:`Project`})).toBeChecked(),await N.click(F(t).getByRole(`button`,{name:`Reset columns`})),await j(e.onVisibleKeysChange).toHaveBeenLastCalledWith([`name`,`owner`,`files`])}},W={args:{columns:L.map(({isRowHeader:e,...t})=>t),defaultVisibleKeys:[`owner`],defaultOpen:!0},play:async()=>{let e=await z().findByRole(`dialog`);await j(F(e).getByRole(`checkbox`,{name:`Owner`})).toHaveAttribute(`aria-disabled`,`true`),await j(F(e).getByRole(`checkbox`,{name:`Project`})).not.toHaveAttribute(`aria-disabled`)}},G=e=>(0,A.jsx)(u,{positioner:g.positioner,style:{display:`grid`,justifyItems:`end`,gap:6,minInlineSize:`16rem`},children:t=>(0,A.jsx)(w,{...e,open:!0,container:t})}),K={parameters:{picture:!0},args:{defaultVisibleKeys:[`name`,`status`,`files`]},render:G},q=[{name:`Button`,selector:`button[aria-haspopup="dialog"]`,description:`An outlined secondary Button, "Columns", with a chevron. Opens the popover.`},{name:`Popup`,selector:`[role="dialog"]`,description:`A 240px list, a Listbox's shell, named like the button and lined up with its end.`},{name:`Locked column`,selector:`[role="dialog"] [role="checkbox"][aria-disabled="true"]`,description:`The row header: always shown, so its box is ticked and disabled.`},{name:`Column checkbox`,selector:`[role="dialog"] [role="checkbox"]:not([aria-checked="true"])`,description:`One per column, named by its header, in table order. Ticked means shown. The whole row toggles it.`},{name:`Separator`,selector:`[role="dialog"] [role="separator"]`,description:`A 1px rule between the columns and Reset.`},{name:`Reset`,selector:`[role="dialog"] button:not([aria-haspopup])`,description:`A row like the others, its text in line with the column names: brings back the default columns and calls onReset.`}],J={tags:[`!dev`],parameters:{picture:!0},args:{defaultVisibleKeys:[`name`,`status`,`files`]},render:G,play:async({canvasElement:e})=>{let t=await c(e,q);await j(t[2]).toHaveAccessibleName(`Project`),await j(t[3]).toHaveAccessibleName(`Owner`),await j(t[5]).toHaveTextContent(`Reset columns`);let n=getComputedStyle(t[1]);await j([n.inlineSize,n.paddingTop,n.paddingLeft]).toEqual([`240px`,`8px`,`0px`]);let r=t[3].closest(`label`);await j(r.getBoundingClientRect().height).toBe(32),await j(r.getBoundingClientRect().width).toBe(t[1].clientWidth);let i=e=>{let t=document.createRange();return t.selectNodeContents(e),t.getBoundingClientRect().left};await j(i(t[5])).toBeCloseTo(i(F(r).getByText(`Owner`)),0)}},Y={tags:[`!dev`],parameters:{picture:!0}},X={tags:[`!dev`],parameters:{picture:!0},render:G},Z={tags:[`!dev`],parameters:{picture:!0},args:{columns:L.slice(0,2)},render:G},Q=[`Default`,`SomeHiddenByDefault`,`RowHeaderAlwaysReported`,`LastColumnStays`,`Open`,`anatomyParts`,`Anatomy`,`StateButton`,`DoFewColumns`,`DontTwoColumns`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    await step('A click anywhere on a row toggles its box', async () => {
      const status = within(body().getByRole('dialog')).getByRole('checkbox', {
        name: 'Status'
      });
      // The row itself, not the box: the label is stretched across the popup.
      await userEvent.click(status.closest('label')!);
      await expect(status).not.toBeChecked();
      await expect(headers(canvas)).toEqual(['Project', 'Owner', 'Files']);
    });
    await step('Reset brings every column back', async () => {
      const dialog = body().getByRole('dialog');
      await userEvent.click(within(dialog).getByRole('button', {
        name: 'Reset columns'
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
      name: 'Reset columns'
    }));
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner']);
    await expect(headers(canvas)).toEqual(['Project', 'Owner']);
  }
}`,...H.parameters?.docs?.source},description:{story:`Some columns start hidden; Reset hides them again.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
      name: 'Reset columns'
    }));
    await expect(args.onVisibleKeysChange).toHaveBeenLastCalledWith(['name', 'owner', 'files']);
  }
}`,...U.parameters?.docs?.source},description:{story:`Keys that leave out the row header still report it: it cannot be hidden.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`With no row header, the last column left cannot be hidden: a table needs one.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    picture: true
  },
  args: {
    defaultVisibleKeys: ['name', 'status', 'files']
  },
  render: picture
}`,...K.parameters?.docs?.source},description:{story:`Open, as a picture: the docs' main example. Owner hidden.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    await expect(found[5]).toHaveTextContent('Reset columns');
    // A Listbox's shell: 240px wide, 8px above and below, none at the sides.
    const popup = getComputedStyle(found[1]);
    await expect([popup.inlineSize, popup.paddingTop, popup.paddingLeft]).toEqual(['240px', '8px', '0px']);
    // Each column is an Option's row: 32px, its label stretched across the popup.
    const row = found[3].closest('label')!;
    await expect(row.getBoundingClientRect().height).toBe(32);
    await expect(row.getBoundingClientRect().width).toBe(found[1].clientWidth);
    // Reset's text starts where the column names do.
    const text = (el: Element) => {
      const range = document.createRange();
      range.selectNodeContents(el);
      return range.getBoundingClientRect().left;
    };
    await expect(text(found[5])).toBeCloseTo(text(within(row as HTMLElement).getByText('Owner')), 0);
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  }
}`,...Y.parameters?.docs?.source},description:{story:`Specs, States: the closed button, for its own states.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...X.parameters?.docs?.source},description:{story:`Guidelines, Do: a handful of optional columns, the name locked.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    columns: columns.slice(0, 2)
  },
  render: picture
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Don't: a chooser for a two-column table; there is nothing to choose.`,...Z.parameters?.docs?.description}}}})))()}export{Z as a,Y as c,X as i,q as l,re as n,K as o,V as r,H as s,J as t,$ as u};