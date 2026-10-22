import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-B7N9C5Fg.js";import{n as a,t as o}from"./icon-C8IlC69p.js";import{n as s,t as c}from"./Avatar-IDpw_Msn.js";import{n as l,t as u}from"./Search-ESZiVGsy.js";import{i as d,n as f,r as p}from"./TopBar-Q8VQjIE4.js";var m=t({Default:()=>x,WithNavigation:()=>S,__namedExportsOrder:()=>C,default:()=>b}),h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),s(),r(),l(),d(),h=n(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Notifications`,children:(0,h.jsx)(o,{name:`info`})}),(0,h.jsx)(i,{variant:`secondary`,appearance:`ghost`,isIconOnly:!0,"aria-label":`Account`,children:(0,h.jsx)(c,{initials:`AS`,size:`sm`})})]}),y=[{label:`Dashboard`,href:`#dashboard`},{label:`Projects`,href:`#projects`},{label:`Team`,href:`#team`}],b={title:`Patterns/Application UI/Top Bar`,tags:[`experimental`],component:f,parameters:{layout:`fullscreen`},decorators:[e=>(0,h.jsx)(`div`,{style:{containerType:`inline-size`},children:e()})],argTypes:{start:{description:`Breadcrumbs, or TopBarNav links.`,control:!1},end:{description:`Search, notifications, the account menu.`,control:!1},children:{description:`The middle, e.g. a wide search field.`,control:!1}}},x={args:{children:(0,h.jsx)(u,{"aria-label":`Search`,placeholder:`Search`}),end:v},play:async({canvasElement:e})=>{let t=e.querySelector(`header`);await g(_(t).getByRole(`searchbox`,{name:`Search`})).toBeVisible(),await g(_(t).queryByRole(`button`,{name:/navigation/})).toBeNull()}},S={args:{start:(0,h.jsx)(p,{items:y,currentHref:`#projects`}),end:v},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Main`});await g(_(t).getByRole(`link`,{name:`Projects`})).toHaveAttribute(`aria-current`,`page`)}},C=[`Default`,`WithNavigation`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Search aria-label="Search" placeholder="Search" />,
    end
  },
  play: async ({
    canvasElement
  }) => {
    const bar = canvasElement.querySelector('header')!;
    await expect(within(bar).getByRole('searchbox', {
      name: 'Search'
    })).toBeVisible();
    // Outside an App Shell there is no drawer, so no menu button.
    await expect(within(bar).queryByRole('button', {
      name: /navigation/
    })).toBeNull();
  }
}`,...x.parameters?.docs?.source},description:{story:`Search in the middle, notifications and the account at the end.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    start: <TopBarNav items={links} currentHref="#projects" />,
    end
  },
  play: async ({
    canvas
  }) => {
    const nav = canvas.getByRole('navigation', {
      name: 'Main'
    });
    await expect(within(nav).getByRole('link', {
      name: 'Projects'
    })).toHaveAttribute('aria-current', 'page');
  }
}`,...S.parameters?.docs?.source},description:{story:`TopBarNav links across the bar: a top-navigation app.`,...S.parameters?.docs?.description}}}})))()}export{w as i,m as n,S as r,x as t};