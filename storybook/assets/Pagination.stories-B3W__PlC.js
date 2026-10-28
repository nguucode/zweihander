import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{a,r as o}from"./story-helpers-EInZsLED.js";import{n as s,r as c,t as l}from"./Pagination-CNj7Ulyf.js";var u=t({Anatomy:()=>k,Default:()=>v,DoKeepItShort:()=>j,DontShowEveryPage:()=>M,FewPages:()=>x,Links:()=>S,Middle:()=>y,Ranges:()=>D,Small:()=>b,StatesExample:()=>N,SummaryEmpty:()=>T,SummaryLargeCount:()=>w,TotalItemsWins:()=>E,WithSummary:()=>C,__namedExportsOrder:()=>P,anatomyParts:()=>O,default:()=>_}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{r(),o(),s(),d=n(),{expect:f,fn:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Navigation/Pagination`,tags:[`beta`],component:l,args:{totalPages:10,defaultPage:1,onPageChange:p()},argTypes:{totalPages:{description:"How many pages there are. Below 1 counts as 1. Leave it out when `totalItems` is set: the count then comes from `totalItems` and `pageSize`.",control:`number`,table:{type:{summary:`number`}}},page:{description:"The current page, 1-based, when you control it. Pair with `onPageChange`.",control:`number`,table:{type:{summary:`number`}}},defaultPage:{description:`The page shown first, when Pagination keeps its own state.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},onPageChange:{description:`Called with the new page. Not called for the page already shown.`,control:!1,table:{type:{summary:`(page: number) => void`}}},siblingCount:{description:`Pages shown either side of the current one.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},boundaryCount:{description:`Pages always shown at each end.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},size:{description:"24px (`sm`) or 32px (`md`) controls, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},getHref:{description:`Render links instead of buttons, for pages with their own URL: they can be opened in a new tab and shared.`,control:!1,table:{type:{summary:`(page: number) => string`}}},totalItems:{description:'How many rows there are in all. Shows the summary ("21–40 of 340") and, without `totalPages`, sets the page count from `pageSize`.',control:`number`,table:{type:{summary:`number`}}},pageSize:{description:"Rows per page, when you control it. Pair with `onPageSizeChange`.",control:`number`,table:{type:{summary:`number`}}},defaultPageSize:{description:`Rows per page at first, when Pagination keeps its own state.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`20`}}},pageSizeOptions:{description:`The choices for a "Rows per page" select at the end. Without it there is no select.`,control:`object`,table:{type:{summary:`number[]`}}},onPageSizeChange:{description:"Called with the new rows per page. The page then moves so the first row shown stays in view, through `onPageChange`.",control:!1,table:{type:{summary:`(pageSize: number) => void`}}},"aria-label":{description:"Names the `<nav>` landmark. Change it when a page has two paginations.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Pagination'`}}}},excludeStories:[`anatomyParts`]},v={play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`});await f(g(n).getByRole(`button`,{name:`Page 1`})).toHaveAttribute(`aria-current`,`page`),await f(g(n).getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await m.click(g(n).getByRole(`button`,{name:`Next page`})),await f(e.onPageChange).toHaveBeenLastCalledWith(2),await f(g(n).getByRole(`button`,{name:`Page 2`})).toHaveAttribute(`aria-current`,`page`),await m.click(g(n).getByRole(`button`,{name:`Page 10`})),await f(g(n).getByRole(`button`,{name:`Next page`})).toBeDisabled(),g(n).getByRole(`button`,{name:`Previous page`}).focus(),await m.keyboard(`{Enter}`),await f(e.onPageChange).toHaveBeenLastCalledWith(9),await m.keyboard(` `),await f(e.onPageChange).toHaveBeenLastCalledWith(8)}},y={args:{defaultPage:6,totalPages:20}},b={args:{size:`sm`,defaultPage:4},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Page 4`});await f(t.getBoundingClientRect().height).toBe(24),await f(a(`pointer: coarse`,t).find(e=>e.style.blockSize)?.style.blockSize).toBe(`var(--target-coarse)`)}},x={args:{totalPages:4,defaultPage:2},play:async({canvas:e})=>{await f(e.getAllByRole(`button`,{name:/^Page /})).toHaveLength(4)}},S={args:{defaultPage:3,getHref:e=>`#page-${e}`},play:async({args:e,canvas:t,canvasElement:n})=>{await f(t.getByRole(`link`,{name:`Page 4`})).toHaveAttribute(`href`,`#page-4`),n.addEventListener(`click`,e=>e.preventDefault()),e.onPageChange.mockClear(),await m.click(t.getByRole(`link`,{name:`Page 3`})),await f(e.onPageChange).not.toHaveBeenCalled(),await f(t.getByRole(`link`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`),await m.click(t.getByRole(`link`,{name:`Page 1`}));let r=t.getByRole(`link`,{name:`Previous page`});await f(r).not.toHaveAttribute(`href`),await f(r).toHaveAttribute(`aria-disabled`,`true`)}},C={args:{totalPages:void 0,totalItems:340,pageSizeOptions:[10,20,50,100],onPageSizeChange:p()},play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`}),r=g(n).getByRole(`status`);await f(r).toHaveTextContent(`1–20 of 340`),await m.click(g(n).getByRole(`button`,{name:`Page 17`})),await f(r).toHaveTextContent(`321–340 of 340`),await m.click(g(n).getByRole(`button`,{name:`Previous page`})),await f(r).toHaveTextContent(`301–320 of 340`),await f(g(n).getByText(`Rows per page`)).toHaveAttribute(`aria-hidden`,`true`),await m.click(g(n).getByRole(`combobox`,{name:`Rows per page`})),await m.click(await g(document.body).findByRole(`option`,{name:`50`})),await h(()=>f(g(document.body).queryByRole(`listbox`)).toBeNull()),await f(e.onPageSizeChange).toHaveBeenLastCalledWith(50),await f(e.onPageChange).toHaveBeenLastCalledWith(7),await f(r).toHaveTextContent(`301–340 of 340`),await f(g(n).queryByRole(`button`,{name:`Page 8`})).not.toBeInTheDocument()}},w={tags:[`!dev`],args:{totalPages:void 0,totalItems:12500,defaultPageSize:50,defaultPage:3},play:async({canvas:e})=>{await f(e.getByRole(`status`)).toHaveTextContent(`101–150 of 12,500`),await f(e.queryByRole(`combobox`)).not.toBeInTheDocument()}},T={tags:[`!dev`],args:{totalPages:void 0,totalItems:0},play:async({canvas:e})=>{await f(e.getByRole(`status`)).toHaveTextContent(`0 of 0`),await f(e.getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await f(e.getByRole(`button`,{name:`Next page`})).toBeDisabled()}},E={tags:[`!dev`],args:{totalPages:20,totalItems:340,defaultPage:20},play:async({canvas:e})=>{await f(e.getByRole(`button`,{name:`Page 17`})).toHaveAttribute(`aria-current`,`page`),await f(e.getByRole(`status`)).toHaveTextContent(`321–340 of 340`)}},D={play:async()=>{await f(c(1,10)).toEqual([1,2,3,4,5,`end-ellipsis`,10]),await f(c(5,10)).toEqual([1,`start-ellipsis`,4,5,6,`end-ellipsis`,10]),await f(c(10,10)).toEqual([1,`start-ellipsis`,6,7,8,9,10]),await f(c(4,7)).toEqual([1,2,3,4,5,6,7]),await f(c(1,1)).toEqual([1]),await f(c(1,0)).toEqual([])}},O=[{name:`Summary`,selector:`[role="status"]`,description:'The rows shown out of the total, "21–40 of 340". Only with `totalItems`; announced politely when it changes.'},{name:`Previous`,selector:`li:first-child > button`,description:`Chevron. Disabled on the first page.`},{name:`Page`,selector:`li:nth-child(2) > button`,description:`A square ghost control with the number, in tabular figures.`},{name:`Ellipsis`,selector:`li > span[aria-hidden="true"]`,description:`"…" where two or more pages are skipped. Decorative.`},{name:`Current page`,selector:`[aria-current="page"]`,description:`The only filled control.`},{name:`Next`,selector:`li:last-child > button`,description:`Chevron. Disabled on the last page.`},{name:`Rows per page`,selector:`[role="combobox"]`,description:"A Select of `pageSizeOptions`. Only when they are passed."}],k={tags:[`!dev`],args:{totalPages:void 0,totalItems:400,defaultPage:6,pageSizeOptions:[20,50]},play:async({canvasElement:e})=>{let t=await i(e,O);await f(t[4]).toHaveTextContent(`6`)}},A={inlineSize:`24rem`},j={args:{totalPages:50,defaultPage:25},render:e=>(0,d.jsx)(`div`,{style:A,children:(0,d.jsx)(l,{...e})})},M={tags:[`!dev`],args:{totalPages:50,defaultPage:25,siblingCount:50},render:e=>(0,d.jsx)(`div`,{style:A,children:(0,d.jsx)(l,{...e})})},N={tags:[`!dev`],args:{totalPages:2,defaultPage:1}},P=[`Default`,`Middle`,`Small`,`FewPages`,`Links`,`WithSummary`,`SummaryLargeCount`,`SummaryEmpty`,`TotalItemsWins`,`Ranges`,`anatomyParts`,`Anatomy`,`DoKeepItShort`,`DontShowEveryPage`,`StatesExample`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Pagination'
    });
    await expect(within(nav).getByRole('button', {
      name: 'Page 1'
    })).toHaveAttribute('aria-current', 'page');
    await expect(within(nav).getByRole('button', {
      name: 'Previous page'
    })).toBeDisabled();
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Next page'
    }));
    await expect(args.onPageChange).toHaveBeenLastCalledWith(2);
    await expect(within(nav).getByRole('button', {
      name: 'Page 2'
    })).toHaveAttribute('aria-current', 'page');
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Page 10'
    }));
    await expect(within(nav).getByRole('button', {
      name: 'Next page'
    })).toBeDisabled();
    // Native buttons: Enter and Space both activate.
    within(nav).getByRole('button', {
      name: 'Previous page'
    }).focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onPageChange).toHaveBeenLastCalledWith(9);
    await userEvent.keyboard(' ');
    await expect(args.onPageChange).toHaveBeenLastCalledWith(8);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultPage: 6,
    totalPages: 20
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultPage: 4
  },
  play: async ({
    canvas
  }) => {
    const page = canvas.getByRole('button', {
      name: 'Page 4'
    });
    await expect(page.getBoundingClientRect().height).toBe(24);
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', page).find(r => r.style.blockSize)?.style.blockSize).toBe('var(--target-coarse)');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 4,
    defaultPage: 2
  },
  play: async ({
    canvas
  }) => {
    // No ellipsis when every page fits.
    await expect(canvas.getAllByRole('button', {
      name: /^Page /
    })).toHaveLength(4);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultPage: 3,
    getHref: p => \`#page-\${p}\`
  },
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole('link', {
      name: 'Page 4'
    })).toHaveAttribute('href', '#page-4');
    // Keep the test page where it is while links are clicked.
    canvasElement.addEventListener('click', e => e.preventDefault())
    // Clicking the page already shown does not report a change.
;
    (args.onPageChange as ReturnType<typeof fn>).mockClear();
    await userEvent.click(canvas.getByRole('link', {
      name: 'Page 3'
    }));
    await expect(args.onPageChange).not.toHaveBeenCalled();
    await expect(canvas.getByRole('link', {
      name: 'Page 3'
    })).toHaveAttribute('aria-current', 'page');
    // At the first page, Previous has nowhere to go: no href, aria-disabled.
    await userEvent.click(canvas.getByRole('link', {
      name: 'Page 1'
    }));
    const previous = canvas.getByRole('link', {
      name: 'Previous page'
    });
    await expect(previous).not.toHaveAttribute('href');
    await expect(previous).toHaveAttribute('aria-disabled', 'true');
  }
}`,...S.parameters?.docs?.source},description:{story:`Pages with their own URL: links, not buttons.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: undefined,
    totalItems: 340,
    pageSizeOptions: [10, 20, 50, 100],
    onPageSizeChange: fn()
  },
  play: async ({
    args,
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Pagination'
    });
    const status = within(nav).getByRole('status');
    await expect(status).toHaveTextContent('1–20 of 340');
    // 340 rows at 20 a page: 17 pages.
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Page 17'
    }));
    // The last page holds the remainder.
    await expect(status).toHaveTextContent('321–340 of 340');
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Previous page'
    }));
    await expect(status).toHaveTextContent('301–320 of 340');
    // The visible label is hidden from the tree: the combobox already carries the name.
    await expect(within(nav).getByText('Rows per page')).toHaveAttribute('aria-hidden', 'true');
    // 50 a page: row 301 is on page 7, so the reader stays where they were.
    await userEvent.click(within(nav).getByRole('combobox', {
      name: 'Rows per page'
    }));
    await userEvent.click(await within(document.body).findByRole('option', {
      name: '50'
    }));
    await waitFor(() => expect(within(document.body).queryByRole('listbox')).toBeNull());
    await expect(args.onPageSizeChange).toHaveBeenLastCalledWith(50);
    await expect(args.onPageChange).toHaveBeenLastCalledWith(7);
    await expect(status).toHaveTextContent('301–340 of 340');
    await expect(within(nav).queryByRole('button', {
      name: 'Page 8'
    })).not.toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source},description:{story:`A table footer: the rows shown out of how many, the pages, and how many rows a page holds.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: undefined,
    totalItems: 12500,
    defaultPageSize: 50,
    defaultPage: 3
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('101–150 of 12,500');
    await expect(canvas.queryByRole('combobox')).not.toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source},description:{story:"Large counts are grouped for reading. No select without `pageSizeOptions`.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: undefined,
    totalItems: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('0 of 0');
    await expect(canvas.getByRole('button', {
      name: 'Previous page'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Next page'
    })).toBeDisabled();
  }
}`,...T.parameters?.docs?.source},description:{story:`No rows: "0 of 0", one page, both steps disabled.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 20,
    totalItems: 340,
    defaultPage: 20
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Page 17'
    })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('status')).toHaveTextContent('321–340 of 340');
  }
}`,...E.parameters?.docs?.source},description:{story:"`totalItems` wins over a `totalPages` that disagrees, so the summary never runs past the end.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await expect(paginationItems(1, 10)).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 10]);
    await expect(paginationItems(5, 10)).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]);
    await expect(paginationItems(10, 10)).toEqual([1, 'start-ellipsis', 6, 7, 8, 9, 10]);
    // A single hidden page is shown rather than replaced by "…".
    await expect(paginationItems(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    await expect(paginationItems(1, 1)).toEqual([1]);
    await expect(paginationItems(1, 0)).toEqual([]);
  }
}`,...D.parameters?.docs?.source},description:{story:`The range logic: first and last page always, the current one with a sibling each side, and "…" only where it hides two or more pages.`,...D.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: undefined,
    totalItems: 400,
    defaultPage: 6,
    pageSizeOptions: [20, 50]
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveTextContent('6');
  }
}`,...k.parameters?.docs?.source},description:{story:`Every part present: a page in the middle of a long list.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 50,
    defaultPage: 25
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Guidelines, Do: the default range keeps the control short and its width steady.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 50,
    defaultPage: 25,
    siblingCount: 50
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Guidelines, Don't: every page number at once wraps and buries the current page.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 2,
    defaultPage: 1
  }
}`,...N.parameters?.docs?.source},description:{story:`Specs, States: two pages on the first, so Previous shows disabled; small enough for a States cell.`,...N.parameters?.docs?.description}}}})))()}export{S as a,b as c,O as d,F as f,x as i,N as l,j as n,y as o,M as r,u as s,k as t,C as u};