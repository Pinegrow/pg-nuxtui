<script setup lang="ts">
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }

  import { pg_font_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  if (pg_font_urls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: pg_font_urls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
    )
  }

  const config = useRuntimeConfig()
  const { title, description } = config.public
  const route = useRoute()

  useServerSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'keywords', content: route.meta.tags?.toString() },
      { property: 'author', content: 'Pinegrow' },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <Head>
    <Meta
      name="twitter:image"
      content="https://icons.vuetelescope.com/framework/nuxt.svg"
    />
    <Meta name="twitter:image:alt" content="Nuxt" />
    <Meta name="twitter:site" content="@pinegrow" />
    <Meta name="twitter:card" content="summary" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
</template>
