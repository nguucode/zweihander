import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,o as r}from"./Theme-2soWRbQy.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./expectAnatomy-C52ByQ6s.js";import{o as s,r as c,t as l}from"./story-helpers-EInZsLED.js";import{a as u,t as d}from"./Calendar-Am29Cy43.js";var f=t({Anatomy:()=>P,Default:()=>S,DoNearDate:()=>F,DontFarDate:()=>I,Keyboard:()=>C,MinMax:()=>D,MonthEnds:()=>E,NoWeekends:()=>k,Persian:()=>j,Range:()=>O,RightToLeft:()=>A,Today:()=>w,TodayOnTheFirst:()=>T,Vietnamese:()=>M,__namedExportsOrder:()=>L,anatomyParts:()=>N,default:()=>b}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{a(),r(),c(),u(),p=i(),{expect:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),b={title:`Components/Data Display/Calendar`,tags:[`beta`],component:d,parameters:{a11y:{config:{rules:[{id:`color-contrast`,selector:`*:not([data-outside])`},{id:`aria-command-name`,selector:`[role="link"], [role="button"]:not([data-base-ui-focus-guard]), [role="menuitem"]`},{id:`aria-hidden-focus`,selector:`[aria-hidden="true"]:not([data-base-ui-focus-guard])`}]}}},args:{defaultValue:new Date(2026,8,18),locale:`en-GB`,weekStartsOn:1,onValueChange:h(),onMonthChange:h()},argTypes:{value:{description:"The selected day, controlled. Local midnight: the time is ignored. Pair with `onValueChange`.",control:!1,table:{type:{summary:`Date | null`}}},defaultValue:{description:`The starting day when uncontrolled.`,control:!1,table:{type:{summary:`Date | null`},defaultValue:{summary:`null`}}},onValueChange:{description:`Called with the day on click, Enter and Space. Not called for an unavailable day.`,control:!1,table:{type:{summary:`(date: Date) => void`}}},month:{description:"The month shown, controlled. Pair with `onMonthChange`.",control:!1,table:{type:{summary:`Date`}}},defaultMonth:{description:`The starting month when uncontrolled. Defaults to the value's month, or today's.`,control:!1,table:{type:{summary:`Date`},defaultValue:{summary:`the value's or today's`}}},onMonthChange:{description:`Called with the first day of the new month, whether the arrows or the keyboard moved it.`,control:!1,table:{type:{summary:`(month: Date) => void`}}},min:{description:`The first day that can be picked. Days before it are unavailable, the keyboard stops at it, and Previous month is disabled in its month.`,control:!1,table:{type:{summary:`Date | null`}}},max:{description:`The last day that can be picked. Days after it are unavailable, the keyboard stops at it, and Next month is disabled in its month.`,control:!1,table:{type:{summary:`Date | null`}}},isDateDisabled:{description:"Rules out single days, e.g. weekends or booked days. They stay focusable, with `aria-disabled`.",control:!1,table:{type:{summary:`(date: Date) => boolean`}}},range:{description:"Shows a span instead of `value`: both ends selected, the days between banded. Clicks still report one day; the owner decides the span, as Date Range Picker does.",control:!1,table:{type:{summary:`{ start: Date | null; end: Date | null } | null`}}},locale:{description:"BCP 47 tag, e.g. `vi-VN`, for the month and weekday names and the first day of the week.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`the browser's`}}},weekStartsOn:{description:`0 = Sunday … 6 = Saturday. Defaults to the locale's, or Monday where the browser does not know it.`,control:{type:`number`,min:0,max:6,step:1},table:{type:{summary:`number`},defaultValue:{summary:`the locale's`}}},autoFocus:{description:`Focuses the selected (or today's) day on mount, e.g. when opened in a popover.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},className:{description:`Added to the root element.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},x=()=>document.activeElement?.getAttribute(`aria-label`),S={play:async({args:e,canvas:t})=>{let n=t.getByRole(`grid`,{name:`September 2026`});await m(v(n).getAllByRole(`columnheader`)[0]).toHaveTextContent(`Mo`),await m(v(n).getAllByRole(`columnheader`)[0]).toHaveAttribute(`abbr`,`Monday`),await m(v(n).getAllByRole(`row`)).toHaveLength(7);let r=t.getByRole(`button`,{name:y(2026,9,18)});await m(r.closest(`td`)).toHaveAttribute(`aria-selected`,`true`),await m(r).toHaveAttribute(`tabindex`,`0`),await g.click(t.getByRole(`button`,{name:y(2026,9,22)})),await m(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,22))}},C={play:async({args:e,canvas:t})=>{t.getByRole(`button`,{name:y(2026,9,18)}).focus(),await g.keyboard(`{ArrowRight}`),await _(()=>m(x()).toBe(y(2026,9,19))),await g.keyboard(`{ArrowDown}`),await _(()=>m(x()).toBe(y(2026,9,26))),await g.keyboard(`{End}`),await _(()=>m(x()).toBe(y(2026,9,27))),await g.keyboard(`{Home}`),await _(()=>m(x()).toBe(y(2026,9,21))),await g.keyboard(`{ArrowDown}{ArrowDown}`),await _(()=>m(x()).toBe(y(2026,10,5))),await m(t.getByRole(`grid`,{name:`October 2026`})).toBeVisible(),await m(e.onMonthChange).toHaveBeenLastCalledWith(new Date(2026,9,1)),await g.keyboard(`{PageDown}`),await _(()=>m(x()).toBe(y(2026,11,5))),await g.keyboard(`{Shift>}{PageUp}{/Shift}`),await _(()=>m(x()).toBe(y(2025,11,5))),await g.keyboard(`{Enter}`),await m(e.onValueChange).toHaveBeenLastCalledWith(new Date(2025,10,5)),await g.keyboard(`{ArrowUp}`),await _(()=>m(x()).toBe(y(2025,10,29))),await g.keyboard(`{ArrowLeft}`),await _(()=>m(x()).toBe(y(2025,10,28))),await g.keyboard(`{Shift>}{PageDown}{/Shift}`),await _(()=>m(x()).toBe(y(2026,10,28))),await g.keyboard(`{PageUp}`),await _(()=>m(x()).toBe(y(2026,9,28))),await g.keyboard(` `),await m(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,28))}},w={args:{defaultValue:void 0},render:e=>{let t=new Date,r={start:new Date(t.getFullYear(),t.getMonth(),t.getDate()-1),end:new Date(t.getFullYear(),t.getMonth(),t.getDate()+1)};return(0,p.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:[`light`,`dark`].flatMap(i=>[void 0,r].map(r=>(0,p.jsx)(n,{appearance:i,style:{background:`var(--background)`,padding:8},"data-audit":`${i}${r?` range`:``}`,children:(0,p.jsx)(d,{...e,range:r,defaultMonth:t})},i+!!r)))})},play:async({canvasElement:e})=>{let t=[],n=e.querySelectorAll(`[aria-current="date"]`);await m(n).toHaveLength(4);for(let t of e.querySelectorAll(`[data-audit="light"] [aria-current="date"], [data-audit="dark"] [aria-current="date"]`))await m(t).toHaveAttribute(`tabindex`,`0`);for(let t of e.querySelectorAll(`[data-audit] [role="grid"]`))await m(t.querySelectorAll(`button[tabindex="0"]`)).toHaveLength(1);for(let e of n){let{color:n,backgroundColor:r}=getComputedStyle(e),i=getComputedStyle(e.closest(`[data-audit]`)).backgroundColor,a=l(n,i,r);a<4.5&&t.push(`${e.closest(`[data-audit]`).dataset.audit}: ${a.toFixed(2)}`)}await m(t).toEqual([])}},T={...w,tags:[`!dev`],beforeEach:()=>s(new Date(2026,10,1))},E={args:{defaultValue:new Date(2026,0,31)},play:async()=>{document.querySelector(`[tabindex="0"]`).focus(),await g.keyboard(`{PageDown}`),await _(()=>m(x()).toBe(y(2026,2,28)))}},D={args:{min:new Date(2026,8,10),max:new Date(2026,8,25)},play:async({args:e,canvas:t})=>{await m(t.getByRole(`button`,{name:`Previous month`})).toBeDisabled(),await m(t.getByRole(`button`,{name:`Next month`})).toBeDisabled();let n=t.getByRole(`button`,{name:y(2026,9,9)});await m(n).toHaveAttribute(`aria-disabled`,`true`),e.onValueChange.mockClear(),await g.click(n),await m(e.onValueChange).not.toHaveBeenCalled(),t.getByRole(`button`,{name:y(2026,9,18)}).focus(),await g.keyboard(`{PageDown}`),await _(()=>m(x()).toBe(y(2026,9,25)))}},O={args:{range:{start:new Date(2026,8,10),end:new Date(2026,8,16)}},play:async({canvas:e})=>{let t=t=>e.getByRole(`button`,{name:y(2026,9,t)}).closest(`td`);await m(t(10)).toHaveAttribute(`aria-selected`,`true`),await m(t(13)).toHaveAttribute(`aria-selected`,`true`),await m(t(16)).toHaveAttribute(`aria-selected`,`true`),await m(t(17)).not.toHaveAttribute(`aria-selected`),await m(t(18)).not.toHaveAttribute(`aria-selected`)}},k={args:{isDateDisabled:e=>e.getDay()===0||e.getDay()===6},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:y(2026,9,19)});await m(n).toHaveAttribute(`aria-disabled`,`true`),t.getByRole(`button`,{name:y(2026,9,18)}).focus(),await g.keyboard(`{ArrowRight}`),await _(()=>m(n).toHaveFocus()),e.onValueChange.mockClear(),await g.keyboard(`{Enter}`),await m(e.onValueChange).not.toHaveBeenCalled()}},A={decorators:[e=>(0,p.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{e.getByRole(`button`,{name:y(2026,9,18)}).focus(),await g.keyboard(`{ArrowLeft}`),await m(e.getByRole(`button`,{name:y(2026,9,19)})).toHaveFocus();let t=e.getByRole(`button`,{name:`Previous month`}).querySelector(`svg`);await m(getComputedStyle(t).scale).toBe(`-1 1`)}},j={args:{locale:`fa-IR`},play:async({canvasElement:e})=>{let t=e.querySelector(`td[aria-selected="true"]`);await m(t).toHaveTextContent(`۱۸`)}},M={args:{locale:`vi-VN`,weekStartsOn:void 0}},N=[{name:`Month`,selector:`[aria-live="polite"]`,description:`The month and year, short, at the start. Announced as it changes.`},{name:`Previous month`,selector:`button[aria-label="Previous month"]`,description:`Disabled in the month of min. Mirrored right to left.`},{name:`Next month`,selector:`button[aria-label="Next month"]`,description:`Disabled in the month of max.`},{name:`Weekdays`,selector:`thead tr`,description:`Two letters ("Mo"), or the narrow names ("T2") where the short ones are long; the locale's first day first.`},{name:`Day`,selector:`tbody button:not([aria-disabled]):not([aria-current])`,description:`A button named by its full date.`},{name:`Outside day`,selector:`[data-outside]`,description:`A day of the month either side, for shape: faded, hidden from assistive tech, never selected or banded.`},{name:`Selected day`,selector:`td[aria-selected="true"] > button`,description:`The value, or with range both ends.`},{name:`Unavailable day`,selector:`button[aria-disabled="true"]`,description:`Before min, after max, or ruled out by isDateDisabled.`}],P={tags:[`!dev`],args:{isDateDisabled:e=>e.getMonth()===8&&(e.getDate()===23||e.getDate()===24)},play:async({canvasElement:e})=>{let t=await o(e,N),n=new Intl.DateTimeFormat(`en-GB`,{month:`short`,year:`numeric`,calendar:`gregory`}).format(new Date(2026,8));await m(t[0]).toHaveTextContent(n),await m(t[5].tagName).toBe(`SPAN`),await m(t[5]).toHaveAttribute(`aria-hidden`,`true`),await m(t[7]).toHaveAccessibleName(y(2026,9,23))}},F={args:{min:new Date(2026,8,14),isDateDisabled:e=>e.getDay()===0}},I={tags:[`!dev`],args:{defaultValue:new Date(1990,4,12)}},L=[`Default`,`Keyboard`,`Today`,`TodayOnTheFirst`,`MonthEnds`,`MinMax`,`Range`,`NoWeekends`,`RightToLeft`,`Persian`,`Vietnamese`,`anatomyParts`,`Anatomy`,`DoNearDate`,`DontFarDate`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const grid = canvas.getByRole('grid', {
      name: 'September 2026'
    });
    // Monday first, six weeks.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveTextContent('Mo');
    // The header shows two letters; \`abbr\` gives a screen reader the full name.
    await expect(within(grid).getAllByRole('columnheader')[0]).toHaveAttribute('abbr', 'Monday');
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    // Up a week, back a day, a year on, a month back, and Space selects.
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => expect(focused()).toBe(day(2025, 10, 29)));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(focused()).toBe(day(2025, 10, 28)));
    await userEvent.keyboard('{Shift>}{PageDown}{/Shift}');
    await waitFor(() => expect(focused()).toBe(day(2026, 10, 28)));
    await userEvent.keyboard('{PageUp}');
    await waitFor(() => expect(focused()).toBe(day(2026, 9, 28)));
    await userEvent.keyboard(' ');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 28));
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined
  },
  render: args => {
    const now = new Date();
    const range = {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }}>
        {(['light', 'dark'] as const).flatMap(mode => [undefined, range].map(r => <Theme key={mode + !!r} appearance={mode} style={{
        background: 'var(--background)',
        padding: 8
      }} data-audit={\`\${mode}\${r ? ' range' : ''}\`}>
              {/* Today's month, not the range's: on the 1st the range starts last month. */}
              <Calendar {...args} range={r} defaultMonth={now} />
            </Theme>))}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    const days = canvasElement.querySelectorAll<HTMLElement>('[aria-current="date"]');
    await expect(days).toHaveLength(4);
    // With nothing selected, today holds the tab stop.
    for (const today of canvasElement.querySelectorAll('[data-audit="light"] [aria-current="date"], [data-audit="dark"] [aria-current="date"]')) await expect(today).toHaveAttribute('tabindex', '0');
    // Every grid keeps a tab stop, also when the range starts outside the month.
    for (const grid of canvasElement.querySelectorAll('[data-audit] [role="grid"]')) await expect(grid.querySelectorAll('button[tabindex="0"]')).toHaveLength(1);
    for (const today of days) {
      const {
        color,
        backgroundColor
      } = getComputedStyle(today);
      const page = getComputedStyle(today.closest<HTMLElement>('[data-audit]')!).backgroundColor;
      const ratio = contrast(color, page, backgroundColor);
      if (ratio < 4.5) failures.push(\`\${today.closest<HTMLElement>('[data-audit]')!.dataset.audit}: \${ratio.toFixed(2)}\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...w.parameters?.docs?.source},description:{story:`Today, on its own and inside a range, in both modes. The other stories pin
September 2026, so this is the one that always shows the current month:
axe checks the disc here, and the play measures it.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Today,
  tags: ['!dev'],
  beforeEach: () => mockToday(new Date(2026, 10, 1))
}`,...T.parameters?.docs?.source},description:{story:`Today on the 1st: yesterday is last month, so the range starts outside the month shown.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(2026, 0, 31)
  },
  play: async () => {
    document.querySelector<HTMLElement>('[tabindex="0"]')!.focus();
    await userEvent.keyboard('{PageDown}');
    await waitFor(() => expect(focused()).toBe(day(2026, 2, 28)));
  }
}`,...E.parameters?.docs?.source},description:{story:`31 January + one month lands on the last day of February.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`A span: both ends selected, the days between banded. Clicks still report one day; Date Range Picker decides the span.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isDateDisabled: (d: Date) => d.getDay() === 0 || d.getDay() === 6
  },
  play: async ({
    args,
    canvas
  }) => {
    const saturday = canvas.getByRole('button', {
      name: day(2026, 9, 19)
    });
    await expect(saturday).toHaveAttribute('aria-disabled', 'true');
    // Unavailable days are not skipped: the keyboard lands on them, and they do not select.
    canvas.getByRole('button', {
      name: day(2026, 9, 18)
    }).focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(saturday).toHaveFocus());
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.keyboard('{Enter}');
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Arrows follow the screen: in right to left, ArrowLeft is the next day.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Persian's default calendar is not Gregorian; the grid is, so its labels are too.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'vi-VN',
    weekStartsOn: undefined
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isDateDisabled: (d: Date) => d.getMonth() === 8 && (d.getDate() === 23 || d.getDate() === 24)
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    // Short month names differ between CLDR versions ("Sep", "Sept"): read the formatter.
    const title = new Intl.DateTimeFormat('en-GB', {
      month: 'short',
      year: 'numeric',
      calendar: 'gregory'
    }).format(new Date(2026, 8));
    await expect(found[0]).toHaveTextContent(title);
    // Outside days are not buttons, and assistive tech does not see them.
    await expect(found[5]!.tagName).toBe('SPAN');
    await expect(found[5]).toHaveAttribute('aria-hidden', 'true');
    await expect(found[7]).toHaveAccessibleName(day(2026, 9, 23));
  }
}`,...P.parameters?.docs?.source},description:{story:`One selected day and two booked ones, so every part is present.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(2026, 8, 14),
    isDateDisabled: (d: Date) => d.getDay() === 0
  }
}`,...F.parameters?.docs?.source},description:{story:`Guidelines, Do: a date close to now, picked by looking at the month.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: new Date(1990, 4, 12)
  }
}`,...I.parameters?.docs?.source},description:{story:`Guidelines, Don't: a date of birth, decades back, one Page Up at a time.`,...I.parameters?.docs?.description}}}})))()}export{I as a,E as c,M as d,N as f,F as i,k as l,f as n,C as o,R as p,S as r,D as s,P as t,O as u};