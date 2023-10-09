<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheLogo',
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
  <ULink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <UIcon
      name="i-fluent-emoji-shopping-bags"
      size="40"
      class="text-4xl"
    ></UIcon>
    <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">NuCommerce</h5>
  </ULink>
</template>
<style scoped></style>
