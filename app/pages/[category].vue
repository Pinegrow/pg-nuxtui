<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'New Arrivals, Big Savings!',
    hidden: true,
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''

  useHead({
    title: () => capitalize(route.params.category),
  })

  useServerSeoMeta({
    description: () => capitalize(route.params.category),
  })

  const { category } = route.params

  const { fetchCategory } = await useProducts()
  const products = fetchCategory(category?.toString())

  const badges = [
    ...new Set(
      products
        .filter((product) => product.badge)
        .map((product) => product.badge),
    ),
  ]

  // const filteredBadges = useState('filteredBadges', () => {
  //   return new Set()
  // })
  const filteredBadges = useState(category?.toString() || 'all', () => {
    return new Set()
  })

  const toggleFilter = (badge) => {
    if (filteredBadges.value.has(badge)) {
      filteredBadges.value.delete(badge)
    } else {
      filteredBadges.value.add(badge)
    }
  }

  const filteredProducts = computed(() => {
    if (filteredBadges.value.size) {
      return products.filter((product) =>
        filteredBadges.value.has(product.badge),
      )
    } else {
      return products
    }
  })
</script>
<template>
  <div class="pb-16">
    <UContainer class="py-8">
      <section
        v-if="badges.length"
        class="flex items-center justify-center m-4"
      >
        <span class="font-bold text-sm">Filter Badges</span>
        <div class="ml-4 space-y-2">
          <UButton
            v-for="(badge, index) in badges"
            :key="index"
            :label="badge"
            :variant="filteredBadges.has(badge) ? 'soft' : 'outline'"
            class="mr-2"
            @click="toggleFilter(badge)"
          ></UButton>
        </div>
      </section>
      <section data-pg-name="Products" class="flex flex-wrap justify-center">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          v-bind="product"
        />
      </section>
    </UContainer>
  </div>
</template>
<style scoped></style>
