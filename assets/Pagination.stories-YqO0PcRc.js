import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./Pagination-baNVh3vI.js";var a=t({Default:()=>d,FewPages:()=>m,Links:()=>h,Middle:()=>f,Ranges:()=>g,Small:()=>p,__namedExportsOrder:()=>_,default:()=>u}),o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),{expect:o,fn:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Navigation/Pagination`,component:i,parameters:{a11y:{test:`error`}},args:{totalPages:10,defaultPage:1,onPageChange:s()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`]},getHref:{control:!1}}},d={play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`});await o(l(n).getByRole(`button`,{name:`Page 1`})).toHaveAttribute(`aria-current`,`page`),await o(l(n).getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await c.click(l(n).getByRole(`button`,{name:`Next page`})),await o(e.onPageChange).toHaveBeenLastCalledWith(2),await o(l(n).getByRole(`button`,{name:`Page 2`})).toHaveAttribute(`aria-current`,`page`),await c.click(l(n).getByRole(`button`,{name:`Page 10`})),await o(l(n).getByRole(`button`,{name:`Next page`})).toBeDisabled()}},f={args:{defaultPage:6,totalPages:20}},p={args:{size:`sm`,defaultPage:4}},m={args:{totalPages:4,defaultPage:2},play:async({canvas:e})=>{await o(e.getAllByRole(`button`,{name:/^Page /})).toHaveLength(4)}},h={args:{defaultPage:3,getHref:e=>`#page-${e}`},play:async({args:e,canvas:t,canvasElement:n})=>{await o(t.getByRole(`link`,{name:`Page 4`})).toHaveAttribute(`href`,`#page-4`),n.addEventListener(`click`,e=>e.preventDefault()),e.onPageChange.mockClear(),await c.click(t.getByRole(`link`,{name:`Page 3`})),await o(e.onPageChange).not.toHaveBeenCalled(),await o(t.getByRole(`link`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`)}},g={play:async()=>{await o(r(1,10)).toEqual([1,2,3,4,5,`end-ellipsis`,10]),await o(r(5,10)).toEqual([1,`start-ellipsis`,4,5,6,`end-ellipsis`,10]),await o(r(10,10)).toEqual([1,`start-ellipsis`,6,7,8,9,10]),await o(r(4,7)).toEqual([1,2,3,4,5,6,7]),await o(r(1,1)).toEqual([1]),await o(r(1,0)).toEqual([])}},_=[`Default`,`Middle`,`Small`,`FewPages`,`Links`,`Ranges`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultPage: 6,
    totalPages: 20
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultPage: 4
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  }
}`,...h.parameters?.docs?.source},description:{story:`Pages with their own URL: links, not buttons.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await expect(paginationItems(1, 10)).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 10]);
    await expect(paginationItems(5, 10)).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]);
    await expect(paginationItems(10, 10)).toEqual([1, 'start-ellipsis', 6, 7, 8, 9, 10]);
    // A single hidden page is shown rather than replaced by "…".
    await expect(paginationItems(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    await expect(paginationItems(1, 1)).toEqual([1]);
    await expect(paginationItems(1, 0)).toEqual([]);
  }
}`,...g.parameters?.docs?.source},description:{story:`The range logic: first and last page always, the current one with a sibling each side, and "…" only where it hides two or more pages.`,...g.parameters?.docs?.description}}}})))()}export{a,v as c,f as i,m as n,g as o,h as r,p as s,d as t};