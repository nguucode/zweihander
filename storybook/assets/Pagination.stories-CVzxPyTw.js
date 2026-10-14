import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./expectAnatomy-C52ByQ6s.js";import{a,r as o}from"./story-helpers-EInZsLED.js";import{n as s,r as c,t as l}from"./Pagination-CAlZMHCv.js";var u=t({Anatomy:()=>w,Default:()=>_,DoKeepItShort:()=>E,DontShowEveryPage:()=>D,FewPages:()=>b,Links:()=>x,Middle:()=>v,Ranges:()=>S,Small:()=>y,StatesExample:()=>O,__namedExportsOrder:()=>k,anatomyParts:()=>C,default:()=>g}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),o(),s(),d=n(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Navigation/Pagination`,tags:[`beta`],component:l,args:{totalPages:10,defaultPage:1,onPageChange:p()},argTypes:{totalPages:{description:`How many pages there are. Below 1 counts as 1.`,control:`number`,table:{type:{summary:`number`}}},page:{description:"The current page, 1-based, when you control it. Pair with `onPageChange`.",control:`number`,table:{type:{summary:`number`}}},defaultPage:{description:`The page shown first, when Pagination keeps its own state.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},onPageChange:{description:`Called with the new page. Not called for the page already shown.`,control:!1,table:{type:{summary:`(page: number) => void`}}},siblingCount:{description:`Pages shown either side of the current one.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},boundaryCount:{description:`Pages always shown at each end.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},size:{description:"24px (`sm`) or 32px (`md`) controls, from the control tiers.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},getHref:{description:`Render links instead of buttons, for pages with their own URL: they can be opened in a new tab and shared.`,control:!1,table:{type:{summary:`(page: number) => string`}}},"aria-label":{description:"Names the `<nav>` landmark. Change it when a page has two paginations.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Pagination'`}}}},excludeStories:[`anatomyParts`]},_={play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`});await f(h(n).getByRole(`button`,{name:`Page 1`})).toHaveAttribute(`aria-current`,`page`),await f(h(n).getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await m.click(h(n).getByRole(`button`,{name:`Next page`})),await f(e.onPageChange).toHaveBeenLastCalledWith(2),await f(h(n).getByRole(`button`,{name:`Page 2`})).toHaveAttribute(`aria-current`,`page`),await m.click(h(n).getByRole(`button`,{name:`Page 10`})),await f(h(n).getByRole(`button`,{name:`Next page`})).toBeDisabled(),h(n).getByRole(`button`,{name:`Previous page`}).focus(),await m.keyboard(`{Enter}`),await f(e.onPageChange).toHaveBeenLastCalledWith(9),await m.keyboard(` `),await f(e.onPageChange).toHaveBeenLastCalledWith(8)}},v={args:{defaultPage:6,totalPages:20}},y={args:{size:`sm`,defaultPage:4},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Page 4`});await f(t.getBoundingClientRect().height).toBe(24),await f(a(`pointer: coarse`,t).find(e=>e.style.blockSize)?.style.blockSize).toBe(`var(--target-coarse)`)}},b={args:{totalPages:4,defaultPage:2},play:async({canvas:e})=>{await f(e.getAllByRole(`button`,{name:/^Page /})).toHaveLength(4)}},x={args:{defaultPage:3,getHref:e=>`#page-${e}`},play:async({args:e,canvas:t,canvasElement:n})=>{await f(t.getByRole(`link`,{name:`Page 4`})).toHaveAttribute(`href`,`#page-4`),n.addEventListener(`click`,e=>e.preventDefault()),e.onPageChange.mockClear(),await m.click(t.getByRole(`link`,{name:`Page 3`})),await f(e.onPageChange).not.toHaveBeenCalled(),await f(t.getByRole(`link`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`),await m.click(t.getByRole(`link`,{name:`Page 1`}));let r=t.getByRole(`link`,{name:`Previous page`});await f(r).not.toHaveAttribute(`href`),await f(r).toHaveAttribute(`aria-disabled`,`true`)}},S={play:async()=>{await f(c(1,10)).toEqual([1,2,3,4,5,`end-ellipsis`,10]),await f(c(5,10)).toEqual([1,`start-ellipsis`,4,5,6,`end-ellipsis`,10]),await f(c(10,10)).toEqual([1,`start-ellipsis`,6,7,8,9,10]),await f(c(4,7)).toEqual([1,2,3,4,5,6,7]),await f(c(1,1)).toEqual([1]),await f(c(1,0)).toEqual([])}},C=[{name:`Previous`,selector:`li:first-child > button`,description:`Chevron. Disabled on the first page.`},{name:`Page`,selector:`li:nth-child(2) > button`,description:`A square ghost control with the number, in tabular figures.`},{name:`Ellipsis`,selector:`li > span[aria-hidden="true"]`,description:`"…" where two or more pages are skipped. Decorative.`},{name:`Current page`,selector:`[aria-current="page"]`,description:`The only filled control.`},{name:`Next`,selector:`li:last-child > button`,description:`Chevron. Disabled on the last page.`}],w={tags:[`!dev`],args:{totalPages:20,defaultPage:6},play:async({canvasElement:e})=>{let t=await i(e,C);await f(t[3]).toHaveTextContent(`6`)}},T={inlineSize:`24rem`},E={args:{totalPages:50,defaultPage:25},render:e=>(0,d.jsx)(`div`,{style:T,children:(0,d.jsx)(l,{...e})})},D={tags:[`!dev`],args:{totalPages:50,defaultPage:25,siblingCount:50},render:e=>(0,d.jsx)(`div`,{style:T,children:(0,d.jsx)(l,{...e})})},O={tags:[`!dev`],args:{totalPages:2,defaultPage:1}},k=[`Default`,`Middle`,`Small`,`FewPages`,`Links`,`Ranges`,`anatomyParts`,`Anatomy`,`DoKeepItShort`,`DontShowEveryPage`,`StatesExample`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultPage: 6,
    totalPages: 20
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Pages with their own URL: links, not buttons.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await expect(paginationItems(1, 10)).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 10]);
    await expect(paginationItems(5, 10)).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]);
    await expect(paginationItems(10, 10)).toEqual([1, 'start-ellipsis', 6, 7, 8, 9, 10]);
    // A single hidden page is shown rather than replaced by "…".
    await expect(paginationItems(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    await expect(paginationItems(1, 1)).toEqual([1]);
    await expect(paginationItems(1, 0)).toEqual([]);
  }
}`,...S.parameters?.docs?.source},description:{story:`The range logic: first and last page always, the current one with a sibling each side, and "…" only where it hides two or more pages.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 20,
    defaultPage: 6
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[3]).toHaveTextContent('6');
  }
}`,...w.parameters?.docs?.source},description:{story:`Every part present: a page in the middle of a long list.`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 50,
    defaultPage: 25
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Guidelines, Do: the default range keeps the control short and its width steady.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 50,
    defaultPage: 25,
    siblingCount: 50
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Guidelines, Don't: every page number at once wraps and buries the current page.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 2,
    defaultPage: 1
  }
}`,...O.parameters?.docs?.source},description:{story:`Specs, States: two pages on the first, so Previous shows disabled; small enough for a States cell.`,...O.parameters?.docs?.description}}}})))()}export{x as a,y as c,A as d,b as i,O as l,E as n,v as o,D as r,u as s,w as t,C as u};