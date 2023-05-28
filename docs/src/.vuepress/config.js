const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Fullstack PHP',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Articles and tutorials about PHP',

  base: '/php-fullstack-articles/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'git@github.com:anvarulugov/php-fullstack-articles.git',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/' },
			{ text: 'PHP', link: '/php/' },
			{ text: 'WordPress', link: '/wordpress/' },
			{ text: 'Laravel', link: '/laravel/' }
    ],
    sidebar: {
      '/php/': [
        {
          title: 'PHP',
          collapsable: false,
          children: false
        }
      ],
      '/wordpress/': [
        {
          title: 'WordPress',
          collapsable: false,
          children: [
            '',
            'content-management',
            'theme-development',
            'plugin-development',
            'seo',
            'security',
            'e-commerce',
            'core-contribution',
            'further-learning'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
