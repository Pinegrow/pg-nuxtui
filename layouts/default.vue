<template>
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar class="fixed bg-white dark:bg-neutral-950 shadow z-10" />
      <div class="mt-24 shadow">
        <slot />
      </div>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
