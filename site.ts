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
    { text: 'Women', link: '/women', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Men', link: '/men', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Jewellery',
      link: '/jewellery',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Electronics',
      link: '/electronics',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'About Us',
      link: '/quick-start',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Track Order',
      link: '/track-order',
      type: 'secondary',
      icon: 'i-ic-outline-my-location',
    },
    {
      text: 'Order History',
      link: '/order-history',
      type: 'secondary',
      icon: 'i-ic-baseline-history',
    },
    {
      text: 'Returns',
      link: '/returns',
      type: 'secondary',
      icon: 'i-material-symbols-assignment-return-outline-rounded',
    },
    {
      text: 'Delivery Policy',
      link: '/delivery-policy',
      type: 'secondary',
      icon: 'i-tabler-truck-return',
    },
    {
      text: 'Contact Us',
      link: '/contact-us',
      type: 'secondary',
      icon: 'i-material-symbols-add-call',
    },
    {
      text: 'Help & FAQs',
      link: '/help-faqs',
      type: 'secondary',
      icon: 'i-material-symbols-contact-support-outline',
    },
  ],
}
