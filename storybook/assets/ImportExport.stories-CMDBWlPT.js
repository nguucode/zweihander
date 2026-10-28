import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,r as o,t as s}from"./Toast-Rp8LWS30.js";import{a as c,i as l,n as u,o as d,t as f}from"./ImportExport-DW9VLdLp.js";var p=t({Csv:()=>R,Dark:()=>z,Default:()=>M,Errors:()=>P,Export:()=>L,LongFile:()=>F,MapColumns:()=>N,__namedExportsOrder:()=>B,default:()=>j});function m(e){let t=o();return(0,h.jsx)(f,{...I,trigger:(0,h.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Export`}),...e,onExport:e=>{A(e),t.add({title:`Your export is ready`,description:`projects.${e.format}`,variant:`success`,action:{label:`Download`,onClick:()=>{}}})}})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{r(),a(),l(),h=n(),{expect:g,fireEvent:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=()=>x(document.body),C=[`Active`,`On hold`,`Inactive`],w=[{key:`name`,label:`Name`,isRequired:!0,aliases:[`Project`,`Project name`]},{key:`status`,label:`Status`},{key:`pm`,label:`PM`,aliases:[`Project manager`]},{key:`estimation`,label:`Estimation`,aliases:[`Budget`]}],T=e=>{let t={};return e.status&&!C.includes(e.status)&&(t.status=`“${e.status}” is not a status.`),e.estimation&&!/^\d+(\.\d+)?$/.test(e.estimation.replace(/,/g,``))&&(t.estimation=`Estimation is not a number.`),t},E=e=>new File([d(e)],`projects.csv`,{type:`text/csv`}),D=E([[`Project`,`Status`,`Project manager`,`Budget`,`Notes`],[`Harbor Lights`,`Active`,`Noor Haddad`,`120000`,`Phase two`],[`Foxglove Pricing`,`Paused`,`Mei Takahara`,`45,000`,``],[``,`Active`,`Ines Okafor`,`8000`,`No name`],[`Tidewater Export`,`On hold`,``,`about 30k`,``],[`Juniper Rollout`,`Inactive`,`Rafael Duarte`,`64000`,``]]),O=e=>{let t=document.querySelector(`input[type=file]`),n=new DataTransfer;n.items.add(e),t.files=n.files,_.change(t)},k=v(),A=v(),j={title:`Patterns/Application UI/Import Export`,tags:[`experimental`],component:u,parameters:{layout:`padded`},args:{fields:w,validate:T,onImport:k,noun:[`project`,`projects`],title:`Import projects`,templateHref:`data:text/csv;charset=utf-8,Name%2CStatus%2CPM%2CEstimation%0D%0A`},argTypes:{trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1},fields:{description:"The fields a column can go into, in the order they are offered: `key`, `label`, `isRequired`, and `aliases`, other headings that map to it on their own. A heading that matches a key, label or alias is mapped for you.",control:!1},onImport:{description:`Imports the rows without problems, each by field key and trimmed. Return a promise to keep Import busy; a thrown error stays on the review step with its message.`,control:!1},validate:{description:`Problems with one row, by field key; each shows in the Problems column and skips the row. Required fields left empty are flagged without it.`,control:!1},readFile:{description:"Reads the chosen file into `{ columns, rows }`. Defaults to reading it as CSV text (`parseCsv`); pass your own for Excel, with your spreadsheet library.",control:!1},accept:{description:"File types, as the native attribute. Widen it with `readFile`.",control:`text`,table:{defaultValue:{summary:`".csv"`}}},maxSize:{description:`The largest file, in bytes. A larger one is refused by the File Uploader.`,control:`number`},helperText:{description:`Inside the drop zone, under its button.`,control:`text`,table:{defaultValue:{summary:`"A CSV file with a heading row."`}}},templateHref:{description:`A blank file with the right headings, linked from the upload step.`,control:`text`},noun:{description:`What a row is, singular and plural: "Import 4 projects", "4 projects imported".`,control:!1,table:{defaultValue:{summary:`["row", "rows"]`}}},title:{description:`The dialog's title.`,control:`text`,table:{defaultValue:{summary:`"Import"`}}},open:{description:`Controlled open state. Every opening starts at the upload step.`,control:!1},defaultOpen:{description:`Open on first render.`,table:{defaultValue:{summary:`false`}}},onOpenChange:{description:`Called when the dialog opens or closes.`,control:!1},container:{description:"Where the dialog renders instead of `<body>`.",control:!1}}},M={render:e=>(0,h.jsx)(u,{...e,trigger:(0,h.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Import`})}),play:async({canvas:e})=>{k.mockClear(),await y.click(e.getByRole(`button`,{name:`Import`}));let t=await S().findByRole(`dialog`,{name:`Import projects`}),n=x(t);await b(()=>g(n.getByRole(`navigation`,{name:`Import steps`})).toBeVisible()),await g(n.getByRole(`link`,{name:`Download a template`})).toHaveAttribute(`download`);let r=n.getByRole(`button`,{name:`Next`});await g(r).toBeDisabled(),O(D),await b(()=>g(r).toBeEnabled()),await y.click(r),await b(()=>g(n.getByRole(`table`,{name:`Columns to map`})).toBeVisible()),await g(n.getByRole(`combobox`,{name:`Field for Project`})).toHaveTextContent(`Name (required)`),await g(n.getByRole(`combobox`,{name:`Field for Budget`})).toHaveTextContent(`Estimation`),await g(n.getByRole(`combobox`,{name:`Field for Notes`})).toHaveTextContent(`Do not import`),await y.click(n.getByRole(`button`,{name:`Next`}));let i=await n.findByRole(`table`,{name:`Rows to import`});await g(x(i).getAllByRole(`row`)).toHaveLength(6),await g(n.getByText(/3 projects have problems/)).toBeVisible();let a=x(i).getByRole(`rowheader`,{name:`3`}).closest(`tr`);await g(a).toHaveTextContent(`“Paused” is not a status.`),await g(x(i).getByRole(`rowheader`,{name:`4`}).closest(`tr`)).toHaveTextContent(`Name is empty.`),await y.click(n.getByRole(`switch`,{name:`Only rows with problems`})),await b(()=>g(x(i).getAllByRole(`row`)).toHaveLength(4)),await y.click(n.getByRole(`button`,{name:`Import 2 projects`})),await g(k).toHaveBeenCalledWith([{name:`Harbor Lights`,status:`Active`,pm:`Noor Haddad`,estimation:`120000`},{name:`Juniper Rollout`,status:`Inactive`,pm:`Rafael Duarte`,estimation:`64000`}]),await g(await n.findByRole(`heading`,{name:`2 projects imported`})).toBeVisible(),await g(n.getByText(`3 projects skipped for problems.`)).toBeVisible(),await g(n.getByRole(`button`,{name:`Download skipped rows`})).toBeVisible(),await g(n.queryByRole(`navigation`,{name:`Import steps`})).toBeNull(),await y.click(n.getByRole(`button`,{name:`Done`})),await b(()=>g(S().queryByRole(`dialog`)).toBeNull()),await y.click(e.getByRole(`button`,{name:`Import`}));let o=await S().findByRole(`dialog`,{name:`Import projects`});await g(x(o).getByRole(`button`,{name:`Next`})).toBeDisabled(),await y.keyboard(`{Escape}`),await b(()=>g(S().queryByRole(`dialog`)).toBeNull())}},N={args:{defaultOpen:!0},play:async()=>{let e=x(await S().findByRole(`dialog`,{name:`Import projects`}));O(E([[`Title`,`State`],[`Harbor Lights`,`Active`]])),await y.click(e.getByRole(`button`,{name:`Next`})),await g(await e.findByText(`Choose a column for Name.`)).toBeVisible();let t=e.getByRole(`button`,{name:`Next`});await g(t).toBeDisabled();let n=async(t,n)=>{await y.click(e.getByRole(`combobox`,{name:t})),await y.click(await S().findByRole(`option`,{name:n})),await b(()=>g(S().queryByRole(`listbox`)).toBeNull())};await n(`Field for Title`,`Name (required)`),await b(()=>g(t).toBeEnabled()),await n(`Field for State`,`Name (required)`),await b(()=>g(e.getByRole(`combobox`,{name:`Field for Title`})).toHaveTextContent(`Do not import`)),await g(e.getByRole(`combobox`,{name:`Field for State`})).toHaveTextContent(`Name (required)`)}},P={args:{defaultOpen:!0,onImport:async()=>{throw Error(`The server is busy. Nothing was imported; try again in a minute.`)}},play:async()=>{let e=x(await S().findByRole(`dialog`,{name:`Import projects`}));O(E([[`Project`]])),await y.click(e.getByRole(`button`,{name:`Next`})),await g(await e.findByRole(`alert`)).toHaveTextContent(`projects.csv has no rows under its heading row.`),O(E([[`Project`],[`Harbor Lights`]])),await y.click(e.getByRole(`button`,{name:`Next`})),await e.findByRole(`table`,{name:`Columns to map`}),await y.click(e.getByRole(`button`,{name:`Next`})),await g(await e.findByText(`The project is ready to import.`)).toBeVisible(),await y.click(e.getByRole(`button`,{name:`Import 1 project`})),await g(await e.findByRole(`alert`)).toHaveTextContent(`The server is busy.`),await g(e.getByRole(`table`,{name:`Rows to import`})).toBeVisible()}},F={args:{defaultOpen:!0},play:async()=>{let e=await S().findByRole(`dialog`,{name:`Import projects`}),t=x(e);O(E([[`Project`,`Project manager`],...Array.from({length:140},(e,t)=>[`Quarterly_reconciliation_for_the_northern_region_${t+1}`,`Maximiliana Wolfeschlegelsteinhausenbergerdorff`])])),await y.click(t.getByRole(`button`,{name:`Next`})),await t.findByRole(`table`,{name:`Columns to map`}),await y.click(t.getByRole(`button`,{name:`Next`}));let n=await b(()=>e.querySelector(`[data-testid="import-preview"]`));await g(t.getByText(`Showing the first 100 of 140 projects.`)).toBeVisible(),await g(x(n).getAllByRole(`row`)).toHaveLength(101),await g(n.scrollHeight).toBeGreaterThan(n.clientHeight),await g(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth),await g(t.getByRole(`button`,{name:`Import 140 projects`})).toBeVisible()}},I={scopes:[{value:`all`,label:`All projects (24)`},{value:`view`,label:`Current view (8)`,helperText:`The filters and search applied now.`},{value:`selected`,label:`Selected projects (0)`,disabled:!0}],defaultScope:`view`,formats:[{value:`csv`,label:`CSV`},{value:`xlsx`,label:`Excel (.xlsx)`}],columns:[{key:`name`,header:`Project name`,isRowHeader:!0},{key:`pm`,header:`PM`},{key:`status`,header:`Status`},{key:`estimation`,header:`Estimation`}],defaultColumnKeys:[`name`,`status`,`estimation`],onExport:A},L={render:e=>(0,h.jsx)(s,{children:(0,h.jsx)(m,{defaultOpen:e.defaultOpen})}),play:async({canvas:e})=>{A.mockClear(),await y.click(e.getByRole(`button`,{name:`Export`}));let t=await S().findByRole(`dialog`,{name:`Export`}),n=x(t);await g(n.getByRole(`radio`,{name:/Current view/})).toBeChecked(),await g(n.getByRole(`radio`,{name:/Selected projects/})).toHaveAttribute(`aria-disabled`,`true`),await b(()=>g(n.getByText(`3 of 4 columns`)).toBeVisible()),await y.click(n.getByRole(`radio`,{name:`Excel (.xlsx)`})),await y.click(n.getByRole(`button`,{name:`Columns`})),await y.click(await S().findByRole(`checkbox`,{name:`PM`})),await b(()=>g(n.getByText(`4 of 4 columns`)).toBeVisible()),await y.keyboard(`{Escape}`),await y.click(n.getByRole(`button`,{name:`Export`})),await g(A).toHaveBeenCalledWith({format:`xlsx`,scope:`view`,columns:[`name`,`pm`,`status`,`estimation`]}),await b(()=>g(S().queryByRole(`dialog`,{name:`Export`})).toBeNull()),await g(await S().findByText(`Your export is ready`,{},{timeout:3e3})).toBeInTheDocument()}},R={tags:[`!dev`,`!autodocs`],render:()=>(0,h.jsx)(`p`,{children:`parseCsv and toCsv`}),play:async()=>{let e=[[`Name`,`Note`],[`Harbor, "Lights"`,`two\r
lines`],[`-12.5`,`=HYPERLINK("x")`]];await g(c(d(e))).toEqual([e[0],e[1],[`-12.5`,`'=HYPERLINK("x")`]]),await g(c(`﻿a,b

1,2
`)).toEqual([[`a`,`b`],[``],[`1`,`2`]]),await g(c(`a,"b
c"\r
`)).toEqual([[`a`,`b
c`]])}},z={...L,args:{defaultOpen:!0},play:void 0,globals:{theme:`dark`}},B=[`Default`,`MapColumns`,`Errors`,`LongFile`,`Export`,`Csv`,`Dark`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <ImportDialog {...args} trigger={<Button variant="secondary" appearance="outlined">Import</Button>} />,
  play: async ({
    canvas
  }) => {
    onImport.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Import projects'
    });
    const d = within(dialog);
    // Step 1: a file, then Next.
    await waitFor(() => expect(d.getByRole('navigation', {
      name: 'Import steps'
    })).toBeVisible());
    await expect(d.getByRole('link', {
      name: 'Download a template'
    })).toHaveAttribute('download');
    const next = d.getByRole('button', {
      name: 'Next'
    });
    await expect(next).toBeDisabled();
    pick(goodAndBad);
    await waitFor(() => expect(next).toBeEnabled());
    await userEvent.click(next);
    // Step 2: each heading went to its field; Notes matched none.
    await waitFor(() => expect(d.getByRole('table', {
      name: 'Columns to map'
    })).toBeVisible());
    await expect(d.getByRole('combobox', {
      name: 'Field for Project'
    })).toHaveTextContent('Name (required)');
    await expect(d.getByRole('combobox', {
      name: 'Field for Budget'
    })).toHaveTextContent('Estimation');
    await expect(d.getByRole('combobox', {
      name: 'Field for Notes'
    })).toHaveTextContent('Do not import');
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    // Step 3: every row, its problems beside it.
    const table = await d.findByRole('table', {
      name: 'Rows to import'
    });
    await expect(within(table).getAllByRole('row')).toHaveLength(6);
    await expect(d.getByText(/3 projects have problems/)).toBeVisible();
    const foxglove = within(table).getByRole('rowheader', {
      name: '3'
    }).closest('tr')!;
    await expect(foxglove).toHaveTextContent('“Paused” is not a status.');
    await expect(within(table).getByRole('rowheader', {
      name: '4'
    }).closest('tr')).toHaveTextContent('Name is empty.');
    // Only the rows with problems.
    await userEvent.click(d.getByRole('switch', {
      name: 'Only rows with problems'
    }));
    await waitFor(() => expect(within(table).getAllByRole('row')).toHaveLength(4));
    // Import the two good ones.
    await userEvent.click(d.getByRole('button', {
      name: 'Import 2 projects'
    }));
    await expect(onImport).toHaveBeenCalledWith([{
      name: 'Harbor Lights',
      status: 'Active',
      pm: 'Noor Haddad',
      estimation: '120000'
    }, {
      name: 'Juniper Rollout',
      status: 'Inactive',
      pm: 'Rafael Duarte',
      estimation: '64000'
    }]);
    await expect(await d.findByRole('heading', {
      name: '2 projects imported'
    })).toBeVisible();
    await expect(d.getByText('3 projects skipped for problems.')).toBeVisible();
    await expect(d.getByRole('button', {
      name: 'Download skipped rows'
    })).toBeVisible();
    await expect(d.queryByRole('navigation', {
      name: 'Import steps'
    })).toBeNull();
    await userEvent.click(d.getByRole('button', {
      name: 'Done'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // Opening again starts over.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import'
    }));
    const again = await body().findByRole('dialog', {
      name: 'Import projects'
    });
    await expect(within(again).getByRole('button', {
      name: 'Next'
    })).toBeDisabled();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...M.parameters?.docs?.source},description:{story:`Upload, map, review, import. The headings match the fields, so the
columns are mapped already; three rows have problems and are skipped.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  play: async () => {
    const d = within(await body().findByRole('dialog', {
      name: 'Import projects'
    }));
    pick(csv([['Title', 'State'], ['Harbor Lights', 'Active']]));
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await expect(await d.findByText('Choose a column for Name.')).toBeVisible();
    const next = d.getByRole('button', {
      name: 'Next'
    });
    await expect(next).toBeDisabled();
    // Each pick waits for its list to finish closing. A closing list is still
    // mounted: the next findByRole('option') can return its option, which no
    // longer takes the pointer, and axe reads a list that the combobox no
    // longer controls as a nameless listbox. WebKit's slower transitions
    // showed both.
    const choose = async (combobox: string, option: string) => {
      await userEvent.click(d.getByRole('combobox', {
        name: combobox
      }));
      await userEvent.click(await body().findByRole('option', {
        name: option
      }));
      await waitFor(() => expect(body().queryByRole('listbox')).toBeNull());
    };
    await choose('Field for Title', 'Name (required)');
    await waitFor(() => expect(next).toBeEnabled());
    // A field takes one column: choosing Name for State frees Title.
    await choose('Field for State', 'Name (required)');
    await waitFor(() => expect(d.getByRole('combobox', {
      name: 'Field for Title'
    })).toHaveTextContent('Do not import'));
    await expect(d.getByRole('combobox', {
      name: 'Field for State'
    })).toHaveTextContent('Name (required)');
  }
}`,...N.parameters?.docs?.source},description:{story:`No heading matches a required field: the step says which, and Next waits until a column is chosen for it.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    onImport: async () => {
      throw new Error('The server is busy. Nothing was imported; try again in a minute.');
    }
  },
  play: async () => {
    const d = within(await body().findByRole('dialog', {
      name: 'Import projects'
    }));
    pick(csv([['Project']]));
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await expect(await d.findByRole('alert')).toHaveTextContent('projects.csv has no rows under its heading row.');
    pick(csv([['Project'], ['Harbor Lights']]));
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await d.findByRole('table', {
      name: 'Columns to map'
    });
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await expect(await d.findByText('The project is ready to import.')).toBeVisible();
    await userEvent.click(d.getByRole('button', {
      name: 'Import 1 project'
    }));
    await expect(await d.findByRole('alert')).toHaveTextContent('The server is busy.');
    await expect(d.getByRole('table', {
      name: 'Rows to import'
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`A file that cannot be read, and an import the server refuses: each says so in place, and nothing is lost.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  play: async () => {
    const dialog = await body().findByRole('dialog', {
      name: 'Import projects'
    });
    const d = within(dialog);
    pick(csv([['Project', 'Project manager'], ...Array.from({
      length: 140
    }, (_, i) => [\`Quarterly_reconciliation_for_the_northern_region_\${i + 1}\`, 'Maximiliana Wolfeschlegelsteinhausenbergerdorff'])]));
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await d.findByRole('table', {
      name: 'Columns to map'
    });
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    const preview = await waitFor(() => dialog.querySelector<HTMLElement>('[data-testid="import-preview"]')!);
    await expect(d.getByText('Showing the first 100 of 140 projects.')).toBeVisible();
    await expect(within(preview).getAllByRole('row')).toHaveLength(101);
    await expect(preview.scrollHeight).toBeGreaterThan(preview.clientHeight);
    // The dialog itself never scrolls sideways.
    await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
    await expect(d.getByRole('button', {
      name: 'Import 140 projects'
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:`Harsh content: a long file with long unbroken values. The review scrolls inside the dialog and stops at 100 rows.`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <ToastProvider>
      <ExportWithToast defaultOpen={args.defaultOpen} />
    </ToastProvider>,
  play: async ({
    canvas
  }) => {
    onExport.mockClear();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Export'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Export'
    });
    const d = within(dialog);
    await expect(d.getByRole('radio', {
      name: /Current view/
    })).toBeChecked();
    await expect(d.getByRole('radio', {
      name: /Selected projects/
    })).toHaveAttribute('aria-disabled', 'true');
    await waitFor(() => expect(d.getByText('3 of 4 columns')).toBeVisible());
    await userEvent.click(d.getByRole('radio', {
      name: 'Excel (.xlsx)'
    }));
    await userEvent.click(d.getByRole('button', {
      name: 'Columns'
    }));
    await userEvent.click(await body().findByRole('checkbox', {
      name: 'PM'
    }));
    await waitFor(() => expect(d.getByText('4 of 4 columns')).toBeVisible());
    await userEvent.keyboard('{Escape}');
    await userEvent.click(d.getByRole('button', {
      name: 'Export'
    }));
    await expect(onExport).toHaveBeenCalledWith({
      format: 'xlsx',
      scope: 'view',
      columns: ['name', 'pm', 'status', 'estimation']
    });
    await waitFor(() => expect(body().queryByRole('dialog', {
      name: 'Export'
    })).toBeNull());
    await expect(await body().findByText('Your export is ready', {}, {
      timeout: 3000
    })).toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source},description:{story:`Which rows, which format, which columns. Export closes the dialog; a
toast says when the file is ready.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <p>parseCsv and toCsv</p>,
  play: async () => {
    const rows = [['Name', 'Note'], ['Harbor, "Lights"', 'two\\r\\nlines'], ['-12.5', '=HYPERLINK("x")']];
    await expect(parseCsv(toCsv(rows))).toEqual([rows[0], rows[1], ['-12.5', \`'=HYPERLINK("x")\`]]);
    // A blank line stays, so the rows keep their numbers; the closing line break adds no row.
    await expect(parseCsv('\\uFEFFa,b\\n\\n1,2\\n')).toEqual([['a', 'b'], [''], ['1', '2']]);
    await expect(parseCsv('a,"b\\nc"\\r\\n')).toEqual([['a', 'b\\nc']]);
  }
}`,...R.parameters?.docs?.source},description:{story:`CSV in and out: quotes, commas and line breaks survive a round trip, and a cell that would run as a formula is defused.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...Export,
  args: {
    defaultOpen: true
  },
  play: undefined,
  globals: {
    theme: 'dark'
  }
}`,...z.parameters?.docs?.source},description:{story:`Dark mode, the export open, so the accessibility check covers both themes.`,...z.parameters?.docs?.description}}}})))()}export{F as a,p as i,P as n,N as o,L as r,V as s,M as t};