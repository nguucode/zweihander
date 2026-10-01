import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as l}from"./Button-BLXGvKSL.js";import{n as u,t as d}from"./Tag-Yrwndnqs.js";import{n as f,t as ee}from"./Select-oNuK5AvO.js";import{n as p,t as te}from"./EmptyState-DYOj8Wjo.js";import{n as m,t as ne}from"./Table-Dh-Ar5wP.js";import{n as h,t as re}from"./Search-DJOMJV1K.js";import{n as g,t as _}from"./Pagination-baNVh3vI.js";var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{v=`_toolbar_1sgg6_3`,y=`_footer_1sgg6_4`,b=`_selecting_1sgg6_22`,x=`_group_1sgg6_29`,S=`_count_1sgg6_37`,C=`_selectionActions_1sgg6_42`,w=`_summary_1sgg6_54`,T=`_srOnly_1sgg6_60`,E={toolbar:v,footer:y,selecting:b,group:x,count:S,selectionActions:C,summary:w,srOnly:T}})))()}function O({children:e,selectedCount:t=0,selectionActions:n,onClearSelection:r,selectionLabel:i=e=>`${e} selected`,className:a,ref:o,...c}){let u=t>0,d=(0,j.useRef)(null),f=(0,j.useRef)(u);return(0,j.useLayoutEffect)(()=>{let e=d.current;if(f.current&&!u&&e){let t=document.activeElement;if(!t||t===document.body||!t.isConnected){let t=e.querySelector(N);t?t.focus():(e.tabIndex=-1,e.focus())}}f.current=u},[u]),(0,M.jsxs)(`div`,{ref:e=>{d.current=e,typeof o==`function`?o(e):o&&(o.current=e)},className:s(E.toolbar,u&&E.selecting,a),...c,children:[(0,M.jsx)(`p`,{role:`status`,className:u?E.count:E.srOnly,children:u?i(t):``}),u?(0,M.jsxs)(`div`,{className:E.selectionActions,children:[n,r&&(0,M.jsx)(l,{variant:`secondary`,appearance:`ghost`,size:`sm`,onClick:r,children:`Clear selection`})]}):e]})}function k({className:e,...t}){return(0,M.jsx)(`div`,{className:s(E.group,e),...t})}function A({summary:e,children:t,className:n,...r}){return(0,M.jsxs)(`div`,{className:s(E.footer,n),...r,children:[e&&(0,M.jsx)(`p`,{className:E.summary,children:e}),t]})}var j,M,N;function P(){return(P=e((()=>{j=r(),o(),c(),D(),M=n(),N=`input:not([disabled]):not([type="hidden"]), button:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])`,O.__docgenInfo={description:`The bar above a table: search, filters and the page's main action; while
rows are selected, what you can do with them instead.`,methods:[],displayName:`TableToolbar`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Search, filters and the primary action. Shown while nothing is selected.`},selectedCount:{required:!1,tsType:{name:`number`},description:`How many rows are selected. From 1 up, the toolbar shows the selection's actions instead.`,defaultValue:{value:`0`,computed:!1}},selectionActions:{required:!1,tsType:{name:`ReactNode`},description:`Actions for the selected rows, e.g. Archive and Delete.`},onClearSelection:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},selectionLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(count: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`}],return:{name:`string`}}},description:`Defaults to "{n} selected".`,defaultValue:{value:"(n) => `${n} selected`",computed:!1}}},composes:[`ComponentProps`]},k.__docgenInfo={description:`Put the filters' flexible part here: it takes the free space and wraps first.`,methods:[],displayName:`TableToolbarGroup`},A.__docgenInfo={description:`The bar under a table: what is shown, and the pages.`,methods:[],displayName:`TableFooter`,props:{summary:{required:!1,tsType:{name:`ReactNode`},description:`E.g. "Showing 1–10 of 57".`},children:{required:!1,tsType:{name:`ReactNode`},description:`Usually Pagination.`}},composes:[`ComponentProps`]}})))()}var ie=t({BulkActions:()=>X,EmptyResult:()=>Z,ToolbarAndPagination:()=>Y,__namedExportsOrder:()=>Q,default:()=>q});function F({isSelectable:e=!1,initialQuery:t=``}){let[n,r]=(0,I.useState)(H),[i,o]=(0,I.useState)(t),[s,c]=(0,I.useState)(`All`),[u,d]=(0,I.useState)(1),[f,p]=(0,I.useState)([]),m=(0,I.useRef)(null),h=(0,I.useMemo)(()=>{let e=i.trim().toLowerCase();return n.filter(t=>(s===`All`||t.status===s)&&(!e||t.name.toLowerCase().includes(e)||t.owner.toLowerCase().includes(e)))},[n,i,s]),g=Math.max(1,Math.ceil(h.length/K)),v=Math.min(u,g),y=h.slice((v-1)*K,v*K),b=e=>{e(),d(1)};return(0,L.jsxs)(`div`,{style:{maxInlineSize:`60rem`},children:[(0,L.jsxs)(O,{selectedCount:f.length,onClearSelection:()=>p([]),selectionActions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{r(e=>e.map(e=>f.includes(e.id)?{...e,status:`Archived`}:e)),p([])},children:`Archive`}),(0,L.jsx)(l,{size:`sm`,variant:`destructive`,appearance:`outlined`,children:`Delete`})]}),children:[(0,L.jsxs)(k,{children:[(0,L.jsx)(re,{ref:m,"aria-label":`Search projects`,placeholder:`Search projects`,value:i,onChange:e=>b(()=>o(e.target.value))}),(0,L.jsx)(ee,{"aria-label":`Status`,options:[`All`,`Active`,`Paused`,`Archived`],value:s,onValueChange:e=>b(()=>c(e))})]}),(0,L.jsx)(l,{startIcon:(0,L.jsx)(a,{name:`plus`}),children:`New project`})]}),(0,L.jsx)(ne,{columns:G,rows:y,getRowId:e=>e.id,caption:`Projects`,isSelectable:e,selectedIds:f,onSelectionChange:p,emptyState:(0,L.jsx)(te,{size:`sm`,headingLevel:3,title:i?`No projects match “${i}”`:`No projects`,description:`Try another name or owner, or clear the filters.`,action:(0,L.jsx)(l,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{b(()=>(o(``),c(`All`))),m.current?.focus()},children:`Clear filters`})})}),h.length>0&&(0,L.jsx)(A,{summary:`Showing ${(v-1)*K+1}–${(v-1)*K+y.length} of ${h.length}`,children:(0,L.jsx)(_,{totalPages:g,page:v,onPageChange:d,size:`sm`,"aria-label":`Projects pages`})})]})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{I=r(),i(),u(),c(),m(),h(),f(),g(),p(),P(),L=n(),{expect:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H=[[`Atlas`,`Sam Rivera`,`Active`,`2026-09-20`],[`Billing revamp`,`Mia Chen`,`Paused`,`2026-08-02`],[`Onboarding`,`Leo Park`,`Active`,`2026-09-25`],[`Design tokens`,`Ava Stone`,`Archived`,`2025-12-11`],[`Search v2`,`Noah Kim`,`Active`,`2026-09-11`],[`Mobile app`,`Sam Rivera`,`Active`,`2026-09-26`],[`Pricing page`,`Mia Chen`,`Paused`,`2026-07-19`],[`Data export`,`Leo Park`,`Active`,`2026-09-02`],[`Help center`,`Ava Stone`,`Archived`,`2026-01-30`],[`Referral program`,`Noah Kim`,`Active`,`2026-09-14`],[`Audit log`,`Sam Rivera`,`Paused`,`2026-06-08`],[`SSO`,`Mia Chen`,`Active`,`2026-09-23`]].map(([e,t,n,r],i)=>({id:`p${i+1}`,name:e,owner:t,status:n,updated:new Date(r)})),U={Active:`success`,Paused:`warning`,Archived:`info`},W=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),G=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,L.jsx)(d,{size:`sm`,variant:U[e.status],text:e.status})},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>W.format(e.updated)}],K=5,q={title:`Patterns/Application UI/Data Table Page`,component:O,parameters:{a11y:{test:`error`},layout:`padded`},args:{children:null},argTypes:{children:{control:!1}}},J=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),Y={render:()=>(0,L.jsx)(F,{}),play:async({canvas:e})=>{await R(J(e)).toHaveLength(5),await R(e.getByText(`Showing 1–5 of 12`)).toBeVisible(),await z.click(e.getByRole(`button`,{name:`Page 3`})),await R(e.getByText(`Showing 11–12 of 12`)).toBeVisible(),await z.type(e.getByRole(`searchbox`,{name:`Search projects`}),`mia`),await R(J(e)).toEqual([`Billing revamp`,`Pricing page`,`SSO`]),await R(e.getByText(`Showing 1–3 of 3`)).toBeVisible()}},X={render:()=>(0,L.jsx)(F,{isSelectable:!0}),play:async({canvas:e})=>{await z.click(e.getByRole(`checkbox`,{name:`Select Atlas`})),await z.click(e.getByRole(`checkbox`,{name:`Select Onboarding`})),await R(e.getByRole(`status`)).toHaveTextContent(`2 selected`),await R(e.queryByRole(`searchbox`)).toBeNull(),await z.click(e.getByRole(`button`,{name:`Archive`}));let t=e.getByRole(`searchbox`,{name:`Search projects`});await R(t).toBeVisible(),await B(()=>R(t).toHaveFocus());let n=e.getByRole(`rowheader`,{name:`Atlas`}).closest(`tr`);await R(V(n).getByText(`Archived`)).toBeVisible()}},Z={render:()=>(0,L.jsx)(F,{initialQuery:`zebra`}),play:async({canvas:e})=>{await R(e.getByRole(`heading`,{name:`No projects match “zebra”`})).toBeVisible(),await R(e.queryByRole(`navigation`,{name:`Projects pages`})).toBeNull(),await z.click(e.getByRole(`button`,{name:`Clear filters`})),await B(()=>R(J(e)).toHaveLength(5)),await R(e.getByRole(`searchbox`,{name:`Search projects`})).toHaveFocus()}},Q=[`ToolbarAndPagination`,`BulkActions`,`EmptyResult`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectsTable />,
  play: async ({
    canvas
  }) => {
    await expect(rowNames(canvas)).toHaveLength(5);
    await expect(canvas.getByText('Showing 1–5 of 12')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Page 3'
    }));
    await expect(canvas.getByText('Showing 11–12 of 12')).toBeVisible();
    // Filtering goes back to the first page.
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search projects'
    }), 'mia');
    await expect(rowNames(canvas)).toEqual(['Billing revamp', 'Pricing page', 'SSO']);
    await expect(canvas.getByText('Showing 1–3 of 3')).toBeVisible();
  }
}`,...Y.parameters?.docs?.source},description:{story:`Search and filter above, pages below; the table sorts by its headers.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectsTable isSelectable />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Atlas'
    }));
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Onboarding'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('2 selected');
    await expect(canvas.queryByRole('searchbox')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Archive'
    }));
    // Back to the tools, and the rows changed. Focus went with the button
    // that had it, so the toolbar hands it to the first tool.
    const search = canvas.getByRole('searchbox', {
      name: 'Search projects'
    });
    await expect(search).toBeVisible();
    await waitFor(() => expect(search).toHaveFocus());
    const atlas = canvas.getByRole('rowheader', {
      name: 'Atlas'
    }).closest('tr')!;
    await expect(within(atlas).getByText('Archived')).toBeVisible();
  }
}`,...X.parameters?.docs?.source},description:{story:`Select rows and the toolbar turns into their actions, with the count announced.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectsTable initialQuery="zebra" />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      name: 'No projects match “zebra”'
    })).toBeVisible();
    await expect(canvas.queryByRole('navigation', {
      name: 'Projects pages'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear filters'
    }));
    await waitFor(() => expect(rowNames(canvas)).toHaveLength(5));
    await expect(canvas.getByRole('searchbox', {
      name: 'Search projects'
    })).toHaveFocus();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Nothing matches: the table says so and offers the way back.`,...Z.parameters?.docs?.description}}}})))()}export{$ as a,Y as i,ie as n,Z as r,X as t};