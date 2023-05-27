import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'PHP Fullstack',
  description: 'Become a fullstack PHP developer',
  base: '/php-fullstack-articles/',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'PHP',
        link: '/php/',
      },
      {
        text: 'WordPress',
        link: '/wordpress/',
      },
      {
        text: 'Laravel',
        link: '/laravel/',
      },
    ],
    sidebar: {
      '/wordpress/': [
        {
          text: 'WordPress',
          children: [
            '/wordpress/index.md', 
            '/wordpress/content-management.md',
            '/wordpress/theme-development.md',
            '/wordpress/plugin-development.md',
            '/wordpress/seo.md',
            '/wordpress/security.md',
            '/wordpress/e-commerce.md',
            '/wordpress/core-contribution.md',
            '/wordpress/further-learning.md'
          ],
        },
      ],
    },
  }),
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [
        '!**/node_modules/@vuepress/theme-default/lib/client/components/**',
        // '@vuepress/theme-default/lib/client/components/Home.vue',
        // '@vuepress/theme-default/lib/client/components/Navbar.vue',
        // '@vuepress/theme-default/lib/client/components/Page.vue',
        // '@vuepress/theme-default/lib/client/components/Sidebar.vue',
      ]
    },
  },
})