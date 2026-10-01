import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-Crmh4rpo.js";import{n as r,t as i}from"./icon-D2EAxy9f.js";import{n as a,t as o}from"./Stats-DMeli4be.js";var s=t({Narrow:()=>h,Simple:()=>f,WithIconAndLink:()=>m,WithTrend:()=>p,__namedExportsOrder:()=>g,default:()=>d}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),c=n(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Patterns/Application UI/Stats`,component:o,parameters:{a11y:{test:`error`},layout:`padded`},args:{title:`Last 30 days`,stats:[]},argTypes:{stats:{control:!1}}},f={args:{stats:[{label:`Total subscribers`,value:`71,897`},{label:`Avg. open rate`,value:`58.16%`},{label:`Avg. click rate`,value:`24.57%`}]},play:async({canvas:e})=>{await l(e.getByRole(`heading`,{level:2,name:`Last 30 days`})).toBeVisible();let t=e.getAllByRole(`term`);await l(t.map(e=>e.textContent)).toEqual([`Total subscribers`,`Avg. open rate`,`Avg. click rate`]),await l(e.getAllByRole(`definition`)[0]).toHaveTextContent(`71,897`)}},p={args:{stats:[{label:`Total subscribers`,value:`71,897`,previous:`from 70,946`,change:{value:`12%`,direction:`up`}},{label:`Avg. open rate`,value:`58.16%`,previous:`from 56.14%`,change:{value:`2.02%`,direction:`up`}},{label:`Churn`,value:`1.8%`,previous:`from 2.4%`,change:{value:`0.6%`,direction:`down`,isPositive:!0}},{label:`Avg. click rate`,value:`24.57%`,previous:`from 28.62%`,change:{value:`4.05%`,direction:`down`}}]},play:async({canvas:e})=>{await l(e.getAllByRole(`definition`)[0]).toHaveTextContent(`Increased by 12%`);let t=e.getAllByRole(`definition`)[2];await l(t).toHaveTextContent(`Decreased by 0.6%`);let n=u(e.getAllByRole(`definition`)[0]).getByText(`12%`,{exact:!1}),r=u(t).getByText(`0.6%`,{exact:!1}),i=u(e.getAllByRole(`definition`)[3]).getByText(`4.05%`,{exact:!1});await l(getComputedStyle(r).color).toBe(getComputedStyle(n).color),await l(getComputedStyle(i).color).not.toBe(getComputedStyle(n).color)}},m={args:{stats:[{label:`Total subscribers`,value:`71,897`,change:{value:`122`,direction:`up`},icon:(0,c.jsx)(i,{name:`user`}),href:`#subscribers`},{label:`Avg. open rate`,value:`58.16%`,change:{value:`5.4%`,direction:`up`},icon:(0,c.jsx)(i,{name:`success`}),href:`#opens`},{label:`Avg. click rate`,value:`24.57%`,change:{value:`3.2%`,direction:`down`},icon:(0,c.jsx)(i,{name:`star`}),href:`#clicks`}]},play:async({canvas:e})=>{await l(e.getByRole(`link`,{name:`View all Avg. open rate`})).toHaveAttribute(`href`,`#opens`)}},h={...p,decorators:[e=>(0,c.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`term`).map(e=>e.getBoundingClientRect());await l(n.top).toBeGreaterThan(t.bottom)}},g=[`Simple`,`WithTrend`,`WithIconAndLink`,`Narrow`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [{
      label: 'Total subscribers',
      value: '71,897'
    }, {
      label: 'Avg. open rate',
      value: '58.16%'
    }, {
      label: 'Avg. click rate',
      value: '24.57%'
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 2,
      name: 'Last 30 days'
    })).toBeVisible();
    // A definition list: each figure is the definition of its label.
    const terms = canvas.getAllByRole('term');
    await expect(terms.map(t => t.textContent)).toEqual(['Total subscribers', 'Avg. open rate', 'Avg. click rate']);
    await expect(canvas.getAllByRole('definition')[0]).toHaveTextContent('71,897');
  }
}`,...f.parameters?.docs?.source},description:{story:`A label and a figure. The simplest summary of a page.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [{
      label: 'Total subscribers',
      value: '71,897',
      previous: 'from 70,946',
      change: {
        value: '12%',
        direction: 'up'
      }
    }, {
      label: 'Avg. open rate',
      value: '58.16%',
      previous: 'from 56.14%',
      change: {
        value: '2.02%',
        direction: 'up'
      }
    },
    // Churn going down is good news: green, not red.
    {
      label: 'Churn',
      value: '1.8%',
      previous: 'from 2.4%',
      change: {
        value: '0.6%',
        direction: 'down',
        isPositive: true
      }
    }, {
      label: 'Avg. click rate',
      value: '24.57%',
      previous: 'from 28.62%',
      change: {
        value: '4.05%',
        direction: 'down'
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    // The direction is in words for screen readers, not only in the arrow and colour.
    await expect(canvas.getAllByRole('definition')[0]).toHaveTextContent('Increased by 12%');
    const churn = canvas.getAllByRole('definition')[2];
    await expect(churn).toHaveTextContent('Decreased by 0.6%');
    const up = within(canvas.getAllByRole('definition')[0]).getByText('12%', {
      exact: false
    });
    const churnChange = within(churn).getByText('0.6%', {
      exact: false
    });
    const click = within(canvas.getAllByRole('definition')[3]).getByText('4.05%', {
      exact: false
    });
    // Good news shares a colour whichever way it points; bad news differs.
    await expect(getComputedStyle(churnChange).color).toBe(getComputedStyle(up).color);
    await expect(getComputedStyle(click).color).not.toBe(getComputedStyle(up).color);
  }
}`,...p.parameters?.docs?.source},description:{story:`Against the last period: the previous figure, and a change that says whether it is good news.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [{
      label: 'Total subscribers',
      value: '71,897',
      change: {
        value: '122',
        direction: 'up'
      },
      icon: <Icon name="user" />,
      href: '#subscribers'
    }, {
      label: 'Avg. open rate',
      value: '58.16%',
      change: {
        value: '5.4%',
        direction: 'up'
      },
      icon: <Icon name="success" />,
      href: '#opens'
    }, {
      label: 'Avg. click rate',
      value: '24.57%',
      change: {
        value: '3.2%',
        direction: 'down'
      },
      icon: <Icon name="star" />,
      href: '#clicks'
    }]
  },
  play: async ({
    canvas
  }) => {
    // Three links all called "View all" would be indistinguishable in a links list.
    await expect(canvas.getByRole('link', {
      name: 'View all Avg. open rate'
    })).toHaveAttribute('href', '#opens');
  }
}`,...m.parameters?.docs?.source},description:{story:`With an icon for each figure and a link to where it comes from.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...WithTrend,
  decorators: [Story => <div style={{
    inlineSize: 360
  }}>{Story()}</div>],
  play: async ({
    canvas
  }) => {
    const [a, b] = canvas.getAllByRole('term').map(t => t.getBoundingClientRect());
    await expect(b.top).toBeGreaterThan(a.bottom);
  }
}`,...h.parameters?.docs?.source},description:{story:`One column on a phone.`,...h.parameters?.docs?.description}}}})))()}export{p as a,m as i,f as n,_ as o,s as r,h as t};