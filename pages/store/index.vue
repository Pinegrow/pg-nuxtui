<script setup lang="ts">
  definePageMeta({
    title: 'Store',
    navOrder: 2,
  })

  useHead({
    title: 'Store',
  })

  const data = await useProducts()
  const { products, categories } = data.value

  const filteredCategories = useState('filteredCategories', () => {
    return new Set()
  })

  const toggleFilter = (category) => {
    if (filteredCategories.value.has(category)) {
      filteredCategories.value.delete(category)
    } else {
      filteredCategories.value.add(category)
    }
  }

  const filteredProducts = computed(() => {
    if (filteredCategories.value.size) {
      return products.filter((product) =>
        filteredCategories.value.has(product.category),
      )
    } else {
      return products
    }
  })
</script>
<template>
  <div>
    <StoreHeader />
    <UContainer>
      <section class="flex items-center justify-center m-4">
        <span class="font-bold mt-2 text-sm">Filter Category</span>
        <div class="ml-4 space-y-2">
          <UButton
            v-for="(category, index) in categories"
            :key="index"
            :label="category"
            :variant="filteredCategories.has(category) ? 'soft' : 'outline'"
            class="mr-2"
            @click="toggleFilter(category)"
          ></UButton>
        </div>
      </section>
      <section data-pg-name="Products" class="flex flex-wrap justify-center">
        <ProductCard
          v-for="product in filteredProducts"
          :id="product.id"
          :key="product.id"
          :image="product.image"
          :price="product.price"
          :title="product.title"
          :badge="product.badge"
          :shipping="product.shipping"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped></style>
