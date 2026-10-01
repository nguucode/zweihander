import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-Crmh4rpo.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,r as s}from"./Theme-CzJoMzJJ.js";import{n as c,t as ee}from"./FieldControl-BHF3-IfG.js";import{a as l,d as u,f as d,l as te,m as f,n as p,o as m,p as h,t as ne,u as g}from"./PopoverPopup-CRCCRpL6.js";import{a as re,c as ie,i as ae,n as oe,o as _,r as v,s as y,t as b}from"./SliderThumb-CUDkRzeV.js";import{a as x,i as se,o as ce,r as le,t as ue}from"./InputField-C3EkeSPi.js";var S,C,w,T,E,D,de,fe,pe,me,he,ge,_e,ve,ye,O;function be(){return(be=e((()=>{S=`_panel_1evw0_1`,C=`_disabled_1evw0_9`,w=`_area_1evw0_15`,T=`_areaThumb_1evw0_32`,E=`_hueThumb_1evw0_33`,D=`_hue_1evw0_33`,de=`_hueControl_1evw0_62`,fe=`_hueTrack_1evw0_69`,pe=`_swatches_1evw0_95`,me=`_swatch_1evw0_95`,he=`_trigger_1evw0_138`,ge=`_hexInput_1evw0_146`,_e=`_positioner_1evw0_152`,ve=`_popup_1evw0_156`,ye=`_srOnly_1evw0_176`,O={panel:S,disabled:C,area:w,areaThumb:T,hueThumb:E,hue:D,hueControl:de,hueTrack:fe,swatches:pe,swatch:me,trigger:he,hexInput:ge,positioner:_e,popup:ve,srOnly:ye}})))()}function k(e){let t=e.trim().replace(/^#/,``).toLowerCase();return/^[0-9a-f]{3}$/.test(t)?`#${[...t].map(e=>e+e).join(``)}`:/^[0-9a-f]{6}$/.test(t)?`#${t}`:null}function A(e){let t=parseInt(e.slice(1),16),n=(t>>16)/255,r=(t>>8&255)/255,i=(t&255)/255,a=Math.max(n,r,i),o=a-Math.min(n,r,i),s=0;return o&&(s=a===n?(r-i)/o%6:a===r?(i-n)/o+2:(n-r)/o+4),{h:(s*60+360)%360,s:a?o/a:0,v:a}}function j({h:e,s:t,v:n}){let r=r=>{let i=(r+e/60)%6;return n-n*t*Math.max(0,Math.min(i,4-i,1))};return`#${[r(5),r(3),r(1)].map(e=>Math.round(e*255).toString(16).padStart(2,`0`)).join(``)}`}function M({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,swatches:r,disabled:i=!1,className:o}){let s=(0,P.useId)(),[c,ee]=(0,P.useState)(()=>k(t)??`#000000`),l=(e===void 0?null:k(e))??c,[u,d]=(0,P.useState)(()=>A(l)),[te,f]=(0,P.useState)(l);l!==te&&(f(l),j(u)!==l&&d(A(l)));let p=e=>{d(e);let t=j(e);f(t),ee(t),t!==l&&n?.(t)},m=e=>p(A(e)),h=e=>{let t=e.currentTarget.getBoundingClientRect();p({...u,s:I((e.clientX-t.left)/t.width),v:I(1-(e.clientY-t.top)/t.height)})},ne=e=>{let t=e.shiftKey?.1:.01,n={ArrowRight:{s:u.s+t},ArrowLeft:{s:u.s-t},ArrowUp:{v:u.v+t},ArrowDown:{v:u.v-t},PageUp:{v:u.v+.1},PageDown:{v:u.v-.1},Home:{s:0},End:{s:1}}[e.key];n&&(e.preventDefault(),p({...u,s:I(n.s??u.s),v:I(n.v??u.v)}))},g=r?.map(e=>typeof e==`string`?{value:e,label:e}:e);return(0,F.jsxs)(`div`,{className:a(O.panel,i&&O.disabled,o),style:{"--picker-hue":u.h,"--picker-color":l},children:[(0,F.jsx)(`div`,{className:O.area,"data-disabled":i||void 0,onPointerDown:e=>{i||e.button!==0||(e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault(),e.currentTarget.querySelector(`input`)?.focus({preventScroll:!0}),h(e))},onPointerMove:e=>e.currentTarget.hasPointerCapture(e.pointerId)&&h(e),children:(0,F.jsxs)(`div`,{className:O.areaThumb,style:{left:`${u.s*100}%`,top:`${(1-u.v)*100}%`},children:[(0,F.jsx)(`input`,{type:`range`,className:O.srOnly,"aria-label":`Saturation`,"aria-valuetext":`Saturation ${L(u.s)}%, brightness ${L(u.v)}%`,min:0,max:100,value:L(u.s),disabled:i,onChange:e=>p({...u,s:Number(e.target.value)/100}),onKeyDown:ne}),(0,F.jsx)(`input`,{type:`range`,className:O.srOnly,tabIndex:-1,"aria-label":`Brightness`,"aria-valuetext":`Brightness ${L(u.v)}%`,min:0,max:100,value:L(u.v),disabled:i,onChange:e=>p({...u,v:Number(e.target.value)/100})})]})}),(0,F.jsx)(y,{className:O.hue,min:0,max:359,value:Math.round(u.h)%360,disabled:i,onValueChange:e=>p({...u,h:e}),thumbAlignment:`edge`,children:(0,F.jsx)(re,{className:O.hueControl,children:(0,F.jsx)(v,{className:O.hueTrack,children:(0,F.jsx)(b,{className:O.hueThumb,getAriaLabel:()=>`Hue`,getAriaValueText:(e,t)=>`${t} degrees`})})})}),g&&g.length>0&&(0,F.jsx)(`div`,{role:`radiogroup`,"aria-label":`Swatches`,className:O.swatches,children:g.map(e=>{let t=k(e.value)??e.value;return(0,F.jsx)(`input`,{type:`radio`,name:`${s}-swatch`,className:O.swatch,style:{"--swatch":t},"aria-label":e.label,checked:t===l,disabled:i,onChange:()=>m(t)},e.value)})})]})}function N({value:e,defaultValue:t=`#3b82f6`,onValueChange:n,swatches:r,label:i,helperText:o,validationState:s,size:c=`md`,appearance:d=`outlined`,isFullWidth:f,name:p,disabled:m,required:g,id:re,className:ie,"aria-label":ae}){let[oe,_]=(0,P.useState)(()=>k(t)??`#000000`),v=(e===void 0?null:k(e))??oe,[y,b]=(0,P.useState)(v),[x,S]=(0,P.useState)(!1),[C,w]=(0,P.useState)(v);v!==C&&(w(v),b(v),S(!1));let T=e=>{_(e),w(e),b(e),S(!1),e!==v&&n?.(e)},E=()=>{let e=k(y);e?T(e):S(!0)};return(0,F.jsx)(ue,{label:i,helperText:x?`Enter a colour as #rrggbb, e.g. #3b82f6.`:o,validationState:x?`error`:s,required:g,disabled:m,isFullWidth:f,className:ie,children:(0,F.jsxs)(`span`,{className:le(c,d),onMouseDown:se,children:[(0,F.jsxs)(h,{children:[(0,F.jsx)(u,{className:a(ce.iconButton,O.trigger),style:{"--swatch":v},disabled:m,"aria-label":`Choose colour, ${v} selected`}),(0,F.jsx)(te,{children:(0,F.jsx)(l,{className:O.positioner,side:`bottom`,align:`start`,sideOffset:6,children:(0,F.jsx)(ne,{"aria-label":`Choose colour`,className:O.popup,children:(0,F.jsx)(M,{value:v,onValueChange:T,swatches:r})})})})]}),(0,F.jsx)(ee,{id:re,value:y,spellCheck:!1,autoComplete:`off`,"aria-label":ae,required:g,className:a(ce.control,O.hexInput),onChange:e=>{b(e.target.value),S(!1)},onBlur:E,onKeyDown:e=>e.key===`Enter`&&E()}),p&&(0,F.jsx)(`input`,{type:`hidden`,name:p,value:v})]})})}var P,F,I,L;function xe(){return(xe=e((()=>{P=r(),c(),f(),d(),g(),m(),p(),ie(),_(),ae(),oe(),i(),x(),be(),F=n(),I=e=>Math.min(1,Math.max(0,e)),L=e=>Math.round(e*100),M.__docgenInfo={description:`The picker on its own: a saturation/brightness area, a hue strip and
optional swatches. Use it inline, or through ColorPicker, which puts it in
a popover under a hex field.`,methods:[],displayName:`ColorPanel`,props:{value:{required:!1,tsType:{name:`string`},description:"`#rrggbb`."},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#3b82f6'`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(hex: string) => void`,signature:{arguments:[{type:{name:`string`},name:`hex`}],return:{name:`void`}}},description:``},swatches:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`string | { value: string; label: string }`,elements:[{name:`string`},{name:`signature`,type:`object`,raw:`{ value: string; label: string }`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}]}],raw:`Swatch[]`},description:`Preset colours under the pickers. A plain string is named by its hex.`},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},N.__docgenInfo={description:`A hex field with a swatch button that opens the ColorPanel.`,methods:[],displayName:`ColorPicker`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:`Under the field. Replaced by a format hint while the typed text is not a colour.`},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled' | 'underlined' | 'unstyled'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underlined'`},{name:`literal`,value:`'unstyled'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},isFullWidth:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:"Submitted as `#rrggbb`."},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},defaultValue:{defaultValue:{value:`'#3b82f6'`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var Se=t({Default:()=>G,Disabled:()=>Y,InForm:()=>X,Normalize:()=>$,Panel:()=>Z,Required:()=>J,SwatchEdgesInDark:()=>Q,Swatches:()=>q,TypeAHex:()=>K,__namedExportsOrder:()=>De,default:()=>Ee});function Ce(){let[e,t]=(0,we.useState)(`#3b82f6`);return(0,R.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,R.jsx)(M,{value:e,onValueChange:t,swatches:U}),(0,R.jsx)(`output`,{children:e})]})}var we,R,z,Te,B,V,H,U,Ee,W,G,K,q,J,Y,X,Z,Q,$,De;function Oe(){return(Oe=e((()=>{we=r(),s(),xe(),R=n(),{expect:z,fn:Te,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,U=[{value:`#0a0a0a`,label:`Ink`},{value:`#ffffff`,label:`Paper`},{value:`#ef4444`,label:`Red`},{value:`#f59e0b`,label:`Amber`},{value:`#22c55e`,label:`Green`},{value:`#3b82f6`,label:`Blue`},{value:`#8b5cf6`,label:`Violet`},{value:`#ec4899`,label:`Pink`}],Ee={title:`Components/Controls/Color Picker`,component:N,parameters:{a11y:{test:`error`}},args:{label:`Brand colour`,defaultValue:`#3b82f6`,swatches:U,onValueChange:Te()}},W=()=>H(document.body).findByRole(`dialog`,{name:`Choose colour`}),G={play:async({args:e,canvas:t})=>{await z(t.getByRole(`textbox`,{name:`Brand colour`})).toHaveValue(`#3b82f6`),await B.click(t.getByRole(`button`,{name:`Choose colour, #3b82f6 selected`}));let n=H(await W()),r=n.getByRole(`slider`,{name:`Saturation`});await V(()=>z(r).toHaveFocus()),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 96%`),await z(n.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`),await B.keyboard(`{Shift>}{ArrowDown}{/Shift}`),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 76%, brightness 86%`),await B.keyboard(`{ArrowLeft}`),await z(r).toHaveAttribute(`aria-valuetext`,`Saturation 75%, brightness 86%`);let i=e.onValueChange.mock.lastCall[0];await z(t.getByRole(`textbox`)).toHaveValue(i),await B.keyboard(`{Escape}`),await V(()=>z(t.getByRole(`button`,{name:`Choose colour, ${i} selected`})).toHaveFocus())}},K={play:async({args:e,canvas:t})=>{let n=t.getByRole(`textbox`,{name:`Brand colour`});await B.clear(n),await B.type(n,`F00{Enter}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#ff0000`),await z(n).toHaveValue(`#ff0000`),await B.clear(n),await B.type(n,`reddish{Enter}`),await z(n).toHaveAttribute(`aria-invalid`,`true`),await z(t.getByText(`Enter a colour as #rrggbb, e.g. #3b82f6.`)).toBeVisible(),await z(e.onValueChange).toHaveBeenCalledTimes(1)}},q={play:async({args:e,canvas:t})=>{await B.click(t.getByRole(`button`,{name:/Choose colour/}));let n=H(await W()),r=H(n.getByRole(`radiogroup`,{name:`Swatches`}));await z(r.getByRole(`radio`,{name:`Blue`})).toBeChecked(),await B.click(r.getByRole(`radio`,{name:`Violet`})),await z(e.onValueChange).toHaveBeenLastCalledWith(`#8b5cf6`),await z(r.getByRole(`radio`,{name:`Violet`})).toBeChecked(),await z(r.getByRole(`radio`,{name:`Blue`})).not.toBeChecked(),await B.keyboard(`{ArrowRight}`),await z(e.onValueChange).toHaveBeenLastCalledWith(`#ec4899`),await z(r.getByRole(`radio`,{name:`Pink`})).toHaveFocus()}},J={args:{required:!0},play:async({canvas:e})=>{await z(e.getByRole(`textbox`,{name:/Brand colour/})).toBeRequired()}},Y={args:{disabled:!0},play:async({canvas:e})=>{await z(e.getByRole(`textbox`)).toBeDisabled(),await z(e.getByRole(`button`,{name:/Choose colour/})).toBeDisabled()}},X={args:{name:`brand`},render:e=>(0,R.jsx)(`form`,{"aria-label":`Theme`,children:(0,R.jsx)(N,{...e})}),play:async({canvas:e})=>{let t=e.getByRole(`form`);await z(new FormData(t).get(`brand`)).toBe(`#3b82f6`)}},Z={render:()=>(0,R.jsx)(Ce,{}),play:async({canvas:e})=>{let t=e.getByRole(`slider`,{name:`Saturation`}),n=t.closest(`div`).parentElement.getBoundingClientRect();await B.pointer({keys:`[MouseLeft]`,coords:{clientX:n.right-1,clientY:n.top+1},target:t.closest(`div`).parentElement}),await V(()=>z(t).toHaveAttribute(`aria-valuetext`,z.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/))),await z(t).toHaveFocus(),t.focus();for(let e=0;e<11;e++)await B.keyboard(`{Shift>}{ArrowDown}{/Shift}`);await z(e.getByRole(`status`)).toHaveTextContent(`#000000`),await z(e.getByRole(`slider`,{name:`Hue`})).toHaveAttribute(`aria-valuetext`,`217 degrees`)}},Q={render:()=>(0,R.jsx)(o,{appearance:`dark`,style:{background:`var(--popover)`,padding:`var(--space-4)`},children:(0,R.jsx)(M,{swatches:U})}),play:async({canvas:e})=>{let t=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),n=e=>(t.clearRect(0,0,1,1),t.fillStyle=e,t.fillRect(0,0,1,1),[...t.getImageData(0,0,1,1).data.slice(0,3)]),r=e=>e.map(e=>e/255).map(e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4).reduce((e,t,n)=>e+t*[.2126,.7152,.0722][n],0),i=(e,t)=>{let[i,a]=[r(n(e)),r(n(t))];return(Math.max(i,a)+.05)/(Math.min(i,a)+.05)},a=e.getByRole(`radio`,{name:`Ink`}),o=getComputedStyle(a.closest(`.dark`)).backgroundColor,s=getComputedStyle(a).boxShadow.match(/(rgba?|oklch|oklab|color)\([^)]*\)/)[0];await z(i(s,o)).toBeGreaterThanOrEqual(3)}},$={tags:[`!dev`,`!autodocs`],play:async()=>{await z(k(`#ABC`)).toBe(`#aabbcc`),await z(k(`3B82F6`)).toBe(`#3b82f6`),await z(k(`#3b82f`)).toBeNull(),await z(k(`blue`)).toBeNull()}},De=[`Default`,`TypeAHex`,`Swatches`,`Required`,`Disabled`,`InForm`,`Panel`,`SwatchEdgesInDark`,`Normalize`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: 'Brand colour'
    })).toHaveValue('#3b82f6');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose colour, #3b82f6 selected'
    }));
    const dialog = within(await popup());
    const area = dialog.getByRole('slider', {
      name: 'Saturation'
    });
    // Opening puts focus in the area, the first thing in the popup.
    await waitFor(() => expect(area).toHaveFocus());
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 96%');
    await expect(dialog.getByRole('slider', {
      name: 'Hue'
    })).toHaveAttribute('aria-valuetext', '217 degrees');
    // Up and down are brightness; left and right, saturation.
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 76%, brightness 86%');
    await userEvent.keyboard('{ArrowLeft}');
    await expect(area).toHaveAttribute('aria-valuetext', 'Saturation 75%, brightness 86%');
    const last = (args.onValueChange as ReturnType<typeof fn>).mock.lastCall![0] as string;
    await expect(canvas.getByRole('textbox')).toHaveValue(last);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: \`Choose colour, \${last} selected\`
    })).toHaveFocus());
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const input = canvas.getByRole('textbox', {
      name: 'Brand colour'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'F00{Enter}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ff0000');
    await expect(input).toHaveValue('#ff0000');
    await userEvent.clear(input);
    await userEvent.type(input, 'reddish{Enter}');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Enter a colour as #rrggbb, e.g. #3b82f6.')).toBeVisible();
    await expect(args.onValueChange).toHaveBeenCalledTimes(1);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Choose colour/
    }));
    const dialog = within(await popup());
    const swatches = within(dialog.getByRole('radiogroup', {
      name: 'Swatches'
    }));
    await expect(swatches.getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    await userEvent.click(swatches.getByRole('radio', {
      name: 'Violet'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#8b5cf6');
    await expect(swatches.getByRole('radio', {
      name: 'Violet'
    })).toBeChecked();
    await expect(swatches.getByRole('radio', {
      name: 'Blue'
    })).not.toBeChecked();
    // One tab stop; arrows move between swatches and choose.
    await userEvent.keyboard('{ArrowRight}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('#ec4899');
    await expect(swatches.getByRole('radio', {
      name: 'Pink'
    })).toHaveFocus();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox', {
      name: /Brand colour/
    })).toBeRequired();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('textbox')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /Choose colour/
    })).toBeDisabled();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'brand'
  },
  render: args => <form aria-label="Theme">
      <ColorPicker {...args} />
    </form>,
  play: async ({
    canvas
  }) => {
    const form = canvas.getByRole('form') as HTMLFormElement;
    await expect(new FormData(form).get('brand')).toBe('#3b82f6');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledPanel />,
  play: async ({
    canvas
  }) => {
    const area = canvas.getByRole('slider', {
      name: 'Saturation'
    });
    // A click in the top-right corner is the pure hue.
    const box = area.closest('div')!.parentElement!.getBoundingClientRect();
    await userEvent.pointer({
      keys: '[MouseLeft]',
      coords: {
        clientX: box.right - 1,
        clientY: box.top + 1
      },
      target: area.closest('div')!.parentElement!
    });
    await waitFor(() => expect(area).toHaveAttribute('aria-valuetext', expect.stringMatching(/^Saturation (99|100)%, brightness (99|100)%$/)));
    await expect(area).toHaveFocus();
    // Down to black: the hex forgets the hue, the strip does not.
    area.focus();
    for (let i = 0; i < 11; i++) await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(canvas.getByRole('status')).toHaveTextContent('#000000');
    await expect(canvas.getByRole('slider', {
      name: 'Hue'
    })).toHaveAttribute('aria-valuetext', '217 degrees');
  }
}`,...Z.parameters?.docs?.source},description:{story:`The panel alone, e.g. in a sidebar.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Theme appearance="dark" style={{
    background: 'var(--popover)',
    padding: 'var(--space-4)'
  }}>
      <ColorPanel swatches={brand} />
    </Theme>,
  play: async ({
    canvas
  }) => {
    const cv = document.createElement('canvas').getContext('2d', {
      willReadFrequently: true
    })!;
    const rgb = (c: string) => {
      cv.clearRect(0, 0, 1, 1);
      cv.fillStyle = c;
      cv.fillRect(0, 0, 1, 1);
      return [...cv.getImageData(0, 0, 1, 1).data.slice(0, 3)];
    };
    const lum = (c: number[]) => c.map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4).reduce((a, v, i) => a + v * [0.2126, 0.7152, 0.0722][i], 0);
    const ratio = (a: string, b: string) => {
      const [x, y] = [lum(rgb(a)), lum(rgb(b))];
      return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
    };
    const ink = canvas.getByRole('radio', {
      name: 'Ink'
    });
    const surface = getComputedStyle(ink.closest('.dark')!).backgroundColor;
    // The inset edge: the colour inside box-shadow.
    const edge = getComputedStyle(ink).boxShadow.match(/(rgba?|oklch|oklab|color)\\([^)]*\\)/)![0];
    await expect(ratio(edge, surface)).toBeGreaterThanOrEqual(3);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Every swatch keeps a visible edge on its surface, the page-coloured ones included.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  play: async () => {
    await expect(normalizeHex('#ABC')).toBe('#aabbcc');
    await expect(normalizeHex('3B82F6')).toBe('#3b82f6');
    await expect(normalizeHex('#3b82f')).toBeNull();
    await expect(normalizeHex('blue')).toBeNull();
  }
}`,...$.parameters?.docs?.source}}}})))()}export{q as a,Z as i,G as n,Oe as o,Y as r,Se as t};