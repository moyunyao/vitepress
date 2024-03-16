import { defineConfig } from 'vitepress'
//import { set_sidebar } from "../utils/auto-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  //base: "vitepress",
  title: "My Vitepress",
  description: "A Vitepress Site",
  base: "/vitepress/",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '政治', items: [
          { text: '马克思', link: '/docs/政治/马克思' },
          { text: '毛中特', link: '/docs/政治/毛中特' },
          { text: '习思想', link: '/docs/政治/习思想' },
        ]
      },
      {
        text: '数学', items: [
          { text: '基本知识', link: '/docs/数学/第一讲-基本知识' },
          { text: '极限', link: '/docs/数学/第二讲-极限' },
        ]
      },
      {
        text: '英语', items: [
          { text: '语法', link: '/docs/英语/语法' },
          { text: '单词', link: '/docs/英语/单词' },
        ]
      },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    /*     sidebar: { "/front-end/react": set_sidebar("front-end/react") }, */

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  //页脚配置
  footer: {
    copyright: "Kaoyan",
  },
  },
  
})
