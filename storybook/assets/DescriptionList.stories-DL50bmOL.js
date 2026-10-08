import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{n as a,t as o}from"./Button-BdtJKtga.js";import{n as s,t as c}from"./icon-Dc4hTclj.js";import{n as l,t as u}from"./Link-Cxb1auP5.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{d=`_descriptionList_1ssv4_1`,f=`_header_1ssv4_11`,p=`_headerText_1ssv4_19`,m=`_title_1ssv4_25`,h=`_description_1ssv4_1`,g=`_actions_1ssv4_37`,_=`_list_1ssv4_43`,v=`_term_1ssv4_48`,y=`_details_1ssv4_52`,b=`_action_1ssv4_37`,x=`_columns_1ssv4_67`,S=`_row_1ssv4_70`,C=`_grid_1ssv4_89`,w=`_stacked_1ssv4_101`,T=`_wide_1ssv4_106`,E=`_card_1ssv4_117`,D={descriptionList:d,header:f,headerText:p,title:m,description:h,actions:g,list:_,term:v,details:y,action:b,columns:x,row:S,grid:C,stacked:w,wide:T,card:E}})))()}function k({items:e,title:t,description:n,actions:r,layout:a=`columns`,isCard:o=!1,headingLevel:s=2,className:c,...l}){let u=`h${s}`,d=t!==void 0||n!==void 0||r!==void 0;return(0,A.jsxs)(`section`,{className:i(D.descriptionList,D[a],o&&D.card,c),...l,children:[d&&(0,A.jsxs)(`div`,{className:D.header,children:[(0,A.jsxs)(`div`,{className:D.headerText,children:[t&&(0,A.jsx)(u,{className:D.title,children:t}),n&&(0,A.jsx)(`p`,{className:D.description,children:n})]}),r&&(0,A.jsx)(`div`,{className:D.actions,children:r})]}),(0,A.jsx)(`dl`,{className:D.list,children:e.map(e=>(0,A.jsxs)(`div`,{className:i(D.row,e.isWide&&D.wide,e.action!==void 0&&D.withAction),children:[(0,A.jsx)(`dt`,{className:D.term,children:e.term}),(0,A.jsx)(`dd`,{className:D.details,children:e.details}),e.action&&(0,A.jsx)(`dd`,{className:D.action,children:e.action})]},e.term))})]})}var A;function j(){return(j=e((()=>{r(),O(),A=n(),k.__docgenInfo={description:`The fields of a record as terms and details: a profile, an order, an
application. Read-only; its editable twin is a settings form.`,methods:[],displayName:`DescriptionList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`DescriptionItem`}],raw:`DescriptionItem[]`},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:`Buttons at the end of the header.`},layout:{required:!1,tsType:{name:`union`,raw:`'columns' | 'grid' | 'stacked'`,elements:[{name:`literal`,value:`'columns'`},{name:`literal`,value:`'grid'`},{name:`literal`,value:`'stacked'`}]},description:"`columns`: term and details side by side, a row each.\n`grid`: two columns of term-over-details pairs.\n`stacked`: term over details, one after another. Columns fall back to\nthis on narrow screens anyway.",defaultValue:{value:`'columns'`,computed:!1}},isCard:{required:!1,tsType:{name:`boolean`},description:`Put the list on a card with the header in its top band.`,defaultValue:{value:`false`,computed:!1}},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:``,defaultValue:{value:`2`,computed:!1}}},composes:[`Omit`]}})))()}var M=t({Columns:()=>V,ColumnsNarrow:()=>W,InCard:()=>H,Stacked:()=>U,__namedExportsOrder:()=>G,default:()=>B}),N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{s(),a(),l(),j(),N=n(),{expect:P,within:F}=__STORYBOOK_MODULE_TEST__,I=`Product designer with eight years in B2B software, most recently leading the design system at a payments company. Wants to own a product area end to end.`,L=(0,N.jsx)(`ul`,{style:{display:`grid`,gap:`var(--space-2)`,margin:0,padding:0,listStyle:`none`},children:[`resume_ava_stone.pdf`,`portfolio_2026.pdf`].map(e=>(0,N.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,N.jsx)(c,{name:`file`}),(0,N.jsx)(`span`,{style:{flex:1,color:`var(--foreground)`},children:e}),(0,N.jsxs)(u,{href:`#${e}`,size:`sm`,children:[`Download`,(0,N.jsxs)(`span`,{style:{position:`absolute`,inlineSize:1,blockSize:1,overflow:`hidden`,clipPath:`inset(50%)`},children:[` `,e]})]})]},e))}),R=[{term:`Full name`,details:`Ava Stone`},{term:`Application for`,details:`Senior Product Designer`},{term:`Email address`,details:`ava.stone@example.com`},{term:`Salary expectation`,details:`$120,000`},{term:`About`,details:I,isWide:!0},{term:`Attachments`,details:L,isWide:!0}],z=e=>(0,N.jsxs)(u,{href:`#edit-${e}`,size:`sm`,children:[`Update`,(0,N.jsxs)(`span`,{style:{position:`absolute`,inlineSize:1,blockSize:1,overflow:`hidden`,clipPath:`inset(50%)`},children:[` `,e]})]}),B={title:`Patterns/Application UI/Description List`,component:k,parameters:{a11y:{test:`error`},layout:`padded`},args:{title:`Applicant information`,description:`Personal details and application.`,items:R},argTypes:{items:{control:!1},actions:{control:!1},layout:{control:`inline-radio`,options:[`columns`,`grid`,`stacked`]}},decorators:[e=>(0,N.jsx)(`div`,{style:{maxInlineSize:`48rem`},children:e()})]},V={args:{items:R.map(e=>e.term===`About`||e.term===`Attachments`?e:{...e,action:z(e.term)})},play:async({canvas:e})=>{await P(e.getAllByRole(`term`)).toHaveLength(6);let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await P(Math.abs(t.top-n.top)).toBeLessThan(4),await P(e.getByRole(`link`,{name:`Update Email address`})).toBeVisible()}},H={args:{layout:`grid`,isCard:!0,actions:(0,N.jsx)(o,{variant:`secondary`,appearance:`outlined`,size:`sm`,children:`Edit`})},play:async({canvas:e})=>{let t=e.getByText(`Full name`).closest(`div`).getBoundingClientRect(),n=e.getByText(`Application for`).closest(`div`).getBoundingClientRect(),r=e.getByText(`About`).closest(`div`).getBoundingClientRect();await P(Math.abs(t.top-n.top)).toBeLessThan(4),await P(r.width).toBeGreaterThan(n.width*1.8),await P(F(e.getByText(`Attachments`).closest(`div`)).getByRole(`link`,{name:`Download portfolio_2026.pdf`})).toBeVisible()}},U={args:{layout:`stacked`,items:R.slice(0,4),description:void 0},decorators:[e=>(0,N.jsx)(`div`,{style:{inlineSize:320},children:e()})],play:async({canvas:e})=>{let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await P(n.top).toBeGreaterThanOrEqual(t.bottom)}},W={...V,decorators:[e=>(0,N.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await P(n.top).toBeGreaterThanOrEqual(t.bottom)}},G=[`Columns`,`InCard`,`Stacked`,`ColumnsNarrow`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    items: applicant.map(i => i.term === 'About' || i.term === 'Attachments' ? i : {
      ...i,
      action: update(i.term)
    })
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('term')).toHaveLength(6);
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map(e => e.getBoundingClientRect());
    // Side by side at this width.
    await expect(Math.abs(term.top - details.top)).toBeLessThan(4);
    await expect(canvas.getByRole('link', {
      name: 'Update Email address'
    })).toBeVisible();
  }
}`,...V.parameters?.docs?.source},description:{story:`Term and details side by side, a line between rows, an action per row.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    isCard: true,
    actions: <Button variant="secondary" appearance="outlined" size="sm">
        Edit
      </Button>
  },
  play: async ({
    canvas
  }) => {
    const email = canvas.getByText('Full name').closest('div')!.getBoundingClientRect();
    const role = canvas.getByText('Application for').closest('div')!.getBoundingClientRect();
    const aboutRow = canvas.getByText('About').closest('div')!.getBoundingClientRect();
    // Two per row, and the wide field spans both.
    await expect(Math.abs(email.top - role.top)).toBeLessThan(4);
    await expect(aboutRow.width).toBeGreaterThan(role.width * 1.8);
    await expect(within(canvas.getByText('Attachments').closest('div')!).getByRole('link', {
      name: 'Download portfolio_2026.pdf'
    })).toBeVisible();
  }
}`,...H.parameters?.docs?.source},description:{story:`On a card: header with actions in a top band, two columns of fields, long ones full width.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'stacked',
    items: applicant.slice(0, 4),
    description: undefined
  },
  decorators: [Story => <div style={{
    inlineSize: 320
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map(e => e.getBoundingClientRect());
    await expect(details.top).toBeGreaterThanOrEqual(term.bottom);
  }
}`,...U.parameters?.docs?.source},description:{story:`Term over details, one field after another: for a sidebar or a phone.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...Columns,
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const [term, details] = [canvas.getAllByRole('term')[0], canvas.getByText('Ava Stone')].map(e => e.getBoundingClientRect());
    await expect(details.top).toBeGreaterThanOrEqual(term.bottom);
  }
}`,...W.parameters?.docs?.source},description:{story:`Columns stack by themselves when the list is narrow, whatever the viewport.`,...W.parameters?.docs?.description}}}})))()}export{U as a,H as i,W as n,K as o,M as r,V as t};