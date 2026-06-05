export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/site.css'],
  app: {
    head: {
      title: 'Kavic House Recovery',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          name: 'description',
          content: 'A safe, structured, and compassionate sober living community in Nanaimo, BC.'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap'
        }
      ]
    }
  },
  nitro: {
    preset: 'vercel'
  },
  compatibilityDate: '2026-06-04'
});
