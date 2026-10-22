import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./icon-C8IlC69p.js";import{i as a,s as o}from"./sample-data-BFlXvA0M.js";import{n as s,t as c}from"./Sparkline-DN9lxZrM.js";import{n as l,t as u}from"./Stats--VnYIcCg.js";var d=t({Narrow:()=>b,Simple:()=>_,WithIconAndLink:()=>y,WithSparkline:()=>x,WithTrend:()=>v,__namedExportsOrder:()=>S,default:()=>g}),f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),s(),a(),l(),f=n(),{expect:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Patterns/Application UI/Stats`,tags:[`experimental`],component:u,parameters:{layout:`padded`},args:{title:`Last 30 days`,stats:[]},argTypes:{stats:{control:!1}}},_={args:{stats:[{label:`Total subscribers`,value:`71,897`},{label:`Avg. open rate`,value:`58.16%`},{label:`Avg. click rate`,value:`24.57%`}]},play:async({canvas:e})=>{await p(e.getByRole(`heading`,{level:2,name:`Last 30 days`})).toBeVisible();let t=e.getAllByRole(`term`);await p(t.map(e=>e.textContent)).toEqual([`Total subscribers`,`Avg. open rate`,`Avg. click rate`]),await p(e.getAllByRole(`definition`)[0]).toHaveTextContent(`71,897`)}},v={args:{stats:[{label:`Total subscribers`,value:`71,897`,previous:`from 70,946`,change:{value:`12%`,direction:`up`}},{label:`Avg. open rate`,value:`58.16%`,previous:`from 56.14%`,change:{value:`2.02%`,direction:`up`}},{label:`Churn`,value:`1.8%`,previous:`from 2.4%`,change:{value:`0.6%`,direction:`down`,isPositive:!0}},{label:`Avg. click rate`,value:`24.57%`,previous:`from 28.62%`,change:{value:`4.05%`,direction:`down`}}]},play:async({canvas:e})=>{await p(e.getAllByRole(`definition`)[0]).toHaveTextContent(`Increased by 12%`);let t=e.getAllByRole(`definition`)[2];await p(t).toHaveTextContent(`Decreased by 0.6%`);let n=h(e.getAllByRole(`definition`)[0]).getByText(`12%`,{exact:!1}),r=h(t).getByText(`0.6%`,{exact:!1}),i=h(e.getAllByRole(`definition`)[3]).getByText(`4.05%`,{exact:!1});await p(getComputedStyle(r).color).toBe(getComputedStyle(n).color),await p(getComputedStyle(i).color).not.toBe(getComputedStyle(n).color)}},y={args:{stats:[{label:`Total subscribers`,value:`71,897`,change:{value:`122`,direction:`up`},icon:(0,f.jsx)(i,{name:`user`}),href:`#subscribers`},{label:`Avg. open rate`,value:`58.16%`,change:{value:`5.4%`,direction:`up`},icon:(0,f.jsx)(i,{name:`success`}),href:`#opens`},{label:`Avg. click rate`,value:`24.57%`,change:{value:`3.2%`,direction:`down`},icon:(0,f.jsx)(i,{name:`star`}),href:`#clicks`}]},play:async({canvas:e})=>{await p(e.getByRole(`link`,{name:`View all Avg. open rate`})).toHaveAttribute(`href`,`#opens`)}},b={...v,decorators:[e=>(0,f.jsx)(`div`,{style:{inlineSize:360},children:e()})],play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`term`).map(e=>e.getBoundingClientRect());await p(n.top).toBeGreaterThan(t.bottom)}},x={args:{stats:[{label:`Total requests`,value:`3.15K`,change:{value:`3.8%`,direction:`up`},icon:(0,f.jsx)(i,{name:`star`}),chart:(0,f.jsx)(c,{data:o.map(e=>e.requests)})},{label:`Cache hit rate`,value:`29.84%`,chart:(0,f.jsx)(c,{data:o.map(e=>e.requests%40)})},{label:`Total visits`,value:`123`,change:{value:`42%`,direction:`down`},chart:(0,f.jsx)(c,{data:o.map(e=>e.requests%9)})},{label:`5xx error rate`,value:`0.00%`,change:{value:`0%`,direction:`up`,isPositive:!1},chart:(0,f.jsx)(c,{data:[]})}]},play:async({canvas:e})=>{let t=e.getAllByRole(`term`).map(e=>e.parentElement),n=t[0].lastElementChild;await p(n.querySelector(`svg`)).toHaveAttribute(`aria-hidden`,`true`),await p(h(t[3]).getByText(`No data`)).toBeVisible(),await m(()=>p(Math.round(n.getBoundingClientRect().width)).toBe(Math.round(t[0].getBoundingClientRect().width)-2));for(let e of t){let t=e.lastElementChild.getBoundingClientRect();await p(Math.round(t.bottom)).toBe(Math.round(e.getBoundingClientRect().bottom)-1)}}},S=[`Simple`,`WithTrend`,`WithIconAndLink`,`Narrow`,`WithSparkline`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`A label and a figure. The simplest summary of a page.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Against the last period: the previous figure, and a change that says whether it is good news.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`With an icon for each figure and a link to where it comes from.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`One column on a phone.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [
    // With an icon too: the spark still runs edge to edge, under the icon's column.
    {
      label: 'Total requests',
      value: '3.15K',
      change: {
        value: '3.8%',
        direction: 'up'
      },
      icon: <Icon name="star" />,
      chart: <Sparkline data={requests.map(d => d.requests)} />
    },
    // No change chip, so a shorter card: its spark still sits on the bottom edge.
    {
      label: 'Cache hit rate',
      value: '29.84%',
      chart: <Sparkline data={requests.map(d => d.requests % 40)} />
    }, {
      label: 'Total visits',
      value: '123',
      change: {
        value: '42%',
        direction: 'down'
      },
      chart: <Sparkline data={requests.map(d => d.requests % 9)} />
    },
    // An error rate going up is bad news.
    {
      label: '5xx error rate',
      value: '0.00%',
      change: {
        value: '0%',
        direction: 'up',
        isPositive: false
      },
      chart: <Sparkline data={[]} />
    }]
  },
  play: async ({
    canvas
  }) => {
    const cards = canvas.getAllByRole('term').map(t => t.parentElement!);
    // The spark is the card's last part, and decoration: the change already says the trend in words.
    const spark = cards[0].lastElementChild!;
    await expect(spark.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    await expect(within(cards[3]).getByText('No data')).toBeVisible();
    // Edge to edge: as wide as the card inside its 1px border, and on its bottom edge, in every card.
    await waitFor(() => expect(Math.round(spark.getBoundingClientRect().width)).toBe(Math.round(cards[0].getBoundingClientRect().width) - 2));
    for (const card of cards) {
      const sparkBox = card.lastElementChild!.getBoundingClientRect();
      await expect(Math.round(sparkBox.bottom)).toBe(Math.round(card.getBoundingClientRect().bottom) - 1);
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`With a trend at the foot of each card: a Sparkline, edge to edge.`,...x.parameters?.docs?.description}}}})))()}export{x as a,y as i,_ as n,v as o,d as r,C as s,b as t};