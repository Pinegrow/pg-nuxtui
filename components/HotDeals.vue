<script setup lang="ts">
  const route = useRoute()
  const { category } = route.params

  const data = await useProducts()
  const { products: productsRaw } = data.value

  const { optimizeImage } = useOptimizeImage()
  const products = productsRaw
    .filter((product) => !category || product.category === category)
    .map((product) => {
      return {
        ...product,
        imageOptimized: optimizeImage(product.image),
      }
    })

  const productsWithBadges = products.filter((product) => product.badge)
</script>
<template>
  <div>
    <UContainer class="py-8">
      <div class="-tracking-wide flex font-bold justify-center text-5xl">
        <span class="text-center text-primary">Hot Deals</span>
        <UIcon name="i-twemoji-fire" class="ml-2"></UIcon>
      </div>
      <section
        data-pg-name="Products"
        class="flex flex-wrap justify-center mt-8"
      >
        <ProductCard
          v-for="(product, index) in productsWithBadges"
          :key="index"
          v-bind="product"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped></style>
