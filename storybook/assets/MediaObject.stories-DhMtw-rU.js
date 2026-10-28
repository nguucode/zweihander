import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./utils-CUvRSo4U.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-Bwi4V5f1.js";import{n as s,t as c}from"./icon-C9aTyDDd.js";import{r as l,t as u}from"./Avatar-Br9NGvV-.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{d=`_mediaObject_voyt7_4`,f=`_media_voyt7_4`,p=`_body_voyt7_39`,m=`_title_voyt7_47`,h=`_description_voyt7_55`,g={mediaObject:d,media:f,body:p,title:m,description:h}})))()}function v({media:e,title:t,description:n,children:i,align:a=`start`,mediaPosition:o=`start`,headingLevel:s,className:c,...l}){let u=s?`h${s}`:`p`;return(0,y.jsxs)(`div`,{className:r(g.mediaObject,c),"data-align":a,"data-media-position":o,...l,children:[(0,y.jsx)(`div`,{className:g.media,"aria-hidden":`true`,children:e}),(0,y.jsxs)(`div`,{className:g.body,children:[(0,y.jsx)(u,{className:g.title,children:t}),n&&(0,y.jsx)(`div`,{className:g.description,children:n}),i]})]})}var y;function b(){return(b=e((()=>{n(),_(),y=i(),v.__docgenInfo={description:`Media beside a block of text: an avatar by a comment, an icon by a
setting, a thumbnail by a product. It owns no data and no landmark.`,methods:[],displayName:`MediaObject`,props:{media:{required:!0,tsType:{name:`ReactNode`},description:`An Avatar, an Icon or an image beside the text. Decorative: the title names what it shows.`},title:{required:!0,tsType:{name:`ReactNode`},description:`What the object is: a person, a product, a comment's author.`},description:{required:!1,tsType:{name:`ReactNode`},description:`A line or a paragraph under the title.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Anything after the description: actions, or nested Media Objects for replies.`},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'center' | 'end' | 'stretch'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'end'`},{name:`literal`,value:`'stretch'`}]},description:`Where the media sits against the text: top, middle, bottom, or stretched to the text's full height.`,defaultValue:{value:`'start'`,computed:!1}},mediaPosition:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Which side the media is on.`,defaultValue:{value:`'start'`,computed:!1}},headingLevel:{required:!1,tsType:{name:`union`,raw:`2 | 3 | 4`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:`Makes the title a heading of this level. Without it the title is bold text, right for a list of comments.`}},composes:[`Omit`]}})))()}var x=t({AlignCenter:()=>M,AlignEnd:()=>N,AsHeading:()=>j,Basic:()=>A,Dark:()=>B,MediaAtEnd:()=>F,Narrow:()=>L,NarrowMediaAtEnd:()=>R,Nested:()=>I,Stretch:()=>P,Variants:()=>z,__namedExportsOrder:()=>V,default:()=>D}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{s(),l(),a(),b(),S=i(),{expect:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T=`Reconciled the October bank feed. Two card refunds are still unmatched; I left them in suspense until the statements arrive.`,E=(0,S.jsx)(`div`,{"data-testid":`thumbnail`,style:{inlineSize:`var(--box-xl)`,minBlockSize:`var(--box-xl)`,borderRadius:`var(--radius-md)`,border:`1px solid var(--border)`,background:`var(--surface-filled)`}}),D={title:`Patterns/Application UI/Media Object`,tags:[`experimental`],component:v,parameters:{layout:`padded`},args:{media:(0,S.jsx)(u,{initials:`IO`,color:`teal`}),title:`Ines Okafor`,description:T,style:{maxInlineSize:560}},argTypes:{media:{description:`An Avatar, an Icon or an image beside the text. Decorative and hidden from assistive tech: the title names what it shows, so it must not be interactive.`,control:!1},title:{description:`What the object is: a person, a product, the author of a comment. Required.`,control:`text`},description:{description:`A line or a paragraph under the title, in muted text.`,control:`text`},children:{description:`Anything after the description: actions, or nested Media Objects for replies.`,control:!1},align:{description:`Where the media sits against the text: top, middle, bottom, or stretched to the height of the text.`},mediaPosition:{description:`Which side the media is on. The DOM order stays media first either way.`},headingLevel:{description:`Makes the title a heading of this level. Leave it out in a list of comments, where the titles are not sections.`}}},O=e=>e.getBoundingClientRect(),k=e=>{let t=e.querySelector(`[aria-hidden="true"]`);return{media:O(t),body:O(t.nextElementSibling)}},A={play:async({canvas:e,canvasElement:t})=>{await C(e.getByText(`Ines Okafor`).tagName).toBe(`P`),await C(e.queryByRole(`heading`)).toBeNull(),await w(()=>{let{media:e,body:n}=k(t);C(e.right).toBeLessThanOrEqual(n.left),C(Math.abs(e.top-n.top)).toBeLessThanOrEqual(1)})}},j={args:{media:(0,S.jsx)(c,{name:`notifications`}),title:`Email alerts`,description:`Get an email when an invoice is overdue.`,headingLevel:3},play:async({canvas:e})=>{await C(e.getByRole(`heading`,{level:3,name:`Email alerts`})).toBeVisible()}},M={args:{align:`center`},play:async({canvasElement:e})=>{await w(()=>{let{media:t,body:n}=k(e);C(Math.abs(t.top+t.height/2-(n.top+n.height/2))).toBeLessThanOrEqual(1)})}},N={args:{align:`end`},play:async({canvasElement:e})=>{await w(()=>{let{media:t,body:n}=k(e);C(Math.abs(t.bottom-n.bottom)).toBeLessThanOrEqual(1)})}},P={args:{align:`stretch`,media:E,title:`Harbor Lights`,description:`${T} ${T}`},play:async({canvas:e,canvasElement:t})=>{await w(()=>{let{body:n}=k(t);C(Math.abs(O(e.getByTestId(`thumbnail`)).height-n.height)).toBeLessThanOrEqual(1)})}},F={args:{mediaPosition:`end`,media:E,title:`Harbor Lights`,description:`Due Nov 14, owned by Ines Okafor.`},play:async({canvasElement:e})=>{await w(()=>{let{media:t,body:n}=k(e);C(t.left).toBeGreaterThanOrEqual(n.right)}),await C(e.querySelector(`[data-align]`).firstElementChild).toHaveAttribute(`aria-hidden`,`true`)}},I={args:{children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(o,{variant:`secondary`,appearance:`ghost`,size:`sm`,children:`Reply`})}),(0,S.jsx)(v,{media:(0,S.jsx)(u,{initials:`TL`,color:`violet`}),title:`Tomas Lindqvist`,description:`Thanks. I will chase the card provider on Monday.`})]})},play:async({canvas:e})=>{await w(()=>{let t=O(e.getByText(`Ines Okafor`)),n=O(e.getByText(`TL`));C(n.left).toBeGreaterThanOrEqual(t.left),C(n.top).toBeGreaterThan(t.bottom)}),await C(e.getByRole(`button`,{name:`Reply`})).toBeVisible()}},L={args:{title:`Quarterlyreconciliationofsubsidiaryaccountsreceivable`,description:`Due 31 October 2026`,style:{inlineSize:200}},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-align]`);await w(()=>{let{media:n,body:r}=k(e);C(r.top).toBeGreaterThanOrEqual(n.bottom),C(r.right).toBeLessThanOrEqual(O(t).right)})}},R={args:{...L.args,mediaPosition:`end`},tags:[`!dev`],play:async({canvasElement:e})=>{let t=e.querySelector(`[data-align]`);await w(()=>{let{media:n,body:r}=k(e);C(n.top).toBeGreaterThanOrEqual(r.bottom),C(Math.abs(n.left-O(t).left)).toBeLessThanOrEqual(1)})}},z={render:e=>(0,S.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-6)`,maxInlineSize:560},children:[(0,S.jsx)(v,{...e,style:void 0}),(0,S.jsx)(v,{...e,style:void 0,align:`center`,media:(0,S.jsx)(c,{name:`notifications`}),title:`Email alerts`,description:`Get an email when an invoice is overdue.`}),(0,S.jsx)(v,{...e,style:void 0,align:`stretch`,mediaPosition:`end`,media:E,title:`Harbor Lights`})]})},B={args:{...I.args},globals:{theme:`dark`}},V=[`Basic`,`AsHeading`,`AlignCenter`,`AlignEnd`,`Stretch`,`MediaAtEnd`,`Nested`,`Narrow`,`NarrowMediaAtEnd`,`Variants`,`Dark`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText('Ines Okafor').tagName).toBe('P');
    await expect(canvas.queryByRole('heading')).toBeNull();
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(media.right).toBeLessThanOrEqual(body.left);
      expect(Math.abs(media.top - body.top)).toBeLessThanOrEqual(1);
    });
  }
}`,...A.parameters?.docs?.source},description:{story:`An Avatar at the top beside a title and a paragraph. The title is bold text, not a heading.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    media: <Icon name="notifications" />,
    title: 'Email alerts',
    description: 'Get an email when an invoice is overdue.',
    headingLevel: 3
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('heading', {
      level: 3,
      name: 'Email alerts'
    })).toBeVisible();
  }
}`,...j.parameters?.docs?.source},description:{story:"`headingLevel` makes the title a heading, for a media object that starts a section.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'center'
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(Math.abs(media.top + media.height / 2 - (body.top + body.height / 2))).toBeLessThanOrEqual(1);
    });
  }
}`,...M.parameters?.docs?.source},description:{story:`The media in the middle of the text.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'end'
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(Math.abs(media.bottom - body.bottom)).toBeLessThanOrEqual(1);
    });
  }
}`,...N.parameters?.docs?.source},description:{story:`The media at the bottom of the text.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'stretch',
    media: thumbnail,
    title: 'Harbor Lights',
    description: \`\${comment} \${comment}\`
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => {
      const {
        body
      } = parts(canvasElement);
      expect(Math.abs(box(canvas.getByTestId('thumbnail')).height - body.height)).toBeLessThanOrEqual(1);
    });
  }
}`,...P.parameters?.docs?.source},description:{story:`A thumbnail stretched to the full height of the text.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    mediaPosition: 'end',
    media: thumbnail,
    title: 'Harbor Lights',
    description: 'Due Nov 14, owned by Ines Okafor.'
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(media.left).toBeGreaterThanOrEqual(body.right);
    });
    // Visual only: the DOM, so reading order, stays media first.
    await expect(canvasElement.querySelector('[data-align]')!.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  }
}`,...F.parameters?.docs?.source},description:{story:`The media after the text, for example a product photo at the end of a line.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>
          <Button variant="secondary" appearance="ghost" size="sm">
            Reply
          </Button>
        </div>
        <MediaObject media={<Avatar initials="TL" color="violet" />} title="Tomas Lindqvist" description="Thanks. I will chase the card provider on Monday." />
      </>
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      const parent = box(canvas.getByText('Ines Okafor'));
      const reply = box(canvas.getByText('TL'));
      expect(reply.left).toBeGreaterThanOrEqual(parent.left);
      expect(reply.top).toBeGreaterThan(parent.bottom);
    });
    await expect(canvas.getByRole('button', {
      name: 'Reply'
    })).toBeVisible();
  }
}`,...I.parameters?.docs?.source},description:{story:"A reply nested in `children`, with an action under it. The reply lines up with the parent's text.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quarterlyreconciliationofsubsidiaryaccountsreceivable',
    description: 'Due 31 October 2026',
    style: {
      inlineSize: 200
    }
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-align]')!;
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(body.top).toBeGreaterThanOrEqual(media.bottom);
      expect(body.right).toBeLessThanOrEqual(box(root).right);
    });
  }
}`,...L.parameters?.docs?.source},description:{story:`In a narrow column the text wraps under the media, and a long word breaks instead of overflowing.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Narrow.args,
    mediaPosition: 'end'
  },
  tags: ['!dev'],
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-align]')!;
    await waitFor(() => {
      const {
        media,
        body
      } = parts(canvasElement);
      expect(media.top).toBeGreaterThanOrEqual(body.bottom);
      expect(Math.abs(media.left - box(root).left)).toBeLessThanOrEqual(1);
    });
  }
}`,...R.parameters?.docs?.source},description:{story:`Media at the end in a narrow column: it drops under the text at the start edge.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-6)',
    maxInlineSize: 560
  }}>
      <MediaObject {...args} style={undefined} />
      <MediaObject {...args} style={undefined} align="center" media={<Icon name="notifications" />} title="Email alerts" description="Get an email when an invoice is overdue." />
      <MediaObject {...args} style={undefined} align="stretch" mediaPosition="end" media={thumbnail} title="Harbor Lights" />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Every option at once, for the visual baseline.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Nested.args
  },
  globals: {
    theme: 'dark'
  }
}`,...B.parameters?.docs?.source},description:{story:`Dark mode, so the accessibility check covers both themes.`,...B.parameters?.docs?.description}}}})))()}export{F as a,I as c,A as i,P as l,N as n,x as o,j as r,L as s,M as t,H as u};