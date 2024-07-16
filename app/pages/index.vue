<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'New Arrivals, Big Savings!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
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
      <DarkModeSwitch />
      <span style="margin-left: 0.5rem; /* 8px */">A Fresh Start!</span>
    </div>
  </div>
</template>
<style scoped></style>
