import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./utils-CUvRSo4U.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,o,t as s}from"./chart-utils-SgpT16SA.js";import{i as c,s as l}from"./sample-data-BFlXvA0M.js";function u({data:e,color:t=`chart-1`,appearance:r=`area`,className:a,"aria-label":o,...c}){let l=!e?.length,u=``,f=l?1:Math.max(...e,0)||1;if(!l&&r!==`bar`){let t=e.length>1?100/(e.length-1):0;u=`M`+e.map((e,n)=>`${(n*t).toFixed(2)},${(29-e/f*27).toFixed(2)}`).join(`L`),e.length===1&&(u+=`L100,`+u.split(`,`)[1])}let p=o?{role:`img`,"aria-label":o}:{"aria-hidden":!0};return(0,d.jsxs)(`div`,{...c,className:n(i.spark,a),children:[!l&&r===`bar`?(0,d.jsx)(`svg`,{fill:s(t),...p,children:e.map((t,n)=>{let r=Math.max(4,Math.max(t,0)/f*100);return(0,d.jsx)(`rect`,{x:`${(n+.125)*100/e.length}%`,width:`${75/e.length}%`,y:`${100-r}%`,height:`${r}%`,rx:1},n)})}):(0,d.jsx)(`svg`,{viewBox:`0 0 100 30`,preserveAspectRatio:`none`,...p,children:l?(0,d.jsx)(`path`,{className:i.sparkEmpty,d:`M0,20 C25,14 40,24 60,18 S90,12 100,16`}):(0,d.jsxs)(d.Fragment,{children:[r===`area`&&(0,d.jsx)(`path`,{className:i.sparkArea,d:`${u}L100,30L0,30Z`,fill:s(t)}),(0,d.jsx)(`path`,{className:i.sparkLine,d:u,stroke:s(t)})]})}),l&&(0,d.jsx)(`span`,{className:i.badge,children:`No data`})]})}var d;function f(){return(f=e((()=>{t(),o(),a(),d=r(),u.__docgenInfo={description:`A trend with no axes, 96 × 24 unless a class or style sizes it otherwise.
The viewBox stretches to any width without measuring, and
non-scaling-stroke keeps the line 1.5px. Bars are placed in percentages
instead, so their 1px corners stay round at any width.`,methods:[],displayName:`Sparkline`,props:{data:{required:!0,tsType:{name:`union`,raw:`number[] | null | undefined`,elements:[{name:`Array`,elements:[{name:`number`}],raw:`number[]`},{name:`null`},{name:`undefined`}]},description:`Values in order, oldest first. Empty or null shows "No data".`},color:{required:!1,tsType:{name:`union`,raw:`| 'chart-1'
| 'chart-2'
| 'chart-3'
| 'chart-4'
| 'chart-5'
| 'chart-6'
| 'chart-7'
| 'chart-8'
| 'info'
| 'success'
| 'warning'
| 'danger'
| 'neutral'`,elements:[{name:`literal`,value:`'chart-1'`},{name:`literal`,value:`'chart-2'`},{name:`literal`,value:`'chart-3'`},{name:`literal`,value:`'chart-4'`},{name:`literal`,value:`'chart-5'`},{name:`literal`,value:`'chart-6'`},{name:`literal`,value:`'chart-7'`},{name:`literal`,value:`'chart-8'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'chart-1'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'line' | 'area' | 'bar'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'area'`},{name:`literal`,value:`'bar'`}]},description:"`area` fills under the line; `bar` draws one bar per value, for counts.",defaultValue:{value:`'area'`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Off by default: next to a figure and its change the trend is decoration.
Give it a name when the spark is the only place the trend is shown.`}},composes:[`Omit`]}})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{f(),c(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h=l.map(e=>e.requests),g={title:`Charts/Sparkline`,tags:[`beta`],component:u,parameters:{layout:`padded`},args:{data:h},argTypes:{data:{control:!1,description:`Values in order, oldest first. Empty or null shows "No data".`},color:{control:`select`,options:[`chart-1`,`chart-2`,`chart-3`,`chart-4`,`chart-5`,`chart-6`,`chart-7`,`chart-8`,`success`,`danger`],description:`A colour token name.`},appearance:{control:`inline-radio`,options:[`line`,`area`,`bar`],description:"`area` fills under the line; `bar` draws one bar per value, for counts."},"aria-label":{description:`Off by default, as decoration beside a figure. Name it when the spark is the only place the trend is shown.`}}},_={play:async({canvasElement:e})=>{await p(e.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`),await p(e.querySelectorAll(`path`)).toHaveLength(2);let t=e.querySelector(`svg`).getBoundingClientRect();await p([t.width,t.height]).toEqual([96,24])}},v={args:{appearance:`bar`,data:h.slice(-12)},play:async({canvasElement:e})=>{await p(e.querySelectorAll(`rect`)).toHaveLength(12)}},y={args:{style:{inlineSize:240}},play:async({canvasElement:e})=>{await p(e.querySelector(`svg`).getBoundingClientRect().width).toBe(240)}},b={args:{appearance:`line`,color:`chart-3`},play:async({canvasElement:e})=>{await p(e.querySelectorAll(`path`)).toHaveLength(1)}},x={args:{"aria-label":`Requests, last 24 hours, rising`},play:async({canvas:e})=>{await m(()=>p(e.getByRole(`img`,{name:`Requests, last 24 hours, rising`})).toBeVisible())}},S={args:{data:[]},play:async({canvas:e})=>{await p(e.getByText(`No data`)).toBeVisible()}},C=[`Default`,`Bar`,`Wide`,`Line`,`Labelled`,`Empty`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(2);
    const box = canvasElement.querySelector('svg')!.getBoundingClientRect();
    await expect([box.width, box.height]).toEqual([96, 24]);
  }
}`,..._.parameters?.docs?.source},description:{story:`Beside a figure, the spark is decoration: hidden from assistive tech. 96 × 24 unless sized otherwise.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'bar',
    data: values.slice(-12)
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelectorAll('rect')).toHaveLength(12);
  }
}`,...v.parameters?.docs?.source},description:{story:`One bar per value, for counts.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      inlineSize: 240
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')!.getBoundingClientRect().width).toBe(240);
  }
}`,...y.parameters?.docs?.source},description:{story:`A class or style sets another width: here it fills a 240px cell.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'line',
    color: 'chart-3'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelectorAll('path')).toHaveLength(1);
  }
}`,...b.parameters?.docs?.source},description:{story:`Just the line.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`When the trend is shown nowhere else, it gets a name.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('No data')).toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`Nothing recorded for the period.`,...S.parameters?.docs?.description}}}})))()}w();export{v as Bar,_ as Default,S as Empty,x as Labelled,b as Line,y as Wide,C as __namedExportsOrder,g as default};