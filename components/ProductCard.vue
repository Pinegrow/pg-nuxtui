<script setup lang="ts">
  import type { Product } from '../types/store'
  const { id, title, price, image, badge, shipping } = defineProps<Product>()
</script>
<template>
  <NuxtLink
    class="m-4 relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
    :to="`/store/${id}`"
    ><span
      v-if="badge"
      class="absolute bg-primary font-serif p-1 right-0 rounded-bl-md rounded-br-none rounded-tl-none rounded-tr-md text-white text-xs z-10"
      >{{ badge }}</span
    >
    <UCard class="md:h-full">
      <template #header>
        <div class="flex justify-center">
          <div class="-m-4 bg-white h-64 p-6 rounded-lg">
            <NuxtImg class="max-h-full" :src="image" height="250" />
            <!-- <img v-if="image" :src="image" height="250" class="max-h-full" /> -->
          </div>
        </div>
      </template>
      <div>
        <span>{{ title }}</span>
        <div class="flex font-medium items-center justify-between mt-4">
          <span class="font-bold">${{ price }}</span
          ><span
            v-if="shipping"
            class="dark:text-primary-400 text-primary-500 text-xs"
            >{{ shipping }}</span
          >
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
<style scoped></style>
