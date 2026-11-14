import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{a as i,c as a,n as ee,t as te}from"./useRenderElement-euNwqn97.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as ne,t as l}from"./useStableCallback-BEuE3z7O.js";import{n as re,t as u}from"./useControlled-CUOYUBAC.js";import{n as d,t as ie}from"./CompositeRoot-BhbU7C-u.js";import{n as f,t as p}from"./icon-Cjfg2BMt.js";import{n as m,t as h}from"./expectAnatomy-C52ByQ6s.js";import{r as g,t as _}from"./Tooltip-C-0HXRgm.js";import{i as v,n as y,r as ae,t as b}from"./ToggleButton-DFQMEGVu.js";import{n as oe,t as x}from"./ToolbarRootContext-byp6zabJ.js";function se(){return S.useContext(C)}var S,C;function w(){return(w=t((()=>{S=e(r(),1),C=S.createContext(void 0)})))()}var T,E,D;function O(){return(O=t((()=>{T=e(r(),1),l(),u(),a(),te(),d(),x(),w(),v(),E=c(),D=T.forwardRef(function(e,t){let{defaultValue:n,disabled:r=!1,loopFocus:a=!0,onValueChange:te,orientation:o=`horizontal`,multiple:s=!1,value:c,className:l,render:u,style:d,...f}=e,p=oe(!0),m=se(),h=n??i,g=c!==void 0||n!==void 0,_=(p?.disabled??!1)||(m?.disabled??!1)||r,[v,y]=re({controlled:c,default:h,name:`ToggleGroup`,state:`value`}),b=ne((e,t,n)=>{let r;s?(r=v.slice(),t?r.push(e):r.splice(v.indexOf(e),1)):r=t?[e]:[],te?.(r,n),!n.isCanceled&&y(r)}),x={disabled:_,multiple:s,orientation:o},S=T.useMemo(()=>({disabled:_,setGroupValue:b,value:v,isValueInitialized:g}),[_,b,v,g]),C={role:`group`},w=ee(`div`,e,{enabled:!!p,state:x,ref:t,props:[C,f]});return(0,E.jsx)(ae.Provider,{value:S,children:p?w:(0,E.jsx)(ie,{render:u,className:l,style:d,state:x,refs:[t],props:[C,f],loopFocus:a,enableHomeAndEndKeys:!0,orientation:o})})})})))()}var ce,le,k;function ue(){return(ue=t((()=>{ce=`_separate_11klg_3`,le=`_joined_11klg_19`,k={separate:ce,joined:le}})))()}function A({type:e=`separate`,value:t,defaultValue:n,onValueChange:r,className:i,...a}){return(0,j.jsx)(D,{...a,value:t===void 0?void 0:[t],defaultValue:n===void 0?void 0:[n],onValueChange:(e,t)=>{if(e.length===0)return t.cancel();r?.(e[0])},className:s(k[e],i)})}var j;function M(){return(M=t((()=>{O(),o(),ue(),j=c(),A.__docgenInfo={description:`ToggleButtons that share one selection, exactly one on at a time, like Tabs.`,methods:[],displayName:`ButtonGroup`,props:{type:{required:!1,tsType:{name:`union`,raw:`'separate' | 'joined'`,elements:[{name:`literal`,value:`'separate'`},{name:`literal`,value:`'joined'`}]},description:"`separate`: ToggleButtons 4px apart. `joined`: one bar, inner corners square, borders shared.",defaultValue:{value:`'separate'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:"Controlled: the `value` of the ToggleButton that is on. Pair with `onValueChange`."},defaultValue:{required:!1,tsType:{name:`string`},description:`Uncontrolled: the value on at first.`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called with the value of the ToggleButton just turned on.`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables every toggle in the group.`}},composes:[`Omit`]}})))()}var de=n({Anatomy:()=>Z,Controlled:()=>q,Default:()=>H,Disabled:()=>J,DoSameLook:()=>Q,DontMixLooks:()=>$,IconToggles:()=>W,Joined:()=>U,Matrix:()=>Y,Sizes:()=>K,WithTooltips:()=>G,__namedExportsOrder:()=>fe,anatomyParts:()=>X,default:()=>R}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,fe;function pe(){return(pe=t((()=>{N=r(),m(),f(),g(),M(),y(),P=c(),{expect:F,fn:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/Buttons/ButtonGroup`,tags:[`beta`],component:A,argTypes:{type:{description:"`separate`: ToggleButtons 4px apart. `joined`: one bar, inner corners square, borders shared.",control:`inline-radio`,options:[`separate`,`joined`],table:{type:{summary:`'separate' | 'joined'`},defaultValue:{summary:`'separate'`}}},value:{description:"Controlled: the `value` of the ToggleButton that is on. Pair with `onValueChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`Uncontrolled: the value on at first.`,control:!1,table:{type:{summary:`string`}}},onValueChange:{description:`Called with the value of the ToggleButton just turned on. Pressing the one that is on again does nothing.`,control:!1,table:{type:{summary:`(value: string) => void`}}},disabled:{description:`Disables every toggle in the group.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:`Names the group for a screen reader, e.g. "View".`,control:`text`,table:{type:{summary:`string`}}},children:{description:"ToggleButtons, each with a `value`.",control:!1,table:{type:{summary:`ReactNode`}}}},args:{"aria-label":`View`,defaultValue:`list`,onValueChange:I()},excludeStories:[`anatomyParts`]},z={display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},B=(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{value:`list`,appearance:`outlined`,children:`List`}),(0,P.jsx)(b,{value:`board`,appearance:`outlined`,children:`Board`}),(0,P.jsx)(b,{value:`calendar`,appearance:`outlined`,children:`Calendar`})]}),V=(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{value:`list`,children:`List`}),(0,P.jsx)(b,{value:`board`,children:`Board`}),(0,P.jsx)(b,{value:`calendar`,children:`Calendar`})]}),H={render:e=>(0,P.jsx)(A,{...e,children:B}),play:async({canvas:e,userEvent:t,args:n})=>{await F(e.getByRole(`group`,{name:`View`})).toBeVisible();let r=e.getByRole(`button`,{name:`List`}),i=e.getByRole(`button`,{name:`Board`}),a=e.getByRole(`button`,{name:`Calendar`});await F(r).toHaveAttribute(`aria-pressed`,`true`),await F(i.getBoundingClientRect().left-r.getBoundingClientRect().right).toBe(4),await t.click(i),await F(i).toHaveAttribute(`aria-pressed`,`true`),await F(r).toHaveAttribute(`aria-pressed`,`false`),await F(n.onValueChange).toHaveBeenLastCalledWith(`board`),await t.click(i),await F(i).toHaveAttribute(`aria-pressed`,`true`),await F(i).toHaveFocus(),await t.keyboard(`{ArrowRight}`),await F(a).toHaveFocus(),await t.keyboard(`{ArrowRight}`),await F(r).toHaveFocus(),await t.keyboard(`{End}`),await F(a).toHaveFocus(),await t.keyboard(`{Home}`),await F(r).toHaveFocus(),await F(r).toHaveAttribute(`aria-pressed`,`false`),await t.keyboard(` `),await F(r).toHaveAttribute(`aria-pressed`,`true`),await t.tab(),await F(e.getByRole(`group`)).not.toContainElement(document.activeElement)}},U={args:{type:`joined`},render:e=>(0,P.jsx)(A,{...e,children:V}),play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`button`);await F(n.getBoundingClientRect().left-t.getBoundingClientRect().right).toBe(-1),await F(getComputedStyle(t).borderStartEndRadius).toBe(`0px`),await F(getComputedStyle(t).zIndex).toBe(`1`)}},W={args:{"aria-label":`Layout`},render:e=>(0,P.jsxs)(A,{...e,children:[(0,P.jsx)(b,{value:`list`,isIconOnly:!0,"aria-label":`List`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`menu`})}),(0,P.jsx)(b,{value:`calendar`,isIconOnly:!0,"aria-label":`Calendar`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`calendar`})})]}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Calendar`});await t.click(n),await F(n).toHaveAttribute(`aria-pressed`,`true`),await F(e.getByRole(`button`,{name:`List`})).toHaveAttribute(`aria-pressed`,`false`)}},G={args:{"aria-label":`Layout`},render:e=>(0,P.jsxs)(A,{...e,children:[(0,P.jsx)(_,{content:`List`,children:(0,P.jsx)(b,{value:`list`,isIconOnly:!0,"aria-label":`List`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`menu`})})}),(0,P.jsx)(_,{content:`Calendar`,children:(0,P.jsx)(b,{value:`calendar`,isIconOnly:!0,"aria-label":`Calendar`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`calendar`})})})]}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`group`,{name:`Layout`}),[r,i]=[e.getByRole(`button`,{name:`List`}),e.getByRole(`button`,{name:`Calendar`})];await F([...n.children]).toEqual([r,i]),await t.tab(),await L(document.body).findByRole(`tooltip`,{},{timeout:300}),await F([...n.children]).toEqual([r,i])}},K={render:e=>(0,P.jsx)(`div`,{style:z,children:[`separate`,`joined`].flatMap(t=>[`sm`,`md`].map(n=>(0,P.jsxs)(A,{...e,type:t,"aria-label":`View, ${t}, ${n}`,children:[(0,P.jsx)(b,{size:n,value:`list`,appearance:t===`separate`?`outlined`:void 0,children:`List`}),(0,P.jsx)(b,{size:n,value:`board`,appearance:t===`separate`?`outlined`:void 0,children:`Board`}),(0,P.jsx)(b,{size:n,value:`calendar`,appearance:t===`separate`?`outlined`:void 0,children:`Calendar`})]},t+n)))}),play:async({canvas:e})=>{for(let[t,n]of[[`sm`,24],[`md`,32]])for(let r of[`separate`,`joined`]){let i=e.getByRole(`group`,{name:`View, ${r}, ${t}`});for(let e of L(i).getAllByRole(`button`))await F(e.getBoundingClientRect().height).toBe(n)}}},q={render:function(e){let[t,n]=(0,N.useState)(`board`);return(0,P.jsxs)(`div`,{style:z,children:[(0,P.jsx)(A,{...e,defaultValue:void 0,value:t,onValueChange:n,children:B}),(0,P.jsxs)(`span`,{children:[`Showing `,t]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Calendar`})),await F(e.getByText(`Showing calendar`)).toBeVisible()}},J={args:{disabled:!0},render:e=>(0,P.jsx)(A,{...e,children:B}),play:async({canvas:e})=>{for(let t of e.getAllByRole(`button`))await F(t).toBeDisabled()}},Y={render:e=>(0,P.jsxs)(`div`,{style:z,children:[(0,P.jsx)(A,{...e,children:B}),(0,P.jsx)(A,{...e,type:`joined`,children:V}),(0,P.jsxs)(A,{...e,type:`joined`,"aria-label":`Layout`,defaultValue:`calendar`,children:[(0,P.jsx)(b,{value:`list`,isIconOnly:!0,"aria-label":`List`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`menu`})}),(0,P.jsx)(b,{value:`calendar`,isIconOnly:!0,"aria-label":`Calendar`,appearance:`outlined`,variant:`secondary`,children:(0,P.jsx)(p,{name:`calendar`})})]})]})},X=[{name:`Container`,selector:`[role="group"]`,description:`Separate spaces its toggles 4px apart; joined makes one bar, inner corners square, borders shared.`},{name:`Button`,selector:`button:not([aria-pressed="true"])`,description:`A ToggleButton, with a label or an icon.`},{name:`Selected`,selector:`button[aria-pressed="true"]`,description:`The toggle that is on: exactly one.`}],Z={tags:[`!dev`],args:{defaultValue:`board`},render:e=>(0,P.jsxs)(A,{...e,children:[(0,P.jsx)(b,{value:`list`,appearance:`outlined`,children:`List`}),(0,P.jsx)(b,{value:`board`,appearance:`outlined`,children:`Board`})]}),play:async({canvasElement:e})=>{let t=await h(e,X);await F(t[2]).toHaveTextContent(`Board`)}},Q={render:e=>(0,P.jsx)(A,{...e,children:B})},$={tags:[`!dev`],render:e=>(0,P.jsxs)(A,{...e,children:[(0,P.jsx)(b,{value:`list`,appearance:`outlined`,children:`List`}),(0,P.jsx)(b,{value:`board`,variant:`destructive`,children:`Board`}),(0,P.jsx)(b,{value:`calendar`,appearance:`ghost`,children:`Calendar`})]})},fe=[`Default`,`Joined`,`IconToggles`,`WithTooltips`,`Sizes`,`Controlled`,`Disabled`,`Matrix`,`anatomyParts`,`Anatomy`,`DoSameLook`,`DontMixLooks`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>{views}</ButtonGroup>,
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await expect(canvas.getByRole('group', {
      name: 'View'
    })).toBeVisible();
    const list = canvas.getByRole('button', {
      name: 'List'
    });
    const board = canvas.getByRole('button', {
      name: 'Board'
    });
    const calendar = canvas.getByRole('button', {
      name: 'Calendar'
    });
    await expect(list).toHaveAttribute('aria-pressed', 'true');
    // Separate: exactly the gap between neighbours, no overlap.
    await expect(board.getBoundingClientRect().left - list.getBoundingClientRect().right).toBe(4);
    // Pressing another releases the first.
    await userEvent.click(board);
    await expect(board).toHaveAttribute('aria-pressed', 'true');
    await expect(list).toHaveAttribute('aria-pressed', 'false');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('board');
    // Pressing the one that is on again keeps it: the group always has an answer.
    await userEvent.click(board);
    await expect(board).toHaveAttribute('aria-pressed', 'true');
    // One tab stop; arrow keys move between toggles, Home and End jump, and the focus wraps.
    await expect(board).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(calendar).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(list).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(calendar).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(list).toHaveFocus();
    // Arrows only move focus; Space or Enter turns one on.
    await expect(list).toHaveAttribute('aria-pressed', 'false');
    await userEvent.keyboard(' ');
    await expect(list).toHaveAttribute('aria-pressed', 'true');
    await userEvent.tab();
    await expect(canvas.getByRole('group')).not.toContainElement(document.activeElement as HTMLElement);
  }
}`,...H.parameters?.docs?.source},description:{story:`Separate: outlined ToggleButtons 4px apart, exactly one on.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'joined'
  },
  render: args => <ButtonGroup {...args}>{joinedViews}</ButtonGroup>,
  play: async ({
    canvas
  }) => {
    const [list, board] = canvas.getAllByRole('button');
    // Each toggle after the first overlaps the one before by its 1px border.
    await expect(board.getBoundingClientRect().left - list.getBoundingClientRect().right).toBe(-1);
    await expect(getComputedStyle(list).borderStartEndRadius).toBe('0px');
    await expect(getComputedStyle(list).zIndex).toBe('1');
  }
}`,...U.parameters?.docs?.source},description:{story:`Joined: one bar, the toggle that is on raised over its neighbours.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Layout'
  },
  render: args => <ButtonGroup {...args}>
      <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
        <Icon name="menu" />
      </ToggleButton>
      <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
        <Icon name="calendar" />
      </ToggleButton>
    </ButtonGroup>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const calendar = canvas.getByRole('button', {
      name: 'Calendar'
    });
    await userEvent.click(calendar);
    await expect(calendar).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', {
      name: 'List'
    })).toHaveAttribute('aria-pressed', 'false');
  }
}`,...W.parameters?.docs?.source},description:{story:"Icon-only toggles each need their own `aria-label`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Layout'
  },
  render: args => <ButtonGroup {...args}>
      <Tooltip content="List">
        <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
          <Icon name="menu" />
        </ToggleButton>
      </Tooltip>
      <Tooltip content="Calendar">
        <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
          <Icon name="calendar" />
        </ToggleButton>
      </Tooltip>
    </ButtonGroup>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const group = canvas.getByRole('group', {
      name: 'Layout'
    });
    const [list, calendar] = [canvas.getByRole('button', {
      name: 'List'
    }), canvas.getByRole('button', {
      name: 'Calendar'
    })];
    await expect([...group.children]).toEqual([list, calendar]);
    // Opening a tooltip adds nothing inside the group.
    await userEvent.tab();
    await within(document.body).findByRole('tooltip', {}, {
      timeout: 300
    });
    await expect([...group.children]).toEqual([list, calendar]);
  }
}`,...G.parameters?.docs?.source},description:{story:`A Tooltip merges onto its toggle rather than wrapping it, so the group still holds only its toggles.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['separate', 'joined'] as const).flatMap(type => (['sm', 'md'] as const).map(size => <ButtonGroup key={type + size} {...args} type={type} aria-label={\`View, \${type}, \${size}\`}>
            <ToggleButton size={size} value="list" appearance={type === 'separate' ? 'outlined' : undefined}>List</ToggleButton>
            <ToggleButton size={size} value="board" appearance={type === 'separate' ? 'outlined' : undefined}>Board</ToggleButton>
            <ToggleButton size={size} value="calendar" appearance={type === 'separate' ? 'outlined' : undefined}>Calendar</ToggleButton>
          </ButtonGroup>))}
    </div>,
  play: async ({
    canvas
  }) => {
    for (const [size, height] of [['sm', 24], ['md', 32]] as const) {
      for (const type of ['separate', 'joined']) {
        const group = canvas.getByRole('group', {
          name: \`View, \${type}, \${size}\`
        });
        for (const button of within(group).getAllByRole('button')) await expect(button.getBoundingClientRect().height).toBe(height);
      }
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`The size is each toggle's own; the group only places them.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState('board');
    return <div style={grid}>
        <ButtonGroup {...args} defaultValue={undefined} value={value} onValueChange={setValue}>
          {views}
        </ButtonGroup>
        <span>Showing {value}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Calendar'
    }));
    await expect(canvas.getByText('Showing calendar')).toBeVisible();
  }
}`,...q.parameters?.docs?.source},description:{story:`Controlled: the parent owns the value.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <ButtonGroup {...args}>{views}</ButtonGroup>,
  play: async ({
    canvas
  }) => {
    for (const toggle of canvas.getAllByRole('button')) await expect(toggle).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      <ButtonGroup {...args}>{views}</ButtonGroup>
      <ButtonGroup {...args} type="joined">{joinedViews}</ButtonGroup>
      <ButtonGroup {...args} type="joined" aria-label="Layout" defaultValue="calendar">
        <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
          <Icon name="menu" />
        </ToggleButton>
        <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
          <Icon name="calendar" />
        </ToggleButton>
      </ButtonGroup>
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Every form on one canvas, for the visual baseline.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: 'board'
  },
  render: args => <ButtonGroup {...args}>
      <ToggleButton value="list" appearance="outlined">List</ToggleButton>
      <ToggleButton value="board" appearance="outlined">Board</ToggleButton>
    </ButtonGroup>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Board');
  }
}`,...Z.parameters?.docs?.source},description:{story:`One on and one off, so the docs can point at each.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>{views}</ButtonGroup>
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: one look across the group, so only the one that is on stands out.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <ButtonGroup {...args}>
      <ToggleButton value="list" appearance="outlined">List</ToggleButton>
      <ToggleButton value="board" variant="destructive">Board</ToggleButton>
      <ToggleButton value="calendar" appearance="ghost">Calendar</ToggleButton>
    </ButtonGroup>
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a different variant per toggle reads as several states at once.`,...$.parameters?.docs?.description}}}})))()}export{J as a,W as c,X as d,pe as f,H as i,U as l,de as n,Q as o,q as r,$ as s,Z as t,G as u};