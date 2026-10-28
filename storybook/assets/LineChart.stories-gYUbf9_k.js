import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,o as r}from"./chart-utils-DFuv4Pns.js";import{i,l as a,o,r as s,s as c,u as l}from"./sample-data-BFlXvA0M.js";import{n as u,t as d}from"./LineChart-BViQFSuH.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u(),r(),i(),f=t(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Charts/LineChart`,tags:[`experimental`],component:d,parameters:{layout:`padded`},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:640},children:e()})],args:{title:`Requests over time`,data:c,x:`time`,series:[{key:`requests`,label:`Requests`}],timeZone:`UTC`,isIncomplete:!0},argTypes:{data:{control:!1,description:"Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis)."},series:{control:!1,description:"One entry per line: `key` into each row, `label`, and an optional `color` token name."},x:{description:`The field in each row that holds the x value.`},title:{description:`Shown above the chart, and its accessible name.`},appearance:{control:`inline-radio`,options:[`line`,`area`],description:"`area` fills under each line and keeps the y axis at zero."},isAutoDomain:{description:`Fit the y axis to the data instead of starting at zero. Line appearance only.`},isIncomplete:{description:`The last bucket is still filling: its segment is dashed.`},legendValue:{control:`inline-radio`,options:[`total`,`latest`],description:`Beside each series: its sum, or its latest value (for rates and latencies).`},isLoading:{description:`Shows a skeleton the height of the plot.`},height:{description:`Plot height in pixels. The width follows the container.`},format:{control:!1,description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.`},timeZone:{control:`inline-radio`,options:[void 0,`UTC`],description:`The time axis is in the viewer's time zone, or UTC.`}}},v={play:async({canvas:e,canvasElement:t})=>{let r=`${n(c[0].time,`UTC`)} to ${n(c.at(-1).time,`UTC`)}`,i=await e.findByRole(`img`,{name:RegExp(`Requests over time ${r}`)});await p(t.querySelectorAll(`path[class*="lineDashed"]`)).toHaveLength(1),o(i),await h(()=>p(t.querySelector(`[class*="tooltip"]`)).toBeInTheDocument()),await p(t.querySelector(`[class*="tooltip"]`)).toHaveAttribute(`aria-hidden`,`true`)}},y={args:{title:`Data transfer`,data:l,series:[{key:`bytes`,label:`Data transfer`}],appearance:`area`,format:s},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`),await p(t.querySelectorAll(`path[class*="area"]`)).toHaveLength(1),await p(e.getByRole(`button`,{name:/Data transfer .*MB/})).toBeVisible(),await p(e.getByRole(`img`).textContent).toMatch(/0 B/)}},b={args:{title:`API and web traffic`,data:a,isIncomplete:!1,series:[{key:`api`,label:`API`},{key:`web`,label:`Web`,color:`chart-3`}]},play:async({canvas:e,canvasElement:t})=>{let n=()=>t.querySelectorAll(`svg g[class*="series"]`);await h(()=>p(n()).toHaveLength(2));let r=e.getByRole(`button`,{name:/API/}),i=e.getByRole(`button`,{name:/Web/});await p(r).toHaveAttribute(`aria-pressed`,`true`),await m.hover(i),await h(()=>p(t.querySelectorAll(`svg g[class*="dim"]`)).toHaveLength(1)),await m.unhover(i),await m.click(r),await p(t.querySelectorAll(`svg g[class*="dim"]`)).toHaveLength(0),await p(r).toHaveAttribute(`aria-pressed`,`false`),await p(n()).toHaveLength(1),await p(i).toHaveAttribute(`aria-disabled`,`true`),await m.click(i),await p(i).toHaveAttribute(`aria-pressed`,`true`),r.focus(),await m.keyboard(`{Enter}`),await p(r).toHaveAttribute(`aria-pressed`,`true`)}},x={args:{title:`p95 response time`,data:a.map(e=>({time:e.time,p95:120+e.api/4})),series:[{key:`p95`,label:`p95`}],isAutoDomain:!0,isIncomplete:!1,legendValue:`latest`,format:e=>`${Math.round(e)} ms`},play:async({canvas:e})=>{let t=await e.findByRole(`img`);await p(g(t).queryByText(`0 ms`)).toBeNull();let n=120+a.at(-1).api/4;await p(e.getByRole(`button`,{name:`p95 ${Math.round(n)} ms`})).toBeVisible()}},S={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`View as table`});await p(t).toHaveAttribute(`aria-expanded`,`false`),await m.click(t),await p(e.getByRole(`button`,{name:`View as chart`})).toHaveAttribute(`aria-expanded`,`true`);let n=e.getByRole(`table`,{name:`Requests over time`});await p(g(n).getAllByRole(`row`)).toHaveLength(c.length+1),await p(e.queryByRole(`img`)).toBeNull()}},C={args:{title:`Requests with an outage`,isIncomplete:!1,data:c.slice(0,24).map((e,t)=>({...e,requests:t>=10&&t<14?null:e.requests}))},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=t.querySelector(`path[class*="line"]`).getAttribute(`d`);await p(n.match(/M/g)).toHaveLength(2),await m.click(e.getByRole(`button`,{name:`View as table`})),await p(e.getAllByRole(`cell`,{name:`–`})).toHaveLength(4)}},w={args:{data:[]},play:async({canvas:e})=>{await p(e.getByText(`No data`)).toBeVisible(),await p(e.queryByRole(`button`,{name:`View as table`})).toBeNull()}},T={args:{isLoading:!0},play:async({canvasElement:e})=>{await p(e.querySelector(`figure`)).toHaveAttribute(`aria-busy`,`true`)}},E=[`Default`,`Area`,`MultiSeries`,`AutoDomain`,`TableView`,`Gaps`,`Empty`,`Loading`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`One series over 24 hours, the last bucket still filling.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Filled under the line, with a unit formatter: bytes.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Two series: the legend toggles each, and hovering a legend item fades the other.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Latency sits far from zero: fit the axis to the data.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`The values as a table: the accessible way to read them, and handy for copying.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`A missing value is a gap in the line, not a drop to zero.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`No rows for the period.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('figure')).toHaveAttribute('aria-busy', 'true');
  }
}`,...T.parameters?.docs?.source},description:{story:`Waiting for data: a skeleton the height of the plot, and the figure marked busy.`,...T.parameters?.docs?.description}}}})))()}D();export{y as Area,x as AutoDomain,v as Default,w as Empty,C as Gaps,T as Loading,b as MultiSeries,S as TableView,E as __namedExportsOrder,_ as default};