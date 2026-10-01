import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{n as r,y as i}from"./iframe-Crmh4rpo.js";import{n as a,t as o}from"./utils-CUvRSo4U.js";import{n as s,t as ee}from"./useIsoLayoutEffect-pZTQXUp4.js";import{c as te,d as c,f as ne,m as l,n as re,o as ie,p as ae,t as u}from"./useRenderElement-JLgEYJQi.js";import{i as d,n as oe,r as se,t as ce}from"./useButton-BKapWYk8.js";import{n as le,t as ue}from"./useControlled-gPwvbF4e.js";import{n as de,t as fe}from"./useBaseUiId-6AHk5GE-.js";import{T as pe,m as f,r as me,t as he}from"./createBaseUIEventDetails-CDFGPHSH.js";import{n as ge,r as _e,t as ve}from"./visuallyHidden-DpEW8Wz9.js";import{a as ye,b as be,c as xe,d as p,f as Se,g as Ce,h as we,i as Te,l as Ee,s as m,u as De,y as h}from"./useLabel-CiQliSMv.js";import{a as Oe,i as ke,n as Ae,r as je,t as g}from"./ChoiceField-C73iZWga.js";import{n as Me,t as Ne}from"./useValueChanged-BNsmavhn.js";function _(){let e=v.useContext(y);if(e===void 0)throw Error(ae(63));return e}var v,y;function b(){return(b=t((()=>{l(),v=e(i(),1),y=v.createContext(void 0)})))()}var x,S;function C(){return(C=t((()=>{x=`data-checked`,S=`data-unchecked`})))()}var w;function T(){return(T=t((()=>{be(),C(),w={...h,checked(e){return e?{[x]:``}:{[S]:``}}}})))()}var E,D,O;function k(){return(k=t((()=>{E=e(i(),1),ue(),c(),ee(),ve(),te(),u(),fe(),ce(),b(),T(),d(),we(),p(),Ee(),m(),ke(),Te(),me(),f(),Ne(),D=r(),O=E.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i,"aria-labelledby":a,form:o,id:ee,inputRef:te,name:c,nativeButton:l=!1,onCheckedChange:ae,readOnly:u=!1,required:d=!1,disabled:ce=!1,render:ue,uncheckedValue:fe,value:f,style:me,...ve}=e,{clearErrors:be}=De(),{state:p,setTouched:we,setDirty:Te,validityData:Ee,setFilled:m,setFocused:h,validationMode:ke,disabled:Ae,name:je,validation:g}=Ce(),{labelId:Ne}=xe(),_=Ae||ce,v=je??c,b=E.useRef(null),x=ne(b,te,g.inputRef),S=E.useRef(null),C=de(),T=ye({id:ee}),O=l?void 0:T,[k,A]=le({controlled:n,default:!!i,name:`Switch`,state:`checked`});Se(S,C,k,void 0,!_,c),s(()=>{m(k)},[k,m]),Me(k,()=>{be(v),Te(k!==Ee.initialValue),g.change(k)});let{getButtonProps:j,buttonRef:M}=oe({disabled:_,native:l}),N=Oe(a,Ne,b,!l,O),P={id:l?T:C,role:`switch`,"aria-checked":k,"aria-readonly":u||void 0,"aria-required":d||void 0,"aria-labelledby":N,onFocus(){_||h(!0)},onBlur(){let e=b.current;e&&!_&&(we(!0),h(!1),ke===`onBlur`&&g.commit(e.checked))},onClick(e){if(u||_)return;e.preventDefault();let t=b.current;t&&se(t,e)}},F={...g.getValidationProps(_),checked:k,disabled:_,form:o,id:O,name:v,required:d,style:v?_e:ge,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,ref:x,onChange(e){if(e.nativeEvent.defaultPrevented)return;if(u){e.preventDefault();return}let t=e.currentTarget.checked,n=he(pe,e.nativeEvent);ae?.(t,n),!n.isCanceled&&A(t)},onClick(e){e.stopPropagation()},onFocus(){S.current?.focus()},...f===void 0?ie:{value:f}},I=E.useMemo(()=>({...p,checked:k,disabled:_,readOnly:u,required:d}),[p,k,_,u,d]),L=re(`span`,e,{state:I,ref:[t,S,M],props:[P,ve,j,e=>g.getValidationProps(_,e)],stateAttributesMapping:w});return(0,D.jsxs)(y.Provider,{value:I,children:[L,!k&&v&&fe!==void 0&&(0,D.jsx)(`input`,{type:`hidden`,form:o,name:v,value:fe,disabled:_}),(0,D.jsx)(`input`,{...F,suppressHydrationWarning:!0})]})})})))()}var A,j;function M(){return(M=t((()=>{A=e(i(),1),b(),u(),T(),j=A.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=_();return re(`span`,e,{state:o,ref:t,stateAttributesMapping:w,props:a})})})))()}var N,P,F,I,L,Pe,Fe,Ie,R;function Le(){return(Le=t((()=>{N=`_sm_4ed6s_5`,P=`_md_4ed6s_9`,F=`_lg_4ed6s_13`,I=`_track_4ed6s_21`,L=`_accent_4ed6s_36`,Pe=`_secondary_4ed6s_43`,Fe=`_destructive_4ed6s_50`,Ie=`_thumb_4ed6s_71`,R={sm:N,md:P,lg:F,track:I,accent:L,secondary:Pe,destructive:Fe,thumb:Ie}})))()}function z({label:e,helperText:t,name:n,size:r=`md`,variant:i=`primary`,disabled:a,required:s,validationState:ee,className:te,onCheckedChange:c,...ne}){return(0,B.jsx)(g,{label:e,helperText:t,validationState:ee,required:s,disabled:a,name:n,className:o(R[r],te),children:(0,B.jsx)(O,{...ne,required:s,onCheckedChange:c&&(e=>c(e)),className:o(Ae.control,R.track,R[i]),children:(0,B.jsx)(j,{className:R.thumb})})})}var B;function Re(){return(Re=t((()=>{k(),M(),a(),je(),Le(),B=r(),z.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:`Controlled state.`},defaultChecked:{required:!1,tsType:{name:`boolean`},description:"Uncontrolled starting state (the spec's `defaultValue`)."},onCheckedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:"The spec's `onChange`. Base UI's event details are dropped."},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:`Submitted when on; "on" by default, like a checkbox.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`}]},description:`Colour of the on state.`,defaultValue:{value:`'primary'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var ze=n({Controlled:()=>Q,Default:()=>W,Disabled:()=>X,InAForm:()=>$,ReadOnly:()=>Z,RightToLeft:()=>Y,Sizes:()=>K,Validation:()=>J,Variants:()=>G,WithHelperText:()=>q,__namedExportsOrder:()=>Ue,default:()=>He}),Be,V,H,Ve,He,U,W,G,K,q,J,Y,X,Z,Q,$,Ue;function We(){return(We=t((()=>{Be=i(),Re(),V=r(),{expect:H,fn:Ve}=__STORYBOOK_MODULE_TEST__,He={title:`Components/Controls/Switch`,component:z,parameters:{a11y:{test:`error`}},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`]},validationState:{control:`inline-radio`,options:[`default`,`success`,`error`]}},args:{label:`Email notifications`,onCheckedChange:Ve()}},U={display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},W={play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`,{name:`Email notifications`});await H(r).toHaveAttribute(`aria-checked`,`false`),await t.click(r),await H(r).toHaveAttribute(`aria-checked`,`true`),await H(n.onCheckedChange).toHaveBeenLastCalledWith(!0),await t.click(e.getByText(`Email notifications`)),await H(r).toHaveAttribute(`aria-checked`,`false`),await t.keyboard(` `),await H(r).toHaveAttribute(`aria-checked`,`true`)}},G={render:e=>(0,V.jsx)(`div`,{style:U,children:[`primary`,`accent`,`secondary`,`destructive`].map(t=>(0,V.jsx)(z,{...e,variant:t,label:t,defaultChecked:!0},t))})},K={render:e=>(0,V.jsx)(`div`,{style:U,children:[`sm`,`md`,`lg`].map(t=>(0,V.jsx)(z,{...e,size:t,label:t,defaultChecked:!0},t))}),play:async({canvas:e})=>{let t=[`sm`,`md`,`lg`].map(t=>e.getByRole(`switch`,{name:t}).getBoundingClientRect().width);await H(t).toEqual([28,36,44])}},q={args:{helperText:`A summary once a day, never more.`},play:async({canvas:e})=>{await H(e.getByRole(`switch`)).toHaveAccessibleDescription(`A summary once a day, never more.`)}},J={render:e=>(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,label:`Accept the terms`,validationState:`error`,helperText:`Required to continue.`,required:!0}),(0,V.jsx)(z,{...e,label:`Backups`,validationState:`success`,helperText:`Backups are on.`,defaultChecked:!0})]}),play:async({canvas:e})=>{let t=e.getByRole(`switch`,{name:/Accept the terms/});await H(t).toHaveAttribute(`aria-invalid`,`true`),await H(t).toHaveAccessibleDescription(`Required to continue.`)}},Y={args:{defaultChecked:!0},render:e=>(0,V.jsxs)(`div`,{dir:`rtl`,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,V.jsx)(z,{...e,label:`Right to left`}),(0,V.jsx)(`div`,{dir:`ltr`,children:(0,V.jsx)(z,{...e,label:`Left to right`})})]}),play:async({canvas:e})=>{let t=t=>{let n=e.getByRole(`switch`,{name:t}),r=n.getBoundingClientRect(),i=n.firstElementChild.getBoundingClientRect();return{start:i.left-r.left,end:r.right-i.right}},n=t(`Right to left`);await H(n.start).toBeGreaterThanOrEqual(0),await H(n.start).toBeLessThan(n.end);let r=t(`Left to right`);await H(r.end).toBeGreaterThanOrEqual(0),await H(r.end).toBeLessThan(r.start)}},X={render:e=>(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,label:`Off, disabled`,disabled:!0}),(0,V.jsx)(z,{...e,label:`On, disabled`,disabled:!0,defaultChecked:!0})]}),play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`switch`,{name:`Off, disabled`})),await H(n.onCheckedChange).not.toHaveBeenCalled()}},Z={args:{readOnly:!0,defaultChecked:!0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`switch`);await t.click(r),await H(r).toHaveAttribute(`aria-checked`,`true`),await H(n.onCheckedChange).not.toHaveBeenCalled()}},Q={render:function(e){let[t,n]=(0,Be.useState)(!0);return(0,V.jsxs)(`div`,{style:U,children:[(0,V.jsx)(z,{...e,checked:t,onCheckedChange:n}),(0,V.jsx)(`span`,{children:t?`Notifications on`:`Notifications off`})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`switch`)),await H(e.getByText(`Notifications off`)).toBeVisible()}},$={render:e=>(0,V.jsx)(`form`,{"aria-label":`Settings`,children:(0,V.jsx)(z,{...e,name:`notify`,defaultChecked:!0})}),play:async({canvasElement:e})=>{let t=new FormData(e.querySelector(`form`));await H(t.get(`notify`)).toBe(`on`)}},Ue=[`Default`,`Variants`,`Sizes`,`WithHelperText`,`Validation`,`RightToLeft`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <Switch key={variant} {...args} variant={variant} label={variant} defaultChecked />)}
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
}`,...$.parameters?.docs?.source},description:{story:`Submits "on" under its name when on, like a native checkbox.`,...$.parameters?.docs?.description}}}})))()}export{G as a,J as i,K as n,We as o,ze as r,W as t};