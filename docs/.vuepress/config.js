const sidebar = require('./auto-sidebar-generator');

module.exports = {
  title: '📚Tech-Stack',
  description: 'Tech-Stack Wiki',
  email: 'shrmffkfk@naver.com',
  base: "/Tech-Stack/",
  head: [
    ['link', { rel: 'icon', href: '/images/logo-144.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../public/images'
      }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  themeConfig: {
    sidebar: [
      sidebar.getSidebarGroup('/Java/', '1. Java', true),
      sidebar.getSidebarGroup('/DataStructure/', '2. Data Structure', true),
      sidebar.getSidebarGroup('/Algorithms/', '3. Algorithms', true),
      sidebar.getSidebarGroup('/Network/', '4. Network', true)
    ],
    nav: [
      { text: 'GitHub(shjang1013)', link: 'https://github.com/shjang1013' },
      { text: 'GitHub(HyeminNoh)', link: 'https://github.com/HyeminNoh' }
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  }
}
