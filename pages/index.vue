<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main>
    <HeroSection />
    <AboutTemplate />
    <WalkThrough />
  </main>
</template>
<style scoped></style>
