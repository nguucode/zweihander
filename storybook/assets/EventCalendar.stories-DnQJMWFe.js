import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-Bwi4V5f1.js";import{n as c,t as l}from"./icon-C9aTyDDd.js";import{n as ee,t as te}from"./Select-BsYPTVUS.js";import{a as ne,i as re,n as u,o as d,r as ie,s as f,t as ae}from"./Calendar-Am29Cy43.js";var oe,se,ce,p,le,ue,de,fe,pe,m,me,he,h,g,_,v,y,b,x,S,C,w,ge,_e,T,E,ve,ye,be,xe,D,Se,Ce,we,Te,Ee,O;function De(){return(De=e((()=>{oe=`_root_1fv9v_4`,se=`_header_1fv9v_18`,ce=`_title_1fv9v_25`,p=`_nav_1fv9v_33`,le=`_actions_1fv9v_34`,ue=`_viewSelect_1fv9v_41`,de=`_eventSlot_1fv9v_48`,fe=`_event_1fv9v_48`,pe=`_eventTitle_1fv9v_79`,m=`_time_1fv9v_88`,me=`_dayNumber_1fv9v_93`,he=`_more_1fv9v_94`,h=`_month_1fv9v_101`,g=`_weekday_1fv9v_107`,_=`_cell_1fv9v_118`,v=`_today_1fv9v_155`,y=`_cellEvents_1fv9v_168`,b=`_allDayEvents_1fv9v_169`,x=`_listEvents_1fv9v_170`,S=`_column_1fv9v_171`,C=`_dots_1fv9v_198`,w=`_dot_1fv9v_198`,ge=`_timeGrid_1fv9v_231`,_e=`_dayHeads_1fv9v_241`,T=`_allDay_1fv9v_169`,E=`_scroller_1fv9v_243`,ve=`_dayHead_1fv9v_241`,ye=`_headNumber_1fv9v_264`,be=`_allDayLabel_1fv9v_275`,xe=`_hours_1fv9v_297`,D=`_hour_1fv9v_297`,Se=`_year_1fv9v_339`,Ce=`_eventList_1fv9v_354`,we=`_listTitle_1fv9v_361`,Te=`_empty_1fv9v_380`,Ee=`_dirIcon_1fv9v_403`,O={root:oe,header:se,title:ce,nav:p,actions:le,viewSelect:ue,eventSlot:de,event:fe,eventTitle:pe,time:m,dayNumber:me,more:he,month:h,weekday:g,cell:_,today:v,cellEvents:y,allDayEvents:b,listEvents:x,column:S,dots:C,dot:w,timeGrid:ge,dayHeads:_e,allDay:T,scroller:E,dayHead:ve,headNumber:ye,allDayLabel:be,hours:xe,hour:D,year:Se,eventList:Ce,listTitle:we,empty:Te,dirIcon:Ee}})))()}function Oe(e){let t=[...e].sort((e,t)=>e.start.getTime()-t.start.getTime()||M(t)-M(e)),n=[],r=[],i=[],a=-1/0,o=()=>{for(let e of r)e.cols=i.length;r=[],i=[]};for(let e of t){let t=e.start.getTime();t>=a&&o();let s=i.findIndex(e=>e<=t);s<0&&(s=i.push(0)-1),i[s]=M(e),a=Math.max(a,M(e));let c={event:e,col:s,cols:0};r.push(c),n.push(c)}return o(),n}function ke({events:e,view:t,defaultView:n=`month`,onViewChange:r,views:a=Ae,date:o,defaultDate:c,onDateChange:ee,onEventClick:ne,actions:oe,hasEventList:se=!1,headingLevel:ce=2,locale:p,weekStartsOn:le,className:ue,...de}){let[fe,pe]=(0,k.useState)(n),m=t??fe,[me,he]=(0,k.useState)(()=>f(c??new Date)),h=o?f(o):me,g=f(new Date),_=le??re(p),v=(0,k.useId)(),y=(0,k.useRef)(null),b=(0,k.useRef)(null),x=(0,k.useRef)(!1),S=(0,k.useMemo)(()=>{let e=e=>new Intl.DateTimeFormat(p,{calendar:`gregory`,...e});return{month:e({month:`long`,year:`numeric`}),range:e({month:`short`,day:`numeric`,year:`numeric`}),full:e({dateStyle:`full`}),year:e({year:`numeric`}),weekday:e({weekday:`short`}),weekdayLong:e({weekday:`long`}),day:e({day:`numeric`}),time:e({timeStyle:`short`}),hour:e({hour:`numeric`})}},[p]),C=e=>{pe(e),r?.(e)},w=e=>{he(f(e)),ee?.(f(e))},ge=e=>{w(e),a.includes(`day`)?C(`day`):a.includes(`month`)&&C(`month`)},_e=u(h,-((h.getDay()-_+7)%7)),T=m===`week`?Array.from({length:7},(e,t)=>u(_e,t)):[h],E=t=>e.filter(e=>Fe(e,t)).sort(Ie),ve=e=>w(m===`month`?ie(h,e):m===`year`?ie(h,12*e):u(h,m===`week`?7*e:e)),ye=m===`month`?S.month.format(h):m===`year`?S.year.format(h):m===`week`?S.range.formatRange(T[0],T[6]):S.full.format(h),be=T.map(e=>e.getTime()).join();(0,k.useEffect)(()=>{let e=b.current;if(!e)return;let t=T.flatMap(e=>E(e).filter(e=>!j(e)).map(e=>e.start.getHours()));e.scrollTop=(t.length?Math.max(Math.min(...t)-1,0):8)/24*e.scrollHeight},[m,be]),(0,k.useEffect)(()=>{x.current&&(x.current=!1,y.current?.querySelector(`[data-day][tabindex="0"]`)?.focus())});let xe=e=>{if(!e.target.hasAttribute(`data-day`))return;let t=getComputedStyle(e.currentTarget).direction===`rtl`?-1:1,n={ArrowLeft:-t,ArrowRight:t,ArrowUp:-7,ArrowDown:7}[e.key];n&&(e.preventDefault(),x.current=!0,w(u(h,n)))},D=(e,t=!0,n)=>{let r=(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:O.eventTitle,children:e.title}),` `,t&&!j(e)&&(0,A.jsx)(`time`,{dateTime:e.start.toISOString(),className:O.time,children:S.time.format(e.start)})]}),i={className:O.event,style:Le(e.color)};return(0,A.jsx)(`li`,{className:O.eventSlot,style:n,children:e.href?(0,A.jsx)(`a`,{...i,href:e.href,children:r}):ne?(0,A.jsx)(`button`,{...i,type:`button`,onClick:()=>ne(e),children:r}):(0,A.jsx)(`span`,{...i,children:r})},e.id)},Se=`h${ce}`,Ce=`h${ce+1}`,we=()=>{let e=new Date(h.getFullYear(),h.getMonth(),1),t=(e.getDay()-_+7)%7,n=new Date(h.getFullYear(),h.getMonth()+1,0).getDate(),r=u(e,-t),i=Array.from({length:Math.ceil((t+n)/7)},(e,t)=>Array.from({length:7},(e,n)=>u(r,t*7+n))),o=a.includes(`day`)||se?Me:1/0;return(0,A.jsxs)(`table`,{className:O.month,"aria-labelledby":v,onKeyDown:xe,children:[(0,A.jsx)(`thead`,{children:(0,A.jsx)(`tr`,{children:i[0].map(e=>(0,A.jsx)(`th`,{scope:`col`,abbr:S.weekdayLong.format(e),className:O.weekday,children:S.weekday.format(e)},e.getDay()))})}),(0,A.jsx)(`tbody`,{children:i.map((e,t)=>(0,A.jsx)(`tr`,{children:e.map(e=>{let t=E(e),n=t.length>o?t.slice(0,o-1):t,r=t.length-n.length;return(0,A.jsxs)(`td`,{className:O.cell,"data-outside":e.getMonth()!==h.getMonth()||void 0,children:[(0,A.jsx)(`button`,{type:`button`,"data-day":``,tabIndex:d(e,h)?0:-1,"aria-label":S.full.format(e)+(t.length?`, ${t.length} ${t.length===1?`event`:`events`}`:``),"aria-pressed":d(e,h),"aria-current":d(e,g)?`date`:void 0,className:O.dayNumber,onClick:()=>w(e),children:S.day.format(e)}),t.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:O.dots,"aria-hidden":`true`,children:t.slice(0,Me).map(e=>(0,A.jsx)(`span`,{className:O.dot,style:Le(e.color)},e.id))}),(0,A.jsxs)(`ul`,{className:O.cellEvents,children:[n.map(e=>D(e)),r>0&&(0,A.jsx)(`li`,{children:(0,A.jsxs)(`button`,{type:`button`,className:O.more,"aria-label":`${r} more on ${S.full.format(e)}`,onClick:()=>ge(e),children:[r,` more`]})})]})]})]},e.getTime())})},t))})]})},Te=()=>{let e=T.map(e=>E(e).filter(j));return(0,A.jsxs)(`div`,{className:O.timeGrid,style:{"--days":T.length},children:[T.length>1&&(0,A.jsx)(`div`,{className:O.dayHeads,"aria-hidden":`true`,children:T.map(e=>(0,A.jsxs)(`div`,{className:O.dayHead,children:[S.weekday.format(e),` `,(0,A.jsx)(`span`,{className:i(O.headNumber,d(e,g)&&O.today),children:S.day.format(e)})]},e.getTime()))}),e.some(e=>e.length>0)&&(0,A.jsxs)(`div`,{className:O.allDay,children:[(0,A.jsx)(`span`,{className:O.allDayLabel,children:`All day`}),T.map((t,n)=>(0,A.jsx)(`ul`,{className:O.allDayEvents,"aria-label":`All day, ${S.full.format(t)}`,children:e[n].map(e=>D(e,!1))},t.getTime()))]}),(0,A.jsxs)(`div`,{ref:b,className:O.scroller,tabIndex:0,role:`group`,"aria-label":`Schedule`,children:[(0,A.jsx)(`div`,{className:O.hours,"aria-hidden":`true`,children:Array.from({length:24},(e,t)=>(0,A.jsx)(`span`,{className:O.hour,children:t>0&&S.hour.format(new Date(2e3,0,1,t))},t))}),T.map(e=>{let t=u(e,1).getTime(),n=n=>{if(n<=e.getTime())return 0;if(n>=t)return 100;let r=new Date(n);return(r.getHours()+r.getMinutes()/60)/24*100};return(0,A.jsx)(`ul`,{className:O.column,"aria-label":S.full.format(e),children:Oe(E(e).filter(e=>!j(e))).map(({event:e,col:t,cols:r})=>{let i=n(e.start.getTime());return D(e,!0,{insetBlockStart:`${i}%`,blockSize:`${n(M(e))-i}%`,insetInlineStart:`${t/r*100}%`,inlineSize:`${100/r}%`})})},e.getTime())})]})]})},Ee=()=>(0,A.jsx)(`div`,{className:O.year,children:Array.from({length:12},(e,t)=>{let n=new Date(h.getFullYear(),t,1);return(0,A.jsx)(ae,{month:n,min:n,max:new Date(h.getFullYear(),t+1,0),value:h.getMonth()===t?h:null,onValueChange:ge,locale:p,weekStartsOn:_},t)})}),De=E(h);return(0,A.jsxs)(`div`,{ref:y,className:i(O.root,ue),"data-view":m,...de,children:[(0,A.jsxs)(`div`,{className:O.header,children:[(0,A.jsx)(Se,{id:v,className:O.title,"aria-live":`polite`,children:ye}),(0,A.jsxs)(`div`,{className:O.nav,children:[(0,A.jsx)(s,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Previous ${m}`,onClick:()=>ve(-1),children:(0,A.jsx)(l,{name:`chevron-left`,className:O.dirIcon})}),(0,A.jsx)(s,{variant:`secondary`,appearance:`outlined`,onClick:()=>w(g),children:`Today`}),(0,A.jsx)(s,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Next ${m}`,onClick:()=>ve(1),children:(0,A.jsx)(l,{name:`chevron-right`,className:O.dirIcon})})]}),a.length>1&&(0,A.jsx)(te,{"aria-label":`View`,className:O.viewSelect,options:a.map(e=>({value:e,label:je[e]})),value:m,onValueChange:e=>e&&C(e)}),oe!=null&&(0,A.jsx)(`div`,{className:O.actions,children:oe})]}),m===`month`?we():m===`year`?Ee():Te(),se&&m===`month`&&(0,A.jsxs)(`div`,{className:O.eventList,children:[(0,A.jsx)(Ce,{className:O.listTitle,children:S.full.format(h)}),De.length?(0,A.jsx)(`ul`,{className:O.listEvents,children:De.map(e=>D(e))}):(0,A.jsx)(`p`,{className:O.empty,children:`No events`})]})]})}var k,A,Ae,je,Me,Ne,Pe,Fe,j,M,Ie,Le;function Re(){return(Re=e((()=>{k=n(),c(),r(),o(),ne(),ee(),De(),A=a(),Ae=[`day`,`week`,`month`,`year`],je={day:`Day`,week:`Week`,month:`Month`,year:`Year`},Me=3,Ne=18e5,Pe=e=>{let t=e.end??e.start;return t<=e.start?e.start:e.allDay?t:new Date(t.getTime()-1)},Fe=(e,t)=>f(e.start)<=t&&t<=f(Pe(e)),j=e=>!!e.allDay||!d(e.start,Pe(e)),M=e=>Math.max((e.end??e.start).getTime(),e.start.getTime()+Ne),Ie=(e,t)=>Number(j(t))-Number(j(e))||e.start.getTime()-t.start.getTime(),Le=(e=`info`)=>e===`neutral`?{"--event-subtle":`var(--secondary)`,"--event-text":`var(--secondary-foreground)`,"--event-solid":`var(--foreground)`}:{"--event-subtle":`var(--${e}-subtle)`,"--event-text":`var(--${e}-text)`,"--event-solid":`var(--${e})`},ke.__docgenInfo={description:`Events on a day, week, month or year grid, with a header to move
through time and switch views. Owns no events: it shows what it is given.`,methods:[],displayName:`EventCalendar`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`CalendarEvent`}],raw:`CalendarEvent[]`},description:`The events to show. The calendar picks those that fall in view; it never changes them.`},view:{required:!1,tsType:{name:`union`,raw:`'day' | 'week' | 'month' | 'year'`,elements:[{name:`literal`,value:`'day'`},{name:`literal`,value:`'week'`},{name:`literal`,value:`'month'`},{name:`literal`,value:`'year'`}]},description:`The view shown, when you control it.`},defaultView:{required:!1,tsType:{name:`union`,raw:`'day' | 'week' | 'month' | 'year'`,elements:[{name:`literal`,value:`'day'`},{name:`literal`,value:`'week'`},{name:`literal`,value:`'month'`},{name:`literal`,value:`'year'`}]},description:``,defaultValue:{value:`'month'`,computed:!1}},onViewChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(view: EventCalendarView) => void`,signature:{arguments:[{type:{name:`union`,raw:`'day' | 'week' | 'month' | 'year'`,elements:[{name:`literal`,value:`'day'`},{name:`literal`,value:`'week'`},{name:`literal`,value:`'month'`},{name:`literal`,value:`'year'`}]},name:`view`}],return:{name:`void`}}},description:``},views:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`'day' | 'week' | 'month' | 'year'`,elements:[{name:`literal`,value:`'day'`},{name:`literal`,value:`'week'`},{name:`literal`,value:`'month'`},{name:`literal`,value:`'year'`}]}],raw:`EventCalendarView[]`},description:`The views offered in the switch, in its order. One view hides the switch.`,defaultValue:{value:`['day', 'week', 'month', 'year']`,computed:!1}},date:{required:!1,tsType:{name:`Date`},description:`The selected day; the view shows the day, week, month or year around it.`},defaultDate:{required:!1,tsType:{name:`Date`},description:``},onDateChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => void`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`void`}}},description:``},onEventClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: CalendarEvent) => void`,signature:{arguments:[{type:{name:`CalendarEvent`},name:`event`}],return:{name:`void`}}},description:"Makes events without `href` buttons, e.g. to open them in a Drawer."},actions:{required:!1,tsType:{name:`ReactNode`},description:`At the end of the header, e.g. an "Add event" Button.`},hasEventList:{required:!1,tsType:{name:`boolean`},description:`Lists the selected day's events under the month view. A narrow month shows dots, so this is where its events are read.`,defaultValue:{value:`false`,computed:!1}},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:`The level of the title (the month, week, day or year shown).`,defaultValue:{value:`2`,computed:!1}},locale:{required:!1,tsType:{name:`string`},description:"BCP 47 tag, e.g. `vi-VN`. Defaults to the browser's."},weekStartsOn:{required:!1,tsType:{name:`number`},description:`0 = Sunday … 6 = Saturday. Defaults to the locale's.`}},composes:[`Omit`]}})))()}var ze=t({Clickable:()=>J,Day:()=>U,Empty:()=>Q,Keyboard:()=>q,LongTitle:()=>Z,Month:()=>V,Narrow:()=>X,Navigate:()=>G,RightToLeft:()=>$,SwitchView:()=>K,Week:()=>H,WithEventList:()=>Y,Year:()=>W,__namedExportsOrder:()=>Ve,default:()=>Be}),N,P,F,I,L,R,z,B,Be,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ve;function He(){return(He=e((()=>{c(),o(),Re(),N=a(),{expect:P,fn:F,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,z=(e,t=0,n=0)=>new Date(2022,0,e,t,n),B=[{id:1,title:`Design review`,start:z(3,10),end:z(3,11),color:`blue`},{id:2,title:`Sales meeting`,start:z(3,14),end:z(3,15),color:`pink`},{id:3,title:`Date night`,start:z(7,18),end:z(7,21),color:`violet`},{id:4,title:`Sam's birthday party`,start:z(12,14),end:z(12,17),color:`amber`},{id:5,title:`Maple syrup museum`,start:z(22,15),end:z(22,16),color:`teal`},{id:6,title:`Hockey game`,start:z(22,19),end:z(22,21),color:`red`},{id:7,title:`Cinema with friends`,start:z(22,21),end:z(22,23),color:`indigo`},{id:8,title:`Quarter close`,start:z(24),end:z(26),allDay:!0,color:`neutral`},{id:9,title:`Standup`,start:z(25,9),end:z(25,9,15),color:`green`},{id:10,title:`Budget planning`,start:z(25,9),end:z(25,11),color:`orange`},{id:11,title:`Vendor call`,start:z(25,10),end:z(25,10,30),color:`sky`},{id:12,title:`Lunch`,start:z(25,12),end:z(25,13),color:`lime`},{id:13,title:`Sales kickoff`,start:z(31,9),end:z(31,17),color:`pink`}],Be={title:`Patterns/Application UI/Event Calendar`,tags:[`experimental`],component:ke,parameters:{layout:`padded`},args:{events:B,defaultDate:z(22),locale:`en-US`,weekStartsOn:0},argTypes:{events:{description:"The events: `{ id, title, start, end?, allDay?, color?, href? }`. `end` is exclusive for a timed event and the last day for an all-day one; `color` is a Tag variant. Timed events crossing midnight go to the all-day row.",control:!1},view:{description:`The view shown, when you control it.`,control:`inline-radio`,options:[`day`,`week`,`month`,`year`]},defaultView:{description:`The view shown first, when you do not control it.`,control:`inline-radio`,options:[`day`,`week`,`month`,`year`],table:{defaultValue:{summary:`month`}}},onViewChange:{description:`Called with the new view when the viewer switches, or opens a day from the year or "n more".`},views:{description:`The views the switch offers, in its order. With one, the switch is gone.`,control:`object`,table:{defaultValue:{summary:`['day', 'week', 'month', 'year']`}}},date:{description:`The selected day, when you control it. The view shows the day, week, month or year around it.`,control:`date`},defaultDate:{description:`The selected day first, when you do not control it.`,control:`date`,table:{defaultValue:{summary:`today`}}},onDateChange:{description:`Called with the new day (local midnight) on a click, an arrow key, Previous, Next or Today.`},onEventClick:{description:"Makes events without `href` buttons and runs on a click, e.g. to open the event in a Drawer."},actions:{description:`At the end of the header, e.g. an "Add event" Button.`,control:!1},hasEventList:{description:`Lists the selected day's events under the month. A narrow month shows dots, not titles: turn it on where the calendar can be narrow.`,control:`boolean`,table:{defaultValue:{summary:`false`}}},headingLevel:{description:`The level of the title (the month, week, day or year shown). The event list under the month takes the next level.`,control:`inline-radio`,options:[2,3,4],table:{defaultValue:{summary:`2`}}},locale:{description:"BCP 47 tag, e.g. `vi-VN`, for names, dates and times. Defaults to the browser's.",control:`text`},weekStartsOn:{description:`0 = Sunday … 6 = Saturday. Defaults to the locale's.`,control:{type:`number`,min:0,max:6}}}},V={args:{actions:(0,N.jsx)(s,{startIcon:(0,N.jsx)(l,{name:`plus`}),children:`Add event`})},play:async({canvas:e})=>{await P(e.getByRole(`heading`,{level:2,name:`January 2022`})).toBeVisible();let t=e.getByRole(`table`,{name:`January 2022`});await P(R(t).getAllByRole(`columnheader`)[0]).toHaveTextContent(`Sun`),await P(e.getByRole(`button`,{name:`Saturday, January 22, 2022, 3 events`})).toHaveAttribute(`aria-pressed`,`true`);let n=e.getByRole(`button`,{name:`Tuesday, January 25, 2022, 5 events`}).closest(`td`);await P(R(n).getByText(`Quarter close`)).toBeVisible(),await P(R(n).getByText(`9:00 AM`)).toBeVisible(),await P(R(n).getByRole(`button`,{name:`3 more on Tuesday, January 25, 2022`})).toHaveTextContent(`3 more`);for(let t of[24,25,26]){let n=e.getByRole(`button`,{name:RegExp(`^\\w+day, January ${t}, 2022`)}).closest(`td`);await P(R(n).getByText(`Quarter close`)).toBeVisible()}await P(e.getByRole(`button`,{name:`Add event`})).toBeVisible()}},H={args:{defaultView:`week`,defaultDate:z(25)},play:async({canvas:e})=>{await P(e.getByRole(`heading`,{level:2,name:`Jan 23 – 29, 2022`})).toBeVisible();let t=e.getByRole(`list`,{name:`Tuesday, January 25, 2022`}),n=e=>R(t).getByText(e).closest(`li`).getBoundingClientRect();await L(async()=>{let[e,t,r,i]=[`Standup`,`Budget planning`,`Vendor call`,`Lunch`].map(n);await P(Math.round(t.width)).toBe(Math.round(e.width)),await P(Math.abs(t.right-e.left)<1||Math.abs(e.right-t.left)<1).toBe(!0),await P(Math.round(r.left)).toBe(Math.round(e.left)),await P(r.top).toBeGreaterThanOrEqual(e.bottom-1),await P(i.width).toBeGreaterThan(t.width*1.8),await P(Math.abs(t.height-2*i.height)).toBeLessThan(2)}),await P(R(e.getByRole(`list`,{name:`All day, Monday, January 24, 2022`})).getByText(`Quarter close`)).toBeVisible(),await P(R(e.getByRole(`list`,{name:`All day, Wednesday, January 26, 2022`})).getByText(`Quarter close`)).toBeVisible(),await P(R(e.getByRole(`list`,{name:`All day, Thursday, January 27, 2022`})).queryByText(`Quarter close`)).toBeNull();let r=t.parentElement;await L(()=>P(r.scrollTop).toBeGreaterThan(0)),await P(R(t).getByText(`Standup`).closest(`li`).getBoundingClientRect().top).toBeGreaterThanOrEqual(r.getBoundingClientRect().top-1)}},U={args:{defaultView:`day`,defaultDate:z(22)},play:async({canvas:e})=>{await P(e.getByRole(`heading`,{level:2,name:`Saturday, January 22, 2022`})).toBeVisible();let t=e.getByRole(`list`,{name:`Saturday, January 22, 2022`});await P(R(t).getAllByRole(`listitem`)).toHaveLength(3),await I.click(e.getByRole(`button`,{name:`Next day`})),await P(e.getByRole(`heading`,{level:2,name:`Sunday, January 23, 2022`})).toBeVisible(),await P(R(e.getByRole(`list`,{name:`Sunday, January 23, 2022`})).queryAllByRole(`listitem`)).toHaveLength(0);let n=e.getByRole(`group`,{name:`Schedule`});await P(n).toHaveAttribute(`tabindex`,`0`),await L(()=>P(Math.abs(n.scrollTop-8/24*n.scrollHeight)).toBeLessThan(2))}},W={args:{defaultView:`year`,onViewChange:F(),onDateChange:F()},play:async({canvas:e,args:t})=>{await P(e.getByRole(`heading`,{level:2,name:`2022`})).toBeVisible(),await P(e.getAllByRole(`grid`)).toHaveLength(12),await P(e.queryByRole(`button`,{name:`Previous month`})).toBeNull(),await I.click(e.getByRole(`button`,{name:`Friday, March 4, 2022`})),await P(t.onViewChange).toHaveBeenCalledWith(`day`),await P(t.onDateChange).toHaveBeenCalledWith(new Date(2022,2,4)),await P(e.getByRole(`heading`,{level:2,name:`Friday, March 4, 2022`})).toBeVisible()}},G={args:{onDateChange:F()},play:async({canvas:e,args:t})=>{let n=e.getByRole(`heading`,{level:2});await P(n).toHaveAttribute(`aria-live`,`polite`),await I.click(e.getByRole(`button`,{name:`Next month`})),await P(n).toHaveTextContent(`February 2022`),await I.click(e.getByRole(`button`,{name:`Previous month`})),await I.click(e.getByRole(`button`,{name:`Previous month`})),await P(n).toHaveTextContent(`December 2021`),await I.click(e.getByRole(`button`,{name:`Today`}));let r=new Date;await P(t.onDateChange).toHaveBeenLastCalledWith(new Date(r.getFullYear(),r.getMonth(),r.getDate())),await P(n).toHaveTextContent(new Intl.DateTimeFormat(`en-US`,{month:`long`,year:`numeric`}).format(r)),await P(e.getByRole(`button`,{name:/,|^\d/,current:`date`})).toBeVisible()}},K={play:async({canvas:e,canvasElement:t})=>{await I.click(e.getByRole(`combobox`,{name:`View`}));let n=R(t.ownerDocument.body);await I.click(await n.findByRole(`option`,{name:`Week`})),await L(()=>P(n.queryByRole(`listbox`)).toBeNull()),await P(e.getByRole(`heading`,{level:2,name:`Jan 16 – 22, 2022`})).toBeVisible(),await P(e.getByRole(`button`,{name:`Next week`})).toBeVisible(),await P(e.getAllByRole(`list`,{name:/^(Sun|Mon|Tues|Wednes|Thurs|Fri|Satur)day/})).toHaveLength(7)}},q={play:async({canvas:e})=>{let t=t=>e.getByRole(`button`,{name:RegExp(`^${t}`)});await P(t(`Saturday, January 22`)).toHaveAttribute(`tabindex`,`0`),await P(t(`Friday, January 21`)).toHaveAttribute(`tabindex`,`-1`),t(`Saturday, January 22`).focus(),await I.keyboard(`{ArrowLeft}`),await P(t(`Friday, January 21`)).toHaveFocus(),await P(t(`Friday, January 21`)).toHaveAttribute(`aria-pressed`,`true`),await I.keyboard(`{ArrowDown}{ArrowDown}`),await P(t(`Friday, February 4`)).toHaveFocus(),await P(e.getByRole(`heading`,{level:2})).toHaveTextContent(`February 2022`),await I.keyboard(`{ArrowUp}{ArrowUp}{ArrowUp}`),await P(t(`Friday, January 14`)).toHaveFocus(),await I.keyboard(`{ArrowLeft}{ArrowLeft}{Tab}`),await P(e.getByText(`Sam's birthday party`).closest(`li`)).toContainElement(document.activeElement)},args:{onEventClick:F()}},J={args:{onEventClick:F(),events:B.map(e=>e.id===3?{...e,href:`#date-night`}:e)},play:async({canvas:e,args:t})=>{await I.click(e.getByRole(`button`,{name:`Design review 10:00 AM`})),await P(t.onEventClick).toHaveBeenCalledWith(B[0]),await P(e.getByRole(`link`,{name:`Date night 6:00 PM`})).toHaveAttribute(`href`,`#date-night`)}},Y={args:{hasEventList:!0,views:[`month`]},play:async({canvas:e})=>{await P(e.queryByRole(`combobox`,{name:`View`})).toBeNull(),await P(e.getByRole(`heading`,{level:3,name:`Saturday, January 22, 2022`})).toBeVisible(),await P(R(e.getByRole(`heading`,{level:3}).nextElementSibling).getAllByRole(`listitem`)).toHaveLength(3),await I.click(e.getByRole(`button`,{name:`Tuesday, January 4, 2022`})),await P(e.getByRole(`heading`,{level:3})).toHaveTextContent(`Tuesday, January 4, 2022`),await P(e.getByText(`No events`)).toBeVisible()}},X={args:{hasEventList:!0,actions:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{variant:`secondary`,appearance:`outlined`,children:`Export`}),(0,N.jsx)(s,{startIcon:(0,N.jsx)(l,{name:`plus`}),children:`Add event`})]})},decorators:[e=>(0,N.jsx)(`div`,{style:{inlineSize:320},children:e()})],play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:`Saturday, January 22, 2022, 3 events`}).closest(`td`);await L(()=>P(n.querySelector(`ul`)).not.toBeVisible()),await P(n.querySelectorAll(`[aria-hidden="true"] > span`)).toHaveLength(3);let r=e.getByRole(`heading`,{level:3}).nextElementSibling;await P(R(r).getByText(`Hockey game`)).toBeVisible();let i=t.firstElementChild.firstElementChild;await L(()=>P(i.scrollWidth).toBeLessThanOrEqual(i.clientWidth))}},Z={tags:[`!dev`],args:{events:[{id:1,title:`Quarterly-business-review-with-the-regional-leadership-team-and-finance`,start:z(19,9),end:z(19,10)}]},play:async({canvas:e})=>{let t=e.getByText(/^Quarterly-business/),n=t.closest(`td`),r=n.nextElementSibling;await L(async()=>{await P(t.getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right),await P(Math.round(n.getBoundingClientRect().width)).toBe(Math.round(r.getBoundingClientRect().width))})}},Q={args:{events:[],hasEventList:!0},play:async({canvas:e})=>{await P(e.getByRole(`table`,{name:`January 2022`})).toBeVisible(),await P(e.getByRole(`button`,{name:`Saturday, January 22, 2022`})).toBeVisible(),await P(e.getByText(`No events`)).toBeVisible()}},$={tags:[`!dev`],decorators:[e=>(0,N.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{let t=t=>e.getByRole(`button`,{name:RegExp(`^${t}`)});t(`Saturday, January 22`).focus(),await I.keyboard(`{ArrowLeft}`),await P(t(`Sunday, January 23`)).toHaveFocus();let n=e.getByRole(`button`,{name:`Next month`}).querySelector(`svg`);await P(getComputedStyle(n).scale).toBe(`-1 1`)}},Ve=[`Month`,`Week`,`Day`,`Year`,`Navigate`,`SwitchView`,`Keyboard`,`Clickable`,`WithEventList`,`Narrow`,`LongTitle`,`Empty`,`RightToLeft`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button startIcon={<Icon name="plus" />}>Add event</Button>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'January 2022'
    })).toBeVisible();
    const month = canvas.getByRole('table', {
      name: 'January 2022'
    });
    await expect(within(month).getAllByRole('columnheader')[0]).toHaveTextContent('Sun');
    await expect(canvas.getByRole('button', {
      name: 'Saturday, January 22, 2022, 3 events'
    })).toHaveAttribute('aria-pressed', 'true');
    // A busy day lists two and says how many more; its button counts them all.
    const cell = canvas.getByRole('button', {
      name: 'Tuesday, January 25, 2022, 5 events'
    }).closest('td')!;
    await expect(within(cell).getByText('Quarter close')).toBeVisible();
    await expect(within(cell).getByText('9:00 AM')).toBeVisible();
    await expect(within(cell).getByRole('button', {
      name: '3 more on Tuesday, January 25, 2022'
    })).toHaveTextContent('3 more');
    // An all-day event spans every day it covers, with no time.
    for (const day of [24, 25, 26]) {
      const td = canvas.getByRole('button', {
        name: new RegExp(\`^\\\\w+day, January \${day}, 2022\`)
      }).closest('td')!;
      await expect(within(td).getByText('Quarter close')).toBeVisible();
    }
    await expect(canvas.getByRole('button', {
      name: 'Add event'
    })).toBeVisible();
  }
}`,...V.parameters?.docs?.source},description:{story:`A month: each day lists its events with their start time, and "n more" when it runs out of room.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: 'week',
    defaultDate: at(25)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Jan 23 – 29, 2022'
    })).toBeVisible();
    const day = canvas.getByRole('list', {
      name: 'Tuesday, January 25, 2022'
    });
    const box = (name: string) => within(day).getByText(name).closest('li')!.getBoundingClientRect();
    await waitFor(async () => {
      const [standup, budget, vendor, lunch] = ['Standup', 'Budget planning', 'Vendor call', 'Lunch'].map(box);
      // Standup and Budget overlap: two columns side by side, the longer first.
      await expect(Math.round(budget.width)).toBe(Math.round(standup.width));
      await expect(Math.abs(budget.right - standup.left) < 1 || Math.abs(standup.right - budget.left) < 1).toBe(true);
      // Vendor call starts after Standup ends: it reuses Standup's column, below it.
      await expect(Math.round(vendor.left)).toBe(Math.round(standup.left));
      await expect(vendor.top).toBeGreaterThanOrEqual(standup.bottom - 1);
      // Lunch overlaps nothing: the full width, and an hour is half of Budget's two.
      await expect(lunch.width).toBeGreaterThan(budget.width * 1.8);
      await expect(Math.abs(budget.height - 2 * lunch.height)).toBeLessThan(2);
    });
    // The all-day row holds the three-day event under each of its days.
    await expect(within(canvas.getByRole('list', {
      name: 'All day, Monday, January 24, 2022'
    })).getByText('Quarter close')).toBeVisible();
    await expect(within(canvas.getByRole('list', {
      name: 'All day, Wednesday, January 26, 2022'
    })).getByText('Quarter close')).toBeVisible();
    await expect(within(canvas.getByRole('list', {
      name: 'All day, Thursday, January 27, 2022'
    })).queryByText('Quarter close')).toBeNull();
    // It opens at the first timed event of the week (9:00), not at midnight.
    const scroller = day.parentElement!;
    await waitFor(() => expect(scroller.scrollTop).toBeGreaterThan(0));
    await expect(within(day).getByText('Standup').closest('li')!.getBoundingClientRect().top).toBeGreaterThanOrEqual(scroller.getBoundingClientRect().top - 1);
  }
}`,...H.parameters?.docs?.source},description:{story:`A week: an hour grid with the timed events placed by time, overlapping ones side by side, and all-day events in a row above.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: 'day',
    defaultDate: at(22)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Saturday, January 22, 2022'
    })).toBeVisible();
    const day = canvas.getByRole('list', {
      name: 'Saturday, January 22, 2022'
    });
    await expect(within(day).getAllByRole('listitem')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next day'
    }));
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Sunday, January 23, 2022'
    })).toBeVisible();
    await expect(within(canvas.getByRole('list', {
      name: 'Sunday, January 23, 2022'
    })).queryAllByRole('listitem')).toHaveLength(0);
    // The hours scroll and take focus; with no events the day opens at 8:00.
    const hours = canvas.getByRole('group', {
      name: 'Schedule'
    });
    await expect(hours).toHaveAttribute('tabindex', '0');
    await waitFor(() => expect(Math.abs(hours.scrollTop - 8 / 24 * hours.scrollHeight)).toBeLessThan(2));
  }
}`,...U.parameters?.docs?.source},description:{story:`A day: the same hour grid, one column wide.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: 'year',
    onViewChange: fn(),
    onDateChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: '2022'
    })).toBeVisible();
    await expect(canvas.getAllByRole('grid')).toHaveLength(12);
    // The months move with the header, so their own arrows are hidden.
    await expect(canvas.queryByRole('button', {
      name: 'Previous month'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Friday, March 4, 2022'
    }));
    await expect(args.onViewChange).toHaveBeenCalledWith('day');
    await expect(args.onDateChange).toHaveBeenCalledWith(new Date(2022, 2, 4));
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Friday, March 4, 2022'
    })).toBeVisible();
  }
}`,...W.parameters?.docs?.source},description:{story:`A year: twelve small months. A day opens that day.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    onDateChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const title = canvas.getByRole('heading', {
      level: 2
    });
    await expect(title).toHaveAttribute('aria-live', 'polite');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next month'
    }));
    await expect(title).toHaveTextContent('February 2022');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Previous month'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Previous month'
    }));
    await expect(title).toHaveTextContent('December 2021');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Today'
    }));
    const now = new Date();
    await expect(args.onDateChange).toHaveBeenLastCalledWith(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    await expect(title).toHaveTextContent(new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    }).format(now));
    await expect(canvas.getByRole('button', {
      name: /,|^\\d/,
      current: 'date'
    })).toBeVisible();
  }
}`,...G.parameters?.docs?.source},description:{story:`Previous, Today and Next move by the view's unit; the title follows and is announced.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'View'
    }));
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await body.findByRole('option', {
      name: 'Week'
    }));
    await waitFor(() => expect(body.queryByRole('listbox')).toBeNull());
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Jan 16 – 22, 2022'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Next week'
    })).toBeVisible();
    await expect(canvas.getAllByRole('list', {
      name: /^(Sun|Mon|Tues|Wednes|Thurs|Fri|Satur)day/
    })).toHaveLength(7);
  }
}`,...K.parameters?.docs?.source},description:{story:`The view switch is a Select: one control, which fits a phone's header.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const day = (name: string) => canvas.getByRole('button', {
      name: new RegExp(\`^\${name}\`)
    });
    await expect(day('Saturday, January 22')).toHaveAttribute('tabindex', '0');
    await expect(day('Friday, January 21')).toHaveAttribute('tabindex', '-1');
    day('Saturday, January 22').focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(day('Friday, January 21')).toHaveFocus();
    await expect(day('Friday, January 21')).toHaveAttribute('aria-pressed', 'true');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(day('Friday, February 4')).toHaveFocus();
    await expect(canvas.getByRole('heading', {
      level: 2
    })).toHaveTextContent('February 2022');
    // An event is a stop of its own after the day, not part of the arrows.
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{ArrowUp}');
    await expect(day('Friday, January 14')).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}{Tab}');
    await expect(canvas.getByText("Sam's birthday party").closest('li')).toContainElement(document.activeElement as HTMLElement);
  },
  args: {
    onEventClick: fn()
  }
}`,...q.parameters?.docs?.source},description:{story:`The keyboard: one day of the month is a tab stop; the arrows move it, across the month's edge too.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    onEventClick: fn(),
    events: EVENTS.map(e => e.id === 3 ? {
      ...e,
      href: '#date-night'
    } : e)
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Design review 10:00 AM'
    }));
    await expect(args.onEventClick).toHaveBeenCalledWith(EVENTS[0]);
    await expect(canvas.getByRole('link', {
      name: 'Date night 6:00 PM'
    })).toHaveAttribute('href', '#date-night');
  }
}`,...J.parameters?.docs?.source},description:{story:"`onEventClick` makes events buttons; `href` makes one a link.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    hasEventList: true,
    views: ['month']
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('combobox', {
      name: 'View'
    })).toBeNull();
    await expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Saturday, January 22, 2022'
    })).toBeVisible();
    const list = () => canvas.getByRole('heading', {
      level: 3
    }).nextElementSibling as HTMLElement;
    await expect(within(list()).getAllByRole('listitem')).toHaveLength(3);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Tuesday, January 4, 2022'
    }));
    await expect(canvas.getByRole('heading', {
      level: 3
    })).toHaveTextContent('Tuesday, January 4, 2022');
    await expect(canvas.getByText('No events')).toBeVisible();
  }
}`,...Y.parameters?.docs?.source},description:{story:"`hasEventList`: the selected day's events under the month, in full.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    hasEventList: true,
    // More actions than fit beside the title: the header wraps.
    actions: <>
        <Button variant="secondary" appearance="outlined">Export</Button>
        <Button startIcon={<Icon name="plus" />}>Add event</Button>
      </>
  },
  decorators: [Story => <div style={{
    inlineSize: 320
  }}>{Story()}</div>],
  play: async ({
    canvas,
    canvasElement
  }) => {
    const busy = canvas.getByRole('button', {
      name: 'Saturday, January 22, 2022, 3 events'
    });
    const cell = busy.closest('td')!;
    await waitFor(() => expect(cell.querySelector('ul')).not.toBeVisible());
    await expect(cell.querySelectorAll('[aria-hidden="true"] > span')).toHaveLength(3);
    const list = canvas.getByRole('heading', {
      level: 3
    }).nextElementSibling as HTMLElement;
    await expect(within(list).getByText('Hockey game')).toBeVisible();
    // Nothing runs past the 320px frame.
    const root = canvasElement.firstElementChild!.firstElementChild!;
    await waitFor(() => expect(root.scrollWidth).toBeLessThanOrEqual(root.clientWidth));
  }
}`,...X.parameters?.docs?.source},description:{story:`At phone width the month shows a dot per event; the list under it has the titles.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    events: [{
      id: 1,
      title: 'Quarterly-business-review-with-the-regional-leadership-team-and-finance',
      start: at(19, 9),
      end: at(19, 10)
    }]
  },
  play: async ({
    canvas
  }) => {
    const title = canvas.getByText(/^Quarterly-business/);
    const cell = title.closest('td')!;
    const next = cell.nextElementSibling!;
    await waitFor(async () => {
      await expect(title.getBoundingClientRect().right).toBeLessThanOrEqual(cell.getBoundingClientRect().right);
      await expect(Math.round(cell.getBoundingClientRect().width)).toBe(Math.round(next.getBoundingClientRect().width));
    });
  }
}`,...Z.parameters?.docs?.source},description:{story:`Harsh content: a title with no spaces is cut with an ellipsis rather than widening the day.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    hasEventList: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('table', {
      name: 'January 2022'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Saturday, January 22, 2022'
    })).toBeVisible();
    await expect(canvas.getByText('No events')).toBeVisible();
  }
}`,...Q.parameters?.docs?.source},description:{story:`No events: the grids still show, empty.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  decorators: [Story => <div dir="rtl">{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const day = (name: string) => canvas.getByRole('button', {
      name: new RegExp(\`^\${name}\`)
    });
    day('Saturday, January 22').focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(day('Sunday, January 23')).toHaveFocus();
    const icon = canvas.getByRole('button', {
      name: 'Next month'
    }).querySelector('svg')!;
    await expect(getComputedStyle(icon).scale).toBe('-1 1');
  }
}`,...$.parameters?.docs?.source},description:{story:`Right to left: the left arrow moves to the next day, as on screen, and the header's arrows mirror.`,...$.parameters?.docs?.description}}}})))()}export{V as a,Y as c,ze as i,W as l,U as n,X as o,Q as r,H as s,J as t,He as u};