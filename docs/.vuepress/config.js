const sidebar = require('./auto-sidebar-generator');

module.exports = {
    title: '✍Today Youngjun learned', // 사이트 타이틀
    description: 'Youngjun`s Personal Wiki (Today I Learned)',
    email: 'youngjun108059@gmail.com',
    base:'/til/',
    head: [
      ['link', { rel: 'icon', href: `/images/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
      '@vuepress/back-to-top',
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }]
    ],
    themeConfig: {
      sidebar: [
        // sidebar.getSidebarGroup('/docker/', '🐳 Docker', true),
        // sidebar.getSidebarGroup('/kubernetes/', '🐋 Kubernetes', true),
        // sidebar.getSidebarGroup('/flutter/', '📘 Flutter', true),
        // sidebar.getSidebarGroup('/GCP/', '📗 GCP'),
        // sidebar.getSidebarGroup('/machine-learning/', '📙 Machine Learning', true),
        // sidebar.getSidebarGroup('/python/', '📕 Python', true),
        // sidebar.getSidebarGroup('/Git/', '💛 Git', true),
        sidebar.getSidebarGroup('/data-strucure/', '💚 Data Structure', true)
      ],
      // sidebarDepth: 0,
      sidebar: 'auto', // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
      nav: [
        { text: 'GitHub', link: 'https://github.com/jun108059/til' },
        { text: 'Blog', link: 'https://dev-youngjun.tistory.com/' }
      ],
      smoothScroll: true,
      lastUpdated: 'Last Updated'
    }
  };