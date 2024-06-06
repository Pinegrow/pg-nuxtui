<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'LaunchSale',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <section>
    <UCard>
      <div
        class="bg-clip-text bg-gradient-to-r from-purple-400 launch-sale-grid font-extrabold text-transparent to-primary-600"
      >
        <div class="flex lg:flex lg:items-center" style="grid-area: sale">
          <span
            class="-tracking-wide font-semibold text-3xl uppercase lg:text-center"
            >Early Adopter Launch Promo!</span
          >
        </div>
        <div
          class="justify-center lg:flex lg:items-center"
          style="grid-area: discount"
        >
          <span
            class="-tracking-wide font-bold text-6xl uppercase whitespace-nowrap lg:text-6xl"
            >50% Off*</span
          >
        </div>
        <div style="grid-area: categories" class="flex items-center">
          <ul
            class="-tracking-wide font-extrabold space-y-2 text-right uppercase w-full whitespace-nowrap sm:space-y-0 lg:flex lg:flex-wrap lg:justify-center lg:space-x-2"
          >
            <li>Fashion</li>
            <li>Beauty</li>
            <li>Kids</li>
            <li>Summer</li>
            <li>Home</li>
            <li>& More</li>
          </ul>
        </div>
      </div>
    </UCard>
  </section>
</template>
<style scoped>
  .launch-sale-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'discount categories' 'sale categories';
    gap: 20px;
    grid-area: sale;
  }
  @media (min-width: 1024px) {
    .launch-sale-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'sale discount categories';
      gap: 20px;
    }
  }
</style>
