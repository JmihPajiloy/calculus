import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "Конспекты",
  base: '/calculus',
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      {icon: 'github', link: 'https://github.com/JmihPajiloy/calculus'},
    ],
    search: {
      provider: 'local'
    },
    footer: {
      copyright: 'Made by Jmih Pajiloy'
    },
    lastUpdated: {
      text: 'Последнее изменение',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    sidebar: [
      {
        text: 'S3 ДГМА',
        collapsed: false,
        link: "/dgma",
        items: [
          {text: 'Билет 1', link: '/dgma/01'},
          {text: 'Билет 2', link: '/dgma/02'},
          {text: 'Билет 3', link: '/dgma/03'},
          {text: 'Билет 4', link: '/dgma/04'},
          {text: 'Билет 5', link: '/dgma/05'},
          {text: 'Билет 6', link: '/dgma/06'},
          {text: 'Билет 7', link: '/dgma/07'},
          {text: 'Билет 8', link: '/dgma/08'},
          {text: 'Билет 9', link: '/dgma/09'},
          {text: 'Билет 10', link: '/dgma/10'},
          {text: 'Билет 11', link: '/dgma/11'},
          {text: 'Билет 12', link: '/dgma/12'},
          {text: 'Билет 13', link: '/dgma/13'},
          {text: 'Билет 14', link: '/dgma/14'},
          {text: 'Билет 15', link: '/dgma/15'},
          {text: 'Билет 16', link: '/dgma/16'},
          {text: 'Билет 17', link: '/dgma/17'},
          {text: 'Билет 18', link: '/dgma/18'},
          {text: 'Билет 19', link: '/dgma/19'},
          {text: 'Билет 20', link: '/dgma/20'},
          {text: 'Билет 21', link: '/dgma/21'},
          {text: 'Билет 22', link: '/dgma/22'},
          {text: 'Билет 23', link: '/dgma/23'},
          {text: 'Билет 24', link: '/dgma/24'},
          {text: 'Билет 25', link: '/dgma/25'},
          {text: 'Билет 26', link: '/dgma/26'},
          {text: 'Билет 27', link: '/dgma/27'},
          {text: 'Билет 28', link: '/dgma/28'},
        ]
      }
    ],
  },
  markdown: {
    math: true
  },
  server: {
    host: true
  }
})
