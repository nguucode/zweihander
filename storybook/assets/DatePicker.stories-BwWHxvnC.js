import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{r as a,t as o}from"./DatePicker-CNZsfeK7.js";var s=t({Anatomy:()=>O,ClickToOpen:()=>v,Default:()=>_,Disabled:()=>E,DoPatternPlaceholder:()=>k,DontExamplePlaceholder:()=>A,InAForm:()=>T,OtherCalendars:()=>b,Range:()=>w,Required:()=>x,Typing:()=>y,UnitedStates:()=>S,Vietnamese:()=>C,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>h}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),a(),c=n(),{expect:l,fn:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),h={title:`Components/Inputs/DatePicker`,tags:[`beta`],component:o,parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`},{id:`aria-command-name`,selector:`[role="link"], [role="button"]:not([data-base-ui-focus-guard]), [role="menuitem"]`},{id:`aria-hidden-focus`,selector:`[aria-hidden="true"]:not([data-base-ui-focus-guard])`}]}}},args:{label:`Start date`,locale:`en-GB`,weekStartsOn:1,defaultValue:new Date(2026,8,18),onValueChange:u()},argTypes:{value:{description:"Controlled date, or `null`. Pair with `onValueChange`.",control:!1},defaultValue:{description:`Starting date when uncontrolled.`,control:!1},onValueChange:{description:"Called with the picked or typed date, or `null` when cleared. Not called while the typed text is not a date yet.",control:!1},label:{description:`Names the field.`,control:`text`},helperText:{description:`Under the field. Replaced by the expected pattern while the typed text is not a valid date.`,control:`text`},validationState:{description:"`error` turns the edge and helper red and sets `aria-invalid`; `success` turns them green.",control:`inline-radio`,options:[`default`,`success`,`error`]},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`]},min:{description:`Earliest allowed date. Days before it are disabled in the calendar and rejected when typed.`,control:!1},max:{description:"Latest allowed date, as `min`.",control:!1},isDateDisabled:{description:"Return `true` to disable a day, e.g. weekends. Checked when typing too.",control:!1},locale:{description:`BCP 47 tag. Sets the typed order (day/month/year) and the calendar's month and day names.`,control:`text`},weekStartsOn:{description:`First column of the calendar: 0 is Sunday, 1 is Monday. Defaults to the locale's.`,control:`number`},placeholder:{description:`Defaults to the locale's pattern, e.g. "dd/mm/yyyy". Keep it a pattern, not an example date.`,control:`text`},isFullWidth:{description:`Fills the width of its container instead of 20rem.`,control:`boolean`},name:{description:"Submitted as `yyyy-mm-dd`, whatever the display order.",control:`text`},disabled:{description:`Dimmed, out of the tab order, not submitted.`,control:`boolean`},required:{description:`Marks the label with an asterisk and blocks an empty form submit.`,control:`boolean`},id:{description:`For the input, e.g. to point an outside label at it.`,control:!1},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`On the field's outer element.`,control:!1},"aria-label":{description:"Names the field when there is no visible `label`.",control:`text`}},decorators:[(e,{parameters:t})=>t.popupRoom===!1?e():(0,c.jsx)(`div`,{style:{minBlockSize:`26rem`},children:e()})],excludeStories:[`anatomyParts`]},g=()=>p(document.body),_={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await l(n).toHaveValue(`18/09/2026`),await l(n).toHaveAttribute(`placeholder`,`dd/mm/yyyy`),await d.click(t.getByRole(`button`,{name:`Choose date, 18/09/2026 selected`}));let r=await g().findByRole(`dialog`,{name:`Choose date`});await f(()=>l(document.activeElement).toHaveAccessibleName(m(2026,9,18))),await d.click(p(r).getByRole(`button`,{name:m(2026,9,24)})),await l(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,24)),await f(()=>l(g().queryByRole(`dialog`)).toBeNull()),await l(n).toHaveValue(`24/09/2026`);let i=t.getByRole(`button`,{name:`Choose date, 24/09/2026 selected`});await f(()=>l(document.activeElement).toBe(document.body)),await d.click(i),await g().findByRole(`dialog`),await d.keyboard(`{ArrowRight}{Escape}`),await f(()=>l(g().queryByRole(`dialog`)).toBeNull()),await l(n).toHaveValue(`24/09/2026`),await f(()=>l(i).toHaveFocus())}},v={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await d.click(n);let r=await g().findByRole(`dialog`,{name:`Choose date`});await l(n).toHaveFocus(),await d.clear(n),await d.keyboard(`20/09/2026{Enter}`),await l(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,20)),await l(p(r).getByRole(`button`,{name:m(2026,9,20)}).closest(`td`)).toHaveAttribute(`aria-selected`,`true`),await d.keyboard(`{Escape}`),await f(()=>l(g().queryByRole(`dialog`)).toBeNull()),await l(n).toHaveFocus(),await d.click(n);let i=await g().findByRole(`dialog`,{name:`Choose date`});await d.click(p(i).getByRole(`button`,{name:m(2026,9,22)})),await f(()=>l(g().queryByRole(`dialog`)).toBeNull()),await l(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,22)),await f(()=>l(n).not.toHaveFocus()),await l(n).toHaveValue(`22/09/2026`)}},y={args:{defaultValue:null},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await d.type(n,`3.10.26`),await d.tab(),await l(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,9,3)),await l(n).toHaveValue(`03/10/2026`),e.onValueChange.mockClear(),await d.clear(n),await d.type(n,`31/02/2026{Enter}`),await l(n).toHaveAttribute(`aria-invalid`,`true`),await l(t.getByText(`Enter a date as dd/mm/yyyy.`)).toBeVisible(),await l(e.onValueChange).not.toHaveBeenCalled(),await d.clear(n),await d.tab(),await l(e.onValueChange).toHaveBeenLastCalledWith(null),e.onValueChange.mockClear(),await d.click(n),await d.tab(),await l(e.onValueChange).not.toHaveBeenCalled()}},b={args:{locale:`th-TH`,defaultValue:new Date(2026,8,27)},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);await l(n).toHaveValue(`27/09/2026`),await d.click(n),await d.tab(),await l(e.onValueChange).not.toHaveBeenCalled(),await l(n).not.toHaveAttribute(`aria-invalid`,`true`)}},x={args:{required:!0,defaultValue:null},play:async({canvas:e})=>{await l(e.getByRole(`textbox`,{name:/Start date/})).toBeRequired()}},S={args:{locale:`en-US`,weekStartsOn:0,defaultValue:new Date(2026,8,18)},play:async({canvas:e})=>{await l(e.getByRole(`textbox`)).toHaveValue(`09/18/2026`),await l(e.getByRole(`textbox`)).toHaveAttribute(`placeholder`,`mm/dd/yyyy`)}},C={args:{label:`Ngày bắt đầu`,locale:`vi-VN`,weekStartsOn:void 0}},w={args:{min:new Date(2026,8,1),max:new Date(2026,8,30),helperText:`Any day in September.`},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);e.onValueChange.mockClear(),await d.clear(n),await d.type(n,`02/10/2026{Enter}`),await l(n).toHaveAttribute(`aria-invalid`,`true`),await l(e.onValueChange).not.toHaveBeenCalled()}},T={args:{name:`start`},play:async({canvasElement:e})=>{await l(e.querySelector(`input[name="start"]`).value).toBe(`2026-09-18`)}},E={args:{disabled:!0}},D=[{name:`Label`,selector:`label`,description:`Names the field.`},{name:`Field`,selector:`:has(> input)`,description:`The box: edge, fill and focus ring. A click anywhere in it focuses the input.`},{name:`Input`,selector:`input`,description:`The date as text, in the locale's order. A click opens the calendar and keeps focus here.`},{name:`Calendar button`,selector:`button[aria-label^="Choose date"]`,description:`Opens the calendar with focus on the selected day.`},{name:`Helper text`,selector:`p`,description:`Optional. Shows the expected pattern while the text is not a date.`}],O={tags:[`!dev`],args:{helperText:`Your first day at work.`},parameters:{popupRoom:!1},play:async({canvasElement:e})=>{let t=await i(e,D);await l(t[1]).toContainElement(t[3]),await l(t[4]).toHaveTextContent(`Your first day at work.`)}},k={args:{defaultValue:null,helperText:`Your first day at work.`},parameters:{popupRoom:!1},play:async({canvas:e})=>{await l(e.getByRole(`textbox`)).toHaveAttribute(`placeholder`,`dd/mm/yyyy`)}},A={tags:[`!dev`],args:{defaultValue:null,placeholder:`18/09/2026`,helperText:`Your first day at work.`},parameters:{popupRoom:!1}},j=[`Default`,`ClickToOpen`,`Typing`,`OtherCalendars`,`Required`,`UnitedStates`,`Vietnamese`,`Range`,`InAForm`,`Disabled`,`anatomyParts`,`Anatomy`,`DoPatternPlaceholder`,`DontExamplePlaceholder`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Start date'
    });
    await expect(input).toHaveValue('18/09/2026');
    await expect(input).toHaveAttribute('placeholder', 'dd/mm/yyyy');
    // Pick from the calendar: it opens on the selected day, with focus there.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose date, 18/09/2026 selected'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose date'
    });
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName(day(2026, 9, 18)));
    await userEvent.click(within(dialog).getByRole('button', {
      name: day(2026, 9, 24)
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 24));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveValue('24/09/2026');
    // A pointer pick sends the field back to rest: nothing in it keeps focus.
    const button = canvas.getByRole('button', {
      name: 'Choose date, 24/09/2026 selected'
    });
    await waitFor(() => expect(document.activeElement).toBe(document.body));
    // Escape closes without a change, and focus returns to the button.
    await userEvent.click(button);
    await body().findByRole('dialog');
    await userEvent.keyboard('{ArrowRight}{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveValue('24/09/2026');
    await waitFor(() => expect(button).toHaveFocus());
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Start date'
    });
    await userEvent.click(input);
    const dialog = await body().findByRole('dialog', {
      name: 'Choose date'
    });
    await expect(input).toHaveFocus();
    // Typed and committed with the calendar open; the calendar follows.
    await userEvent.clear(input);
    await userEvent.keyboard('20/09/2026{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 20));
    await expect(within(dialog).getByRole('button', {
      name: day(2026, 9, 20)
    }).closest('td')).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveFocus();
    // A pointer pick sends the field back to rest: no caret, no ring.
    await userEvent.click(input);
    const again = await body().findByRole('dialog', {
      name: 'Choose date'
    });
    await userEvent.click(within(again).getByRole('button', {
      name: day(2026, 9, 22)
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 22));
    await waitFor(() => expect(input).not.toHaveFocus());
    await expect(input).toHaveValue('22/09/2026');
  }
}`,...v.parameters?.docs?.source},description:{story:`A click in the input opens the calendar too, but leaves focus in the input so typing carries on.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: null
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Start date'
    });
    await userEvent.type(input, '3.10.26');
    await userEvent.tab();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 9, 3));
    // Reformatted on commit.
    await expect(input).toHaveValue('03/10/2026')
    // Not a date: kept, flagged, not reported.
