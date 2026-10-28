import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{a as i,c as a,n as ee,t as te}from"./useRenderElement-euNwqn97.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as ne,t as re}from"./useStableCallback-BEuE3z7O.js";import{n as ie,t as l}from"./Button-Bwi4V5f1.js";import{n as ae,t as u}from"./useControlled-CUOYUBAC.js";import{n as d,t as oe}from"./CompositeRoot-BhbU7C-u.js";import{n as se,t as f}from"./icon-C9aTyDDd.js";import{n as p,t as m}from"./expectAnatomy-C52ByQ6s.js";import{i as h,n as g}from"./Tooltip-C5EQMDXx.js";import{i as _,n as v,r as ce,t as y}from"./ToggleButton-Bmn0x9ko.js";import{n as le,t as b}from"./ToolbarRootContext-byp6zabJ.js";function ue(){return x.useContext(S)}var x,S;function C(){return(C=t((()=>{x=e(r(),1),S=x.createContext(void 0)})))()}var w,T,E;function de(){return(de=t((()=>{w=e(r(),1),re(),u(),a(),te(),d(),b(),C(),_(),T=c(),E=w.forwardRef(function(e,t){let{defaultValue:n,disabled:r=!1,loopFocus:a=!0,onValueChange:te,orientation:o=`horizontal`,multiple:s=!1,value:c,className:re,render:ie,style:l,...u}=e,d=le(!0),se=ue(),f=n??i,p=c!==void 0||n!==void 0,m=(d?.disabled??!1)||(se?.disabled??!1)||r,[h,g]=ae({controlled:c,default:f,name:`ToggleGroup`,state:`value`}),_=ne((e,t,n)=>{let r;s?(r=h.slice(),t?r.push(e):r.splice(h.indexOf(e),1)):r=t?[e]:[],te?.(r,n),!n.isCanceled&&g(r)}),v={disabled:m,multiple:s,orientation:o},y=w.useMemo(()=>({disabled:m,setGroupValue:_,value:h,isValueInitialized:p}),[m,_,h,p]),b={role:`group`},x=ee(`div`,e,{enabled:!!d,state:v,ref:t,props:[b,u]});return(0,T.jsx)(ce.Provider,{value:y,children:d?x:(0,T.jsx)(oe,{render:ie,className:re,style:l,state:v,refs:[t],props:[b,u],loopFocus:a,enableHomeAndEndKeys:!0,orientation:o})})})})))()}var fe,D;function pe(){return(pe=t((()=>{fe=`_group_mp8fv_6`,D={group:fe}})))()}function O({className:e,...t}){return(0,A.jsx)(`div`,{role:`group`,...t,className:s(D.group,e)})}function k({onValueChange:e,multiple:t=!1,className:n,...r}){return(0,A.jsx)(E,{...r,multiple:t,onValueChange:(n,r)=>{if(!t&&n.length===0)return r.cancel();e?.(n)},className:s(D.group,n)})}var A;function me(){return(me=t((()=>{de(),o(),pe(),A=c(),O.__docgenInfo={description:`Buttons joined into one bar: related actions that read as a set.`,methods:[],displayName:`ButtonGroup`},k.__docgenInfo={description:`ToggleButtons joined into one bar, sharing one selection.`,methods:[],displayName:`ToggleGroup`,props:{value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:"Controlled: the `value` of each pressed ToggleButton."},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Uncontrolled: the values pressed at first.`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Base UI's second argument (event details) is dropped: nothing here needs it.`},multiple:{required:!1,tsType:{name:`boolean`},description:`Any number pressed at once. Without it, one at a time: a segmented control.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Disables every toggle in the group.`}},composes:[`Omit`]}})))()}var he=n({Actions:()=>H,Anatomy:()=>Z,Controlled:()=>q,Default:()=>B,Disabled:()=>J,DoSameLook:()=>Q,DontMixLooks:()=>$,IconOnly:()=>U,IconToggles:()=>W,Matrix:()=>Y,Multiple:()=>V,Sizes:()=>K,WithTooltips:()=>G,__namedExportsOrder:()=>_e,anatomyParts:()=>X,default:()=>F}),ge,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,_e;function ve(){return(ve=t((()=>{ge=r(),p(),se(),h(),ie(),me(),v(),j=c(),{expect:M,fn:N,within:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Buttons/ButtonGroup`,tags:[`experimental`],component:k,argTypes:{value:{description:"Controlled: the `value` of each pressed ToggleButton. Pair with `onValueChange`.",control:!1,table:{type:{summary:`string[]`}}},defaultValue:{description:`Uncontrolled: the values pressed at first.`,control:!1,table:{type:{summary:`string[]`}}},onValueChange:{description:`Called with the new list of pressed values.`,control:!1,table:{type:{summary:`(value: string[]) => void`}}},multiple:{description:`Any number pressed at once. Without it, one at a time (a segmented control): once one is pressed, pressing it again keeps it pressed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables every toggle in the group.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},"aria-label":{description:`Names the group for a screen reader, e.g. "View".`,control:`text`,table:{type:{summary:`string`}}},children:{description:"ToggleButtons, each with a `value`. ButtonGroup takes Buttons instead.",control:!1,table:{type:{summary:`ReactNode`}}}},args:{"aria-label":`View`,defaultValue:[`list`],onValueChange:N()},excludeStories:[`anatomyParts`]},I={display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},L=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y,{value:`list`,children:`List`}),(0,j.jsx)(y,{value:`board`,children:`Board`}),(0,j.jsx)(y,{value:`calendar`,children:`Calendar`})]}),R=(0,j.jsxs)(O,{"aria-label":`Period`,children:[(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,children:`Years`}),(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,children:`Months`}),(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,children:`Days`})]}),z=(0,j.jsxs)(O,{"aria-label":`Pages`,children:[(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,isIconOnly:!0,"aria-label":`Previous`,children:(0,j.jsx)(f,{name:`chevron-left`})}),(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,isIconOnly:!0,"aria-label":`Next`,children:(0,j.jsx)(f,{name:`chevron-right`})})]}),B={render:e=>(0,j.jsx)(k,{...e,children:L}),play:async({canvas:e,userEvent:t,args:n})=>{await M(e.getByRole(`group`,{name:`View`})).toBeVisible();let r=e.getByRole(`button`,{name:`List`}),i=e.getByRole(`button`,{name:`Board`}),a=e.getByRole(`button`,{name:`Calendar`});await M(r).toHaveAttribute(`aria-pressed`,`true`),await t.click(i),await M(i).toHaveAttribute(`aria-pressed`,`true`),await M(r).toHaveAttribute(`aria-pressed`,`false`),await M(n.onValueChange).toHaveBeenLastCalledWith([`board`]),await t.click(i),await M(i).toHaveAttribute(`aria-pressed`,`true`),await M(i).toHaveFocus(),await t.keyboard(`{ArrowRight}`),await M(a).toHaveFocus(),await t.keyboard(`{ArrowRight}`),await M(r).toHaveFocus(),await t.keyboard(`{End}`),await M(a).toHaveFocus(),await t.keyboard(`{Home}`),await M(r).toHaveFocus(),await M(r).toHaveAttribute(`aria-pressed`,`false`),await t.keyboard(` `),await M(r).toHaveAttribute(`aria-pressed`,`true`),await t.tab(),await M(e.getByRole(`group`)).not.toContainElement(document.activeElement)}},V={args:{multiple:!0,"aria-label":`Status`,defaultValue:[`open`]},render:e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsx)(y,{value:`open`,children:`Open`}),(0,j.jsx)(y,{value:`pending`,children:`Pending`}),(0,j.jsx)(y,{value:`closed`,children:`Closed`})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`button`,{name:`Pending`})),await M(n.onValueChange).toHaveBeenLastCalledWith([`open`,`pending`]),await M(e.getByRole(`button`,{name:`Open`})).toHaveAttribute(`aria-pressed`,`true`),await t.click(e.getByRole(`button`,{name:`Open`})),await t.click(e.getByRole(`button`,{name:`Pending`})),await M(n.onValueChange).toHaveBeenLastCalledWith([])}},H={render:()=>R,play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`group`,{name:`Period`});await t.tab(),await M(e.getByRole(`button`,{name:`Years`})).toHaveFocus(),await t.tab(),await M(e.getByRole(`button`,{name:`Months`})).toHaveFocus();for(let t of e.getAllByRole(`button`))await M(n).toContainElement(t),await M(t).not.toHaveAttribute(`aria-pressed`),await M(t).not.toHaveAttribute(`tabindex`,`-1`)}},U={render:()=>z,play:async({canvas:e})=>{await M(e.getByRole(`button`,{name:`Previous`})).toBeVisible(),await M(e.getByRole(`button`,{name:`Next`})).toBeVisible()}},W={args:{"aria-label":`Layout`},render:e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsx)(y,{value:`list`,isIconOnly:!0,"aria-label":`List`,appearance:`outlined`,variant:`secondary`,children:(0,j.jsx)(f,{name:`menu`})}),(0,j.jsx)(y,{value:`calendar`,isIconOnly:!0,"aria-label":`Calendar`,appearance:`outlined`,variant:`secondary`,children:(0,j.jsx)(f,{name:`calendar`})})]}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Calendar`});await t.click(n),await M(n).toHaveAttribute(`aria-pressed`,`true`),await M(e.getByRole(`button`,{name:`List`})).toHaveAttribute(`aria-pressed`,`false`)}},G={render:()=>(0,j.jsxs)(O,{"aria-label":`Pages`,children:[(0,j.jsx)(g,{content:`Previous`,children:(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,isIconOnly:!0,"aria-label":`Previous`,children:(0,j.jsx)(f,{name:`chevron-left`})})}),(0,j.jsx)(g,{content:`Next`,children:(0,j.jsx)(l,{variant:`secondary`,appearance:`outlined`,isIconOnly:!0,"aria-label":`Next`,children:(0,j.jsx)(f,{name:`chevron-right`})})})]}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`group`,{name:`Pages`}),[r,i]=[e.getByRole(`button`,{name:`Previous`}),e.getByRole(`button`,{name:`Next`})];await M([...n.children]).toEqual([r,i]),await M(getComputedStyle(r).borderStartEndRadius).toBe(`0px`),await M(getComputedStyle(i).marginInlineStart).toBe(`-1px`),await t.tab(),await P(document.body).findByRole(`tooltip`,{},{timeout:300}),await M([...n.children]).toEqual([r,i])}},K={render:e=>(0,j.jsx)(`div`,{style:I,children:[`sm`,`md`].map(t=>(0,j.jsxs)(k,{...e,"aria-label":`View, ${t}`,children:[(0,j.jsx)(y,{size:t,value:`list`,children:`List`}),(0,j.jsx)(y,{size:t,value:`board`,children:`Board`}),(0,j.jsx)(y,{size:t,value:`calendar`,children:`Calendar`})]},t))})},q={render:function(e){let[t,n]=(0,ge.useState)([`board`]);return(0,j.jsxs)(`div`,{style:I,children:[(0,j.jsx)(k,{...e,defaultValue:void 0,value:t,onValueChange:n,children:L}),(0,j.jsxs)(`span`,{children:[`Showing `,t.join(`, `)]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Calendar`})),await M(e.getByText(`Showing calendar`)).toBeVisible()}},J={args:{disabled:!0},render:e=>(0,j.jsx)(k,{...e,children:L}),play:async({canvas:e})=>{for(let t of e.getAllByRole(`button`))await M(t).toBeDisabled()}},Y={render:e=>(0,j.jsxs)(`div`,{style:I,children:[(0,j.jsx)(k,{...e,children:L}),(0,j.jsxs)(k,{...e,"aria-label":`Status`,multiple:!0,defaultValue:[`open`,`closed`],children:[(0,j.jsx)(y,{appearance:`outlined`,variant:`secondary`,value:`open`,children:`Open`}),(0,j.jsx)(y,{appearance:`outlined`,variant:`secondary`,value:`pending`,children:`Pending`}),(0,j.jsx)(y,{appearance:`outlined`,variant:`secondary`,value:`closed`,children:`Closed`})]}),R,z]})},X=[{name:`Container`,selector:`[role="group"]`,description:`Joins the buttons: inner corners square, borders shared.`},{name:`Button`,selector:`button:not([aria-pressed="true"])`,description:`A ToggleButton (or a Button in ButtonGroup), with a label or an icon.`},{name:`Selected`,selector:`button[aria-pressed="true"]`,description:"The pressed toggle: one at a time, or several with `multiple`."}],Z={tags:[`!dev`],args:{defaultValue:[`board`]},render:e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsx)(y,{value:`list`,children:`List`}),(0,j.jsx)(y,{value:`board`,children:`Board`})]}),play:async({canvasElement:e})=>{let t=await m(e,X);await M(t[2]).toHaveTextContent(`Board`)}},Q={render:e=>(0,j.jsx)(k,{...e,children:L})},$={tags:[`!dev`],render:e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsx)(y,{value:`list`,children:`List`}),(0,j.jsx)(y,{value:`board`,variant:`destructive`,children:`Board`}),(0,j.jsx)(y,{value:`calendar`,appearance:`ghost`,children:`Calendar`})]})},_e=[`Default`,`Multiple`,`Actions`,`IconOnly`,`IconToggles`,`WithTooltips`,`Sizes`,`Controlled`,`Disabled`,`Matrix`,`anatomyParts`,`Anatomy`,`DoSameLook`,`DontMixLooks`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleGroup {...args}>{views}</ToggleGroup>,
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
    // Pressing another releases the first.
    await userEvent.click(board);
    await expect(board).toHaveAttribute('aria-pressed', 'true');
    await expect(list).toHaveAttribute('aria-pressed', 'false');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['board']);
    // Pressing the pressed one again keeps it: a segmented control always has an answer.
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
    // Arrows only move focus; Space or Enter presses.
    await expect(list).toHaveAttribute('aria-pressed', 'false');
    await userEvent.keyboard(' ');
    await expect(list).toHaveAttribute('aria-pressed', 'true');
    await userEvent.tab();
    await expect(canvas.getByRole('group')).not.toContainElement(document.activeElement as HTMLElement);
  }
}`,...B.parameters?.docs?.source},description:{story:`Segmented control: one view at a time.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    'aria-label': 'Status',
    defaultValue: ['open']
  },
  render: args => <ToggleGroup {...args}>
      <ToggleButton value="open">Open</ToggleButton>
      <ToggleButton value="pending">Pending</ToggleButton>
      <ToggleButton value="closed">Closed</ToggleButton>
    </ToggleGroup>,
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Pending'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['open', 'pending']);
    await expect(canvas.getByRole('button', {
      name: 'Open'
    })).toHaveAttribute('aria-pressed', 'true');
    // In a multiple group every toggle can be released, down to none.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Pending'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith([]);
  }
}`,...V.parameters?.docs?.source},description:{story:`Several at once: filters that combine.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => periods,
  play: async ({
    canvas,
    userEvent
  }) => {
    const group = canvas.getByRole('group', {
      name: 'Period'
    });
    // Unlike a toggle group, Tab stops on each button in turn.
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Years'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Months'
    })).toHaveFocus();
    // Nothing stays pressed.
    for (const button of canvas.getAllByRole('button')) {
      await expect(group).toContainElement(button);
      await expect(button).not.toHaveAttribute('aria-pressed');
      await expect(button).not.toHaveAttribute('tabindex', '-1');
    }
  }
}`,...H.parameters?.docs?.source},description:{story:`Button group: related actions joined into one bar. Nothing stays pressed.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => pages,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Previous'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Next'
    })).toBeVisible();
  }
}`,...U.parameters?.docs?.source},description:{story:"Icon-only buttons each need their own `aria-label`.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Layout'
  },
  render: args => <ToggleGroup {...args}>
      <ToggleButton value="list" isIconOnly aria-label="List" appearance="outlined" variant="secondary">
        <Icon name="menu" />
      </ToggleButton>
      <ToggleButton value="calendar" isIconOnly aria-label="Calendar" appearance="outlined" variant="secondary">
        <Icon name="calendar" />
      </ToggleButton>
    </ToggleGroup>,
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
  render: () => <ButtonGroup aria-label="Pages">
      <Tooltip content="Previous">
        <Button variant="secondary" appearance="outlined" isIconOnly aria-label="Previous">
          <Icon name="chevron-left" />
        </Button>
      </Tooltip>
      <Tooltip content="Next">
        <Button variant="secondary" appearance="outlined" isIconOnly aria-label="Next">
          <Icon name="chevron-right" />
        </Button>
      </Tooltip>
    </ButtonGroup>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const group = canvas.getByRole('group', {
      name: 'Pages'
    });
    const [previous, next] = [canvas.getByRole('button', {
      name: 'Previous'
    }), canvas.getByRole('button', {
      name: 'Next'
    })];
    await expect([...group.children]).toEqual([previous, next]);
    await expect(getComputedStyle(previous).borderStartEndRadius).toBe('0px');
    await expect(getComputedStyle(next).marginInlineStart).toBe('-1px');
    // Opening a tooltip adds nothing inside the group.
    await userEvent.tab();
    await within(document.body).findByRole('tooltip', {}, {
      timeout: 300
    });
    await expect([...group.children]).toEqual([previous, next]);
  }
}`,...G.parameters?.docs?.source},description:{story:`A Tooltip merges onto its button rather than wrapping it, so tooltipped buttons still join.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      {(['sm', 'md'] as const).map(size => <ToggleGroup key={size} {...args} aria-label={\`View, \${size}\`}>
          <ToggleButton size={size} value="list">List</ToggleButton>
          <ToggleButton size={size} value="board">Board</ToggleButton>
          <ToggleButton size={size} value="calendar">Calendar</ToggleButton>
        </ToggleGroup>)}
    </div>
}`,...K.parameters?.docs?.source},description:{story:`The size is each button's own; the group only joins them.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(['board']);
    return <div style={grid}>
        <ToggleGroup {...args} defaultValue={undefined} value={value} onValueChange={setValue}>
          {views}
        </ToggleGroup>
        <span>Showing {value.join(', ')}</span>
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
  render: args => <ToggleGroup {...args}>{views}</ToggleGroup>,
  play: async ({
    canvas
  }) => {
    for (const toggle of canvas.getAllByRole('button')) await expect(toggle).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={grid}>
      <ToggleGroup {...args}>{views}</ToggleGroup>
      <ToggleGroup {...args} aria-label="Status" multiple defaultValue={['open', 'closed']}>
        <ToggleButton appearance="outlined" variant="secondary" value="open">Open</ToggleButton>
        <ToggleButton appearance="outlined" variant="secondary" value="pending">Pending</ToggleButton>
        <ToggleButton appearance="outlined" variant="secondary" value="closed">Closed</ToggleButton>
      </ToggleGroup>
      {periods}
      {pages}
    </div>
}`,...Y.parameters?.docs?.source},description:{story:`Every form on one canvas, for the visual baseline.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    defaultValue: ['board']
  },
  render: args => <ToggleGroup {...args}>
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="board">Board</ToggleButton>
    </ToggleGroup>,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Board');
  }
}`,...Z.parameters?.docs?.source},description:{story:`One pressed and one not, so the docs can point at each.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <ToggleGroup {...args}>{views}</ToggleGroup>
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: one look across the group, so only the pressed one stands out.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => <ToggleGroup {...args}>
      <ToggleButton value="list">List</ToggleButton>
      <ToggleButton value="board" variant="destructive">Board</ToggleButton>
      <ToggleButton value="calendar" appearance="ghost">Calendar</ToggleButton>
    </ToggleGroup>
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a different variant per button reads as several states at once.`,...$.parameters?.docs?.description}}}})))()}export{B as a,$ as c,G as d,X as f,q as i,U as l,Z as n,J as o,ve as p,he as r,Q as s,H as t,V as u};