<script setup lang="ts">
  import vueDesignerLogo from '@/assets/images/vue-designer.svg'
  const showTitle = ref(true)
</script>
<template>
  <div class="px-4 py-24 relative bg-primary-600 dark:bg-primary-200">
    <div class="container mx-auto flex flex-wrap items-center justify-center">
      <div class="mx-auto p-4 w-full lg:w-6/12">
        <div class="p-4 rounded-2xl shadow-xl">
          <div class="flex items-center justify-center pb-4 lg:justify-start">
            <h3 class="capitalize mb-0 text-primary-100 dark:text-primary-700">
              Feature Walkthrough
            </h3>
          </div>
          <div>
            <div
              v-if="showTitle"
              class="absolute flex items-center justify-center ml-2 my-0.5 z-10"
            >
              <img :src="vueDesignerLogo" height="28" width="28" />
              <span class="ml-1 mt-1 p-1 text-lg text-neutral-50"
                >Vue Designer - Quick Start</span
              >
            </div>
            <lite-youtube
              ref="youtube"
              videoid="1WDZdu6XwI8"
              title="Vue Designer - Quick Start"
              playlabel="Vue Designer - Quick Start"
              class="px-4 py-12 rounded"
              @click="showTitle = false"
            />
          </div>
        </div>
      </div>
      <div class="flex-col flex mx-auto p-4 w-full lg:w-6/12">
        <div class="flex flex-wrap sm:flex-nowrap">
          <div
            class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start lg:pl-8"
          >
            <ul class="text-center lg:mt-2 lg:text-left">
              <li class="mb-4">
                <UButton
                  to="https://pinegrow.com/docs/vue/"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Documentation</UButton
                >
              </li>
              <li class="mb-4">
                <UButton
                  to="https://www.youtube.com/@vuedesigner/playlists"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Video Tutorials</UButton
                >
              </li>
              <li class="mb-4">
                <UButton
                  to="https://pinegrow.com/docs/vue/support/"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Support</UButton
                >
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start lg:pl-8"
          >
            <ul class="text-center lg:mt-2 lg:text-left">
              <li class="mb-4">
                <UButton
                  to="https://vuedesigner.com"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Trial</UButton
                >
              </li>
              <li class="mb-4">
                <UButton
                  to="https://vuedesigner.com/#buy"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Purchase</UButton
                >
              </li>
              <li class="mb-4">
                <UButton
                  to="https://discord.gg/BYp45Nnu5T"
                  external
                  target="_blank"
                  variant="link"
                  class="!text-white dark:text-primary-800"
                  color="white"
                  >Community Forum</UButton
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
