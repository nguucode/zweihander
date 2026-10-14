import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./icon-C8IlC69p.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{n as u,r as d}from"./Tag-CzYLnh8P.js";import{n as f,t as p}from"./EmptyState-BMAVUddr.js";import{n as m,t as h}from"./Table-CR1K0HHC.js";var g=t({Anatomy:()=>U,Compact:()=>P,ControlledExpansion:()=>V,ControlledSort:()=>I,Default:()=>A,DontNoRowHeader:()=>X,DontNumbersAtStart:()=>Y,Empty:()=>F,EmptyValuesSortLast:()=>N,ExpandableRows:()=>B,Paged:()=>M,Selectable:()=>j,StateEnabled:()=>G,StateExpanded:()=>J,StateSelected:()=>q,StateSorted:()=>K,StickyHeader:()=>L,__namedExportsOrder:()=>Z,anatomyParts:()=>H,default:()=>O});function _(e){let[t,n]=(0,v.useState)(0);return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,y.jsx)(h,{columns:D,rows:w.slice(t*2,t*2+2),getRowId:e=>e.id,caption:`Projects, page ${t+1} of 2`,isSelectable:!0,onSelectionChange:e.onSelectionChange}),(0,y.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n(1-t),children:t===0?`Next page`:`Previous page`})]})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{v=n(),c(),o(),d(),i(),f(),m(),y=r(),{expect:b,fn:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w=[{id:`p1`,name:`Atlas`,owner:`Sam Rivera`,status:`Active`,files:214,updated:new Date(`2026-09-20`)},{id:`p2`,name:`Billing revamp`,owner:`Mia Chen`,status:`Paused`,files:38,updated:new Date(`2026-08-02`)},{id:`p3`,name:`Onboarding`,owner:`Leo Park`,status:`Active`,files:1203,updated:new Date(`2026-09-25`)},{id:`p4`,name:`Design tokens`,owner:`Ava Stone`,status:`Archived`,files:9,updated:new Date(`2025-12-11`)}],T=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),E={Active:`success`,Paused:`warning`,Archived:`info`},D=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,y.jsx)(u,{size:`sm`,variant:E[e.status],text:e.status})},{key:`files`,header:`Files`,sortable:!0,align:`end`,cell:e=>e.files.toLocaleString(`en`)},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>T.format(e.updated)}],O={title:`Components/Data Display/Table`,tags:[`beta`],component:h,args:{columns:D,rows:w,getRowId:e=>e.id,caption:`Projects`,onSortChange:x(),onSelectionChange:x(),onExpandedChange:x()},argTypes:{columns:{description:"The columns, in order: `{ key, header, cell?, sortable?, sortValue?, align?, width?, isRowHeader? }`. See TableColumn below the table.",control:!1,table:{type:{summary:`TableColumn<Row>[]`}}},rows:{description:`The records, one per row. Pass one page at a time when paging.`,control:!1,table:{type:{summary:`Row[]`}}},caption:{description:"Names the table for assistive tech. Visually hidden unless `showCaption`.",control:`text`,table:{type:{summary:`ReactNode`}}},showCaption:{description:`Shows the caption above the table.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},getRowId:{description:"A stable id per row. Needed for selection and expansion that survive sorting and paging; defaults to the row's index in `rows`.",control:!1,table:{type:{summary:`(row: Row, index: number) => string`},defaultValue:{summary:`the index`}}},sort:{description:`Controlled sort. When set, the table shows the rows as given: sort them yourself, e.g. on the server.`,control:!1,table:{type:{summary:`{ key: string; direction: 'ascending' | 'descending' } | null`}}},defaultSort:{description:`The starting sort when uncontrolled. The table sorts its own copy of the rows.`,control:!1,table:{type:{summary:`{ key: string; direction: 'ascending' | 'descending' } | null`},defaultValue:{summary:`null`}}},onSortChange:{description:"Called with the new sort, or `null` when a third click turns it off.",control:!1,table:{type:{summary:`(sort: TableSort | null) => void`}}},isSelectable:{description:`Adds a checkbox column, with a header checkbox that selects every row shown.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},selectedIds:{description:"Controlled selection: ids from `getRowId`.",control:!1,table:{type:{summary:`string[]`}}},defaultSelectedIds:{description:`The starting selection when uncontrolled.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},onSelectionChange:{description:`Called with every selected id. Ids selected on other pages are kept when the header checkbox changes this page's rows.`,control:!1,table:{type:{summary:`(ids: string[]) => void`}}},expandedContent:{description:"Content shown under a row when it is open, across the full width. Adds an expand button to each row that returns content; a row that returns `null`, `undefined` or `false` gets none. Runs for every row on each render, so keep it cheap.",control:!1,table:{type:{summary:`(row: Row) => ReactNode`}}},expandedIds:{description:"Controlled expansion: ids from `getRowId`, so sorting keeps the right rows open.",control:!1,table:{type:{summary:`string[]`}}},defaultExpandedIds:{description:`The rows open at first when uncontrolled.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},onExpandedChange:{description:`Called with every open id when an expand button is pressed.`,control:!1,table:{type:{summary:`(ids: string[]) => void`}}},density:{description:"Row height: 40px (`sm`) or 48px (`md`).",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},hasStickyHeader:{description:`Keeps the header row in view while the table scrolls inside its container, when something limits the container's height.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},emptyState:{description:`Shown in place of the rows when there are none, e.g. an Empty State.`,control:!1,table:{type:{summary:`ReactNode`}}},className:{description:`Added to the scroll container around the table.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},k=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),A={play:async({args:e,canvas:t})=>{let n=t.getByRole(`table`,{name:`Projects`});await b(C(n).getAllByRole(`row`)).toHaveLength(5),await b(k(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]);let r=t.getByRole(`columnheader`,{name:/Files/});await b(r).toHaveAttribute(`aria-sort`,`none`),await S.click(C(r).getByRole(`button`)),await b(r).toHaveAttribute(`aria-sort`,`ascending`),await b(e.onSortChange).toHaveBeenLastCalledWith({key:`files`,direction:`ascending`}),await b(k(t)).toEqual([`Design tokens`,`Billing revamp`,`Atlas`,`Onboarding`]),await S.click(C(r).getByRole(`button`)),await b(r).toHaveAttribute(`aria-sort`,`descending`),await b(k(t)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`]),await S.click(C(r).getByRole(`button`)),await b(r).toHaveAttribute(`aria-sort`,`none`),await b(k(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]),await S.click(C(t.getByRole(`columnheader`,{name:/Updated/})).getByRole(`button`)),await b(k(t)[0]).toBe(`Design tokens`)}},j={args:{isSelectable:!0,defaultSelectedIds:[`p2`]},play:async({args:e,canvas:t})=>{let n=t.getByRole(`checkbox`,{name:`Select all rows`});await b(n).toHaveAttribute(`aria-checked`,`mixed`),await b(t.getByRole(`checkbox`,{name:`Select Billing revamp`}).closest(`tr`)).toHaveAttribute(`aria-selected`,`true`),await S.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await b(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`]),await S.click(n),await b(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`,`p3`,`p4`]),await b(n).toHaveAttribute(`aria-checked`,`true`),await S.click(n),await b(e.onSelectionChange).toHaveBeenLastCalledWith([])}},M={render:e=>(0,y.jsx)(_,{onSelectionChange:e.onSelectionChange}),play:async({args:e,canvas:t})=>{await S.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await S.click(t.getByRole(`button`,{name:`Next page`}));let n=t.getByRole(`checkbox`,{name:`Select all rows`});await S.click(n),await b(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`,`p3`,`p4`]),await S.click(n),await b(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`])}},N={args:{rows:[...w,{id:`p5`,name:`Scratch`,owner:``,status:`Paused`,files:null,updated:new Date(`2026-01-01`)}],columns:D.map(e=>e.key===`files`?{...e,cell:e=>e.files==null?`–`:e.files.toLocaleString(`en`)}:e)},play:async({canvas:e})=>{let t=C(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`);await S.click(t),await b(k(e).at(-1)).toBe(`Scratch`),await S.click(t),await b(k(e)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`,`Scratch`])}},P={args:{density:`sm`,showCaption:!0}},F={args:{rows:[],emptyState:(0,y.jsx)(p,{size:`sm`,headingLevel:3,icon:(0,y.jsx)(s,{name:`search`}),title:`No projects match “zeta”`,action:(0,y.jsx)(a,{size:`sm`,appearance:`outlined`,variant:`accent`,children:`Clear search`})})},play:async({canvas:e})=>{await b(e.getByRole(`heading`,{name:`No projects match “zeta”`})).toBeVisible()}},I={render:function(e){let[t,n]=(0,v.useState)(null),r=t?[...w].sort((e,n)=>e.owner.localeCompare(n.owner)*(t.direction===`ascending`?1:-1)):w;return(0,y.jsx)(h,{...e,rows:r,sort:t,onSortChange:n})},play:async({canvas:e})=>{await S.click(C(e.getByRole(`columnheader`,{name:/Owner/})).getByRole(`button`)),await b(e.getAllByRole(`row`)[1]).toHaveTextContent(`Ava Stone`)}},L={args:{hasStickyHeader:!0,rows:Array.from({length:20},(e,t)=>({...w[t%4],id:`r${t}`,name:`${w[t%4].name} ${t+1}`}))},decorators:[e=>(0,y.jsx)(`div`,{style:{blockSize:`20rem`,display:`grid`},children:e()})]},R=e=>e.status===`Archived`?null:(0,y.jsxs)(`p`,{style:{margin:0},children:[e.owner,` owns `,e.name,`: `,e.files.toLocaleString(`en`),` files, last updated `,T.format(e.updated),`.`]}),z=e=>e.getAllByRole(`row`).slice(1).map(e=>e.textContent??``),B={args:{expandedContent:R,isSelectable:!0},play:async({args:e,canvas:t,step:n})=>{let r=t.getByRole(`button`,{name:`Expand Atlas`});await n(`A row with no content has no button`,async()=>{await b(t.queryByRole(`button`,{name:`Expand Design tokens`})).toBeNull()}),await n(`Click opens and closes, aria-expanded follows`,async()=>{await b(r).toHaveAttribute(`aria-expanded`,`false`),await S.click(r),await b(r).toHaveAttribute(`aria-expanded`,`true`),await b(e.onExpandedChange).toHaveBeenLastCalledWith([`p1`]);let n=t.getByText(/Sam Rivera owns Atlas/);await b(r).toHaveAttribute(`aria-controls`,n.closest(`td`).id),await b(n.closest(`td`)).toHaveAttribute(`colspan`,String(D.length+2)),await S.click(r),await b(r).toHaveAttribute(`aria-expanded`,`false`),await b(t.queryByText(/Sam Rivera owns Atlas/)).toBeNull()}),await n(`Enter and Space toggle from the keyboard`,async()=>{let e=t.getByRole(`button`,{name:`Expand Billing revamp`});e.focus(),await S.keyboard(`{Enter}`),await b(e).toHaveAttribute(`aria-expanded`,`true`),await S.keyboard(` `),await b(e).toHaveAttribute(`aria-expanded`,`false`),await S.keyboard(`{Enter}`)}),await n(`Sorting keeps the same row open, its content right under it`,async()=>{await S.click(C(t.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`)),await b(k(t)).toEqual([`Design tokens`,`Billing revamp`,`Atlas`,`Onboarding`]);let e=z(t),n=e.findIndex(e=>e.includes(`Billing revamp`)&&!e.includes(`owns`));await b(e[n+1]).toMatch(/Mia Chen owns Billing revamp/),await b(t.getByRole(`button`,{name:`Expand Billing revamp`})).toHaveAttribute(`aria-expanded`,`true`),await b(t.getByRole(`button`,{name:`Expand Atlas`})).toHaveAttribute(`aria-expanded`,`false`)}),await n(`Selecting a row leaves expansion alone`,async()=>{await S.click(t.getByRole(`checkbox`,{name:`Select Billing revamp`})),await S.click(t.getByRole(`checkbox`,{name:`Select all rows`})),await b(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p4`,`p1`,`p3`]),await b(t.getByRole(`button`,{name:`Expand Billing revamp`})).toHaveAttribute(`aria-expanded`,`true`),await b(e.onExpandedChange).toHaveBeenLastCalledWith([`p2`])})}},V={args:{expandedContent:R},render:function(e){let[t,n]=(0,v.useState)([]);return(0,y.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,y.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n(t.includes(`p3`)?[]:[`p3`]),children:t.includes(`p3`)?`Close Onboarding`:`Open Onboarding`}),(0,y.jsx)(h,{...e,expandedIds:t,onExpandedChange:t=>{n(t),e.onExpandedChange?.(t)}})]})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Expand Onboarding`});await S.click(t.getByRole(`button`,{name:`Open Onboarding`})),await b(n).toHaveAttribute(`aria-expanded`,`true`),await b(t.getByText(/Leo Park owns Onboarding/)).toBeVisible(),await S.click(n),await b(e.onExpandedChange).toHaveBeenLastCalledWith([]),await b(n).toHaveAttribute(`aria-expanded`,`false`),await b(t.getByRole(`button`,{name:`Open Onboarding`})).toBeVisible()}},H=[{name:`Caption`,selector:`caption`,description:`Names the table. Visually hidden unless showCaption.`},{name:`Header row`,selector:`thead tr`,description:`Small muted labels on --surface-filled. Stays in view with hasStickyHeader.`},{name:`Sort button`,selector:`th[aria-sort] button`,description:`The whole header label, with an icon for the sort. Only on sortable columns.`},{name:`Select all`,selector:`thead [role="checkbox"]`,description:`With isSelectable. Selects or clears every row shown, and shows mixed when some are selected.`},{name:`Row`,selector:`tbody tr`,description:`48px tall (40px at sm), divided by --border. Tinted when hovered or selected.`},{name:`Row checkbox`,selector:`tbody [role="checkbox"]`,description:`Named after the row header: "Select Atlas".`},{name:`Expand button`,selector:`tbody [aria-expanded]`,description:`With expandedContent: a ghost icon button. The chevron turns down when open.`},{name:`Row header`,selector:`tbody th[scope="row"]`,description:`The column marked isRowHeader, medium weight: the name a row is known by.`},{name:`Expanded row`,selector:`tbody td[colspan]`,description:`One cell spanning every column, under its row, with no rule between them. Holds any layout.`}],U={tags:[`!dev`],args:{showCaption:!0,isSelectable:!0,expandedContent:R,defaultExpandedIds:[`p1`],rows:w.slice(0,3)},play:async({canvasElement:e,canvas:t})=>{let n=await l(e,H);await b(n[7]).toHaveTextContent(`Atlas`),await b(n[8]).toHaveTextContent(/Sam Rivera owns Atlas/),await b(t.getByRole(`columnheader`,{name:`Details`})).toBeInTheDocument()}},W={columns:D.filter(e=>e.key===`name`||e.key===`files`),rows:w.slice(0,2)},G={tags:[`!dev`],args:W},K={tags:[`!dev`],args:{...W,defaultSort:{key:`files`,direction:`ascending`}}},q={tags:[`!dev`],args:{...W,isSelectable:!0,defaultSelectedIds:[`p1`]}},J={tags:[`!dev`],args:{...W,expandedContent:R,defaultExpandedIds:[`p1`]}},Y={tags:[`!dev`],args:{columns:D.map(({align:e,...t})=>t)}},X={tags:[`!dev`],args:{isSelectable:!0,columns:D.map(({isRowHeader:e,...t})=>t)},play:async({canvas:e})=>{await b(e.getByRole(`checkbox`,{name:`Select row 1`})).toBeInTheDocument(),await b(e.queryByRole(`rowheader`)).toBeNull(),await S.click(C(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`)),await b(e.getByRole(`checkbox`,{name:`Select row 1`}).closest(`tr`)).toHaveTextContent(`Atlas`),await b(e.getAllByRole(`row`)[3]).toHaveTextContent(`Atlas`)}},Z=[`Default`,`Selectable`,`Paged`,`EmptyValuesSortLast`,`Compact`,`Empty`,`ControlledSort`,`StickyHeader`,`ExpandableRows`,`ControlledExpansion`,`anatomyParts`,`Anatomy`,`StateEnabled`,`StateSorted`,`StateSelected`,`StateExpanded`,`DontNumbersAtStart`,`DontNoRowHeader`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const table = canvas.getByRole('table', {
      name: 'Projects'
    });
    await expect(within(table).getAllByRole('row')).toHaveLength(5);
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens']);
    // Sort: ascending, descending, then back to unsorted. aria-sort follows.
    const files = canvas.getByRole('columnheader', {
      name: /Files/
    });
    await expect(files).toHaveAttribute('aria-sort', 'none');
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'ascending');
    await expect(args.onSortChange).toHaveBeenLastCalledWith({
      key: 'files',
      direction: 'ascending'
    });
    await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding']);
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'descending');
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens']);
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'none');
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens']);
    // Dates sort as dates, text by locale with numbers in order.
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Updated/
    })).getByRole('button'));
    await expect(names(canvas)[0]).toBe('Design tokens');
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    isSelectable: true,
    defaultSelectedIds: ['p2']
  },
  play: async ({
    args,
    canvas
  }) => {
    const all = canvas.getByRole('checkbox', {
      name: 'Select all rows'
    });
    // Some selected: the header box is mixed.
    await expect(all).toHaveAttribute('aria-checked', 'mixed');
    // Each row's box is named by the row header.
    // The row itself reports it, too.
    await expect(canvas.getByRole('checkbox', {
      name: 'Select Billing revamp'
    }).closest('tr')).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Atlas'
    }));
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1']);
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1', 'p3', 'p4']);
    await expect(all).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith([]);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <PagedTable onSelectionChange={args.onSelectionChange!} />,
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Atlas'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next page'
    }));
    const all = canvas.getByRole('checkbox', {
      name: 'Select all rows'
    });
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1', 'p3', 'p4']);
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1']);
  }
}`,...M.parameters?.docs?.source},description:{story:`Selection with getRowId survives paging: "Select all" adds or removes this page's rows only.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [...projects, {
      id: 'p5',
      name: 'Scratch',
      owner: '',
      status: 'Paused',
      files: null as unknown as number,
      updated: new Date('2026-01-01')
    }],
    columns: columns.map(c => c.key === 'files' ? {
      ...c,
      cell: (p: Project) => p.files == null ? '–' : p.files.toLocaleString('en')
    } : c)
  },
  play: async ({
    canvas
  }) => {
    const files = within(canvas.getByRole('columnheader', {
      name: /Files/
    })).getByRole('button');
    await userEvent.click(files);
    await expect(names(canvas).at(-1)).toBe('Scratch');
    await userEvent.click(files);
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens', 'Scratch']);
  }
}`,...N.parameters?.docs?.source},description:{story:`Rows with no value sort last in both directions.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'sm',
    showCaption: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyState: <EmptyState size="sm" headingLevel={3} icon={<Icon name="search" />} title="No projects match “zeta”" action={<Button size="sm" appearance="outlined" variant="accent">Clear search</Button>} />
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      name: 'No projects match “zeta”'
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [sort, setSort] = useState<{
      key: string;
      direction: 'ascending' | 'descending';
    } | null>(null);
    const rows = sort ? [...projects].sort((a, b) => a.owner.localeCompare(b.owner) * (sort.direction === 'ascending' ? 1 : -1)) : projects;
    return <Table {...args} rows={rows} sort={sort} onSortChange={setSort} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Owner/
    })).getByRole('button'));
    await expect(canvas.getAllByRole('row')[1]).toHaveTextContent('Ava Stone');
  }
}`,...I.parameters?.docs?.source},description:{story:`Sorted by the caller (e.g. a server): the table reports the sort and shows the rows as given.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    hasStickyHeader: true,
    rows: Array.from({
      length: 20
    }, (_, i) => ({
      ...projects[i % 4],
      id: \`r\${i}\`,
      name: \`\${projects[i % 4].name} \${i + 1}\`
    }))
  },
  decorators: [Story => <div style={{
    blockSize: '20rem',
    display: 'grid'
  }}>{Story()}</div>]
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    expandedContent: details,
    isSelectable: true
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    const atlas = canvas.getByRole('button', {
      name: 'Expand Atlas'
    });
    await step('A row with no content has no button', async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Expand Design tokens'
      })).toBeNull();
    });
    await step('Click opens and closes, aria-expanded follows', async () => {
      await expect(atlas).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(atlas);
      await expect(atlas).toHaveAttribute('aria-expanded', 'true');
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p1']);
      const content = canvas.getByText(/Sam Rivera owns Atlas/);
      await expect(atlas).toHaveAttribute('aria-controls', content.closest('td')!.id);
      // The content spans the whole row, checkbox and button columns included.
      await expect(content.closest('td')).toHaveAttribute('colspan', String(columns.length + 2));
      await userEvent.click(atlas);
      await expect(atlas).toHaveAttribute('aria-expanded', 'false');
      await expect(canvas.queryByText(/Sam Rivera owns Atlas/)).toBeNull();
    });
    await step('Enter and Space toggle from the keyboard', async () => {
      const billing = canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      });
      billing.focus();
      await userEvent.keyboard('{Enter}');
      await expect(billing).toHaveAttribute('aria-expanded', 'true');
      await userEvent.keyboard(' ');
      await expect(billing).toHaveAttribute('aria-expanded', 'false');
      await userEvent.keyboard('{Enter}');
    });
    await step('Sorting keeps the same row open, its content right under it', async () => {
      await userEvent.click(within(canvas.getByRole('columnheader', {
        name: /Files/
      })).getByRole('button'));
      await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding']);
      const texts = rowTexts(canvas);
      const at = texts.findIndex(t => t.includes('Billing revamp') && !t.includes('owns'));
      await expect(texts[at + 1]).toMatch(/Mia Chen owns Billing revamp/);
      await expect(canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      })).toHaveAttribute('aria-expanded', 'true');
      await expect(canvas.getByRole('button', {
        name: 'Expand Atlas'
      })).toHaveAttribute('aria-expanded', 'false');
    });
    await step('Selecting a row leaves expansion alone', async () => {
      await userEvent.click(canvas.getByRole('checkbox', {
        name: 'Select Billing revamp'
      }));
      await userEvent.click(canvas.getByRole('checkbox', {
        name: 'Select all rows'
      }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p4', 'p1', 'p3']);
      await expect(canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      })).toHaveAttribute('aria-expanded', 'true');
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p2']);
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    expandedContent: details
  },
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([]);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'start'
    }}>
        <Button variant="secondary" appearance="outlined" size="sm" onClick={() => setOpen(open.includes('p3') ? [] : ['p3'])}>
          {open.includes('p3') ? 'Close Onboarding' : 'Open Onboarding'}
        </Button>
        <Table {...args} expandedIds={open} onExpandedChange={ids => {
        setOpen(ids);
        args.onExpandedChange?.(ids);
      }} />
      </div>;
  },
  play: async ({
    args,
    canvas
  }) => {
    const onboarding = canvas.getByRole('button', {
      name: 'Expand Onboarding'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open Onboarding'
    }));
    await expect(onboarding).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(/Leo Park owns Onboarding/)).toBeVisible();
    // The row's own button reports back; the caller decides.
    await userEvent.click(onboarding);
    await expect(args.onExpandedChange).toHaveBeenLastCalledWith([]);
    await expect(onboarding).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByRole('button', {
      name: 'Open Onboarding'
    })).toBeVisible();
  }
}`,...V.parameters?.docs?.source},description:{story:"Opened from outside the table: `expandedIds` is the source of truth.",...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    showCaption: true,
    isSelectable: true,
    expandedContent: details,
    defaultExpandedIds: ['p1'],
    rows: projects.slice(0, 3)
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[7]).toHaveTextContent('Atlas');
    await expect(found[8]).toHaveTextContent(/Sam Rivera owns Atlas/);
    // The expand column is announced like the others, by a hidden header.
    await expect(canvas.getByRole('columnheader', {
      name: 'Details'
    })).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source},description:{story:`Every part present: caption shown, a sortable column, selection, one row open.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: brief
}`,...G.parameters?.docs?.source},description:{story:`Specs, States: the plain table.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    defaultSort: {
      key: 'files',
      direction: 'ascending'
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Specs, States: sorted by Files, ascending.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    isSelectable: true,
    defaultSelectedIds: ['p1']
  }
}`,...q.parameters?.docs?.source},description:{story:`Specs, States: Atlas selected.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    expandedContent: details,
    defaultExpandedIds: ['p1']
  }
}`,...J.parameters?.docs?.source},description:{story:`Specs, States: Atlas open.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    columns: columns.map(({
      align: _align,
      ...c
    }) => c)
  }
}`,...Y.parameters?.docs?.source},description:{story:`Guidelines, Don't: numbers at the start, so the digits do not line up.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isSelectable: true,
    columns: columns.map(({
      isRowHeader: _isRowHeader,
      ...c
    }) => c)
  },
  play: async ({
    canvas
  }) => {
    // Counted from \`rows\`, so a sort does not rename it; but "row 1" says nothing.
    await expect(canvas.getByRole('checkbox', {
      name: 'Select row 1'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('rowheader')).toBeNull();
    // Sorted by Files, Atlas moves to the third row and keeps its name.
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Files/
    })).getByRole('button'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Select row 1'
    }).closest('tr')).toHaveTextContent('Atlas');
    await expect(canvas.getAllByRole('row')[3]).toHaveTextContent('Atlas');
  }
}`,...X.parameters?.docs?.source},description:{story:`Guidelines, Don't: no row header, so a row's checkbox can only say which number it is.`,...X.parameters?.docs?.description}}}})))()}export{L as _,A as a,Q as b,F as c,M as d,j as f,K as g,q as h,I as i,N as l,J as m,P as n,X as o,G as p,V as r,Y as s,U as t,B as u,g as v,H as y};