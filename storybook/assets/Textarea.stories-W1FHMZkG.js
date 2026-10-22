import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./Textarea-MQZTbd70.js";var c=t({Anatomy:()=>E,AutoSize:()=>v,Controlled:()=>w,Default:()=>h,Disabled:()=>S,DoFitTheAnswer:()=>D,DontOneRow:()=>O,MaxLength:()=>x,ReadOnly:()=>C,Rows:()=>_,Sizes:()=>g,Validation:()=>b,WithHelperText:()=>y,__namedExportsOrder:()=>k,anatomyParts:()=>T,default:()=>p}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l=n(),i(),o(),u=r(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Inputs/Textarea`,tags:[`beta`],component:s,argTypes:{label:{description:"The visible name, above the field. A real `<label>`: clicking it focuses the textarea.",control:`text`,table:{type:{summary:`ReactNode`}}},placeholder:{description:"A hint of what to write, gone as soon as anyone types. Never a replacement for `label`.",control:`text`,table:{type:{summary:`string`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"Text and padding from the `sm` or `md` control tier: 12px text and 6px block padding, or 14px and 8px.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},minRows:{description:"The starting height, in lines (the `rows` attribute).",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`3`}}},maxRows:{description:`The most it grows to before scrolling, in lines. Caps a manual resize too.`,control:`number`,table:{type:{summary:`number`}}},hasAutoSize:{description:"Grows and shrinks with the text, between `minRows` and `maxRows`. Hides the resize handle.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},resize:{description:"Which way the user can drag the handle in the corner. Ignored with `hasAutoSize`.",control:`inline-radio`,options:[`none`,`both`,`vertical`,`horizontal`],table:{type:{summary:`'none' | 'both' | 'vertical' | 'horizontal'`},defaultValue:{summary:`'vertical'`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, not submitted.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: focusable and submitted, but not editable. Filled grey.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:"Native `required`. Adds an asterisk to the label, hidden from screen readers.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},maxLength:{description:"Native `maxLength`: typing stops at this many characters.",control:`number`,table:{type:{summary:`number`}}},value:{description:"The text, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting text, uncontrolled.`,control:!1,table:{type:{summary:`string`}}},onChange:{description:"The native change event, as on `<textarea>`: read `event.target.value`.",control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLTextAreaElement>) => void`}}}},args:{label:`Message`,placeholder:`Write a message…`,onChange:f()},excludeStories:[`anatomyParts`]},m={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},h={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Message`);await d(r.tagName).toBe(`TEXTAREA`),await t.type(r,`Line one{Enter}Line two`),await d(r).toHaveValue(`Line one
Line two`),await d(n.onChange).toHaveBeenCalled()}},g={render:e=>(0,u.jsx)(`div`,{style:m,children:[`sm`,`md`].map(t=>(0,u.jsx)(s,{...e,size:t,label:t,minRows:2},t))})},_={args:{minRows:5},play:async({canvas:e})=>{await d(e.getByLabelText(`Message`)).toHaveAttribute(`rows`,`5`)}},v={args:{hasAutoSize:!0,minRows:2,maxRows:5},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`),r=n.getBoundingClientRect().height;await t.type(n,`one{Enter}two{Enter}three{Enter}four`);let i=n.getBoundingClientRect().height;await d(i).toBeGreaterThan(r),await t.type(n,`{Enter}five{Enter}six{Enter}seven{Enter}eight`);let a=n.getBoundingClientRect().height,{lineHeight:o,paddingTop:s,paddingBottom:c}=getComputedStyle(n),l=parseFloat(s)+parseFloat(c);await d(a).toBeLessThanOrEqual(parseFloat(o)*5+l+1),await t.clear(n),await d(n.getBoundingClientRect().height).toBeLessThan(i)}},y={args:{helperText:`Markdown is supported.`},play:async({canvas:e})=>{await d(e.getByLabelText(`Message`)).toHaveAccessibleDescription(`Markdown is supported.`)}},b={args:{validationState:`error`,helperText:`A message is required.`,required:!0},play:async({canvas:e})=>{let t=e.getByLabelText(/Message/);await d(t).toHaveAttribute(`aria-invalid`,`true`),await d(t).toBeRequired()}},x={args:{maxLength:10},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`);await t.type(n,`abcdefghijklmnop`),await d(n).toHaveValue(`abcdefghij`)}},S={args:{disabled:!0,defaultValue:`Locked.`},play:async({canvas:e})=>{await d(e.getByLabelText(`Message`)).toBeDisabled()}},C={args:{readOnly:!0,defaultValue:`Read only.`}},w={render:function(e){let[t,n]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:m,children:[(0,u.jsx)(s,{...e,value:t,onChange:e=>n(e.target.value),hasAutoSize:!0}),(0,u.jsxs)(`span`,{children:[t.length,` characters`]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Message`),`Hello`),await d(e.getByText(`5 characters`)).toBeVisible()}},T=[{name:`Label`,selector:`label`,description:`Names the field. Clicking it focuses the textarea.`},{name:`Container`,selector:`label + span`,description:`The box: edge, fill and focus ring. It grows with the textarea.`},{name:`Input`,selector:`textarea`,description:`The text, padded inside the box, so the resize handle sits in its corner.`},{name:`Helper text`,selector:`label + span + p`,description:`The textarea's description. The error message when invalid.`}],E={tags:[`!dev`],args:{label:`Description`,defaultValue:`Sturdy oak table, seats six.`,helperText:`Shown on the product page.`,minRows:3},play:async({canvasElement:e})=>{let t=await a(e,T);await d(t[3]).toHaveTextContent(`Shown on the product page.`)}},D={args:{label:`Description`,placeholder:`What it is, what it is made of, who it is for`,minRows:4}},O={tags:[`!dev`],args:{label:`Description`,placeholder:`What it is, what it is made of, who it is for`,minRows:1}},k=[`Default`,`Sizes`,`Rows`,`AutoSize`,`WithHelperText`,`Validation`,`MaxLength`,`Disabled`,`ReadOnly`,`Controlled`,`anatomyParts`,`Anatomy`,`DoFitTheAnswer`,`DontOneRow`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <Textarea key={size} {...args} size={size} label={size} minRows={2} />)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 5
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAttribute('rows', '5');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Markdown is supported.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAccessibleDescription('Markdown is supported.');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Locked.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toBeDisabled();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Read only.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Description',
    defaultValue: 'Sturdy oak table, seats six.',
    helperText: 'Shown on the product page.',
    minRows: 3
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveTextContent('Shown on the product page.');
  }
}`,...E.parameters?.docs?.source},description:{story:`Every part present.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'What it is, what it is made of, who it is for',
    minRows: 4
  }
}`,...D.parameters?.docs?.source},description:{story:`Guidelines, Do: a starting height that fits the answer expected.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Description',
    placeholder: 'What it is, what it is made of, who it is for',
    minRows: 1
  }
}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Don't: one row reads as a single-line field and hides what is written.`,...O.parameters?.docs?.description}}}})))()}export{O as a,T as c,D as i,A as l,v as n,g as o,h as r,c as s,E as t};