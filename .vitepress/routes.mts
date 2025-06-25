import { generateNavs } from './utils/index';
import { navs } from './nav';

import { type DefaultTheme } from 'vitepress';
import { sidebars } from './sidebar';

export default {
  nav: [
    { text: '🏠 主页', link: '/' },
    ...generateNavs(navs),
    {
      text: '✨ 更多',
      items: [
        { text: '🌐 GitHub', link: 'https://github.com/xxx' },
        { text: '💬 讨论区', link: 'https://discord.com/xxx' },
      ],
    },
  ],
  // 多侧边栏
  sidebar: {
    '/': [
      {
        text: '🏠 主页',
        items: [{ text: '👋 欢迎', link: '/' }],
      },
    ],
    ...sidebars,
  },
} as DefaultTheme.Config;
