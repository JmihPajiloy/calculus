import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ДГМА",
  description: "Билеты",
  base: '/conspects/',
  cleanUrls: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Билеты',
        items: [
          { text: 'Билет 1', link: '/01' },
          { text: 'Билет 2', link: '/02' },
          { text: 'Билет 3', link: '/03' },
          { text: 'Билет 4', link: '/04' },
          { text: 'Билет 5', link: '/05' },
          { text: 'Билет 6', link: '/06' },
          { text: 'Билет 7', link: '/07' },
          { text: 'Билет 8', link: '/08' },
          { text: 'Билет 9', link: '/09' },
          { text: 'Билет 10', link: '/010' },
          { text: 'Билет 11', link: '/11' },
          { text: 'Билет 12', link: '/12' },
          { text: 'Билет 13', link: '/13' },
          { text: 'Билет 14', link: '/14' },
          { text: 'Билет 15', link: '/15' },
          { text: 'Билет 16', link: '/16' },
          { text: 'Билет 17', link: '/17' },
          { text: 'Билет 18', link: '/18' },
          { text: 'Билет 19', link: '/19' },
          { text: 'Билет 20', link: '/20' },
        ]
      }
    ],
  },
  markdown: {
    math: true
  },
})
