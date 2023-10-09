<script setup lang="ts">
  const { navlinksPrimary, navlinksSecondary, currentPath } = useNav()

  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'PrimaryNav',
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
  <div
    class="flex flex-col justify-center sm:space-y-0 space-y-4 sm:flex sm:flex-row sm:items-center sm:space-x-4"
  >
    <TheLogo class="mb-6 sm:hidden"></TheLogo>
    <ULink
      v-for="(navlink, index) in navlinksPrimary"
      :key="index"
      :label="navlink.text"
      :to="navlink.link"
      variant="link"
      class="hover:text-primary underline-offset-8"
      color="gray"
      active-class="text-primary underline"
      exact
      >{{ navlink.text }}</ULink
    >
  </div>
</template>
<style scoped></style>
