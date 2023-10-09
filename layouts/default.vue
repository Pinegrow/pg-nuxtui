<template>
  <div>
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar />
      <slot />
    </div>
    <TheFooter></TheFooter>
  </div>
</template>
<style></style>
