<script setup lang="ts">
  import site from '@/site'
  const { name, logo } = site
</script>
<template>
  <ULink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <UIcon name="i-fluent-emoji-shopping-bags" class="text-4xl"></UIcon>
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ name }}
    </h6>
  </ULink>
</template>
<style scoped></style>
