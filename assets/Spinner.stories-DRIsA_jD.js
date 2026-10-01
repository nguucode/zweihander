import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o=`_spinner_chygw_1`,s=`_sm_chygw_15`,c=`_md_chygw_18`,l=`_lg_chygw_21`,u=`_primary_chygw_28`,d=`_secondary_chygw_31`,f=`_accent_chygw_34`,p=`_svg_chygw_38`,m=`_track_chygw_45`,h=`_indicator_chygw_46`,g=`_spinning_chygw_63`,_=`_spin_chygw_1`,v=`_label_chygw_86`,y=`_hiddenLabel_chygw_91`,b={spinner:o,sm:s,md:c,lg:l,primary:u,secondary:d,accent:f,svg:p,track:m,indicator:h,spinning:g,spin:_,label:v,hiddenLabel:y}})))()}function S({size:e=`md`,variant:t=`accent`,delay:n=0,value:r,isIndeterminate:i=!1,label:o,className:s,...c}){let[l,u]=(0,C.useState)(!1);(0,C.useEffect)(()=>{let e=setTimeout(()=>u(!0),Math.max(0,n));return()=>clearTimeout(e)},[n]);let d=r!==void 0&&!i,f=d?Math.min(100,Math.max(0,r)):0,p=o||`Loading`,m=(0,w.jsxs)(`svg`,{viewBox:`0 0 24 24`,className:a(b.svg,!d&&b.spinning),"aria-hidden":`true`,children:[(0,w.jsx)(`circle`,{className:b.track,cx:`12`,cy:`12`,r:T}),(0,w.jsx)(`circle`,{className:b.indicator,cx:`12`,cy:`12`,r:T,strokeDasharray:E,strokeDashoffset:d?E*(1-f/100):E*.75})]});return d?n>0&&!l?null:(0,w.jsxs)(`span`,{role:`progressbar`,"aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":100,"aria-label":p,className:a(b.spinner,b[e],b[t],s),...c,children:[m,o&&(0,w.jsx)(`span`,{className:b.label,children:o})]}):(0,w.jsx)(`span`,{role:`status`,"aria-label":p,className:a(b.spinner,b[e],b[t],s),...c,children:l&&(0,w.jsxs)(w.Fragment,{children:[m,(0,w.jsx)(`span`,{className:o?b.label:b.hiddenLabel,children:p})]})})}var C,w,T,E;function D(){return(D=e((()=>{C=r(),i(),x(),w=n(),T=10,E=2*Math.PI*T,S.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`}]},description:"Colour of the indicator. `accent` is the foreground, as on Button.",defaultValue:{value:`'accent'`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Wait this many milliseconds before showing, so a fast load never flashes a spinner.`,defaultValue:{value:`0`,computed:!1}},value:{required:!1,tsType:{name:`number`},description:`0–100. Omit for an indeterminate, spinning indicator.`},isIndeterminate:{required:!1,tsType:{name:`boolean`},description:"Spin even when `value` is given.",defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Shown under the indicator and used as its accessible name ("Loading" when omitted).`}},composes:[`Omit`]}})))()}var O=t({Clamped:()=>z,Default:()=>P,Delay:()=>V,Determinate:()=>R,IndeterminateWithValue:()=>B,Sizes:()=>I,Variants:()=>L,WithLabel:()=>F,__namedExportsOrder:()=>H,default:()=>M}),k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{D(),k=n(),{expect:A,waitFor:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/Loaders/Spinner`,component:S,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`]}}},N={display:`flex`,gap:`var(--space-6)`,alignItems:`center`},P={play:async({canvas:e})=>{let t=e.getByRole(`status`,{name:`Loading`});await j(()=>A(t).toHaveTextContent(`Loading`))}},F={args:{label:`Loading projects…`},play:async({canvas:e})=>{await A(e.getByRole(`status`,{name:`Loading projects…`})).toBeInTheDocument(),await A(await e.findByText(`Loading projects…`)).toBeVisible()}},I={render:e=>(0,k.jsx)(`div`,{style:N,children:[`sm`,`md`,`lg`].map(t=>(0,k.jsx)(S,{...e,size:t,label:t},t))}),play:async({canvasElement:e})=>{await j(()=>A(e.querySelectorAll(`svg`)).toHaveLength(3));let t=[...e.querySelectorAll(`svg`)].map(e=>e.getBoundingClientRect().width);await A(t).toEqual([16,24,32])}},L={render:e=>(0,k.jsx)(`div`,{style:N,children:[`primary`,`accent`,`secondary`].map(t=>(0,k.jsx)(S,{...e,variant:t,label:t},t))})},R={args:{value:70,label:`Uploading`,variant:`primary`,size:`lg`},play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await A(t).toHaveAttribute(`aria-valuenow`,`70`)}},z={args:{value:150,label:`Uploading`},play:async({canvas:e})=>{await A(e.getByRole(`progressbar`,{name:`Uploading`})).toHaveAttribute(`aria-valuenow`,`100`)}},B={args:{value:40,isIndeterminate:!0},play:async({canvas:e})=>{await A(e.queryByRole(`progressbar`)).toBeNull(),await A(e.getByRole(`status`,{name:`Loading`})).toBeInTheDocument()}},V={args:{delay:400},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`);await A(n).toBeEmptyDOMElement(),await j(()=>A(t.querySelector(`svg`)).toBeVisible(),{timeout:2e3}),await A(n).toHaveTextContent(`Loading`)}},H=[`Default`,`WithLabel`,`Sizes`,`Variants`,`Determinate`,`Clamped`,`IndeterminateWithValue`,`Delay`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    // A status, named "Loading" when no label is given; the text that is
    // announced arrives after the region is in the page.
    const status = canvas.getByRole('status', {
      name: 'Loading'
    });
    await waitFor(() => expect(status).toHaveTextContent('Loading'));
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading projects…'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status', {
      name: 'Loading projects…'
    })).toBeInTheDocument();
    await expect(await canvas.findByText('Loading projects…')).toBeVisible();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md', 'lg'] as const).map(size => <Spinner key={size} {...args} size={size} label={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(canvasElement.querySelectorAll('svg')).toHaveLength(3));
    const widths = [...canvasElement.querySelectorAll('svg')].map(s => s.getBoundingClientRect().width);
    await expect(widths).toEqual([16, 24, 32]);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map(variant => <Spinner key={variant} {...args} variant={variant} label={variant} />)}
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    label: 'Uploading',
    variant: 'primary',
    size: 'lg'
  },
  play: async ({
    canvas
  }) => {
    const ring = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(ring).toHaveAttribute('aria-valuenow', '70');
  }
}`,...R.parameters?.docs?.source},description:{story:`With a value it becomes a progress ring and says how far along it is.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 150,
    label: 'Uploading'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Uploading'
    })).toHaveAttribute('aria-valuenow', '100');
  }
}`,...z.parameters?.docs?.source},description:{story:`Values outside 0–100 are clamped.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    isIndeterminate: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('progressbar')).toBeNull();
    await expect(canvas.getByRole('status', {
      name: 'Loading'
    })).toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source},description:{story:`isIndeterminate wins over value: it spins, and is a status again.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 400
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const status = canvas.getByRole('status');
    await expect(status).toBeEmptyDOMElement();
    await waitFor(() => expect(canvasElement.querySelector('svg')).toBeVisible(), {
      timeout: 2000
    });
    await expect(status).toHaveTextContent('Loading');
  }
}`,...V.parameters?.docs?.source},description:{story:`Nothing visible for the first 400ms, so a fast load never flashes a
spinner. The empty live region is there from the start, so its text is
announced when it arrives.`,...V.parameters?.docs?.description}}}})))()}export{O as a,U as c,I as i,V as n,L as o,R as r,F as s,P as t};