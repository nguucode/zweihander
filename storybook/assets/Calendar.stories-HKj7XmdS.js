import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{a as r,t as i}from"./Calendar-BBGbmfzN.js";var a=t({Default:()=>h,Keyboard:()=>g,MinMax:()=>v,MonthEnds:()=>_,NoWeekends:()=>b,Persian:()=>S,Range:()=>y,RightToLeft:()=>x,Vietnamese:()=>C,__namedExportsOrder:()=>w,default:()=>p}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),o=n(),{expect:s,fn:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),p={title:`Components/Data Display/Calendar`,component:i,parameters:{a11y:{test:`error`,config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`}]}}},args:{defaultValue:new Date(2026,8,18),locale:`en-GB`,weekStartsOn:1,onValueChange:c(),onMonthChange:c()},argTypes:{value:{control:!1},defaultValue:{control:!1},month:{control:!1},min:{control:!1},max:{control:!1}}},m=()=>document.activeElement?.getAttribute(`aria-label`),h={play:async({args:e,canvas:t})=>{let n=t.getByRole(`grid`,{name:`September 2026`});await s(d(n).getAllByRole(`columnheader`)[0]).toHaveTextContent(`Mo`),await s(d(n).getAllByRole(`row`)).toHaveLength(7);let r=t.getByRole(`button`,{name:f(2026,9,18)});await s(r.closest(`td`)).toHaveAttribute(`aria-selected`,`true`),await s(r).toHaveAttribute(`tabindex`,`0`),await l.click(t.getByRole(`button`,{name:f(2026,9,22)})),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,22))}},g={play:async({args:e,canvas:t})=>{t.getByRole(`button`,{name:f(2026,9,18)}).focus(),await l.keyboard(`{ArrowRight}`),await u(()=>s(m()).toBe(f(2026,9,19))),await l.keyboard(`{ArrowDown}`),await u(()=>s(m()).toBe(f(2026,9,26))),await l.keyboard(`{End}`),await u(()=>s(m()).toBe(f(2026,9,27))),await l.keyboard(`{Home}`),await u(()=>s(m()).toBe(f(2026,9,21))),await l.keyboard(`{ArrowDown}{ArrowDown}`),await u(()=>s(m()).toBe(f(2026,10,5))),await s(t.getByRole(`grid`,{name:`October 2026`})).toBeVisible(),await s(e.onMonthChange).toHaveBeenLastCalledWith(new Date(2026,9,1)),await l.keyboard(`{PageDown}`),await u(()=>s(m()).toBe(f(2026,11,5))),await l.keyboard(`{Shift>}{PageUp}{/Shift}`),await u(()=>s(m()).toBe(f(2025,11,5))),await l.keyboard(`{Enter}`),await s(e.onValueChange).toHaveBeenLastCalledWith(new Date(2025,10,5))}},_={args:{defaultValue:new Date(2026,0,31)},play:async()=>{document.querySelector(`[tabindex="0"]`).focus(),await l.keyboard(`{PageDown}`),await u(()=>s(m()).toBe(f(2026,2,28)))}},v={args:{min:new Date(2026,8,10),max:new Date(2026,8,25)},play:async({args:e,canvas:t})=>{await s(t.getByRole(`button`,{name:`Previous month`})).toBeDisabled(),await s(t.getByRole(`button`,{name:`Next month`})).toBeDisabled();let n=t.getByRole(`button`,{name:f(2026,9,9)});await s(n).toHaveAttribute(`aria-disabled`,`true`),e.onValueChange.mockClear(),await l.click(n),await s(e.onValueChange).not.toHaveBeenCalled(),t.getByRole(`button`,{name:f(2026,9,18)}).focus(),await l.keyboard(`{PageDown}`),await u(()=>s(m()).toBe(f(2026,9,25)))}},y={args:{range:{start:new Date(2026,8,10),end:new Date(2026,8,16)}},play:async({canvas:e})=>{let t=t=>e.getByRole(`button`,{name:f(2026,9,t)}).closest(`td`);await s(t(10)).toHaveAttribute(`aria-selected`,`true`),await s(t(13)).toHaveAttribute(`aria-selected`,`true`),await s(t(16)).toHaveAttribute(`aria-selected`,`true`),await s(t(17)).not.toHaveAttribute(`aria-selected`),await s(t(18)).not.toHaveAttribute(`aria-selected`)}},b={args:{isDateDisabled:e=>e.getDay()===0||e.getDay()===6},play:async({canvas:e})=>{await s(e.getByRole(`button`,{name:f(2026,9,19)})).toHaveAttribute(`aria-disabled`,`true`)}},x={decorators:[e=>(0,o.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{e.getByRole(`button`,{name:f(2026,9,18)}).focus(),await l.keyboard(`{ArrowLeft}`),await s(e.getByRole(`button`,{name:f(2026,9,19)})).toHaveFocus();let t=e.getByRole(`button`,{name:`Previous month`}).querySelector(`svg`);await s(getComputedStyle(t).scale).toBe(`-1 1`)}},S={args:{locale:`fa-IR`},play:async({canvasElement:e})=>{let t=e.querySelector(`td[aria-selected="true"]`);await s(t).toHaveTextContent(`۱۸`)}},C={args:{locale:`vi-VN`,weekStartsOn:void 0}},w=[`Default`,`Keyboard`,`MonthEnds`,`MinMax`,`Range`,`NoWeekends`,`RightToLeft`,`Persian`,`Vietnamese`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const grid = canvas.getByRole('grid', {
      name: 'September 2026'
    });
    // Monday first, six weeks.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveTextContent('Mo');
    await expect(within(grid).getAllByRole('row')).toHaveLength(7);
    const selected = canvas.getByRole('button', {
      name: day(2026, 9, 18)
    });
    await expect(selected.closest('td')).toHaveAttribute('aria-selected', 'true');
    // One tab stop: the selected day.
    await expect(selected).toHaveAttribute('tabindex', '0');
    await userEvent.click(canvas.getByRole('button', {
      name: day(2026, 9, 22)
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 22));
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    canvas.getByRole('button', {
      name: day(2026, 9, 18)
    }).focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 19)));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 26)));
    // End: last day of the week (Sunday, with Monday first).
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 27)));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 21)));
    // Across the month edge, the month follows.
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 10, 5)));
    await expect(canvas.getByRole('grid', {
      name: 'October 2026'
    })).toBeVisible();
    await expect(args.onMonthChange).toHaveBeenLastCalledWith(new Date(2026, 9, 1));
    // Page Down: next month, same day; Shift+Page Up: a year back.
    await userEvent.keyboard('{PageDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 11, 5)));
    await userEvent.keyboard('{Shift>}{PageUp}{/Shift}');
    await waitFor(() => expect(focused()).toBe(day(2025, 11, 5)));
    await userEvent.keyboard('{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2025, 10, 5));
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(2026, 0, 31)
  },
  play: async () => {
    document.querySelector<HTMLElement>('[tabindex="0"]')!.focus();
    await userEvent.keyboard('{PageDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 2, 28)));
  }
}`,..._.parameters?.docs?.source},description:{story:`31 January + one month lands on the last day of February.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(2026, 8, 10),
    max: new Date(2026, 8, 25)
  },
  play: async ({
    args,
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Previous month'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Next month'
    })).toBeDisabled();
    const early = canvas.getByRole('button', {
      name: day(2026, 9, 9)
    });
    await expect(early).toHaveAttribute('aria-disabled', 'true');
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.click(early);
    await expect(args.onValueChange).not.toHaveBeenCalled();
    // The keyboard stops at the bounds.
    canvas.getByRole('button', {
      name: day(2026, 9, 18)
    }).focus();
    await userEvent.keyboard('{PageDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 25)));
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    range: {
      start: new Date(2026, 8, 10),
      end: new Date(2026, 8, 16)
    }
  },
  play: async ({
    canvas
  }) => {
    const cell = (d: number) => canvas.getByRole('button', {
      name: day(2026, 9, d)
    }).closest('td');
    await expect(cell(10)).toHaveAttribute('aria-selected', 'true');
    await expect(cell(13)).toHaveAttribute('aria-selected', 'true');
    await expect(cell(16)).toHaveAttribute('aria-selected', 'true');
    await expect(cell(17)).not.toHaveAttribute('aria-selected');
    // \`range\` wins over \`value\`.
    await expect(cell(18)).not.toHaveAttribute('aria-selected');
  }
}`,...y.parameters?.docs?.source},description:{story:`A span: both ends selected, the days between banded. Clicks still report one day; Date Range Picker decides the span.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isDateDisabled: (d: Date) => d.getDay() === 0 || d.getDay() === 6
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: day(2026, 9, 19)
    })).toHaveAttribute('aria-disabled', 'true');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div dir="rtl">{Story()}</div>],
  play: async ({
    canvas
  }) => {
    canvas.getByRole('button', {
      name: day(2026, 9, 18)
    }).focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(canvas.getByRole('button', {
      name: day(2026, 9, 19)
    })).toHaveFocus();
    // The chevrons are mirrored to point the way the months move.
    const svg = canvas.getByRole('button', {
      name: 'Previous month'
    }).querySelector('svg')!;
    await expect(getComputedStyle(svg).scale).toBe('-1 1');
  }
}`,...x.parameters?.docs?.source},description:{story:`Arrows follow the screen: in right to left, ArrowLeft is the next day.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'fa-IR'
  },
  play: async ({
    canvasElement
  }) => {
    const selected = canvasElement.querySelector('td[aria-selected="true"]')!;
    // 18, in Persian digits: the Gregorian day, not 27 Shahrivar.
    await expect(selected).toHaveTextContent('۱۸');
  }
}`,...S.parameters?.docs?.source},description:{story:`Persian's default calendar is not Gregorian; the grid is, so its labels are too.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'vi-VN',
    weekStartsOn: undefined
  }
}`,...C.parameters?.docs?.source}}}})))()}export{_ as a,C as c,v as i,T as l,h as n,b as o,g as r,y as s,a as t};