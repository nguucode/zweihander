import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{r as s,t as c}from"./Avatar-Br9NGvV-.js";import{n as l,t as u}from"./Divider-C72TQrwi.js";import{i as d,t as f}from"./Menu-NLwpYJmZ.js";import{n as p,t as m}from"./Card-DvxLWsiy.js";import{n as h,t as g}from"./CardHeading-Dhr_hQ0E.js";var _=t({Narrow:()=>O,Simple:()=>w,WithAction:()=>T,WithAvatarAndMenu:()=>E,WithIconAndRule:()=>D,__namedExportsOrder:()=>k,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{a(),s(),l(),r(),p(),d(),h(),v=n(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Patterns/Application UI/Card Heading`,tags:[`experimental`],component:g,parameters:{layout:`padded`},args:{title:`Job postings`},argTypes:{title:{description:`The card's name. Required.`,control:`text`},description:{description:`One line of context under the title, in muted text.`,control:`text`},media:{description:`An Avatar or an Icon before the title. Decorative and hidden from assistive tech, so it must not be interactive or say anything the title does not.`,control:!1},actions:{description:`Buttons or a Menu at the end of the row. They wrap under the title on a narrow card.`,control:!1},headingLevel:{description:`The title is an h2; use 3 or 4 when the card sits under a section heading.`}},decorators:[e=>(0,v.jsxs)(m,{style:{maxInlineSize:640},children:[(0,v.jsx)(e,{}),(0,v.jsx)(`p`,{style:{margin:0,color:`var(--muted-foreground)`},children:`Card content.`})]})]},w={args:{description:`Open roles across every team, newest first.`},play:async({canvas:e})=>{await y(e.getByRole(`heading`,{level:2,name:`Job postings`})).toBeVisible(),await y(e.getByText(`Open roles across every team, newest first.`)).toBeVisible()}},T={args:{...w.args,actions:(0,v.jsx)(i,{startIcon:(0,v.jsx)(o,{name:`plus`}),children:`New job`})},play:async({canvas:e})=>{let t=e.getByRole(`heading`,{level:2}).getBoundingClientRect(),n=e.getByRole(`button`,{name:`New job`}).getBoundingClientRect();await y(n.top).toBeLessThan(t.bottom),await y(n.left).toBeGreaterThan(t.right)}},E={args:{title:`Chelsea Hagon`,description:`Product designer, joined 12 March 2026`,media:(0,v.jsx)(c,{initials:`CH`,color:`blue`}),actions:(0,v.jsx)(f,{align:`end`,trigger:(0,v.jsx)(i,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`More actions`,children:(0,v.jsx)(o,{name:`more`})}),items:[{label:`Edit`},{label:`Remove`}]})},play:async({canvas:e})=>{let t=e.getByRole(`heading`,{level:2,name:`Chelsea Hagon`}).getBoundingClientRect(),n=e.getByText(`CH`).getBoundingClientRect();await y(n.right).toBeLessThanOrEqual(t.left),await b.click(e.getByRole(`button`,{name:`More actions`}));let r=await S(document.body).findByRole(`menuitem`,{name:`Remove`});await x(()=>y(r).toBeVisible()),await b.keyboard(`{Escape}`),await x(()=>y(S(document.body).queryByRole(`menu`)).toBeNull())}},D={args:{title:`Billing contact`,description:`Invoices and receipts go to this address.`,media:(0,v.jsx)(o,{name:`user`}),headingLevel:3,actions:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Change`}),(0,v.jsx)(i,{variant:`secondary`,appearance:`ghost`,children:`Remove`})]})},decorators:[e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(e,{}),(0,v.jsx)(u,{})]})],play:async({canvas:e})=>{await y(e.getByRole(`heading`,{level:3,name:`Billing contact`})).toBeVisible(),await y(e.getAllByRole(`button`)).toHaveLength(2)}},O={args:{title:`Quarterlyreconciliationofsubsidiaryaccountsreceivable`,description:`Due 31 October 2026`,actions:(0,v.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Open`})},decorators:[e=>(0,v.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:280},children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`heading`,{level:2}).getBoundingClientRect(),n=e.getByRole(`button`,{name:`Open`}).getBoundingClientRect();await y(n.top).toBeGreaterThanOrEqual(t.bottom),await y(t.right).toBeLessThanOrEqual(e.getByTestId(`narrow`).getBoundingClientRect().right)}},k=[`Simple`,`WithAction`,`WithAvatarAndMenu`,`WithIconAndRule`,`Narrow`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Open roles across every team, newest first.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Job postings'
    })).toBeVisible();
    await expect(canvas.getByText('Open roles across every team, newest first.')).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`A title and a line of context.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Simple.args,
    actions: <Button startIcon={<Icon name="plus" />}>New job</Button>
  },
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading', {
      level: 2
    }).getBoundingClientRect();
    const action = canvas.getByRole('button', {
      name: 'New job'
    }).getBoundingClientRect();
    // Same row, at its end.
    await expect(action.top).toBeLessThan(title.bottom);
    await expect(action.left).toBeGreaterThan(title.right);
  }
}`,...T.parameters?.docs?.source},description:{story:`The card's one action at the end of the title row.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Chelsea Hagon',
    description: 'Product designer, joined 12 March 2026',
    media: <Avatar initials="CH" color="blue" />,
    actions: <Menu align="end" trigger={<Button variant="secondary" appearance="ghost" isIconOnly aria-label="More actions">
            <Icon name="more" />
          </Button>} items={[{
      label: 'Edit'
    }, {
      label: 'Remove'
    }]} />
  },
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading', {
      level: 2,
      name: 'Chelsea Hagon'
    }).getBoundingClientRect();
    const avatar = canvas.getByText('CH').getBoundingClientRect();
    await expect(avatar.right).toBeLessThanOrEqual(title.left);
    await userEvent.click(canvas.getByRole('button', {
      name: 'More actions'
    }));
    const remove = await within(document.body).findByRole('menuitem', {
      name: 'Remove'
    });
    await waitFor(() => expect(remove).toBeVisible());
    await userEvent.keyboard('{Escape}');
    // Let it finish closing: its focus guards are still in the page until then.
    await waitFor(() => expect(within(document.body).queryByRole('menu')).toBeNull());
  }
}`,...E.parameters?.docs?.source},description:{story:`Who the card is about, and its actions behind a menu so the row stays short.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Billing contact',
    description: 'Invoices and receipts go to this address.',
    media: <Icon name="user" />,
    headingLevel: 3,
    actions: <>
        <Button variant="secondary" appearance="outlined">
          Change
        </Button>
        <Button variant="secondary" appearance="ghost">
          Remove
        </Button>
      </>
  },
  decorators: [Story => <>
        <Story />
        <Divider />
      </>],
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Billing contact'
    })).toBeVisible();
    await expect(canvas.getAllByRole('button')).toHaveLength(2);
  }
}`,...D.parameters?.docs?.source},description:{story:`Every slot at once, a Divider under the heading, and the title one level down.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quarterlyreconciliationofsubsidiaryaccountsreceivable',
    description: 'Due 31 October 2026',
    actions: <Button variant="secondary" appearance="outlined">
        Open
      </Button>
  },
  decorators: [Story => <div data-testid="narrow" style={{
    inlineSize: 280
  }}>
        {Story()}
      </div>],
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading', {
      level: 2
    }).getBoundingClientRect();
    const action = canvas.getByRole('button', {
      name: 'Open'
    }).getBoundingClientRect();
    await expect(action.top).toBeGreaterThanOrEqual(title.bottom);
    await expect(title.right).toBeLessThanOrEqual(canvas.getByTestId('narrow').getBoundingClientRect().right);
  }
}`,...O.parameters?.docs?.source},description:{story:`On a narrow card the actions drop under the title, and a long word breaks instead of overflowing.`,...O.parameters?.docs?.description}}}})))()}export{E as a,T as i,O as n,D as o,w as r,A as s,_ as t};