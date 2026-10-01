import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./icon-D2EAxy9f.js";import{n as o,t as s}from"./utils-CUvRSo4U.js";import{n as c,t as l}from"./FieldControl-BHF3-IfG.js";import{a as ee,d as u,f as d,l as te,m as f,n as p,o as m,p as h,t as g,u as _}from"./PopoverPopup-CRCCRpL6.js";import{a as v,i as y,o as b,r as ne,t as re}from"./InputField-C3EkeSPi.js";import{i as x,n as S,r as C,t as ie}from"./Calendar-C7eL8sOb.js";var w,T,E;function D(){return(D=e((()=>{w=`_positioner_1det2_2`,T=`_popup_1det2_6`,E={positioner:w,popup:T}})))()}function ae(e){return(0,k.useMemo)(()=>{let t=new Intl.DateTimeFormat(e,{day:`2-digit`,month:`2-digit`,year:`numeric`,calendar:`gregory`,numberingSystem:`latn`}),n=t.formatToParts(new Date(2026,10,22)),r=n.filter(e=>e.type===`day`||e.type===`month`||e.type===`year`).map(e=>e.type);return{format:e=>t.format(e),parse:e=>{let t=e.match(/\d+/g);if(!e.trim())return null;if(!t||t.length!==3)return;let n={};r.forEach((e,r)=>n[e]=Number(t[r]));let i=n.year<100?2e3+n.year:n.year,a=new Date(i,n.month-1,n.day);return a.getFullYear()===i&&a.getMonth()===n.month-1&&a.getDate()===n.day?a:void 0},pattern:n.map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}},[e])}function O({value:e,defaultValue:t=null,onValueChange:n,label:r,helperText:i,validationState:o,size:c=`md`,appearance:d=`outlined`,min:f,max:p,isDateDisabled:m,locale:_,weekStartsOn:v,placeholder:S,isFullWidth:w,name:T,disabled:D,required:O,id:M,className:N,"aria-label":P}){let{format:F,parse:I,pattern:L}=ae(_),[R,z]=(0,k.useState)(t),B=e===void 0?R:e,[V,H]=(0,k.useState)(()=>B?F(B):``),[U,W]=(0,k.useState)(!1),[G,K]=(0,k.useState)(!1),[q,J]=(0,k.useState)(B);!C(q,B)&&(q!==null||B!==null)&&(J(B),H(B?F(B):``),W(!1));let Y=e=>!(f&&e<x(f))&&!(p&&e>x(p))&&!(m?.(e)??!1),X=e=>{z(e),J(e),H(e?F(e):``),W(!1),n?.(e)},Z=()=>{let e=I(V);e===void 0||e&&!Y(e)?W(!0):(e===null?B!==null:!C(e,B))?X(e):W(!1)};return(0,A.jsx)(re,{label:r,helperText:U?`Enter a date as ${L}${f||p?`, within the allowed range`:``}.`:i,validationState:U?`error`:o,required:O,disabled:D,isFullWidth:w,className:N,children:(0,A.jsxs)(`span`,{className:ne(c,d),onMouseDown:y,children:[(0,A.jsx)(l,{id:M,value:V,placeholder:S??L,inputMode:`numeric`,autoComplete:`off`,"aria-label":P,required:O,className:b.control,onChange:e=>{H(e.target.value),W(!1)},onBlur:Z,onKeyDown:e=>{e.key===`Enter`&&Z(),e.key===`ArrowDown`&&e.altKey&&K(!0)}}),T&&(0,A.jsx)(`input`,{type:`hidden`,name:T,value:B?j(B):``}),(0,A.jsxs)(h,{open:G,onOpenChange:K,children:[(0,A.jsx)(u,{className:b.iconButton,disabled:D,"aria-label":B?`Choose date, ${F(B)} selected`:`Choose date`,children:(0,A.jsx)(a,{name:`calendar`})}),(0,A.jsx)(te,{children:(0,A.jsx)(ee,{className:E.positioner,side:`bottom`,align:`end`,sideOffset:6,children:(0,A.jsx)(g,{"aria-label":`Choose date`,className:s(E.popup),children:(0,A.jsx)(ie,{value:B,onValueChange:e=>{X(e),K(!1)},min:f,max:p,isDateDisabled:m,locale:_,weekStartsOn:v,autoFocus:!0})})})})]})]})})}var k,A,j;function M(){return(M=e((()=>{k=r(),c(),f(),d(),_(),m(),p(),i(),o(),S(),v(),D(),A=n(),j=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,O.__docgenInfo={description:``,methods:[],displayName:`DatePicker`,props:{value:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``},defaultValue:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},name:`date`}],return:{name:`void`}}},description:"`null` when the field is cleared. Not called while the typed text is not a date yet."},label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Under the field. Replaced by a format hint while the typed text is not a valid date.`},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'underlined' | 'unstyled'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underlined'`},{name:`literal`,value:`'unstyled'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},min:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``},max:{required:!1,tsType:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},description:``},isDateDisabled:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}},description:``},locale:{required:!1,tsType:{name:`string`},description:`BCP 47 tag; decides the typed order (day/month/year) and the calendar's.`},weekStartsOn:{required:!1,tsType:{name:`number`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:`Defaults to the locale's pattern, e.g. "dd/mm/yyyy".`},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:"Submitted as `yyyy-mm-dd`, whatever the display format."},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``}}}})))()}var N=t({Default:()=>U,Disabled:()=>Z,InAForm:()=>X,OtherCalendars:()=>G,Range:()=>Y,Required:()=>K,Typing:()=>W,UnitedStates:()=>q,Vietnamese:()=>J,__namedExportsOrder:()=>Q,default:()=>V}),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{M(),P=n(),{expect:F,fn:I,userEvent:L,waitFor:R,within:z}=__STORYBOOK_MODULE_TEST__,B=(e,t,n)=>new Intl.DateTimeFormat(`en-GB`,{dateStyle:`full`,calendar:`gregory`}).format(new Date(e,t-1,n)),V={title:`Components/Inputs/DatePicker`,component:O,parameters:{a11y:{test:`error`}},args:{label:`Start date`,locale:`en-GB`,weekStartsOn:1,defaultValue:new Date(2026,8,18),onValueChange:I()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`outlined`,`filled`,`underlined`,`unstyled`]},value:{control:!1},defaultValue:{control:!1},min:{control:!1},max:{control:!1}},decorators:[e=>(0,P.jsx)(`div`,{style:{minBlockSize:`26rem`},children:e()})]},H=()=>z(document.body),U={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await F(n).toHaveValue(`18/09/2026`),await F(n).toHaveAttribute(`placeholder`,`dd/mm/yyyy`),await L.click(t.getByRole(`button`,{name:`Choose date, 18/09/2026 selected`}));let r=await H().findByRole(`dialog`,{name:`Choose date`});await R(()=>F(document.activeElement).toHaveAccessibleName(B(2026,9,18))),await L.click(z(r).getByRole(`button`,{name:B(2026,9,24)})),await F(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,8,24)),await R(()=>F(H().queryByRole(`dialog`)).toBeNull()),await F(n).toHaveValue(`24/09/2026`);let i=t.getByRole(`button`,{name:`Choose date, 24/09/2026 selected`});await R(()=>F(i).toHaveFocus()),await L.click(i),await H().findByRole(`dialog`),await L.keyboard(`{ArrowRight}{Escape}`),await R(()=>F(H().queryByRole(`dialog`)).toBeNull()),await F(n).toHaveValue(`24/09/2026`)}},W={args:{defaultValue:null},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Start date`});await L.type(n,`3.10.26`),await L.tab(),await F(e.onValueChange).toHaveBeenLastCalledWith(new Date(2026,9,3)),await F(n).toHaveValue(`03/10/2026`),e.onValueChange.mockClear(),await L.clear(n),await L.type(n,`31/02/2026{Enter}`),await F(n).toHaveAttribute(`aria-invalid`,`true`),await F(t.getByText(`Enter a date as dd/mm/yyyy.`)).toBeVisible(),await F(e.onValueChange).not.toHaveBeenCalled(),await L.clear(n),await L.tab(),await F(e.onValueChange).toHaveBeenLastCalledWith(null),e.onValueChange.mockClear(),await L.click(n),await L.tab(),await F(e.onValueChange).not.toHaveBeenCalled()}},G={args:{locale:`th-TH`,defaultValue:new Date(2026,8,27)},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);await F(n).toHaveValue(`27/09/2026`),await L.click(n),await L.tab(),await F(e.onValueChange).not.toHaveBeenCalled(),await F(n).not.toHaveAttribute(`aria-invalid`,`true`)}},K={args:{required:!0,defaultValue:null},play:async({canvas:e})=>{await F(e.getByRole(`textbox`,{name:/Start date/})).toBeRequired()}},q={args:{locale:`en-US`,weekStartsOn:0,defaultValue:new Date(2026,8,18)},play:async({canvas:e})=>{await F(e.getByRole(`textbox`)).toHaveValue(`09/18/2026`),await F(e.getByRole(`textbox`)).toHaveAttribute(`placeholder`,`mm/dd/yyyy`)}},J={args:{label:`Ngày bắt đầu`,locale:`vi-VN`,weekStartsOn:void 0}},Y={args:{min:new Date(2026,8,1),max:new Date(2026,8,30),helperText:`Any day in September.`},play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`);e.onValueChange.mockClear(),await L.clear(n),await L.type(n,`02/10/2026{Enter}`),await F(n).toHaveAttribute(`aria-invalid`,`true`),await F(e.onValueChange).not.toHaveBeenCalled()}},X={args:{name:`start`},play:async({canvasElement:e})=>{await F(e.querySelector(`input[name="start"]`).value).toBe(`2026-09-18`)}},Z={args:{disabled:!0}},Q=[`Default`,`Typing`,`OtherCalendars`,`Required`,`UnitedStates`,`Vietnamese`,`Range`,`InAForm`,`Disabled`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Start date'
    });
    await expect(input).toHaveValue('18/09/2026');
    await expect(input).toHaveAttribute('placeholder', 'dd/mm/yyyy');
    // Pick from the calendar: it opens on the selected day, with focus there.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose date, 18/09/2026 selected'
    }));
    const dialog = await body().findByRole('dialog', {
      name: 'Choose date'
    });
    await waitFor(() => expect(document.activeElement).toHaveAccessibleName(day(2026, 9, 18)));
    await userEvent.click(within(dialog).getByRole('button', {
      name: day(2026, 9, 24)
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 8, 24));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveValue('24/09/2026');
    // Focus returns to the button; Escape closes without a change.
    const button = canvas.getByRole('button', {
      name: 'Choose date, 24/09/2026 selected'
    });
    await waitFor(() => expect(button).toHaveFocus());
    await userEvent.click(button);
    await body().findByRole('dialog');
    await userEvent.keyboard('{ArrowRight}{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(input).toHaveValue('24/09/2026');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: null
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Start date'
    });
    await userEvent.type(input, '3.10.26');
    await userEvent.tab();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(new Date(2026, 9, 3));
    // Reformatted on commit.
    await expect(input).toHaveValue('03/10/2026')
    // Not a date: kept, flagged, not reported.
