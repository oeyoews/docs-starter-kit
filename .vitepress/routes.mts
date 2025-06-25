import { generateNavs } from './utils/index';
import { navs } from './sidebar/navs';
import projectSidebar from './sidebar/project01';
import project02Sidebar from './sidebar/project02';
import aiSidebar from './sidebar/ai';

import { type DefaultTheme } from 'vitepress';

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
    '/src/project-01': projectSidebar,
    '/src/project-02': project02Sidebar,
    '/src/ai': aiSidebar,
  },
} as DefaultTheme.Config;
