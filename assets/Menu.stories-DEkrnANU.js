import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Button-BLXGvKSL.js";import{n as s,t as c}from"./Menu-Dl135OjD.js";var l=t({Default:()=>b,Groups:()=>S,Links:()=>w,Submenu:()=>C,Typeahead:()=>x,__namedExportsOrder:()=>T,default:()=>v}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),a(),s(),u=n(),{expect:d,fn:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g=f(),_=f(),v={title:`Components/Navigation/Menu`,component:c,parameters:{a11y:{test:`error`}},args:{trigger:(0,u.jsx)(o,{appearance:`outlined`,variant:`accent`,endIcon:(0,u.jsx)(i,{name:`chevron-down`}),children:`Actions`}),items:[{label:`Edit`,icon:(0,u.jsx)(i,{name:`calendar`}),shortcut:`⌘ E`},{label:`Duplicate`,icon:(0,u.jsx)(i,{name:`plus`}),shortcut:`⌘ D`,onSelect:g},{label:`Archive`,disabled:!0},{type:`separator`},{label:`Delete`,icon:(0,u.jsx)(i,{name:`close`}),isDestructive:!0,onSelect:_}]},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},trigger:{control:!1},items:{control:!1}},decorators:[e=>(0,u.jsx)(`div`,{style:{minBlockSize:`18rem`},children:e()})]},y=()=>h(document.body),b={play:async({canvas:e})=>{g.mockClear();let t=e.getByRole(`button`,{name:`Actions`});await d(t).toHaveAttribute(`aria-haspopup`,`menu`),await p.click(t);let n=await y().findByRole(`menu`);await d(h(n).getAllByRole(`menuitem`)).toHaveLength(4),await d(h(n).getByRole(`menuitem`,{name:/Archive/})).toHaveAttribute(`aria-disabled`,`true`),await p.keyboard(`{ArrowDown}`),await m(()=>d(h(n).getByRole(`menuitem`,{name:/Edit/})).toHaveFocus()),await p.keyboard(`{ArrowDown}{Enter}`),await d(g).toHaveBeenCalledOnce(),await m(()=>d(y().queryByRole(`menu`)).toBeNull()),await d(t).toHaveFocus()}},x={play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:`Actions`}));let t=await y().findByRole(`menu`);await p.keyboard(`del`),await m(()=>d(h(t).getByRole(`menuitem`,{name:/Delete/})).toHaveFocus())}},S={args:{trigger:(0,u.jsx)(o,{appearance:`outlined`,variant:`accent`,children:`View`}),items:[{type:`group`,label:`Show`,items:[{type:`checkbox`,label:`Hidden files`,defaultChecked:!1},{type:`checkbox`,label:`File extensions`,defaultChecked:!0}]},{type:`separator`},{type:`radio`,label:`Sort by`,defaultValue:`name`,options:[{value:`name`,label:`Name`},{value:`modified`,label:`Date modified`},{value:`size`,label:`Size`}]}]},play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:`View`}));let t=await y().findByRole(`menu`),n=h(t).getByRole(`menuitemcheckbox`,{name:`Hidden files`});await d(n).toHaveAttribute(`aria-checked`,`false`),await p.click(n),await d(n).toHaveAttribute(`aria-checked`,`true`);let r=h(t).getByRole(`menuitemradio`,{name:`Size`});await p.click(r),await d(r).toHaveAttribute(`aria-checked`,`true`),await d(h(t).getByRole(`menuitemradio`,{name:`Name`})).toHaveAttribute(`aria-checked`,`false`),await m(()=>d(h(t).getByRole(`group`,{name:`Sort by`})).toBeVisible())}},C={args:{items:[{label:`Rename`},{label:`Move to`,items:[{label:`Design`},{label:`Engineering`},{label:`Archive`}]},{type:`separator`},{label:`Delete`,isDestructive:!0}]},play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:`Actions`}));let t=await y().findByRole(`menu`),n=h(t).getByRole(`menuitem`,{name:`Move to`});await d(n).toHaveAttribute(`aria-haspopup`,`menu`),await p.keyboard(`{ArrowDown}{ArrowDown}`),await m(()=>d(n).toHaveFocus()),await p.keyboard(`{ArrowRight}`),await m(()=>d(y().getAllByRole(`menu`)).toHaveLength(2)),await m(()=>d(y().getByRole(`menuitem`,{name:`Design`})).toHaveFocus()),await p.keyboard(`{ArrowLeft}`),await m(()=>d(n).toHaveFocus())}},w={args:{trigger:(0,u.jsx)(o,{appearance:`ghost`,variant:`accent`,children:`Help`}),items:[{label:`Documentation`,href:`#docs`},{label:`Keyboard shortcuts`,href:`#shortcuts`},{label:`Billing`,href:`#billing`,disabled:!0},{type:`separator`},{label:`Contact support`,href:`#support`}]},play:async({canvas:e})=>{await p.click(e.getByRole(`button`,{name:`Help`}));let t=await y().findByRole(`menu`);await d(h(t).getByRole(`menuitem`,{name:`Documentation`})).toHaveAttribute(`href`,`#docs`);let n=h(t).getByRole(`menuitem`,{name:`Billing`});await d(n).toHaveAttribute(`aria-disabled`,`true`),await d(n).not.toHaveAttribute(`href`)}},T=[`Default`,`Typeahead`,`Groups`,`Submenu`,`Links`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}export{C as a,l as i,S as n,E as o,w as r,b as t};