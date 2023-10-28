<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      value?: number
    }>(),
    {
      value: 0,
    },
  )

  const style = computed(() => ({
    'clip-path': `inset(0 ${(10 - props.value) * 10}% 0 0)`,
  }))
</script>
<template>
  <div class="aspect-auto relative">
    <NuxtImg src="/stars.webp" class="absolute inset-0" aria-hidden="true" />
    <NuxtImg
      src="/stars-filled.webp"
      class="absolute inset-0"
      aria-hidden="true"
      :style="style"
    />
  </div>
</template>
