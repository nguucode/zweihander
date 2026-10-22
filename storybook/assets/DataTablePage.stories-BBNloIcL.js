import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-B7N9C5Fg.js";import{n as o,t as s}from"./icon-C8IlC69p.js";import{n as c,r as l}from"./Tag-DVslR2w5.js";import{n as u,t as d}from"./Table-DSoZnO0H.js";import{n as f,t as p}from"./Select-Ehl_mGdv.js";import{n as m,t as h}from"./EmptyState-DFT2bqlk.js";import{n as g,t as _}from"./Search-ESZiVGsy.js";import{n as v,t as y}from"./Pagination-DXuTfjat.js";import{i as b,n as x,r as S,t as C}from"./DataTablePage-woEqDrfE.js";var w=t({BulkActions:()=>B,EmptyResult:()=>V,ToolbarAndPagination:()=>z,__namedExportsOrder:()=>H,default:()=>L});function T({isSelectable:e=!1,initialQuery:t=``}){let[n,r]=(0,E.useState)(M),[i,o]=(0,E.useState)(t),[c,l]=(0,E.useState)(`All`),[u,f]=(0,E.useState)(1),[m,g]=(0,E.useState)([]),v=(0,E.useRef)(null),b=(0,E.useMemo)(()=>{let e=i.trim().toLowerCase();return n.filter(t=>(c===`All`||t.status===c)&&(!e||t.name.toLowerCase().includes(e)||t.owner.toLowerCase().includes(e)))},[n,i,c]),w=Math.max(1,Math.ceil(b.length/I)),T=Math.min(u,w),O=b.slice((T-1)*I,T*I),k=e=>{e(),f(1)};return(0,D.jsxs)(`div`,{style:{maxInlineSize:`60rem`},children:[(0,D.jsxs)(x,{selectedCount:m.length,onClearSelection:()=>g([]),selectionActions:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{r(e=>e.map(e=>m.includes(e.id)?{...e,status:`Archived`}:e)),g([])},children:`Archive`}),(0,D.jsx)(a,{size:`sm`,variant:`destructive`,appearance:`outlined`,children:`Delete`})]}),children:[(0,D.jsxs)(S,{children:[(0,D.jsx)(_,{ref:v,"aria-label":`Search projects`,placeholder:`Search projects`,value:i,onChange:e=>k(()=>o(e.target.value))}),(0,D.jsx)(p,{"aria-label":`Status`,options:[`All`,`Active`,`Paused`,`Archived`],value:c,onValueChange:e=>k(()=>l(e))})]}),(0,D.jsx)(a,{startIcon:(0,D.jsx)(s,{name:`plus`}),children:`New project`})]}),(0,D.jsx)(d,{columns:F,rows:O,getRowId:e=>e.id,caption:`Projects`,isSelectable:e,selectedIds:m,onSelectionChange:g,emptyState:(0,D.jsx)(h,{size:`sm`,headingLevel:3,title:i?`No projects match “${i}”`:`No projects`,description:`Try another name or owner, or clear the filters.`,action:(0,D.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{k(()=>(o(``),l(`All`))),v.current?.focus()},children:`Clear filters`})})}),b.length>0&&(0,D.jsx)(C,{summary:`Showing ${(T-1)*I+1}–${(T-1)*I+O.length} of ${b.length}`,children:(0,D.jsx)(y,{totalPages:w,page:T,onPageChange:f,size:`sm`,"aria-label":`Projects pages`})})]})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{E=n(),o(),l(),i(),u(),g(),f(),v(),m(),b(),D=r(),{expect:O,userEvent:k,waitFor:A,within:j}=__STORYBOOK_MODULE_TEST__,M=[[`Atlas`,`Sam Rivera`,`Active`,`2026-09-20`],[`Billing revamp`,`Mia Chen`,`Paused`,`2026-08-02`],[`Onboarding`,`Leo Park`,`Active`,`2026-09-25`],[`Design tokens`,`Ava Stone`,`Archived`,`2025-12-11`],[`Search v2`,`Noah Kim`,`Active`,`2026-09-11`],[`Mobile app`,`Sam Rivera`,`Active`,`2026-09-26`],[`Pricing page`,`Mia Chen`,`Paused`,`2026-07-19`],[`Data export`,`Leo Park`,`Active`,`2026-09-02`],[`Help center`,`Ava Stone`,`Archived`,`2026-01-30`],[`Referral program`,`Noah Kim`,`Active`,`2026-09-14`],[`Audit log`,`Sam Rivera`,`Paused`,`2026-06-08`],[`SSO`,`Mia Chen`,`Active`,`2026-09-23`]].map(([e,t,n,r],i)=>({id:`p${i+1}`,name:e,owner:t,status:n,updated:new Date(r)})),N={Active:`success`,Paused:`warning`,Archived:`info`},P=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),F=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,D.jsx)(c,{size:`sm`,variant:N[e.status],text:e.status})},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>P.format(e.updated)}],I=5,L={title:`Patterns/Application UI/Data Table Page`,tags:[`experimental`],component:x,parameters:{layout:`padded`},args:{children:null},argTypes:{children:{control:!1}}},R=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),z={render:()=>(0,D.jsx)(T,{}),play:async({canvas:e})=>{await O(R(e)).toHaveLength(5),await O(e.getByText(`Showing 1–5 of 12`)).toBeVisible(),await k.click(e.getByRole(`button`,{name:`Page 3`})),await O(e.getByText(`Showing 11–12 of 12`)).toBeVisible(),await k.type(e.getByRole(`searchbox`,{name:`Search projects`}),`mia`),await O(R(e)).toEqual([`Billing revamp`,`Pricing page`,`SSO`]),await O(e.getByText(`Showing 1–3 of 3`)).toBeVisible()}},B={render:()=>(0,D.jsx)(T,{isSelectable:!0}),play:async({canvas:e})=>{await k.click(e.getByRole(`checkbox`,{name:`Select Atlas`})),await k.click(e.getByRole(`checkbox`,{name:`Select Onboarding`})),await O(e.getByRole(`status`)).toHaveTextContent(`2 selected`),await O(e.queryByRole(`searchbox`)).toBeNull(),await k.click(e.getByRole(`button`,{name:`Archive`}));let t=e.getByRole(`searchbox`,{name:`Search projects`});await O(t).toBeVisible(),await A(()=>O(t).toHaveFocus());let n=e.getByRole(`rowheader`,{name:`Atlas`}).closest(`tr`);await O(j(n).getByText(`Archived`)).toBeVisible()}},V={render:()=>(0,D.jsx)(T,{initialQuery:`zebra`}),play:async({canvas:e})=>{await O(e.getByRole(`heading`,{name:`No projects match “zebra”`})).toBeVisible(),await O(e.queryByRole(`navigation`,{name:`Projects pages`})).toBeNull(),await k.click(e.getByRole(`button`,{name:`Clear filters`})),await A(()=>O(R(e)).toHaveLength(5)),await O(e.getByRole(`searchbox`,{name:`Search projects`})).toHaveFocus()}},H=[`ToolbarAndPagination`,`BulkActions`,`EmptyResult`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Search and filter above, pages below; the table sorts by its headers.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Select rows and the toolbar turns into their actions, with the count announced.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Nothing matches: the table says so and offers the way back.`,...V.parameters?.docs?.description}}}})))()}export{U as a,z as i,w as n,V as r,B as t};