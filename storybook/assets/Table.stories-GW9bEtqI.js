import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-CAzJH1mZ.js";import{n as ee,t as te}from"./icon-Cjfg2BMt.js";import{n as ne,t as re}from"./expectAnatomy-C52ByQ6s.js";import{n as ie,r as ae}from"./Tag-DFlvzkGs.js";import{n as oe,t as o}from"./Table-CJ-sEei_.js";import{n as se,t as ce}from"./EmptyState-BWYrKFsK.js";var le=t({Anatomy:()=>K,ControlledExpansion:()=>P,ControlledSort:()=>D,ControlledWidths:()=>W,Default:()=>y,DeprecatedSize:()=>T,DontNoRowHeader:()=>$,DontNumbersAtStart:()=>Q,EdgeCells:()=>C,EdgeControls:()=>R,Empty:()=>E,EmptyValuesSortLast:()=>S,ExpandableRows:()=>N,ExplicitDefaultSize:()=>w,FitsWithoutControls:()=>j,NarrowScroll:()=>k,NarrowWithControls:()=>A,Paged:()=>x,Resizable:()=>H,ResizableRtl:()=>U,RowActions:()=>B,RowWithControl:()=>L,Selectable:()=>b,StateEnabled:()=>J,StateExpanded:()=>Z,StateSelected:()=>X,StateSorted:()=>Y,StickyHeader:()=>O,TotalRow:()=>V,__namedExportsOrder:()=>ye,anatomyParts:()=>G,default:()=>me});function ue(e){let[t,n]=(0,s.useState)(0);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,c.jsx)(o,{columns:h,rows:m.slice(t*2,t*2+2),getRowId:e=>e.id,caption:`Projects, page ${t+1} of 2`,isSelectable:!0,onSelectionChange:e.onSelectionChange}),(0,c.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n(1-t),children:t===0?`Next page`:`Previous page`})]})}var s,c,l,u,de,d,f,p,m,fe,pe,h,me,g,he,_,v,y,b,x,S,C,w,T,E,D,O,ge,k,A,j,M,_e,N,P,F,I,L,R,z,B,ve,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ye;function be(){return(be=e((()=>{s=n(),ne(),ee(),ae(),i(),se(),oe(),c=r(),{expect:l,fn:u,spyOn:de,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m=[{id:`p1`,name:`Atlas`,owner:`Sam Rivera`,status:`Active`,files:214,updated:new Date(`2026-09-20`)},{id:`p2`,name:`Billing revamp`,owner:`Mia Chen`,status:`Paused`,files:38,updated:new Date(`2026-08-02`)},{id:`p3`,name:`Onboarding`,owner:`Leo Park`,status:`Active`,files:1203,updated:new Date(`2026-09-25`)},{id:`p4`,name:`Design tokens`,owner:`Ava Stone`,status:`Archived`,files:9,updated:new Date(`2025-12-11`)}],fe=new Intl.DateTimeFormat(`en`,{dateStyle:`medium`}),pe={Active:`success`,Paused:`warning`,Archived:`info`},h=[{key:`name`,header:`Project`,sortable:!0,isRowHeader:!0},{key:`owner`,header:`Owner`,sortable:!0},{key:`status`,header:`Status`,cell:e=>(0,c.jsx)(ie,{variant:pe[e.status],text:e.status})},{key:`files`,header:`Files`,sortable:!0,align:`end`,cell:e=>e.files.toLocaleString(`en`)},{key:`updated`,header:`Updated`,sortable:!0,align:`end`,cell:e=>fe.format(e.updated)}],me={title:`Components/Data Display/Table`,tags:[`beta`],component:o,args:{columns:h,rows:m,getRowId:e=>e.id,caption:`Projects`,onSortChange:u(),onSelectionChange:u(),onExpandedChange:u()},argTypes:{columns:{description:"The columns, in order: `{ key, header, cell?, sortable?, sortValue?, align?, width?, isRowHeader?, footer? }`. See TableColumn below the table.",control:!1,table:{type:{summary:`TableColumn<Row>[]`}}},rows:{description:`The records, one per row. Pass one page at a time when paging.`,control:!1,table:{type:{summary:`Row[]`}}},caption:{description:"Names the table for assistive tech. Visually hidden unless `showCaption`.",control:`text`,table:{type:{summary:`ReactNode`}}},showCaption:{description:`Shows the caption above the table.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},getRowId:{description:"A stable id per row. Needed for selection and expansion that survive sorting and paging; defaults to the row's index in `rows`.",control:!1,table:{type:{summary:`(row: Row, index: number) => string`},defaultValue:{summary:`the index`}}},sort:{description:`Controlled sort. When set, the table shows the rows as given: sort them yourself, e.g. on the server.`,control:!1,table:{type:{summary:`{ key: string; direction: 'ascending' | 'descending' } | null`}}},defaultSort:{description:`The starting sort when uncontrolled. The table sorts its own copy of the rows.`,control:!1,table:{type:{summary:`{ key: string; direction: 'ascending' | 'descending' } | null`},defaultValue:{summary:`null`}}},onSortChange:{description:"Called with the new sort, or `null` when a third click turns it off.",control:!1,table:{type:{summary:`(sort: TableSort | null) => void`}}},isSelectable:{description:`Adds a checkbox column, with a header checkbox that selects every row shown.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},selectedIds:{description:"Controlled selection: ids from `getRowId`.",control:!1,table:{type:{summary:`string[]`}}},defaultSelectedIds:{description:`The starting selection when uncontrolled.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},onSelectionChange:{description:`Called with every selected id. Ids selected on other pages are kept when the header checkbox changes this page's rows.`,control:!1,table:{type:{summary:`(ids: string[]) => void`}}},expandedContent:{description:"Content shown under a row when it is open, across the full width. Adds an expand button to each row that returns content; a row that returns `null`, `undefined` or `false` gets none. Runs for every row on each render, so keep it cheap.",control:!1,table:{type:{summary:`(row: Row) => ReactNode`}}},expandedIds:{description:"Controlled expansion: ids from `getRowId`, so sorting keeps the right rows open.",control:!1,table:{type:{summary:`string[]`}}},defaultExpandedIds:{description:`The rows open at first when uncontrolled.`,control:!1,table:{type:{summary:`string[]`},defaultValue:{summary:`[]`}}},onExpandedChange:{description:`Called with every open id when an expand button is pressed.`,control:!1,table:{type:{summary:`(ids: string[]) => void`}}},rowActions:{description:`The items of a menu at the end of each row, opened by a "more" button named after the row ("Actions for Atlas"). A row that returns no items gets no button.`,control:!1,table:{type:{summary:`(row: Row) => MenuEntry[] | null | undefined`}}},size:{description:"Deprecated: Table has one size, and `sm` renders the same table as `md`. Drop the prop; it will be removed in the next release. Warns in development for any value but `md`.",control:!1,table:{type:{summary:`'sm' | 'md'`}}},density:{description:"Deprecated: does nothing, like `size`. Will be removed in the next release.",control:!1,table:{type:{summary:`'sm' | 'md'`}}},hasStickyHeader:{description:`Keeps the header row in view while the table scrolls inside its container, when something limits the container's height.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},emptyState:{description:`Shown in place of the rows when there are none, e.g. an Empty State.`,control:!1,table:{type:{summary:`ReactNode`}}},isResizable:{description:"A handle at the end of each column header that drags, or arrow-keys, the column wider or narrower (48 to 1200px). The table is then laid out by its header widths (`table-layout: fixed`): columns without a `width` share what is left, and what no longer fits is clipped.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},columnWidths:{description:"Column widths in px, by key, for controlled resizing. Pair with `onColumnWidthsChange`; without it the table keeps its own.",control:!1,table:{type:{summary:`Record<string, number>`}}},onColumnWidthsChange:{description:`Called with every resized column's width in px while a handle moves. Store it to keep the widths across visits.`,control:!1,table:{type:{summary:`(widths: Record<string, number>) => void`}}},className:{description:`Added to the scroll container around the table.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},g=e=>[e.getAllByRole(`rowheader`)[0],e.getAllByRole(`columnheader`)[0]].map(e=>e.clientHeight),he=h.filter(e=>e.key!==`status`),_=e=>{let t=document.createRange();return t.selectNodeContents(e),t.getBoundingClientRect()},v=e=>e.getAllByRole(`rowheader`).map(e=>e.textContent),y={play:async({args:e,canvas:t})=>{let n=t.getByRole(`table`,{name:`Projects`});await l(p(n).getAllByRole(`row`)).toHaveLength(5),await l(g(t)[1]).toBe(32),await l(getComputedStyle(t.getAllByRole(`columnheader`)[0]).borderBottomWidth).toBe(`1px`),await l(getComputedStyle(t.getAllByRole(`rowheader`)[0]).borderBottomWidth).toBe(`0px`);let r=getComputedStyle(n);await l(r.borderBottomWidth).toBe(`1px`),await l(r.borderBottomColor).toBe(getComputedStyle(t.getAllByRole(`columnheader`)[0]).borderBottomColor),await l(n.getBoundingClientRect().bottom-p(n).getAllByRole(`row`).at(-1).getBoundingClientRect().bottom).toBe(1);let i=t.getByRole(`rowheader`,{name:`Atlas`}).closest(`tr`);await l(p(i).getByText(`Active`)).toBeVisible(),await l(i.getBoundingClientRect().height).toBe(36),await l(v(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]);let a=t.getByRole(`columnheader`,{name:/Files/});await l(a).toHaveAttribute(`aria-sort`,`none`),await d.click(p(a).getByRole(`button`)),await l(a).toHaveAttribute(`aria-sort`,`ascending`),await l(e.onSortChange).toHaveBeenLastCalledWith({key:`files`,direction:`ascending`}),await l(v(t)).toEqual([`Design tokens`,`Billing revamp`,`Atlas`,`Onboarding`]),await d.click(p(a).getByRole(`button`)),await l(a).toHaveAttribute(`aria-sort`,`descending`),await l(v(t)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`]),await d.click(p(a).getByRole(`button`)),await l(a).toHaveAttribute(`aria-sort`,`none`),await l(v(t)).toEqual([`Atlas`,`Billing revamp`,`Onboarding`,`Design tokens`]),await d.click(p(t.getByRole(`columnheader`,{name:/Updated/})).getByRole(`button`)),await l(v(t)[0]).toBe(`Design tokens`)}},b={args:{isSelectable:!0,defaultSelectedIds:[`p2`]},play:async({args:e,canvas:t})=>{let n=t.getByRole(`checkbox`,{name:`Select all rows`});await l(n).toHaveAttribute(`aria-checked`,`mixed`),await l(t.getByRole(`checkbox`,{name:`Select Billing revamp`}).closest(`tr`)).toHaveAttribute(`aria-selected`,`true`),await d.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await l(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`]),await d.click(n),await l(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p1`,`p3`,`p4`]),await l(n).toHaveAttribute(`aria-checked`,`true`),await d.click(n),await l(e.onSelectionChange).toHaveBeenLastCalledWith([])}},x={render:e=>(0,c.jsx)(ue,{onSelectionChange:e.onSelectionChange}),play:async({args:e,canvas:t})=>{await d.click(t.getByRole(`checkbox`,{name:`Select Atlas`})),await d.click(t.getByRole(`button`,{name:`Next page`}));let n=t.getByRole(`checkbox`,{name:`Select all rows`});await d.click(n),await l(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`,`p3`,`p4`]),await d.click(n),await l(e.onSelectionChange).toHaveBeenLastCalledWith([`p1`])}},S={args:{rows:[...m,{id:`p5`,name:`Scratch`,owner:``,status:`Paused`,files:null,updated:new Date(`2026-01-01`)}],columns:h.map(e=>e.key===`files`?{...e,cell:e=>e.files==null?`–`:e.files.toLocaleString(`en`)}:e)},play:async({canvas:e})=>{let t=p(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`);await d.click(t),await l(v(e).at(-1)).toBe(`Scratch`),await d.click(t),await l(v(e)).toEqual([`Onboarding`,`Atlas`,`Billing revamp`,`Design tokens`,`Scratch`])}},C={tags:[`!dev`],play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`Projects`}).getBoundingClientRect(),n=e.getByRole(`rowheader`,{name:`Atlas`}).closest(`tr`),r=e.getAllByRole(`columnheader`);await l(_(n.firstElementChild).left).toBeCloseTo(t.left+8,0),await l(_(p(r[0]).getByRole(`button`)).left).toBeCloseTo(t.left+8,0),await l(_(n.lastElementChild).right).toBeCloseTo(t.right-8,0),await l(_(p(r.at(-1)).getByRole(`button`)).right).toBeCloseTo(t.right-8,0);for(let e of[n.firstElementChild,n.children[1],n.lastElementChild,r[0],r[1],r.at(-1)]){let{paddingLeft:t,paddingRight:n}=getComputedStyle(e);await l([t,n]).toEqual([`8px`,`8px`])}await l(getComputedStyle(r[0]).backgroundColor).toBe(`rgba(0, 0, 0, 0)`)}},w={tags:[`!dev`],args:{size:`md`},beforeEach:()=>{de(console,`warn`).mockImplementation(()=>{})},play:async()=>{await l(console.warn).not.toHaveBeenCalledWith(l.stringContaining("Table: `size`"))}},T={tags:[`!dev`],args:{size:`sm`,density:`sm`,columns:he},play:async({canvas:e})=>{await l(g(e)).toEqual([36,32])}},E={args:{rows:[],columns:[{...h[0],footer:`Total`},...h.slice(1)],emptyState:(0,c.jsx)(ce,{size:`sm`,headingLevel:3,icon:(0,c.jsx)(te,{name:`search`}),title:`No projects match “zeta”`,action:(0,c.jsx)(a,{size:`sm`,appearance:`outlined`,variant:`accent`,children:`Clear search`})})},play:async({canvas:e})=>{await l(e.getByRole(`heading`,{name:`No projects match “zeta”`})).toBeVisible(),await l(e.getAllByRole(`rowgroup`)).toHaveLength(2),await l(getComputedStyle(e.getByRole(`table`)).borderBottomWidth).toBe(`0px`)}},D={render:function(e){let[t,n]=(0,s.useState)(null),r=t?[...m].sort((e,n)=>e.owner.localeCompare(n.owner)*(t.direction===`ascending`?1:-1)):m;return(0,c.jsx)(o,{...e,rows:r,sort:t,onSortChange:n})},play:async({canvas:e})=>{await d.click(p(e.getByRole(`columnheader`,{name:/Owner/})).getByRole(`button`)),await l(e.getAllByRole(`row`)[1]).toHaveTextContent(`Ava Stone`)}},O={args:{hasStickyHeader:!0,rows:Array.from({length:20},(e,t)=>({...m[t%4],id:`r${t}`,name:`${m[t%4].name} ${t+1}`}))},decorators:[e=>(0,c.jsx)(`div`,{style:{blockSize:`20rem`,display:`grid`},children:e()})]},ge=h.map(e=>({...e,sortable:!1})),k={args:{columns:ge},decorators:[e=>(0,c.jsx)(`div`,{style:{inlineSize:`16rem`},children:e()})],play:async({canvas:e})=>{let t=await e.findByRole(`region`,{name:`Projects`});await l(t).toHaveAttribute(`tabindex`,`0`),await d.tab(),await l(t).toHaveFocus(),await l(getComputedStyle(t).outlineStyle).toBe(`solid`)}},A={tags:[`!dev`],decorators:k.decorators,play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`Projects`}).parentElement;await f(()=>l(t.scrollWidth).toBeGreaterThan(t.clientWidth)),await l(e.queryByRole(`region`)).toBeNull(),await l(t).not.toHaveAttribute(`tabindex`)}},j={tags:[`!dev`],args:{columns:ge},play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`Projects`}).parentElement;await f(()=>l(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)),await l(e.queryByRole(`region`)).toBeNull(),await l(t).not.toHaveAttribute(`tabindex`)}},M=e=>e.status===`Archived`?null:(0,c.jsxs)(`p`,{style:{margin:0},children:[e.owner,` owns `,e.name,`: `,e.files.toLocaleString(`en`),` files, last updated `,fe.format(e.updated),`.`]}),_e=e=>e.getAllByRole(`row`).slice(1).map(e=>e.textContent??``),N={args:{expandedContent:M,isSelectable:!0},play:async({args:e,canvas:t,step:n})=>{let r=t.getByRole(`button`,{name:`Expand Atlas`});await n(`A row with no content has no button`,async()=>{await l(t.queryByRole(`button`,{name:`Expand Design tokens`})).toBeNull()}),await n(`Click opens and closes, aria-expanded follows`,async()=>{await l(r).toHaveAttribute(`aria-expanded`,`false`),await d.click(r),await l(r).toHaveAttribute(`aria-expanded`,`true`),await l(e.onExpandedChange).toHaveBeenLastCalledWith([`p1`]);let n=t.getByText(/Sam Rivera owns Atlas/);await l(r).toHaveAttribute(`aria-controls`,n.closest(`td`).id),await l(n.closest(`td`)).toHaveAttribute(`colspan`,String(h.length+2)),await d.click(r),await l(r).toHaveAttribute(`aria-expanded`,`false`),await l(t.queryByText(/Sam Rivera owns Atlas/)).toBeNull()}),await n(`Enter and Space toggle from the keyboard`,async()=>{let e=t.getByRole(`button`,{name:`Expand Billing revamp`});e.focus(),await d.keyboard(`{Enter}`),await l(e).toHaveAttribute(`aria-expanded`,`true`),await d.keyboard(` `),await l(e).toHaveAttribute(`aria-expanded`,`false`),await d.keyboard(`{Enter}`)}),await n(`Sorting keeps the same row open, its content right under it`,async()=>{await d.click(p(t.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`)),await l(v(t)).toEqual([`Design tokens`,`Billing revamp`,`Atlas`,`Onboarding`]);let e=_e(t),n=e.findIndex(e=>e.includes(`Billing revamp`)&&!e.includes(`owns`));await l(e[n+1]).toMatch(/Mia Chen owns Billing revamp/),await l(t.getByRole(`button`,{name:`Expand Billing revamp`})).toHaveAttribute(`aria-expanded`,`true`),await l(t.getByRole(`button`,{name:`Expand Atlas`})).toHaveAttribute(`aria-expanded`,`false`)}),await n(`Selecting a row leaves expansion alone`,async()=>{await d.click(t.getByRole(`checkbox`,{name:`Select Billing revamp`})),await d.click(t.getByRole(`checkbox`,{name:`Select all rows`})),await l(e.onSelectionChange).toHaveBeenLastCalledWith([`p2`,`p4`,`p1`,`p3`]),await l(t.getByRole(`button`,{name:`Expand Billing revamp`})).toHaveAttribute(`aria-expanded`,`true`),await l(e.onExpandedChange).toHaveBeenLastCalledWith([`p2`])})}},P={args:{expandedContent:M},render:function(e){let[t,n]=(0,s.useState)([]);return(0,c.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,c.jsx)(a,{variant:`secondary`,appearance:`outlined`,size:`sm`,onClick:()=>n(t.includes(`p3`)?[]:[`p3`]),children:t.includes(`p3`)?`Close Onboarding`:`Open Onboarding`}),(0,c.jsx)(o,{...e,expandedIds:t,onExpandedChange:t=>{n(t),e.onExpandedChange?.(t)}})]})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Expand Onboarding`});await d.click(t.getByRole(`button`,{name:`Open Onboarding`})),await l(n).toHaveAttribute(`aria-expanded`,`true`),await l(t.getByText(/Leo Park owns Onboarding/)).toBeVisible(),await d.click(n),await l(e.onExpandedChange).toHaveBeenLastCalledWith([]),await l(n).toHaveAttribute(`aria-expanded`,`false`),await l(t.getByRole(`button`,{name:`Open Onboarding`})).toBeVisible()}},F=u(),I=e=>e.status===`Archived`?[]:[{label:`Edit`,onSelect:()=>F(`edit`,e.id)},{label:`Duplicate`,onSelect:()=>F(`duplicate`,e.id)},{type:`separator`},{label:`Archive`,isDestructive:!0,onSelect:()=>F(`archive`,e.id)}],L={tags:[`!dev`],args:{isSelectable:!0,expandedContent:M,rowActions:I,columns:[...he,{key:`open`,header:`Open`,cell:e=>e.id===`p1`?(0,c.jsx)(a,{appearance:`outlined`,children:`Open`}):null}]},play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`rowheader`);await l([t.clientHeight,n.clientHeight]).toEqual([48,36]),await l(g(e)[1]).toBe(32),await l(n.closest(`tr`).getBoundingClientRect().height).toBe(36)}},R={tags:[`!dev`],args:{expandedContent:M,defaultExpandedIds:[`p1`],rowActions:I},play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`Projects`}).getBoundingClientRect(),n=e.getByRole(`button`,{name:`Expand Atlas`}),r=e.getByRole(`button`,{name:`Actions for Atlas`});await l(n.getBoundingClientRect().left).toBeCloseTo(t.left+8,0),await l(r.getBoundingClientRect().right).toBeCloseTo(t.right-8,0),await l(_(e.getByText(/Sam Rivera owns Atlas/)).left).toBeCloseTo(t.left+8,0),await d.tab();for(let e of[n,r])e.focus(),await l(getComputedStyle(e).outlineStyle).toBe(`solid`),await l(getComputedStyle(e).outlineOffset).toBe(`-2px`)}},z=e=>p(e.ownerDocument.body),B={args:{rowActions:I,isSelectable:!0},play:async({canvas:e,step:t})=>{await t(`The column has a hidden header, and a row with no items has no button`,async()=>{await l(e.getByRole(`columnheader`,{name:`Actions`})).toBeInTheDocument(),await l(e.queryByRole(`button`,{name:`Actions for Design tokens`})).toBeNull()}),await t(`The button is named after the row and opens its menu`,async()=>{let t=e.getByRole(`button`,{name:`Actions for Atlas`});await l(t).toHaveAttribute(`aria-haspopup`,`menu`),await d.click(t),await d.click(await z(t).findByRole(`menuitem`,{name:`Archive`})),await l(F).toHaveBeenLastCalledWith(`archive`,`p1`),await f(()=>l(t).toHaveFocus())}),await t(`Enter opens it from the keyboard; Escape closes it`,async()=>{let t=e.getByRole(`button`,{name:`Actions for Billing revamp`});t.focus(),await d.keyboard(`{Enter}`);let n=await z(t).findByRole(`menu`);await f(()=>l(n).toBeVisible()),await d.keyboard(`{Escape}`),await f(()=>l(t).toHaveAttribute(`aria-expanded`,`false`)),await f(()=>l(t).toHaveFocus())})}},ve=h.map(e=>e.key===`name`?{...e,footer:`Total`}:e.key===`files`?{...e,footer:m.reduce((e,t)=>e+t.files,0).toLocaleString(`en`)}:e),V={args:{columns:ve,isSelectable:!0,expandedContent:M},play:async({canvas:e})=>{let[,t,n]=e.getAllByRole(`rowgroup`);await l(p(t).getAllByRole(`row`)).toHaveLength(4),await l(p(n).getByRole(`rowheader`,{name:`Total`})).toBeInTheDocument(),await l(p(n).getAllByRole(`cell`).map(e=>e.textContent)).toContain(`1,464`),await l(p(n).getByRole(`row`).children).toHaveLength(e.getAllByRole(`columnheader`).length);let r=p(n).getByRole(`rowheader`,{name:`Total`});await l(getComputedStyle(r).borderTopWidth).toBe(`1px`);let i=e.getByRole(`table`);await l(getComputedStyle(i).borderBottomWidth).toBe(`1px`),await l(i.getBoundingClientRect().bottom-r.getBoundingClientRect().bottom).toBe(1),await l(r.clientHeight).toBe(36),await d.click(p(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`)),await l(e.getAllByRole(`row`).at(-1)).toHaveTextContent(`Total`)}},H={args:{isResizable:!0,onColumnWidthsChange:u()},play:async({args:e,canvas:t,step:n})=>{let r=t.getByRole(`columnheader`,{name:/Owner/}),i=t.getByRole(`separator`,{name:`Resize Owner`});await n(`Every column header has a focusable vertical separator with its width as the value`,async()=>{await l(t.getAllByRole(`separator`)).toHaveLength(h.length),await l(i).toHaveAttribute(`aria-orientation`,`vertical`),await l(i).toHaveAttribute(`aria-valuemin`,`48`),await l(i).toHaveAttribute(`aria-valuemax`,`1200`),await f(()=>l(Number(i.getAttribute(`aria-valuenow`))).toBe(Math.round(r.getBoundingClientRect().width)))}),await n(`Arrow Right widens the column by 16px, Arrow Left narrows it`,async()=>{i.focus();let t=Number(i.getAttribute(`aria-valuenow`));await d.keyboard(`{ArrowRight}`),await l(i).toHaveAttribute(`aria-valuenow`,String(t+16)),await l(e.onColumnWidthsChange).toHaveBeenLastCalledWith({owner:t+16}),await f(()=>l(Math.round(r.getBoundingClientRect().width)).toBe(t+16)),await d.keyboard(`{ArrowLeft}{ArrowLeft}`),await l(i).toHaveAttribute(`aria-valuenow`,String(t-16))}),await n(`End sets the widest width, Home the narrowest`,async()=>{await d.keyboard(`{End}`),await l(i).toHaveAttribute(`aria-valuenow`,`1200`),await d.keyboard(`{Home}`),await l(i).toHaveAttribute(`aria-valuenow`,`48`),await f(()=>l(Math.round(r.getBoundingClientRect().width)).toBe(48))}),await n(`Dragging the handle resizes by the distance moved`,async()=>{let e=t.getByRole(`separator`,{name:`Resize Files`}),n=t.getByRole(`columnheader`,{name:/Files/}),r=Math.round(n.getBoundingClientRect().width),{x:i,y:a}=e.getBoundingClientRect();await d.pointer([{keys:`[MouseLeft>]`,target:e,coords:{clientX:i,clientY:a}},{target:e,coords:{clientX:i+40,clientY:a}},{keys:`[/MouseLeft]`,target:e,coords:{clientX:i+40,clientY:a}}]),await l(e).toHaveAttribute(`aria-valuenow`,String(r+40)),await f(()=>l(Math.round(n.getBoundingClientRect().width)).toBe(r+40))})}},U={args:{isResizable:!0},render:e=>(0,c.jsx)(`div`,{dir:`rtl`,children:(0,c.jsx)(o,{...e})}),play:async({canvas:e})=>{let t=e.getByRole(`separator`,{name:`Resize Owner`});await f(()=>l(Number(t.getAttribute(`aria-valuenow`))).toBeGreaterThan(48));let n=Number(t.getAttribute(`aria-valuenow`));t.focus(),await d.keyboard(`{ArrowLeft}`),await l(t).toHaveAttribute(`aria-valuenow`,String(n+16)),await d.keyboard(`{ArrowRight}{ArrowRight}`),await l(t).toHaveAttribute(`aria-valuenow`,String(n-16))}},W={args:{isResizable:!0,columnWidths:{name:200},onColumnWidthsChange:u()},play:async({args:e,canvas:t})=>{let n=t.getByRole(`separator`,{name:`Resize Project`});await l(n).toHaveAttribute(`aria-valuenow`,`200`),n.focus(),await d.keyboard(`{ArrowRight}`),await l(e.onColumnWidthsChange).toHaveBeenLastCalledWith({name:216}),await l(n).toHaveAttribute(`aria-valuenow`,`200`)}},G=[{name:`Caption`,selector:`caption`,description:`Names the table. Visually hidden unless showCaption.`},{name:`Header row`,selector:`thead tr`,description:`Small semibold labels over a 1px rule, with no fill. Stays in view with hasStickyHeader.`},{name:`Sort button`,selector:`th[aria-sort] button`,description:`The whole header label, with an icon for the sort. Only on sortable columns.`},{name:`Select all`,selector:`thead [role="checkbox"]`,description:`With isSelectable. Selects or clears every row shown, and shows mixed when some are selected.`},{name:`Row`,selector:`tbody tr`,description:`As tall as what it holds: 36px for one line of text. No divider: tinted when hovered or selected.`},{name:`Row checkbox`,selector:`tbody [role="checkbox"]`,description:`Named after the row header: "Select Atlas".`},{name:`Expand button`,selector:`tbody [aria-expanded]`,description:`With expandedContent: a ghost icon button. The chevron turns down when open.`},{name:`Row header`,selector:`tbody th[scope="row"]`,description:`The column marked isRowHeader, medium weight: the name a row is known by.`},{name:`Row actions`,selector:`tbody [aria-haspopup="menu"]`,description:`With rowActions: a ghost "more" button at the end of the row that opens a Menu.`},{name:`Expanded row`,selector:`tbody td[colspan]`,description:`One cell spanning every column, under its row. Holds any layout.`},{name:`Total row`,selector:`tfoot tr`,description:`With a footer on any column: a semibold row under a 1px rule, outside the sort.`}],K={tags:[`!dev`],args:{showCaption:!0,isSelectable:!0,expandedContent:M,defaultExpandedIds:[`p1`],rowActions:I,columns:ve},play:async({canvasElement:e,canvas:t})=>{let n=await re(e,G);await l(n[7]).toHaveTextContent(`Atlas`),await l(n[9]).toHaveTextContent(/Sam Rivera owns Atlas/),await l(n[10]).toHaveTextContent(`Total`);let r=getComputedStyle(n[7]);await l([r.paddingTop,r.paddingRight,r.paddingBottom,r.paddingLeft]).toEqual([`8px`,`8px`,`8px`,`8px`]);let i=getComputedStyle(n[0]);await l([i.paddingTop,i.paddingBottom]).toEqual([`24px`,`8px`]);let a=t.getByRole(`table`).getBoundingClientRect();await l(_(n[0]).left).toBeCloseTo(a.left+8,0),await l(n[5].getBoundingClientRect().left).toBeCloseTo(a.left+8,0),await l(n[8].getBoundingClientRect().right).toBeCloseTo(a.right-8,0),await l([n[5].closest(`td`).clientWidth,n[6].closest(`td`).clientWidth]).toEqual([32,40]),await l(t.getByRole(`columnheader`,{name:`Actions`})).toBeInTheDocument(),await l(t.getByRole(`columnheader`,{name:`Details`})).toBeInTheDocument()}},q={columns:h.filter(e=>e.key===`name`||e.key===`files`),rows:m.slice(0,2)},J={tags:[`!dev`],args:q},Y={tags:[`!dev`],args:{...q,defaultSort:{key:`files`,direction:`ascending`}}},X={tags:[`!dev`],args:{...q,isSelectable:!0,defaultSelectedIds:[`p1`]}},Z={tags:[`!dev`],args:{...q,expandedContent:M,defaultExpandedIds:[`p1`]}},Q={tags:[`!dev`],args:{columns:h.map(({align:e,...t})=>t)}},$={tags:[`!dev`],args:{isSelectable:!0,columns:h.map(({isRowHeader:e,...t})=>t)},play:async({canvas:e})=>{await l(e.getByRole(`checkbox`,{name:`Select row 1`})).toBeInTheDocument(),await l(e.queryByRole(`rowheader`)).toBeNull(),await d.click(p(e.getByRole(`columnheader`,{name:/Files/})).getByRole(`button`)),await l(e.getByRole(`checkbox`,{name:`Select row 1`}).closest(`tr`)).toHaveTextContent(`Atlas`),await l(e.getAllByRole(`row`)[3]).toHaveTextContent(`Atlas`)}},ye=`Default.Selectable.Paged.EmptyValuesSortLast.EdgeCells.ExplicitDefaultSize.DeprecatedSize.Empty.ControlledSort.StickyHeader.NarrowScroll.NarrowWithControls.FitsWithoutControls.ExpandableRows.ControlledExpansion.RowWithControl.EdgeControls.RowActions.TotalRow.Resizable.ResizableRtl.ControlledWidths.anatomyParts.Anatomy.StateEnabled.StateSorted.StateSelected.StateExpanded.DontNumbersAtStart.DontNoRowHeader`.split(`.`),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const table = canvas.getByRole('table', {
      name: 'Projects'
    });
    await expect(within(table).getAllByRole('row')).toHaveLength(5);
    // 8px above and below the header's 16px line: the sort button adds nothing.
    await expect(cellHeights(canvas)[1]).toBe(32);
    // The header ends on a 1px rule; the rows have no divider.
    await expect(getComputedStyle(canvas.getAllByRole('columnheader')[0]).borderBottomWidth).toBe('1px');
    await expect(getComputedStyle(canvas.getAllByRole('rowheader')[0]).borderBottomWidth).toBe('0px');
    // A table with rows closes on the same rule: 1px, the header's colour, right under the last row.
    const closing = getComputedStyle(table);
    await expect(closing.borderBottomWidth).toBe('1px');
    await expect(closing.borderBottomColor).toBe(getComputedStyle(canvas.getAllByRole('columnheader')[0]).borderBottomColor);
    await expect(table.getBoundingClientRect().bottom - within(table).getAllByRole('row').at(-1)!.getBoundingClientRect().bottom).toBe(1);
    // So a one-line row is 36px all told, and the Tag in it adds nothing.
    const atlas = canvas.getByRole('rowheader', {
      name: 'Atlas'
    }).closest('tr')!;
    await expect(within(atlas).getByText('Active')).toBeVisible();
    await expect(atlas.getBoundingClientRect().height).toBe(36);
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens']);
    // Sort: ascending, descending, then back to unsorted. aria-sort follows.
    const files = canvas.getByRole('columnheader', {
      name: /Files/
    });
    await expect(files).toHaveAttribute('aria-sort', 'none');
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'ascending');
    await expect(args.onSortChange).toHaveBeenLastCalledWith({
      key: 'files',
      direction: 'ascending'
    });
    await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding']);
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'descending');
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens']);
    await userEvent.click(within(files).getByRole('button'));
    await expect(files).toHaveAttribute('aria-sort', 'none');
    await expect(names(canvas)).toEqual(['Atlas', 'Billing revamp', 'Onboarding', 'Design tokens']);
    // Dates sort as dates, text by locale with numbers in order.
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Updated/
    })).getByRole('button'));
    await expect(names(canvas)[0]).toBe('Design tokens');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isSelectable: true,
    defaultSelectedIds: ['p2']
  },
  play: async ({
    args,
    canvas
  }) => {
    const all = canvas.getByRole('checkbox', {
      name: 'Select all rows'
    });
    // Some selected: the header box is mixed.
    await expect(all).toHaveAttribute('aria-checked', 'mixed');
    // Each row's box is named by the row header.
    // The row itself reports it, too.
    await expect(canvas.getByRole('checkbox', {
      name: 'Select Billing revamp'
    }).closest('tr')).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Atlas'
    }));
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1']);
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p1', 'p3', 'p4']);
    await expect(all).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith([]);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <PagedTable onSelectionChange={args.onSelectionChange!} />,
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Select Atlas'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next page'
    }));
    const all = canvas.getByRole('checkbox', {
      name: 'Select all rows'
    });
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1', 'p3', 'p4']);
    await userEvent.click(all);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p1']);
  }
}`,...x.parameters?.docs?.source},description:{story:`Selection with getRowId survives paging: "Select all" adds or removes this page's rows only.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [...projects, {
      id: 'p5',
      name: 'Scratch',
      owner: '',
      status: 'Paused',
      files: null as unknown as number,
      updated: new Date('2026-01-01')
    }],
    columns: columns.map(c => c.key === 'files' ? {
      ...c,
      cell: (p: Project) => p.files == null ? '–' : p.files.toLocaleString('en')
    } : c)
  },
  play: async ({
    canvas
  }) => {
    const files = within(canvas.getByRole('columnheader', {
      name: /Files/
    })).getByRole('button');
    await userEvent.click(files);
    await expect(names(canvas).at(-1)).toBe('Scratch');
    await userEvent.click(files);
    await expect(names(canvas)).toEqual(['Onboarding', 'Atlas', 'Billing revamp', 'Design tokens', 'Scratch']);
  }
}`,...S.parameters?.docs?.source},description:{story:`Rows with no value sort last in both directions.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvas
  }) => {
    const table = canvas.getByRole('table', {
      name: 'Projects'
    }).getBoundingClientRect();
    const row = canvas.getByRole('rowheader', {
      name: 'Atlas'
    }).closest('tr')!;
    const head = canvas.getAllByRole('columnheader');
    // The first cell's text, and its header's label, start 8px in from the table's left edge.
    await expect(contentBox(row.firstElementChild!).left).toBeCloseTo(table.left + 8, 0);
    await expect(contentBox(within(head[0]).getByRole('button')).left).toBeCloseTo(table.left + 8, 0);
    // The last column is end-aligned: its figures and its label end 8px in from the right edge.
    await expect(contentBox(row.lastElementChild!).right).toBeCloseTo(table.right - 8, 0);
    await expect(contentBox(within(head.at(-1)!).getByRole('button')).right).toBeCloseTo(table.right - 8, 0);
    // Every cell: 8px each side, the edge cells too.
    for (const cell of [row.firstElementChild!, row.children[1], row.lastElementChild!, head[0], head[1], head.at(-1)!]) {
      const {
        paddingLeft,
        paddingRight
      } = getComputedStyle(cell);
      await expect([paddingLeft, paddingRight]).toEqual(['8px', '8px']);
    }
    // No header fill: the container's colour shows through.
    await expect(getComputedStyle(head[0]).backgroundColor).toBe('rgba(0, 0, 0, 0)');
  }
}`,...C.parameters?.docs?.source},description:{story:`Every cell, the first and last included, is padded 8px all round. The
header has no fill.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'md'
  },
  beforeEach: () => {
    spyOn(console, 'warn').mockImplementation(() => {});
  },
  play: async () => {
    await expect(console.warn).not.toHaveBeenCalledWith(expect.stringContaining('Table: \`size\`'));
  }
}`,...w.parameters?.docs?.source},description:{story:`Passing the documented default of a deprecated prop is silent: only another value warns.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    density: 'sm',
    columns: textColumns
  },
  play: async ({
    canvas
  }) => {
    // 8px above and below one 20px line of text, and the header's 16px line.
    await expect(cellHeights(canvas)).toEqual([36, 32]);
  }
}`,...T.parameters?.docs?.source},description:{story:"`size` and `density` are deprecated: for one release they are accepted, and `sm` renders as `md`.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    // A total of nothing is noise next to an empty state: no footer row.
    columns: [{
      ...columns[0],
      footer: 'Total'
    }, ...columns.slice(1)],
    emptyState: <EmptyState size="sm" headingLevel={3} icon={<Icon name="search" />} title="No projects match “zeta”" action={<Button size="sm" appearance="outlined" variant="accent">Clear search</Button>} />
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      name: 'No projects match “zeta”'
    })).toBeVisible();
    await expect(canvas.getAllByRole('rowgroup')).toHaveLength(2);
    // No rows, no closing rule: only the header's.
    await expect(getComputedStyle(canvas.getByRole('table')).borderBottomWidth).toBe('0px');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [sort, setSort] = useState<{
      key: string;
      direction: 'ascending' | 'descending';
    } | null>(null);
    const rows = sort ? [...projects].sort((a, b) => a.owner.localeCompare(b.owner) * (sort.direction === 'ascending' ? 1 : -1)) : projects;
    return <Table {...args} rows={rows} sort={sort} onSortChange={setSort} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Owner/
    })).getByRole('button'));
    await expect(canvas.getAllByRole('row')[1]).toHaveTextContent('Ava Stone');
  }
}`,...D.parameters?.docs?.source},description:{story:`Sorted by the caller (e.g. a server): the table reports the sort and shows the rows as given.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    hasStickyHeader: true,
    rows: Array.from({
      length: 20
    }, (_, i) => ({
      ...projects[i % 4],
      id: \`r\${i}\`,
      name: \`\${projects[i % 4].name} \${i + 1}\`
    }))
  },
  decorators: [Story => <div style={{
    blockSize: '20rem',
    display: 'grid'
  }}>{Story()}</div>]
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columns: plainColumns
  },
  decorators: [Story => <div style={{
    inlineSize: '16rem'
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const region = await canvas.findByRole('region', {
      name: 'Projects'
    });
    await expect(region).toHaveAttribute('tabindex', '0');
    // Tab reaches it, with the focus ring; the browser scrolls a focused box with the arrow keys.
    await userEvent.tab();
    await expect(region).toHaveFocus();
    await expect(getComputedStyle(region).outlineStyle).toBe('solid');
  }
}`,...k.parameters?.docs?.source},description:{story:`Too narrow for its columns, with nothing focusable in the cells: the scroll
box becomes the tab stop, a region named by the caption, so keyboard users
can scroll it with the arrow keys.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: NarrowScroll.decorators,
  play: async ({
    canvas
  }) => {
    const box = canvas.getByRole('table', {
      name: 'Projects'
    }).parentElement!;
    await waitFor(() => expect(box.scrollWidth).toBeGreaterThan(box.clientWidth));
    await expect(canvas.queryByRole('region')).toBeNull();
    await expect(box).not.toHaveAttribute('tabindex');
  }
}`,...A.parameters?.docs?.source},description:{story:`Narrow too, but the sort buttons already reach the scroll box: no extra tab stop.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    columns: plainColumns
  },
  play: async ({
    canvas
  }) => {
    const box = canvas.getByRole('table', {
      name: 'Projects'
    }).parentElement!;
    await waitFor(() => expect(box.scrollWidth).toBeLessThanOrEqual(box.clientWidth));
    await expect(canvas.queryByRole('region')).toBeNull();
    await expect(box).not.toHaveAttribute('tabindex');
  }
}`,...j.parameters?.docs?.source},description:{story:`Plain columns that fit: nothing to scroll, so no tab stop.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    expandedContent: details,
    isSelectable: true
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    const atlas = canvas.getByRole('button', {
      name: 'Expand Atlas'
    });
    await step('A row with no content has no button', async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Expand Design tokens'
      })).toBeNull();
    });
    await step('Click opens and closes, aria-expanded follows', async () => {
      await expect(atlas).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(atlas);
      await expect(atlas).toHaveAttribute('aria-expanded', 'true');
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p1']);
      const content = canvas.getByText(/Sam Rivera owns Atlas/);
      await expect(atlas).toHaveAttribute('aria-controls', content.closest('td')!.id);
      // The content spans the whole row, checkbox and button columns included.
      await expect(content.closest('td')).toHaveAttribute('colspan', String(columns.length + 2));
      await userEvent.click(atlas);
      await expect(atlas).toHaveAttribute('aria-expanded', 'false');
      await expect(canvas.queryByText(/Sam Rivera owns Atlas/)).toBeNull();
    });
    await step('Enter and Space toggle from the keyboard', async () => {
      const billing = canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      });
      billing.focus();
      await userEvent.keyboard('{Enter}');
      await expect(billing).toHaveAttribute('aria-expanded', 'true');
      await userEvent.keyboard(' ');
      await expect(billing).toHaveAttribute('aria-expanded', 'false');
      await userEvent.keyboard('{Enter}');
    });
    await step('Sorting keeps the same row open, its content right under it', async () => {
      await userEvent.click(within(canvas.getByRole('columnheader', {
        name: /Files/
      })).getByRole('button'));
      await expect(names(canvas)).toEqual(['Design tokens', 'Billing revamp', 'Atlas', 'Onboarding']);
      const texts = rowTexts(canvas);
      const at = texts.findIndex(t => t.includes('Billing revamp') && !t.includes('owns'));
      await expect(texts[at + 1]).toMatch(/Mia Chen owns Billing revamp/);
      await expect(canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      })).toHaveAttribute('aria-expanded', 'true');
      await expect(canvas.getByRole('button', {
        name: 'Expand Atlas'
      })).toHaveAttribute('aria-expanded', 'false');
    });
    await step('Selecting a row leaves expansion alone', async () => {
      await userEvent.click(canvas.getByRole('checkbox', {
        name: 'Select Billing revamp'
      }));
      await userEvent.click(canvas.getByRole('checkbox', {
        name: 'Select all rows'
      }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(['p2', 'p4', 'p1', 'p3']);
      await expect(canvas.getByRole('button', {
        name: 'Expand Billing revamp'
      })).toHaveAttribute('aria-expanded', 'true');
      await expect(args.onExpandedChange).toHaveBeenLastCalledWith(['p2']);
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    expandedContent: details
  },
  render: function Render(args) {
    const [open, setOpen] = useState<string[]>([]);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'start'
    }}>
        <Button variant="secondary" appearance="outlined" size="sm" onClick={() => setOpen(open.includes('p3') ? [] : ['p3'])}>
          {open.includes('p3') ? 'Close Onboarding' : 'Open Onboarding'}
        </Button>
        <Table {...args} expandedIds={open} onExpandedChange={ids => {
        setOpen(ids);
        args.onExpandedChange?.(ids);
      }} />
      </div>;
  },
  play: async ({
    args,
    canvas
  }) => {
    const onboarding = canvas.getByRole('button', {
      name: 'Expand Onboarding'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open Onboarding'
    }));
    await expect(onboarding).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText(/Leo Park owns Onboarding/)).toBeVisible();
    // The row's own button reports back; the caller decides.
    await userEvent.click(onboarding);
    await expect(args.onExpandedChange).toHaveBeenLastCalledWith([]);
    await expect(onboarding).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByRole('button', {
      name: 'Open Onboarding'
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:"Opened from outside the table: `expandedIds` is the source of truth.",...P.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isSelectable: true,
    expandedContent: details,
    rowActions: actions,
    columns: [...textColumns, {
      key: 'open',
      header: 'Open',
      cell: p => p.id === 'p1' ? <Button appearance="outlined">Open</Button> : null
    }]
  },
  play: async ({
    canvas
  }) => {
    const [atlas, billing] = canvas.getAllByRole('rowheader');
    await expect([atlas.clientHeight, billing.clientHeight]).toEqual([48, 36]);
    await expect(cellHeights(canvas)[1]).toBe(32);
    // No divider: the row is exactly as tall as its cells.
    await expect(billing.closest('tr')!.getBoundingClientRect().height).toBe(36);
  }
}`,...L.parameters?.docs?.source},description:{story:`A row is as tall as what it holds. One line of text is 36px, and the
checkbox, the expand button and the actions button all fit in that; a
32px button in a cell makes its row 48px.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    expandedContent: details,
    defaultExpandedIds: ['p1'],
    rowActions: actions
  },
  play: async ({
    canvas
  }) => {
    const table = canvas.getByRole('table', {
      name: 'Projects'
    }).getBoundingClientRect();
    const expand = canvas.getByRole('button', {
      name: 'Expand Atlas'
    });
    const more = canvas.getByRole('button', {
      name: 'Actions for Atlas'
    });
    await expect(expand.getBoundingClientRect().left).toBeCloseTo(table.left + 8, 0);
    await expect(more.getBoundingClientRect().right).toBeCloseTo(table.right - 8, 0);
    // The open row's content lines up with the cells' text.
    await expect(contentBox(canvas.getByText(/Sam Rivera owns Atlas/)).left).toBeCloseTo(table.left + 8, 0);
    // The cell has no room for an outset ring: the rings are drawn inside the buttons.
    // Tab first, so the focus that follows counts as keyboard focus.
    await userEvent.tab();
    for (const button of [expand, more]) {
      button.focus();
      await expect(getComputedStyle(button).outlineStyle).toBe('solid');
      await expect(getComputedStyle(button).outlineOffset).toBe('-2px');
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`The control columns at the edges: the expand button first, the actions button last, each 8px in from the edge.`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    rowActions: actions,
    isSelectable: true
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('The column has a hidden header, and a row with no items has no button', async () => {
      await expect(canvas.getByRole('columnheader', {
        name: 'Actions'
      })).toBeInTheDocument();
      await expect(canvas.queryByRole('button', {
        name: 'Actions for Design tokens'
      })).toBeNull();
    });
    await step('The button is named after the row and opens its menu', async () => {
      const atlas = canvas.getByRole('button', {
        name: 'Actions for Atlas'
      });
      await expect(atlas).toHaveAttribute('aria-haspopup', 'menu');
      await userEvent.click(atlas);
      await userEvent.click(await page(atlas).findByRole('menuitem', {
        name: 'Archive'
      }));
      await expect(onAction).toHaveBeenLastCalledWith('archive', 'p1');
      await waitFor(() => expect(atlas).toHaveFocus());
    });
    await step('Enter opens it from the keyboard; Escape closes it', async () => {
      const billing = canvas.getByRole('button', {
        name: 'Actions for Billing revamp'
      });
      billing.focus();
      await userEvent.keyboard('{Enter}');
      const menu = await page(billing).findByRole('menu');
      await waitFor(() => expect(menu).toBeVisible());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(billing).toHaveAttribute('aria-expanded', 'false'));
      await waitFor(() => expect(billing).toHaveFocus());
    });
  }
}`,...B.parameters?.docs?.source},description:{story:`A menu at the end of each row, for actions on that one record.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    columns: totalled,
    isSelectable: true,
    expandedContent: details
  },
  play: async ({
    canvas
  }) => {
    const [, body, foot] = canvas.getAllByRole('rowgroup');
    await expect(within(body).getAllByRole('row')).toHaveLength(4);
    // The label is the total row's header, so its cells read "Total, Files".
    await expect(within(foot).getByRole('rowheader', {
      name: 'Total'
    })).toBeInTheDocument();
    await expect(within(foot).getAllByRole('cell').map(c => c.textContent)).toContain('1,464');
    // One cell per column, the checkbox and expand columns included, so it lines up.
    await expect(within(foot).getByRole('row').children).toHaveLength(canvas.getAllByRole('columnheader').length);
    // The header's 1px rule, over the total: 36px of row under it.
    const total = within(foot).getByRole('rowheader', {
      name: 'Total'
    });
    await expect(getComputedStyle(total).borderTopWidth).toBe('1px');
    // The table's closing rule sits under the total row.
    const table = canvas.getByRole('table');
    await expect(getComputedStyle(table).borderBottomWidth).toBe('1px');
    await expect(table.getBoundingClientRect().bottom - total.getBoundingClientRect().bottom).toBe(1);
    await expect(total.clientHeight).toBe(36);
    // Sorting moves the rows, never the total.
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Files/
    })).getByRole('button'));
    await expect(canvas.getAllByRole('row').at(-1)).toHaveTextContent('Total');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    isResizable: true,
    onColumnWidthsChange: fn()
  },
  play: async ({
    args,
    canvas,
    step
  }) => {
    const owner = canvas.getByRole('columnheader', {
      name: /Owner/
    });
    const handle = canvas.getByRole('separator', {
      name: 'Resize Owner'
    });
    await step('Every column header has a focusable vertical separator with its width as the value', async () => {
      await expect(canvas.getAllByRole('separator')).toHaveLength(columns.length);
      await expect(handle).toHaveAttribute('aria-orientation', 'vertical');
      await expect(handle).toHaveAttribute('aria-valuemin', '48');
      await expect(handle).toHaveAttribute('aria-valuemax', '1200');
      await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBe(Math.round(owner.getBoundingClientRect().width)));
    });
    await step('Arrow Right widens the column by 16px, Arrow Left narrows it', async () => {
      handle.focus();
      const before = Number(handle.getAttribute('aria-valuenow'));
      await userEvent.keyboard('{ArrowRight}');
      await expect(handle).toHaveAttribute('aria-valuenow', String(before + 16));
      await expect(args.onColumnWidthsChange).toHaveBeenLastCalledWith({
        owner: before + 16
      });
      await waitFor(() => expect(Math.round(owner.getBoundingClientRect().width)).toBe(before + 16));
      await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
      await expect(handle).toHaveAttribute('aria-valuenow', String(before - 16));
    });
    await step('End sets the widest width, Home the narrowest', async () => {
      await userEvent.keyboard('{End}');
      await expect(handle).toHaveAttribute('aria-valuenow', '1200');
      await userEvent.keyboard('{Home}');
      await expect(handle).toHaveAttribute('aria-valuenow', '48');
      await waitFor(() => expect(Math.round(owner.getBoundingClientRect().width)).toBe(48));
    });
    await step('Dragging the handle resizes by the distance moved', async () => {
      const files = canvas.getByRole('separator', {
        name: 'Resize Files'
      });
      const th = canvas.getByRole('columnheader', {
        name: /Files/
      });
      const from = Math.round(th.getBoundingClientRect().width);
      const {
        x,
        y
      } = files.getBoundingClientRect();
      await userEvent.pointer([{
        keys: '[MouseLeft>]',
        target: files,
        coords: {
          clientX: x,
          clientY: y
        }
      }, {
        target: files,
        coords: {
          clientX: x + 40,
          clientY: y
        }
      }, {
        keys: '[/MouseLeft]',
        target: files,
        coords: {
          clientX: x + 40,
          clientY: y
        }
      }]);
      await expect(files).toHaveAttribute('aria-valuenow', String(from + 40));
      await waitFor(() => expect(Math.round(th.getBoundingClientRect().width)).toBe(from + 40));
    });
  }
}`,...H.parameters?.docs?.source},description:{story:`Drag or arrow-key a header's end edge to resize its column.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isResizable: true
  },
  render: args => <div dir="rtl">
      <Table {...args} />
    </div>,
  play: async ({
    canvas
  }) => {
    const handle = canvas.getByRole('separator', {
      name: 'Resize Owner'
    });
    await waitFor(() => expect(Number(handle.getAttribute('aria-valuenow'))).toBeGreaterThan(48));
    const before = Number(handle.getAttribute('aria-valuenow'));
    handle.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(handle).toHaveAttribute('aria-valuenow', String(before + 16));
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await expect(handle).toHaveAttribute('aria-valuenow', String(before - 16));
  }
}`,...U.parameters?.docs?.source},description:{story:`Right to left: the handle is on the header's left edge, so Arrow Left widens.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    isResizable: true,
    columnWidths: {
      name: 200
    },
    onColumnWidthsChange: fn()
  },
  play: async ({
    args,
    canvas
  }) => {
    const handle = canvas.getByRole('separator', {
      name: 'Resize Project'
    });
    await expect(handle).toHaveAttribute('aria-valuenow', '200');
    handle.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(args.onColumnWidthsChange).toHaveBeenLastCalledWith({
      name: 216
    });
    // Not stored by the caller, so it stays where it was.
    await expect(handle).toHaveAttribute('aria-valuenow', '200');
  }
}`,...W.parameters?.docs?.source},description:{story:`Widths owned by the caller: the handle reports, the caller decides.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    showCaption: true,
    isSelectable: true,
    expandedContent: details,
    defaultExpandedIds: ['p1'],
    rowActions: actions,
    // Every project, so the total matches the rows on screen.
    columns: totalled
  },
  play: async ({
    canvasElement,
    canvas
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[7]).toHaveTextContent('Atlas');
    await expect(found[9]).toHaveTextContent(/Sam Rivera owns Atlas/);
    await expect(found[10]).toHaveTextContent('Total');
    // Cells padded 8px all round, the caption 24px from the top and 8px from the table.
    const cell = getComputedStyle(found[7]);
    await expect([cell.paddingTop, cell.paddingRight, cell.paddingBottom, cell.paddingLeft]).toEqual(['8px', '8px', '8px', '8px']);
    const caption = getComputedStyle(found[0]);
    await expect([caption.paddingTop, caption.paddingBottom]).toEqual(['24px', '8px']);
    // 8px in from the table's edges, as the cells' text: the caption and the checkbox at the start, the actions button at the end.
    const table = canvas.getByRole('table').getBoundingClientRect();
    await expect(contentBox(found[0]).left).toBeCloseTo(table.left + 8, 0);
    await expect(found[5].getBoundingClientRect().left).toBeCloseTo(table.left + 8, 0);
    await expect(found[8].getBoundingClientRect().right).toBeCloseTo(table.right - 8, 0);
    // The checkbox column is the 16px box with 8px either side; the expand column, its 24px button with 8px either side.
    await expect([found[5].closest('td')!.clientWidth, found[6].closest('td')!.clientWidth]).toEqual([32, 40]);
    await expect(canvas.getByRole('columnheader', {
      name: 'Actions'
    })).toBeInTheDocument();
    // The expand column is announced like the others, by a hidden header.
    await expect(canvas.getByRole('columnheader', {
      name: 'Details'
    })).toBeInTheDocument();
  }
}`,...K.parameters?.docs?.source},description:{story:`Every part present: caption shown, a sortable column, selection, one row open, row actions, a total.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: brief
}`,...J.parameters?.docs?.source},description:{story:`Specs, States: the plain table.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    defaultSort: {
      key: 'files',
      direction: 'ascending'
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`Specs, States: sorted by Files, ascending.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    isSelectable: true,
    defaultSelectedIds: ['p1']
  }
}`,...X.parameters?.docs?.source},description:{story:`Specs, States: Atlas selected.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...brief,
    expandedContent: details,
    defaultExpandedIds: ['p1']
  }
}`,...Z.parameters?.docs?.source},description:{story:`Specs, States: Atlas open.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    columns: columns.map(({
      align: _align,
      ...c
    }) => c)
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Don't: numbers at the start, so the digits do not line up.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    isSelectable: true,
    columns: columns.map(({
      isRowHeader: _isRowHeader,
      ...c
    }) => c)
  },
  play: async ({
    canvas
  }) => {
    // Counted from \`rows\`, so a sort does not rename it; but "row 1" says nothing.
    await expect(canvas.getByRole('checkbox', {
      name: 'Select row 1'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('rowheader')).toBeNull();
    // Sorted by Files, Atlas moves to the third row and keeps its name.
    await userEvent.click(within(canvas.getByRole('columnheader', {
      name: /Files/
    })).getByRole('button'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Select row 1'
    }).closest('tr')).toHaveTextContent('Atlas');
    await expect(canvas.getAllByRole('row')[3]).toHaveTextContent('Atlas');
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: no row header, so a row's checkbox can only say which number it is.`,...$.parameters?.docs?.description}}}})))()}export{be as S,Y as _,$ as a,V as b,S as c,H as d,B as f,X as g,Z as h,y as i,N as l,J as m,P as n,Q as o,b as p,D as r,E as s,K as t,x as u,O as v,G as x,le as y};