import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{n as a,t as o}from"./FieldControl-B3Jw_8fd.js";import{a as s,o as c,r as l,t as u}from"./InputField-DYKQ89HJ.js";function d(e){return(0,f.jsx)(u,{...e})}var f,p;function m(){return(m=e((()=>{a(),s(),f=n(),p=o,d.__docgenInfo={description:`Label, helper text and validation for a control that has none of its own.
Text Input, Select, Checkbox and the other Zweihänder controls already
carry this anatomy: do not wrap them.`,methods:[],displayName:`Field`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:"The control: a Base UI control, or `FieldControl` rendering your own element."},label:{required:!0,tsType:{name:`ReactNode`},description:`Names the control.`},labelInfo:{required:!1,tsType:{name:`ReactNode`},description:`A longer note about the label, behind an info button after it. Opens on press, not hover.`},infoLabel:{required:!1,tsType:{name:`string`},description:`The info button's accessible name; the label is read after it as its description.`},helperText:{required:!1,tsType:{name:`ReactNode`},description:"Under the control, read as its description. The error message when `validationState` is error."},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},required:{required:!1,tsType:{name:`boolean`},description:"Adds an asterisk after the label. Put `required` on the control too."},disabled:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:`The name the control submits under, and the key for a Base UI Form's errors.`},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var h=t({Anatomy:()=>P,Default:()=>C,Disabled:()=>O,DoDisableWithReason:()=>V,DoLongNoteInInfo:()=>L,DoReadOnlyWithReason:()=>z,DoSayWhatToFix:()=>F,DontDisableToLock:()=>B,DontDisableWithoutReason:()=>H,DontLongHelper:()=>R,DontVagueError:()=>I,ReadOnly:()=>j,Required:()=>D,Validation:()=>M,WithError:()=>E,WithHelperText:()=>w,WithLabelInfo:()=>T,__namedExportsOrder:()=>U,anatomyParts:()=>N,default:()=>x}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{r(),m(),s(),g=n(),{expect:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b=(0,g.jsx)(`span`,{className:l(`md`),children:(0,g.jsx)(p,{type:`time`,className:c.control})}),x={title:`Components/Inputs/Field`,tags:[`experimental`],component:d,argTypes:{label:{description:"Names the control: a real `<label>`, so clicking it focuses the control.",control:`text`,table:{type:{summary:`ReactNode`}}},labelInfo:{description:`A longer note about the label, behind an info button after it. Opens on press or Enter, not hover, so it works on touch; Escape closes it.`,control:`text`,table:{type:{summary:`ReactNode`}}},infoLabel:{description:`The info button's accessible name. The label is read after it, as its description.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'More information'`}}},helperText:{description:"Under the control, read as its description: format, limits, what the value is for. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours the helper text and the edge of a field box inside. `error` also sets `aria-invalid` on the control.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},required:{description:"Adds an asterisk after the label, hidden from screen readers. Put `required` on the control too: that is what they announce.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the control inside it.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:"The name the control submits under; also the key for a Base UI Form's `errors`.",control:`text`,table:{type:{summary:`string`}}},isFullWidth:{description:`Fills the width of its container. Otherwise 20rem, capped at the container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},children:{description:"The control: a Base UI control, or `FieldControl` rendering your own element through `render`.",control:!1,table:{type:{summary:`ReactNode`}}}},args:{label:`Start time`,children:b},excludeStories:[`anatomyParts`]},S={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},C={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByText(`Start time`)),await _(e.getByLabelText(`Start time`)).toHaveFocus()}},w={args:{helperText:`In the time zone of the site.`},play:async({canvas:e})=>{await _(e.getByLabelText(`Start time`)).toHaveAccessibleDescription(`In the time zone of the site.`)}},T={args:{labelInfo:`The shift starts at this time; clocking in earlier is not paid.`},play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`More information`});await _(r).toHaveAccessibleDescription(`Start time`),await n.click(r);let i=y(t.ownerDocument.body);await _(await i.findByText(/clocking in earlier/)).toBeVisible(),await _(i.getByRole(`dialog`,{name:`Start time`})).toBeVisible(),await _(e.getByLabelText(`Start time`)).not.toHaveFocus(),await n.keyboard(`{Escape}`),await v(()=>_(i.queryByText(/clocking in earlier/)).toBeNull()),await _(r).toHaveFocus(),await n.keyboard(`{Enter}`),await _(await i.findByText(/clocking in earlier/)).toBeVisible(),await n.keyboard(`{Escape}`),await v(()=>_(i.queryByText(/clocking in earlier/)).toBeNull())}},E={args:{validationState:`error`,helperText:`Enter a time between 06:00 and 22:00.`},play:async({canvas:e})=>{let t=e.getByLabelText(`Start time`);await _(t).toHaveAttribute(`aria-invalid`,`true`),await _(t).toHaveAccessibleDescription(`Enter a time between 06:00 and 22:00.`)}},D={args:{required:!0,children:(0,g.jsx)(`span`,{className:l(`md`),children:(0,g.jsx)(p,{type:`time`,required:!0,className:c.control})})},play:async({canvas:e})=>{await _(e.getByText(`*`)).toHaveAttribute(`aria-hidden`,`true`),await _(e.getByLabelText(/Start time/)).toBeRequired()}},O={args:{disabled:!0,helperText:`Pick a shift first.`},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Start time`);await _(n).toBeDisabled(),await t.tab(),await _(n).not.toHaveFocus(),await _(n).toHaveAccessibleDescription(`Pick a shift first.`)}},k=e=>(0,g.jsx)(`span`,{className:l(`md`),children:(0,g.jsx)(p,{defaultValue:`09:00`,readOnly:e,className:c.control})}),A=k(!0),j={args:{children:A,helperText:`Set by the rota. Ask your manager to change it.`},play:async({canvas:e,userEvent:t})=>{let n=e.getByLabelText(`Start time`);await t.tab(),await _(n).toHaveFocus(),await _(n).toHaveAttribute(`readonly`),await _(n).toHaveAccessibleDescription(`Set by the rota. Ask your manager to change it.`),await t.keyboard(`1`),await _(n).toHaveValue(`09:00`),await _(getComputedStyle(n.parentElement).backgroundColor).not.toBe(getComputedStyle(e.getByText(`Start time`)).backgroundColor)}},M={render:e=>(0,g.jsxs)(`div`,{style:S,children:[(0,g.jsx)(d,{...e,required:!0,labelInfo:`When the shift starts.`,helperText:`In the time zone of the site.`}),(0,g.jsx)(d,{...e,label:`End time`,required:!0,labelInfo:`When the shift ends.`,validationState:`error`,helperText:`End after the start time.`,children:b})]}),play:async({canvas:e})=>{await _(e.getAllByRole(`button`,{name:`More information`})).toHaveLength(2),await _(e.getByLabelText(/End time/)).toHaveAttribute(`aria-invalid`,`true`),await _(e.getByLabelText(/Start time/)).not.toHaveAttribute(`aria-invalid`)}},N=[{name:`Label`,selector:`label`,description:`Names the control. Clicking it focuses the control.`},{name:`Required mark`,selector:`label > span[aria-hidden]`,description:`Optional asterisk; screen readers hear "required" from the control.`},{name:`Info button`,selector:`label + button`,description:"Optional. Opens `labelInfo` in a small popup, on press or Enter."},{name:`Control`,selector:`input`,description:"What the field is for: a Base UI control or `Field.Control`."},{name:`Helper text`,selector:`p`,description:`Optional. The control's description; the error message when invalid.`}],P={tags:[`!dev`],args:{required:!0,labelInfo:`When the shift starts.`,helperText:`In the time zone of the site.`},play:async({canvasElement:e})=>{let t=await i(e,N);await _(t[4]).toHaveTextContent(`In the time zone`)}},F={args:{validationState:`error`,helperText:`Enter a time between 06:00 and 22:00.`}},I={tags:[`!dev`],args:{validationState:`error`,helperText:`Invalid value.`}},L={args:{helperText:`HH:MM`,labelInfo:`The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.`}},R={tags:[`!dev`],args:{helperText:`HH:MM. The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.`}},z={args:{children:A,helperText:`Set by the rota. Ask your manager to change it.`}},B={tags:[`!dev`],args:{disabled:!0,children:k(!1)}},V={args:{disabled:!0,helperText:`Pick a shift first.`}},H={tags:[`!dev`],args:{disabled:!0}},U=[`Default`,`WithHelperText`,`WithLabelInfo`,`WithError`,`Required`,`Disabled`,`ReadOnly`,`Validation`,`anatomyParts`,`Anatomy`,`DoSayWhatToFix`,`DontVagueError`,`DoLongNoteInInfo`,`DontLongHelper`,`DoReadOnlyWithReason`,`DontDisableToLock`,`DoDisableWithReason`,`DontDisableWithoutReason`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByText('Start time'));
    await expect(canvas.getByLabelText('Start time')).toHaveFocus();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'In the time zone of the site.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('Start time')).toHaveAccessibleDescription('In the time zone of the site.');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    labelInfo: 'The shift starts at this time; clocking in earlier is not paid.'
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const button = canvas.getByRole('button', {
      name: 'More information'
    });
    // The button names itself, then the label tells which field it is for.
    await expect(button).toHaveAccessibleDescription('Start time');
    // Outside the <label>: pressing it does not move focus to the control.
    await userEvent.click(button);
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByText(/clocking in earlier/)).toBeVisible();
    await expect(body.getByRole('dialog', {
      name: 'Start time'
    })).toBeVisible();
    await expect(canvas.getByLabelText('Start time')).not.toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText(/clocking in earlier/)).toBeNull());
    await expect(button).toHaveFocus();
    // Enter opens it too.
    await userEvent.keyboard('{Enter}');
    await expect(await body.findByText(/clocking in earlier/)).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByText(/clocking in earlier/)).toBeNull());
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Enter a time between 06:00 and 22:00.'
  },
  play: async ({
    canvas
  }) => {
    const control = canvas.getByLabelText('Start time');
    await expect(control).toHaveAttribute('aria-invalid', 'true');
    await expect(control).toHaveAccessibleDescription('Enter a time between 06:00 and 22:00.');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    // Field's \`required\` only draws the asterisk; the control says it is required.
    children: <span className={boxClass('md')}>
        <FieldControl type="time" required className={inputStyles.control} />
      </span>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
    await expect(canvas.getByLabelText(/Start time/)).toBeRequired();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    helperText: 'Pick a shift first.'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const control = canvas.getByLabelText('Start time');
    await expect(control).toBeDisabled();
    await userEvent.tab();
    await expect(control).not.toHaveFocus();
    await expect(control).toHaveAccessibleDescription('Pick a shift first.');
  }
}`,...O.parameters?.docs?.source},description:{story:`Disabled while it does not apply yet; the helper text says what turns it on.`,...O.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: lockedTime,
    helperText: 'Set by the rota. Ask your manager to change it.'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const control = canvas.getByLabelText('Start time');
    await userEvent.tab();
    await expect(control).toHaveFocus();
    await expect(control).toHaveAttribute('readonly');
    await expect(control).toHaveAccessibleDescription('Set by the rota. Ask your manager to change it.');
    await userEvent.keyboard('1');
    await expect(control).toHaveValue('09:00');
    await expect(getComputedStyle(control.parentElement!).backgroundColor).not.toBe(getComputedStyle(canvas.getByText('Start time')).backgroundColor);
  }
}`,...j.parameters?.docs?.source},description:{story:`Shown, focusable and copyable; the box is filled and typing changes nothing.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Field {...args} required labelInfo="When the shift starts." helperText="In the time zone of the site." />
      <Field {...args} label="End time" required labelInfo="When the shift ends." validationState="error" helperText="End after the start time.">
        {time}
      </Field>
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('button', {
      name: 'More information'
    })).toHaveLength(2);
    await expect(canvas.getByLabelText(/End time/)).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByLabelText(/Start time/)).not.toHaveAttribute('aria-invalid');
  }
}`,...M.parameters?.docs?.source},description:{story:`Every part together, in both states: for the visual baseline.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    required: true,
    labelInfo: 'When the shift starts.',
    helperText: 'In the time zone of the site.'
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveTextContent('In the time zone');
  }
}`,...P.parameters?.docs?.source},description:{story:`Every part present.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'Enter a time between 06:00 and 22:00.'
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Do: the error says what to change.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    validationState: 'error',
    helperText: 'Invalid value.'
  }
}`,...I.parameters?.docs?.source},description:{story:`Guidelines, Don't: an error that only says something is wrong.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'HH:MM',
    labelInfo: 'The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.'
  }
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Do: the short format hint under the control, the long rule behind the info button.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: 'HH:MM. The shift starts at this time. Clocking in earlier is not paid unless a manager approves overtime.'
  }
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Don't: a paragraph of helper text pushes the next field away.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: lockedTime,
    helperText: 'Set by the rota. Ask your manager to change it.'
  }
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Do: a locked value stays readable and says who can change it.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    disabled: true,
    children: startAt(false)
  }
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Don't: disabled to lock a value people still need to read and copy.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    helperText: 'Pick a shift first.'
  }
}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Do: disabled for now, and the helper text says what turns it on.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    disabled: true
  }
}`,...H.parameters?.docs?.source},description:{story:`Guidelines, Don't: disabled with nothing saying why or how to turn it on.`,...H.parameters?.docs?.description}}}})))()}export{m as _,z as a,H as c,h as d,M as f,p as g,d as h,L as i,R as l,W as m,C as n,F as o,N as p,V as r,B as s,P as t,I as u};