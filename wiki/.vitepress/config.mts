import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'ChaosWorld 指南',
  description: 'ChaosWorld 整合包中文指南：安装、更新、发展路线、模组与 KubeJS 魔改说明。',

  // 部署到子路径时改这里，例如 GitHub Pages 项目站：base: '/ChaosWorld/'
  base: '/',

  cleanUrls: false,
  lastUpdated: false,
  ignoreDeadLinks: false,
  // 维护说明（README.md）与生成脚本不参与站点构建
  srcExclude: ['README.md', 'scripts/**'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }]
  ],

  markdown: {
    lineNumbers: false
  },

  themeConfig: {
    logo: { src: '/logo.svg', alt: 'ChaosWorld' },
    siteTitle: 'ChaosWorld 指南',

    outline: { level: [2, 3], label: '本页目录' },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/start/install', activeMatch: '^/start/' },
      { text: '玩法', link: '/gameplay/progression', activeMatch: '^/gameplay/' },
      { text: '模组', link: '/mods/', activeMatch: '^/mods/' },
      { text: '魔改', link: '/kubejs/', activeMatch: '^/kubejs/' },
      { text: '参考', link: '/reference/faq', activeMatch: '^/reference/' }
    ],

    sidebar: {
      '/start/': [
        {
          text: '开始',
          items: [
            { text: '整合包简介', link: '/start/' },
            { text: '安装与自动更新', link: '/start/install' },
            { text: '第一次进入游戏', link: '/start/first-run' }
          ]
        }
      ],
      '/gameplay/': [
        {
          text: '玩法',
          items: [
            { text: '发展路线总览', link: '/gameplay/progression' },
            { text: '核心系统', link: '/gameplay/systems' }
          ]
        }
      ],
      '/mods/': [
        {
          text: '模组',
          items: [
            { text: '模组总览与分类', link: '/mods/' },
            { text: '完整模组清单', link: '/mods/list' }
          ]
        }
      ],
      '/kubejs/': [
        {
          text: '魔改',
          items: [
            { text: 'KubeJS 魔改说明', link: '/kubejs/' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '常见问题', link: '/reference/faq' },
            { text: '版本与更新记录', link: '/reference/changelog' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yongaishide/ChaosWorld' }
    ],

    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',

    footer: {
      message: '基于 GNU GPL v3.0 许可证发布',
      copyright: '版权所有 © 2026-现在 HowXu / yongaishide'
    }
  }
})
