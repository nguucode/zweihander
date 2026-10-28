import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,t as l}from"./Kbd-DUFr_I3T.js";import{i as u,t as d}from"./Menu-NLwpYJmZ.js";import{n as f,t as p}from"./Table-Y4TRGaOz.js";import{n as m,t as h}from"./Card-DvxLWsiy.js";import{r as g,t as _}from"./TextInput-vfco79YG.js";import{n as ee,r as te,t as ne}from"./Toast-Rp8LWS30.js";import{n as re,t as v}from"./ConfirmDialog-D_hrnfs8.js";import{n as ie,t as ae}from"./ActionPanel-BcAXfovQ.js";import{n as y,t as b}from"./CardHeading-Dhr_hQ0E.js";import{a as oe,t as se}from"./FormLayouts-OSTbjqat.js";function x({caption:e=`Common actions`}){return(0,S.jsx)(p,{caption:e,columns:T,rows:E,getRowId:e=>e.id})}var S,C,w,T,E;function D(){return(D=e((()=>{c(),f(),S=r(),C={create:{label:`Create`,purpose:`Makes a new record from nothing. Not Add, which puts something into a set.`,placement:`Page header, at the end`,button:{variant:`primary`,appearance:`contained`},confirm:`none`},add:{label:`Add`,purpose:`Puts something into this set: a member into a team, a line into an invoice.`,placement:`Header of the section it adds to, at the end`,button:{variant:`secondary`,appearance:`outlined`},confirm:`none`},edit:{label:`Edit`,purpose:`Opens the record, or one section of it, for changes.`,placement:`Record or card header, before the overflow menu`,button:{variant:`secondary`,appearance:`outlined`},confirm:`none`},save:{label:`Save`,purpose:`Keeps the changes. The form’s submit button.`,placement:`Form footer, last`,button:{variant:`primary`,appearance:`contained`},confirm:`none`,shortcut:[`⌘`,`S`]},cancel:{label:`Cancel`,purpose:`Leaves a form or a flow without saving. Ask to discard only when something changed. Esc cancels only in a dialog or drawer.`,placement:`Form footer, before Save`,button:{variant:`secondary`,appearance:`ghost`},confirm:`none`},close:{label:`Close`,purpose:`Dismisses a dialog, drawer or panel with nothing to save. Not Cancel, which throws input away.`,placement:`Top end of the surface, an icon button named Close`,button:{variant:`secondary`,appearance:`ghost`},confirm:`none`,shortcut:[`Esc`]},duplicate:{label:`Duplicate`,purpose:`Creates a copy named “Copy of …” and opens it.`,placement:`Overflow menu`,confirm:`none`},archive:{label:`Archive`,purpose:`Hides the record from lists and keeps its history. Prefer it to Delete for anything with transactions.`,placement:`Overflow menu`,confirm:`undo`},remove:{label:`Remove`,purpose:`Takes something out of this set; the thing itself stays. The reverse of Add.`,placement:`On the row or chip it removes, or in the row’s menu`,button:{variant:`secondary`,appearance:`ghost`},confirm:`undo`},delete:{label:`Delete`,purpose:`Destroys the record. Type to confirm when it cannot be restored and takes other records with it.`,placement:`Last in the overflow menu, after a separator, as a destructive entry; in settings, a danger Action Panel`,button:{variant:`destructive`,appearance:`outlined`},confirm:`dialog`},import:{label:`Import`,purpose:`Brings records in from a file, through the Import Export steps.`,placement:`List header, before Create`,button:{variant:`secondary`,appearance:`outlined`},confirm:`none`},export:{label:`Export`,purpose:`Downloads the rows in view, with the filters applied.`,placement:`List header, before Create`,button:{variant:`secondary`,appearance:`outlined`},confirm:`none`},undo:{label:`Undo`,purpose:`Reverses the action that raised the toast.`,placement:`In the toast`,button:{variant:`secondary`,appearance:`ghost`},confirm:`none`,shortcut:[`⌘`,`Z`]}},w={none:`None`,undo:`Undo toast`,dialog:`Confirm Dialog`,typed:`Type to confirm`},T=[{key:`label`,header:`Action`,isRowHeader:!0,width:`7rem`},{key:`purpose`,header:`Use for`},{key:`placement`,header:`Where`},{key:`button`,header:`Button`,width:`9rem`,cell:e=>e.button?`${e.button.variant}, ${e.button.appearance}`:`Menu entry`},{key:`confirm`,header:`Confirm`,width:`9rem`,cell:e=>w[e.confirm]},{key:`shortcut`,header:`Shortcut`,width:`7rem`,cell:e=>e.shortcut?(0,S.jsx)(l,{keys:[...e.shortcut],size:`sm`}):`None`}],E=Object.keys(C).map(e=>({id:e,...C[e]})),x.__docgenInfo={description:`The common actions as a reference table: label, use, place, button, confirmation and shortcut.`,methods:[],displayName:`CommonActionsTable`,props:{caption:{required:!1,tsType:{name:`ReactNode`},description:`Names the table. Visually hidden.`,defaultValue:{value:`'Common actions'`,computed:!1}}}}})))()}var ce=t({ArchiveWithUndo:()=>Y,DeleteWithConfirm:()=>X,FormFooter:()=>W,ListHeader:()=>K,Narrow:()=>G,RecordHeader:()=>J,Reference:()=>U,TypeToConfirm:()=>Z,__namedExportsOrder:()=>Q,default:()=>V});function O({save:e=`Save`,cancel:t=`Cancel`}){return(0,j.jsxs)(`form`,{"aria-label":`Edit invoice`,onSubmit:e=>{e.preventDefault(),R()},children:[(0,j.jsx)(_,{label:`Reference`,name:`reference`,defaultValue:`INV-0042`,isFullWidth:!0}),(0,j.jsxs)(se,{style:{paddingBlockStart:`var(--space-4)`},children:[(0,j.jsx)(a,{type:`button`,...L(`cancel`),children:t}),(0,j.jsx)(a,{type:`submit`,...L(`save`),children:e})]})]})}function k(){let e=te(),[t,n]=(0,A.useState)(!1);return(0,j.jsxs)(h,{children:[(0,j.jsx)(b,{title:`Invoice INV-0042`,description:`Northwind Traders, due 14 November`,actions:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a,{...L(`edit`),children:`Edit`}),(0,j.jsx)(d,{align:`end`,trigger:(0,j.jsx)(a,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`More actions`,children:(0,j.jsx)(s,{name:`more`})}),items:[{label:`Duplicate`},{label:`Archive`,onSelect:()=>e.add({title:`Invoice INV-0042 archived`,action:{label:`Undo`,onClick:B}})},{type:`separator`},{label:`Delete`,isDestructive:!0,onSelect:()=>n(!0)}]})]})}),(0,j.jsx)(v,{open:t,onOpenChange:n,title:`Delete invoice INV-0042?`,description:`The invoice and its payment history are deleted. This cannot be undone.`,confirmLabel:`Delete invoice`,onConfirm:z})]})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{A=n(),o(),i(),m(),u(),ee(),re(),g(),ie(),y(),D(),oe(),j=r(),{expect:M,fn:N,userEvent:P,waitFor:F,within:I}=__STORYBOOK_MODULE_TEST__,L=e=>C[e].button,R=N(),z=N(),B=N(),V={title:`Patterns/Application UI/Common Actions`,tags:[`experimental`],component:x,parameters:{layout:`padded`},argTypes:{caption:{description:`Names the table for assistive tech. Visually hidden.`,control:`text`,table:{defaultValue:{summary:`"Common actions"`}}}}},H=()=>I(document.body),U={play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`Common actions`}),n=I(t).getAllByRole(`rowheader`).map(e=>e.textContent);await M(n).toEqual(Object.values(C).map(e=>e.label));let r=I(t).getByRole(`rowheader`,{name:`Save`}).closest(`tr`);await M(r.querySelectorAll(`kbd kbd`)).toHaveLength(2);let i=I(t).getByRole(`rowheader`,{name:`Delete`}).closest(`tr`);await M(I(i).getByText(`Confirm Dialog`)).toBeVisible()}},W={render:()=>(0,j.jsx)(O,{}),play:async({canvas:e})=>{R.mockClear();let[t,n]=I(e.getByRole(`form`,{name:`Edit invoice`})).getAllByRole(`button`);await P.type(e.getByRole(`textbox`,{name:`Reference`}),`{Enter}`),await M(R).toHaveBeenCalledOnce(),R.mockClear(),await M(t).toHaveAccessibleName(`Cancel`),await M(n).toHaveAccessibleName(`Save`),await M(n).toHaveAttribute(`type`,`submit`),await F(()=>M(n.getBoundingClientRect().left).toBeGreaterThan(t.getBoundingClientRect().right)),await P.click(n),await M(R).toHaveBeenCalledOnce()}},G={render:()=>(0,j.jsx)(`div`,{"data-testid":`frame`,style:{inlineSize:288},children:(0,j.jsx)(O,{save:`Save and send to the approver`,cancel:`Discard my changes`})}),play:async({canvas:e})=>{let t=e.getByTestId(`frame`),n=e.getByRole(`button`,{name:`Save and send to the approver`});await F(()=>{M(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),M(n.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right+1)})}},K={render:()=>(0,j.jsx)(b,{title:`Invoices`,description:`Everything billed this year.`,actions:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a,{...L(`import`),children:`Import`}),(0,j.jsx)(a,{...L(`export`),children:`Export`}),(0,j.jsx)(a,{...L(`create`),startIcon:(0,j.jsx)(s,{name:`plus`}),children:`Create invoice`})]})}),play:async({canvas:e})=>{let t=e.getAllByRole(`button`).map(e=>e.textContent);await M(t).toEqual([`Import`,`Export`,`Create invoice`])}},q=()=>(0,j.jsx)(ne,{children:(0,j.jsx)(`div`,{style:{maxInlineSize:560,minBlockSize:`18rem`},children:(0,j.jsx)(k,{})})}),J={render:q,play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`button`);await M(t).toHaveAccessibleName(`Edit`),await M(n).toHaveAccessibleName(`More actions`),await P.click(n);let r=await H().findAllByRole(`menuitem`);await M(r.map(e=>e.textContent)).toEqual([`Duplicate`,`Archive`,`Delete`]),await M(H().getByRole(`separator`)).toBeInTheDocument(),await P.keyboard(`{Escape}`),await F(()=>M(H().queryByRole(`menu`)).toBeNull())}},Y={render:q,play:async({canvas:e})=>{B.mockClear(),await P.click(e.getByRole(`button`,{name:`More actions`})),await P.click(await H().findByRole(`menuitem`,{name:`Archive`})),await F(()=>M(H().getByText(`Invoice INV-0042 archived`)).toBeVisible()),await M(H().queryByRole(`alertdialog`)).toBeNull(),await P.click(await H().findByRole(`button`,{name:`Undo`})),await M(B).toHaveBeenCalledOnce()}},X={render:q,play:async({canvas:e})=>{z.mockClear(),await P.click(e.getByRole(`button`,{name:`More actions`})),await P.click(await H().findByRole(`menuitem`,{name:`Delete`}));let t=await H().findByRole(`alertdialog`,{name:`Delete invoice INV-0042?`});await F(()=>M(I(t).getByRole(`button`,{name:`Cancel`})).toHaveFocus()),await M(z).not.toHaveBeenCalled(),await P.click(I(t).getByRole(`button`,{name:`Delete invoice`})),await M(z).toHaveBeenCalledOnce(),await F(()=>M(H().queryByRole(`alertdialog`)).toBeNull())}},Z={render:()=>(0,j.jsx)(ae,{variant:`danger`,actionPlacement:`end`,style:{maxInlineSize:640},title:`Delete workspace`,description:`Deletes every ledger, invoice and member in northwind.`,action:(0,j.jsx)(v,{trigger:(0,j.jsx)(a,{...L(`delete`),children:`Delete workspace`}),title:`Delete the “northwind” workspace?`,description:`Every ledger, invoice and member goes with it. This cannot be undone.`,confirmLabel:`Delete workspace`,confirmText:`northwind`,onConfirm:z})}),play:async({canvas:e})=>{await P.click(e.getByRole(`button`,{name:`Delete workspace`}));let t=await H().findByRole(`alertdialog`),n=I(t).getByRole(`button`,{name:`Delete workspace`});await M(n).toBeDisabled();let r=I(t).getByRole(`textbox`);await F(()=>M(r).toHaveFocus()),await P.type(r,`northwind`),await M(n).toBeEnabled(),await P.keyboard(`{Escape}`),await F(()=>M(H().queryByRole(`alertdialog`)).toBeNull())}},Q=[`Reference`,`FormFooter`,`Narrow`,`ListHeader`,`RecordHeader`,`ArchiveWithUndo`,`DeleteWithConfirm`,`TypeToConfirm`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const table = canvas.getByRole('table', {
      name: 'Common actions'
    });
    const names = within(table).getAllByRole('rowheader').map(cell => cell.textContent);
    await expect(names).toEqual(Object.values(commonActions).map(a => a.label));
    const save = within(table).getByRole('rowheader', {
      name: 'Save'
    }).closest('tr')!;
    await expect(save.querySelectorAll('kbd kbd')).toHaveLength(2);
    const del = within(table).getByRole('rowheader', {
      name: 'Delete'
    }).closest('tr')!;
    await expect(within(del).getByText('Confirm Dialog')).toBeVisible();
  }
}`,...U.parameters?.docs?.source},description:{story:`Every common action: its label, what it is for, where it goes, its button, how much it asks first and its shortcut.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <EditForm />,
  play: async ({
    canvas
  }) => {
    onSave.mockClear();
    const [cancel, save] = within(canvas.getByRole('form', {
      name: 'Edit invoice'
    })).getAllByRole('button');
    // Enter in a field presses the submit button.
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Reference'
    }), '{Enter}');
    await expect(onSave).toHaveBeenCalledOnce();
    onSave.mockClear();
    await expect(cancel).toHaveAccessibleName('Cancel');
    await expect(save).toHaveAccessibleName('Save');
    await expect(save).toHaveAttribute('type', 'submit');
    await waitFor(() => expect(save.getBoundingClientRect().left).toBeGreaterThan(cancel.getBoundingClientRect().right));
    await userEvent.click(save);
    await expect(onSave).toHaveBeenCalledOnce();
  }
}`,...W.parameters?.docs?.source},description:{story:`Cancel then Save, at the end of the form. Save is the submit button, so Enter in a field saves.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="frame" style={{
    inlineSize: 288
  }}>
      <EditForm save="Save and send to the approver" cancel="Discard my changes" />
    </div>,
  play: async ({
    canvas
  }) => {
    const frame = canvas.getByTestId('frame');
    const save = canvas.getByRole('button', {
      name: 'Save and send to the approver'
    });
    await waitFor(() => {
      expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
      expect(save.getBoundingClientRect().right).toBeLessThanOrEqual(frame.getBoundingClientRect().right + 1);
    });
  }
}`,...G.parameters?.docs?.source},description:{story:`Long labels in a phone-width column: the buttons wrap instead of overflowing, and Save stays last.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <CardHeading title="Invoices" description="Everything billed this year." actions={<>
          <Button {...look('import')}>
            Import
          </Button>
          <Button {...look('export')}>
            Export
          </Button>
          <Button {...look('create')} startIcon={<Icon name="plus" />}>
            Create invoice
          </Button>
        </>} />,
  play: async ({
    canvas
  }) => {
    const names = canvas.getAllByRole('button').map(b => b.textContent);
    await expect(names).toEqual(['Import', 'Export', 'Create invoice']);
  }
}`,...K.parameters?.docs?.source},description:{story:`Import and Export before Create, at the end of a list's header. Create is the page's one primary button.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: record,
  play: async ({
    canvas
  }) => {
    const [edit, more] = canvas.getAllByRole('button');
    await expect(edit).toHaveAccessibleName('Edit');
    await expect(more).toHaveAccessibleName('More actions');
    await userEvent.click(more);
    const items = await body().findAllByRole('menuitem');
    await expect(items.map(i => i.textContent)).toEqual(['Duplicate', 'Archive', 'Delete']);
    await expect(body().getByRole('separator')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...J.parameters?.docs?.source},description:{story:`Edit beside the record's title; Duplicate, Archive and, after a separator, Delete in the overflow menu.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: record,
  play: async ({
    canvas
  }) => {
    onUndo.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    await userEvent.click(await body().findByRole('menuitem', {
      name: 'Archive'
    }));
    await waitFor(() => expect(body().getByText('Invoice INV-0042 archived')).toBeVisible());
    await expect(body().queryByRole('alertdialog')).toBeNull();
    await userEvent.click(await body().findByRole('button', {
      name: 'Undo'
    }));
    await expect(onUndo).toHaveBeenCalledOnce();
  }
}`,...Y.parameters?.docs?.source},description:{story:`Archive runs at once and offers Undo in a toast: it is easy to reverse, so a dialog would only slow it down.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: record,
  play: async ({
    canvas
  }) => {
    onDelete.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    await userEvent.click(await body().findByRole('menuitem', {
      name: 'Delete'
    }));
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete invoice INV-0042?'
    });
    await waitFor(() => expect(within(dialog).getByRole('button', {
      name: 'Cancel'
    })).toHaveFocus());
    await expect(onDelete).not.toHaveBeenCalled();
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Delete invoice'
    }));
    await expect(onDelete).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...X.parameters?.docs?.source},description:{story:`Delete asks first in a Confirm Dialog, with Cancel focused, so Enter cannot delete.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ActionPanel variant="danger" actionPlacement="end" style={{
    maxInlineSize: 640
  }} title="Delete workspace" description="Deletes every ledger, invoice and member in northwind." action={<ConfirmDialog trigger={<Button {...look('delete')}>Delete workspace</Button>} title="Delete the “northwind” workspace?" description="Every ledger, invoice and member goes with it. This cannot be undone." confirmLabel="Delete workspace" confirmText="northwind" onConfirm={onDelete} />} />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete workspace'
    }));
    const dialog = await body().findByRole('alertdialog');
    const confirm = within(dialog).getByRole('button', {
      name: 'Delete workspace'
    });
    await expect(confirm).toBeDisabled();
    // With a phrase to type, the field has focus, not Cancel.
    const field = within(dialog).getByRole('textbox');
    await waitFor(() => expect(field).toHaveFocus());
    await userEvent.type(field, 'northwind');
    await expect(confirm).toBeEnabled();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...Z.parameters?.docs?.source},description:{story:`A delete that cannot be restored and takes other records with it: a danger Action Panel, and the name typed to confirm.`,...Z.parameters?.docs?.description}}}})))()}export{K as a,U as c,W as i,Z as l,ce as n,G as o,X as r,J as s,Y as t,$ as u};