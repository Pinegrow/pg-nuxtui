<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const { optimizeImage, optimizeImages } = useOptimizeImage()
  const heroImageOptimized = optimizeImage(heroImageUrl)

  // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
  const responsiveHeroImages = computed(() => {
    return heroImageOptimized.imageSizes.srcset
      .split(', ')
      .filter((imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'))
  })

  const responsiveHeroImageSrc = computed(() => {
    return {
      'background-image': `url("${responsiveHeroImages.value[0]}")`,
    }
  })

  const responsiveHeroImageSrcImageSet = computed(() => {
    return {
      'background-image': `image-set(
      url("${responsiveHeroImages.value[0]}") 1x,
      url("${responsiveHeroImages.value[1]}") 2x)`,
    }
  })

  const responsiveHeroImageSrcImageSetFallback = computed(() => {
    return {
      'background-image': `-webkit-image-set(
      url("${responsiveHeroImages.value[0]}") 1x,
      url("${responsiveHeroImages.value[1]}") 2x)`,
    }
  })
</script>
<template>
  <section>
    <!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none z-0"
      :style="[
        responsiveHeroImageSrc,
        responsiveHeroImageSrcImageSet,
        responsiveHeroImageSrcImageSetFallback,
      ]"
    > -->
    <div
      class="bg-center bg-cover bg-no-repeat blur-none z-0 bg-design-image lg:bg-design-image-large"
    >
      <div
        class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
      >
        <div
          class="-mx-4 flex flex-wrap items-center justify-center mt-24 space-y-6 lg:space-y-0"
        >
          <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
            <h3
              class="dark:text-secondary-200 font-bold font-serif mb-1 text-secondary-600 uppercase lg:capitalize"
            >
              New Arrivals, Big Savings!
            </h3>
            <UButton
              label="Shop Now"
              to="/women"
              size="xl"
              trailing
              class="mt-4"
            >
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
