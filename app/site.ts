// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'NuCommerce',
  description:
    'Vue Designer Nuxt Tailwind CSS / Nuxt UI - Quick start template',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-nuxtui.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxtui',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [{ title: 'Home', to: '/', icon: 'i-mdi-home' }],
    secondary: [
      // {
      //   title: 'Subscribe',
      //   icon: 'i-mdi-home',
      //   to: '/subscribe',
      // },
    ],
  },
}
