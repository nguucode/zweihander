import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle:
      '<span style="display:inline-flex;align-items:center;gap:8px"><img src="favicon.svg" width="22" height="22" alt="" />zweihänder</span>',
    brandUrl: 'https://ontheshore.biz/zweihander/',
    brandTarget: '_self',
  }),
});
