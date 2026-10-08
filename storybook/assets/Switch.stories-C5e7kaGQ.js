import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-lUQ3_SCR.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{n as s,t as c}from"./useIsoLayoutEffect-DlZGxu_J.js";import{c as l,d as u,f as ee,m as d,n as te,o as ne,p as re,t as f}from"./useRenderElement-BMuTcvdq.js";import{i as p,n as ie,r as ae,t as oe}from"./useButton-DvXmwjM6.js";import{n as se,t as ce}from"./useControlled-_gtp84q_.js";import{n as le,t as m}from"./useBaseUiId-DYEHfiI7.js";import{T as ue,m as de,r as fe,t as pe}from"./createBaseUIEventDetails-BcktkkBO.js";import{n as me,r as he,t as ge}from"./visuallyHidden-DpEW8Wz9.js";import{a as _e,b as ve,c as ye,d as h,f as be,g as xe,h as Se,i as Ce,l as we,s as g,u as Te,y as _}from"./useLabel-CUqoWyxw.js";import{a as Ee,i as De,n as Oe,r as ke,t as v}from"./ChoiceField-Wf81LUcR.js";import{n as Ae,t as je}from"./useValueChanged-COiRwBi8.js";function y(){let e=b.useContext(x);if(e===void 0)throw Error(re(63));return e}var b,x;function S(){return(S=t((()=>{d(),b=e(i(),1),x=b.createContext(void 0)})))()}var C,w;function T(){return(T=t((()=>{C=`data-checked`,w=`data-unchecked`})))()}var E;function D(){return(D=t((()=>{ve(),T(),E={..._,checked(e){return e?{[C]:``}:{[w]:``}}}})))()}var O,k,A;function j(){return(j=t((()=>{O=e(i(),1),ce(),u(),c(),ge(),l(),f(),m(),oe(),S(),D(),p(),Se(),h(),we(),g(),De(),Ce(),fe(),de(),je(),k=r(),A=O.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i,"aria-labelledby":a,form:o,id:c,inputRef:l,name:u,nativeButton:d=!1,onCheckedChange:re,readOnly:f=!1,required:p=!1,disabled:oe=!1,render:ce,uncheckedValue:m,value:de,style:fe,...ge}=e,{clearErrors:ve}=Te(),{state:h,setTouched:Se,setDirty:Ce,validityData:we,setFilled:g,setFocused:_,validationMode:De,disabled:Oe,name:ke,validation:v}=xe(),{labelId:je}=ye(),y=Oe||oe,b=ke??u,S=O.useRef(null),C=ee(S,l,v.inputRef),w=O.useRef(null),T=le(),D=_e({id:c}),A=d?void 0:D,[j,M]=se({controlled:n,default:!!i,name:`Switch`,state:`checked`});be(w,T,j,void 0,!y,u),s(()=>{g(j)},[j,g]),Ae(j,()=>{ve(b),Ce(j!==we.initialValue),v.change(j)});let{getButtonProps:N,buttonRef:P}=ie({disabled:y,native:d}),F=Ee(a,je,S,!d,A),I={id:d?D:T,role:`switch`,"aria-checked":j,"aria-readonly":f||void 0,"aria-required":p||void 0,"aria-labelledby":F,onFocus(){y||_(!0)},onBlur(){let e=S.current;e&&!y&&(Se(!0),_(!1),De===`onBlur`&&v.commit(e.checked))},onClick(e){if(f||y)return;e.preventDefault();let t=S.current;t&&ae(t,e)}},Me={...v.getValidationProps(y),checked:j,disabled:y,form:o,id:A,name:b,required:p,style:b?he:me,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,ref:C,onChange(e){if(e.nativeEvent.defaultPrevented)return;if(f){e.preventDefault();return}let t=e.currentTarget.checked,n=pe(ue,e.nativeEvent);re?.(t,n),!n.isCanceled&&M(t)},onClick(e){e.stopPropagation()},onFocus(){w.current?.focus()},...de===void 0?ne:{value:de}},L=O.useMemo(()=>({...h,checked:j,disabled:y,readOnly:f,required:p}),[h,j,y,f,p]),Ne=te(`span`,e,{state:L,ref:[t,w,P],props:[I,ge,N,e=>v.getValidationProps(y,e)],stateAttributesMapping:E});return(0,k.jsxs)(x.Provider,{value:L,children:[Ne,!j&&b&&m!==void 0&&(0,k.jsx)(`input`,{type:`hidden`,form:o,name:b,value:m,disabled:y}),(0,k.jsx)(`input`,{...Me,suppressHydrationWarning:!0})]})})})))()}var M,N;function P(){return(P=t((()=>{M=e(i(),1),S(),f(),D(),N=M.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=y();return te(`span`,e,{state:o,ref:t,stateAttributesMapping:E,props:a})})})))()}var F,I,Me,L,Ne,Pe,Fe,R;function Ie(){return(Ie=t((()=>{F=`_sm_bz93g_5`,I=`_md_bz93g_9`,Me=`_lg_bz93g_13`,L=`_track_bz93g_21`,Ne=`_accent_bz93g_36`,Pe=`_destructive_bz93g_40`,Fe=`_thumb_bz93g_61`,R={sm:F,md:I,lg:Me,track:L,accent:Ne,destructive:Pe,thumb:Fe}})))()}function z({label:e,helperText:t,name:n,size:r=`md`,variant:i=`primary`,disabled:a,required:s,validationState:c,className:l,onCheckedChange:u,...ee}){return(0,B.jsx)(v,{label:e,helperText:t,validationState:c,required:s,disabled:a,name:n,className:o(R[r],l),children:(0,B.jsx)(A,{...ee,required:s,onCheckedChange:u&&(e=>u(e)),className:o(Oe.control,R.track,R[i]),children:(0,B.jsx)(N,{className:R.thumb})})})}var B;function Le(){return(Le=t((()=>{j(),P(),a(),ke(),Ie(),B=r(),z.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:`Controlled state.`},defaultChecked:{required:!1,tsType:{name:`boolean`},description:"Uncontrolled starting state (the spec's `defaultValue`)."},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:"The spec's `onChange`. Base UI's event details are dropped."},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:`Submitted when on; "on" by default, like a checkbox.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'destructive'`}]},description:`Colour of the on state.`,defaultValue:{value:`'primary'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var Re=n({Controlled:()=>Q,Default:()=>W,Disabled:()=>X,InAForm:()=>$,ReadOnly:()=>Z,RightToLeft:()=>Y,Sizes:()=>K,Validation:()=>J,Variants:()=>G,WithHelperText:()=>q,__namedExportsOrder:()=>He,default:()=>Ve}),ze,V,H,Be,Ve,U,W,G,K,q,J,Y,X,Z,Q,$,He;function Ue(){return(Ue=t((()=>{ze=i(),Le(),V=r(),{expect:H,fn:Be}=__STORYBOOK_MODULE_TEST__,Ve={title:`Components/Controls/Switch`,component:z,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`destructive`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Email notifications`,onCheckedChange:Be()}},U={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},W={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`,{name:`Email notifications`});await H(r).toHaveAttribute(`aria-checked`,`false`),await t.click(r),await H(r).toHaveAttribute(`aria-checked`,`true`),await H(n.onCheckedChange).toHaveBeenLastCalledWith(!0),await t.click(e.getByText(`Email notifications`)),await H(r).toHaveAttribute(`aria-checked`,`false`),await t.keyboard(` `),await H(r).toHaveAttribute(`aria-checked`,`true`)}},G={render:e=>(0,V.jsx)(`div`,{style:U,children:[`primary`,`accent`,`destructive`].map(t=>(0,V.jsx)(z,{...e,variant:t,label:t,defaultChecked:!0},t))})},K={render:e=>(0,V.jsx)(`div`,{style:U,children:[`sm`,`md`,`lg`].map(t=>(0,V.jsx)(z,{...e,size:t,label:t,defaultChecked:!0},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>e.getByRole(`switch`,{name:t}).getBoundingClientRect().width);await H(t).toEqual([28,36,44])}},q={args:{helperText:`A summary once a day, never more.`},play:async({canvas:e})=>{await H(e.getByRole(`switch`)).toHaveAccessibleDescription(`A summary once a day, never more.`)}},J={render:e=>(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,label:`Accept the terms`,validationState:`error`,helperText:`Required to continue.`,required:!0}),(0,V.jsx)(z,{...e,label:`Backups`,validationState:`success`,helperText:`Backups are on.`,defaultChecked:!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`switch`,{name:/Accept the terms/});await H(t).toHaveAttribute(`aria-invalid`,`true`),await H(t).toHaveAccessibleDescription(`Required to continue.`)}},Y={args:{defaultChecked:!0},render:e=>(0,V.jsxs)(`div`,{dir:`rtl`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,V.jsx)(z,{...e,label:`Right to left`}),(0,V.jsx)(`div`,{dir:`ltr`,children:(0,V.jsx)(z,{...e,label:`Left to right`})})]}),play:async({canvas:e})=>{let t=t=>{let n=e.getByRole(`switch`,{name:t}),r=n.getBoundingClientRect(),i=n.firstElementChild.getBoundingClientRect();return{start:i.left-r.left,end:r.right-i.right}},n=t(`Right to left`);await H(n.start).toBeGreaterThanOrEqual(0),await H(n.start).toBeLessThan(n.end);let r=t(`Left to right`);await H(r.end).toBeGreaterThanOrEqual(0),await H(r.end).toBeLessThan(r.start)}},X={render:e=>(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,label:`Off, disabled`,disabled:!0}),(0,V.jsx)(z,{...e,label:`On, disabled`,disabled:!0,defaultChecked:!0})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`switch`,{name:`Off, disabled`})),await H(n.onCheckedChange).not.toHaveBeenCalled()}},Z={args:{readOnly:!0,defaultChecked:!0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`);await t.click(r),await H(r).toHaveAttribute(`aria-checked`,`true`),await H(n.onCheckedChange).not.toHaveBeenCalled()}},Q={render:function(e){let[t,n]=(0,ze.useState)(!0);return(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,checked:t,onCheckedChange:n}),(0,V.jsx)(`span`,{children:t?`Notifications on`:`Notifications off`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`switch`)),await H(e.getByText(`Notifications off`)).toBeVisible()}},$={render:e=>(0,V.jsx)(`form`,{"aria-label":`Settings`,children:(0,V.jsx)(z,{...e,name:`notify`,defaultChecked:!0})}),play:async({canvasElement:e})=>{let t=new FormData(e.querySelector(`form`));await H(t.get(`notify`)).toBe(`on`)}},He=[`Default`,`Variants`,`Sizes`,`WithHelperText`,`Validation`,`RightToLeft`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const control = canvas.getByRole('switch', {
      name: 'Email notifications'
    });
    await expect(control).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(control);
    await expect(control).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    // Clicking the label toggles it too.
    await userEvent.click(canvas.getByText('Email notifications'));
    await expect(control).toHaveAttribute('aria-checked', 'false');
    // Space toggles from the keyboard.
    await userEvent.keyboard(' ');
    await expect(control).toHaveAttribute('aria-checked', 'true');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'destructive'] as const).map(variant => <Switch key={variant} {...args} variant={variant} label={variant} defaultChecked />)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <Switch key={size} {...args} size={size} label={size} defaultChecked />)}
    </div>,
  play: async ({
    canvas
  }) => {
    const widths = ['sm', 'md', 'lg'].map(n => canvas.getByRole('switch', {
      name: n
    }).getBoundingClientRect().width);
    await expect(widths).toEqual([28, 36, 44]);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'A summary once a day, never more.'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('switch')).toHaveAccessibleDescription('A summary once a day, never more.');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Switch {...args} label="Accept the terms" validationState="error" helperText="Required to continue." required />
      <Switch {...args} label="Backups" validationState="success" helperText="Backups are on." defaultChecked />
    </div>,
  play: async ({
    canvas
  }) => {
    const terms = canvas.getByRole('switch', {
      name: /Accept the terms/
    });
    await expect(terms).toHaveAttribute('aria-invalid', 'true');
    await expect(terms).toHaveAccessibleDescription('Required to continue.');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  render: args => <div dir="rtl" style={{
    display: 'grid',
    gap: 'var(--space-3)',
    justifyItems: 'start'
  }}>
      <Switch {...args} label="Right to left" />
      {/* A left-to-right island inside a right-to-left page. */}
      <div dir="ltr">
        <Switch {...args} label="Left to right" />
      </div>
    </div>,
  play: async ({
    canvas
  }) => {
    const gaps = (name: string) => {
      const sw = canvas.getByRole('switch', {
        name
      });
      const track = sw.getBoundingClientRect();
      const thumb = sw.firstElementChild!.getBoundingClientRect();
      return {
        start: thumb.left - track.left,
        end: track.right - thumb.right
      };
    };
    // On is the end side: the left in RTL, the right in LTR. The thumb stays inside.
    const rtl = gaps('Right to left');
    await expect(rtl.start).toBeGreaterThanOrEqual(0);
    await expect(rtl.start).toBeLessThan(rtl.end);
    const ltr = gaps('Left to right');
    await expect(ltr.end).toBeGreaterThanOrEqual(0);
    await expect(ltr.end).toBeLessThan(ltr.start);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      <Switch {...args} label="Off, disabled" disabled />
      <Switch {...args} label="On, disabled" disabled defaultChecked />
    </div>,
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('switch', {
      name: 'Off, disabled'
    }));
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultChecked: true
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const control = canvas.getByRole('switch');
    await userEvent.click(control);
    await expect(control).toHaveAttribute('aria-checked', 'true');
    await expect(args.onCheckedChange).not.toHaveBeenCalled();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [on, setOn] = useState(true);
    return <div style={stack}>
        <Switch {...args} checked={on} onCheckedChange={setOn} />
        <span>{on ? 'Notifications on' : 'Notifications off'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('switch'));
    await expect(canvas.getByText('Notifications off')).toBeVisible();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Settings">
      <Switch {...args} name="notify" defaultChecked />
    </form>,
  play: async ({
    canvasElement
  }) => {
    const data = new FormData(canvasElement.querySelector('form')!);
    await expect(data.get('notify')).toBe('on');
  }
}`,...$.parameters?.docs?.source},description:{story:`Submits "on" under its name when on, like a native checkbox.`,...$.parameters?.docs?.description}}}})))()}export{G as a,J as i,K as n,Ue as o,Re as r,W as t};