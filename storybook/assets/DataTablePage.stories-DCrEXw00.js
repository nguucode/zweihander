import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,r as l}from"./Tag-DjFi4YNU.js";import{n as u,t as d}from"./Select-BsYPTVUS.js";import{n as f,t as p}from"./Table-Y4TRGaOz.js";import{n as m,t as h}from"./EmptyState-DFT2bqlk.js";import{n as g,t as _}from"./Search-DLU6gPnk.js";import{n as v,t as y}from"./Pagination-CNj7Ulyf.js";import{i as b,n as x,r as S,t as C}from"./DataTablePage-CGPRGfTA.js";var w=t({BulkActions:()=>V,EmptyResult:()=>H,FooterSummary:()=>U,ToolbarAndPagination:()=>B,__namedExportsOrder:()=>W,default:()=>L});function T({isSelectable:e=!1,initialQuery:t=``}){let[n,r]=(0,E.useState)(M),[i,o]=(0,E.useState)(t),[c,l]=(0,E.useState)(`All`),[u,f]=(0,E.useState)(1),[m,g]=(0,E.useState)(P[0]),[v,b]=(0,E.useState)([]),w=(0,E.useRef)(null),T=(0,E.useMemo)(()=>{let e=i.trim().toLowerCase();return n.filter(t=>(c===`All`||t.status===c)&&(!e||t.name.toLowerCase().includes(e)||t.owner.toLowerCase().includes(e)))},[n,i,c]),O=Math.max(1,Math.ceil(T.length/m)),k=Math.min(u,O),A=T.slice((k-1)*m,k*m),j=e=>{e(),f(1)};return(0,D.jsxs)(`div`,{style:{maxInlineSize:`60rem`},children:[(0,D.jsxs)(x,{selectedCount:v.length,onClearSelection:()=>b([]),selectionActions:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{r(e=>e.map(e=>v.includes(e.id)?{...e,status:`Archived`}:e)),b([])},children:`Archive`}),(0,D.jsx)(a,{size:`sm`,variant:`destructive`,appearance:`outlined`,children:`Delete`})]}),children:[(0,D.jsxs)(S,{children:[(0,D.jsx)(_,{ref:w,"aria-label":`Search projects`,placeholder:`Search projects`,value:i,onChange:e=>j(()=>o(e.target.value))}),(0,D.jsx)(d,{"aria-label":`Status`,options:[`All`,`Active`,`Paused`,`Archived`],value:c,onValueChange:e=>j(()=>l(e))})]}),(0,D.jsx)(a,{startIcon:(0,D.jsx)(s,{name:`plus`}),children:`New project`})]}),(0,D.jsx)(p,{columns:I,rows:A,getRowId:e=>e.id,caption:`Projects`,isSelectable:e,selectedIds:v,onSelectionChange:b,emptyState:(0,D.jsx)(h,{size:`sm`,headingLevel:3,title:i?`No projects match “${i}”`:`No projects`,description:`Try another name or owner, or clear the filters.`,action:(0,D.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{j(()=>(o(``),l(`All`))),w.current?.focus()},children:`Clear filters`})})}),T.length>0&&(0,D.jsx)(C,{"data-testid":`footer`,children:(0,D.jsx)(y,{totalItems:T.length,page:k,onPageChange:f,pageSize:m,onPageSizeChange:g,pageSizeOptions:P,size:`sm`,"aria-label":`Projects pages`})})]})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{E=n(),o(),l(),i(),f(),g(),u(),v(),m(),b(),D=r(),{expect:O,userEvent:k,waitFor:A,within:j}=__STORYBOOK_MODULE_TEST__,M=[[`Atlas`,`Sam Rivera`,`Active`,`2026-09-20`],[`Billing revamp`,`Mia Chen`,`Paused`,`2026-08-02`],[`Onboarding`,`Leo Park`,`Active`,`2026-09-25`],[`Design tokens`,`Ava Stone`,`Archived`,`2025-12-11`],[`Search v2`,`Noah Kim`,`Active`,`2026-09-11`],[`Mobile app`,`Sam Rivera`,`Active`,`2026-09-26`],[`Pricing page`,`Mia Chen`,`Paused`,`2026-07-19`],[`Data export`,`Leo Park`,`Active`,`2026-09-02`],[`Help center`,`Ava Stone`,`Archived`,`2026-01-30`],[`Referral program`,`Noah Kim`,`Active`,`2026-09-14`],[`Audit log`,`Sam Rivera`,`Paused`,`2026-06-08`],[`SSO`,`Mia Chen`,`Active`,`2026-09-23`]].map(([e,t,n,r],i)=>({id:`p${i+1}`,name:e,owner:t,status:n,updated:new Date(r)})),N={Active:`success`,Paused:`warning`,Archived:`info`},P=[5,10,20],F=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),I=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,D.jsx)(c,{size:`sm`,variant:N[e.status],text:e.status})},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>F.format(e.updated)}],L={title:`Patterns/Application UI/Data Table Page`,tags:[`experimental`],component:x,parameters:{layout:`padded`},args:{children:null},argTypes:{children:{control:!1}}},R=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),z=e=>e.getByRole(`navigation`,{name:`Projects pages`}),B={render:()=>(0,D.jsx)(T,{}),play:async({canvas:e})=>{let t=z(e),n=j(t).getByRole(`status`);await O(R(e)).toHaveLength(5),await O(n).toHaveTextContent(`1–5 of 12`);let r=e.getByTestId(`footer`);await A(()=>{let e=r.getBoundingClientRect();O(Math.abs(n.getBoundingClientRect().left-e.left)).toBeLessThan(1),O(Math.abs(t.getBoundingClientRect().right-e.right)).toBeLessThan(1)}),await k.click(j(t).getByRole(`button`,{name:`Page 3`})),await O(n).toHaveTextContent(`11–12 of 12`),await k.click(j(t).getByRole(`combobox`,{name:`Rows per page`})),await k.click(await j(document.body).findByRole(`option`,{name:`10`})),await A(()=>O(j(document.body).queryByRole(`listbox`)).toBeNull()),await O(n).toHaveTextContent(`11–12 of 12`),await O(j(t).queryByRole(`button`,{name:`Page 3`})).toBeNull(),await k.type(e.getByRole(`searchbox`,{name:`Search projects`}),`mia`),await O(R(e)).toEqual([`Billing revamp`,`Pricing page`,`SSO`]),await O(n).toHaveTextContent(`1–3 of 3`)}},V={render:()=>(0,D.jsx)(T,{isSelectable:!0}),play:async({canvas:e})=>{await k.click(e.getByRole(`checkbox`,{name:`Select Atlas`})),await k.click(e.getByRole(`checkbox`,{name:`Select Onboarding`})),await O(e.getByText(`2 selected`)).toHaveAttribute(`role`,`status`),await O(e.queryByRole(`searchbox`)).toBeNull(),await k.click(e.getByRole(`button`,{name:`Archive`}));let t=e.getByRole(`searchbox`,{name:`Search projects`});await O(t).toBeVisible(),await A(()=>O(t).toHaveFocus());let n=e.getByRole(`rowheader`,{name:`Atlas`}).closest(`tr`);await O(j(n).getByText(`Archived`)).toBeVisible()}},H={render:()=>(0,D.jsx)(T,{initialQuery:`zebra`}),play:async({canvas:e})=>{await O(e.getByRole(`heading`,{name:`No projects match “zebra”`})).toBeVisible(),await O(e.queryByRole(`navigation`,{name:`Projects pages`})).toBeNull(),await k.click(e.getByRole(`button`,{name:`Clear filters`})),await A(()=>O(R(e)).toHaveLength(5)),await O(e.getByRole(`searchbox`,{name:`Search projects`})).toHaveFocus()}},U={render:()=>(0,D.jsxs)(`div`,{style:{maxInlineSize:`60rem`},children:[(0,D.jsx)(p,{columns:I,rows:M.slice(0,3),getRowId:e=>e.id,caption:`Projects`}),(0,D.jsx)(C,{summary:`3 projects`})]}),play:async({canvas:e})=>{await O(e.getByText(`3 projects`)).toBeVisible(),await O(e.queryByRole(`navigation`)).toBeNull()}},W=[`ToolbarAndPagination`,`BulkActions`,`EmptyResult`,`FooterSummary`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectsTable />,
  play: async ({
    canvas
  }) => {
    const nav = pagination(canvas);
    const summary = within(nav).getByRole('status');
    await expect(rowNames(canvas)).toHaveLength(5);
    await expect(summary).toHaveTextContent('1–5 of 12');
    // Pagination's own summary leads the footer and the controls end it.
    const footer = canvas.getByTestId('footer');
    await waitFor(() => {
      const bar = footer.getBoundingClientRect();
      expect(Math.abs(summary.getBoundingClientRect().left - bar.left)).toBeLessThan(1);
      expect(Math.abs(nav.getBoundingClientRect().right - bar.right)).toBeLessThan(1);
    });
    await userEvent.click(within(nav).getByRole('button', {
      name: 'Page 3'
    }));
    await expect(summary).toHaveTextContent('11–12 of 12');
    // More rows a page: row 11 is now on page 2 of 2.
    await userEvent.click(within(nav).getByRole('combobox', {
      name: 'Rows per page'
    }));
    await userEvent.click(await within(document.body).findByRole('option', {
      name: '10'
    }));
    await waitFor(() => expect(within(document.body).queryByRole('listbox')).toBeNull());
    await expect(summary).toHaveTextContent('11–12 of 12');
    await expect(within(nav).queryByRole('button', {
      name: 'Page 3'
    })).toBeNull();
    // Filtering goes back to the first page.
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search projects'
    }), 'mia');
    await expect(rowNames(canvas)).toEqual(['Billing revamp', 'Pricing page', 'SSO']);
    await expect(summary).toHaveTextContent('1–3 of 3');
  }
}`,...B.parameters?.docs?.source},description:{story:`Search and filter above, pages below; the table sorts by its headers.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    // The toolbar's count is its own status line, apart from the footer's.
    await expect(canvas.getByText('2 selected')).toHaveAttribute('role', 'status');
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
}`,...V.parameters?.docs?.source},description:{story:`Select rows and the toolbar turns into their actions, with the count announced.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Nothing matches: the table says so and offers the way back.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxInlineSize: '60rem'
  }}>
      <Table columns={columns} rows={seed.slice(0, 3)} getRowId={p => p.id} caption="Projects" />
      <TableFooter summary="3 projects" />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('3 projects')).toBeVisible();
    await expect(canvas.queryByRole('navigation')).toBeNull();
  }
}`,...U.parameters?.docs?.source},description:{story:"A list that fits one page: no Pagination, the footer's own `summary` gives the count.",...U.parameters?.docs?.description}}}})))()}export{B as a,U as i,w as n,G as o,H as r,V as t};