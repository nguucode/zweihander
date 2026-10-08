import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./Button-BdtJKtga.js";import{n as o,t as s}from"./icon-Dc4hTclj.js";import{n as c,r as l}from"./Tag-DNTINP1j.js";import{n as u,t as d}from"./EmptyState-YjTMlcHM.js";import{n as f,t as p}from"./Table-CtIhQ4Z8.js";var m=t({Compact:()=>M,ControlledSort:()=>P,Default:()=>O,Empty:()=>N,EmptyValuesSortLast:()=>j,Paged:()=>A,Selectable:()=>k,StickyHeader:()=>F,__namedExportsOrder:()=>I,default:()=>E});function h(e){let[t,n]=(0,g.useState)(0);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,_.jsx)(p,{columns:T,rows:S.slice(t*2,t*2+2),getRowId:e=>e.id,caption:`Projects, page ${t+1} of 2`,isSelectable:!0,onSelectionChange:e.onSelectionChange}),(0,_.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n(1-t),children:t===0?`Next page`:`Previous page`})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{g=r(),o(),l(),i(),u(),f(),_=n(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S=[{id:`p1`,name:`Atlas`,owner:`Sam Rivera`,status:`Active`,files:214,updated:new Date(`2026-09-20`)},{id:`p2`,name:`Billing revamp`,owner:`Mia Chen`,status:`Paused`,files:38,updated:new Date(`2026-08-02`)},{id:`p3`,name:`Onboarding`,owner:`Leo Park`,status:`Active`,files:1203,updated:new Date(`2026-09-25`)},{id:`p4`,name:`Design tokens`,owner:`Ava Stone`,status:`Archived`,files:9,updated:new Date(`2025-12-11`)}],C=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),w={Active:`success`,Paused:`warning`,Archived:`info`},T=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,_.jsx)(c,{size:`sm`,variant:w[e.status],text:e.status})},{key:`files`,header:`Files`,sortable:!0,align:`end`,cell:e=>e.files.toLocaleString(`en`)},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>C.format(e.updated)}],E={title:`Components/Data Display/Table`,component:p,parameters:{a11y:{test:`error`}},args:{columns:T,rows:S,getRowId:e=>e.id,caption:`Projects`,onSortChange:y(),onSelectionChange:y()},argTypes:{density:{control:`inline-radio`,options:[`sm`,`md`]},columns:{control:!1},rows:{control:!1},emptyState:{control:!1}}},D=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),O={play:async({args:e,canvas:t})=>{let n=t.getByRole(`table`,{name:`Projects`});await v(x(n).getAllByRole(`row`)).toHaveLength(5),await v(D(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]);let r=t.getByRole(`columnheader`,{name:/Files/});await v(r).toHaveAttribute(`aria-sort`,`none`),await b.click(x(r).getByRole(`button`)),await v(r).toHaveAttribute(`aria-sort`,`ascending`),await v(e.onSortChange).toHaveBeenLastCalledWith({key:`files`,direction:`ascending`}),await v(D(t)).toEqual([`Design tokens`,`Billing revamp`,`Atlas`,`Onboarding`]),await b.click(x(r).getByRole(`button`)),await v(r).toHaveAttribute(`aria-sort`,`descending`),await v(D(t)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`]),await b.click(x(r).getByRole(`button`)),await v(r).toHaveAttribute(`aria-sort`,`none`),await v(D(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]),await b.click(x(t.getByRole(`columnheader`,{name:/Updated/})).getByRole(`button`)),await v(D(t)[0]).toBe(`Design tokens`)}},k={args:{isSelectable:!0,defaultSelectedIds:[`p2`]},play:async({args:e,canvas:t})=>{let n=t.getByRole(`checkbox`,{name:`Select all rows`});await v(n).toHaveAttribute(`aria-checked`,`mixed`),await b.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await v(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`]),await b.click(n),await v(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`,`p3`,`p4`]),await v(n).toHaveAttribute(`aria-checked`,`true`),await b.click(n),await v(e.onSelectionChange).toHaveBeenLastCalledWith([])}},A={render:e=>(0,_.jsx)(h,{onSelectionChange:e.onSelectionChange}),play:async({args:e,canvas:t})=>{await b.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await b.click(t.getByRole(`button`,{name:`Next page`}));let n=t.getByRole(`checkbox`,{name:`Select all rows`});await b.click(n),await v(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`,`p3`,`p4`]),await b.click(n),await v(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`])}},j={args:{rows:[...S,{id:`p5`,name:`Scratch`,owner:``,status:`Paused`,files:null,updated:new Date(`2026-01-01`)}],columns:T.map(e=>e.key===`files`?{...e,cell:e=>e.files==null?`–`:e.files.toLocaleString(`en`)}:e)},play:async({canvas:e})=>{let t=x(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`);await b.click(t),await v(D(e).at(-1)).toBe(`Scratch`),await b.click(t),await v(D(e)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`,`Scratch`])}},M={args:{density:`sm`,showCaption:!0}},N={args:{rows:[],emptyState:(0,_.jsx)(d,{size:`sm`,headingLevel:3,icon:(0,_.jsx)(s,{name:`search`}),title:`No projects match “zeta”`,action:(0,_.jsx)(a,{size:`sm`,appearance:`outlined`,variant:`accent`,children:`Clear search`})})},play:async({canvas:e})=>{await v(e.getByRole(`heading`,{name:`No projects match “zeta”`})).toBeVisible()}},P={render:function(e){let[t,n]=(0,g.useState)(null),r=t?[...S].sort((e,n)=>e.owner.localeCompare(n.owner)*(t.direction===`ascending`?1:-1)):S;return(0,_.jsx)(p,{...e,rows:r,sort:t,onSortChange:n})},play:async({canvas:e})=>{await b.click(x(e.getByRole(`columnheader`,{name:/Owner/})).getByRole(`button`)),await v(e.getAllByRole(`row`)[1]).toHaveTextContent(`Ava Stone`)}},F={args:{hasStickyHeader:!0,rows:Array.from({length:20},(e,t)=>({...S[t%4],id:`r${t}`,name:`${S[t%4].name} ${t+1}`}))},decorators:[e=>(0,_.jsx)(`div`,{style:{blockSize:`20rem`,display:`grid`},children:e()})]},I=[`Default`,`Selectable`,`Paged`,`EmptyValuesSortLast`,`Compact`,`Empty`,`ControlledSort`,`StickyHeader`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Selection with getRowId survives paging: "Select all" adds or removes this page's rows only.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Rows with no value sort last in both directions.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'sm',
    showCaption: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Sorted by the caller (e.g. a server): the table reports the sort and shows the rows as given.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}})))()}export{k as a,L as c,N as i,P as n,F as o,O as r,m as s,M as t};