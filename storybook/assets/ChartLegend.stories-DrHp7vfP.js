import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,t as i}from"./chart-utils-DFuv4Pns.js";import{n as a,t as o}from"./ChartLegend-CaV2h1Wf.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),a(),r(),c=n(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f=[{key:`miss`,label:`Miss`,color:i(`chart-1`),value:`1.16K`},{key:`revalidated`,label:`Revalidated`,color:i(`chart-2`),value:`928`},{key:`none`,label:`None`,color:i(`chart-3`),value:`466`}],p={title:`Charts/ChartLegend`,tags:[`experimental`],component:o,parameters:{layout:`padded`},args:{items:f},argTypes:{items:{control:!1,description:"One per series: `key`, `label`, CSS `color` (usually from `colorVar`), optional `value`."},hiddenKeys:{control:!1,description:`Keys of series switched off.`},onToggle:{description:`Makes each item a toggle button. Without it the legend is a plain list.`},onFocusChange:{description:`Called with the key under the pointer or focus, null when it leaves.`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]}}},m={args:{onFocusChange:u()},render:function(e){let[t,n]=(0,s.useState)([]);return(0,c.jsx)(o,{...e,hiddenKeys:t,onToggle:e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Miss 1.16K`});await d.click(n),await l(n).toHaveAttribute(`aria-pressed`,`false`),await l(getComputedStyle(n.querySelector(`span:nth-child(2)`)).textDecorationLine).toBe(`line-through`),await l(getComputedStyle(n).color).toBe(getComputedStyle(t.getByRole(`button`,{name:/Revalidated/})).color),await d.tab(),await l(e.onFocusChange).toHaveBeenLastCalledWith(`revalidated`)}},h={args:{orientation:`vertical`},play:async({canvas:e})=>{await l(e.queryByRole(`button`)).toBeNull(),await l(e.getAllByRole(`listitem`)).toHaveLength(3)}},g=[`Toggles`,`Vertical`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onFocusChange: fn()
  },
  render: function Render(args) {
    const [hidden, setHidden] = useState<string[]>([]);
    return <ChartLegend {...args} hiddenKeys={hidden} onToggle={k => setHidden(h => h.includes(k) ? h.filter(x => x !== k) : [...h, k])} />;
  },
  play: async ({
    args,
    canvas
  }) => {
    const miss = canvas.getByRole('button', {
      name: 'Miss 1.16K'
    });
    await userEvent.click(miss);
    await expect(miss).toHaveAttribute('aria-pressed', 'false');
    // Off reads as struck through, not as a fainter grey that fails contrast on the hover fill.
    await expect(getComputedStyle(miss.querySelector('span:nth-child(2)')!).textDecorationLine).toBe('line-through');
    await expect(getComputedStyle(miss).color).toBe(getComputedStyle(canvas.getByRole('button', {
      name: /Revalidated/
    })).color);
    // Focus reports the item, so the chart can fade the rest.
    await userEvent.tab();
    await expect(args.onFocusChange).toHaveBeenLastCalledWith('revalidated');
  }
}`,...m.parameters?.docs?.source},description:{story:`Toggles: each item shows or hides its series. The charts wire this up themselves.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button')).toBeNull();
    await expect(canvas.getAllByRole('listitem')).toHaveLength(3);
  }
}`,...h.parameters?.docs?.source},description:{story:`A plain list, stacked, as beside a pie.`,...h.parameters?.docs?.description}}}})))()}_();export{m as Toggles,h as Vertical,g as __namedExportsOrder,p as default};