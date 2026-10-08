import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Spinner-D41K1m_3.js";var a=t({Clamped:()=>g,Default:()=>d,Delay:()=>v,Determinate:()=>h,IndeterminateWithValue:()=>_,Sizes:()=>p,Variants:()=>m,WithLabel:()=>f,__namedExportsOrder:()=>y,default:()=>l}),o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o=n(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Loaders/Spinner`,component:i,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`]}}},u={display:`flex`,gap:`var(--space-6)`,alignItems:`center`},d={play:async({canvas:e})=>{let t=e.getByRole(`status`,{name:`Loading`});await c(()=>s(t).toHaveTextContent(`Loading`))}},f={args:{label:`Loading projects…`},play:async({canvas:e})=>{await s(e.getByRole(`status`,{name:`Loading projects…`})).toBeInTheDocument(),await s(await e.findByText(`Loading projects…`)).toBeVisible()}},p={render:e=>(0,o.jsx)(`div`,{style:u,children:[`sm`,`md`,`lg`].map(t=>(0,o.jsx)(i,{...e,size:t,label:t},t))}),play:async({canvasElement:e})=>{await c(()=>s(e.querySelectorAll(`svg`)).toHaveLength(3));let t=[...e.querySelectorAll(`svg`)].map(e=>e.getBoundingClientRect().width);await s(t).toEqual([16,24,32])}},m={render:e=>(0,o.jsx)(`div`,{style:u,children:[`primary`,`accent`,`secondary`].map(t=>(0,o.jsx)(i,{...e,variant:t,label:t},t))})},h={args:{value:70,label:`Uploading`,variant:`primary`,size:`lg`},play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await s(t).toHaveAttribute(`aria-valuenow`,`70`)}},g={args:{value:150,label:`Uploading`},play:async({canvas:e})=>{await s(e.getByRole(`progressbar`,{name:`Uploading`})).toHaveAttribute(`aria-valuenow`,`100`)}},_={args:{value:40,isIndeterminate:!0},play:async({canvas:e})=>{await s(e.queryByRole(`progressbar`)).toBeNull(),await s(e.getByRole(`status`,{name:`Loading`})).toBeInTheDocument()}},v={args:{delay:400},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`status`);await s(n).toBeEmptyDOMElement(),await c(()=>s(t.querySelector(`svg`)).toBeVisible(),{timeout:2e3}),await s(n).toHaveTextContent(`Loading`)}},y=[`Default`,`WithLabel`,`Sizes`,`Variants`,`Determinate`,`Clamped`,`IndeterminateWithValue`,`Delay`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['primary', 'accent', 'secondary'] as const).map(variant => <Spinner key={variant} {...args} variant={variant} label={variant} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`With a value it becomes a progress ring and says how far along it is.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Values outside 0–100 are clamped.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`isIndeterminate wins over value: it spins, and is a status again.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Nothing visible for the first 400ms, so a fast load never flashes a
spinner. The empty live region is there from the start, so its text is
announced when it arrives.`,...v.parameters?.docs?.description}}}})))()}export{a,b as c,p as i,v as n,m as o,h as r,f as s,d as t};