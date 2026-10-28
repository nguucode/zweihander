import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{i as c,t as l}from"./Menu-NLwpYJmZ.js";import{n as u,t as d}from"./Table-Y4TRGaOz.js";import{n as f,t as p}from"./BarChart-CRgNlLB6.js";import{n as m,t as h}from"./EmptyState-DFT2bqlk.js";import{n as g,t as _}from"./FilterBar-D6WzH-CQ.js";import{n as v,t as y}from"./TableChartSwitch-CU9GS69U.js";var b=t({Controlled:()=>z,Default:()=>F,Empty:()=>B,FocusInFilters:()=>L,KeepsTableState:()=>R,Keyboard:()=>I,Narrow:()=>V,__namedExportsOrder:()=>H,default:()=>P});function x({initial:e=[`Sent`,`Overdue`],rows:t=j,...n}){let[r,i]=(0,S.useState)(e),o=t.filter(e=>r.length===0||r.includes(e.status)),c=k.map(e=>({month:e,amount:o.filter(t=>t.month===e).reduce((e,t)=>e+t.amount,0)}));return(0,C.jsx)(y,{"aria-label":`Invoice view`,filters:(0,C.jsx)(_,{"aria-label":`Invoice filters`,filters:(0,C.jsx)(l,{trigger:(0,C.jsx)(a,{variant:`secondary`,appearance:`outlined`,endIcon:(0,C.jsx)(s,{name:`chevron-down`}),children:`Status`}),items:O.map(e=>({type:`checkbox`,label:e,checked:r.includes(e),onCheckedChange:t=>i(n=>t?[...n,e]:n.filter(t=>t!==e))}))}),applied:r.map(e=>({id:e,label:`Status: ${e}`})),onRemove:e=>i(t=>t.filter(t=>t!==e)),onClearAll:()=>i([])}),summary:`${o.length} invoices`,table:(0,C.jsx)(d,{caption:`Invoices`,columns:N,rows:o,getRowId:e=>e.id,emptyState:(0,C.jsx)(h,{size:`sm`,headingLevel:3,icon:(0,C.jsx)(s,{name:`search`}),title:`No invoices match these filters`})}),chart:(0,C.jsx)(p,{title:`Invoiced by month`,data:o.length?c:[],x:`month`,series:[{key:`amount`,label:`Amount`}],format:M}),...n})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{S=n(),o(),i(),f(),u(),c(),m(),g(),v(),C=r(),{expect:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O=[`Draft`,`Sent`,`Paid`,`Overdue`],k=[`Jul`,`Aug`,`Sep`,`Oct`],A=[`Acme Corp`,`Globex`,`Initech`,`Umbrella`,`Hooli`,`Stark Industries`],j=Array.from({length:16},(e,t)=>({id:`INV-${1040+t}`,customer:A[t%A.length],month:k[Math.floor(t/4)],status:O[t*3%O.length],amount:800+t*1373%4200})),M=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e),N=[{key:`id`,header:`Invoice`,isRowHeader:!0},{key:`customer`,header:`Customer`},{key:`month`,header:`Month`},{key:`status`,header:`Status`},{key:`amount`,header:`Amount`,align:`end`,sortable:!0,sortValue:e=>e.amount,cell:e=>M(e.amount)}],P={title:`Patterns/Application UI/Table Chart Switch`,tags:[`experimental`],component:y,parameters:{layout:`padded`},argTypes:{table:{description:`The records, usually a Table.`,control:!1},chart:{description:`The same records summed up, usually a BarChart or LineChart.`,control:!1},filters:{description:`The filters both views share, usually a Filter Bar. It stays put, with its state, when the view changes.`,control:!1},summary:{description:`At the start of the switch's row: what the views show, e.g. "128 invoices". A status: a change is announced.`,control:`text`},view:{description:`The view shown, when you control it.`,control:`inline-radio`,options:[`table`,`chart`]},defaultView:{description:`The view shown first, when you do not control it.`,control:`inline-radio`,options:[`table`,`chart`],table:{defaultValue:{summary:`table`}}},onViewChange:{description:"Called with `table` or `chart` when the viewer switches. Store it to bring the viewer back to the same view."},tableLabel:{description:`The table tab's text.`,control:`text`,table:{defaultValue:{summary:`Table`}}},chartLabel:{description:`The chart tab's text.`,control:`text`,table:{defaultValue:{summary:`Chart`}}},"aria-label":{description:`Names the switch. Defaults to "View"; say what it shows, e.g. "Invoice view".`,control:`text`}},args:{table:null,chart:null},render:()=>(0,C.jsx)(x,{})},F={play:async({canvas:e})=>{let t=e.getByRole(`tablist`,{name:`Invoice view`});await w(D(t).getAllByRole(`tab`)).toHaveLength(2),await w(e.getByRole(`tab`,{name:`Table`})).toHaveAttribute(`aria-selected`,`true`);let n=e.getByRole(`tabpanel`,{name:`Table`});await w(D(n).getByRole(`table`,{name:`Invoices`})).toBeVisible(),await w(e.getByText(`8 invoices`)).toBeVisible(),await T.click(e.getByRole(`tab`,{name:`Chart`})),await w(await e.findByRole(`img`,{name:/Invoiced by month/})).toBeVisible(),await w(e.queryByRole(`table`,{name:`Invoices`})).toBeNull(),await T.click(e.getByRole(`button`,{name:`Remove Status: Overdue`})),await w(e.getByRole(`status`)).toHaveTextContent(`4 invoices`),await T.click(e.getByRole(`tab`,{name:`Table`}));let r=D(e.getByRole(`table`,{name:`Invoices`})).getAllByRole(`row`);await w(r).toHaveLength(5)}},I={play:async({canvas:e})=>{let t=e.getByRole(`tab`,{name:`Table`});t.focus(),await T.keyboard(`{ArrowRight}`);let n=e.getByRole(`tab`,{name:`Chart`});await w(n).toHaveFocus(),await w(t).toHaveAttribute(`aria-selected`,`true`),await T.keyboard(`{Enter}`),await w(n).toHaveAttribute(`aria-selected`,`true`),await w(n).toHaveFocus(),await w(await e.findByRole(`tabpanel`,{name:`Chart`})).toBeVisible(),await T.keyboard(`{ArrowLeft}`),await T.keyboard(` `),await w(t).toHaveAttribute(`aria-selected`,`true`)}},L={tags:[`!dev`],play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Status`});await T.click(e.getByRole(`tab`,{name:`Chart`})),t.focus(),await T.click(e.getByRole(`tab`,{name:`Table`})),await w(e.getByRole(`button`,{name:`Status`})).toBe(t),t.focus(),await w(t).toHaveFocus()}},R={tags:[`!dev`],render:()=>(0,C.jsx)(x,{}),play:async({canvas:e})=>{await T.click(e.getByRole(`button`,{name:/Amount/}));let t=e.getByRole(`columnheader`,{name:/Amount/}).getAttribute(`aria-sort`);await w(t).not.toBe(`none`),await T.click(e.getByRole(`tab`,{name:`Chart`})),await T.click(e.getByRole(`tab`,{name:`Table`})),await w(e.getByRole(`columnheader`,{name:/Amount/})).toHaveAttribute(`aria-sort`,t)}},z={render:function(){let[e,t]=(0,S.useState)(`chart`);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(x,{view:e,onViewChange:t}),(0,C.jsxs)(`p`,{"data-testid":`stored`,children:[`Stored: `,e]})]})},play:async({canvas:e})=>{await w(e.getByRole(`tab`,{name:`Chart`})).toHaveAttribute(`aria-selected`,`true`),await e.findByRole(`img`,{name:/Invoiced by month/}),await T.click(e.getByRole(`tab`,{name:`Table`})),await w(e.getByTestId(`stored`)).toHaveTextContent(`Stored: table`)}},B={render:()=>(0,C.jsx)(x,{rows:[],initial:[]}),play:async({canvas:e})=>{await w(e.getByText(`No invoices match these filters`)).toBeVisible(),await T.click(e.getByRole(`tab`,{name:`Chart`})),await w(await e.findByText(`No data`)).toBeVisible()}},V={render:()=>(0,C.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:320},children:(0,C.jsx)(x,{summary:`Invoices for Nordwestdeutsche-Landesbank-Girozentrale-Hannover-Niederlassung`})}),play:async({canvas:e})=>{let t=e.getByTestId(`narrow`).getBoundingClientRect().right;await E(async()=>{await w(e.getByRole(`tablist`).getBoundingClientRect().right).toBeLessThanOrEqual(t+.5),await w(e.getByRole(`tabpanel`).getBoundingClientRect().right).toBeLessThanOrEqual(t+.5),await w(e.getByRole(`tablist`).getBoundingClientRect().top).toBeGreaterThanOrEqual(e.getByRole(`status`).getBoundingClientRect().bottom)})}},H=[`Default`,`Keyboard`,`FocusInFilters`,`KeepsTableState`,`Controlled`,`Empty`,`Narrow`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const list = canvas.getByRole('tablist', {
      name: 'Invoice view'
    });
    await expect(within(list).getAllByRole('tab')).toHaveLength(2);
    await expect(canvas.getByRole('tab', {
      name: 'Table'
    })).toHaveAttribute('aria-selected', 'true');
    const panel = canvas.getByRole('tabpanel', {
      name: 'Table'
    });
    await expect(within(panel).getByRole('table', {
      name: 'Invoices'
    })).toBeVisible();
    await expect(canvas.getByText('8 invoices')).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Chart'
    }));
    await expect(await canvas.findByRole('img', {
      name: /Invoiced by month/
    })).toBeVisible();
    // The table is hidden, not gone: it keeps its state for the way back.
    await expect(canvas.queryByRole('table', {
      name: 'Invoices'
    })).toBeNull();
    // The filters are shared: still applied, and a change shows in the chart's view too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Status: Overdue'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('4 invoices');
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Table'
    }));
    const rows = within(canvas.getByRole('table', {
      name: 'Invoices'
    })).getAllByRole('row');
    // A header row and the four Sent invoices.
    await expect(rows).toHaveLength(5);
  }
}`,...F.parameters?.docs?.source},description:{story:`The table first. Switch to the chart: the filters stay, and both views show the same invoices.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const table = canvas.getByRole('tab', {
      name: 'Table'
    });
    table.focus();
    await userEvent.keyboard('{ArrowRight}');
    const chart = canvas.getByRole('tab', {
      name: 'Chart'
    });
    await expect(chart).toHaveFocus();
    await expect(table).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(chart).toHaveAttribute('aria-selected', 'true');
    // Switching leaves focus on the tab, not in the view.
    await expect(chart).toHaveFocus();
    await expect(await canvas.findByRole('tabpanel', {
      name: 'Chart'
    })).toBeVisible();
    // Space switches back.
    await userEvent.keyboard('{ArrowLeft}');
    await userEvent.keyboard(' ');
    await expect(table).toHaveAttribute('aria-selected', 'true');
  }
}`,...I.parameters?.docs?.source},description:{story:`The keyboard: arrows move between the two tabs, Enter or Space switches.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvas
  }) => {
    const status = canvas.getByRole('button', {
      name: 'Status'
    });
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Chart'
    }));
    status.focus();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Table'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Status'
    })).toBe(status);
    status.focus();
    await expect(status).toHaveFocus();
  }
}`,...L.parameters?.docs?.source},description:{story:`Focus in the filters survives a switch, since the filters never leave the page.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => <Invoices />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Amount/
    }));
    const sorted = canvas.getByRole('columnheader', {
      name: /Amount/
    }).getAttribute('aria-sort');
    await expect(sorted).not.toBe('none');
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Chart'
    }));
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Table'
    }));
    await expect(canvas.getByRole('columnheader', {
      name: /Amount/
    })).toHaveAttribute('aria-sort', sorted!);
  }
}`,...R.parameters?.docs?.source},description:{story:`The table keeps its sort while the chart is shown.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [view, setView] = useState<TableChartView>('chart');
    return <>
        <Invoices view={view} onViewChange={setView} />
        <p data-testid="stored">Stored: {view}</p>
      </>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('tab', {
      name: 'Chart'
    })).toHaveAttribute('aria-selected', 'true');
    await canvas.findByRole('img', {
      name: /Invoiced by month/
    });
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Table'
    }));
    await expect(canvas.getByTestId('stored')).toHaveTextContent('Stored: table');
  }
}`,...z.parameters?.docs?.source},description:{story:`Controlled: the view you stored for this viewer, here the chart.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Invoices rows={[]} initial={[]} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No invoices match these filters')).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Chart'
    }));
    await expect(await canvas.findByText('No data')).toBeVisible();
  }
}`,...B.parameters?.docs?.source},description:{story:`No invoices match: the table shows its empty state, the chart says No data.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="narrow" style={{
    inlineSize: 320
  }}>
      <Invoices summary="Invoices for Nordwestdeutsche-Landesbank-Girozentrale-Hannover-Niederlassung" />
    </div>,
  play: async ({
    canvas
  }) => {
    const edge = canvas.getByTestId('narrow').getBoundingClientRect().right;
    await waitFor(async () => {
      await expect(canvas.getByRole('tablist').getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
      await expect(canvas.getByRole('tabpanel').getBoundingClientRect().right).toBeLessThanOrEqual(edge + 0.5);
      // The switch has dropped under the summary.
      await expect(canvas.getByRole('tablist').getBoundingClientRect().top).toBeGreaterThanOrEqual(canvas.getByRole('status').getBoundingClientRect().bottom);
    });
  }
}`,...V.parameters?.docs?.source},description:{story:`At 320px a long summary wraps, the switch drops under it, and nothing
widens the page: the Table scrolls inside its own box.`,...V.parameters?.docs?.description}}}})))()}export{V as a,I as i,F as n,b as o,B as r,U as s,z as t};