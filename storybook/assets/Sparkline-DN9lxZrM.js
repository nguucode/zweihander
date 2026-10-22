import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./utils-CUvRSo4U.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,l as a,o,t as s}from"./chart-utils-DFuv4Pns.js";function c({data:e,color:t=`chart-1`,appearance:r=`area`,className:a,"aria-label":o,...c}){let u=!e?.length,d=``;if(!u){let t=Math.max(...e,0)||1,n=e.length>1?100/(e.length-1):0;d=`M`+e.map((e,r)=>`${(r*n).toFixed(2)},${(29-e/t*27).toFixed(2)}`).join(`L`),e.length===1&&(d+=`L100,`+d.split(`,`)[1])}return(0,l.jsxs)(`div`,{...c,className:n(i.spark,a),children:[(0,l.jsx)(`svg`,{viewBox:`0 0 100 30`,preserveAspectRatio:`none`,...o?{role:`img`,"aria-label":o}:{"aria-hidden":!0},children:u?(0,l.jsx)(`path`,{className:i.sparkEmpty,d:`M0,20 C25,14 40,24 60,18 S90,12 100,16`}):(0,l.jsxs)(l.Fragment,{children:[r===`area`&&(0,l.jsx)(`path`,{className:i.sparkArea,d:`${d}L100,30L0,30Z`,fill:s(t)}),(0,l.jsx)(`path`,{className:i.sparkLine,d,stroke:s(t)})]})}),u&&(0,l.jsx)(`span`,{className:i.badge,children:`No data`})]})}var l;function u(){return(u=e((()=>{t(),o(),a(),l=r(),c.__docgenInfo={description:`A trend with no axes, sized by its container. The viewBox stretches to any
width without measuring, and non-scaling-stroke keeps the line 1.25px.`,methods:[],displayName:`Sparkline`,props:{data:{required:!0,tsType:{name:`union`,raw:`number[] | null | undefined`,elements:[{name:`Array`,elements:[{name:`number`}],raw:`number[]`},{name:`null`},{name:`undefined`}]},description:`Values in order, oldest first. Empty or null shows "No data".`},color:{required:!1,tsType:{name:`union`,raw:`| 'chart-1'
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
| 'neutral'`,elements:[{name:`literal`,value:`'chart-1'`},{name:`literal`,value:`'chart-2'`},{name:`literal`,value:`'chart-3'`},{name:`literal`,value:`'chart-4'`},{name:`literal`,value:`'chart-5'`},{name:`literal`,value:`'chart-6'`},{name:`literal`,value:`'chart-7'`},{name:`literal`,value:`'chart-8'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'chart-1'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'line' | 'area'`,elements:[{name:`literal`,value:`'line'`},{name:`literal`,value:`'area'`}]},description:"`area` fills under the line.",defaultValue:{value:`'area'`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Off by default: next to a figure and its change the trend is decoration.
Give it a name when the spark is the only place the trend is shown.`}},composes:[`Omit`]}})))()}export{u as n,c as t};