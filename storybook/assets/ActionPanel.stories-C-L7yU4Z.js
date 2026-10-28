import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bwi4V5f1.js";import{n as a,t as o}from"./Switch-CaqanT6z.js";import{r as s,t as c}from"./TextInput-vfco79YG.js";import{n as l,t as u}from"./ActionPanel-BcAXfovQ.js";var d=t({ButtonAtEnd:()=>v,Danger:()=>S,DangerOnSurface:()=>C,Narrow:()=>T,Simple:()=>_,TitleOnly:()=>w,WithInput:()=>x,WithSwitch:()=>y,__namedExportsOrder:()=>E,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),a(),s(),l(),f=n(),{expect:p,fn:m,userEvent:h}=__STORYBOOK_MODULE_TEST__,g={title:`Patterns/Application UI/Action Panel`,tags:[`experimental`],component:u,parameters:{layout:`padded`},args:{title:`Export your data`,description:`A ZIP of every project, file and comment, emailed to you within an hour.`,action:(0,f.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Request export`})},argTypes:{title:{description:`What the action does, e.g. "Delete account". Names the panel. Required.`,control:`text`},description:{description:`What happens when you take it: what changes, what it costs, whether it can be undone. Describes the panel.`,control:`text`},action:{description:`The control: a Button, a Switch, or a small form of an input and a button. Rendered as given.`,control:!1},actionPlacement:{description:"`below` the text (a button or a form), or at the `end` of the row beside it (a button or a switch)."},variant:{description:"`danger` edges the panel in the destructive colour, for what cannot be undone. Pair it with a destructive Button."},headingLevel:{description:`The title is an h2; use 3 or 4 when the panel sits under a section heading.`},size:{description:`The Card's padding and gap.`},appearance:{description:"The Card's look; `surface` follows the Theme's contentStyle on an App Shell page."}},decorators:[e=>(0,f.jsx)(`div`,{style:{maxInlineSize:640},children:(0,f.jsx)(e,{})})]},_={play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`Export your data`});await p(t).toHaveAccessibleDescription(/A ZIP of every project/),await p(e.getByRole(`heading`,{level:2,name:`Export your data`})).toBeVisible();let n=e.getByRole(`heading`).getBoundingClientRect(),r=e.getByRole(`button`,{name:`Request export`}).getBoundingClientRect();await p(r.top).toBeGreaterThan(n.bottom)}},v={args:{actionPlacement:`end`},play:async({canvas:e})=>{let t=e.getByRole(`heading`).getBoundingClientRect(),n=e.getByRole(`button`,{name:`Request export`}).getBoundingClientRect();await p(n.left).toBeGreaterThan(t.right),await p(Math.abs(n.top-t.top)).toBeLessThan(t.height)}},y={args:{title:`Renew automatically`,description:`Your plan renews on 1 December 2026 with the card on file. Turn this off to let it lapse.`,actionPlacement:`end`,action:(0,f.jsx)(o,{"aria-label":`Renew automatically`,defaultChecked:!0})},play:async({canvas:e})=>{let t=e.getByRole(`switch`,{name:`Renew automatically`});await p(t).toBeChecked(),await h.tab(),await p(t).toHaveFocus(),await h.keyboard(` `),await p(t).not.toBeChecked()}},b=m(),x={args:{title:`Update your email`,description:`We send a link to the new address; the change takes effect once you open it.`,action:(0,f.jsxs)(`form`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`end`,gap:`var(--space-inline)`},onSubmit:e=>{e.preventDefault(),b(new FormData(e.currentTarget).get(`email`))},children:[(0,f.jsx)(c,{label:`New email`,name:`email`,type:`email`,autoComplete:`email`}),(0,f.jsx)(i,{type:`submit`,children:`Send link`})]})},play:async({canvas:e})=>{b.mockClear(),await h.type(e.getByRole(`textbox`,{name:`New email`}),`ines@example.org{Enter}`),await p(b).toHaveBeenCalledWith(`ines@example.org`)}},S={args:{title:`Delete workspace`,description:`Every project, file and member is removed for good. This cannot be undone.`,variant:`danger`,actionPlacement:`end`,action:(0,f.jsx)(i,{variant:`destructive`,appearance:`outlined`,children:`Delete workspace`})},play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`Delete workspace`}),n=document.createElement(`div`);n.style.color=`var(--destructive)`,t.append(n);let r=getComputedStyle(n).color;n.remove(),await p(getComputedStyle(t).borderBlockStartColor).toBe(r),await p(getComputedStyle(t).borderInlineStartColor).toBe(r)}},C={tags:[`!dev`],args:{...S.args,appearance:`surface`},play:S.play},w={args:{title:`Leave the workspace`,description:void 0,headingLevel:3,action:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Transfer ownership first`}),(0,f.jsx)(i,{variant:`secondary`,appearance:`outlined`,children:`Download my files`}),(0,f.jsx)(i,{variant:`destructive`,appearance:`outlined`,children:`Leave the workspace`})]})},decorators:[e=>(0,f.jsx)(`div`,{style:{inlineSize:360},children:(0,f.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`Leave the workspace`});await p(t).not.toHaveAttribute(`aria-describedby`),await p(e.getByRole(`heading`,{level:3,name:`Leave the workspace`})).toBeVisible();let[n,,r]=e.getAllByRole(`button`).map(e=>e.getBoundingClientRect());await p(r.top).toBeGreaterThan(n.top),await p(r.right).toBeLessThanOrEqual(t.getBoundingClientRect().right)}},T={args:{title:`Deleteallarchivedsubsidiaryledgerentries`,actionPlacement:`end`},decorators:[e=>(0,f.jsx)(`div`,{"data-testid":`narrow`,style:{inlineSize:280},children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`heading`).getBoundingClientRect(),n=e.getByRole(`button`,{name:`Request export`}).getBoundingClientRect();await p(n.top).toBeGreaterThanOrEqual(e.getByText(/A ZIP of every project/).getBoundingClientRect().bottom),await p(t.right).toBeLessThanOrEqual(e.getByTestId(`narrow`).getBoundingClientRect().right)}},E=[`Simple`,`ButtonAtEnd`,`WithSwitch`,`WithInput`,`Danger`,`DangerOnSurface`,`TitleOnly`,`Narrow`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const panel = canvas.getByRole('group', {
      name: 'Export your data'
    });
    await expect(panel).toHaveAccessibleDescription(/A ZIP of every project/);
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Export your data'
    })).toBeVisible();
    const text = canvas.getByRole('heading').getBoundingClientRect();
    const button = canvas.getByRole('button', {
      name: 'Request export'
    }).getBoundingClientRect();
    await expect(button.top).toBeGreaterThan(text.bottom);
  }
}`,..._.parameters?.docs?.source},description:{story:`A button under the description: the default.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    actionPlacement: 'end'
  },
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading').getBoundingClientRect();
    const button = canvas.getByRole('button', {
      name: 'Request export'
    }).getBoundingClientRect();
    await expect(button.left).toBeGreaterThan(title.right);
    // Top of the row, by the title, not centred on a long description.
    await expect(Math.abs(button.top - title.top)).toBeLessThan(title.height);
  }
}`,...v.parameters?.docs?.source},description:{story:`The button at the end of the row, beside the text.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Renew automatically',
    description: 'Your plan renews on 1 December 2026 with the card on file. Turn this off to let it lapse.',
    actionPlacement: 'end',
    action: <Switch aria-label="Renew automatically" defaultChecked />
  },
  play: async ({
    canvas
  }) => {
    const toggle = canvas.getByRole('switch', {
      name: 'Renew automatically'
    });
    await expect(toggle).toBeChecked();
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(toggle).not.toBeChecked();
  }
}`,...y.parameters?.docs?.source},description:{story:`A setting that takes effect at once, so there is no Save.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Update your email',
    description: 'We send a link to the new address; the change takes effect once you open it.',
    action: <form style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'end',
      gap: 'var(--space-inline)'
    }} onSubmit={e => {
      e.preventDefault();
      onSubmit(new FormData(e.currentTarget).get('email'));
    }}>
        <TextInput label="New email" name="email" type="email" autoComplete="email" />
        <Button type="submit">Send link</Button>
      </form>
  },
  play: async ({
    canvas
  }) => {
    onSubmit.mockClear();
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'New email'
    }), 'ines@example.org{Enter}');
    await expect(onSubmit).toHaveBeenCalledWith('ines@example.org');
  }
}`,...x.parameters?.docs?.source},description:{story:`A small form: one field and its button on a row.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Delete workspace',
    description: 'Every project, file and member is removed for good. This cannot be undone.',
    variant: 'danger',
    actionPlacement: 'end',
    action: <Button variant="destructive" appearance="outlined">Delete workspace</Button>
  },
  play: async ({
    canvas
  }) => {
    const panel = canvas.getByRole('group', {
      name: 'Delete workspace'
    });
    const probe = document.createElement('div');
    probe.style.color = 'var(--destructive)';
    panel.append(probe);
    const destructive = getComputedStyle(probe).color;
    probe.remove();
    await expect(getComputedStyle(panel).borderBlockStartColor).toBe(destructive);
    await expect(getComputedStyle(panel).borderInlineStartColor).toBe(destructive);
  }
}`,...S.parameters?.docs?.source},description:{story:`What cannot be undone: a danger edge and a destructive button.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...Danger.args,
    appearance: 'surface'
  },
  play: Danger.play
}`,...C.parameters?.docs?.source},description:{story:`Danger stays edged on the flat theme's surface, which otherwise drops the side borders.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Leave the workspace',
    description: undefined,
    headingLevel: 3,
    action: <>
        <Button variant="secondary" appearance="outlined">Transfer ownership first</Button>
        <Button variant="secondary" appearance="outlined">Download my files</Button>
        <Button variant="destructive" appearance="outlined">Leave the workspace</Button>
      </>
  },
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const panel = canvas.getByRole('group', {
      name: 'Leave the workspace'
    });
    await expect(panel).not.toHaveAttribute('aria-describedby');
    await expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Leave the workspace'
    })).toBeVisible();
    const [first,, last] = canvas.getAllByRole('button').map(b => b.getBoundingClientRect());
    await expect(last.top).toBeGreaterThan(first.top);
    await expect(last.right).toBeLessThanOrEqual(panel.getBoundingClientRect().right);
  }
}`,...w.parameters?.docs?.source},description:{story:`No description, the title one level down, and more buttons than fit on the row: they wrap.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Deleteallarchivedsubsidiaryledgerentries',
    actionPlacement: 'end'
  },
  decorators: [Story => <div data-testid="narrow" style={{
    inlineSize: 280
  }}>
        {Story()}
      </div>],
  play: async ({
    canvas
  }) => {
    const title = canvas.getByRole('heading').getBoundingClientRect();
    const button = canvas.getByRole('button', {
      name: 'Request export'
    }).getBoundingClientRect();
    await expect(button.top).toBeGreaterThanOrEqual(canvas.getByText(/A ZIP of every project/).getBoundingClientRect().bottom);
    await expect(title.right).toBeLessThanOrEqual(canvas.getByTestId('narrow').getBoundingClientRect().right);
  }
}`,...T.parameters?.docs?.source},description:{story:`On a narrow card the end action drops under the text, and a long word breaks.`,...T.parameters?.docs?.description}}}})))()}export{_ as a,y as c,T as i,D as l,v as n,w as o,S as r,x as s,d as t};