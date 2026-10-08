import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Button-BdtJKtga.js";import{n as c,t as l}from"./icon-Dc4hTclj.js";import{n as u,t as d}from"./TextInput-ceLmDhn8.js";import{n as f,t as p}from"./Link-Cxb1auP5.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{m=`_inlineAlert_1qtrw_1`,h=`_sm_1qtrw_13`,g=`_info_1qtrw_19`,_=`_success_1qtrw_22`,v=`_warning_1qtrw_25`,y=`_danger_1qtrw_28`,b=`_icon_1qtrw_34`,x=`_message_1qtrw_46`,S=`_action_1qtrw_50`,C={inlineAlert:m,sm:h,info:g,success:_,warning:v,danger:y,icon:b,message:x,action:S}})))()}function T({variant:e=`info`,size:t=`md`,icon:n,action:r,isLive:i=!1,className:o,children:s,...c}){return(0,E.jsxs)(`div`,{role:i?e===`danger`||e===`warning`?`alert`:`status`:void 0,className:a(C.inlineAlert,C[e],C[t],o),...c,children:[n!==!1&&(0,E.jsx)(`span`,{className:C.icon,"aria-hidden":`true`,children:n??(0,E.jsx)(l,{name:D[e]})}),(0,E.jsx)(`span`,{className:C.message,children:s}),r&&(0,E.jsx)(`span`,{className:C.action,children:r})]})}var E,D;function O(){return(O=e((()=>{c(),i(),w(),E=n(),D={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`},T.__docgenInfo={description:`A one-line message in the flow of a form or a section: no box, no title,
no close button. For a message about a whole page or region, use Alert.`,methods:[],displayName:`InlineAlert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`ReactNode | false`,elements:[{name:`ReactNode`},{name:`literal`,value:`false`}]},description:"Replaces the variant's icon; `false` shows none."},action:{required:!1,tsType:{name:`ReactNode`},description:`A short link or button after the message, e.g. "Retry".`},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce it when it appears: `danger` and `warning` interrupt\n(`role="alert"`), the others wait (`role="status"`).',defaultValue:{value:`false`,computed:!1}}},composes:[`ComponentProps`]}})))()}var k=t({Default:()=>I,InAForm:()=>V,LongMessage:()=>B,Small:()=>R,Variants:()=>L,WithAction:()=>z,__namedExportsOrder:()=>H,default:()=>P}),A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{A=r(),o(),f(),u(),O(),j=n(),{expect:M,userEvent:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Notifications/InlineAlert`,component:T,parameters:{a11y:{test:`error`}},args:{children:`Changes are saved automatically.`},argTypes:{variant:{control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`]},icon:{control:!1},action:{control:!1}},decorators:[e=>(0,j.jsx)(`div`,{style:{maxInlineSize:`28rem`},children:e()})]},F={display:`grid`,gap:`var(--space-3)`},I={play:async({canvasElement:e})=>{await M(e.querySelector(`[role]`)).toBeNull()}},L={render:e=>(0,j.jsxs)(`div`,{style:F,children:[(0,j.jsx)(T,{...e,variant:`info`,children:`Your trial ends in 5 days.`}),(0,j.jsx)(T,{...e,variant:`success`,children:`Domain verified.`}),(0,j.jsx)(T,{...e,variant:`warning`,children:`This link expires in 24 hours.`}),(0,j.jsx)(T,{...e,variant:`danger`,children:`Couldn’t reach the server.`})]})},R={args:{size:`sm`,variant:`warning`,children:`Only the owner can change billing.`}},z={args:{variant:`danger`,children:`Couldn’t load comments.`,action:(0,j.jsx)(p,{href:`#retry`,variant:`accent`,children:`Retry`})}},B={args:{variant:`warning`,children:`Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.`}},V={render:function(){let[e,t]=(0,A.useState)(!1);return(0,j.jsxs)(`form`,{style:F,onSubmit:e=>{e.preventDefault(),t(!0)},children:[(0,j.jsx)(d,{label:`Workspace URL`,defaultValue:`atlas`,isFullWidth:!0}),(0,j.jsx)(`div`,{children:(0,j.jsx)(s,{type:`submit`,children:`Save`})}),e&&(0,j.jsx)(T,{variant:`danger`,isLive:!0,children:`That URL is taken. Try another.`})]})},play:async({canvas:e})=>{await N.click(e.getByRole(`button`,{name:`Save`})),await M(await e.findByRole(`alert`)).toHaveTextContent(`That URL is taken`)}},H=[`Default`,`Variants`,`Small`,`WithAction`,`LongMessage`,`InAForm`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default, like Alert: no live-region role.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <InlineAlert {...args} variant="info">Your trial ends in 5 days.</InlineAlert>
      <InlineAlert {...args} variant="success">Domain verified.</InlineAlert>
      <InlineAlert {...args} variant="warning">This link expires in 24 hours.</InlineAlert>
      <InlineAlert {...args} variant="danger">Couldn’t reach the server.</InlineAlert>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'warning',
    children: 'Only the owner can change billing.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Couldn’t load comments.',
    action: <Link href="#retry" variant="accent">Retry</Link>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Guests can see every file in this folder, including the ones added later. Move private files elsewhere before you share the link.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [error, setError] = useState(false);
    return <form style={stack} onSubmit={e => {
      e.preventDefault();
      setError(true);
    }}>
        <TextInput label="Workspace URL" defaultValue="atlas" isFullWidth />
        <div>
          <Button type="submit">Save</Button>
        </div>
        {error && <InlineAlert variant="danger" isLive>
            That URL is taken. Try another.
          </InlineAlert>}
      </form>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('That URL is taken');
  }
}`,...V.parameters?.docs?.source},description:{story:`Under a form, announced when a submit fails.`,...V.parameters?.docs?.description}}}})))()}export{R as a,U as c,B as i,V as n,L as o,k as r,z as s,I as t};