import { ImageOptimized } from '@/types/image'
export const useOptimizeImage = () => {
  const img = useImage()

  const optimizeImage = (imageUrl, preset = '' /*, height = 800*/) => {
    const imageOptimized: ImageOptimized = {
      imageSizes: img.getSizes(imageUrl, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
          // height,
        },
        preset,
      }),
      imageSrc: img(imageUrl, {
        // height,
        quality: 70,
      }),
      imageLazySrc: img(imageUrl, {
        // width: height / 4,
        quality: 70,
      }),
      bgStyles: [],
    }

    // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
    const responsiveImages = computed(() => {
      return imageOptimized.imageSizes.srcset
        .split(', ')
        .filter((imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'))
    })

    const responsiveImageSrc = {
      'background-image': `url("${responsiveImages.value[0]}")`,
    }

    const responsiveImageSrcImageSet = {
      'background-image': `image-set(
    url("${responsiveImages.value[0]}") 1x,
    url("${responsiveImages.value[1]}") 2x)`,
    }

    const responsiveImageSrcImageSetFallback = {
      'background-image': `-webkit-image-set(
    url("${responsiveImages.value[0]}") 1x,
    url("${responsiveImages.value[1]}") 2x)`,
    }

    imageOptimized.bgStyles = [
      responsiveImageSrc,
      responsiveImageSrcImageSet,
      responsiveImageSrcImageSetFallback,
    ]

    return imageOptimized
  }

  const optimizeImages = (imageUrls, preset /*, height = 800*/) => {
    return imageUrls.map((imageUrl) => {
      return optimizeImage(imageUrl, preset /*, height = 800*/)
    })
  }

  return {
    optimizeImage,
    optimizeImages,
  }
}
