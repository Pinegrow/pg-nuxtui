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
    primary: [
      { title: 'Home', to: '/', icon: 'i-mdi-home' },
      { title: 'Women', to: '/women', icon: 'i-mdi-home' },
      { title: 'Men', to: '/men', icon: 'i-mdi-home' },
      {
        title: 'Jewellery',
        to: '/jewellery',
        icon: 'i-mdi-home',
      },
      {
        title: 'Electronics',
        to: '/electronics',
        icon: 'i-mdi-home',
      },
      {
        title: 'About Us',
        to: '/quick-start',
        icon: 'i-mdi-home',
      },
    ],
    secondary: [
      {
        title: 'Track Order',
        to: '/track-order',
        icon: 'i-ic-outline-my-location',
      },
      {
        title: 'Order History',
        to: '/order-history',
        icon: 'i-ic-baseline-history',
      },
      {
        title: 'Returns',
        to: '/returns',
        icon: 'i-material-symbols-assignment-return-outline-rounded',
      },
      {
        title: 'Delivery Policy',
        to: '/delivery-policy',
        icon: 'i-tabler-truck-return',
      },
      {
        title: 'Contact Us',
        to: '/contact-us',
        icon: 'i-material-symbols-add-call',
      },
      {
        title: 'Help & FAQs',
        to: '/help-faqs',
        icon: 'i-material-symbols-contact-support-outline',
      },
    ],
  },
}
