import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./CartesianChart-CqQ2qpF6.js";import{a as i,c as a,i as o,o as s}from"./sample-data-BFlXvA0M.js";function c({layout:e=`stacked`,...t}){return(0,l.jsx)(r,{...t,type:`bar`,isGrouped:e===`grouped`})}var l;function u(){return(u=e((()=>{n(),l=t(),c.__docgenInfo={description:`Amounts per bucket or category, stacked or grouped, with a tooltip and a table view. The y axis always starts at zero.`,methods:[],displayName:`BarChart`,props:{title:{required:!0,tsType:{name:`string`},description:`Shown above the chart, and its accessible name.`},data:{required:!0,tsType:{name:`Array`,elements:[{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`ChartRow[]`},description:"Flat rows, one per bucket: `{ time, ok: 120, error: 4 }`. A missing or null value is a gap, not a zero."},series:{required:!0,tsType:{name:`Array`,elements:[{name:`ChartSeries`}],raw:`ChartSeries[]`},description:``},x:{required:!0,tsType:{name:`string`},description:`The field holding each row's x value. Dates give a time axis, strings a category axis.`},height:{required:!1,tsType:{name:`number`},description:`Height of the plot in pixels. The width follows the container.`},format:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`string`}}},description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers ("3.15K").`},timeZone:{required:!1,tsType:{name:`literal`,value:`'UTC'`},description:`The time axis is in the viewer's time zone, or UTC. ponytail: no other named
zones, since d3 ticks only on local or UTC hours; add one when a product needs it.`},isIncomplete:{required:!1,tsType:{name:`boolean`},description:`The last bucket is still filling: drawn dashed (line) or faded (bar).`},legendValue:{required:!1,tsType:{name:`union`,raw:`'total' | 'latest'`,elements:[{name:`literal`,value:`'total'`},{name:`literal`,value:`'latest'`}]},description:`What the legend shows beside each series: its sum, or its latest value (for rates and latencies, where a sum means nothing).`},isLoading:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``},layout:{required:!1,tsType:{name:`union`,raw:`'stacked' | 'grouped'`,elements:[{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'grouped'`}]},description:"`stacked` adds series into one bar per bucket; `grouped` puts them side by side.",defaultValue:{value:`'stacked'`,computed:!1}}}}})))()}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u(),o(),d=t(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:`Charts/BarChart`,tags:[`experimental`],component:c,parameters:{layout:`padded`},decorators:[e=>(0,d.jsx)(`div`,{style:{maxInlineSize:640},children:e()})],args:{title:`Requests by status code`,data:a,x:`time`,timeZone:`UTC`,isIncomplete:!0,series:[{key:`ok`,label:`2xx`,color:`success`},{key:`redirect`,label:`3xx`,color:`info`},{key:`clientError`,label:`4xx`,color:`warning`},{key:`serverError`,label:`5xx`,color:`danger`}]},argTypes:{data:{control:!1,description:"Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis)."},series:{control:!1,description:"One entry per series: `key` into each row, `label`, and an optional `color` token name."},x:{description:`The field in each row that holds the x value.`},title:{description:`Shown above the chart, and its accessible name.`},layout:{control:`inline-radio`,options:[`stacked`,`grouped`],description:"`stacked` adds series into one bar; `grouped` puts them side by side."},isIncomplete:{description:`The last bucket is still filling: its bar is faded.`},isLoading:{description:`Shows a skeleton the height of the plot.`},height:{description:`Plot height in pixels. The width follows the container.`},format:{control:!1,description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.`},timeZone:{control:`inline-radio`,options:[void 0,`UTC`],description:`The time axis is in the viewer's time zone, or UTC.`}}},h={play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`img`,{name:/Requests by status code/});await f(t.querySelectorAll(`svg g[class*="series"]`)).toHaveLength(4),await f(t.querySelectorAll(`rect[class*="partial"]`).length).toBeGreaterThan(0),s(n),await p(()=>f(t.querySelector(`[class*="tooltip"]`)).toHaveTextContent(/5xx.*2xx.*Total/))}},g={args:{title:`Requests by status code, default colours`,series:[{key:`ok`,label:`2xx`},{key:`redirect`,label:`3xx`},{key:`clientError`,label:`4xx`},{key:`serverError`,label:`5xx`}]},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=[...t.querySelectorAll(`svg g[class*="series"]`)].map(e=>e.getAttribute(`fill`));await f(n).toEqual([`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`])}},_={args:{title:`Invoices issued`,data:i,x:`day`,layout:`grouped`,isIncomplete:!1,series:[{key:`thisWeek`,label:`This week`},{key:`lastWeek`,label:`Last week`}]},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`,{name:/Invoices issued Mon to Sun/});let n=[...t.querySelectorAll(`rect[class*="bar"]`)];await f(n).toHaveLength(14);let r=new Set(n.map(e=>Math.round(Number(e.getAttribute(`y`))+Number(e.getAttribute(`height`)))));await f(r.size).toBe(1),await f(e.getByText(`Wed`)).toBeInTheDocument()}},v={args:{title:`Invoices per day`,x:`day`,isIncomplete:!1,data:Array.from({length:30},(e,t)=>({day:`Oct ${t+1}`,count:40+t*37%60})),series:[{key:`count`,label:`Invoices`}]},decorators:[e=>(0,d.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=[...t.querySelectorAll(`svg text[text-anchor="middle"]`)];await f(n.length).toBeLessThan(10),await f(n[0]).toHaveTextContent(`Oct 1`)}},y={args:{data:[]},play:async({canvas:e})=>{await f(e.getByText(`No data`)).toBeVisible()}},b=[`Stacked`,`Palette`,`Grouped`,`ManyCategories`,`Empty`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await canvas.findByRole('img', {
      name: /Requests by status code/
    });
    await expect(canvasElement.querySelectorAll('svg g[class*="series"]')).toHaveLength(4);
    await expect(canvasElement.querySelectorAll('rect[class*="partial"]').length).toBeGreaterThan(0);
    // The tooltip lists every series in the bucket, top of the stack first, and the total.
    pointAtMiddle(img);
    await waitFor(() => expect(canvasElement.querySelector('[class*="tooltip"]')).toHaveTextContent(/5xx.*2xx.*Total/));
  }
}`,...h.parameters?.docs?.source},description:{story:`Stacked over time, in status colours. The last bucket is faded: it is still filling.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Requests by status code, default colours',
    series: [{
      key: 'ok',
      label: '2xx'
    }, {
      key: 'redirect',
      label: '3xx'
    }, {
      key: 'clientError',
      label: '4xx'
    }, {
      key: 'serverError',
      label: '5xx'
    }]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole('img');
    const fills = [...canvasElement.querySelectorAll('svg g[class*="series"]')].map(g => g.getAttribute('fill'));
    await expect(fills).toEqual(['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)']);
  }
}`,...g.parameters?.docs?.source},description:{story:`The default palette, when series have no meaning of their own.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invoices issued',
    data: invoicesByDay,
    x: 'day',
    layout: 'grouped',
    isIncomplete: false,
    series: [{
      key: 'thisWeek',
      label: 'This week'
    }, {
      key: 'lastWeek',
      label: 'Last week'
    }]
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole('img', {
      name: /Invoices issued Mon to Sun/
    });
    // Two bars per day, every one starting from the zero line.
    const bars = [...canvasElement.querySelectorAll('rect[class*="bar"]')];
    await expect(bars).toHaveLength(14);
    const bottoms = new Set(bars.map(b => Math.round(Number(b.getAttribute('y')) + Number(b.getAttribute('height')))));
    await expect(bottoms.size).toBe(1);
    await expect(canvas.getByText('Wed')).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source},description:{story:`Side by side, on categories: this week against last.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invoices per day',
    x: 'day',
    isIncomplete: false,
    data: Array.from({
      length: 30
    }, (_, i) => ({
      day: \`Oct \${i + 1}\`,
      count: 40 + i * 37 % 60
    })),
    series: [{
      key: 'count',
      label: 'Invoices'
    }]
  },
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>{Story()}</div>],
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole('img');
    const labels = [...canvasElement.querySelectorAll('svg text[text-anchor="middle"]')];
    await expect(labels.length).toBeLessThan(10);
    await expect(labels[0]).toHaveTextContent('Oct 1');
  }
}`,...v.parameters?.docs?.source},description:{story:`A month of days in a narrow card: labels that would overlap are skipped.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No data')).toBeVisible();
  }
}`,...y.parameters?.docs?.source},description:{story:`No rows for the period.`,...y.parameters?.docs?.description}}}})))()}x();export{y as Empty,_ as Grouped,v as ManyCategories,g as Palette,h as Stacked,b as __namedExportsOrder,m as default};