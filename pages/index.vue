<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    title: 'Index',
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
