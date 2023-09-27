<script setup lang="ts">
  import { Product } from '../types/store'
  const { id, title, price, image, imageOptimized, badge, shipping } =
    defineProps<Product>()
</script>
<template>
  <NuxtLink class="m-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/5" :to="`/store/${id}`">
    <UCard class="md:h-full">
      <template #header>
        <div class="relative">
          <UBadge
            v-if="badge"
            :label="badge"
            class="-right-6 -top-5 absolute rounded-br-none rounded-tl-none z-10"
          ></UBadge>
          <div class="flex justify-center">
            <div class="-m-4 bg-white h-64 p-6 rounded-lg">
              <!-- <img
                class="max-h-full"
                :src="imageOptimized.imageSrc"
                :srcset="imageOptimized.imageSizes.srcset"
                :sizes="imageOptimized.imageSizes.sizes"
                height="250"
              /> -->
              <img v-if="image" :src="image" height="250" />
            </div>
          </div>
        </div>
      </template>
      <div>
        <span>{{ title }}</span>
        <div class="flex font-medium items-center justify-between mt-4">
          <span class="font-bold">${{ price }}</span>
          <span
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
