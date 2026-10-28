import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{i as a,n as o,r as s,t as c}from"./DatePicker-B_rAWX5s.js";var l=t({Anatomy:()=>O,Default:()=>y,DoOneField:()=>k,DontTwoFields:()=>A,InAForm:()=>w,OutsideDays:()=>x,PagingApart:()=>b,Presets:()=>C,ReadOnly:()=>T,Typing:()=>S,Vietnamese:()=>E,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>_}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),s(),u=n(),{expect:d,fn:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),_={title:`Components/Inputs/DateRangePicker`,tags:[`beta`],component:o,parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`},{id:`aria-command-name`,selector:`[role="link"], [role="button"]:not([data-base-ui-focus-guard]), [role="menuitem"]`},{id:`aria-hidden-focus`,selector:`[aria-hidden="true"]:not([data-base-ui-focus-guard])`}]}}},args:{label:`Period`,locale:`en-GB`,weekStartsOn:1,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)},onValueChange:f()},argTypes:{value:{description:"Controlled range, `{ start, end }` with both ends set, or `null`. Pair with `onValueChange`.",control:!1},defaultValue:{description:`Starting range when uncontrolled.`,control:!1},onValueChange:{description:"Called once both ends are in, with `start` never after `end`, or with `null` when cleared.",control:!1},presets:{description:"Whole periods beside the calendars. `true` for the built-in list (Today to Last year); `rangePresets(weekStartsOn)` returns it, to extend.",control:`boolean`},label:{description:`Names the field.`,control:`text`},helperText:{description:`Under the field. Replaced by the expected pattern while the typed text is not a valid range.`,control:`text`},validationState:{description:"`error` turns the edge and helper red and sets `aria-invalid`; `success` turns them green.",control:`inline-radio`,options:[`default`,`success`,`error`]},size:{description:"24px (`sm`) or 32px (`md`) tall, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`]},min:{description:`Earliest allowed date, for either end.`,control:!1},max:{description:`Latest allowed date, for either end.`,control:!1},isDateDisabled:{description:"Return `true` to disable a day. Checked when typing too.",control:!1},locale:{description:`BCP 47 tag. Sets the typed order and the calendars' month and day names.`,control:`text`},weekStartsOn:{description:`First column of the calendars, and the start of "This week". Defaults to the locale's.`,control:`number`},placeholder:{description:`Defaults to the locale's pattern, e.g. "dd/mm/yyyy – dd/mm/yyyy".`,control:`text`},isFullWidth:{description:`Fills the width of its container instead of 20rem.`,control:`boolean`},name:{description:"Submitted as `yyyy-mm-dd/yyyy-mm-dd`, an ISO 8601 interval.",control:`text`},disabled:{description:`Dimmed, out of the tab order, not submitted.`,control:`boolean`},readOnly:{description:"Shown and submitted but locked: filled, still focusable and copyable, no calendars. Say why in `helperText`.",control:`boolean`},required:{description:`Marks the label with an asterisk and blocks an empty form submit.`,control:`boolean`},id:{description:`For the input, e.g. to point an outside label at it.`,control:!1},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen or a scope with its own density.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`On the field's outer element.`,control:!1},"aria-label":{description:"Names the field when there is no visible `label`.",control:`text`}},decorators:[(e,{parameters:t})=>t.popupRoom===!1?e():(0,u.jsx)(`div`,{style:{minBlockSize:`30rem`},children:e()})],excludeStories:[`anatomyParts`]},v=()=>h(document.body),y={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Period`});await d(n).toHaveValue(`07/09/2026 – 13/09/2026`),await p.click(t.getByRole(`button`,{name:/Choose dates/}));let r=await v().findByRole(`dialog`,{name:`Choose dates`}),i=h(r).getByRole(`grid`,{name:`September 2026`});await d(h(r).getByRole(`grid`,{name:`October 2026`,hidden:!0})).toBeInTheDocument(),await p.click(h(i).getByRole(`button`,{name:g(2026,9,22)})),await d(e.onValueChange).not.toHaveBeenCalled(),await p.click(h(i).getByRole(`button`,{name:g(2026,9,10)})),await d(e.onValueChange).toHaveBeenLastCalledWith({start:new Date(2026,8,10),end:new Date(2026,8,22)}),await m(()=>d(v().queryByRole(`dialog`)).toBeNull()),await d(n).toHaveValue(`10/09/2026 – 22/09/2026`)}},b={args:{defaultValue:{start:new Date(2026,4,4),end:new Date(2026,10,20)}},play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:/Choose dates/}));let t=await v().findByRole(`dialog`,{name:`Choose dates`}),n=e=>h(t).getByRole(`grid`,{name:e,hidden:!0});await d(n(`May 2026`)).toBeInTheDocument(),await d(n(`November 2026`)).toBeInTheDocument();let r=h(t).getAllByRole(`button`,{name:`Next month`})[0];for(let e=0;e<7;e++)await p.click(r);await d(n(`December 2026`)).toBeInTheDocument(),await d(n(`January 2027`)).toBeInTheDocument()}},x={args:{defaultValue:{start:new Date(2026,9,1),end:new Date(2026,9,31)}},play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:/Choose dates/}));let t=await v().findByRole(`dialog`,{name:`Choose dates`}),n=h(t).getByRole(`grid`,{name:`October 2026`}),r=h(t).getAllByRole(`button`,{name:g(2026,10,31),hidden:!0});await d(r).toHaveLength(1),await d(n).toContainElement(r[0])}},S={args:{defaultValue:null},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Period`});await p.type(n,`20.9.26 - 1.9.26`),await p.tab(),await d(e.onValueChange).toHaveBeenLastCalledWith({start:new Date(2026,8,1),end:new Date(2026,8,20)}),await d(n).toHaveValue(`01/09/2026 – 20/09/2026`),await p.clear(n),await p.type(n,`01/09/2026{Enter}`),await d(n).toHaveAttribute(`aria-invalid`,`true`)}},C={args:{presets:!0},play:async({args:e,canvas:t})=>{await p.click(t.getByRole(`button`,{name:/Choose dates/}));let n=await v().findByRole(`dialog`,{name:`Choose dates`});await p.click(h(n).getByRole(`button`,{name:`Last week`}));let r=a(1)[3];await d(e.onValueChange).toHaveBeenLastCalledWith({start:r.start,end:r.end})}},w={args:{name:`period`},play:async({canvasElement:e})=>{await d(e.querySelector(`input[name="period"]`).value).toBe(`2026-09-07/2026-09-13`)}},T={args:{readOnly:!0,name:`period`,helperText:`The pay period is set by payroll.`},play:async({args:e,canvasElement:t})=>{let n=h(t).getByRole(`textbox`);await d(n).toHaveAttribute(`readonly`),await d(n).toHaveAccessibleDescription(`The pay period is set by payroll.`),await d(h(t).queryByRole(`button`)).toBeNull(),await p.click(n),await p.keyboard(`{Alt>}{ArrowDown}{/Alt}01/10/2026 – 31/10/2026{Enter}`),await d(h(document.body).queryByRole(`dialog`)).toBeNull(),await d(e.onValueChange).not.toHaveBeenCalled(),await d(t.querySelector(`input[name="period"]`).value).toBe(`2026-09-07/2026-09-13`)}},E={args:{label:`Khoảng thời gian`,locale:`vi-VN`,weekStartsOn:void 0,presets:!0}},D=[{name:`Label`,selector:`label`,description:`Names the field.`},{name:`Field`,selector:`:has(> input)`,description:`The box: edge, fill and focus ring, as Date Picker's.`},{name:`Input`,selector:`input`,description:`Both dates as text, start first. A click opens the calendars and keeps focus here.`},{name:`Calendar button`,selector:`button[aria-label^="Choose dates"]`,description:`Opens the calendars, with focus in them.`},{name:`Helper text`,selector:`p`,description:`Optional. Shows the expected pattern while the text is not a range.`}],O={tags:[`!dev`],args:{helperText:`Up to one quarter.`},parameters:{popupRoom:!1},play:async({canvasElement:e})=>{let t=await i(e,D);await d(t[1]).toContainElement(t[3]),await d(t[4]).toHaveTextContent(`Up to one quarter.`)}},k={args:{label:`Report period`,presets:!0},parameters:{popupRoom:!1}},A={tags:[`!dev`],parameters:{popupRoom:!1},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`},children:[(0,u.jsx)(c,{label:`From`,locale:`en-GB`,defaultValue:new Date(2026,8,13)}),(0,u.jsx)(c,{label:`To`,locale:`en-GB`,defaultValue:new Date(2026,8,7)})]})},j=[`Default`,`PagingApart`,`OutsideDays`,`Typing`,`Presets`,`InAForm`,`ReadOnly`,`Vietnamese`,`anatomyParts`,`Anatomy`,`DoOneField`,`DontTwoFields`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Period'
    });
    await expect(input).toHaveValue('07/09/2026 – 13/09/2026');
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose dates/
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose dates'
    });
    const september = within(dialog).getByRole('grid', {
      name: 'September 2026'
    });
    await expect(within(dialog).getByRole('grid', {
      name: 'October 2026',
      hidden: true
    })).toBeInTheDocument();
    // Either way round: 22 September, then 10 September.
    await userEvent.click(within(september).getByRole('button', {
      name: day(2026, 9, 22)
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await userEvent.click(within(september).getByRole('button', {
      name: day(2026, 9, 10)
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith({
      start: new Date(2026, 8, 10),
      end: new Date(2026, 8, 22)
    });
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveValue('10/09/2026 – 22/09/2026');
  }
}`,...y.parameters?.docs?.source},description:{story:`Two months (one on a narrow screen); the first click starts the range, the second ends it and applies.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      start: new Date(2026, 4, 4),
      end: new Date(2026, 10, 20)
    }
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose dates/
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose dates'
    });
    const grid = (name: string) => within(dialog).getByRole('grid', {
      name,
      hidden: true
    });
    // May on the left, November on the right.
    await expect(grid('May 2026')).toBeInTheDocument();
    await expect(grid('November 2026')).toBeInTheDocument();
    // The left one pages up to, and then pushes, the right one.
    const next = within(dialog).getAllByRole('button', {
      name: 'Next month'
    })[0];
    for (let i = 0; i < 7; i++) await userEvent.click(next);
    await expect(grid('December 2026')).toBeInTheDocument();
    await expect(grid('January 2027')).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source},description:{story:`The calendars page on their own, opening on the range's first and last months; the left one always stays before the right.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      start: new Date(2026, 9, 1),
      end: new Date(2026, 9, 31)
    }
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose dates/
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose dates'
    });
    const october = within(dialog).getByRole('grid', {
      name: 'October 2026'
    });
    // 31 October: once, in October, though November's grid shows it too.
    const oct31 = within(dialog).getAllByRole('button', {
      name: day(2026, 10, 31),
      hidden: true
    });
    await expect(oct31).toHaveLength(1);
    await expect(october).toContainElement(oct31[0]);
  }
}`,...x.parameters?.docs?.source},description:{story:`A day of the month either side is decoration: hidden from assistive tech and not pickable, so each day is one button.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: null
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Period'
    });
    await userEvent.type(input, '20.9.26 - 1.9.26');
    await userEvent.tab();
    await expect(args.onValueChange).toHaveBeenLastCalledWith({
      start: new Date(2026, 8, 1),
      end: new Date(2026, 8, 20)
    });
    await expect(input).toHaveValue('01/09/2026 – 20/09/2026');
    await userEvent.clear(input);
    await userEvent.type(input, '01/09/2026{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
}`,...S.parameters?.docs?.source},description:{story:`Typed: two dates in the locale's order, any separators.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    presets: true
  },
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose dates/
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose dates'
    });
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Last week'
    }));
    const last = rangePresets(1)[3];
    await expect(args.onValueChange).toHaveBeenLastCalledWith({
      start: last.start,
      end: last.end
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`A list of whole periods beside the calendars: one click applies.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'period'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="period"]')!.value).toBe('2026-09-07/2026-09-13');
  }
}`,...w.parameters?.docs?.source},description:{story:`Submitted as an ISO 8601 interval.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    name: 'period',
    helperText: 'The pay period is set by payroll.'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('textbox');
    await expect(input).toHaveAttribute('readonly');
    await expect(input).toHaveAccessibleDescription('The pay period is set by payroll.');
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
    await userEvent.click(input);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}01/10/2026 – 31/10/2026{Enter}');
    await expect(within(document.body).queryByRole('dialog')).toBeNull();
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="period"]')!.value).toBe('2026-09-07/2026-09-13');
  }
}`,...T.parameters?.docs?.source},description:{story:`Locked: no calendars open, the typed text is ignored.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Khoảng thời gian',
    locale: 'vi-VN',
    weekStartsOn: undefined,
    presets: true
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    helperText: 'Up to one quarter.'
  },
  parameters: {
    popupRoom: false
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toContainElement(found[3] as HTMLElement);
    await expect(found[4]).toHaveTextContent('Up to one quarter.');
  }
}`,...O.parameters?.docs?.source},description:{story:`Every part present, the calendars closed.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Report period',
    presets: true
  },
  parameters: {
    popupRoom: false
  }
}`,...k.parameters?.docs?.source},description:{story:`Guidelines, Do: one field for one period.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    popupRoom: false
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-3)'
  }}>
      <DatePicker label="From" locale="en-GB" defaultValue={new Date(2026, 8, 13)} />
      <DatePicker label="To" locale="en-GB" defaultValue={new Date(2026, 8, 7)} />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: two Date Pickers for one period, which can be left half done or set back to front.`,...A.parameters?.docs?.description}}}})))()}export{A as a,E as c,k as i,D as l,l as n,b as o,y as r,C as s,O as t,M as u};