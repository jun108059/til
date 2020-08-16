const sidebar = require('./auto-sidebar-generator');

module.exports = {
    title: '✍Today Youngjun learned',
    description: 'Youngjun`s Personal Wiki (Today I Learned)',
    email: 'youngjun108059@gmail.com',
    base:"/til/",
    head: [
      ['link', { rel: 'icon', href: `/images/logo-144.png` }],
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
        sidebar.getSidebarGroup('/docker/', '🐳 Docker', true),
        sidebar.getSidebarGroup('/kubernetes/', '🐋 Kubernetes', true),
        sidebar.getSidebarGroup('/flutter/', '📘 Flutter', true),
        sidebar.getSidebarGroup('/GCP/', '📗 GCP'),
        sidebar.getSidebarGroup('/machine-learning/', '📙 Machine Learning', true),
        sidebar.getSidebarGroup('/Git/', '📕 Git', true),
        sidebar.getSidebarGroup('/data-structure/', '💚 Data Structure', true),
        sidebar.getSidebarGroup('/Java/', '❤ Java', true),
        sidebar.getSidebarGroup('/kubeflow/', '💙 Kubeflow', true),
        sidebar.getSidebarGroup('/news/', '🖤 News', true),
        sidebar.getSidebarGroup('/nginx/', '💜 NGINX', true),
        sidebar.getSidebarGroup('/spring/', '🤍 Spring', true),
        sidebar.getSidebarGroup('/system-programming/', '🤎 System Programming', true),
        sidebar.getSidebarGroup('/UX&UI/', '💛 UX&UI', true),
        sidebar.getSidebarGroup('/web/', '💕 Web', true)
      ],
      nav: [
        { text: 'GitHub', link: 'https://github.com/jun108059/til' },
        { text: 'Blog', link: 'https://dev-youngjun.tistory.com/' }
      ],
      smoothScroll: true,
      lastUpdated: 'Last Updated'
    }
  }