import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as ee}from"./Button-Bwi4V5f1.js";import{n as s,t as c}from"./icon-C9aTyDDd.js";import{n as l,t as u}from"./Table-Y4TRGaOz.js";import{r as d,t as te}from"./TextInput-vfco79YG.js";import{r as f,t as p}from"./Modal-ByvhTgOp.js";import{n as m,t as h}from"./DescriptionList-BJqtYQ8L.js";var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g=`_inlineEdit_1wd7e_6`,_=`_sm_1wd7e_18`,v=`_value_1wd7e_24`,y=`_text_1wd7e_52`,b=`_placeholder_1wd7e_53`,x=`_pencil_1wd7e_71`,S=`_editor_1wd7e_100`,C=`_field_1wd7e_106`,w=`_srOnly_1wd7e_111`,T={inlineEdit:g,sm:_,value:v,text:y,placeholder:b,pencil:x,editor:S,field:C,srOnly:w}})))()}function D({value:e,label:t,onSave:n,placeholder:r=`Empty`,inputMode:a,size:o=`md`,className:s,ref:l,...u}){let[d,f]=(0,O.useState)(!1),[p,m]=(0,O.useState)(e),[h,g]=(0,O.useState)(null),[_,v]=(0,O.useState)(!1),y=(0,O.useRef)(null),b=(0,O.useRef)(null),x=(0,O.useRef)(null),S=(0,O.useRef)(!1),C=(0,O.useRef)(!1);(0,O.useLayoutEffect)(()=>{d?(x.current?.focus(),x.current?.select()):S.current&&(S.current=!1,b.current?.focus())},[d]);let w=()=>{let e=document.activeElement;return!e||e===document.body||!!y.current?.contains(e)},E=()=>{m(e),g(null),f(!0)},D=e=>{S.current=e,f(!1)},A=async t=>{if(C.current)return;if(p===e)return D(t);C.current=!0,v(!0),g(null);let r=null;try{r=await n(p)||null}catch(e){r=e instanceof Error&&e.message||`Could not save.`}C.current=!1,v(!1);let i=t&&w();r?(g(r),i&&x.current?.focus()):D(i)},ne=e=>{e.key===`Enter`&&!e.nativeEvent.isComposing?(e.preventDefault(),A(!0)):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),_||D(!0))},j=e=>e.preventDefault(),M=e=>{e.currentTarget.contains(e.relatedTarget)||A(!1)};return(0,k.jsxs)(`div`,{ref:e=>{y.current=e,typeof l==`function`?l(e):l&&(l.current=e)},className:i(T.inlineEdit,T[o],s),...u,children:[d?(0,k.jsxs)(`div`,{className:T.editor,onBlur:M,children:[(0,k.jsx)(te,{ref:x,"aria-label":t,inputMode:a,autoComplete:`off`,size:o,isFullWidth:!0,className:T.field,value:p,readOnly:_,onChange:e=>{m(e.target.value),g(null)},onKeyDown:ne,validationState:h?`error`:`default`,helperText:h??void 0}),(0,k.jsx)(ee,{size:o,variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Save`,isLoading:_,onMouseDown:j,onClick:()=>A(!0),children:(0,k.jsx)(c,{name:`check`})}),(0,k.jsx)(ee,{size:o,variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Cancel`,disabled:_,onMouseDown:j,onClick:()=>D(!0),children:(0,k.jsx)(c,{name:`close`})})]}):(0,k.jsxs)(`button`,{ref:b,type:`button`,className:T.value,onClick:E,children:[(0,k.jsxs)(`span`,{className:T.srOnly,children:[`Edit `,t,`: `]}),(0,k.jsx)(`span`,{className:e?T.text:T.placeholder,children:e||r}),(0,k.jsx)(c,{name:`edit`,className:T.pencil})]}),(0,k.jsx)(`span`,{role:`status`,className:T.srOnly,children:_?`Saving`:h??``})]})}var O,k;function A(){return(A=e((()=>{O=n(),s(),r(),o(),d(),E(),k=a(),D.__docgenInfo={description:`A value that edits where it stands: in a table cell or a description list
row. Click it (or Enter on it) for a text input; Enter or Save keeps the
change, Escape or Cancel drops it. The pattern owns no data: it reports the
new value and shows the error you return.`,methods:[],displayName:`InlineEdit`,props:{value:{required:!0,tsType:{name:`string`},description:``},label:{required:!0,tsType:{name:`string`},description:`What the value is, e.g. "Email". Names the input and the value's button ("Edit Email").`},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void | string | undefined | Promise<void | string | undefined>`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`union`,raw:`void | string | undefined | Promise<void | string | undefined>`,elements:[{name:`void`},{name:`string`},{name:`undefined`},{name:`Promise`,elements:[{name:`union`,raw:`void | string | undefined`,elements:[{name:`void`},{name:`string`},{name:`undefined`}]}],raw:`Promise<void | string | undefined>`}]}}},description:`Called with the new value on Enter, Save or leaving the field, only when
it changed. Return (or resolve) a message to show it under the field and
stay in edit; a throw or rejection shows its message the same way.`},placeholder:{required:!1,tsType:{name:`string`},description:`Shown, muted, when the value is empty.`,defaultValue:{value:`'Empty'`,computed:!1}},inputMode:{required:!1,tsType:{name:`union`,raw:`'text' | 'email' | 'numeric' | 'decimal' | 'tel' | 'url'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'email'`},{name:`literal`,value:`'numeric'`},{name:`literal`,value:`'decimal'`},{name:`literal`,value:`'tel'`},{name:`literal`,value:`'url'`}]},description:'The on-screen keyboard to offer. The input stays `type="text"`, so the\nwhole value can be selected on edit (browsers cannot select an email or\nnumber input); check the format in `onSave`.'},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}},composes:[`Omit`]}})))()}var ne=t({Default:()=>W,EmptyAndLong:()=>Z,InModal:()=>Q,InTable:()=>G,Invalid:()=>Y,Keyboard:()=>K,SaveAndCancel:()=>q,SaveOnBlur:()=>J,Saving:()=>X,SlowSaveKeepsFocus:()=>$,__namedExportsOrder:()=>ie,default:()=>U});function j({value:e,onSave:t,...n}){let[r,i]=(0,N.useState)(e);return(0,P.jsx)(D,{...n,value:r,onSave:async e=>{let n=await t(e);return n||i(e),n}})}function M({onSave:e=()=>void 0}){let t=(t,n,r)=>({term:t,details:(0,P.jsx)(j,{label:t,value:n,onSave:e,...r})});return(0,P.jsx)(h,{title:`Customer`,description:`Click a detail to change it.`,items:[t(`Company`,`Acme Corp`),t(`Email`,`billing@acme.example`,{inputMode:`email`,onSave:t=>V(t)??e(t)}),t(`Phone`,``,{inputMode:`tel`,placeholder:`Add a phone number`}),t(`Payment terms`,`Net 30`)]})}function re(){let[e,t]=(0,N.useState)(H),n=(e,n)=>t(t=>t.map(t=>t.id===e?{...t,reference:n}:t));return(0,P.jsx)(u,{caption:`Invoices`,columns:[{key:`id`,header:`Invoice`,isRowHeader:!0},{key:`customer`,header:`Customer`},{key:`reference`,header:`PO reference`,cell:e=>(0,P.jsx)(D,{size:`sm`,label:`PO reference for ${e.id}`,value:e.reference,placeholder:`Add`,onSave:t=>n(e.id,t)})}],rows:e,getRowId:e=>e.id})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ie;function ae(){return(ae=e((()=>{N=n(),l(),f(),m(),A(),P=a(),{expect:F,fn:I,userEvent:L,waitFor:R,within:z}=__STORYBOOK_MODULE_TEST__,B=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,V=e=>B.test(e)?void 0:`Enter an email address like name@example.com.`,H=[{id:`INV-1040`,customer:`Acme Corp`,reference:`PO-2291`},{id:`INV-1041`,customer:`Globex`,reference:``},{id:`INV-1042`,customer:`Initech`,reference:`PO-2307`}],U={title:`Patterns/Application UI/Inline Edit`,tags:[`experimental`],component:D,parameters:{layout:`padded`},argTypes:{value:{description:"The saved value. Update it after `onSave` succeeds.",control:`text`},label:{description:`What the value is, e.g. "Email". Names the input, and the value's button as "Edit Email".`,control:`text`},onSave:{description:`Called with the new value on Enter, Save or leaving the field, only when it changed. Return or resolve a message to show it under the field and stay in edit; a throw or rejection shows its message the same way. While a promise is pending the field is saving.`},placeholder:{description:`Shown, muted, in place of an empty value.`,control:`text`,table:{defaultValue:{summary:`Empty`}}},inputMode:{description:'The on-screen keyboard to offer. The input stays `type="text"`, so the whole value can be selected on edit; check the format in `onSave`.',control:`select`,options:[`text`,`email`,`numeric`,`decimal`,`tel`,`url`]},size:{description:"`sm` in a compact table row.",control:`inline-radio`,options:[`sm`,`md`],table:{defaultValue:{summary:`md`}}}},args:{value:`Acme Corp`,label:`Company`,onSave:I()},decorators:[e=>(0,P.jsx)(`div`,{style:{maxInlineSize:`40rem`},children:e()})]},W={render:()=>(0,P.jsx)(M,{}),play:async({canvas:e})=>{let t=z(e.getByRole(`button`,{name:`Edit Company: Acme Corp`})).getByText(`Acme Corp`).getBoundingClientRect();await L.click(e.getByRole(`button`,{name:`Edit Company: Acme Corp`}));let n=e.getByRole(`textbox`,{name:`Company`});await F(n).toHaveFocus();let r=n.getBoundingClientRect();await F(Math.abs(r.left+parseFloat(getComputedStyle(n).paddingInlineStart)-t.left)).toBeLessThan(2),await F(Math.abs(t.top-e.getByText(`Company`).getBoundingClientRect().top)).toBeLessThan(2),await F([n.selectionStart,n.selectionEnd]).toEqual([0,9]),await L.keyboard(`Acme Corporation{Enter}`);let i=await e.findByRole(`button`,{name:`Edit Company: Acme Corporation`});await F(i).toHaveFocus()}},G={render:()=>(0,P.jsx)(re,{}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Edit PO reference for INV-1040: PO-2291`}),n=z(t).getByText(`PO-2291`).getBoundingClientRect(),r=e.getByRole(`columnheader`,{name:`PO reference`}),i=r.getBoundingClientRect().left+parseFloat(getComputedStyle(r).paddingInlineStart);await F(Math.abs(n.left-i)).toBeLessThan(2),await L.click(e.getByRole(`button`,{name:`Edit PO reference for INV-1041: Add`})),await L.keyboard(`PO-2300{Enter}`),await F(await e.findByRole(`button`,{name:`Edit PO reference for INV-1041: PO-2300`})).toBeVisible()}},K={render:e=>(0,P.jsx)(j,{...e}),play:async({args:e,canvas:t})=>{await L.tab();let n=t.getByRole(`button`,{name:`Edit Company: Acme Corp`});await F(n).toHaveFocus(),await L.keyboard(`{Enter}`),await F(t.getByRole(`textbox`,{name:`Company`})).toHaveFocus(),await L.keyboard(`Globex{Escape}`);let r=await t.findByRole(`button`,{name:`Edit Company: Acme Corp`});await F(r).toHaveFocus(),await F(e.onSave).not.toHaveBeenCalled(),await L.keyboard(` `),await F(t.getByRole(`textbox`,{name:`Company`})).toHaveFocus(),await L.keyboard(`{Escape}`),await F(await t.findByRole(`button`,{name:`Edit Company: Acme Corp`})).toHaveFocus(),await L.keyboard(`{Enter}{Enter}`),await F(await t.findByRole(`button`,{name:`Edit Company: Acme Corp`})).toHaveFocus(),await F(e.onSave).not.toHaveBeenCalled()}},q={render:e=>(0,P.jsx)(j,{...e}),play:async({args:e,canvas:t})=>{await L.click(t.getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Globex`),await L.click(t.getByRole(`button`,{name:`Cancel`})),await F(await t.findByRole(`button`,{name:`Edit Company: Acme Corp`})).toHaveFocus(),await F(e.onSave).not.toHaveBeenCalled(),await L.click(t.getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Globex`),await L.click(t.getByRole(`button`,{name:`Save`})),await F(await t.findByRole(`button`,{name:`Edit Company: Globex`})).toHaveFocus(),await F(e.onSave).toHaveBeenCalledTimes(1),await F(e.onSave).toHaveBeenCalledWith(`Globex`)}},J={render:e=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(j,{...e}),(0,P.jsx)(`button`,{type:`button`,children:`Elsewhere`})]}),play:async({args:e,canvas:t})=>{await L.click(t.getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Globex`),await L.click(t.getByRole(`button`,{name:`Elsewhere`})),await F(await t.findByRole(`button`,{name:`Edit Company: Globex`})).toBeVisible(),await F(t.getByRole(`button`,{name:`Elsewhere`})).toHaveFocus(),await F(e.onSave).toHaveBeenCalledTimes(1)}},Y={render:()=>(0,P.jsx)(M,{}),play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:/^Edit Email/})),await L.keyboard(`billing at acme{Enter}`);let t=e.getByRole(`textbox`,{name:`Email`});await R(()=>F(t).toHaveAttribute(`aria-invalid`,`true`)),await F(t).toHaveAccessibleDescription(`Enter an email address like name@example.com.`),await F(t).toHaveValue(`billing at acme`),await F(t).toHaveFocus(),await L.keyboard(`{Backspace}`),await F(t).not.toHaveAttribute(`aria-invalid`,`true`)}},X={render:e=>(0,P.jsx)(j,{...e}),args:{onSave:I(e=>new Promise((t,n)=>setTimeout(()=>e===`Fail`?n(Error(`The server is not answering. Try again.`)):t(),400)))},play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Fail{Enter}`);let t=e.getByRole(`textbox`,{name:`Company`});await F(e.getByRole(`status`)).toHaveTextContent(`Saving`),await F(t).toHaveAttribute(`readonly`),await F(e.getByRole(`button`,{name:`Save`})).toHaveAttribute(`aria-busy`,`true`),await R(()=>F(t).toHaveAccessibleDescription(`The server is not answering. Try again.`)),await F(e.getByRole(`status`)).toHaveTextContent(`The server is not answering. Try again.`),await F(t).not.toHaveAttribute(`readonly`),await L.clear(t),await L.keyboard(`Globex{Enter}`),await F(await e.findByRole(`button`,{name:`Edit Company: Globex`})).toHaveFocus()}},Z={render:e=>(0,P.jsxs)(`div`,{"data-testid":`column`,style:{display:`grid`,gap:`var(--space-4)`,maxInlineSize:`16rem`},children:[(0,P.jsx)(j,{...e,label:`Phone`,value:``,placeholder:`Add a phone number`}),(0,P.jsx)(j,{...e,label:`Notes`,value:`Deliver-to-the-loading-dock-behind-building-C-`.repeat(3)})]}),play:async({canvas:e})=>{await F(e.getByRole(`button`,{name:`Edit Phone: Add a phone number`})).toBeVisible();let t=e.getByRole(`button`,{name:/^Edit Notes/}),n=e.getByTestId(`column`).getBoundingClientRect(),r=-parseFloat(getComputedStyle(t.parentElement).marginInlineEnd);await R(()=>F(t.getBoundingClientRect().right).toBeLessThanOrEqual(n.right+r+1))}},Q={render:e=>(0,P.jsx)(p,{title:`Customer`,defaultOpen:!0,children:(0,P.jsx)(j,{...e})}),play:async({canvasElement:e})=>{let t=z(e.ownerDocument.body),n=await t.findByRole(`dialog`,{name:`Customer`});await L.click(z(n).getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Globex{Escape}`),await F(await z(n).findByRole(`button`,{name:`Edit Company: Acme Corp`})).toHaveFocus(),await F(n).toBeVisible(),await L.keyboard(`{Escape}`),await R(()=>F(t.queryByRole(`dialog`)).toBeNull())}},$={render:e=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(j,{...e}),(0,P.jsx)(`button`,{type:`button`,children:`Elsewhere`})]}),args:{onSave:I(()=>new Promise(e=>setTimeout(e,300)))},play:async({canvas:e})=>{await L.click(e.getByRole(`button`,{name:/^Edit Company/})),await L.keyboard(`Globex{Enter}`),await L.click(e.getByRole(`button`,{name:`Elsewhere`})),await F(await e.findByRole(`button`,{name:`Edit Company: Globex`})).toBeVisible(),await F(e.getByRole(`button`,{name:`Elsewhere`})).toHaveFocus()}},ie=[`Default`,`InTable`,`Keyboard`,`SaveAndCancel`,`SaveOnBlur`,`Invalid`,`Saving`,`EmptyAndLong`,`InModal`,`SlowSaveKeepsFocus`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Customer />,
  play: async ({
    canvas
  }) => {
    const before = within(canvas.getByRole('button', {
      name: 'Edit Company: Acme Corp'
    })).getByText('Acme Corp').getBoundingClientRect();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit Company: Acme Corp'
    }));
    const input = canvas.getByRole('textbox', {
      name: 'Company'
    });
    await expect(input).toHaveFocus();
    // The input's text starts where the value's did: edit mode does not shift it.
    const box = input.getBoundingClientRect();
    await expect(Math.abs(box.left + parseFloat(getComputedStyle(input).paddingInlineStart) - before.left)).toBeLessThan(2);
    // And on the term's line: the value's text shares its top with the term's.
    await expect(Math.abs(before.top - canvas.getByText('Company').getBoundingClientRect().top)).toBeLessThan(2);
    // The whole value is selected, so typing replaces it.
    await expect([(input as HTMLInputElement).selectionStart, (input as HTMLInputElement).selectionEnd]).toEqual([0, 9]);
    await userEvent.keyboard('Acme Corporation{Enter}');
    const value = await canvas.findByRole('button', {
      name: 'Edit Company: Acme Corporation'
    });
    await expect(value).toHaveFocus();
  }
}`,...W.parameters?.docs?.source},description:{story:`Rows of a description list. Click a value, change it, press Enter.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Invoices />,
  play: async ({
    canvas
  }) => {
    const cell = canvas.getByRole('button', {
      name: 'Edit PO reference for INV-1040: PO-2291'
    });
    const text = within(cell).getByText('PO-2291').getBoundingClientRect();
    const header = canvas.getByRole('columnheader', {
      name: 'PO reference'
    });
    const headerText = header.getBoundingClientRect().left + parseFloat(getComputedStyle(header).paddingInlineStart);
    await expect(Math.abs(text.left - headerText)).toBeLessThan(2);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit PO reference for INV-1041: Add'
    }));
    await userEvent.keyboard('PO-2300{Enter}');
    await expect(await canvas.findByRole('button', {
      name: 'Edit PO reference for INV-1041: PO-2300'
    })).toBeVisible();
  }
}`,...G.parameters?.docs?.source},description:{story:"A column of a table, at `sm`. The value lines up with the text in the cells beside it.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <Editable {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.tab();
    const value = canvas.getByRole('button', {
      name: 'Edit Company: Acme Corp'
    });
    await expect(value).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('textbox', {
      name: 'Company'
    })).toHaveFocus();
    await userEvent.keyboard('Globex{Escape}');
    const back = await canvas.findByRole('button', {
      name: 'Edit Company: Acme Corp'
    });
    await expect(back).toHaveFocus();
    await expect(args.onSave).not.toHaveBeenCalled();
    // Space opens it too.
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('textbox', {
      name: 'Company'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Acme Corp'
    })).toHaveFocus();
    // Unchanged, Enter just closes the field.
    await userEvent.keyboard('{Enter}{Enter}');
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Acme Corp'
    })).toHaveFocus();
    await expect(args.onSave).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source},description:{story:`Tab to a value, Enter to edit, Escape to drop the change: the old value
