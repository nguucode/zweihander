import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./icon-D2EAxy9f.js";import{n as s,t as c}from"./utils-CUvRSo4U.js";import{n as l,t as u}from"./useRenderElement-JLgEYJQi.js";import{n as d,t as f}from"./useButton-BKapWYk8.js";import{n as p,t as m}from"./Button-BLXGvKSL.js";import{n as h,t as g}from"./useControlled-gPwvbF4e.js";import{n as ee,t as _}from"./useBaseUiId-6AHk5GE-.js";import{n as v,t as y}from"./CompositeItem-BL5iB7fo.js";import{T as b,m as x,r as S,t as te}from"./createBaseUIEventDetails-CDFGPHSH.js";function ne(){return C.useContext(w)}var C,w;function T(){return(T=t((()=>{C=e(i(),1),w=C.createContext(void 0)})))()}var E,D,O;function k(){return(k=t((()=>{E=e(i(),1),g(),_(),u(),T(),f(),v(),S(),x(),D=r(),O=E.forwardRef(function(e,t){let{className:n,defaultPressed:r=!1,disabled:i=!1,form:a,onPressedChange:o,pressed:s,render:c,type:u,value:f,nativeButton:p=!0,style:m,...g}=e,_=ee(f||void 0),v=ne(),x=v?.value??[],S=(i||v?.disabled)??!1,[C,w]=h({controlled:v?_!==void 0&&x.indexOf(_)>-1:s,default:r,name:`Toggle`,state:`pressed`}),{getButtonProps:T,buttonRef:O}=d({disabled:S,native:p}),k={disabled:S,pressed:C},A=[O,t],j=[{"aria-pressed":C,onClick(e){let t=!C,n=te(b,e.nativeEvent);o?.(t,n),!n.isCanceled&&(_&&v?.setGroupValue?.(_,t,n),!n.isCanceled&&w(t))}},g,T],M=l(`button`,e,{enabled:!v,state:k,ref:A,props:j}),N=E.useMemo(()=>({disabled:S,focusableWhenDisabled:!1}),[S]);return v?(0,D.jsx)(y,{tag:`button`,render:c,className:n,style:m,metadata:N,state:k,refs:A,props:j}):M})})))()}var A,j;function M(){return(M=t((()=>{A=`_tinted_3essc_10`,j={tinted:A}})))()}function N({variant:e=`primary`,appearance:t=`contained`,size:n,startIcon:r,endIcon:i,isLoading:a,isFullWidth:o,isIconOnly:s,pressed:l,defaultPressed:u,onPressedChange:d,disabled:f,className:p,children:h,...g}){return(0,P.jsx)(O,{...g,pressed:l,defaultPressed:u,onPressedChange:d&&(e=>d(e)),disabled:f,render:(l,u)=>{let d={...l,variant:u.pressed?e:`secondary`,appearance:u.pressed?t:t===`ghost`?`ghost`:`outlined`,size:n,startIcon:r,endIcon:i,isLoading:a,isFullWidth:o,isIconOnly:s,disabled:f,className:c(u.pressed&&t!==`contained`&&j.tinted,p),children:h};return(0,P.jsx)(m,{...d})}})}var P;function F(){return(F=t((()=>{k(),s(),p(),M(),P=r(),N.__docgenInfo={description:``,methods:[],displayName:`ToggleButton`,props:{variant:{defaultValue:{value:`'primary'`,computed:!1},required:!1},appearance:{defaultValue:{value:`'contained'`,computed:!1},required:!1}}}})))()}var re=n({Controlled:()=>J,Default:()=>U,Disabled:()=>X,FullWidth:()=>Y,IconOnly:()=>K,Loading:()=>Z,Matrix:()=>W,Sizes:()=>G,WithIcon:()=>q,__namedExportsOrder:()=>Q,default:()=>B}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{I=i(),a(),F(),L=r(),{expect:R,fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/Buttons/ToggleButton`,component:N,parameters:{a11y:{test:`error`}},argTypes:{variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]},appearance:{control:`inline-radio`,options:[`contained`,`outlined`,`ghost`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`xl`]},startIcon:{control:!1},endIcon:{control:!1}},args:{children:`Subscribe`,onPressedChange:z()}},V={display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`,alignItems:`center`},H={display:`grid`,gap:`var(--space-3)`},U={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Subscribe`});await R(r).toHaveAttribute(`aria-pressed`,`false`),await t.click(r),await R(r).toHaveAttribute(`aria-pressed`,`true`),await R(n.onPressedChange).toHaveBeenLastCalledWith(!0),await t.keyboard(` `),await R(r).toHaveAttribute(`aria-pressed`,`false`),await t.keyboard(`{Enter}`),await R(r).toHaveAttribute(`aria-pressed`,`true`),await R(r).toHaveAccessibleName(`Subscribe`)}},W={render:e=>(0,L.jsx)(`div`,{style:H,children:[`contained`,`outlined`,`ghost`].map(t=>(0,L.jsx)(`div`,{style:V,children:[`primary`,`accent`,`secondary`,`destructive`].flatMap(n=>[(0,L.jsx)(N,{...e,variant:n,appearance:t,children:n},`${n}-off`),(0,L.jsx)(N,{...e,variant:n,appearance:t,defaultPressed:!0,children:n},`${n}-on`)])},t))})},G={render:e=>(0,L.jsx)(`div`,{style:V,children:[`sm`,`md`,`lg`,`xl`].map(t=>(0,L.jsx)(N,{...e,size:t,defaultPressed:!0,children:t},t))})},K={args:{isIconOnly:!0,"aria-label":`Favourite`,children:(0,L.jsx)(o,{name:`star`}),appearance:`ghost`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Favourite`});await t.click(n),await R(n).toHaveAttribute(`aria-pressed`,`true`)}},q={args:{startIcon:(0,L.jsx)(o,{name:`star`}),children:`Star`,appearance:`outlined`,defaultPressed:!0}},J={render:function(e){let[t,n]=(0,I.useState)(!1);return(0,L.jsxs)(`div`,{style:V,children:[(0,L.jsx)(N,{...e,pressed:t,onPressedChange:n,children:`Bold`}),(0,L.jsx)(`span`,{children:t?`Bold on`:`Bold off`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Bold`})),await R(e.getByText(`Bold on`)).toBeVisible()}},Y={args:{isFullWidth:!0,defaultPressed:!0},render:e=>(0,L.jsx)(`div`,{style:{inlineSize:`20rem`},children:(0,L.jsx)(N,{...e})})},X={args:{disabled:!0},play:async({canvas:e})=>{await R(e.getByRole(`button`,{name:`Subscribe`})).toBeDisabled()}},Z={args:{isLoading:!0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:`Subscribe`});await R(r).toHaveAttribute(`aria-busy`,`true`),await t.tab(),await R(r).toHaveFocus(),await t.keyboard(`{Enter}`),await t.keyboard(` `),await R(n.onPressedChange).not.toHaveBeenCalled(),await R(r).toHaveAttribute(`aria-pressed`,`false`)}},Q=[`Default`,`Matrix`,`Sizes`,`IconOnly`,`WithIcon`,`Controlled`,`FullWidth`,`Disabled`,`Loading`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['contained', 'outlined', 'ghost'] as const).map(appearance => <div key={appearance} style={row}>
          {(['primary', 'accent', 'secondary', 'destructive'] as const).flatMap(variant => [<ToggleButton key={\`\${variant}-off\`} {...args} variant={variant} appearance={appearance}>
              {variant}
            </ToggleButton>, <ToggleButton key={\`\${variant}-on\`} {...args} variant={variant} appearance={appearance} defaultPressed>
              {variant}
            </ToggleButton>])}
        </div>)}
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Each pair: unpressed, then pressed. Unpressed is always neutral.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={row}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <ToggleButton key={size} {...args} size={size} defaultPressed>
          {size}
        </ToggleButton>)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    startIcon: <Icon name="star" />,
    children: 'Star',
    appearance: 'outlined',
    defaultPressed: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Controlled: the parent owns the state.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    isFullWidth: true,
    defaultPressed: true
  },
  render: args => <div style={{
    inlineSize: '20rem'
  }}>
      <ToggleButton {...args} />
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{re as a,W as i,U as n,$ as o,K as r,J as t};