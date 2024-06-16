<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'order-history',
    // alias: 'order-history',
    title: 'Order History',
    description: `Your Purchase Journey, Your Order History!`,
    navOrder: '8',
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>

<template>
  <div
    style="
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    "
  >
    <span style="color: #0198cd">order-history.vue (Nuxt 3.6)</span>
  </div>
</template>

<style scoped></style>
