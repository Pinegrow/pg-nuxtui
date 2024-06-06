<script setup lang="ts">
  //...
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar />
      <main>
        <slot />
      </main>
      <TheFooter />
    </div>
    <!-- </div> -->
  </div>
</template>
<style></style>
