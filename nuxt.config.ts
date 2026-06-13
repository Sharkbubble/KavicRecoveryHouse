export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/site.css'],
  app: {
    head: {
      title: 'Kavic House Recovery',
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        {
          name: 'description',
          content: 'A safe, structured, and compassionate sober living community in Nanaimo, BC.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kavic House Recovery' },
        { property: 'og:title', content: 'Kavic House Recovery' },
        {
          property: 'og:description',
          content: 'A safe, structured, and compassionate sober living community in Nanaimo, BC.'
        },
        { property: 'og:url', content: 'https://kavichouserecovery.ca' },
        { property: 'og:image', content: 'https://kavichouserecovery.ca/KavicHouseLogo_v2.jpeg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kavic House Recovery' },
        {
          name: 'twitter:description',
          content: 'A safe, structured, and compassionate sober living community in Nanaimo, BC.'
        },
        { name: 'twitter:image', content: 'https://kavichouserecovery.ca/KavicHouseLogo_v2.jpeg' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/jpeg',
          href: '/KavicHouseLogo_v2.jpeg'
        },
        {
          rel: 'apple-touch-icon',
          href: '/KavicHouseLogo_v2.jpeg'
        },
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
