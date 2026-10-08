import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{r,t as i}from"./DatePicker-BoJqgxwR.js";var a=t({ClickToOpen:()=>g,Default:()=>h,Disabled:()=>w,InAForm:()=>C,OtherCalendars:()=>v,Range:()=>S,Required:()=>y,Typing:()=>_,UnitedStates:()=>b,Vietnamese:()=>x,__namedExportsOrder:()=>T,default:()=>p}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),o=n(),{expect:s,fn:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),p={title:`Components/Inputs/DatePicker`,component:i,parameters:{a11y:{test:`error`,config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`}]}}},args:{label:`Start date`,locale:`en-GB`,weekStartsOn:1,defaultValue:new Date(2026,8,18),onValueChange:c()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},value:{control:!1},defaultValue:{control:!1},min:{control:!1},max:{control:!1}},decorators:[e=>(0,o.jsx)(`div`,{style:{minBlockSize:`26rem`},children:e()})]},m=()=>d(document.body),h={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await s(n).toHaveValue(`18/09/2026`),await s(n).toHaveAttribute(`placeholder`,`dd/mm/yyyy`),await l.click(t.getByRole(`button`,{name:`Choose date, 18/09/2026 selected`}));let r=await m().findByRole(`dialog`,{name:`Choose date`});await u(()=>s(document.activeElement).toHaveAccessibleName(f(2026,9,18))),await l.click(d(r).getByRole(`button`,{name:f(2026,9,24)})),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,24)),await u(()=>s(m().queryByRole(`dialog`)).toBeNull()),await s(n).toHaveValue(`24/09/2026`);let i=t.getByRole(`button`,{name:`Choose date, 24/09/2026 selected`});await u(()=>s(document.activeElement).toBe(document.body)),await l.click(i),await m().findByRole(`dialog`),await l.keyboard(`{ArrowRight}{Escape}`),await u(()=>s(m().queryByRole(`dialog`)).toBeNull()),await s(n).toHaveValue(`24/09/2026`),await u(()=>s(i).toHaveFocus())}},g={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await l.click(n);let r=await m().findByRole(`dialog`,{name:`Choose date`});await s(n).toHaveFocus(),await l.clear(n),await l.keyboard(`20/09/2026{Enter}`),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,20)),await s(d(r).getByRole(`button`,{name:f(2026,9,20)}).closest(`td`)).toHaveAttribute(`aria-selected`,`true`),await l.keyboard(`{Escape}`),await u(()=>s(m().queryByRole(`dialog`)).toBeNull()),await s(n).toHaveFocus(),await l.click(n);let i=await m().findByRole(`dialog`,{name:`Choose date`});await l.click(d(i).getByRole(`button`,{name:f(2026,9,22)})),await u(()=>s(m().queryByRole(`dialog`)).toBeNull()),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,22)),await u(()=>s(n).not.toHaveFocus()),await s(n).toHaveValue(`22/09/2026`)}},_={args:{defaultValue:null},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await l.type(n,`3.10.26`),await l.tab(),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,9,3)),await s(n).toHaveValue(`03/10/2026`),e.onValueChange.mockClear(),await l.clear(n),await l.type(n,`31/02/2026{Enter}`),await s(n).toHaveAttribute(`aria-invalid`,`true`),await s(t.getByText(`Enter a date as dd/mm/yyyy.`)).toBeVisible(),await s(e.onValueChange).not.toHaveBeenCalled(),await l.clear(n),await l.tab(),await s(e.onValueChange).toHaveBeenLastCalledWith(null),e.onValueChange.mockClear(),await l.click(n),await l.tab(),await s(e.onValueChange).not.toHaveBeenCalled()}},v={args:{locale:`th-TH`,defaultValue:new Date(2026,8,27)},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);await s(n).toHaveValue(`27/09/2026`),await l.click(n),await l.tab(),await s(e.onValueChange).not.toHaveBeenCalled(),await s(n).not.toHaveAttribute(`aria-invalid`,`true`)}},y={args:{required:!0,defaultValue:null},play:async({canvas:e})=>{await s(e.getByRole(`textbox`,{name:/Start date/})).toBeRequired()}},b={args:{locale:`en-US`,weekStartsOn:0,defaultValue:new Date(2026,8,18)},play:async({canvas:e})=>{await s(e.getByRole(`textbox`)).toHaveValue(`09/18/2026`),await s(e.getByRole(`textbox`)).toHaveAttribute(`placeholder`,`mm/dd/yyyy`)}},x={args:{label:`Ngày bắt đầu`,locale:`vi-VN`,weekStartsOn:void 0}},S={args:{min:new Date(2026,8,1),max:new Date(2026,8,30),helperText:`Any day in September.`},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);e.onValueChange.mockClear(),await l.clear(n),await l.type(n,`02/10/2026{Enter}`),await s(n).toHaveAttribute(`aria-invalid`,`true`),await s(e.onValueChange).not.toHaveBeenCalled()}},C={args:{name:`start`},play:async({canvasElement:e})=>{await s(e.querySelector(`input[name="start"]`).value).toBe(`2026-09-18`)}},w={args:{disabled:!0}},T=[`Default`,`ClickToOpen`,`Typing`,`OtherCalendars`,`Required`,`UnitedStates`,`Vietnamese`,`Range`,`InAForm`,`Disabled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`A click in the input opens the calendar too, but leaves focus in the input so typing carries on.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Typing works in the locale's order, with any separator.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Thai uses the Buddhist era and Persian its own calendar and digits by default; the field stays Gregorian with Western digits so it reads back.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`US order: month first.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ngày bắt đầu',
    locale: 'vi-VN',
    weekStartsOn: undefined
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'start'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="start"]')!.value).toBe('2026-09-18');
  }
}`,...C.parameters?.docs?.source},description:{story:`Submitted as yyyy-mm-dd whatever the display format.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}}})))()}export{S as a,x as c,w as i,E as l,a as n,_ as o,h as r,b as s,g as t};