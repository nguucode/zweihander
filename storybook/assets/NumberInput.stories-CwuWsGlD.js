import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./expectAnatomy-C52ByQ6s.js";import{n as o,t as s}from"./NumberInput-3tms31Bw.js";var c=t({Anatomy:()=>D,Controlled:()=>w,Default:()=>m,Disabled:()=>x,DoQuantity:()=>O,DontIdentifier:()=>k,InAForm:()=>T,Limits:()=>h,NarrowContainer:()=>C,Precision:()=>_,ReadOnly:()=>S,Sizes:()=>y,Step:()=>g,Typing:()=>v,Validation:()=>b,__namedExportsOrder:()=>A,anatomyParts:()=>E,default:()=>p}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l=n(),i(),o(),u=r(),{expect:d,fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Inputs/NumberInput`,tags:[`beta`],component:s,argTypes:{label:{description:"The visible name, above the field. A real `<label>`: clicking it focuses the input.",control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the field, read as its description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the edge and the helper text. `error` also sets `aria-invalid`.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers. The steppers are 16 or 24px.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},value:{description:"The number, controlled. `null` is empty. Pair with `onValueChange`.",control:!1,table:{type:{summary:`number | null`}}},defaultValue:{description:`The starting number, uncontrolled.`,control:`number`,table:{type:{summary:`number`}}},onValueChange:{description:"Called with the parsed number on every change, `null` when the field is emptied.",control:!1,table:{type:{summary:`(value: number | null) => void`}}},min:{description:`The lowest value. The decrease button is disabled there.`,control:`number`,table:{type:{summary:`number`}}},max:{description:`The highest value. The increase button is disabled there.`,control:`number`,table:{type:{summary:`number`}}},step:{description:`How much the buttons and arrow keys change the value. With the arrow keys, Shift steps by 10 and Alt by 0.1 instead.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},precision:{description:"Decimal places shown and accepted, e.g. `2` for a price.",control:`number`,table:{type:{summary:`number`}}},placeholder:{description:`Shown while empty.`,control:`text`,table:{type:{summary:`string`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dimmed, out of the tab order, steppers off.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but neither typing nor the steppers change it.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:`Submitted with the form, as the number without formatting.`,control:!1,table:{type:{summary:`string`}}},"aria-label":{description:"The name when there is no visible `label`.",control:!1,table:{type:{summary:`string`}}},ref:{description:"Points at the `<input>`.",control:!1,table:{type:{summary:`Ref`}}},id:{description:"The id of the `<input>`.",control:!1,table:{type:{summary:`string`}}},className:{description:`Added to the outer element, the field with its label and helper text.`,control:!1,table:{type:{summary:`string`}}}},args:{label:`Quantity`,defaultValue:6,min:0,max:100,onValueChange:f()},excludeStories:[`anatomyParts`]},m={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await d(r).toHaveValue(`6`),await t.click(e.getByRole(`button`,{name:/increase/i})),await d(r).toHaveValue(`7`),await d(n.onValueChange).toHaveBeenLastCalledWith(7),await t.click(e.getByRole(`button`,{name:/decrease/i})),await d(r).toHaveValue(`6`),await t.click(r),await t.keyboard(`{ArrowUp}{ArrowUp}`),await d(r).toHaveValue(`8`),await t.keyboard(`{ArrowDown}`),await d(r).toHaveValue(`7`),await t.keyboard(`{Shift>}{ArrowUp}{/Shift}`),await d(r).toHaveValue(`17`),await d(e.getByRole(`button`,{name:/increase/i})).toHaveAttribute(`tabindex`,`-1`)}},h={args:{defaultValue:99,max:100},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:/increase/i});await t.click(n),await d(e.getByLabelText(`Quantity`)).toHaveValue(`100`),await d(n).toBeDisabled(),await d(getComputedStyle(n).opacity).toBe(`0.5`)}},g={args:{defaultValue:10,step:5},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await d(e.getByLabelText(`Quantity`)).toHaveValue(`15`)}},_={args:{label:`Price`,defaultValue:9.5,step:.25,precision:2},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Price`);await d(n).toHaveValue(`9.50`),await t.click(e.getByRole(`button`,{name:/increase/i})),await d(n).toHaveValue(`9.75`)}},v={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByLabelText(`Quantity`);await t.clear(r),await d(n.onValueChange).toHaveBeenLastCalledWith(null),await t.type(r,`42`),await d(n.onValueChange).toHaveBeenLastCalledWith(42)}},y={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,u.jsx)(s,{...e,size:t,label:t},t))})},b={args:{validationState:`error`,helperText:`Order at least 1.`,defaultValue:0},play:async({canvas:e})=>{await d(e.getByLabelText(`Quantity`)).toHaveAttribute(`aria-invalid`,`true`),await d(e.getByLabelText(`Quantity`)).toHaveAccessibleDescription(`Order at least 1.`)}},x={args:{disabled:!0},play:async({canvas:e})=>{await d(e.getByLabelText(`Quantity`)).toBeDisabled(),await d(e.getByRole(`button`,{name:/increase/i})).toBeDisabled()}},S={args:{readOnly:!0},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await d(n.onValueChange).not.toHaveBeenCalled()}},C={render:e=>(0,u.jsx)(`div`,{style:{inlineSize:`8rem`},children:(0,u.jsx)(s,{...e})}),play:async({canvas:e})=>{await d(e.getByRole(`group`).getBoundingClientRect().width).toBe(128)}},w={render:function(e){let[t,n]=(0,l.useState)(3);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,u.jsx)(s,{...e,defaultValue:void 0,value:t,onValueChange:n}),(0,u.jsxs)(`span`,{children:[`Value: `,t??`empty`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/increase/i})),await d(e.getByText(`Value: 4`)).toBeVisible()}},T={render:e=>(0,u.jsx)(`form`,{"aria-label":`Order`,children:(0,u.jsx)(s,{...e,name:`quantity`})}),play:async({canvasElement:e})=>{await d(new FormData(e.querySelector(`form`)).get(`quantity`)).toBe(`6`)}},E=[{name:`Label`,selector:`label`,description:`Names the field. Clicking it focuses the input.`},{name:`Container`,selector:`[role="group"]`,description:`The box: edge, fill and focus ring, with the steppers inside it.`},{name:`Input`,selector:`[role="group"] > input`,description:"The number, in tabular figures, formatted to `precision`."},{name:`Decrease button`,selector:`[role="group"] > button:first-of-type`,description:"Steps down. Disabled at `min`."},{name:`Increase button`,selector:`[role="group"] > button:last-of-type`,description:"Steps up. Disabled at `max`."},{name:`Helper text`,selector:`p`,description:`The input's description. The error message when invalid.`}],D={tags:[`!dev`],args:{helperText:`Up to 100 per order.`},play:async({canvasElement:e})=>{let t=await a(e,E);await d(t[3]).toHaveAccessibleName(/decrease/i),await d(t[4]).toHaveAccessibleName(/increase/i)}},O={args:{label:`Guests`,defaultValue:2,min:1,max:12}},k={tags:[`!dev`],args:{label:`Postcode`,defaultValue:65e4,min:void 0,max:void 0}},A=[`Default`,`Limits`,`Step`,`Precision`,`Typing`,`Sizes`,`Validation`,`Disabled`,`ReadOnly`,`NarrowContainer`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoQuantity`,`DontIdentifier`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByLabelText('Quantity');
    await expect(input).toHaveValue('6');
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(input).toHaveValue('7');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(7);
    await userEvent.click(canvas.getByRole('button', {
      name: /decrease/i
    }));
    await expect(input).toHaveValue('6');
    // Arrow keys step from the field itself.
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    await expect(input).toHaveValue('8');
    await userEvent.keyboard('{ArrowDown}');
    await expect(input).toHaveValue('7');
    // Shift steps by 10. The steppers stay out of the tab order: the keys do their job.
    await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}');
    await expect(input).toHaveValue('17');
    await expect(canvas.getByRole('button', {
      name: /increase/i
    })).toHaveAttribute('tabindex', '-1');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 99,
    max: 100
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const increase = canvas.getByRole('button', {
      name: /increase/i
    });
    await userEvent.click(increase);
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('100');
    // At the limit, the button is disabled rather than silently doing nothing,
    // and it looks it.
    await expect(increase).toBeDisabled();
    // Dimmed by opacity; colour matches the idle button, so it can't tell.
    await expect(getComputedStyle(increase).opacity).toBe('0.5');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 10,
    step: 5
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(canvas.getByLabelText('Quantity')).toHaveValue('15');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    defaultValue: 9.5,
    step: 0.25,
    precision: 2
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const input = canvas.getByLabelText('Price');
    await expect(input).toHaveValue('9.50');
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(input).toHaveValue('9.75');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const input = canvas.getByLabelText('Quantity');
    await userEvent.clear(input);
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null);
    await userEvent.type(input, '42');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(42);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <NumberInput key={size} {...args} size={size} label={size} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Order at least 1.',
    defaultValue: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Quantity')).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByLabelText('Quantity')).toHaveAccessibleDescription('Order at least 1.');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Quantity')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /increase/i
    })).toBeDisabled();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    inlineSize: '8rem'
  }}>
      <NumberInput {...args} />
    </div>,
  play: async ({
    canvas
  }) => {
    // The box, steppers included, stays inside the field however narrow.
    await expect(canvas.getByRole('group').getBoundingClientRect().width).toBe(128);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [n, setN] = useState<number | null>(3);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <NumberInput {...args} defaultValue={undefined} value={n} onValueChange={setN} />
        <span>Value: {n ?? 'empty'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /increase/i
    }));
    await expect(canvas.getByText('Value: 4')).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Order">
      <NumberInput {...args} name="quantity" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('quantity')).toBe('6');
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: 'Up to 100 per order.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveAccessibleName(/decrease/i);
    await expect(found[4]).toHaveAccessibleName(/increase/i);
  }
}`,...D.parameters?.docs?.source},description:{story:`Every part present.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Guests',
    defaultValue: 2,
    min: 1,
    max: 12
  }
}`,...O.parameters?.docs?.source},description:{story:`Guidelines, Do: a quantity people nudge up and down.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Postcode',
    defaultValue: 650000,
    min: undefined,
    max: undefined
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Don't: an identifier is not a quantity; stepping a postcode is meaningless.`,...k.parameters?.docs?.description}}}})))()}export{c as a,E as c,k as i,j as l,m as n,_ as o,O as r,y as s,D as t};