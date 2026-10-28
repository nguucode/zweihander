import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-CUvRSo4U.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./icon-C9aTyDDd.js";import{n as s,r as c}from"./Tag-DjFi4YNU.js";import{r as l,t as u}from"./Avatar-Br9NGvV-.js";import{n as d,t as f}from"./Link-Bhk0TW_i.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as ee,s as te,t as ne,u as re}from"./ListItemParts-DR4A9nR3.js";var y,b,x,S,C,w;function T(){return(T=e((()=>{y=`_grid_l6gw6_4`,b=`_card_l6gw6_12`,x=`_cover_l6gw6_21`,S=`_body_l6gw6_36`,C=`_text_l6gw6_44`,w={grid:y,card:b,cover:x,body:S,text:C}})))()}function E({items:e,className:t,...n}){return(0,D.jsx)(m,{...n,appearance:`separate`,className:r(w.grid,t),children:e.map((e,t)=>(0,D.jsx)(_,{item:e,children:(0,D.jsxs)(g,{className:r(v.target,w.card),children:[e.cover&&(0,D.jsx)(`div`,{className:w.cover,"aria-hidden":`true`,children:e.cover}),(0,D.jsxs)(`div`,{className:w.body,children:[(0,D.jsx)(h,{item:e}),(0,D.jsxs)(`div`,{className:w.text,children:[(0,D.jsx)(ee,{item:e}),e.description&&(0,D.jsx)(`p`,{className:v.description,children:e.description}),e.meta&&(0,D.jsx)(`div`,{className:v.meta,children:e.meta})]}),(0,D.jsx)(ne,{item:e,index:t})]})]})},e.id??t))})}var D;function O(){return(O=e((()=>{n(),re(),p(),te(),T(),D=i(),E.__docgenInfo={description:`Records as cards in a grid: people, projects, files. Each card takes the
same item as a Stacked List row, plus an optional cover picture. The grid
fits as many columns as its container allows. The card panels, footer and
empty state are List Container's \`separate\` appearance.`,methods:[],displayName:`GridList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`GridListItem`}],raw:`GridListItem[]`},description:`The cards, in reading order: left to right, then down.`}},composes:[`Omit`]}})))()}var k=t({Dark:()=>Z,Empty:()=>Y,Linked:()=>W,LinkedWithActions:()=>K,LongContent:()=>X,Simple:()=>U,WithActions:()=>G,WithCover:()=>q,WithFooter:()=>J,__namedExportsOrder:()=>Q,default:()=>H}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),l(),c(),d(),O(),A=i(),{expect:j,fn:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,I=[{id:1,media:(0,A.jsx)(u,{initials:`IO`,color:`teal`}),title:`Ines Okafor`,description:`Finance lead`,meta:`ines.okafor@example.com`},{id:2,media:(0,A.jsx)(u,{initials:`TL`,color:`violet`}),title:`Tomas Lindqvist`,description:`Controller`,meta:`tomas.lindqvist@example.com`},{id:3,media:(0,A.jsx)(u,{initials:`NH`,color:`amber`}),title:`Noor Haddad`,description:`Accountant`,meta:`noor.haddad@example.com`},{id:4,media:(0,A.jsx)(u,{initials:`KS`,color:`blue`}),title:`Kenji Sato`,description:`Payroll`,meta:`kenji.sato@example.com`}],L=[{id:`harbor`,media:(0,A.jsx)(o,{name:`file`}),title:`Harbor Lights`,status:(0,A.jsx)(s,{size:`sm`,variant:`success`,text:`Active`}),description:`Ines Okafor`,meta:`Due Nov 14`,href:`#harbor`},{id:`ledger`,media:(0,A.jsx)(o,{name:`file`}),title:`Ledger migration`,status:(0,A.jsx)(s,{size:`sm`,variant:`neutral`,text:`On hold`}),description:`Tomas Lindqvist`,meta:`Due Dec 2`,href:`#ledger`},{id:`audit`,media:(0,A.jsx)(o,{name:`file`}),title:`Year-end audit`,status:(0,A.jsx)(s,{size:`sm`,variant:`danger`,text:`Expired`}),description:`Noor Haddad`,meta:`Due Oct 1`,href:`#audit`},{id:`vat`,media:(0,A.jsx)(o,{name:`file`}),title:`VAT return Q3`,status:(0,A.jsx)(s,{size:`sm`,variant:`success`,text:`Active`}),description:`Kenji Sato`,meta:`Due Oct 31`,href:`#vat`}],R=(e,t)=>(0,A.jsx)(`img`,{alt:``,src:`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><rect width="16" height="9" fill="${e}"/><circle cx="12" cy="9" r="6" fill="${t}"/></svg>`)}`}),z=[{id:`q3`,cover:R(`#d9e7f5`,`#7aa6d6`),title:`Q3-board-pack.pdf`,description:`2.4 MB`},{id:`logo`,cover:R(`#f5e6d9`,`#d69a7a`),title:`logo-final.png`,description:`312 KB`},{id:`team`,cover:R(`#e0f0e3`,`#7ac08b`),title:`team-offsite.jpg`,description:`4.1 MB`}],B=M(),V=e=>[{label:`Edit`},{label:`Share`},{type:`separator`},{label:`Remove`,isDestructive:!0,onSelect:()=>B(e)}],H={title:`Patterns/Application UI/Grid List`,tags:[`experimental`],component:E,parameters:{layout:`padded`},args:{items:I,"aria-label":`Team`,role:`region`},argTypes:{items:{description:"The cards, in reading order. The same item as a Stacked List row: a `title`, and optionally `media` (an Avatar or an Icon), `description` (a line under the title), `status` (a Tag or Badge after it), `meta` (facts under the description), `href` (the card links), `onClick` (runs when it is followed), `actions` (Menu entries: a ⋯ button and a context menu) and `id`. Plus `cover`: a picture across the top of the card.",control:!1},footer:{description:`After the grid: a Pagination or a "View all" link. Rendered as given.`,control:!1},empty:{description:`Shown instead of the grid when there are no items.`,control:`text`,table:{defaultValue:{summary:`"Nothing here yet."`}}}},decorators:[e=>(0,A.jsx)(`div`,{style:{maxInlineSize:840},children:(0,A.jsx)(e,{})})]},U={play:async({canvas:e})=>{await j(e.getByRole(`region`,{name:`Team`})).toBeVisible();let t=e.getByRole(`list`);await j(t.tagName).toBe(`UL`);let n=e.getAllByRole(`listitem`);await j(n).toHaveLength(4),await j(n[1]).toHaveTextContent(`Tomas LindqvistControllertomas.lindqvist@example.com`),await j(n[0].querySelector(`[aria-hidden="true"]`)).not.toBeNull(),await j(getComputedStyle(n[0]).borderTopWidth).toBe(`1px`),await P(()=>{let e=n.map(e=>Math.round(e.getBoundingClientRect().top));j(e[1]).toBe(e[0]),j(e[2]).toBe(e[0]),j(e[3]).toBeGreaterThan(e[0])}),await j(e.queryByRole(`link`)).toBeNull(),await j(e.queryByRole(`button`)).toBeNull()}},W={args:{items:L,"aria-label":`Projects`},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=e.getByRole(`link`,{name:`Harbor Lights`});await j(n).toHaveAttribute(`href`,`#harbor`),await j(getComputedStyle(n,`::after`).position).toBe(`absolute`),await j(n.offsetParent).toBe(t[0]),await j(t[0]).toHaveTextContent(/^Harbor LightsActive/),await N.tab(),await j(n).toHaveFocus(),await N.tab(),await j(e.getByRole(`link`,{name:`Ledger migration`})).toHaveFocus()}},G={args:{items:I.map(e=>({...e,actions:V(e.title)}))},decorators:[e=>(0,A.jsx)(`div`,{style:{minBlockSize:`20rem`},children:e()})],play:async({canvas:e})=>{B.mockClear();let t=F(document.body);await N.tab(),await j(e.getByRole(`button`,{name:`Actions for Ines Okafor`})).toHaveFocus();let n=e.getAllByRole(`listitem`);await j(n[0].parentElement?.tagName).toBe(`UL`),await N.click(e.getByRole(`button`,{name:`Actions for Tomas Lindqvist`})),await N.click(await t.findByRole(`menuitem`,{name:`Remove`})),await j(B).toHaveBeenCalledWith(`Tomas Lindqvist`),await N.pointer({keys:`[MouseRight]`,target:n[2]}),await t.findByRole(`menu`),await N.click(t.getByRole(`menuitem`,{name:`Remove`})),await j(B).toHaveBeenLastCalledWith(`Noor Haddad`)}},K={args:{"aria-label":`Projects`,items:L.map(e=>({...e,actions:V(e.title)}))},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=e.getByRole(`button`,{name:`Actions for Harbor Lights`});await P(()=>{let e=n.getBoundingClientRect();j(document.elementFromPoint(e.left+e.width/2,e.top+e.height/2)?.closest(`button`)).toBe(n)}),await N.pointer({keys:`[MouseRight]`,target:t[0]}),await j(F(document.body).queryByRole(`menu`)).toBeNull(),await N.tab(),await j(e.getByRole(`link`,{name:`Harbor Lights`})).toHaveFocus(),await N.tab(),await j(n).toHaveFocus()}},q={args:{"aria-label":`Files`,items:z.map(e=>({...e,actions:V(e.title)}))},play:async({canvas:e})=>{let t=e.getAllByRole(`listitem`),n=t[0].querySelector(`img`);await j(n).toHaveAttribute(`alt`,``),await j(n.closest(`[aria-hidden="true"]`)).not.toBeNull(),await j(t[0]).toHaveTextContent(/^Q3-board-pack\.pdf2\.4 MB$/),await P(()=>j(n.getBoundingClientRect().width).toBe(t[0].clientWidth))}},J={args:{items:L.slice(0,3),"aria-label":`Projects`,footer:(0,A.jsx)(f,{href:`#projects`,children:`View all`})},play:async({canvas:e})=>{let t=e.getByRole(`link`,{name:`View all`});await j(e.getByRole(`list`).compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()}},Y={args:{items:[],empty:`No files yet.`,footer:(0,A.jsx)(f,{href:`#upload`,children:`Upload a file`})},play:async({canvas:e})=>{await j(e.queryByRole(`list`)).toBeNull(),await j(e.getByText(`No files yet.`)).toBeVisible(),await j(e.getByRole(`link`,{name:`Upload a file`})).toBeVisible()}},X={args:{items:[{media:(0,A.jsx)(u,{initials:`MW`}),title:`Maximiliana Wolfeschlegelsteinhausenbergerdorff`,status:(0,A.jsx)(s,{size:`sm`,variant:`neutral`,text:`Invited`}),description:`Senior accounts payable specialist`,meta:`maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com`,href:`#max`,actions:V(`Maximiliana`)},...I]},decorators:[e=>(0,A.jsx)(`div`,{style:{inlineSize:300},children:(0,A.jsx)(e,{})})],play:async({canvas:e})=>{let t=e.getByRole(`region`);await P(()=>j(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth));let n=e.getAllByRole(`listitem`);await P(()=>j(n[1].getBoundingClientRect().top).toBeGreaterThan(n[0].getBoundingClientRect().bottom)),await j(n[0].getBoundingClientRect().width).toBe(t.getBoundingClientRect().width)}},Z={args:{"aria-label":`Projects`,items:L.map((e,t)=>({...e,cover:t===0?z[0].cover:void 0,actions:V(e.title)}))},globals:{theme:`dark`}},Q=[`Simple`,`Linked`,`WithActions`,`LinkedWithActions`,`WithCover`,`WithFooter`,`Empty`,`LongContent`,`Dark`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('region', {
      name: 'Team'
    })).toBeVisible();
    // An unordered list: the count is announced.
    const list = canvas.getByRole('list');
    await expect(list.tagName).toBe('UL');
    const cards = canvas.getAllByRole('listitem');
    await expect(cards).toHaveLength(4);
    // Read in order: name, role, email.
    await expect(cards[1]).toHaveTextContent('Tomas LindqvistControllertomas.lindqvist@example.com');
    // The avatar says nothing the name does not.
    await expect(cards[0].querySelector('[aria-hidden="true"]')).not.toBeNull();
    // Each card is its own panel.
    await expect(getComputedStyle(cards[0]).borderTopWidth).toBe('1px');
    // 840px fits three 16rem columns: the fourth card wraps to a new row.
    await waitFor(() => {
      const tops = cards.map(c => Math.round(c.getBoundingClientRect().top));
      expect(tops[1]).toBe(tops[0]);
      expect(tops[2]).toBe(tops[0]);
      expect(tops[3]).toBeGreaterThan(tops[0]);
    });
    // No link, no menu: nothing to tab to.
    await expect(canvas.queryByRole('link')).toBeNull();
    await expect(canvas.queryByRole('button')).toBeNull();
  }
}`,...U.parameters?.docs?.source},description:{story:`People: an avatar, a name with a role under it, and an email. As many columns as fit.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: projects,
    'aria-label': 'Projects'
  },
  play: async ({
    canvas
  }) => {
    const cards = canvas.getAllByRole('listitem');
    const link = canvas.getByRole('link', {
      name: 'Harbor Lights'
    });
    await expect(link).toHaveAttribute('href', '#harbor');
    // The link's box covers the whole card.
    await expect(getComputedStyle(link, '::after').position).toBe('absolute');
    await expect(link.offsetParent).toBe(cards[0]);
    // The status is read after the title, outside the link's name.
    await expect(cards[0]).toHaveTextContent(/^Harbor LightsActive/);
    // Keyboard: one stop per card, in reading order.
    await userEvent.tab();
    await expect(link).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Ledger migration'
    })).toHaveFocus();
  }
}`,...W.parameters?.docs?.source},description:{story:`Records that open: the title links to the record, the whole card is the target. A status Tag follows the title.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    items: people.map(p => ({
      ...p,
      actions: actions(p.title as string)
    }))
  },
  decorators: [Story => <div style={{
    minBlockSize: '20rem'
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    onDelete.mockClear();
    const body = within(document.body);
    // The ⋯ button is the keyboard way in: each card is one tab stop.
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Actions for Ines Okafor'
    })).toHaveFocus();
    const cards = canvas.getAllByRole('listitem');
    // The <li> is the context menu area itself: no wrapper inside the list.
    await expect(cards[0].parentElement?.tagName).toBe('UL');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions for Tomas Lindqvist'
    }));
    await userEvent.click(await body.findByRole('menuitem', {
      name: 'Remove'
    }));
    await expect(onDelete).toHaveBeenCalledWith('Tomas Lindqvist');
    // Right click on the card opens the same entries.
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: cards[2]
    });
    await body.findByRole('menu');
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Remove'
    }));
    await expect(onDelete).toHaveBeenLastCalledWith('Noor Haddad');
  }
}`,...G.parameters?.docs?.source},description:{story:`A ⋯ Menu in the corner of each card, named after it; right click or long press on the card opens the same entries at the pointer.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Projects',
    items: projects.map(p => ({
      ...p,
      actions: actions(p.title as string)
    }))
  },
  play: async ({
    canvas
  }) => {
    const cards = canvas.getAllByRole('listitem');
    const button = canvas.getByRole('button', {
      name: 'Actions for Harbor Lights'
    });
    await waitFor(() => {
      const box = button.getBoundingClientRect();
      expect(document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2)?.closest('button')).toBe(button);
    });
    // A linked card keeps the browser's link menu: no context menu area on it.
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: cards[0]
    });
    await expect(within(document.body).queryByRole('menu')).toBeNull();
    // Keyboard: the link, then its menu.
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'Harbor Lights'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(button).toHaveFocus();
  }
}`,...K.parameters?.docs?.source},description:{story:`A link and a menu on one card: the menu sits above the card's link, so it gets the click.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Files',
    items: files.map(f => ({
      ...f,
      actions: actions(f.title as string)
    }))
  },
  play: async ({
    canvas
  }) => {
    const cards = canvas.getAllByRole('listitem');
    // The picture is decorative: the file name names the card.
    const img = cards[0].querySelector('img')!;
    await expect(img).toHaveAttribute('alt', '');
    await expect(img.closest('[aria-hidden="true"]')).not.toBeNull();
    await expect(cards[0]).toHaveTextContent(/^Q3-board-pack\\.pdf2\\.4 MB$/);
    // Edge to edge: the cover is as wide as the card inside its border.
    await waitFor(() => expect(img.getBoundingClientRect().width).toBe(cards[0].clientWidth));
  }
}`,...q.parameters?.docs?.source},description:{story:"Files and photos: `cover` puts a picture across the top of the card, edge to edge.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    items: projects.slice(0, 3),
    'aria-label': 'Projects',
    footer: <Link href="#projects">View all</Link>
  },
  play: async ({
    canvas
  }) => {
    const link = canvas.getByRole('link', {
      name: 'View all'
    });
    await expect(canvas.getByRole('list').compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  }
}`,...J.parameters?.docs?.source},description:{story:`A "View all" link after the grid, for a few cards on a dashboard.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    empty: 'No files yet.',
    footer: <Link href="#upload">Upload a file</Link>
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('list')).toBeNull();
    await expect(canvas.getByText('No files yet.')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Upload a file'
    })).toBeVisible();
  }
}`,...Y.parameters?.docs?.source},description:{story:`Nothing yet: a line in place of the grid. The footer still shows.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      media: <Avatar initials="MW" />,
      title: 'Maximiliana Wolfeschlegelsteinhausenbergerdorff',
      status: <Tag size="sm" variant="neutral" text="Invited" />,
      description: 'Senior accounts payable specialist',
      meta: 'maximiliana.wolfeschlegelsteinhausenbergerdorff@northern-region.example.com',
      href: '#max',
      actions: actions('Maximiliana')
    }, ...people]
  },
  decorators: [Story => <div style={{
    inlineSize: 300
  }}>
        <Story />
      </div>],
  play: async ({
    canvas
  }) => {
    const region = canvas.getByRole('region');
    await waitFor(() => expect(region.scrollWidth).toBeLessThanOrEqual(region.clientWidth));
    // Narrower than one column: one card a row, full width.
    const cards = canvas.getAllByRole('listitem');
    await waitFor(() => expect(cards[1].getBoundingClientRect().top).toBeGreaterThan(cards[0].getBoundingClientRect().bottom));
    await expect(cards[0].getBoundingClientRect().width).toBe(region.getBoundingClientRect().width);
  }
}`,...X.parameters?.docs?.source},description:{story:`Harsh content in a narrow column: one card a row, and words with no spaces break rather than overflow.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Projects',
    items: projects.map((p, i) => ({
      ...p,
      cover: i === 0 ? files[0].cover : undefined,
      actions: actions(p.title as string)
    }))
  },
  globals: {
    theme: 'dark'
  }
}`,...Z.parameters?.docs?.source},description:{story:`Dark mode, with covers, links and actions, so the accessibility check covers both themes.`,...Z.parameters?.docs?.description}}}})))()}export{X as a,q as c,K as i,J as l,k as n,U as o,W as r,G as s,Y as t,$ as u};