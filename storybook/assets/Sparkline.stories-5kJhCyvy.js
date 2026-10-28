import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,s as r}from"./sample-data-BFlXvA0M.js";import{n as i,t as a}from"./Sparkline-DN9lxZrM.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),n(),o=t(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=r.map(e=>e.requests),u={title:`Charts/Sparkline`,tags:[`experimental`],component:a,parameters:{layout:`padded`},decorators:[e=>(0,o.jsx)(`div`,{style:{inlineSize:240},children:e()})],args:{data:l},argTypes:{data:{control:!1,description:`Values in order, oldest first. Empty or null shows "No data".`},color:{control:`select`,options:[`chart-1`,`chart-2`,`chart-3`,`chart-4`,`chart-5`,`chart-6`,`chart-7`,`chart-8`,`success`,`danger`],description:`A colour token name.`},appearance:{control:`inline-radio`,options:[`line`,`area`],description:"`area` fills under the line."},"aria-label":{description:`Off by default, as decoration beside a figure. Name it when the spark is the only place the trend is shown.`}}},d={play:async({canvasElement:e})=>{await s(e.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`),await s(e.querySelectorAll(`path`)).toHaveLength(2)}},f={args:{appearance:`line`,color:`chart-3`},play:async({canvasElement:e})=>{await s(e.querySelectorAll(`path`)).toHaveLength(1)}},p={args:{"aria-label":`Requests, last 24 hours, rising`},play:async({canvas:e})=>{await c(()=>s(e.getByRole(`img`,{name:`Requests, last 24 hours, rising`})).toBeVisible())}},m={args:{data:[]},play:async({canvas:e})=>{await s(e.getByText(`No data`)).toBeVisible()}},h=[`Default`,`Line`,`Labelled`,`Empty`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(2);
  }
}`,...d.parameters?.docs?.source},description:{story:`Beside a figure, the spark is decoration: hidden from assistive tech.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'line',
    color: 'chart-3'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(1);
  }
}`,...f.parameters?.docs?.source},description:{story:`Just the line.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Requests, last 24 hours, rising'
  },
  play: async ({
    canvas
  }) => {
    // waitFor: the spark fades in.
    await waitFor(() => expect(canvas.getByRole('img', {
      name: 'Requests, last 24 hours, rising'
    })).toBeVisible());
  }
}`,...p.parameters?.docs?.source},description:{story:`When the trend is shown nowhere else, it gets a name.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No data')).toBeVisible();
  }
}`,...m.parameters?.docs?.source},description:{story:`Nothing recorded for the period.`,...m.parameters?.docs?.description}}}})))()}g();export{d as Default,m as Empty,p as Labelled,f as Line,h as __namedExportsOrder,u as default};