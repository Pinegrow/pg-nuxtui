<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const { optimizeImage, optimizeImages } = useOptimizeImage()

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

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

  const avatarImageUrls = [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQyfHxwcm9maWxlfGVufDB8fHx8MTY4NzE2ODcyNnww&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1573495612522-d994e72e5f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE4fHxhZnJpY2FuJTIwY29tcHV0ZXIlMjB3b21hbnxlbnwwfHx8fDE2ODcxNjg5NzV8MA&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGF2YXRhcnxlbnwwfHx8fDE2OTUxMDA0OTV8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=40&h=40&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQyfHxwcm9maWxlfGVufDB8fHx8MTY4NzE2ODcyNnww&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1573495612522-d994e72e5f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE4fHxhZnJpY2FuJTIwY29tcHV0ZXIlMjB3b21hbnxlbnwwfHx8fDE2ODcxNjg5NzV8MA&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGF2YXRhcnxlbnwwfHx8fDE2OTUxMDA0OTV8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=40&h=40&fit=crop',
  ]

  const avatarImageUrlsOptimized = optimizeImages(avatarImageUrls, 'avatar')
</script>
<template>
  <section>
    <div
      class="bg-center bg-cover bg-no-repeat blur-none z-0"
      :style="[
        responsiveHeroImageSrc,
        responsiveHeroImageSrcImageSet,
        responsiveHeroImageSrcImageSetFallback,
      ]"
    >
      <div
        class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
      >
        <div
          class="-mx-4 flex flex-wrap items-center justify-center mt-24 space-y-6 lg:space-y-0"
        >
          <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
            <h4
              class="font-bold font-serif mb-1 text-secondary-600 dark:text-secondary-200 uppercase"
            >
              Welcome to
            </h4>
            <h1 class="capitalize leading-tight mb-2 text-white">
              Vue Designer
            </h1>
            <h5 class="mb-6 text-gray-50">
              A desktop drag-and-drop editor for Mac, Windows and Linux that
              lets you visually design your Vue apps.
            </h5>
            <UCard class="mt-4">
              <template #default>
                <div class="flex justify-center">
                  <UAvatarGroup :max="3" size="2xl">
                    <UAvatar
                      v-for="(avatar, index) in avatarImageUrlsOptimized"
                      :key="index"
                      :src="avatar.imageSrc"
                      size="xl"
                      alt="avatar"
                    ></UAvatar>
                  </UAvatarGroup>
                </div>
              </template>
            </UCard>
            <UButton
              label="Learn More!"
              to="https://vuedesigner.com"
              size="xl"
              trailing
              trailing-icon="i-material-symbols-open-in-new"
              target="_blank"
              class="!rounded-3xl mt-4 px-6 py-4"
            >
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
