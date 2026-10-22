import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./CartesianChart-CqQ2qpF6.js";import{i,o as a}from"./chart-utils-DFuv4Pns.js";import{i as o,l as s,o as c,r as l,s as u,u as d}from"./sample-data-BFlXvA0M.js";function f({appearance:e=`line`,isAutoDomain:t=!1,...n}){return(0,p.jsx)(r,{...n,type:e,isAutoDomain:e===`line`&&t})}var p;function m(){return(m=e((()=>{n(),p=t(),f.__docgenInfo={description:`One or more series over time or categories, with a crosshair tooltip and a table view.`,methods:[],displayName:`LineChart`,props:{title:{required:!0,tsType:{name:`string`},description:`Shown above the chart, and its accessible name.`},data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`ChartRow[]`},description:"Flat rows, one per bucket: `{ time, ok: 120, error: 4 }`. A missing or null value is a gap, not a zero."},series:{required:!0,tsType:{name:`Array`,elements:[{name:`ChartSeries`}],raw:`ChartSeries[]`},description:``},x:{required:!0,tsType:{name:`string`},description:`The field holding each row's x value. Dates give a time axis, strings a category axis.`},height:{required:!1,tsType:{name:`number`},description:`Height of the plot in pixels. The width follows the container.`},format:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`string`}}},description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers ("3.15K").`},timeZone:{required:!1,tsType:{name:`literal`,value:`'UTC'`},description:`The time axis is in the viewer's time zone, or UTC. ponytail: no other named
zones, since d3 ticks only on local or UTC hours; add one when a product needs it.`},isIncomplete:{required:!1,tsType:{name:`boolean`},description:`The last bucket is still filling: drawn dashed (line) or faded (bar).`},legendValue:{required:!1,tsType:{name:`union`,raw:`'total' | 'latest'`,elements:[{name:`literal`,value:`'total'`},{name:`literal`,value:`'latest'`}]},description:`What the legend shows beside each series: its sum, or its latest value (for rates and latencies, where a sum means nothing).`},isLoading:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``},appearance:{required:!1,tsType:{name:`union`,raw:`'line' | 'area'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'area'`}]},description:"`area` fills under each line and keeps the y axis at zero.",defaultValue:{value:`'line'`,computed:!1}},isAutoDomain:{required:!1,tsType:{name:`boolean`},description:`Line only: fit the y axis to the data, for values far from zero such as latency.`,defaultValue:{value:`false`,computed:!1}}}}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{m(),a(),o(),h=t(),{expect:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Charts/LineChart`,tags:[`experimental`],component:f,parameters:{layout:`padded`},decorators:[e=>(0,h.jsx)(`div`,{style:{maxInlineSize:640},children:e()})],args:{title:`Requests over time`,data:u,x:`time`,series:[{key:`requests`,label:`Requests`}],timeZone:`UTC`,isIncomplete:!0},argTypes:{data:{control:!1,description:"Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis)."},series:{control:!1,description:"One entry per line: `key` into each row, `label`, and an optional `color` token name."},x:{description:`The field in each row that holds the x value.`},title:{description:`Shown above the chart, and its accessible name.`},appearance:{control:`inline-radio`,options:[`line`,`area`],description:"`area` fills under each line and keeps the y axis at zero."},isAutoDomain:{description:`Fit the y axis to the data instead of starting at zero. Line appearance only.`},isIncomplete:{description:`The last bucket is still filling: its segment is dashed.`},legendValue:{control:`inline-radio`,options:[`total`,`latest`],description:`Beside each series: its sum, or its latest value (for rates and latencies).`},isLoading:{description:`Shows a skeleton the height of the plot.`},height:{description:`Plot height in pixels. The width follows the container.`},format:{control:!1,description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.`},timeZone:{control:`inline-radio`,options:[void 0,`UTC`],description:`The time axis is in the viewer's time zone, or UTC.`}}},x={play:async({canvas:e,canvasElement:t})=>{let n=`${i(u[0].time,`UTC`)} to ${i(u.at(-1).time,`UTC`)}`,r=await e.findByRole(`img`,{name:RegExp(`Requests over time ${n}`)});await g(t.querySelectorAll(`path[class*="lineDashed"]`)).toHaveLength(1),c(r),await v(()=>g(t.querySelector(`[class*="tooltip"]`)).toBeInTheDocument()),await g(t.querySelector(`[class*="tooltip"]`)).toHaveAttribute(`aria-hidden`,`true`)}},S={args:{title:`Data transfer`,data:d,series:[{key:`bytes`,label:`Data transfer`}],appearance:`area`,format:l},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`),await g(t.querySelectorAll(`path[class*="area"]`)).toHaveLength(1),await g(e.getByRole(`button`,{name:/Data transfer .*MB/})).toBeVisible(),await g(e.getByRole(`img`).textContent).toMatch(/0 B/)}},C={args:{title:`API and web traffic`,data:s,isIncomplete:!1,series:[{key:`api`,label:`API`},{key:`web`,label:`Web`,color:`chart-3`}]},play:async({canvas:e,canvasElement:t})=>{let n=()=>t.querySelectorAll(`svg g[class*="series"]`);await v(()=>g(n()).toHaveLength(2));let r=e.getByRole(`button`,{name:/API/}),i=e.getByRole(`button`,{name:/Web/});await g(r).toHaveAttribute(`aria-pressed`,`true`),await _.hover(i),await v(()=>g(t.querySelectorAll(`svg g[class*="dim"]`)).toHaveLength(1)),await _.unhover(i),await _.click(r),await g(t.querySelectorAll(`svg g[class*="dim"]`)).toHaveLength(0),await g(r).toHaveAttribute(`aria-pressed`,`false`),await g(n()).toHaveLength(1),await g(i).toHaveAttribute(`aria-disabled`,`true`),await _.click(i),await g(i).toHaveAttribute(`aria-pressed`,`true`),r.focus(),await _.keyboard(`{Enter}`),await g(r).toHaveAttribute(`aria-pressed`,`true`)}},w={args:{title:`p95 response time`,data:s.map(e=>({time:e.time,p95:120+e.api/4})),series:[{key:`p95`,label:`p95`}],isAutoDomain:!0,isIncomplete:!1,legendValue:`latest`,format:e=>`${Math.round(e)} ms`},play:async({canvas:e})=>{let t=await e.findByRole(`img`);await g(y(t).queryByText(`0 ms`)).toBeNull();let n=120+s.at(-1).api/4;await g(e.getByRole(`button`,{name:`p95 ${Math.round(n)} ms`})).toBeVisible()}},T={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`View as table`});await g(t).toHaveAttribute(`aria-expanded`,`false`),await _.click(t),await g(e.getByRole(`button`,{name:`View as chart`})).toHaveAttribute(`aria-expanded`,`true`);let n=e.getByRole(`table`,{name:`Requests over time`});await g(y(n).getAllByRole(`row`)).toHaveLength(u.length+1),await g(e.queryByRole(`img`)).toBeNull()}},E={args:{title:`Requests with an outage`,isIncomplete:!1,data:u.slice(0,24).map((e,t)=>({...e,requests:t>=10&&t<14?null:e.requests}))},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=t.querySelector(`path[class*="line"]`).getAttribute(`d`);await g(n.match(/M/g)).toHaveLength(2),await _.click(e.getByRole(`button`,{name:`View as table`})),await g(e.getAllByRole(`cell`,{name:`–`})).toHaveLength(4)}},D={args:{data:[]},play:async({canvas:e})=>{await g(e.getByText(`No data`)).toBeVisible(),await g(e.queryByRole(`button`,{name:`View as table`})).toBeNull()}},O={args:{isLoading:!0},play:async({canvasElement:e})=>{await g(e.querySelector(`figure`)).toHaveAttribute(`aria-busy`,`true`)}},k=[`Default`,`Area`,`MultiSeries`,`AutoDomain`,`TableView`,`Gaps`,`Empty`,`Loading`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Named by its title, with the range the screen reader cannot see on the axis.
    // Dates follow the viewer's locale, so the expected text is formatted the same way.
    const range = \`\${formatTime(requests[0].time, 'UTC')} to \${formatTime(requests.at(-1)!.time, 'UTC')}\`;
    const img = await canvas.findByRole('img', {
      name: new RegExp(\`Requests over time \${range}\`)
    });
    // The last segment is its own dashed path.
    await expect(canvasElement.querySelectorAll('path[class*="lineDashed"]')).toHaveLength(1);
    // Hovering shows the crosshair and a tooltip for the bucket under the pointer.
    pointAtMiddle(img);
    await waitFor(() => expect(canvasElement.querySelector('[class*="tooltip"]')).toBeInTheDocument());
    await expect(canvasElement.querySelector('[class*="tooltip"]')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...x.parameters?.docs?.source},description:{story:`One series over 24 hours, the last bucket still filling.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Data transfer',
    data: transfer,
    series: [{
      key: 'bytes',
      label: 'Data transfer'
    }],
    appearance: 'area',
    format: formatBytes
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole('img');
    await expect(canvasElement.querySelectorAll('path[class*="area"]')).toHaveLength(1);
    // The formatter reaches the legend total and the axis.
    await expect(canvas.getByRole('button', {
      name: /Data transfer .*MB/
    })).toBeVisible();
    await expect(canvas.getByRole('img').textContent).toMatch(/0 B/);
  }
}`,...S.parameters?.docs?.source},description:{story:`Filled under the line, with a unit formatter: bytes.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'API and web traffic',
    data: traffic,
    isIncomplete: false,
    series: [{
      key: 'api',
      label: 'API'
    }, {
      key: 'web',
      label: 'Web',
      color: 'chart-3'
    }]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const series = () => canvasElement.querySelectorAll('svg g[class*="series"]');
    await waitFor(() => expect(series()).toHaveLength(2));
    const api = canvas.getByRole('button', {
      name: /API/
    });
    const web = canvas.getByRole('button', {
      name: /Web/
    });
    await expect(api).toHaveAttribute('aria-pressed', 'true');

    // Hover fades every series but the one pointed at.
    await userEvent.hover(web);
    await waitFor(() => expect(canvasElement.querySelectorAll('svg g[class*="dim"]')).toHaveLength(1));
    await userEvent.unhover(web);

    // Click hides a series; the last one left cannot be hidden.
    await userEvent.click(api);
    // The series that was pointed at is gone: nothing stays faded.
    await expect(canvasElement.querySelectorAll('svg g[class*="dim"]')).toHaveLength(0);
    await expect(api).toHaveAttribute('aria-pressed', 'false');
    await expect(series()).toHaveLength(1);
    await expect(web).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(web);
    await expect(web).toHaveAttribute('aria-pressed', 'true');

    // Keyboard: Tab reaches the toggle, Enter flips it back.
    api.focus();
    await userEvent.keyboard('{Enter}');
    await expect(api).toHaveAttribute('aria-pressed', 'true');
  }
}`,...C.parameters?.docs?.source},description:{story:`Two series: the legend toggles each, and hovering a legend item fades the other.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'p95 response time',
    data: traffic.map(d => ({
      time: d.time,
      p95: 120 + d.api / 4
    })),
    series: [{
      key: 'p95',
      label: 'p95'
    }],
    isAutoDomain: true,
    isIncomplete: false,
    // A sum of latencies means nothing: show the latest.
    legendValue: 'latest',
    format: (v: number) => \`\${Math.round(v)} ms\`
  },
  play: async ({
    canvas
  }) => {
    const img = await canvas.findByRole('img');
    await expect(within(img as unknown as HTMLElement).queryByText('0 ms')).toBeNull();
    const latest = 120 + traffic.at(-1)!.api / 4;
    await expect(canvas.getByRole('button', {
      name: \`p95 \${Math.round(latest)} ms\`
    })).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`Latency sits far from zero: fit the axis to the data.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const toggle = canvas.getByRole('button', {
      name: 'View as table'
    });
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    await expect(canvas.getByRole('button', {
      name: 'View as chart'
    })).toHaveAttribute('aria-expanded', 'true');
    const table = canvas.getByRole('table', {
      name: 'Requests over time'
    });
    // A header row plus one row per bucket.
    await expect(within(table).getAllByRole('row')).toHaveLength(requests.length + 1);
    await expect(canvas.queryByRole('img')).toBeNull();
  }
}`,...T.parameters?.docs?.source},description:{story:`The values as a table: the accessible way to read them, and handy for copying.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Requests with an outage',
    isIncomplete: false,
    data: requests.slice(0, 24).map((d, i) => ({
      ...d,
      requests: i >= 10 && i < 14 ? null : d.requests
    }))
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole('img');
    // Two runs of the line: before and after the gap.
    const d = canvasElement.querySelector('path[class*="line"]')!.getAttribute('d')!;
    await expect(d.match(/M/g)).toHaveLength(2);
    await userEvent.click(canvas.getByRole('button', {
      name: 'View as table'
    }));
    await expect(canvas.getAllByRole('cell', {
      name: '–'
    })).toHaveLength(4);
  }
}`,...E.parameters?.docs?.source},description:{story:`A missing value is a gap in the line, not a drop to zero.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No data')).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'View as table'
    })).toBeNull();
  }
}`,...D.parameters?.docs?.source},description:{story:`No rows for the period.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('figure')).toHaveAttribute('aria-busy', 'true');
  }
}`,...O.parameters?.docs?.source},description:{story:`Waiting for data: a skeleton the height of the plot, and the figure marked busy.`,...O.parameters?.docs?.description}}}})))()}A();export{S as Area,w as AutoDomain,x as Default,D as Empty,E as Gaps,O as Loading,C as MultiSeries,T as TableView,k as __namedExportsOrder,b as default};