import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-B7N9C5Fg.js";import{n as a,t as o}from"./icon-C8IlC69p.js";import{n as s,t as c}from"./expectAnatomy-C52ByQ6s.js";import{n as l,t as u}from"./Pictured-DOIgaTd2.js";import{i as d,n as f,r as p,t as m}from"./Menu-CDcAobrP.js";var h=t({Anatomy:()=>L,Default:()=>D,DoActions:()=>B,DoDestructiveLast:()=>R,DontDestructiveAmongOthers:()=>z,DontMenuAsField:()=>V,Groups:()=>j,Links:()=>N,Modal:()=>O,NonModal:()=>k,Open:()=>F,Submenu:()=>M,Typeahead:()=>A,__namedExportsOrder:()=>H,anatomyParts:()=>I,default:()=>w}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{s(),l(),a(),r(),f(),d(),g=n(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=v(),C=v(),w={title:`Components/Navigation/Menu`,tags:[`beta`],component:m,args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`accent`,endIcon:(0,g.jsx)(o,{name:`chevron-down`}),children:`Actions`}),items:[{label:`Edit`,icon:(0,g.jsx)(o,{name:`calendar`}),shortcut:`⌘ E`},{label:`Duplicate`,icon:(0,g.jsx)(o,{name:`plus`}),shortcut:`⌘ D`,onSelect:S},{label:`Archive`,disabled:!0},{type:`separator`},{label:`Delete`,icon:(0,g.jsx)(o,{name:`close`}),isDestructive:!0,onSelect:C}]},argTypes:{trigger:{description:"The button that opens the menu, usually a `<Button>`. Menu merges its props and ARIA onto it rather than wrapping it.",control:!1,table:{type:{summary:`ReactElement`}}},items:{description:"The entries, as data. An entry is an action (`label`, `onSelect`, `icon`, `shortcut`, `isDestructive`, `disabled`), a link (`href`), a submenu (`items`), `{ type: 'checkbox' }`, `{ type: 'radio', options }`, `{ type: 'group', label, items }` or `{ type: 'separator' }`. Give `textValue` when a label is not plain text, for typeahead.",control:!1,table:{type:{summary:`MenuEntry[]`}}},side:{description:`Which side of the trigger the popup opens on. It flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'bottom'`}}},align:{description:`How the popup lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'start'`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:!1,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called when the menu opens or closes: the trigger, Escape, a click outside, or choosing an action.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen, where a popup in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,g.jsx)(`div`,{style:{minBlockSize:`18rem`},children:e()})]},T=()=>x(document.body),E=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),D={play:async({canvas:e})=>{S.mockClear();let t=e.getByRole(`button`,{name:`Actions`});await _(t).toHaveAttribute(`aria-haspopup`,`menu`),await y.click(t);let n=await T().findByRole(`menu`);await _(x(n).getAllByRole(`menuitem`)).toHaveLength(4),await _(x(n).getByRole(`menuitem`,{name:/Archive/})).toHaveAttribute(`aria-disabled`,`true`),await y.keyboard(`{ArrowDown}`),await b(()=>_(x(n).getByRole(`menuitem`,{name:/Edit/})).toHaveFocus()),await y.keyboard(`{ArrowDown}{Enter}`),await _(S).toHaveBeenCalledOnce(),await b(()=>_(T().queryByRole(`menu`)).toBeNull()),await _(t).toHaveFocus()}},O={play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Actions`})),await T().findByRole(`menu`),await b(()=>_(E()).toBe(!0)),await y.keyboard(`{Escape}`),await b(()=>_(T().queryByRole(`menu`)).toBeNull()),await b(()=>_(E()).toBe(!1))}},k={args:{isModal:!1},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Actions`})),await T().findByRole(`menu`),await _(E()).toBe(!1),await y.keyboard(`{Escape}`),await b(()=>_(T().queryByRole(`menu`)).toBeNull())}},A={play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Actions`}));let t=await T().findByRole(`menu`);await y.keyboard(`del`),await b(()=>_(x(t).getByRole(`menuitem`,{name:/Delete/})).toHaveFocus())}},j={args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`View`}),items:[{type:`group`,label:`Show`,items:[{type:`checkbox`,label:`Hidden files`,defaultChecked:!1},{type:`checkbox`,label:`File extensions`,defaultChecked:!0}]},{type:`separator`},{type:`radio`,label:`Sort by`,defaultValue:`name`,options:[{value:`name`,label:`Name`},{value:`modified`,label:`Date modified`},{value:`size`,label:`Size`}]}]},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`View`}));let t=await T().findByRole(`menu`),n=x(t).getByRole(`menuitemcheckbox`,{name:`Hidden files`});await _(n).toHaveAttribute(`aria-checked`,`false`),await y.click(n),await _(n).toHaveAttribute(`aria-checked`,`true`);let r=x(t).getByRole(`menuitemradio`,{name:`Size`});await y.click(r),await _(r).toHaveAttribute(`aria-checked`,`true`),await _(x(t).getByRole(`menuitemradio`,{name:`Name`})).toHaveAttribute(`aria-checked`,`false`),await b(()=>_(x(t).getByRole(`group`,{name:`Sort by`})).toBeVisible())}},M={args:{items:[{label:`Rename`},{label:`Move to`,items:[{label:`Design`},{label:`Engineering`},{label:`Archive`}]},{type:`separator`},{label:`Delete`,isDestructive:!0}]},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Actions`}));let t=await T().findByRole(`menu`),n=x(t).getByRole(`menuitem`,{name:`Move to`});await _(n).toHaveAttribute(`aria-haspopup`,`menu`),await y.keyboard(`{ArrowDown}{ArrowDown}`),await b(()=>_(n).toHaveFocus()),await y.keyboard(`{ArrowRight}`),await b(()=>_(T().getAllByRole(`menu`)).toHaveLength(2)),await b(()=>_(T().getByRole(`menuitem`,{name:`Design`})).toHaveFocus()),await y.keyboard(`{ArrowLeft}`),await b(()=>_(n).toHaveFocus())}},N={args:{trigger:(0,g.jsx)(i,{appearance:`ghost`,variant:`accent`,children:`Help`}),items:[{label:`Documentation`,href:`#docs`},{label:`Keyboard shortcuts`,href:`#shortcuts`},{label:`Billing`,href:`#billing`,disabled:!0},{type:`separator`},{label:`Contact support`,href:`#support`}]},play:async({canvas:e})=>{await y.click(e.getByRole(`button`,{name:`Help`}));let t=await T().findByRole(`menu`);await _(x(t).getByRole(`menuitem`,{name:`Documentation`})).toHaveAttribute(`href`,`#docs`);let n=x(t).getByRole(`menuitem`,{name:`Billing`});await _(n).toHaveAttribute(`aria-disabled`,`true`),await _(n).not.toHaveAttribute(`href`)}},P=e=>(0,g.jsx)(u,{positioner:p.positioner,style:{display:`inline-flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`var(--space-1)`},children:t=>(0,g.jsx)(m,{...e,open:!0,isModal:!1,container:t})}),F={tags:[`!dev`],render:P,play:async({canvas:e})=>{let t=await e.findByRole(`menu`,{hidden:!0});await _(x(t).getAllByRole(`menuitem`,{hidden:!0})).toHaveLength(4)}},I=[{name:`Trigger`,selector:`button[aria-haspopup="menu"]`,description:`The button that opens it. Menu merges its props onto your element.`},{name:`Popup`,selector:`[role="menu"]`,description:`The surface: the same as the Select list, at least 12rem wide.`},{name:`Group label`,selector:`[role="group"] > div:first-child`,description:`Optional. Names a group of items; muted and small.`},{name:`Item`,selector:`[role="menuitem"]`,description:`An action, a link or a submenu trigger. One control tier tall.`},{name:`Icon`,selector:`[role="menuitem"] > span:first-child`,description:`Optional. Decorative.`},{name:`Shortcut`,selector:`kbd`,description:`Optional, display only: it does not bind the key.`},{name:`Submenu indicator`,selector:`[role="menuitem"][aria-haspopup="menu"] > span:last-child`,description:`A chevron on an item that opens a submenu.`},{name:`Separator`,selector:`[role="separator"]`,description:`A rule between groups of items.`},{name:`Check`,selector:`[role="menuitemcheckbox"] > span:first-child`,description:`Shows a checkbox or radio item is on. Its column lines up with the icons.`}],L={tags:[`!dev`],args:{items:[{type:`group`,label:`Page`,items:[{label:`Duplicate`,icon:(0,g.jsx)(o,{name:`plus`}),shortcut:`⌘ D`},{label:`Move to`,icon:(0,g.jsx)(o,{name:`menu`}),items:[{label:`Design`},{label:`Archive`}]}]},{type:`separator`},{type:`checkbox`,label:`Pin to top`,defaultChecked:!0},{type:`separator`},{label:`Delete`,icon:(0,g.jsx)(o,{name:`close`}),isDestructive:!0}]},render:P,play:async({canvasElement:e})=>{let t=await c(e,I);await _(t[2]).toHaveTextContent(`Page`),await _(t[3]).toHaveTextContent(`Duplicate`)}},R={tags:[`!dev`],args:{items:[{label:`Rename`},{label:`Duplicate`},{type:`separator`},{label:`Delete`,isDestructive:!0}]},render:P},z={tags:[`!dev`],args:{items:[{label:`Rename`},{label:`Delete`,isDestructive:!0},{label:`Duplicate`}]},render:P},B={tags:[`!dev`],args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`Export`}),items:[{label:`Download as CSV`},{label:`Download as PDF`},{label:`Copy link`}]},render:P},V={tags:[`!dev`],args:{trigger:(0,g.jsx)(i,{appearance:`outlined`,variant:`secondary`,endIcon:(0,g.jsx)(o,{name:`chevron-down`}),children:`Country: Vietnam`}),items:[{label:`Vietnam`},{label:`Thailand`},{label:`Japan`}]},render:P},H=[`Default`,`Modal`,`NonModal`,`Typeahead`,`Groups`,`Submenu`,`Links`,`Open`,`anatomyParts`,`Anatomy`,`DoDestructiveLast`,`DontDestructiveAmongOthers`,`DoActions`,`DontMenuAsField`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    onDuplicate.mockClear();
    const trigger = canvas.getByRole('button', {
      name: 'Actions'
    });
    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    await userEvent.click(trigger);
    const menu = await body().findByRole('menu');
    await expect(within(menu).getAllByRole('menuitem')).toHaveLength(4);
    await expect(within(menu).getByRole('menuitem', {
      name: /Archive/
    })).toHaveAttribute('aria-disabled', 'true');
    // Keyboard: arrows move, disabled items are skipped, Enter selects and closes.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Edit/
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(onDuplicate).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    await body().findByRole('menu');
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await waitFor(() => expect(isScrollLocked()).toBe(false));
  }
}`,...O.parameters?.docs?.source},description:{story:`Modal by default: page scroll is locked while the menu is open.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: false
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    await body().findByRole('menu');
    await expect(isScrollLocked()).toBe(false);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...k.parameters?.docs?.source},description:{story:"`isModal={false}` leaves the page scrollable while the menu is open.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    const menu = await body().findByRole('menu');
    await userEvent.keyboard('del');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Delete/
    })).toHaveFocus());
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button appearance="outlined" variant="accent">View</Button>,
    items: [{
      type: 'group',
      label: 'Show',
      items: [{
        type: 'checkbox',
        label: 'Hidden files',
        defaultChecked: false
      }, {
        type: 'checkbox',
        label: 'File extensions',
        defaultChecked: true
      }]
    }, {
      type: 'separator'
    }, {
      type: 'radio',
      label: 'Sort by',
      defaultValue: 'name',
      options: [{
        value: 'name',
        label: 'Name'
      }, {
        value: 'modified',
        label: 'Date modified'
      }, {
        value: 'size',
        label: 'Size'
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'View'
    }));
    const menu = await body().findByRole('menu');
    const hidden = within(menu).getByRole('menuitemcheckbox', {
      name: 'Hidden files'
    });
    await expect(hidden).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(hidden);
    // Toggles stay open, so several can be changed in one go.
    await expect(hidden).toHaveAttribute('aria-checked', 'true');
    const size = within(menu).getByRole('menuitemradio', {
      name: 'Size'
    });
    await userEvent.click(size);
    await expect(size).toHaveAttribute('aria-checked', 'true');
    await expect(within(menu).getByRole('menuitemradio', {
      name: 'Name'
    })).toHaveAttribute('aria-checked', 'false');
    // The popup fades in from opacity 0; wait for it rather than race it.
    await waitFor(() => expect(within(menu).getByRole('group', {
      name: 'Sort by'
    })).toBeVisible());
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Move to',
      items: [{
        label: 'Design'
      }, {
        label: 'Engineering'
      }, {
        label: 'Archive'
      }]
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      isDestructive: true
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    const menu = await body().findByRole('menu');
    const move = within(menu).getByRole('menuitem', {
      name: 'Move to'
    });
    await expect(move).toHaveAttribute('aria-haspopup', 'menu');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await waitFor(() => expect(move).toHaveFocus());
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(2));
    await waitFor(() => expect(body().getByRole('menuitem', {
      name: 'Design'
    })).toHaveFocus());
    // Left goes back to the parent item.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(move).toHaveFocus());
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button appearance="ghost" variant="accent">Help</Button>,
    items: [{
      label: 'Documentation',
      href: '#docs'
    }, {
      label: 'Keyboard shortcuts',
      href: '#shortcuts'
    }, {
      label: 'Billing',
      href: '#billing',
      disabled: true
    }, {
      type: 'separator'
    }, {
      label: 'Contact support',
      href: '#support'
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Help'
    }));
    const menu = await body().findByRole('menu');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Documentation'
    })).toHaveAttribute('href', '#docs');
    // A disabled link is inert: no href to follow.
    const billing = within(menu).getByRole('menuitem', {
      name: 'Billing'
    });
    await expect(billing).toHaveAttribute('aria-disabled', 'true');
    await expect(billing).not.toHaveAttribute('href');
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture,
  play: async ({
    canvas
  }) => {
    // Rendered inside the story, not <body>.
    const menu = await canvas.findByRole('menu', {
      hidden: true
    });
    await expect(within(menu).getAllByRole('menuitem', {
      hidden: true
    })).toHaveLength(4);
  }
}`,...F.parameters?.docs?.source},description:{story:`The menu open, for the docs.`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      type: 'group',
      label: 'Page',
      items: [{
        label: 'Duplicate',
        icon: <Icon name="plus" />,
        shortcut: '⌘ D'
      }, {
        label: 'Move to',
        icon: <Icon name="menu" />,
        items: [{
          label: 'Design'
        }, {
          label: 'Archive'
        }]
      }]
    }, {
      type: 'separator'
    }, {
      type: 'checkbox',
      label: 'Pin to top',
      defaultChecked: true
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      icon: <Icon name="close" />,
      isDestructive: true
    }]
  },
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Page');
    await expect(found[3]).toHaveTextContent('Duplicate');
  }
}`,...L.parameters?.docs?.source},description:{story:`Every part present, the menu open in place.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Duplicate'
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      isDestructive: true
    }]
  },
  render: picture
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Do: the destructive action last, after a separator.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Delete',
      isDestructive: true
    }, {
      label: 'Duplicate'
    }]
  },
  render: picture
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Don't: the destructive action among the others, where a slip of the arrow key lands on it.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    trigger: <Button appearance="outlined" variant="accent">Export</Button>,
    items: [{
      label: 'Download as CSV'
    }, {
      label: 'Download as PDF'
    }, {
      label: 'Copy link'
    }]
  },
  render: picture
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Do: a menu acts. Picking a value for a form is a Select.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    trigger: <Button appearance="outlined" variant="secondary" endIcon={<Icon name="chevron-down" />}>
        Country: Vietnam
      </Button>,
    items: [{
      label: 'Vietnam'
    }, {
      label: 'Thailand'
    }, {
      label: 'Japan'
    }]
  },
  render: picture
}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Don't: a menu standing in for a form field, with the choice written into the trigger.`,...V.parameters?.docs?.description}}}})))()}export{z as a,N as c,M as d,I as f,R as i,h as l,D as n,V as o,U as p,B as r,j as s,L as t,F as u};