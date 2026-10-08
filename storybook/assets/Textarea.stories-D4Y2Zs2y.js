import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./Textarea-Bn2v5EZX.js";var o=t({AutoSize:()=>g,Controlled:()=>S,Default:()=>p,Disabled:()=>b,MaxLength:()=>y,ReadOnly:()=>x,Rows:()=>h,Sizes:()=>m,Validation:()=>v,WithHelperText:()=>_,__namedExportsOrder:()=>C,default:()=>d}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{s=r(),i(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Inputs/Textarea`,component:a,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]},resize:{control:`inline-radio`,options:[`none`,`both`,`vertical`,`horizontal`]}},args:{label:`Message`,placeholder:`Write a message…`,onChange:u()}},f={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},p={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Message`);await l(r.tagName).toBe(`TEXTAREA`),await t.type(r,`Line one{Enter}Line two`),await l(r).toHaveValue(`Line one
Line two`),await l(n.onChange).toHaveBeenCalled()}},m={render:e=>(0,c.jsx)(`div`,{style:f,children:[`sm`,`md`].map(t=>(0,c.jsx)(a,{...e,size:t,label:t,minRows:2},t))})},h={args:{minRows:5},play:async({canvas:e})=>{await l(e.getByLabelText(`Message`)).toHaveAttribute(`rows`,`5`)}},g={args:{hasAutoSize:!0,minRows:2,maxRows:5},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`),r=n.getBoundingClientRect().height;await t.type(n,`one{Enter}two{Enter}three{Enter}four`);let i=n.getBoundingClientRect().height;await l(i).toBeGreaterThan(r),await t.type(n,`{Enter}five{Enter}six{Enter}seven{Enter}eight`);let a=n.getBoundingClientRect().height,{lineHeight:o,paddingTop:s,paddingBottom:c}=getComputedStyle(n),u=parseFloat(s)+parseFloat(c);await l(a).toBeLessThanOrEqual(parseFloat(o)*5+u+1),await t.clear(n),await l(n.getBoundingClientRect().height).toBeLessThan(i)}},_={args:{helperText:`Markdown is supported.`},play:async({canvas:e})=>{await l(e.getByLabelText(`Message`)).toHaveAccessibleDescription(`Markdown is supported.`)}},v={args:{validationState:`error`,helperText:`A message is required.`,required:!0},play:async({canvas:e})=>{let t=e.getByLabelText(/Message/);await l(t).toHaveAttribute(`aria-invalid`,`true`),await l(t).toBeRequired()}},y={args:{maxLength:10},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`);await t.type(n,`abcdefghijklmnop`),await l(n).toHaveValue(`abcdefghij`)}},b={args:{disabled:!0,defaultValue:`Locked.`},play:async({canvas:e})=>{await l(e.getByLabelText(`Message`)).toBeDisabled()}},x={args:{readOnly:!0,defaultValue:`Read only.`}},S={render:function(e){let[t,n]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{style:f,children:[(0,c.jsx)(a,{...e,value:t,onChange:e=>n(e.target.value),hasAutoSize:!0}),(0,c.jsxs)(`span`,{children:[t.length,` characters`]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Message`),`Hello`),await l(e.getByText(`5 characters`)).toBeVisible()}},C=[`Default`,`Sizes`,`Rows`,`AutoSize`,`WithHelperText`,`Validation`,`MaxLength`,`Disabled`,`ReadOnly`,`Controlled`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const box = canvas.getByLabelText('Message');
    await expect(box.tagName).toBe('TEXTAREA');
    await userEvent.type(box, 'Line one{Enter}Line two');
    await expect(box).toHaveValue('Line one\\nLine two');
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <Textarea key={size} {...args} size={size} label={size} minRows={2} />)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 5
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAttribute('rows', '5');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    hasAutoSize: true,
    minRows: 2,
    maxRows: 5
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const box = canvas.getByLabelText('Message');
    const start = box.getBoundingClientRect().height;
    await userEvent.type(box, 'one{Enter}two{Enter}three{Enter}four');
    const grown = box.getBoundingClientRect().height;
    await expect(grown).toBeGreaterThan(start);
    // Past maxRows it stops growing and scrolls.
    await userEvent.type(box, '{Enter}five{Enter}six{Enter}seven{Enter}eight');
    const capped = box.getBoundingClientRect().height;
    const {
      lineHeight,
      paddingTop,
      paddingBottom
    } = getComputedStyle(box);
    const pad = parseFloat(paddingTop) + parseFloat(paddingBottom);
    await expect(capped).toBeLessThanOrEqual(parseFloat(lineHeight) * 5 + pad + 1);
    // And it shrinks again when text is removed.
    await userEvent.clear(box);
    await expect(box.getBoundingClientRect().height).toBeLessThan(grown);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Markdown is supported.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAccessibleDescription('Markdown is supported.');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'A message is required.',
    required: true
  },
  play: async ({
    canvas
  }) => {
    const box = canvas.getByLabelText(/Message/);
    await expect(box).toHaveAttribute('aria-invalid', 'true');
    await expect(box).toBeRequired();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 10
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const box = canvas.getByLabelText('Message');
    await userEvent.type(box, 'abcdefghijklmnop');
    await expect(box).toHaveValue('abcdefghij');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Locked.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toBeDisabled();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Read only.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <div style={stack}>
        <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} hasAutoSize />
        <span>{value.length} characters</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello');
    await expect(canvas.getByText('5 characters')).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}}})))()}export{w as a,o as i,p as n,m as r,g as t};