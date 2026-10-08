import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./icon-Dc4hTclj.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c=`_rating_1j5pr_1`,l=`_sm_1j5pr_17`,u=`_lg_1j5pr_20`,d=`_label_1j5pr_24`,f=`_stars_1j5pr_29`,p=`_star_1j5pr_29`,m=`_on_1j5pr_45`,h=`_input_1j5pr_64`,g=`_fill_1j5pr_84`,_=`_empty_1j5pr_92`,v={rating:c,sm:l,lg:u,label:d,stars:f,star:p,on:m,input:h,fill:g,empty:_}})))()}function b({value:e,defaultValue:t=0,onValueChange:n,max:r=5,size:i=`md`,readOnly:o=!1,disabled:c=!1,label:l,"aria-label":u,name:d,getValueText:f=C,className:p}){let m=(0,x.useId)(),[h,g]=(0,x.useState)(t),_=Math.min(r,Math.max(0,e??h)),y=Array.from({length:r},(e,t)=>t+1),b=a(v.rating,v[i],p);return o?(0,S.jsxs)(`span`,{className:b,children:[l&&(0,S.jsx)(`span`,{className:v.label,children:l}),(0,S.jsx)(`span`,{role:`img`,"aria-label":f(_,r),className:v.stars,children:y.map(e=>{let t=Math.min(1,Math.max(0,_-(e-1)));return(0,S.jsxs)(`span`,{className:v.star,"aria-hidden":`true`,children:[(0,S.jsx)(s,{name:`star`,className:v.empty}),(0,S.jsx)(`span`,{className:v.fill,style:{inlineSize:`${t*100}%`},children:(0,S.jsx)(s,{name:`star-filled`})})]},e)})})]}):(0,S.jsxs)(`fieldset`,{className:b,disabled:c,"aria-label":l?void 0:u,children:[l&&(0,S.jsx)(`legend`,{className:v.label,children:l}),(0,S.jsx)(`span`,{className:v.stars,children:y.map(e=>(0,S.jsxs)(`label`,{className:a(v.star,e<=_&&v.on),children:[(0,S.jsx)(`input`,{type:`radio`,className:v.input,name:d??m,value:e,checked:e===Math.round(_),"aria-label":f(e,r),onChange:()=>{g(e),n?.(e)}}),(0,S.jsx)(s,{name:e<=_?`star-filled`:`star`})]},e))})]})}var x,S,C;function w(){return(w=e((()=>{x=r(),o(),i(),y(),S=n(),C=(e,t)=>`${e} out of ${t} stars`,b.__docgenInfo={description:``,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:`0 is unrated. Read-only ratings take fractions, e.g. 4.5.`},defaultValue:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:`Shows a rating rather than asking for one.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Visible label; the group's name.`},"aria-label":{required:!1,tsType:{name:`string`},description:"The name when there is no visible `label`."},name:{required:!1,tsType:{name:`string`},description:`Submitted with a form.`},getValueText:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number, max: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`},{type:{name:`number`},name:`max`}],return:{name:`string`}}},description:"How each value is spoken, e.g. `(n) => `${n} stars``.",defaultValue:{value:"(value: number, max: number) => `${value} out of ${max} stars`",computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var T=t({CustomText:()=>I,Default:()=>j,Disabled:()=>F,ReadOnly:()=>M,Sizes:()=>N,Unrated:()=>P,__namedExportsOrder:()=>L,default:()=>A}),E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{w(),E=n(),{expect:D,fn:O,userEvent:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Controls/Rating`,component:b,parameters:{a11y:{test:`error`}},args:{label:`Rate this template`,defaultValue:3,onValueChange:O()},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]}}},j={play:async({args:e,canvas:t})=>{let n=t.getByRole(`group`,{name:`Rate this template`});await D(n).toBeVisible(),await D(t.getByRole(`radio`,{name:`3 out of 5 stars`})).toBeChecked(),await k.click(t.getByRole(`radio`,{name:`5 out of 5 stars`})),await D(e.onValueChange).toHaveBeenLastCalledWith(5),await k.keyboard(`{ArrowLeft}`),await D(t.getByRole(`radio`,{name:`4 out of 5 stars`})).toBeChecked(),await D(e.onValueChange).toHaveBeenLastCalledWith(4)}},M={args:{readOnly:!0,value:4.5,label:void 0},play:async({canvas:e})=>{await D(e.getByRole(`img`,{name:`4.5 out of 5 stars`})).toBeVisible(),await D(e.queryByRole(`radio`)).toBeNull();let t=e.getByRole(`img`).children[4],n=t.lastElementChild;await D(Math.round(n.getBoundingClientRect().width/t.getBoundingClientRect().width*100)).toBe(50),await D(n.querySelector(`svg`).getBoundingClientRect().width).toBe(t.getBoundingClientRect().width)}},N={render:e=>(0,E.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`sm`,`md`,`lg`].map(t=>(0,E.jsx)(b,{...e,size:t,label:t},t))})},P={args:{defaultValue:0},play:async({canvas:e})=>{await D(e.getAllByRole(`radio`).filter(e=>e.checked)).toHaveLength(0)}},F={args:{disabled:!0},play:async({canvas:e})=>{for(let t of e.getAllByRole(`radio`))await D(t).toBeDisabled()}},I={args:{max:3,defaultValue:2,label:`Difficulty`,getValueText:e=>[`Easy`,`Medium`,`Hard`][e-1]},play:async({canvas:e})=>{await D(e.getByRole(`radio`,{name:`Medium`})).toBeChecked()}},L=[`Default`,`ReadOnly`,`Sizes`,`Unrated`,`Disabled`,`CustomText`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const group = canvas.getByRole('group', {
      name: 'Rate this template'
    });
    await expect(group).toBeVisible();
    await expect(canvas.getByRole('radio', {
      name: '3 out of 5 stars'
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('radio', {
      name: '5 out of 5 stars'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(5);
    // Arrows move the choice, as in any radio group.
    await userEvent.keyboard('{ArrowLeft}');
    await expect(canvas.getByRole('radio', {
      name: '4 out of 5 stars'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(4);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 4.5,
    label: undefined
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('img', {
      name: '4.5 out of 5 stars'
    })).toBeVisible();
    await expect(canvas.queryByRole('radio')).toBeNull();
    // The fifth star is filled halfway, cut rather than shrunk.
    const img = canvas.getByRole('img');
    const fifth = img.children[4] as HTMLElement;
    const fill = fifth.lastElementChild as HTMLElement;
    await expect(Math.round(fill.getBoundingClientRect().width / fifth.getBoundingClientRect().width * 100)).toBe(50);
    await expect(fill.querySelector('svg')!.getBoundingClientRect().width).toBe(fifth.getBoundingClientRect().width);
  }
}`,...M.parameters?.docs?.source},description:{story:`Shows a rating: one image, fractions allowed.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Rating key={size} {...args} size={size} label={size} />)}
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('radio').filter(r => (r as HTMLInputElement).checked)).toHaveLength(0);
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    for (const radio of canvas.getAllByRole('radio')) await expect(radio).toBeDisabled();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3,
    defaultValue: 2,
    label: 'Difficulty',
    getValueText: (n: number) => ['Easy', 'Medium', 'Hard'][n - 1]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('radio', {
      name: 'Medium'
    })).toBeChecked();
  }
}`,...I.parameters?.docs?.source}}}})))()}export{M as a,R as c,T as i,j as n,N as o,F as r,P as s,I as t};