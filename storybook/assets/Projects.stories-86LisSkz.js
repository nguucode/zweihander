import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as ee,t as te}from"./Badge-DS9CFLFc.js";import{r as ne,t as re}from"./Avatar-Br9NGvV-.js";import{n as c,t as ie}from"./ToggleButton-Bmn0x9ko.js";import{i as l,t as ae}from"./Menu-NLwpYJmZ.js";import{n as u,r as oe,t as se}from"./Table-Y4TRGaOz.js";import{n as d,t as ce}from"./BarChart-CRgNlLB6.js";import{n as le,t as ue}from"./ColumnChooser-Dbm87zzg.js";import{n as de,t as fe}from"./EmptyState-DFT2bqlk.js";import{n as pe,t as me}from"./Search-DLU6gPnk.js";import{n as f,t as he}from"./Pagination-CNj7Ulyf.js";import{n as ge,t as _e}from"./AppShell-DzI1P-p3.js";import{i as ve,n as ye}from"./TopBar-DXYi-mW1.js";import{i as p,n as be,t as xe}from"./DataTablePage-CGPRGfTA.js";import{n as Se,t as Ce}from"./FilterBar-D6WzH-CQ.js";import{i as m,n as we,o as Te,r as Ee,t as De}from"./ImportExport-DW9VLdLp.js";import{r as h,t as Oe}from"./NavSidebar-Do9w0wRH.js";import{n as g,t as ke}from"./SavedViews-6SM2-3y-.js";import{n as Ae,t as je}from"./TableChartSwitch-CU9GS69U.js";import{a as Me,c as Ne,d as _,i as Pe,l as v,n as Fe,o as y,s as Ie,t as b,u as Le}from"./projects-data-DPfKPfIw.js";var x,S,C,w,T,E,D,O,k,Re,ze,Be,Ve,He,Ue,A;function We(){return(We=e((()=>{x=`_page_dh50y_1`,S=`_brand_dh50y_12`,C=`_sidebar_dh50y_16`,w=`_account_dh50y_20`,T=`_heading_dh50y_27`,E=`_headingActions_dh50y_35`,D=`_title_dh50y_41`,O=`_search_dh50y_53`,k=`_toolbar_dh50y_60`,Re=`_tableSettings_dh50y_65`,ze=`_timeline_dh50y_70`,Be=`_nowrap_dh50y_77`,Ve=`_muted_dh50y_81`,He=`_srOnly_dh50y_85`,Ue=`_activity_dh50y_96`,A={page:x,brand:S,sidebar:C,account:w,heading:T,headingActions:E,title:D,search:O,toolbar:k,tableSettings:Re,timeline:ze,nowrap:Be,muted:Ve,srOnly:He,activity:Ue}})))()}function Ge({projects:e=Fe,...t}){let[n,r]=(0,j.useState)(e),[i,o]=(0,j.useState)(Xe),[ee,ne]=(0,j.useState)(`all`),c=i.find(e=>e.id===ee)??i[0],[l,u]=(0,j.useState)(c.state),[d,le]=(0,j.useState)(``),[de,pe]=(0,j.useState)(1),[f,ge]=(0,j.useState)(N[0]),[ve,p]=(0,j.useState)([]),[Se,m]=(0,j.useState)(!1),Te=(0,j.useRef)(null),h=e=>{pe(e),p([])},g=e=>{u(t=>({...t,...e})),h(1)},Ae=e=>{ne(e),u(i.find(t=>t.id===e)?.state??z),h(1)},_=(0,j.useMemo)(()=>{let e=d.trim().toLowerCase();return e?n.filter(t=>t.name.toLowerCase().includes(e)||!!t.pm?.name.toLowerCase().includes(e)):n},[n,d]),v=oe(_.filter(e=>B(e,l)),L,l.sort),Ie=Math.max(1,Math.ceil(v.length/f)),b=Math.min(de,Ie),x=v.slice((b-1)*f,b*f),S=ve.filter(e=>x.some(t=>t.id===e)),C=n.filter(e=>!e.isArchived).length,w=!!d||l.status.join()!==c.state.status.join()||l.health.join()!==c.state.health.join(),T=()=>{le(``),g({status:c.state.status,health:c.state.health}),Te.current?.focus()},E=y.map(e=>({status:e,estimation:v.filter(t=>t.status===e).reduce((e,t)=>e+t.estimation,0)})),D=(e,t,n,r)=>(0,M.jsx)(ae,{trigger:(0,M.jsx)(a,{variant:`secondary`,appearance:`outlined`,endIcon:(0,M.jsx)(s,{name:`chevron-down`}),children:e}),items:t.map(e=>({type:`checkbox`,label:e.label,checked:n.includes(e.value),onCheckedChange:i=>r(Qe(t.map(e=>e.value),n,e.value,i))}))}),O=(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(se,{columns:L.filter(e=>l.columns.includes(e.key)),rows:x,getRowId:e=>e.id,caption:`${c.label} projects`,density:Se?`sm`:`md`,sort:l.sort,onSortChange:e=>g({sort:e}),isSelectable:!0,selectedIds:S,onSelectionChange:p,expandedContent:e=>e.activity.length>0&&(0,M.jsx)(Pe,{project:e,className:A.activity}),emptyState:(0,M.jsx)(fe,{size:`sm`,headingLevel:2,title:d?`No projects match “${d}”`:`No projects here`,description:`Try another name or PM, another view, or clear the filters.`,action:w&&(0,M.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:T,children:`Clear filters`})})}),v.length>0&&(0,M.jsx)(xe,{children:(0,M.jsx)(he,{totalItems:v.length,page:b,onPageChange:h,pageSize:f,onPageSizeChange:e=>{ge(e),h(1)},pageSizeOptions:N,size:`sm`,"aria-label":`Project pages`})})]}),k=(0,M.jsxs)(`div`,{className:A.account,children:[(0,M.jsx)(ae,{align:`start`,trigger:(0,M.jsx)(a,{variant:`secondary`,appearance:`ghost`,startIcon:(0,M.jsx)(re,{initials:`IO`,size:`sm`}),children:`Ines Okafor`}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]}),(0,M.jsx)(a,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,M.jsx)(s,{name:`info`})})]});return(0,M.jsx)(_e,{brand:(0,M.jsx)(`strong`,{className:A.brand,children:`Zweihänder`}),sidebar:(0,M.jsx)(Oe,{items:$e(C),currentHref:`#projects`,className:A.sidebar,footer:k}),header:(0,M.jsx)(ye,{end:k}),...t,children:(0,M.jsxs)(`div`,{className:A.page,children:[(0,M.jsxs)(`div`,{className:A.heading,children:[(0,M.jsxs)(`h1`,{className:A.title,children:[`Projects `,(0,M.jsx)(te,{count:C,variant:`secondary`})]}),(0,M.jsxs)(`div`,{className:A.headingActions,children:[(0,M.jsx)(we,{title:`Import projects`,noun:[`project`,`projects`],fields:qe,validate:Je,onImport:e=>r(t=>[...e.map(Ye),...t]),trigger:(0,M.jsx)(a,{variant:`secondary`,appearance:`outlined`,children:`Import`})}),(0,M.jsx)(De,{title:`Export projects`,scopes:[{value:`view`,label:`${c.label} view (${v.length})`,helperText:`With the search and filters applied now.`},{value:`selected`,label:`Selected (${S.length})`,disabled:S.length===0},{value:`all`,label:`All projects (${n.length})`,helperText:`Archived ones too.`}],defaultScope:S.length>0?`selected`:`view`,columns:L,defaultColumnKeys:l.columns,onExport:({scope:e,columns:t})=>{let r=e===`all`?n:e===`selected`?v.filter(e=>S.includes(e.id)):v,i=L.filter(e=>t.includes(e.key));Ee(`projects.csv`,[i.map(e=>String(e.header)),...r.map(e=>i.map(t=>Ke[t.key](e)))])},trigger:(0,M.jsx)(a,{variant:`secondary`,appearance:`outlined`,children:`Export`})}),(0,M.jsx)(a,{startIcon:(0,M.jsx)(s,{name:`plus`}),children:`Add project`})]})]}),(0,M.jsx)(ke,{"aria-label":`Project views`,views:i.map(({state:e,...t})=>({...t,count:_.filter(n=>B(n,t.id===c.id?l:e)).length})),value:c.id,onValueChange:Ae,isModified:!Ze(l,c.state),onSave:()=>o(e=>e.map(e=>e.id===c.id?{...e,state:l}:e)),onDiscard:()=>g(c.state),onSaveAs:({label:e,isShared:t})=>{let n=`view-${Date.now()}`;o(r=>[...r,{id:n,label:e,isShared:t,state:l}]),ne(n)},isShareable:!0,onDelete:e=>{o(t=>t.filter(t=>t.id!==e)),e===c.id&&Ae(`all`)}}),(0,M.jsx)(je,{"aria-label":`Show projects as`,summary:`${v.length} ${v.length===1?`project`:`projects`}`,filters:(0,M.jsxs)(be,{className:A.toolbar,selectedCount:S.length,onClearSelection:()=>p([]),selectionActions:(0,M.jsx)(a,{size:`sm`,variant:`secondary`,appearance:`outlined`,onClick:()=>{r(e=>e.map(e=>S.includes(e.id)?{...e,isArchived:!0}:e)),p([])},children:`Archive`}),children:[(0,M.jsx)(Ce,{"aria-label":`Project filters`,search:(0,M.jsx)(me,{ref:Te,"aria-label":`Search projects`,placeholder:`Search projects or PMs`,value:d,onChange:e=>{le(e.target.value),h(1)},className:A.search}),filters:(0,M.jsxs)(M.Fragment,{children:[D(`Status`,y.map(e=>({value:e,label:e})),l.status,e=>g({status:e})),D(`Health`,Me.map(e=>({value:e,label:Ne[e]})),l.health,e=>g({health:e}))]}),applied:[...l.status.map(e=>({id:`status:${e}`,label:`Status: ${e}`})),...l.health.map(e=>({id:`health:${e}`,label:`Health: ${Ne[e]}`}))],onRemove:e=>{let[t,n]=e.split(/:(.*)/);g(t===`status`?{status:l.status.filter(e=>e!==n)}:{health:l.health.filter(e=>e!==n)})},onClearAll:()=>g({status:[],health:[]})}),(0,M.jsxs)(`div`,{className:A.tableSettings,children:[(0,M.jsx)(ie,{isIconOnly:!0,"aria-label":`Compact rows`,variant:`secondary`,appearance:`outlined`,pressed:Se,onPressedChange:m,children:(0,M.jsx)(s,{name:`menu`})}),(0,M.jsx)(ue,{columns:L,visibleKeys:l.columns,onVisibleKeysChange:e=>g({columns:e})})]})]}),table:O,chart:(0,M.jsx)(ce,{title:`Estimation by status`,data:v.length?E:[],x:`status`,series:[{key:`estimation`,label:`Estimation`}],format:Le.format})})]})})}var j,M,N,P,F,I,L,R,Ke,qe,Je,Ye,z,Xe,B,Ze,Qe,$e;function et(){return(et=e((()=>{j=n(),o(),ne(),ee(),i(),c(),d(),le(),u(),pe(),l(),f(),h(),de(),ge(),p(),Se(),m(),g(),Ae(),ve(),v(),b(),We(),M=r(),N=[10,25,50],P=new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`}),F=new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`,year:`numeric`}),I=(e,t)=>e.getFullYear()===t.getFullYear(),L=[{key:`name`,header:`Project name`,sortable:!0,isRowHeader:!0},{key:`pm`,header:`PM`,cell:e=>e.pm?(0,M.jsx)(re,{size:`sm`,initials:e.pm.initials,imageAlt:e.pm.name}):(0,M.jsx)(`span`,{className:A.muted,children:`Unassigned`}),sortValue:e=>e.pm?.name,sortable:!0},{key:`status`,header:`Status`,cell:e=>_(e.status)},{key:`updatedAt`,header:`Last update`,sortable:!0,cell:e=>(0,M.jsx)(`time`,{className:A.nowrap,dateTime:e.updatedAt.toISOString(),title:Ie.format(e.updatedAt),children:P.format(e.updatedAt)})},{key:`resources`,header:`Resources`,sortable:!0,align:`end`},{key:`timeline`,header:`Timeline`,cell:e=>e.start&&e.end?(0,M.jsxs)(`span`,{className:A.timeline,children:[I(e.start,e.end)?P.format(e.start):F.format(e.start),(0,M.jsx)(`span`,{"aria-hidden":`true`,children:`→`}),(0,M.jsx)(`span`,{className:A.srOnly,children:`to`}),I(e.start,e.end)?P.format(e.end):F.format(e.end)]}):(0,M.jsx)(`span`,{className:A.muted,children:`Not scheduled`}),sortValue:e=>e.start,sortable:!0},{key:`estimation`,header:`Estimation`,sortable:!0,align:`end`,cell:e=>Le.format(e.estimation)}],R=e=>e.toISOString().slice(0,10),Ke={name:e=>e.name,pm:e=>e.pm?.name,status:e=>e.status,updatedAt:e=>R(e.updatedAt),resources:e=>e.resources,timeline:e=>e.start&&e.end?`${R(e.start)} to ${R(e.end)}`:``,estimation:e=>e.estimation},qe=[{key:`name`,label:`Project name`,isRequired:!0,aliases:[`Name`,`Project`]},{key:`pm`,label:`PM`,aliases:[`Project manager`]},{key:`status`,label:`Status`},{key:`estimation`,label:`Estimation`,aliases:[`Budget`]}],Je=e=>{let t={};return e.status&&!y.includes(e.status)&&(t.status=`“${e.status}” is not a status: use ${y.join(`, `)}.`),e.estimation&&Number.isNaN(Number(e.estimation.replace(/[$,]/g,``)))&&(t.estimation=`Estimation is not a number.`),t},Ye=(e,t)=>{let n=new Date,r=e.pm?{name:e.pm,initials:e.pm.split(/\s+/).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}:void 0;return{id:`import-${n.getTime()}-${t}`,name:e.name,pm:r,status:e.status||`Active`,health:`on-track`,isArchived:!1,updatedAt:n,resources:0,estimation:Number((e.estimation??`0`).replace(/[$,]/g,``))||0,activity:[{type:`created`,by:`Ines Okafor`,at:n}]}},z={isArchived:!1,status:[],health:[],columns:L.map(e=>e.key),sort:null},Xe=[{id:`all`,label:`All`,isPredefined:!0,state:z},{id:`risk`,label:`Risk`,isPredefined:!0,state:{...z,health:[`risk`]}},{id:`on-hold`,label:`On hold`,isPredefined:!0,state:{...z,status:[`On hold`]}},{id:`potential-risk`,label:`Potential risk`,isPredefined:!0,state:{...z,health:[`potential-risk`]}},{id:`on-track`,label:`On track`,isPredefined:!0,state:{...z,health:[`on-track`]}},{id:`archived`,label:`Archived`,isPredefined:!0,state:{...z,isArchived:!0}}],B=(e,t)=>e.isArchived===t.isArchived&&(t.status.length===0||t.status.includes(e.status))&&(t.health.length===0||t.health.includes(e.health)),Ze=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Qe=(e,t,n,r)=>e.filter(e=>e===n?r:t.includes(e)),$e=e=>[{label:`Dashboard`,href:`#dashboard`,icon:(0,M.jsx)(s,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,M.jsx)(s,{name:`file`}),badge:String(e)},{label:`Team`,href:`#team`,icon:(0,M.jsx)(s,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,M.jsx)(s,{name:`calendar`})}],Ge.__docgenInfo={description:`An index page (list report): projects in saved views, narrowed by search
and filters, as a table with pages or as a chart of their estimation. The
table sorts, hides columns, selects rows for a bulk archive and expands to
each project's activity. The state is local; swap it for your data layer
when you copy the page.`,methods:[],displayName:`Projects`,props:{projects:{required:!1,tsType:{name:`Array`,elements:[{name:`Project`}],raw:`Project[]`},description:`The projects to list. Defaults to made-up sample data.`,defaultValue:{value:`rows.map(
  ([name, pm, status, health, isArchived, updatedAt, resources, timeline, estimation, activity], i) => ({
    id: \`p\${i + 1}\`,
    name,
    pm: pm ? people[pm] : undefined,
    status,
    health,
    isArchived,
    updatedAt: d(updatedAt),
    resources,
    start: timeline ? d(timeline[0]) : undefined,
    end: timeline ? d(timeline[1]) : undefined,
    estimation,
    activity,
  }),
)`,computed:!0}}},composes:[`Omit`]}})))()}var tt=t({Chart:()=>X,Dark:()=>$,Default:()=>J,FilterAndSaveView:()=>Y,ImportAndExport:()=>q,Mobile:()=>Q,Tablet:()=>Z,__namedExportsOrder:()=>ot,default:()=>at}),nt,V,rt,H,U,W,it,at,G,K,q,J,Y,X,Z,Q,$,ot;function st(){return(st=e((()=>{m(),et(),nt=r(),{expect:V,fireEvent:rt,userEvent:H,waitFor:U,within:W}=__STORYBOOK_MODULE_TEST__,it=e=>[t=>(0,nt.jsx)(`div`,{style:{inlineSize:e,blockSize:720,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],at={title:`Templates/Object Management/Projects`,tags:[`experimental`],component:Ge,parameters:{layout:`fullscreen`},argTypes:{projects:{control:!1}}},G=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),K=()=>W(document.body),q={play:async({canvas:e})=>{await H.click(e.getByRole(`button`,{name:`Import`}));let t=W(await K().findByRole(`dialog`,{name:`Import projects`})),n=document.querySelector(`input[type=file]`),r=new DataTransfer;r.items.add(new File([Te([[`Project`,`Status`,`Budget`],[`Saltmarsh Audit`,`Active`,`9000`],[`Ember Payroll`,`Paused`,`1`],[`Quarry Ledger`,``,`$12,500`]])],`new.csv`,{type:`text/csv`})),n.files=r.files,rt.change(n),await U(()=>V(t.getByRole(`button`,{name:`Next`})).toBeEnabled()),await H.click(t.getByRole(`button`,{name:`Next`})),await t.findByRole(`table`,{name:`Columns to map`}),await H.click(t.getByRole(`button`,{name:`Next`})),await H.click(await t.findByRole(`button`,{name:`Import 2 projects`})),await H.click(await t.findByRole(`button`,{name:`Done`})),await U(()=>V(K().queryByRole(`dialog`)).toBeNull()),await V(e.getByRole(`heading`,{level:1,name:`Projects 18`})).toBeVisible(),await V(G(e).slice(0,2)).toEqual([`Saltmarsh Audit`,`Quarry Ledger`]),await H.click(e.getByRole(`button`,{name:`Export`}));let i=W(await K().findByRole(`dialog`,{name:`Export projects`}));await V(i.getByRole(`radio`,{name:/All view \(18\)/})).toBeChecked(),await V(i.getByRole(`radio`,{name:/Selected \(0\)/})).toHaveAttribute(`aria-disabled`,`true`),await H.click(i.getByRole(`button`,{name:`Cancel`})),await U(()=>V(K().queryByRole(`dialog`)).toBeNull())}},J={play:async({canvas:e})=>{await V(e.getByRole(`heading`,{level:1,name:`Projects 16`})).toBeVisible(),await V(e.getByRole(`button`,{name:`Add project`})).toBeVisible(),await V(G(e)).toHaveLength(10),await V(e.getByRole(`navigation`,{name:`Project pages`})).toHaveTextContent(`1–10 of 16`),await H.click(e.getByRole(`button`,{name:`Page 2`})),await V(G(e)).toHaveLength(6),await H.click(e.getByRole(`tab`,{name:`Risk 3`})),await V(G(e)).toEqual([`Saltmarsh Analytics`,`Lanternfish Search`,`Orchard Help Center`]),await V(e.getByRole(`table`,{name:`Risk projects`})).toBeVisible(),await H.click(e.getByRole(`tab`,{name:`Archived 2`})),await V(G(e)).toEqual([`Foxglove Pricing`,`Tidewater Export`]),await H.click(e.getByRole(`tab`,{name:/^All/}));let t=e.getByRole(`searchbox`,{name:`Search projects`});await H.type(t,`priya`),await V(G(e)).toEqual([`Ember Mobile`]),await V(e.getByRole(`tab`,{name:`Archived 1`})).toBeVisible(),await H.clear(t);let n=e.getByRole(`button`,{name:`Estimation`});await H.click(n),await V(G(e)[0]).toBe(`Cobalt Audit Log`),await H.click(n),await V(G(e)[0]).toBe(`Lanternfish Search`),await V(e.getByText(`Modified`)).toBeVisible(),await H.click(e.getByRole(`button`,{name:`Discard`})),await V(G(e)[0]).toBe(`Harbor Lights`);let r=e.getByRole(`button`,{name:`Expand Harbor Lights`});await H.click(r),await V(r).toHaveAttribute(`aria-expanded`,`true`);let i=e.getByRole(`region`,{name:`Harbor Lights activity`});await V(W(i).getAllByRole(`listitem`)).toHaveLength(3),await V(W(i).getByText(/Budget approved/)).toBeVisible(),await H.click(e.getByRole(`checkbox`,{name:`Select Harbor Lights`})),await H.click(e.getByRole(`checkbox`,{name:`Select Copperleaf CRM`})),await V(e.getByText(`2 selected`)).toBeVisible(),await H.click(e.getByRole(`button`,{name:`Archive`})),await V(e.getByRole(`tab`,{name:`Archived 4`})).toBeVisible(),await V(e.getByRole(`heading`,{level:1,name:`Projects 14`})).toBeVisible()}},Y={play:async({canvas:e})=>{await H.click(e.getByRole(`button`,{name:`Status`})),await H.click(await K().findByRole(`menuitemcheckbox`,{name:`Expired`})),await H.keyboard(`{Escape}`),await U(()=>V(K().queryByRole(`menu`)).toBeNull()),await V(G(e)).toEqual([`Saltmarsh Analytics`]);let t=e.getByRole(`list`,{name:`Applied filters`});await V(W(t).getByText(`Status: Expired`)).toBeVisible(),await V(e.getByText(`Modified`)).toBeVisible(),await V(e.queryByRole(`button`,{name:`Save`})).toBeNull(),await H.click(e.getByRole(`button`,{name:`Save as new view`})),await H.type(await K().findByRole(`textbox`,{name:/View name/}),`Expired`),await H.click(K().getByRole(`button`,{name:`Save view`})),await V(await e.findByRole(`tab`,{name:`Expired 1`})).toHaveAttribute(`aria-selected`,`true`),await V(e.queryByText(`Modified`)).toBeNull(),await H.click(e.getByRole(`tab`,{name:/^All/})),await V(e.queryByRole(`list`,{name:`Applied filters`})).toBeNull(),await V(G(e)).toHaveLength(10)}},X={play:async({canvas:e})=>{await H.click(e.getByRole(`tab`,{name:`Chart`})),await V(await e.findByRole(`img`,{name:/Estimation by status/})).toBeVisible(),await H.click(e.getByRole(`tab`,{name:`Risk 3`})),await V(e.getByText(`3 projects`)).toBeVisible()}},Z={decorators:it(768),play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await V(t.getBoundingClientRect().width).toBeLessThan(100),await V(W(t).getByRole(`link`,{name:/^Projects/})).toHaveAttribute(`aria-current`,`page`),await V(e.getByRole(`table`)).toBeVisible()}},Q={decorators:it(375),play:async({canvas:e})=>{let t=e.getByRole(`main`);await V(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth);let n=e.getByRole(`tablist`,{name:`Project views`});await V(n.scrollWidth).toBeGreaterThan(n.clientWidth);let r=e.getByRole(`navigation`,{name:`Main`});await V(W(r).getByRole(`link`,{name:/^Projects/})).toHaveAttribute(`aria-current`,`page`)}},$={globals:{theme:`dark`},play:async({canvas:e})=>{await H.click(e.getByRole(`button`,{name:`Expand Lanternfish Search`})),await V(e.getByRole(`region`,{name:`Lanternfish Search activity`})).toBeVisible()}},ot=[`ImportAndExport`,`Default`,`FilterAndSaveView`,`Chart`,`Tablet`,`Mobile`,`Dark`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import'
    }));
    const d = within(await body().findByRole('dialog', {
      name: 'Import projects'
    }));
    const input = document.querySelector<HTMLInputElement>('input[type=file]')!;
    const t = new DataTransfer();
    t.items.add(new File([toCsv([['Project', 'Status', 'Budget'], ['Saltmarsh Audit', 'Active', '9000'], ['Ember Payroll', 'Paused', '1'], ['Quarry Ledger', '', '$12,500']])], 'new.csv', {
      type: 'text/csv'
    }));
    input.files = t.files;
    fireEvent.change(input);
    await waitFor(() => expect(d.getByRole('button', {
      name: 'Next'
    })).toBeEnabled());
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await d.findByRole('table', {
      name: 'Columns to map'
    });
    await userEvent.click(d.getByRole('button', {
      name: 'Next'
    }));
    await userEvent.click(await d.findByRole('button', {
      name: 'Import 2 projects'
    }));
    await userEvent.click(await d.findByRole('button', {
      name: 'Done'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Projects 18'
    })).toBeVisible();
    await expect(rowNames(canvas).slice(0, 2)).toEqual(['Saltmarsh Audit', 'Quarry Ledger']);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Export'
    }));
    const e = within(await body().findByRole('dialog', {
      name: 'Export projects'
    }));
    await expect(e.getByRole('radio', {
      name: /All view \\(18\\)/
    })).toBeChecked();
    await expect(e.getByRole('radio', {
      name: /Selected \\(0\\)/
    })).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(e.getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...q.parameters?.docs?.source},description:{story:`Import a file: two good rows join the list, one with an unknown status is skipped. Export opens on the view in force.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Projects 16'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Add project'
    })).toBeVisible();
    // Sixteen open projects, ten to a page.
    await expect(rowNames(canvas)).toHaveLength(10);
    await expect(canvas.getByRole('navigation', {
      name: 'Project pages'
    })).toHaveTextContent('1–10 of 16');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Page 2'
    }));
    await expect(rowNames(canvas)).toHaveLength(6);

    // A view is a saved filter, and its count is the rows it shows.
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Risk 3'
    }));
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics', 'Lanternfish Search', 'Orchard Help Center']);
    await expect(canvas.getByRole('table', {
      name: 'Risk projects'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Archived 2'
    }));
    await expect(rowNames(canvas)).toEqual(['Foxglove Pricing', 'Tidewater Export']);
    await userEvent.click(canvas.getByRole('tab', {
      name: /^All/
    }));

    // Search narrows the rows and every view's count; it matches the PM too.
    const search = canvas.getByRole('searchbox', {
      name: 'Search projects'
    });
    await userEvent.type(search, 'priya');
    await expect(rowNames(canvas)).toEqual(['Ember Mobile']);
    await expect(canvas.getByRole('tab', {
      name: 'Archived 1'
    })).toBeVisible();
    await userEvent.clear(search);

    // The sort covers every page: the cheapest project was on page 2.
    const estimation = canvas.getByRole('button', {
      name: 'Estimation'
    });
    await userEvent.click(estimation);
    await expect(rowNames(canvas)[0]).toBe('Cobalt Audit Log');
    await userEvent.click(estimation);
    await expect(rowNames(canvas)[0]).toBe('Lanternfish Search');
    // A sort changes the view: it can be saved, or dropped.
    await expect(canvas.getByText('Modified')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Discard'
    }));
    await expect(rowNames(canvas)[0]).toBe('Harbor Lights');

    // A row opens to its activity: the status change with its note, the estimation change, the creation.
    const expand = canvas.getByRole('button', {
      name: 'Expand Harbor Lights'
    });
    await userEvent.click(expand);
    await expect(expand).toHaveAttribute('aria-expanded', 'true');
    const activity = canvas.getByRole('region', {
      name: 'Harbor Lights activity'
    });
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(3);
    await expect(within(activity).getByText(/Budget approved/)).toBeVisible();

    // Selected rows can be archived; they move to the Archived view.
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Harbor Lights'
    }));
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Copperleaf CRM'
    }));
    await expect(canvas.getByText('2 selected')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Archive'
    }));
    await expect(canvas.getByRole('tab', {
      name: 'Archived 4'
    })).toBeVisible();
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Projects 14'
    })).toBeVisible();
  }
}`,...J.parameters?.docs?.source},description:{story:`The whole page at the width of its frame: views, search, sort across pages, the activity of a row and a bulk archive.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    // A checkbox menu stays open after a choice, so Escape closes it.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Status'
    }));
    await userEvent.click(await body().findByRole('menuitemcheckbox', {
      name: 'Expired'
    }));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(rowNames(canvas)).toEqual(['Saltmarsh Analytics']);
    const chips = canvas.getByRole('list', {
      name: 'Applied filters'
    });
    await expect(within(chips).getByText('Status: Expired')).toBeVisible();
    await expect(canvas.getByText('Modified')).toBeVisible();

    // All is predefined: no Save, only Save as new view.
    await expect(canvas.queryByRole('button', {
      name: 'Save'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save as new view'
    }));
    await userEvent.type(await body().findByRole('textbox', {
      name: /View name/
    }), 'Expired');
    await userEvent.click(body().getByRole('button', {
      name: 'Save view'
    }));
    await expect(await canvas.findByRole('tab', {
      name: 'Expired 1'
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.queryByText('Modified')).toBeNull();

    // Back to All: the filter goes with the view.
    await userEvent.click(canvas.getByRole('tab', {
      name: /^All/
    }));
    await expect(canvas.queryByRole('list', {
      name: 'Applied filters'
    })).toBeNull();
    await expect(rowNames(canvas)).toHaveLength(10);
  }
}`,...Y.parameters?.docs?.source},description:{story:`A filter shows as a chip and marks the view modified; Save as new view keeps it as a view of its own.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Chart'
    }));
    await expect(await canvas.findByRole('img', {
      name: /Estimation by status/
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Risk 3'
    }));
    await expect(canvas.getByText('3 projects')).toBeVisible();
  }
}`,...X.parameters?.docs?.source},description:{story:`The same projects as a chart of their estimation by status, under the same views and filters.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(768),
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(nav.getBoundingClientRect().width).toBeLessThan(100);
    await expect(within(nav).getByRole('link', {
      name: /^Projects/
    })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('table')).toBeVisible();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Below 64rem the sidebar stays beside the page as the icon rail.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: box(375),
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth);
    const tabs = canvas.getByRole('tablist', {
      name: 'Project views'
    });
    await expect(tabs.scrollWidth).toBeGreaterThan(tabs.clientWidth);
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: /^Projects/
    })).toHaveAttribute('aria-current', 'page');
  }
}`,...Q.parameters?.docs?.source},description:{story:`On a phone the toolbar wraps, the views scroll sideways and the table scrolls inside its frame, not the page.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Expand Lanternfish Search'
    }));
    await expect(canvas.getByRole('region', {
      name: 'Lanternfish Search activity'
    })).toBeVisible();
  }
}`,...$.parameters?.docs?.source},description:{story:`Dark mode, with a row open, so the accessibility check covers the activity too.`,...$.parameters?.docs?.description}}}})))()}export{Z as a,tt as i,Y as n,st as o,Q as r,J as t};