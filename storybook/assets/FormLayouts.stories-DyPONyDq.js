import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./Select-BsYPTVUS.js";import{r as c,t as l}from"./Avatar-Br9NGvV-.js";import{n as u,t as d}from"./Checkbox-5Fepdwz1.js";import{n as f,t as p}from"./Radio-vEly5vBb.js";import{r as m,t as h}from"./TextInput-vfco79YG.js";import{n as g,t as _}from"./Textarea-Dd8hy5Kc.js";import{r as v,t as y}from"./Modal-ByvhTgOp.js";import{a as b,i as x,n as S,r as C,t as w}from"./FormLayouts-OSTbjqat.js";var T=t({FieldGroups:()=>H,InModal:()=>V,Narrow:()=>U,SettingsSections:()=>z,StackedInCard:()=>B,__namedExportsOrder:()=>W,default:()=>R});function E(){let[e,t]=(0,D.useState)(!0);return(0,O.jsxs)(`form`,{"aria-label":`Billing`,onSubmit:F,style:{maxInlineSize:`48rem`},children:[(0,O.jsxs)(x,{layout:`stacked`,columns:2,title:`Billing`,children:[(0,O.jsx)(h,{label:`Company`,name:`company`,isFullWidth:!0,defaultValue:`Ontheshore`}),(0,O.jsx)(h,{label:`Tax ID`,name:`taxId`,isFullWidth:!0}),(0,O.jsxs)(S,{legend:`Billing address`,description:`Printed on every invoice.`,columns:2,children:[(0,O.jsx)(C,{children:(0,O.jsx)(h,{label:`Street address`,name:`street`,autoComplete:`street-address`,isFullWidth:!0})}),(0,O.jsx)(h,{label:`City`,name:`billingCity`,autoComplete:`address-level2`,isFullWidth:!0}),(0,O.jsx)(h,{label:`Postal code`,name:`postalCode`,autoComplete:`postal-code`,isFullWidth:!0})]}),(0,O.jsx)(C,{children:(0,O.jsx)(d,{name:`sameAddress`,label:`Ship to the billing address`,checked:e,onCheckedChange:t})}),(0,O.jsxs)(S,{legend:`Shipping address`,disabled:e,children:[(0,O.jsx)(h,{label:`Street address`,name:`shippingStreet`,isFullWidth:!0,defaultValue:`12 Tran Phu`}),(0,O.jsx)(s,{label:`Country`,name:`shippingCountry`,options:I,defaultValue:`Vietnam`,isFullWidth:!0}),(0,O.jsx)(d,{name:`leaveAtReception`,label:`Leave at reception`,defaultChecked:!0})]})]}),(0,O.jsx)(w,{style:{paddingBlockStart:`var(--space-6)`},children:(0,O.jsx)(a,{type:`submit`,children:`Save`})})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{D=n(),c(),i(),u(),f(),o(),m(),g(),v(),b(),O=r(),{expect:k,fn:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P=A(),F=e=>{e.preventDefault(),P(Object.fromEntries(new FormData(e.currentTarget)))},I=[`Vietnam`,`Singapore`,`Japan`,`Germany`,`United States`],L=(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h,{label:`First name`,name:`firstName`,autoComplete:`given-name`,isFullWidth:!0,defaultValue:`Ava`}),(0,O.jsx)(h,{label:`Last name`,name:`lastName`,autoComplete:`family-name`,isFullWidth:!0,defaultValue:`Stone`}),(0,O.jsx)(C,{children:(0,O.jsx)(h,{label:`Email address`,name:`email`,type:`email`,autoComplete:`email`,isFullWidth:!0,required:!0,defaultValue:`ava.stone@example.com`})}),(0,O.jsx)(s,{label:`Country`,name:`country`,options:I,defaultValue:`Vietnam`,isFullWidth:!0}),(0,O.jsx)(h,{label:`City`,name:`city`,autoComplete:`address-level2`,isFullWidth:!0})]}),R={title:`Patterns/Application UI/Form Layouts`,tags:[`experimental`],component:x,parameters:{layout:`padded`},args:{title:`Personal information`,children:L},argTypes:{children:{control:!1},footer:{control:!1}},beforeEach:()=>P.mockClear()},z={render:()=>(0,O.jsxs)(`form`,{"aria-label":`Account settings`,onSubmit:F,style:{maxInlineSize:`64rem`},children:[(0,O.jsxs)(x,{title:`Profile`,description:`This is shown on your public profile, so be careful what you share.`,children:[(0,O.jsx)(h,{label:`Username`,name:`username`,prefix:`zweihander.app/`,isFullWidth:!0,defaultValue:`avastone`}),(0,O.jsx)(_,{label:`About`,name:`about`,helperText:`A few sentences about yourself.`,isFullWidth:!0,minRows:3}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-4)`},children:[(0,O.jsx)(l,{initials:`AS`,size:`lg`,"aria-label":`Ava Stone`}),(0,O.jsx)(a,{type:`button`,variant:`secondary`,appearance:`outlined`,size:`sm`,children:`Change photo`})]})]}),(0,O.jsx)(x,{title:`Personal information`,description:`Use an address where you can receive mail.`,columns:2,children:L}),(0,O.jsxs)(x,{title:`Notifications`,description:`We will always tell you about important changes to your account.`,children:[(0,O.jsxs)(S,{legend:`By email`,children:[(0,O.jsx)(d,{name:`comments`,label:`Comments`,helperText:`When someone comments on your posting.`,defaultChecked:!0}),(0,O.jsx)(d,{name:`offers`,label:`Offers`,helperText:`When a candidate accepts or rejects an offer.`})]}),(0,O.jsx)(p,{label:`Push notifications`,name:`push`,defaultValue:`mentions`,options:[{value:`everything`,label:`Everything`},{value:`mentions`,label:`Only mentions`},{value:`none`,label:`No push notifications`}]})]}),(0,O.jsxs)(w,{style:{paddingBlockStart:`var(--space-8)`},children:[(0,O.jsx)(a,{type:`button`,variant:`secondary`,appearance:`ghost`,children:`Cancel`}),(0,O.jsx)(a,{type:`submit`,children:`Save`})]})]}),play:async({canvas:e})=>{let t=e.getByRole(`form`,{name:`Account settings`});await k(N(t).getAllByRole(`heading`,{level:2}).map(e=>e.textContent)).toEqual([`Profile`,`Personal information`,`Notifications`]);let n=e.getByRole(`heading`,{name:`Profile`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:`Username`}).getBoundingClientRect();await k(r.left).toBeGreaterThan(n.right),await k(N(e.getByRole(`group`,{name:`By email`})).getAllByRole(`checkbox`)).toHaveLength(2),await j.type(e.getByRole(`textbox`,{name:`City`}),`Nha Trang`),await j.click(e.getByRole(`button`,{name:`Save`})),await k(P).toHaveBeenCalledWith(k.objectContaining({username:`avastone`,city:`Nha Trang`,country:`Vietnam`,comments:`on`,push:`mentions`}))}},B={render:()=>(0,O.jsx)(`form`,{"aria-label":`Personal information`,onSubmit:F,style:{maxInlineSize:`40rem`},children:(0,O.jsx)(x,{layout:`stacked`,isCard:!0,columns:2,title:`Personal information`,description:`Use an address where you can receive mail.`,footer:(0,O.jsxs)(w,{children:[(0,O.jsx)(a,{type:`button`,variant:`secondary`,appearance:`ghost`,children:`Cancel`}),(0,O.jsx)(a,{type:`submit`,children:`Save`})]}),children:L})}),play:async({canvas:e})=>{let t=e.getByRole(`textbox`,{name:`First name`}).getBoundingClientRect(),n=e.getByRole(`textbox`,{name:`Last name`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:/Email address/}).getBoundingClientRect();await k(Math.abs(t.top-n.top)).toBeLessThan(2),await k(r.width).toBeGreaterThan(t.width*1.8),await j.click(e.getByRole(`button`,{name:`Save`})),await k(P).toHaveBeenCalledWith(k.objectContaining({firstName:`Ava`,email:`ava.stone@example.com`}))}},V={render:()=>(0,O.jsx)(y,{trigger:(0,O.jsx)(a,{children:`Invite member`}),title:`Invite a member`,description:`They get an email with a link to join the workspace.`,footer:(0,O.jsxs)(w,{children:[(0,O.jsx)(a,{type:`button`,variant:`secondary`,appearance:`ghost`,"data-close":!0,children:`Cancel`}),(0,O.jsx)(a,{type:`submit`,form:`invite`,children:`Send invite`})]}),children:(0,O.jsxs)(`form`,{id:`invite`,"aria-label":`Invite a member`,onSubmit:F,style:{display:`grid`,gap:`var(--space-4)`},children:[(0,O.jsx)(h,{label:`Email address`,name:`email`,type:`email`,isFullWidth:!0,required:!0}),(0,O.jsx)(s,{label:`Role`,name:`role`,options:[`Viewer`,`Editor`,`Admin`],defaultValue:`Editor`,isFullWidth:!0})]})}),play:async({canvas:e})=>{await j.click(e.getByRole(`button`,{name:`Invite member`}));let t=N(await N(document.body).findByRole(`dialog`,{name:`Invite a member`}));await j.type(t.getByRole(`textbox`,{name:/Email address/}),`leo@example.com`),await j.click(t.getByRole(`button`,{name:`Send invite`})),await M(()=>k(P).toHaveBeenCalledWith({email:`leo@example.com`,role:`Editor`})),await j.keyboard(`{Escape}`),await M(()=>k(N(document.body).queryByRole(`dialog`)).toBeNull())}},H={render:()=>(0,O.jsx)(E,{}),play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`Billing address`});await k(t).toHaveAccessibleDescription(`Printed on every invoice.`);let n=e=>e.getBoundingClientRect().width;await M(()=>k(n(t)).toBeGreaterThan(n(e.getByRole(`textbox`,{name:`Company`}))+n(e.getByRole(`textbox`,{name:`Tax ID`})))),await M(()=>{let e=N(t).getByRole(`textbox`,{name:`City`}).getBoundingClientRect(),n=N(t).getByRole(`textbox`,{name:`Postal code`}).getBoundingClientRect();k(Math.abs(e.top-n.top)).toBeLessThan(2)});let r=e.getByRole(`group`,{name:`Shipping address`});await k(N(r).getByRole(`textbox`,{name:`Street address`})).toBeDisabled(),await k(Number(getComputedStyle(N(r).getByRole(`combobox`,{name:`Country`})).opacity)).toBeLessThan(1);let i=N(r).getByRole(`checkbox`,{name:`Leave at reception`});await k(i).toHaveAttribute(`aria-disabled`,`true`),await k(i).not.toHaveAttribute(`tabindex`,`0`),await k(Number(getComputedStyle(i.closest(`label`)).opacity)).toBeLessThan(1),await j.click(i,{pointerEventsCheck:0}),await k(i).toBeChecked(),await j.type(N(t).getByRole(`textbox`,{name:`City`}),`Hanoi`),await j.click(e.getByRole(`button`,{name:`Save`})),await k(P).toHaveBeenCalledWith(k.objectContaining({company:`Ontheshore`,billingCity:`Hanoi`})),await k(P.mock.lastCall?.[0]).not.toHaveProperty(`shippingStreet`),await k(P.mock.lastCall?.[0]).not.toHaveProperty(`leaveAtReception`),await j.click(e.getByRole(`checkbox`,{name:`Ship to the billing address`})),await k(N(r).getByRole(`textbox`,{name:`Street address`})).toBeEnabled(),await k(i).not.toHaveAttribute(`aria-disabled`),await j.click(i),await k(i).not.toBeChecked()}},U={args:{title:`Personal information`,description:`Use an address where you can receive mail.`,columns:2},decorators:[e=>(0,O.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`heading`,{name:`Personal information`}).getBoundingClientRect(),n=e.getByRole(`textbox`,{name:`First name`}).getBoundingClientRect(),r=e.getByRole(`textbox`,{name:`Last name`}).getBoundingClientRect();await k(n.top).toBeGreaterThan(t.bottom),await k(r.top).toBeGreaterThan(n.bottom)}},W=[`SettingsSections`,`StackedInCard`,`InModal`,`FieldGroups`,`Narrow`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        <FormFieldGroup legend="By email">
          <Checkbox name="comments" label="Comments" helperText="When someone comments on your posting." defaultChecked />
          <Checkbox name="offers" label="Offers" helperText="When a candidate accepts or rejects an offer." />
        </FormFieldGroup>
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
    await expect(within(canvas.getByRole('group', {
      name: 'By email'
    })).getAllByRole('checkbox')).toHaveLength(2);
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
}`,...z.parameters?.docs?.source},description:{story:`A settings page: each section's title and description in a column beside its fields.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`One section on a card, fields two to a row, the actions in the card's bottom band.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`A short form in a Modal: the submit button lives in the footer and names the form it submits.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <FieldGroupsForm />,
  play: async ({
    canvas
  }) => {
    const billing = canvas.getByRole('group', {
      name: 'Billing address'
    });
    await expect(billing).toHaveAccessibleDescription('Printed on every invoice.');
    // The group takes the section's whole row and has its own two columns.
    const width = (el: Element) => el.getBoundingClientRect().width;
    await waitFor(() => expect(width(billing)).toBeGreaterThan(width(canvas.getByRole('textbox', {
      name: 'Company'
    })) + width(canvas.getByRole('textbox', {
      name: 'Tax ID'
    }))));
    await waitFor(() => {
      const city = within(billing).getByRole('textbox', {
        name: 'City'
      }).getBoundingClientRect();
      const postal = within(billing).getByRole('textbox', {
        name: 'Postal code'
      }).getBoundingClientRect();
      expect(Math.abs(city.top - postal.top)).toBeLessThan(2);
    });
    // A disabled group disables its fields, and they are left out of the submit.
    const shipping = canvas.getByRole('group', {
      name: 'Shipping address'
    });
    await expect(within(shipping).getByRole('textbox', {
      name: 'Street address'
    })).toBeDisabled();
    // Select's trigger is its own box; it dims like the text field does.
    await expect(Number(getComputedStyle(within(shipping).getByRole('combobox', {
      name: 'Country'
    })).opacity)).toBeLessThan(1);
    // So does a Checkbox, whose box is a <span> the fieldset cannot reach: the
    // group passes \`disabled\` down to it, so it leaves the tab order and
    // clicking it changes nothing.
    const reception = within(shipping).getByRole('checkbox', {
      name: 'Leave at reception'
    });
    await expect(reception).toHaveAttribute('aria-disabled', 'true');
    await expect(reception).not.toHaveAttribute('tabindex', '0');
    await expect(Number(getComputedStyle(reception.closest('label')!).opacity)).toBeLessThan(1);
    await userEvent.click(reception, {
      pointerEventsCheck: 0
    });
    await expect(reception).toBeChecked();
    await userEvent.type(within(billing).getByRole('textbox', {
      name: 'City'
    }), 'Hanoi');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      company: 'Ontheshore',
      billingCity: 'Hanoi'
    }));
    await expect(onSubmit.mock.lastCall?.[0]).not.toHaveProperty('shippingStreet');
    await expect(onSubmit.mock.lastCall?.[0]).not.toHaveProperty('leaveAtReception');
    // Unchecking the precondition turns the whole group back on.
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Ship to the billing address'
    }));
    await expect(within(shipping).getByRole('textbox', {
      name: 'Street address'
    })).toBeEnabled();
    await expect(reception).not.toHaveAttribute('aria-disabled');
    await userEvent.click(reception);
    await expect(reception).not.toBeChecked();
  }
}`,...H.parameters?.docs?.source},description:{story:`Field groups: related fields under a legend inside one section. A group
takes a whole row and lays out its own columns; \`disabled\` turns off
every field in it, Checkbox, Switch and Radio included.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`A split section stacks by itself when its container is narrow.`,...U.parameters?.docs?.description}}}})))()}export{z as a,U as i,T as n,B as o,V as r,G as s,H as t};