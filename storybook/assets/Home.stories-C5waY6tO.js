import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Button-Bwi4V5f1.js";import{n as c,t as l}from"./icon-C9aTyDDd.js";import{n as u,t as ee}from"./Select-BsYPTVUS.js";import{r as te,t as ne}from"./Avatar-Br9NGvV-.js";import{n as d,t as re}from"./Checkbox-5Fepdwz1.js";import{i as f,t as ie}from"./Menu-NLwpYJmZ.js";import{n as p,t as ae}from"./LineChart-BViQFSuH.js";import{n as m,t as h}from"./Sparkline-DN9lxZrM.js";import{n as g,t as oe}from"./Card-DvxLWsiy.js";import{n as _,t as se}from"./EmptyState-DFT2bqlk.js";import{n as v,t as ce}from"./ProgressBar-9A23yjyg.js";import{n as y,t as le}from"./Link-Bhk0TW_i.js";import{n as b,t as ue}from"./ActionPanel-BcAXfovQ.js";import{n as x,t as de}from"./AppShell-DzI1P-p3.js";import{i as S,n as fe}from"./TopBar-DXYi-mW1.js";import{n as C,t as pe}from"./CardHeading-Dhr_hQ0E.js";import{r as w,t as me}from"./NavSidebar-Do9w0wRH.js";import{n as he,t as ge}from"./Stats-BkR8LXSz.js";import{i as _e,l as T,n as ve,t as E,u as ye}from"./projects-data-DPfKPfIw.js";var D,O,k,A,be,j;function M(){return(M=e((()=>{D=e=>new Date(`${e}T00:00`),O=new Date(`2026-10-01T09:00`),k=[{value:`7d`,label:`Last 7 days`,days:7},{value:`30d`,label:`Last 30 days`,days:30},{value:`90d`,label:`Last 90 days`,days:90}],A=(()=>{let e=32,t=()=>((e=e*16807%2147483647)-1)/2147483646;return Array.from({length:180},(e,n)=>{let r=new Date(O.getFullYear(),O.getMonth(),O.getDate()-179+n),i=r.getDay()===0||r.getDay()===6,a=1+n/400;return{date:r,hours:Math.round(i?t()*6:(48+t()*24)*a),invoiced:i||t()<.55?0:Math.round((1500+t()*6e3)*a)}})})(),be=[{id:`t1`,title:`Approve the Saltmarsh renewal quote`,project:`Saltmarsh Analytics`,due:D(`2026-09-29`),isDone:!1},{id:`t2`,title:`Review the Harbor Lights sprint plan`,project:`Harbor Lights`,due:D(`2026-10-01`),isDone:!1},{id:`t3`,title:`Send the Driftwood invoice reminder`,project:`Driftwood Docs`,due:D(`2026-10-02`),isDone:!1},{id:`t4`,title:`Sign off the Granite Referral launch`,project:`Granite Referral`,due:D(`2026-10-06`),isDone:!1}],j=[{id:`workspace`,label:`Name your workspace`,action:`Name workspace`,isDone:!0},{id:`project`,label:`Create your first project`,action:`Create project`,isDone:!0},{id:`team`,label:`Invite your team`,action:`Invite team`,isDone:!1},{id:`calendar`,label:`Connect your calendar`,action:`Connect calendar`,isDone:!1}]})))()}var N,P,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,F;function ze(){return(ze=e((()=>{N=`_page_1e5wu_3`,P=`_brand_1e5wu_15`,xe=`_sidebar_1e5wu_19`,Se=`_account_1e5wu_23`,Ce=`_header_1e5wu_30`,we=`_heading_1e5wu_38`,Te=`_title_1e5wu_43`,Ee=`_description_1e5wu_53`,De=`_setup_1e5wu_60`,Oe=`_steps_1e5wu_65`,ke=`_step_1e5wu_65`,Ae=`_stepDone_1e5wu_80`,je=`_grid_1e5wu_88`,Me=`_card_1e5wu_99`,Ne=`_tasks_1e5wu_105`,Pe=`_taskDone_1e5wu_114`,Fe=`_overdue_1e5wu_119`,Ie=`_asideSection_1e5wu_123`,Le=`_sectionTitle_1e5wu_128`,Re=`_srOnly_1e5wu_136`,F={page:N,brand:P,sidebar:xe,account:Se,header:Ce,heading:we,title:Te,description:Ee,setup:De,steps:Oe,step:ke,stepDone:Ae,grid:je,card:Me,tasks:Ne,taskDone:Pe,overdue:Fe,asideSection:Ie,sectionTitle:Le,srOnly:Re}})))()}function Be(e,t){if(!t)return;let n=e/t-1;return{value:`${Math.abs(Math.round(n*100))}%`,direction:n<0?`down`:`up`}}function Ve({today:e=O,defaultPeriod:t=`30d`,defaultTasks:n=be,defaultSetupSteps:r=j,onTaskChange:a,onSetupStep:o,...c}){let[u,te]=(0,I.useState)(t),[d,f]=(0,I.useState)(n),[p,m]=(0,I.useState)(r),g=(0,I.useRef)(null),{label:_,days:v}=k.find(e=>e.value===u)??k[1],y=A.slice(-v),b=A.slice(-2*v,-v),x=(e,t)=>e.reduce((e,n)=>e+n[t],0),S={now:x(y,`hours`),before:x(b,`hours`)},C={now:x(y,`invoiced`),before:x(b,`invoiced`)},w=ve.filter(e=>e.status===`Active`&&!e.isArchived),he=w.filter(e=>e.health===`risk`||e.health===`potential-risk`).length,T=[{label:`Hours logged`,value:z.format(S.now),previous:`from ${z.format(S.before)}`,change:Be(S.now,S.before),chart:(0,L.jsx)(h,{data:y.map(e=>e.hours)})},{label:`Invoiced`,value:ye.format(C.now),previous:`from ${ye.format(C.before)}`,change:Be(C.now,C.before),chart:(0,L.jsx)(h,{data:y.map(e=>e.invoiced),color:`chart-2`})},{label:`Active projects`,value:w.length,previous:`${he} at risk`,href:`#projects`,linkLabel:`View projects`}],E=p.find(e=>!e.isDone),D=p.filter(e=>e.isDone).length,M=d.filter(e=>!e.isDone).length,N=B(e),P=(0,L.jsx)(`div`,{className:F.account,children:(0,L.jsx)(ie,{align:`start`,trigger:(0,L.jsx)(s,{variant:`secondary`,appearance:`ghost`,startIcon:(0,L.jsx)(ne,{initials:R.initials,size:`sm`}),children:R.name}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})});return(0,L.jsx)(de,{brand:(0,L.jsx)(`strong`,{className:F.brand,children:`Zweihänder`}),sidebar:(0,L.jsx)(me,{items:[{label:`Dashboard`,href:`#dashboard`,icon:(0,L.jsx)(l,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,L.jsx)(l,{name:`file`})},{label:`Team`,href:`#team`,icon:(0,L.jsx)(l,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,L.jsx)(l,{name:`calendar`})}],currentHref:`#dashboard`,className:F.sidebar,footer:P}),header:(0,L.jsx)(fe,{end:P}),aside:(0,L.jsxs)(`div`,{className:F.asideSection,children:[(0,L.jsx)(`h2`,{className:F.sectionTitle,children:`Recent activity`}),(0,L.jsx)(_e,{events:Ge})]}),asideLabel:`Recent activity`,...c,children:(0,L.jsxs)(`div`,{className:F.page,children:[(0,L.jsxs)(`div`,{className:F.header,children:[(0,L.jsxs)(`div`,{className:F.heading,children:[(0,L.jsxs)(`h1`,{ref:g,tabIndex:-1,className:F.title,children:[We(e),`, `,R.name.split(` `)[0]]}),(0,L.jsx)(`p`,{className:F.description,children:(0,L.jsx)(`time`,{dateTime:e.toLocaleDateString(`en-CA`),children:He.format(e)})})]}),(0,L.jsx)(ee,{label:`Period`,options:k.map(({value:e,label:t})=>({value:e,label:t})),value:u,onValueChange:e=>e&&te(e)})]}),E&&(0,L.jsx)(ue,{title:`Finish setting up`,description:(0,L.jsxs)(`div`,{className:F.setup,children:[(0,L.jsx)(ce,{value:D,max:p.length,label:`${D} of ${p.length} steps done`}),(0,L.jsx)(`ol`,{className:F.steps,children:p.map(e=>(0,L.jsxs)(`li`,{className:i(F.step,e.isDone&&F.stepDone),children:[(0,L.jsx)(l,{name:e.isDone?`success-filled`:`minus`,"aria-hidden":`true`}),e.label,e.isDone&&(0,L.jsx)(`span`,{className:F.srOnly,children:` (done)`})]},e.id))})]}),actionPlacement:`end`,action:(0,L.jsx)(s,{onClick:()=>{let e=p.map(e=>e.id===E.id?{...e,isDone:!0}:e);m(e),o?.(E.id),e.every(e=>e.isDone)&&requestAnimationFrame(()=>g.current?.focus())},children:E.action})}),(0,L.jsx)(ge,{stats:T,"aria-label":`Key figures, ${_.toLowerCase()}`}),(0,L.jsxs)(`div`,{className:F.grid,children:[(0,L.jsxs)(oe,{appearance:`outline`,className:F.card,children:[(0,L.jsx)(pe,{title:`Hours logged`,description:_,actions:(0,L.jsx)(le,{href:`#timesheets`,size:`sm`,underline:`hover`,children:`Timesheets`})}),(0,L.jsx)(ae,{title:`Hours per day`,data:y,x:`date`,series:[{key:`hours`,label:`Hours`}],height:220})]}),(0,L.jsxs)(oe,{appearance:`outline`,className:F.card,children:[(0,L.jsx)(pe,{title:`Your tasks`,description:M===1?`1 open`:`${M} open`}),d.length?(0,L.jsx)(`ul`,{className:F.tasks,"aria-label":`Your tasks`,children:d.map(e=>{let t=B(e.due),n=!e.isDone&&t<N,r=e.isDone?`Done`:n?`Overdue`:t===N?`Due today`:`Due ${Ue.format(e.due)}`;return(0,L.jsx)(`li`,{className:i(e.isDone&&F.taskDone),children:(0,L.jsx)(re,{label:e.title,helperText:(0,L.jsxs)(L.Fragment,{children:[e.project,` ·`,` `,(0,L.jsx)(`span`,{className:i(n&&F.overdue),children:r})]}),checked:e.isDone,onCheckedChange:t=>{f(n=>n.map(n=>n.id===e.id?{...n,isDone:t}:n)),a?.(e.id,t)}})},e.id)})}):(0,L.jsx)(se,{size:`sm`,headingLevel:3,title:`Nothing due`,description:`Tasks assigned to you show here.`})]})]})]})})}var I,L,R,He,Ue,z,We,B,Ge;function Ke(){return(Ke=e((()=>{I=n(),c(),r(),te(),o(),p(),m(),d(),g(),u(),v(),y(),f(),b(),C(),w(),he(),S(),_(),T(),E(),x(),M(),ze(),L=a(),R={name:`Ines Okafor`,initials:`IO`},He=new Intl.DateTimeFormat(`en`,{weekday:`long`,day:`numeric`,month:`long`}),Ue=new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`}),z=new Intl.NumberFormat(`en`),We=e=>e.getHours()<12?`Good morning`:e.getHours()<18?`Good afternoon`:`Good evening`,B=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),Ge=ve.flatMap(e=>e.activity.map(t=>({...t,project:e.name}))).sort((e,t)=>t.at.getTime()-e.at.getTime()).slice(0,6),Ve.__docgenInfo={description:`The home page: a greeting with a period to look at, the key figures for
it, a chart and the user's tasks in a grid of cards, recent activity
across projects in the aside, and a setup guide until the workspace is
set up. The state is local; swap the samples for your data layer when
you copy the page.`,methods:[],displayName:`Home`,props:{today:{required:!1,tsType:{name:`Date`},description:"Today, for the greeting and what is due. Defaults to the sample's day so the page holds still; pass `new Date()` in an app.",defaultValue:{value:`new Date('2026-10-01T09:00')`,computed:!1}},defaultPeriod:{required:!1,tsType:{name:`union`,raw:`'7d' | '30d' | '90d'`,elements:[{name:`literal`,value:`'7d'`},{name:`literal`,value:`'30d'`},{name:`literal`,value:`'90d'`}]},description:`The period the figures and the chart cover first.`,defaultValue:{value:`'30d'`,computed:!1}},defaultTasks:{required:!1,tsType:{name:`Array`,elements:[{name:`Task`}],raw:`Task[]`},description:`The signed-in user's tasks when the page opens; ticking them is local. Empty shows "Nothing due".`,defaultValue:{value:`[
  { id: 't1', title: 'Approve the Saltmarsh renewal quote', project: 'Saltmarsh Analytics', due: d('2026-09-29'), isDone: false },
  { id: 't2', title: 'Review the Harbor Lights sprint plan', project: 'Harbor Lights', due: d('2026-10-01'), isDone: false },
  { id: 't3', title: 'Send the Driftwood invoice reminder', project: 'Driftwood Docs', due: d('2026-10-02'), isDone: false },
  { id: 't4', title: 'Sign off the Granite Referral launch', project: 'Granite Referral', due: d('2026-10-06'), isDone: false },
]`,computed:!1}},defaultSetupSteps:{required:!1,tsType:{name:`Array`,elements:[{name:`SetupStep`}],raw:`SetupStep[]`},description:`The setup guide's steps when the page opens. Hidden when empty or when every step is done.`,defaultValue:{value:`[
  { id: 'workspace', label: 'Name your workspace', action: 'Name workspace', isDone: true },
  { id: 'project', label: 'Create your first project', action: 'Create project', isDone: true },
  { id: 'team', label: 'Invite your team', action: 'Invite team', isDone: false },
  { id: 'calendar', label: 'Connect your calendar', action: 'Connect calendar', isDone: false },
]`,computed:!1}},onTaskChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string, isDone: boolean) => void`,signature:{arguments:[{type:{name:`string`},name:`id`},{type:{name:`boolean`},name:`isDone`}],return:{name:`void`}}},description:`Called when a task is ticked or unticked. Replace with a call to your API.`},onSetupStep:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Called with the step the setup guide's button does. Open your flow for it there.`}},composes:[`Omit`]}})))()}var qe=t({Default:()=>Y,Narrow:()=>$,NothingDue:()=>Q,Overdue:()=>X,SetupGuide:()=>Z,__namedExportsOrder:()=>Xe,default:()=>Ye}),Je,V,H,U,W,G,K,Ye,q,J,Y,X,Z,Q,$,Xe;function Ze(){return(Ze=e((()=>{Ke(),Je=a(),{expect:V,fn:H,userEvent:U,waitFor:W,within:G}=__STORYBOOK_MODULE_TEST__,K=e=>[t=>(0,Je.jsx)(`div`,{style:{inlineSize:e,blockSize:900,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],Ye={title:`Templates/Application UI/Home`,tags:[`experimental`],component:Ve,parameters:{layout:`fullscreen`},argTypes:{defaultPeriod:{control:`inline-radio`,options:[`7d`,`30d`,`90d`]},today:{control:!1},defaultTasks:{control:!1},defaultSetupSteps:{control:!1}},args:{onTaskChange:H(),onSetupStep:H()}},q=()=>G(document.body),J=(e,t)=>G(e).getByText(t).closest(`div`)?.querySelector(`dd`)?.textContent,Y={decorators:K(1440),play:async({canvas:e,args:t})=>{await V(e.getAllByRole(`heading`,{level:1})).toHaveLength(1),await V(e.getByRole(`heading`,{level:1,name:`Good morning, Ines`})).toBeVisible(),await V(e.getByRole(`link`,{name:`Dashboard`})).toHaveAttribute(`aria-current`,`page`);let n=e.getAllByRole(`heading`,{level:2}).map(e=>e.textContent);await V(n).toEqual(V.arrayContaining([`Finish setting up`,`Hours logged`,`Your tasks`,`Recent activity`]));let r=e.getByRole(`region`,{name:`Key figures, last 30 days`});await V(G(r).getByText(`Hours logged`)).toBeVisible();let i=J(r,`Hours logged`),a=e.getByRole(`figure`,{name:`Hours per day`}),o=e.getByRole(`list`,{name:`Your tasks`});await W(()=>V(o.getBoundingClientRect().left).toBeGreaterThan(a.getBoundingClientRect().right)),await U.click(e.getByRole(`combobox`,{name:`Period`})),await U.click(await q().findByRole(`option`,{name:`Last 7 days`})),await W(()=>V(q().queryByRole(`listbox`)).toBeNull());let s=e.getByRole(`region`,{name:`Key figures, last 7 days`});await V(J(s,`Hours logged`)).not.toBe(i);let c=G(o).getByRole(`checkbox`,{name:`Review the Harbor Lights sprint plan`});await V(c).toHaveAccessibleDescription(`Harbor Lights · Due today`),await U.click(c),await V(c).toBeChecked(),await V(t.onTaskChange).toHaveBeenCalledWith(`t2`,!0),await V(c).toHaveAccessibleDescription(`Harbor Lights · Done`),await V(e.getByText(`3 open`)).toBeVisible();let l=e.getByRole(`complementary`,{name:`Recent activity`});await V(G(l).getAllByRole(`listitem`)).toHaveLength(6),await V(G(l).queryByRole(`region`)).toBeNull(),await V(G(l).getAllByRole(`listitem`)[0]).toHaveTextContent(`Noor Haddad changed the status of Lanternfish Search`)}},X={decorators:K(1440),play:async({canvas:e})=>{let t=e.getByRole(`checkbox`,{name:`Approve the Saltmarsh renewal quote`});await V(t).toHaveAccessibleDescription(`Saltmarsh Analytics · Overdue`)}},Z={decorators:K(1440),play:async({canvas:e,args:t})=>{let n=e.getByRole(`group`,{name:`Finish setting up`});await V(G(n).getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`2`),await U.click(G(n).getByRole(`button`,{name:`Invite team`})),await V(t.onSetupStep).toHaveBeenCalledWith(`team`),await V(G(n).getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`3`),await V(G(n).getByText(/Invite your team/)).toHaveTextContent(`Invite your team (done)`),await U.click(G(n).getByRole(`button`,{name:`Connect calendar`})),await V(t.onSetupStep).toHaveBeenCalledWith(`calendar`),await V(e.queryByRole(`group`,{name:`Finish setting up`})).toBeNull(),await W(()=>V(e.getByRole(`heading`,{level:1})).toHaveFocus())}},Q={decorators:K(1440),args:{defaultTasks:[],defaultSetupSteps:[],today:new Date(`2026-10-01T19:30`)},play:async({canvas:e})=>{await V(e.getByRole(`heading`,{level:1,name:`Good evening, Ines`})).toBeVisible(),await V(e.queryByRole(`group`,{name:`Finish setting up`})).toBeNull(),await V(e.getByRole(`heading`,{level:3,name:`Nothing due`})).toBeVisible(),await V(e.getByText(`0 open`)).toBeVisible()}},$={decorators:K(390),play:async({canvas:e})=>{let t=e.getByRole(`figure`,{name:`Hours per day`}),n=e.getByRole(`list`,{name:`Your tasks`});await W(()=>V(n.getBoundingClientRect().top).toBeGreaterThan(t.getBoundingClientRect().bottom));let r=e.getByRole(`main`),i=e.getByRole(`complementary`,{name:`Recent activity`});await W(()=>V(i.getBoundingClientRect().top).toBeGreaterThanOrEqual(r.getBoundingClientRect().bottom))}},Xe=[`Default`,`Overdue`,`SetupGuide`,`NothingDue`,`Narrow`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: box(1440),
  play: async ({
    canvas,
    args
  }) => {
    await expect(canvas.getAllByRole('heading', {
      level: 1
    })).toHaveLength(1);
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Good morning, Ines'
    })).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Dashboard'
    })).toHaveAttribute('aria-current', 'page');
    const h2s = canvas.getAllByRole('heading', {
      level: 2
    }).map(h => h.textContent);
    await expect(h2s).toEqual(expect.arrayContaining(['Finish setting up', 'Hours logged', 'Your tasks', 'Recent activity']));
    const figures = canvas.getByRole('region', {
      name: 'Key figures, last 30 days'
    });
    await expect(within(figures).getByText('Hours logged')).toBeVisible();
    const hours30 = figure(figures, 'Hours logged');
    // The tasks sit beside the chart.
    const chart = canvas.getByRole('figure', {
      name: 'Hours per day'
    });
    const tasks = canvas.getByRole('list', {
      name: 'Your tasks'
    });
    await waitFor(() => expect(tasks.getBoundingClientRect().left).toBeGreaterThan(chart.getBoundingClientRect().right));
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'Period'
    }));
    await userEvent.click(await body().findByRole('option', {
      name: 'Last 7 days'
    }));
    await waitFor(() => expect(body().queryByRole('listbox')).toBeNull());
    const figures7 = canvas.getByRole('region', {
      name: 'Key figures, last 7 days'
    });
    await expect(figure(figures7, 'Hours logged')).not.toBe(hours30);

    // Ticking a task keeps it in the list, done, and counts it out.
    const task = within(tasks).getByRole('checkbox', {
      name: 'Review the Harbor Lights sprint plan'
    });
    await expect(task).toHaveAccessibleDescription('Harbor Lights · Due today');
    await userEvent.click(task);
    await expect(task).toBeChecked();
    await expect(args.onTaskChange).toHaveBeenCalledWith('t2', true);
    await expect(task).toHaveAccessibleDescription('Harbor Lights · Done');
    await expect(canvas.getByText('3 open')).toBeVisible();

    // Activity across projects names each one.
    const activity = canvas.getByRole('complementary', {
      name: 'Recent activity'
    });
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(6);
    // The aside names the list; no second landmark inside it says the same.
    await expect(within(activity).queryByRole('region')).toBeNull();
    await expect(within(activity).getAllByRole('listitem')[0]).toHaveTextContent('Noor Haddad changed the status of Lanternfish Search');
  }
}`,...Y.parameters?.docs?.source},description:{story:`Wide: the cards side by side, recent activity in the aside; the period changes the figures and the chart.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: box(1440),
  play: async ({
    canvas
  }) => {
    const task = canvas.getByRole('checkbox', {
      name: 'Approve the Saltmarsh renewal quote'
    });
    await expect(task).toHaveAccessibleDescription('Saltmarsh Analytics · Overdue');
  }
}`,...X.parameters?.docs?.source},description:{story:`An overdue task says so in its description, not only in red.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(1440),
  play: async ({
    canvas,
    args
  }) => {
    const guide = canvas.getByRole('group', {
      name: 'Finish setting up'
    });
    await expect(within(guide).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '2');
    await userEvent.click(within(guide).getByRole('button', {
      name: 'Invite team'
    }));
    await expect(args.onSetupStep).toHaveBeenCalledWith('team');
    await expect(within(guide).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '3');
    await expect(within(guide).getByText(/Invite your team/)).toHaveTextContent('Invite your team (done)');
    await userEvent.click(within(guide).getByRole('button', {
      name: 'Connect calendar'
    }));
    await expect(args.onSetupStep).toHaveBeenCalledWith('calendar');
    await expect(canvas.queryByRole('group', {
      name: 'Finish setting up'
    })).toBeNull();
    await waitFor(() => expect(canvas.getByRole('heading', {
      level: 1
    })).toHaveFocus());
  }
}`,...Z.parameters?.docs?.source},description:{story:`The setup guide offers the next step; once the last is done it goes, and focus moves to the heading.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  decorators: box(1440),
  args: {
    defaultTasks: [],
    defaultSetupSteps: [],
    today: new Date('2026-10-01T19:30')
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Good evening, Ines'
    })).toBeVisible();
    await expect(canvas.queryByRole('group', {
      name: 'Finish setting up'
    })).toBeNull();
    await expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Nothing due'
    })).toBeVisible();
    await expect(canvas.getByText('0 open')).toBeVisible();
  }
}`,...Q.parameters?.docs?.source},description:{story:`A set-up workspace with nothing due: no guide, and the tasks card says so.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  decorators: box(390),
  play: async ({
    canvas
  }) => {
    const chart = canvas.getByRole('figure', {
      name: 'Hours per day'
    });
    const tasks = canvas.getByRole('list', {
      name: 'Your tasks'
    });
    await waitFor(() => expect(tasks.getBoundingClientRect().top).toBeGreaterThan(chart.getBoundingClientRect().bottom));
    const page = canvas.getByRole('main');
    const activity = canvas.getByRole('complementary', {
      name: 'Recent activity'
    });
    await waitFor(() => expect(activity.getBoundingClientRect().top).toBeGreaterThanOrEqual(page.getBoundingClientRect().bottom));
  }
}`,...$.parameters?.docs?.source},description:{story:`A phone: one column, the tasks under the chart, the activity under the page.`,...$.parameters?.docs?.description}}}})))()}export{Z as a,Q as i,qe as n,Ze as o,$ as r,Y as t};