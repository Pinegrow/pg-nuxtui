// import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: false }, // Disable when using Vue devtools

  // Look into MetaTags.vue for other flavours
  app: {
    baseURL: '/',
    head: {
      meta: [{ charset: 'utf-8' }],
    },
  },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/html-validator',
    '@nuxt/image',
    '@vee-validate/nuxt',
    //@unocss/nuxt & @unocss/preset-icons is not required, as Nuxt UI already includes an UIcon component that uses egoist/tailwindcss-icons which also uses the same unocss format for icon names, for example, i-mdi-home.
    '@nuxt/ui',
  ],

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), Nuxt UI uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, // Set to false so that Design Panel is not used
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
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

  // Vuetify's global styles
  css: ['lite-youtube-embed/src/lite-yt-embed.css'],

  image: {
    // sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw', // Not yet supported - https://github.com/nuxt/image/issues/216
    // densities: [1,2], // default
    quality: 80, // can be overridden as NuxtImg prop
    format: ['webp'], // default
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        },
      },
    },
    domains: ['images.unsplash.com', 'fakestoreapi.com', 'res.cloudinary.com'],
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
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

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'storeToRefs',
      'acceptHMRUpdate',
    ],
  },

  imports: {
    dirs: ['stores'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },
})
