import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./FieldControl-BeQ__K97.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./InputField-DjjlzSzi.js";var g,_,v;function y(){return(y=e((()=>{g=`_multiline_ygfhx_8`,_=`_textarea_ygfhx_23`,v={multiline:g,"pad-sm":`_pad-sm_ygfhx_12`,"pad-md":`_pad-md_ygfhx_15`,textarea:_}})))()}function b({label:e,helperText:t,validationState:n,size:r=`md`,isFullWidth:a,resize:o=`vertical`,hasAutoSize:s=!1,minRows:c=3,maxRows:u,required:g,disabled:_,name:y,className:b,onInput:C,ref:w,style:T,...E}){let D=(0,x.useRef)(null),O=(0,x.useCallback)(()=>{let e=D.current;e&&s&&(e.style.blockSize=`auto`,e.style.blockSize=`${e.scrollHeight}px`)},[s]);return(0,x.useLayoutEffect)(O,[O,E.value]),(0,S.jsx)(h,{label:e,helperText:t,validationState:n,required:g,disabled:_,name:y,isFullWidth:a,className:b,children:(0,S.jsx)(`span`,{className:i(m(r),v.multiline,v[`pad-${r}`]),onMouseDown:d,children:(0,S.jsx)(l,{render:(0,S.jsx)(`textarea`,{rows:c,ref:e=>{D.current=e,f(w,e)}}),...E,required:g,onInput:e=>{O(),C?.(e)},className:i(p.control,v.textarea),style:{...T,resize:s?`none`:o,...u&&{maxBlockSize:`calc(${u} * 1lh + 2 * var(--pad-block))`}}})})})}var x,S;function C(){return(C=e((()=>{x=n(),c(),r(),u(),y(),S=a(),b.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'both' | 'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'both'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:"Which way the user can drag to resize. Ignored with `hasAutoSize`.",defaultValue:{value:`'vertical'`,computed:!1}},hasAutoSize:{required:!1,tsType:{name:`boolean`},description:"Grow and shrink with the content, between `minRows` and `maxRows`.",defaultValue:{value:`false`,computed:!1}},minRows:{required:!1,tsType:{name:`number`},description:`The starting height, in lines.`,defaultValue:{value:`3`,computed:!1}},maxRows:{required:!1,tsType:{name:`number`},description:`The most it grows to before scrolling, in lines.`}},composes:[`Omit`]}})))()}var w=t({Anatomy:()=>H,AutoSize:()=>P,Controlled:()=>B,Default:()=>j,Disabled:()=>R,DoFitTheAnswer:()=>U,DontOneRow:()=>W,MaxLength:()=>L,ReadOnly:()=>z,Rows:()=>N,Sizes:()=>M,Validation:()=>I,WithHelperText:()=>F,__namedExportsOrder:()=>G,anatomyParts:()=>V,default:()=>k}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{T=n(),o(),C(),E=a(),{expect:D,fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Inputs/Textarea`,tags:[`beta`],component:b,argTypes:{label:{description:"The visible name, above the field. A real `<label>`: clicking it focuses the textarea.",control:`text`,table:{type:{summary:`ReactNode`}}},placeholder:{description:"A hint of what to write, gone as soon as anyone types. Never a replacement for `label`.",control:`text`,table:{type:{summary:`string`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"Block padding of 2px (`sm`) or 6px (`md`), after Atlassian. Both take 14px text.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},minRows:{description:"The starting height, in lines (the `rows` attribute).",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`3`}}},maxRows:{description:`The most it grows to before scrolling, in lines. Caps a manual resize too.`,control:`number`,table:{type:{summary:`number`}}},hasAutoSize:{description:"Grows and shrinks with the text, between `minRows` and `maxRows`. Hides the resize handle.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},resize:{description:"Which way the user can drag the handle in the corner. Ignored with `hasAutoSize`.",control:`inline-radio`,options:[`none`,`both`,`vertical`,`horizontal`],table:{type:{summary:`'none' | 'both' | 'vertical' | 'horizontal'`},defaultValue:{summary:`'vertical'`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed, out of the tab order, not submitted.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:"Native `readOnly`: focusable and submitted, but not editable. Filled grey.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:"Native `required`. Adds an asterisk to the label, hidden from screen readers.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},maxLength:{description:"Native `maxLength`: typing stops at this many characters.",control:`number`,table:{type:{summary:`number`}}},value:{description:"The text, controlled. Pair with `onChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting text, uncontrolled.`,control:!1,table:{type:{summary:`string`}}},onChange:{description:"The native change event, as on `<textarea>`: read `event.target.value`.",control:!1,table:{type:{summary:`(event: ChangeEvent<HTMLTextAreaElement>) => void`}}}},args:{label:`Message`,placeholder:`Write a message…`,onChange:O()},excludeStories:[`anatomyParts`]},A={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},j={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Message`);await D(r.tagName).toBe(`TEXTAREA`),await t.type(r,`Line one{Enter}Line two`),await D(r).toHaveValue(`Line one
Line two`),await D(n.onChange).toHaveBeenCalled()}},M={render:e=>(0,E.jsx)(`div`,{style:A,children:[`sm`,`md`].map(t=>(0,E.jsx)(b,{...e,size:t,label:t,minRows:2},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`].map(t=>{let{paddingTop:n,paddingBottom:r,paddingLeft:i,paddingRight:a}=getComputedStyle(e.getByLabelText(t));return[n,r,i,a]});await D(t).toEqual([[`2px`,`2px`,`10px`,`10px`],[`6px`,`6px`,`10px`,`10px`]])}},N={args:{minRows:5},play:async({canvas:e})=>{await D(e.getByLabelText(`Message`)).toHaveAttribute(`rows`,`5`)}},P={args:{hasAutoSize:!0,minRows:2,maxRows:5},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`),r=n.getBoundingClientRect().height;await t.type(n,`one{Enter}two{Enter}three{Enter}four`);let i=n.getBoundingClientRect().height;await D(i).toBeGreaterThan(r),await t.type(n,`{Enter}five{Enter}six{Enter}seven{Enter}eight`);let a=n.getBoundingClientRect().height,{lineHeight:o,paddingTop:s,paddingBottom:c}=getComputedStyle(n),l=parseFloat(s)+parseFloat(c);await D(a).toBeLessThanOrEqual(parseFloat(o)*5+l+1),await t.clear(n),await D(n.getBoundingClientRect().height).toBeLessThan(i)}},F={args:{helperText:`Markdown is supported.`},play:async({canvas:e})=>{await D(e.getByLabelText(`Message`)).toHaveAccessibleDescription(`Markdown is supported.`)}},I={args:{validationState:`error`,helperText:`A message is required.`,required:!0},play:async({canvas:e})=>{let t=e.getByLabelText(/Message/);await D(t).toHaveAttribute(`aria-invalid`,`true`),await D(t).toBeRequired()}},L={args:{maxLength:10},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Message`);await t.type(n,`abcdefghijklmnop`),await D(n).toHaveValue(`abcdefghij`)}},R={args:{disabled:!0,defaultValue:`Locked.`},play:async({canvas:e})=>{await D(e.getByLabelText(`Message`)).toBeDisabled()}},z={args:{readOnly:!0,defaultValue:`Read only.`}},B={render:function(e){let[t,n]=(0,T.useState)(``);return(0,E.jsxs)(`div`,{style:A,children:[(0,E.jsx)(b,{...e,value:t,onChange:e=>n(e.target.value),hasAutoSize:!0}),(0,E.jsxs)(`span`,{children:[t.length,` characters`]})]})},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByLabelText(`Message`),`Hello`),await D(e.getByText(`5 characters`)).toBeVisible()}},V=[{name:`Label`,selector:`label`,description:`Names the field. Clicking it focuses the textarea.`},{name:`Container`,selector:`label + span`,description:`The box: edge, fill and focus ring. It grows with the textarea.`},{name:`Input`,selector:`textarea`,description:`The text, padded inside the box, so the resize handle sits in its corner.`},{name:`Helper text`,selector:`label + span + p`,description:`The textarea's description. The error message when invalid.`}],H={tags:[`!dev`],args:{label:`Description`,defaultValue:`Sturdy oak table, seats six.`,helperText:`Shown on the product page.`,minRows:3},play:async({canvasElement:e})=>{let t=await s(e,V);await D(t[3]).toHaveTextContent(`Shown on the product page.`)}},U={args:{label:`Description`,placeholder:`What it is, what it is made of, who it is for`,minRows:4}},W={tags:[`!dev`],args:{label:`Description`,placeholder:`What it is, what it is made of, who it is for`,minRows:1}},G=[`Default`,`Sizes`,`Rows`,`AutoSize`,`WithHelperText`,`Validation`,`MaxLength`,`Disabled`,`ReadOnly`,`Controlled`,`anatomyParts`,`Anatomy`,`DoFitTheAnswer`,`DontOneRow`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md'] as const).map(size => <Textarea key={size} {...args} size={size} label={size} minRows={2} />)}
    </div>,
  play: async ({
    canvas
  }) => {
    // Atlassian's textarea padding: 2px (sm) or 6px (md) above and below;
    // 10px at the sides, as every field's box, inside the 1px edge.
    const pads = ['sm', 'md'].map(n => {
      const {
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight
      } = getComputedStyle(canvas.getByLabelText(n));
      return [paddingTop, paddingBottom, paddingLeft, paddingRight];
    });
    await expect(pads).toEqual([['2px', '2px', '10px', '10px'], ['6px', '6px', '10px', '10px']]);
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 5
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAttribute('rows', '5');
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Markdown is supported.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toHaveAccessibleDescription('Markdown is supported.');
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Locked.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Message')).toBeDisabled();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Read only.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Every part present.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'What it is, what it is made of, who it is for',
    minRows: 4
  }
}`,...U.parameters?.docs?.source},description:{story:`Guidelines, Do: a starting height that fits the answer expected.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Description',
    placeholder: 'What it is, what it is made of, who it is for',
    minRows: 1
  }
}`,...W.parameters?.docs?.source},description:{story:`Guidelines, Don't: one row reads as a single-line field and hides what is written.`,...W.parameters?.docs?.description}}}})))()}export{W as a,V as c,C as d,U as i,K as l,P as n,M as o,j as r,w as s,H as t,b as u};