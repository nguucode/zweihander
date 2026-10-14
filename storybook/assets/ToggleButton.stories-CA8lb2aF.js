import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./icon-C8IlC69p.js";import{n as o,t as s}from"./expectAnatomy-C52ByQ6s.js";import{n as c,t as l}from"./ToggleButton-BeEvm05y.js";var u=t({Anatomy:()=>O,Controlled:()=>C,Default:()=>v,Disabled:()=>T,DoSameLabel:()=>k,DontSwitchLabel:()=>A,FullWidth:()=>w,IconOnly:()=>x,Loading:()=>E,Matrix:()=>y,Sizes:()=>b,WithIcon:()=>S,__namedExportsOrder:()=>j,anatomyParts:()=>D,default:()=>h}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{d=n(),o(),i(),c(),f=r(),{expect:p,fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Buttons/ToggleButton`,tags:[`beta`],component:l,argTypes:{pressed:{description:"Controlled pressed state. Pair with `onPressedChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultPressed:{description:`Starting pressed state when uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onPressedChange:{description:`Called with the new state on click, Enter and Space.`,control:!1,table:{type:{summary:`(pressed: boolean) => void`}}},variant:{description:`Colour of the pressed state. Unpressed is always neutral.`,control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`],table:{type:{summary:`'primary' | 'accent' | 'secondary' | 'destructive'`},defaultValue:{summary:`'primary'`}}},appearance:{description:"Style of the pressed state. Unpressed is `outlined`, or `ghost` when this is `ghost`.",control:`inline-radio`,options:[`contained`,`outlined`,`ghost`],table:{type:{summary:`'contained' | 'outlined' | 'ghost'`},defaultValue:{summary:`'contained'`}}},size:{description:"24px (`sm`) or 32px (`md`) tall, as on Button.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},children:{description:"The label. Keep it the same in both states: `aria-pressed` carries the state.",control:`text`,table:{type:{summary:`ReactNode`}}},startIcon:{description:`Icon before the label. Decorative.`,control:!1,table:{type:{summary:`ReactNode`}}},endIcon:{description:`Icon after the label. Decorative.`,control:!1,table:{type:{summary:`ReactNode`}}},isIconOnly:{description:"Square, for an icon with no visible label. Requires `aria-label`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isLoading:{description:`Shows a spinner and stops toggling, keeping focus.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isFullWidth:{description:`Fills the width of its container.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:"Native `disabled`: dimmed and out of the tab order.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},value:{description:`Identifies the toggle inside a group.`,control:!1,table:{type:{summary:`string`}}}},args:{children:`Subscribe`,onPressedChange:m()},excludeStories:[`anatomyParts`]},g={display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`,alignItems:`center`},_={display:`grid`,gap:`var(--space-3)`},v={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Subscribe`});await p(r).toHaveAttribute(`aria-pressed`,`false`),await t.click(r),await p(r).toHaveAttribute(`aria-pressed`,`true`),await p(n.onPressedChange).toHaveBeenLastCalledWith(!0),await t.keyboard(` `),await p(r).toHaveAttribute(`aria-pressed`,`false`),await t.keyboard(`{Enter}`),await p(r).toHaveAttribute(`aria-pressed`,`true`),await p(r).toHaveAccessibleName(`Subscribe`)}},y={render:e=>(0,f.jsx)(`div`,{style:_,children:[`contained`,`outlined`,`ghost`].map(t=>(0,f.jsx)(`div`,{style:g,children:[`primary`,`accent`,`secondary`,`destructive`].flatMap(n=>[(0,f.jsx)(l,{...e,variant:n,appearance:t,children:n},`${n}-off`),(0,f.jsx)(l,{...e,variant:n,appearance:t,defaultPressed:!0,children:n},`${n}-on`)])},t))})},b={render:e=>(0,f.jsx)(`div`,{style:g,children:[`sm`,`md`].map(t=>(0,f.jsx)(l,{...e,size:t,defaultPressed:!0,children:t},t))})},x={args:{isIconOnly:!0,"aria-label":`Favourite`,children:(0,f.jsx)(a,{name:`star`}),appearance:`ghost`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Favourite`});await t.click(n),await p(n).toHaveAttribute(`aria-pressed`,`true`)}},S={args:{startIcon:(0,f.jsx)(a,{name:`star`}),children:`Star`,appearance:`outlined`,defaultPressed:!0}},C={render:function(e){let[t,n]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{style:g,children:[(0,f.jsx)(l,{...e,pressed:t,onPressedChange:n,children:`Bold`}),(0,f.jsx)(`span`,{children:t?`Bold on`:`Bold off`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Bold`})),await p(e.getByText(`Bold on`)).toBeVisible()}},w={args:{isFullWidth:!0,defaultPressed:!0},render:e=>(0,f.jsx)(`div`,{style:{inlineSize:`20rem`},children:(0,f.jsx)(l,{...e})})},T={args:{disabled:!0},play:async({canvas:e})=>{await p(e.getByRole(`button`,{name:`Subscribe`})).toBeDisabled()}},E={args:{isLoading:!0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Subscribe`});await p(r).toHaveAttribute(`aria-busy`,`true`),await t.tab(),await p(r).toHaveFocus(),await t.keyboard(`{Enter}`),await t.keyboard(` `),await p(n.onPressedChange).not.toHaveBeenCalled(),await p(r).toHaveAttribute(`aria-pressed`,`false`)}},D=[{name:`Container`,selector:`button`,description:`Neutral when unpressed; the pressed style comes from variant × appearance.`},{name:`Icon`,selector:`button > span:first-child`,description:`The start or end icon. Decorative.`},{name:`Label`,selector:`button > span:last-child`,description:`The text, kept the same in both states.`}],O={tags:[`!dev`],args:{startIcon:(0,f.jsx)(a,{name:`star`}),children:(0,f.jsx)(`span`,{children:`Star`}),defaultPressed:!0},play:async({canvasElement:e})=>{let t=await s(e,D);await p(t[2]).toHaveTextContent(`Star`)}},k={args:{children:`Follow`,defaultPressed:!0}},A={tags:[`!dev`],args:{children:`Unfollow`,defaultPressed:!0}},j=[`Default`,`Matrix`,`Sizes`,`IconOnly`,`WithIcon`,`Controlled`,`FullWidth`,`Disabled`,`Loading`,`anatomyParts`,`Anatomy`,`DoSameLabel`,`DontSwitchLabel`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const toggle = canvas.getByRole('button', {
      name: 'Subscribe'
    });
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await expect(args.onPressedChange).toHaveBeenLastCalledWith(true);
    // Space and Enter both toggle, like any button.
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await userEvent.keyboard('{Enter}');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    // The name does not change with the state; aria-pressed carries it.
    await expect(toggle).toHaveAccessibleName('Subscribe');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['contained', 'outlined', 'ghost'] as const).map(appearance => <div key={appearance} style={row}>
          {(['primary', 'accent', 'secondary', 'destructive'] as const).flatMap(variant => [<ToggleButton key={\`\${variant}-off\`} {...args} variant={variant} appearance={appearance}>
              {variant}
            </ToggleButton>, <ToggleButton key={\`\${variant}-on\`} {...args} variant={variant} appearance={appearance} defaultPressed>
              {variant}
            </ToggleButton>])}
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Each pair: unpressed, then pressed. Unpressed is always neutral.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md'] as const).map(size => <ToggleButton key={size} {...args} size={size} defaultPressed>
          {size}
        </ToggleButton>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isIconOnly: true,
    'aria-label': 'Favourite',
    children: <Icon name="star" />,
    appearance: 'ghost'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const toggle = canvas.getByRole('button', {
      name: 'Favourite'
    });
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="star" />,
    children: 'Star',
    appearance: 'outlined',
    defaultPressed: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [on, setOn] = useState(false);
    return <div style={row}>
        <ToggleButton {...args} pressed={on} onPressedChange={setOn}>
          Bold
        </ToggleButton>
        <span>{on ? 'Bold on' : 'Bold off'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Bold'
    }));
    await expect(canvas.getByText('Bold on')).toBeVisible();
  }
}`,...C.parameters?.docs?.source},description:{story:`Controlled: the parent owns the state.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    defaultPressed: true
  },
  render: args => <div style={{
    inlineSize: '20rem'
  }}>
      <ToggleButton {...args} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Subscribe'
    })).toBeDisabled();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const toggle = canvas.getByRole('button', {
      name: 'Subscribe'
    });
    await expect(toggle).toHaveAttribute('aria-busy', 'true');
    // Focusable while busy, but pressing it does nothing.
    await userEvent.tab();
    await expect(toggle).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onPressedChange).not.toHaveBeenCalled();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    startIcon: <Icon name="star" />,
    children: <span>Star</span>,
    defaultPressed: true
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Star');
  }
}`,...O.parameters?.docs?.source},description:{story:`Pressed, with an icon, the label in its own element so the docs can point at it.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Follow',
    defaultPressed: true
  }
}`,...k.parameters?.docs?.source},description:{story:"Guidelines, Do: the label names the setting; `aria-pressed` says whether it is on.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    children: 'Unfollow',
    defaultPressed: true
  }
}`,...A.parameters?.docs?.source},description:{story:`Guidelines, Don't: a label that flips to the action reads as "Unfollow, pressed".`,...A.parameters?.docs?.description}}}})))()}export{k as a,E as c,S as d,D as f,T as i,y as l,C as n,A as o,M as p,v as r,x as s,O as t,u};