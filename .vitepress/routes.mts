import projectSidebar from './sidebar/project01';
import project02Sidebar from './sidebar/project02';
import { type DefaultTheme } from 'vitepress';

export default {
  nav: [
    { text: '🏠 主页', link: '/' },
    {
      text: '📁 项目一',
      link: '/src/project-01',
      activeMatch: '/src/project-01/',
    },
    {
      text: '📁 项目二',
      link: '/src/project-02',
      activeMatch: '/src/project-02/',
    },
    {
      text: '✨ 更多',
      items: [
        { text: '🌐 GitHub', link: 'https://github.com/xxx' },
        { text: '💬 讨论区', link: 'https://discord.com/xxx' },
      ],
    },
  ],
  sidebar: {
    '/': [
      {
        text: '🏠 主页',
        items: [{ text: '👋 欢迎', link: '/' }],
      },
    ],
    '/src/project-01': projectSidebar,
    '/src/project-02': project02Sidebar,
  },
} as DefaultTheme.Config;
