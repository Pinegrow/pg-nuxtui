<template>
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 h-screen"
    >
      <NavBar />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
