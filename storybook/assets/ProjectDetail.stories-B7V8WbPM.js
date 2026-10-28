import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./Tabs-Cta8uQ9T.js";import{n as c,t as l}from"./icon-C9aTyDDd.js";import{n as ee,r as u}from"./Tag-DjFi4YNU.js";import{n as te,t as ne}from"./Select-BsYPTVUS.js";import{r as re,t as ie}from"./Avatar-Br9NGvV-.js";import{i as ae,t as d}from"./Menu-NLwpYJmZ.js";import{n as oe,t as se}from"./Table-Y4TRGaOz.js";import{n as ce,t as le}from"./EmptyState-DFT2bqlk.js";import{n as ue,t as de}from"./NumberInput-3tms31Bw.js";import{r as fe,t as pe}from"./TextInput-vfco79YG.js";import{n as me,t as he}from"./Breadcrumbs-DKlysmPW.js";import{r as ge,t as _e}from"./Drawer-DTbJ5PGE.js";import{n as ve,t as ye}from"./AppShell-DzI1P-p3.js";import{i as be,n as xe}from"./TopBar-DXYi-mW1.js";import{n as Se,t as f}from"./DescriptionList-BJqtYQ8L.js";import{r as Ce,t as we}from"./NavSidebar-Do9w0wRH.js";import{c as Te,d as p,i as Ee,l as De,n as m,o as Oe,r as ke,s as Ae,t as h,u as je}from"./projects-data-DPfKPfIw.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{g=`_page_d2v6n_1`,_=`_brand_d2v6n_12`,v=`_sidebar_d2v6n_16`,y=`_account_d2v6n_20`,b=`_header_d2v6n_27`,x=`_heading_d2v6n_35`,S=`_titleRow_d2v6n_42`,C=`_title_d2v6n_42`,w=`_meta_d2v6n_59`,T=`_actions_d2v6n_77`,E=`_tabs_d2v6n_83`,D=`_person_d2v6n_87`,O=`_aside_d2v6n_94`,k=`_asideSection_d2v6n_99`,A=`_sectionTitle_d2v6n_104`,j=`_form_d2v6n_112`,M={page:g,brand:_,sidebar:v,account:y,header:b,heading:x,titleRow:S,title:C,meta:w,actions:T,tabs:E,person:D,aside:O,asideSection:k,sectionTitle:A,form:j}})))()}function P({project:e=m[0],team:t=ke,...n}){let[r,i]=(0,F.useState)(e),[o,c]=(0,F.useState)(!1),u=(0,I.jsx)(`div`,{className:M.account,children:(0,I.jsx)(d,{align:`start`,trigger:(0,I.jsx)(a,{variant:`secondary`,appearance:`ghost`,startIcon:(0,I.jsx)(ie,{initials:`IO`,size:`sm`}),children:R}),items:[{label:`Your profile`},{label:`Settings`},{type:`separator`},{label:`Sign out`}]})}),te=(0,I.jsxs)(`div`,{className:M.aside,children:[(0,I.jsx)(f,{title:`Summary`,layout:`stacked`,items:[{term:`Status`,details:p(r.status)},{term:`Health`,details:Te[r.health]},{term:`Last update`,details:(0,I.jsx)(`time`,{dateTime:r.updatedAt.toISOString(),children:Ae.format(r.updatedAt)})}]}),(0,I.jsxs)(`div`,{className:M.asideSection,children:[(0,I.jsx)(`h2`,{className:M.sectionTitle,children:`Activity`}),(0,I.jsx)(Ee,{project:r})]})]});return(0,I.jsxs)(ye,{brand:(0,I.jsx)(`strong`,{className:M.brand,children:`Zweihänder`}),sidebar:(0,I.jsx)(we,{items:[{label:`Dashboard`,href:`#dashboard`,icon:(0,I.jsx)(l,{name:`star`})},{label:`Projects`,href:`#projects`,icon:(0,I.jsx)(l,{name:`file`})},{label:`Team`,href:`#team`,icon:(0,I.jsx)(l,{name:`user`})},{label:`Calendar`,href:`#calendar`,icon:(0,I.jsx)(l,{name:`calendar`})}],currentHref:`#projects`,className:M.sidebar,footer:u}),header:(0,I.jsx)(xe,{end:u}),aside:te,asideLabel:`Project summary`,...n,children:[(0,I.jsxs)(`div`,{className:M.page,children:[(0,I.jsx)(he,{items:[{label:`Projects`,href:`#projects`},{label:r.name}]}),(0,I.jsxs)(`div`,{className:M.header,children:[(0,I.jsxs)(`div`,{className:M.heading,children:[(0,I.jsxs)(`div`,{className:M.titleRow,children:[(0,I.jsx)(`h1`,{className:M.title,children:r.name}),p(r.status),r.isArchived&&(0,I.jsx)(ee,{size:`sm`,text:`Archived`})]}),(0,I.jsxs)(`ul`,{className:M.meta,"aria-label":`Key facts`,children:[(0,I.jsxs)(`li`,{children:[(0,I.jsx)(l,{name:`user`,"aria-hidden":`true`}),r.pm?.name??`Unassigned`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(l,{name:`calendar`,"aria-hidden":`true`}),z(r)]}),(0,I.jsx)(`li`,{children:t.length===1?`1 person`:`${t.length} people`})]})]}),(0,I.jsxs)(`div`,{className:M.actions,children:[(0,I.jsx)(a,{variant:`secondary`,appearance:`outlined`,onClick:()=>c(!0),children:`Edit`}),(0,I.jsx)(d,{align:`end`,trigger:(0,I.jsx)(a,{variant:`secondary`,appearance:`outlined`,isIconOnly:!0,"aria-label":`More actions`,children:(0,I.jsx)(l,{name:`more`})}),items:[{label:r.isArchived?`Restore`:`Archive`,onSelect:()=>i(e=>({...e,isArchived:!e.isArchived}))}]})]})]}),(0,I.jsx)(s,{"aria-label":`Project sections`,className:M.tabs,items:[{value:`overview`,label:`Overview`,content:(0,I.jsx)(f,{title:`Details`,items:[{term:`Project manager`,details:r.pm?.name??`Unassigned`},{term:`Timeline`,details:z(r)},{term:`Estimation`,details:je.format(r.estimation)}]})},{value:`team`,label:`Team`,content:(0,I.jsx)(se,{columns:Pe,rows:t,getRowId:e=>e.person.name,caption:`Team`,emptyState:(0,I.jsx)(le,{size:`sm`,headingLevel:2,title:`Nobody on this project yet`})})}]})]}),(0,I.jsx)(Ne,{project:r,open:o,onOpenChange:c,onSave:e=>{i(t=>Me(t,e)),c(!1)}})]})}function Me(e,t){let n=new Date,r=[];return t.estimation!==e.estimation&&r.push({type:`estimation`,by:R,at:n,from:e.estimation,to:t.estimation}),t.status!==e.status&&r.push({type:`status`,by:R,at:n,from:e.status,to:t.status}),{...e,...t,updatedAt:r.length||t.name!==e.name?n:e.updatedAt,activity:[...r,...e.activity]}}function Ne({project:e,open:t,onOpenChange:n,onSave:r}){let i=(0,F.useId)(),[o,s]=(0,F.useState)(e),[c,l]=(0,F.useState)(!1);return(0,I.jsx)(_e,{title:`Edit project`,open:t,onOpenChange:t=>{t&&s(e),l(!1),n(t)},closeOnBackdropClick:!1,footer:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{variant:`secondary`,appearance:`outlined`,onClick:()=>n(!1),children:`Cancel`}),(0,I.jsx)(a,{type:`submit`,form:i,children:`Save`})]}),children:(0,I.jsxs)(`form`,{id:i,className:M.form,onSubmit:e=>{e.preventDefault();let t=o.name.trim();if(!t)return l(!0);r({...o,name:t})},noValidate:!0,children:[(0,I.jsx)(pe,{label:`Name`,required:!0,isFullWidth:!0,value:o.name,onChange:e=>s({...o,name:e.target.value}),validationState:c?`error`:`default`,helperText:c?`Enter a name.`:void 0}),(0,I.jsx)(ne,{label:`Status`,isFullWidth:!0,options:Oe,value:o.status,onValueChange:e=>e&&s({...o,status:e})}),(0,I.jsx)(de,{label:`Estimation (USD)`,isFullWidth:!0,min:0,step:100,value:o.estimation,onValueChange:e=>s({...o,estimation:e??0})})]})})}var F,I,L,R,Pe,z;function Fe(){return(Fe=e((()=>{F=n(),c(),re(),u(),i(),oe(),ue(),te(),fe(),me(),ae(),o(),ge(),Se(),Ce(),be(),ce(),ve(),De(),h(),N(),I=r(),L=new Intl.DateTimeFormat(`en`,{day:`numeric`,month:`short`,year:`numeric`}),R=`Ines Okafor`,Pe=[{key:`name`,header:`Name`,isRowHeader:!0,cell:e=>(0,I.jsxs)(`span`,{className:M.person,children:[(0,I.jsx)(ie,{size:`sm`,initials:e.person.initials}),e.person.name]})},{key:`role`,header:`Role`,cell:e=>e.role},{key:`allocation`,header:`Allocation`,align:`end`,cell:e=>`${e.allocation}%`}],z=e=>e.start&&e.end?`${L.format(e.start)} to ${L.format(e.end)}`:`Not scheduled`,P.__docgenInfo={description:`An object page: one project, with a breadcrumb back to the list, a header
holding its name, status, key facts and actions, tabs for its sections,
and an aside with its summary and activity. Edit opens a Drawer; saving
adds what changed to the activity. The state is local; swap it for your
data layer when you copy the page.`,methods:[],displayName:`ProjectDetail`,props:{project:{required:!1,tsType:{name:`Project`},description:`The record to show. Defaults to the first sample project.`,defaultValue:{value:`sampleProjects[0]`,computed:!0}},team:{required:!1,tsType:{name:`Array`,elements:[{name:`TeamMember`}],raw:`TeamMember[]`},description:`The people on it, for the Team tab and the header's head count. Defaults to the sample project's team.`,defaultValue:{value:`[
  { person: people.ines, role: 'Project manager', allocation: 50 },
  { person: people.tomas, role: 'Tech lead', allocation: 100 },
  { person: people.mei, role: 'Product designer', allocation: 80 },
  { person: people.rafa, role: 'Front-end developer', allocation: 100 },
  { person: people.noor, role: 'QA engineer', allocation: 40 },
]`,computed:!1}}},composes:[`Omit`]}})))()}var Ie=t({Archive:()=>J,Dark:()=>Q,Default:()=>K,Edit:()=>q,Mobile:()=>X,Sparse:()=>Z,Stacked:()=>Y,__namedExportsOrder:()=>ze,default:()=>Re}),Le,B,V,H,U,W,Re,G,K,q,J,Y,X,Z,Q,ze;function $(){return($=e((()=>{Fe(),h(),Le=r(),{expect:B,userEvent:V,waitFor:H,within:U}=__STORYBOOK_MODULE_TEST__,W=e=>[t=>(0,Le.jsx)(`div`,{style:{inlineSize:e,blockSize:760,border:`1px solid var(--border)`},onClickCapture:e=>e.target.closest(`a[href]`)&&e.preventDefault(),children:t()})],Re={title:`Templates/Object Management/Project Detail`,tags:[`experimental`],component:P,parameters:{layout:`fullscreen`},argTypes:{project:{control:!1},team:{control:!1}}},G=()=>U(document.body),K={decorators:W(1400),play:async({canvas:e})=>{let t=e.getByRole(`main`);await B(U(t).getByRole(`heading`,{level:1,name:`Harbor Lights`})).toBeVisible(),await B(e.getAllByRole(`heading`,{level:1})).toHaveLength(1);let n=e.getByRole(`navigation`,{name:`Breadcrumb`});await B(U(n).getByRole(`link`,{name:`Projects`})).toHaveAttribute(`href`,`#projects`),await B(U(n).getByText(`Harbor Lights`)).toHaveAttribute(`aria-current`,`page`),await B(e.getByRole(`list`,{name:`Key facts`})).toHaveTextContent(/Ines Okafor.*Sep 1, 2026 to Nov 30, 2026.*5 people/);let r=e.getByRole(`complementary`,{name:`Project summary`});await H(()=>B(r.getBoundingClientRect().left).toBeGreaterThanOrEqual(t.getBoundingClientRect().right)),await B(t.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy(),await B(U(r).getByRole(`heading`,{level:2,name:`Summary`})).toBeVisible(),await B(U(r).getByRole(`heading`,{level:2,name:`Activity`})).toBeVisible();let i=U(r).getByRole(`region`,{name:`Harbor Lights activity`});await B(U(i).getAllByRole(`listitem`)).toHaveLength(3),await B(e.getByRole(`heading`,{level:2,name:`Details`})).toBeVisible();let a=e.getByRole(`tablist`,{name:`Project sections`});await V.click(U(a).getByRole(`tab`,{name:`Team`}));let o=e.getByRole(`table`,{name:`Team`});await B(U(o).getAllByRole(`rowheader`)).toHaveLength(5)}},q={decorators:W(1400),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Edit`});await V.click(t);let n=await G().findByRole(`dialog`,{name:`Edit project`}),r=U(n).getByRole(`textbox`,{name:`Name`});await V.clear(r),await V.click(U(n).getByRole(`button`,{name:`Save`})),await B(r).toHaveAttribute(`aria-invalid`,`true`),await B(U(n).getByText(`Enter a name.`)).toBeVisible(),await V.type(r,`Harbor Lights 2`),await V.click(U(n).getByRole(`combobox`,{name:`Status`})),await V.click(await G().findByRole(`option`,{name:`On hold`})),await H(()=>B(G().queryByRole(`listbox`)).toBeNull());let i=U(n).getByRole(`textbox`,{name:`Estimation (USD)`});await V.clear(i),await V.type(i,`12000`),await V.click(U(n).getByRole(`button`,{name:`Save`})),await H(()=>B(G().queryByRole(`dialog`)).toBeNull()),await B(e.getByRole(`heading`,{level:1,name:`Harbor Lights 2`})).toBeVisible();let a=e.getByRole(`region`,{name:`Harbor Lights 2 activity`}),o=U(a).getAllByRole(`listitem`);await B(o).toHaveLength(5),await B(o[0]).toHaveTextContent(/Ines Okafor changed the estimation from \$9\.6K to \$12K/),await B(o[1]).toHaveTextContent(/changed the status from Active to On hold/),await V.click(t);let s=await G().findByRole(`dialog`,{name:`Edit project`});await V.type(U(s).getByRole(`textbox`,{name:`Name`}),` draft`),await V.click(U(s).getByRole(`button`,{name:`Cancel`})),await H(()=>B(G().queryByRole(`dialog`)).toBeNull()),await B(e.getByRole(`heading`,{level:1,name:`Harbor Lights 2`})).toBeVisible(),await H(()=>B(t).toHaveFocus()),await V.click(t),await G().findByRole(`dialog`,{name:`Edit project`}),await V.keyboard(`{Escape}`),await H(()=>B(G().queryByRole(`dialog`)).toBeNull()),await H(()=>B(t).toHaveFocus())}},J={decorators:W(1400),play:async({canvas:e})=>{await V.click(e.getByRole(`button`,{name:`More actions`})),await V.click(await G().findByRole(`menuitem`,{name:`Archive`})),await H(()=>B(G().queryByRole(`menu`)).toBeNull()),await B(e.getByText(`Archived`)).toBeVisible(),await V.click(e.getByRole(`button`,{name:`More actions`})),await V.click(await G().findByRole(`menuitem`,{name:`Restore`})),await H(()=>B(e.queryByText(`Archived`)).toBeNull())}},Y={decorators:W(1100),play:async({canvas:e})=>{let t=e.getByRole(`main`),n=e.getByRole(`complementary`,{name:`Project summary`});await H(()=>B(n.getBoundingClientRect().top).toBeGreaterThanOrEqual(t.getBoundingClientRect().bottom))}},X={decorators:W(375),play:async({canvas:e})=>{let t=e.getByRole(`main`);await B(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth);let n=e.getByRole(`heading`,{level:1}),r=e.getByRole(`button`,{name:`Edit`});await H(()=>B(r.getBoundingClientRect().top).toBeGreaterThan(n.getBoundingClientRect().bottom))}},Z={decorators:W(375),args:{project:{...m[2],name:`NorthwindCustomerPortalReplatformingAndMigrationProgramme`},team:[]},play:async({canvas:e})=>{let t=e.getByRole(`main`);await B(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await B(e.getByRole(`list`,{name:`Key facts`})).toHaveTextContent(/Unassigned.*Not scheduled.*0 people/),await V.click(e.getByRole(`tab`,{name:`Team`})),await B(e.getByRole(`heading`,{name:`Nobody on this project yet`})).toBeVisible()}},Q={globals:{theme:`dark`},decorators:W(1400),play:async({canvas:e})=>{await V.click(e.getByRole(`tab`,{name:`Team`})),await B(e.getByRole(`table`,{name:`Team`})).toBeVisible()}},ze=[`Default`,`Edit`,`Archive`,`Stacked`,`Mobile`,`Sparse`,`Dark`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(within(main).getByRole('heading', {
      level: 1,
      name: 'Harbor Lights'
    })).toBeVisible();
    await expect(canvas.getAllByRole('heading', {
      level: 1
    })).toHaveLength(1);
    const crumbs = canvas.getByRole('navigation', {
      name: 'Breadcrumb'
    });
    await expect(within(crumbs).getByRole('link', {
      name: 'Projects'
    })).toHaveAttribute('href', '#projects');
    await expect(within(crumbs).getByText('Harbor Lights')).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('list', {
      name: 'Key facts'
    })).toHaveTextContent(/Ines Okafor.*Sep 1, 2026 to Nov 30, 2026.*5 people/);

    // The aside sits beside the page, after it in reading order.
    const aside = canvas.getByRole('complementary', {
      name: 'Project summary'
    });
    await waitFor(() => expect(aside.getBoundingClientRect().left).toBeGreaterThanOrEqual(main.getBoundingClientRect().right));
    await expect(main.compareDocumentPosition(aside) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    await expect(within(aside).getByRole('heading', {
      level: 2,
      name: 'Summary'
    })).toBeVisible();
    await expect(within(aside).getByRole('heading', {
      level: 2,
      name: 'Activity'
    })).toBeVisible();
    const activity = within(aside).getByRole('region', {
      name: 'Harbor Lights activity'
    });
    await expect(within(activity).getAllByRole('listitem')).toHaveLength(3);

    // Tabs switch the section in the main column.
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Details'
    })).toBeVisible();
    const tabs = canvas.getByRole('tablist', {
      name: 'Project sections'
    });
    await userEvent.click(within(tabs).getByRole('tab', {
      name: 'Team'
    }));
    const team = canvas.getByRole('table', {
      name: 'Team'
    });
    await expect(within(team).getAllByRole('rowheader')).toHaveLength(5);
  }
}`,...K.parameters?.docs?.source},description:{story:`The whole record: breadcrumb, header, the Overview and Team tabs, and the summary and activity beside the page.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  play: async ({
    canvas
  }) => {
    const edit = canvas.getByRole('button', {
      name: 'Edit'
    });
    await userEvent.click(edit);
    const dialog = await body().findByRole('dialog', {
      name: 'Edit project'
    });

    // An empty name is refused and the drawer stays open.
    const name = within(dialog).getByRole('textbox', {
      name: 'Name'
    });
    await userEvent.clear(name);
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Save'
    }));
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await expect(within(dialog).getByText('Enter a name.')).toBeVisible();
    await userEvent.type(name, 'Harbor Lights 2');
    await userEvent.click(within(dialog).getByRole('combobox', {
      name: 'Status'
    }));
    await userEvent.click(await body().findByRole('option', {
      name: 'On hold'
    }));
    await waitFor(() => expect(body().queryByRole('listbox')).toBeNull());
    const estimation = within(dialog).getByRole('textbox', {
      name: 'Estimation (USD)'
    });
    await userEvent.clear(estimation);
    await userEvent.type(estimation, '12000');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Harbor Lights 2'
    })).toBeVisible();
    const activity = canvas.getByRole('region', {
      name: 'Harbor Lights 2 activity'
    });
    const events = within(activity).getAllByRole('listitem');
    await expect(events).toHaveLength(5);
    await expect(events[0]).toHaveTextContent(/Ines Okafor changed the estimation from \\$9\\.6K to \\$12K/);
    await expect(events[1]).toHaveTextContent(/changed the status from Active to On hold/);

    // Cancel leaves the record as it was, and the next edit starts from it.
    await userEvent.click(edit);
    const again = await body().findByRole('dialog', {
      name: 'Edit project'
    });
    await userEvent.type(within(again).getByRole('textbox', {
      name: 'Name'
    }), ' draft');
    await userEvent.click(within(again).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Harbor Lights 2'
    })).toBeVisible();
    await waitFor(() => expect(edit).toHaveFocus());

    // Escape closes it too, and focus returns to Edit.
    await userEvent.click(edit);
    await body().findByRole('dialog', {
      name: 'Edit project'
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await waitFor(() => expect(edit).toHaveFocus());
  }
}`,...q.parameters?.docs?.source},description:{story:`Edit opens a Drawer; saving updates the header and adds the changes to the activity.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  decorators: box(1400),
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    await userEvent.click(await body().findByRole('menuitem', {
      name: 'Archive'
    }));
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(canvas.getByText('Archived')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    await userEvent.click(await body().findByRole('menuitem', {
      name: 'Restore'
    }));
    await waitFor(() => expect(canvas.queryByText('Archived')).toBeNull());
  }
}`,...J.parameters?.docs?.source},description:{story:`Archive, from the actions menu, marks the record; Restore undoes it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: box(1100),
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    const aside = canvas.getByRole('complementary', {
      name: 'Project summary'
    });
    await waitFor(() => expect(aside.getBoundingClientRect().top).toBeGreaterThanOrEqual(main.getBoundingClientRect().bottom));
  }
}`,...Y.parameters?.docs?.source},description:{story:`Under 80rem of shell width the aside follows the page and the two scroll as one.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: box(375),
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth);
    const title = canvas.getByRole('heading', {
      level: 1
    });
    const edit = canvas.getByRole('button', {
      name: 'Edit'
    });
    await waitFor(() => expect(edit.getBoundingClientRect().top).toBeGreaterThan(title.getBoundingClientRect().bottom));
  }
}`,...X.parameters?.docs?.source},description:{story:`On a phone the actions drop under the name and nothing scrolls sideways.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: box(375),
  args: {
    project: {
      ...sampleProjects[2],
      name: 'NorthwindCustomerPortalReplatformingAndMigrationProgramme'
    },
    team: []
  },
  play: async ({
    canvas
  }) => {
    const main = canvas.getByRole('main');
    await expect(main.scrollWidth).toBeLessThanOrEqual(main.clientWidth);
    await expect(canvas.getByRole('list', {
      name: 'Key facts'
    })).toHaveTextContent(/Unassigned.*Not scheduled.*0 people/);
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Team'
    }));
    await expect(canvas.getByRole('heading', {
      name: 'Nobody on this project yet'
    })).toBeVisible();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Hard content: a name with no spaces, no PM, no dates, nobody on the team.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  decorators: box(1400),
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Team'
    }));
    await expect(canvas.getByRole('table', {
      name: 'Team'
    })).toBeVisible();
  }
}`,...Q.parameters?.docs?.source},description:{story:`Dark mode, with the Team tab open, so the accessibility check covers the table too.`,...Q.parameters?.docs?.description}}}})))()}export{Y as a,Z as i,q as n,$ as o,Ie as r,K as t};