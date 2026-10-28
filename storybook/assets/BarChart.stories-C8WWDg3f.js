import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./BarChart-CRgNlLB6.js";import{a as i,c as a,i as o,o as s}from"./sample-data-BFlXvA0M.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),c=t(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Charts/BarChart`,tags:[`experimental`],component:r,parameters:{layout:`padded`},decorators:[e=>(0,c.jsx)(`div`,{style:{maxInlineSize:640},children:e()})],args:{title:`Requests by status code`,data:a,x:`time`,timeZone:`UTC`,isIncomplete:!0,series:[{key:`ok`,label:`2xx`,color:`success`},{key:`redirect`,label:`3xx`,color:`info`},{key:`clientError`,label:`4xx`,color:`warning`},{key:`serverError`,label:`5xx`,color:`danger`}]},argTypes:{data:{control:!1,description:"Flat rows, one per bucket. The `x` field holds a Date (time axis) or a string (category axis)."},series:{control:!1,description:"One entry per series: `key` into each row, `label`, and an optional `color` token name."},x:{description:`The field in each row that holds the x value.`},title:{description:`Shown above the chart, and its accessible name.`},layout:{control:`inline-radio`,options:[`stacked`,`grouped`],description:"`stacked` adds series into one bar; `grouped` puts them side by side."},isIncomplete:{description:`The last bucket is still filling: its bar is faded.`},isLoading:{description:`Shows a skeleton the height of the plot.`},height:{description:`Plot height in pixels. The width follows the container.`},format:{control:!1,description:`Formats values on the axis, legend, tooltip and table. Defaults to compact numbers.`},timeZone:{control:`inline-radio`,options:[void 0,`UTC`],description:`The time axis is in the viewer's time zone, or UTC.`}}},f={play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`img`,{name:/Requests by status code/});await l(t.querySelectorAll(`svg g[class*="series"]`)).toHaveLength(4),await l(t.querySelectorAll(`rect[class*="partial"]`).length).toBeGreaterThan(0),s(n),await u(()=>l(t.querySelector(`[class*="tooltip"]`)).toHaveTextContent(/5xx.*2xx.*Total/))}},p={args:{title:`Requests by status code, default colours`,series:[{key:`ok`,label:`2xx`},{key:`redirect`,label:`3xx`},{key:`clientError`,label:`4xx`},{key:`serverError`,label:`5xx`}]},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=[...t.querySelectorAll(`svg g[class*="series"]`)].map(e=>e.getAttribute(`fill`));await l(n).toEqual([`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`])}},m={args:{title:`Invoices issued`,data:i,x:`day`,layout:`grouped`,isIncomplete:!1,series:[{key:`thisWeek`,label:`This week`},{key:`lastWeek`,label:`Last week`}]},play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`,{name:/Invoices issued Mon to Sun/});let n=[...t.querySelectorAll(`rect[class*="bar"]`)];await l(n).toHaveLength(14);let r=new Set(n.map(e=>Math.round(Number(e.getAttribute(`y`))+Number(e.getAttribute(`height`)))));await l(r.size).toBe(1),await l(e.getByText(`Wed`)).toBeInTheDocument()}},h={args:{title:`Invoices per day`,x:`day`,isIncomplete:!1,data:Array.from({length:30},(e,t)=>({day:`Oct ${t+1}`,count:40+t*37%60})),series:[{key:`count`,label:`Invoices`}]},decorators:[e=>(0,c.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`img`);let n=[...t.querySelectorAll(`svg text[text-anchor="middle"]`)];await l(n.length).toBeLessThan(10),await l(n[0]).toHaveTextContent(`Oct 1`)}},g={args:{data:[]},play:async({canvas:e})=>{await l(e.getByText(`No data`)).toBeVisible()}},_=[`Stacked`,`Palette`,`Grouped`,`ManyCategories`,`Empty`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Stacked over time, in status colours. The last bucket is faded: it is still filling.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`The default palette, when series have no meaning of their own.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Side by side, on categories: this week against last.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`A month of days in a narrow card: labels that would overlap are skipped.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No data')).toBeVisible();
  }
}`,...g.parameters?.docs?.source},description:{story:`No rows for the period.`,...g.parameters?.docs?.description}}}})))()}v();export{g as Empty,m as Grouped,h as ManyCategories,p as Palette,f as Stacked,_ as __namedExportsOrder,d as default};