;
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.clear(input);
    await userEvent.type(input, '31/02/2026{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Enter a date as dd/mm/yyyy.')).toBeVisible();
    await expect(args.onValueChange).not.toHaveBeenCalled();
    // Cleared: null.
    await userEvent.clear(input);
    await userEvent.tab();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(null)
    // Passing through an empty field again reports nothing new.
;
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.click(input);
    await userEvent.tab();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...W.parameters?.docs?.source},description:{story:`Typing works in the locale's order, with any separator.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'th-TH',
    defaultValue: new Date(2026, 8, 27)
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('27/09/2026');
    await userEvent.click(input);
    await userEvent.tab();
    await expect(args.onValueChange).not.toHaveBeenCalled();
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
  }
}`,...G.parameters?.docs?.source},description:{story:`Thai uses the Buddhist era and Persian its own calendar and digits by default; the field stays Gregorian with Western digits so it reads back.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    defaultValue: null
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: /Start date/
    })).toBeRequired();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    weekStartsOn: 0,
    defaultValue: new Date(2026, 8, 18)
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox')).toHaveValue('09/18/2026');
    await expect(canvas.getByRole('textbox')).toHaveAttribute('placeholder', 'mm/dd/yyyy');
  }
}`,...q.parameters?.docs?.source},description:{story:`US order: month first.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ngày bắt đầu',
    locale: 'vi-VN',
    weekStartsOn: undefined
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(2026, 8, 1),
    max: new Date(2026, 8, 30),
    helperText: 'Any day in September.'
  },
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox');
    (args.onValueChange as ReturnType<typeof fn>).mockClear();
    await userEvent.clear(input);
    await userEvent.type(input, '02/10/2026{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'start'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector<HTMLInputElement>('input[name="start"]')!.value).toBe('2026-09-18');
  }
}`,...X.parameters?.docs?.source},description:{story:`Submitted as yyyy-mm-dd whatever the display format.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...Z.parameters?.docs?.source}}}})))()}export{W as a,$ as c,Y as i,U as n,q as o,Z as r,J as s,N as t};