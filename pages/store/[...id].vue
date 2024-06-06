<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    name: 'store',
    // alias: '[...slug]',
    title: 'Store',
    description: `Shop 'til You Drop: Your E-Commerce Haven!`,
    navOrder: '3',
    hidden: true,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const { id: productId } = route.params

  const { fetchProduct } = await useProduct(+productId)
  const { title, price, description, image, rating, badge, shipping } =
    fetchProduct()

  useHead({
    title: title || '',
  })

  useServerSeoMeta({
    description: () => description || '',
  })

  const colors = [
    {
      id: 1,
      name: 'Gray',
    },
    {
      id: 2,
      name: 'Black',
    },
    {
      id: 3,
      name: 'White',
    },
    {
      id: 4,
      name: 'Blue',
    },
  ]

  const selected = ref(colors[0].id)

  const current = computed(() =>
    colors.find((color) => color.id === selected.value),
  )
</script>
<template>
  <section class="mx-4 my-16 product-details">
    <div class="flex justify-center max-h-96 xl:max-h-[600px]">
      <div class="-m-4 bg-white p-8 rounded-lg">
        <NuxtImg :src="image" class="max-h-full" />
        <!-- <img :src="image" class="max-h-full" /> -->
      </div>
    </div>
    <div class="mt-8 md:mt-0 md:mx-8">
      <div class="relative">
        <UBadge v-if="badge" :label="badge" class="-top-7 absolute"></UBadge>
        <h3>{{ title }}</h3>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="flex">
          <div>
            <StarsRate class="mt-0.5 w-24" :value="rating.rate"></StarsRate>
          </div>
          <div class="ml-2">
            <div class="text-sm">{{ rating.count }} reviews</div>
          </div>
        </div>
        <div class="md:mr-4">
          <span class="dark:text-primary-400 text-primary-500 text-xs">{{
            shipping
          }}</span>
        </div>
      </div>
      <div
        v-if="badge || shipping"
        class="flex items-center justify-between mt-4"
      >
        <div>
          <span class="font-bold text-xl">${{ price }}</span>
        </div>
        <div class="md:mr-4"><span>Best Deals Inc.</span></div>
      </div>
      <div>
        <div class="mt-4">
          <USelectMenu
            v-model="selected"
            :options="colors"
            option-attribute="name"
            value-attribute="id"
            size="xl"
          >
            <template #label
              ><span>{{ current.name }}</span>
            </template>
          </USelectMenu>
        </div>
        <div class="mt-4 w-full">
          <UButton label="Add To Cart" class="rounded-lg" size="lg" block>
            <span class="py-2 lg:text-lg">Add To Cart</span>
          </UButton>
        </div>
      </div>
      <div class="mt-8">
        <span>{{ description }}</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .product-details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'details';
  }
  @media (min-width: 768px) {
    .product-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: 'image details';
    }
  }
</style>
