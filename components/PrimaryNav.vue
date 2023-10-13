<script setup lang="ts">
  const { navlinksPrimary } = useNav()
  const { isMobileMenuOpen } = useMobileMenu()
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
      @click="isMobileMenuOpen = false"
      >{{ navlink.text }}</ULink
    >
  </div>
</template>
<style scoped></style>
