import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{n as a,t as o}from"./Avatar-eVXMKP5w.js";import{n as s,t as c}from"./Button-BdtJKtga.js";import{n as l,t as u}from"./Checkbox-B3cisVKG.js";import{n as d,t as f}from"./Radio-D3NJaeSl.js";import{n as p,t as m}from"./Select-DumeCDxx.js";import{n as ee,t as h}from"./TextInput-ceLmDhn8.js";import{n as te,t as ne}from"./Textarea-Bn2v5EZX.js";import{r as re,t as g}from"./Modal-BqfntHMf.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_=`_section_qvc5j_1`,v=`_layout_qvc5j_7`,y=`_intro_qvc5j_12`,b=`_title_qvc5j_18`,x=`_description_qvc5j_25`,S=`_body_qvc5j_33`,C=`_fields_qvc5j_40`,w=`_split_qvc5j_50`,T=`_twoColumns_qvc5j_57`,E=`_fullWidth_qvc5j_62`,D=`_card_qvc5j_68`,O=`_footer_qvc5j_79`,k=`_actions_qvc5j_90`,A={section:_,layout:v,intro:y,title:b,description:x,body:S,fields:C,split:w,twoColumns:T,fullWidth:E,card:D,footer:O,actions:k}})))()}function M({title:e,description:t,children:n,layout:r=`split`,columns:a=1,isCard:o=!1,footer:s,headingLevel:c=2,className:l,...u}){let d=`h${c}`;return(0,F.jsx)(`section`,{className:i(A.section,A[r],l),...u,children:(0,F.jsxs)(`div`,{className:A.layout,children:[(0,F.jsxs)(`div`,{className:A.intro,children:[(0,F.jsx)(d,{className:A.title,children:e}),t&&(0,F.jsx)(`p`,{className:A.description,children:t})]}),(0,F.jsxs)(`div`,{className:i(A.body,o&&A.card),children:[(0,F.jsx)(`div`,{className:i(A.fields,a===2&&A.twoColumns),children:n}),s&&(0,F.jsx)(`div`,{className:A.footer,children:s})]})]})})}function N({className:e,...t}){return(0,F.jsx)(`div`,{className:i(A.fullWidth,e),...t})}function P({className:e,...t}){return(0,F.jsx)(`div`,{className:i(A.actions,e),...t})}var F;function I(){return(I=e((()=>{r(),j(),F=n(),M.__docgenInfo={description:`A group of related fields with a heading: one block of a settings page or
a form. Stack several, with FormActions after them.`,methods:[],displayName:`FormSection`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:`What these fields are for, or who sees them.`},children:{required:!0,tsType:{name:`ReactNode`},description:"The fields. Give each input `isFullWidth`; wrap one in FormFullWidth to span both columns."},layout:{required:!1,tsType:{name:`union`,raw:`"split" | "stacked"`,elements:[{name:`literal`,value:`"split"`},{name:`literal`,value:`"stacked"`}]},description:"`split`: title and description in a column beside the fields, as on a\nsettings page. `stacked`: title above the fields. Split stacks by itself\nwhen the section is narrower than 48rem.",defaultValue:{value:`"split"`,computed:!1}},columns:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Lay the fields out two to a row (one on narrow screens).`,defaultValue:{value:`1`,computed:!1}},isCard:{required:!1,tsType:{name:`boolean`},description:"Put the fields on a card. With `footer`, the footer is the card's bottom band.",defaultValue:{value:`false`,computed:!1}},footer:{required:!1,tsType:{name:`ReactNode`},description:`Usually FormActions.`},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:``,defaultValue:{value:`2`,computed:!1}}},composes:[`Omit`]},N.__docgenInfo={description:`In a two-column FormSection, a field that takes the whole row.`,methods:[],displayName:`FormFullWidth`},P.__docgenInfo={description:`The row of buttons at the end of a form: secondary actions first, the primary one last, at the end.`,methods:[],displayName:`FormActions`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Buttons, the primary one last.`}},composes:[`ComponentProps`]}})))()}var L=t({InModal:()=>X,Narrow:()=>Z,SettingsSections:()=>J,StackedInCard:()=>Y,__namedExportsOrder:()=>Q,default:()=>q}),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),s(),l(),d(),p(),ee(),te(),re(),I(),R=n(),{expect:z,fn:B,userEvent:V,waitFor:H,within:U}=__STORYBOOK_MODULE_TEST__,W=B(),G=e=>{e.preventDefault(),W(Object.fromEntries(new FormData(e.currentTarget)))},K=(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(h,{label:`First name`,name:`firstName`,autoComplete:`given-name`,isFullWidth:!0,defaultValue:`Ava`}),(0,R.jsx)(h,{label:`Last name`,name:`lastName`,autoComplete:`family-name`,isFullWidth:!0,defaultValue:`Stone`}),(0,R.jsx)(N,{children:(0,R.jsx)(h,{label:`Email address`,name:`email`,type:`email`,autoComplete:`email`,isFullWidth:!0,required:!0,defaultValue:`ava.stone@example.com`})}),(0,R.jsx)(m,{label:`Country`,name:`country`,options:[`Vietnam`,`Singapore`,`Japan`,`Germany`,`United States`],defaultValue:`Vietnam`,isFullWidth:!0}),(0,R.jsx)(h,{label:`City`,name:`city`,autoComplete:`address-level2`,isFullWidth:!0})]}),q={title:`Patterns/Application UI/Form Layouts`,component:M,parameters:{a11y:{test:`error`},layout:`padded`},args:{title:`Personal information`,children:K},argTypes:{children:{control:!1},footer:{control:!1}},beforeEach:()=>W.mockClear()},J={render:()=>(0,R.jsxs)(`form`,{"aria-label":`Account settings`,onSubmit:G,style:{maxInlineSize:`64rem`},children:[(0,R.jsxs)(M,{title:`Profile`,description:`This is shown on your public profile, so be careful what you share.`,children:[(0,R.jsx)(h,{label:`Username`,name:`username`,prefix:`zweihander.app/`,isFullWidth:!0,defaultValue:`avastone`}),(0,R.jsx)(ne,{label:`About`,name:`about`,helperText:`A few sentences about yourself.`,isFullWidth:!0,minRows:3}),(0,R.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-4)`},children:[(0,R.jsx)(o,{initials:`AS`,size:`lg`,"aria-label":`Ava Stone`}),(0,R.jsx)(c,{type:`button`,variant:`secondary`,appearance:`outlined`,size:`sm`,children:`Change photo`})]})]}),(0,R.jsx)(M,{title:`Personal information`,description:`Use an address where you can receive mail.`,columns:2,children:K}),(0,R.jsxs)(M,{title:`Notifications`,description:`We will always tell you about important changes to your account.`,children:[(0,R.jsxs)(`fieldset`,{style:{display:`grid`,gap:`var(--space-3)`,margin:0,padding:0,border:0},children:[(0,R.jsx)(`legend`,{style:{marginBlockEnd:`var(--space-3)`,fontWeight:500},children:`By email`}),(0,R.jsx)(u,{name:`comments`,label:`Comments`,helperText:`When someone comments on your posting.`,defaultChecked:!0}),(0,R.jsx)(u,{name:`offers`,label:`Offers`,helperText:`When a candidate accepts or rejects an offer.`})]}),(0,R.jsx)(f,{label:`Push notifications`,name:`push`,defaultValue:`mentions`,options:[{value:`everything`,label:`Everything`},{value:`mentions`,label:`Only mentions`},{value:`none`,label:`No push notifications`}]})]}),(0,R.jsxs)(P,{style:{paddingBlockStart:`var(--space-8)`},children:[(0,R.jsx)(c,{type:`button`,variant:`secondary`,appearance:`ghost`,children:`Cancel`}),(0,R.jsx)(c,{type:`submit`,children:`Save`})]})]}),play:async({canvas:e})=>{let t=e.getByRole(`form`,{name:`Account settings`});await z(U(t).getAllByRole(`heading`,{level:2}).map(e=>e.textContent)).toEqual([`Profile`,`Personal information`,`Notifications`]);let n=e.getByRole(`heading`,{name:`Profile`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:`Username`}).getBoundingClientRect();await z(r.left).toBeGreaterThan(n.right),await V.type(e.getByRole(`textbox`,{name:`City`}),`Nha Trang`),await V.click(e.getByRole(`button`,{name:`Save`})),await z(W).toHaveBeenCalledWith(z.objectContaining({username:`avastone`,city:`Nha Trang`,country:`Vietnam`,comments:`on`,push:`mentions`}))}},Y={render:()=>(0,R.jsx)(`form`,{"aria-label":`Personal information`,onSubmit:G,style:{maxInlineSize:`40rem`},children:(0,R.jsx)(M,{layout:`stacked`,isCard:!0,columns:2,title:`Personal information`,description:`Use an address where you can receive mail.`,footer:(0,R.jsxs)(P,{children:[(0,R.jsx)(c,{type:`button`,variant:`secondary`,appearance:`ghost`,children:`Cancel`}),(0,R.jsx)(c,{type:`submit`,children:`Save`})]}),children:K})}),play:async({canvas:e})=>{let t=e.getByRole(`textbox`,{name:`First name`}).getBoundingClientRect(),n=e.getByRole(`textbox`,{name:`Last name`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:/Email address/}).getBoundingClientRect();await z(Math.abs(t.top-n.top)).toBeLessThan(2),await z(r.width).toBeGreaterThan(t.width*1.8),await V.click(e.getByRole(`button`,{name:`Save`})),await z(W).toHaveBeenCalledWith(z.objectContaining({firstName:`Ava`,email:`ava.stone@example.com`}))}},X={render:()=>(0,R.jsx)(g,{trigger:(0,R.jsx)(c,{children:`Invite member`}),title:`Invite a member`,description:`They get an email with a link to join the workspace.`,footer:(0,R.jsxs)(P,{children:[(0,R.jsx)(c,{type:`button`,variant:`secondary`,appearance:`ghost`,"data-close":!0,children:`Cancel`}),(0,R.jsx)(c,{type:`submit`,form:`invite`,children:`Send invite`})]}),children:(0,R.jsxs)(`form`,{id:`invite`,"aria-label":`Invite a member`,onSubmit:G,style:{display:`grid`,gap:`var(--space-4)`},children:[(0,R.jsx)(h,{label:`Email address`,name:`email`,type:`email`,isFullWidth:!0,required:!0}),(0,R.jsx)(m,{label:`Role`,name:`role`,options:[`Viewer`,`Editor`,`Admin`],defaultValue:`Editor`,isFullWidth:!0})]})}),play:async({canvas:e})=>{await V.click(e.getByRole(`button`,{name:`Invite member`}));let t=U(await U(document.body).findByRole(`dialog`,{name:`Invite a member`}));await V.type(t.getByRole(`textbox`,{name:/Email address/}),`leo@example.com`),await V.click(t.getByRole(`button`,{name:`Send invite`})),await H(()=>z(W).toHaveBeenCalledWith({email:`leo@example.com`,role:`Editor`})),await V.keyboard(`{Escape}`),await H(()=>z(U(document.body).queryByRole(`dialog`)).toBeNull())}},Z={args:{title:`Personal information`,description:`Use an address where you can receive mail.`,columns:2},decorators:[e=>(0,R.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`heading`,{name:`Personal information`}).getBoundingClientRect(),n=e.getByRole(`textbox`,{name:`First name`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:`Last name`}).getBoundingClientRect();await z(n.top).toBeGreaterThan(t.bottom),await z(r.top).toBeGreaterThan(n.bottom)}},Q=[`SettingsSections`,`StackedInCard`,`InModal`,`Narrow`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <form aria-label="Account settings" onSubmit={submit} style={{
    maxInlineSize: '64rem'
  }}>
      <FormSection title="Profile" description="This is shown on your public profile, so be careful what you share.">
        <TextInput label="Username" name="username" prefix="zweihander.app/" isFullWidth defaultValue="avastone" />
        <Textarea label="About" name="about" helperText="A few sentences about yourself." isFullWidth minRows={3} />
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }}>
          <Avatar initials="AS" size="lg" aria-label="Ava Stone" />
          <Button type="button" variant="secondary" appearance="outlined" size="sm">
            Change photo
          </Button>
        </div>
      </FormSection>
      <FormSection title="Personal information" description="Use an address where you can receive mail." columns={2}>
        {personal}
      </FormSection>
      <FormSection title="Notifications" description="We will always tell you about important changes to your account.">
        <fieldset style={{
        display: 'grid',
        gap: 'var(--space-3)',
        margin: 0,
        padding: 0,
        border: 0
      }}>
          <legend style={{
          marginBlockEnd: 'var(--space-3)',
          fontWeight: 500
        }}>By email</legend>
          <Checkbox name="comments" label="Comments" helperText="When someone comments on your posting." defaultChecked />
          <Checkbox name="offers" label="Offers" helperText="When a candidate accepts or rejects an offer." />
        </fieldset>
        <RadioGroup label="Push notifications" name="push" defaultValue="mentions" options={[{
        value: 'everything',
        label: 'Everything'
      }, {
        value: 'mentions',
        label: 'Only mentions'
      }, {
        value: 'none',
        label: 'No push notifications'
      }]} />
      </FormSection>
      <FormActions style={{
      paddingBlockStart: 'var(--space-8)'
    }}>
        <Button type="button" variant="secondary" appearance="ghost">
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </FormActions>
    </form>,
  play: async ({
    canvas
  }) => {
    const form = canvas.getByRole('form', {
      name: 'Account settings'
    });
    await expect(within(form).getAllByRole('heading', {
      level: 2
    }).map(h => h.textContent)).toEqual(['Profile', 'Personal information', 'Notifications']);
    // Split: the section intro sits beside its fields at this width.
    const intro = canvas.getByRole('heading', {
      name: 'Profile'
    }).getBoundingClientRect();
    const field = canvas.getByRole('textbox', {
      name: 'Username'
    }).getBoundingClientRect();
    await expect(field.left).toBeGreaterThan(intro.right);
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'City'
    }), 'Nha Trang');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      username: 'avastone',
      city: 'Nha Trang',
      country: 'Vietnam',
      comments: 'on',
      push: 'mentions'
    }));
  }
}`,...J.parameters?.docs?.source},description:{story:`A settings page: each section's title and description in a column beside its fields.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <form aria-label="Personal information" onSubmit={submit} style={{
    maxInlineSize: '40rem'
  }}>
      <FormSection layout="stacked" isCard columns={2} title="Personal information" description="Use an address where you can receive mail." footer={<FormActions>
            <Button type="button" variant="secondary" appearance="ghost">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </FormActions>}>
        {personal}
      </FormSection>
    </form>,
  play: async ({
    canvas
  }) => {
    const first = canvas.getByRole('textbox', {
      name: 'First name'
    }).getBoundingClientRect();
    const last = canvas.getByRole('textbox', {
      name: 'Last name'
    }).getBoundingClientRect();
    const email = canvas.getByRole('textbox', {
      name: /Email address/
    }).getBoundingClientRect();
    // Two to a row; the email field spans both.
    await expect(Math.abs(first.top - last.top)).toBeLessThan(2);
    await expect(email.width).toBeGreaterThan(first.width * 1.8);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      firstName: 'Ava',
      email: 'ava.stone@example.com'
    }));
  }
}`,...Y.parameters?.docs?.source},description:{story:`One section on a card, fields two to a row, the actions in the card's bottom band.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Modal trigger={<Button>Invite member</Button>} title="Invite a member" description="They get an email with a link to join the workspace." footer={<FormActions>
          <Button type="button" variant="secondary" appearance="ghost" data-close>
            Cancel
          </Button>
          <Button type="submit" form="invite">
            Send invite
          </Button>
        </FormActions>}>
      <form id="invite" aria-label="Invite a member" onSubmit={submit} style={{
      display: 'grid',
      gap: 'var(--space-4)'
    }}>
        <TextInput label="Email address" name="email" type="email" isFullWidth required />
        <Select label="Role" name="role" options={['Viewer', 'Editor', 'Admin']} defaultValue="Editor" isFullWidth />
      </form>
    </Modal>,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Invite member'
    }));
    const dialog = within(await within(document.body).findByRole('dialog', {
      name: 'Invite a member'
    }));
    await userEvent.type(dialog.getByRole('textbox', {
      name: /Email address/
    }), 'leo@example.com');
    await userEvent.click(dialog.getByRole('button', {
      name: 'Send invite'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      email: 'leo@example.com',
      role: 'Editor'
    }));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull());
  }
}`,...X.parameters?.docs?.source},description:{story:`A short form in a Modal: the submit button lives in the footer and names the form it submits.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Personal information',
    description: 'Use an address where you can receive mail.',
    columns: 2
  },
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const intro = canvas.getByRole('heading', {
      name: 'Personal information'
    }).getBoundingClientRect();
    const first = canvas.getByRole('textbox', {
      name: 'First name'
    }).getBoundingClientRect();
    const last = canvas.getByRole('textbox', {
      name: 'Last name'
    }).getBoundingClientRect();
    await expect(first.top).toBeGreaterThan(intro.bottom);
    await expect(last.top).toBeGreaterThan(first.bottom);
  }
}`,...Z.parameters?.docs?.source},description:{story:`A split section stacks by itself when its container is narrow.`,...Z.parameters?.docs?.description}}}})))()}export{Y as a,J as i,X as n,$ as o,Z as r,L as t};