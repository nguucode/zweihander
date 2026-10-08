import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./Button-BdtJKtga.js";import{n as c,t as l}from"./icon-Dc4hTclj.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u=`_alert_o22dt_1`,d=`_info_o22dt_17`,f=`_success_o22dt_23`,p=`_warning_o22dt_29`,m=`_danger_o22dt_35`,h=`_subtle_o22dt_45`,g=`_outlined_o22dt_49`,_=`_icon_o22dt_54`,v=`_title_o22dt_55`,y=`_solid_o22dt_60`,b=`_body_o22dt_73`,x=`_action_o22dt_84`,S=`_close_o22dt_91`,C={alert:u,info:d,success:f,warning:p,danger:m,subtle:h,outlined:g,icon:_,title:v,solid:y,body:b,action:x,close:S}})))()}function T({variant:e=`info`,appearance:t=`subtle`,title:n,icon:r,action:i,onClose:o,closeLabel:s=`Dismiss`,isLive:c=!1,className:u,children:d,...f}){return(0,E.jsxs)(`div`,{role:c?e===`danger`||e===`warning`?`alert`:`status`:void 0,className:a(C.alert,C[e],C[t],u),...f,children:[r!==!1&&(0,E.jsx)(`span`,{className:C.icon,"aria-hidden":`true`,children:r??(0,E.jsx)(l,{name:D[e]})}),(0,E.jsxs)(`div`,{className:C.body,children:[n&&(0,E.jsx)(`div`,{className:C.title,children:n}),d&&(0,E.jsx)(`div`,{className:C.description,children:d}),i&&(0,E.jsx)(`div`,{className:C.action,children:i})]}),o&&(0,E.jsx)(`button`,{type:`button`,"aria-label":s,className:C.close,onClick:o,children:(0,E.jsx)(l,{name:`close`})})]})}var E,D;function O(){return(O=e((()=>{c(),i(),w(),E=n(),D={info:`info-filled`,success:`success-filled`,warning:`warning-filled`,danger:`danger-filled`},T.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'subtle' | 'outlined' | 'solid'`,elements:[{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'solid'`}]},description:``,defaultValue:{value:`'subtle'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`union`,raw:`ReactNode | false`,elements:[{name:`ReactNode`},{name:`literal`,value:`false`}]},description:"Replaces the variant's icon; `false` shows none."},action:{required:!1,tsType:{name:`ReactNode`},description:`Buttons or links under the message, e.g. "Retry".`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`event`}],return:{name:`void`}}},description:`Shows a close button that calls this. The alert does not hide itself: remove it when this fires.`},closeLabel:{required:!1,tsType:{name:`string`},description:`Accessible name of the close button.`,defaultValue:{value:`'Dismiss'`,computed:!1}},isLive:{required:!1,tsType:{name:`boolean`},description:'Announce the alert when it appears. `danger` and `warning` interrupt\n(`role="alert"`), the others wait their turn (`role="status"`). Leave it\noff for an alert that is on the page from the start.',defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})))()}var k=t({Appearances:()=>B,Default:()=>R,Dismissible:()=>H,Live:()=>U,Variants:()=>z,WithAction:()=>V,WithoutIcon:()=>W,__namedExportsOrder:()=>G,default:()=>F}),A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{A=r(),o(),O(),j=n(),{expect:M,fn:N,userEvent:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Notifications/Alert`,component:T,parameters:{a11y:{test:`error`}},args:{title:`Payment method expiring`,children:`The card ending in 4242 expires at the end of this month. Update it to avoid an interruption.`},argTypes:{variant:{control:`inline-radio`,options:[`info`,`success`,`warning`,`danger`]},appearance:{control:`inline-radio`,options:[`subtle`,`outlined`,`solid`]},icon:{control:!1},action:{control:!1}},decorators:[e=>(0,j.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},I={display:`grid`,gap:`var(--space-3)`},L=[`info`,`success`,`warning`,`danger`],R={play:async({canvasElement:e})=>{await M(e.querySelector(`[role]`)).toBeNull()}},z={render:e=>(0,j.jsx)(`div`,{style:I,children:L.map(t=>(0,j.jsx)(T,{...e,variant:t,title:`${t[0].toUpperCase()}${t.slice(1)}`},t))})},B={render:e=>(0,j.jsx)(`div`,{style:I,children:[`subtle`,`outlined`,`solid`].map(t=>L.map(n=>(0,j.jsx)(T,{...e,appearance:t,variant:n,title:`${t} ${n}`,children:void 0},t+n)))})},V={args:{variant:`danger`,title:`Upload failed`,children:`The connection dropped at 64%. Nothing was saved.`,action:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s,{size:`sm`,variant:`destructive`,children:`Retry`}),(0,j.jsx)(s,{size:`sm`,variant:`accent`,appearance:`ghost`,children:`View details`})]})}},H={args:{onClose:N(),variant:`success`,title:`Profile saved`,children:void 0},render:function(e){let[t,n]=(0,A.useState)(!0);return t?(0,j.jsx)(T,{...e,onClose:t=>{e.onClose?.(t),n(!1)}}):(0,j.jsx)(`p`,{children:`Dismissed.`})},play:async({args:e,canvas:t})=>{await P.click(t.getByRole(`button`,{name:`Dismiss`})),await M(e.onClose).toHaveBeenCalledOnce(),await M(t.getByText(`Dismissed.`)).toBeVisible()}},U={render:function(e){let[t,n]=(0,A.useState)(null);return(0,j.jsxs)(`div`,{style:I,children:[(0,j.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,j.jsx)(s,{size:`sm`,appearance:`outlined`,onClick:()=>n(`danger`),children:`Fail`}),(0,j.jsx)(s,{size:`sm`,appearance:`outlined`,onClick:()=>n(`success`),children:`Succeed`})]}),t===`danger`&&(0,j.jsx)(T,{...e,isLive:!0,variant:`danger`,title:`Could not save`,children:`Try again in a minute.`}),t===`success`&&(0,j.jsx)(T,{...e,isLive:!0,variant:`success`,title:`Saved`,children:void 0})]})},play:async({canvas:e})=>{await P.click(e.getByRole(`button`,{name:`Fail`})),await M(e.getByRole(`alert`)).toHaveTextContent(`Could not save`),await P.click(e.getByRole(`button`,{name:`Succeed`})),await M(e.getByRole(`status`)).toHaveTextContent(`Saved`)}},W={args:{icon:!1,title:void 0,children:`Maintenance is scheduled for Sunday, 02:00–03:00 UTC.`},play:async({canvasElement:e})=>{await M(e.querySelector(`svg`)).toBeNull()}},G=[`Default`,`Variants`,`Appearances`,`WithAction`,`Dismissible`,`Live`,`WithoutIcon`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Static by default: no live-region role, so a screen reader does not
    // interrupt the page load to read it.
    await expect(canvasElement.querySelector('[role]')).toBeNull();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {variants.map(variant => <Alert key={variant} {...args} variant={variant} title={\`\${variant[0].toUpperCase()}\${variant.slice(1)}\`} />)}
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['subtle', 'outlined', 'solid'] as const).map(appearance => variants.map(variant => <Alert key={appearance + variant} {...args} appearance={appearance} variant={variant} title={\`\${appearance} \${variant}\`}>
            {undefined}
          </Alert>))}
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Upload failed',
    children: 'The connection dropped at 64%. Nothing was saved.',
    action: <>
        <Button size="sm" variant="destructive">
          Retry
        </Button>
        <Button size="sm" variant="accent" appearance="ghost">
          View details
        </Button>
      </>
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: fn(),
    variant: 'success',
    title: 'Profile saved',
    children: undefined
  },
  render: function Render(args) {
    const [open, setOpen] = useState(true);
    return open ? <Alert {...args} onClose={e => {
      args.onClose?.(e);
      setOpen(false);
    }} /> : <p>Dismissed.</p>;
  },
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dismiss'
    }));
    await expect(args.onClose).toHaveBeenCalledOnce();
    await expect(canvas.getByText('Dismissed.')).toBeVisible();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shown, setShown] = useState<'danger' | 'success' | null>(null);
    return <div style={stack}>
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <Button size="sm" appearance="outlined" onClick={() => setShown('danger')}>
            Fail
          </Button>
          <Button size="sm" appearance="outlined" onClick={() => setShown('success')}>
            Succeed
          </Button>
        </div>
        {shown === 'danger' && <Alert {...args} isLive variant="danger" title="Could not save" children="Try again in a minute." />}
        {shown === 'success' && <Alert {...args} isLive variant="success" title="Saved" children={undefined} />}
      </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Fail'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('Could not save');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Succeed'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Saved');
  }
}`,...U.parameters?.docs?.source},description:{story:`Announced when it appears: danger and warning interrupt, info and success wait.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    icon: false,
    title: undefined,
    children: 'Maintenance is scheduled for Sunday, 02:00–03:00 UTC.'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('svg')).toBeNull();
  }
}`,...W.parameters?.docs?.source}}}})))()}export{U as a,W as c,H as i,K as l,B as n,z as o,R as r,V as s,k as t};