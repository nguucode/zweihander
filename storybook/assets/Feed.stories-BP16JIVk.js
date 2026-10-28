import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bwi4V5f1.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{r as c,t as l}from"./Avatar-Br9NGvV-.js";import{n as u,t as d}from"./Textarea-Dd8hy5Kc.js";import{n as f,t as p}from"./Feed-J4GfNDS1.js";var m=t({Dark:()=>N,Empty:()=>j,LinkedAndUnread:()=>A,LongContent:()=>M,Simple:()=>E,WithComments:()=>D,WithComposer:()=>k,WithoutConnector:()=>O,__namedExportsOrder:()=>P,default:()=>T});function h(){let[e,t]=(0,g.useState)(w),[n,r]=(0,g.useState)(``);return(0,_.jsx)(p,{role:`region`,"aria-label":`Comments`,items:e,composer:(0,_.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),n.trim()&&(t(e=>[...e,{id:e.length+1,media:C.me,actor:`Sam Rivera`,action:`commented`,at:x(21,12),comment:n}]),r(``))},style:{display:`grid`,gap:`var(--space-2)`,justifyItems:`end`},children:[(0,_.jsx)(d,{label:`Add a comment`,isFullWidth:!0,minRows:2,value:n,onChange:e=>r(e.target.value)}),(0,_.jsx)(a,{type:`submit`,variant:`secondary`,appearance:`outlined`,children:`Comment`})]})})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{g=n(),o(),c(),i(),u(),f(),_=r(),{expect:v,userEvent:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,x=(e,t)=>new Date(2026,9,e,t),S=[{id:1,media:(0,_.jsx)(s,{name:`plus`}),actor:`Ines Okafor`,action:(0,_.jsxs)(_.Fragment,{children:[`created `,(0,_.jsx)(`strong`,{children:`Harbor Lights`})]}),at:x(2,9)},{id:2,media:(0,_.jsx)(s,{name:`file`}),actor:`Tomas Lindqvist`,action:(0,_.jsxs)(_.Fragment,{children:[`changed the estimation from `,(0,_.jsx)(`strong`,{children:`$40K`}),` to `,(0,_.jsx)(`strong`,{children:`$52K`})]}),at:x(9,14)},{id:3,media:(0,_.jsx)(s,{name:`info`}),actor:`Noor Haddad`,action:(0,_.jsxs)(_.Fragment,{children:[`moved it to `,(0,_.jsx)(`strong`,{children:`On hold`})]}),at:x(20,11)}],C={ines:(0,_.jsx)(l,{size:`sm`,initials:`IO`,color:`teal`}),noor:(0,_.jsx)(l,{size:`sm`,initials:`NH`,color:`violet`}),me:(0,_.jsx)(l,{size:`sm`,initials:`SR`,color:`amber`})},w=[{id:1,media:C.ines,actor:`Ines Okafor`,action:`commented`,at:x(20,11),comment:`Budget is approved for the second phase. Can we start on Monday?`},{id:2,media:(0,_.jsx)(s,{name:`info`}),actor:`Noor Haddad`,action:(0,_.jsxs)(_.Fragment,{children:[`moved it to `,(0,_.jsx)(`strong`,{children:`Active`})]}),at:x(20,15)},{id:3,media:C.noor,actor:`Noor Haddad`,action:`commented`,at:x(21,9),comment:`Monday works. I booked the kickoff for 10:00.`}],T={title:`Patterns/Application UI/Feed`,tags:[`experimental`],component:p,parameters:{layout:`padded`},args:{items:S,"aria-label":`Harbor Lights activity`,role:`region`},argTypes:{items:{description:"The events, in the order shown (newest first is the norm). Each has `actor`, `action` (the rest of the sentence) and `at`, and may have `media` (an Avatar or an Icon), `comment`, `id`, `href` (the row links), `onClick` (runs when it is followed) and `isUnread` (a dot).",control:!1},hasConnector:{description:`The vertical line joining one event to the next. Off for a short, loose list.`,table:{defaultValue:{summary:`true`}}},composer:{description:`A form to add a comment, after the last event, lined up with the text. Rendered as given.`,control:!1},empty:{description:`Shown instead of the list when there are no items.`,control:`text`,table:{defaultValue:{summary:`"No activity yet."`}}},formatTime:{description:"How the time reads. The `<time>` element carries the ISO moment either way.",control:!1}},decorators:[e=>(0,_.jsx)(`div`,{style:{maxInlineSize:480},children:(0,_.jsx)(e,{})})]},E={play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Harbor Lights activity`});await v(e.getByRole(`list`).tagName).toBe(`OL`);let n=e.getAllByRole(`listitem`);await v(n).toHaveLength(3),await v(n[1]).toHaveTextContent(`Tomas Lindqvist changed the estimation from $40K to $52K Oct 9, 2026`);let r=n[1].querySelector(`time`);await v(r.dateTime).toBe(x(9,14).toISOString()),await v(n[0].querySelector(`[aria-hidden="true"]`)).not.toBeNull();let i=getComputedStyle(n[0],`::before`);await v(i.borderInlineStartWidth).toBe(`1px`),await v(getComputedStyle(n[2],`::before`).content).toBe(`none`),await v(t).toBeVisible()}},D={args:{items:w,"aria-label":`Comments`},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`);await v(t[0]).toHaveTextContent(/Ines Okafor commented.*Budget is approved/);let n=t[0].querySelector(`p`).getBoundingClientRect(),r=e.getByText(/Budget is approved/).getBoundingClientRect();await v(r.top).toBeGreaterThanOrEqual(n.bottom),await v(Math.round(r.left)).toBe(Math.round(n.left))}},O={args:{hasConnector:!1},play:async({canvas:e})=>{await v(getComputedStyle(e.getAllByRole(`listitem`)[0],`::before`).content).toBe(`none`)}},k={render:()=>(0,_.jsx)(h,{}),play:async({canvas:e})=>{let t=e.getByRole(`textbox`,{name:`Add a comment`}),n=e.getAllByRole(`listitem`)[0].querySelector(`p`).getBoundingClientRect();await v(Math.round(t.getBoundingClientRect().left)).toBeGreaterThanOrEqual(Math.round(n.left)),await y.type(t,`See you there.`),await y.click(e.getByRole(`button`,{name:`Comment`})),await b(()=>v(e.getAllByRole(`listitem`)).toHaveLength(4)),await v(e.getAllByRole(`listitem`)[3]).toHaveTextContent(`Sam Rivera commented`),await v(t).toHaveValue(``)}},A={args:{hasConnector:!1,items:S.map((e,t)=>({...e,href:`#event-${e.id}`,isUnread:t===0}))},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=e.getAllByRole(`link`)[0];await v(n).toHaveAccessibleName(`Ines Okafor created Harbor Lights`),await v(n).toHaveAttribute(`href`,`#event-1`);let r=t[0].getBoundingClientRect(),i=getComputedStyle(n,`::after`);await v(i.position).toBe(`absolute`),await v(n.offsetParent).toBe(t[0]),await v(r.width).toBeGreaterThan(0),await v(e.getAllByRole(`img`,{name:`Unread`})).toHaveLength(1),await v(t[0]).toContainElement(e.getByRole(`img`,{name:`Unread`})),await y.tab(),await v(n).toHaveFocus()}},j={args:{items:[]},play:async({canvas:e})=>{await v(e.queryByRole(`list`)).toBeNull(),await v(e.getByText(`No activity yet.`)).toBeVisible()}},M={args:{items:[{media:(0,_.jsx)(s,{name:`info`}),actor:`Maximiliana Wolfeschlegelsteinhausenbergerdorff`,action:(0,_.jsxs)(_.Fragment,{children:[`renamed it to `,(0,_.jsx)(`strong`,{children:`Quarterly_reconciliation_export_for_the_northern_region_v2_final`})]}),at:x(20,11),comment:`https://example.com/projects/harbor-lights/files/quarterly-reconciliation-export-for-the-northern-region`},...S]},decorators:[e=>(0,_.jsx)(`div`,{style:{inlineSize:280},children:(0,_.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByRole(`region`);await v(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)}},N={...D,globals:{theme:`dark`}},P=[`Simple`,`WithComments`,`WithoutConnector`,`WithComposer`,`LinkedAndUnread`,`Empty`,`LongContent`,`Dark`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const feed = canvas.getByRole('region', {
      name: 'Harbor Lights activity'
    });
    // An ordered list: position and count are announced.
    await expect(canvas.getByRole('list').tagName).toBe('OL');
    const items = canvas.getAllByRole('listitem');
    await expect(items).toHaveLength(3);
    // One sentence per event, read in order: who, what, when.
    await expect(items[1]).toHaveTextContent('Tomas Lindqvist changed the estimation from $40K to $52K Oct 9, 2026');
    const time = items[1].querySelector('time')!;
    await expect(time.dateTime).toBe(at(9, 14).toISOString());
    // The media says nothing the sentence does not.
    await expect(items[0].querySelector('[aria-hidden="true"]')).not.toBeNull();
    // The line runs from one media to the next.
    const line = getComputedStyle(items[0], '::before');
    await expect(line.borderInlineStartWidth).toBe('1px');
    await expect(getComputedStyle(items[2], '::before').content).toBe('none');
    await expect(feed).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`An icon per kind of event, joined by a line: a record's history.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: conversation,
    'aria-label': 'Comments'
  },
  play: async ({
    canvas
  }) => {
    const items = canvas.getAllByRole('listitem');
    await expect(items[0]).toHaveTextContent(/Ines Okafor commented.*Budget is approved/);
    // The comment sits under its sentence, past the media.
    const sentence = items[0].querySelector('p')!.getBoundingClientRect();
    const comment = canvas.getByText(/Budget is approved/).getBoundingClientRect();
    await expect(comment.top).toBeGreaterThanOrEqual(sentence.bottom);
    await expect(Math.round(comment.left)).toBe(Math.round(sentence.left));
  }
}`,...D.parameters?.docs?.source},description:{story:`Avatars for people, an icon for a system event, and what people wrote in a box under the sentence.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    hasConnector: false
  },
  play: async ({
    canvas
  }) => {
    await expect(getComputedStyle(canvas.getAllByRole('listitem')[0], '::before').content).toBe('none');
  }
}`,...O.parameters?.docs?.source},description:{story:`No line: a short list where each event stands alone.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <CommentThread />,
  play: async ({
    canvas
  }) => {
    const box = canvas.getByRole('textbox', {
      name: 'Add a comment'
    });
    // Lined up with the sentences, not the media.
    const sentence = canvas.getAllByRole('listitem')[0].querySelector('p')!.getBoundingClientRect();
    await expect(Math.round(box.getBoundingClientRect().left)).toBeGreaterThanOrEqual(Math.round(sentence.left));
    await userEvent.type(box, 'See you there.');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Comment'
    }));
    await waitFor(() => expect(canvas.getAllByRole('listitem')).toHaveLength(4));
    await expect(canvas.getAllByRole('listitem')[3]).toHaveTextContent('Sam Rivera commented');
    await expect(box).toHaveValue('');
  }
}`,...k.parameters?.docs?.source},description:{story:`A form after the last event to add a comment, oldest first so the newest sits by the box. The form is the story's, not the feed's.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    hasConnector: false,
    items: events.map((event, i) => ({
      ...event,
      href: \`#event-\${event.id}\`,
      isUnread: i === 0
    }))
  },
  play: async ({
    canvas
  }) => {
    const items = canvas.getAllByRole('listitem');
    const link = canvas.getAllByRole('link')[0];
    await expect(link).toHaveAccessibleName('Ines Okafor created Harbor Lights');
    await expect(link).toHaveAttribute('href', '#event-1');
    // The link's box covers the whole row, so the row is the target.
    const row = items[0].getBoundingClientRect();
    const target = getComputedStyle(link, '::after');
    await expect(target.position).toBe('absolute');
    await expect(link.offsetParent).toBe(items[0]);
    await expect(row.width).toBeGreaterThan(0);
    // Only the unread row has the dot, and it is heard.
    await expect(canvas.getAllByRole('img', {
      name: 'Unread'
    })).toHaveLength(1);
    await expect(items[0]).toContainElement(canvas.getByRole('img', {
      name: 'Unread'
    }));
    // Keyboard: one stop per row.
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...A.parameters?.docs?.source},description:{story:'`href` makes each sentence a link that covers its row; `isUnread` ends the row with a dot named "Unread". The Notification Center\'s rows.',...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByText('No activity yet.')).toBeVisible();
  }
}`,...j.parameters?.docs?.source},description:{story:`Nothing yet: a line in place of the list.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      media: <Icon name="info" />,
      actor: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
      action: <>renamed it to <strong>Quarterly_reconciliation_export_for_the_northern_region_v2_final</strong></>,
      at: at(20, 11),
      comment: 'https://example.com/projects/harbor-lights/files/quarterly-reconciliation-export-for-the-northern-region'
    }, ...events]
  },
  decorators: [Story => <div style={{
    inlineSize: 280
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const feed = canvas.getByRole('region');
    await expect(feed.scrollWidth).toBeLessThanOrEqual(feed.clientWidth);
  }
}`,...M.parameters?.docs?.source},description:{story:`Harsh content: a name and a comment with no spaces, in a narrow column. They wrap, never overflow.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...WithComments,
  globals: {
    theme: 'dark'
  }
}`,...N.parameters?.docs?.source},description:{story:`Dark mode, with comments, so the accessibility check covers both themes.`,...N.parameters?.docs?.description}}}})))()}export{E as a,O as c,M as i,F as l,m as n,D as o,A as r,k as s,j as t};