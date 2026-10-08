import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{i as r,n as i,r as a}from"./DatePicker-BoJqgxwR.js";var o=t({Default:()=>g,InAForm:()=>x,OutsideDays:()=>v,PagingApart:()=>_,Presets:()=>b,Typing:()=>y,Vietnamese:()=>S,__namedExportsOrder:()=>C,default:()=>m}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),s=n(),{expect:c,fn:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),m={title:`Components/Inputs/DateRangePicker`,component:i,parameters:{a11y:{test:`error`,config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`}]}}},args:{label:`Period`,locale:`en-GB`,weekStartsOn:1,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)},onValueChange:l()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},value:{control:!1},defaultValue:{control:!1},min:{control:!1},max:{control:!1},presets:{control:`boolean`}},decorators:[e=>(0,s.jsx)(`div`,{style:{minBlockSize:`30rem`},children:e()})]},h=()=>f(document.body),g={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Period`});await c(n).toHaveValue(`07/09/2026 – 13/09/2026`),await u.click(t.getByRole(`button`,{name:/Choose dates/}));let r=await h().findByRole(`dialog`,{name:`Choose dates`}),i=f(r).getByRole(`grid`,{name:`September 2026`});await c(f(r).getByRole(`grid`,{name:`October 2026`,hidden:!0})).toBeInTheDocument(),await u.click(f(i).getByRole(`button`,{name:p(2026,9,22)})),await c(e.onValueChange).not.toHaveBeenCalled(),await u.click(f(i).getByRole(`button`,{name:p(2026,9,10)})),await c(e.onValueChange).toHaveBeenLastCalledWith({start:new Date(2026,8,10),end:new Date(2026,8,22)}),await d(()=>c(h().queryByRole(`dialog`)).toBeNull()),await c(n).toHaveValue(`10/09/2026 – 22/09/2026`)}},_={args:{defaultValue:{start:new Date(2026,4,4),end:new Date(2026,10,20)}},play:async({canvas:e})=>{await u.click(e.getByRole(`button`,{name:/Choose dates/}));let t=await h().findByRole(`dialog`,{name:`Choose dates`}),n=e=>f(t).getByRole(`grid`,{name:e,hidden:!0});await c(n(`May 2026`)).toBeInTheDocument(),await c(n(`November 2026`)).toBeInTheDocument();let r=f(t).getAllByRole(`button`,{name:`Next month`})[0];for(let e=0;e<7;e++)await u.click(r);await c(n(`December 2026`)).toBeInTheDocument(),await c(n(`January 2027`)).toBeInTheDocument()}},v={args:{defaultValue:{start:new Date(2026,9,1),end:new Date(2026,9,31)}},play:async({canvas:e})=>{await u.click(e.getByRole(`button`,{name:/Choose dates/}));let t=await h().findByRole(`dialog`,{name:`Choose dates`}),n=f(t).getByRole(`grid`,{name:`October 2026`}),r=f(t).getAllByRole(`button`,{name:p(2026,10,31),hidden:!0});await c(r).toHaveLength(1),await c(n).toContainElement(r[0])}},y={args:{defaultValue:null},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Period`});await u.type(n,`20.9.26 - 1.9.26`),await u.tab(),await c(e.onValueChange).toHaveBeenLastCalledWith({start:new Date(2026,8,1),end:new Date(2026,8,20)}),await c(n).toHaveValue(`01/09/2026 – 20/09/2026`),await u.clear(n),await u.type(n,`01/09/2026{Enter}`),await c(n).toHaveAttribute(`aria-invalid`,`true`)}},b={args:{presets:!0},play:async({args:e,canvas:t})=>{await u.click(t.getByRole(`button`,{name:/Choose dates/}));let n=await h().findByRole(`dialog`,{name:`Choose dates`});await u.click(f(n).getByRole(`button`,{name:`Last week`}));let i=r(1)[3];await c(e.onValueChange).toHaveBeenLastCalledWith({start:i.start,end:i.end})}},x={args:{name:`period`},play:async({canvasElement:e})=>{await c(e.querySelector(`input[name="period"]`).value).toBe(`2026-09-07/2026-09-13`)}},S={args:{label:`Khoảng thời gian`,locale:`vi-VN`,weekStartsOn:void 0,presets:!0}},C=[`Default`,`PagingApart`,`OutsideDays`,`Typing`,`Presets`,`InAForm`,`Vietnamese`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Two months (one on a narrow screen); the first click starts the range, the second ends it and applies.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The calendars page on their own, opening on the range's first and last months; the left one always stays before the right.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`A day of the month either side is decoration: hidden from assistive tech and not pickable, so each day is one button.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Typed: two dates in the locale's order, any separators.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A list of whole periods beside the calendars: one click applies.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'period'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="period"]')!.value).toBe('2026-09-07/2026-09-13');
  }
}`,...x.parameters?.docs?.source},description:{story:`Submitted as an ISO 8601 interval.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Khoảng thời gian',
    locale: 'vi-VN',
    weekStartsOn: undefined,
    presets: true
  }
}`,...S.parameters?.docs?.source}}}})))()}export{y as a,b as i,g as n,S as o,_ as r,w as s,o as t};