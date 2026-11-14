import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./icon-Cjfg2BMt.js";import{n as ee,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as te,t as ne}from"./Select-K7Tvpi3R.js";import{a as l,r as u}from"./story-helpers-EInZsLED.js";var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{d=`_pagination_1yyjt_6`,f=`_summary_1yyjt_21`,p=`_pageSize_1yyjt_27`,m=`_pageSizeSelect_1yyjt_35`,h=`_list_1yyjt_39`,g=`_control_1yyjt_51`,_=`_current_1yyjt_76`,v=`_step_1yyjt_95`,y=`_ellipsis_1yyjt_106`,b={pagination:d,summary:f,pageSize:p,pageSizeSelect:m,list:h,control:g,current:_,step:v,ellipsis:y}})))()}function S(e,t,n=1,r=1){let i=E(1,Math.min(r,t)),a=E(Math.max(t-r+1,r+1),t),o=Math.max(Math.min(e-n,t-r-n*2-1),r+2),s=Math.min(Math.max(e+n,r+n*2+2),a.length>0?a[0]-2:t-1);return[...i,...o>r+2?[`start-ellipsis`]:r+1<t-r?[r+1]:[],...E(o,s),...s<t-r-1?[`end-ellipsis`]:t-r>r?[t-r]:[],...a]}function C({totalPages:e,totalItems:t,pageSize:n,defaultPageSize:r=20,onPageSizeChange:a,pageSizeOptions:o,page:ee,defaultPage:c=1,onPageChange:te,siblingCount:l=1,boundaryCount:u=1,size:d=`md`,getHref:f,"aria-label":p=`Pagination`,className:m,...h}){let[g,_]=(0,w.useState)(c),[v,y]=(0,w.useState)(r),x=Math.max(1,n??v),C=n=>Math.max(1,t===void 0?e??1:Math.ceil(t/n)),E=C(x),D=Math.min(Math.max(1,ee??g),E),O=e=>{_(e),te?.(e)},k=(D-1)*x+1,A=e=>{y(e),a?.(e);let t=Math.min(Math.floor((k-1)/e)+1,C(e));t!==D&&O(t)},j=e=>e.toLocaleString(),M=(e,t,n,r,a)=>{let o=e<1||e>E,s={className:i(b.control,r,a&&b.current),"aria-label":t,"aria-current":a?`page`:void 0};return f?o?(0,T.jsx)(`a`,{...s,role:`link`,"aria-disabled":`true`,children:n}):(0,T.jsx)(`a`,{...s,href:f(e),onClick:()=>!a&&O(e),children:n}):(0,T.jsx)(`button`,{type:`button`,...s,disabled:o,onClick:()=>!a&&O(e),children:n})};return(0,T.jsxs)(`nav`,{"aria-label":p,className:i(b.pagination,m),...h,children:[t!==void 0&&(0,T.jsx)(`p`,{role:`status`,className:b.summary,children:t>0?`${j(k)}–${j(Math.min(D*x,t))} of ${j(t)}`:`0 of 0`}),(0,T.jsxs)(`ul`,{className:b.list,children:[(0,T.jsx)(`li`,{children:M(D-1,`Previous page`,(0,T.jsx)(s,{name:`chevron-left`}),b.step)}),S(D,E,l,u).map(e=>(0,T.jsx)(`li`,{children:typeof e==`string`?(0,T.jsx)(`span`,{className:b.ellipsis,"aria-hidden":`true`,children:`…`}):M(e,`Page ${e}`,e,void 0,e===D)},e)),(0,T.jsx)(`li`,{children:M(D+1,`Next page`,(0,T.jsx)(s,{name:`chevron-right`}),b.step)})]}),o&&(0,T.jsxs)(`div`,{className:b.pageSize,children:[(0,T.jsx)(`span`,{"aria-hidden":`true`,children:`Rows per page`}),(0,T.jsx)(ne,{"aria-label":`Rows per page`,size:`sm`,className:b.pageSizeSelect,options:o.map(String),value:String(x),onValueChange:e=>e&&A(Number(e))})]})]})}var w,T,E;function D(){return(D=e((()=>{w=n(),o(),r(),te(),x(),T=a(),E=(e,t)=>Array.from({length:Math.max(0,t-e+1)},(t,n)=>e+n),C.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{totalPages:{required:!1,tsType:{name:`number`},description:"Ignored when `totalItems` is set: the count is then worked out from `pageSize`, so the two cannot disagree."},totalItems:{required:!1,tsType:{name:`number`},description:`Rows in all. Shows the "21–40 of 340" summary.`},pageSize:{required:!1,tsType:{name:`number`},description:``},defaultPageSize:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}},onPageSizeChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pageSize: number) => void`,signature:{arguments:[{type:{name:`number`},name:`pageSize`}],return:{name:`void`}}},description:``},pageSizeOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`Choices for the "Rows per page" select; without them there is no select.`},page:{required:!1,tsType:{name:`number`},description:`1-based.`},defaultPage:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:``},siblingCount:{required:!1,tsType:{name:`number`},description:`Pages shown either side of the current one.`,defaultValue:{value:`1`,computed:!1}},boundaryCount:{required:!1,tsType:{name:`number`},description:`Pages always shown at each end.`,defaultValue:{value:`1`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:"@deprecated Pagination has one size, 32px controls: `sm` renders the same as `md`. Drop the prop; removed in the next release.",defaultValue:{value:`'md'`,computed:!1}},getHref:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => string`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`string`}}},description:`Render links instead of buttons, for pages with their own URL.`},"aria-label":{required:!1,tsType:{name:`string`},description:`The nav landmark's name.`,defaultValue:{value:`'Pagination'`,computed:!1}}},composes:[`Omit`]}})))()}var O=t({Anatomy:()=>Y,Default:()=>L,DefaultSizeIsSilent:()=>z,DeprecatedSize:()=>B,DoKeepItShort:()=>Z,DontShowEveryPage:()=>Q,FewPages:()=>V,Links:()=>H,Middle:()=>R,Ranges:()=>q,StatesExample:()=>$,SummaryEmpty:()=>G,SummaryLargeCount:()=>W,TotalItemsWins:()=>K,WithSummary:()=>U,__namedExportsOrder:()=>re,anatomyParts:()=>J,default:()=>I}),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,re;function ie(){return(ie=e((()=>{ee(),u(),D(),k=a(),{expect:A,fn:j,spyOn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/Navigation/Pagination`,tags:[`beta`],component:C,args:{totalPages:10,defaultPage:1,onPageChange:j()},argTypes:{totalPages:{description:"How many pages there are. Below 1 counts as 1. Leave it out when `totalItems` is set: the count then comes from `totalItems` and `pageSize`.",control:`number`,table:{type:{summary:`number`}}},page:{description:"The current page, 1-based, when you control it. Pair with `onPageChange`.",control:`number`,table:{type:{summary:`number`}}},defaultPage:{description:`The page shown first, when Pagination keeps its own state.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},onPageChange:{description:`Called with the new page. Not called for the page already shown.`,control:!1,table:{type:{summary:`(page: number) => void`}}},siblingCount:{description:`Pages shown either side of the current one.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},boundaryCount:{description:`Pages always shown at each end.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`1`}}},size:{description:"Deprecated: Pagination has one size, 32px controls, and `sm` renders the same as `md`. Drop the prop; it will be removed in the next release.",control:!1,table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},getHref:{description:`Render links instead of buttons, for pages with their own URL: they can be opened in a new tab and shared.`,control:!1,table:{type:{summary:`(page: number) => string`}}},totalItems:{description:'How many rows there are in all. Shows the summary ("21–40 of 340") and, without `totalPages`, sets the page count from `pageSize`.',control:`number`,table:{type:{summary:`number`}}},pageSize:{description:"Rows per page, when you control it. Pair with `onPageSizeChange`.",control:`number`,table:{type:{summary:`number`}}},defaultPageSize:{description:`Rows per page at first, when Pagination keeps its own state.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`20`}}},pageSizeOptions:{description:`The choices for a "Rows per page" select at the end. Without it there is no select.`,control:`object`,table:{type:{summary:`number[]`}}},onPageSizeChange:{description:"Called with the new rows per page. The page then moves so the first row shown stays in view, through `onPageChange`.",control:!1,table:{type:{summary:`(pageSize: number) => void`}}},"aria-label":{description:"Names the `<nav>` landmark. Change it when a page has two paginations.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Pagination'`}}}},excludeStories:[`anatomyParts`]},L={play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`});await A(F(n).getByRole(`button`,{name:`Page 1`})).toHaveAttribute(`aria-current`,`page`),await A(F(n).getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await N.click(F(n).getByRole(`button`,{name:`Next page`})),await A(e.onPageChange).toHaveBeenLastCalledWith(2),await A(F(n).getByRole(`button`,{name:`Page 2`})).toHaveAttribute(`aria-current`,`page`),await N.click(F(n).getByRole(`button`,{name:`Page 10`})),await A(F(n).getByRole(`button`,{name:`Next page`})).toBeDisabled(),F(n).getByRole(`button`,{name:`Previous page`}).focus(),await N.keyboard(`{Enter}`),await A(e.onPageChange).toHaveBeenLastCalledWith(9),await N.keyboard(` `),await A(e.onPageChange).toHaveBeenLastCalledWith(8)}},R={args:{defaultPage:6,totalPages:20}},z={tags:[`!dev`],args:{size:`md`},beforeEach:()=>{let e=M(console,`warn`);return()=>e.mockRestore()},play:async()=>{await A(console.warn).not.toHaveBeenCalledWith(A.stringContaining(`Pagination`))}},B={tags:[`!dev`],args:{size:`sm`,defaultPage:4},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Page 4`});await A(t.getBoundingClientRect().height).toBe(32),await A(getComputedStyle(t).fontSize).toBe(`14px`),await A(getComputedStyle(t.closest(`ul, ol`)).columnGap).toBe(`4px`),await A(l(`pointer: coarse`,t).find(e=>e.style.blockSize)?.style.blockSize).toBe(`var(--target-coarse)`)}},V={args:{totalPages:4,defaultPage:2},play:async({canvas:e})=>{await A(e.getAllByRole(`button`,{name:/^Page /})).toHaveLength(4)}},H={args:{defaultPage:3,getHref:e=>`#page-${e}`},play:async({args:e,canvas:t,canvasElement:n})=>{await A(t.getByRole(`link`,{name:`Page 4`})).toHaveAttribute(`href`,`#page-4`),n.addEventListener(`click`,e=>e.preventDefault()),e.onPageChange.mockClear(),await N.click(t.getByRole(`link`,{name:`Page 3`})),await A(e.onPageChange).not.toHaveBeenCalled(),await A(t.getByRole(`link`,{name:`Page 3`})).toHaveAttribute(`aria-current`,`page`),await N.click(t.getByRole(`link`,{name:`Page 1`}));let r=t.getByRole(`link`,{name:`Previous page`});await A(r).not.toHaveAttribute(`href`),await A(r).toHaveAttribute(`aria-disabled`,`true`)}},U={args:{totalPages:void 0,totalItems:340,pageSizeOptions:[10,20,50,100],onPageSizeChange:j()},play:async({args:e,canvas:t})=>{let n=t.getByRole(`navigation`,{name:`Pagination`}),r=F(n).getByRole(`status`);await A(r).toHaveTextContent(`1–20 of 340`),await N.click(F(n).getByRole(`button`,{name:`Page 17`})),await A(r).toHaveTextContent(`321–340 of 340`),await N.click(F(n).getByRole(`button`,{name:`Previous page`})),await A(r).toHaveTextContent(`301–320 of 340`),await A(F(n).getByText(`Rows per page`)).toHaveAttribute(`aria-hidden`,`true`),await N.click(F(n).getByRole(`combobox`,{name:`Rows per page`})),await N.click(await F(document.body).findByRole(`option`,{name:`50`})),await P(()=>A(F(document.body).queryByRole(`listbox`)).toBeNull()),await A(e.onPageSizeChange).toHaveBeenLastCalledWith(50),await A(e.onPageChange).toHaveBeenLastCalledWith(7),await A(r).toHaveTextContent(`301–340 of 340`),await A(F(n).queryByRole(`button`,{name:`Page 8`})).not.toBeInTheDocument();let i=[F(n).getByRole(`combobox`,{name:`Rows per page`}),F(n).getByRole(`button`,{name:`Page 7`})];await A(i.map(e=>e.getBoundingClientRect().height)).toEqual([32,32])}},W={tags:[`!dev`],args:{totalPages:void 0,totalItems:12500,defaultPageSize:50,defaultPage:3},play:async({canvas:e})=>{await A(e.getByRole(`status`)).toHaveTextContent(`101–150 of 12,500`),await A(e.queryByRole(`combobox`)).not.toBeInTheDocument()}},G={tags:[`!dev`],args:{totalPages:void 0,totalItems:0},play:async({canvas:e})=>{await A(e.getByRole(`status`)).toHaveTextContent(`0 of 0`),await A(e.getByRole(`button`,{name:`Previous page`})).toBeDisabled(),await A(e.getByRole(`button`,{name:`Next page`})).toBeDisabled()}},K={tags:[`!dev`],args:{totalPages:20,totalItems:340,defaultPage:20},play:async({canvas:e})=>{await A(e.getByRole(`button`,{name:`Page 17`})).toHaveAttribute(`aria-current`,`page`),await A(e.getByRole(`status`)).toHaveTextContent(`321–340 of 340`)}},q={play:async()=>{await A(S(1,10)).toEqual([1,2,3,4,5,`end-ellipsis`,10]),await A(S(5,10)).toEqual([1,`start-ellipsis`,4,5,6,`end-ellipsis`,10]),await A(S(10,10)).toEqual([1,`start-ellipsis`,6,7,8,9,10]),await A(S(4,7)).toEqual([1,2,3,4,5,6,7]),await A(S(1,1)).toEqual([1]),await A(S(1,0)).toEqual([])}},J=[{name:`Summary`,selector:`[role="status"]`,description:'The rows shown out of the total, "21–40 of 340". Only with `totalItems`; announced politely when it changes.'},{name:`Previous`,selector:`li:first-child > button`,description:`Chevron. Disabled on the first page.`},{name:`Page`,selector:`li:nth-child(2) > button`,description:`A square ghost control with the number, in tabular figures.`},{name:`Ellipsis`,selector:`li > span[aria-hidden="true"]`,description:`"…" where two or more pages are skipped. Decorative.`},{name:`Current page`,selector:`[aria-current="page"]`,description:`The only filled control.`},{name:`Next`,selector:`li:last-child > button`,description:`Chevron. Disabled on the last page.`},{name:`Rows per page`,selector:`[role="combobox"]`,description:"A Select of `pageSizeOptions`. Only when they are passed."}],Y={tags:[`!dev`],args:{totalPages:void 0,totalItems:400,defaultPage:6,pageSizeOptions:[20,50]},play:async({canvasElement:e})=>{let t=await c(e,J);await A(t[4]).toHaveTextContent(`6`)}},X={inlineSize:`24rem`},Z={args:{totalPages:50,defaultPage:25},render:e=>(0,k.jsx)(`div`,{style:X,children:(0,k.jsx)(C,{...e})})},Q={tags:[`!dev`],args:{totalPages:50,defaultPage:25,siblingCount:50},render:e=>(0,k.jsx)(`div`,{style:X,children:(0,k.jsx)(C,{...e})})},$={tags:[`!dev`],args:{totalPages:2,defaultPage:1}},re=[`Default`,`Middle`,`DefaultSizeIsSilent`,`DeprecatedSize`,`FewPages`,`Links`,`WithSummary`,`SummaryLargeCount`,`SummaryEmpty`,`TotalItemsWins`,`Ranges`,`anatomyParts`,`Anatomy`,`DoKeepItShort`,`DontShowEveryPage`,`StatesExample`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultPage: 6,
    totalPages: 20
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  beforeEach: () => {
    const warn = spyOn(console, 'warn');
    return () => warn.mockRestore();
  },
  play: async () => {
    await expect(console.warn).not.toHaveBeenCalledWith(expect.stringContaining('Pagination'));
  }
}`,...z.parameters?.docs?.source},description:{story:'Passing the documented default of a deprecated prop is silent: only `size="sm"` warns.',...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
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
    await expect(page.getBoundingClientRect().height).toBe(32);
    await expect(getComputedStyle(page).fontSize).toBe('14px');
    // 4px between controls.
    await expect(getComputedStyle(page.closest('ul, ol')!).columnGap).toBe('4px');
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', page).find(r => r.style.blockSize)?.style.blockSize).toBe('var(--target-coarse)');
  }
}`,...B.parameters?.docs?.source},description:{story:"`size` is deprecated: for one release it is accepted, and `sm` renders as `md`.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Pages with their own URL: links, not buttons.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    // The select is as tall as the page buttons: one 32px row.
    const heights = [within(nav).getByRole('combobox', {
      name: 'Rows per page'
    }), within(nav).getByRole('button', {
      name: 'Page 7'
    })];
    await expect(heights.map(el => el.getBoundingClientRect().height)).toEqual([32, 32]);
  }
}`,...U.parameters?.docs?.source},description:{story:`A table footer: the rows shown out of how many, the pages, and how many rows a page holds.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Large counts are grouped for reading. No select without `pageSizeOptions`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`No rows: "0 of 0", one page, both steps disabled.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"`totalItems` wins over a `totalPages` that disagrees, so the summary never runs past the end.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async () => {
    await expect(paginationItems(1, 10)).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 10]);
    await expect(paginationItems(5, 10)).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]);
    await expect(paginationItems(10, 10)).toEqual([1, 'start-ellipsis', 6, 7, 8, 9, 10]);
    // A single hidden page is shown rather than replaced by "…".
    await expect(paginationItems(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    await expect(paginationItems(1, 1)).toEqual([1]);
    await expect(paginationItems(1, 0)).toEqual([]);
  }
}`,...q.parameters?.docs?.source},description:{story:`The range logic: first and last page always, the current one with a sibling each side, and "…" only where it hides two or more pages.`,...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Every part present: a page in the middle of a long list.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 50,
    defaultPage: 25
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Do: the default range keeps the control short and its width steady.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 50,
    defaultPage: 25,
    siblingCount: 50
  },
  render: args => <div style={narrow}>
      <Pagination {...args} />
    </div>
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Don't: every page number at once wraps and buries the current page.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    totalPages: 2,
    defaultPage: 1
  }
}`,...$.parameters?.docs?.source},description:{story:`Specs, States: two pages on the first, so Previous shows disabled; small enough for a States cell.`,...$.parameters?.docs?.description}}}})))()}export{H as a,$ as c,ie as d,V as i,U as l,Z as n,R as o,Q as r,O as s,Y as t,J as u};