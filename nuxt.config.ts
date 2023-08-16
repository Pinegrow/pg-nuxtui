// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description:
        'Vue Designer Nuxt Tailwind CSS / Nuxt UI - Quick start template',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Store`, link: '/store' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    //@unocss/nuxt & @unocss/preset-icons is not required, as Nuxt UI already includes an UIcon component that uses egoist/tailwindcss-icons which also uses the same unocss format for icon names, for example, i-mdi-home.
    '@nuxthq/ui',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/html-validator',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), Nuxt UI uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // TODO: restartOnThemeUpdate is required at the moment to automatically restart nuxt dev server whenever theme is changed in Vue Designer's design panel (which is very slow at the moment)
        // restartOnThemeUpdate might not be required if the HMR issue with nuxt tailwind module is fixed - https://github.com/nuxt-modules/tailwindcss/issues/682
        // restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
  ui: {
    icons: 'all',
    // safelistColors: [
    //   'primary',
    //   'secondary',
    //   'tertiary',
    //   'success',
    //   'warning',
    //   'error',
    //   'info',
    // ],
  },
  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
})
