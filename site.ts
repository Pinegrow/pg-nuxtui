// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'NuCommerce',
  description:
    'Vue Designer Nuxt Tailwind CSS / Nuxt UI - Quick start template',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-nuxtui.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxtui',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    // {
    //   text: 'Contact Us',
    //   link: '/contact-us',
    //   type: 'secondary',
    //   icon: 'i-material-symbols-add-call',
    // },
    // {
    //   text: 'Help & FAQs',
    //   link: '/help-faqs',
    //   type: 'secondary',
    //   icon: 'i-material-symbols-contact-support-outline',
    // },
  ],
}
