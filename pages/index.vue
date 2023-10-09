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
  <div>
    <HeroSection></HeroSection>
    <UContainer class="pt-8">
      <LaunchSale class="mt-8" />
      <HotDeals class="mt-8" />
    </UContainer>
  </div>
</template>
<style scoped></style>
