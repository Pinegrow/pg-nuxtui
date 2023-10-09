<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ProfileActions',
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
  <div class="flex flex-nowrap items-center justify-center">
    <DarkModeSwitch></DarkModeSwitch>
    <UButton class="rounded-lg" variant="ghost">
      <UIcon name="i-material-symbols-shopping-bag" class="text-2xl" />
    </UButton>
    <UButton class="rounded-lg" variant="ghost">
      <UIcon name="i-material-symbols-favorite" class="text-2xl" />
    </UButton>
  </div>
</template>
<style scoped></style>
