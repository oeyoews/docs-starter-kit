import { defineConfig } from 'vitepress';
import projectSidebar from './sidebar/project01';
import project02Sidebar from './sidebar/project02';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'docs starter kit',
  description: 'docs site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    search: {
      provider: 'local',
      options: {
        disableQueryPersistence: false,
        detailedView: true,
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} oeyoews`,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'gitlab', link: 'https://gitlab.com/vuejs/vitepress' },
    ],
  },
});
