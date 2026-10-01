import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Button-BLXGvKSL.js";import{n as s,r as c,t as l}from"./Tooltip-C5Hg6qTA.js";var u=t({Default:()=>v,Disabled:()=>S,Group:()=>x,LongContent:()=>y,WithoutArrow:()=>b,__namedExportsOrder:()=>C,default:()=>g}),d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),a(),c(),d=n(),{expect:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Overlays/Tooltip`,component:l,parameters:{a11y:{test:`error`}},args:{content:`Copy link`,children:(0,d.jsx)(o,{isIconOnly:!0,"aria-label":`Copy link`,appearance:`ghost`,variant:`accent`,children:(0,d.jsx)(i,{name:`external`})})},argTypes:{side:{control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`]},children:{control:!1}},decorators:[e=>(0,d.jsx)(`div`,{style:{padding:`var(--space-12)`,display:`flex`,justifyContent:`center`},children:e()})]},_=()=>h(document.body),v={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await p.tab(),await f(t).toHaveFocus();let n=await _().findByRole(`tooltip`,{},{timeout:300});await f(n).toHaveTextContent(`Copy link`),await f(t).toHaveAttribute(`aria-describedby`,n.id),await p.keyboard(`{Escape}`),await m(()=>f(_().queryByRole(`tooltip`)).toBeNull()),await f(t).not.toHaveAttribute(`aria-describedby`)}},y={args:{content:`Anyone with the link can view this file. Change it under Share → General access.`,defaultOpen:!0,children:(0,d.jsx)(o,{appearance:`outlined`,children:`Link sharing on`})}},b={args:{hasArrow:!1}},x={render:()=>(0,d.jsx)(s,{children:(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-1)`},children:[`plus`,`minus`,`search`,`more`].map(e=>(0,d.jsx)(l,{content:e[0].toUpperCase()+e.slice(1),children:(0,d.jsx)(o,{isIconOnly:!0,"aria-label":e,appearance:`ghost`,variant:`accent`,children:(0,d.jsx)(i,{name:e})})},e))})})},S={args:{disabled:!0},play:async({canvas:e})=>{await p.tab(),await f(e.getByRole(`button`)).toHaveFocus(),await new Promise(e=>setTimeout(e,100)),await f(_().queryByRole(`tooltip`)).toBeNull()}},C=[`Default`,`LongContent`,`WithoutArrow`,`Group`,`Disabled`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    // Focus opens it at once, without the 600ms hover delay.
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
  args: {
    hasArrow: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Once one tooltip in a group is open, the next opens without the delay.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{b as a,u as i,x as n,w as o,y as r,v as t};