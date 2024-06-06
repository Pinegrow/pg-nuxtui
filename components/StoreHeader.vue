<script setup lang="ts">
  const { optimizeImage } = useOptimizeImage()

  const headerImageUrl =
    'https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE3fHxzdG9yZXxlbnwwfHx8fDE2OTA2MTY2ODN8MA&ixlib=rb-4.0.3&q=85'

  const headerImageOptimized = optimizeImage(headerImageUrl)
</script>
<template>
  <div class="overflow-hidden max-h-40">
    <NuxtImg height="200" cover :src="headerImageUrl" class="md:-mt-60" />
    <!-- <img height="200" cover :src="headerImageUrl" class="md:-mt-60" /> -->
  </div>
</template>
<style scoped></style>
