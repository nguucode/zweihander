import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,y as r}from"./iframe-lUQ3_SCR.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{n as o,t as s}from"./icon-Dc4hTclj.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c=`_carousel_16pdd_1`,l=`_controls_16pdd_11`,u=`_button_16pdd_17`,d=`_track_16pdd_43`,f=`_slide_16pdd_59`,p=`_dots_16pdd_64`,m=`_dot_16pdd_64`,h=`_dotActive_16pdd_92`,g=`_dirIcon_16pdd_125`,_=`_srOnly_16pdd_132`,v={carousel:c,controls:l,button:u,track:d,slide:f,dots:p,dot:m,dotActive:h,dirIcon:g,srOnly:_}})))()}function b({children:e,label:t,slidesPerView:n=1,showDots:r=!0,autoPlay:i,loop:o=!1,index:c,defaultIndex:l=0,onIndexChange:u,className:d}){let f=(0,x.useId)(),p=x.Children.toArray(e),m=p.length,h=Math.max(0,m-n),g=(0,x.useRef)(null),[_,y]=(0,x.useState)(l),b=Math.min(c??_,h),[w,D]=(0,x.useState)(i!==void 0),[O,k]=(0,x.useState)(!1),A=(0,x.useSyncExternalStore)(E,T,()=>!1),j=(0,x.useCallback)(e=>{y(e),u?.(e)},[u]),M=(0,x.useCallback)(e=>{let t=o?(e+h+1)%(h+1):Math.min(Math.max(e,0),h),n=g.current,r=n?.children[t];n&&r&&n.scrollTo({left:C(n,r),behavior:A?`auto`:`smooth`}),j(t)},[h,o,A,j]),N=(0,x.useRef)(void 0);(0,x.useEffect)(()=>()=>clearTimeout(N.current),[]);let P=()=>{clearTimeout(N.current),N.current=setTimeout(F,100)},F=()=>{let e=g.current;if(!e)return;let t=e.children[0];if(!t)return;let n=t.getBoundingClientRect().width+parseFloat(getComputedStyle(e).columnGap||`0`),r=Math.min(h,Math.max(0,Math.round(Math.abs(e.scrollLeft)/n)));r!==b&&j(r)},I=(0,x.useRef)(!1);(0,x.useEffect)(()=>{if(I.current)return;I.current=!0;let e=g.current,t=e?.children[b];e&&t&&b>0&&e.scrollTo({left:C(e,t),behavior:`auto`})},[b]),(0,x.useEffect)(()=>{if(c===void 0)return;let e=g.current,t=e?.children[b];e&&t&&Math.abs(e.scrollLeft-C(e,t))>1&&e.scrollTo({left:C(e,t),behavior:A?`auto`:`smooth`})},[c,b,A]);let L=i!==void 0&&w&&!O&&!A;return(0,x.useEffect)(()=>{if(!L)return;let e=setInterval(()=>M(b>=h?0:b+1),i);return()=>clearInterval(e)},[L,i,b,h,M]),(0,S.jsxs)(`section`,{"aria-roledescription":`carousel`,"aria-label":t,className:a(v.carousel,d),style:{"--carousel-per-view":n},onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),onFocus:()=>k(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||k(!1)},children:[(0,S.jsxs)(`div`,{className:v.controls,children:[i!==void 0&&(0,S.jsx)(`button`,{type:`button`,className:v.button,"aria-label":w?`Stop automatic slide show`:`Start automatic slide show`,onClick:()=>D(!w),children:(0,S.jsx)(s,{name:w?`pause`:`play`})}),(0,S.jsx)(`button`,{type:`button`,className:v.button,"aria-label":`Previous slide`,"aria-controls":`${f}-track`,disabled:!o&&b===0,onClick:()=>M(b-1),children:(0,S.jsx)(s,{name:`chevron-left`,className:v.dirIcon})}),(0,S.jsx)(`button`,{type:`button`,className:v.button,"aria-label":`Next slide`,"aria-controls":`${f}-track`,disabled:!o&&b>=h,onClick:()=>M(b+1),children:(0,S.jsx)(s,{name:`chevron-right`,className:v.dirIcon})})]}),(0,S.jsx)(`div`,{id:`${f}-track`,ref:g,className:v.track,tabIndex:0,onScroll:P,children:p.map((e,t)=>(0,S.jsx)(`div`,{role:`group`,"aria-roledescription":`slide`,"aria-label":`${t+1} of ${m}`,className:v.slide,children:e},t))}),(0,S.jsx)(`p`,{className:v.srOnly,"aria-live":L?`off`:`polite`,"aria-atomic":`true`,children:n>1?`Slides ${b+1} to ${Math.min(b+n,m)} of ${m}`:`Slide ${b+1} of ${m}`}),r&&h>0&&(0,S.jsx)(`div`,{className:v.dots,children:Array.from({length:h+1},(e,t)=>(0,S.jsx)(`button`,{type:`button`,className:a(v.dot,t===b&&v.dotActive),"aria-label":`Slide ${t+1}`,"aria-current":t===b?`true`:void 0,"aria-controls":`${f}-track`,onClick:()=>M(t)},t))})]})}var x,S,C,w,T,E;function D(){return(D=e((()=>{x=r(),o(),i(),y(),S=n(),C=(e,t)=>t.offsetLeft-e.children[0].offsetLeft,w=`(prefers-reduced-motion: reduce)`,T=()=>window.matchMedia(w).matches,E=e=>{let t=window.matchMedia(w);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},b.__docgenInfo={description:``,methods:[],displayName:`Carousel`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`One child per slide.`},label:{required:!0,tsType:{name:`string`},description:`Names the carousel, e.g. "Featured templates". Required: there may be several on a page.`},slidesPerView:{required:!1,tsType:{name:`number`},description:`Slides in view at once.`,defaultValue:{value:`1`,computed:!1}},showDots:{required:!1,tsType:{name:`boolean`},description:`Show a dot per slide under the track.`,defaultValue:{value:`true`,computed:!1}},autoPlay:{required:!1,tsType:{name:`number`},description:`Advance every this many milliseconds. Paused on hover and focus, and never under reduced motion.`},loop:{required:!1,tsType:{name:`boolean`},description:`Previous/next wrap around at the ends.`,defaultValue:{value:`false`,computed:!1}},index:{required:!1,tsType:{name:`number`},description:``},defaultIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onIndexChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var O=t({AutoPlay:()=>U,Default:()=>R,Loop:()=>V,RightToLeft:()=>H,StartAtThird:()=>B,ThreeInView:()=>z,__namedExportsOrder:()=>W,default:()=>L}),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{D(),k=n(),{expect:A,fn:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P=[`Pitch deck`,`Weekly report`,`Product roadmap`,`Hiring plan`,`Retro board`],F=[`#e0e7ff`,`#dcfce7`,`#fef3c7`,`#fee2e2`,`#e0f2fe`],I=({title:e,i:t})=>(0,k.jsxs)(`article`,{style:{display:`grid`,alignContent:`end`,blockSize:`10rem`,padding:`var(--space-4)`,borderRadius:`var(--radius-panel)`,background:F[t%F.length],color:`#0a0a0a`},children:[(0,k.jsx)(`h3`,{style:{margin:0,fontSize:`var(--text-body-lg)`},children:e}),(0,k.jsxs)(`p`,{style:{margin:0},children:[`Template `,t+1]})]}),L={title:`Components/Data Display/Carousel`,component:b,parameters:{a11y:{test:`error`}},args:{label:`Featured templates`,onIndexChange:j(),children:P.map((e,t)=>(0,k.jsx)(I,{title:e,i:t},e))},argTypes:{children:{control:!1}},decorators:[e=>(0,k.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},R={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`region`,{name:`Featured templates`});await A(r).toHaveAttribute(`aria-roledescription`,`carousel`),await A(t.getByRole(`group`,{name:`1 of 5`})).toHaveAttribute(`aria-roledescription`,`slide`),await A(t.getByRole(`button`,{name:`Previous slide`})).toBeDisabled(),await M.click(t.getByRole(`button`,{name:`Next slide`})),await A(e.onIndexChange).toHaveBeenLastCalledWith(1),await A(n.querySelector(`[aria-live="polite"]`)).toHaveTextContent(`Slide 2 of 5`),await A(t.getByRole(`button`,{name:`Slide 2`})).toHaveAttribute(`aria-current`,`true`),await M.click(t.getByRole(`button`,{name:`Slide 5`})),await A(e.onIndexChange).toHaveBeenLastCalledWith(4),await A(t.getByRole(`button`,{name:`Next slide`})).toBeDisabled()}},z={args:{slidesPerView:3},play:async({canvas:e})=>{await A(e.getAllByRole(`button`,{name:/^Slide /})).toHaveLength(3);let t=e.getByRole(`group`,{name:`1 of 5`}).parentElement;t.scrollTo({left:t.scrollWidth}),await N(()=>A(e.getByRole(`button`,{name:`Slide 3`})).toHaveAttribute(`aria-current`,`true`)),await A(e.getByRole(`button`,{name:`Next slide`})).toBeDisabled()}},B={args:{defaultIndex:2},play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`1 of 5`}).parentElement,n=e.getByRole(`group`,{name:`3 of 5`});await N(()=>A(n.getBoundingClientRect().left).toBeCloseTo(t.getBoundingClientRect().left,0)),await A(e.getByRole(`button`,{name:`Slide 3`})).toHaveAttribute(`aria-current`,`true`)}},V={args:{loop:!0},play:async({args:e,canvas:t})=>{await M.click(t.getByRole(`button`,{name:`Previous slide`})),await A(e.onIndexChange).toHaveBeenLastCalledWith(4),await M.click(t.getByRole(`button`,{name:`Next slide`})),await A(e.onIndexChange).toHaveBeenLastCalledWith(0)}},H={decorators:[e=>(0,k.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`1 of 5`}).parentElement;await M.click(e.getByRole(`button`,{name:`Next slide`})),await N(()=>A(t.scrollLeft).toBeLessThan(-100)),await new Promise(e=>setTimeout(e,400)),await A(e.getByRole(`button`,{name:`Slide 2`})).toHaveAttribute(`aria-current`,`true`);let n=e.getByRole(`button`,{name:`Previous slide`}).querySelector(`svg`);await A(getComputedStyle(n).scale).toBe(`-1 1`)}},U={args:{autoPlay:400},decorators:[e=>(0,k.jsx)(`div`,{style:{paddingBlockStart:`var(--space-8)`},children:e()})],play:async({args:e,canvas:t,canvasElement:n})=>{let r=e.onIndexChange,i=async()=>{r.mockClear(),await new Promise(e=>setTimeout(e,900)),await A(r).not.toHaveBeenCalled()};await N(()=>A(r).toHaveBeenCalledWith(1),{timeout:2e3});let a=n.querySelector(`[aria-live]`);await A(a).toHaveAttribute(`aria-live`,`off`);let o=t.getByRole(`group`,{name:`2 of 5`});await M.hover(o),await i(),await M.unhover(o),await N(()=>A(r).toHaveBeenCalled(),{timeout:2e3}),await M.click(t.getByRole(`button`,{name:`Stop automatic slide show`})),await M.unhover(t.getByRole(`button`,{name:`Start automatic slide show`})),await A(t.getByRole(`button`,{name:`Start automatic slide show`})).toBeVisible(),await i(),await A(a).toHaveAttribute(`aria-live`,`polite`)}},W=[`Default`,`ThreeInView`,`StartAtThird`,`Loop`,`RightToLeft`,`AutoPlay`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    const region = canvas.getByRole('region', {
      name: 'Featured templates'
    });
    await expect(region).toHaveAttribute('aria-roledescription', 'carousel');
    await expect(canvas.getByRole('group', {
      name: '1 of 5'
    })).toHaveAttribute('aria-roledescription', 'slide');
    await expect(canvas.getByRole('button', {
      name: 'Previous slide'
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next slide'
    }));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1);
    // The polite line is what a screen reader hears.
    await expect(canvasElement.querySelector('[aria-live="polite"]')).toHaveTextContent('Slide 2 of 5');
    await expect(canvas.getByRole('button', {
      name: 'Slide 2'
    })).toHaveAttribute('aria-current', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Slide 5'
    }));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4);
    await expect(canvas.getByRole('button', {
      name: 'Next slide'
    })).toBeDisabled();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    slidesPerView: 3
  },
  play: async ({
    canvas
  }) => {
    // Five slides, three at a time: three stops.
    await expect(canvas.getAllByRole('button', {
      name: /^Slide /
    })).toHaveLength(3);
    // A swipe or trackpad scroll moves the track itself; the dots follow once it rests.
    const track = canvas.getByRole('group', {
      name: '1 of 5'
    }).parentElement!;
    track.scrollTo({
      left: track.scrollWidth
    });
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Slide 3'
    })).toHaveAttribute('aria-current', 'true'));
    await expect(canvas.getByRole('button', {
      name: 'Next slide'
    })).toBeDisabled();
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    defaultIndex: 2
  },
  play: async ({
    canvas
  }) => {
    const track = canvas.getByRole('group', {
      name: '1 of 5'
    }).parentElement!;
    const third = canvas.getByRole('group', {
      name: '3 of 5'
    });
    // The third slide is the one in view.
    await waitFor(() => expect(third.getBoundingClientRect().left).toBeCloseTo(track.getBoundingClientRect().left, 0));
    await expect(canvas.getByRole('button', {
      name: 'Slide 3'
    })).toHaveAttribute('aria-current', 'true');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    loop: true
  },
  play: async ({
    args,
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Previous slide'
    }));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next slide'
    }));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(0);
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div dir="rtl">{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const track = canvas.getByRole('group', {
      name: '1 of 5'
    }).parentElement!;
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next slide'
    }));
    // scrollLeft runs negative in right-to-left; the second slide is to the left.
    await waitFor(() => expect(track.scrollLeft).toBeLessThan(-100));
    await new Promise(r => setTimeout(r, 400));
    await expect(canvas.getByRole('button', {
      name: 'Slide 2'
    })).toHaveAttribute('aria-current', 'true');
    // Previous and next point the way the slides move.
    const prev = canvas.getByRole('button', {
      name: 'Previous slide'
    }).querySelector('svg')!;
    await expect(getComputedStyle(prev).scale).toBe('-1 1');
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    autoPlay: 400
  },
  // The test browser's real cursor rests at the top-left corner, and a
  // carousel under it would pause on hover. Keep the corner clear.
  decorators: [Story => <div style={{
    paddingBlockStart: 'var(--space-8)'
  }}>{Story()}</div>],
  play: async ({
    args,
    canvas,
    canvasElement
  }) => {
    const calls = args.onIndexChange as ReturnType<typeof fn>;
    const quiet = async () => {
      calls.mockClear();
      await new Promise(r => setTimeout(r, 900));
      await expect(calls).not.toHaveBeenCalled();
    };
    await waitFor(() => expect(calls).toHaveBeenCalledWith(1), {
      timeout: 2000
    });
    // While rotating, slide changes are not announced.
    const live = canvasElement.querySelector('[aria-live]')!;
    await expect(live).toHaveAttribute('aria-live', 'off');

    // Each userEvent call starts with a fresh pointer, so leave with unhover.
    const slide = canvas.getByRole('group', {
      name: '2 of 5'
    });
    await userEvent.hover(slide);
    await quiet();
    await userEvent.unhover(slide);
    await waitFor(() => expect(calls).toHaveBeenCalled(), {
      timeout: 2000
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Stop automatic slide show'
    }));
    await userEvent.unhover(canvas.getByRole('button', {
      name: 'Start automatic slide show'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Start automatic slide show'
    })).toBeVisible();
    await quiet();
    await expect(live).toHaveAttribute('aria-live', 'polite');
  }
}`,...U.parameters?.docs?.source},description:{story:`Rotates on its own; the reader can stop it, and hovering or focusing pauses it.`,...U.parameters?.docs?.description}}}})))()}export{z as a,V as i,O as n,G as o,R as r,U as t};