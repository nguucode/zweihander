import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,n as o,t as s}from"./useRenderElement-euNwqn97.js";import{n as c,t as l}from"./utils-CUvRSo4U.js";import{t as u}from"./palettes-BiV_yfbL.js";import{a as d,o as ee}from"./Theme-2soWRbQy.js";import{t as f}from"./jsx-runtime-DeHZSEgm.js";import{n as te,t as p}from"./expectAnatomy-C52ByQ6s.js";import{a as m,r as h,t as g}from"./story-helpers-EInZsLED.js";import{n as ne,t as _}from"./visuallyHidden-DpEW8Wz9.js";import{n as v,t as y}from"./useRegisteredLabelId-B2jxXoLP.js";import{t as re}from"./clamp-cF-EN37A.js";import{r as ie,t as ae}from"./formatNumber-Diqi8AEZ.js";import{n as oe}from"./valueToPercent-BpVlHomU.js";function b(){let e=x.useContext(S);if(e===void 0)throw Error(a(51));return e}var x,S;function C(){return(C=t((()=>{i(),x=e(r(),1),S=x.createContext(void 0)})))()}var se,ce,le;function ue(){return(ue=t((()=>{se=`data-complete`,ce=`data-indeterminate`,le=`data-progressing`})))()}var w;function T(){return(T=t((()=>{ue(),w={status(e){return e===`progressing`?{[le]:``}:e===`complete`?{[se]:``}:e===`indeterminate`?{[ce]:``}:null}}})))()}var E,D,de;function fe(){return(fe=t((()=>{E=e(r(),1),_(),ie(),s(),C(),T(),D=f(),de=E.forwardRef(function(e,t){let{format:n,getAriaValueText:r,locale:i,max:a=100,min:s=0,value:c,render:l,className:u,children:d,style:ee,...f}=e,[te,p]=E.useState(),m=`indeterminate`,h=null,g=null,_=``,v=`indeterminate progress`;if(c!=null&&Number.isFinite(c)){let e=oe(c,s,a);h=re(Number.isNaN(e)?0:e,0,100),g=re(c,s,a),m=g===a?`complete`:`progressing`,_=n?ae(g,i,n):ae(h/100,i,{style:`percent`}),v=_}let y=E.useMemo(()=>({status:m}),[m]),ie={"aria-labelledby":te,"aria-valuemax":a,"aria-valuemin":s,"aria-valuenow":g??void 0,"aria-valuetext":r?r(_,c):v,role:`progressbar`,children:(0,D.jsxs)(E.Fragment,{children:[d,(0,D.jsx)(`span`,{role:`presentation`,style:ne,children:`x`})]})},b=E.useMemo(()=>({formattedValue:_,percentageValue:h,setLabelId:p,state:y,value:c}),[_,h,p,y,c]),x=o(`div`,e,{state:y,ref:t,props:[ie,f],stateAttributesMapping:w});return(0,D.jsx)(S.Provider,{value:b,children:x})})})))()}var O,pe;function me(){return(me=t((()=>{O=e(r(),1),s(),C(),T(),pe=O.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:s}=b();return o(`div`,e,{state:s,ref:t,props:a,stateAttributesMapping:w})})})))()}var he,ge;function _e(){return(_e=t((()=>{he=e(r(),1),s(),C(),T(),ge=he.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{percentageValue:s,state:c}=b(),l=s==null?{}:{insetInlineStart:0,height:`inherit`,width:`${s}%`};return o(`div`,e,{state:c,ref:t,props:[{style:l},a],stateAttributesMapping:w})})})))()}var ve,ye;function be(){return(be=t((()=>{ve=e(r(),1),s(),C(),T(),ye=ve.forwardRef(function(e,t){let{className:n,render:r,children:i,style:a,...s}=e,{value:c,formattedValue:l,state:u}=b(),d=u.status===`indeterminate`;return o(`span`,e,{state:u,ref:t,props:[{"aria-hidden":!0,children:typeof i==`function`?i(d?`indeterminate`:l,c):d?null:l},s],stateAttributesMapping:w})})})))()}var k,A;function j(){return(j=t((()=>{k=e(r(),1),s(),y(),C(),T(),A=k.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...s}=e,{setLabelId:c,state:l}=b(),u=v(a,c);return o(`span`,e,{state:l,ref:t,props:[{id:u,role:`presentation`},s],stateAttributesMapping:w})})})))()}var M,N,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,P;function Pe(){return(Pe=t((()=>{M=`_root_vnt8i_1`,N=`_sm_vnt8i_13`,xe=`_md_vnt8i_16`,Se=`_lg_vnt8i_19`,Ce=`_primary_vnt8i_27`,we=`_accent_vnt8i_30`,Te=`_secondary_vnt8i_33`,Ee=`_destructive_vnt8i_36`,De=`_label_vnt8i_40`,Oe=`_row_vnt8i_44`,ke=`_track_vnt8i_50`,Ae=`_rounded_vnt8i_58`,je=`_indicator_vnt8i_59`,Me=`_slide_vnt8i_1`,Ne=`_value_vnt8i_95`,P={root:M,sm:N,md:xe,lg:Se,primary:Ce,accent:we,secondary:Te,destructive:Ee,label:De,row:Oe,track:ke,rounded:Ae,indicator:je,slide:Me,value:Ne}})))()}function F({value:e=0,max:t=100,size:n=`md`,isRounded:r=!1,variant:i=`primary`,isIndeterminate:a=!1,showValueLabel:o=!1,label:s,className:c,"aria-label":u,...d}){return(0,I.jsxs)(de,{...d,value:a?null:e,max:t,"aria-label":s?void 0:u,className:l(P.root,P[n],P[i],r&&P.rounded,c),children:[s&&(0,I.jsx)(A,{className:P.label,children:s}),(0,I.jsxs)(`div`,{className:P.row,children:[(0,I.jsx)(pe,{className:P.track,children:(0,I.jsx)(ge,{className:P.indicator})}),o&&!a&&(0,I.jsx)(ye,{className:P.value})]})]})}var I;function L(){return(L=t((()=>{fe(),j(),me(),_e(),be(),c(),Pe(),I=f(),F.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:"The spec's `maxValue`.",defaultValue:{value:`100`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},isRounded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'accent' | 'secondary' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'accent'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'destructive'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},isIndeterminate:{required:!1,tsType:{name:`boolean`},description:`Progress is happening but how much is unknown: a sliding bar.`,defaultValue:{value:`false`,computed:!1}},showValueLabel:{required:!1,tsType:{name:`boolean`},description:`Show the value ("70%") after the bar.`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`A visible label above the bar; also its accessible name.`},"aria-label":{required:!1,tsType:{name:`string`},description:"The accessible name when there is no visible `label`."},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})))()}var Fe=n({Anatomy:()=>X,Default:()=>V,DoNameTheTask:()=>Z,DontBareBar:()=>Q,FillContrast:()=>$,Indeterminate:()=>q,Max:()=>K,Sizes:()=>G,TopList:()=>H,ValueLabel:()=>U,Variants:()=>W,WithoutVisibleLabel:()=>J,__namedExportsOrder:()=>Le,anatomyParts:()=>Y,default:()=>Ie}),R,z,Ie,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Le;function Re(){return(Re=t((()=>{te(),ee(),h(),L(),R=f(),{expect:z}=__STORYBOOK_MODULE_TEST__,Ie={title:`Components/Loaders/ProgressBar`,tags:[`beta`],component:F,argTypes:{value:{description:"How far along, out of `max`. Ignored while `isIndeterminate`.",control:{type:`range`,min:0,max:100},table:{type:{summary:`number`},defaultValue:{summary:`0`}}},max:{description:"The value at which the task is done. The spec calls it `maxValue`.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`100`}}},size:{description:"Track height: 4px (`sm`), 8px (`md`) or 12px (`lg`).",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},variant:{description:"Colour of the fill. `destructive` for a task that is failing or about to run out, such as storage nearly full.",control:`inline-radio`,options:[`primary`,`accent`,`secondary`,`destructive`],table:{type:{summary:`'primary' | 'accent' | 'secondary' | 'destructive'`},defaultValue:{summary:`'primary'`}}},isRounded:{description:`Pill ends on the track and the fill.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isIndeterminate:{description:`Progress is happening but how much is unknown: a third of the track slides across.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},showValueLabel:{description:`Shows the percentage after the bar, in tabular figures. Hidden while indeterminate.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},label:{description:`A visible label above the bar; also its accessible name.`,control:`text`,table:{type:{summary:`ReactNode`}}},"aria-label":{description:"The accessible name when there is no visible `label`.",control:`text`,table:{type:{summary:`string`}}}},args:{value:70,label:`Uploading`},excludeStories:[`anatomyParts`],decorators:[e=>(0,R.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:e()})]},B={display:`grid`,gap:`var(--space-4)`},V={play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Uploading`});await z(t).toHaveAttribute(`aria-valuenow`,`70`),await z(t).toHaveAttribute(`aria-valuemax`,`100`);let n=document.createElement(`span`);n.style.transitionDuration=`var(--duration-slow)`,t.append(n);let r=t.querySelector(`[role="progressbar"] > div > :first-child > *`);await z(getComputedStyle(r).transitionDuration).toBe(getComputedStyle(n).transitionDuration),n.remove()}},H={render:()=>{let e=[[`/`,154],[`/api/v1/invoices`,131],[`/dashboard`,43],[`/login`,21]];return(0,R.jsx)(`ol`,{style:{display:`grid`,gap:`var(--space-cluster)`,margin:0,padding:0,listStyle:`none`},children:e.map(([t,n])=>(0,R.jsxs)(`li`,{style:{display:`grid`,gridTemplateColumns:`1fr 8rem 3rem`,gap:`var(--space-cluster)`,alignItems:`center`},children:[(0,R.jsx)(`span`,{children:t}),(0,R.jsx)(F,{value:n,max:e[0][1],size:`sm`,isRounded:!0,"aria-label":t}),(0,R.jsx)(`span`,{style:{textAlign:`end`,fontVariantNumeric:`tabular-nums`},children:n})]},t))})},play:async({canvas:e})=>{await z(e.getByRole(`progressbar`,{name:`/`})).toHaveAttribute(`aria-valuenow`,`154`),await z(e.getByRole(`progressbar`,{name:`/login`})).toHaveAttribute(`aria-valuemax`,`154`)}},U={args:{showValueLabel:!0},play:async({canvas:e})=>{let t=e.getByText(`70%`);await z(t).toBeVisible();let n=document.createElement(`span`);n.style.color=`var(--muted-foreground)`,t.after(n),await z(getComputedStyle(t).color).toBe(getComputedStyle(n).color),n.remove()}},W={render:e=>(0,R.jsx)(`div`,{style:B,children:[`primary`,`accent`,`secondary`,`destructive`].map(t=>(0,R.jsx)(F,{...e,variant:t,label:t,showValueLabel:!0},t))})},G={render:e=>(0,R.jsx)(`div`,{style:B,children:[`sm`,`md`,`lg`].map(t=>(0,R.jsx)(F,{...e,size:t,label:t,isRounded:!0},t))})},K={args:{value:3,max:5,showValueLabel:!0,label:`Steps done`},play:async({canvas:e})=>{await z(e.getByRole(`progressbar`)).toHaveAttribute(`aria-valuemax`,`5`),await z(e.getByText(`60%`)).toBeVisible()}},q={args:{isIndeterminate:!0,label:`Connecting`},play:async({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Connecting`});await z(t).not.toHaveAttribute(`aria-valuenow`);let n=t.querySelector(`:scope > div > :first-child > *`);await z(getComputedStyle(n).animationDuration).toBe(`1.4s`),await z(m(`prefers-reduced-motion: reduce`,n).map(e=>e.style.animationDuration)).toContain(`4s`)}},J={args:{label:void 0,"aria-label":`Storage used`},play:async({canvas:e})=>{await z(e.getByRole(`progressbar`,{name:`Storage used`})).toBeVisible()}},Y=[{name:`Label`,selector:`[role="progressbar"] > :first-child`,description:`Optional, above the bar. Names the progressbar.`},{name:`Track`,selector:`[role="progressbar"] > div > :first-child`,description:`The full length, --secondary.`},{name:`Indicator`,selector:`[role="progressbar"] > div > :first-child > *`,description:`The filled share, coloured by variant. A sliding third when indeterminate.`},{name:`Value label`,selector:`[role="progressbar"] > div > :last-child`,description:`Optional, showValueLabel: the percentage after the bar.`}],X={tags:[`!dev`],args:{showValueLabel:!0,size:`lg`},decorators:[e=>(0,R.jsx)(`div`,{style:{inlineSize:`20rem`},children:e()})],play:async({canvasElement:e})=>{let t=await p(e,Y);await z(t[0]).toHaveTextContent(`Uploading`),await z(t[3]).toHaveTextContent(`70%`)}},Z={args:{label:`Uploading report.pdf`,showValueLabel:!0}},Q={tags:[`!dev`],args:{label:void 0,"aria-label":`Uploading report.pdf`,showValueLabel:!0}},$={decorators:[],render:()=>(0,R.jsx)(`div`,{children:[`light`,`dark`].map(e=>(0,R.jsx)(d,{appearance:e,style:{background:`var(--background)`,padding:8},children:u.map(t=>(0,R.jsx)(d,{accentColor:t,style:{display:`flex`,gap:4},children:[`primary`,`accent`,`secondary`,`destructive`].map(n=>(0,R.jsx)(F,{size:`sm`,variant:n,value:50,"aria-label":`${e} ${t} ${n}`},n))},t))},e))}),play:async({canvasElement:e})=>{let t=[];for(let n of e.querySelectorAll(`[role="progressbar"]`)){let e=getComputedStyle(n.parentElement.parentElement).backgroundColor,r=n.querySelector(`:scope > div > :first-child`),i=getComputedStyle(r.firstElementChild).backgroundColor,a=g(i,e,getComputedStyle(r).backgroundColor);a<3&&t.push(`${n.getAttribute(`aria-label`)}: ${a.toFixed(2)}`)}await z(t).toEqual([])}},Le=[`Default`,`TopList`,`ValueLabel`,`Variants`,`Sizes`,`Max`,`Indeterminate`,`WithoutVisibleLabel`,`anatomyParts`,`Anatomy`,`DoNameTheTask`,`DontBareBar`,`FillContrast`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('progressbar', {
      name: 'Uploading'
    });
    await expect(bar).toHaveAttribute('aria-valuenow', '70');
    await expect(bar).toHaveAttribute('aria-valuemax', '100');
    // The fill eases on --duration-slow, which reduced motion sets to 0ms.
    const probe = document.createElement('span');
    probe.style.transitionDuration = 'var(--duration-slow)';
    bar.append(probe);
    const indicator = bar.querySelector('[role="progressbar"] > div > :first-child > *')!;
    await expect(getComputedStyle(indicator).transitionDuration).toBe(getComputedStyle(probe).transitionDuration);
    probe.remove();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rows = [['/', 154], ['/api/v1/invoices', 131], ['/dashboard', 43], ['/login', 21]] as const;
    return <ol style={{
      display: 'grid',
      gap: 'var(--space-cluster)',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }}>
        {rows.map(([path, count]) => <li key={path} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 8rem 3rem',
        gap: 'var(--space-cluster)',
        alignItems: 'center'
      }}>
            <span>{path}</span>
            <ProgressBar value={count} max={rows[0][1]} size="sm" isRounded aria-label={path} />
            <span style={{
          textAlign: 'end',
          fontVariantNumeric: 'tabular-nums'
        }}>{count}</span>
          </li>)}
      </ol>;
  },
  play: async ({
    canvas
  }) => {
    // The largest row fills its bar; the rest are a share of it, not of the total.
    await expect(canvas.getByRole('progressbar', {
      name: '/'
    })).toHaveAttribute('aria-valuenow', '154');
    await expect(canvas.getByRole('progressbar', {
      name: '/login'
    })).toHaveAttribute('aria-valuemax', '154');
  }
}`,...H.parameters?.docs?.source},description:{story:`A top-N list ("Top paths", "Top countries") is not a chart: one bar per row,
each measured against the largest, the count beside it.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    showValueLabel: true
  },
  play: async ({
    canvas
  }) => {
    const value = canvas.getByText('70%');
    await expect(value).toBeVisible();
    // The value label is --muted-foreground (read back through a probe beside it).
    const probe = document.createElement('span');
    probe.style.color = 'var(--muted-foreground)';
    value.after(probe);
    await expect(getComputedStyle(value).color).toBe(getComputedStyle(probe).color);
    probe.remove();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} {...args} variant={variant} label={variant} showValueLabel />)}
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={stack}>
      {(['sm', 'md', 'lg'] as const).map(size => <ProgressBar key={size} {...args} size={size} label={size} isRounded />)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    max: 5,
    showValueLabel: true,
    label: 'Steps done'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuemax', '5');
    await expect(canvas.getByText('60%')).toBeVisible();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    label: 'Connecting'
  },
  play: async ({
    canvas
  }) => {
    // No value to report: aria-valuenow is absent, not 0.
    const bar = canvas.getByRole('progressbar', {
      name: 'Connecting'
    });
    await expect(bar).not.toHaveAttribute('aria-valuenow');
    // Reduced motion slows the slide to 4s a pass. A play cannot set
    // prefers-reduced-motion, so read the rule that would apply.
    const indicator = bar.querySelector(':scope > div > :first-child > *')!;
    await expect(getComputedStyle(indicator).animationDuration).toBe('1.4s');
    await expect(mediaRules('prefers-reduced-motion: reduce', indicator).map(r => r.style.animationDuration)).toContain('4s');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Storage used'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('progressbar', {
      name: 'Storage used'
    })).toBeVisible();
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    showValueLabel: true,
    size: 'lg'
  },
  // The docs stage shrink-wraps its example; a bar needs a width to show its fill.
  decorators: [Story => <div style={{
    inlineSize: '20rem'
  }}>{Story()}</div>],
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toHaveTextContent('Uploading');
    await expect(found[3]).toHaveTextContent('70%');
  }
}`,...X.parameters?.docs?.source},description:{story:`Every part present.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Uploading report.pdf',
    showValueLabel: true
  }
}`,...Z.parameters?.docs?.source},description:{story:`Guidelines, Do: the label says what is in progress.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: undefined,
    'aria-label': 'Uploading report.pdf',
    showValueLabel: true
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Don't: a bare bar, with only an aria-label, leaves sighted readers guessing.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <div>
      {(['light', 'dark'] as const).map(mode => <Theme key={mode} appearance={mode} style={{
      background: 'var(--background)',
      padding: 8
    }}>
          {ACCENT_COLORS.map(accent => <Theme key={accent} accentColor={accent} style={{
        display: 'flex',
        gap: 4
      }}>
              {(['primary', 'accent', 'secondary', 'destructive'] as const).map(variant => <ProgressBar key={variant} size="sm" variant={variant} value={50} aria-label={\`\${mode} \${accent} \${variant}\`} />)}
            </Theme>)}
        </Theme>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const failures: string[] = [];
    for (const bar of canvasElement.querySelectorAll<HTMLElement>('[role="progressbar"]')) {
      const page = getComputedStyle(bar.parentElement!.parentElement!).backgroundColor;
      const track = bar.querySelector(':scope > div > :first-child')!;
      const fill = getComputedStyle(track.firstElementChild!).backgroundColor;
      const value = contrast(fill, page, getComputedStyle(track).backgroundColor);
      if (value < 3) failures.push(\`\${bar.getAttribute('aria-label')}: \${value.toFixed(2)}\`);
    }
    await expect(failures).toEqual([]);
  }
}`,...$.parameters?.docs?.source},description:{story:`The fill clears 3:1 on the track for every variant, under all seventeen accents, in both modes.`,...$.parameters?.docs?.description}}}})))()}export{K as a,U as c,Y as d,Re as f,q as i,W as l,L as m,Z as n,Fe as o,F as p,Q as r,G as s,X as t,J as u};