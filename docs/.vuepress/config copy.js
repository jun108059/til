const sidebar = require('./auto-sidebar-generator');

module.exports = {
    title: 'Today Youngjun learned', // 사이트 타이틀
    description: '박영준',
    base:'/til/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: "aboutMe", link: "/aboutMe/" }, 
        { text: "Vue", link: "/vue/" }
      ]
      // sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    },
    plugins: [
      ['@vuepress/last-updated'],//git에 마지막 커밋
      ['@vuepress/back-to-top', true],//위로 올라가기
      '@vuepress/pagination',//다음글, 이전글
      ['@vuepress/search', {//검색창
          searchMaxSuggestions: 10
      }],
      ['@vuepress/active-header-links', {//헤더 바로가기
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor',
          headerTopOffset: 120
      }]
    ]
  };