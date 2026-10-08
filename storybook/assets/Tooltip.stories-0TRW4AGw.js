import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-lUQ3_SCR.js";import{n as r,t as i}from"./Button-BdtJKtga.js";import{n as a,t as o}from"./icon-Dc4hTclj.js";import{n as s,r as c,t as l}from"./Tooltip-BFBfbq93.js";var u=t({Default:()=>v,Disabled:()=>x,Group:()=>b,LongContent:()=>y,__namedExportsOrder:()=>S,default:()=>g}),d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),r(),c(),d=n(),{expect:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Overlays/Tooltip`,component:l,parameters:{a11y:{test:`error`}},args:{content:`Copy link`,children:(0,d.jsx)(i,{isIconOnly:!0,"aria-label":`Copy link`,appearance:`ghost`,variant:`accent`,children:(0,d.jsx)(o,{name:`external`})})},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},children:{control:!1}},decorators:[e=>(0,d.jsx)(`div`,{style:{padding:`var(--space-12)`,display:`flex`,justifyContent:`center`},children:e()})]},_=()=>h(document.body),v={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await p.tab(),await f(t).toHaveFocus();let n=await _().findByRole(`tooltip`,{},{timeout:300});await f(n).toHaveTextContent(`Copy link`),await f(t).toHaveAttribute(`aria-describedby`,n.id),await p.keyboard(`{Escape}`),await m(()=>f(_().queryByRole(`tooltip`)).toBeNull()),await f(t).not.toHaveAttribute(`aria-describedby`)}},y={args:{content:`Anyone with the link can view this file. Change it under Share → General access.`,defaultOpen:!0,children:(0,d.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})}},b={render:()=>(0,d.jsx)(s,{children:(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-1)`},children:[`plus`,`minus`,`search`,`more`].map(e=>(0,d.jsx)(l,{content:e[0].toUpperCase()+e.slice(1),children:(0,d.jsx)(i,{isIconOnly:!0,"aria-label":e,appearance:`ghost`,variant:`accent`,children:(0,d.jsx)(o,{name:e})})},e))})})},x={args:{disabled:!0},play:async({canvas:e})=>{await p.tab(),await f(e.getByRole(`button`)).toHaveFocus(),await new Promise(e=>setTimeout(e,100)),await f(_().queryByRole(`tooltip`)).toBeNull()}},S=[`Default`,`LongContent`,`Group`,`Disabled`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    // Focus opens it at once, without the 300ms hover delay.
    const tip = await body().findByRole('tooltip', {}, {
      timeout: 300
    });
    await expect(tip).toHaveTextContent('Copy link');
    // Read as the trigger's description while it is open.
    await expect(trigger).toHaveAttribute('aria-describedby', tip.id);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
    await expect(trigger).not.toHaveAttribute('aria-describedby');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anyone with the link can view this file. Change it under Share → General access.',
    defaultOpen: true,
    children: <Button appearance="outlined">Link sharing on</Button>
  }
}`,...y.parameters?.docs?.source},description:{story:`Open from the start. Only one tooltip is open at a time, so this is the one on the docs page.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipGroup>
      <div style={{
      display: 'flex',
      gap: 'var(--space-1)'
    }}>
        {(['plus', 'minus', 'search', 'more'] as const).map(name => <Tooltip key={name} content={name[0].toUpperCase() + name.slice(1)}>
            <Button isIconOnly aria-label={name} appearance="ghost" variant="accent">
              <Icon name={name} />
            </Button>
          </Tooltip>)}
      </div>
    </TooltipGroup>
}`,...b.parameters?.docs?.source},description:{story:`Once one tooltip in a group is open, the next opens without the delay.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button')).toHaveFocus();
    await new Promise(r => setTimeout(r, 100));
    await expect(body().queryByRole('tooltip')).toBeNull();
  }
}`,...x.parameters?.docs?.source}}}})))()}export{C as a,u as i,b as n,y as r,v as t};