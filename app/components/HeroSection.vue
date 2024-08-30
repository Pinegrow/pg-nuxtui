<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'
</script>
<template>
  <section>
    <BackgroundImageWrapper :image-url="heroImageUrl">
      <div
        class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
      >
        <div
          class="-mx-4 flex flex-wrap items-center justify-center mt-24 space-y-6 lg:space-y-0"
        >
          <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
            <h3
              class="dark:text-secondary-200 font-bold font-serif lg:capitalize mb-1 text-primary-600 uppercase"
            >
              New Arrivals, Big Savings!
            </h3>
            <UButton
              label="Shop Now"
              to="/women"
              size="xl"
              trailing
              class="mt-4"
            />
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
