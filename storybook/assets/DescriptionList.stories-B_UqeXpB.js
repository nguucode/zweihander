import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{n as s,t as c}from"./Link-Bhk0TW_i.js";import{n as l,t as u}from"./DescriptionList-BJqtYQ8L.js";var d=t({Columns:()=>b,ColumnsNarrow:()=>C,InCard:()=>x,Stacked:()=>S,__namedExportsOrder:()=>w,default:()=>y}),f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),r(),s(),l(),f=n(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h=`Product designer with eight years in B2B software, most recently leading the design system at a payments company. Wants to own a product area end to end.`,g=(0,f.jsx)(`ul`,{style:{display:`grid`,gap:`var(--space-2)`,margin:0,padding:0,listStyle:`none`},children:[`resume_ava_stone.pdf`,`portfolio_2026.pdf`].map(e=>(0,f.jsxs)(`li`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,f.jsx)(o,{name:`file`}),(0,f.jsx)(`span`,{style:{flex:1,color:`var(--foreground)`},children:e}),(0,f.jsxs)(c,{href:`#${e}`,size:`sm`,children:[`Download`,(0,f.jsxs)(`span`,{style:{position:`absolute`,inlineSize:1,blockSize:1,overflow:`hidden`,clipPath:`inset(50%)`},children:[` `,e]})]})]},e))}),_=[{term:`Full name`,details:`Ava Stone`},{term:`Application for`,details:`Senior Product Designer`},{term:`Email address`,details:`ava.stone@example.com`},{term:`Salary expectation`,details:`$120,000`},{term:`About`,details:h,isWide:!0},{term:`Attachments`,details:g,isWide:!0}],v=e=>(0,f.jsxs)(c,{href:`#edit-${e}`,size:`sm`,children:[`Update`,(0,f.jsxs)(`span`,{style:{position:`absolute`,inlineSize:1,blockSize:1,overflow:`hidden`,clipPath:`inset(50%)`},children:[` `,e]})]}),y={title:`Patterns/Application UI/Description List`,tags:[`experimental`],component:u,parameters:{layout:`padded`},args:{title:`Applicant information`,description:`Personal details and application.`,items:_},argTypes:{items:{control:!1},actions:{control:!1},layout:{control:`inline-radio`,options:[`columns`,`grid`,`stacked`]}},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`48rem`},children:e()})]},b={args:{items:_.map(e=>e.term===`About`||e.term===`Attachments`?e:{...e,action:v(e.term)})},play:async({canvas:e})=>{await p(e.getAllByRole(`term`)).toHaveLength(6);let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await p(Math.abs(t.top-n.top)).toBeLessThan(4),await p(e.getByRole(`link`,{name:`Update Email address`})).toBeVisible()}},x={args:{layout:`grid`,isCard:!0,actions:(0,f.jsx)(i,{variant:`secondary`,appearance:`outlined`,size:`sm`,children:`Edit`})},play:async({canvas:e})=>{let t=e.getByText(`Full name`).closest(`div`).getBoundingClientRect(),n=e.getByText(`Application for`).closest(`div`).getBoundingClientRect(),r=e.getByText(`About`).closest(`div`).getBoundingClientRect();await p(Math.abs(t.top-n.top)).toBeLessThan(4),await p(r.width).toBeGreaterThan(n.width*1.8),await p(m(e.getByText(`Attachments`).closest(`div`)).getByRole(`link`,{name:`Download portfolio_2026.pdf`})).toBeVisible()}},S={args:{layout:`stacked`,items:_.slice(0,4),description:void 0},decorators:[e=>(0,f.jsx)(`div`,{style:{inlineSize:320},children:e()})],play:async({canvas:e})=>{let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await p(n.top).toBeGreaterThanOrEqual(t.bottom)}},C={...b,decorators:[e=>(0,f.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let[t,n]=[e.getAllByRole(`term`)[0],e.getByText(`Ava Stone`)].map(e=>e.getBoundingClientRect());await p(n.top).toBeGreaterThanOrEqual(t.bottom)}},w=[`Columns`,`InCard`,`Stacked`,`ColumnsNarrow`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Term and details side by side, a line between rows, an action per row.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`On a card: header with actions in a top band, two columns of fields, long ones full width.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Term over details, one field after another: for a sidebar or a phone.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Columns stack by themselves when the list is narrow, whatever the viewport.`,...C.parameters?.docs?.description}}}})))()}export{S as a,x as i,C as n,T as o,d as r,b as t};