stays and focus is back on it.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <Editable {...args} />,
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Globex');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Acme Corp'
    })).toHaveFocus();
    await expect(args.onSave).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Globex');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Globex'
    })).toHaveFocus();
    await expect(args.onSave).toHaveBeenCalledTimes(1);
    await expect(args.onSave).toHaveBeenCalledWith('Globex');
  }
}`,...q.parameters?.docs?.source},description:{story:`Save and Cancel do what Enter and Escape do, for a pointer or a touch screen.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Editable {...args} />
      <button type="button">Elsewhere</button>
    </>,
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Globex');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Elsewhere'
    }));
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Globex'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Elsewhere'
    })).toHaveFocus();
    await expect(args.onSave).toHaveBeenCalledTimes(1);
  }
}`,...J.parameters?.docs?.source},description:{story:`Leaving the field keeps the change, so a click elsewhere never loses typing.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Customer />,
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Email/
    }));
    await userEvent.keyboard('billing at acme{Enter}');
    const input = canvas.getByRole('textbox', {
      name: 'Email'
    });
    await waitFor(() => expect(input).toHaveAttribute('aria-invalid', 'true'));
    await expect(input).toHaveAccessibleDescription('Enter an email address like name@example.com.');
    await expect(input).toHaveValue('billing at acme');
    await expect(input).toHaveFocus();
    // Typing clears the error.
    await userEvent.keyboard('{Backspace}');
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
  }
}`,...Y.parameters?.docs?.source},description:{story:`The error shows at the field, which stays open with what was typed.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <Editable {...args} />,
  args: {
    onSave: fn((next: string) => new Promise<void>((resolve, reject) => setTimeout(() => next === 'Fail' ? reject(new Error('The server is not answering. Try again.')) : resolve(), 400)))
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Fail{Enter}');
    const input = canvas.getByRole('textbox', {
      name: 'Company'
    });
    await expect(canvas.getByRole('status')).toHaveTextContent('Saving');
    await expect(input).toHaveAttribute('readonly');
    await expect(canvas.getByRole('button', {
      name: 'Save'
    })).toHaveAttribute('aria-busy', 'true');
    await waitFor(() => expect(input).toHaveAccessibleDescription('The server is not answering. Try again.'));
    // The error is announced, too, in case focus has left the field.
    await expect(canvas.getByRole('status')).toHaveTextContent('The server is not answering. Try again.');
    await expect(input).not.toHaveAttribute('readonly');
    await userEvent.clear(input);
    await userEvent.keyboard('Globex{Enter}');
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Globex'
    })).toHaveFocus();
  }
}`,...X.parameters?.docs?.source},description:{story:"While `onSave`'s promise is pending, the field is read-only, Save spins and\na status says Saving. A rejection shows its message at the field.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <div data-testid="column" style={{
    display: 'grid',
    gap: 'var(--space-4)',
    maxInlineSize: '16rem'
  }}>
      <Editable {...args} label="Phone" value="" placeholder="Add a phone number" />
      <Editable {...args} label="Notes" value={'Deliver-to-the-loading-dock-behind-building-C-'.repeat(3)} />
    </div>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Edit Phone: Add a phone number'
    })).toBeVisible();
    const notes = canvas.getByRole('button', {
      name: /^Edit Notes/
    });
    // The root pulls back by the field's padding on each side, so allow for it.
    const column = canvas.getByTestId('column').getBoundingClientRect();
    const pullBack = -parseFloat(getComputedStyle(notes.parentElement!).marginInlineEnd);
    await waitFor(() => expect(notes.getBoundingClientRect().right).toBeLessThanOrEqual(column.right + pullBack + 1));
  }
}`,...Z.parameters?.docs?.source},description:{story:`No value: the placeholder stands in, muted. A very long value wraps instead of widening the page.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <Modal title="Customer" defaultOpen>
      <Editable {...args} />
    </Modal>,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', {
      name: 'Customer'
    });
    await userEvent.click(within(dialog).getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Globex{Escape}');
    await expect(await within(dialog).findByRole('button', {
      name: 'Edit Company: Acme Corp'
    })).toHaveFocus();
    await expect(dialog).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).toBeNull());
  }
}`,...Q.parameters?.docs?.source},description:{story:`In a Modal, Escape cancels the edit and leaves the Modal open; a second Escape closes it.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Editable {...args} />
      <button type="button">Elsewhere</button>
    </>,
  args: {
    onSave: fn(() => new Promise<void>(resolve => setTimeout(resolve, 300)))
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /^Edit Company/
    }));
    await userEvent.keyboard('Globex{Enter}');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Elsewhere'
    }));
    await expect(await canvas.findByRole('button', {
      name: 'Edit Company: Globex'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Elsewhere'
    })).toHaveFocus();
  }
}`,...$.parameters?.docs?.source},description:{story:`Press Enter, then move on while the save is pending: focus stays where the viewer put it.`,...$.parameters?.docs?.description}}}})))()}export{Y as a,X as c,ne as i,ae as l,Z as n,K as o,G as r,J as s,W as t};