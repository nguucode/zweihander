import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./utils-CUvRSo4U.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./icon-C9aTyDDd.js";import{n as c,t as l}from"./expectAnatomy-C52ByQ6s.js";import{a as u,r as d}from"./story-helpers-EInZsLED.js";var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{f=`_carousel_13zzd_1`,p=`_controls_13zzd_11`,m=`_button_13zzd_17`,h=`_track_13zzd_43`,g=`_slide_13zzd_59`,_=`_dots_13zzd_64`,v=`_dot_13zzd_64`,y=`_dotActive_13zzd_92`,b=`_dirIcon_13zzd_119`,x=`_srOnly_13zzd_126`,S={carousel:f,controls:p,button:m,track:h,slide:g,dots:_,dot:v,dotActive:y,dirIcon:b,srOnly:x}})))()}function w({children:e,label:t,slidesPerView:n=1,showDots:r=!0,autoPlay:a,loop:o=!1,index:c,defaultIndex:l=0,onIndexChange:u,className:d}){let f=(0,T.useId)(),p=T.Children.toArray(e),m=p.length,h=Math.max(0,m-n),g=(0,T.useRef)(null),[_,v]=(0,T.useState)(l),y=Math.min(c??_,h),[b,x]=(0,T.useState)(a!==void 0),[C,w]=(0,T.useState)(!1),O=(0,T.useSyncExternalStore)(A,k,()=>!1),j=(0,T.useCallback)(e=>{v(e),u?.(e)},[u]),M=(0,T.useRef)(null),N=(0,T.useCallback)((e,t)=>{let n=e.children[t];n&&(M.current=t,e.scrollTo({left:D(e,n),behavior:O?`auto`:`smooth`}))},[O]),P=()=>{M.current=null},F=(0,T.useCallback)(e=>{let t=o?(e+h+1)%(h+1):Math.min(Math.max(e,0),h);g.current&&N(g.current,t),j(t)},[h,o,j,N]),I=(0,T.useRef)(void 0);(0,T.useEffect)(()=>()=>clearTimeout(I.current),[]);let L=typeof window<`u`&&`onscrollend`in window,R=()=>{L||(clearTimeout(I.current),I.current=setTimeout(z,100))},z=()=>{let e=g.current;if(!e)return;let t=e.children[0];if(!t)return;let n=t.getBoundingClientRect().width+parseFloat(getComputedStyle(e).columnGap||`0`),r=Math.min(h,Math.max(0,Math.round(Math.abs(e.scrollLeft)/n)));if(M.current!==null){if(r!==M.current)return;M.current=null}r!==y&&j(r)},B=(0,T.useRef)(!1);(0,T.useEffect)(()=>{if(B.current)return;B.current=!0;let e=g.current,t=e?.children[y];e&&t&&y>0&&e.scrollTo({left:D(e,t),behavior:`auto`})},[y]),(0,T.useEffect)(()=>{if(c===void 0)return;let e=g.current,t=e?.children[y];e&&t&&Math.abs(e.scrollLeft-D(e,t))>1&&N(e,y)},[c,y,N]);let V=a!==void 0&&b&&!C&&!O;return(0,T.useEffect)(()=>{if(!V)return;let e=setInterval(()=>F(y>=h?0:y+1),a);return()=>clearInterval(e)},[V,a,y,h,F]),(0,E.jsxs)(`section`,{"aria-roledescription":`carousel`,"aria-label":t,className:i(S.carousel,d),style:{"--carousel-per-view":n},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),onFocus:()=>w(!0),onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||w(!1)},children:[(0,E.jsxs)(`div`,{className:S.controls,children:[a!==void 0&&(0,E.jsx)(`button`,{type:`button`,className:S.button,"aria-label":b?`Stop automatic slide show`:`Start automatic slide show`,onClick:()=>x(!b),children:(0,E.jsx)(s,{name:b?`pause`:`play`})}),(0,E.jsx)(`button`,{type:`button`,className:S.button,"aria-label":`Previous slide`,"aria-controls":`${f}-track`,disabled:!o&&y===0,onClick:()=>F(y-1),children:(0,E.jsx)(s,{name:`chevron-left`,className:S.dirIcon})}),(0,E.jsx)(`button`,{type:`button`,className:S.button,"aria-label":`Next slide`,"aria-controls":`${f}-track`,disabled:!o&&y>=h,onClick:()=>F(y+1),children:(0,E.jsx)(s,{name:`chevron-right`,className:S.dirIcon})})]}),(0,E.jsx)(`div`,{id:`${f}-track`,ref:g,className:S.track,tabIndex:0,onScroll:R,onPointerDown:P,onWheel:P,onKeyDown:P,onScrollEnd:L?z:void 0,children:p.map((e,t)=>(0,E.jsx)(`div`,{role:`group`,"aria-roledescription":`slide`,"aria-label":`${t+1} of ${m}`,className:S.slide,children:e},t))}),(0,E.jsx)(`p`,{className:S.srOnly,"aria-live":V?`off`:`polite`,"aria-atomic":`true`,children:n>1?`Slides ${y+1} to ${Math.min(y+n,m)} of ${m}`:`Slide ${y+1} of ${m}`}),r&&h>0&&(0,E.jsx)(`div`,{className:S.dots,children:Array.from({length:h+1},(e,t)=>(0,E.jsx)(`button`,{type:`button`,className:i(S.dot,t===y&&S.dotActive),"aria-label":`Slide ${t+1}`,"aria-current":t===y?`true`:void 0,"aria-controls":`${f}-track`,onClick:()=>F(t)},t))})]})}var T,E,D,O,k,A;function j(){return(j=e((()=>{T=n(),o(),r(),C(),E=a(),D=(e,t)=>t.offsetLeft-e.children[0].offsetLeft,O=`(prefers-reduced-motion: reduce)`,k=()=>window.matchMedia(O).matches,A=e=>{let t=window.matchMedia(O);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},w.__docgenInfo={description:``,methods:[],displayName:`Carousel`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`One child per slide.`},label:{required:!0,tsType:{name:`string`},description:`Names the carousel, e.g. "Featured templates". Required: there may be several on a page.`},slidesPerView:{required:!1,tsType:{name:`number`},description:`Slides in view at once.`,defaultValue:{value:`1`,computed:!1}},showDots:{required:!1,tsType:{name:`boolean`},description:`Show a dot per slide under the track.`,defaultValue:{value:`true`,computed:!1}},autoPlay:{required:!1,tsType:{name:`number`},description:`Advance every this many milliseconds. Paused on hover and focus, and never under reduced motion.`},loop:{required:!1,tsType:{name:`boolean`},description:`Previous/next wrap around at the ends.`,defaultValue:{value:`false`,computed:!1}},index:{required:!1,tsType:{name:`number`},description:``},defaultIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onIndexChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var M=t({Anatomy:()=>Q,AtEnd:()=>Y,AutoPlay:()=>J,AutoPlayReducedMotion:()=>X,Default:()=>H,DontHideImportant:()=>$,InterruptedScroll:()=>K,Loop:()=>G,RightToLeft:()=>q,StartAtThird:()=>W,ThreeInView:()=>U,__namedExportsOrder:()=>te,anatomyParts:()=>Z,default:()=>V}),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ee,$,te;function ne(){return(ne=e((()=>{c(),d(),j(),N=a(),{expect:P,fn:F,userEvent:I,waitFor:L}=__STORYBOOK_MODULE_TEST__,R=[`Pitch deck`,`Weekly report`,`Product roadmap`,`Hiring plan`,`Retro board`],z=[`#e0e7ff`,`#dcfce7`,`#fef3c7`,`#fee2e2`,`#e0f2fe`],B=({title:e,i:t,note:n=`Template ${t+1}`})=>(0,N.jsxs)(`article`,{style:{display:`grid`,alignContent:`end`,blockSize:`10rem`,padding:`var(--space-4)`,borderRadius:`var(--radius-panel)`,background:z[t%z.length],color:`#0a0a0a`},children:[(0,N.jsx)(`h3`,{style:{margin:0,fontSize:`var(--text-body-lg)`},children:e}),(0,N.jsx)(`p`,{style:{margin:0},children:n})]}),V={title:`Components/Data Display/Carousel`,tags:[`beta`],component:w,args:{label:`Featured templates`,onIndexChange:F(),children:R.map((e,t)=>(0,N.jsx)(B,{title:e,i:t},e))},argTypes:{children:{description:`One child per slide. Every slide stays in the DOM.`,control:!1,table:{type:{summary:`ReactNode`}}},label:{description:`Names the carousel, e.g. "Featured templates". Required: there may be several on a page.`,control:`text`,table:{type:{summary:`string`}}},slidesPerView:{description:`Slides in view at once. With three in view, five slides have three stops (1-3, 2-4, 3-5).`,control:{type:`number`,min:1},table:{type:{summary:`number`},defaultValue:{summary:`1`}}},showDots:{description:`A dot per stop under the track. Hidden anyway when everything fits in one stop.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},loop:{description:`Previous and next wrap around at the ends instead of being disabled there.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoPlay:{description:`Advance every this many milliseconds. Adds a stop/start button; paused on hover and focus, and never runs under reduced motion.`,control:`number`,table:{type:{summary:`number`}}},index:{description:"Controlled: the first slide in view. Pair with `onIndexChange`.",control:`number`,table:{type:{summary:`number`}}},defaultIndex:{description:`Uncontrolled starting slide. The track jumps there on mount, without a scroll animation.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},onIndexChange:{description:`Called with the new index for previous and next, dots, swipes and the timer. A swipe reports once the track comes to rest.`,control:!1,table:{type:{summary:`(index: number) => void`}}},className:{description:"Class on the outer `<section>`.",control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,N.jsx)(`div`,{style:{maxInlineSize:`36rem`},children:e()})]},H={play:async({args:e,canvas:t,canvasElement:n})=>{let r=t.getByRole(`region`,{name:`Featured templates`});await P(r).toHaveAttribute(`aria-roledescription`,`carousel`),await P(t.getByRole(`group`,{name:`1 of 5`})).toHaveAttribute(`aria-roledescription`,`slide`);let i=t.getAllByRole(`group`);await P(i).toHaveLength(5),await P(i[0].parentElement).toHaveAttribute(`tabindex`,`0`);for(let e of t.getAllByRole(`button`))await P(e.tagName).toBe(`BUTTON`);for(let e of[t.getByRole(`button`,{name:`Next slide`}),t.getByRole(`button`,{name:`Slide 1`})])await P(u(`pointer: coarse`,e,`::before`).map(e=>[e.style.inlineSize,e.style.blockSize])[0]).toEqual([`var(--target-coarse)`,`var(--target-coarse)`]);await P(t.getByRole(`button`,{name:`Previous slide`})).toBeDisabled(),await I.click(t.getByRole(`button`,{name:`Next slide`})),await P(e.onIndexChange).toHaveBeenLastCalledWith(1),await P(n.querySelector(`[aria-live="polite"]`)).toHaveTextContent(`Slide 2 of 5`),await P(t.getByRole(`button`,{name:`Slide 2`})).toHaveAttribute(`aria-current`,`true`),await I.click(t.getByRole(`button`,{name:`Slide 5`})),await P(e.onIndexChange).toHaveBeenLastCalledWith(4),await P(t.getByRole(`button`,{name:`Next slide`})).toBeDisabled()}},U={args:{slidesPerView:3},play:async({canvas:e,canvasElement:t})=>{await P(e.getAllByRole(`button`,{name:/^Slide /})).toHaveLength(3);let n=e.getByRole(`group`,{name:`1 of 5`}).parentElement;n.scrollTo({left:n.scrollWidth}),await L(()=>P(e.getByRole(`button`,{name:`Slide 3`})).toHaveAttribute(`aria-current`,`true`)),await P(e.getByRole(`button`,{name:`Next slide`})).toBeDisabled(),await P(t.querySelector(`[aria-live="polite"]`)).toHaveTextContent(`Slides 3 to 5 of 5`)}},W={args:{defaultIndex:2},play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`1 of 5`}).parentElement,n=e.getByRole(`group`,{name:`3 of 5`});await L(()=>P(n.getBoundingClientRect().left).toBeCloseTo(t.getBoundingClientRect().left,0)),await P(e.getByRole(`button`,{name:`Slide 3`})).toHaveAttribute(`aria-current`,`true`)}},G={args:{loop:!0},play:async({args:e,canvas:t})=>{await P(t.getByRole(`button`,{name:`Previous slide`})).toBeEnabled(),await I.click(t.getByRole(`button`,{name:`Previous slide`})),await P(e.onIndexChange).toHaveBeenLastCalledWith(4);let n=t.getByRole(`button`,{name:`Next slide`});await I.click(n),await P(e.onIndexChange).toHaveBeenLastCalledWith(0);let r=t.getByRole(`group`,{name:`1 of 5`}).parentElement,i=async e=>{await L(()=>P(t.getByRole(`button`,{name:`Slide ${e}`})).toHaveAttribute(`aria-current`,`true`));let n=NaN;await L(()=>{let e=r.scrollLeft,t=e===n;n=e,P(t).toBe(!0)},{interval:150,timeout:3e3})};await P(n).toHaveFocus(),await i(1),await I.keyboard(`{Enter}`),await P(e.onIndexChange).toHaveBeenLastCalledWith(1),await i(2),await I.keyboard(` `),await P(e.onIndexChange).toHaveBeenLastCalledWith(2),await i(3),await I.tab(),await P(r).toHaveFocus(),await I.tab(),await P(t.getByRole(`button`,{name:`Slide 1`})).toHaveFocus()}},K={tags:[`!dev`],play:async({args:e,canvas:t})=>{let n=t.getByRole(`group`,{name:`1 of 5`}).parentElement;t.getByRole(`button`,{name:`Next slide`}).click(),await P(e.onIndexChange).toHaveBeenLastCalledWith(1),n.dispatchEvent(new Event(`scrollend`)),await P(e.onIndexChange).toHaveBeenLastCalledWith(1),await L(()=>P(Math.abs(n.scrollLeft)).toBeGreaterThan(100)),await new Promise(e=>setTimeout(e,600)),await P(e.onIndexChange).toHaveBeenLastCalledWith(1),await P(t.getByRole(`button`,{name:`Slide 2`})).toHaveAttribute(`aria-current`,`true`)}},q={decorators:[e=>(0,N.jsx)(`div`,{dir:`rtl`,children:e()})],play:async({canvas:e})=>{let t=e.getByRole(`group`,{name:`1 of 5`}).parentElement;await I.click(e.getByRole(`button`,{name:`Next slide`})),await L(()=>P(t.scrollLeft).toBeLessThan(-100)),await new Promise(e=>setTimeout(e,400)),await P(e.getByRole(`button`,{name:`Slide 2`})).toHaveAttribute(`aria-current`,`true`);let n=e.getByRole(`button`,{name:`Previous slide`}).querySelector(`svg`);await P(getComputedStyle(n).scale).toBe(`-1 1`)}},J={args:{autoPlay:400},decorators:[e=>(0,N.jsx)(`div`,{style:{paddingBlockStart:`var(--space-8)`},children:e()})],play:async({args:e,canvas:t,canvasElement:n})=>{let r=e.onIndexChange,i=async()=>{r.mockClear(),await new Promise(e=>setTimeout(e,900)),await P(r).not.toHaveBeenCalled()};await L(()=>P(r).toHaveBeenCalledWith(1),{timeout:2e3});let a=t.getByRole(`region`,{name:`Featured templates`});await P(a.querySelector(`button`)).toHaveAccessibleName(`Stop automatic slide show`);let o=n.querySelector(`[aria-live]`);await P(o).toHaveAttribute(`aria-live`,`off`);let s=t.getByRole(`group`,{name:`2 of 5`});await I.hover(s),await i(),await I.unhover(s),await L(()=>P(r).toHaveBeenCalled(),{timeout:2e3});let c=s.parentElement;c.focus({preventScroll:!0}),await new Promise(e=>setTimeout(e,600)),await i(),c.blur(),await L(()=>P(r).toHaveBeenCalled(),{timeout:2e3}),await I.click(t.getByRole(`button`,{name:`Stop automatic slide show`})),await I.unhover(t.getByRole(`button`,{name:`Start automatic slide show`})),await P(t.getByRole(`button`,{name:`Start automatic slide show`})).toBeVisible(),await i(),await P(o).toHaveAttribute(`aria-live`,`polite`)}},Y={args:{defaultIndex:4},play:async({canvas:e})=>{await P(e.getByRole(`button`,{name:`Next slide`})).toBeDisabled(),await P(e.getByRole(`button`,{name:`Previous slide`})).toBeEnabled(),await P(e.getByRole(`button`,{name:`Slide 5`})).toHaveAttribute(`aria-current`,`true`)}},X={tags:[`!dev`],args:{autoPlay:200},beforeEach:()=>{let e=window.matchMedia;return window.matchMedia=t=>t.includes(`prefers-reduced-motion`)?{matches:!0,media:t,addEventListener:()=>{},removeEventListener:()=>{}}:e.call(window,t),()=>{window.matchMedia=e}},play:async({args:e,canvasElement:t})=>{await new Promise(e=>setTimeout(e,900)),await P(e.onIndexChange).not.toHaveBeenCalled(),await P(t.querySelector(`[aria-live]`)).toHaveAttribute(`aria-live`,`polite`)}},Z=[{name:`Stop/start`,selector:`button[aria-label$="automatic slide show"]`,description:`Only with autoPlay, and then the first control: stops and restarts the rotation.`},{name:`Previous`,selector:`button[aria-label="Previous slide"]`,description:`Disabled at the first stop unless loop. The chevron is mirrored right to left.`},{name:`Next`,selector:`button[aria-label="Next slide"]`,description:`Disabled at the last stop unless loop.`},{name:`Track`,selector:`[tabindex="0"]:has(> [aria-roledescription="slide"])`,description:`A horizontal scroller with snap points. Swipe, trackpad and, once focused, arrow keys scroll it natively.`},{name:`Slide`,selector:`[aria-roledescription="slide"]`,description:`One child, a group labelled "1 of 5".`},{name:`Dots`,selector:`div:has(> button[aria-current])`,description:`One per stop. Hidden with showDots={false} or when everything is in view.`},{name:`Current dot`,selector:`button[aria-current="true"]`,description:`The current stop: a longer pill in --foreground.`}],Q={tags:[`!dev`],args:{autoPlay:36e5},play:async({canvasElement:e})=>{let t=await l(e,Z);await P(t[4]).toHaveAccessibleName(`1 of 5`)}},ee=[`Payment failed`,`Card expires tomorrow`,`Storage 95% full`,`Two seats unassigned`,`New login from Lisbon`],$={tags:[`!dev`],args:{label:`Account notices`,children:ee.map((e,t)=>(0,N.jsx)(B,{title:e,i:t,note:`Account notice`},e))}},te=[`Default`,`ThreeInView`,`StartAtThird`,`Loop`,`InterruptedScroll`,`RightToLeft`,`AutoPlay`,`AtEnd`,`AutoPlayReducedMotion`,`anatomyParts`,`Anatomy`,`DontHideImportant`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    // Every slide is in the DOM from the start; the track is a tab stop.
    const groups = canvas.getAllByRole('group');
    await expect(groups).toHaveLength(5);
    await expect(groups[0].parentElement).toHaveAttribute('tabindex', '0');
    // Previous, next and the dots are native buttons.
    for (const b of canvas.getAllByRole('button')) await expect(b.tagName).toBe('BUTTON');
    // 44px targets on coarse pointers.
    for (const b of [canvas.getByRole('button', {
      name: 'Next slide'
    }), canvas.getByRole('button', {
      name: 'Slide 1'
    })]) await expect(mediaRules('pointer: coarse', b, '::before').map(r => [r.style.inlineSize, r.style.blockSize])[0]).toEqual(['var(--target-coarse)', 'var(--target-coarse)']);
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    slidesPerView: 3
  },
  play: async ({
    canvas,
    canvasElement
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
    await expect(canvasElement.querySelector('[aria-live="polite"]')).toHaveTextContent('Slides 3 to 5 of 5');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    loop: true
  },
  play: async ({
    args,
    canvas
  }) => {
    // Nothing is disabled at the ends.
    await expect(canvas.getByRole('button', {
      name: 'Previous slide'
    })).toBeEnabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Previous slide'
    }));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(4);
    const next = canvas.getByRole('button', {
      name: 'Next slide'
    });
    await userEvent.click(next);
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(0);
    // Native buttons: Enter and Space press them, Tab moves on to the track and the dots.
    // Each press waits for the track to rest: a press mid-scroll interrupts
    // the smooth scroll, and Firefox then reports where it stopped.
    const track = canvas.getByRole('group', {
      name: '1 of 5'
    }).parentElement!;
    const rest = async (slide: number) => {
      await waitFor(() => expect(canvas.getByRole('button', {
        name: \`Slide \${slide}\`
      })).toHaveAttribute('aria-current', 'true'));
      let last = NaN;
      await waitFor(() => {
        const now = track.scrollLeft;
        const still = now === last;
        last = now;
        expect(still).toBe(true);
      }, {
        interval: 150,
        timeout: 3000
      });
    };
    await expect(next).toHaveFocus();
    await rest(1);
    await userEvent.keyboard('{Enter}');
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1);
    await rest(2);
    await userEvent.keyboard(' ');
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(2);
    await rest(3);
    await userEvent.tab();
    await expect(track).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Slide 1'
    })).toHaveFocus();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  play: async ({
    args,
    canvas
  }) => {
    const track = canvas.getByRole('group', {
      name: '1 of 5'
    }).parentElement!;
    canvas.getByRole('button', {
      name: 'Next slide'
    }).click();
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1);
    // The track has barely left slide 1 when that stray scrollend arrives.
    track.dispatchEvent(new Event('scrollend'));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1);
    // The scroll that was asked for still reports nothing new when it lands.
    await waitFor(() => expect(Math.abs(track.scrollLeft)).toBeGreaterThan(100));
    await new Promise(r => setTimeout(r, 600));
    await expect(args.onIndexChange).toHaveBeenLastCalledWith(1);
    await expect(canvas.getByRole('button', {
      name: 'Slide 2'
    })).toHaveAttribute('aria-current', 'true');
  }
}`,...K.parameters?.docs?.source},description:{story:`A press that interrupts a smooth scroll: Firefox fires scrollend where the old scroll stopped.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    // Stop/start is the first control.
    const region = canvas.getByRole('region', {
      name: 'Featured templates'
    });
    await expect(region.querySelector('button')).toHaveAccessibleName('Stop automatic slide show');
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

    // Focus inside pauses it too, until focus leaves.
    const track = slide.parentElement!;
    track.focus({
      preventScroll: true
    });
    // A slide the timer moved just before may still be scrolling into place,
    // and reports when it rests. Let it settle, then expect nothing new.
    await new Promise(r => setTimeout(r, 600));
    await quiet();
    track.blur();
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
}`,...J.parameters?.docs?.source},description:{story:`Rotates on its own; the reader can stop it, and hovering or focusing pauses it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultIndex: 4
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: 'Next slide'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Previous slide'
    })).toBeEnabled();
    await expect(canvas.getByRole('button', {
      name: 'Slide 5'
    })).toHaveAttribute('aria-current', 'true');
  }
}`,...Y.parameters?.docs?.source},description:{story:`At the last stop: next is disabled, previous is not.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    autoPlay: 200
  },
  // A play cannot switch the OS setting, so the media query is answered here
  // before the carousel first reads it.
  beforeEach: () => {
    const real = window.matchMedia;
    window.matchMedia = (query: string) => query.includes('prefers-reduced-motion') ? {
      matches: true,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {}
    } as unknown as MediaQueryList : real.call(window, query);
    return () => {
      window.matchMedia = real;
    };
  },
  play: async ({
    args,
    canvasElement
  }) => {
    await new Promise(r => setTimeout(r, 900));
    await expect(args.onIndexChange).not.toHaveBeenCalled();
    // Not rotating, so a move by the reader is announced.
    await expect(canvasElement.querySelector('[aria-live]')).toHaveAttribute('aria-live', 'polite');
  }
}`,...X.parameters?.docs?.source},description:{story:"Under `prefers-reduced-motion`, autoPlay never starts rotating.",...X.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  // An hour: autoPlay adds the stop/start button, but the picture should hold still.
  args: {
    autoPlay: 3_600_000
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveAccessibleName('1 of 5');
  }
}`,...Q.parameters?.docs?.source},description:{story:`Every part present, the stop/start button included.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Account notices',
    children: notices.map((t, i) => <Slide key={t} title={t} i={i} note="Account notice" />)
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: content the reader must see, hidden in slides they may never reach.`,...$.parameters?.docs?.description}}}})))()}export{H as a,W as c,ne as d,M as i,U as l,Y as n,$ as o,J as r,G as s,Q as t,Z as u};