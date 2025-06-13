import { defineConfig } from 'vitepress'
import projectSidebar from './sidebar/project01'
import project02Sidebar from './sidebar/project02'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs starter kit",
  description: "docs site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Project01', link: '/src/project-01' },
      { text: 'Project02', link: '/src/project-02' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Home',
          items: [
            { text: 'Welcome', link: '/' }
          ]
        }
      ],
      '/src/project-01': projectSidebar,
      '/src/project-02': project02Sidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