;
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.clear(input);
    await userEvent.type(input, '31/02/2026{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Enter a date as dd/mm/yyyy.')).toBeVisible();
    await expect(args.onValueChange).not.toHaveBeenCalled();
    // Cleared: null.
    await userEvent.clear(input);
    await userEvent.tab();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null)
    // Passing through an empty field again reports nothing new.
;
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.click(input);
    await userEvent.tab();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...y.parameters?.docs?.source},description:{story:`Typing works in the locale's order, with any separator.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'th-TH',
    defaultValue: new Date(2026, 8, 27)
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('27/09/2026');
    await userEvent.click(input);
    await userEvent.tab();
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
  }
}`,...b.parameters?.docs?.source},description:{story:`Thai uses the Buddhist era and Persian its own calendar and digits by default; the field stays Gregorian with Western digits so it reads back.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    defaultValue: null
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: /Start date/
    })).toBeRequired();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    weekStartsOn: 0,
    defaultValue: new Date(2026, 8, 18)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox')).toHaveValue('09/18/2026');
    await expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', 'mm/dd/yyyy');
  }
}`,...S.parameters?.docs?.source},description:{story:`US order: month first.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ngày bắt đầu',
    locale: 'vi-VN',
    weekStartsOn: undefined
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(2026, 8, 1),
    max: new Date(2026, 8, 30),
    helperText: 'Any day in September.'
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.clear(input);
    await userEvent.type(input, '02/10/2026{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'start'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="start"]')!.value).toBe('2026-09-18');
  }
}`,...T.parameters?.docs?.source},description:{story:`Submitted as yyyy-mm-dd whatever the display format.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: 'Your first day at work.'
  },
  parameters: {
    popupRoom: false
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toContainElement(found[3] as HTMLElement);
    await expect(found[4]).toHaveTextContent('Your first day at work.');
  }
}`,...O.parameters?.docs?.source},description:{story:`Every part present, the calendar closed. The calendar itself is the Calendar component.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: null,
    helperText: 'Your first day at work.'
  },
  parameters: {
    popupRoom: false
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', 'dd/mm/yyyy');
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: the empty field shows the pattern to type.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: null,
    placeholder: '18/09/2026',
    helperText: 'Your first day at work.'
  },
  parameters: {
    popupRoom: false
  }
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: an example date as the placeholder reads as a value already filled in.`,...A.parameters?.docs?.description}}}})))()}export{A as a,C as c,k as i,D as l,s as n,w as o,_ as r,S as s,O as t,M as u};