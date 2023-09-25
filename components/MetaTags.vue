<script setup lang="ts">
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }

  import site from '@/site'
  import image from '@/screenshots/image.jpg'
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

  const { title, description, url, author } = site
  const route = useRoute()

  useServerSeoMeta({
    // charset: 'utf-8',
    // author,
    // viewport: 'width=device-width, initial-scale=1',
    // keywords: route.meta.tags?.toString(),
    // title,
    description,
    // ogTitle: title,
    // ogDescription: description,
    // ogImage: image,
    // ogImageAlt: title,
    // og:image:width
    // og:image:height
    // og:image:alt
    // og:image: type
    // og:image: secure_url
    // ogUrl: url,
    // ogSiteName: title,
    // og: locale
    // og: type
    // twitterTitle: title,
    // twitterDescription: description,
    // twitterImage: image,
    // twitterImageAlt: title,
    // twitterSite: url,
    // twitterCard: 'summary_large_image',
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { name: 'charset', content: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'author', content: author },
      { name: 'keywords', content: route.meta.tags?.toString() },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <Head>
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="image" />
    <Meta property="og:image:alt" :content="title" />
    <Meta property="og:url" :content="url" />
    <Meta property="og:site-name" content="summary_large_image" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="image" />
    <Meta name="twitter:image:alt" :content="title" />
    <Meta name="twitter:site" :content="url" />
    <Meta name="twitter:card" content="summary_large_image" />
    <!-- <Meta name="twitter:card" content="summary" /> -->
  </Head>
</template>
