import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./icon-C8IlC69p.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u=`_rating_1iz7a_1`,d=`_sm_1iz7a_17`,f=`_lg_1iz7a_20`,p=`_label_1iz7a_24`,m=`_stars_1iz7a_29`,h=`_star_1iz7a_29`,g=`_on_1iz7a_46`,_=`_input_1iz7a_65`,v=`_fill_1iz7a_85`,y=`_empty_1iz7a_93`,b={rating:u,sm:d,lg:f,label:p,stars:m,star:h,on:g,input:_,fill:v,empty:y}})))()}function S({value:e,defaultValue:t=0,onValueChange:n,max:r=5,size:a=`md`,readOnly:o=!1,disabled:c=!1,label:l,"aria-label":u,name:d,getValueText:f=T,className:p}){let m=(0,C.useId)(),[h,g]=(0,C.useState)(t),_=Math.min(r,Math.max(0,e??h)),v=Array.from({length:r},(e,t)=>t+1),y=i(b.rating,b[a],p);return o?(0,w.jsxs)(`span`,{className:y,children:[l&&(0,w.jsx)(`span`,{className:b.label,children:l}),(0,w.jsx)(`span`,{role:`img`,"aria-label":f(_,r),className:b.stars,children:v.map(e=>{let t=Math.min(1,Math.max(0,_-(e-1)));return(0,w.jsxs)(`span`,{className:b.star,"aria-hidden":`true`,children:[(0,w.jsx)(s,{name:`star`,className:b.empty}),(0,w.jsx)(`span`,{className:b.fill,style:{inlineSize:`${t*100}%`},children:(0,w.jsx)(s,{name:`star-filled`})})]},e)})})]}):(0,w.jsxs)(`fieldset`,{className:y,disabled:c,"aria-label":l?void 0:u,children:[l&&(0,w.jsx)(`legend`,{className:b.label,children:l}),(0,w.jsx)(`span`,{className:b.stars,children:v.map(e=>(0,w.jsxs)(`label`,{className:i(b.star,e<=_&&b.on),children:[(0,w.jsx)(`input`,{type:`radio`,className:b.input,name:d??m,value:e,checked:e===Math.round(_),"aria-label":f(e,r),onChange:()=>{g(e),n?.(e)}}),(0,w.jsx)(s,{name:e<=_?`star-filled`:`star`})]},e))})]})}var C,w,T;function E(){return(E=e((()=>{C=n(),o(),r(),x(),w=a(),T=(e,t)=>`${e} out of ${t} stars`,S.__docgenInfo={description:``,methods:[],displayName:`Rating`,props:{value:{required:!1,tsType:{name:`number`},description:`0 is unrated. Read-only ratings take fractions, e.g. 4.5.`},defaultValue:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:`Shows a rating rather than asking for one.`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Visible label; the group's name.`},"aria-label":{required:!1,tsType:{name:`string`},description:"The name when there is no visible `label`."},name:{required:!1,tsType:{name:`string`},description:`Submitted with a form.`},getValueText:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number, max: number) => string`,signature:{arguments:[{type:{name:`number`},name:`value`},{type:{name:`number`},name:`max`}],return:{name:`string`}}},description:"How each value is spoken, e.g. `(n) => `${n} stars``.",defaultValue:{value:"(value: number, max: number) => `${value} out of ${max} stars`",computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var D=t({Anatomy:()=>B,CustomText:()=>R,Default:()=>N,Disabled:()=>L,DoFiveStars:()=>V,DontTenStars:()=>H,ReadOnly:()=>P,Sizes:()=>F,Unrated:()=>I,__namedExportsOrder:()=>U,anatomyParts:()=>z,default:()=>M}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{c(),E(),O=a(),{expect:k,fn:A,userEvent:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/Controls/Rating`,tags:[`beta`],component:S,args:{label:`Rate this template`,defaultValue:3,onValueChange:A()},argTypes:{value:{description:`Controlled score. 0 is unrated. Read-only ratings take fractions, e.g. 4.5.`,control:`number`,table:{type:{summary:`number`}}},defaultValue:{description:`Starting score when uncontrolled.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},onValueChange:{description:`Called with the new score on click and arrow keys.`,control:!1,table:{type:{summary:`(value: number) => void`}}},max:{description:`How many stars.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5`}}},size:{description:"Stars of 16px (`sm`), 24px (`md`) or 32px (`lg`).",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},readOnly:{description:`Shows a rating rather than asking for one: one image, read once, fractions drawn part-filled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Dimmed, and cannot be changed.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{description:`Visible label over the stars; names the group.`,control:`text`,table:{type:{summary:`ReactNode`}}},"aria-label":{description:"The name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`}}},name:{description:`Submitted with a form, with the chosen score.`,control:`text`,table:{type:{summary:`string`}}},getValueText:{description:'How each score is spoken, e.g. `(n) => ["Easy", "Medium", "Hard"][n - 1]`.',control:!1,table:{type:{summary:`(value: number, max: number) => string`},defaultValue:{summary:`"3 out of 5 stars"`}}}},excludeStories:[`anatomyParts`]},N={play:async({args:e,canvas:t})=>{let n=t.getByRole(`group`,{name:`Rate this template`});await k(n).toBeVisible(),await k(t.getByRole(`radio`,{name:`3 out of 5 stars`})).toBeChecked(),await j.click(t.getByRole(`radio`,{name:`5 out of 5 stars`})),await k(e.onValueChange).toHaveBeenLastCalledWith(5),await j.keyboard(`{ArrowLeft}`),await k(t.getByRole(`radio`,{name:`4 out of 5 stars`})).toBeChecked(),await k(e.onValueChange).toHaveBeenLastCalledWith(4)}},P={args:{readOnly:!0,value:4.5,label:void 0},play:async({canvas:e})=>{await k(e.getByRole(`img`,{name:`4.5 out of 5 stars`})).toBeVisible(),await k(e.queryByRole(`radio`)).toBeNull();let t=e.getByRole(`img`).children[4],n=t.lastElementChild;await k(Math.round(n.getBoundingClientRect().width/t.getBoundingClientRect().width*100)).toBe(50),await k(n.querySelector(`svg`).getBoundingClientRect().width).toBe(t.getBoundingClientRect().width)}},F={render:e=>(0,O.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[`sm`,`md`,`lg`].map(t=>(0,O.jsx)(S,{...e,size:t,label:t},t))})},I={args:{defaultValue:0},play:async({canvas:e})=>{await k(e.getAllByRole(`radio`).filter(e=>e.checked)).toHaveLength(0)}},L={args:{disabled:!0},play:async({canvas:e})=>{for(let t of e.getAllByRole(`radio`))await k(t).toBeDisabled()}},R={args:{max:3,defaultValue:2,label:`Difficulty`,getValueText:e=>[`Easy`,`Medium`,`Hard`][e-1]},play:async({canvas:e})=>{await k(e.getByRole(`radio`,{name:`Medium`})).toBeChecked()}},z=[{name:`Label`,selector:`legend`,description:"Optional. Names the group; without it, pass `aria-label`."},{name:`Filled star`,selector:`fieldset > span > label:first-child`,description:`Up to the score, in the bright amber.`},{name:`Empty star`,selector:`fieldset > span > label:last-child`,description:`After the score, outlined. Each star holds an invisible radio.`}],B={tags:[`!dev`],play:async({canvasElement:e})=>{let t=await l(e,z);await k(t[0]).toHaveTextContent(`Rate this template`)}},V={},H={tags:[`!dev`],args:{max:10,defaultValue:7}},U=[`Default`,`ReadOnly`,`Sizes`,`Unrated`,`Disabled`,`CustomText`,`anatomyParts`,`Anatomy`,`DoFiveStars`,`DontTenStars`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Shows a rating: one image, fractions allowed.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Rating key={size} {...args} size={size} label={size} />)}
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 0
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('radio').filter(r => (r as HTMLInputElement).checked)).toHaveLength(0);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    for (const radio of canvas.getAllByRole('radio')) await expect(radio).toBeDisabled();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Rate this template');
  }
}`,...B.parameters?.docs?.source},description:{story:`Every part present.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source},description:{story:`Guidelines, Do: five stars, few enough to hit and to tell apart.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    max: 10,
    defaultValue: 7
  }
}`,...H.parameters?.docs?.source},description:{story:`Guidelines, Don't: ten stars are hard to hit and to tell apart.`,...H.parameters?.docs?.description}}}})))()}export{V as a,P as c,z as d,W as f,L as i,F as l,E as m,R as n,H as o,S as p,N as r,D as s,B as t,I as u};