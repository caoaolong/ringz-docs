import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/ringz-docs/",

  srcDir: "docs",
  
  title: "Ringz",
  description: "A programming languages focused on visual teaching",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Ringz',
      description: 'A programming language designed for visual teaching',
      themeConfig: {
        logo: '/ringz.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' },
          {
            text: 'Language',
            items: [
              { text: '中文', link: '/zh/' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/caoaolong/ringz' }
        ]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Ringz',
      description: '专为可视化教学设计的编程语言',
      themeConfig: {
        logo: '/ringz.png',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '示例', link: '/zh/markdown-examples' },
          {
            text: '语言',
            items: [
              { text: 'English', link: '/' }
            ]
          }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/zh/markdown-examples' },
              { text: '运行时 API 示例', link: '/zh/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
      }
    }
  }
})
