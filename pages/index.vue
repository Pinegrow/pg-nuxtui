<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'New Arrivals, Big Savings!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
  })

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
      "
    >
      <DarkModeSwitch /><span style="margin-left: 0.5rem; /* 8px */"
        >A Fresh Start!</span
      >
    </div>
  </div>
</template>
<style scoped></style>
